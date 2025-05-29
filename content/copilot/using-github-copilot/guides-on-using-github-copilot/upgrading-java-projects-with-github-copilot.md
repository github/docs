---
title: Upgrading Java projects with GitHub Copilot
shortTitle: Upgrade Java projects
intro: 'You can use {% data variables.product.prodname_copilot %} to upgrade your Maven and Gradle Java applications.'
versions:
  feature: copilot
topics:
  - Copilot
---

> [!NOTE]
> GitHub Copilot app modernization – upgrade for Java is currently in {% data variables.release-phases.public_preview %} and subject to change.

## Introduction

{% data variables.product.prodname_copilot %} can help streamline the process of upgrading Java applications. The "GitHub Copilot app modernization – upgrade for Java" {% data variables.product.prodname_vscode %} extension assists with every step of upgrading your Java project's runtime and/or framework version.

* Analyzing the project and dependencies to generate an upgrade plan.
* Executing code transformations based on the plan.
* Automatically fixing issues during the upgrade.
* Providing detailed logs, commit history, and output.
* Performing security scans (CVE) and behavioral consistency checks post-upgrade.
* Summarizing key changes including updated dependencies and resolved issues.
* Generating unit tests independently of the upgrade process.

This solution supports both Maven and Gradle build tools and facilitates upgrades between Java versions 8, 11, 17, and 21.

## Prerequisites

Before getting started you must have the following:

* Either a **{% data variables.product.prodname_copilot_for_business %}** or **{% data variables.product.prodname_copilot_enterprise %}** [subscription plan](/copilot/about-github-copilot/subscription-plans-for-github-copilot).
* The latest version of [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/).
* The "GitHub Copilot app modernization – upgrade for Java (preview)" extension installed in {% data variables.product.prodname_vscode %}.
* Installed versions of both the source and target JDKs.
* A Git-based Java project using Maven or Gradle.
* For Maven-based projects, access to the public Maven Central repository.

>[!NOTE] For Gradle projects, only wrapper-based builds (Gradle v5+) are supported. Projects using Kotlin DSL are not currently supported.

## Upgrading a Java project

### 1. Install the required extension

To get started, you'll need to install the “GitHub Copilot app modernization – upgrade for Java (preview)” extension for {% data variables.product.prodname_vscode %}.

1. Open {% data variables.product.prodname_vscode %}.
1. Click on “Extensions”.
1. Search for “GitHub Copilot app modernization – upgrade for Java (preview)” and click “Download”.
1. Restart {% data variables.product.prodname_vscode %}.

### 2. Use {% data variables.product.prodname_copilot_chat %} in agent mode and generate the upgrade plan

Now you have the extension, you can continue to use {% data variables.product.prodname_copilot %} in agent mode and create a plan for your upgrade.

1. In {% data variables.product.prodname_vscode %}, open the {% data variables.product.prodname_copilot_chat %} panel.
1. At the bottom of the chat panel, select **Agent** from the mode dropdown.
1. Enter a prompt describing the upgrade path you need. For example:

   > "Upgrade project to Java 21 and Spring Boot 3.2"

1. When prompted, click **Continue** to generate an upgrade plan

### 3. Review and edit the upgrade plan

{% data variables.product.prodname_copilot %} will analyze your project's structure, JDK, dependencies, and build tool before generating a `plan.md` upgrade plan for your specific circumstances that outlines source and target JDK versions and upgrade paths for frameworks and libraries.

1. Click on the new `plan.md` tab in {% data variables.product.prodname_vscode %}.
1. Review, and edit if necessary, the plan. Make sure the versions in the plan align with your goals and what you've already specified.
1. When you're ready, click **Continue** to proceed.

### 4. Apply code changes and fix build issues

Next, {% data variables.product.prodname_copilot %} will begin transforming your project. This involves using OpenRewrite to apply code changes via predefined recipes and iteratively fixing remaining issues with {% data variables.product.prodname_copilot_short %} through a build/fix loop.

1. When prompted to "Run Upgrade Java code using OpenRewrite", click **Continue**. Note that this step may take some time.
1. When prompted to "Run Build project and fix errors", click **Continue**.

You can track the progress of this phase by viewing the `progress.md` file in {% data variables.product.prodname_vscode %}.

### 5. Check for security vulnerabilities (CVE) and code behavior changes

To ensure reliability and security, {% data variables.product.prodname_copilot %} performs additional checks.

1. When prompted to "Run Validate if any modified dependencies have known CVEs", click **Continue**.

   If CVEs are detected, {% data variables.product.prodname_copilot_short %} will try to resolve them. You can review and accept or reject the changes.
1. When prompted to "Run Validate code behavior consistency", click **Continue**.

   If inconsistencies are found, {% data variables.product.prodname_copilot_short %} will again attempt fixes and you can decide which to keep.

At the end of this process, the tool rebuilds the project and runs one final validation. The process concludes if only minor issues that don’t block the upgrade may remain. Otherwise, it loops back to address outstanding problems.

### 6. View the Upgrade Summary

Once completed, {% data variables.product.prodname_copilot_short %} generates a `summary.md` file in your project directory containing:

* Project metadata.
* Lines of code modified.
* Updated dependencies.
* Description of code changes.
* CVEs and inconsistencies resolved.
* Remaining minor CVE issues (if any).
