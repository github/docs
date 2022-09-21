---
title: Configuration options for the dependabot.yml file
intro: 'Detailed information for all the options you can use to customize how {% data variables.product.prodname_dependabot %} maintains your repositories.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /github/administering-a-repository/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: reference
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure dependabot.yml
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## About the *dependabot.yml* file

The {% data variables.product.prodname_dependabot %} configuration file, *dependabot.yml*, uses YAML syntax. If you're new to YAML and want to learn more, see "[Learn YAML in five minutes](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)."

You must store this file in the `.github` directory of your repository. When you add or update the *dependabot.yml* file, this triggers an immediate check for version updates. For more information and an example, see "[Configuring {% data variables.product.prodname_dependabot %} version updates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates#enabling-dependabot-version-updates)."

Any options that also affect security updates are used the next time a security alert triggers a pull request for a security update.  For more information, see "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates)."

The *dependabot.yml* file has two mandatory top-level keys: `version`, and `updates`. You can, optionally, include a top-level `registries` key{% ifversion ghes = 3.5 %} and/or a `enable-beta-ecosystems` key{% endif %}. The file must start with `version: 2`.

## Configuration options for the *dependabot.yml* file

The top-level `updates` key is mandatory. You use it to configure how {% data variables.product.prodname_dependabot %} updates the versions or your project's dependencies. Each entry configures the update settings for a particular package manager. You can use the following options.

{% data reusables.dependabot.configuration-options %}

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

In general, security updates use any configuration options that affect pull requests, for example, adding metadata or changing their behavior. For more information about security updates, see "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates)."

{% endnote %}

### `package-ecosystem`

**Required**. You add one `package-ecosystem` element for each package manager that you want {% data variables.product.prodname_dependabot %} to monitor for new versions. The repository must also contain a dependency manifest or lock file for each of these package managers. If you want to enable vendoring for a package manager that supports it, the vendored dependencies must be located in the required directory. For more information, see [`vendor`](#vendor) below.

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

**Required**. You must define the location of the package manifests for each package manager (for example, the *package.json* or *Gemfile*). You define the directory relative to the root of the repository for all ecosystems except GitHub Actions. For GitHub Actions, set the directory to `/` to check for workflow files in `.github/workflows`.

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

**Required**. You must define how often to check for new versions for each package manager. By default, {% data variables.product.prodname_dependabot %} randomly assigns a time to apply all the updates in the configuration file. To set a specific time, you can use [`schedule.time`](#scheduletime) and [`schedule.timezone`](#scheduletimezone).

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

{% note %}

**Note**: `schedule` defines when {% data variables.product.prodname_dependabot %} attempts a new update. However, it's not the only time you may receive pull requests. Updates can be triggered based on changes to your `dependabot.yml` file, changes to your manifest file(s) after a failed update, or {% data variables.product.prodname_dependabot_security_updates %}. For more information, see "[Frequency of {% data variables.product.prodname_dependabot %} pull requests](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates#frequency-of-dependabot-pull-requests)" and "[About {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)."

{% endnote %}

### `allow`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Use the `allow` option to customize which dependencies are updated. This applies to both version and security updates. You can use the following options:

- `dependency-name`—use to allow updates for dependencies with matching names, optionally using `*` to match zero or more characters. For Java dependencies, the format of the `dependency-name` attribute is: `groupId:artifactId`, for example: `org.kohsuke:github-api`.
- `dependency-type`—use to allow updates for dependencies of specific types.

  | Dependency types | Supported by package managers | Allow updates |
  |------------------|-------------------------------|--------|
  | `direct` | All | All explicitly defined dependencies. |
  | `indirect` | `bundler`, `pip`, `composer`, `cargo` | Dependencies of direct dependencies (also known as sub-dependencies, or transient dependencies).|
  | `all` | All | All explicitly defined dependencies. For `bundler`, `pip`, `composer`, `cargo`, also the dependencies of direct dependencies.|
  | `production` | `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | Only dependencies in the "Production dependency group". |
  | `development`| `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` | Only dependencies in the "Development dependency group". |

```yaml
# Use `allow` to specify which dependencies to maintain

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

{% note %}

**Note:** The `prefix` and the `prefix-development` options have a 15 character limit.

{% endnote %}

- `prefix` specifies a prefix for all commit messages.
- `prefix-development` specifies a separate prefix for all commit messages that update dependencies in the Development dependency group. When you specify a value for this option, the `prefix` is used only for updates to dependencies in the Production dependency group. This is supported by: `bundler`, `composer`, `mix`, `maven`, `npm`, and `pip`.
- `include: "scope"` specifies that any prefix is followed by a list of the dependencies updated in the commit.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Customize commit messages

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
If you use the same configuration as in the example above, bumping the `requests` library in the `pip` development dependency group will generate a commit message of:

   `pip dev: bump requests from 1.0.0 to 1.0.1`
   
### `ignore`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Dependencies can be ignored either by adding them to `ignore` or by using the `@dependabot ignore` command on a pull request opened by {% data variables.product.prodname_dependabot %}.

#### Creating `ignore` conditions from `@dependabot ignore`

Dependencies ignored by using the `@dependabot ignore` command are stored centrally for each package manager. If you start ignoring dependencies in the `dependabot.yml` file, these existing preferences are considered alongside the `ignore` dependencies in the configuration.

You can check whether a repository has stored `ignore` preferences by searching the repository for `"@dependabot ignore" in:comments`. If you wish to un-ignore a dependency ignored this way, re-open the pull request.

For more information about the `@dependabot ignore` commands, see "[Managing pull requests for dependency updates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)."

#### Specifying dependencies and versions to ignore

You can use the `ignore` option to customize which dependencies are updated. The `ignore` option supports the following options.

- `dependency-name`—use to ignore updates for dependencies with matching names, optionally using `*` to match zero or more characters. For Java dependencies, the format of the `dependency-name` attribute is: `groupId:artifactId` (for example: `org.kohsuke:github-api`). {% ifversion dependabot-grouped-dependencies %} To prevent {% data variables.product.prodname_dependabot %} from automatically updating TypeScript type definitions from DefinitelyTyped, use `@types/*`.{% endif %}
- `versions`—use to ignore specific versions or ranges of versions. If you want to define a range, use the standard pattern for the package manager (for example: `^1.0.0` for npm, or `~> 2.0` for Bundler).
- `update-types`—use to ignore types of updates, such as semver `major`, `minor`, or `patch` updates on version updates (for example: `version-update:semver-patch` will ignore patch updates). You can combine this with `dependency-name: "*"` to ignore particular `update-types` for all dependencies. Currently, `version-update:semver-major`, `version-update:semver-minor`, and `version-update:semver-patch` are the only supported options. Security updates are unaffected by this setting.

If `versions` and `update-types` are used together, {% data variables.product.prodname_dependabot %} will ignore any update in either set.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Use `ignore` to specify dependencies that should not be updated

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
        # For AWS SDK, ignore all patch updates
      - dependency-name: "aws-sdk"
        update-types: ["version-update:semver-patch"]
```

{% note %}

**Note**: {% data variables.product.prodname_dependabot %} can only run version updates on manifest or lock files if it can access all of the dependencies in the file, even if you add inaccessible dependencies to the `ignore` option of your configuration file. For more information, see "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private-dependencies)" and "[Troubleshooting {% data variables.product.prodname_dependabot %} errors](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors#dependabot-cant-resolve-your-dependency-files)."


{% endnote %}

{% ifversion fpt or ghec or ghes > 3.4 %}
{% note %}

**Note**: For the `pub` ecosystem, {% data variables.product.prodname_dependabot %} won't perform an update when the version that it tries to update to is ignored, even if an earlier version is available.

{% endnote %}

{% endif %}

### `insecure-external-code-execution`

Package managers with the `package-ecosystem` values `bundler`, `mix`, and `pip` may execute external code in the manifest as part of the version update process. This might allow a compromised package to steal credentials or gain access to configured registries. When you add a [`registries`](#registries) setting within an `updates` configuration, {% data variables.product.prodname_dependabot %} automatically prevents external code execution, in which case the version update may fail. You can choose to override this behavior and allow external code execution for `bundler`, `mix`, and `pip` package managers by setting `insecure-external-code-execution` to `allow`.

You can explicitly deny external code execution, irrespective of whether there is a `registries` setting for this update configuration, by setting `insecure-external-code-execution` to `deny`.

{% raw %}
```yaml
# Allow external code execution when updating dependencies from private registries

version: 2
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
updates:
  - package-ecosystem: "bundler"
    directory: "/rubygems-server"
    insecure-external-code-execution: allow
    registries: "*"
    schedule:
      interval: "monthly"
```
{% endraw %}

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

By default, {% data variables.product.prodname_dependabot %} opens a maximum of five pull requests for version updates. Once there are five open pull requests from {% data variables.product.prodname_dependabot %}, {% data variables.product.prodname_dependabot %} will not open any new requests until some of those open requests are merged or closed. Use `open-pull-requests-limit` to change this limit. This also provides a simple way to temporarily disable version updates for a package manager.

This option has no impact on security updates, which have a separate, internal limit of ten open pull requests.

```yaml
# Specify the number of open pull requests allowed

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
# Specify a different separator for branch names

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

By default, {% data variables.product.prodname_dependabot %} automatically rebases open pull requests when it detects any changes to the pull request. Use `rebase-strategy` to disable this behavior.

Available rebase strategies

- `disabled` to disable automatic rebasing.
- `auto` to use the default behavior and rebase open pull requests when changes are detected.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Disable automatic rebasing

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Disable rebasing for npm pull requests
    rebase-strategy: "disabled"
```

### `registries`

To allow {% data variables.product.prodname_dependabot %} to access a private package registry when performing a version update, you must include a `registries` setting within the relevant `updates` configuration. You can allow all of the defined registries to be used by setting `registries` to `"*"`. Alternatively, you can list the registries that the update can use. To do this, use the name of the registry as defined in the top-level `registries` section of the _dependabot.yml_ file. For more information, see "[Configuration options for private registries](#configuration-options-for-private-registries)" below.

To allow {% data variables.product.prodname_dependabot %} to use `bundler`, `mix`, and `pip` package managers to update dependencies in private registries, you can choose to allow external code execution. For more information, see [`insecure-external-code-execution`](#insecure-external-code-execution) above.

```yaml
# Allow {% data variables.product.prodname_dependabot %} to use one of the two defined private registries
# when updating dependency versions for this ecosystem

{% raw %}
version: 2
registries:
  maven-github:
    type: maven-repository
    url: https://maven.pkg.github.com/octocat
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}
updates:
  - package-ecosystem: "gitsubmodule"
    directory: "/"
    registries:
      - maven-github
    schedule:
      interval: "monthly"
{% endraw %}
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

When you set a `weekly` update schedule, by default, {% data variables.product.prodname_dependabot %} checks for new versions on Monday at a random set time for the repository. Use `schedule.day` to specify an alternative day to check for updates.

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

By default, {% data variables.product.prodname_dependabot %} checks for new versions at a random set time for the repository. Use `schedule.time` to specify an alternative time of day to check for updates (format: `hh:mm`).

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

By default, {% data variables.product.prodname_dependabot %} checks for new versions at a random set time for the repository. Use `schedule.timezone` to specify an alternative time zone. The time zone identifier must be from the Time Zone database maintained by [iana](https://www.iana.org/time-zones). For more information, see [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

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

Use the `vendor` option to tell {% data variables.product.prodname_dependabot %} to vendor dependencies when updating them. Don't use this option if you're using `gomod` as {% data variables.product.prodname_dependabot %} automatically detects vendoring for this tool.

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
| `lockfile-only` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | Only create pull requests to update lockfiles. Ignore any new versions that would require package manifest changes. |
| `auto` | `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip` | Follow the default strategy described above.|
| `widen`| `composer`, `npm` | Relax the version requirement to include both the new and old version, when possible. |
| `increase`| `bundler`, `composer`, `npm` | Always increase the version requirement to match the new version. |
| `increase-if-necessary` | `bundler`, `composer`, `npm` | Increase the version requirement only when required by the new version. |

```yaml
# Customize the manifest version strategy

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

## Configuration options for private registries

The top-level `registries` key is optional. It allows you to specify authentication details that {% data variables.product.prodname_dependabot %} can use to access private package registries.

{% note %}

**Note:** Private registries behind firewalls on private networks are not supported.

{% endnote %}

The value of the `registries` key is an associative array, each element of which consists of a key that identifies a particular registry and a value which is an associative array that specifies the settings required to access that registry. The following *dependabot.yml* file, configures a registry identified as `dockerhub` in the `registries` section of the file and then references this in the `updates` section of the file.

{% raw %}
```yaml
# Minimal settings to update dependencies in one private registry

version: 2
registries:
  dockerhub: # Define access for a private registry
    type: docker-registry
    url: registry.hub.docker.com
    username: octocat
    password: ${{secrets.DOCKERHUB_PASSWORD}}
updates:
  - package-ecosystem: "docker"
    directory: "/docker-registry/dockerhub"
    registries:
      - dockerhub # Allow version updates for dependencies in this registry
    schedule:
      interval: "monthly"
```
{% endraw %}

You use the following options to specify access settings. Registry settings must contain a `type` and a `url`, and typically either a `username` and `password` combination or a `token`.

| Option&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
|:---|:---|
| `type`                     | Identifies the type of registry. See the full list of types below. |
| `url`                      | The URL to use to access the dependencies in this registry. The protocol is optional. If not specified, `https://` is assumed. {% data variables.product.prodname_dependabot %} adds or ignores trailing slashes as required. |
| `username`                 | The username that {% data variables.product.prodname_dependabot %} uses to access the registry. |
| `password`                 | A reference to a {% data variables.product.prodname_dependabot %} secret containing the password for the specified user. For more information, see "[Managing encrypted secrets for Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)." |
| `key`                    | A reference to a {% data variables.product.prodname_dependabot %} secret containing an access key for this registry. For more information, see "[Managing encrypted secrets for Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)." |
| `token`                    | A reference to a {% data variables.product.prodname_dependabot %} secret containing an access token for this registry. For more information, see "[Managing encrypted secrets for Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)." |
| `replaces-base`            | For registries with `type: python-index`, if the boolean value is `true`, pip resolves dependencies by using the specified URL rather than the base URL of the Python Package Index (by default `https://pypi.org/simple`). |


Each configuration `type` requires you to provide particular settings. Some types allow more than one way to connect. The following sections provide details of the settings you should use for each `type`.

### `composer-repository`

The `composer-repository` type supports username and password.

{% raw %}
```yaml
registries:
  composer:
    type: composer-repository
    url: https://repo.packagist.com/example-company/
    username: octocat
    password: ${{secrets.MY_PACKAGIST_PASSWORD}}
```
{% endraw %}

### `docker-registry`

{% note %}

**Note:** We don't support the Azure Container Registry (ACR).

{% endnote %}

The `docker-registry` type supports username and password.

{% raw %}
```yaml
registries:
  dockerhub:
    type: docker-registry
    url: https://registry.hub.docker.com
    username: octocat
    password: ${{secrets.MY_DOCKERHUB_PASSWORD}}
```
{% endraw %}

The `docker-registry` type can also be used to pull from Amazon ECR using static AWS credentials.

{% raw %}
```yaml
registries:
  ecr-docker:
    type: docker-registry
    url: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
    username: ${{secrets.ECR_AWS_ACCESS_KEY_ID}}
    password: ${{secrets.ECR_AWS_SECRET_ACCESS_KEY}}
```
{% endraw %}

### `git`

The `git` type supports username and password.

{% raw %}
```yaml
registries:
  github-octocat:
    type: git
    url: https://github.com
    username: x-access-token
    password: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

### `hex-organization`

The `hex-organization` type supports organization and key.

{% raw %}
```yaml
registries:
  github-hex-org:
    type: hex-organization
    organization: github
    key: ${{secrets.MY_HEX_ORGANIZATION_KEY}}
```
{% endraw %}

### `maven-repository`

The `maven-repository` type supports username and password.

{% raw %}
```yaml
registries:
  maven-artifactory:
    type: maven-repository
    url: https://artifactory.example.com
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

### `npm-registry`

The `npm-registry` type supports username and password, or token.

When using username and password, your `.npmrc`'s auth token may contain a `base64` encoded `_password`; however, the password referenced in your {% data variables.product.prodname_dependabot %} configuration file must be the original (unencoded) password.

{% raw %}
```yaml
registries:
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}  # Must be an unencoded password
```
{% endraw %}

{% raw %}
```yaml
registries:
  npm-github:
    type: npm-registry
    url: https://npm.pkg.github.com
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

### `nuget-feed`

The `nuget-feed` type supports username and password, or token.

{% raw %}
```yaml
registries:
  nuget-example:
    type: nuget-feed
    url: https://nuget.example.com/v3/index.json
    username: octocat@example.com
    password: ${{secrets.MY_NUGET_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  nuget-azure-devops:
    type: nuget-feed
    url: https://pkgs.dev.azure.com/.../_packaging/My_Feed/nuget/v3/index.json
    username: octocat@example.com
    password: ${{secrets.MY_AZURE_DEVOPS_TOKEN}}
```
{% endraw %}

### `python-index`

The `python-index` type supports username and password, or token.

{% raw %}
```yaml
registries:
  python-example:
    type: python-index
    url: https://example.com/_packaging/my-feed/pypi/example
    username: octocat
    password: ${{secrets.MY_BASIC_AUTH_PASSWORD}}
    replaces-base: true
```
{% endraw %}

{% raw %}
```yaml
registries:
  python-azure:
    type: python-index
    url: https://pkgs.dev.azure.com/octocat/_packaging/my-feed/pypi/example
    username: octocat@example.com
    password: ${{secrets.MY_AZURE_DEVOPS_TOKEN}}
    replaces-base: true
```
{% endraw %}

### `rubygems-server`

The `rubygems-server` type supports username and password, or token.

{% raw %}
```yaml
registries:
  ruby-example:
    type: rubygems-server
    url: https://rubygems.example.com
    username: octocat@example.com
    password: ${{secrets.MY_RUBYGEMS_PASSWORD}}
```
{% endraw %}

{% raw %}
```yaml
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```
{% endraw %}

### `terraform-registry`

The `terraform-registry` type supports a token.

{% raw %}
```yaml
registries:
  terraform-example:
    type: terraform-registry
    url: https://terraform.example.com
    token: ${{secrets.MY_TERRAFORM_API_TOKEN}}
```
{% endraw %}

{% ifversion fpt or ghec or ghes > 3.4 %} 
## Enabling support for beta-level ecosystems

### `enable-beta-ecosystems`

By default, {% data variables.product.prodname_dependabot %} updates the dependency manifests and lock files only for fully supported ecosystems. Use the `enable-beta-ecosystems` flag to opt in to updates for ecosystems that are not yet generally available.

```yaml
# Configure beta ecosystem

version: 2
enable-beta-ecosystems: true
updates:{% ifversion fpt or ghec or ghes > 3.5 %}
  - package-ecosystem: "beta-ecosystem"{% else %}
  - package-ecosystem: "pub"{% endif %}
    directory: "/"
    schedule:
      interval: "daily"
```
{% endif %}
