---
title: About slash commands
intro: 'Slash commands can save you time by reducing the typing required to create complex Markdown.'
versions:
  feature: slash-commands
redirect_from:
  - /early-access/issues/about-slash-commands
---

{% note %}

**Note:** Slash commands are currently in public beta and subject to change.

{% endnote %}

## About slash commands

Slash commands make it easier to type more complex Markdown, such as tables, tasklists, and code blocks.

You can use slash commands in any description or comment field in issues, pull requests, or discussions where that slash command is supported.

## Using slash commands

You can use slash commands by typing the command in a comment field, then following the prompts. To insert complex Markdown into your comment, type one of the following commands.

| Command | Description |
| ------- | ----------- |
| `/code` | Inserts a Markdown code block. You choose the language.
| `/details` | Inserts a collapsible detail area. You choose the title and content.
| `/saved-replies` | Inserts a saved reply. You choose from the saved replies for your user account. If you add `%cursor%` to your saved reply, the slash command will place the cursor in that location.
| `/table` | Inserts a Markdown table. You choose the number of columns and rows.
| `/tasklist` | Inserts a tasklist. This slash command only works in an issue description. {% note %} **Note:** tasklists are currently in private beta and may not be available to all users. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/about-tasklists)." {% endnote %}
| `/template` | Shows all of the templates in the repository. You choose the template to insert. This slash command will work for issue templates and a pull request template.
