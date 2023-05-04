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

## Example

Let's take an example from "Issues" of a repository:

1. Go to Issues, see how to "[Create an issue](/issues/tracking-your-work-with-issues/creating-an-issue)".

    ![Screenshot of issues section, where issues is outlined in orange.](/assets/images/help/issues/issues_about_slash_commands_issue_section.png)

2. Type '/' inside the comment box and choose options from the dropdown containing markdown shortcuts. Let's take an example of inserting a code block. 

    Select the 'Code block' option.

    ![Screenshot of issues section, where issues is outlined in orange.](/assets/images/help/issues/issues_about_slash_commands_dropdown.png)

3.  And then, select the syntax type from the next dropdown.

    ![Screenshot of dropdown, containing markdown shortcuts](/assets/images/help/issues/issues_about_slash_commands_code_block_syntax.png)
    
4. Write the code inside the code template.

    ![Screenshot of dropdown, containing code block syntax types](/assets/images/help/issues/issues_about_slash_commands_code_template.png)

    ![Screenshot of dropdown, containing code inside the selected code block syntax type](/assets/images/help/issues/issues_about_slash_commands_code_input.png)

5. Finally, check for the preview.

    ![Screenshot of preview.](/assets/images/help/issues/issues_about_slash_commands_code_preview.png)
