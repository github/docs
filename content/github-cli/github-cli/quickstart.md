---
title: GitHub CLI quickstart
intro: 'Start using {% data variables.product.prodname_cli %} to work with {% data variables.product.company_short %} in the command line.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - CLI
type: overview
allowTitleToDifferFromFilename: true
shortTitle: Quickstart
---

## About {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %}

## Prerequisites

{% data reusables.rest-api.github-cli-install-and-auth %}

## Some useful commands

{% note %}

**Note**: When you use some commands for the first time - for example, `gh codespace SUBCOMMAND` - you'll be prompted to add extra scopes to your authentication token. Follow the onscreen instructions.

{% endnote %}

### Viewing your status

Enter `gh status` to see details of your current work on {% data variables.product.prodname_dotcom %} across all the repositories you're subscribed to.

### Viewing a repository

Enter `gh repo view OWNER/REPO` to see the repository description and `README.md` for the repository. Enter `gh repo view OWNER/REPO --web` to view the repository in your default browser.

If you run the `repo` subcommand from within the directory of a local Git repository that has a remote on {% data variables.product.prodname_dotcom %} you can omit `OWNER/REPO`.

### Cloning a repository

Enter `gh repo clone OWNER/REPO`. For example, `gh repo clone octo-org/octo-repo` clones the `octo-org/octo-repo` repository to the directory from which you ran this command on your local computer.

### Creating a repository

Enter `gh repo create` and follow the on-screen instructions. You can create a new, empty repository on {% data variables.product.prodname_dotcom %} and then, optionally, clone it locally. Alternatively, you can push an existing local repository to {% data variables.product.prodname_dotcom %}, and optionally set it as the remote for your local repository. For information on setting a local directory as a Git repository, see "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github#initializing-a-git-repository)."

### Working with issues

Enter `gh issue list --repo OWNER/REPO` to list the most recently created issues that are currently open for the specified repository. If you run the `issue` subcommand from within the directory of a local Git repository that has a remote on {% data variables.product.prodname_dotcom %} you can omit `--repo OWNER/REPO`. For example, enter `gh issue list --assignee "@me"` to list issues assigned to you in this repository, or `gh issue list --author monalisa` to list issues created by the user "monalisa."

You can also create a new issue, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-with-github-cli)," or search for an issue, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests?tool=cli#searching-for-issues-and-pull-requests)."

### Working with pull requests

Enter `gh pr list --repo OWNER/REPO` to list the most recently created pull requests that are currently open for the specified repository. If you run the `pr` subcommand from within the directory of a local Git repository that has a remote on {% data variables.product.prodname_dotcom %} you can omit `--repo OWNER/REPO`. For example, enter `gh pr list --author "@me"` to list open pull requests that you created in this repository.

Enter `gh pr list --label LABEL-NAME` to list open pull requests with a specific label. Enter `gh search prs --review-requested=@me --state=open` to list pull requests that you've been asked to review.

To create a pull request, enter `gh pr create` and follow the on-screen instructions. For more information, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request?tool=cli#creating-the-pull-request)."

### Working with codespaces

To create a new codespace, enter `gh codespace create` and follow the on-screen instructions.

To display your existing codespaces, enter `gh codespace list`. To open a codespace in the web version of {% data variables.product.prodname_vscode_shortname %} enter `gh codespace code -w` and choose a codespace .

In all of these commands you can substitute `cs` for `codespace`.

## Getting help

Enter `gh` for a reminder of the top-level {% data variables.product.prodname_cli %} commands that you can use. For example, `issue`, `pr`, `repo`, and so on.

For each command, and each subsidiary subcommand, you can append the `--help` flag to find out how it's used. For example, `gh issue --help` or `gh issue create --help`.

## Customizing {% data variables.product.prodname_cli %}

You can change configuration settings and add aliases or extensions, to make {% data variables.product.prodname_cli %} work the way that suits you best.

* Enter `gh config set SUBCOMMANDS` to configure {% data variables.product.prodname_cli %}'s settings, replacing `SUBCOMMANDS` with the setting you want to adjust.

  For example, you can specify the text editor that's used when a {% data variables.product.prodname_cli %} command requires you to edit text - such as when you add the body text for a new issue you're creating. To set your preferred text editor to {% data variables.product.prodname_vscode %} enter `gh config set editor "code -w"`. The `-w` (or `--wait`) flag in this example causes the command to wait for the file to be closed in {% data variables.product.prodname_vscode %} before proceeding with the next step in your terminal.

  For more information, see [`gh config set`](https://cli.github.com/manual/gh_config_set).

* Define aliases for commands that you commonly run. For example, if you run `gh alias set prd "pr create --draft"`, you will then be able to run `gh prd` to quickly open a draft pull request. For more information, see [`gh alias`](https://cli.github.com/manual/gh_alias).

* Create or add custom commands with {% data variables.product.prodname_cli %} extensions. For more information, see "[AUTOTITLE](/github-cli/github-cli/using-github-cli-extensions)" and "[AUTOTITLE](/github-cli/github-cli/creating-github-cli-extensions)."

## Further reading

* [AUTOTITLE](/github-cli/github-cli/github-cli-reference)
* [{% data variables.product.prodname_cli %} online manual](https://cli.github.com/manual/gh)
