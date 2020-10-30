---
title: GitHub ActionsでのGitHub Packagesの利用
intro: '{% data variables.product.prodname_actions %}でのワークフローを、自動的にパッケージを{% data variables.product.prodname_registry %}に公開もしくは{% data variables.product.prodname_registry %}からインストールするように設定できます。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### {% data variables.product.prodname_actions %}との{% data variables.product.prodname_registry %}について

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} 詳しい情報については「[{% data variables.product.prodname_actions %}について](/github/automating-your-workflow-with-github-actions/about-github-actions)」を参照してください。

ワークフローの一部としてパッケージの公開やインストールを行うことで、リポジトリのCI及びCDの機能を拡張できます。

{% if currentVersion == "free-pro-team@latest" %}
#### {% data variables.product.prodname_github_container_registry %} への認証を行う

{% data reusables.package_registry.container-registry-beta %}

{% data variables.product.prodname_registry %}の認証をうけるのに個人アクセストークンを使う代わりに、{% data variables.product.prodname_actions %}を有効化した際にリポジトリ用に自動的に{% data variables.product.prodname_dotcom %}が作成する`GITHUB_TOKEN`を使ってください。 For an authentication example, see "[Authenticating with the {% data variables.product.prodname_container_registry %}](/packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images#authenticating-with-the-container-registry)."

{% endif %}

#### Authenticating to package registries on {% data variables.product.prodname_dotcom %}

{% if currentVersion == "free-pro-team@latest" %}If you want your workflow to authenticate to {% data variables.product.prodname_registry %} to access a package registry other than the {% data variables.product.prodname_container_registry %} on {% data variables.product.product_name %}, then{% else %}To authenticate to package registries on {% data variables.product.product_name %},{% endif %} we recommend using the `GITHUB_TOKEN` that {% data variables.product.product_name %} automatically creates for your repository when you enable {% data variables.product.prodname_actions %} instead of a personal access token for authentication. この`GITHUB_TOKEN`は、現在のリポジトリに対する`read:packages`及び`write:packages`スコープを持ちます。 フォークの場合、このトークンは親のリポジトリへの`read:packages`スコープも持ちます。

{% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %}コンテキストを使って、ワークフロー中でこの`GITHUB_TOKEN`を参照できます。 詳しい情報については「[GITHUB_TOKENでの認証](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)」を参照してください。

### アクションを使ったパッケージの公開

{% data variables.product.prodname_actions %}を使い、継続的インテグレーション（CI）ワークフローの一部としてパッケージを公開できます。 たとえば、開発者がデフォルトブランチにコードを公開するたびにワークフローでCIテストが実行されるようにワークフローを構成することができます。 それらのテストをパスすれば、ワークフローは新しいパッケージバージョンを{% data variables.product.prodname_registry %}に公開します。 このワークフローは、コードが品質基準を満たしている場合にのみ新しいパッケージバージョンの作成を自動化します、

{% data reusables.package_registry.actions-configuration %}

### アクションを使ったパッケージのインストール

{% data variables.product.prodname_actions %}を使い、CIフローの一部としてパッケージをインストールできます。 たとえば、開発者がコードをプルリクエストにプッシュすると、いつでもワークフローが{% data variables.product.prodname_registry %}によってホストされているパッケージをダウンロードしてインストールすることで、依存関係を解決するようにワークフローを設定できます。 そして、ワークフローはその依存関係を必要とするCIテストを実行できます。

{% data variables.product.prodname_actions %}を通じて{% data variables.product.prodname_registry %}がホストしているパッケージをインストールするには、`GITHUB_TOKEN`を使う事によって最小限の設定もしくは追加の認証が必要です。 アクションがパッケージをインストールする場合、データ転送も無料です。 詳しい情報については、「[{% data variables.product.prodname_registry %}の支払いについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}
`GITHUB_TOKEN`は、アクションが実行されるリポジトリ以外のプライベートリポジトリからパッケージをインストールすることはできません。  You cannot currently use `GITHUB_TOKEN` to authenticate to {% data variables.product.prodname_github_container_registry %}.
{% endif %}

{% data reusables.package_registry.actions-configuration %}
