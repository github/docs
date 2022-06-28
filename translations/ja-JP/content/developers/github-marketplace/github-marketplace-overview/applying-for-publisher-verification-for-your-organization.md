---
title: Organizationのパブリッシャー検証プロセスを申請する
intro: アプリケーションで有料プランを提供し、掲載アプリケーションにMarketplaceバッジを表示するには、Organizationのパブリッシャー検証プロセスを完了する必要があります。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
redirect_from:
  - /developers/github-marketplace/applying-for-publisher-verification-for-your-organization
shortTitle: パブリッシャーの検証
---

パブリッシャーの検証は、{% data variables.product.prodname_dotcom %}があなたに連絡する方法があること、Organizationで2要素認証を有効化していること、Organizationのドメインが検証済みであることを保証するものです。

Organizationが検証済みになると、アプリケーションで有料プランを公開できます。 詳しい情報については、「[リストに対する価格プランの設定](/developers/github-marketplace/setting-pricing-plans-for-your-listing)」を参照してください。

アプリケーションで有料プランを提供するには、アプリケーションがOrganizationの所有であり、あなたがそのOrganizationのオーナー権限を持っていなければなりません。 If your app is currently owned by a personal account, you'll need to transfer the ownership of the app to an organization. 詳しい情報については、「[GitHub Appの所有権の移譲](/developers/apps/transferring-ownership-of-a-github-app)」または「[OAuth Appの所有権の移譲](/developers/apps/transferring-ownership-of-an-oauth-app)」を参照してください。

## パブリッシャー検証をリクエストする


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. 左サイドバーで [**Developer settings**] をクリックします。 ![[organization settings] サイトバーの開発者設定オプション](/assets/images/marketplace/developer-settings-in-org-settings.png)
1. [Developer settings] で、[**Publisher Verification**] をクリックします。 ![[organization settings] サイトバーのパブリッシャー検証オプション](/assets/images/marketplace/publisher-verification-settings-option.png)
1. [Publisher Verification] のチェックリストに情報を入力してください。
   - 基本プロフィール情報は最新かつ正確なものを入力してください。 また、{% data variables.product.company_short %} からのサポートや最新情報を受け取るために最善のメールアドレスを必ず含めてください。
   - Organizationで2要素認証を必ず有効化してください。 詳しい情報については [Organization で 2 要素認証を要求する](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)を参照してください。
   - 検証済みドメインを送信し、「認証済み」バッジがOrganizationのプロフィールページに表示されていることを確認します。 詳しい情報については、「[Organizationのためのドメインの検証あるいは承認](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)」を参照してください。

  ![パブリッシャーの検証チェックリスト](/assets/images/marketplace/publisher-verification-checklist.png)

2. [**Request Verification**] をクリックします。 {% data variables.product.company_short %} は入力内容を確認し、パブリッシャーの検証が完了した際にお知らせします。

## 参考リンク

アプリケーションを公開する手順については、「[GitHub Marketplaceについて](/developers/github-marketplace/about-github-marketplace)」を参照してください。
