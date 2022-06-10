---
title: GitHub Enterprise 的许可证使用疑难解答
intro: 您可以通过审核许可证报告来排查企业的许可证使用问题。
permissions: 'Enterprise owners can review license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: 排查许可证使用问题
---

## 关于意外的许可证使用

如果企业使用的许可证数量不符合预期，可以查看已使用的许可证报告，以审核所有企业部署和订阅中的许可证使用情况。 如果发现错误，可以尝试排查步骤。 有关查看许可证使用情况的详细信息，请参阅“[查看 GitHub Enterprise 的许可证使用情况](/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)”和“[查看企业帐户的订阅和使用情况](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)”。

出于隐私原因，企业所有者无法直接访问用户帐户的详细信息。

## 关于已用许可证的计算

{% data variables.product.company_short %} 对使用 {% data variables.product.prodname_ghe_server %} 部署的每个人、{% data variables.product.prodname_ghe_cloud %} 组织的成员或 {% data variables.product.prodname_vs_subscriber %} 计费。 有关企业中计为使用许可证的人员的详细信息，请参阅“[关于每用户定价](/billing/managing-billing-for-your-github-account/about-per-user-pricing)”。

{% data reusables.enterprise-licensing.about-license-sync %}

## 已使用的许可文件中的字段

The {% data variables.product.prodname_dotcom_the_website %} license usage report and {% data variables.product.prodname_ghe_server %} exported license usage file include a variety of fields to help you troubleshoot license usage for your enterprise.
### {% data variables.product.prodname_dotcom_the_website %} license usage report (CSV file)

The license usage report for your enterprise is a CSV file that contains the following information about members of your enterprise. Some fields are specific to your {% data variables.product.prodname_ghe_cloud %} (GHEC) deployment, {% data variables.product.prodname_ghe_server %} (GHES) connected environments, or your {% data variables.product.prodname_vs %} subscriptions (VSS) with GitHub Enterprise.

| 字段              | 描述                                                                                                                                                                                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 名称              | First and last name for the user's account on GHEC.                                                                                                                                                                                                                                   |
| Handle or email | GHEC username, or the email address associated with the user's account on GHES.                                                                                                                                                                                                       |
| Profile link    | Link to the {% data variables.product.prodname_dotcom_the_website %} profile page for the user's account on GHEC.                                                                                                                                                                   |
| License type    | 可以是以下之一： `Visual Studio 订阅` 或 `Enterprise`。                                                                                                                                                                                                                                           |
| 许可证状态           | Identifies if a user account on {% data variables.product.prodname_dotcom_the_website %} successfully matched either a {% data variables.product.prodname_vs_subscriber %} or GHES user.<br><br>Can be one of: `Matched`, `Pending Invitation`, `Server Only`, blank. |
| Member roles    | For each of the organizations the user belongs to on GHEC, the organization name and the person's role in that organization (`Owner` or `Member`) separated by a colon<br><br>Each organization is delimited by a comma.                                                  |
| 企业角色            | Can be one of: `Owner` or `Member`.                                                                                                                                                                                                                                                   |

{% data variables.product.prodname_vs_subscriber %}s who are not yet members of at least one organization in your enterprise will be included in the report with a pending invitation status, and will be missing values for the "Name" or "Profile link" field.

### {% data variables.product.prodname_ghe_server %} exported license usage (JSON file)

Your {% data variables.product.prodname_ghe_server %} license usage is a JSON file that is typically used when performing a manual sync of user licenses between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} deployments. The file contains the following information specific to your {% data variables.product.prodname_ghe_server %} environment.

| 字段         | 描述                                                                                                                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 功能         | The {% data variables.product.prodname_github_connect %} features that are enabled on your {% data variables.product.prodname_ghe_server %} instance, and the date and time of enablement. |
| Host name  | The hostname of your {% data variables.product.prodname_ghe_server %} instance.                                                                                                              |
| HTTP only  | Whether Transport Layer Security (TLS) is enabled and configured on your {% data variables.product.prodname_ghe_server %} instance. Can be one of: `True` or `False`.                        |
| 许可         | {% data variables.product.prodname_ghe_server %} 许可的哈希.                                                                                                                                      |
| Public key | {% data variables.product.prodname_ghe_server %} 许可的公钥部分.                                                                                                                                    |
| Server ID  | UUID generated for your {% data variables.product.prodname_ghe_server %} instance.                                                                                                           |
| 版本         | The version of your {% data variables.product.prodname_ghe_server %} instance.                                                                                                               |

## Troubleshooting consumed licenses

If the number of consumed seats is unexpected, or if you've recently removed members from your enterprise, we recommend that you audit your license usage.

To determine which users are currently consuming seat licenses, first try reviewing the consumed licenses report for your enterprise{% ifversion ghes %} and/or an export of your {% data variables.product.prodname_ghe_server %} license usage{% endif %} for unexpected entries.

There are two especially common reasons for inaccurate or incorrect license seat counts.
- The email addresses associated with a user do not match across your enterprise deployments and subscriptions.
- An email address for a user was recently updated or verified to correct a mismatch, but a license sync job hasn't run since the update was made.

When attempting to match users across enterprises, {% data variables.product.company_short %} identifies individuals by the verified email addresses associated with their {% data variables.product.prodname_dotcom_the_website %} account, and the primary email address associated with their {% data variables.product.prodname_ghe_server %} account and/or the email address assigned to the {% data variables.product.prodname_vs_subscriber %}.

Your license usage is recalculated shortly after each license sync is performed. You can view the timestamp of the last license sync job, and, if a job hasn't run since an email address was updated or verified, to resolve an issue with your consumed license report you can manually trigger one. For more information, see "[Syncing license usage between GitHub Enterprise Server and GitHub Enterprise Cloud](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."

{% ifversion ghec or ghes > 3.1 %}
If your enterprise uses verified domains, review the list of enterprise members who do not have an email address from a verified domain associated with their {% data variables.product.prodname_dotcom_the_website %} account. Often, these are the users who erroneously consume more than one licensed seat. 更多信息请参阅“[查看来自已验证域的电子邮件地址的成员](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain)”。
{% endif %}

{% note %}

**Note:** For privacy reasons, your consumed license report only includes the email address associated with a user account on {% data variables.product.prodname_dotcom_the_website %} if the address is hosted by a verified domain. For this reason, we recommend using verified domains with your enterprise account on {% data variables.product.prodname_dotcom_the_website %}. Then, if one person is erroneously consuming multiple licenses, you can more easily troubleshoot, as you will have access to the email address that is being used for license deduplication.

{% endnote %}

{% ifversion ghec %}

If your license includes {% data variables.product.prodname_vss_ghe %} and your enterprise also includes at least one {% data variables.product.prodname_ghe_server %} connected environment, we strongly recommend using {% data variables.product.prodname_github_connect %} to automatically synchronize your license usage. For more information, see "[About Visual Studio subscriptions with GitHub Enterprise](/enterprise-cloud@latest/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/about-visual-studio-subscriptions-with-github-enterprise)."

{% endif %}

If you still have questions about your consumed licenses after reviewing the troubleshooting information above, you can contact {% data variables.contact.github_support %} through the {% data variables.contact.contact_enterprise_portal %}.
