---
title: GitHub AE の概要
intro: '{% data variables.location.product_location %} の {% data variables.product.product_name %} の設定と構成を開始します。'
versions:
  ghae: '*'
ms.openlocfilehash: 957a922a2493abd8f625cdb9e9d6650283820222
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180062'
---
このガイドでは、Enterprise 所有者として {% data variables.product.product_name %} 上で {% data variables.location.product_location %} の設定を設定、構成、および管理を行う方法について説明します。 {% data variables.product.product_name %} について詳しくは、「[{% data variables.product.prodname_ghe_managed %} について](/admin/overview/about-github-ae)」をご覧ください。

## パート 1: {% data variables.product.product_name %} の設定
{% data variables.product.product_name %} の使用を開始するために、Enterprise アカウントを作成し、{% data variables.product.product_name %} を初期化し、IP 許可リストを構成し、ユーザー認証とプロビジョニングを構成し、{% data variables.location.product_location %} の課金を管理できます。

### 1. {% data variables.product.product_name %} Enterprise アカウントの作成
まず、{% data variables.product.product_name %} を購入する必要があります。 詳細については、[{% data variables.product.prodname_dotcom %} の営業チーム](https://enterprise.github.com/contact)にお問い合わせください。

{% data reusables.github-ae.initialize-enterprise %}

### 2. {% data variables.product.product_name %} の初期化
{% data variables.product.company_short %} により {% data variables.product.product_name %} の {% data variables.location.product_location %} の所有者アカウントが作成された後、サインインして初期化を完了するための電子メールが届きます。 初期化中に、Enterprise 所有者は {% data variables.location.product_location %} に名前を付け、SAML SSO を構成し、{% data variables.location.product_location %} 内のすべての Organization のポリシーを作成し、Enterprise メンバーのサポート連絡先を構成します。 詳細については、「[{% data variables.product.prodname_ghe_managed %} の初期化](/admin/configuration/configuring-your-enterprise/initializing-github-ae)」を参照してください。

### 3. ネットワーク トラフィックの制限
特定の IP アドレスの許可リストを構成し、Enterprise アカウント内の Organization が所有する資産へのアクセスを制限できます。 詳しくは、「[IP 許可リストを使って Enterprise へのネットワーク トラフィックを制限する](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)」をご覧ください。

### 4. {% data variables.location.product_location %} の ID とアクセスの管理
ユーザー認証用の SAML シングル サインオン (SSO) とユーザー プロビジョニング用のクロスドメイン ID 管理システム (SCIM) を使用して、ID プロバイダー (IdP) から {% data variables.product.product_name %} の {% data variables.location.product_location %} へのアクセスを一元的に管理できます。 プロビジョニングを構成したら、IdP からアプリケーションにユーザーを割り当てるか、割り当て解除し、Enterprise 内のユーザー アカウントを作成または無効にすることができます。 詳細については、[Enterprise の ID およびアクセス管理](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)に関するページを参照してください。

### 5. {% data variables.location.product_location %} の課金の管理
{% data variables.product.product_name %} の {% data variables.location.product_location %} のサブスクリプションの所有者は、Azure portal で {% data variables.product.product_name %} の課金を詳しく表示できます。 詳細については、[Enterprise の課金の管理](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)に関するページを参照してください。

## パート 2: Enterprise メンバーの編成と管理
{% data variables.product.product_name %} の Enterprise 所有者は、ユーザー、リポジトリ、チーム、および Organization レベルで設定を管理できます。 {% data variables.location.product_location %} のメンバーの管理、Organization の作成と管理、リポジトリ管理に関するポリシーの設定、チームの作成と管理を行うことができます。

### 1. {% data variables.location.product_location %} のメンバーの管理
{% data reusables.getting-started.managing-enterprise-members %}

### 2. Organization の作成
{% data reusables.getting-started.creating-organizations %}

### 3. Organization へのメンバーの追加
{% data reusables.getting-started.adding-members-to-organizations %}

### 4. チームの作成
{% data reusables.getting-started.creating-teams %}

### 5. Organization とリポジトリのアクセス許可レベルの設定
{% data reusables.getting-started.setting-org-and-repo-permissions %}

### 6. リポジトリ管理ポリシーの適用
{% data reusables.getting-started.enforcing-repo-management-policies %}

## パート 3: 安全なビルド
{% data variables.location.product_location %} のセキュリティを強化するために、{% data variables.location.product_location %} を監視し、Organization のセキュリティと分析機能を構成することができます。

### 1. {% data variables.location.product_location %} の監視
アクティビティ ダッシュボードと監査ログを使用して、{% data variables.location.product_location %} を監視できます。 詳細については、「[Enterprise でアクティビティを監視する](/admin/monitoring-activity-in-your-enterprise)」を参照してください。

### 2. Organization のセキュリティ機能の構成
{% data reusables.getting-started.configuring-security-features %}

## パート 4: {% data variables.location.product_location %} での作業のカスタマイズと自動化
{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API、{% data variables.product.prodname_actions %}、および {% data variables.product.prodname_pages %} を使用して、{% data variables.location.product_location %} 内の Organization での作業をカスタマイズおよび自動化することができます。

### 1. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API の使用
{% data reusables.getting-started.api %}

### 2. {% data variables.product.prodname_actions %} のビルド
{% data reusables.getting-started.actions %}

{% data variables.product.product_name %} の {% data variables.product.prodname_actions %} の有効化と構成の詳細については、「[{% data variables.product.prodname_ghe_managed %} の {% data variables.product.prodname_actions %} の概要](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)」を参照してください。

### 3. {% data variables.product.prodname_pages %} の使用
{% data reusables.getting-started.github-pages-enterprise %}
## パート 5: {% data variables.product.prodname_dotcom %} の学習およびサポート リソースの使用
Enterprise メンバーは、学習リソースを使用して Git と {% data variables.product.prodname_dotcom %} の詳細を学ぶことができます。また、{% data variables.product.prodname_dotcom %} Enterprise サポートを使用して必要なサポートを受けることができます。

### 1. {% data variables.product.prodname_docs %} で {% data variables.product.product_name %} について読む
{% data variables.product.prodname_ghe_managed %} で使用できる機能が掲載されたドキュメントを読むことができます。 詳細については、「[{% data variables.product.prodname_docs %} のバージョンについて](/get-started/learning-about-github/about-versions-of-github-docs)」を参照してください。

### 2. {% data variables.product.prodname_learning %} による学習
{% data reusables.getting-started.learning-enterprise %}

### 3. {% data variables.product.prodname_dotcom %} Enterprise サポートの使用
{% data reusables.getting-started.contact-support-enterprise %}
