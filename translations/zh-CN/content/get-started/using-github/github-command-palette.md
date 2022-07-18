---
title: GitHub Command Palette
intro: 'Use the command palette in {% data variables.product.product_name %} to navigate, search, and run commands directly from your keyboard.'
versions:
  feature: command-palette
shortTitle: GitHub Command Palette
---

{% data reusables.command-palette.beta-note %}

## About the {% data variables.product.prodname_command_palette %}

You can navigate, search, and run commands on {% data variables.product.product_name %} with the {% data variables.product.prodname_command_palette %}. The command palette is an on-demand way to show suggestions based on your current context and resources you've used recently. You can open the command palette with a keyboard shortcut from anywhere on {% data variables.product.product_name %}, which saves you time and keeps your hands on the keyboard.

### Fast navigation

When you open the command palette, the suggestions are optimized to give you easy access from anywhere in a repository, personal account, or organization to top-level pages like the Issues page. If the location you want isn't listed, start entering the name or number for the location to refine the suggestions.

![Command palette repository suggestions](/assets/images/help/command-palette/command-palette-navigation-repo-default.png)

### Easy access to commands

The ability to run commands directly from your keyboard, without navigating through a series of menus, may change the way you use {% data variables.product.prodname_dotcom %}. For example, you can switch themes with a few keystrokes, making it easy to toggle between themes as your needs change.

![Command palette change theme](/assets/images/help/command-palette/command-palette-command-change-theme.png)

## Opening the {% data variables.product.prodname_command_palette %}

Open the command palette using one of the following default keyboard shortcuts:
- Windows and Linux: <kbd>Ctrl</kbd>+<kbd>K</kbd> or <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>
- Mac: <kbd>Command</kbd>+<kbd>K</kbd> or <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd>

You can customize the keyboard shortcuts you use to open the command palette in the [Accessibility section](https://github.com/settings/accessibility) of your user settings. For more information, see "[Customizing your {% data variables.product.prodname_command_palette %} keyboard shortcuts](#customizing-your-github-command-palette-keyboard-shortcuts)."

When you open the command palette, it shows your location at the top left and uses it as the scope for suggestions (for example, the `mashed-avocado` organization).

![Command palette launch](/assets/images/help/command-palette/command-palette-launch.png)

{% note %}

**Notes:**
- If you are editing Markdown text, open the command palette with <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd> (Windows and Linux) or <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd> (Mac).
- If you are working on a project (beta), a project-specific command palette is displayed instead. For more information, see "[Customizing your project (beta) views](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)."

{% endnote %}

### Customizing your {% data variables.product.prodname_command_palette %} keyboard shortcuts


The default keyboard shortcuts used to open the command palette may conflict with your default OS and browser keyboard shortcuts. You have the option to customize your keyboard shortcuts in the [Accessibility section](https://github.com/settings/accessibility) of your account settings. In the command palette settings, you can customize the keyboard shortcuts for opening the command palette in both search mode and command mode. 

![Command palette keyboard shortcut settings](/assets/images/help/command-palette/command-palette-keyboard-shortcut-settings.png)
## Navigating with the {% data variables.product.prodname_command_palette %}

You can use the command palette to navigate to any page that you have access to on {% data variables.product.product_name %}.

{% data reusables.command-palette.open-palette %}

2. Start typing the path you want to navigate to. The suggestions in the command palette change to match your text.

   ![Command palette navigation current scope](/assets/images/help/command-palette/command-palette-navigation-current-scope.png)

{% data reusables.command-palette.change-scope %}

   You can also use keystrokes to narrow your search. For more information, see "[Keystroke functions](#keystroke-functions)."

4. Finish entering the path, or use the arrow keys to highlight the path you want from the list of suggestions.

5. Use <kbd>Enter</kbd> to jump to your chosen location. Alternatively, use <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows and Linux) or <kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) to open the location in a new browser tab.

## Searching with the {% data variables.product.prodname_command_palette %}

You can use the command palette to search for anything on {% data variables.product.product_location %}.

{% data reusables.command-palette.open-palette %}

{% data reusables.command-palette.change-scope %}

3. Optionally, use keystrokes to find specific types of resource:

   - <kbd>#</kbd> Search for issues, pull requests, discussions, and projects
   - <kbd>!</kbd> Search for projects
   - <kbd>@</kbd> Search for users, organizations, and repositories
   - <kbd>/</kbd> Search for files within a repository scope

   ![Command palette search files](/assets/images/help/command-palette/command-palette-search-files.png)

4. Begin entering your search terms. The command palette will offer you a range of suggested searches based on your search scope.

   {% tip %}

   You can also use the full syntax of {% data variables.product.prodname_dotcom %}'s integrated search within the command palette. For more information, see "[Searching for information on {% data variables.product.prodname_dotcom %}](/search-github)."

   {% endtip %}

5. Use the arrow keys to highlight the search result you want and use <kbd>Enter</kbd> to jump to your chosen location. Alternatively, use <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows and Linux) or <kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) to open the location in a new browser tab.

## Running commands from the {% data variables.product.prodname_command_palette %}

You can use the {% data variables.product.prodname_command_palette %} to run commands. For example, you can create a new repository or issue, or change your theme. When you run a command, the location for its action is determined by either the underlying page or the scope shown in the command palette.

- Pull request and issue commands always run on the underlying page.
- Higher-level commands, for example, repository commands, run in the scope shown in the command palette.

For a full list of supported commands, see "[{% data variables.product.prodname_command_palette %} reference](#github-command-palette-reference)."

1. The default keyboard shortcuts to open the command palette in command mode are <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Windows and Linux) or <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Mac). If you already have the command palette open, press <kbd>></kbd> to switch to command mode. {% data variables.product.prodname_dotcom %} suggests commands based on your location.

   ![Command palette command mode](/assets/images/help/command-palette/command-palette-command-mode.png)

{% data reusables.command-palette.change-scope %}

3. If the command you want is not displayed, check your scope then start entering the command name in the text box.

4. Use the arrow keys to highlight the command you want and use <kbd>Enter</kbd> to run it.


## Closing the command palette

When the command palette is active, you can use one of the following keyboard shortcuts to close the command palette:

- Search and navigation mode: <kbd>Esc</kbd> or <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows and Linux)  <kbd>Command</kbd>+<kbd>K</kbd> (Mac)
- Command mode: <kbd>Esc</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Windows and Linux)  <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Mac)

If you have customized the command palette keyboard shortcuts in the Accessibility settings, your customized keyboard shortcuts will be used for both opening and closing the command palette.  

## {% data variables.product.prodname_command_palette %} reference

### Keystroke functions

These keystrokes are available when the command palette is in navigation and search modes, that is, they are not available in command mode.

| Keystroke | Function |
| :- | :- |
|<kbd>></kbd>| Enter command mode. For more information, see "[Running commands from the {% data variables.product.prodname_command_palette %}](#running-commands-from-the-github-command-palette)." |
|<kbd>#</kbd>| Search for issues, pull requests, discussions, and projects. For more information, see "[Searching with the {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)."|
|<kbd>@</kbd>| Search for users, organizations, and repositories. For more information, see "[Searching with the {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)."|
|<kbd>/</kbd>| Search for files within a repository scope or repositories within an organization scope. For more information, see "[Searching with the {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)." |
|<kbd>!</kbd>| Search just for projects. For more information, see "[Searching with the {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)."|
|<kbd>Ctrl</kbd>+<kbd>C</kbd> or <kbd>Command</kbd>+<kbd>C</kbd>| Copy the search or navigation URL for the highlighted result to the clipboard.|
|<kbd>Enter</kbd>| Jump to the highlighted result or run the highlighted command.|
|<kbd>Ctrl</kbd>+<kbd>Enter</kbd> or <kbd>Command</kbd>+<kbd>Enter</kbd>| Open the highlighted search or navigation result in a new brower tab.|
|<kbd>?</kbd>| Display help within the command palette.|

### Global commands

These commands are available from all scopes.

| Command | Behavior|
| :- | :- | :- |
|`Import repository`|Create a new repository by importing a project from another version control system. For more information, see "[Importing a repository with GitHub importer](/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer)."  |
|`New gist`|Open a new gist. For more information, see "[Creating a gist](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)." |
|`New organization`|Create a new organization. For more information, see "[Creating a new organization from scratch](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)." |
|`New project`|Create a new project board. For more information, see "[Creating a project](/issues/trying-out-the-new-projects-experience/creating-a-project)."  |
|`New repository`|Create a new repository from scratch. For more information, see "[Creating a new repository](/repositories/creating-and-managing-repositories/creating-a-new-repository)." |
|`Switch theme to <theme name>`|Change directly to a different theme for the UI. For more information, see "[Managing your theme settings](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings)." |


### Organization commands

These commands are available only within the scope of an organization.

| Command | Behavior|
| :- | :- |
| `New team`| Create a new team in the current organization. For more information, see "[Creating a team](/organizations/organizing-members-into-teams/creating-a-team)."

### Repository commands

Most of these commands are available only on the home page of the repository. If a command is also available on other pages, this is noted in the behavior column.

| Command | Behavior|
| :- | :- |
|`Clone repository: <URL type>`|Copy the URL needed to clone the repository using {% data variables.product.prodname_cli %}, HTTPS, or SSH to the clipboard. For more information, see "[Cloning a repository](/repositories/creating-and-managing-repositories/cloning-a-repository)."|
|`New discussion`|Create a new discussion in the repository. For more information, see "[Creating a new discussion](/discussions/quickstart#creating-a-new-discussion)."|
|`New file`|Create a new file from any page in the repository. For more information, see "[Adding a file to a repository](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)."
|`New issue`|Open a new issue from any page in the repository. For more information, see "[Creating an issue](/issues/tracking-your-work-with-issues/creating-an-issue)."|
|`Open in new codespace`|Create and open a codespace for this repository. For more information, see "[Creating a codespace](/codespaces/developing-in-codespaces/creating-a-codespace)."|
|`Open in github.dev editor`|Open the current repository in the github.dev editor. For more information, see "[Opening the web based editor](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)."|

### File commands

These commands are available only when you open the command palette from a file in a repository.

| Command | Behavior|
| :- | :- |
|`Copy permalink`|Create a link to the file that includes the current commit SHA and copy the link to the clipboard. For more information, see "[Getting permanent links to files](/repositories/working-with-files/using-files/getting-permanent-links-to-files#press-y-to-permalink-to-a-file-in-a-specific-commit)."
|`Open in github.dev editor`|Open the currently displayed file in github.dev editor. For more information, see "[Opening the web based editor](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)."|

### Discussion commands

These commands are available only when you open the command palette from a discussion. They act on your current page and are not affected by the scope set in the command palette.

| Command | Behavior|
| :- | :- |
|`Delete discussion...`|Permanently delete the discussion. For more information, see "[Managing discussions](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion)."
|`Edit discussion body`|Open the main body of the discussion ready for editing.
|`Subscribe`/`unsubscribe`|Opt in or out of notifications for additions to the discussion. For more information, see "[About notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)."
|`Transfer discussion...`|Move the discussion to a different repository. For more information, see "[Managing discussions](/discussions/managing-discussions-for-your-community/managing-discussions#transferring-a-discussion)."

### Issue commands

These commands are available only when you open the command palette from an issue. They act on your current page and are not affected by the scope set in the command palette.

| Command | Behavior|
| :- | :- |
|`Close`/`reopen issue`|Close or reopen the current issue. For more information, see "[About issues](/issues/tracking-your-work-with-issues/about-issues)."|
|`Convert issue to discussion...`|Convert the current issue into a discussion. For more information, see "[Moderating discussions](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)."
|`Delete issue...`|Delete the current issue. For more information, see "[Deleting an issue](/issues/tracking-your-work-with-issues/deleting-an-issue)."|
|`Edit issue body`|Open the main body of the issue ready for editing.
|`Edit issue title`|Open the title of the issue ready for editing.
|`Lock issue`|Limit new comments to users with write access to the repository. For more information, see "[Locking conversations](/communities/moderating-comments-and-conversations/locking-conversations)."
|`Pin`/`unpin issue`|Change whether or not the issue is shown in the pinned issues section for the repository. For more information, see "[Pinning an issue to your repository](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)."|
|`Subscribe`/`unsubscribe`|Opt in or out of notifications for changes to this issue. For more information, see "[About notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)."
|`Transfer issue...`|Transfer the issue to another repository. For more information, see "[Transferring an issue to another repository](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)."|

### Pull request commands

These commands are available only when you open the command palette from a pull request. They act on your current page and are not affected by the scope set in the command palette.

| Command | Behavior|
| :- | :- |
|`Close`/`reopen pull request`|Close or reopen the current pull request. For more information, see "[About pull requests](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."|
|`Convert to draft`/`Mark pull request as ready for review`|Change the state of the pull request to show it as ready, or not ready, for review. For more information, see "[Changing the state of a pull request](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)."|
|`Copy current branch name`| Add the name of the head branch for the pull request to the clipboard.
|`Edit pull request body`|Open the main body of the pull request ready for editing.
|`Edit pull request title`|Open the title of the pull request ready for editing.
|`Open in new codespace`|Create and open a codespace for the head branch of the pull request. For more information, see "[Creating a codespace](/codespaces/developing-in-codespaces/creating-a-codespace)."
|`Subscribe`/`unsubscribe`|Opt in or out of notifications for changes to this pull request. For more information, see "[About notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)."
|`Update current branch`|Update the head branch of the pull request with changes from the base branch. This is available only for pull requests that target the default branch of the repository. For more information, see "[About branches](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)."|
