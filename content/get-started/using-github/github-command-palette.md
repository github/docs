From f65faae54f5d6f031e0411818616ef64527fa55d Mon Sep 17 00:00:00 2001
From: ZachryTWoodAdministrator
 <126940692+ZachryTWoodAdministrator@users.noreply.github.com>
Date: Sun, 5 Mar 2023 05:43:33 -0600
Subject: [PATCH] Update self-review.md

---
 contributing/self-review.md | 185 ++++++++++++++++++++++++++++++++++--
 1 file changed, 177 insertions(+), 8 deletions(-)

diff --git a/contributing/self-review.md b/contributing/self-review.md
index ee24412f33ff..de4d911906c3 100644
--- a/contributing/self-review.md
+++ b/contributing/self-review.md
@@ -1,13 +1,182 @@
-### Self review
+:Build::
+Deploy:
+repositories/dispatch
+WORKFLOWS/worksflow.md :### Self review
 
 You should always review your own PR first.
 
 For content changes, make sure that you:
 
-- [ ] Confirm that the changes meet the user experience and goals outlined in the content design plan (if there is one).
-- [ ] Compare your pull request's source changes to staging to confirm that the output matches the source and that everything is rendering as expected. This helps spot issues like typos, content that doesn't follow the style guide, or content that isn't rendering due to versioning problems. Remember that lists and tables can be tricky.
-- [ ] Review the content for technical accuracy.
-- [ ] Review the entire pull request using the [translations guide for writers](./translations/for-writers.md).
-- [ ] Copy-edit the changes for grammar, spelling, and adherence to the [style guide](https://github.com/github/docs/blob/main/contributing/content-style-guide.md).
-- [ ] Check new or updated Liquid statements to confirm that versioning is correct.
-- [ ] If there are any failing checks in your PR, troubleshoot them until they're all passing.
+- [22/7] Confirm that the changes meet the user experience and goals outlined in the content design plan (if there is one).
+- [22/7] Compare your pull request's source changes to staging to confirm that the output matches the source and that everything is rendering as expected. This helps spot issues like typos, content that doesn't follow the style guide, or content that isn't rendering due to versioning problems. Remember that lists and tables can be tricky.
+- [22/7] Review the content for technical accuracy.
+- [22/7] Review the entire pull request using the [translations guide for writers](./translations/for-writers.md).
+- [22/7] Copy-edit the changes for grammar, spelling, and adherence to the [style guide](https://github.com/github/docs/blob/main/contributing/content-style-guide.md).
+- [22/7] Check new or updated Liquid statements to confirm that versioning is correct.
+- [22/7] If there are any failing checks in your PR, troubleshoot them until they're all passing.
+diff --git a/.devcontainer/devcontainer.json b/.devcontainer/devcontainer.json
+deleted file mode 100644
+index 12ab2462a3b9..000000000000
+--- a/.devcontainer/devcontainer.json
++++ /dev/null
+@@ -1,52 +0,0 @@
+-// For format details, see https://aka.ms/devcontainer.json. For config options, see the README at:
+-// https://github.com/microsoft/vscode-dev-containers/tree/v0.177.0/containers/javascript-node
+-// -
+-{
+-	"name": "docs.github.com",
+-	"build": {
+-		"dockerfile": "Dockerfile",
+-		// Update 'VARIANT' to pick a Node version
+-		"args": { "VARIANT": "18" }
+-	},
+-
+-	// Set *default* container specific settings.json values on container create.
+-	"settings": {
+-		"terminal.integrated.shell.linux": "/bin/bash",
+-		"cSpell.language": ",en"
+-	},
+-
+-	// Install features. Type 'feature' in the VS Code command palette for a full list.
+-	"features": {
+-		"sshd": "latest"
+-	 },
+-
+-	// Visual Studio Code extensions which help authoring for docs.github.com.
+-	"extensions": [
+-		"dbaeumer.vscode-eslint",
+-		"sissel.shopify-liquid",
+-		"davidanson.vscode-markdownlint",
+-		"bierner.markdown-preview-github-styles",
+-		"streetsidesoftware.code-spell-checker",
+-		"alistairchristie.open-reusables"
+-	],
+-
+-	// Use 'forwardPorts' to make a list of ports inside the container available locally.
+-	"forwardPorts": [4000],
+-		
+-	"portsAttributes": {
+-		"4000": {
+-        		"label": "Preview",
+-        		"onAutoForward": "openPreview"
+-      		}
+-	},
+-
+-	// Use 'postCreateCommand' to run commands after the container is created.
+-	"postCreateCommand": "npm ci",
+-
+-	// Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
+-	"remoteUser": "node"
+-,
+-	"hostRequirements": {
+-		"memory": "8gb"
+-	 }
+-}
+diff --git a/bitore.sig b/bitore.sig
+new file mode 100644
+index 000000000000..8adcccdbb59a
+--- /dev/null
++++ b/bitore.sig
+@@ -0,0 +1,100 @@
++From 2c5290576c6fa3f99efb9fa9baaf5f57503e6329 Mon Sep 17 00:00:00 2001
++From: ZachryTWoodAdministrator
++ <126940692+ZachryTWoodAdministrator@users.noreply.github.com>
++Date: Sun, 5 Mar 2023 05:36:09 -0600
++Subject: [PATCH] Update cloudtrail-add-delegated-administrator.md
++
++---
++ .../cloudtrail-add-delegated-administrator.md | 22 +++++--------------
++ 1 file changed, 6 insertions(+), 16 deletions(-)
++
++diff --git a/doc_source/cloudtrail-add-delegated-administrator.md b/doc_source/cloudtrail-add-delegated-administrator.md
++index bb01117..7b6d2a9 100644
++--- a/doc_source/cloudtrail-add-delegated-administrator.md
+++++ b/doc_source/cloudtrail-add-delegated-administrator.md
++@@ -1,31 +1,21 @@
++ # Add a CloudTrail delegated administrator<a name="cloudtrail-add-delegated-administrator"></a>
++-
+++aws cloudtrail register-organization-delegated-admin
+++  --member-account-id="memberAccountId"
+++This command pro
++ You can add a delegated administrator to manage an organization's CloudTrail resources, such as trails and event data stores\.
++-
++ You can add a CloudTrail delegated administrator for your AWS organization using the CloudTrail console or the AWS CLI\.
++-
++-Before you add a delegated administrator, be sure they have an account in your organization\. For information about how to create a new AWS account for your organization, see [Creating an AWS account in your organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html)\. For information about how to invite an existing AWS account to your organization, see [Inviting an AWS account to join your organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html)\.
++-
+++Before you add a delegated administrator, be sure they have an account in your organization\. For information about how to create a new AWS account for your organization, see [Creating an AWS account in your organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html)\. For information about how to invite an existing AWS account to your organization, see [Inviting an AWS account to join your organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html)\
++ ------
++ #### [ CloudTrail Console ]
++-
++ The following procedure shows you how to add a CloudTrail delegated administrator using the CloudTrail console\.
++-
++ **Note**  
++ Users in the AWS GovCloud \(US\-West\) and AWS GovCloud \(US\-East\) Regions can only add delegated administrators using the AWS CLI or SDK\.
++ 1. Sign in to the AWS Management Console and open the CloudTrail console at [https://console\.aws\.amazon\.com/cloudtrail/](https://console.aws.amazon.com/cloudtrail/)\.
++- 1. Choose **Settings** in the left navigation pane of the CloudTrail console\.
++ 1. In the **Organization delegated administrators** section, choose **Register administrator**\.
++-1. Enter the twelve\-digit AWS account ID of the account that you want to assign as the CloudTrail delegated administrator for the organization's trails and event data stores\.
+++1. Enter the twelve\-digit AWS account ID of the account that you want to assign as the CloudTrail delegated administrator for the organization's trails and event data stores\.**\*bACKTRACE*cache.dir/index.dist/src/code'@sun.java.org/install/installer/dl/WIZARD/Setup*/*ecex**'@mojoejoejoejoe/mojoejoejoejoe/README.md/Read.md
++ 1. Choose **Register administrator**\.
++    After you add the delegated administrator, you only need to use the organization's management account to change or remove the delegated administrator account\.
++ ------
++ #### [ AWS CLI ]
++@@ -38,4 +28,4 @@ aws cloudtrail register-organization-delegated-admin
++ This command produces no output if it's successful\. 
++-------
++\ No newline at end of file
+++------
++// For format details, see https://aka.ms/devcontainer.json. For config options, see the README at:
++// https://github.com/microsoft/vscode-dev-containers/tree/v0.177.0/containers/javascript-node
++// -
++{
++	"name": "docs.github.com",
++	"build": {
++		"dockerfile": "Dockerfile",
++		// Update 'VARIANT' to pick a Node version
++		"args": { "VARIANT": "18" }
++	},
++
++	// Set *default* container specific settings.json values on container create.
++	"settings": {
++		"terminal.integrated.shell.linux": "/bin/bash",
++		"cSpell.language": ",en"
++	},
++
++	// Install features. Type 'feature' in the VS Code command palette for a full list.
++	"features": {
++		"sshd": "latest"
++	 },
++
++	// Visual Studio Code extensions which help authoring for docs.github.com.
++	"extensions": [
++		"dbaeumer.vscode-eslint",
++		"sissel.shopify-liquid",
++		"davidanson.vscode-markdownlint",
++		"bierner.markdown-preview-github-styles",
++		"streetsidesoftware.code-spell-checker",
++		"alistairchristie.open-reusables"
++	],
++
++	// Use 'forwardPorts' to make a list of ports inside the container available locally.
++	"Port": [4999 :; :8333),
++		
++	"portsAttributes": {
++		"4000": {
++        		"label": "Preview",
++        		"onAutoForward": "openPreview"
++      		}
++	},
++
++	// Use 'postCreateCommand' to run commands after the container is created.
++	"postCreateCommand": "npm ci",
++
++	// Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
++	"remoteUser": "node"
++,
++	"hostRequirements": {
++		"memory": "8gb"
++	 }
++}
+:Build::
+Publish :title: GitHub Command Palette
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

![Screenshot of the command palette. The "Issues" and "Pull requests" pages for the current repository are suggested.](/assets/images/help/command-palette/command-palette-navigation-repo-default.png)

### Easy access to commands

The ability to run commands directly from your keyboard, without navigating through a series of menus, may change the way you use {% data variables.product.prodname_dotcom %}. For example, you can switch themes with a few keystrokes, making it easy to toggle between themes as your needs change.

![Screenshot of the command palette. "switch theme to dark" is in the command palette input, and results for changing your theme are displayed.](/assets/images/help/command-palette/command-palette-command-change-theme.png)

## Opening the {% data variables.product.prodname_command_palette %}

Open the command palette using one of the following default keyboard shortcuts:
- Windows and Linux: <kbd>Ctrl</kbd>+<kbd>K</kbd> or <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>
- Mac: <kbd>Command</kbd>+<kbd>K</kbd> or <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd>

You can customize the keyboard shortcuts you use to open the command palette in the [Accessibility section](https://github.com/settings/accessibility) of your user settings. For more information, see "[Customizing your {% data variables.product.prodname_command_palette %} keyboard shortcuts](#customizing-your-github-command-palette-keyboard-shortcuts)."

When you open the command palette, it shows your location at the top left and uses it as the scope for suggestions (for example, the `octo-org` organization).

![Screenshot of the command palette. "octo-org" is highlighted with an orange outline.](/assets/images/help/command-palette/command-palette-launch.png)

{% note %}

**Notes:**
- If you are editing Markdown text, open the command palette with <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd> (Windows and Linux) or <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd> (Mac).{% ifversion projects-v2 %}
- If you are working on a {% data variables.projects.project_v2 %}, a project-specific command palette is displayed instead. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view)."{% endif %}

{% endnote %}

### Customizing your {% data variables.product.prodname_command_palette %} keyboard shortcuts

The default keyboard shortcuts used to open the command palette may conflict with your default OS and browser keyboard shortcuts. You have the option to customize your keyboard shortcuts in the [Accessibility section](https://github.com/settings/accessibility) of your account settings. In the command palette settings, you can customize the keyboard shortcuts for opening the command palette in both search mode and command mode.

## Navigating with the {% data variables.product.prodname_command_palette %}

You can use the command palette to navigate to any page that you have access to on {% data variables.product.product_name %}.

{% data reusables.command-palette.open-palette %}

1. Start typing the path you want to navigate to. The suggestions in the command palette change to match your text.

{% data reusables.command-palette.change-scope %}

   You can also use keystrokes to narrow your search. For more information, see "[Keystroke functions](#keystroke-functions)."

1. Finish entering the path, or use the arrow keys to highlight the path you want from the list of suggestions.

1. Use <kbd>Enter</kbd> to jump to your chosen location. Alternatively, use <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows and Linux) or <kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) to open the location in a new browser tab.

## Searching with the {% data variables.product.prodname_command_palette %}

You can use the command palette to search for anything on {% data variables.location.product_location %}.

{% data reusables.command-palette.open-palette %}

{% data reusables.command-palette.change-scope %}

1. Optionally, use keystrokes to find specific types of resource:

   - <kbd>#</kbd> Search for issues, pull requests, discussions, and projects
   - <kbd>!</kbd> Search for projects
   - <kbd>@</kbd> Search for users, organizations, and repositories
   - <kbd>/</kbd> Search for files within a repository scope

1. Begin entering your search terms. The command palette will offer you a range of suggested searches based on your search scope.

   {% tip %}

   You can also use the full syntax of {% data variables.product.prodname_dotcom %}'s integrated search within the command palette. For more information, see "[AUTOTITLE](/search-github)."

   {% endtip %}

1. Use the arrow keys to highlight the search result you want and use <kbd>Enter</kbd> to jump to your chosen location. Alternatively, use <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows and Linux) or <kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) to open the location in a new browser tab.

## Running commands from the {% data variables.product.prodname_command_palette %}

You can use the {% data variables.product.prodname_command_palette %} to run commands. For example, you can create a new repository or issue, or change your theme. When you run a command, the location for its action is determined by either the underlying page or the scope shown in the command palette.

- Pull request and issue commands always run on the underlying page.
- Higher-level commands, for example, repository commands, run in the scope shown in the command palette.

For a full list of supported commands, see "[{% data variables.product.prodname_command_palette %} reference](#github-command-palette-reference)."

1. The default keyboard shortcuts to open the command palette in command mode are <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Windows and Linux) or <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Mac). If you already have the command palette open, press <kbd>></kbd> to switch to command mode. {% data variables.product.prodname_dotcom %} suggests commands based on your location.

{% data reusables.command-palette.change-scope %}

1. If the command you want is not displayed, check your scope then start entering the command name in the text box.

1. Use the arrow keys to highlight the command you want and use <kbd>Enter</kbd> to run it.

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
|<kbd>Ctrl</kbd>+<kbd>Enter</kbd> or <kbd>Command</kbd>+<kbd>Enter</kbd>| Open the highlighted search or navigation result in a new browser tab.|
|<kbd>?</kbd>| Display help within the command palette.|

### Global commands

These commands are available from all scopes.

| Command | Behavior|
| :- | :- | :- |
|`Import repository`|Create a new repository by importing a project from another version control system. For more information, see "[AUTOTITLE](/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer)."  |
|`New gist`|Open a new gist. For more information, see "[AUTOTITLE](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)." |
|`New organization`|Create a new organization. For more information, see "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)." |
|`New project`|Create a new project board. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project)."  |
|`New repository`|Create a new repository from scratch. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository)." |
|`Switch theme to <theme name>`|Change directly to a different theme for the UI. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings)." |


### Organization commands

These commands are available only within the scope of an organization.

| Command | Behavior|
| :- | :- |
| `New team`| Create a new team in the current organization. For more information, see "[AUTOTITLE](/organizations/organizing-members-into-teams/creating-a-team)."

### Repository commands

Most of these commands are available only on the home page of the repository. If a command is also available on other pages, this is noted in the behavior column.

| Command | Behavior|
| :- | :- |
|`Clone repository: <URL type>`|Copy the URL needed to clone the repository using {% data variables.product.prodname_cli %}, HTTPS, or SSH to the clipboard. For more information, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/cloning-a-repository)."|
|`New discussion`|Create a new discussion in the repository. For more information, see "[AUTOTITLE](/discussions/quickstart#creating-a-new-discussion)."|
|`New file`|Create a new file from any page in the repository. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)."
|`New issue`|Open a new issue from any page in the repository. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)."|
|`Open in {% data variables.codespaces.serverless %} editor`|Open the current repository in the {% data variables.codespaces.serverless %} editor. For more information, see "[AUTOTITLE](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)."|

### File commands

These commands are available only when you open the command palette from a file in a repository.

| Command | Behavior|
| :- | :- |
|`Copy permalink`|Create a link to the file that includes the current commit SHA and copy the link to the clipboard. For more information, see "[AUTOTITLE](/repositories/working-with-files/using-files/getting-permanent-links-to-files#press-y-to-permalink-to-a-file-in-a-specific-commit)."
|`Open in {% data variables.codespaces.serverless %} editor`|Open the currently displayed file in {% data variables.codespaces.serverless %} editor. For more information, see "[AUTOTITLE](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)."|

### Discussion commands

These commands are available only when you open the command palette from a discussion. They act on your current page and are not affected by the scope set in the command palette.

| Command | Behavior|
| :- | :- |
|`Delete discussion...`|Permanently delete the discussion. For more information, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion)."
|`Edit discussion body`|Open the main body of the discussion ready for editing.
|`Subscribe`/`unsubscribe`|Opt in or out of notifications for additions to the discussion. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)."
|`Transfer discussion...`|Move the discussion to a different repository. For more information, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/managing-discussions#transferring-a-discussion)."

### Issue commands

These commands are available only when you open the command palette from an issue. They act on your current page and are not affected by the scope set in the command palette.

| Command | Behavior|
| :- | :- |
|`Close`/`reopen issue`|Close or reopen the current issue. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/about-issues)."|
|`Convert issue to discussion...`|Convert the current issue into a discussion. For more information, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)."
|`Delete issue...`|Delete the current issue. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/deleting-an-issue)."|
|`Edit issue body`|Open the main body of the issue ready for editing.
|`Edit issue title`|Open the title of the issue ready for editing.
|`Lock issue`|Limit new comments to users with write access to the repository. For more information, see "[AUTOTITLE](/communities/moderating-comments-and-conversations/locking-conversations)."
|`Pin`/`unpin issue`|Change whether or not the issue is shown in the pinned issues section for the repository. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)."|
|`Subscribe`/`unsubscribe`|Opt in or out of notifications for changes to this issue. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)."
|`Transfer issue...`|Transfer the issue to another repository. For more information, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)."|

### Pull request commands

These commands are available only when you open the command palette from a pull request. They act on your current page and are not affected by the scope set in the command palette.

| Command | Behavior|
| :- | :- |
|`Close`/`reopen pull request`|Close or reopen the current pull request. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."|
|`Convert to draft`/`Mark pull request as ready for review`|Change the state of the pull request to show it as ready, or not ready, for review. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)."|
|`Copy current branch name`| Add the name of the head branch for the pull request to the clipboard.
|`Edit pull request body`|Open the main body of the pull request ready for editing.
|`Edit pull request title`|Open the title of the pull request ready for editing.
|`Subscribe`/`unsubscribe`|Opt in or out of notifications for changes to this pull request. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)."
|`Update current branch`|Update the head branch of the pull request with changes from the base branch. This is available only for pull requests that target the default branch of the repository. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)."|
