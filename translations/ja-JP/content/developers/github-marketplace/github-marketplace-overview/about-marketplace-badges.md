---
title: Marketplaceバッジについて
intro: '{% data variables.product.prodname_marketplace %}に掲載されている一部のアプリやアクションで表示されるバッジについて学びましょう。'
redirect_from:
  - /developers/github-marketplace/about-verified-creator-badges
  - /developers/github-marketplace/about-marketplace-badges
versions:
  fpt: '*'
  ghec: '*'
---

## GitHub App

{% data variables.product.prodname_marketplace %}の一部のアプリケーションには、{% octicon "verified" aria-label="The verified badge" %}バッジと「Publisher domain and email verified」と表示されるツールチップがあります。 これは、アプリケーションが以下の条件を満たしたOrganizationの所有であることを意味します。

- ドメインの所有権を検証済みで、プロフィールに検証済みバッジがある
- メールアドレスが確認済みで、{% data variables.product.prodname_dotcom %} SupportがOrganizationに連絡できる
- Organizationで2要素認証を必須にしている。 詳しい情報については [Organization で 2 要素認証を要求する](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)を参照してください。

![GitHub AppのMarketplaceバッジ](/assets/images/marketplace/apps-with-verified-publisher-badge-tooltip.png)

{% note %}
{% data variables.product.prodname_dotcom %}は、アプリケーションを分析しません。 Marketplaceバッジ{% octicon "verified" aria-label="The verified badge" %}は、パブリッシャーが上記の条件を満たしているということを確認しているだけに過ぎません。
{% endnote %}

このバッジをアプリケーションに追加する方法については、「[Organizationのパブリッシャー検証プロセスを申請する](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)」を参照してください。

{% data variables.product.prodname_marketplace %}の一部のアプリケーションには、{% octicon "verified" aria-label="The verified badge" %}バッジと、「Publisher domain and email verified」ではなく「App meets the requirements for listing」と表示されるツールチップがあります。 これは、アプリケーションが「[アプリケーションを載せるための要件](/developers/github-marketplace/requirements-for-listing-an-app)」を満たしているものの、パブリッシャーは「[Organizationのパブリッシャー検証プロセスを申請する](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)」に記載の通りに検証されていないことを意味します。 このバッジが付いたアプリケーションは、パブリッシャーが検証を申請して認められるまで、価格プランを変更できません。

![GitHub AppのMarketplaceバッジ](/assets/images/marketplace/apps-with-unverified-publisher-badge-tooltip.png)

{% data variables.product.prodname_marketplace %}でアプリケーションをリストするための要件に関する情報については、「[{% data variables.product.prodname_marketplace %}上にアプリケーションをリストするための要件](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)」を参照してください。

使用するアプリケーションの探し方に関する情報については、「[{% data variables.product.prodname_marketplace %}の検索](/search-github/searching-on-github/searching-github-marketplace)」を参照してください。

## GitHub Actions

{% octicon "verified" aria-label="The verified badge" %} (検証済み作者バッジ) の付いたActionsは、{% data variables.product.prodname_dotcom %}がそのActionsの作者をパートナーOrganizationとして検証済みであることを示します。

![GitHub Actionsの検証済み作者バッジ](/assets/images/marketplace/verified-creator-badge-for-actions.png)

GitHub Actionsを{% data variables.product.prodname_marketplace %}に公開する方法については、「[ActionsをGitHub Marketplaceで公開する](/actions/creating-actions/publishing-actions-in-github-marketplace)」を参照してください。
