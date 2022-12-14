---
title: 将企业贡献发送到您的 GitHub.com 个人资料
intro: You can highlight your work on {% data variables.product.prodname_enterprise %} by sending the contribution counts to your {% data variables.product.prodname_dotcom_the_website %} profile.
redirect_from:
- /articles/sending-your-github-enterprise-contributions-to-your-github-com-profile
- /articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile
- /articles/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
- /github/setting-up-and-managing-your-github-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: Send enterprise contributions
ms.openlocfilehash: 19b26c9e274b66df16434727e42c5c291bacfea7
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145085058"
---
## <a name="about-enterprise-contributions-on-your--data-variablesproductprodname_dotcom_the_website--profile"></a>关于 {% data variables.product.prodname_dotcom_the_website %} 个人资料上的企业贡献

您的 {% data variables.product.prodname_dotcom_the_website %} 个人资料显示过去 90 天内 {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} 贡献计数。 {% data reusables.github-connect.sync-frequency %} {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} 的贡献计数被视为私人贡献。 提交详细信息将仅显示贡献计数，这些贡献是在 {% data variables.product.prodname_dotcom_the_website %} 以外的 {% data variables.product.prodname_enterprise %} 环境中进行的。

您可以决定是否在个人资料中显示私人贡献的计数。 有关详细信息，请参阅“[在个人资料中公开或隐藏你的私人贡献](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile/)”。

有关如何计算贡献的详细信息，请参阅“[管理个人资料中的贡献图](/articles/managing-contribution-graphs-on-your-profile/)”。

{% note %}

**注意：**
- 帐户之间的连接受 [GitHub 的隐私声明](/free-pro-team@latest/github/site-policy/github-privacy-statement/)约束，启用连接即表示用户同意 [GitHub 的服务条款](/free-pro-team@latest/github/site-policy/github-terms-of-service)。

- 在将 {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} 配置文件连接到 {% data variables.product.prodname_dotcom_the_website %} 配置文件之前，企业所有者必须启用 {% data variables.product.prodname_github_connect %} 并启用环境之间的贡献共享。 有关详细信息，请与企业所有者联系。

{% endnote %}

## <a name="sending-your-enterprise-contributions-to-your--data-variablesproductprodname_dotcom_the_website--profile"></a>将您的企业贡献发送到您的 {% data variables.product.prodname_dotcom_the_website %} 个人资料

{% ifversion fpt or ghec %}

- 若要将来自 {% data variables.product.prodname_ghe_server %} 的企业贡献发送到你的 {% data variables.product.prodname_dotcom_the_website %} 个人资料，请参阅 {% data variables.product.prodname_ghe_server %} 文档中的“[将企业贡献发送到你的 {% data variables.product.prodname_dotcom_the_website %} 个人资料](/enterprise-server/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)”。
- 若要将来自 {% data variables.product.prodname_ghe_managed %} 的企业贡献发送到你的 {% data variables.product.prodname_dotcom_the_website %} 个人资料，请参阅 {% data variables.product.prodname_ghe_managed %} 文档中的“[将企业贡献发送到你的 {% data variables.product.prodname_dotcom_the_website %} 个人资料](/github-ae@latest/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)”。

{% elsif ghes %}

1. 登录到 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_dotcom_the_website %}。
1. 在 {% data variables.product.prodname_ghe_server %} 任意页的右上角，单击个人资料照片，然后单击“设置”。
   ![用户栏中的“设置”图标](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %}
1. 查看 {% data variables.product.prodname_ghe_server %} 将从你的 {% data variables.product.prodname_dotcom_the_website %} 帐户访问的资源，然后单击“授权”。
   ![授权 GitHub Enterprise Server 与 GitHub.com 之间的连接](/assets/images/help/settings/authorize-ghe-to-connect-to-dotcom.png) {% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% elsif ghae %}

1. 登录到 {% data variables.product.prodname_ghe_managed %} 和 {% data variables.product.prodname_dotcom_the_website %}。
1. 在 {% data variables.product.prodname_ghe_managed %} 任意页的右上角，单击个人资料照片，然后单击“设置”。
   ![用户栏中的“设置”图标](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %} {% data reusables.github-connect.authorize-connection %} {% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% endif %}
