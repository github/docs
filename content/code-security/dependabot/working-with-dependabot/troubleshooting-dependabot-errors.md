---
title: Troubleshooting Dependabot errors
intro: 'Sometimes {% data variables.product.prodname_dependabot %} is unable to raise a pull request to update your dependencies. You can review the error and unblock {% data variables.product.prodname_dependabot %}.'
shortTitle: Troubleshoot errors
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-github-dependabot-errors
  - /github/managing-security-vulnerabilities/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/troubleshooting-dependabot-errors
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-dependabot-errors
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Version updates
  - Repositories
  - Pull requests
  - Troubleshooting
  - Errors
  - Dependencies
---

{% data reusables.dependabot.beta-security-and-version-updates %}

{% data reusables.dependabot.enterprise-enable-dependabot %}

## About {% data variables.product.prodname_dependabot %} errors

{% data reusables.dependabot.pull-request-introduction %}

If anything prevents {% data variables.product.prodname_dependabot %} from raising a pull request, this is reported as an error.

{% ifversion dependabot-updates-paused %}
{% note %}

**Note:** {% data variables.product.prodname_dependabot %} doesn't create pull requests for inactive repositories. For information about inactivity criteria, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates#about-automatic-deactivation-of-dependabot-updates)" and "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates#about-automatic-deactivation-of-dependabot-updates)," for security and version updates, respectively.

{% endnote %}
{% endif %}

## Investigating errors with {% data variables.product.prodname_dependabot_security_updates %}

When {% data variables.product.prodname_dependabot %} is blocked from creating a pull request to fix a {% data variables.product.prodname_dependabot %} alert, it posts the error message on the alert. The {% data variables.product.prodname_dependabot_alerts %} view shows a list of any alerts that have not been resolved yet. To access the alerts view, click **{% data variables.product.prodname_dependabot_alerts %}** on the **Security** tab for the repository. Where a pull request that will fix the vulnerable dependency has been generated, the alert includes a link to that pull request.

![Screenshot of the {% data variables.product.prodname_dependabot_alerts %} view, showing two alerts. To the right side of one alert, a link to a pull request, titled "#353", is highlighted with an orange outline.](/assets/images/help/dependabot/dependabot-alert-pr-link.png)

There are several reasons why an alert may have no pull request link:

1. {% data variables.product.prodname_dependabot_security_updates %} are not enabled for the repository.
{% ifversion GH-advisory-db-supports-malware %}
1. The alert is for malware and there is no secure version of the package.
{% endif %}
1. The alert is for an indirect or transitive dependency that is not explicitly defined in a lock file.
1. An error blocked {% data variables.product.prodname_dependabot %} from creating a pull request.

If an error blocked {% data variables.product.prodname_dependabot %} from creating a pull request, you can display details of the error by clicking the alert.

## Investigating errors with {% data variables.product.prodname_dependabot_version_updates %}

When {% data variables.product.prodname_dependabot %} is blocked from creating a pull request to update a dependency in an ecosystem, {% ifversion dependabot-job-log %} you can view the job logs list to find out more about the error {% else %} it posts the error icon on the manifest file{% endif %}.

{% ifversion dependabot-job-log %}

{% data reusables.dependabot.dependabot-jobs-log-access %}

To view the full logs files for a particular job, to the right of the log entry you are interested in, click **view logs**.

![Screenshot of the Dependabot job log entries for a manifest file. A button, called "View logs", is highlighted in a dark orange outline.](/assets/images/help/dependabot/dependabot-job-log-error-message.png)

For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/viewing-dependabot-job-logs)."

{% else %}

The manifest files that are managed by {% data variables.product.prodname_dependabot %} are listed on the {% data variables.product.prodname_dependabot %} tab. To access this tab, on the **Insights** tab for the repository click **Dependency graph**, and then click the **{% data variables.product.prodname_dependabot %}** tab.

![Screenshot of the {% data variables.product.prodname_dependabot %} view. An alert icon, and a link, titled "Last checked 10 hours ago", is highlighted with an orange outline.](/assets/images/help/dependabot/dependabot-tab-view-error.png)

To see the logs for any manifest file, click the **Last checked TIME ago** link, and then click **View logs**.

{% endif %}

## Understanding {% data variables.product.prodname_dependabot %} errors

Pull requests for security updates act to upgrade a vulnerable dependency to the minimum version that includes a fix for the vulnerability. In contrast, pull requests for version updates act to upgrade a dependency to the latest version allowed by the package manifest and {% data variables.product.prodname_dependabot %} configuration files. Consequently, some errors are specific to one type of update.

### {% data variables.product.prodname_dependabot %} cannot update DEPENDENCY to a non-vulnerable version

**Security updates only.** {% data variables.product.prodname_dependabot %} cannot create a pull request to update the vulnerable dependency to a secure version without breaking other dependencies in the dependency graph for this repository.

Every application that has dependencies has a dependency graph, that is, a directed acyclic graph of every package version that the application directly or indirectly depends on. Every time a dependency is updated, this graph must resolve otherwise the application won't build. When an ecosystem has a deep and complex dependency graph, for example, npm and RubyGems, it is often impossible to upgrade a single dependency without upgrading the whole ecosystem.

The best way to avoid this problem is to stay up to date with the most recently released versions, for example, by enabling version updates. This increases the likelihood that a vulnerability in one dependency can be resolved by a simple upgrade that doesn't break the dependency graph. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."{% ifversion dependabot-security-updates-unlock-transitive-dependencies %}

### {% data variables.product.prodname_dependabot %} tries to update dependencies without an alert

**Security updates only.** {% data variables.product.prodname_dependabot %} updates explicitly defined transitive dependencies that are vulnerable for all ecosystems. For npm, {% data variables.product.prodname_dependabot %} will raise a pull request that also updates the parent dependency if it's the only way to fix the transitive dependency.

For example, a project with a dependency on `A` version `~2.0.0` which has a transitive dependency on `B` version `~1.0.0` which has resolved to `1.0.1`.

```shell
my project
|
--> A (2.0.0) [~2.0.0]
       |
       --> B (1.0.1) [~1.0.0]
```

If a security vulnerability is released for `B` versions `<2.0.0` and a patch is available at `2.0.0` then  {% data variables.product.prodname_dependabot %} will attempt to update `B` but will find that it's not possible due to the restriction in place by `A` which only allows lower vulnerable versions. To fix the vulnerability, {% data variables.product.prodname_dependabot %} will look for updates to dependency `A` which allow the fixed version of `B` to be used.

{% data variables.product.prodname_dependabot %} automatically generates a pull request that upgrades both the locked parent and child transitive dependencies.{% endif %}

### {% data variables.product.prodname_dependabot %} cannot update to the required version as there is already an open pull request for the latest version

**Security updates only.** {% data variables.product.prodname_dependabot %} will not create a pull request to update the vulnerable dependency to a secure version because there is already an open pull request to update this dependency. You will see this error when a vulnerability is detected in a single dependency and there's already an open pull request to update the dependency to the latest version.

There are two options: you can review the open pull request and merge it as soon as you are confident that the change is safe, or close that pull request and trigger a new security update pull request. For more information, see "[Triggering a {% data variables.product.prodname_dependabot %} pull request manually](#triggering-a-dependabot-pull-request-manually)."

### {% data variables.product.prodname_dependabot %} timed out during its update

{% data variables.product.prodname_dependabot %} took longer than the maximum time allowed to assess the update required and prepare a pull request. This error is usually seen only for large repositories with many manifest files, for example, npm or yarn monorepo projects with hundreds of _package.json_ files. Updates to the Composer ecosystem also take longer to assess and may time out.

This error is difficult to address. If a version update times out, you could specify the most important dependencies to update using the `allow` parameter or, alternatively, use the `ignore` parameter to exclude some dependencies from updates. Updating your configuration might allow {% data variables.product.prodname_dependabot %} to review the version update and generate the pull request in the time available.

If a security update times out, you can reduce the chances of this happening by keeping the dependencies updated, for example, by enabling version updates. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."

### {% data variables.product.prodname_dependabot %} cannot open any more pull requests

There's a limit on the number of open pull requests {% data variables.product.prodname_dependabot %} will generate. When this limit is reached, no new pull requests are opened and this error is reported. The best way to resolve this error is to review and merge some of the open pull requests.

There are separate limits for security and version update pull requests, so that open version update pull requests cannot block the creation of a security update pull request. The limit for security update pull requests is 10. By default, the limit for version updates is 5 but you can change this using the `open-pull-requests-limit` parameter in the configuration file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#open-pull-requests-limit)."

The best way to resolve this error is to merge or close some of the existing pull requests and trigger a new pull request manually. For more information, see "[Triggering a {% data variables.product.prodname_dependabot %} pull request manually](#triggering-a-dependabot-pull-request-manually)."

### {% data variables.product.prodname_dependabot %} can't resolve or access your dependencies

If {% data variables.product.prodname_dependabot %} attempts to check whether dependency references need to be updated in a repository, but can't access one or more of the referenced files, the operation will fail with the error message "{% data variables.product.prodname_dependabot %} can't resolve your LANGUAGE dependency files." The API error type is `git_dependencies_not_reachable`.

Similarly, if {% data variables.product.prodname_dependabot %} can't access a private package registry in which a dependency is located, one of the following errors is generated:

-	"Dependabot can't reach a dependency in a private package registry"<br>
   (API error type: `private_source_not_reachable`)
-	"Dependabot can't authenticate to a private package registry"<br>
   (API error type:`private_source_authentication_failure`)
-	"Dependabot timed out while waiting for a private package registry"<br>
   (API error type:`private_source_timed_out`)
-	"Dependabot couldn't validate the certificate for a private package registry"<br>
   (API error type:`private_source_certificate_failure`)

To allow {% data variables.product.prodname_dependabot %} to update the dependency references successfully, make sure that all of the referenced dependencies are hosted at accessible locations.

**Version updates only.** {% data reusables.dependabot.private-dependencies-note %} Additionally, {% data variables.product.prodname_dependabot %} doesn't support private {% data variables.product.prodname_dotcom %} dependencies for all package managers. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates#supported-repositories-and-ecosystems)."

{% ifversion dependabot-version-updates-groups %}

### {% data variables.product.prodname_dependabot %} fails to group a set of dependencies into a single pull request

{% data reusables.dependabot.dependabot-version-updates-groups-supported %}

You must configure groups per package ecosystem. To debug the problem, we recommend you look at the logs. For information about accessing the logs for a manifest, see "[Investigating errors with {% data variables.product.prodname_dependabot_version_updates %}](#investigating-errors-with-dependabot-version-updates)" above.

You may have unintentionally created empty groups. This happens, for example, when you set a `dependency-type` in the `allow` key for the overall job.

```yaml
allow:
  dependency-type: production
  # this restricts the entire job to production dependencies
  groups:
      development-dependencies:
        dependency-type: "development"
        # this group will always be empty
```

In this example, {% data variables.product.prodname_dependabot %} will:
1. Look at your dependency list and restrict the job to dependencies used in `production` only.
1. Try to create a group called `development-dependencies` which is a subset of this reduced list.
1. Work out that the `development-dependencies` group is empty as all `development` dependencies were removed in step 1.
1. **Individually** update all the dependencies that are not in the group. As the group for dependencies in production is empty, {% data variables.product.prodname_dependabot %} will ignore the group, and create a separate pull request for each dependency.

You need to ensure that configuration settings don't cancel each other, and update them appropriately in your configuration file.

For more information on how to configure groups for {% data variables.product.prodname_dependabot_version_updates %}, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#groups)."

### {% data variables.product.prodname_dependabot %} fails to update one of the dependencies in a grouped pull request

**Version updates only.**{% data variables.product.prodname_dependabot %} will show the failed update in your logs, as well as in the job summary at the end of your logs. You should use the `@dependabot recreate` comment on the pull request to build the group again. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)."

If the dependency still fails to update, you should use the `exclude-patterns` configuration so that the dependency is excluded from the group. {% data variables.product.prodname_dependabot %} will then raise a separate pull request to update the dependency.

If the dependency still fails to update, there may be a problem with the dependency itself, or with {% data variables.product.prodname_dependabot %} for that specific ecosystem.

{% data reusables.dependabot.dependabot-ignore-dependencies %}

### Continuous integration (CI) fails on my grouped pull request

**Version updates only.** If the failure is due to a single dependency, you should use the `exclude-patterns` configuration so that the dependency is excluded from the group. {% data variables.product.prodname_dependabot %} will then raise a separate pull request to update the dependency.

{% data reusables.dependabot.dependabot-ignore-dependencies %}

If you continue to see CI failures, you should remove the group configuration so that {% data variables.product.prodname_dependabot %} reverts to raising individual pull requests for each dependency. Then, you should check and confirm that the update works correctly for each individual pull request.

{% endif %}

## Triggering a {% data variables.product.prodname_dependabot %} pull request manually

If you unblock {% data variables.product.prodname_dependabot %}, you can manually trigger a fresh attempt to create a pull request.

- **Security updates**—display the {% data variables.product.prodname_dependabot %} alert that shows the error you have fixed and click **Create {% data variables.product.prodname_dependabot %} security update**.
- **Version updates**—on the **Insights** tab for the repository click **Dependency graph**, and then click the **Dependabot** tab. Click **Last checked _TIME_ ago** to see the log file that {% data variables.product.prodname_dependabot %} generated during the last check for version updates. Click **Check for updates**.

## Further reading

- "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)"
- "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)"
