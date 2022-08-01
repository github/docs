---
title: Using environments for deployment
shortTitle: Use environments for deployment
intro: 保護ルールとシークレットを持つ環境を設定できます。 A workflow job that references an environment must follow any protection rules for the environment before running or accessing the environment's secrets.
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
---


## 環境について

環境は、`production`、`staging`、`development`のような一般的なターゲットを記述するために使われます。 {% data variables.product.prodname_actions %}ワークフローが環境にデプロイする場合、その環境はリポジトリのメインページに表示されます。 For more information about viewing deployments to environments, see "[Viewing deployment history](/developers/overview/viewing-deployment-history)."

保護ルールとシークレットを持つ環境を設定できます。 ワークフローのジョブが環境を参照すると、その環境の保護ルールをすべてパスするまではジョブは開始されません。 すべての環境の保護ルールをパスするまで、ジョブは環境で定義されているシークレットにアクセスできません。

{% ifversion fpt %}
{% note %}

**Note:** You can only configure environments for public repositories. リポジトリをパブリックからプライベートに変換すると、設定された保護ルールや環境のシークレットは無視されるようになり、環境は設定できなくなります。 リポジトリをパブリックに変換して戻せば、以前に設定されていた保護ルールや環境のシークレットにアクセスできるようになります。

Organizations that use {% data variables.product.prodname_ghe_cloud %} can configure environments for private repositories. 詳しい情報については[{% data variables.product.prodname_ghe_cloud %}のドキュメンテーション](/enterprise-cloud@latest/actions/deployment/targeting-different-environments/using-environments-for-deployment)を参照してください。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

## 環境の保護ルール

環境の保護ルールは、その環境を参照しているジョブが進行する前に特定の条件をパスすることを要求します。 環境の保護ルールでは、手動による承認を要求したり、ジョブを遅延させたり、環境を特定のブランチに制限したりすることができます。

### 必須のレビュー担当者

必須のレビュー担当者を使って、特定の人もしくはTeamがその環境を参照するワークフローのジョブを承認しなければならないようにすることができます。 最大で6人のユーザもしくはTeamをレビュー担当者とすることができます。 レビュー担当者は、少なくともそのリポジトリの読み取りアクセス権を持っていなければなりません。 ジョブが進行するため承認が必要なレビュー担当者は1人だけです。

必須のレビュー担当者を持つ環境を参照しているジョブのレビューに関する詳しい情報については「[デプロイメントのレビュー](/actions/managing-workflow-runs/reviewing-deployments)」を参照してください。

### 待機タイマー

ジョブが最初にトリガーされた後、特定の時間ジョブを遅延させるために、待機タイマーを使ってください。 時間（分）は、0から43,200（30日）の間の整数でなければなりません。

### デプロイメントブランチ

デプロイメントブランチを使用して、環境にデプロイできるブランチを制限します。 環境のデプロイメントブランチのオプションは以下のとおりです。

* **すべてのブランチ**: リポジトリ内のすべてのブランチを環境にデプロイできます。
* **保護されたブランチ**: 環境にデプロイできるのはブランチ保護ルールが有効になっているブランチのみです。 リポジトリ内のどのブランチにもブランチ保護ルールが定義されていない場合は、すべてのブランチをデプロイできます。 ブランチ保護ルールの詳細については、「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches)」を参照してください。
* **選択したブランチ**: 環境にデプロイできるのは指定した名前パターンに一致するブランチのみです。

  たとえば、デプロイメントブランチルールとして `releases/*` を指定した場合、名前が `releases/` で始まるブランチのみが環境にデプロイできます。 （ワイルドカード文字は `/` と一致しません。 `release/` で始まり、追加の単一スラッシュを含むブランチを一致させるには、`release/*/*` を使用します。） `main` をデプロイメントブランチルールとして追加すると、`main` という名前のブランチも環境にデプロイできます。 デプロイメントブランチの構文オプションの詳細については、[Ruby File.fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch) のドキュメントを参照してください。
## 環境のシークレット

環境に保存されたシークレットは、その環境を参照するワークフロージョブからのみ利用できます。 環境が承認を必要とするなら、ジョブは必須のレビュー担当者の一人が承認するまで環境のシークレットにアクセスできません。 シークレットに関する詳しい情報については「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」を参照してください。

{% note %}

**注釈:** セルフホストランナーで実行されるワークフローは、環境を使用している場合でも、分離されたコンテナでは実行されません。 Environment secrets should be treated with the same level of security as repository and organization secrets. 詳しい情報については「[GitHub Actionsのためのセキュリティ強化](/actions/learn-github-actions/security-hardening-for-github-actions#hardening-for-self-hosted-runners)」を参照してください。

{% endnote %}

## 環境の作成

{% data reusables.actions.permissions-statement-environment %}

{% ifversion fpt or ghec %}
{% note %}

**Note:** To create an environment in a private repository, your organization must use {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
{% data reusables.actions.new-environment %}
{% data reusables.actions.name-environment %}
1. Optionally, specify people or teams that must approve workflow jobs that use this environment.
   1. Select **Required reviewers**.
   1. Enter up to 6 people or teams. ジョブが進行するため承認が必要なレビュー担当者は1人だけです。
   1. Click **Save protection rules**.
2. Optionally, specify the amount of time to wait before allowing workflow jobs that use this environment to proceed.
   1. Select **Wait timer**.
   1. Enter the number of minutes to wait.
   1. Click **Save protection rules**.
3. Optionally, specify what branches can deploy to this environment. For more information about the possible values, see "[Deployment branches](#deployment-branches)."
   1. Select the desired option in the **Deployment branches** dropdown.
   1. If you chose **Selected branches**, enter the branch name patterns that you want to allow.
4. Optionally, add environment secrets. These secrets are only available to workflow jobs that use the environment. Additionally, workflow jobs that use this environment can only access these secrets after any configured rules (for example, required reviewers) pass. シークレットに関する詳しい情報については「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」を参照してください。
   1. Under **Environment secrets**, click **Add Secret**.
   1. Enter the secret name.
   1. Enter the secret value.
   1. [**Add secret（シークレットの追加）**] をクリックします。

REST API を介して環境を作成および設定することもできます。 詳細については、「[環境](/rest/reference/repos#environments)」および「[シークレット](/rest/reference/actions#secrets)」を参照してください。

存在しない環境を参照するワークフローを実行すると、参照された名前を持つ環境が作成されます。 新しく作成される環境には、保護ルールやシークレットは設定されていません。 リポジトリのワークフローを編集できる人は、ワークフローファイルを通じて環境を作成できますが、その環境を設定できるのはリポジトリ管理者だけです。

## Using an environment

ワークフロー内の各ジョブは、1つの環境を参照できます。 この環境を参照するとジョブがランナーに送信される前に、環境に設定された保護ルールをパスしなければなりません。 The job can access the environment's secrets only after the job is sent to a runner.

ワークフローが環境を参照する場合、その環境はリポジトリのデプロイメントに現れます。 現在及び以前のデプロイメントの表示に関する詳細については「[デプロイメント履歴の表示](/developers/overview/viewing-deployment-history)」を参照してください。

{% data reusables.actions.environment-example %}

## 環境の削除

{% data reusables.actions.permissions-statement-environment %}

環境を削除すると、その環境に関連づけられたすべてのシークレットと保護ルールが削除されます。 削除された環境の保護ルールのために待機していたジョブは、自動的に失敗します。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
1. 削除する環境の横にある {% octicon "trash" aria-label="The trash icon" %} をクリックします。
2. **I understand, delete this environment（分かりました、この環境を削除してください）**をクリックしてください。

REST API を介して環境を削除することもできます。 詳しい情報については、「[環境](/rest/reference/repos#environments)」を参照してください。

## How environments relate to deployments

{% data reusables.actions.environment-deployment-event %}

You can access these objects through the REST API or GraphQL API. You can also subscribe to these webhook events. For more information, see "[Repositories](/rest/reference/repos#deployments)" (REST API), "[Objects](/graphql/reference/objects#deployment)" (GraphQL API), or "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)."

## 次のステップ

{% data variables.product.prodname_actions %} provides several features for managing your deployments. For more information, see "[Deploying with GitHub Actions](/actions/deployment/deploying-with-github-actions)."
