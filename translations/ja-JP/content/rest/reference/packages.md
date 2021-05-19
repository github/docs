---
title: パッケージ
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
topics:
  - API
---

{% data variables.product.prodname_registry %} APIでは、REST APIを使ってパッケージを管理できます。 パッケージのリストアや削除についてさらに学ぶには、「[パッケージのリストアと削除](/packages/learn-github-packages/deleting-and-restoring-a-package)」を参照してください。

このAPIを使うには、個人アクセストークンを使って認証を受けなければなりません。
  - パッケージメタデータにアクセスするには、トークンに`read:packages`スコープが含まれていなければなりません。
  - パッケージやパッケージのバージョンを削除するには、トークンに`read:packages`及び`delete:packages`スコープが含まれていなければなりません。
  - パッケージやパッケージのバージョンをリストアするには、トークンに`read:packages`及び`write:packages`スコープが含まれていなければなりません。

`package_type`が`npm`、`maven`、`rubygems`、`nuget`のいずれかなら、パッケージは{% data variables.product.prodname_dotcom %}リポジトリからの権限を継承するので、トークンには`repo`スコープも含まれていなければなりません。  スコープに関する詳しい情報については「[スコープと権限について](/packages/learn-github-packages/about-github-packages#about-scopes-and-permissions-for-package-registries)あるいは「[Dockerでの{% data variables.product.prodname_registry %} APIの利用](#using-the-github-packages-api-with-docker)」を参照してください。

SSOが有効化されたOrganization内のリソースにアクセスするために{% data variables.product.prodname_registry %} APIを使いたい場合は、個人アクセストークンにSSOを有効化しなければなりません。 詳しい情報については「[SAMLシングルサインオンと使う個人アクセストークンの認可](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」を参照してください。

#### Dockerでの{% data variables.product.prodname_registry %} APIの利用

パッケージが`docker.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`というパッケージの名前空間を使うDockerイメージなら、`package_type`は`docker`であり、パッケージが権限を{% data variables.product.prodname_dotcom %}リポジトリから継承するので、トークンには`repo`スコープが含まれていなければなりません。

パッケージが`ghcr.io/OWNER/IMAGE-NAME`というパッケージの名前空間を使うDockerイメージなら、`package_type`は`container`であり、この`package_type`のアクセスあるいは管理のためにトークンに`repo`スコープが含まれている必要はありません。 `container`パッケージは、リポジトリは別に詳細な権限を提供します。


{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}
