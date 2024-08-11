import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";

import { prefetch } from "astro:prefetch";
import { Divider } from "@nextui-org/react";

export default function Nav(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    prefetch("/", { with: "fetch" });
    prefetch("/projects", { with: "fetch" });
  }, []);

  const menuItems = [
    { name: "Home", route: "/" },
    { name: "About", route: "about" },
    { name: "Projects", route: "projects" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-transparent font-space"
      isBlurred={false}
    >
      <NavbarContent className="gap-4 flex-grow">
        <NavbarBrand className="flex-grow-0">
          <a
            title={"home"}
            href={`/`}
            data-astro-prefetch
            // onMouseOver={onHover}
            className="font-bold font-space text-3xl"
          >
            ANDO
          </a>
        </NavbarBrand>

        {menuItems.map((item) => (
          <NavbarItem className="text-xl hidden sm:flex">
            <a
              title={item.name}
              href={`${item.route}`}
              data-astro-prefetch
              // onMouseOver={onHover}
            >
              {item.name}
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="!flex-grow-0 hidden sm:flex">
        {props?.children}
      </NavbarContent>

      <NavbarContent className="!flex-grow-0 ">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <>
            <NavbarMenuItem>
              <a title={item.name} href={`${item.route}`} data-astro-prefetch>
                {item.name}
              </a>
            </NavbarMenuItem>
            {index < menuItems.length - 1 && <Divider />}
          </>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
