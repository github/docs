---
title: Customizing pull requests for Dependabot security updates
intro: Learn how to customize Dependabot pull requests for security updates to align with your project's security priorities and workflows.
allowTitleToDifferFromFilename: true
permissions: '{% data reusables.permissions.dependabot-yml-configure %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Dependabot
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Customize Dependabot PRs
redirect_from:
  - /code-security/dependabot/dependabot-security-updates/customizing-dependabot-security-prs
contentType: how-tos
---

## Preparing to customize pull requests

If you haven't yet configured a `dependabot.yml` file for your repository and you want to customize pull requests for security updates, you must first:

1. Check in a `dependabot.yml` file into the `.github` directory of your repository. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates).
1. Set all the required keys. For more information, see [Required keys](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#required-keys).
1. If you want the customization for a package ecosystem to **only apply to security updates** (and exclude version updates), set the `open-pull-requests-limit` key to `0`.

You can then consider what your needs and priorities are for security updates, and apply a combination of the customization options outlined below.

## Prioritizing meaningful updates

To create a more **targeted review process** that prioritizes meaningful updates, use `groups` to combine security updates for multiple dependencies into a single pull request.

For detailed guidance, see [Prioritizing meaningful updates](/code-security/dependabot/dependabot-version-updates/optimizing-pr-creation-version-updates#prioritizing-meaningful-updates).

{% ifversion dependabot-reviewers-deprecation %}

## Automatically adding assignees

Use `assignees` to automatically add individuals or teams as assignees to pull requests.

For detailed guidance, see [Automatically adding assignees](/code-security/dependabot/dependabot-version-updates/customizing-dependabot-prs#automatically-adding-assignees).

## Automatically adding reviewers

To ensure your project's security updates get addressed promptly by the appropriate team, you can automatically add reviewers to Dependabot pull requests using a CODEOWNERS file. See [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).

{% else %}

## Automatically adding reviewers and assignees

> [!IMPORTANT]
> The `reviewers` property is closing down and will be removed in a future release of {% data variables.product.prodname_ghe_server %}.
>
> You can also automatically add reviewers and assignees using a CODEOWNERS file. See [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners).

To ensure your project's security updates get **addressed promptly** by the appropriate team, use `reviewers` and `assignees` to automatically add individuals or teams as **reviewers or assignees** to pull requests.

For detailed guidance, see [Automatically adding reviewers and assignees](/code-security/dependabot/dependabot-version-updates/customizing-dependabot-prs#automatically-adding-reviewers-and-assignees).

{% endif %}

## Labeling pull requests with custom labels

To **prioritize** specific pull requests, or integrate them into CI/CD pipelines, use `labels` to apply your own **custom labels** to each pull request.

For detailed guidance, see [Labeling pull requests with custom labels](/code-security/dependabot/dependabot-version-updates/customizing-dependabot-prs#labeling-pull-requests-with-custom-labels).

## Adding a prefix to commit messages

To **integrate** with automations that process commit messages or pull requests titles, use `commit-message` to specify the prefix that you want for commit messages and pull request titles.

For detailed guidance, see [Adding a prefix to commit messages](/code-security/dependabot/dependabot-version-updates/customizing-dependabot-prs#adding-a-prefix-to-commit-messages).

## Associating pull requests with a milestone

To **track progress** towards a project goal or release, use `milestone` to associate {% data variables.product.prodname_dependabot %}'s pull requests with a milestone.

For detailed guidance, see [Associating pull requests with a milestone](/code-security/dependabot/dependabot-version-updates/customizing-dependabot-prs#associating-pull-requests-with-a-milestone).

## Changing the separator in the pull request branch name

To ensure your **branch names align** with your team's existing conventions, use `pull-request-branch-name.separator` to specify the separator you want {% data variables.product.prodname_dependabot %} to use for branch names.

For detailed guidance, see [Changing the separator in the pull request branch name](/code-security/dependabot/dependabot-version-updates/customizing-dependabot-prs#changing-the-separator-in-the-pull-request-branch-name).

## Example 1: configuration for security updates only

In this example, the `dependabot.yml` file:
* Uses a private registry for updates to npm dependencies.
* Disables version updates for dependencies, so that any customizations apply to security updates only.
* Is customized so that {% data variables.product.prodname_dependabot %} applies custom labels to the pull requests and automatically adds {% ifversion ghes < 3.19 %}reviewers and {% endif %}assignees.
* Groups security updates for golang dependencies into a single pull request.

```yaml copy
# Example configuration file that:
#  - Uses a private registry for npm updates
#  - Ignores lodash dependency
#  - Disables version-updates
#  - Applies custom labels
#  - Adds assignees
#  - Group security updates for golang dependencies into a single pull request

version: 2
registries:
  # Define a private npm registry with the name `example`
  example:
    type: npm-registry
    url: https://example.com
    token: {% raw %}${{secrets.NPM_TOKEN}}{% endraw %}
updates:
  - package-ecosystem: "npm"
    directory: "/src/npm-project"
    schedule:
      interval: "daily"
    # For Lodash, ignore all updates
    ignore:
      - dependency-name: "lodash"
    # Disable version updates for npm dependencies
    open-pull-requests-limit: 0
    registries:
      # Ask Dependabot to use the private registry for npm
      - example
    # Raise all npm pull requests for security updates with custom labels
    labels:
      - "npm dependencies"
      - "triage-board"
    # Raise all npm pull requests for security updates with assignees
    assignees:
      - "user-name"
  - package-ecosystem: "gomod"
    groups:
      # Group security updates for golang dependencies
      # into a single pull request
      golang:
        applies-to: security-updates
        patterns:
          - "golang.org*"
```

## Example 2: configuration for version updates and security updates

In this example, the `dependabot.yml` file:
* Is customized so that {% data variables.product.prodname_dependabot %} adds custom labels to both version updates and security updates.
* Uses the `groups` customization option to create two groups ("`angular`" and "`production-dependencies`") in order to group multiple updates into single pull requests.
* Specifies that the `groups` customization for `angular` applies to security updates only.
* Specifies that the `groups` customization for `production-dependencies` applies to version updates only.

```yaml copy
version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
# Raise all npm pull requests for security and version updates with custom labels
    labels:
      - "npm dependencies"
      - "triage-board"
    groups:
      angular:
        # Group security updates for Angular dependencies into a single pull request
        applies-to: security-updates
        patterns:
          - "@angular*"
      production-dependencies:
        # Group version updates for dependencies of type "production" into a single pull request
        applies-to: version-updates
        dependency-type: "production"
```

## Further reading

* [AUTOTITLE](/code-security/dependabot/working-with-dependabot/dependabot-options-reference)
* [AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot)
