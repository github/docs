---
title: Dependabot options reference
intro: Detailed information for all the options you can use to customize how {% data variables.product.prodname_dependabot %} maintains your repositories.
permissions: '{% data reusables.permissions.dependabot-yml-configure %}'
allowTitleToDifferFromFilename: true
redirect_from:
  - /github/administering-a-repository/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/configuration-options-for-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates
  - /code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file
  - /code-security/dependabot/working-with-dependabot/dependabot-options-reference
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Dependabot options
contentType: reference
---

This article provides reference information for the configuration options available in the `dependabot.yml` file. Use these options to customize how {% data variables.product.prodname_dependabot %} monitors package ecosystems, schedules updates, and creates pull requests. For an overview of the `dependabot.yml` file and how it works, see [AUTOTITLE](/code-security/concepts/supply-chain-security/about-the-dependabot-yml-file).

All options marked with a {% octicon "shield-check" aria-label="Security updates" height="16" %} icon also change how {% data variables.product.prodname_dependabot %} creates pull requests for security updates, except where `target-branch` is used.

### Required keys

| Key | Location | Purpose |
|--|--|--|
| `version` | Top level| {% data variables.product.prodname_dependabot %} configuration syntax to use. Always: `2`.|
| `updates` | Top level| Section where you define each `package-ecosystem` to update.|
| [`package-ecosystem`](#package-ecosystem-) | Under `updates` | Define a package manager to update. |
| [`directories` or `directory`](#directories-or-directory--) | Under each `package-ecosystem` entry | Define the location of the manifest or other definition files to update. |
| [`schedule.interval`](#schedule-) | Under each `package-ecosystem` entry | Define whether to look for version updates: `daily`, `weekly`, or `monthly`. |

Optionally, you can also include a top-level `registries` key to define access details for private registries, see [Top-level `registries` key](#top-level-registries-key).

```yaml copy

# Basic `dependabot.yml` file with
# minimum configuration for two package managers

version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: "npm"
    # Look for `package.json` and `lock` files in the `root` directory
    directory: "/"
    # Check the npm registry for updates every day (weekdays)
    schedule:
      interval: "daily"

  # Enable version updates for Docker
  - package-ecosystem: "docker"
    # Look for a `Dockerfile` in the `root` directory
    directory: "/"
    # Check for updates once a week
    schedule:
      interval: "weekly"
```

For a real-world example of a `dependabot.yml` file, see [{% data variables.product.prodname_dependabot %}'s own configuration file](https://github.com/dependabot/dependabot-core/blob/main/.github/dependabot.yml).

## `allow` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Use to define exactly which dependencies to maintain for a package ecosystem. Often used with the [`ignore`](#ignore--) option. For examples, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/controlling-dependencies-updated#allowing-specific-dependencies-to-be-updated).

{% data variables.product.prodname_dependabot %} default behavior:

* {% octicon "versions" aria-hidden="true" aria-label="versions" %} All dependencies explicitly defined in a manifest are kept up to date by version updates.
* {% octicon "shield-check" aria-hidden="true" aria-label="shield-check" %} All dependencies defined in lock files with vulnerable dependencies are updated by security updates.

When `allow` is specified {% data variables.product.prodname_dependabot %} uses the following process:

1. Check for all explicitly **allowed** dependencies.
1. Then filter out any **ignored** dependencies or versions.

   If a dependency is matched by an `allow` and an `ignore` statement, then it is **ignored**.

| Parameters | Purpose |
|------------|---------|
| `dependency-name` | Allow updates for dependencies with matching names, optionally using `*` to match zero or more characters. |
| `dependency-type` | Allow updates for dependencies of specific types. |

### `dependency-name` (`allow`)

For most package managers, you should define a value that will match the dependency name specified in the lock or manifest file. A few systems have more complex requirements.

| Package manager | Format required | Example |
|-----------------|-----------------|---------|
| Gradle and Maven | `groupId:artifactId` | `org.kohsuke:github-api` |
| Docker for image tags |The full name of the repository | For an image tag of `<account ID>.dkr.ecr.us-west-2.amazonaws.com/base/foo/bar/ruby:3.1.0-focal-jemalloc`, use `base/foo/bar/ruby`.|

### `dependency-type` (`allow`)

| Dependency types | Supported by package managers | Allow updates |
|------------------|-------------------------------|--------|
| `direct` | All | All explicitly defined dependencies. |
| `indirect` | `bundler`, `pip`, `composer`, `cargo`, `gomod` | Dependencies of direct dependencies (also known as sub-dependencies, or transitive dependencies).|
| `all` | All | All explicitly defined dependencies. For `bundler`, `pip`, `composer`, `cargo`, `gomod`, also the dependencies of direct dependencies.|
| `production` | `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` (not all managers) | Only to dependencies defined by the package manager as production dependencies. |
| `development`| `bundler`, `composer`, `mix`, `maven`, `npm`, `pip` (not all managers) | Only to dependencies defined by the package manager as development dependencies. |

## `assignees` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Specify individual assignees for all pull requests raised for a package ecosystem.  For examples, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/customizing-dependabot-prs).

{% data variables.product.prodname_dependabot %} default behavior:

* Pull requests are created without any assignees.

When `assignees` is defined:

* {% octicon "versions" aria-hidden="true" aria-label="versions" %} All pull requests for version updates are created with the chosen assignees.
* {% octicon "shield-check" aria-hidden="true" aria-label="shield-check" %} All pull requests for security updates are created with the chosen assignees, unless `target-branch` defines updates to a non-default branch.

Assignees must have write access to the repository. For organization-owned repositories, organization members with read access are also valid assignees.

## `commit-message` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Define the format for commit messages. Since the titles of pull requests are written based on commit messages, this setting also impacts the titles of pull requests. For examples, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/customizing-dependabot-prs).

{% data variables.product.prodname_dependabot %} default behavior:

* Commit messages follow similar patterns to those detected in the repository.

When `commit-message` is defined:

* {% octicon "versions" aria-hidden="true" aria-label="versions" %} All commit messages follow the defined pattern.
* {% octicon "shield-check" aria-hidden="true" aria-label="shield-check" %} All commit messages follow the defined pattern, unless `target-branch` defines updates to a non-default branch.

| Parameters | Purpose |
|------------|---------|
| `prefix` | Defines a prefix for all commit messages and pull request titles. |
| `prefix-development` | On supported systems, defines a different prefix to use for commits that update dependencies in the Development dependency group. |
| `include` | Follow the commit message prefix with additional information. |

> [!TIP]
> When pull requests are raised for grouped updates, the branch name and pull request title are defined by the group `IDENTIFIER`, see [`groups`](#groups--).

### `prefix`

* Used for all commit messages unless `prefix-development` is also defined.
* Value can be up to 50 characters.
* {% data variables.product.prodname_dependabot %} inserts a colon after the prefix before adding the main commit message when the value ends with a letter, number, closing parenthesis, or closing bracket.
* End the value with a whitespace character to stop a colon being added.

### `prefix-development`

Supported by: `bundler`, `composer`, `mix`, `maven`, `npm`, and `pip`.

* Used only for commit messages that update dependencies in the Development dependency group.
* Otherwise, the parameter behaves exactly as the `prefix` parameter.

### `include`

* Supports only the value `scope`
* When defined any prefix is followed by the type of dependencies updated in the commit: `deps` or `deps-dev`.

{% ifversion dependabot-option-cooldown %}

## `cooldown` {% octicon "versions" aria-label="Version updates" height="24" %}

Defines a **cooldown period** for dependency updates, allowing updates to be delayed for a configurable number of days. The `cooldown` option is only available for _version_ updates, not _security_ updates.

This feature enables users to customize how often {% data variables.product.prodname_dependabot %} generates new version updates, offering greater control over update frequency. For examples, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/optimizing-pr-creation-version-updates#setting-up-a-cooldown-period-for-dependency-updates).

{% data variables.product.prodname_dependabot %} default behavior:

* Check for updates according to the scheduled defined via `schedule.interval`.
* Consider all new versions **immediately** for updates.

When **`cooldown`** is defined:

1. {% data variables.product.prodname_dependabot %} checks for updates according to the defined `schedule.interval` settings.
1. {% data variables.product.prodname_dependabot %} checks for any cooldown settings.
1. If a dependency’s new release falls within its cooldown period, {% data variables.product.prodname_dependabot %} skips updating the version for that dependency.
1. Dependencies without a cooldown period, or those past their cooldown period, are updated to the latest version as per the configured `versioning-strategy` setting.
1. After a cooldown ends for a dependency, {% data variables.product.prodname_dependabot %} resumes updating the dependency following the standard update strategy defined in `dependabot.yml`.

### **Configuration of `cooldown`**

You can specify the duration of the cooldown using the options below.

| Parameter | Description |
|-----------|-------------|
| `default-days` | **Default cooldown period for dependencies** without specific rules (optional). |
| `semver-major-days` | Cooldown period for **major version updates** (optional, applies only to package managers supporting SemVer). |
| `semver-minor-days` | Cooldown period for **minor version updates** (optional, applies only to package managers supporting SemVer). |
| `semver-patch-days` | Cooldown period for **patch version updates** (optional, applies only to package managers supporting SemVer). |
| `include` | List of dependencies to **apply cooldown** (up to **150 items**). Supports wildcards (`*`). |
| `exclude` | List of dependencies **excluded from cooldown** (up to **150 items**). Supports wildcards (`*`). |

The table below shows the package managers for which SemVer is supported.

| Package manager        | SemVer supported |
|-----------------------|------------------|
| {% ifversion dependabot-bazel-support %} |
| Bazel               | {% octicon "x" aria-label="Not supported" %}              |
| {% endif %} |
| Bundler               | {% octicon "check" aria-label="Supported" %}              |
| Bun                   | {% octicon "check" aria-label="Supported" %}              |
| Cargo                 | {% octicon "check" aria-label="Supported" %}              |
| Composer              | {% octicon "check" aria-label="Supported" %}              |
| Devcontainers         | {% octicon "x" aria-label="Not supported" %}              |
| Docker                | {% octicon "x" aria-label="Not supported" %}              |
| Docker Compose        | {% octicon "x" aria-label="Not supported" %}              |
| Dotnet SDK            | {% octicon "check" aria-label="Supported" %}              |
| Elm                   | {% octicon "check" aria-label="Supported" %}              |
| {% data variables.product.prodname_actions %} | {% octicon "x" aria-label="Not supported" %} |
| Gitsubmodule          | {% octicon "x" aria-label="Not supported" %}              |
| Gomod (Go Modules)    | {% octicon "check" aria-label="Supported" %}              |
| Gradle                | {% octicon "check" aria-label="Supported" %}              |
| Helm                  | {% octicon "x" aria-label="Not supported" %}              |
| Hex (Hex)             | {% octicon "check" aria-label="Supported" %}              |
| {% ifversion dependabot-julia-support %} |
| Julia                 | {% octicon "check" aria-label="Supported" %}              |
| {% endif %} |
| Maven                 | {% octicon "check" aria-label="Supported" %}              |
| NPM and Yarn          | {% octicon "check" aria-label="Supported" %}              |
| NuGet                 | {% octicon "check" aria-label="Supported" %}              |
| {% ifversion dependabot-opentofu-support %} |
| OpenTofu              | {% octicon "check" aria-label="Supported" %}              |
| {% endif %} |
| Pip                   | {% octicon "check" aria-label="Supported" %}              |
| Pub                   | {% octicon "check" aria-label="Supported" %}              |
| Swift                 | {% octicon "check" aria-label="Supported" %}              |
| Terraform             | {% octicon "x" aria-label="Not supported" %}              |
| UV                    | {% octicon "check" aria-label="Supported" %}              |

> [!NOTE]
>
> * If `semver-major-days`, `semver-minor-days`, or `semver-patch-days` are not defined, the `default-days` settings will take precedence for cooldown-based updates.
> * The `exclude` list always take precedence over the `include` list. If a dependency is specified in both lists, it is **excluded from cooldown** and will be updated immediately.

{% endif %}

## `directories` or `directory` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

**Required option**. Use to define the location of the package manifests for each package manager (for example, the _package.json_ or _Gemfile_). Without this information {% data variables.product.prodname_dependabot %} cannot create pull requests for version updates. For examples, see [Defining multiple locations for manifest files](/code-security/dependabot/dependabot-version-updates/controlling-dependencies-updated#defining-multiple-locations-for-manifest-files).

* Use `directory` to define a single directory of manifests.
* Use `directories` to define a list of multiple directories of manifests.
* Define directories relative to the root of the repository for most package managers.

* For {% data variables.product.prodname_actions %}, use the value `/`. {% data variables.product.prodname_dependabot %} will search the `/.github/workflows` directory, as well as the `action.yml/action.yaml` file from the root directory.

If you need to use more than one block in the configuration file to define updates for a single target branch of an ecosystem, you must ensure that all values are unique and there is no overlap in directories defined.

> [!NOTE]
> The `directories` key supports globbing and the wildcard character `*`. These features are not supported by the `directory` key.

## `enable-beta-ecosystems` {% octicon "versions" aria-label="Version updates only" height="24" %}

Not currently in use.

## `groups` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Define rules to create one or more sets of dependencies managed by a package manager, to group updates into fewer, targeted pull requests. For examples, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/optimizing-pr-creation-version-updates).

{% data variables.product.prodname_dependabot %} default behavior:

* Open a single pull request for each dependency that needs to be updated to a newer version for version updates and for security updates.

When `groups` is used to define rules:

* All updates for dependencies that match a rule are combined in a single pull request.
* If a dependency matches more than one rule, it's included in the first group that it matches.
* Any outdated dependencies that do not match a rule are updated in individual pull requests.

Parameters | Purpose |
-------|-------------|
| `IDENTIFIER` | Define an identifier for the group to use in branch names and pull request titles. This must start and end with a letter, and can contain letters, pipes `\|`, underscores `_`, or hyphens `-`. |
| `applies-to` | Specify which type of update the group applies to. When undefined, defaults to version updates. Supported values: `version-updates` or `security-updates`. |
| `dependency-type` | Limit the group to a type. Supported values: `development` or `production`. |
| `patterns` | Define one or more patterns to include dependencies with matching names. |
| `exclude-patterns` | Define one or more patterns to exclude dependencies from the group. |
| `update-types` | Limit the group to one or more semantic versioning levels. Supported values: `minor`, `patch`, and `major`. |

### `dependency-type` (`groups`)

Supported by: `bundler`, `composer`, `mix`, `maven`, `npm`, and `pip`.

By default, a group will include all types of dependencies.

* Use `development` to include only dependencies in the "Development dependency group."
* Use `production` to include only dependencies in the "Production dependency group."

### `patterns` and `exclude-patterns` (`groups`)

Both options support using `*` as a wild card to define matches with dependency names. If a dependency matches both a pattern and an exclude-pattern, then it is excluded from the group.

### `update-types` (`groups`)

By default, a group will include updates for all semantic versions (SemVer). SemVer is an accepted standard for defining versions of software packages, in the form `x.y.z`. Dependabot assumes that versions in this form are always `major.minor.patch`.

* Use `patch` to include patch releases.
* Use `minor` to include minor releases.
* Use `major` to include major releases.

For examples, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/controlling-dependencies-updated#specifying-the-semantic-versioning-level-to-ignore).

## `ignore` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Use with the [`allow`](#allow--) option to define exactly which dependencies to maintain for a package ecosystem. {% data variables.product.prodname_dependabot %} checks for all allowed dependencies and then filters out any ignored dependencies or versions. So a dependency that is matched by both an allow and an ignore will be ignored. For examples, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/controlling-dependencies-updated#ignoring-specific-dependencies).

{% data variables.product.prodname_dependabot %} default behavior:

* {% octicon "versions" aria-hidden="true" aria-label="versions" %} All dependencies explicitly defined in a manifest are kept up to date by version updates.
* {% octicon "shield-check" aria-hidden="true" aria-label="shield-check" %} All dependencies defined in lock files with vulnerable dependencies are updated by security updates.

When `ignore` is used {% data variables.product.prodname_dependabot %} uses the following process:

1. Check for all explicitly **allowed** dependencies.
1. Then filter out any **ignored** dependencies or versions.

   If a dependency is matched by an `allow` and an `ignore` statement, then it is **ignored**.

| Parameters | Purpose |
|------------|---------|
| `dependency-name` | Ignore updates for dependencies with matching names, optionally using `*` to match zero or more characters. |
| `versions` | Ignore specific versions or ranges of versions. |
| `update-types` | Ignore updates to one or more semantic versioning levels. Supported values: `version-update:semver-minor`, `version-update:semver-patch`, and `version-update:semver-major`. |

### `dependency-name` (`ignore`)

For most package managers, you should define a value that will match the dependency name specified in the lock or manifest file. A few systems have more complex requirements.

| Package manager | Format required | Example |
|-----------------|-----------------|---------|
| Gradle and Maven | `groupId:artifactId` | `org.kohsuke:github-api` |
| Docker for image tags |The full name of the repository | For an image tag of `<account ID>.dkr.ecr.us-west-2.amazonaws.com/base/foo/bar/ruby:3.1.0-focal-jemalloc`, use `base/foo/bar/ruby`.|

### `versions` (`ignore`)

Use to ignore specific versions or ranges of versions. If you want to define a range, use the standard pattern for the package manager. For example:

* npm: use `^1.0.0` <!-- markdownlint-disable-line GHD034 -->
* Bundler: use `~> 2.0`
* Docker: use Bundler version syntax
* NuGet: use `7.*`
* Maven: use `[1.4,)`

For examples, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/controlling-dependencies-updated#ignoring-specific-versions-or-ranges-of-versions).

### `update-types` (`ignore`)

Specify which semantic versions (SemVer) to ignore. SemVer is an accepted standard for defining versions of software packages, in the form `x.y.z`. {% data variables.product.prodname_dependabot %} assumes that versions in this form are always `major.minor.patch`.

* Use `version-update:semver-patch` to include patch releases.
* Use `version-update:semver-minor` to include minor releases.
* Use `version-update:semver-major` to include major releases.

## `insecure-external-code-execution` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Supported by: `bundler`, `mix`, and `pip`.

Allow {% data variables.product.prodname_dependabot %} to execute external code in the manifest during updates. For examples, see [Allowing external code execution](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot#allowing-external-code-execution).

{% data variables.product.prodname_dependabot %} default behavior:

* When you give {% data variables.product.prodname_dependabot %} access to one or more registries, external code execution is automatically disabled to protect your code from compromised packages.
* Version updates may fail without the ability to execute code.

When you allow `insecure-external-code-execution`:

* {% data variables.product.prodname_dependabot %} will execute code in the manifest as part of the version update process.
* The code has access to only the package managers in the registries associated with that `updates`setting. There is no access allowed to any of the registries defined in the top level `registries` configuration.
* This should enable the update to succeed but also could allow a compromised package to steal credentials or gain access to configured registries.

Supported value: `allow`.

## `labels` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Specify your own labels for all pull requests raised for a package manager.  For examples, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/customizing-dependabot-prs).

{% data variables.product.prodname_dependabot %} default behavior:

* All pull requests have a `dependencies` label.
* If you define more than one package manager, an additional label for the ecosystem or language is added to each pull request. For example: `java` for Gradle updates and `submodules` for git submodule updates.
* If semantic version (SemVer) labels are present in the repository, they will be applied automatically to indicate the type of version update (`major`, `minor`, or `patch`).
* {% data variables.product.prodname_dependabot %} creates these default labels automatically, as necessary in your repository.

When `labels` is defined:

* The labels specified are used instead of the default labels.
* SemVer labels (if present in the repository) will still be applied in addition to any custom labels defined.
* If any of these labels is not defined in the repository, it is ignored.
* You can disable all labels, including the default labels, using `labels: [ ]`.

{% data reusables.dependabot.option-affects-security-updates %}

## `milestone` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Associate all pull requests raised for a package manager with a milestone.  For examples, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/customizing-dependabot-prs).

{% data variables.product.prodname_dependabot %} default behavior:

* No milestones are used.

When `milestone` is defined:

* All pull requests for the package manager are added to the milestone.

Supported value: the numeric identifier of a milestone.

>[!TIP]
>If you view a milestone, the final part of the page URL, after `milestone`, is the identifier. For example: `https://github.com/<org>/<repo>/milestone/3`, see [AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/viewing-your-milestones-progress).

{% ifversion not ghes %}

## `multi-ecosystem-groups` {% octicon "versions" aria-label="Version updates" height="24" %}

Define groups that span multiple package ecosystems to get a single {% data variables.product.prodname_dependabot %} pull request that updates all supported package ecosystems. This approach helps reduce the number of {% data variables.product.prodname_dependabot %} pull requests you receive and streamlines your dependency update workflow.

{% data variables.product.prodname_dependabot %} default behavior:

* Create separate pull requests for each package ecosystem that has dependency updates.

When `multi-ecosystem-groups` is used:

* Updates across multiple package ecosystems in the same group are combined into a single pull request.
* Groups have their own schedules and can inherit or override individual ecosystem settings.

### `multi-ecosystem-group`

Assign individual package ecosystems to a multi-ecosystem group using the `multi-ecosystem-group` parameter in your `updates` configuration.

> [!IMPORTANT]
> Multi-ecosystem updates require specific configuration patterns and have unique parameter merging behavior. For complete setup instructions, configuration examples, and detailed parameter reference, see [AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-multi-ecosystem-updates).

```yaml copy
# Basic `dependabot.yml` file defining a multi-ecosystem-group
version: 2

multi-ecosystem-groups:
  infrastructure:
    schedule:
      interval: "weekly"

updates:
  - package-ecosystem: "docker"
    directory: "/"
    patterns: ["nginx", "redis"]
    multi-ecosystem-group: "infrastructure"

  - package-ecosystem: "terraform"
    directory: "/"
    patterns: ["aws"]
    multi-ecosystem-group: "infrastructure"
```

{% endif %}

## `open-pull-requests-limit` {% octicon "versions" aria-label="Version updates only" height="24" %}

Change the limit on the maximum number of pull requests for version updates open at any time.

{% data variables.product.prodname_dependabot %} default behavior:

* If five pull requests with version updates are open, no further pull requests are raised until some of those open requests are merged or closed.
* Security updates have a separate, internal limit of ten open pull requests which cannot be changed.

When `open-pull-requests-limit` is defined:

* {% data variables.product.prodname_dependabot %} opens pull requests up to the defined integer value. A large value can be set to effectively remove the open pull request limit.
* You can temporarily disable version updates for a package manager by setting this option to zero, see [Disabling {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#disabling-dependabot-version-updates).

## `package-ecosystem` {% octicon "versions" aria-label="Version updates only" height="24" %}

<!--Note: When making updates to this section, please make sure any changes are also reflected in `data/reusables/dependabot/supported-package-managers.md`.-->

**Required option.** Define one `package-ecosystem` element for each package manager that you want {% data variables.product.prodname_dependabot %} to monitor for new versions. The repository must also contain a dependency manifest or lock file for each package manager, see [Example `dependabot.yml` file](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#example-dependabotyml-file).

Package manager | YAML value      | Supported versions |
---------------|------------------|:------------------:|
| {% ifversion dependabot-bazel-support %} |
| Bazel         | `bazel`          | v7, v8, v9               |
| {% endif %} |
| {% ifversion dependabot-bun-support %} |
| Bun | `bun`         | >=v1.2.5              |
| {% endif %} |
| Bundler | `bundler` | {% ifversion ghes < 3.15 %}v1, {% endif %}v2 |
| Cargo       | `cargo`          | v1               |
| Composer       | `composer`       | v2         |
| {% ifversion dependabot-conda-support %} |
| Conda         | `conda`          | Not applicable               |
| {% endif %} |
| Dev containers | `devcontainers`         | Not applicable               |
| Docker         | `docker`         | v1               |
| {% ifversion dependabot-docker-compose-support %} |
| Docker Compose | `docker-compose`         | v2, v3               |
| {% endif %} |
| {% ifversion dependabot-dotnet-sdk %} |
| .NET SDK       | `dotnet-sdk`         | >=.NET Core 3.1           |
| {% endif %} |
| {% ifversion dependabot-helm-support %} |
| Helm Charts            | `helm`            | v3               |
| {% endif %} |
| Hex            | `mix`            | v1               |
| {% ifversion dependabot-julia-support %} |
| Julia                  | `julia`           | >=v1.10               |
| {% endif %} |
| elm-package    | `elm`            | v0.19            |
| git submodule  | `gitsubmodule`   | Not applicable |
| {% data variables.product.prodname_actions %}  | `github-actions` | Not applicable |
| Go modules     | `gomod`          | v1               |
| Gradle        | `gradle`         | Not applicable   |
| Maven      | `maven`          | Not applicable   |
| npm            | `npm`            |  v7, v8, v9, v10   |
| NuGet          | `nuget`          | {% ifversion fpt or ghec or ghes > 3.14 %}<=6.12.0{% endif %} |
| {% ifversion dependabot-opentofu-support %} |
| OpenTofu     | `opentofu`       | Not applicable     |
| {% endif %} |
| pip| `pip`            | v24.2          |
| pip-compile | `pip`            | 7.4.1            |
| pipenv         | `pip`            | <= 2024.4.1    |
| pnpm   | `npm`            | v7, v8 <br>v9, v10 (version updates only)    |
| poetry         | `pip`            | v2               |
| pub         | `pub`            | v2  |
| {% ifversion dependabot-rust-toolchain-support %} |
| Rust toolchain | `rust-toolchain` | Not applicable   |
| {% endif %} |
| Swift   | `swift`      | v5  |
| Terraform    | `terraform`      | >= 0.13, <= 1.10.x  |
| uv           | `uv`             | v0 |
| {% ifversion dependabot-vcpkg-support %} |
| vcpkg       | `vcpkg`          | Not applicable   |
| {% endif %} |
| yarn         | `npm`            | v1, v2, v3, v4     |

## `pull-request-branch-name.separator` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Specify a separator to use when generating branch names. For examples, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/customizing-dependabot-prs).

{% data variables.product.prodname_dependabot %} default behavior:

* Generate branch names of the form: `dependabot/PACKAGE_MANAGER/DEPENDENCY`

When `pull-request-branch-name.separator` is defined:

* Use the specified character in place of `/`.

Supported values: `"-"`, `_`,  `/`

> [!TIP]
> The hyphen symbol must be escaped so it is not interpreted as starting an empty YAML list.

## `rebase-strategy` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Disable automatic rebasing of pull requests raised by {% data variables.product.prodname_dependabot %}.

{% data variables.product.prodname_dependabot %} default behavior is to rebase open pull requests when {% data variables.product.prodname_dependabot %} detects any changes to a version or security update pull request. {% data variables.product.prodname_dependabot %} checks for changes when:

* Your schedule runs to check for version updates.
* You reopen a closed {% data variables.product.prodname_dependabot %} pull request.
* You change the value of `target-branch` in the {% data variables.product.prodname_dependabot %} configuration file, see [`target-branch`](#target-branch-).
* A {% data variables.product.prodname_dependabot %} pull request is in conflict after a recent push to the target branch.

When `rebase-strategy` is set to `disabled`, {% data variables.product.prodname_dependabot %} stops rebasing pull requests.

> [!NOTE]
> Pull requests that were open **before** you disable rebasing will continue to be rebased until 30 days after they were opened. This affects all pull requests that have conflicts with the target branch and all pull requests for version updates.

## `registries` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Configure access to private package registries to allow {% data variables.product.prodname_dependabot %} to update a wider range of dependencies, see [AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot) and [AUTOTITLE](/code-security/dependabot/working-with-dependabot/guidance-for-the-configuration-of-private-registries-for-dependabot).

There are 2 locations in the `dependabot.yml` file where you can use the `registries` key:

1. At the top level, where you define the private registries you want to use and their access information, see [AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot).
1. Within the `updates` blocks, where you can specify which private registries each package manager should use.

{% data variables.product.prodname_dependabot %} default behavior is to raise pull requests only to update dependencies stored in publicly accessible registries.

When the {% data variables.product.prodname_dependabot %} configuration file has a top-level `registries` section, defining access to one or more private registries, you can configure each `package-ecosystem` to use one or more of these private registries.

When `registries` is defined for a package manager:

* Each private registry specified for a package manager is checked for version and security updates.
* {% data variables.product.prodname_dependabot %} uses the access details defined in the top-level `registries` section.

Supported values: `REGISTRY_NAME` or `"*"`

{% ifversion dependabot-reviewers-deprecation %}{% else %}

## `reviewers` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

> [!IMPORTANT]
> The `reviewers` property is closing down and will be removed in a future release of {% data variables.product.prodname_ghe_server %}.
>
> You can also automatically add reviewers and assignees using a CODEOWNERS file. See [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).

Specify individual reviewers, or teams of reviewers, for all pull requests raised for a package manager.  For examples, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/customizing-dependabot-prs).

{% data variables.product.prodname_dependabot %} default behavior:

* Pull requests are created without any reviewers assigned.

When `reviewers` is defined:

* {% octicon "versions" aria-hidden="true" aria-label="versions" %} All pull requests for version updates are created with the chosen reviewers.
* {% octicon "shield-check" aria-hidden="true" aria-label="shield-check" %} All pull requests for security updates are created with the chosen reviewers, unless `target-branch` defines updates to a non-default branch.

Reviewers must have at least read access to the repository.

{% endif %}

## `schedule` {% octicon "versions" aria-label="Version updates only" height="24" %}

**Required option.** Define how often to check for new versions for each package manager you configure using the `interval` parameter. Optionally, for daily and weekly intervals, you can customize when {% data variables.product.prodname_dependabot %} checks for updates. For examples, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/optimizing-pr-creation-version-updates).

| Parameters | Purpose |
|------------|---------|
| [`interval`](#interval) | **Required.** Defines the frequency for {% data variables.product.prodname_dependabot %}. |
| [`day`](#day) | Specify the day to run for a **weekly** interval. |
| [`time`](#time) | Specify the time to run. |
| {% ifversion dependabot-schedule-updates %} |
| [`cronjob`](#cronjob) | Defines the cron expression if the interval type is `cron`. |
| {% endif %} |
| [`timezone`](#timezone) | Specify the timezone of the `time` value.  |

{% ifversion fpt or ghec %}

### `interval`

Supported values: `daily`, `weekly`, `monthly`, `quarterly`, `semiannually`, `yearly`, or `cron`

Each package manager **must** define a schedule interval.

* Use `daily` to run on every weekday, Monday to Friday.
* Use `weekly` to run once a week, by default on Monday.
* Use `monthly` to run on the first day of each month.
* Use `quarterly` to run on the first day of each quarter (January, April, July, and October).
* Use `semiannually` to run every six months, on the first day of January and July.
* Use `yearly` to run on the first day of January.
* Use `cron` for cron expression based scheduling option. See [`cronjob`](#cronjob).

{% elsif ghes %}

### `interval`

Supported values: `daily`, `weekly`, `monthly`{% ifversion dependabot-schedule-updates %}, or `cron`{% endif %}

Each package manager **must** define a schedule interval.

* Use `daily` to run on every weekday, Monday to Friday.
* Use `weekly` to run once a week, by default on Monday.
* Use `monthly` to run on the first day of each month.{% ifversion dependabot-schedule-updates %}
* Use `cron` for cron expression based scheduling option. See [`cronjob`](#cronjob).{% endif %}

{% endif %}

By default, {% data variables.product.prodname_dependabot %} randomly assigns a time to apply all the updates in the configuration file. You can use the `time` and `timezone` parameters to set a specific runtime for all intervals.  {% ifversion dependabot-schedule-updates %}If you use a `cron` interval, you can define the update time with a `cronjob` expression.{% endif %}

### `day`

Supported values: `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, or `sunday`

Optionally, run **weekly** updates for a package manager on a specific day of the week.

### `time`

Format: `hh:mm`

Optionally, run all updates for a package manager at a specific time of day. By default, times are interpreted as UTC.

{% ifversion dependabot-schedule-updates %}

### `cronjob`

Supported values: Valid cron expression in cron syntax or natural expression.

{% data reusables.repositories.cron %}

Examples : `0 9 * * *`, `every day at 5pm`

`0 9 * * *` is equivalent to "every day at 9am". `every day at 5pm` is equivalent to `0 17 * * *`.

> [!NOTE]
> * Timezones must be specified in the [`timezone`](#timezone) parameter and not in the `cronjob`.
> * A `cronjob` type schedule is required to use a `cron` interval.

```yaml copy

# Basic `dependabot.yml` file for cronjob

version: 2
updates:
  # Enable version updates for npm
  - package-ecosystem: "npm"
    # Look for `package.json` and `lock` files in the `root` directory
    directory: "/"
    # Check the npm registry for updates based on `cronjob` value
    schedule:
      interval: "cron"
      cronjob: "0 9 * * *"
```

{% endif %}

### `timezone`

Specify a time zone for the `time` value. The default time zone is `UTC`.

The time zone identifier must match a timezone in the database maintained by [iana](https://www.iana.org/time-zones), see [List of tz database time zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

## `target-branch` {% octicon "versions" aria-label="Version updates only" height="24" %}

Define a specific branch to check for version updates and to target pull requests for version updates against.  For examples, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/customizing-dependabot-prs).

{% data variables.product.prodname_dependabot %} default behavior:

* {% data variables.product.prodname_dependabot %} uses the default branch for the repository, see [About the default branch](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#about-the-default-branch).

When `target-branch` is defined:

* Only manifest files on the target branch are checked for version updates.
* All pull requests for version updates are opened targeting the specified branch.
* Options defined for this `package-ecosystem` no longer apply to security updates because security updates always use the default branch for the repository.

## `exclude-paths` {% octicon "versions" aria-label="Version updates only" height="24" %}

Use to specify paths of directories and files that {% data variables.product.prodname_dependabot %} should ignore when scanning for manifests and dependencies. This option is useful when you want to prevent updates for dependencies in certain locations, such as test assets, vendored code, or specific files.

{% data variables.product.prodname_dependabot %} default behavior:

* All directories and files in the specified `directory` are included in the update scan unless excluded by this option.

When `exclude-paths` is defined:

* All files and directories matching the specified paths are ignored during update scans for the given `package-ecosystem` entry.

| Parameter | Purpose |
|-----------|---------|
| `exclude-paths` | A list of glob patterns for files or directories to ignore. |

Glob patterns are supported, such as `**` for recursive matching and `*` for single-segment wildcards. Patterns are relative to the `directory` specified for the update configuration. Each ecosystem can have its own `exclude-paths` settings.

### Example

```yaml copy
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    exclude-paths:
      - "src/test/assets"
      - "vendor/**"
      - "src/*.js"
      - "src/test/helper.js"

# Sample patterns that can be used-

# Pattern: docs/*.json
# Matches: docs/foo.json, docs/bar.json

# Pattern: *.lock
# Matches: Gemfile.lock, package.lock, foo.lock (in any directory)

# Pattern: test/**
# Matches: test/foo.rb, test/bar/baz.rb, test/any/depth/file.txt

# Pattern: config/settings.yml
# Matches: config/settings.yml

# Pattern: **/*.md
# Matches: README.md, docs/guide.md, any/depth/file.md

# Pattern: src/*
# Matches: src/main.rb, src/app.js
# Does NOT match: src/utils/helper.rb

# Pattern: hidden/.*
# Matches: hidden/.env, hidden/.secret
```

In this example, {% data variables.product.prodname_dependabot %} will ignore the `src/test/assets` directory, all files under `vendor/`, all JavaScript files directly under `src/`, and the specific file `src/test/helper.js` when scanning for updates.

## `vendor` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Supported by: `bundler` and `gomod` only.

Tell {% data variables.product.prodname_dependabot %} to maintain your vendored dependencies as well as the dependencies defined by manifest files. A dependency is described as "vendored" or "cached" when you store the code within your repository, see [`bundle cache` documentation](https://bundler.io/man/bundle-cache.1.html) and [`go mod vendor` documentation](https://golang.org/ref/mod#go-mod-vendor).

For examples, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/controlling-dependencies-updated#updating-vendored-dependencies).

{% data variables.product.prodname_dependabot %} default behavior:

* Maintain only dependencies recorded in the manifest and lock files identified for Bundler.
* Raise security and version update pull requests that update the version numbers recorded in the manifest and lock files.
* For Go modules, any vendored dependencies are automatically identified and maintained as if `vendor` was enabled.

When `vendor` is enabled:

* {% data variables.product.prodname_dependabot %} also maintains dependencies for Bundler that are stored in the  `_vendor/cache_` directory in the repository.
* Pull requests will sometimes contain updates to a dependency that is stored in the repository.

Supported values: `true` or `false`

## `versioning-strategy` {% octicon "versions" aria-label="Version updates" height="24" %} {% octicon "shield-check" aria-label="Security updates" height="24" %}

Supported by: `bundler`, `cargo`, `composer`, `mix`, `npm`, `pip`, `pub`

Define how {% data variables.product.prodname_dependabot %} should edit manifest files. For examples, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/controlling-dependencies-updated#defining-a-versioning-strategy).

{% data variables.product.prodname_dependabot %} default behavior:

* Try to differentiate between app and library dependencies.
* For apps, always increase the minimum version requirement to match the new version. The `increase` strategy.
* For libraries, widen the allowed version requirements to include both the new and old versions, when possible. The `widen` strategy.

When `versioning-strategy` is defined, {% data variables.product.prodname_dependabot %} uses the strategy specified.

| Value | Behavior |
|--------|--------|
| `auto` | Default behavior.|
| `increase`| Always increase the minimum version requirement to match the new version. If a range already exists, typically this only increases the lower bound. |
| `increase-if-necessary` | Leave the version requirement unchanged if it already allows the new release (Dependabot still updates the resolved version). Otherwise widen the requirement. |
| `lockfile-only` | Only create pull requests to update lockfiles. Ignore any new versions that would require package manifest changes. |
| `widen`| Widen the allowed version requirements to include both the new and old versions, when possible. Typically, this only increases the maximum allowed version requirement. |

For example, if the current version is `1.0.0` and the current constraint is `^1.0.0` the different strategies would raise the following updates:

New version `1.2.0`

* `increase`: new constraint `^1.2.0`
* `increase-if-necessary`: new constraint `^1.0.0`
* `widen`: new constraint `^1.0.0`

New version `2.0.0`

* `increase`: new constraint `^2.0.0`
* `increase-if-necessary`: new constraint `^2.0.0 `
* `widen`: new constraint `>=1.0.0 <3.0.0`

> [!NOTE]
> If the package manager you use does not yet support configuring the `versioning-strategy` parameter, or does not support a value you need. The strategy code is open source, so if you'd like a particular ecosystem to support a new strategy, you are always welcome to submit a pull request in https://github.com/dependabot/dependabot-core/.

{% ifversion dependabot-updates-supported-versioning-tags %}

### Versioning tags

<!-- markdownlint-disable outdated-release-phase-terminology -->

* Represent stages in the software release lifecycle, such as alpha, beta, and stable versions.
* Allow publishers to distribute their packages more effectively.
* Indicate the stability of a version and communicate what users should expect in terms of features and stability.

{% data reusables.dependabot.dependabot-updates-supported-versioning-tags %}

#### Versioning tag glossary

* **`alpha`:** Early version, may be unstable and have incomplete features.
* **`beta`:** More stable than alpha but may still have bugs.
* **`canary`:** Regularly updated pre-release version for testing.
* **`dev`:** Represents development versions.
* **`experimental`:** Versions with experimental features.
* **`latest`:** The latest stable release.
* **`legacy`:** Older or deprecated versions.
* **`next`:** Upcoming release version.
* **`nightly`:** Versions built nightly; often includes the latest changes.
* **`rc`:** Release candidate, close to stable release.
* **`release`:** The official release version.
* **`stable`:** The most reliable, production-ready version.

<!-- markdownlint-enable outdated-release-phase-terminology -->

{% endif %}

## Top-level `registries` key

Specify authentication details that {% data variables.product.prodname_dependabot %} can use to access private package registries, including registries hosted by GitLab or Bitbucket.

{% ifversion ghes %}

> [!NOTE]
> Private registries behind firewalls on private networks are supported for the following ecosystems:
>
> * Bundler
> * Cargo
> * Docker
> * Gradle
> * Maven
> * Npm
> * NuGet
> * Pub
> * Python
> * Yarn

{% endif %}

The value of the `registries` key is an associative array, each element of which consists of a key that identifies a particular registry and a value which is an associative array that specifies the settings required to access that registry. The following `dependabot.yml` file configures a registry identified as `dockerhub` in the `registries` section of the file and then references this in the `updates` section of the file.

{% raw %}

```yaml copy
# Minimal settings to update dependencies stored in one private registry

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

{% data reusables.dependabot.advanced-private-registry-config-link %}

### `type` and authentication details

The parameters used to provide authentication details for access to a private registry vary according to the registry `type`.

| Registry `type` | Required authentication parameters |
|--|--|
| `cargo-registry` | `token` |
| `composer-repository` | `username` and `password` |
| `docker-registry` | `username` and `password` |
| `git` | `username` and `password` |
| `hex-organization` | `organization` and `key` |
| `hex-repository` | `repo` and `auth-key` optionally with the corresponding `public-key-fingerprint` |
| `maven-repository` | `username` and `password` |
| `npm-registry` | `username` and `password`<br>or `token` |
| `nuget-feed` | `username` and `password`<br>or `token` |
| `pub-registry` | `token` |
| `python-index` | `username` and `password`<br>or `token` |
| `rubygems-server` | `username` and `password`<br>or `token` |
| `terraform-registry` | `token` |

All sensitive data used for authentication should be stored securely and referenced from that secure location, see [AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot).

> [!TIP]
> {% data reusables.dependabot.password-definition %}

### `url` and `replaces-base`

The `url` parameter defines where to access a registry. When the optional `replaces-base` parameter is enabled (`true`), {% data variables.product.prodname_dependabot %} resolves dependencies using the value of `url` rather than the base URL of that specific ecosystem.
