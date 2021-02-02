---
title: 環境
intro: 保護ルールとシークレットを持つ環境を設定できます。 ワークフローのジョブは、環境を参照して、環境の保護ルールとシークレットを利用できます。
product: '{% data reusables.gated-features.environments %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
---

{% data reusables.actions.environments-beta %}

### 環境について

保護ルールとシークレットを持つ環境を設定できます。 ワークフローのジョブが環境を参照すると、その環境の保護ルールをすべてパスするまではジョブは開始されません。 すべての環境の保護ルールをパスするまで、ジョブは環境で定義されているシークレットにアクセスできません。

{% if currentVersion == "free-pro-team@latest" %}
環境の保護ルールと環境のシークレットは、パブリックリポジトリでのみ利用できます。 リポジトリをパブリックからプライベートに変換すると、設定された保護ルールや環境のシークレットは無視されるようになり、環境は設定できなくなります。 リポジトリをパブリックに変換して戻せば、以前に設定されていた保護ルールや環境のシークレットにアクセスできるようになります。
{% endif %}

#### 環境の保護ルール

環境の保護ルールは、その環境を参照しているジョブが進行する前に特定の条件をパスすることを要求します。 環境の保護ルールを使って、手動の承認を必須にしたり、ジョブを遅延させたりできます。

##### 必須のレビュー担当者

必須のレビュー担当者を使って、特定の人もしくはTeamがその環境を参照するワークフローのジョブを承認しなければならないようにすることができます。 最大で6人のユーザもしくはTeamをレビュー担当者とすることができます。 レビュー担当者は、少なくともそのリポジトリの読み取りアクセス権を持っていなければなりません。 ジョブが進行するため承認が必要なレビュー担当者は1人だけです。

必須のレビュー担当者を持つ環境を参照しているジョブのレビューに関する詳しい情報については「[デプロイメントのレビュー](/actions/managing-workflow-runs/reviewing-deployments)」を参照してください。

##### 待機タイマー

ジョブが最初にトリガーされた後、特定の時間ジョブを遅延させるために、待機タイマーを使ってください。 時間（分）は、0から43,200（30日）の間の整数でなければなりません。

#### 環境のシークレット

環境に保存されたシークレットは、その環境を参照するワークフロージョブからのみ利用できます。 環境が承認を必要とするなら、ジョブは必須のレビュー担当者の一人が承認するまで環境のシークレットにアクセスできません。 シークレットに関する詳しい情報については「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」を参照してください。

### 環境の作成

{% data reusables.github-actions.permissions-statement-environment %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-environment %}
1. **New environment（新しい環境）**をクリックしてください。
1. 環境の名前を入力し、**Configure environment（環境を設定）**をクリックしてください。 環境名では、大文字と小文字は区別されません。 環境名は255文字を超えてはならず、リポジトリ内でユニークでなければなりません。
1. 環境保護ルールあるいは環境のシークレットを設定してください。

存在しない環境を参照するワークフローを実行すると、参照された名前を持つ環境が作成されます。 新しく作成される環境には、保護ルールやシークレットは設定されていません。 リポジトリのワークフローを編集できる人は、ワークフローファイルを通じて環境を作成できますが、その環境を設定できるのはリポジトリ管理者だけです。

### 環境の参照

ワークフロー中の各ジョブは、1つの環境を参照できます。 その環境を参照するジョブがランナーに送信される前に、その環境に設定された保護ルールはパスしなければなりません。 ジョブがランナーに送信されると、ジョブは環境のシークレットにアクセスできます。

ワークフローで環境を参照するための構文に関する詳しい情報については「[GitHub Actionsのワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idenvironment)」を参照してください。 必須のレビュー担当者を持つ環境を参照しているジョブのレビューに関する詳しい情報については「[デプロイメントのレビュー](/actions/managing-workflow-runs/reviewing-deployments)」を参照してください。

ワークフローが環境を参照する場合、その環境はリポジトリのデプロイメントに現れます。 現在及び以前のデプロイメントの表示に関する詳細については「[デプロイメント履歴の表示](/developers/overview/viewing-deployment-history)」を参照してください。

### 環境の削除

{% data reusables.github-actions.permissions-statement-environment %}

環境を削除すると、その環境に関連づけられたすべてのシークレットと保護ルールが削除されます。 削除された環境の保護ルールのために待機していたジョブは、自動的に失敗します。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-environment %}
1. 削除したい環境の隣の{% octicon "trashcan" aria-label="The trashcan icon" %}をクリックしてください。
2. **I understand, delete this environment（分かりました、この環境を削除してください）**をクリックしてください。
