---
title: Configuration options for dependency updates
intro: 'Detailed information for all the options you can use to customize how {% data variables.product.prodname_dependabot %} maintains your repositories.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
versions:
  free-pro-team: '*'
---

{% data reusables.dependabot.beta-note %}

### About the *dependabot.yml* file

The {% data variables.product.prodname_dependabot %} configuration file, *dependabot.yml*, uses YAML syntax. If you're new to YAML and want to learn more, see "[Learn YAML in five minutes](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)."

You must store this file in the `.github` directory of your repository. When you add or update the *dependabot.yml* file, this triggers an immediate check for version updates. Any options that also affect security updates are used the next time a security alert triggers a pull request for a security update. For more information, see "[Enabling and disabling version updates](/github/administering-a-repository/enabling-and-disabling-version-updates)" and "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)."

### Configuration options for *dependabot.yml*

The *dependabot.yml* file must start with `version: 2` followed by an array of `updates`.

| Option | Required | Description |
|:---|:---:|:---|
| [`package-ecosystem`](#package-ecosystem)                     | **X** | Package manager to use                |
| [`directory`](#directory)                                     | **X** | Location of package manifests         |
| [`schedule.interval`](#scheduleinterval)                      | **X** | How often to check for updates        |
| [`allow`](#allow)                                             | | Customize which updates are allowed         |
| [`assignees`](#assignees)                                     | | Assignees to set on pull requests           |
| [`commit-message`](#commit-message)                           | | Commit message preferences                  |
| [`ignore`](#ignore)                                           | | Ignore certain dependencies or versions     |
| [`labels`](#labels)                                           | | Labels to set on pull requests              |
| [`milestone`](#milestone)                                     | | Milestone to set on pull requests           |
| [`open-pull-requests-limit`](#open-pull-requests-limit)       | | Limit number of open pull requests for version updates|
| [`pull-request-branch-name.separator`](#pull-request-branch-nameseparator) | | Change separator for pull request branch names |
| [`rebase-strategy`](#rebase-strategy)                         | | Disable automatic rebasing                  |
| [`reviewers`](#reviewers)                                     | | Reviewers to set on pull requests           |
| [`schedule.day`](#scheduleday)                                | | Day of week to check for updates            |
| [`schedule.time`](#scheduletime)                              | | Time of day to check for updates (hh:mm)    |
| [`schedule.timezone`](#scheduletimezone)                      | | Timezone for time of day (zone identifier)  |
| [`target-branch`](#target-branch)                             | | Branch to create pull requests against      |
| [`vendor`](#vendor)                                           | | Update vendored or cached dependencies      |
| [`versioning-strategy`](#versioning-strategy)                 | | How to update manifest version requirements |

These options fit broadly into the following categories.

- Essential set up options that you must include in all configurations: [`package-ecosystem`](#package-ecosystem), [`directory`](#directory),[`schedule.interval`](#scheduleinterval).
- Options to customize the update schedule: [`schedule.time`](#scheduletime), [`schedule.timezone`](#scheduletimezone), [`schedule.day`](#scheduleday).
- Options to control which dependencies are updated: [`allow`](#allow), [`ignore`](#ignore), [`vendor`](#vendor).
- Options to add metadata to pull requests: [`reviewers`](#reviewers), [`assignees`](#assignees), [`labels`](#labels), [`milestone`](#milestone).
- Options to change the behavior of the pull requests: [`target-branch`](#target-branch), [`versioning-strategy`](#versioning-strategy), [`commit-message`](#commit-message), [`rebase-strategy`](#rebase-strategy), [`pull-request-branch-name.separator`](#pull-request-branch-nameseparator).

In addition, the [`open-pull-requests-limit`](#open-pull-requests-limit) option changes the maximum number of pull requests for version updates that {% data variables.product.prodname_dependabot %} can open.

{% note %}

**Note:** Some of these configuration options may also affect pull requests raised for security updates of vulnerable package manifests.

Security updates are raised for vulnerable package manifests only on the default branch. When configuration options are set for the same branch (true unless you use `target-branch`), and specify a `package-ecosystem` and `directory` for the vulnerable manifest, then pull requests for security updates use relevant options.

In general, security updates use any configuration options that affect pull requests, for example, adding metadata or changing their behavior. For more information about security updates, see "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)."

{% endnote %}

### `package-ecosystem`

**Required** You add one `package-ecosystem` element for each package manager that you want {% data variables.product.prodname_dependabot %} to monitor for new versions. The repository must also contain a dependency manifest or lock file for each of these package managers. If you want to enable vendoring for a package manager that supports it, the vendored dependencies must be located in the required directory. For more information, see [`vendor`](#vendor) below.

{% data reusables.dependabot.supported-package-managers %}

```yaml
# Basic set up for three package managers

version: 2
updates:

  # Maintain dependencies for GitHub Actions
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "daily"

  # Maintain dependencies for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"

  # Maintain dependencies for Composer
  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
```

### `directory`

**Required** You must define the location of the package manifests for each package manager (for example, the *package.json* or *Gemfile*). You define the directory relative to the root of the repository for all ecosystems except GitHub Actions. For GitHub Actions, set the directory to `/` to check for workflow files in `.github/workflows`.

```yaml
# Specify location of manifest files for each package manager

version: 2
updates:
  - package-ecosystem: "composer"
    # Files stored in repository root
    directory: "/"
    schedule:
      interval: "daily"

  - package-ecosystem: "npm"
    # Files stored in `app` directory
    directory: "/app"
    schedule:
      interval: "daily"

  - package-ecosystem: "github-actions"
    # Workflow files stored in the
    # default location of `.github/workflows`
    directory: "/"
    schedule:
      interval: "daily"
```

### `schedule.interval`

**Required** You must define how often to check for new versions for each package manager. By default, this is at 5am UTC. To modify this, use [`schedule.time`](#scheduletime) and [`schedule.timezone`](#scheduletimezone).

- `daily`—runs on every weekday, Monday to Friday.
- `weekly`—runs once each week. By default, this is on Monday. To modify this, use [`schedule.day`](#scheduleday).
- `monthly`—runs once each month. This is on the first day of the month.

```yaml
# Set update schedule for each package manager

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every weekday
      interval: "daily"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      # Check for updates managed by Composer once a week
      interval: "weekly"
```

### `allow`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Use the `allow` option to customize which dependencies are updated. This has no impact on security updates for vulnerable dependencies. You can use the following options:

- `dependency-name`—use to allow updates for dependencies with matching names, optionally using `*` to match zero or more characters. For Java dependencies, the format of the `dependency-name` attribute is: `groupId:artifactId`, for example: `org.kohsuke:github-api`.
- `dependency-type`—use to allow updates for dependencies of specific types.

  | Dependency types | Supported by package managers | Allow updates |
  |------------------|-------------------------------|--------|
  | `direct` | All | All explicitly defined dependencies. |
  | `indirect` | `bundler`, `pip`, `composer`, `cargo` | Dependencies of direct dependencies (also known as sub-dependencies, or transient dependencies).|
  | `all` | All | All explicitly defined dependencies. For `bundler`, `pip`, `composer`, `cargo`, also the dependencies of direct dependencies.|
  | `production` | `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | Only dependencies in the "Product dependency group". |
  | `development`| `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | Only dependencies in the "Development dependency group". |

```yaml
# Customizing the dependencies to maintain with `allow`

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow updates for Lodash
      - dependency-name: "lodash"
      # Allow updates for React and any packages starting "react"
      - dependency-name: "react*"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow both direct and indirect updates for all packages
      - dependency-type: "all"

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    allow:
      # Allow only direct updates for
      # Django and any packages starting "django"
      - dependency-name: "django*"
        dependency-type: "direct"
      # Allow only production updates for Sphinx
      - dependency-name: "sphinx"
        dependency-type: "production"
```

### `assignees`

Use `assignees` to specify individual assignees for all pull requests raised for a package manager.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify assignees for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Add assignees
    assignees:
      - "octocat"
```

### `commit-message`

By default, {% data variables.product.prodname_dependabot %} attempts to detect your commit message preferences and use similar patterns. Use the `commit-message` option to specify your preferences explicitly.

Supported options

- `prefix` specifies a prefix for all commit messages.
- `prefix-development` specifies a separate prefix for all commit messages that update dependencies in the Development dependency group. When you specify a value for this option, the `prefix` is used only for updates to dependencies in the Production dependency group. This is supported by: `bundler`, `composer`, `mix`, `maven`, `npm`, and `pip`.
- `include: "scope"` specifies that any prefix is followed by a list of the dependencies updated in the commit.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Customizing commit messages

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    commit-message:
      # Prefix all commit messages with "npm"
      prefix: "npm"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    # Prefix all commit messages with "Composer"
    # include a list of updated dependencies
    commit-message:
      prefix: "Composer"
      include: "scope"

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Include a list of updated dependencies
    # with a prefix determined by the dependency group
    commit-message:
      prefix: "pip prod"
      prefix-development: "pip dev"
      include: "scope"
```

### `ignore`

{% data reusables.dependabot.warning-ignore-option %}

#### Checking for existing ignore preferences

Before you add an `ignore` option to the configuration file, check whether you've previously used any of the `@dependabot ignore` commands on a security update or version update pull request. {% data variables.product.prodname_dependabot %} stores these preferences for each package manager centrally and this information is overwritten by the `ignore` option. For more information about the `@dependabot ignore` commands, see "[Managing pull requests for dependency updates](/github/administering-a-repository/managing-pull-requests-for-dependency-updates)."

You can check whether a repository has stored preferences by searching the repository for `"@dependabot ignore" in:comments`. If you review any pull requests in the results, you can decide whether or not to specify those ignored dependencies or versions in the configuration file.

#### Specifying dependencies and versions to ignore

{% data reusables.dependabot.default-dependencies-allow-ignore %}

You can use the `ignore` option to customize which dependencies are updated. The `ignore` option supports the following options.

- `dependency-name`—use to ignore updates for dependencies with matching names, optionally using `*` to match zero or more characters. For Java dependencies, the format of the `dependency-name` attribute is: `groupId:artifactId`, for example: `org.kohsuke:github-api`.
- `versions`—use to ignore specific versions or ranges of versions. If you want to define a range, use the standard pattern for the package manager (for example: `^1.0.0` for npm, or `~> 2.0` for Bundler).

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Customizing the dependencies to maintain with `ignore`

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    ignore:
      - dependency-name: "express"
        # For Express, ignore all updates for version 4 and 5
        versions: ["4.x", "5.x"]
        # For Lodash, ignore all updates
      - dependency-name: "lodash"
```

{% note %}

**Note**: {% data variables.product.prodname_dependabot %} can only run version updates on manifest or lock files if it can access all of the dependencies in the file, even if you add inaccessible dependencies to the `ignore` option of your configuration file. For more information, see "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-repositories)" and "[Troubleshooting {% data variables.product.prodname_dependabot %} errors](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors#dependabot-cant-resolve-your-dependency-files)."


{% endnote %}

### `labels`

{% data reusables.dependabot.default-labels %}

Use `labels` to override the default labels and specify alternative labels for all pull requests raised for a package manager. If any of these labels is not defined in the repository, it is ignored.
To disable all labels, including the default labels, use `labels: [ ]`.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify labels for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Specify labels for npm pull requests
    labels:
      - "npm"
      - "dependencies"
```

### `milestone`

Use `milestone` to associate all pull requests raised for a package manager with a milestone. You need to specify the numeric identifier of the milestone and not its label. If you view a milestone, the final part of the page URL, after `milestone`, is the identifier. For example: `https://github.com/<org>/<repo>/milestone/3`.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify a milestone for pull requests

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Associate pull requests with milestone "4"
    milestone: 4
```

### `open-pull-requests-limit`

By default, {% data variables.product.prodname_dependabot %} opens a maximum of five pull requests for version updates. Once there are five open pull requests, new requests are blocked until you merge or close some of the open requests. Use `open-pull-requests-limit` to change this limit. This also provides a simple way to temporarily disable version updates for a package manager.

This option has no impact on security updates, which have a separate, internal limit of ten open pull requests.

```yaml
# Changing the number of open pull requests allowed

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Allow up to 10 open pull requests for pip dependencies
    open-pull-requests-limit: 10
```

### `pull-request-branch-name.separator`

{% data variables.product.prodname_dependabot %} generates a branch for each pull request. Each branch name includes `dependabot`, and the package manager and dependency that are updated. By default, these parts are separated by a `/` symbol, for example: `dependabot/npm_and_yarn/next_js/acorn-6.4.1`.

Use `pull-request-branch-name.separator` to specify a different separator. This can be one of: `"-"`, `_` or `/`. The hyphen symbol must be quoted because otherwise it's interpreted as starting an empty YAML list.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specifying a different separator for branch names

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    pull-request-branch-name:
      # Separate sections of the branch name with a hyphen
      # for example, `dependabot-npm_and_yarn-next_js-acorn-6.4.1`
      separator: "-"
```

### `rebase-strategy`

By default, {% data variables.product.prodname_dependabot %} automatically rebases open pull requests when it detects conflicts. Use `rebase-strategy` to disable this behavior.

Available rebase strategies

- `disabled` to disable automatic rebasing.
- `auto` to use the default behavior and rebase open pull requests when conflicts are detected.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Disabling automatic rebasing

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Disable rebasing for npm pull requests
    rebase-strategy: "disabled"
```

### `reviewers`

Use `reviewers` to specify individual reviewers or teams of reviewers for all pull requests raised for a package manager. You must use the full team name, including the organization, as if you were @mentioning the team.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Specify reviewers for pull requests

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Add reviewers
    reviewers:
      - "octocat"
      - "my-username"
      - "my-org/python-team"
```

### `schedule.day`

When you set a `weekly` update schedule, by default, {% data variables.product.prodname_dependabot %} checks for new versions on Monday at 05:00 UTC. Use `schedule.day` to specify an alternative day to check for updates.

Supported values

- `monday`
- `tuesday`
- `wednesday`
- `thursday`
- `friday`
- `saturday`
- `sunday`

```yaml
# Specify the day for weekly checks

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # Check for npm updates on Sundays
      day: "sunday"
```

### `schedule.time`

By default, {% data variables.product.prodname_dependabot %} checks for new versions at 05:00 UTC. Use `schedule.time` to specify an alternative time of day to check for updates (format: `hh:mm`).

```yaml
# Set a time for checks
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      # Check for npm updates at 9am UTC
      time: "09:00"
```

### `schedule.timezone`

By default, {% data variables.product.prodname_dependabot %} checks for new versions at 05:00 UTC. Use `schedule.timezone` to specify an alternative time zone. The time zone identifier must be from the Time Zone database maintained by [iana](https://www.iana.org/time-zones). For more information, see [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```yaml
# Specify the timezone for checks

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
      time: "09:00"
      # Use Japan Standard Time (UTC +09:00)
      timezone: "Asia/Tokyo"
```

### `target-branch`

By default, {% data variables.product.prodname_dependabot %} checks for manifest files on the default branch and raises pull requests for version updates against this branch. Use `target-branch` to specify a different branch for manifest files and for pull requests. When you use this option, the settings for this package manager will no longer affect any pull requests raised for security updates.

```yaml
# Specify a non-default branch for pull requests for pip

version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Raise pull requests for version updates
    # to pip against the `develop` branch
    target-branch: "develop"
    # Labels on pull requests for version updates only
    labels:
      - "pip dependencies"

  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      # Check for npm updates on Sundays
      day: "sunday"
    # Labels on pull requests for security and version updates
    labels:
      - "npm dependencies"
```

### `vendor`

Use the `vendor` option to tell {% data variables.product.prodname_dependabot %} to vendor dependencies when updating them.

```yaml
# Configure version updates for both dependencies defined in manifests and vendored dependencies

version: 2
updates:
  - package-ecosystem: "bundler"
    # Raise pull requests to update vendored dependencies that are checked in to the repository
    vendor: true
    directory: "/"
    schedule:
      interval: "weekly"
```

{% data variables.product.prodname_dependabot %} only updates the vendored dependencies located in specific directories in a repository.

| Package manager | Required file path for vendored dependencies | More information |
  |------------------|-------------------------------|--------|
  | `bundler` | The dependencies must be in the _vendor/cache_ directory.</br>Other file paths are not supported. | [`bundle cache` documentation](https://bundler.io/man/bundle-cache.1.html) |
  | `gomod` | No path requirement (dependencies are usually located in the _vendor_ directory) | [`go mod vendor` documentation](https://golang.org/ref/mod#go-mod-vendor) |


### `versioning-strategy`

When {% data variables.product.prodname_dependabot %} edits a manifest file to update a version, it uses the following overall strategies:

- For apps, the version requirements are increased, for example: npm, pip and Composer.
- For libraries, the range of versions is widened, for example: Bundler and Cargo.

Use the `versioning-strategy` option to change this behavior for supported package managers.

{% data reusables.dependabot.option-affects-security-updates %}

Available update strategies

| Option | Supported by | Action |
|--------|--------------|--------|
| `lockfile-only` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | Only create pull requests to update lockfiles updates. Ignore any new versions that would require package manifest changes. |
| `auto` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | Follow the default strategy described above.|
| `widen`| `composer`, `npm` | Relax the version requirement to include both the new and old version, when possible. |
| `increase`| `bundler`, `composer`, `npm` | Always increase the version requirement to match the new version. |
| `increase-if-necessary` | `bundler`, `composer`, `npm` | Increase the version requirement only when required by the new version. |

```yaml
# Customizing the manifest version strategy

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Update the npm manifest file to relax
    # the version requirements
    versioning-strategy: widen

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "daily"
    # Increase the version requirements for Composer
    # only when required
    versioning-strategy: increase-if-necessary

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    # Only allow updates to the lockfile for pip and
    # ignore any version updates that affect the manifest
    versioning-strategy: lockfile-only
```
