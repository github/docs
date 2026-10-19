# Tools & Platforms

This module manages the "Tool Picker" and "Platform Picker" features, which allow users to toggle content based on their preferred environment (e.g., "GitHub CLI" vs. "Web UI") or operating system (e.g., "macOS" vs. "Windows").

## Purpose & Scope

The primary goal is to provide a personalized reading experience by:
- **Filtering Content**: Showing only the instructions relevant to the user's selected tool or OS.
- **Persisting Preferences**: Remembering the user's choice across the site.
- **Analytics**: Tracking which tools are most popular to inform content strategy.

## Architecture

### Data Definitions (`src/tools/lib`)

The available options are defined in static configuration files:
- **`all-tools.ts`**: Maps internal IDs (e.g., `cli`, `webui`) to display names. The order of keys in this file determines the display order in the UI, often sorted by usage analytics.
- **`all-platforms.ts`**: Defines operating systems (Mac, Windows, Linux).
- **`os-download.ts`**: Detects the reader's OS and CPU architecture for OS-aware download buttons. Uses User-Agent Client Hints when available and falls back to the user agent string.

### Components (`src/tools/components`)

The UI is built with React components that interact with the global application state:
- **`ToolPicker.tsx`**: The dropdown or tab interface for selecting a tool.
- **`PlatformPicker.tsx`**: The interface for selecting an operating system.
- **`InArticlePicker.tsx`**: A specialized picker that appears within the article body (often used for "Prerequisites" sections).
- **`OsDownloadLink.tsx`**: Renders links with the `js-os-download` class. After hydration, it swaps `href` to the matching `data-os-download-<key>` attribute and the label to "Download for {os}". If detection fails, the link keeps its original `href`. See `data/reusables/copilot/github-app-download-button.md` for an example.

### OS-aware download links

Add the `js-os-download` class and one or more of these data attributes to a link in Markdown or a reusable:

| Attribute | Used for |
| --- | --- |
| `data-os-download-mac` | macOS on Apple silicon, and macOS when the architecture is unknown |
| `data-os-download-mac-intel` | macOS on Intel |
| `data-os-download-windows` | Windows on x64, and Windows when the architecture is unknown |
| `data-os-download-windows-arm` | Windows on Arm |
| `data-os-download-linux` | Linux on x64, and Linux when the architecture is unknown |
| `data-os-download-linux-arm` | Linux on Arm |

Wrap the label text in `<span class="js-os-download-label">` to have it replaced with "Download for {os}". iOS, Android, ChromeOS, and missing attributes keep the original `href`.

### State Management

When a user selects a tool, the application:
1.  Updates the local React state.
2.  Persists the choice via cookies so it applies to future page loads.
3.  Emits a tracking event (`docs_v0_preference_event`) to log the usage.

## Setup & Usage

### Adding a New Tool

1.  Open `src/tools/lib/all-tools.ts`.
2.  Add a new key-value pair to the `allTools` object:
    ```typescript
    export const allTools: ToolsMapping = {
      // ... existing tools
      my_new_tool: 'My New Tool',
    }
    ```
3.  Ensure the content uses the corresponding Liquid tag or Markdown tab syntax to conditionally render content for `my_new_tool`.

### Using the Picker in Content

Content authors use specific Markdown/Liquid structures to create tabbed interfaces. The `ToolPicker` component automatically detects these structures and renders the appropriate UI.

## Scripts

### `liquid-markdown-tables`

Located in `src/tools/scripts/liquid-markdown-tables`, this CLI tool helps refactor Markdown tables that use Liquid `ifversion` tags. It converts legacy/broken table syntax into a format that renders correctly.

**Usage:**
```bash
npm run liquid-markdown-tables -- convert content/path/to/article.md
```

## Ownership

- `#technical-content`
- **Content Strategy**: The list of supported tools is maintained in collaboration with the Content team based on product requirements.

## Current State & Next Steps

- **Current State**: The tools and platforms picker module is stable and actively maintained. Core features are complete and in regular use across the site.
- **Known Limitations**: Some legacy articles may not fully support picker functionality due to outdated Markdown or Liquid structures. Analytics integration is basic and may be expanded in the future.
- **Next Steps**: Planned improvements include enhanced analytics reporting, better support for edge cases in content rendering, and ongoing collaboration with the Content team to add new tools and platforms as needed.
