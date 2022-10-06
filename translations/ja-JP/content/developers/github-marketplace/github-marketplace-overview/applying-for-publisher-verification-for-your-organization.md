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
shortTitle: Publisher verification
ms.openlocfilehash: 34085acb78eba5057cea382ab250e4704dd958d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145089720'
---
パブリッシャーの検証は、{% data variables.product.prodname_dotcom %}があなたに連絡する方法があること、Organizationで2要素認証を有効化していること、Organizationのドメインが検証済みであることを保証するものです。

Organizationが検証済みになると、アプリケーションで有料プランを公開できます。 詳細については、「[リストに対する価格プランの設定](/developers/github-marketplace/setting-pricing-plans-for-your-listing)」を参照してください。

アプリケーションで有料プランを提供するには、アプリケーションがOrganizationの所有であり、あなたがそのOrganizationのオーナー権限を持っていなければなりません。 アプリケーションが個人アカウントの所有である場合は、そのアプリケーションの所有権を組織に移譲する必要があります。 詳細については、「[GitHub アプリの所有権を移譲する](/developers/apps/transferring-ownership-of-a-github-app)」または「[OAuth アプリの所有権を移譲する](/developers/apps/transferring-ownership-of-an-oauth-app)」を参照してください。

## パブリッシャー検証をリクエストする


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 左側のサイドバーで、 **[開発者向け設定]** をクリックします。
  ![[組織向け設定] サイドバーの開発者設定オプション](/assets/images/marketplace/developer-settings-in-org-settings.png)
1. [開発者向け設定] の **[パブリッシャーの検証]** をクリックします。
  ![[組織向け設定] サイドバーのパブリッシャー検証オプション](/assets/images/marketplace/publisher-verification-settings-option.png)
1. [Publisher Verification] のチェックリストに情報を入力してください。
   - 基本プロフィール情報は最新かつ正確なものを入力してください。 また、{% data variables.product.company_short %} からのサポートや最新情報を受け取るために最善のメールアドレスを必ず含めてください。
   - Organizationで2要素認証を必ず有効化してください。 詳細については、「[Organization で 2 要素認証を要求する](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)」を参照してください。
   - 検証済みドメインを送信し、「認証済み」バッジがOrganizationのプロフィールページに表示されていることを確認します。 詳細については、[組織のドメインの確認または承認](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)に関する記事を参照してください。

  ![パブリッシャーの検証チェックリスト](/assets/images/marketplace/publisher-verification-checklist.png)

2. **[検証の要求]** をクリックします。 {% data variables.product.company_short %} は入力内容を確認し、パブリッシャーの検証が完了した際にお知らせします。

## 参考資料

アプリを公開するプロセスの詳細については、「[GitHub Marketplace について](/developers/github-marketplace/about-github-marketplace)」を参照してください。
