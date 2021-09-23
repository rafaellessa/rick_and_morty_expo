import React from "react";
import { ReactNode } from "react";

import { LinearGradient } from "expo-linear-gradient";
import theme from "../../global/theme";

interface IBackground {
  children: ReactNode;
  colors?: string[];
}

const Background: React.FC<IBackground> = ({ children, colors }) => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={
        colors
          ? colors
          : [
              theme.colors.gradientPrimary,
              theme.colors.gradientSecondary,
              theme.colors.gradientTerciary,
            ]
      }
    >
      {children}
    </LinearGradient>
  );
};

export default Background;
