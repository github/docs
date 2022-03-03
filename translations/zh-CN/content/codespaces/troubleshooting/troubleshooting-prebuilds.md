---
title: Troubleshooting prebuilds
shortTitle: Codespaces prebuilds
intro: You can use prebuilds to speed up the creation of codespaces. This article provides troubleshooting steps for common issues with prebuilds.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
---

{% data reusables.codespaces.prebuilds-beta-note %}

For more information about {% data variables.product.prodname_codespaces %} prebuilds, see "[Prebuilding your codespaces](/codespaces/prebuilding-your-codespaces)."

## Checking whether a codespace was created from a prebuild?

If multiple machine types are available when you create a codespace then a dialog box is displayed giving you a choice of machine types. This will display the "{% octicon "zap" aria-label="The zap icon" %} Prebuild ready" label beside machine types for which prebuilds are available.

![The dialog box for choosing a machine type](/assets/images/help/codespaces/choose-custom-machine-type.png)

If you have your {% data variables.product.prodname_codespaces %} editor preference set to "Visual Studio Code for Web" then the "Setting up your codespace" page will show the message "Prebuilt codespace found" if a prebuild is being used. Similarly, if your editor preference is "Visual Studio Code" then the integrated terminal will contain the message "You are on a prebuilt codespace defined by the prebuild configuration for your repository" when you create a new codespace. For more information, see "[Setting your default editor for Codespaces](/codespaces/customizing-your-codespace/setting-your-default-editor-for-codespaces)."

After you have created a codespace you can check whether it was created from a prebuild by running the following {% data variables.product.prodname_cli %} command in the terminal:

```shell{:copy}
gh api /user/codespaces/$CODESPACE_NAME --jq .prebuild
```

This returns `true` if the codespace was created using a prebuild.

Alternatively, if {% data variables.product.prodname_cli %} (`gh`) is not installed, you can use the following command, which returns `createFromPrebuild` if the codespace was created from a prebuild:

```shell{:copy}
cat /workspaces/.codespaces/shared/environment-variables.json | jq '.ACTION_NAME'
```

## The "Prebuild Ready" label is sometimes missing

You may notice that sometimes, when you create a new codespace from a prebuild-enabled branch, the "{% octicon "zap" aria-label="The zap icon" %} Prebuild Ready" label is not displayed in the dialog box for choosing a machine type. This means that prebuilds are not currently available.

Each time you push to a prebuild-enabled branch, the prebuild template is updated. If the push involves a change to the dev container then, while the update is in progress, the "{% octicon "zap" aria-label="The zap icon" %} Prebuild Ready" label is removed from the machine types dialog box. During this time you can still create codespaces without a prebuild template.

If your branch is not specifically enabled for prebuilds it may still benefit from prebuilds if it was branched from a prebuild-enabled branch. However, if the dev container is changed on your branch, so that it's not the same as the dev container on the base branch, prebuilds will no longer be available on your branch.

Here are things to check if the "{% octicon "zap" aria-label="The zap icon" %} Prebuild Ready" label is not displayed for a particular branch:

* Confirm that a prebuild configuration exists for this branch. If you’re not a repository administrator, you'll need to reach out to one to confirm this.
* Confirm that the prebuild configuration includes your region.
* Check whether a change to the dev container configuration was pushed to the prebuild-enabled branch recently. If so, you will have to wait until the prebuild workflow run for this push completes before prebuilds are available again.
* If no configuration changes were recently made, go to the **Actions** tab of your repository, click **{% octicon "codespaces" aria-label="The Codespaces icon" %} {% data variables.product.prodname_codespaces %} Prebuilds** in the workflows list, and check that prebuild workflow runs for the branch are succeeding. If latest runs of a workflow failed, and one or more of these failed runs contained changes to the dev container, then there will be no available prebuilds for the associated branch.

## 延伸阅读

- "[Configuring prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds)"
- "[Managing prebuilds](/codespaces/prebuilding-your-codespaces/managing-prebuilds)"
