type ThemeT = { name: string; color_mode: string }

const defaultCSSThemeProps = {
  colorMode: 'auto', // light, dark, auto
  nightTheme: 'dark',
  dayTheme: 'light',
}

export const defaultComponentThemeProps = {
  colorMode: 'auto', // day, night, auto
  nightTheme: 'dark',
  dayTheme: 'light',
}

const cssColorModeToComponentColorMode: Record<string, string> = {
  auto: 'auto',
  light: 'day',
  dark: 'night',
}

const supportedThemes = ['light', 'dark', 'dark_dimmed']

/*
 * Our version of primer/css is out of date, so we can only support known themes.
 * For the least jarring experience possible, we fallback to the color_mode (light / dark) if provided by the theme, otherwise our own defaults
 */
function getSupportedTheme(theme: ThemeT | undefined, fallbackTheme: string) {
  if (!theme) {
    return fallbackTheme
  }

  return supportedThemes.includes(theme.name) ? theme.name : theme.color_mode
}

/*
 * Returns theme props for consumption by either primer/css or primer/components
 * based on the cookie and/or fallback values
 */
export function getThemeProps(req: any, mode?: 'css') {
  let cookieValue: {
    color_mode?: 'auto' | 'light' | 'dark'
    dark_theme?: ThemeT
    light_theme?: ThemeT
  } = {}
  const defaultThemeProps = mode === 'css' ? defaultCSSThemeProps : defaultComponentThemeProps

  if (req.cookies?.color_mode) {
    try {
      cookieValue = JSON.parse(decodeURIComponent(req.cookies.color_mode))
    } catch {
      // do nothing
    }
  }

  // The cookie value is a primer/css color_mode. sometimes we need to convert that to a primer/components compatible version
  const colorMode =
    (mode === 'css'
      ? cookieValue.color_mode
      : cssColorModeToComponentColorMode[cookieValue.color_mode || '']) ||
    defaultThemeProps.colorMode

  return {
    colorMode,
    nightTheme: getSupportedTheme(cookieValue.dark_theme, defaultThemeProps.nightTheme),
    dayTheme: getSupportedTheme(cookieValue.light_theme, defaultThemeProps.dayTheme),
  }
}
