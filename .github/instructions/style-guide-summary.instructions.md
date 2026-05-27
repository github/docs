---
applyTo: "content/**,data/**,**/*.md"
---

# Concise style guide for docs.github.com

**When to use**: Any content editing, documentation writing, or Markdown file changes. This is a condensed version of the full style guide at `/content/contributing/style-guide-and-content-model/style-guide.md`. Use these rules for routine work. Only consult the full style guide if you encounter a style question not covered here.

For Liquid variable usage, reusables, linking conventions, bullet-list formatting, and parenthetical dashes, see `content.instructions.md` (loaded automatically alongside this file).

## Core principles

1. **Simplicity**: Keep guidelines and content easy to apply. Short paragraphs (1–3 sentences), tables for structured data, bullet lists for sets of items.
2. **User-first**: Style decisions are based on what's best for the reader, not on grammar rules or stylistic preferences.
3. **Clarity first**: Prioritize meaning and readability over rigid grammatical rules.
4. **Use judgment**: When the style guide doesn't cover a case, consider the surrounding content and what the reader needs at that point, then make a decision that fits.

## Voice and tone

* Use clear, simple language approachable for a wide range of readers.
* Use active voice whenever possible. Passive voice is acceptable when emphasizing the object of an action.
* Avoid idioms, slang, and region-specific phrases.
* Avoid ambiguous modal verbs ("may", "might", "should", "could") when an action is required. Use definitive verbs instead.
* Refer to people as "people" or "users", not "customers."

## Headers

* Use sentence casing for all headers.
* Headers must start at H2 (`##`). Do not skip header levels (for example, H2 to H4).
* There must be text content between a header and its first subheader.
* Each header at the same level on a page must be unique.

## Procedural steps

* Always use numbered lists for procedures.
* Each step must include an instruction.
* Give readers all prerequisites before the procedure, not within steps.

## Code blocks

* Keep lines to about 60 characters to avoid horizontal scrolling.
* Specify the language after the opening code fence (for example, ` ```shell `, ` ```yaml `).
* Use ALL CAPS for placeholder values that readers must replace (for example, `YOUR-REPOSITORY`). Explain what to replace placeholders with.
* Do not use command prompts like `$` before commands.
* If showing command output, comment it out so the command can be copied and run without modification.

## Alerts

* Use alerts sparingly—no consecutive alerts, no more than one per section.
* Keep alerts concise (a couple of sentences max).
* Use Markdown syntax: `> [!NOTE]`, `> [!TIP]`, `> [!WARNING]`, `> [!CAUTION]`, `> [!IMPORTANT]`.

## Links

* Use `[AUTOTITLE](/path/to/article)` for all internal links. Never hardcode article titles in link text.
* Introduce links with "For more information, see" or "See" when context is clear.
* Do not use inline links where words within a sentence are hyperlinked without additional context.
* Do not include punctuation inside a hyperlink.
* Do not repeat the same link more than once in the same article.

## Lists

* Use `*` (asterisks) for unordered lists, never `-` (hyphens).
* Capitalize the first letter of each list item.
* Use periods only if the item is a complete sentence.
* Introduce lists with a descriptive sentence, not vague phrases like "the following" in isolation.

## Tables

* Use tables for tabular data (comparisons, options with multiple attributes). Do not use tables for simple lists.
* Every cell must contain a value—use "None" or "Not applicable" for empty cells, not "N/A".
* Left-align text columns. Center-align columns containing only icons.

## Emphasis

* Use **bold** for UI elements that can be interacted with, and for emphasis (sparingly, no more than five contiguous words).
* Do not bold text that already has other formatting (for example, all-caps placeholders).

## Keyboard shortcuts

* Use `<kbd>` tags for each individual key: `<kbd>Ctrl</kbd>+<kbd>C</kbd>`.
* Use `+` between key combinations with no spaces.
* Use full words for Apple modifier keys (`Command`, `Option`, `Control`), not symbols.
* Capitalize letter keys.

## Product names and variables

* Always use Liquid variables for product names—never hardcode them. Check `data/variables/product.yml` and `data/variables/copilot.yml`.
* Product names are always singular (for example, "GitHub Actions helps" not "help").

## Word choice

| Use | Avoid |
|---|---|
| terminal | shell |
| sign in | log in, login |
| sign up | signup |
| email | e-mail |
| press (a key) | hit, tap |
| type (in the UI) | enter (in the UI) |
| enter (in the command line) | type (in the command line) |
| repository | repo |
| administrator | admin |
