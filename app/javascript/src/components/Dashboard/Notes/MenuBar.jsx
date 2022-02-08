import React from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";
import PropTypes from "prop-types";

const Menu = ({ showMenu }) => (
  <MenuBar showMenu={showMenu} title="Notes">
    <MenuBar.Block label="All" count={13} active />
    <MenuBar.Block label="Users" count={2} />
    <MenuBar.Block label="Leads" count={7} />
    <MenuBar.Block label="Visitors" count={4} />

    <MenuBar.SubTitle
      iconProps={[
        {
          icon: Search,
        },
      ]}
    >
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Segments
      </Typography>
    </MenuBar.SubTitle>
    <MenuBar.Block label="Europe" count={80} />
    <MenuBar.Block label="Middle-East" count={60} />
    <MenuBar.Block label="Asia" count={60} />
    <MenuBar.SubTitle
      iconProps={[
        {
          icon: Settings,
        },
        {
          icon: Plus,
        },
        {
          icon: Search,
        },
      ]}
    >
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Tags
      </Typography>
    </MenuBar.SubTitle>
    <MenuBar.Block label="Sales" count={80} />
    <MenuBar.Block label="Finance" count={60} />
    <MenuBar.Block label="User Experience" count={60} />
  </MenuBar>
);

Menu.propTypes = {
  showMenu: PropTypes.bool,
};

export default Menu;
