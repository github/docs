---
title: GitHub Enterprise 许可证使用情况疑难解答
intro: 你可以通过审核许可证报告来排查企业的许可证使用情况问题。
permissions: 'Enterprise owners can review license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Troubleshoot license usage
ms.openlocfilehash: f23ca2380e71f5b037278c71da57dc8fab94c750
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147572657'
---
## 关于意外的许可证使用情况

如果企业使用的许可证数量出现异常，你可以查看已使用的许可证报告以审核整个企业部署和订阅中的许可证使用情况。 有关详细信息，请参阅“[查看 GitHub Enterprise 的许可证使用情况](/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)”和“[查看企业帐户的订阅和使用情况](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)”。

如果发现错误，可以尝试执行故障排除步骤。

出于隐私原因，除非使用 {% data variables.product.prodname_emus %}，否则企业所有者无法直接访问用户帐户的详细信息。

## 关于已使用的许可证的计算

{% data variables.product.company_short %} 会对以下每个人员计费：使用 {% data variables.product.prodname_ghe_server %} 的部署；为 {% data variables.product.prodname_ghe_cloud %} 上的其中一个组织的成员；为 {% data variables.product.prodname_vs_subscriber %}。 有关企业中使用许可证的人员的详细信息，请参阅“[关于每用户定价](/billing/managing-billing-for-your-github-account/about-per-user-pricing)”。

对于使用单个席位而不管使用多少部署的每个用户，你必须在 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 之间同步许可证使用情况。 有关详细信息，请参阅“[同步 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 之间的许可证使用情况](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)”。

同步许可证使用情况后，{% data variables.product.prodname_dotcom %} 会按电子邮件地址将 {% data variables.product.prodname_ghe_server %} 上的用户帐户与 {% data variables.product.prodname_ghe_cloud %} 上的用户帐户进行匹配。

首先，我们先检查 {% data variables.product.prodname_ghe_server %} 上每个用户的主电子邮件地址。 然后尝试将该地址与 {% data variables.product.prodname_ghe_cloud %} 上的用户帐户的电子邮件地址进行匹配。 如果企业使用 SAML SSO，我们首先检查电子邮件地址的以下 SAML 属性。

- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`
- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`
- `username`
- `NameID`
- `emails`

如果在这些属性中找不到与 {% data variables.product.prodname_ghe_server %} 上的主电子邮件地址匹配的电子邮件地址，或如果企业不使用 SAML SSO，则我们将在 {% data variables.product.prodname_ghe_cloud %} 上检查该用户的每个已验证的电子邮件地址。 有关 {% data variables.product.prodname_dotcom_the_website %} 上的电子邮件地址验证的详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[验证电子邮件地址](/enterprise-cloud@latest/get-started/signing-up-for-github/verifying-your-email-address){% ifversion not ghec %}”。{% else %}."{% endif %}

## 已使用的许可证文件中的字段

{% data variables.product.prodname_dotcom_the_website %} 许可证使用情况报告和 {% data variables.product.prodname_ghe_server %} 导出的许可证使用情况文件包含各种字段，可帮助你排查企业的许可证使用情况的问题。 

### {% data variables.product.prodname_dotcom_the_website %} 许可证使用情况报告（CSV 文件）

企业的许可证使用情况报告是一个 CSV 文件，其中包含有关企业成员的以下信息。 某些字段特定于 {% data variables.product.prodname_ghe_cloud %} (GHEC) 部署、{% data variables.product.prodname_ghe_server %} (GHES) 通连环境或带有 GitHub Enterprise 的 {% data variables.product.prodname_vs %} 订阅 (VSS)。

| 字段 | 说明
| ----- | -----------
| github_com_login | 用户的 GHEC 帐户的用户名
| github_com_name | 用户的 GHEC 帐户的显示名称
| github_com_profile | GHEC 上的用户配置文件页的 URL
| github_com_user   | 用户是否在 GHEC 上拥有帐户 |
| github_com_member_roles | 对于 GHEC 上用户所属的每个组织，组织名称和用户在该组织中的角色（`Owner` 或 `Member`）由冒号分隔<br><br>组织由逗号分隔 |
| github_com_enterprise_role | 可以是下述之一：`Owner`、`Member` 或 `Outside collaborator`
| github_com_verified_domain_emails | 与用户的 GHEC 帐户关联且与企业的已验证域匹配的所有电子邮件地址 |
| github_com_saml_name_id | SAML 用户名 |
| github_com_orgs_with_pending_invites | 用户 GHEC 帐户加入企业内组织的所有待定邀请 |
| license_type | 可以是下述之一：`Visual Studio subscription` 或 `Enterprise`
| enterprise_server_user| 用户是否在 GHES 上至少有一个帐户 |
| enterprise_server_primary_emails | 与用户的每个 GHES 帐户关联的主电子邮件地址 |
| enterprise_server_user_ids | 对于用户的每个 GHES 帐户，帐户的用户 ID
| total_user_accounts | 此人在 GHEC 和 GHES 上拥有的帐户总数
| visual_studio_subscription_user | 用户是否为 {% data variables.product.prodname_vs_subscriber %} |
| visual_studio_subscription_email | 与用户的 VSS 关联的电子邮件地址 |
| visual_studio_license_status | Visual Studio 许可证是否已与 {% data variables.product.company_short %} 用户匹配 |

尚未成为企业中至少一个组织的成员的 {% data variables.product.prodname_vs_subscriber %}将包含在此报告中，为待定邀请状态，并且将缺少“名称”或“个人资料链接”字段的值。

### {% data variables.product.prodname_ghe_server %} 导出的许可证使用情况（JSON 文件）

{% data variables.product.prodname_ghe_server %} 许可证使用情况是一个 JSON 文件，通常是在 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_ghe_cloud %} 部署之间执行手动用户许可证同步时会用到。 此文件包含特定于 {% data variables.product.prodname_ghe_server %} 环境的以下信息。

| 字段 | 说明
| ----- | -----------
| 功能 | 在 {% data variables.product.prodname_ghe_server %} 实例上启用的 {% data variables.product.prodname_github_connect %} 功能，以及启用的日期和时间。
| 主机名 | {% data variables.product.prodname_ghe_server %} 实例的主机名。
| 仅 HTTP | 是否在 {% data variables.product.prodname_ghe_server %} 实例上启用并配置了传输层安全性 (TLS)。 可以是以下选项之一：`True` 或 `False`。 
| 许可证 | {% data variables.product.prodname_ghe_server %} 许可证的哈希。
| 公钥 | {% data variables.product.prodname_ghe_server %} 许可证的公钥部分。
| 服务器 ID | 为 {% data variables.product.prodname_ghe_server %} 实例生成的 UUID。
| 版本 | {% data variables.product.prodname_ghe_server %} 实例的版本。

## 已使用的许可证疑难解答

要确保每个用户只使用单个席位进行不同的部署和订阅，请尝试以下故障排除步骤。

1. 为帮助识别使用多个席位的用户，如果你的企业对 {% data variables.product.prodname_ghe_cloud %} 使用已验证的域，请查看企业成员的电子邮件地址不是来自与他们 {% data variables.product.prodname_dotcom_the_website %} 帐户关联的已验证域的企业成员列表。 通常，这些是错误使用了多个许可的席位的用户。 有关详细信息，请参阅“[查看电子邮件地址不是来自已验证的域的成员](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain)”。

   {% note %}

  注意：为简化故障排除，建议使用与你在 {% data variables.product.prodname_dotcom_the_website %} 上的企业帐户相关联的已验证的域。 有关详细信息，请参阅“[验证或批准企业的域](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”。

  {% endnote %}
1. 识别出使用多个席位的用户后，请确保同一电子邮件地址与该用户的所有帐户相关联。 有关哪些电子邮件地址必须匹配的详细信息，请参阅“[关于已使用的许可证的计算](#about-the-calculation-of-consumed-licenses)”。
1. 如果电子邮件地址最近进行了更新或验证以解决不匹配问题，请查看上次许可证同步作业的时间戳。 如果作业自更正后尚未运行，请手动触发新作业。 有关详细信息，请参阅“[在 GitHub Enterprise Server 和 GitHub Enterprise Cloud 之间同步许可证使用情况](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)”。

如果在看完上述故障排除信息后仍对已使用的许可证有任何问题，可以通过 {% data variables.contact.contact_enterprise_portal %}联系 {% data variables.contact.github_support %}。
