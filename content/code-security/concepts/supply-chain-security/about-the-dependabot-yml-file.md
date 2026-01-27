---
title: About the dependabot.yml file
intro: 'The `dependabot.yml` controls automated dependency updates in your repository.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Dependabot
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: dependabot.yml file
contentType: concepts
---

The `dependabot.yml` file is an optional configuration file that gives you fine-grained control over how {% data variables.product.prodname_dependabot %} monitors and updates dependencies (mainly _version updates_ but also _security updates_) in your repository.

Without a `dependabot.yml` file, {% data variables.product.prodname_dependabot %} can still create security updates for vulnerable dependencies if you've enabled {% data variables.product.prodname_dependabot_security_updates %} in your repository settings. However, you won't receive automated version updates or have control over update schedules and other configuration options.

The `dependabot.yml` file uses YAML syntax. If you're new to YAML and want to learn more, see [Learn YAML in five minutes](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes).

> [!NOTE]
> {% data variables.product.prodname_dependabot_alerts %} are configured in the repository or organization "Settings" tab and not in the `dependabot.yml` file, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts).

## What the `dependabot.yml` file does

The `dependabot.yml` file controls how {% data variables.product.prodname_dependabot %} performs updates on your dependencies. With this file, you can:

### For version updates

* Enable automated version updates
* Specify which package ecosystems and directories to monitor
* Set update schedules
* Customize pull request labels, assignees, reviewers, and commit messages
* Control which dependencies to update or ignore
* Configure authentication for private registries

### For security updates

* Customize security update pull requests with labels, assignees, and reviewers
* Define target branches for security updates
* Configure private registry authentication
* Set limits on open pull requests

## Where to store the `dependabot.yml` file

You must store this file in the `.github` directory of your repository in the default branch (typically `main`). The path is:  `.github/dependabot.yml`.

## How the `dependabot.yml` file works

When you add or update the `dependabot.yml` file in your repository, {% data variables.product.prodname_dependabot %} reads the configuration and begins monitoring the specified package ecosystems according to your defined schedules. When {% data variables.product.prodname_dependabot %} finds available updates, it creates pull requests with the dependency changes, following any customization rules you've specified in the configuration.

The configuration file requires the following keys for each package ecosystem to monitor.

- **`version`**: Top-level field that specifies the Dependabot configuration syntax version.
- **`updates`**: Top-level section where you define each package ecosystem to monitor for updates.
- **`package-ecosystem`**: Defined under `updates`, specifies which package manager to update (such as npm, pip, or Docker).
- **`directories` or `directory`**: Defined under each `package-ecosystem` entry, specifies the location of manifest or dependency definition files.
- **`schedule.interval`**: Defined under each `package-ecosystem` entry, sets how often to check for version updates (`daily`, `weekly`, or `monthly`).

## Basic example

Here's a minimal `dependabot.yml` file that monitors npm dependencies daily:

```yaml copy
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
```

## Next step

* Configure your repository so that Dependabot automatically updates the packages you use, see [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configuring-dependabot-version-updates)
