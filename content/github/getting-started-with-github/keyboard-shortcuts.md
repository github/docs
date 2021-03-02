---
title: Keyboard shortcuts
intro: 'Nearly every page on {% data variables.product.product_name %} has a keyboard shortcut to perform actions faster.'
redirect_from:
  - /articles/using-keyboard-shortcuts/
  - /categories/75/articles/
  - /categories/keyboard-shortcuts/
  - /articles/keyboard-shortcuts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


### About keyboard shortcuts

Typing <kbd>?</kbd> in {% data variables.product.product_name %} brings up a dialog box that lists the keyboard shortcuts available for that page. You can use these keyboard shortcuts to perform actions across the site without using your mouse to navigate.

Below is a list of some of the available keyboard shortcuts.

### Site wide shortcuts

| Keyboard shortcut | Description
|-----------|------------
|<kbd>s</kbd> or <kbd>/</kbd> | Focus the search bar. For more information, see "[About searching on {% data variables.product.company_short %}](/articles/about-searching-on-github)."
|<kbd>g</kbd> <kbd>n</kbd> | Go to your notifications. For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}"[About notifications](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}"[About notifications](/github/receiving-notifications-about-activity-on-github/about-notifications){% endif %}."
|<kbd>esc</kbd> | When focused on a user, issue, or pull request hovercard, closes the hovercard and refocuses on the element the hovercard is in

### Repositories

| Keyboard shortcut | Description
|-----------|------------
|<kbd>g</kbd> <kbd>c</kbd> | Go to the **Code** tab
|<kbd>g</kbd> <kbd>i</kbd> | Go to the **Issues** tab. For more information, see "[About issues](/articles/about-issues)."
|<kbd>g</kbd> <kbd>p</kbd> | Go to the **Pull requests** tab. For more information, see "[About pull requests](/articles/about-pull-requests)."{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
|<kbd>g</kbd> <kbd>a</kbd> | Go to the **Actions** tab. For more information, see "[About Actions](/actions/getting-started-with-github-actions/about-github-actions)."{% endif %}
|<kbd>g</kbd> <kbd>b</kbd> | Go to the **Projects** tab. For more information, see "[About project boards](/articles/about-project-boards)."
|<kbd>g</kbd> <kbd>w</kbd> | Go to the **Wiki** tab. For more information, see "[About wikis](/articles/about-wikis)."

### Source code editing

| Keyboard shortcut | Description
|-----------|------------
|<kbd>e</kbd> | Open source code file in the **Edit file** tab
|<kbd>control f</kbd> or <kbd>command f</kbd> | Start searching in file editor
|<kbd>control g</kbd> or <kbd>command g</kbd> | Find next
|<kbd>shift control g</kbd> or <kbd>shift command g</kbd> | Find previous
|<kbd>shift control f</kbd> or <kbd>command option f</kbd> | Replace
|<kbd>shift control r</kbd> or <kbd>shift command option f</kbd> | Replace all
|<kbd>alt g</kbd> | Jump to line
|<kbd>control z</kbd> or <kbd>command z</kbd> | Undo
|<kbd>control y</kbd> or <kbd>command y</kbd> | Redo
|<kbd>cmd + shift + p</kbd> | Toggles between the **Edit file** and **Preview changes** tabs

For more keyboard shortcuts, see the [CodeMirror documentation](https://codemirror.net/doc/manual.html#commands).

### Source code browsing

| Keyboard shortcut | Description
|-----------|------------
|<kbd>t</kbd> | Activates the file finder
|<kbd>l</kbd> | Jump to a line in your code
|<kbd>w</kbd> | Switch to a new branch or tag
|<kbd>y</kbd> | Expand a URL to its canonical form. For more information, see "[Getting permanent links to files](/articles/getting-permanent-links-to-files)."
|<kbd>i</kbd> | Show or hide comments on diffs. For more information, see "[Commenting on the diff of a pull request](/articles/commenting-on-the-diff-of-a-pull-request)."
|<kbd>a</kbd> | Show or hide annotations on diffs
|<kbd>b</kbd> | Open blame view. For more information, see "[Tracing changes in a file](/articles/tracing-changes-in-a-file)."

### Comments

| Keyboard shortcut | Description
|-----------|------------
| <kbd>control b</kbd> or <kbd>command b</kbd> | Inserts Markdown formatting for bolding text
| <kbd>control i</kbd> or <kbd>command i</kbd> | Inserts Markdown formatting for italicizing text
| <kbd>control k</kbd> or <kbd>command k</kbd> | Inserts Markdown formatting for creating a link
| <kbd>control shift p</kbd> or <kbd>command shift p</kbd>| Toggles between the **Write** and **Preview** comment tabs
| <kbd>control enter</kbd> | Submits a comment
| <kbd>control .</kbd> and then <kbd>control [saved reply number]</kbd> | Opens saved replies menu and then autofills comment field with a saved reply. For more information, see "[About saved replies](/articles/about-saved-replies)."{% if currentVersion == "free-pro-team@latest" %}
|<kbd>control g</kbd> or <kbd>command g</kbd> | Insert a suggestion. For more information, see "[Reviewing proposed changes in a pull request](/articles/reviewing-proposed-changes-in-a-pull-request)." |{% endif %}
| <kbd>r</kbd> | Quote the selected text in your reply. For more information, see "[Basic writing and formatting syntax](/articles/basic-writing-and-formatting-syntax#quoting-text)." |

### Issue and pull request lists

| Keyboard shortcut | Description
|-----------|------------
|<kbd>c</kbd> | Create an issue
| <kbd>control /</kbd> or <kbd>command /</kbd> | Focus your cursor on the issues or pull requests search bar. For more information, see "[Using search to filter issues and pull requests](/articles/using-search-to-filter-issues-and-pull-requests)."||
|<kbd>u</kbd> | Filter by author
|<kbd>l</kbd> | Filter by or edit labels. For more information, see "[Filtering issues and pull requests by labels](/articles/filtering-issues-and-pull-requests-by-labels)."
| <kbd>alt</kbd> and click | While filtering by labels, exclude labels. For more information, see "[Filtering issues and pull requests by labels](/articles/filtering-issues-and-pull-requests-by-labels)."
|<kbd>m</kbd> | Filter by or edit milestones. For more information, see "[Filtering issues and pull requests by milestone](/articles/filtering-issues-and-pull-requests-by-milestone)."
|<kbd>a</kbd> | Filter by or edit assignee. For more information, see "[Filtering issues and pull requests by assignees](/articles/filtering-issues-and-pull-requests-by-assignees)."
|<kbd>o</kbd> or <kbd>enter</kbd> | Open issue

### Issues and pull requests
| Keyboard shortcut | Description
|-----------|------------
|<kbd>q</kbd> | Request a reviewer. For more information, see "[Requesting a pull request review](/articles/requesting-a-pull-request-review/)."
|<kbd>m</kbd> | Set a milestone. For more information, see "[Associating milestones with issues and pull requests](/articles/associating-milestones-with-issues-and-pull-requests/)."
|<kbd>l</kbd> | Apply a label. For more information, see "[Applying labels to issues and pull requests](/articles/applying-labels-to-issues-and-pull-requests/)."
|<kbd>a</kbd> | Set an assignee. For more information, see "[Assigning issues and pull requests to other {% data variables.product.company_short %} users](/articles/assigning-issues-and-pull-requests-to-other-github-users/)."
|<kbd>cmd + shift + p</kbd> or <kbd>control + shift + p</kbd> | Toggles between the **Write** and **Preview** tabs

### Changes in pull requests

| Keyboard shortcut | Description
|-----------|------------
|<kbd>c</kbd> | Open the list of commits in the pull request
|<kbd>t</kbd> | Open the list of changed files in the pull request
|<kbd>j</kbd> | Move selection down in the list
|<kbd>k</kbd> | Move selection up in the list
| <kbd>cmd + shift + enter </kbd> | Add a single comment on a pull request diff |
| <kbd>alt</kbd> and click | Toggle between collapsing and expanding all outdated review comments in a pull request by holding down `alt` and clicking **Show outdated** or **Hide outdated**.|{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
| Click, then <kbd>shift</kbd> and click | Comment on multiple lines of a pull request by clicking a line number, holding <kbd>shift</kbd>, then clicking another line number. For more information, see "[Commenting on a pull request](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)."|{% endif %}

### Project boards

#### Moving a column

| Keyboard shortcut | Description
|-----------|------------
|<kbd>enter</kbd> or <kbd>space</kbd> | Start moving the focused column
|<kbd>escape</kbd> | Cancel the move in progress
|<kbd>enter</kbd> | Complete the move in progress
|<kbd>←</kbd> or <kbd>h</kbd> | Move column to the left
|<kbd>command + ←</kbd> or <kbd>command + h</kbd> or <kbd>control + ←</kbd> or <kbd>control + h</kbd> | Move column to the leftmost position
|<kbd>→</kbd> or <kbd>l</kbd> | Move column to the right
|<kbd>command + →</kbd> or <kbd>command + l</kbd> or <kbd>control + →</kbd> or <kbd>control + l</kbd> | Move column to the rightmost position

#### Moving a card

| Keyboard shortcut | Description
|-----------|------------
|<kbd>enter</kbd> or <kbd>space</kbd> | Start moving the focused card
|<kbd>escape</kbd> | Cancel the move in progress
|<kbd>enter</kbd> | Complete the move in progress
|<kbd>↓</kbd> or <kbd>j</kbd> | Move card down
|<kbd>command + ↓</kbd> or <kbd>command + j</kbd> or <kbd>control + ↓</kbd> or <kbd>control + j</kbd> | Move card to the bottom of the column
|<kbd>↑</kbd> or <kbd>k</kbd> | Move card up
|<kbd>command + ↑</kbd> or <kbd>command + k</kbd> or <kbd>control + ↑</kbd> or <kbd>control + k</kbd> | Move card to the top of the column
|<kbd>←</kbd> or <kbd>h</kbd> | Move card to the bottom of the column on the left
|<kbd>shift + ←</kbd> or <kbd>shift + h</kbd> | Move card to the top of the column on the left
|<kbd>command + ←</kbd> or <kbd>command + h</kbd> or <kbd>control + ←</kbd> or <kbd>control + h</kbd> | Move card to the bottom of the leftmost column
|<kbd>command + shift + ←</kbd> or <kbd>command + shift + h</kbd> or <kbd>control + shift + ←</kbd> or <kbd>control + shift + h</kbd> | Move card to the top of the leftmost column
|<kbd>→</kbd> | Move card to the bottom of the column on the right
|<kbd>shift + →</kbd> or <kbd>shift + l</kbd> | Move card to the top of the column on the right
|<kbd>command + →</kbd> or <kbd>command + l</kbd> or <kbd>control + →</kbd> or <kbd>control + l</kbd> | Move card to the bottom of the rightmost column
|<kbd>command + shift + →</kbd> or <kbd>command + shift + l</kbd> or <kbd>control + shift + →</kbd> or <kbd>control + shift + l</kbd> | Move card to the bottom of the rightmost column

#### Previewing a card

| Keyboard shortcut | Description
|-----------|------------
|<kbd>esc</kbd> | Close the card preview pane

{% if currentVersion == "free-pro-team@latest" %}
### {% data variables.product.prodname_actions %}

| Keyboard shortcut | Description
|-----------|------------
|<kbd>command + space </kbd> or <kbd>control + space</kbd> | In the workflow editor, get suggestions for your workflow file.
|<kbd>g</kbd> <kbd>f</kbd> | Go to the workflow file
|<kbd>shift + t</kbd> or <kbd>T</kbd> | Toggle timestamps in logs
|<kbd>shift + f</kbd> or <kbd>F</kbd> | Toggle full-screen logs
|<kbd>esc</kbd> | Exit full-screen logs

{% endif %}

### Notifications

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
| Keyboard shortcut | Description
|-----------|------------
|<kbd>e</kbd> | Mark as done
| <kbd>shift + u</kbd>| Mark as unread
| <kbd>shift + i</kbd>| Mark as read
| <kbd>shift + m</kbd> | Unsubscribe

{% else %}

| Keyboard shortcut | Description
|-----------|------------
|<kbd>e</kbd> or <kbd>I</kbd> or <kbd>y</kbd> | Mark as read
|<kbd>shift + m</kbd> | Mute thread
{% endif %}

### Network graph

| Keyboard shortcut | Description
|-----------|------------
|<kbd>←</kbd> or <kbd>h</kbd> | Scroll left
|<kbd>→</kbd> or <kbd>l</kbd> | Scroll right
|<kbd>↑</kbd> or <kbd>k</kbd> | Scroll up
|<kbd>↓</kbd> or <kbd>j</kbd> | Scroll down
|<kbd>shift + ←</kbd> or <kbd>shift + h</kbd> | Scroll all the way left
|<kbd>shift + →</kbd> or <kbd>shift + l</kbd> | Scroll all the way right
|<kbd>shift + ↑</kbd> or <kbd>shift + k</kbd> | Scroll all the way up
|<kbd>shift + ↓</kbd> or <kbd>shift + j</kbd> | Scroll all the way down
