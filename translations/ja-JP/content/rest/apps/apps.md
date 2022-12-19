---
title: GitHub アプリ
allowTitleToDifferFromFilename: true
intro: '{% data variables.product.prodname_github_apps %} API を使用すると、{% data variables.product.prodname_github_apps %} に関する情報を取得できます。'
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: b9bb851837d7a5c61a74917eacf2154e7f29bc71
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146769190'
---
## {% data variables.product.prodname_github_apps %} API について

{% data reusables.apps.general-apps-restrictions %}

このページには、GitHub App として認証されている場合にアクセスできるエンドポイントが一覧表示されています。 詳細については、「[GitHub App として認証を行う](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)」を参照してください。

GitHub App として認証されると、GitHub Apps API を使用して、GitHub App に関する大まかな情報と、アプリケーションのインストールに関する具体的な情報を取得できます。

GitHub App として認証されている場合、REST API エンドポイントにアクセスできます。 これらのエンドポイントには、"GitHub App で動作する" というテキストが含まれています。 ユーザとして認証されている場合、これらのエンドポイントにアクセスすることもできます。

REST API エンドポイントのサブセットは、GitHub App のインストールとして認証する必要があります。 これらのエンドポイントの一覧については、[インストール](/rest/reference/apps#installations)に関する記事を参照してください。
