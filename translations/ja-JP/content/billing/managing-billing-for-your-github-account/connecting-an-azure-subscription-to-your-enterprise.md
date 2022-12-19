---
title: Azure サブスクリプションを Enterprise に接続する
intro: 'Microsoft Enterprise Agreement を使用して、{% data variables.product.prodname_actions %}、{% data variables.product.prodname_registry %}、{% data variables.product.prodname_github_codespaces %} の使用を有効化して支払うことができます。'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise
versions:
  ghec: '*'
shortTitle: Connect an Azure subscription
ms.openlocfilehash: a5473ff19e403eb21242982e005663d1c8ac5962
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110883'
---
## Azure サブスクリプションと {% data variables.product.product_name %}

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} 詳細については、「[{% data variables.product.prodname_actions %} の支払いについて](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)」および「[{% data variables.product.prodname_registry %} の支払いについて](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)」を参照してください。

{% note %}

**注:** エンタープライズ アカウントが Microsoft Enterprise Agreement に基づいている場合、{% data variables.product.prodname_actions %} と {% data variables.product.prodname_registry %} を含まれている金額を超えて使うには、または {% data variables.product.prodname_codespaces %} を使うには、Azure サブスクリプションを接続することが唯一の方法です。

{% endnote %}

Azure サブスクリプションに接続すると、利用上限を管理することもできます。

- 「[{% data variables.product.prodname_registry %} の利用上限を管理する](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)」
- 「[{% data variables.product.prodname_actions %} の利用上限を管理する](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)」
- 「[{% data variables.product.prodname_github_codespaces %} の利用上限を管理する](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)」

## Azure サブスクリプションを Enterprise アカウントに接続する

Azure サブスクリプションに接続するには、サブスクリプションに対するオーナーのアクセス許可が必要です。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %} {% data reusables.enterprise-accounts.payment-information-tab %}
1. [支払い情報] で、 **[Azure サブスクリプションを追加する]** をクリックします。
1. 画面の指示に従って Microsoft アカウントにサインインします。
1. [Permissions requested] という画面表示を確認します。 条項に同意したら、 **[同意する]** をクリックします。
1. [Select a subscription] で、Enterprise に接続する Azure サブスクリプション ID を選択します。

   {% note %}

   **注:** {% data variables.product.company_short %} のサブスクリプション権限検証を実行すると、利用可能なサブスクリプションのリストを表示するための読み取り専用アクセスがリクエストされます。 Azureサブスクリプションを選択するには、サブスクリプションに対するオーナー権限を持っていなければなりません。 デフォルトのテナントが適切な権限を持っていない場合は、異なるテナントIDを指定しなければならないことがあります。 詳細については、Microsoft Docs の「[Microsoft ID プラットフォームと OAuth 2.0 認証コード フロー](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code)」を参照してください。

   {% endnote %}
1. **[接続]** をクリックします。

## Enterprise アカウントから Azure サブスクリプションを切断する

Azure サブスクリプションを Enterprise アカウントから切断すると、プランに含まれている金額以上の使用量を利用できなくなります。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %} {% data reusables.enterprise-accounts.payment-information-tab %}
1. [Azure サブスクリプション] で、切断するサブスクリプション ID の道側にある **{% octicon "trash" aria-label="The trash icon" %}** をクリックします。
1. プロンプトを確認したら、 **[削除]** をクリックします。
