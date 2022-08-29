{% ifversion ghes < 3.5 %}

In some cases, GitHub Advanced Security customers who upgrade to GitHub Enterprise Server 3.5 or later may notice that alerts from secret scanning are missing in the web UI and REST API. To ensure the alerts remain visible, do not skip 3.4 when you upgrade from an earlier release to 3.5 or later. A fix will be available in upcoming patch releases.

To plan an upgrade through 3.4, see the [Upgrade assistant](https://support.github.com/enterprise/server-upgrade). [Updated: 2022-08-26]

{% elsif ghes = 3.5 or ghes = 3.6 %}

In some cases, GitHub Advanced Security customers who upgrade to GitHub Enterprise Server {{ allVersions[currentVersion].currentRelease }} may notice that alerts from secret scanning are missing in the web UI and REST API. To ensure the alerts remain visible, do not skip 3.4 as you upgrade to the latest release. To plan an upgrade through 3.4, see the [Upgrade assistant](https://support.github.com/enterprise/server-upgrade).

- To display the missing alerts for all repositories owned by an organization, organization owners can navigate to the organization's **Code security and analysis** settings, then click **Enable all** for secret scanning. 更多信息请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-existing-repositories)”。
- To display the missing alerts for an individual repository, people with admin access to the repository can disable then enable secret scanning for the repository. 更多信息请参阅“[管理仓库的安全和分析设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)”。

A fix will be available in an upcoming patch release. [Updated: 2022-08-26]

{% endif %}
