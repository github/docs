---
title: Configuration options for the dependabot.yml file
intro: 'Detailed information for all the options you can use to customize how {% data variables.product.prodname_dependabot %} maintains your repositories.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /github/administering-a-repository/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: reference
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Configure dependabot.yml
---

{% data reusables.dependabot.enterprise-enable-dependabot %}

## About the `dependabot.yml` file

The {% data variables.product.prodname_dependabot %} configuration file, `dependabot.yml`, uses YAML syntax. If you're new to YAML and want to learn more, see "[Learn YAML in five minutes](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)."

You must store this file in the `.github` directory of your repository in the default branch. When you add or update the `dependabot.yml` file, this triggers an immediate check for version updates. For more information and an example, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates)."

Any options that also affect security updates are used the next time a security alert triggers a pull request for a security update.  For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)."

{% note %}

**Note:** You cannot configure {% data variables.product.prodname_dependabot_alerts %} using the `dependabot.yml` file.

{% endnote %}

The `dependabot.yml` file has two mandatory top-level keys: `version`, and `updates`. You can, optionally, include a top-level `registries` key. The file must start with `version: 2`.

For a real-world example of `dependabot.yml` file, see  [{% data variables.product.prodname_dependabot %}'s own configuration file](https://github.com/dependabot/dependabot-core/blob/main/.github/dependabot.yml).

## Configuration options for the `dependabot.yml` file

The top-level `updates` key is mandatory. You use it to configure how {% data variables.product.prodname_dependabot %} updates the versions or your project's dependencies. Each entry configures the update settings for a particular package manager. You can use the following options.

{% data reusables.dependabot.configuration-options %}
{% ifversion dependabot-updates-multidirectory-support %}

{% data reusables.dependabot.directory-directories-required %}

{% endif %}
These options fit broadly into the following categories.

* Essential set up options that you must include in all configurations: [`package-ecosystem`](#package-ecosystem), [`directory`](#directory){% ifversion dependabot-updates-multidirectory-support %} or [`directories`](#directories){% endif %},[`schedule.interval`](#scheduleinterval).
* Options to customize the update schedule: [`schedule.time`](#scheduletime), [`schedule.timezone`](#scheduletimezone), [`schedule.day`](#scheduleday).
* Options to control which dependencies are updated: [`allow`](#allow), {% ifversion dependabot-version-updates-groups %}[`groups`](#groups),{% endif %} [`ignore`](#ignore), [`vendor`](#vendor).
* Options to add metadata to pull requests: [`reviewers`](#reviewers), [`assignees`](#assignees), [`labels`](#labels), [`milestone`](#milestone).
* Options to change the behavior of the pull requests: [`target-branch`](#target-branch), [`versioning-strategy`](#versioning-strategy), [`commit-message`](#commit-message), [`rebase-strategy`](#rebase-strategy), [`pull-request-branch-name.separator`](#pull-request-branch-nameseparator).

In addition, the [`open-pull-requests-limit`](#open-pull-requests-limit) option changes the maximum number of pull requests for version updates that {% data variables.product.prodname_dependabot %} can open.

{% note %}

**Note:** Some of these configuration options may also affect pull requests raised for security updates of vulnerable package manifests.

Security updates are raised for vulnerable package manifests only on the default branch. When configuration options are set for the same branch (true unless you use `target-branch`), and specify a `package-ecosystem` and `directory` for the vulnerable manifest, then pull requests for security updates use relevant options.

In general, security updates use any configuration options that affect pull requests, for example, adding metadata or changing their behavior. For more information about security updates, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)."

{% endnote %}

### `package-ecosystem`

**Required**. You add one `package-ecosystem` element for each package manager that you want {% data variables.product.prodname_dependabot %} to monitor for new versions. The repository must also contain a dependency manifest or lock file for each of these package managers.

If you want to enable vendoring for a package manager that supports it, the vendored dependencies must be located in the required directory. For more information, see [`vendor`](#vendor) below.

If you want to allow {% data variables.product.prodname_dependabot %} to access a private package registry when performing a version update, you can include a `registries` setting in the configuration file. For more information, see [`registries`](#registries) below.{% ifversion ghes %}

{% note %}

**Note:** Enterprise owners can download the most recent version of the [{% data variables.product.prodname_dependabot %} action](https://github.com/github/dependabot-action) to get the best ecosystem coverage. {% data reusables.actions.action-bundled-actions %}

{% endnote %}

{% endif %}

{% data reusables.dependabot.supported-package-managers %}

#### Example of a basic setup for three package managers

```yaml
# Basic set up for three package managers

version: 2
updates:

  # Maintain dependencies for GitHub Actions
  - package-ecosystem: "github-actions"
    # Workflow files stored in the default location of `.github/workflows`. (You don't need to specify `/.github/workflows` for `directory`. You can use `directory: "/"`.)
    directory: "/"
    schedule:
      interval: "weekly"

  # Maintain dependencies for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"

  # Maintain dependencies for Composer
  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "weekly"
```

### `directory`

**Required**. You must define the location of the package manifests for each package manager (for example, the _package.json_ or _Gemfile_). You define the directory relative to the root of the repository for all ecosystems except {% data variables.product.prodname_actions %}.

{% ifversion dependabot-updates-multidirectory-support %}

{% data reusables.dependabot.directories-option-overview %} For more information, see [`directories`](#directories).

{% data reusables.dependabot.directory-directories-required %}

{% endif %}

For {% data variables.product.prodname_actions %}, you do not need to set the directory to `/.github/workflows`. Configuring the key to `/` automatically instructs {% data variables.product.prodname_dependabot %} to search the `/.github/workflows` directory, as well as the _action.yml_ / _action.yaml_ file from the root directory.

```yaml
# Specify location of manifest files for each package manager

version: 2
updates:
  - package-ecosystem: "composer"
    # Files stored in repository root
    directory: "/"
    schedule:
      interval: "weekly"

  - package-ecosystem: "npm"
    # Files stored in `app` directory
    directory: "/app"
    schedule:
      interval: "weekly"

  - package-ecosystem: "github-actions"
    # Workflow files stored in the default location of `.github/workflows`. (You don't need to specify `/.github/workflows` for `directory`. You can use `directory: "/"`.)
    directory: "/"
    schedule:
      interval: "weekly"
```

{% ifversion dependabot-updates-multidirectory-support %}

### `directories`

**Required**. You must define the locations of the package manifests for each package manager. You define directories relative to the root of the repository for all ecosystems except {% data variables.product.prodname_actions %}. The `directories` option contains a list of strings representing directories.

{% data reusables.dependabot.directory-directories-required %}

```yaml
# Specify locations of manifest files for each package manager using `directories`

version: 2
updates:
  - package-ecosystem: "bundler"
    directories:
      - "/frontend"
      - "/backend"
      - "/admin"
    schedule:
      interval: "weekly"
```

{% data reusables.dependabot.directories-option-overview %}

{% data reusables.dependabot.directory-vs-directories-guidance %}

```yaml
# Specify locations of manifest files for each package manager using both `directories` and `directory`

version: 2
updates:
  - package-ecosystem: "bundler"
    directories:
      - "/frontend"
      - "/backend"
      - "/admin"
    schedule:
      interval: "weekly"
  - package-ecosystem: "bundler"
    directory: "/"
    schedule:
      interval: "daily"
```

>[!TIP]
> The `directories` key supports globbing and the wildcard character `*`. These features are not supported by the `directory` key.

```yaml
# Specify the root directory and directories that start with "lib-", using globbing, for locations of manifest files

version: 2
updates:
  - package-ecosystem: "composer"
    directories:
      - "/"
      - "/lib-*"
    schedule:
      interval: "weekly"
```

```yaml
# Specify the root directory and directories in the root directory as the location of manifest files using the wildcard character

version: 2
updates:
  - package-ecosystem: "composer"
    directories:
      - "*"
    schedule:
      interval: "weekly"
```

```yaml
# Specify all directories from the current layer and below recursively, using globstar, for locations of manifest files

version: 2
updates:
  - package-ecosystem: "composer"
    directories:
      - "**/*"
    schedule:
      interval: "weekly"
```

{% data reusables.dependabot.multidirectory-vs-pr-grouping %}  For more information about grouping, see "[`groups`](#groups)."

{% endif %}

### `schedule.interval`

**Required**. You must define how often to check for new versions for each package manager. By default, {% data variables.product.prodname_dependabot %} randomly assigns a time to apply all the updates in the configuration file. To set a specific time, you can use [`schedule.time`](#scheduletime) and [`schedule.timezone`](#scheduletimezone).

{% note %}

**Note:** The `schedule.time` option is a best effort, and it may take some time before {% data variables.product.prodname_dependabot %} opens pull requests to update to newer dependency versions.

{% endnote %}

| Interval types | Frequency |
|----------------|-----------|
| `daily` | Runs on every weekday, Monday to Friday.|
| `weekly`| Runs once each week. By default, this is on Monday. To modify this, use [`schedule.day`](#scheduleday).|
| `monthly` | Runs once each month. This is on the first day of the month. |

```yaml
# Set update schedule for each package manager

version: 2
updates:

  - package-ecosystem: "github-actions"
    # Workflow files stored in the default location of `.github/workflows`. (You don't need to specify `/.github/workflows` for `directory`. You can use `directory: "/"`.)
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

**Note**: `schedule` defines when {% data variables.product.prodname_dependabot %} attempts a new update. However, it's not the only time you may receive pull requests. Updates can be triggered based on changes to your `dependabot.yml` file, {% ifversion dependabot-updates-deprecate-rerun-failed-jobs %}{% else %}changes to your manifest file(s) after a failed update, {% endif %}or {% data variables.product.prodname_dependabot_security_updates %}. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates#frequency-of-dependabot-pull-requests)" and "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)."

{% data reusables.dependabot.version-updates-skip-scheduled-runs %}

{% endnote %}

### `allow`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Use the `allow` option to customize which dependencies are updated. This applies to both version and security updates. You can use the following options:

* `dependency-name`—use to allow updates for dependencies with matching names, optionally using `*` to match zero or more characters.
     * For Java dependencies, the format of the `dependency-name` attribute is: `groupId:artifactId`; for example: `org.kohsuke:github-api`.
     * For Docker image tags, the format is the full name of the repository; for example, for an image tag of `<account ID>.dkr.ecr.us-west-2.amazonaws.com/base/foo/bar/ruby:3.1.0-focal-jemalloc`, use `base/foo/bar/ruby`.

* `dependency-type`—use to allow updates for dependencies of specific types.

  | Dependency types | Supported by package managers | Allow updates |
  |------------------|-------------------------------|--------|
  | `direct` | All | All explicitly defined dependencies. |
  | `indirect` | `bundler`, `pip`, `composer`, `cargo`{% ifversion dependabot-updates-gomod-indirect %}, `gomod`{% endif %} | Dependencies of direct dependencies (also known as sub-dependencies, or transient dependencies).|
  | `all` | All | All explicitly defined dependencies. For `bundler`, `pip`, `composer`, `cargo`,{% ifversion dependabot-updates-gomod-indirect %} `gomod`,{% endif %} also the dependencies of direct dependencies.|
  | `production` | `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` (not all managers) | Only dependencies in the "Production dependency group". |
  | `development`| `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` (not all managers) | Only dependencies in the "Development dependency group". |

```yaml
# Use `allow` to specify which dependencies to maintain

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    allow:
      # Allow updates for Lodash
      - dependency-name: "lodash"
      # Allow updates for React and any packages starting "react"
      - dependency-name: "react*"

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "weekly"
    allow:
      # Allow both direct and indirect updates for all packages
      - dependency-type: "all"

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "weekly"
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
      interval: "weekly"
    # Add assignees
    assignees:
      - "octocat"
```

### `commit-message`

By default, {% data variables.product.prodname_dependabot %} attempts to detect your commit message preferences and use similar patterns. Use the `commit-message` option to specify your preferences explicitly. This setting also impacts the titles of pull requests.

We populate the titles of pull requests based on the commit messages, whether explicitly set or auto-detected from the repository history.

Supported options

{% note %}

**Note:** The `prefix` and the `prefix-development` options have a 50-character limit.

{% endnote %}

* `prefix` specifies a prefix for all commit messages and it will also be added to the start of the PR title.
   When you specify a prefix for commit messages, {% data variables.product.prodname_dotcom %} will automatically add a colon between the defined prefix and the commit message provided the defined prefix ends with a letter, number, closing parenthesis, or closing bracket. This means that, for example, if you end the prefix with a whitespace, there will be no colon added between the prefix and the commit message.
   The code snippet below provides examples of both in the same configuration file.

* `prefix-development` specifies a separate prefix for all commit messages that update dependencies in the Development dependency group. When you specify a value for this option, the `prefix` is used only for updates to dependencies in the Production dependency group. This is supported by: `bundler`, `composer`, `mix`, `maven`, `npm`, and `pip`.
* `include: "scope"` specifies that any prefix is followed by the type of the dependencies (`deps` or `deps-dev`) updated in the commit.

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Customize commit messages

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    commit-message:
      # Prefix all commit messages with "npm: "
      prefix: "npm"

  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
    commit-message:
      # Prefix all commit messages with "[docker] " (no colon, but a trailing whitespace)
      prefix: "[docker] "

  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "weekly"
    # Prefix all commit messages with "Composer" plus its scope, that is, a
    # list of updated dependencies
    commit-message:
      prefix: "Composer"
      include: "scope"

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "weekly"
    # Include a list of updated dependencies
    # with a prefix determined by the dependency group
    commit-message:
      prefix: "pip prod"
      prefix-development: "pip dev"
```

If you use the same configuration as in the example above, bumping the `requests` library in the `pip` development dependency group will generate a commit message of:

   `pip dev: bump requests from 1.0.0 to 1.0.1`

{% ifversion dependabot-version-updates-groups %}

### `groups`

{% ifversion dependabot-grouped-security-updates-config %}{% data reusables.dependabot.dependabot-security-updates-groups-supported %}{% else %}{% data reusables.dependabot.dependabot-version-updates-groups-supported %}{% endif %}

{% data reusables.dependabot.dependabot-version-updates-groups-about %}

{% data reusables.dependabot.dependabot-version-updates-groups-semver %}

{% data reusables.dependabot.dependabot-version-updates-supported-options-for-groups %}

{% ifversion dependabot-grouped-security-updates-config %}
The `applies-to` key is used to specify whether a set of grouping rules is intended for version updates or security updates. Using the `applies-to` key is optional. If the `applies-to` key is absent from a set of grouping rules, it defaults to `version-updates` for backwards compatibility. You cannot apply a single grouping set of rules to both version updates and security updates. Instead, if you want to group both version updates and security updates using the same criteria, you must define two, separately named, grouping sets of rules. To do this, you can copy the group configuration block for the ecosystem and directory, and name each set of rules differently.
{% endif %}

{% data reusables.dependabot.dependabot-version-updates-groups-match-first %}

If a dependency doesn't belong to any group, {% data variables.product.prodname_dependabot %} will continue to raise single pull requests to update the dependency to its latest version as normal. {% data variables.product.prodname_dotcom %} reports in the logs if a group is empty. For more information, see "[{% data variables.product.prodname_dependabot %} fails to group a set of dependencies into a single pull request](/code-security/dependabot/working-with-dependabot/troubleshooting-dependabot-errors#dependabot-fails-to-group-a-set-of-dependencies-into-a-single-pull-request)."

When a scheduled update runs, {% data variables.product.prodname_dependabot %} will refresh pull requests for grouped updates using the following rules:
* If all the same dependencies need to be updated to the same versions, {% data variables.product.prodname_dependabot %} will rebase the branch.
* If all the same dependencies need to be updated, but a newer version has become available for one (or more) of the dependencies, {% data variables.product.prodname_dependabot %} will close the pull request and create a new one.
* If the dependencies to be updated have changed - for example, if another dependency in the group now has an update available - {% data variables.product.prodname_dependabot %} will close the pull request and create a new one.

You can also manage pull requests for grouped version updates and security updates using comment commands, which are short comments you can make on a pull request to give instructions to {% data variables.product.prodname_dependabot %}. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-for-grouped-{% ifversion dependabot-grouped-security-updates-config %}{% else %}version-{% endif %}updates-with-comment-commands)."

{% data reusables.dependabot.dependabot-version-updates-groups-yaml-example %}

{% ifversion dependabot-grouped-security-updates-config %}

{% data reusables.dependabot.multidirectory-vs-pr-grouping %} For more information about multidirectory support, see "[`directories`](#directories)."

{% endif %}

{% endif %}

### `ignore`

{% data reusables.dependabot.default-dependencies-allow-ignore %}

Dependencies can be ignored either by adding them to `ignore` or by using the `@dependabot ignore` command on a pull request opened by {% data variables.product.prodname_dependabot %}.

{% warning %}

**Warning**:
* We recommend you do _not_ use `ignore` to prevent {% data variables.product.prodname_dependabot %} from accessing private registries. This may work for some ecosystems but we have no means of knowing whether package managers require access to all dependencies to be able to successfully perform updates, which makes this method unreliable. The supported way to handle private dependencies is to give {% data variables.product.prodname_dependabot %} access to private registries or private repositories. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot)."

* For {% data variables.product.prodname_actions %} and Docker, you may use `ignore` to prevent {% data variables.product.prodname_dependabot %} from accessing private registries.

{% endwarning %}

#### Creating `ignore` conditions from `@dependabot ignore`

Dependencies ignored by using the `@dependabot ignore` command are stored centrally for each package manager. If you start ignoring dependencies in the `dependabot.yml` file, these existing preferences are considered alongside the `ignore` dependencies in the configuration.

You can check whether a repository has stored `ignore` preferences by searching the repository for `"@dependabot ignore" in:comments`, or by using the `@dependabot show DEPENDENCY_NAME ignore conditions` comment command. If you wish to unblock updates for a dependency ignored this way, re-open the pull request. This clears the `ignore` conditions that were set when the pull request was closed and resumes those {% data variables.product.prodname_dependabot %} updates for the dependency. To update the dependency to a newer version, merge the pull request. {% ifversion dependabot-version-updates-groups %}In pull requests for grouped {% ifversion dependabot-grouped-security-updates-config %}{% else %}version {% endif %}updates, you can also use the `@dependabot unignore` commands to clear `ignore` settings for dependencies.{% endif %}

For more information about the `@dependabot ignore` commands, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)."

#### Specifying dependencies and versions to ignore

You can use the `ignore` option to customize which dependencies are updated. The `ignore` option supports the following options.

| Option | Description |
|--------|-------------|
|<code><span style="white-space: nowrap;">dependency-name</span></code> | Use to ignore updates for dependencies with matching names, optionally using `*` to match zero or more characters.</br>For Java dependencies, the format of the `dependency-name` attribute is: `groupId:artifactId` (for example: `org.kohsuke:github-api`).</br> To prevent {% data variables.product.prodname_dependabot %} from automatically updating TypeScript type definitions from DefinitelyTyped, use `@types/*`. |
| `versions` | Use to ignore specific versions or ranges of versions. If you want to define a range, use the standard pattern for the package manager.</br>For example, for npm, use `^1.0.0`; for Bundler, use `~> 2.0`; for Docker, use Ruby version syntax; for NuGet, use `7.*`. |
| <code><span style="white-space: nowrap;">update-types</span></code> | Use to ignore types of updates, such as semver `major`, `minor`, or `patch` updates on version updates (for example: `version-update:semver-patch` will ignore patch updates). You can combine this with `dependency-name: "*"` to ignore particular `update-types` for all dependencies.</br>Currently, `version-update:semver-major`, `version-update:semver-minor`, and `version-update:semver-patch` are the only supported options. |

When used alone, the `ignore.versions` key affects both {% data variables.product.prodname_dependabot %} updates, but the `ignore.update-types` key affects only {% data variables.product.prodname_dependabot_version_updates %}.

However, if `versions` and `update-types` are used together in the same `ignore` rule, both {% data variables.product.prodname_dependabot %} updates are affected, unless the configuration uses `target-branch` to check for version updates on a non-default branch.

```yaml
# Use `ignore` to specify dependencies that should not be updated

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    ignore:
      - dependency-name: "express"
        # For Express, ignore all Dependabot updates for version 4 and 5
        versions: ["4.x", "5.x"]
        # For Lodash, ignore all updates
      - dependency-name: "lodash"
        # For AWS SDK, ignore all patch updates for version updates only
      - dependency-name: "aws-sdk"
        update-types: ["version-update:semver-patch"]
  - package-ecosystem: 'github-actions'
    directory: '/'
    schedule:
      interval: 'weekly'
    ignore:
      - dependency-name: 'actions/checkout'
        # For GitHub Actions, ignore all updates greater than or equal to version 3
        versions: '>= 3'
```

{% note %}

**Note**: {% data variables.product.prodname_dependabot %} can only run version updates on manifest or lock files if it can access all of the dependencies in the file, even if you add inaccessible dependencies to the `ignore` option of your configuration file. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private{% ifversion ghec or ghes %}-or-internal{% endif %}-dependencies)" and "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/troubleshooting-dependabot-errors#dependabot-cant-resolve-your-dependency-files)."

{% endnote %}

{% note %}

**Note**: For the `pub` ecosystem, {% data variables.product.prodname_dependabot %} won't perform an update when the version that it tries to update to is ignored, even if an earlier version is available.

{% endnote %}

The following examples show how `ignore` can be used to customize which dependencies are updated.

##### Ignore updates beyond a specific version

   ```yaml
   ignore:
     - dependency-name: "lodash:*"
       versions: [ ">=1.0.0" ]
   ```

##### Ignore updates beyond a specific version

   ```yaml
   ignore:
     - dependency-name: "sphinx"
       versions: [ "[1.1,)" ]
   ```

##### Ignore patch updates

   ```yaml
   ignore:
     - dependency-name: "@types/node"
       update-types: ["version-update:semver-patch"]
   ```

##### Ignore updates for a specific version

   ```yaml
   ignore:
     - dependency-name: "django*"
       versions: [ "11" ]
   ```

### `insecure-external-code-execution`

Package managers with the `package-ecosystem` values `bundler`, `mix`, and `pip` may execute external code in the manifest as part of the version update process. This might allow a compromised package to steal credentials or gain access to configured registries. When you add a [`registries`](#registries) setting within an `updates` configuration, {% data variables.product.prodname_dependabot %} automatically prevents external code execution, in which case the version update may fail. You can choose to override this behavior and allow external code execution for `bundler`, `mix`, and `pip` package managers by setting `insecure-external-code-execution` to `allow`.

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

If you define a `registries` setting to allow {% data variables.product.prodname_dependabot %} to access a private package registry, and you set `insecure-external-code-execution` to `allow` in the same `updates` configuration, external code execution that occurs will only have access to the package managers in the registries associated with that `updates`setting. There is no access allowed to any of the registries defined in the top level `registries` configuration.

In this example, the configuration file allows {% data variables.product.prodname_dependabot %} to access the `ruby-github` private package registry. In the same `updates`setting, `insecure-external-code-execution`is set to `allow`, which means that the code executed by dependencies will only access the `ruby-github` registry, and not the `dockerhub` registry.

{% raw %}

```yaml
# Using `registries` in conjunction with `insecure-external-code-execution:allow`
# in the same `updates` setting

version: 2
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
  dockerhub:
    type: docker-registry
    url: registry.hub.docker.com
    username: octocat
    password: ${{secrets.DOCKERHUB_PASSWORD}}
updates:
  - package-ecosystem: "bundler"
    directory: "/rubygems-server"
    insecure-external-code-execution: allow
    registries:
      - ruby-github # only access to registries associated with this ecosystem/directory
    schedule:
      interval: "monthly"
```

{% endraw %}

You can explicitly deny external code execution, regardless of whether there is a `registries` setting for this update configuration, by setting `insecure-external-code-execution` to `deny`.

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
      interval: "weekly"
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
      interval: "weekly"
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
      interval: "weekly"
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0

  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "weekly"
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
      interval: "weekly"
    pull-request-branch-name:
      # Separate sections of the branch name with a hyphen
      # for example, `dependabot-npm_and_yarn-next_js-acorn-6.4.1`
      separator: "-"
```

### `rebase-strategy`

By default, {% data variables.product.prodname_dependabot %} automatically rebases open pull requests when it detects any changes to the pull request. Use `rebase-strategy` to disable this behavior.

{% ifversion dependabot-updates-rebase-30-days-cutoff %}

{% note %}

**Note:** {% data reusables.dependabot.pull-requests-30-days-cutoff %}

{% endnote %}
{% endif %}

Available rebase strategies

* `auto` to use the default behavior and rebase open pull requests when changes are detected.
* `disabled` to disable automatic rebasing.

When `rebase-strategy` is set to `auto`, {% data variables.product.prodname_dependabot %} attempts to rebase pull requests in the following cases.
* When you use {% data variables.product.prodname_dependabot_version_updates %}, for any open {% data variables.product.prodname_dependabot %} pull request when your schedule runs.
* When you reopen a closed {% data variables.product.prodname_dependabot %} pull request.
* When you change the value of `target-branch` in the {% data variables.product.prodname_dependabot %} configuration file. For more information about this field, see "[`target-branch`](#target-branch)."
* When {% data variables.product.prodname_dependabot %} detects that a {% data variables.product.prodname_dependabot %} pull request is in conflict after a recent push to the target branch.

{% ifversion dependabot-updates-rebase-30-days-cutoff %}
{% else %}
{% note %}

**Note:** {% data variables.product.prodname_dependabot %} will keep rebasing a pull request indefinitely until the pull request is closed, merged or you disable {% data variables.product.prodname_dependabot_updates %}.

{% endnote %}
{% endif %}

When `rebase-strategy` is set to `disabled`, {% data variables.product.prodname_dependabot %} stops rebasing pull requests.

{% note %}

**Note:** This behavior only applies to pull requests that go into conflict with the target branch. {% data variables.product.prodname_dependabot %} will keep rebasing {% ifversion dependabot-updates-rebase-30-days-cutoff %}(until 30 days after opening){% endif %} pull requests opened prior to the `rebase-strategy` setting being changed, and pull requests that are part of a scheduled run.

{% endnote %}

{% data reusables.dependabot.option-affects-security-updates %}

```yaml
# Disable automatic rebasing

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    # Disable rebasing for npm pull requests
    rebase-strategy: "disabled"
```

### `registries`

To allow {% data variables.product.prodname_dependabot %} to access a private package registry when performing a version update, you must include a `registries` setting within the relevant `updates` configuration.

{% data reusables.dependabot.dependabot-updates-registries %}

For more information, see "[Configuration options for private registries](#configuration-options-for-private-registries)" below.

{% data reusables.dependabot.advanced-private-registry-config-link %}

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
      interval: "weekly"
    # Add reviewers
    reviewers:
      - "octocat"
      - "my-username"
      - "my-org/python-team"
```

### `schedule.day`

When you set a `weekly` update schedule, by default, {% data variables.product.prodname_dependabot %} checks for new versions on Monday at a random set time for the repository. Use `schedule.day` to specify an alternative day to check for updates.

Supported values

* `monday`
* `tuesday`
* `wednesday`
* `thursday`
* `friday`
* `saturday`
* `sunday`

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
      interval: "weekly"
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
      interval: "weekly"
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
      interval: "weekly"
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

When {% data variables.product.prodname_dependabot %} edits a manifest file to update a version, there are several different potential versioning strategies:

| Option | Action |
|--------|--------|
| `auto` | Try to differentiate between apps and libraries. Use `increase` for apps and `widen` for libraries.|
| `increase`| Always increase the minimum version requirement to match the new version. If a range already exists, typically this only increases the lower bound. |
| `increase-if-necessary` | Leave the constraint if the original constraint allows the new version, otherwise, bump the constraint. |
| `lockfile-only` | Only create pull requests to update lockfiles. Ignore any new versions that would require package manifest changes. |
| `widen`| Widen the allowed version requirements to include both the new and old versions, when possible. Typically, this only increases the maximum allowed version requirement. |
| N/A | Some package managers do not yet support configuring the `versioning-strategy` parameter. |

The following table shows an example of how `versioning-strategy` can be used.

| Current constraint | Current version | New version | Strategy | New constraint |
|--------------------|-----------------|-------------|----------|----------------|
| ^1.0.0 | 1.0.0 | 1.2.0 | `widen` | ^1.0.0 |
| ^1.0.0 | 1.0.0 | 1.2.0 | `increase` | ^1.2.0 |
| ^1.0.0 | 1.0.0 | 1.2.0 | `increase-if-necessary` | ^1.0.0 |
| ^1.0.0 | 1.0.0 | 2.0.0 | `widen` | >=1.0.0 <3.0.0 |
| ^1.0.0 | 1.0.0 | 2.0.0 | `increase` | ^2.0.0 |
| ^1.0.0 | 1.0.0 | 2.0.0 | `increase-if-necessary` | ^2.0.0 |

Use the `versioning-strategy` option to change this behavior for supported package managers.

{% data reusables.dependabot.option-affects-security-updates %}

Available update strategies:

| Ecosystem | Supported versioning strategies | Default strategy |
|-----------|---------------------------------|------------------|
| `bundler` | `auto`, `increase`, `increase-if-necessary`, `lockfile-only` | `auto` |
| `cargo` | `auto`, `lockfile-only` | `auto` |
| `composer` | `auto`, `increase`, `increase-if-necessary`, `lockfile-only`, `widen` | `auto` |
| `docker` | N/A | N/A |
| `github-actions` | N/A | N/A |
| `gitsubmodule` | N/A | N/A |
| `gomod` | N/A | N/A |
| `gradle` | N/A | N/A |
| `maven` | N/A | N/A |
| `mix` | `auto`, `lockfile-only` | `auto` |
| `npm` | `auto`, `increase`, `increase-if-necessary`, `lockfile-only`, `widen` | `auto` |
| `nuget` | N/A | N/A |
| `pip` | `auto`, `increase`, `increase-if-necessary`, `lockfile-only` | `auto` |
| `pub` | `auto`, `increase`, `increase-if-necessary`, `widen` | `auto` |
| `terraform` | N/A | N/A |

{% note %}

**Note:** `N/A` indicates that the package manager does not yet support configuring the `versioning-strategy` parameter. The strategy code is open source, so if you'd like a particular ecosystem to support a new strategy, you are always welcome to submit a pull request in https://github.com/dependabot/dependabot-core/.

{% endnote %}

```yaml
# Example configuration for customizing the manifest version strategy

version: 2
updates:
  - package-ecosystem: "composer"
    directory: "/"
    schedule:
      interval: "weekly"
    # Increase the version requirements for Composer only when required
    versioning-strategy: increase-if-necessary
```

## Configuration options for private registries

The top-level `registries` key is optional. It allows you to specify authentication details that {% data variables.product.prodname_dependabot %} can use to access private package registries.

You can give {% data variables.product.prodname_dependabot %} access to private package registries hosted by GitLab or Bitbucket by specifying a `type` of `git`. For more information, see [`git`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#git).
{% ifversion ghes %}
{% note %}

**Note:** Private registries behind firewalls on private networks are supported for the following ecosystems:

* Bundler{% ifversion dependabot-updates-cargo-private-registry-support %}
* Cargo{% endif %}
* Docker
* Gradle
* Maven
* Npm
* Nuget{% ifversion dependabot-updates-pub-private-registry %}
* Pub{% endif %}
* Python
* Yarn

{% endnote %}
{% endif %}

The value of the `registries` key is an associative array, each element of which consists of a key that identifies a particular registry and a value which is an associative array that specifies the settings required to access that registry. The following `dependabot.yml` file configures a registry identified as `dockerhub` in the `registries` section of the file and then references this in the `updates` section of the file.

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

{% data reusables.dependabot.dependabot-updates-registries-options %}

You must provide the required settings for each configuration `type` that you specify. Some types allow more than one way to connect. The following sections provide details of the settings you should use for each `type`.

{% data reusables.dependabot.advanced-private-registry-config-link %}

{% ifversion dependabot-updates-cargo-private-registry-support %}

### `cargo-registry`

The `cargo-registry` type supports a token.

{% data reusables.dependabot.dependabot-updates-path-match %}

{% data reusables.dependabot.cargo-private-registry-config-example %}

{% endif %}

### `composer-repository`

The `composer-repository` type supports username and password. {% data reusables.dependabot.password-definition %}

{% data reusables.dependabot.dependabot-updates-path-match %}

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

{% data variables.product.prodname_dependabot %} works with any container registries that implement the OCI container registry spec. For more information, see [https://github.com/opencontainers/distribution-spec/blob/main/spec.md](https://github.com/opencontainers/distribution-spec/blob/main/spec.md).  {% data variables.product.prodname_dependabot %} supports authentication to private registries via a central token service or HTTP Basic Auth. For further details, see [Token Authentication Specification](https://docs.docker.com/registry/spec/auth/token/) in the Docker documentation and [Basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) on Wikipedia.

The `docker-registry` type supports username and password. {% data reusables.dependabot.password-definition %}

{% data reusables.dependabot.dependabot-updates-path-match %}

{% raw %}

```yaml
registries:
  dockerhub:
    type: docker-registry
    url: https://registry.hub.docker.com
    username: octocat
    password: ${{secrets.MY_DOCKERHUB_PASSWORD}}
    replaces-base: true
```

{% endraw %}

The `docker-registry` type can also be used to pull from private Amazon ECR using static AWS credentials.

{% raw %}

```yaml
registries:
  ecr-docker:
    type: docker-registry
    url: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
    username: ${{secrets.ECR_AWS_ACCESS_KEY_ID}}
    password: ${{secrets.ECR_AWS_SECRET_ACCESS_KEY}}
    replaces-base: true
```

{% endraw %}

### `git`

The `git` type supports username and password. {% data reusables.dependabot.password-definition %}

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

{% data reusables.dependabot.dependabot-updates-path-match %}

{% raw %}

```yaml
registries:
  github-hex-org:
    type: hex-organization
    organization: github
    key: ${{secrets.MY_HEX_ORGANIZATION_KEY}}
```

{% endraw %}

{% ifversion dependabot-hex-self-hosted-support %}

### `hex-repository`

The `hex-repository` type supports an authentication key.

`repo` is a required field, which must match the name of the repository used in your dependency declaration.

The `public-key-fingerprint` is an optional configuration field, representing the fingerprint of the public key for the Hex repository. `public-key-fingerprint` is used by Hex to establish trust with the private repository. The `public-key-fingerprint` field can be either listed in plaintext or stored as a {% data variables.product.prodname_dependabot %} secret.

{% raw %}

```yaml
registries:
   github-hex-repository:
     type: hex-repository
     repo: private-repo
     url: https://private-repo.example.com
     auth-key: ${{secrets.MY_AUTH_KEY}}
     public-key-fingerprint: ${{secrets.MY_PUBLIC_KEY_FINGERPRINT}}
```

{% endraw %}{% endif %}

### `maven-repository`

The `maven-repository` type supports username and password. {% data reusables.dependabot.password-definition %}

{% data reusables.dependabot.dependabot-updates-path-match %}

{% raw %}

```yaml
registries:
  maven-artifactory:
    type: maven-repository
    url: https://acme.jfrog.io/artifactory/my-maven-registry
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```

{% endraw %}

### `npm-registry`

The `npm-registry` type supports username and password, or token. {% data reusables.dependabot.password-definition %}

When using username and password, your `.npmrc`'s auth token may contain a `base64` encoded `_password`; however, the password referenced in your {% data variables.product.prodname_dependabot %} configuration file must be the original (unencoded) password.

{% note %}

**Note**: When using `npm.pkg.github.com`, don't include a path. Instead use the `https://npm.pkg.github.com` URL without a path.

{% endnote %}

{% raw %}

```yaml
registries:
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}  # Must be an unencoded password
    replaces-base: true
```

{% endraw %}

{% raw %}

```yaml
registries:
  npm-github:
    type: npm-registry
    url: https://npm.pkg.github.com
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
    replaces-base: true
```

{% endraw %}

For security reasons, {% data variables.product.prodname_dependabot %} does not set environment variables. Yarn (v2 and later) requires that any accessed environment variables are set. When accessing environment variables in your `.yarnrc.yml` file, you should provide a fallback value such as {% raw %}`${ENV_VAR-fallback}`{% endraw %} or {% raw %}`${ENV_VAR:-fallback}`{% endraw %}. For more information, see [Yarnrc files](https://yarnpkg.com/configuration/yarnrc) in the Yarn documentation.

### `nuget-feed`

The `nuget-feed` type supports username and password, or token. {% data reusables.dependabot.password-definition %}

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

{% ifversion dependabot-updates-pub-private-registry %}

### `pub-repository`

The `pub-repository` type supports a URL and a token.

{% raw %}

```yaml
registries:
  my-pub-registry:
    type: pub-repository
    url: https://example-private-pub-repo.dev/optional-path
    token: ${{secrets.MY_PUB_TOKEN}}
updates:
  - package-ecosystem: "pub"
    directory: "/"
    schedule:
      interval: "weekly"
    registries:
      - my-pub-registry
```

{% endraw %}

{% endif %}

### `python-index`

The `python-index` type supports username and password, or token. {% data reusables.dependabot.password-definition %}

{% data reusables.dependabot.dependabot-updates-path-match %}

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

The `rubygems-server` type supports username and password, or token. {% data reusables.dependabot.password-definition %}

{% data reusables.dependabot.dependabot-updates-path-match %}

{% raw %}

```yaml
registries:
  ruby-example:
    type: rubygems-server
    url: https://rubygems.example.com
    username: octocat@example.com
    password: ${{secrets.MY_RUBYGEMS_PASSWORD}}
    replaces-base: true
```

{% endraw %}

{% raw %}

```yaml
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
    replaces-base: true
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

## Enabling support for beta-level ecosystems

### `enable-beta-ecosystems`

By default, {% data variables.product.prodname_dependabot %} updates the dependency manifests and lock files only for fully supported ecosystems. Use the `enable-beta-ecosystems` flag to opt in to updates for ecosystems that are not yet generally available.

<!-- add list here once we get ecosystems released in beta -->
There are currently no ecosystems in beta.

```yaml
# Configure beta ecosystem

version: 2
enable-beta-ecosystems: true
updates:
  - package-ecosystem: "beta-ecosystem"
    directory: "/"
    schedule:
      interval: "weekly"
```
