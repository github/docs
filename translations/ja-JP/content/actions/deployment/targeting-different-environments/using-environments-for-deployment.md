---
title: デプロイに環境を使用する
shortTitle: Use environments for deployment
intro: 保護ルールとシークレットを持つ環境を設定できます。 環境を参照するワークフロー ジョブは、環境のシークレットを実行またはそれにアクセスする前に、環境の保護ルールに従う必要があります。
product: '{% data reusables.gated-features.environments %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/reference/environments
  - /actions/deployment/environments
  - /actions/deployment/using-environments-for-deployment
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 21163a759cfd7eab3b197aeb4bb9283e1ccb90a2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147572304'
---
## 環境について

環境は、一般的なデプロイ ターゲットを記述するために使用されます (例: `production`、`staging`、または `development`)。 {% data variables.product.prodname_actions %} ワークフローが環境にデプロイされると、その環境がリポジトリのメイン ページに表示されます。 環境へのデプロイの表示の詳細については、「[デプロイ履歴の表示](/developers/overview/viewing-deployment-history)」を参照してください。

保護ルールとシークレットを持つ環境を設定できます。 ワークフローのジョブが環境を参照すると、その環境の保護ルールをすべてパスするまではジョブは開始されません。 すべての環境の保護ルールをパスするまで、ジョブは環境で定義されているシークレットにアクセスできません。

{% ifversion fpt %} {% note %}

**メモ:** パブリック リポジトリの環境のみを構成できます。 リポジトリをパブリックからプライベートに変換すると、設定された保護ルールや環境のシークレットは無視されるようになり、環境は設定できなくなります。 リポジトリをパブリックに変換して戻せば、以前に設定されていた保護ルールや環境のシークレットにアクセスできるようになります。

{% data variables.product.prodname_team %} を使用する Organization と {% data variables.product.prodname_pro %} を使用するユーザーは、プライベート リポジトリの環境を構成できます。 詳細については、「[{% data variables.product.prodname_dotcom %} の製品](/get-started/learning-about-github/githubs-products)」を参照してください。

{% endnote %} {% endif %}

## 環境保護ルール

環境の保護ルールは、その環境を参照しているジョブが進行する前に特定の条件をパスすることを要求します。 環境の保護ルールでは、手動による承認を要求したり、ジョブを遅延させたり、環境を特定のブランチに制限したりすることができます。

### 必須のレビュー担当者

必須のレビュー担当者を使って、特定の人もしくはTeamがその環境を参照するワークフローのジョブを承認しなければならないようにすることができます。 最大で6人のユーザもしくはTeamをレビュー担当者とすることができます。 レビュー担当者は、少なくともそのリポジトリの読み取りアクセス権を持っていなければなりません。 ジョブが進行するため承認が必要なレビュー担当者は1人だけです。

レビュー担当者を必要とする環境を参照するジョブの確認方法の詳細については、「[デプロイのレビュー](/actions/managing-workflow-runs/reviewing-deployments)」を参照してください。

### 待機タイマー

ジョブが最初にトリガーされた後、特定の時間ジョブを遅延させるために、待機タイマーを使ってください。 時間（分）は、0から43,200（30日）の間の整数でなければなりません。

### デプロイメントブランチ

デプロイメントブランチを使用して、環境にデプロイできるブランチを制限します。 環境のデプロイメントブランチのオプションは以下のとおりです。

* **すべてのブランチ**: リポジトリ内のすべてのブランチを環境にデプロイできます。
* **保護されたブランチ**: 環境にデプロイできるのはブランチ保護ルールが有効になっているブランチのみです。 リポジトリ内のどのブランチにもブランチ保護ルールが定義されていない場合は、すべてのブランチをデプロイできます。 ブランチ保護ルールの詳細については、「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches)」を参照してください。
* **選択したブランチ**: 環境にデプロイできるのは指定した名前パターンに一致するブランチのみです。

  たとえば、デプロイ ブランチ ルールとして `releases/*` を指定した場合、名前が `releases/` で始まるブランチのみが環境にデプロイできます。 (ワイルドカード文字は `/` と一致しません。 `release/` で始まり、追加の単一スラッシュを含むブランチを一致させるには、`release/*/*` を使用します)。`main` をデプロイ ブランチ ルールとして追加すると、`main` という名前のブランチも環境にデプロイできます。 デプロイ ブランチの構文オプションの詳細については、[Ruby File.fnmatch のドキュメント](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch)を参照してください。
## 環境シークレット

環境に保存されたシークレットは、その環境を参照するワークフロージョブからのみ利用できます。 環境が承認を必要とするなら、ジョブは必須のレビュー担当者の一人が承認するまで環境のシークレットにアクセスできません。 シークレットの詳細については、「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」を参照してください。

{% note %}

**注:** セルフホスト ランナーで実行されるワークフローは、環境を使用している場合でも、分離されたコンテナーでは実行されません。 環境シークレットは、リポジトリおよび Organization シークレットと同じレベルのセキュリティで処理する必要があります。 詳細については、「[GitHub Actions のセキュリティ強化](/actions/learn-github-actions/security-hardening-for-github-actions#hardening-for-self-hosted-runners)」を参照してください。

{% endnote %}

## 環境の作成

{% data reusables.actions.permissions-statement-environment %}

{% ifversion fpt or ghec %} {% note %}

**注:** プライベート リポジトリで環境を作成できるのは、{% data variables.product.prodname_team %} を使用する Organization と {% data variables.product.prodname_pro %} を使用するユーザーです。

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %} {% data reusables.actions.new-environment %} {% data reusables.actions.name-environment %}
1. 必要に応じて、この環境を使用するワークフロー ジョブを承認する必要があるユーザーまたはチームを指定します。
   1. **[必要なレビュー担当者]** を選択します。
   1. 最大 6 人のユーザーまたはチームを入力します。 ジョブが進行するため承認が必要なレビュー担当者は1人だけです。
   1. **[保護ルールの保存]** をクリックします。
2. 必要に応じて、この環境を使用するワークフロー ジョブの続行を許可するまでの待機時間を指定します。
   1. **[待機タイマー]** を選択します。
   1. 待機する分数です。
   1. **[保護ルールの保存]** をクリックします。
3. 必要に応じて、この環境にデプロイできるブランチを指定します。 使用可能な値の詳細については、「[デプロイ ブランチ](#deployment-branches)」を参照してください。
   1. **[デプロイ ブランチ]** ドロップダウンで目的のオプションを選択します。
   1. **[選択したブランチ]** を選択した場合は、許可するブランチ名パターンを入力します。
4. 必要に応じて、環境シークレットを追加します。 これらのシークレットは、環境を使用するワークフロー ジョブでのみ使用できます。 さらに、この環境を使用するワークフロー ジョブで、これらのシークレットにアクセスできるのは、構成済みのルール (必須のレビュー担当者など) が合格した後に限られています。 シークレットの詳細については、「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」を参照してください。
   1. **[環境シークレット]** で、 **[シークレットの追加]** をクリックします。
   1. シークレット名を入力します。
   1. シークレット値を入力します。
   1. **[シークレットの追加]** をクリックします。

REST API を介して環境を作成および設定することもできます。 詳しくは、「[デプロイ環境](/rest/deployments/environments)」、「[GitHub Actions のシークレット](/rest/actions/secrets)」、「[デプロイ ブランチ ポリシー](/rest/deployments/branch-policies)」を参照してください。

存在しない環境を参照するワークフローを実行すると、参照された名前を持つ環境が作成されます。 新しく作成される環境には、保護ルールやシークレットは設定されていません。 リポジトリのワークフローを編集できる人は、ワークフローファイルを通じて環境を作成できますが、その環境を設定できるのはリポジトリ管理者だけです。

## 環境の使用

ワークフロー中の各ジョブは、1つの環境を参照できます。 その環境を参照するジョブがランナーに送信される前に、その環境に設定された保護ルールはパスしなければなりません。 ジョブがランナーに送信された後でのみ、ジョブは環境のシークレットにアクセスできます。

ワークフローが環境を参照する場合、その環境はリポジトリのデプロイメントに現れます。 現在のデプロイと以前のもの表示方法の詳細については、「[デプロイ履歴の表示](/developers/overview/viewing-deployment-history)」を参照してください。

{% data reusables.actions.environment-example %}

## 環境の削除

{% data reusables.actions.permissions-statement-environment %}

環境を削除すると、その環境に関連づけられたすべてのシークレットと保護ルールが削除されます。 削除された環境の保護ルールのために待機していたジョブは、自動的に失敗します。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %}
1. 削除する環境の横にある {% octicon "trash" aria-label="The trash icon" %} をクリックします。
2. **[わかりました、この環境を削除してください]** をクリックします。

REST API を介して環境を削除することもできます。 詳しくは、[環境](/rest/reference/repos#environments)に関するページを参照してください。

## 環境とデプロイの関係

{% data reusables.actions.environment-deployment-event %}

これらのオブジェクトには、REST API または GraphQL API を介してアクセスできます。 これらの Webhook イベントをサブスクライブすることもできます。 詳細については、「[リポジトリ](/rest/reference/repos#deployments)」 (REST API)、「[オブジェクト](/graphql/reference/objects#deployment)」 (GraphQL API)、または「[webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)」を参照してください。

## 次の手順

{% data variables.product.prodname_actions %} には、デプロイを管理するためのいくつかの機能が用意されています。 詳細については、「[GitHub Actions を使用したデプロイ](/actions/deployment/deploying-with-github-actions)」を参照してください。
