---
title: アクション
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /v3/actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} API では、REST API を使用して {% data variables.product.prodname_actions %} を管理できます。 {% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_app %} には、各エンドポイントで指定されている権限が必要です。 詳しい情報については、「[{% data variables.product.prodname_actions %} のドキュメント](/actions)」を参照してください。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## 成果物

成果物 API では、ワークフローの成果物に関する情報をダウンロード、削除、および取得できます。 {% data reusables.actions.about-artifacts %} 詳しい情報については、「[成果物を利用してワークフローのデータを永続化する](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

{% data reusables.actions.actions-authentication %} {% data reusables.actions.actions-app-actions-permissions-api %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'artifacts' %}{% include rest_operation %}{% endif %}
{% endfor %}

## シークレット

シークレット API では、暗号化されたシークレットに関する情報を作成、更新、削除、および取得できます。 {% data reusables.actions.about-secrets %} 詳しい情報については、「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_app %} には、この API を使用するための `secrets` 権限が必要です。 認証されたユーザは、シークレットを作成、更新、または読み取るために、リポジトリへのコラボレータアクセス権を持っている必要があります。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'secrets' %}{% include rest_operation %}{% endif %}
{% endfor %}

## セルフホストランナー

セルフホストランナー API では、自分のホストランナーの登録、表示、削除ができます。 {% data reusables.actions.about-self-hosted-runners %} 詳しい情報については「[自分のランナーのホスト](/actions/hosting-your-own-runners)」を参照してください。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_app %} には、リポジトリの `administration` 権限または Organization の `organization_self_hosted_runners` 権限が必要です。 認証されたユーザがこの API を使用するには、リポジトリまたは Organization への管理者アクセス権が必要です。

Enterprise のセルフホストランナーを管理できます。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} Enterprise 管理](/rest/reference/enterprise-admin#actions)」REST API を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'self-hosted-runners' %}{% include rest_operation %}{% endif %}
{% endfor %}

## セルフホストランナーグループ

セルフホストランナーグループ API を使用すると、セルフホストランナーのグループを管理できます。 詳しい情報については、「[グループを使用したセルフホストランナーへのアクセスを管理する](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)」を参照してください。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_app %} には、リポジトリの `administration` 権限または Organization の `organization_self_hosted_runners` 権限が必要です。 認証されたユーザがこの API を使用するには、リポジトリまたは Organization への管理者アクセス権が必要です。

Enterprise のセルフホストランナーグループを管理できます。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} Enterprise 管理](/rest/reference/enterprise-admin#actions)」REST API を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'self-hosted-runner-groups' %}{% include rest_operation %}{% endif %}
{% endfor %}

## ワークフロー

ワークフロー API を使用すると、リポジトリのワークフローを表示できます。 {% data reusables.actions.about-workflows %}詳しい情報については、「[GitHub Actions でワークフローを自動化する](/actions/automating-your-workflow-with-github-actions)」を参照してください。

{% data reusables.actions.actions-authentication %} {% data reusables.actions.actions-app-actions-permissions-api %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'workflows' %}{% include rest_operation %}{% endif %}
{% endfor %}

## ワークフロージョブ

ワークフロージョブ API では、ログとワークフロージョブを表示できます。 {% data reusables.actions.about-workflow-jobs %}詳しい情報については、「[GitHub Actions のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)」を参照してください。

{% data reusables.actions.actions-authentication %} {% data reusables.actions.actions-app-actions-permissions-api %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'workflow-jobs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## ワークフロー実行

ワークフロー実行 API では、ワークフロー実行のログを表示、再実行、キャンセル、表示できます。 {% data reusables.actions.about-workflow-runs %}詳しい情報については、「[ワークフロー実行を管理する](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run)」を参照してください。

{% data reusables.actions.actions-authentication %} {% data reusables.actions.actions-app-actions-permissions-api %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'workflow-runs' %}{% include rest_operation %}{% endif %}
{% endfor %}
