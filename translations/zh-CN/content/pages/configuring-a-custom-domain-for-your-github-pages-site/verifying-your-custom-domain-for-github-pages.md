---
title: 验证 GitHub Pages 的自定义域
intro: 您可以通过验证您的域来提高自定义域的安全性并避免接管攻击。
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Verify a custom domain
ms.openlocfilehash: b3c44dacd98882afa7a43854b96d803352e879ca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529669'
---
## 关于 GitHub Pages 的域验证

验证个人帐户或组织的自定义域时，只能使用个人帐户或组织拥有的存储库将 {% data variables.product.prodname_pages %} 站点发布到已验证的自定义域或域的直接子域。

验证您的域会阻止其他 GitHub 用户接管您的自定义域并使用它来发布他们自己的 {% data variables.product.prodname_pages %} 站点。 当您删除存储库、降低计费计划级别时，或者在取消链接自定义域或禁用 {% data variables.product.prodname_pages %} 而域仍配置为 {% data variables.product.prodname_pages %} 且未进行验证的任何其他更改之后，可能会发生域接管。

验证域时，验证中还会包含任何直接子域。 例如，如果已验证 `github.com` 自定义域，`docs.github.com`、`support.github.com` 和任何其他直接子域也将受到保护，以防止被接管。

{% data reusables.pages.wildcard-dns-warning %}

还可以验证组织{% ifversion ghec %} 或企业{% endif %}的域，这会在组织 {% ifversion ghec %}或企业{% endif %} 配置文件{% ifversion ghec %} 以及 {% data variables.product.prodname_ghe_cloud %} 上显示“已验证”徽章，允许您使用已验证的域将通知限于电子邮件地址{% endif %}。 有关详细信息，请参阅“[验证或批准组织的域](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization){% ifversion ghec %}”和“[验证或批准企业的域](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”{% endif %}。

## 验证用户站点的域

{% data reusables.user-settings.access_settings %}
1. 在边栏的“代码、规划和自动化”部分中，单击 {% octicon "browser" aria-label="The pages icon" %} 页。
{% data reusables.pages.settings-verify-domain-setup %}
1. 等待您的 DNS 配置更改，这可能是立即更改或最多需要 24 小时。 可以通过在命令行上运行 `dig` 命令来确认对 DNS 配置的更改。 在以下命令中，将 `USERNAME` 替换为你的用户名，将 `example.com` 替换为要验证的域。 如果您的 DNS 配置已更新，您应该会在输出中看到新的 TXT 记录。
  ```
  dig _github-pages-challenge-USERNAME.example.com +nostats +nocomments +nocmd TXT
  ```
{% data reusables.pages.settings-verify-domain-confirm %}

## 验证组织站点的域

组织所有者可以验证其组织的自定义域。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 在边栏的“代码、规划和自动化”部分中，单击 {% octicon "browser" aria-label="The browser icon" %} 页。
{% data reusables.pages.settings-verify-domain-setup %}
1. 等待您的 DNS 配置更改，这可能是立即更改或最多需要 24 小时。 可以通过在命令行上运行 `dig` 命令来确认对 DNS 配置的更改。 在以下命令中，将 `ORGANIZATION` 替换为组织的名称，将 `example.com` 替换为要验证的域。 如果您的 DNS 配置已更新，您应该会在输出中看到新的 TXT 记录。
  ```
  dig _github-pages-challenge-ORGANIZATION.example.com +nostats +nocomments +nocmd TXT
  ```
{% data reusables.pages.settings-verify-domain-confirm %}
