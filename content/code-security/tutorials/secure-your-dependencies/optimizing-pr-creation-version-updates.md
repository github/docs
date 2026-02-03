---
title: Optimizing the creation of pull requests for Dependabot version updates
intro: Learn how to streamline and efficiently manage your {% data variables.product.prodname_dependabot %} pull requests.
allowTitleToDifferFromFilename: true
permissions: '{% data reusables.permissions.dependabot-yml-configure %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: tutorials
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Optimize PR creation
redirect_from:
  - /code-security/dependabot/dependabot-version-updates/optimizing-pr-creation-version-updates
---

By default, {% data variables.product.prodname_dependabot %} opens a new pull request to update each dependency. When you enable security updates, new pull requests are opened when a vulnerable dependency is found. When you configure version updates for one or more ecosystems, new pull requests are opened when new versions of dependencies are available, with the frequency defined in the `dependabot.yml` file.

If your project has many dependencies, you might find that you have a very large number of {% data variables.product.prodname_dependabot %} pull requests to review and merge, which can quickly become difficult to manage.

There are a couple of customization options you can implement to optimize {% data variables.product.prodname_dependabot %} update pull requests to align with your processes, such as:
* **Controlling the frequency** with which {% data variables.product.prodname_dependabot %} checks for newer versions of your dependencies with `schedule`.
* **Prioritize meaningful updates** with `groups`.

## Controlling the frequency and timings of dependency updates

{% data variables.product.prodname_dependabot %} runs its checks for version updates at a frequency set by you in the configuration file, where the required field, `schedule.interval`, must be set to `daily`, `weekly`, `monthly`, `quarterly`, `semiannually`, `yearly`, or `cron` (see [`cronjob`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#cronjob)).

By default, {% data variables.product.prodname_dependabot %} balances its workload by assigning a random time to check and raise pull requests for dependency updates.

However, to reduce distraction, or to better organize time and resources for reviewing and addressing version updates, you might find it useful to modify the frequency and timings. For example, you may prefer {% data variables.product.prodname_dependabot %} to run weekly rather than daily checks for updates, and at a time that ensures pull requests are raised before for your team's triage session.

### Modifying the frequency and timings for dependency updates

You can use `schedule` with a combination of options to modify the frequency and timings of when {% data variables.product.prodname_dependabot %} checks for version updates.

The example `dependabot.yml` file below changes the npm configuration to specify that {% data variables.product.prodname_dependabot %} should check for version updates to npm dependencies every Tuesday at 02:00 Japanese Standard Time (UTC +09:00).

```yaml copy
# `dependabot.yml` file with
# customized schedule for version updates

version: 2
updates:
  # Keep npm dependencies up to date
  - package-ecosystem: "npm"
    directory: "/"
    # Check the npm registry every week on Tuesday at 02:00 Japan Standard Time (UTC +09:00)
    schedule:
      interval: "weekly"
      day: "tuesday"
      time: "02:00"
      timezone: "Asia/Tokyo"
```

See also [schedule](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#schedule-).

{% ifversion dependabot-option-cooldown %}

### Setting up a cooldown period for dependency updates

You can use  `cooldown` with a combination of options to control when {% data variables.product.prodname_dependabot %} creates pull requests for **version updates**.

The example `dependabot.yml` file below shows a cooldown period being applied to the dependencies `requests`, `numpy`, and those prefixed with `pandas` or `django`, but not to the dependency called `pandas` (exact match), which is excluded via the **exclude** list.

```yaml copy
version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "daily"
    cooldown:
      default-days: 5
      semver-major-days: 30
      semver-minor-days: 7
      semver-patch-days: 3
      include:
        - "requests"
        - "numpy"
        - "pandas*"
        - "django"
      exclude:
        - "pandas"
```

* The number of cooldown days must be between 1 and 90.
* The maximum allowed items limit in `include` and `exclude` lists, which can be used with `cooldown`, is 150 each.

> [!NOTE]
> To consider **all dependencies** for a cooldown period, you can:
> * Omit the `include` option which applies cooldown to all dependencies.
> * Use `"*"` in `include` to apply the cooldown settings to everything.
> We recommend the use of `exclude` to **only** exclude **specific dependencies** from cooldown settings.

SemVer is supported for most package managers. Updates to new versions for dependencies in cooldown are deferred as follows:

* Major updates: Delayed by 30 days (`semver-major-days: 30`).
* Minor updates: Delayed by 7 days (`semver-minor-days: 7`).
* Patch updates: Delayed by 3 days (`semver-patch-days: 3`).

See also [`cooldown`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#cooldown-).

{% endif %}

## Prioritizing meaningful updates

You can use `groups` to consolidate updates for multiple dependencies into a single pull request. This helps you focus your review time on higher risk updates, and minimize the time spent reviewing minor version updates. For example, you can combine updates for minor or patch updates for development dependencies into a single pull request, and have a dedicated group for security or version updates that impact a key area of your codebase.

You must configure groups per individual package ecosystem, then you can create multiple groups per package ecosystem using a combination of criteria:

* {% data variables.product.prodname_dependabot %} update type: `applies-to`
* Type of dependency: `dependency-type`.
* Dependency name: `patterns` and `exclude-patterns`
* Semantic versioning levels: `update-types`

To see all supported values for each criterion, see [`groups`](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#groups--).

The below examples present several different methods to create groups of dependencies using the criteria.

{% data reusables.dependabot.dependabot-version-updates-groups-yaml-example %}
