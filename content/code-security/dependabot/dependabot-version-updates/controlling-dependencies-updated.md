---
title: Controlling which dependencies are updated by Dependabot
intro: 'Learn how to configure your `dependabot.yml` file so that {% data variables.product.prodname_dependabot %} automatically updates the packages you specify, in the way you define.'
allowTitleToDifferFromFilename: true
permissions: '{% data reusables.permissions.dependabot-yml-configure %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Control dependency update
---

You can customize your {% data variables.product.prodname_dependabot %} configuration to suit your needs, by adding options to your `dependabot.yml` file. For example, you can make sure that {% data variables.product.prodname_dependabot %} uses the correct package manifest files, and updates only the dependencies you want maintained.

This article collates customization options you may find useful.

{% ifversion dependabot-updates-multidirectory-support %}

## Defining multiple locations for manifest files

If you want to enable {% data variables.product.prodname_dependabot_version_updates %} for manifest files stored in more than one location, you can use `directories` in place of `directory`. For example, this configuration sets two different update schedules for manifest files stored in different directories.

```yaml copy
# Specify the locations of the manifest files to update for each package manager
# using both `directories` and `directory`

version: 2
updates:
  - package-ecosystem: "bundler"
    # Update manifest files stored in these directories weekly
    directories:
      - "/frontend"
      - "/backend"
      - "/admin"
    schedule:
      interval: "weekly"
  - package-ecosystem: "bundler"
    # Update manifest files stored in the root directory daily
    directory: "/"
    schedule:
      interval: "daily"
```

* To specify a range of directories using a pattern

   ```yaml copy
   # Specify the root directory and directories that start with "lib-",
   # using globbing, for locations of manifest files

   version: 2
   updates:
     - package-ecosystem: "composer"
       directories:
         - "/"
         - "/lib-*"
       schedule:
         interval: "weekly"
    ```

* To specify manifests in the current directory and recursive subdirectories

   ```yaml copy
   # Specify all directories from the current layer and below recursively,
   # using globstar, for locations of manifest files

   version: 2
   updates:
     - package-ecosystem: "composer"
       directories:
         - "**/*"
       schedule:
         interval: "weekly"
   ```

{% endif %}

## Ignoring specific dependencies

If you are not ready to adopt changes from certain dependencies in your project, you can configure {% data variables.product.prodname_dependabot %} to ignore those dependencies when it opens pull requests for version updates{% ifversion dependabot-grouped-security-updates-config %} and security updates{% endif %}. You can do this using one of the following methods.

* Configure the `ignore` option for the dependency in your `dependabot.yml` file.
   * **You can use this to ignore updates for specific dependencies, versions, and types of updates.**
   * For more information, see `ignore` in [AUTOTITLE](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#ignore--).
* Use `@dependabot ignore` comment commands on a {% data variables.product.prodname_dependabot %} pull request for version updates{% ifversion dependabot-grouped-security-updates-config %} and security updates{% endif %}.
   * **You can use comment commands to ignore updates for specific dependencies and versions.**
   * For more information, see [AUTOTITLE](/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands).

Here are some examples showing how `ignore` can be used to customize which dependencies are updated.

* To ignore updates beyond a specific version

   ```yaml copy
   ignore:
     - dependency-name: "lodash:*"
       # Ignore versions of Lodash that are equal to or greater than 1.0.0
       versions: [ ">=1.0.0" ]
   ```

   ```yaml copy
   ignore:
     - dependency-name: "sphinx"
       versions: [ "[1.1,)" ]
   ```

* To ignore patch updates

   ```yaml copy
   ignore:
     - dependency-name: "@types/node"
       # Ignore patch updates for Node
       update-types: ["version-update:semver-patch"]
   ```

* To ignore specific versions or version ranges, see [Ignoring specific versions or ranges of versions](#ignoring-specific-versions-or-ranges-of-versions).

If you want to un-ignore a dependency or ignore condition, you can delete the ignore conditions from the `dependabot.yml` file or reopen the pull request.

For pull requests for grouped {% ifversion dependabot-grouped-security-updates-config %}{% else %}version {% endif %}updates, you can also use `@dependabot unignore` comment commands. The `@dependabot unignore` comment commands enable you to do the following by commenting on a {% data variables.product.prodname_dependabot %} pull request:

* Un-ignore a specific ignore condition
* Un-ignore a specific dependency
* Un-ignore all ignore conditions for all dependencies in a {% data variables.product.prodname_dependabot %} pull request

{% ifversion dependabot-grouped-security-updates-config %}{% else %}

> [!NOTE]
> The `@dependabot unignore` comment commands only work on pull requests for grouped version updates.

{% endif %}

For more information, see [AUTOTITLE](/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-for-grouped-{% ifversion dependabot-grouped-security-updates-config %}{% else %}version-{% endif %}updates-with-comment-commands).

## Allowing specific dependencies to be updated

You can use `allow` to tell {% data variables.product.prodname_dependabot %} about the dependencies you want to maintain. `allow` is usually used in conjunction with `ignore`.

For more information, see `allow` in [AUTOTITLE](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#allow--).

By default, {% data variables.product.prodname_dependabot %} creates version update pull requests only for the dependencies that are explicitly defined in a manifest (`direct` dependencies). This configuration uses `allow` to tell {% data variables.product.prodname_dependabot %} that we want it to maintain `all` types of dependency. That is, both the `direct` dependencies and their dependencies (also known as indirect dependencies, sub-dependencies, or transient dependencies). In addition, the configuration tells {% data variables.product.prodname_dependabot %} to ignore all dependencies with a name matching the pattern `org.xwiki.*` because we have a different process for maintaining them.

> [!TIP]
> {% data variables.product.prodname_dependabot %} checks for all **allowed** dependencies, then filters out any **ignored** dependencies. If a dependency is matched by an **allow** and an **ignore** statement, then it is ignored.

```yaml copy
version: 2
registries:
  # Helps find updates for non Maven Central dependencies
  maven-xwiki-public:
    type: maven-repository
    url: https://nexus.xwiki.org/nexus/content/groups/public/
    username: ""
    password: ""
  # Required to resolve xwiki-common SNAPSHOT parent pom
  maven-xwiki-snapshots:
    type: maven-repository
    url: https://maven.xwiki.org/snapshots
    username: ""
    password: ""
updates:
  - package-ecosystem: "maven"
    directory: "/"
    registries:
      - maven-xwiki-public
      - maven-xwiki-snapshots
    schedule:
      interval: "weekly"
    allow:
      # Allow both direct and indirect updates for all packages.
      - dependency-type: "all"
    ignore:
      # Ignore XWiki dependencies. We have a separate process for updating them
      - dependency-name: "org.xwiki.*"
    open-pull-requests-limit: 15
```

## Ignoring specific versions or ranges of versions

You can use `versions` in conjunction with `ignore` to ignore specific versions or ranges of versions.

For more information, see `versions` in [AUTOTITLE](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#versions-ignore).

* To ignore a specific version

   ```yaml copy
   ignore:
     - dependency-name: "django*"
       # Ignore version 11
       versions: [ "11" ]
   ```

* To ignore a range of versions

   ```yaml copy
       ignore:
         - dependency-name: "@types/node"
           versions: ["15.x", "14.x", "13.x"]
         - dependency-name: "xdg-basedir"
           # 5.0.0 has breaking changes as they switch to named exports
           # and convert the module to ESM
           # We can't use it until we switch to ESM across the project
           versions: ["5.x"]
         - dependency-name: "limiter"
           # 2.0.0 has breaking changes
           # so we want to delay updating.
           versions: ["2.x"]
   ```

## Specifying the semantic versioning level to ignore

You can specify one or more semantic versioning (SemVer) levels to ignore using `update-types`.

For more information, see `update-types` in [AUTOTITLE](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#update-types-ignore).

In this example, {% data variables.product.prodname_dependabot %} will ignore patch versions for Node.

```yaml copy
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
      - dependency-name: "@types/node"
        # For Node types, ignore any patch versions
        update-types: ["version-update:semver-patch"]
```

## Defining a versioning strategy

By default, {% data variables.product.prodname_dependabot %} tries to increase the minimum version requirement for dependencies it identifies as apps, and widens the allowed version requirements to include both the new and old versions for dependencies it identifies as libraries.

You can change this default strategy. For more information, see `versioning-strategy` in [AUTOTITLE](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#versioning-strategy--).

In this example, {% data variables.product.prodname_dependabot %} will increase the minimum version requirement to match the new version for both apps and libraries.

```yaml copy
version: 2
updates:
  - package-ecosystem: npm
    directory: "/"
    schedule:
      interval: daily
    # Increase the minimum version for all npm dependencies
    versioning-strategy: increase
```

In this example, {% data variables.product.prodname_dependabot %} will **only** increase the minimum version requirement if the original constraint does not allow the new version.

```yaml copy
version: 2
updates:
- package-ecosystem: pip
  directory: "/"
  schedule:
    interval: daily
  open-pull-requests-limit: 20
  rebase-strategy: "disabled"
  # Increase the version requirements for npm
  # only when required
  versioning-strategy: increase-if-necessary
```

## Updating vendored dependencies

You can instruct {% data variables.product.prodname_dependabot %} to vendor specific dependencies when updating them.

{% data variables.product.prodname_dependabot %} automatically maintains vendored dependencies for Go modules, and you can configure Bundler to also update vendored dependencies.

For more information, see `vendor` in [AUTOTITLE](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#vendor--).

In this example, `vendor` is set to `true` for Bundler, which means that {% data variables.product.prodname_dependabot %} will also maintain dependencies for Bundler that are stored in the _vendor/cache_ directory in the repository.

```yaml copy
version: 2
updates:
- package-ecosystem: bundler
  directory: "/"
  # Vendoring Bundler
  vendor: true
  schedule:
    interval: weekly
    day: saturday
  open-pull-requests-limit: 10
```
