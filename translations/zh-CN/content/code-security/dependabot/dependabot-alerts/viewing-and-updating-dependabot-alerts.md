---
title: Viewing and updating Dependabot alerts
intro: '如果 {% data variables.product.product_name %} 发现项目中存在有漏洞的依赖项，您可以在仓库的 Dependabot 警报选项卡中查看它们。 然后，您可以更新项目以解决或忽略漏洞。'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: 'Repository administrators and organization owners can view and update dependencies, as well as users and teams with explicit access.'
shortTitle: View Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

仓库的 {% data variables.product.prodname_dependabot_alerts %} 选项卡列出所有打开和关闭的 {% data variables.product.prodname_dependabot_alerts %}{% ifversion fpt or ghec or ghes > 3.2 %} 以及对应的 {% data variables.product.prodname_dependabot_security_updates %}{% endif %}。 可以{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %} 按程序包、生态系统或清单筛选警报。 您还可以{% endif %} 对警报列表进行排序，单击特定警报以获取更多详细信息。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %} 警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”。

{% ifversion fpt or ghec or ghes > 3.2 %}
您可以为使用 {% data variables.product.prodname_dependabot_alerts %} 和依赖关系图的任何仓库启用自动安全更新。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)“。
{% endif %}

{% data reusables.repositories.dependency-review %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## 关于仓库中有漏洞的依赖项的更新

{% data variables.product.product_name %} 在检测到您的代码库正在使用具有已知漏洞的依赖项时会生成 {% data variables.product.prodname_dependabot_alerts %}。 对于启用了 {% data variables.product.prodname_dependabot_security_updates %} 的仓库，当 {% data variables.product.product_name %} 在默认分支中检测到有漏洞的依赖项时，{% data variables.product.prodname_dependabot %} 会创建拉取请求来修复它。 拉取请求会将依赖项升级到避免漏洞所需的最低安全版本。

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}您可以使用 {% data variables.product.prodname_dependabot_alerts %} 选项卡中的下拉菜单对 {% data variables.product.prodname_dependabot_alerts %} 进行排序和过滤，也可以在搜索栏中键入过滤条件作为`键:值`对。 可用的过滤器包括仓库（例如 `repo:my-repository`）、包（例如 `package:django`）、生态系统（例如 `ecosystem:npm`）、清单（例如 `manifest:webwolf/pom.xml`）、状态（例如 `is:open`）以及公告是否有补丁（例如 `has: patch`）。

每个 {% data variables.product.prodname_dependabot %} 警报都有一个唯一的数字标识符，{% data variables.product.prodname_dependabot_alerts %} 选项卡列出了每个检测到的漏洞的警报。 旧版 {% data variables.product.prodname_dependabot_alerts %} 按依赖项对漏洞进行分组，并为每个依赖项生成一个警报。 如果导航到旧版 {% data variables.product.prodname_dependabot %} 警报，则会将您重定向到为该包筛选的 {% data variables.product.prodname_dependabot_alerts %} 选项卡。 {% endif %}
{% endif %}

{% if dependabot-alerts-vulnerable-calls %}
## About the detection of calls to vulnerable functions

{% data reusables.dependabot.vulnerable-calls-beta %}

When {% data variables.product.prodname_dependabot %} tells you that your repository uses a vulnerable dependency, you need to determine what the vulnerable functions are and check whether you are using them. Once you have this information, then you can determine how urgently you need to upgrade to a secure version of the dependency.

For supported languages, {% data variables.product.prodname_dependabot %} automatically detects whether you use a vulnerable function and adds the label "Vulnerable call" to affected alerts. You can use this information in the {% data variables.product.prodname_dependabot_alerts %} view to triage and prioritize remediation work more effectively.

{% note %}

**Note:** During the beta release, this feature is available only for new Python advisories created *after* April 14, 2022, and for a subset of historical Python advisories. GitHub is working to backfill data across additional historical Python advisories, which are added on a rolling basis. Vulnerable calls are highlighted only on the {% data variables.product.prodname_dependabot_alerts %} pages.

{% endnote %}

![Screenshot showing an alert with the "Vulnerable call" label](/assets/images/help/repository/dependabot-alerts-vulnerable-call-label.png)

You can filter the view to show only alerts where {% data variables.product.prodname_dependabot %} detected at least one call to a vulnerable function using the `has:vulnerable-calls` filter in the search field.

For alerts where vulnerable calls are detected, the alert details page shows additional information:

- A code block showing where the function is used or, where there are multiple calls, the first call to the function.
- An annotation listing the function itself, with a link to the line where the function is called.

![Screenshot showing the alert details page for an alert with a "Vulnerable call" label](/assets/images/help/repository/review-calls-to-vulnerable-functions.png)

For more information, see "[Reviewing and fixing vulnerable dependencies](#reviewing-and-fixing-vulnerable-dependencies)" below.

{% endif %}

## Viewing vulnerable dependencies

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. （可选）若要筛选警报，请选择 **Repository（仓库）**、**Package（包）**、**Ecosystem（生态系统）**或 **Manifest（清单）**下拉菜单，然后单击要应用的筛选器。 您还可以在搜索栏中键入过滤条件。 例如 `ecosystem:npm` 或 `has:patch`。 要对警报进行排序，请选择 **Sort（排序）**下拉菜单，然后单击要作为排序依据的选项。 ![{% data variables.product.prodname_dependabot_alerts %} 选项卡中过滤器和排序菜单的屏幕截图](/assets/images/help/graphs/dependabot-alerts-filters.png)
1. 单击要查看的警报。 ![在警报列表中选择的警报](/assets/images/help/graphs/click-alert-in-alerts-list-ungrouped.png)

{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. 单击您想要查看的警报。 ![在警报列表中选择的警报](/assets/images/help/graphs/click-alert-in-alerts-list.png)
{% endif %}

## Reviewing and fixing vulnerable dependencies

It’s important to ensure that all of your dependencies are clean of any security weaknesses. When {% data variables.product.prodname_dependabot %} discovers vulnerabilities in your dependencies, you should assess your project’s level of exposure and determine what remediation steps to take to secure your application.

If a patched version is available, you can generate a {% data variables.product.prodname_dependabot %} pull request to update this dependency directly from a {% data variables.product.prodname_dependabot %} alert. If you have {% data variables.product.prodname_dependabot_security_updates %} enabled, the pull request may be linked will in the Dependabot alert.

In cases where a patched version is not available, or you can’t update to the secure version, {% data variables.product.prodname_dependabot %} shares additional information to help you determine next steps. When you click through to view a {% data variables.product.prodname_dependabot %} alert, you can see the full details of the security advisory for the dependency including the affected functions. You can then check whether your code calls the impacted functions. This information can help you further assess your risk level, and determine workarounds or if you’re able to accept the risk represented by the security vulnerability.

{% if dependabot-alerts-vulnerable-calls %}

For supported languages, {% data variables.product.prodname_dependabot %} detects calls to vulnerable functions for you. When you view an alert labeled as "Vulnerable call", the details include the name of the function and a link to the code that calls it. Often you will be able to take decisions based on this information, without exploring further.

{% endif %}

### Fixing vulnerable dependencies

1. View the details for an alert. For more information, see "[Viewing vulnerable dependencies](#viewing-vulnerable-dependencies)" (above).
{% ifversion fpt or ghec or ghes > 3.2 %}
1. If you have {% data variables.product.prodname_dependabot_security_updates %} enabled, there may be a link to a pull request that will fix the dependency. Alternatively, you can click **Create {% data variables.product.prodname_dependabot %} security update** at the top of the alert details page to create a pull request. ![创建 {% data variables.product.prodname_dependabot %} 安全更新按钮](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. Optionally, if you do not use {% data variables.product.prodname_dependabot_security_updates %}, you can use the information on the page to decide which version of the dependency to upgrade to and create a pull request to update the dependency to a secure version.
{% elsif ghes < 3.3 or ghae %}
1. You can use the information on the page to decide which version of the dependency to upgrade to and create a pull request to the manifest or lock file to a secure version.
{% endif %}
1. 当您准备好更新依赖项并解决漏洞时，合并拉取请求。

{% ifversion fpt or ghec or ghes > 3.2 %}
   {% data variables.product.prodname_dependabot %} 提出的每个拉取请求都包含可用于控制 {% data variables.product.prodname_dependabot %} 的命令的相关信息。 更多信息请参阅“[管理依赖项更新的拉取请求](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)”。
{% endif %}

### Dismissing {% data variables.product.prodname_dependabot_alerts %}

If you schedule extensive work to upgrade a dependency, or decide that an alert does not need to be fixed, you can dismiss the alert. Dismissing alerts that you have already assessed makes it easier to triage new alerts as they appear.

1. View the details for an alert. For more information, see "[Viewing vulnerable dependencies](#viewing-vulnerable-dependencies)" (above).
1. Select the "Dismiss" dropdown, and click a reason for dismissing the alert.{% if reopen-dependabot-alerts %} Unfixed dismissed alerts can be reopened later.{% endif %} ![选择通过 "Dismiss（忽略）"下拉菜单忽略警报的原因](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png)

{% if reopen-dependabot-alerts %}

## 查看和更新已关闭的警报

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. 要仅查看已关闭的警报，请单击 **Closed（已关闭）**。 ![显示"已关闭"选项的屏幕截图](/assets/images/help/repository/dependabot-alerts-closed.png)
1. 单击要查看或更新的警报。 ![显示突出显示的 dependabot 警报的屏幕截图](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png)
2. （可选）如果警报已消除，并且您希望重新打开它，请单击 **Reopen（重新打开）**。 ![显示"重新打开"按钮的屏幕截图](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}
