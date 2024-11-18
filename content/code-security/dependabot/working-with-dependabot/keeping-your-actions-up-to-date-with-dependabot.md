---
title: Keeping your actions up to date with Dependabot
intro: 'You can use {% data variables.product.prodname_dependabot %} to keep the actions you use updated to the latest versions.'
redirect_from:
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-github-dependabot
  - /github/administering-a-repository/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-actions-up-to-date-with-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/keeping-your-actions-up-to-date-with-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Actions
shortTitle: Auto-update actions
---

{% data reusables.dependabot.enterprise-enable-dependabot %}

## About {% data variables.product.prodname_dependabot_version_updates %} for actions

Actions are often updated with bug fixes and new features to make automated processes more reliable, faster, and safer. When you enable {% data variables.product.prodname_dependabot_version_updates %} for {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dependabot %} will help ensure that references to actions in a repository's _workflow.yml_ file{% ifversion dependabot-updates-actions-reusable-workflows %} and reusable workflows used inside workflows{% endif %} are kept up to date.

For each action in the file, {% data variables.product.prodname_dependabot %} checks the action's reference (typically a version number or commit identifier associated with the action) against the latest version. For information about how action creators version their actions, see "[Using release management for your custom actions](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)."

If a more recent version of the action is available, {% data variables.product.prodname_dependabot %} will send you a pull request that updates the reference in the workflow file to the latest version. For more information about {% data variables.product.prodname_dependabot_version_updates %}, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates)." For more information about configuring workflows for {% data variables.product.prodname_actions %}, see "[AUTOTITLE](/actions/learn-github-actions)."

{% ifversion dependabot-updates-actions-reusable-workflows %}
{% data variables.product.prodname_dependabot %} also checks workflow files for uses of reusable workflows, and updates the git reference for these called reusable workflows. For more information about reusable workflows, see "[AUTOTITLE](/actions/using-workflows/reusing-workflows)."

{% endif %}

{% ifversion fpt or ghec %}
{% note %}

**Note:**  {% data reusables.actions.workflow-runs-dependabot-note %}

{% endnote %}
{% endif %}

## Enabling {% data variables.product.prodname_dependabot_version_updates %} for actions

You can configure {% data variables.product.prodname_dependabot_version_updates %} to maintain your actions as well as the libraries and packages you depend on.

1. If you have already enabled {% data variables.product.prodname_dependabot_version_updates %} for other ecosystems or package managers, simply open the existing `dependabot.yml` file. Otherwise, create a `dependabot.yml` configuration file in the `.github` directory of your repository. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates)."
1. Specify `"github-actions"` as a `package-ecosystem` to monitor.
1. Set the `directory` to `"/"` to check for workflow files in `.github/workflows`.
1. Set a `schedule.interval` to specify how often to check for new versions.
{% data reusables.dependabot.check-in-dependabot-yml %} If you have edited an existing file, save your changes.

You can also enable {% data variables.product.prodname_dependabot_version_updates %} on forks. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-version-updates-on-forks)."

### Example `dependabot.yml` file for {% data variables.product.prodname_actions %}

The example `dependabot.yml` file below configures version updates for {% data variables.product.prodname_actions %}. The `directory` must be set to `"/"` to check for workflow files in `.github/workflows`. The `schedule.interval` is set to `"weekly"`. After this file has been checked in or updated, {% data variables.product.prodname_dependabot %} checks for new versions of your actions. {% data variables.product.prodname_dependabot %} will raise pull requests for version updates for any outdated actions that it finds. After the initial version updates, {% data variables.product.prodname_dependabot %} will continue to check for outdated versions of actions once a week.

```yaml
# Set update schedule for GitHub Actions

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every week
      interval: "weekly"
```

## Configuring {% data variables.product.prodname_dependabot_version_updates %} for actions

When enabling {% data variables.product.prodname_dependabot_version_updates %} for actions, you must specify values for `package-ecosystem`, `directory`, and `schedule.interval`. There are many more optional properties that you can set to further customize your version updates. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)."

## Further reading

* "[AUTOTITLE](/actions/learn-github-actions)"
