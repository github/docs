# Translation Error Comments

This feature adds HTML comments to help translators understand why their translations fall back to English on the production site.

## Overview

When translation errors occur (Liquid syntax errors, YAML frontmatter issues, unknown variables), the system previously fell back to English content silently. Now, HTML comments are added to provide debugging information for translators.

## How It Works

When a translation fails, an HTML comment is automatically added before the fallback English content:

```html
<!-- TRANSLATION_FALLBACK prop=title type=ParseError file=/content/article.md line=5 col=12 msg="Unknown tag 'badtag'" -->
<h1>Getting started with GitHub</h1>
```

## Comment Format

Comments include the following information:

- `TRANSLATION_FALLBACK` - Searchable tag to identify fallback comments
- `prop=<property>` - Which property failed (title, intro, markdown, etc.)
- `type=<errorType>` - Type of error (ParseError, RenderError, TokenizationError, etc.)
- `file=<filepath>` - File where the error occurred (when available)
- `line=<number>` - Line number of the error (when available)
- `col=<number>` - Column number of the error (when available)  
- `msg="<message>"` - Sanitized error message with debugging hints

## Error Types

### Liquid Errors
- **ParseError**: Syntax errors in Liquid tags (malformed brackets, unknown tags)
- **RenderError**: Runtime errors (unknown variables, missing data)
- **TokenizationError**: Issues parsing Liquid tokens

### Other Errors
- **TitleFromAutotitleError**: AUTOTITLE link resolution failures
- **EmptyTitleError**: Content becomes empty after rendering

## Translator Workflow

### Finding Translation Issues

1. **View page source** in your browser (Ctrl+U or Cmd+Option+U)
2. **Search for "TRANSLATION_FALLBACK"** (Ctrl+F or Cmd+F)
3. **Review the error information** to understand what went wrong

### Example Debugging Session

If you see this comment:
```html
<!-- TRANSLATION_FALLBACK prop=intro type=RenderError file=/content/copilot/getting-started.md line=15 col=8 msg="Unknown variable 'variables.product.prodname_copilot_short'" -->
```

This tells you:
- The `intro` property failed to render
- It's a `RenderError` (runtime issue, not syntax)
- The error is in `/content/copilot/getting-started.md` at line 15, column 8
- There's an unknown variable reference that needs to be fixed

### Browser Console Helper

You can also use this JavaScript snippet in the browser console to extract all fallback information:

```javascript
// Extract all translation fallback comments from the page
const comments = document.documentElement.outerHTML.match(/<!-- TRANSLATION_FALLBACK[^>]+ -->/g) || []
console.log('Translation fallbacks found:', comments.length)
comments.forEach((comment, i) => {
  console.log(`${i + 1}:`, comment)
})
```

## Implementation Details

### When Comments Are Added

Comments are added when:
- The page language is not English (`currentLanguage !== 'en'`)
- A translation error occurs that can be fallen back to English
- The output is HTML content (not plain text)

### When Comments Are NOT Added

Comments are skipped for:
- English content (no fallback needed)
- Text-only rendering (to avoid breaking plain text output)
- Non-fallbackable errors (these throw and stop rendering)

### Error Message Sanitization

Error messages are cleaned up for security and readability:
- Limited to 200 characters maximum
- Double quotes escaped to single quotes
- Newlines converted to spaces
- Multiple whitespace collapsed

### Performance Impact

- Minimal overhead: only adds HTML comments when errors occur
- Comment generation: ~1-5ms per error
- HTML size increase: ~100-200 bytes per comment
- No impact on successful translation rendering

## Code Implementation

The feature is implemented in `src/languages/lib/render-with-fallback.js`:

- `createTranslationFallbackComment()` - Generates the HTML comment
- Enhanced `renderContentWithFallback()` - Adds comments for page properties
- Enhanced `executeWithFallback()` - Adds comments for general content

### Key Functions

```javascript
// Main rendering function with comment support
export async function renderContentWithFallback(page, property, context, options)

// General fallback function with comment support  
export async function executeWithFallback(context, callable, fallback)
```

## Examples

### Liquid Syntax Error
```html
<!-- TRANSLATION_FALLBACK prop=title type=ParseError file=/content/actions/index.md line=1 col=15 msg="Unexpected token '}'" -->
<h1>GitHub Actions</h1>
```

### Unknown Variable
```html
<!-- TRANSLATION_FALLBACK prop=intro type=RenderError file=/content/copilot/intro.md line=3 col=8 msg="Unknown variable 'variables.product.bad_name'" -->
<p>GitHub Copilot helps you code faster and with confidence.</p>
```

### AUTOTITLE Error
```html
<!-- TRANSLATION_FALLBACK prop=markdown type=TitleFromAutotitleError msg="Could not find target page for [AUTOTITLE] link" -->
<p>For more information, see <a href="/getting-started">Getting started</a>.</p>
```

### Missing File Reference
```html
<!-- TRANSLATION_FALLBACK prop=intro type=RenderError file=/content/article.md line=5 col=12 msg="No such file or directory" -->
<p>Welcome to GitHub documentation.</p>
```

## Troubleshooting

### Common Issues

**Q: I don't see any TRANSLATION_FALLBACK comments**
A: This means your translations are working correctly! Comments only appear when errors occur.

**Q: Comments appear in the wrong language**
A: Comments are only added for non-English pages. Check that you're viewing a translated version of the page.

**Q: The error message is truncated**
A: Messages are limited to 200 characters for readability. The truncation ensures comments don't become too large.

**Q: File paths show as relative paths**
A: File paths are shown as they exist in the repository structure for easy navigation.

### Getting Help

If you need assistance interpreting error messages or fixing translation issues:

1. Note the error type and message from the comment
2. Check the file and line number mentioned
3. Compare with the working English version
4. Reach out to the docs engineering team with specific error details

## Technical Notes

### Browser Compatibility
HTML comments are supported by all browsers and are invisible to end users.

### Security Considerations
- No sensitive file paths or internal data exposed
- Error messages are sanitized and length-limited  
- Only translation-related debugging information included

### Monitoring
Translation fallback frequency can be monitored by tracking comment generation in logs or analytics.

This feature helps translation teams identify and fix issues more efficiently while maintaining the reliability of the docs site for all users.