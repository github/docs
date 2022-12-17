---
title: パッケージ
intro: 'REST API を使用して {% data variables.product.prodname_registry %} を操作します。'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/packages
ms.openlocfilehash: a40709d8c51e445fb815c78eadbdb7886b5d60db
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192826'
---
## {% data variables.product.prodname_registry %} について

REST API を使用して {% data variables.product.prodname_dotcom %} リポジトリと組織のパッケージを管理できます。 詳しくは、「[パッケージの復元と削除](/packages/learn-github-packages/deleting-and-restoring-a-package)」をご覧ください。

REST API を使用して {% data variables.product.prodname_registry %} を管理するには、{% data variables.product.pat_v1 %} を使用して認証する必要があります。
  - パッケージのメタデータにアクセスするには、トークンに `read:packages` のスコープを含める必要があります。
  - パッケージとパッケージのバージョンを削除するには、トークンに `read:packages` と `delete:packages` のスコープを含める必要があります。
  - パッケージとパッケージのバージョンを復元するには、トークンに `read:packages` と `write:packages` のスコープを含める必要があります。

細かなアクセス許可がサポートされているレジストリにパッケージが置かれている場合、トークンに `repo` 範囲がなくてもそのパッケージにアクセスしたり、管理したりできます。 リポジトリを範囲とするアクセス許可のみをサポートしているレジストリにパッケージが置かれている場合、トークンには `repo` 範囲も含まれている必要があります。パッケージは {% data variables.product.prodname_dotcom %} リポジトリからアクセス許可を継承するためです。 リポジトリを範囲とするアクセス許可のみをサポートするレジストリの一覧については、「[{% data variables.product.prodname_registry %} のアクセス許可について](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)」を参照してください。

SSO が有効になっている組織のリソースにアクセスするには、{% data variables.product.pat_v1 %} の SSO を有効にする必要があります。 詳しい情報については、{% data variables.product.prodname_ghe_cloud %} ドキュメント内の「[SAML シングル サインオンで使用するために {% data variables.product.pat_generic %} を承認する](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}」を参照してください{% else %}。{% endif %}
