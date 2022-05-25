export const defaultCSSTheme = {
  colorMode: 'auto', // light, dark, auto
  nightTheme: 'dark',
  dayTheme: 'light',
}

export const defaultComponentTheme = {
  colorMode: 'auto', // day, night, auto
  nightTheme: 'dark',
  dayTheme: 'light',
}

const cssColorModeToComponentColorMode = {
  auto: 'auto',
  light: 'day',
  dark: 'night',
}

const supportedThemes = ['light', 'dark', 'dark_dimmed']

/*
 * Our version of primer/css is out of date, so we can only support known themes.
 * For the least jarring experience possible, we fallback to the color_mode (light / dark) if provided by the theme, otherwise our own defaults
 */
function getSupportedTheme(theme, fallbackTheme) {
  if (!theme) {
    return fallbackTheme
  }

  return supportedThemes.includes(theme.name) ? theme.name : theme.color_mode
}

/*
 * Returns theme for consumption by either primer/css or primer/components
 * based on the cookie and/or fallback values
 */
export function getTheme(req, cssMode = false) {
  const cookieValue = {}

  const defaultTheme = cssMode ? defaultCSSTheme : defaultComponentTheme

  if (req.cookies?.color_mode) {
    try {
      const parsed = JSON.parse(decodeURIComponent(req.cookies.color_mode))
      cookieValue.color_mode = parsed.color_mode
      cookieValue.dark_theme = parsed.dark_theme
      cookieValue.light_theme = parsed.light_theme
    } catch (err) {
      if (process.env.NODE_ENV !== 'test') {
        console.warn("Unable to parse 'color_mode' cookie", err)
      }
    }
  }

  // The cookie value is a primer/css color_mode. sometimes we need to convert that to a primer/components compatible version
  const colorMode =
    (cssMode
      ? cookieValue.color_mode
      : cssColorModeToComponentColorMode[cookieValue.color_mode || '']) || defaultTheme.colorMode

  return {
    colorMode,
    nightTheme: getSupportedTheme(cookieValue.dark_theme, defaultTheme.nightTheme),
    dayTheme: getSupportedTheme(cookieValue.light_theme, defaultTheme.dayTheme),
  }
}
