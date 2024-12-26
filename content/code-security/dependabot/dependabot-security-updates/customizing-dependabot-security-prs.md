---
title: Customizing pull requests for Dependabot security updates
intro: 'Learn how to customize Dependabot pull requests for security updates to align with your project''s security priorities and workflows.'
allowTitleToDifferFromFilename: true
permissions: '{% data reusables.permissions.dependabot-yml-configure %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Customize Dependabot PRs
---

## About customizing pull requests for security updates

You can customize how {% data variables.product.prodname_dependabot %} raises pull requests for security updates, so that they best fit your project's security priorities and processes. For example:
* **Optimize {% data variables.product.prodname_dependabot %} pull requests to prioritize meaningful updates** by grouping multiple updates into a single pull request.
* Applying custom labels to **integrate {% data variables.product.prodname_dependabot %}'s pull requests** into your existing workflows.

Similar to version updates, customization options for security updates are defined in the `dependabot.yml` file. If you have already customized the `dependabot.yml` for version updates, then many of the configuration options that you have defined could automatically apply to security updates, too. However, there's a couple of important points to note:
* {% data variables.product.prodname_dependabot_security_updates %} are **always triggered by a security advisory**, rather than running according to the `schedule` you have set in the `dependabot.yml` for version updates.
* {% data variables.product.prodname_dependabot %} raises pull requests for security updates against the **default branch only**. If your configuration sets a value for `target-branch`, then the customization for that package ecosystem will only apply to version updates by default.

If you haven't yet configured a `dependabot.yml` file for your repository and you want to customize pull requests for security updates, you must first:
* Check in a `dependabot.yml` file into the `.github` directory of your repository. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates).
* Set all the required keys. For more information, see [Required keys](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#required-keys).
* If you want the customization for a package ecosystem to **only apply to security updates** (and exclude version updates), set the `open-pull-requests-limit` key to `0`.

You can then consider what your needs and priorities are for security updates, and apply a combination of the customization options outlined below.

{% ifversion dependabot-grouped-security-updates-config %}

## Prioritizing meaningful updates

To create a more **targeted review process** that prioritizes meaningful updates, use `groups` to combine security updates for multiple dependencies into a single pull request.

For detailed guidance, see [Prioritizing meaningful updates](/code-security/dependabot/dependabot-version-updates/optimizing-pr-creation-version-updates#prioritizing-meaningful-updates).

{% endif %}

## Automatically adding reviewers and assignees

To ensure your project's security updates get **addressed promptly** by the appropriate team, use `reviewers` and `assignees` to automatically add individuals or teams as **reviewers or assignees** to pull requests.

For detailed guidance, see [Automatically adding reviewers and assignees](/code-security/dependabot/dependabot-version-updates/customizing-dependabot-prs#automatically-adding-reviewers-and-assignees).

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
* Is customized so that {% data variables.product.prodname_dependabot %} applies custom labels to the pull requests and automatically adds reviewers and assignees.{% ifversion dependabot-grouped-security-updates-config %}
* Groups security updates for golang dependencies into a single pull request.{% endif %}

```yaml copy
# Example configuration file that:
#  - Uses a private registry for npm updates
#  - Ignores lodash dependency
#  - Disables version-updates
#  - Applies custom labels
#  - Adds reviewers and assignees
{% ifversion dependabot-grouped-security-updates-config %}#  - Group security updates for golang dependencies into a single pull request{%- endif %}

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
    # Raise all npm pull requests for security updates with reviewers
    reviewers:
      - "my-org/team-name"
      - "octocat"
    # Raise all npm pull requests for security updates with assignees
    assignees:
      - "user-name"
  {% ifversion dependabot-grouped-security-updates-config %}- package-ecosystem: "gomod"
    groups:
      # Group security updates for golang dependencies
      # into a single pull request
      golang:
        applies-to: security-updates
        patterns:
          - "golang.org*"{% endif %}
```

## Example 2: configuration for version updates and security updates

In this example, the `dependabot.yml` file:
* Is customized so that {% data variables.product.prodname_dependabot %} adds reviewers and custom labels to both version updates and security updates.{% ifversion dependabot-grouped-security-updates-config %}
* Uses the `groups` customization option to create two groups ("`angular`" and "`production-dependencies`") in order to group multiple updates into single pull requests.
* Specifies that the `groups` customization for `angular` applies to security updates only.
* Specifies that the `groups` customization for `production-dependencies` applies to version updates only.{% endif %}

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
    # Raise all npm pull requests for security and version updates with reviewers
    reviewers:
      - "my-org/team-name"
      - "octocat"{% ifversion dependabot-grouped-security-updates-config %}
    groups:
      angular:
        # Group security updates for Angular dependencies into a single pull request
        applies-to: security-updates
        patterns:
          - "@angular*"
      production-dependencies:
        # Group version updates for dependencies of type "production" into a single pull request
        applies-to: version-updates
        dependency-type: "production"{%- endif %}
```

## Further reading

* [AUTOTITLE](/code-security/dependabot/working-with-dependabot/dependabot-options-reference)
* [AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot)
