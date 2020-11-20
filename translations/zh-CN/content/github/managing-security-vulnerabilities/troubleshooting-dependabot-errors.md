---
title: Troubleshooting Dependabot errors
intro: 'Sometimes {% data variables.product.prodname_dependabot %} is unable to raise a pull request to update your dependencies. You can review the error and unblock {% data variables.product.prodname_dependabot %}.'
shortTitle: 排查错误
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-github-dependabot-errors
versions:
  free-pro-team: '*'
---

{% data reusables.dependabot.beta-note %}

### About {% data variables.product.prodname_dependabot %} errors

{% data reusables.dependabot.pull-request-introduction %}

If anything prevents {% data variables.product.prodname_dependabot %} from raising a pull request, this is reported as an error.

### Investigating errors with {% data variables.product.prodname_dependabot_security_updates %}

When {% data variables.product.prodname_dependabot %} is blocked from creating a pull request to fix a {% data variables.product.prodname_dependabot %} alert, it posts the error message on the alert. The {% data variables.product.prodname_dependabot_alerts %} view shows a list of any alerts that have not been resolved yet. To access the alerts view, click **{% data variables.product.prodname_dependabot_alerts %}** on the **Security** tab for the repository. Where a pull request that will fix the vulnerable dependency has been generated, the alert includes a link to that pull request.

![{% data variables.product.prodname_dependabot_alerts %} view showing a pull request link](/assets/images/help/dependabot/dependabot-alert-pr-link.png)

There are three reasons why an alert may have no pull request link:

1. {% data variables.product.prodname_dependabot_security_updates %} are not enabled for the repository.
1. The alert is for an indirect or transitive dependency that is not explicitly defined in a lock file.
1. An error blocked {% data variables.product.prodname_dependabot %} from creating a pull request.

If an error blocked {% data variables.product.prodname_dependabot %} from creating a pull request, you can display details of the error by clicking the alert.

![{% data variables.product.prodname_dependabot %} alert showing the error that blocked the creation of a pull request](/assets/images/help/dependabot/dependabot-security-update-error.png)

### Investigating errors with {% data variables.product.prodname_dependabot_version_updates %}

When {% data variables.product.prodname_dependabot %} is blocked from creating a pull request to update a dependency in an ecosystem, it posts the error icon on the manifest file. The manifest files that are managed by {% data variables.product.prodname_dependabot %} are listed on the {% data variables.product.prodname_dependabot %} tab. To access this tab, on the **Insights** tab for the repository click **Dependency graph**, and then click the **{% data variables.product.prodname_dependabot %}** tab.

![{% data variables.product.prodname_dependabot %} view showing an error](/assets/images/help/dependabot/dependabot-tab-view-error-beta.png)

To see the log file for any manifest file, click the **Last checked TIME ago** link. When you display the log file for a manifest that's shown with an error symbol (for example, Maven in the screenshot above), any errors are also displayed.

![{% data variables.product.prodname_dependabot %} version update error and log ](/assets/images/help/dependabot/dependabot-version-update-error-beta.png)

### Understanding {% data variables.product.prodname_dependabot %} errors

Pull requests for security updates act to upgrade a vulnerable dependency to the minimum version that includes a fix for the vulnerability. In contrast, pull requests for version updates act to upgrade a dependency to the latest version allowed by the package manifest and {% data variables.product.prodname_dependabot %} configuration files. Consequently, some errors are specific to one type of update.

#### {% data variables.product.prodname_dependabot %} cannot update DEPENDENCY to a non-vulnerable version

**Security updates only.** {% data variables.product.prodname_dependabot %} cannot create a pull request to update the vulnerable dependency to a secure version without breaking other dependencies in the dependency graph for this repository.

Every application that has dependencies has a dependency graph, that is, a directed acyclic graph of every package version that the application directly or indirectly depends on. Every time a dependency is updated, this graph must resolve otherwise the application won't build. When an ecosystem has a deep and complex dependency graph, for example, npm and RubyGems, it is often impossible to upgrade a single dependency without upgrading the whole ecosystem.

The best way to avoid this problem is to stay up to date with the most recently released versions, for example, by enabling version updates. This increases the likelihood that a vulnerability in one dependency can be resolved by a simple upgrade that doesn't break the dependency graph. 更多信息请参阅“[启用和禁用版本更新](/github/administering-a-repository/enabling-and-disabling-version-updates)”。

#### {% data variables.product.prodname_dependabot %} cannot update to the required version as there is already an open pull request for the latest version

**Security updates only.** {% data variables.product.prodname_dependabot %} will not create a pull request to update the vulnerable dependency to a secure version because there is already an open pull request to update this dependency. You will see this error when a vulnerability is detected in a single dependency and there's already an open pull request to update the dependency to the latest version.

There are two options: you can review the open pull request and merge it as soon as you are confident that the change is safe, or close that pull request and trigger a new security update pull request. For more information, see "[Triggering a {% data variables.product.prodname_dependabot %} pull request manually](#triggering-a-dependabot-pull-request-manually)."

#### {% data variables.product.prodname_dependabot %} timed out during its update

{% data variables.product.prodname_dependabot %} took longer than the maximum time allowed to assess the update required and prepare a pull request. This error is usually seen only for large repositories with many manifest files, for example, npm or yarn monorepo projects with hundreds of *package.json* files. Updates to the Composer ecosystem also take longer to assess and may time out.

This error is difficult to address. If a version update times out, you could specify the most important dependencies to update using the `allow` parameter or, alternatively, use the `ignore` parameter to exclude some dependencies from updates. Updating your configuration might allow {% data variables.product.prodname_dependabot %} to review the version update and generate the pull request in the time available.

If a security update times out, you can reduce the chances of this happening by keeping the dependencies updated, for example, by enabling version updates. 更多信息请参阅“[启用和禁用版本更新](/github/administering-a-repository/enabling-and-disabling-version-updates)”。

#### {% data variables.product.prodname_dependabot %} cannot open any more pull requests

There's a limit on the number of open pull requests {% data variables.product.prodname_dependabot %} will generate. When this limit is reached, no new pull requests are opened and this error is reported. The best way to resolve this error is to review and merge some of the open pull requests.

There are separate limits for security and version update pull requests, so that open version update pull requests cannot block the creation of a security update pull request. The limit for security update pull requests is 10. By default, the limit for version updates is 5 but you can change this using the `open-pull-requests-limit` parameter in the configuration file. 更多信息请参阅“[依赖项更新的配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit)。”

The best way to resolve this error is to merge or close some of the existing pull requests and trigger a new pull request manually. For more information, see "[Triggering a {% data variables.product.prodname_dependabot %} pull request manually](#triggering-a-dependabot-pull-request-manually)."

### Triggering a {% data variables.product.prodname_dependabot %} pull request manually

If you unblock {% data variables.product.prodname_dependabot %}, you can manually trigger a fresh attempt to create a pull request.

- **Security updates**—display the {% data variables.product.prodname_dependabot %} alert that shows the error you have fixed and click **Create {% data variables.product.prodname_dependabot %} security update**.
- **Version updates**—display the log file for the manifest that shows the error that you have fixed and click **Check for updates**.
