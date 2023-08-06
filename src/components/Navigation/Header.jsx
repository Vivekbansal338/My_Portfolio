import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  Avatar,
  NavbarMenuToggle,
} from "@nextui-org/react";
import headerlogo from "../../assets/headerlogo.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);

  const menuItems = ["Home", "Skills", "Projects", "About", "Contact"];
  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarBrand className="flex flex-row justify-center md:justify-start">
        <img src={headerlogo} alt="logo" className="w-10 h-10 text-center" />
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`} isActive={index === active}>
            <Link
              color={index === active ? "secondary" : "foreground"}
              href={`#${item.toLowerCase()}`}
              onClick={() => setActive(index)}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Avatar
            isBordered
            as={Link}
            href="#home"
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="w-1/2 h-full">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}-menu`} isActive={index === active}>
            <Link
              color={index === active ? "secondary" : "foreground"}
              href={`#${item.toLowerCase()}`}
              onClick={() => {
                setActive(index);
                setIsMenuOpen(false);
              }}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
