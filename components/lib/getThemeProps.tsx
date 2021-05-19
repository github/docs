export const defaultCSSThemeProps = {
  colorMode: 'auto', // light, dark, auto
  nightScheme: 'dark',
  dayScheme: 'light',
}
export const defaultThemeProps = {
  colorMode: 'auto', // day, night, auto
  nightScheme: 'dark',
  dayScheme: 'light',
}

const cssColorModeToJs: Record<string, string> = {
  auto: 'auto',
  light: 'day',
  dark: 'night',
}

export const getThemeProps = (req: any, mode?: 'css') => {
  let cookieValue: {
    color_mode?: 'auto' | 'light' | 'dark'
    dark_theme?: { name: string }
    light_theme?: { name: string }
  } = {}
  const defaultProps = mode === 'css' ? defaultCSSThemeProps : defaultThemeProps

  if (req.cookies.color_mode) {
    try {
      cookieValue = JSON.parse(decodeURIComponent(req.cookies.color_mode))
    } catch {
      // do nothing
    }
  }

  return {
    // the cookie uses primer/css color_mode, sometimes we need to convert that to a primer/components compatible version
    colorMode:
      (mode === 'css' ? cookieValue.color_mode : cssColorModeToJs[cookieValue.color_mode || '']) ||
      defaultProps.colorMode,
    nightScheme: cookieValue.dark_theme?.name || defaultProps.nightScheme,
    dayScheme: cookieValue.light_theme?.name || defaultProps.dayScheme,
  }
}
