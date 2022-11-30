---
title: 個人アカウントでアプリケーションをインストールする
intro: '{% data variables.product.prodname_marketplace %} から、個人アカウントで使うアプリケーションをインストールできます。'
redirect_from:
  - /articles/installing-an-app-in-your-personal-account
  - /github/customizing-your-github-workflow/installing-an-app-in-your-personal-account
  - /github/customizing-your-github-workflow/purchasing-and-installing-apps-in-github-marketplace/installing-an-app-in-your-personal-account
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Install app personal account
ms.openlocfilehash: c400db97a6d2e4533d373b8bfadca13e5b6f48f1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880574'
---
{% data reusables.marketplace.marketplace-apps-only %}

有料プランを使用している場合は、個人アカウントのこれまでの支払い方法を使って、現在の請求日にアプリケーション プランの料金を支払います。

{% data reusables.marketplace.free-trials %}

## 個人アカウントで {% data variables.product.prodname_github_app %} をインストールする

{% data reusables.marketplace.visit-marketplace %} {% data reusables.marketplace.browse-to-app %} {% data reusables.marketplace.choose-plan %} {% data reusables.marketplace.install-buy %} {% data reusables.marketplace.confirm-install-account-personal %} {% data reusables.marketplace.add-payment-method-personal %} {% data reusables.marketplace.complete-order-begin-installation %}
8. すべてのリポジトリへのアクセスを許可するか、特定のリポジトリへのアクセスのみを許可するかに応じて、 **[すべてのリポジトリ]** または **[選択したリポジトリのみ]** を選びます。
  ![アプリをすべてのリポジトリまたは特定のリポジトリのどちらにインストールするかを指定するオプションのラジオ ボタン](/assets/images/help/marketplace/marketplace-choose-repo-install-option.png) {% data reusables.marketplace.select-installation-repos %} {% data reusables.marketplace.review-app-perms-install %}

## 個人アカウントで {% data variables.product.prodname_oauth_app %}をインストールする

{% data reusables.saml.saml-session-oauth %}

{% data reusables.marketplace.visit-marketplace %} {% data reusables.marketplace.browse-to-app %} {% data reusables.marketplace.choose-plan %} {% data reusables.marketplace.install-buy %} {% data reusables.marketplace.confirm-install-account-personal %} {% data reusables.marketplace.add-payment-method-personal %} {% data reusables.marketplace.complete-order-begin-installation %}
8. 個人用アカウントおよびデータに対するアプリのアクセスについての情報を確認し、 **[アプリケーションの承認]** をクリックします。

## 参考資料

- 「[個人用アカウントの支払い方法を更新する](/articles/updating-your-personal-account-s-payment-method)」
- 「[Organization でアプリケーションをインストールする](/articles/installing-an-app-in-your-organization)」
