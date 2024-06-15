import React from "react";
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

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [{ name: "Home" }, { name: "About" }, { name: "Services" }];

  return (
    <Navbar
      client:visible
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black text-white font-space"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand>
          <p className="font-bold font-space text-3xl">ANDO</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4">
        {menuItems.map((item) => (
          <NavbarItem className="text-xl">{item.name}</NavbarItem>
        ))}
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
