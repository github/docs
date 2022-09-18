---
title: Marketplaceバッジについて
intro: '{% data variables.product.prodname_marketplace %}に掲載されている一部のアプリやアクションで表示されるバッジについて学びましょう。'
redirect_from:
  - /developers/github-marketplace/about-verified-creator-badges
  - /developers/github-marketplace/about-marketplace-badges
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: bba9137fc39c1bc101a75650dcea03e651d37fff
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089727'
---
## GitHub App

{% data variables.product.prodname_marketplace %}の一部のアプリケーションには、{% octicon "verified" aria-label="The verified badge" %}バッジと「Publisher domain and email verified」と表示されるツールチップがあります。 これは、アプリケーションが以下の条件を満たしたOrganizationの所有であることを意味します。

- ドメインの所有権を検証済みで、プロフィールに検証済みバッジがある
- メールアドレスが確認済みで、{% data variables.product.prodname_dotcom %} SupportがOrganizationに連絡できる
- Organizationで2要素認証を必須にしている。 詳細については、「[Organization で 2 要素認証を要求する](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)」を参照してください。

![GitHub アプリの Marketplace バッジ](/assets/images/marketplace/apps-with-verified-publisher-badge-tooltip.png)

{% note %} {% data variables.product.prodname_dotcom %}は、アプリケーションを分析しません。 Marketplaceバッジ{% octicon "verified" aria-label="The verified badge" %}は、パブリッシャーが上記の条件を満たしているということを確認しているだけに過ぎません。
{% endnote %}

このバッジをアプリに追加する方法については、「[Organization のパブリッシャー検証プロセスを申請する](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)」を参照してください。

{% data variables.product.prodname_marketplace %}の一部のアプリケーションには、{% octicon "verified" aria-label="The verified badge" %}バッジと、「Publisher domain and email verified」ではなく「App meets the requirements for listing」と表示されるツールチップがあります。 つまり、アプリは「[アプリケーションのリストのための要件](/developers/github-marketplace/requirements-for-listing-an-app)」で説明されている一覧の要件を満たしていますが、「[Organization のパブリッシャー検証プロセスを申請する](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)」で説明されているように、パブリッシャーは検証されていません。 このバッジが付いたアプリケーションは、パブリッシャーが検証を申請して認められるまで、価格プランを変更できません。

![GitHub アプリの Marketplace バッジ](/assets/images/marketplace/apps-with-unverified-publisher-badge-tooltip.png)

{% data variables.product.prodname_marketplace %} にアプリを一覧表示するための要件の詳細については、「[{% data variables.product.prodname_marketplace %} 上にアプリケーションをリストするための要件](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)」を参照してください。

使用するアプリの検索については、「[{% data variables.product.prodname_marketplace %} の検索](/search-github/searching-on-github/searching-github-marketplace)」を参照してください。

## GitHub Actions 

{% octicon "verified" aria-label="The verified badge" %} (検証済み作者バッジ) の付いたActionsは、{% data variables.product.prodname_dotcom %}がそのActionsの作者をパートナーOrganizationとして検証済みであることを示します。

![GitHub Actionsの検証済み作者バッジ](/assets/images/marketplace/verified-creator-badge-for-actions.png)

GitHub アクションを {% data variables.product.prodname_marketplace %} に発行する方法については、「[GitHub Marketplace でのアクションの発行](/actions/creating-actions/publishing-actions-in-github-marketplace)」を参照してください。
