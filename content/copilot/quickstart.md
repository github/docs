---
title: Quickstart for GitHub Copilot
CLI Design Template

! Do not edit this template directly. Please make a copy ! 
 





















-----

Components

Syntax

[branch]
(label)
owner/repo


Prompts

? Yes/No Prompt [y/N]

? Short text prompt (Auto fill)

? Long text prompt [(e) to launch vim, enter to skip] 

? Single choice prompt [Use arrows to move, type to filter]
> Choice focused
  Choice 
  Choice

? Multi select prompt [Use arrows to move, space to select, type to filter]
> [x]  Choice selected and focused
  [x]  Choice selected
  [ ]  Projects
  [ ]  Milestone



State

#123 Open issue or pull request
#123 Closed issue pull request
#123 Merged pull request
#123 Draft pull request

✓ Checks passing
✓ Approved
- Review requested
+ Changes requested

✓ Success message
! Alert
✗ Error message (ideal)
error message (current)

✓ Item closed
✓ Item merged


Loading spinner

⣟ Action...



Lists

$ gh issue list 

Showing 3 of 222 issues in cli/cli

#1360  Ability to ski...                     about 2 days ago
#1358  Provide extra ...  (enhancement)      about 3 days ago
#1354  Add ability to...  (enhancement, ...  about 3 days ago



Detail view



Ability to skip confirmation via a flag
Open • AliabbasMerchant opened about 2 days ago • 1 comment


#1330 proposes to add confirmation to risky commands. It is a nice feature to have, but in order to support proper scriptability, we should support a flag (preferably  -y , like in most CLIs), to skip asking for confirmation. So for each of the 4 commands mentioned there (and possibly even more in the future), we should add support for the  -y  flag                                       


View this issue on GitHub: https://github.com/cli/cli/issues/1360


Headers


Creating issue in cli/cli

Showing 30 of 226 issues in cli/cli

Relevant pull requests in cli/cli

cli/cli
GitHub’s official command line tool

Default branch is not being prioritized
Closed • tierninho opened about 6 months ago • 1 comment



Empty states

Current branch
  There is no pull request associated with [master]

Created by you
  You have no open pull requests

Requesting a code review from you
  You have no pull requests to review

No pull requests match your search in cli/cli

No issues match your search in cli/cli

There are no open issues in ampinsk/create-test




Help page

$ gh

Work seamlessly with GitHub from the command line. 

USAGE
  gh <command> <subcommand> [flags]
  Commands are run inside of a GitHub repository.

CORE COMMANDS
  issue:       Create and view issues
  pr:          Create, view, and checkout pull requests
  repo:        Create, clone, fork, and view repositories

ADDITIONAL COMMANDS
  help:        Help about any command
  config:      Set and get preferences
  completion:  Generate shell completion scripts

FLAGS
  -h, --help:              Show help for command
  -v, --version:           Show gh version

EXAMPLES
  $ gh issue create
  $ gh pr list
  $ gh repo fork

LEARN MORE
  Use "gh [command] [subcommand] --help" for more information about a command.
  Read the manual at <http://cli.github.com/manual>

FEEDBACK 
  Fill out our feedback form <https://forms.gle/umxd3h31c7aMQFKG7>
  Open an issue using “gh issue create -R cli/cli”



intro: '{% data variables.product.prodname_copilot %} can help you work, by offering inline suggestions as you code.'
product: '{% data reusables.gated-features.copilot %}'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
shortTitle: Quickstart
topics:
  - Copilot
---

## Introduction

{% data variables.product.prodname_copilot %} is an AI pair programmer. You can use {% data variables.product.prodname_copilot %} to get suggestions for whole lines or entire functions right inside your editor.

This guide will show you how to sign up for {% data variables.product.prodname_copilot %}, install the {% data variables.product.prodname_copilot %} extension in {% data variables.product.prodname_vscode %}, and get your first suggestion. For more information on {% data variables.product.prodname_copilot %}, see "[About {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)." For more in-depth information on how to use {% data variables.product.prodname_copilot %} in a variety of environments, see "[Getting Started](/copilot/getting-started-with-github-copilot)."

## Prerequisites

{% data reusables.copilot.copilot-prerequisites %}
- To use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}, you must have {% data variables.product.prodname_vscode %} installed. For more information, see the [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) documentation.

## Signing up for {% data variables.product.prodname_copilot %}

{% data reusables.copilot.signup-procedure %}

## Installing the {% data variables.product.prodname_copilot %} extension for {% data variables.product.prodname_vscode %}

To use {% data variables.product.prodname_copilot %}, you must first install the {% data variables.product.prodname_vscode %} extension.

1. In the {% data variables.product.prodname_vscode %} Marketplace, go to the [{% data variables.product.prodname_copilot %} extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) page and click **Install**.
   ![Install {% data variables.product.prodname_copilot %} extension {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. A popup will appear, asking to open {% data variables.product.prodname_vscode %}. Click **Open {% data variables.product.prodname_vscode %}**.
1. In the "Extension: {% data variables.product.prodname_copilot %}" tab in {% data variables.product.prodname_vscode %}, click **Install**.
   ![Install button in {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. If you have not previously authorized {% data variables.product.prodname_vscode %} in your {% data variables.product.prodname_dotcom %} account, you will be prompted to sign in to {% data variables.product.prodname_dotcom %} in {% data variables.product.prodname_vscode %}.
   - If you have previously authorized {% data variables.product.prodname_vscode %} in your {% data variables.product.prodname_dotcom %} account, {% data variables.product.prodname_copilot %} will be automatically authorized.
   ![Screen shot of {% data variables.product.prodname_vscode %} authorization screen](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. In your browser, {% data variables.product.prodname_dotcom %} will request the necessary permissions for {% data variables.product.prodname_copilot %}. To approve these permissions, click **Authorize {% data variables.product.prodname_vscode %}**. 
1. In {% data variables.product.prodname_vscode %}, in the "{% data variables.product.prodname_vscode %}" dialogue box, to confirm the authentication, click **Open**. 

## Getting your first suggestion

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} The following samples are in JavaScript, but other languages will work similarly.

1. Open {% data variables.product.prodname_vscode %}.
{% data reusables.copilot.create-js-file %}
{% data reusables.copilot.type-function-header %}
   {% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text, as shown below. The exact suggestion may vary.
   ![First suggestion {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png)
{% data reusables.copilot.accept-suggestion %}

## Next Steps

You successfully installed {% data variables.product.prodname_copilot %} and received your first suggestion, but that's just the beginning! Here are some helpful resources for taking your next steps with {% data variables.product.prodname_copilot %}.

- [Getting Started](/copilot/getting-started-with-github-copilot): You've learned how to get your first suggestion in {% data variables.product.prodname_vscode %}. These guides show you how to set up and navigate the various functions of {% data variables.product.prodname_copilot %} across all of the supported environments.
- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/): See practical examples of how {% data variables.product.prodname_copilot %} can help you work.
- [Configuring {% data variables.product.prodname_copilot %}](/copilot/configuring-github-copilot): These guides provide details on how to configure {% data variables.product.prodname_copilot %} to your personal preferences.


## Further reading

- [About {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)
