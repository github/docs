---
title: Managing dependency updates
shortTitle: Manage dependency updates
intro: '{% data variables.copilot.copilot_chat_short %} can help you get set up with {% data variables.product.prodname_dependabot %} to streamline dependency updates.'
versions:
  feature: copilot
category:
  - Security analysis
  - Author and optimize with Copilot
complexity:
  - Simple
octicon: code
topics:
  - Copilot
redirect_from:
  - /copilot/tutorials/copilot-chat-cookbook/security-analysis/managing-dependency-updates
  - /copilot/tutorials/copilot-chat-cookbook/security-analysis/manage-dependency-updates
contentType: tutorials
---

## Automate dependency updates

### Example scenario

Let's say your project depends on numerous libraries and packages. Vulnerable or outdated dependencies create security risks that can affect your project and others that rely on it.

{% data variables.copilot.copilot_chat_short %} can help you get set up with {% data variables.product.prodname_dependabot %} security and version updates, so that your dependencies always remain on the most secure, and up-to-date versions. See [AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates) and [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates).

Before you begin, ensure that {% data variables.product.prodname_dependabot %} is fully enabled under your repository's "Settings."
1. Under your "Code security" settings, ensure **{% data variables.product.prodname_dependabot_alerts %}** and **{% data variables.product.prodname_dependabot_security_updates %}** are both set to "Enabled."
1. Create and commit an empty `.github/dependabot.yml` file to the repository.

### Example prompt

Make sure your repository is attached to the prompt for context.

```copilot copy
Analyze the codebase and project structure of this repository. Detect all package managers and package ecosystems in use, including their respective locations (e.g., npm, yarn, pip, maven, gradle, composer, github-actions, etc.).

For each detected ecosystem, create a configuration entry in a single, top-level .github/dependabot.yml file that enables security and version updates on a reasonable schedule. Use the recommended best practices for each ecosystem. Clearly specify the directory for each ecosystem detected. If multiple ecosystems or multiple directories are present, include them all in the configuration.

In the output, include any notes on the configuration or best practices, as well as next steps that include how to commit the dependabot.yml file to the repository via the GitHub web browser and how to check that Dependabot version updates and Dependabot security updates are enabled.
```

### Example output

{% data variables.copilot.copilot_chat_short %} analyzes your repository and writes the contents of the `dependabot.yml` configuration file for you, which tells {% data variables.product.prodname_dependabot %} which dependencies it needs to scan for.

```yaml
version: 2
updates:
  # Python (pip)
  - package-ecosystem: "pip"
    directory: "/"                     # Location of requirements.txt
    schedule:
      interval: "weekly"               # Weekly updates are a good balance for libraries
      day: "sunday"
      time: "06:00"
      timezone: "UTC"
    open-pull-requests-limit: 5
    allow:
      - dependency-type: "all"
    commit-message:
      prefix: "pip"
    labels:
      - "dependencies"
      - "python"
    ignore:
      - dependency-name: "pip"         # Ignore pip self-updates

  # GitHub Actions
  - package-ecosystem: "github-actions"
    directory: "/"                     # Looks for workflow files under .github/workflows/
    schedule:
      interval: "weekly"
      day: "sunday"
      time: "06:00"
      timezone: "UTC"
    open-pull-requests-limit: 5
    commit-message:
      prefix: "actions"
    labels:
      - "dependencies"
      - "github-actions"
```

Once you've committed the `dependabot.yml` file to your repository, {% data variables.product.prodname_dependabot %} will begin to open pull requests against your repository, whenever a vulnerable or outdated dependency is detected.

## Customize dependency management

### Example scenario

Let's say your team has been using the basic {% data variables.product.prodname_dependabot %} configuration for a few months, and you're getting lots of dependency update pull requests. However, you're finding that:

* Pull requests are sitting un-reviewed because no one is automatically assigned.
* You want pull requests to be automatically added to your team's project board via a label.
* Your CI is getting overwhelmed with too many concurrent dependency pull requests.
* You're getting updates for development dependencies that don't affect production.

You want to customize your {% data variables.product.prodname_dependabot %} configuration to better fit your team's workflow, such as automatically assigning pull requests to the right team members, adding labels to add pull requests to project board, limiting the number of open pull requests, and focusing only on production dependencies.

{% data variables.copilot.copilot_chat_short %} can write an updated `dependabot.yml` that better suits your team's needs.

### Example prompt

```copilot copy
I want to customize my pull requests for Dependabot security and version updates, so that:

* Pull requests are automatically assigned to the team "octocat-reviewers."
* The label "security-management" is automatically added to every pull request.
* The number of open Dependabot PRs is limited.
* Development dependencies are ignored.

Draft an update to the dependabot.yml file in my repository that specifies these customization options.
```

> [!TIP]
> * There are many customization options to explore. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-security-updates/customizing-dependabot-security-prs) and [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/customizing-dependabot-prs).
> * You can specify different customizations per package ecosystem.

### Example output

```yaml
version: 2
updates:
  # Python (pip)
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "weekly"
      day: "sunday"
      time: "06:00"
      timezone: "UTC"
    open-pull-requests-limit: 5
    allow:
      - dependency-type: "production"     # Ignore development dependencies
    assignees:
      - "octocat-reviewers"               # Assign PRs to the team
    labels:
      - "dependencies"
      - "security-management"             # Custom label for all PRs
      - "python"
    commit-message:
      prefix: "pip"
    ignore:
      - dependency-name: "pip"
```
