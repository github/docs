---
title: Organization でアプリケーションをインストールする
intro: '{% data variables.product.prodname_marketplace %}から、Organization で使うアプリケーションをインストールできます。'
redirect_from:
  - /articles/installing-an-app-in-your-organization
  - /github/customizing-your-github-workflow/installing-an-app-in-your-organization
  - /github/customizing-your-github-workflow/purchasing-and-installing-apps-in-github-marketplace/installing-an-app-in-your-organization
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Install app organization
ms.openlocfilehash: bf64ee38839197262852d07c024c72a0742d0e6e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145119485'
---
{% data reusables.marketplace.marketplace-apps-only %}

{% data reusables.marketplace.marketplace-org-perms %}

有料プランを選択している場合は、Organization のこれまでの支払い方法を使って、現在の請求日にアプリケーション プランの料金を支払います。

{% data reusables.marketplace.free-trials %}

## Organization で {% data variables.product.prodname_github_app %}をインストールする

{% data reusables.marketplace.visit-marketplace %} {% data reusables.marketplace.browse-to-app %} {% data reusables.marketplace.choose-plan %} {% data reusables.marketplace.install-buy %} {% data reusables.marketplace.confirm-install-account-org %} {% data reusables.marketplace.add-payment-method-org %} {% data reusables.marketplace.complete-order-begin-installation %}
8. アプリでリポジトリにアクセスする必要がある場合は、すべてのリポジトリまたは特定のリポジトリのどちらへのアクセスをアプリに許可するかを決めた後、 **[All repositories]\(すべてのリポジトリ\)** または **[Only select repositories]\(選択したリポジトリのみ\)** を選びます。
  ![アプリをすべてのリポジトリまたは特定のリポジトリのどちらにインストールするかを指定するオプションのラジオ ボタン](/assets/images/help/marketplace/marketplace-choose-repo-install-option.png) {% data reusables.marketplace.select-installation-repos %} {% data reusables.marketplace.review-app-perms-install %}

## Organization で {% data variables.product.prodname_oauth_app %} をインストールする

{% data reusables.saml.saml-session-oauth %}

{% data reusables.marketplace.visit-marketplace %} {% data reusables.marketplace.browse-to-app %} {% data reusables.marketplace.choose-plan %} {% data reusables.marketplace.install-buy %} {% data reusables.marketplace.confirm-install-account-org %} {% data reusables.marketplace.add-payment-method-org %} {% data reusables.marketplace.complete-order-begin-installation %}
8. 個人アカウント、Organization、データに対するアプリのアクセスについての情報を確認し、 **[Authorize application]\(アプリケーションを承認する\)** をクリックします。

## 参考資料

- [Organization の支払い方法を更新する](/articles/updating-your-organization-s-payment-method)
- [個人アカウントでアプリケーションをインストールする](/articles/installing-an-app-in-your-personal-account)
