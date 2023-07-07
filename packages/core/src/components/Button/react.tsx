import { StyledProps, PseudoProps } from "@kuma-ui/system";
import React, { ReactNode } from "react";
import {
  As,
  ComponentWithAs,
  MergeWithAs,
  PropsOf,
  ComponentProps,
} from "../types";
import { Box } from "../Box";
import { theme } from "@kuma-ui/sheet";

type ButtonProps = ComponentProps<"Button">;

type ButtonComponent<T extends As = "button"> = ComponentWithAs<T, ButtonProps>;

/**
 * Button is a clickable component used to trigger actions or events in a Kuma UI application.
 *
 * @see — Further documentation will be available in the future.
 */
const Button: ButtonComponent = <T extends As = "button">({
  as: Component = "button",
  children,
  ...props
}: MergeWithAs<PropsOf<T>, ButtonProps>) => {
  const variant = props.variant
    ? theme.getVariants("Button")?.variants?.[props.variant]
    : {};
  return <Box as={Component} {...variant} {...props} children={children} />;
};

export { Button, type ButtonComponent, ButtonProps };
