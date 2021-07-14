import React from "react";

import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu,
  MenuHeader,
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { productFilterByCategory } from "../utils/helper";
import { ProductContext } from "../context/ProductContext";

export default function Header() {
  const { setContextStateProducts, originalproduct } = React.useContext(
    ProductContext
  );
  const filterByCategories = (category) => {
    const {
      saleproduct,
      specialproduct,
      otherproduct,
    } = productFilterByCategory([...originalproduct], category);
    setContextStateProducts(saleproduct, specialproduct, otherproduct);
  };
  return (
    <>
      <MenuHeader className="menu-header">Products of the shop</MenuHeader>
      <div className="format-menu">
        <Menu
          menuButton={
            <MenuButton className="menu-button">
              Click for categories
            </MenuButton>
          }
        >
          {/* <MenuItem
            label="home_electronics"
            onClick={() => filterByCategories("home_electronics")}
          >
            electronics
          </MenuItem> */}

          <SubMenu label="Home">
            <SubMenu label="Electronics">
              <MenuItem onClick={() => filterByCategories("home_electronics")}>
                PC, TV and Phone
              </MenuItem>
            </SubMenu>
          </SubMenu>

          <SubMenu label="Outfit">
            <SubMenu label="Accessories">
              <MenuItem onClick={() => filterByCategories("accessories")}>
                Watches, Bag and Camera
              </MenuItem>
            </SubMenu>
          </SubMenu>

          <SubMenu label="Machinery">
            <SubMenu label="Automobiles">
              <MenuItem onClick={() => filterByCategories("automobiles")}>
                Bikes, Cars and Van
              </MenuItem>
            </SubMenu>
          </SubMenu>

          <SubMenu label="Musical and Sound">
            <SubMenu label="Instruments and devices">
              <MenuItem onClick={() => filterByCategories("music_and_sound")}>
                Guitar, mike and speakers
              </MenuItem>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    </>
  );
}
