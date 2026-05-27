# Color Schemes

This module manages the application of color themes (light, dark, high contrast, etc.) to the GitHub Docs site. It ensures that the documentation matches the user's preferred color scheme as configured on GitHub.com.

## Purpose & Scope

The primary goal is to read the user's color preference from a cookie and apply the correct theme context to the React application. This supports:
- **Modes**: Light, Dark, Auto (system preference).
- **Themes**: Specific variations like "Dark Dimmed" or "Dark High Contrast".
- **Compatibility**: Bridging the gap between raw CSS class names and Primer React component props.

## Architecture

The core logic is contained within `src/color-schemes/components/useTheme.ts`.

### The `color_mode` Cookie

The site relies on a cookie named `color_mode` to determine the user's preference. This cookie is typically set by the main GitHub application and shared with the docs subdomains. The cookie value is a JSON string containing:
- `color_mode`: The overall mode (`light`, `dark`, `auto`).
- `light_theme`: The specific theme to use when in light mode.
- `dark_theme`: The specific theme to use when in dark mode.

### `useTheme` Hook

The `useTheme` hook is the main entry point. It performs the following steps:
1. **Reads the Cookie**: Parses the `color_mode` cookie safely.
2. **Normalizes Data**: Validates the values against supported enums (`SupportedTheme`, `CssColorMode`).
3. **Formats for Consumers**: Returns two distinct theme objects:
   - `css`: For applying global CSS classes (uses `light`/`dark`).
   - `component`: For passing to Primer React's `ThemeProvider` (uses `day`/`night`).

### Mapping Logic

Primer React uses slightly different terminology than the underlying CSS or the cookie schema. The module handles this translation:
- CSS `light` -> Component `day`
- CSS `dark` -> Component `night`

## Setup & Usage

To access the current theme in a component:

```typescript
import { useTheme } from '@/color-schemes/components/useTheme'

const MyComponent = () => {
  const { theme } = useTheme()
  
  // Access CSS-friendly values
  console.log(theme.css.colorMode) 
  
  // Access Primer-friendly values
  console.log(theme.component.dayScheme)
}
```

This hook is primarily used at the root of the application (e.g., in `src/frame/components/Page.tsx` or `_app.tsx`) to wrap the content in a `ThemeProvider`.

## Dependencies

- **`js-cookie`**: Used via `src/frame/components/lib/cookies` to read the browser cookie.
- **Primer React**: The output format is specifically designed to satisfy Primer React's theming requirements.

## Ownership

- **Team**: `@github/docs-engineering`

## Current State & Known Issues

- **Hydration Mismatch / Flash of Unstyled Content**: Since the theme is read from a cookie on the client side (in `useEffect`), there can be a brief moment where the default theme is applied before the user's preference loads.
- **Race Condition Workaround**: There is a `setTimeout` hack in `useTheme.ts` to delay the theme application. This is necessary to prevent Primer React's internal logic from overriding the user's preference with `auto` on initial load.
  - *Reference*: [Primer React Issue #2229](https://github.com/primer/react/issues/2229)
- **Future**: The long-term goal is to rely entirely on CSS variables, removing the need for complex JavaScript state management for theming.