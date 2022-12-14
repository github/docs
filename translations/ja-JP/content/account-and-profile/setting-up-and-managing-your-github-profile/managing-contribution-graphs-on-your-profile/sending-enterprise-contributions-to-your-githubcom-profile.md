---
title: GitHub.com プロファイルへのエンタープライズ コントリビューションの送信
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
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145090034"
---
## <a name="about-enterprise-contributions-on-your--data-variablesproductprodname_dotcom_the_website--profile"></a>{% data variables.product.prodname_dotcom_the_website %} プロファイルのエンタープライズ コントリビューションについて

{% data variables.product.prodname_dotcom_the_website %} プロファイルには、過去 90 日間の {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} コントリビューション カウントが表示されます。 {% data reusables.github-connect.sync-frequency %} {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} からのコントリビューション カウントはプライベート コントリビューションと見なされます。 コミットの詳細に示されるのは、コントリビューション カウントと、これらのコントリビューションが {% data variables.product.prodname_dotcom_the_website %} の外部にある {% data variables.product.prodname_enterprise %} 環境で行われたことのみです。

プロファイルでプライベート コントリビューションのカウントを表示するかどうかを決定できます。 詳細については、「[プライベート コントリビューションをプロフィールで公開または非公開にする](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile/)」を参照してください。

コントリビューションの計算方法の詳細については、「[プロフィールでコントリビューション グラフを管理する](/articles/managing-contribution-graphs-on-your-profile/)」を参照してください。

{% note %}

**注:**
- アカウント間の接続は [GitHub のプライバシーに関する声明](/free-pro-team@latest/github/site-policy/github-privacy-statement/)によって管理され、接続を有効にしているユーザーは [GitHub 利用規約](/free-pro-team@latest/github/site-policy/github-terms-of-service)に同意するものとします。

- {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} プロファイルを {% data variables.product.prodname_dotcom_the_website %} プロファイルに接続できるようにするには、エンタープライズ所有者が、{% data variables.product.prodname_github_connect %} を有効にし、環境間で共有するコントリビューションを有効にする必要があります。 詳細については、エンタープライズ所有者にお問い合わせください。

{% endnote %}

## <a name="sending-your-enterprise-contributions-to-your--data-variablesproductprodname_dotcom_the_website--profile"></a>{% data variables.product.prodname_dotcom_the_website %} プロファイルへのエンタープライズ コントリビューションの送信

{% ifversion fpt or ghec %}

- {% data variables.product.prodname_ghe_server %} から {% data variables.product.prodname_dotcom_the_website %} プロファイルにエンタープライズ コントリビューションを送信する場合は、{% data variables.product.prodname_ghe_server %} ドキュメントの「[{% data variables.product.prodname_dotcom_the_website %} プロファイルへのエンタープライズ コントリビューションの送信](/enterprise-server/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)」を参照してください。
- {% data variables.product.prodname_ghe_managed %} から {% data variables.product.prodname_dotcom_the_website %} プロファイルにエンタープライズ コントリビューションを送信する場合は、{% data variables.product.prodname_ghe_managed %} ドキュメントの「[{% data variables.product.prodname_dotcom_the_website %} プロファイルへのエンタープライズ コントリビューションの送信](/github-ae@latest/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)」を参照してください。

{% elsif ghes %}

1. {% data variables.product.prodname_ghe_server %} と {% data variables.product.prodname_dotcom_the_website %} にサインインします。
1. {% data variables.product.prodname_ghe_server %} で、任意のページの右上隅にある自分のプロファイル写真をクリックしてから、 **[設定]** をクリックします。
   ![ユーザー バーの [設定] アイコン](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %}
1. {% data variables.product.prodname_dotcom_the_website %} アカウントから {% data variables.product.prodname_ghe_server %} がアクセスするリソースをレビューし、 **[承認]** をクリックします。
   ![GitHub Enterprise Server と GitHub.com の間の接続を承認する](/assets/images/help/settings/authorize-ghe-to-connect-to-dotcom.png) {% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% elsif ghae %}

1. {% data variables.product.prodname_ghe_managed %} と {% data variables.product.prodname_dotcom_the_website %} にサインインします。
1. {% data variables.product.prodname_ghe_managed %} で、任意のページの右上隅にある自分のプロファイル写真をクリックしてから、 **[設定]** をクリックします。
   ![ユーザー バーの [設定] アイコン](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %} {% data reusables.github-connect.authorize-connection %} {% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% endif %}
