---
title: パッケージ
intro: '{% data variables.product.prodname_registry %} APIを使うと、{% data variables.product.prodname_dotcom %}の自分のリポジトリとOrganizationのパッケージの管理ができます。'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/packages
ms.openlocfilehash: 5edb7e30b296626a53fdc41806bcfba88718e6b3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147059923'
---
## {% data variables.product.prodname_registry %} API について

{% data variables.product.prodname_registry %} APIでは、REST APIを使ってパッケージを管理できます。 パッケージの復元または削除の詳細については、「[パッケージの復元と削除](/packages/learn-github-packages/deleting-and-restoring-a-package)」を参照してください

このAPIを使うには、個人アクセストークンを使って認証を受けなければなりません。 
  - パッケージのメタデータにアクセスするには、トークンに `read:packages` のスコープを含める必要があります。
  - パッケージとパッケージのバージョンを削除するには、トークンに `read:packages` と `delete:packages` のスコープを含める必要があります。
  - パッケージとパッケージのバージョンを復元するには、トークンに `read:packages` と `write:packages` のスコープを含める必要があります。

`package_type` が `npm`、`maven`、`rubygems` または `nuget` の場合、パッケージは {% data variables.product.prodname_dotcom %} リポジトリからアクセス許可を継承するため、トークンに `repo` のスコープも含める必要があります。 パッケージが {% data variables.product.prodname_container_registry %} 内にある場合は、`package_type` は `container` になり、トークンでこの `package_type` へのアクセスまたは管理に `repo` のスコープは必要ありません。 `container` パッケージには、リポジトリとは別の細かいアクセス許可が用意されています。 詳細については、「[{% data variables.product.prodname_registry %} のアクセス許可について](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)」を参照してください。

SSOが有効化されたOrganization内のリソースにアクセスするために{% data variables.product.prodname_registry %} APIを使いたい場合は、個人アクセストークンにSSOを有効化しなければなりません。 詳細については、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[Authorizing a personal access token for use with SAML single sign-on](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}」 (SAML シングル サインオンで使用する個人用アクセス トークンの認証) を参照してください。{% else %}."{% endif %}
