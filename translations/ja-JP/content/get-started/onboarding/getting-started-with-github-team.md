---
title: GitHub Team の概要
intro: '{% data variables.product.prodname_team %} グループのユーザーは、組織アカウントの多数のプロジェクト間で同時に共同作業を行うことができます。'
versions:
  fpt: '*'
ms.openlocfilehash: 46b5376b72ce30f7c526f693f2adb9253853cf1d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139161'
---
このガイドでは、{% data variables.product.prodname_team %} アカウントを Organization 所有者として設定、構成、管理する方法について説明します。

## パート 1: {% data variables.product.product_location %} でのアカウントの構成
{% data variables.product.prodname_team %} から始める最初の手順として、個人アカウントを作成するか、{% data variables.product.prodname_dotcom %} の既存のアカウントにログインし、Organization を作成し、課金を設定する必要があります。

### 1. Organization について
Organization は、企業とオープンソース プロジェクトが多数のプロジェクトにわたって一度にコラボレーションできる共有アカウントです。 オーナーと管理者は、Organization のデータとプロジェクトへのメンバー アクセス権を高度なセキュリティ機能と管理機能を使用して管理できます。 Organization の機能の詳細については、「[Organization について](/organizations/collaborating-with-groups-in-organizations/about-organizations#terms-of-service-and-data-protection-for-organizations)」を参照してください。

### 2. Organization の作成および {% data variables.product.prodname_team %} へのサインアップ
Organization を作成する前に、個人アカウントを作成するか、{% data variables.product.product_location %} の既存のアカウントにログインする必要があります。 詳細については、「[新しい {% data variables.product.prodname_dotcom %} アカウントにサインアップする](/get-started/signing-up-for-github/signing-up-for-a-new-github-account)」を参照してください。

個人アカウントが設定されたら、Organization を作成し、プランを選択できます。 ここで、Organization の {% data variables.product.prodname_team %} サブスクリプションを選択できます。 詳細については、「[新しい Organization をゼロから作成](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)」を参照してください。

### 3. Organization の課金の管理
個人アカウントと Organization ごとに、課金設定、支払い方法、有料機能と製品を個別に管理する必要があります。 設定のコンテキスト スイッチャーを使用して、異なるアカウントの設定を切り替えることができます。 詳細については、「[様々なアカウントの設定の切り替え](/billing/managing-your-github-billing-settings/about-billing-on-github#switching-between-settings-for-your-different-accounts)」を参照してください。

Organization の課金設定ページでは、支払い方法、請求サイクルと請求メールなどの設定を管理したり、サブスクリプション、請求日、支払履歴などの情報を表示したりできます。 また、ストレージと GitHub Actions 議事録を表示およびアップグレードすることもできます。 課金設定の管理の詳細については、「[{% data variables.product.prodname_dotcom %} の支払い設定を管理する](/billing/managing-your-github-billing-settings)」を参照してください。

Organization の課金設定に対するアクセスや変更を行うことができるのは、''*所有者*'' または ''*課金マネージャー*'' ロールを持つ Organization メンバーだけです。 課金マネージャーとは、Organization の課金設定を管理し、Organization のサブスクリプションで有料ライセンスを使用しないユーザーのことです。 Organization への課金マネージャーの追加について詳しくは、「[Organization への支払いマネージャーの追加](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)」を参照してください。


## パート 2: メンバーの追加とチームの設定
Organization を作成した後、メンバーを招待し、アクセス許可とロールを設定できます。 また、さまざまなレベルのチームを作成し、Organization のリポジトリ、プロジェクト ボード、アプリに対してカスタマイズされたレベルのアクセス許可を設定することもできます。

### 1. Organization のメンバーの管理
{% data reusables.getting-started.managing-org-members %}

### 2. Organization の権限とロール
{% data reusables.getting-started.org-permissions-and-roles %}

### 3. Team の概要と作成
{% data reusables.getting-started.about-and-creating-teams %}
### 4. チーム設定の管理
{% data reusables.getting-started.managing-team-settings %}

### 5. リポジトリ、プロジェクト ボード、アプリへのアクセス権をユーザーと Team に付与する
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}
## パート 3: Organization のセキュリティの管理
Organization メンバーに対して 2 要素認証を推奨または要求し、セキュリティ機能を構成し、Organization の監査ログと統合を確認することで、Organization のセキュリティを強化できます。

### 1. 2 要素認証の要求
{% data reusables.getting-started.requiring-2fa %}

### 2. Organization のセキュリティ機能の構成
{% data reusables.getting-started.configuring-security-features %}

### 3. Organization の監査ログと統合の確認
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}

## パート 4: Organization レベルのポリシーの設定
### 1. Organization のポリシーの管理
{% data reusables.getting-started.managing-org-policies %}
### 2. リポジトリの変更の管理
{% data reusables.getting-started.managing-repo-changes %}
### 3. Organization レベルのコミュニティ健全性ファイルとモデレーション ツールの使用
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}
## パート 5: {% data variables.product.product_name %} での作業のカスタマイズと自動化

{% data reusables.getting-started.customizing-and-automating %}
### 1. {% data variables.product.prodname_marketplace %} の使用
{% data reusables.getting-started.marketplace %}
### 2. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API の使用
{% data reusables.getting-started.api %}

### 3. {% data variables.product.prodname_actions %} のビルド
{% data reusables.getting-started.actions %}

### 4. {% data variables.product.prodname_registry %} の公開と管理 
{% data reusables.getting-started.packages %}

## パート 6: {% data variables.product.prodname_dotcom %} のコミュニティへの参加
{% data reusables.getting-started.participating-in-community %}
### 1. オープンソース プロジェクトへの貢献
{% data reusables.getting-started.open-source-projects %}

### 2. {% data variables.product.prodname_gcf %} とのやり取り
{% data reusables.support.ask-and-answer-forum %}

### 3. {% data variables.product.prodname_docs %} で {% data variables.product.prodname_team %} について読む
{% data variables.product.prodname_team %} で使用できる機能が掲載されたドキュメントを読むことができます。 詳細については、「[{% data variables.product.prodname_docs %} のバージョンについて](/get-started/learning-about-github/about-versions-of-github-docs)」を参照してください。

### 4. {% data variables.product.prodname_learning %} を使用した学習
{% data reusables.getting-started.learning %}

### 5. オープンソース コミュニティのサポート
{% data reusables.getting-started.sponsors %}

### 6. {% data variables.contact.github_support %} への連絡
{% data reusables.getting-started.contact-support %}
## 参考資料

- "[GitHub アカウントの概要](/get-started/onboarding/getting-started-with-your-github-account)"
