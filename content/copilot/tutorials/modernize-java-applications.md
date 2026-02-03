---
title: Modernizing Java applications with GitHub Copilot
shortTitle: Modernize Java applications
intro: '{% data variables.product.prodname_copilot %} can help modernize and migrate Java applications by assessing your codebase, identifying upgrade paths, and automating remediation and containerization tasks.'
versions:
  feature: copilot
contentType: tutorials
category:
  - Modernize applications
  - Author and optimize with Copilot
---

<!-- expires 2026-10-31 -->

<!-- When this expires, check with the stakeholder for release #18998 on whether or not the content is still needed -->

The {% data variables.product.prodname_copilot %} app modernization extension in {% data variables.product.prodname_vscode %} automates Java upgrades by identifying outdated frameworks, deprecated APIs, and upgrade blockers. {% data variables.copilot.copilot_coding_agent %} applies code changes, updates build files, and resolves build and CVE issues for you. <!-- markdownlint-disable-line GHD046 -->

The recommendations and reporting produced by the extension can help your teams adopt new technologies quickly and reduce technical debt. {% data variables.product.prodname_copilot_short %} guides you through upgrades with actionable steps and summaries, accelerating and securing your migrations while reducing manual effort.

For extension capabilities, setup, and user interface instructions, see [The GitHub Copilot app modernization documentation](https://learn.microsoft.com/en-us/azure/developer/github-copilot-app-modernization/) in the Microsoft documentation.

## Modernization framework

When you start an agent session using the [Java upgrade extension](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-upgrade), the extension will help you modernize your Java application using the following framework.

* **Perform assessment tasks**. The extension can analyze code, configuration, and dependencies, providing an assessment of your application's current state.
* **Create a customizable modernization plan**. Based on the assessment, the extension can suggest a modernization path, including necessary framework and library updates.
* **Early identification of issues**. The extension identifies dependencies, outdated libraries and language features, and potential migration issues. The extension provides actionable strategies to remediate problems.
* **Customize your plan**. Edit the modernization plan to your application's specific needs, such as incorporating organizational standards and practices, excluding certain components, or prioritizing specific features or design patterns.
* **Implement your plan**. The extension can assist in applying code changes, updating build files, refactoring deprecated APIs, and resolving build and syntax issues. The extension will automatically fix build errors and perform test validations after each step to ensure stability and error-free changes. <!-- markdownlint-disable-line GHD046 -->
* **Review your changes**. The extension can produce a detailed upgrade report, summarizing the changes applied, and listing any unaddressed issues and remaining steps for your modernization.
* **Generate unit tests**. The extension automatically evaluates existing tests, and generates new test files and adds them to the workspace. A report is produced summarizing the pre- and post-generation test results.
* **Containerize your application**. The extension can automatically generate Dockerfiles, build images, and validate everything for your modernized application to run within the container services such as Azure Kubernetes Service (AKS), Azure Container Apps (ACA), and AKS Automatic, enabling easier deployment and scalability.
* **Prepare for deployment**. The extension can help you prepare your application for containerization and deployment, by generating deployment artifacts such as scripts and configurations.
* **Automate deployment to Azure**. The extension can help you deploy or provision your modernized application to Azure, generating necessary artifacts and Azure resources, and performing execution steps.

You can improve your team's understanding of the application codebase, and save time and effort by using {% data variables.product.prodname_copilot_short %} to help with complex modernization tasks such as:

* Reverse engineering and code transformation
* Vulnerability and dependency analysis, and code behavior checks and remediation
* Automated generation of assets, documentation, and upgrade reports
* Test generation and evaluation
* Deployment automation

## Modernization workflow overview

In this example, we'll walk through the high-level steps to modernize a Java application using the {% data variables.product.prodname_copilot %} app modernization extension in {% data variables.product.prodname_vscode %}.

For detailed prerequisites and instructions, see [Quickstart: upgrade a Java project with {% data variables.product.prodname_copilot %} app modernization](https://learn.microsoft.com/en-us/java/upgrade/quickstart-upgrade) in the Microsoft documentation.

> [!NOTE]
> During the modernization workflow, you may frequently be prompted by {% data variables.copilot.copilot_coding_agent %} for confirmation before it performs specific actions.

### 1. Open your Java project

Use {% data variables.product.prodname_vscode_shortname %} to open your project folder.

#### Suggested actions

* Ensure your project builds successfully before proceeding.
* If you encounter build issues, you can use {% data variables.product.prodname_copilot_short %} to help resolve them before starting the modernization process.

### 2. Start a modernization workspace

Launch {% data variables.copilot.copilot_chat_short %} and start a new session in agent mode. Choose **{% data variables.product.prodname_copilot %} app modernization – upgrade for Java** from the available tools.

### 3. Analyze your project for upgrade opportunities

{% data variables.product.prodname_copilot_short %} will scan your codebase. The analysis includes:

* Detection of outdated frameworks (for example, Spring Boot, Jakarta EE, Java SE versions).
* Identification of deprecated APIs and obsolete patterns. <!-- markdownlint-disable-line GHD046 -->
* Suggestions for upgrade opportunities.

You can review the findings and a structured upgrade plan in the editor, which will display:

* Current and recommended versions for frameworks and dependencies.
* Code locations requiring migration or refactoring.
* Upgrade blockers or incompatible dependencies.

#### Suggested actions

* Review and customize the modernization plan before proceeding with the upgrade.

### 4. Apply {% data variables.product.prodname_copilot_short %} upgrade recommendations

Use {% data variables.product.prodname_copilot_short %} to apply or review code changes, update build files, and refactor APIs.

If build errors are found, {% data variables.product.prodname_copilot_short %} can enter a fix-and-test loop until the project compiles cleanly.

{% data variables.copilot.copilot_coding_agent %} automated changes can include:

* Updating `pom.xml` or `build.gradle` files for new dependency versions.
* Generating pull requests or committing changes directly.
* Refactoring code for API changes. For example, migrating from `javax.*` to `jakarta.*` namespaces.
* Suggesting or applying code transformations to address breaking changes.

{% data variables.product.prodname_copilot_short %} will iterate and continue to fix errors until the project builds successfully and there are no more issues that require fixing. It's possible that minor issues that don't require immediate fixes may remain. These will not prevent the upgrade from completing.

#### Suggested actions

* Review all code changes in your diff editor before accepting.
* Use {% data variables.product.prodname_copilot_short %} to further explain and document code changes.
* When the extension prompts you to, accept the options to check modified dependencies for known CVEs, and to validate code behavior for consistency.
* Review any issues remaining and evaluate their importance.

### 5. View the upgrade report and suggested next steps

After the upgrade process is complete, {% data variables.product.prodname_copilot_short %} will generate a summary upgrade report that includes:

* Project information.
* Lines of code changed.
* Updated dependencies.
* Summarized code changes.
* Fixed CVE security and code inconsistency issues, if any.
* Unaddressed minor CVE issues.

#### Suggested actions

* Review the report to understand the changes made.
* Follow any suggested next steps to finalize your modernization.

### Completing the modernization

Further work to support your modernization may include:

* **Checking** the initial modernization and code changes thoroughly. Ensure your company's coding standards and best practices are met.
* **Reviewing** modified code closely. For example, check that the generated code fits the purpose and architecture of your project. For more suggestions, see [AUTOTITLE](/copilot/tutorials/review-ai-generated-code).
* **Bug fixing**. Check specific content for subtle errors, and use your own debugging and linting tools to evaluate new content.
* **Writing tests** and identifying gaps in testing for the upgraded project.
* **Cleaning up** the project by removing any files that are no longer needed.
* **Refactoring** the code in the new language. The modernization process may have resulted in a project whose architecture was based on that of your original project, but that is no longer the ideal or optimum solution for your needs. You may now want to refactor the code to make best use of features of the language and the framework used.
* **Updating documentation**. Your project information and contributing files may now be out of date and need to be rewritten.
* **Containerization**. Update your application code, generate containerization files like Dockerfiles, and build the image to test the validity. If needed, {% data variables.product.prodname_copilot_short %} can perform these containerization tasks, and also create a comprehensive plan detailing the next steps.
* **Deploying** the modernized application to your target environments, including cloud platforms such as Microsoft Azure.

<!-- end expires 2026-10-31 -->
