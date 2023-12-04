"use client";
import React from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { useTheme } from "@/components/CustomTheme/CustomTheme";

const OptionsNavbar = () => {
  const { toggleDarkMode, darkMode } = useTheme();
  return (
    <IconButton onClick={toggleDarkMode} variant="soft" highContrast>
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};

export default OptionsNavbar;
