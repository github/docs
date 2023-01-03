---
title: プライベート エンタープライズ環境からの GitHub.com リポジトリ検索の有効化
shortTitle: Search GitHub.com from enterprise
intro: '{% data variables.product.prodname_dotcom_the_website %} 上の個人アカウントとプライベート {% data variables.product.prodname_enterprise %} 環境を接続して、{% ifversion fpt or ghec %}プライベート環境{% else %}{% data variables.product.product_name %} {% endif %}の特定の {% data variables.product.prodname_dotcom_the_website %} リポジトリの内容を検索できます。'
redirect_from:
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-account
  - /articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-server-account
  - /articles/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
versions:
  ghes: '*'
  ghae: '*'
topics:
  - GitHub search
ms.openlocfilehash: 2c4ee57036ca2d0114e75a1acaeecec05be5ba3a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062459'
---
## {% data variables.product.product_name %} からの {% data variables.product.prodname_dotcom_the_website %} リポジトリ検索について

{% data variables.product.prodname_ghe_managed %}{% endif %} の {% data variables.product.product_location %}{% ifversion ghae %} から、{% data variables.product.prodname_ghe_cloud %} の指定されたプライベート リポジトリを検索できます。 複数の環境での検索の詳細については、「[GitHub での検索について](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment)」を参照してください。

## 前提条件

{% data variables.product.product_name %} のエンタープライズ所有者は、プライベート リポジトリの {% data variables.product.prodname_github_connect %}} と {% data variables.product.prodname_unified_search %} を有効にする必要があります。 詳細については、「[エンタープライズでの {% data variables.product.prodname_unified_search %} の有効化](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)」を参照してください。

## {% data variables.product.prodname_dotcom_the_website %} リポジトリ検索を {% data variables.product.product_name %} から有効にする

1. {% data variables.product.product_name %} と {% data variables.product.prodname_dotcom_the_website %} にサインインします。
1. {% data variables.product.product_name %} で、任意のページの右上隅にある自分のプロファイル写真をクリックしてから、 **[設定]** をクリックします。
![ユーザー バーの [設定] アイコン](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %}
