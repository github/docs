---
title: Enabling and disabling version updates
intro: 'You can configure your repository so that {% data variables.product.prodname_dependabot %} automatically updates the packages you use.'
permissions: 'People with write permissions to a repository can enable or disable {% data variables.product.prodname_dependabot_version_updates %} for the repository.'
redirect_from:
  - /github/administering-a-repository/enabling-and-disabling-version-updates
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "About version updates for dependencies".-->

### About version updates for dependencies

You enable {% data variables.product.prodname_dependabot_version_updates %} by checking a *dependabot.yml* configuration file in to your repository's `.github` directory. {% data variables.product.prodname_dependabot %} then raises pull requests to keep the dependencies you configure up-to-date. For each package manager's dependencies that you want to update, you must specify the location of the package manifest files and how often to check for updates to the dependencies listed in those files. For information about enabling security updates, see "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)."

{% data reusables.dependabot.initial-updates %} For more information, see "[Customizing dependency updates](/github/administering-a-repository/customizing-dependency-updates)."

{% data reusables.dependabot.private-dependencies-note %} Additionally, {% data variables.product.prodname_dependabot %} doesn't support private {% data variables.product.prodname_dotcom %} dependencies for all package managers. For more information, see "[About Dependabot version updates](/github/administering-a-repository/about-dependabot-version-updates#supported-repositories-and-ecosystems)" and "[{% data variables.product.prodname_dotcom %} language support](/github/getting-started-with-github/github-language-support)."

### Enabling {% data variables.product.prodname_dependabot_version_updates %}

{% data reusables.dependabot.create-dependabot-yml %} For information, see "[Configuration options for dependency updates](/github/administering-a-repository/configuration-options-for-dependency-updates)."
1. Add a `version`.
1. Optionally, if you have dependencies in a private registry, add a `registries` section containing authentication details.
1. Add an `updates` section, with an entry for each package manager you want {% data variables.product.prodname_dependabot %} to monitor.
1. For each package manager, use:
    - `package-ecosystem` to specify the package manager.
    - `directory` to specify the location of the manifest or other definition files.
    - `schedule.interval` to specify how often to check for new versions.
{% data reusables.dependabot.check-in-dependabot-yml %}

#### Example *dependabot.yml* file

The example *dependabot.yml* file below configures version updates for two package managers: npm and Docker. When this file is checked in, {% data variables.product.prodname_dependabot %} checks the manifest files on the default branch for outdated dependencies. If it finds outdated dependencies, it will raise pull requests against the default branch to update the dependencies.

```yaml
# Basic dependabot.yml file with
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

In the example above, if the Docker dependencies were very outdated, you might want to start with a `daily` schedule until the dependencies are up-to-date, and then drop back to a weekly schedule.

#### Enabling version updates on forks

If you want to enable version updates on forks, there's an extra step. Version updates are not automatically enabled on forks when a *dependabot.yml* configuration file is present. This ensures that fork owners don't unintentionally enable version updates when they pull changes including a *dependabot.yml* configuration file from the original repository.

On a fork, you also need to explicitly enable {% data variables.product.prodname_dependabot %}.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
{% data reusables.dependabot.click-dependabot-tab %}
5. Under "Enable Dependabot", click **Enable Dependabot**.

### Checking the status of version updates

After you enable version updates, you'll see a new **Dependabot** tab in the dependency graph for the repository. This tab shows which package managers {% data variables.product.prodname_dependabot %} is configured to monitor and when {% data variables.product.prodname_dependabot %} last checked for new versions.

![Repository Insights tab, Dependency graph, Dependabot tab](/assets/images/help/dependabot/dependabot-tab-view-beta.png)

For information, see "[Listing dependencies configured for version updates](/github/administering-a-repository/listing-dependencies-configured-for-version-updates)."

### Disabling {% data variables.product.prodname_dependabot_version_updates %}

You can disable version updates entirely by deleting the *dependabot.yml* file from your repository. More usually, you want to disable updates temporarily for one or more dependencies, or package managers.

- Package managers: disable by setting `open-pull-requests-limit: 0` or by commenting out the relevant `package-ecosystem` in the configuration file.
- Specific dependencies: disable by adding `ignore` attributes for packages or applications that you want to exclude from updates.

When you disable dependencies, you can use wild cards to match a set of related libraries. You can also specify which versions to exclude. This is particularly useful if you need to block updates to a library, pending work to support a breaking change to its API, but want to get any security fixes to the version you use.

#### Example disabling version updates for some dependencies

The example *dependabot.yml* file below includes examples of the different ways to disable updates to some dependencies, while allowing other updates to continue.

```yaml
# dependabot.yml file with updates
# disabled for Docker and limited for npm

version: 2
updates:
  # Configuration for Dockerfile
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
      # Disable all pull requests for Docker dependencies
    open-pull-requests-limit: 0

  # Configuration for npm
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Overwrite any ignores created using `@dependabot ignore` commands
    ignore:
      # Ignore updates to packages that start with 'aws'
      # Wildcards match zero or more arbitrary characters
      - dependency-name: "aws*"
      # Ignore some updates to the 'express' package
      - dependency-name: "express"
        # Ignore only new versions for 4.x and 5.x
        versions: ["4.x", "5.x"]
```

{% data reusables.dependabot.warning-ignore-option %}

For more information about checking for existing ignore preferences, see "[Configuration options for dependency updates](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)."
