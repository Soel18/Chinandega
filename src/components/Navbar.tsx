import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  CameraIcon,
  XMarkIcon,
  Bars3Icon,
  CircleStackIcon,
  ClipboardDocumentIcon,
  FingerPrintIcon,
  BookOpenIcon,
  MusicalNoteIcon,  
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  { name: "Historia", icon: BookOpenIcon, path: "/historia" },
  { name: "Economía", icon: CircleStackIcon, path: "/economia" },
  {
    name: "Cultura",
    icon: FingerPrintIcon,
    path: "/cultura",
    hasSubmenu: [{ name: "Música", icon: MusicalNoteIcon, path: "/musica" }]
  },
  { name: "Turismo", icon: CameraIcon, path: "/turismo" },
  { name: "Problemática", icon: ClipboardDocumentIcon, path: "/problematica" },
  { name: "Personajes", icon: ShieldCheckIcon, path: "/Personajes" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isCultureOpen, setIsCultureOpen] = useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) setOpen(false);
    });
  }, []);

  return (
    <div className="px-10 sticky top-0 z-50">
      <div className="mx-auto container">
        <MTNavbar
          blurred
          className="z-50 mt-1 relative border-0 pr-3 py-3 pl-6 
            bg-gradient-to-r from-green-500 via-green to-yellow-500
            shadow-lg rounded-b-xl"
        >
          <div className="flex items-center justify-between">
            <Typography
              as={Link}
              to="/"
              className="text-lg font-bold cursor-pointer text-gray-900"
            >
              INICIO
            </Typography>

            {/* Menú en desktop */}
            <ul className="ml-10 hidden items-center gap-8 lg:flex">
              {NAV_MENU.map(({ name, icon: Icon, path, hasSubmenu }) => (
                <li key={name} className="relative group">
                  <Link
                    to={path}
                    className="flex items-center gap-2 text-gray-900 hover:text-green-700 font-medium transition-all"
                    onClick={hasSubmenu ? () => setIsCultureOpen(!isCultureOpen) : undefined}
                  >
                    {Icon && <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />}
                    {name}
                  </Link>

                  {/* Submenú de Cultura */}
                  {hasSubmenu && isCultureOpen && (
                    <ul className="absolute left-0 mt-2 bg-white text-gray-900 shadow-md rounded-lg w-48 transition-transform transform opacity-0 group-hover:opacity-100 group-hover:translate-y-1">
                      {hasSubmenu.map((submenu) => (
                        <li key={submenu.name} className="hover:bg-green-500 hover:text-white transition-all">
                          <Link to={submenu.path} className="block px-4 py-2 flex items-center gap-2 font-bold">
                            <submenu.icon className="h-5 w-5" />
                            {submenu.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Botón de menú en móviles */}
            <IconButton
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>

          {/* Menú colapsable en móviles */}
          <Collapse open={open}>
            <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
              <ul className="flex flex-col gap-4">
                {NAV_MENU.map(({ name, icon: Icon, path, hasSubmenu }) => (
                  <li key={name} className="relative">
                    <Link
                      to={path}
                      className="flex w-full items-center gap-2 text-gray-900 hover:text-green-700 font-medium transition-all"
                      onClick={hasSubmenu ? () => setIsCultureOpen(!isCultureOpen) : undefined}
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                      {name}
                    </Link>

                    {/* Submenú en móvil */}
                    {hasSubmenu && isCultureOpen && (
                      <ul className="mt-2">
                        {hasSubmenu.map((submenu) => (
                          <li key={submenu.name} className="pl-4 hover:bg-green-500 hover:text-white transition-all">
                            <Link to={submenu.path} className="block py-2 flex items-center gap-2 font-bold">
                              <submenu.icon className="h-5 w-5" />
                              {submenu.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Collapse>
        </MTNavbar>
      </div>
    </div>
  );
}

export default Navbar;
