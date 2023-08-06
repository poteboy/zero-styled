import { toCssUnit } from "./toCSS";
import { FontKeys } from "./keys";
import { ResponsiveStyle, CSSProperties } from "./types";
import { applyResponsiveStyles } from "./responsive";
import { theme } from "@kuma-ui/sheet";

export type FontProps = Partial<
  CSSProperties<"font"> &
    CSSProperties<"fontFamily"> &
    CSSProperties<"fontFeatureSettings"> &
    CSSProperties<"fontKerning"> &
    CSSProperties<"fontLanguageOverride"> &
    CSSProperties<"fontOpticalSizing"> &
    CSSProperties<"fontPalette"> &
    CSSProperties<"fontSize", true> &
    CSSProperties<"fontSizeAdjust"> &
    CSSProperties<"fontStretch"> &
    CSSProperties<"fontStyle"> &
    CSSProperties<"fontSynthesis"> &
    CSSProperties<"fontVariant"> &
    CSSProperties<"fontVariantAlternates"> &
    CSSProperties<"fontVariantCaps"> &
    CSSProperties<"fontVariantEastAsian"> &
    CSSProperties<"fontVariantEmoji"> &
    CSSProperties<"fontVariantLigatures"> &
    CSSProperties<"fontVariantNumeric"> &
    CSSProperties<"fontVariantPosition"> &
    CSSProperties<"fontVariationSettings"> &
    CSSProperties<"fontWeight", true>
>;

const fontMappings: Record<FontKeys, string> = {
  font: "font",
  fontFamily: "font-family",
  fontFeatureSettings: "font-feature-settings",
  fontKerning: "font-kerning",
  fontLanguageOverride: "font-language-override",
  fontOpticalSizing: "font-optical-sizing",
  fontPalette: "font-palette",
  fontSize: "font-size",
  fontSizeAdjust: "font-size-adjust",
  fontStretch: "font-stretch",
  fontStyle: "font-style",
  fontSynthesis: "font-synthesis",
  fontVariant: "font-variant",
  fontVariantAlternates: "font-variant-alternates",
  fontVariantCaps: "font-variant-caps",
  fontVariantEastAsian: "font-variant-east-asian",
  fontVariantEmoji: "font-variant-emoji",
  fontVariantLigatures: "font-variant-ligatures",
  fontVariantNumeric: "font-variant-numeric",
  fontVariantPosition: "font-variant-position",
  fontVariationSettings: "font-variation-settings",
  fontWeight: "font-weight",
};

export const font = (props: FontProps): ResponsiveStyle => {
  let baseStyles = "";
  const mediaStyles: ResponsiveStyle["media"] = {};

  for (const key in fontMappings) {
    const cssValue = props[key as FontKeys];
    if (cssValue != undefined) {
      const property = fontMappings[key as FontKeys];

      const userTheme = theme.getUserTheme();
      const converter = (value: string | number): string | number => {
        if (property === "fontFamily") {
          if (userTheme.fonts) {
            let newValue = value;
            for (const key in userTheme) {
              if (value === key) {
                newValue = userTheme.fonts[key];
                break;
              }
            }
            return newValue;
          }
        } else if (property === "fontSize") {
          if (userTheme.fontSizes) {
            let newValue = toCssUnit(value);
            for (const key in userTheme) {
              if (value === key) {
                newValue = toCssUnit(userTheme.fontSizes[key]);
                break;
              }
            }
            return newValue;
          }
          return toCssUnit(value);
        } else if(property === "fontWeight") {
          if (userTheme.fontWeights) {
            let newValue = value;
            for (const key in userTheme) {
              if (value === key) {
                newValue = userTheme.fontWeights[key];
                break;
              }
            }
            return newValue;
          }
        } else if(property === "lineHeight") {
          if (userTheme.lineHeights) {
            let newValue = value;
            for (const key in userTheme) {
              if (value === key) {
                newValue = userTheme.lineHeights[key];
                break;
              }
            }
            return newValue;
          }
        } else if (property === "letterSpacing") {
          if (userTheme.letterSpacings) {
            let newValue = value;
            for (const key in userTheme) {
              if (value === key) {
                newValue = userTheme.letterSpacings[key];
                break;
              }
            }
            return newValue;
          }
        }
        return value;
      };

      const responsiveStyles = applyResponsiveStyles(
        property,
        cssValue,
        converter
      );
      baseStyles += responsiveStyles.base;
      for (const [breakpoint, css] of Object.entries(responsiveStyles.media)) {
        if (mediaStyles[breakpoint]) mediaStyles[breakpoint] += css;
        else mediaStyles[breakpoint] = css;
      }
    }
  }
  return { base: baseStyles, media: mediaStyles };
};
