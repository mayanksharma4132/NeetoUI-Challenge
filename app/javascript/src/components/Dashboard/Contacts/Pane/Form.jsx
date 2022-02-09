import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Button, Pane } from "neetoui";
import { Input, Select } from "neetoui/formik";

import formValidationSchemas from "constants/formValidationSchemas";

import { ROLE } from "./constants";

import { updateContact, createContact } from "../mocks";

export default function NoteForm({ onClose, refetch, contact, isEdit }) {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async values => {
    try {
      setSubmitted(true);
      if (isEdit) {
        updateContact(contact.id, values);
      } else {
        createContact(values);
      }
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={contact}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={formValidationSchemas.contactsForm}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full flex-row justify-between">
              <Input
                required
                label="First Name"
                name="firstName"
                className="mr-2"
              />
              <Input
                required
                label="Last Name"
                name="lastName"
                className="ml-2"
              />
            </div>
            <Input
              required
              label="Email"
              name="email"
              className="w-full flex-grow-0"
            />
            <Select
              required
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              options={ROLE}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              icon={Check}
              label={isEdit ? "Update" : "Save Changes"}
              size="large"
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={e => {
                e.preventDefault();
                setSubmitted(true);
                handleSubmit();
              }}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
}
