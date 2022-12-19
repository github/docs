---
title: ウィキについて
intro: リポジトリのドキュメンテーションをウィキでホストして、他者が利用してプロジェクトにコントリビュートすることを可能にできます。
redirect_from:
  - /articles/about-github-wikis
  - /articles/about-wikis
  - /github/building-a-strong-community/about-wikis
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 94800761c60bb984745e582e2c9691e294e7a90d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529624'
---
{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} のすべてのリポジトリには、Wiki と呼ばれるドキュメントをホストするためのセクションが用意されています。 リポジトリのウィキは、プロジェクトの利用方法、設計方法、中核的な原理など、プロジェクトに関する長いコンテンツを共有するために利用できます。 README ファイルは、プロジェクトができることを手短に述べますが、ウィキを使えば追加のドキュメンテーションを提供できます。 詳細については、「[README について](/articles/about-readmes)」を参照してください。

ウィキでは、{% data variables.product.product_name %} のあらゆる他の場所と同じようにコンテンツを書くことができます。 詳細については、「[{% data variables.product.prodname_dotcom %} での書き込みと書式設定の概要](/articles/getting-started-with-writing-and-formatting-on-github)」を参照してください。 私たちは、さまざまなフォーマットを HTML に変更するのに[私たちのオープンソース マークアップ ライブラリ](https://github.com/github/markup)を使っているので、Markdown あるいはその他のサポートされているフォーマットで書くことができます。 

{% data reusables.getting-started.math-and-diagrams %}

{% ifversion fpt or ghes or ghec %}パブリック リポジトリに Wiki を作成すると、{% ifversion ghes %}{% data variables.product.product_location %}{% else %}パブリック{% endif %}にアクセスできるすべてのユーザーがその Wiki を利用できます。 {% endif %}プライベート{% ifversion ghec or ghes %}または内部{% endif %} リポジトリに Wiki を作成した場合、リポジトリにアクセスできる{% ifversion fpt or ghes or ghec %}ユーザー{% elsif ghae %}エンタープライズ メンバー{% endif %}のみが Wiki にアクセスできます。 詳細については、「[リポジトリの可視性を設定する](/articles/setting-repository-visibility)」を参照してください。

ウィキは、{% data variables.product.product_name %} 上で直接編集することも、ウィキのファイルをローカルで編集することもできます。 デフォルトでは、リポジトリへの書き込みアクセス権を持つユーザのみが Wiki に変更を加えることができますが、{% data variables.product.product_location %} のすべてのユーザが{% ifversion ghae %}内部{% else %}パブリック{% endif %}リポジトリの Wiki に貢献できるようにすることも可能ですす。 詳しい情報については、「[Wiki へのアクセス権限の変更](/communities/documenting-your-project-with-wikis/changing-access-permissions-for-wikis)」を参照してください。

{% note %}

**注:** 検索エンジンでは、Wiki のコンテンツのインデックスは作成されません。 検索エンジンによってコンテンツのインデックスを作成するには、パブリック リポジトリで [{% data variables.product.prodname_pages %}](/pages) を使用します。

{% endnote %}

## 参考資料

- 「[Wiki ページを追加または編集する](/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages)」
- 「[Wiki にフッタやサイドバーを作成する](/communities/documenting-your-project-with-wikis/creating-a-footer-or-sidebar-for-your-wiki)」
- 「[Wiki のコンテンツを編集する](/communities/documenting-your-project-with-wikis/editing-wiki-content)」
- 「[Wiki の変更履歴を表示する](/articles/viewing-a-wiki-s-history-of-changes)」
- 「[Wiki を検索する](/search-github/searching-on-github/searching-wikis)」
