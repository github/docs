import { useState, useEffect } from 'react'
import Cookies from '../../frame/components/lib/cookies'

// Enum representing CSS color modes
enum CssColorMode {
  auto = 'auto', // Detects user's OS theme preference
  light = 'light', // Forces light theme
  dark = 'dark', // Forces dark theme
}

// Enum representing component color modes (maps to CssColorMode)
enum ComponentColorMode {
  auto = 'auto', // Automatically adjusts component theme
  day = 'day', // Light theme for components
  night = 'night', // Dark theme for components
}

// Enum for supported theme variants (used in both CSS and component themes)
enum SupportedTheme {
  light = 'light', // Light theme
  dark = 'dark', // Dark theme
  dark_dimmed = 'dark_dimmed', // Dimmed dark theme
  dark_high_contrast = 'dark_high_contrast', // High contrast dark theme
}

// Type for managing CSS color theme settings
type CssColorTheme = {
  colorMode: CssColorMode
  lightTheme: SupportedTheme
  darkTheme: SupportedTheme
}

// Type for managing component-specific color theme settings
type ComponentColorTheme = {
  colorMode: ComponentColorMode
  dayScheme: SupportedTheme
  nightScheme: SupportedTheme
}

// Consolidated theme settings for both CSS and component themes
type ColorModeThemes = {
  css: CssColorTheme
  component: ComponentColorTheme
}

// Default theme settings for CSS
export const defaultCSSTheme: CssColorTheme = {
  colorMode: CssColorMode.auto,
  lightTheme: SupportedTheme.light,
  darkTheme: SupportedTheme.dark,
}

// Default theme settings for components
export const defaultComponentTheme: ComponentColorTheme = {
  colorMode: ComponentColorMode.auto,
  dayScheme: SupportedTheme.light,
  nightScheme: SupportedTheme.dark,
}

// Mapping CSS color modes to component color modes for consistency
const cssColorModeToComponentColorMode: Record<CssColorMode, ComponentColorMode> = {
  [CssColorMode.auto]: ComponentColorMode.auto,
  [CssColorMode.light]: ComponentColorMode.day,
  [CssColorMode.dark]: ComponentColorMode.night,
}

// Filters the CSS color mode, ensuring it's a valid value
function filterMode(mode = ''): CssColorMode | undefined {
  if (Object.values<string>(CssColorMode).includes(mode)) {
    return mode as CssColorMode
  }
}

// Filters the supported theme, ensuring it's a valid theme name or color mode
function filterTheme({ name = '', color_mode = '' } = {}): SupportedTheme | undefined {
  if (Object.values<string>(SupportedTheme).includes(name)) {
    return name as SupportedTheme
  }
  if (Object.values<string>(SupportedTheme).includes(color_mode)) {
    return color_mode as SupportedTheme
  }
}

// Parses the CSS theme from a cookie value, applying default settings if parsing fails
export function getCssTheme(cookieValue = ''): CssColorTheme {
  if (!cookieValue) return defaultCSSTheme
  try {
    const parsed = JSON.parse(cookieValue)
    const { color_mode, light_theme, dark_theme } = parsed
    return {
      colorMode: filterMode(color_mode) || defaultCSSTheme.colorMode,
      lightTheme: filterTheme(light_theme) || defaultCSSTheme.lightTheme,
      darkTheme: filterTheme(dark_theme) || defaultCSSTheme.darkTheme,
    }
  } catch (err) {
    // Only log the error in development mode
    if (process.env.NODE_ENV === 'development') {
      console.warn("Unable to parse 'color_mode' cookie", err)
    }
    return defaultCSSTheme
  }
}

// Converts the CSS theme to a component-compatible theme
export function getComponentTheme(cookieValue = ''): ComponentColorTheme {
  const { colorMode, lightTheme, darkTheme } = getCssTheme(cookieValue)
  return {
    colorMode: cssColorModeToComponentColorMode[colorMode], // Convert CSS color mode to component mode
    dayScheme: lightTheme, // Day scheme uses the light theme
    nightScheme: darkTheme, // Night scheme uses the dark theme
  }
}

// Custom hook to manage the current theme for both CSS and components
export function useTheme() {
  const [theme, setTheme] = useState<ColorModeThemes>({
    css: defaultCSSTheme,
    component: defaultComponentTheme,
  })

  useEffect(() => {
    // The setTimeout ensures that the user's theme preference is applied
    // after any Primer React theme-related changes.
    // This is a workaround for a known timing issue in Primer React.
    setTimeout(() => {
      const cookieValue = Cookies.get('color_mode') // Fetch the user's theme from cookies
      const css = getCssTheme(cookieValue) // Parse the CSS theme from the cookie
      const component = getComponentTheme(cookieValue) // Convert it to a component-compatible theme
      setTheme({ css, component }) // Update the theme state with the fetched theme
    })
  }, []) // Run only once when the component is mounted

  return { theme } // Return the current theme object
}
