---
title: アプリ
redirect_from:
  - /v3/apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

GitHub Apps API を使用すると、GitHub App に関する大まかな情報と、アプリケーションのインストールに関する具体的な情報を取得できます。 GitHub App の詳細については、「[GitHub App として認証する](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)」を参照してださい。

{% data reusables.apps.general-apps-restrictions %}

このページには、GitHub App として認証されている場合にアクセスできるエンドポイントが一覧表示されています。 詳細については、「[GitHub App として認証する](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)」を参照してださい。

GitHub App として認証されると、GitHub Apps API を使用して、GitHub App に関する大まかな情報と、アプリケーションのインストールに関する具体的な情報を取得できます。

GitHub App として認証されている場合、REST API v3 エンドポイントにアクセスできます。 これらのエンドポイントには、「Works with GitHub Apps」という箇条書きを含む「注釈」セクションがあります。 ユーザとして認証されている場合、これらのエンドポイントにアクセスすることもできます。

REST API v3 エンドポイントのサブセットでは、GitHub App のインストールとして認証する必要があります。 これらのエンドポイントの一覧については、[Installations](/rest/reference/apps#installations) を参照してください。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## OAuth アプリケーション API

この API を使用して、OAuth アプリケーションがユーザの {% data variables.product.prodname_dotcom %} アカウントにアクセスする際に使用する OAuth トークンを管理できます。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'oauth-applications' %}{% include rest_operation %}{% endif %}
{% endfor %}

## インストール

Installations API を使用すると、GitHub App のインストールに関する情報を取得して、それらのインストール内でアクションを実行できます。 _インストール_とは、アプリケーションをインストールしたユーザまたは Organization のアカウントを指します。 インストレーションとして認証し、特定のリポジトリへのアクセスを制限する方法については、「[インストレーションとして認証する](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)」を参照してください。

Organization のすべての GitHub App インストレーションを一覧表示するには、「[Organization のアプリケーションインストールの一覧表示](/rest/reference/orgs#list-app-installations-for-an-organization)」を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'installations' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% ifversion fpt %}
## Marketplace

{% data variables.product.prodname_marketplace %} の詳細については、「[GitHub Marketplace](/marketplace/)」を参照してください。

{% data variables.product.prodname_marketplace %} API では、価格プランを使用している顧客の確認、顧客の購入の確認、アカウントで有効になっているプランの有無を確認できます。

### スタブされたエンドポイントでテストする

この API には、[**スタブされたデータ**で {% data variables.product.prodname_github_app %} をテスト](/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/)できるエンドポイントが含まれています。 スタブされたデータはハードコードされた偽のデータであり、実際のプランに基づいて変更されることはありません。

スタブされたデータでテストするには、対応する本番環境の代わりにスタブされたエンドポイントを使用します。 This allows you to test whether API logic succeeds before listing {% data variables.product.prodname_github_apps %} on {% data variables.product.prodname_marketplace %}.

{% data variables.product.prodname_github_app %} をデプロイする前に、スタブされたエンドポイントを本番のエンドポイントに置き換えてください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'marketplace' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae %}
## webhook

A {% data variables.product.prodname_github_app %}'s webhook allows you to receive HTTP `POST` payloads whenever certain events happen for an app. {% data reusables.webhooks.webhooks-rest-api-links %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}
