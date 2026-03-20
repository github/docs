---
title: About Dependabot pull requests
intro: 'Understand the frequency and customization options of pull requests for version and security updates.'
shortTitle: Dependabot pull requests
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: concepts
---

## Pull requests for security updates

If you've enabled security updates, pull requests for security updates are triggered by a {% data variables.product.prodname_dependabot %} alert for a dependency on your default branch. {% data variables.product.prodname_dependabot %} automatically raises a pull request to update the vulnerable dependency.

Each pull request contains everything you need to quickly and safely review and merge a proposed fix into your project. This includes information about the vulnerability like release notes, changelog entries, and commit details. Details of which vulnerability a pull request resolves are hidden from anyone who does not have access to {% data variables.product.prodname_dependabot_alerts %} for the repository.

When you merge a pull request that contains a security update, the corresponding {% data variables.product.prodname_dependabot %} alert is marked as resolved for your repository. For more information about {% data variables.product.prodname_dependabot %} pull requests, see [AUTOTITLE](/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates).

{% data reusables.dependabot.automated-tests-note %}

### Customizing pull requests for security updates

You can customize how {% data variables.product.prodname_dependabot %} raises pull requests for security updates, so that they best fit your project's security priorities and processes. For example:
* **Optimize {% data variables.product.prodname_dependabot %} pull requests to prioritize meaningful updates** by grouping multiple updates into a single pull request.
* Apply custom labels to **integrate {% data variables.product.prodname_dependabot %}'s pull requests** into your existing workflows.

Similar to version updates, customization options for security updates are defined in the `dependabot.yml` file. If you have already customized the `dependabot.yml` for version updates, then many of the configuration options that you have defined could automatically apply to security updates, too. However, there are a couple of important points to note:
* {% data variables.product.prodname_dependabot_security_updates %} are **always triggered by a security advisory**, rather than running according to the `schedule` you have set in the `dependabot.yml` for version updates.
* {% data variables.product.prodname_dependabot %} raises pull requests for security updates against the **default branch only**. If your configuration sets a value for `target-branch`, then the customization for that package ecosystem will only apply to version updates by default.

For more information, see [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/customizing-dependabot-security-prs).

## Pull requests for version updates

For version updates, you specify how often to check each ecosystem for new versions in the configuration file: daily, weekly, or monthly.

{% data reusables.dependabot.initial-updates %} For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/optimizing-pr-creation-version-updates).

## Commands for {% data variables.product.prodname_dependabot %} pull requests

{% data variables.product.prodname_dependabot %} responds to simple commands in comments. Each pull request contains details of the commands you can use to process the pull request (for example: to merge, squash, reopen, close, or rebase the pull request) under the "{% data variables.product.prodname_dependabot %} commands and options" section. The aim is to make it as easy as possible for you to triage these automatically generated pull requests. For more information, see [AUTOTITLE](/code-security/reference/supply-chain-security/dependabot-pull-request-comment-commands).
