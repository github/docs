---
title: Packages
intro: '{% data variables.product.prodname_registry %} APIを使うと、{% data variables.product.prodname_dotcom %}の自分のリポジトリとOrganizationのパッケージの管理ができます。'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/packages
---

The {% data variables.product.prodname_registry %} API enables you to manage packages using the REST API.{% ifversion fpt or ghec or ghes > 3.1 or ghae %} To learn more about restoring or deleting packages, see "[Restoring and deleting packages](/packages/learn-github-packages/deleting-and-restoring-a-package)."{% endif %}

このAPIを使うには、個人アクセストークンを使って認証を受けなければなりません。
  - パッケージメタデータにアクセスするには、トークンに`read:packages`スコープが含まれていなければなりません。
  - パッケージやパッケージのバージョンを削除するには、トークンに`read:packages`及び`delete:packages`スコープが含まれていなければなりません。
  - パッケージやパッケージのバージョンをリストアするには、トークンに`read:packages`及び`write:packages`スコープが含まれていなければなりません。

`package_type`が`npm`、`maven`、`rubygems`、`nuget`のいずれかなら、パッケージは{% data variables.product.prodname_dotcom %}リポジトリからの権限を継承するので、トークンには`repo`スコープも含まれていなければなりません。 パッケージが{% data variables.product.prodname_container_registry %}内にあるなら、`package_type`は`container`であり、この`package_type`のアクセスあるいは管理のためにトークンに`repo`スコープが含まれている必要はありません。 `container`パッケージは、リポジトリは別に詳細な権限を提供します。 詳しい情報については「[{% data variables.product.prodname_registry %}の権限について](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)」を参照してください。

SSOが有効化されたOrganization内のリソースにアクセスするために{% data variables.product.prodname_registry %} APIを使いたい場合は、個人アクセストークンにSSOを有効化しなければなりません。 For more information, see "[Authorizing a personal access token for use with SAML single sign-on](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}
