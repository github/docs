---
title: リポジトリのリリースとタグを表示する
intro: リリース名またはタグのバージョン番号でリポジトリの履歴を時系列順に表示できます。
redirect_from:
  - /articles/working-with-tags
  - /articles/viewing-your-repositorys-tags
  - /github/administering-a-repository/viewing-your-repositorys-tags
  - /github/administering-a-repository/viewing-your-repositorys-releases-and-tags
  - /github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View releases & tags
ms.openlocfilehash: c6cdad2626eb5b3260efd46a1d47dac499c73051
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145132055'
---
{% tip %}

**ヒント**: {% data variables.product.prodname_cli %} を使用してリリースを表示することもできます。 詳細については、{% data variables.product.prodname_cli %} ドキュメントの "[`gh release view`](https://cli.github.com/manual/gh_release_view)" を参照してください。

{% endtip %}

## リリースを表示する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
2. [リリース] ページの上部にある **[リリース]** をクリックします。

## タグを表示する

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
2. [Releases]\(リリース\) ページの上部にある **[Tags]\(タグ\)** をクリックします。
![[Tags]\(タグ\) ページ](/assets/images/help/releases/tags-list.png)

## 参考資料

- [タグに署名する](/articles/signing-tags)
