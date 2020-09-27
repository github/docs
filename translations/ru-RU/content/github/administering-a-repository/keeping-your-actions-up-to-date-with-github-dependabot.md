---
title: Keeping your actions up to date with GitHub Dependabot
intro: 'You can use {{ site.data.variables.product.prodname_dependabot }} to keep the actions you use updated to the latest versions.'
versions:
  free-pro-team: '*'
---

{{ site.data.reusables.dependabot.beta-note }}

### About {{ site.data.variables.product.prodname_dependabot_version_updates }} for actions

Actions are often updated with bug fixes and new features to make automated processes more reliable, faster, and safer. When you enable {{ site.data.variables.product.prodname_dependabot_version_updates }} for {{ site.data.variables.product.prodname_actions }}, {{ site.data.variables.product.prodname_dependabot }} will help ensure that references to actions in a repository's *workflow.yml* file are kept up to date. For each action in the file, {{ site.data.variables.product.prodname_dependabot_short }} checks the action's reference (typically a version number or commit identifier associated with the action) against the latest version. If a more recent version of the action is available, {{ site.data.variables.product.prodname_dependabot_short }} will send you a pull request that updates the reference in the workflow file to the latest version. For more information about {{ site.data.variables.product.prodname_dependabot_version_updates }}, see "[About {{ site.data.variables.product.prodname_dependabot_version_updates }}](/github/administering-a-repository/about-github-dependabot-version-updates)." For more information about configuring workflows for {{ site.data.variables.product.prodname_actions }}, see "[Configuring a workflow](/actions/configuring-and-managing-workflows/configuring-a-workflow)."

### Enabling {{ site.data.variables.product.prodname_dependabot_version_updates }} for actions

{{ site.data.reusables.dependabot.create-dependabot-yml }} If you have already enabled {{ site.data.variables.product.prodname_dependabot_version_updates }} for other ecosystems or package managers, simply open the existing *dependabot.yml* file.
1. Specify `"github-actions"` as a `package-ecosystem` to monitor.
1. Set the `directory` to `"/"` to check for workflow files in `.github/workflows`.
1. Set a `schedule.interval` to specify how often to check for new versions.
{{ site.data.reusables.dependabot.check-in-dependabot-yml }} If you have edited an existing file, save your changes.

You can also enable {{ site.data.variables.product.prodname_dependabot_version_updates }} on forks. For more information, see "[Enabling and disabling version updates](/github/administering-a-repository/enabling-and-disabling-version-updates#enabling-version-updates-on-forks)."

#### Example *dependabot.yml* file for {{ site.data.variables.product.prodname_actions }}

The example *dependabot.yml* file below configures version updates for {{ site.data.variables.product.prodname_actions }}. The `directory` must be set to `"/"` to check for workflow files in `.github/workflows`. The `schedule.interval` is set to `"daily"`. After this file has been checked in or updated, {{ site.data.variables.product.prodname_dependabot }} checks for new versions of your actions. {{ site.data.variables.product.prodname_dependabot_short }} will raise pull requests for version updates for any outdated actions that it finds. After the initial version updates, {{ site.data.variables.product.prodname_dependabot_short }} will continue to check for outdated versions of actions once a day.

```yaml
# Set update schedule for GitHub Actions

version: 2
updates:

  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      # Check for updates to GitHub Actions every weekday
      interval: "daily"
```

### Configuring {{ site.data.variables.product.prodname_dependabot_version_updates }} for actions

When enabling {{ site.data.variables.product.prodname_dependabot_version_updates }} for actions, you must specify values for `package-ecosystem`, `directory`, and `schedule.interval`. There are many more optional properties that you can set to further customize your version updates. For more information, see "[Configuration options for dependency updates](/github/administering-a-repository/configuration-options-for-dependency-updates)."

### Дополнительная литература

- "[About GitHub Actions](/actions/getting-started-with-github-actions/about-github-actions)"
