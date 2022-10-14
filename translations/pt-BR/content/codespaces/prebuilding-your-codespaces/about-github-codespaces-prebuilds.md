---
title: About GitHub Codespaces prebuilds
shortTitle: About prebuilds
intro: '{% data variables.product.prodname_github_codespaces %} prebuilds help to speed up the creation of new codespaces for large or complex repositories.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds
---

## Overview

{% data reusables.codespaces.prebuilds-definition %}

If it currently takes more than 2 minutes to create a codespace for a repository, you are likely to benefit from using prebuilds. This is because, with a prebuild, any source code, editor extensions, project dependencies, commands, and configurations have already been downloaded, installed, and applied before you create a codespace. 

By default, whenever you push changes to your repository, {% data variables.product.prodname_github_codespaces %} uses {% data variables.product.prodname_actions %} to automatically update your prebuilds.

When prebuilds are available for a particular branch of a repository, a particular dev container configuration file, and for your region, you'll see the "{% octicon "zap" aria-label="The zap icon" %} Prebuild ready" label in the list of machine type options when you create a codespace. If a prebuild is still being created, you will see the "{% octicon "history" aria-label="The history icon" %} Prebuild in progress" label. For more information, see "[Creating a codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)."

![The dialog box for choosing a machine type](/assets/images/help/codespaces/choose-custom-machine-type.png)

## The prebuild process

To create a prebuild you set up a prebuild configuration. When you save the configuration, a {% data variables.product.prodname_actions %} workflow runs to create each of the required prebuilds; one workflow per prebuild. Workflows also run whenever the prebuilds for your configuration need to be updated. This can happen at scheduled intervals, on pushes to a prebuild-enabled repository, or when you change the dev container configuration. For more information, see "[Configuring prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)."  

When a prebuild configuration workflow runs, {% data variables.product.prodname_dotcom %} creates a temporary codespace, performing setup operations up to and including any `onCreateCommand` and `updateContentCommand` commands in the `devcontainer.json` file. No `postCreateCommand` commands are run during the creation of a prebuild. For more information about these commands, see the [`devcontainer.json` reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) in the {% data variables.product.prodname_vscode_shortname %} documentation. A snapshot of the generated container is then taken and stored.

As with other Actions workflows, running a prebuild configuration workflow will either consume some of the Actions minutes included with your account, if you have any, or it will incur charges for Actions minutes. Storage of codespace prebuilds is billed in the same way as storage of active or stopped codespaces. For more information, see "[About billing for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds)."

When you create a codespace from a prebuild, {% data variables.product.prodname_dotcom %} downloads the existing container snapshot from storage and deploys it on a fresh virtual machine, completing the remaining commands specified in the dev container configuration. Since many operations have already been performed, such as cloning the repository, creating a codespace from a prebuild can be substantially quicker than creating one without a prebuild. This is true where the repository is large and/or `onCreateCommand` commands take a long time to run.

## About pushing changes to prebuild-enabled branches

By default, each push to a branch that has a prebuild configuration results in a {% data variables.product.prodname_dotcom %}-managed Actions workflow run to update the prebuild. The prebuild workflow has a concurrency limit of one workflow run at a time for a given prebuild configuration, unless changes were made that affect the dev container configuration for the associated repository. For more information, see "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)." If a run is already in progress, the workflow run that was queued most recently queued will run next, after the current run completes. 

With the prebuild set to be updated on each push, it means that if there are very frequent pushes to your repository, prebuild updates will occur at least as often as it takes to run the prebuild workflow. That is, if your workflow run typically takes one hour to complete, prebuilds will be created for your repository roughly hourly, if the run succeeds, or more often if there were pushes that change the dev container configuration on the branch.

For example, let's imagine 5 pushes are made, in quick succession, against a branch that has a prebuild configuration. In this situation:

* A workflow run is started for the first push, to update the prebuild.
* If the 4 remaining pushes do not affect the dev container configuration, the workflow runs for these are queued in a "pending" state. 
  
  If any of the remaining 4 pushes change the dev container configuration, then the service will not skip that one and will immediately run the prebuild creation workflow, updating the prebuild accordingly if it succeeds. 

* Once the first run completes, workflow runs for pushes 2, 3, and 4 will be canceled, and the last queued workflow (for push 5) will run and update the prebuild. 
