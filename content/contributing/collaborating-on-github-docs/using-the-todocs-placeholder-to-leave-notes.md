---
title: Using the TODOCS placeholder to leave notes
shortTitle: Using the TODOCS placeholder
intro: 'You can use the `TODOCS` placeholder to indicate work that still needs to be completed.'
versions:
  feature: 'contributing'
---

<!-- markdownlint-disable search-replace -->
## Using the TODOCS placeholder

Sometimes technical writers use placeholders while writing documentation to remind themselves to come back to something later. It's a useful technique, but there's always the possibility that the placeholder will be overlooked and slip into production. At that point, the only way the Docs team will find out about it is if someone sees it and reports it.

To prevent slips, use the string `TODOCS` as your placeholder. The Docs test suite includes a [linting test](https://github.com/github/docs/tree/main/src/content-linter) that will fail if it finds this string anywhere in a Markdown or YAML file.

{% note %}

**Note**: If you use {% data variables.product.prodname_vscode_shortname %} as your text editor, the "[TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)" extension is useful for highlighting instances of "TODOCS" in your files. Add "TODOCS" and other varieties of casing, such as "todocs," to the settings for this extension.

{% endnote %}

### Example

```markdown
1. In the dropdown, select the settings you want to sync.

   TODOCS: ADD A SCREENSHOT OF THE SETTINGS SYNC OPTIONS

1. Click **Sign in & Turn on**, then select the account to which you want your settings to be synced.
```
<!-- markdownlint-enable search-replace -->
