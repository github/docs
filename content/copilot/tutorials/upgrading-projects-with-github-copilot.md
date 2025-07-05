---
title: Upgrading projects with GitHub Copilot
shortTitle: Upgrade projects
intro: 'You can use {% data variables.product.prodname_copilot %} to upgrade your Maven and Gradle Java applications and .NET applications.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/using-github-copilot/guides-on-using-github-copilot/upgrading-java-projects-with-github-copilot
  - /copilot/tutorials/upgrading-java-projects-with-github-copilot
---

> [!NOTE]
> "GitHub Copilot app modernization – upgrade for Java" and "GitHub Copilot app modernization – Upgrade for .NET" are currently in {% data variables.release-phases.public_preview %} and subject to change.

## Introduction

{% data variables.product.prodname_copilot %} can help streamline the process of modernizing and upgrading your Java and .NET applications. {% data variables.product.prodname_copilot_short %} will analyze the project, generate a plan, automatically fix issues it encounters when carrying out the plan, and produce a summary.

## Upgrading Java projects

You can upgrade a Git-based Maven or Gradle Java project using {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}. You will need:

* Either a **{% data variables.copilot.copilot_pro %}**, **{% data variables.copilot.copilot_pro_plus %}**, **{% data variables.copilot.copilot_for_business %}** or **{% data variables.copilot.copilot_enterprise %}** [subscription plan](/copilot/about-github-copilot/subscription-plans-for-github-copilot).
* The latest version of [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/).
* For Maven-based projects, access to the public Maven Central repository.
* Installed versions of both the source and target JDKs.

For the next steps, see [Quickstart: upgrade a Java project with GitHub Copilot App Modernization - upgrade for Java (preview)](https://learn.microsoft.com/en-gb/java/upgrade/quickstart-upgrade) on Microsoft Learn.

## Upgrading .NET projects

You can also upgrade a .NET project using {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}. You will need:

* Either a **{% data variables.copilot.copilot_pro %}**, **{% data variables.copilot.copilot_pro_plus %}**, **{% data variables.copilot.copilot_for_business %}** or **{% data variables.copilot.copilot_enterprise %}** [subscription plan](/copilot/about-github-copilot/subscription-plans-for-github-copilot).
* The latest release of {% data variables.product.prodname_vs %} Enterprise, Professional or Community 2022.

For the next steps, see [GitHub Copilot app modernization - upgrade for .NET](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.GitHubCopilotUpgradeAgent) on Microsoft Visual Studio Marketplace.
