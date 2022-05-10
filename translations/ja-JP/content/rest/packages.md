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

## About the {% data variables.product.prodname_registry %} API

{% data variables.product.prodname_registry %} APIを使用すると、REST APIを利用してパッケージを管理できます。{% ifversion fpt or ghec or ghes > 3.1 or ghae %}パッケージの復元もしくは削除に関してさらに学ぶには、「[パッケージの復元と削除](/packages/learn-github-packages/deleting-and-restoring-a-package)」を参照してください。{% endif %}

このAPIを使うには、個人アクセストークンを使って認証を受けなければなりません。
  - パッケージメタデータにアクセスするには、トークンに`read:packages`スコープが含まれていなければなりません。
  - パッケージやパッケージのバージョンを削除するには、トークンに`read:packages`及び`delete:packages`スコープが含まれていなければなりません。
  - パッケージやパッケージのバージョンをリストアするには、トークンに`read:packages`及び`write:packages`スコープが含まれていなければなりません。

`package_type`が`npm`、`maven`、`rubygems`、`nuget`のいずれかなら、パッケージは{% data variables.product.prodname_dotcom %}リポジトリからの権限を継承するので、トークンには`repo`スコープも含まれていなければなりません。 パッケージが{% data variables.product.prodname_container_registry %}内にあるなら、`package_type`は`container`であり、この`package_type`のアクセスあるいは管理のためにトークンに`repo`スコープが含まれている必要はありません。 `container`パッケージは、リポジトリは別に詳細な権限を提供します。 詳しい情報については「[{% data variables.product.prodname_registry %}の権限について](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)」を参照してください。

SSOが有効化されたOrganization内のリソースにアクセスするために{% data variables.product.prodname_registry %} APIを使いたい場合は、個人アクセストークンにSSOを有効化しなければなりません。 詳しい情報については{% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %}ドキュメンテーションの{% else %}{% endif %}「[SAMLシングルサインオンで利用する個人アクセストークンの認可](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」を参照してください。
