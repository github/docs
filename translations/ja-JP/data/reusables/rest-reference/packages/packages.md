---
ms.openlocfilehash: fa6e17922c7dbafb957c77d1e9340a90b862f7aa
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 04/07/2022
ms.locfileid: "141509236"
---
{% data variables.product.prodname_registry %} API を使用すると、REST API を使用してパッケージを管理できます。{% ifversion fpt または ghec または ghes > 3.1 または ghae %} パッケージの復元または削除の詳細については、「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」を参照してください。"{% endif %}

このAPIを使うには、個人アクセストークンを使って認証を受けなければなりません。 
  - パッケージのメタデータにアクセスするには、トークンに `read:packages` のスコープを含める必要があります。
  - パッケージとパッケージのバージョンを削除するには、トークンに `read:packages` と `delete:packages` のスコープを含める必要があります。
  - パッケージとパッケージのバージョンを復元するには、トークンに `read:packages` と `write:packages` のスコープを含める必要があります。

`package_type` が `npm`、`maven`、`rubygems` または `nuget` の場合、パッケージは {% data variables.product.prodname_dotcom %} リポジトリからアクセス許可を継承するため、トークンに `repo` のスコープも含める必要があります。 パッケージが {% data variables.product.prodname_container_registry %} 内にある場合は、`package_type` は `container` になり、トークンでこの `package_type` へのアクセスまたは管理に `repo` のスコープは必要ありません。 `container` パッケージには、リポジトリとは別の細かいアクセス許可が用意されています。 詳細については、「[About permissions for {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)」 ({% data variables.product.prodname_registry %} へのアクセス許可) を参照してください。

SSOが有効化されたOrganization内のリソースにアクセスするために{% data variables.product.prodname_registry %} APIを使いたい場合は、個人アクセストークンにSSOを有効化しなければなりません。 詳細については、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[Authorizing a personal access token for use with SAML single sign-on](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)」 (SAML シングル サインオンで使用する個人用アクセス トークンの認証) を参照してください。{% else %}."{% endif %}