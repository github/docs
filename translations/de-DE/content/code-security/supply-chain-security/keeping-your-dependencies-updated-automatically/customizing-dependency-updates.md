---
title: Customizing dependency updates
intro: 'You can customize how {% data variables.product.prodname_dependabot %} maintains your dependencies.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
redirect_from:
  - /github/administering-a-repository/customizing-dependency-updates
  - /code-security/supply-chain-security/customizing-dependency-updates
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
  - Vulnerabilities
---

### About customizing dependency updates

After you've enabled version updates, you can customize how {% data variables.product.prodname_dependabot %} maintains your dependencies by adding further options to the *dependabot.yml* file. For example, you could:

- Specify which day of the week to open pull requests for version updates: `schedule.day`
- Set reviewers, assignees, and labels for each package manager: `reviewers`, `assignees`, and `labels`
- Define a versioning strategy for changes to each manifest file: `versioning-strategy`
- Change the maximum number of open pull requests for version updates from the default of 5: `open-pull-requests-limit`
- Open pull requests for version updates to target a specific branch, instead of the default branch: `target-branch`

For more information about the configuration options, see "[Configuration options for dependency updates](/github/administering-a-repository/configuration-options-for-dependency-updates)."

When you update the *dependabot.yml* file in your repository, {% data variables.product.prodname_dependabot %} runs an immediate check with the new configuration. Within minutes you will see an updated list of dependencies on the **{% data variables.product.prodname_dependabot %}** tab, this may take longer if the repository has many dependencies. You may also see new pull requests for version updates. For more information, see "[Listing dependencies configured for version updates](/github/administering-a-repository/listing-dependencies-configured-for-version-updates)."

### Impact of configuration changes on security updates

If you customize the *dependabot.yml* file, you may notice some changes to the pull requests raised for security updates. These pull requests are always triggered by a security advisory for a dependency, rather than by the {% data variables.product.prodname_dependabot %} schedule. However, they inherit relevant configuration settings from the *dependabot.yml* file unless you specify a different target branch for version updates.

For an example, see "[Setting custom labels](#setting-custom-labels)" below.

### Modifying scheduling

When you set a `daily` update schedule, by default, {% data variables.product.prodname_dependabot %} checks for new versions at 05:00 UTC. You can use `schedule.time` to specify an alternative time of day to check for updates (format: `hh:mm`).

The example *dependabot.yml* file below expands the npm configuration to specify when {% data variables.product.prodname_dependabot %} should check for version updates to dependencies.

```yaml
# dependabot.yml file with
# customized schedule for version updates

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    # Check the npm registry for updates at 2am UTC
    schedule:
      interval: "daily"
      time: "02:00"
```

### Setting reviewers and assignees

By default, {% data variables.product.prodname_dependabot %} raises pull requests without any reviewers or assignees.

You can use `reviewers` and `assignees`  to specify reviewers and assignees for all pull requests raised for a package manager. When you specify a team, you must use the full team name, as if you were @mentioning the team (including the organization).

The example *dependabot.yml* file below changes the npm configuration so that all pull requests opened with version and security updates for npm will have two reviewers and one assignee.

```yaml
# dependabot.yml file with
# reviews and an assignee for all npm pull requests

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Raise all npm pull requests with reviewers
    reviewers:
      - "my-org/team-name"
      - "octocat"
    # Raise all npm pull requests with an assignee
    assignees:
      - "user-name"
```

### Setting custom labels

{% data reusables.dependabot.default-labels %}

You can use `labels` to override the default labels and specify alternative labels for all pull requests raised for a package manager. You can't create new labels in the *dependabot.yml* file, so the alternative labels must already exist in the repository.

The example *dependabot.yml* file below changes the npm configuration so that all pull requests opened with version and security updates for npm will have custom labels. It also changes the Docker configuration to check for version updates against a custom branch and to raise pull requests with custom labels against that custom branch. The changes to Docker will not affect security update pull requests because security updates are always made against the default branch.

{% note %}

**Note:** The new `target-branch` must contain a Dockerfile to update, otherwise this change will have the effect of disabling version updates for Docker.

{% endnote %}

```yaml
# dependabot.yml file with
# customized npm configuration

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "daily"
    # Raise all npm pull requests with custom labels
    labels:
      - "npm dependencies"
      - "triage-board"

    # Keep Docker dependencies up to date
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "daily"
    # Raise pull requests for Docker version updates
    # against the "develop" branch. The Docker configuration
    # no longer affects security update pull requests.
    target-branch: "develop"
    # Use custom labels on pull requests for Docker version updates
    labels:
      - "Docker dependencies"
      - "triage-board"
```

### More examples

For more examples, see "[Configuration options for dependency updates](/github/administering-a-repository/configuration-options-for-dependency-updates)."
