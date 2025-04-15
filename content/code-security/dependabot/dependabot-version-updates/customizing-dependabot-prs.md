---
title: Customizing Dependabot pull requests to fit your processes
intro: 'Learn how to tailor your Dependabot pull requests to better suit your own internal workflows.'
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
shortTitle: Customize Dependabot PRs
---

There are various ways to customize your {% data variables.product.prodname_dependabot %} pull requests so that they better suit your own internal processes.

For example:
* To maximize efficiency, {% data variables.product.prodname_dependabot %} can automatically add specific individuals or teams as **reviewers** to its pull requests for a particular package ecosystem.
* To integrate {% data variables.product.prodname_dependabot %}'s pull requests into your CI/CD pipelines, it can apply **custom labels** to pull requests, which you can then use to trigger action workflows.

There are several different customization options which can all be used in combination, and tailored per package ecosystem.

## Automatically adding reviewers and assignees

By default, {% data variables.product.prodname_dependabot %} raises pull requests without any reviewers or assignees.

However, you may want pull requests to be consistently reviewed or dealt with by a specific individual or team that has expertise in that package ecosystem, or automatically assigned to a designated security team. In which case, you can use `reviewers` and `assignees` to set these values per package ecosystem.

The example `dependabot.yml` file below changes the npm configuration so that all pull requests opened with version and security updates for npm have:
* A team ("`my-org/team-name`") and an individual ("`octocat`") automatically added as reviewers to the pull requests.
* An individual ("`user-name`") automatically assigned to the pull requests.

```yaml copy
# `dependabot.yml` file with
# reviews and an assignee for all npm pull requests

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise all npm pull requests with reviewers
    reviewers:
      - "my-org/team-name"
      - "octocat"
    # Raise all npm pull requests with assignees
    assignees:
      - "user-name"
```

{% data reusables.dependabot.option-affects-security-updates %}

See also [`assignees`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#assignees--) and [`reviewers`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#reviewers--).

## Labeling pull requests with custom labels

{% data reusables.dependabot.default-labels %}

You can use `labels` to override the default labels and specify your own custom labels per package ecosystem. This is useful if, for example, you want to:
* Use labels to assign a priority to certain pull requests.
* Use labels to trigger another workflow, such as automatically adding the pull request onto a project board.

The example `dependabot.yml` file below changes the npm configuration so that all pull requests opened with version and security updates for npm have custom labels.

```yaml copy
# `dependabot.yml` file with
# customized npm configuration

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    # Raise all npm pull requests with custom labels
    labels:
      - "npm dependencies"
      - "triage-board"
```

{% data reusables.dependabot.option-affects-security-updates %}

See also [`labels`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#labels--).

## Adding a prefix to commit messages

By default, {% data variables.product.prodname_dependabot %} attempts to detect your commit message preferences and use similar patterns. In addition, {% data variables.product.prodname_dependabot %} populates the titles of pull requests based on the commit messages.

You can specify your own prefix for {% data variables.product.prodname_dependabot %}'s commit messages (and pull request titles) for a specific package ecosystem. This can be useful if, for example, you're running automations that process commit messages or pull requests titles.

To specify your preferences explicitly, use `commit-message` together with the following supported options:

* `prefix`:
   * Specifies a prefix for all commit messages.
   * Prefix is also added to the start of the pull request title.
* `prefix-development`:
   * Specifies a separate prefix for all commit messages that update development dependencies, as defined by the package manager or ecosystem.
   * Supported for `bundler`, `composer`, `mix`, `maven`, `npm`, and `pip`.
* `include: "scope"`:
   * Specifies that any prefix is followed by the dependency types (`deps` or `deps-dev`) updated in the commit.

The example below shows several different options, tailored per package ecosystem:

```yaml copy
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
      # Prefix all commit messages with [docker] " (no colon, but a trailing whitespace)
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

{% data reusables.dependabot.option-affects-security-updates %}

See also [`commit-message`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#commit-message--).

## Associating pull requests with a milestone

Milestones help you track the progress of groups of pull requests (or issues) towards a project goal or release. With {% data variables.product.prodname_dependabot %}, you can use the `milestone` option to associate pull requests for dependency updates with a specific milestone.

You must specify the numeric identifier of the milestone and not its label. To find the numeric identifier, check the final part of the page URL, after `milestone`. For example, for `https://github.com/<org>/<repo>/milestone/3`, "`3`" is the numeric identifier of the milestone.

```yaml copy
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

{% data reusables.dependabot.option-affects-security-updates %}

See also [`milestones`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#milestones--) and [AUTOTITLE](/issues/using-labels-and-milestones-to-track-work/about-milestones).

## Changing the separator in the pull request branch name

{% data variables.product.prodname_dependabot %} generates a branch for each pull request. Each branch name includes `dependabot`, as well as the name of the package manager and the dependency to be updated. By default, these parts of the branch name are separated by a `/` symbol, for example:
* `dependabot/npm_and_yarn/next_js/acorn-6.4.1`

To maintain supportability or consistency with your existing processes, you may need to ensure your branch names align with your team's existing conventions. In this case, you can use `pull-request-branch-name.separator` to specify a different separator, choosing either `_`, `/`, or `"-"`.

In the below example, the npm configuration changes the default separator from `/` to `"-"`, so that it would appear as such:
* Default (`/`): `dependabot/npm_and_yarn/next_js/acorn-6.4.1`
* Customized (`"-"`): `dependabot-npm_and_yarn-next_js-acorn-6.4.1`

Note that the hyphen symbol (`"-"`) must be surrounded by quotation marks so that it's not interpreted as starting an empty YAML list.

```yaml copy
# Specify a different separator for branch names

version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    pull-request-branch-name:
      # Change the default separator (/) to a hyphen (-)
      separator: "-"
```

{% data reusables.dependabot.option-affects-security-updates %}

See also [`pull-request-branch-name.separator`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#pull-request-branch-name.separator--).

## Targeting pull requests against a non-default branch

By default, {% data variables.product.prodname_dependabot %} checks for manifest files on the default branch and raises pull requests for updates against the default branch.

Generally, it makes most sense to keep {% data variables.product.prodname_dependabot %}'s checks and updates on the default branch. However, there may be some cases where you may need to specify a different target branch. If, for example, your team's processes require you to first test and validate updates on a non-production branch, you can use `target-branch` to specify a different branch for {% data variables.product.prodname_dependabot %} to raise pull requests against.

>[!NOTE]
> {% data variables.product.prodname_dependabot %} raises pull requests for security updates against the **default branch only**. If you use `target-branch`, then as a result, all configuration settings for that package manager will then _only_ apply to version updates, and not security updates.

```yaml copy
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

See also [`target-branch`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#target-branch--).
