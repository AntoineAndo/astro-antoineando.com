import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import ThemeToggle from "./ThemeToggle";
import { Link } from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Projects", route: "projects" },
    { name: "About" },
    { name: "Services" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-transparent font-space"
    >
      <NavbarContent className="gap-4 flex-grow">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand className="flex-grow-0">
          <Link title={"home"} href={`/`} color="foreground">
            <p className="font-bold font-space text-3xl">ANDO</p>
          </Link>
        </NavbarBrand>

        {menuItems.map((item) => (
          <NavbarItem className="text-xl hidden sm:flex ">
            <Link title={item.name} href={`${item.route}`} color="foreground">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="!flex-grow-0 hidden sm:flex">
        <ThemeToggle />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem>{item.name}</NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
