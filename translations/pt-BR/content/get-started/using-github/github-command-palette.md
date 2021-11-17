---
title: GitHub Command Palette
intro: 'Use the command palette in {% data variables.product.product_name %} to navigate, search, and run commands directly from your keyboard.'
versions:
  fpt: '*'
  ghec: '*'
  feature: command-palette
shortTitle: GitHub Command Palette
---

{% data reusables.command-palette.beta-note %}

## Sobre o {% data variables.product.prodname_command_palette %}

You can navigate, search, and run commands on {% data variables.product.product_name %} with the {% data variables.product.prodname_command_palette %}. The command palette is an on-demand way to show suggestions based on your current context and resources you've used recently. You can open the command palette with a keyboard shortcut from anywhere on {% data variables.product.product_name %}, which saves you time and keeps your hands on the keyboard.

### Fast navigation

When you open the command palette, the suggestions are optimized to give you easy access from anywhere in a repository, user account, or organization to top-level pages like the Issues page. If the location you want isn't listed, start entering the name or number for the location to refine the suggestions.

![Command palette repository suggestions](/assets/images/help/command-palette/command-palette-navigation-repo-default.png)

### Easy access to commands

The ability to run commands directly from your keyboard, without navigating through a series of menus, may change the way you use {% data variables.product.prodname_dotcom %}. For example, you can switch themes with a few keystrokes, making it easy to toggle between themes as your needs change.

![Command palette change theme](/assets/images/help/command-palette/command-palette-command-change-theme.png)

## Abrindo o {% data variables.product.prodname_command_palette %}

Open the command palette using one of the following keyboard shortcuts:
- Windows and Linux: <kbd>Ctrl</kbd><kbd>k</kbd> or <kbd>Ctrl</kbd><kbd>alt</kbd><kbd>k</kbd>
- Mac: <kbd>⌘</kbd><kbd>k</kbd> or <kbd>⌘</kbd><kbd>option</kbd><kbd>k</kbd>

When you open the command palette, it shows your location at the top left and uses it as the scope for suggestions (for example, the `mashed-avocado` organization).

![Command palette launch](/assets/images/help/command-palette/command-palette-launch.png)

{% note %}

**Notas:**
- If you are editing Markdown text, open the command palette with <kbd>Ctrl</kbd><kbd>alt</kbd><kbd>k</kbd> (Windows and Linux) or <kbd>⌘</kbd><kbd>option</kbd><kbd>k</kbd> (Mac).
- If you are working on a project (beta), a project-specific command palette is displayed instead. Para obter mais informações, consulte "[Personalizar as visualizações do seu projeto (beta)](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".

{% endnote %}

## Navigating with the {% data variables.product.prodname_command_palette %}

You can use the command palette to navigate to any page that you have access to on {% data variables.product.product_name %}.

{% data reusables.command-palette.open-palette %}

2. Start typing the path you want to navigate to. The suggestions in the command palette change to match your text.

   ![Command palette navigation current scope](/assets/images/help/command-palette/command-palette-navigation-current-scope.png)

{% data reusables.command-palette.change-scope %}

   You can also use keystrokes to narrow your search. For more information, see "[Keystroke functions](#keystroke-functions)."

4. Finish entering the path, or use the arrow keys to highlight the path you want from the list of suggestions.

5. Use <kbd>Enter</kbd> to jump to your chosen location. Alternatively, use <kbd>Ctrl</kbd><kbd>Enter</kbd> (Windows and Linux) or <kbd>⌘</kbd><kbd>Enter</kbd> (Mac) to open the location in a new browser tab.

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

5. Use the arrow keys to highlight the search result you want and use <kbd>Enter</kbd> to jump to your chosen location. Alternatively, use <kbd>Ctrl</kbd><kbd>Enter</kbd> (Windows and Linux) or <kbd>⌘</kbd><kbd>Enter</kbd> (Mac) to open the location in a new browser tab.

## Running commands from the {% data variables.product.prodname_command_palette %}

You can use the {% data variables.product.prodname_command_palette %} to run commands. For example, you can create a new repository or issue, or change your theme. When you run a command, the location for its action is determined by either the underlying page or the scope shown in the command palette.

- Pull request and issue commands always run on the underlying page.
- Higher-level commands, for example, repository commands, run in the scope shown in the command palette.

For a full list of supported commands, see "[{% data variables.product.prodname_command_palette %} reference](#github-command-palette-reference)."

1. Use <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>k</kbd> (Windows and Linux) or <kbd>⌘</kbd><kbd>Shift</kbd><kbd>k</kbd> (Mac) to open the command palette in command mode. If you already have the command palette open, press <kbd>></kbd> to switch to command mode. {% data variables.product.prodname_dotcom %} suggests commands based on your location.

   ![Command palette command mode](/assets/images/help/command-palette/command-palette-command-mode.png)

{% data reusables.command-palette.change-scope %}

3. If the command you want is not displayed, check your scope then start entering the command name in the text box.

4. Use the arrow keys to highlight the command you want and use <kbd>Enter</kbd> to run it.

## Closing the command palette

When the command palette is active, you can use one of the following keyboard shortcuts to close the command palette:

- Search and navigation mode: <kbd>esc</kbd> or <kbd>Ctrl</kbd><kbd>k</kbd> (Windows and Linux)  <kbd>⌘</kbd><kbd>k</kbd> (Mac)
- Command mode: <kbd>esc</kbd> or <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>k</kbd> (Windows and Linux)  <kbd>⌘</kbd><kbd>Shift</kbd><kbd>k</kbd> (Mac)

## {% data variables.product.prodname_command_palette %} reference

### Keystroke functions

These keystrokes are available when the command palette is in navigation and search modes, that is, they are not available in command mode.

| Keystroke                                                       | Function                                                                                                                                                                                                                                       |
|:--------------------------------------------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>></kbd>                                                    | Enter command mode. For more information, see "[Running commands from the {% data variables.product.prodname_command_palette %}](#running-commands-from-the-github-command-palette)."                                                        |
| <kbd>#</kbd>                                                    | Search for issues, pull requests, discussions, and projects. For more information, see "[Searching with the {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)."                             |
| <kbd>@</kbd>                                                    | Search for users, organizations, and repositories. For more information, see "[Searching with the {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)."                                       |
| <kbd>/</kbd>                                                    | Search for files within a repository scope or repositories within an organization scope. For more information, see "[Searching with the {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)." |
| <kbd>!</kbd>                                                    | Search just for projects. For more information, see "[Searching with the {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)."                                                                |
| <kbd>Ctrl</kbd><kbd>c</kbd> or <kbd>⌘</kbd><kbd>c</kbd>         | Copy the search or navigation URL for the highlighted result to the clipboard.                                                                                                                                                                 |
| <kbd>Enter</kbd>                                                | Jump to the highlighted result or run the highlighted command.                                                                                                                                                                                 |
| <kbd>Ctrl</kbd><kbd>Enter</kbd> or <kbd>⌘</kbd><kbd>Enter</kbd> | Open the highlighted search or navigation result in a new brower tab.                                                                                                                                                                          |
| <kbd>?</kbd>                                                    | Display help within the command palette.                                                                                                                                                                                                       |

### Global commands

These commands are available from all scopes.

| Command                              | Behavior                                                                                                                                                                                                                                                                              |
|:------------------------------------ |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Import repository`                  | Create a new repository by importing a project from another version control system. For more information, see "[Importing a repository with GitHub importer](/github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer)." |
| `New gist`                           | Open a new gist. For more information, see "[Creating a gist](/github/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)."                                                                                                                                      |
| `New organization`                   | Create a new organization. Para obter mais informações, consulte "[Criar uma nova organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".                                                                          |
| `Novo projeto`                       | Create a new project board. For more information, see "[Creating a project](/issues/trying-out-the-new-projects-experience/creating-a-project)."                                                                                                                                      |
| `New repository`                     | Create a new repository from scratch. Para obter mais informações, consulte "[Criar um novo repositório](/repositories/creating-and-managing-repositories/creating-a-new-repository)."                                                                                                |
| `Switch theme to <theme name>` | Change directly to a different theme for the UI. For more information, see "[Managing your theme settings](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings)."                                       |


### Organization commands

These commands are available only within the scope of an organization.

| Command    | Behavior                                                                                                                                                    |
|:---------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `New team` | Create a new team in the current organization. For more information, see "[Creating a team](/organizations/organizing-members-into-teams/creating-a-team)." |

### Repository commands

Most of these commands are available only on the home page of the repository. If a command is also available on other pages, this is noted in the behavior column.

| Command                              | Behavior                                                                                                                                                                                                                                                             |
|:------------------------------------ |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Clone repository: <URL type>` | Copy the URL needed to clone the repository using {% data variables.product.prodname_cli %}, HTTPS, or SSH to the clipboard. Para obter mais informações, consulte "[Clonar um repositório](/repositories/creating-and-managing-repositories/cloning-a-repository)". |
| `New discussion`                     | Create a new discussion in the repository. For more information, see "[Creating a new discussion](/discussions/quickstart#creating-a-new-discussion)."                                                                                                               |
| `New file`                           | Create a new file from any page in the repository. Para obter mais informações, consulte "[Adicionar um arquivo a um repositório](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)."                                                   |
| `New issue`                          | Open a new issue from any page in the repository. Para obter mais informações, consulte "[Criar um problema](/issues/tracking-your-work-with-issues/creating-an-issue)".                                                                                             |
| `Open in new codespace`              | Create and open a codespace for this repository. Para obter mais informações, consulte "[Criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".                                                                                            |
| `Open in github.dev editor`          | Open the current repository in the github.dev editor. For more information, see "[Opening the web based editor](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)."                                                                           |

### File commands

These commands are available only when you open the command palette from a file in a repository.

| Command                     | Behavior                                                                                                                                                                                                                                                                                                             |
|:--------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Copy permalink`            | Create a link to the file that includes the current commit SHA and copy the link to the clipboard. Para obter mais informações, consulte "[Obter links permanentes em arquivos](/repositories/working-with-files/using-files/getting-permanent-links-to-files#press-y-to-permalink-to-a-file-in-a-specific-commit)". |
| `Open in github.dev editor` | Open the currently displayed file in github.dev editor. For more information, see "[Opening the web based editor](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)."                                                                                                                         |

### Discussion commands

These commands are available only when you open the command palette from a discussion. They act on your current page and are not affected by the scope set in the command palette.

| Command                   | Behavior                                                                                                                                                                                                                                                  |
|:------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Delete discussion...`    | Permanently delete the discussion. Para obter mais informações, consulte "[Gerenciar discussões no seu repositório](/discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository#deleting-a-discussion)".                 |
| `Edit discussion body`    | Open the main body of the discussion ready for editing.                                                                                                                                                                                                   |
| `Subscribe`/`unsubscribe` | Opt in or out of notifications for additions to the discussion. Para obter mais informações, consulte "[Sobre notificações](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)".       |
| `Transfer discussion...`  | Move the discussion to a different repository. Para obter mais informações, consulte "[Gerenciar discussões no seu repositório](/discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository#transferring-a-discussion)". |

### Issue commands

These commands are available only when you open the command palette from an issue. They act on your current page and are not affected by the scope set in the command palette.

| Command                          | Behavior                                                                                                                                                                                                                                              |
|:-------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Close`/`reopen issue`           | Close or reopen the current issue. Para obter mais informações, consulte "[Sobre problemas](/issues/tracking-your-work-with-issues/about-issues)".                                                                                                    |
| `Convert issue to discussion...` | Convert the current issue into a discussion. Para obter mais informações, consulte "[Moderação de discussões](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)".                      |
| `Delete issue...`                | Delete the current issue. Para obter mais informações, consulte "[Excluir uma problema](/issues/tracking-your-work-with-issues/deleting-an-issue)".                                                                                                   |
| `Edit issue body`                | Open the main body of the issue ready for editing.                                                                                                                                                                                                    |
| `Edit issue title`               | Open the title of the issue ready for editing.                                                                                                                                                                                                        |
| `Lock issue`                     | Limit new comments to users with write access to the repository. Para obter mais informações, consulte "[Bloquear conversas](/communities/moderating-comments-and-conversations/locking-conversations)".                                              |
| `Pin`/`unpin issue`              | Change whether or not the issue is shown in the pinned issues section for the repository. Para obter mais informações, consulte "[Fixar um problema no seu repositório](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)". |
| `Subscribe`/`unscubscribe`       | Opt in or out of notifications for changes to this issue. Para obter mais informações, consulte "[Sobre notificações](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)".         |
| `Transfer issue...`              | Transfer the issue to another repository. Para obter mais informações, consulte "[Transferir um problema para outro repositório](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)".                                |

### Pull request commands

These commands are available only when you open the command palette from a pull request. They act on your current page and are not affected by the scope set in the command palette.

| Command                                                    | Behavior                                                                                                                                                                                                                                                                                                                                      |
|:---------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Close`/`reopen pull request`                              | Close or reopen the current pull request. Para obter mais informações, consulte "[Sobre pull requests](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".                                                                                                                      |
| `Convert to draft`/`Mark pull request as ready for review` | Change the state of the pull request to show it as ready, or not ready, for review. For more information, see "[Changing the state of a pull request](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)."                                                      |
| `Copy current branch name`                                 | Add the name of the head branch for the pull request to the clipboard.                                                                                                                                                                                                                                                                        |
| `Edit pull request body`                                   | Open the main body of the pull request ready for editing.                                                                                                                                                                                                                                                                                     |
| `Edit pull request title`                                  | Open the title of the pull request ready for editing.                                                                                                                                                                                                                                                                                         |
| `Open in new codespace`                                    | Create and open a codespace for the head branch of the pull request. Para obter mais informações, consulte "[Criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".                                                                                                                                                 |
| `Subscribe`/`unscubscribe`                                 | Opt in or out of notifications for changes to this pull request. Para obter mais informações, consulte "[Sobre notificações](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)".                                                                                          |
| `Update current branch`                                    | Update the head branch of the pull request with changes from the base branch. This is available only for pull requests that target the default branch of the repository. Para obter mais informações, consulte "[Sobre branches](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)". |
