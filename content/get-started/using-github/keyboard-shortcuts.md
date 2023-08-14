---
title: Keyboard shortcuts
intro: 'Nearly every page on {% data variables.product.prodname_dotcom %} has a keyboard shortcut to perform actions faster.'
redirect_from:
  - /articles/using-keyboard-shortcuts
  - /categories/75/articles
  - /categories/keyboard-shortcuts
  - /articles/keyboard-shortcuts
  - /github/getting-started-with-github/keyboard-shortcuts
  - /github/getting-started-with-github/using-github/keyboard-shortcuts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---
## About keyboard shortcuts

Typing <kbd>?</kbd> on {% data variables.product.prodname_dotcom %} brings up a dialog box that lists the keyboard shortcuts available for that page. You can use these keyboard shortcuts to perform actions across the site without using your mouse to navigate.

{% ifversion keyboard-shortcut-accessibility-setting %}
You can disable character key shortcuts, while still allowing shortcuts that use modifier keys, in your accessibility settings. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-accessibility-settings)."{% endif %}

{% ifversion command-palette %}
The {% data variables.product.prodname_command_palette %} also gives you quick access to a wide range of actions, without the need to remember keyboard shortcuts. For more information, see "[AUTOTITLE](/get-started/using-github/github-command-palette)."{% endif %}

The following sections list some of the available keyboard shortcuts, organized by the pages where you can use them on {% data variables.location.product_location %}.

## Site wide shortcuts

| Keyboard shortcut | Description
|-----------|------------
|<kbd>S</kbd> or <kbd>/</kbd> | Focus the search bar. For more information, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/about-searching-on-github)."
|<kbd>G</kbd> <kbd>N</kbd> | Go to your notifications. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)."
|<kbd>Esc</kbd> | When focused on a user, issue, or pull request hovercard, closes the hovercard and refocuses on the element the hovercard is in
{% ifversion command-palette %}|<kbd>Command</kbd>+<kbd>K</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | Opens the {% data variables.product.prodname_command_palette %}. If you are editing Markdown text, open the command palette with <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd> or <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>. For more information, see "[AUTOTITLE](/get-started/using-github/github-command-palette)."{% endif %}

## Repositories

| Keyboard shortcut | Description
|-----------|------------
|<kbd>G</kbd> <kbd>C</kbd> | Go to the **Code** tab
|<kbd>G</kbd> <kbd>I</kbd> | Go to the **Issues** tab. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/about-issues)."
|<kbd>G</kbd> <kbd>P</kbd> | Go to the **Pull requests** tab. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."{% ifversion fpt or ghes or ghec %}
|<kbd>G</kbd> <kbd>A</kbd> | Go to the **Actions** tab. For more information, see "[AUTOTITLE](/actions/learn-github-actions)."{% endif %}
|<kbd>G</kbd> <kbd>B</kbd> | Go to the **Projects** tab. For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)."
|<kbd>G</kbd> <kbd>W</kbd> | Go to the **Wiki** tab. For more information, see "[AUTOTITLE](/communities/documenting-your-project-with-wikis/about-wikis)."{% ifversion discussions %}
|<kbd>G</kbd> <kbd>G</kbd> | Go to the **Discussions** tab. For more information, see "[AUTOTITLE](/discussions/collaborating-with-your-community-using-discussions/about-discussions)."{% endif %}

## Source code editing

| Keyboard shortcut | Description
|-----------|------------{% ifversion fpt or ghec %}
|<kbd>.</kbd> | Opens a repository or pull request in the {% data variables.codespaces.serverless %} editor, in the same browser tab. You must be signed in to use the editor. For more information, see "[AUTOTITLE](/codespaces/the-githubdev-web-based-editor)."
|<kbd>></kbd> | Opens a repository or pull request in the {% data variables.codespaces.serverless %} editor, in a new browser tab. You must be signed in to use the editor. For more information, see "[AUTOTITLE](/codespaces/the-githubdev-web-based-editor)."{% endif %}
|<kbd>Command</kbd>+<kbd>B</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | Inserts Markdown formatting for bolding text
|<kbd>Command</kbd>+<kbd>I</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | Inserts Markdown formatting for italicizing text
|<kbd>Command</kbd>+<kbd>K</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | Inserts Markdown formatting for creating a link
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Windows/Linux) | Inserts Markdown formatting for an ordered list
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Windows/Linux) | Inserts Markdown formatting for an unordered list
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Windows/Linux) | Inserts Markdown formatting for a quote
|<kbd>E</kbd> | Open source code file in the **Edit file** tab
|<kbd>Command</kbd>+<kbd>F</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux) | Start searching in file editor
|<kbd>Command</kbd>+<kbd>G</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>G</kbd> (Windows/Linux) | Find next
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd> (Windows/Linux) | Find previous
|<kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd> (Windows/Linux) | Replace
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd> (Windows/Linux) | Replace all
|<kbd>Alt</kbd>+<kbd>G</kbd> | Jump to line
|<kbd>Command</kbd>+<kbd>Z</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Z</kbd> (Windows/Linux) | Undo
|<kbd>Command</kbd>+<kbd>Y</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Y</kbd> (Windows/Linux) | Redo
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> | Toggles between the **Edit file** and **Preview changes** tabs
|<kbd>Command</kbd>+<kbd>S</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>S</kbd> (Windows/Linux) | Write a commit message

For more keyboard shortcuts, see the [CodeMirror documentation](https://codemirror.net/doc/manual.html#commands).

## Source code browsing

| Keyboard shortcut | Description
|-----------|------------
|<kbd>T</kbd> | Activates the file finder
|<kbd>L</kbd> | Jump to a line in your code
|<kbd>W</kbd> | Switch to a new branch or tag
|<kbd>Y</kbd> | Expand a URL to its canonical form. For more information, see "[AUTOTITLE](/repositories/working-with-files/using-files/getting-permanent-links-to-files)."
|<kbd>I</kbd> | Show or hide comments on diffs. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)."
|<kbd>A</kbd> | Show or hide annotations on diffs
|<kbd>B</kbd> | Open blame view. For more information, see "[AUTOTITLE](/repositories/working-with-files/using-files/viewing-a-file)."

{% ifversion code-search-code-view %}

## Navigating within code files

If you view a code file in a repository using the **Code** view and click on any line in the file, you will see a cursor. You can then navigate within the content of the file, also known as a blob (binary large object), using keyboard shortcuts.

| Keyboard shortcut | Description
|-----------|------------
|<kbd>Shift</kbd>+<kbd>J</kbd>| Highlights the line that is currently selected by the cursor within the code file
|<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>C</kbd> (Mac) or </br> <kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>C</kbd> (Windows/Linux) | If a line of code is currently selected, this shortcut opens the line menu for that line, appearing under {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} to the left of the line
|<kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) or </br> <kbd>Control</kbd>+<kbd>Enter</kbd> (Windows/Linux) | Highlights the code symbol currently selected by the cursor and all other occurrences of the symbol in the code, and shows the symbol in the symbols pane
{% endif %}

## Comments

| Keyboard shortcut | Description
|-----------|------------
|<kbd>Command</kbd>+<kbd>B</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | Inserts Markdown formatting for bolding text
|<kbd>Command</kbd>+<kbd>I</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | Inserts Markdown formatting for italicizing text
|<kbd>Command</kbd>+<kbd>E</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows/Linux) | Inserts Markdown formatting for code or a command within a line
|<kbd>Command</kbd>+<kbd>K</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | Inserts Markdown formatting for creating a link{% ifversion fpt or ghae > 3.5 or ghes or ghec %}
|<kbd>Command</kbd>+<kbd>V</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>V</kbd> (Windows/Linux) | Creates a Markdown link when applied over highlighted text{% endif %}
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) | Toggles between the **Write** and **Preview** comment tabs
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> (Windows/Linux) | Pastes HTML link as plain text
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>V</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> (Windows/Linux) | Pastes HTML link as plain text
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Windows/Linux) | Inserts Markdown formatting for an ordered list
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Windows/Linux) | Inserts Markdown formatting for an unordered list
|<kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows/Linux) | Submits a comment
|<kbd>Ctrl</kbd>+<kbd>.</kbd> and then <kbd>Ctrl</kbd>+<kbd>[saved reply number]</kbd> | Opens saved replies menu and then autofills comment field with a saved reply. For more information, see "[AUTOTITLE](/get-started/writing-on-github/working-with-saved-replies/about-saved-replies)."
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Windows/Linux) | Inserts Markdown formatting for a quote{% ifversion fpt or ghec %}
|<kbd>Command</kbd>+<kbd>G</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>G</kbd> (Windows/Linux) | Insert a suggestion. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)." |{% endif %}
|<kbd>R</kbd> | Quote the selected text in your reply. For more information, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#quoting-text)." |

## Issue and pull request lists

| Keyboard shortcut | Description
|-----------|------------
|<kbd>C</kbd> | Create an issue
|<kbd>Command</kbd>+<kbd>/</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>/</kbd> (Windows/Linux) | Focus your cursor on the issues or pull requests search bar. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)."||
|<kbd>U</kbd> | Filter by author
|<kbd>L</kbd> | Filter by or edit labels. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)."
|<kbd>Alt</kbd> and click | While filtering by labels, exclude labels. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)."
|<kbd>M</kbd> | Filter by or edit milestones. For more information, see "[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/filtering-issues-and-pull-requests-by-milestone)."
|<kbd>A</kbd> | Filter by or edit assignee. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)."
|<kbd>O</kbd> or <kbd>Enter</kbd> | Open issue

## Issues and pull requests

| Keyboard shortcut | Description
|-----------|------------
|<kbd>Q</kbd> | Request a reviewer. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)."
|<kbd>M</kbd> | Set a milestone. For more information, see "[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/associating-milestones-with-issues-and-pull-requests)."
|<kbd>L</kbd> | Apply a label. For more information, see "[AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/managing-labels#applying-a-label)."
|<kbd>A</kbd> | Set an assignee. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)."
|<kbd>X</kbd> | Link an issue or pull request from the same repository. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)."
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) | Toggles between the **Write** and **Preview** tabs{% ifversion fpt or ghec %}
|<kbd>Alt</kbd> and click | When creating an issue from a task list, open the new issue form in the current tab by holding <kbd>Alt</kbd> and clicking the {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. For more information, see "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists)."
|<kbd>Shift</kbd> and click | When creating an issue from a task list, open the new issue form in a new tab by holding <kbd>Shift</kbd> and clicking the {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. For more information, see "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists)."
|<kbd>Command</kbd> and click (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd> and click (Windows/Linux) | When creating an issue from a task list, open the new issue form in the new window by holding <kbd>Command</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd> and clicking the {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. For more information, see "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists)."{% endif %}

## "Files changed" tab in pull requests

| Keyboard shortcut | Description
|-----------|------------
|<kbd>C</kbd> | Open the **Commits** dropdown menu to filter which commits are shown in the diffs
|<kbd>T</kbd> | Move your cursor to the "Filter changed files" field
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> (Windows/Linux) | Submit a review comment |
|<kbd>Option</kbd> and click (Mac) or <kbd>Alt</kbd> and click (Windows/Linux) | Toggle between collapsing and expanding all outdated or resolved review comments in a pull request (for example, by holding down <kbd>Alt</kbd> and clicking **Show outdated** or **Hide outdated**) |
|Click, then <kbd>Shift</kbd> and click | Comment on multiple lines of a pull request by clicking a line number, holding <kbd>Shift</kbd>, then clicking another line number. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)."|

{% ifversion projects-v2 %}

## {% data variables.projects.projects_v2_caps %}

### Navigating a project

| Keyboard shortcut | Description
|-----------|------------
|<kbd>Command</kbd>+<kbd>f</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>f</kbd> (Windows/Linux) | Focus filter field
|<kbd>←</kbd> | Move focus to the left
|<kbd>→</kbd> | Move focus to the right
|<kbd>↑</kbd> | Move focus up
|<kbd>↓</kbd> | Move focus down

### Manipulating a project

| Keyboard shortcut | Description
|-----------|------------
|<kbd>Enter</kbd> | Toggle edit mode for the focused cell
|<kbd>Escape</kbd> | Cancel editing for the focused cell
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd> (Windows/Linux) | Open row actions menu
|<kbd>Shift</kbd>+<kbd>Space</kbd> | Select item
|<kbd>Shift</kbd>+<kbd>↓</kbd> | Add cell{% ifversion projects-v2-board-keyboard-shorts %} or card{% endif %} below to selection
|<kbd>Shift</kbd>+<kbd>↑</kbd> | Add cell {% ifversion projects-v2-board-keyboard-shorts %}or card{% endif %} above to selection
|<kbd>Space</kbd> | Open selected item
|<kbd>e</kbd> | Archive selected items

{% ifversion projects-v2-board-keyboard-shorts %}

### Moving cards on the board layout

| Keyboard shortcut | Description
|-----------|------------
|<kbd>Enter</kbd> or <kbd>Shift</kbd>+<kbd>Space</kbd> | Start moving the selected card(s)
|<kbd>Esc</kbd> | Cancel the move in progress
|<kbd>Enter</kbd> | Complete the move in progress
|<kbd>↓</kbd> | Move a single card down
|<kbd>Command</kbd>+<kbd>↓</kbd> or </br> <kbd>Ctrl</kbd>+<kbd>↓</kbd> (Windows/Linux) | Move a single card to the bottom of the column
|<kbd>↑</kbd> | Move a single card up
|<kbd>Command</kbd>+<kbd>↑</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>↑</kbd> (Windows/Linux) | Move a single card to the top of the column
|<kbd>←</kbd> | Move card(s) left
|<kbd>Command</kbd>+<kbd>←</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> (Windows/Linux) | Move card(s) to the leftmost column
|<kbd>→</kbd> | Move card(s) right
|<kbd>Command</kbd>+<kbd>→</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> (Windows/Linux) | Move card(s) to the rightmost column

{% endif %}

{% endif %}

{% ifversion projects-v1 %}

## {% data variables.product.prodname_projects_v1_caps %}

### Moving a column

| Keyboard shortcut | Description
|-----------|------------
|<kbd>Enter</kbd> or <kbd>Space</kbd> | Start moving the focused column
|<kbd>Esc</kbd> | Cancel the move in progress
|<kbd>Enter</kbd> | Complete the move in progress
|<kbd>←</kbd> or <kbd>H</kbd> | Move column to the left
|<kbd>Command</kbd>+<kbd>←</kbd> or <kbd>Command</kbd>+<kbd>H</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> or <kbd>Ctrl</kbd>+<kbd>H</kbd> (Windows/Linux) | Move column to the leftmost position
|<kbd>→</kbd> or <kbd>L</kbd> | Move column to the right
|<kbd>Command</kbd>+<kbd>→</kbd> or <kbd>Command</kbd>+<kbd>L</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> or <kbd>Ctrl</kbd>+<kbd>L</kbd> (Windows/Linux) | Move column to the rightmost position

### Moving a card

| Keyboard shortcut | Description
|-----------|------------
|<kbd>Enter</kbd> or <kbd>Space</kbd> | Start moving the focused card
|<kbd>Esc</kbd> | Cancel the move in progress
|<kbd>Enter</kbd> | Complete the move in progress
|<kbd>↓</kbd> or <kbd>J</kbd> | Move card down
|<kbd>Command</kbd>+<kbd>↓</kbd> or <kbd>Command</kbd>+<kbd>J</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>↓</kbd> or <kbd>Ctrl</kbd>+<kbd>J</kbd> (Windows/Linux) | Move card to the bottom of the column
|<kbd>↑</kbd> or <kbd>K</kbd> | Move card up
|<kbd>Command</kbd>+<kbd>↑</kbd> or <kbd>Command</kbd>+<kbd>K</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>↑</kbd> or <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | Move card to the top of the column
|<kbd>←</kbd> or <kbd>H</kbd> | Move card to the bottom of the column on the left
|<kbd>Shift</kbd>+<kbd>←</kbd> or <kbd>Shift</kbd>+<kbd>H</kbd> | Move card to the top of the column on the left
|<kbd>Command</kbd>+<kbd>←</kbd> or <kbd>Command</kbd>+<kbd>H</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> or <kbd>Ctrl</kbd>+<kbd>H</kbd> (Windows/Linux) | Move card to the bottom of the leftmost column
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd> or <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>H</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>H</kbd> (Windows/Linux) | Move card to the top of the leftmost column
|<kbd>→</kbd> | Move card to the bottom of the column on the right
|<kbd>Shift</kbd>+<kbd>→</kbd> or <kbd>Shift</kbd>+<kbd>L</kbd> | Move card to the top of the column on the right
|<kbd>Command</kbd>+<kbd>→</kbd> or <kbd>Command</kbd>+<kbd>L</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> or <kbd>Ctrl</kbd>+<kbd>L</kbd> (Windows/Linux) | Move card to the bottom of the rightmost column
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>→</kbd> or <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>→</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> (Windows/Linux) | Move card to the bottom of the rightmost column

### Previewing a card

| Keyboard shortcut | Description
|-----------|------------
|<kbd>Esc</kbd> | Close the card preview pane

{% endif %}

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_actions %}

| Keyboard shortcut | Description
|-----------|------------
|<kbd>Command</kbd>+<kbd>Space </kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Space</kbd> (Windows/Linux) | In the workflow editor, get suggestions for your workflow file.
|<kbd>G</kbd> <kbd>F</kbd> | Go to the workflow file
|<kbd>Shift</kbd>+<kbd>T</kbd> or <kbd>T</kbd> | Toggle timestamps in logs
|<kbd>Shift</kbd>+<kbd>F</kbd> or <kbd>F</kbd> | Toggle full-screen logs
|<kbd>Esc</kbd> | Exit full-screen logs

{% endif %}

## Notifications

| Keyboard shortcut | Description
|-----------|------------
|<kbd>E</kbd> | Mark as done
|<kbd>Shift</kbd>+<kbd>U</kbd>| Mark as unread
|<kbd>Shift</kbd>+<kbd>I</kbd>| Mark as read
|<kbd>Shift</kbd>+<kbd>M</kbd> | Unsubscribe

## Network graph

| Keyboard shortcut | Description
|-----------|------------
|<kbd>←</kbd> or <kbd>H</kbd> | Scroll left
|<kbd>→</kbd> or <kbd>L</kbd> | Scroll right
|<kbd>↑</kbd> or <kbd>K</kbd> | Scroll up
|<kbd>↓</kbd> or <kbd>J</kbd> | Scroll down
|<kbd>Shift</kbd>+<kbd>←</kbd> (Mac) or </br> <kbd>Shift</kbd>+<kbd>H</kbd> (Windows/Linux) | Scroll all the way left
|<kbd>Shift</kbd>+<kbd>→</kbd> (Mac) or </br> <kbd>Shift</kbd>+<kbd>L</kbd> (Windows/Linux) | Scroll all the way right
|<kbd>Shift</kbd>+<kbd>↑</kbd> (Mac) or </br> <kbd>Shift</kbd>+<kbd>K</kbd> (Windows/Linux) | Scroll all the way up
|<kbd>Shift</kbd>+<kbd>↓</kbd> (Mac) or </br> <kbd>Shift</kbd>+<kbd>J</kbd> (Windows/Linux) | Scroll all the way down
