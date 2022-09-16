---
title: GitHub Pages でサブモジュールを使用する
intro: '{% data variables.product.prodname_pages %} でサブモジュールを使用すると、他のサイトのコードで他のプロジェクトを含めることができます。'
redirect_from:
  - /articles/using-submodules-with-pages
  - /articles/using-submodules-with-github-pages
  - /github/working-with-github-pages/using-submodules-with-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Use submodules with Pages
ms.openlocfilehash: cfe863c3a7d77d006ee4c78e9d58302fb01e4dd4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880799'
---
{% data variables.product.prodname_pages %} サイトのリポジトリにサブモジュールが含まれている場合、その内容はサイトをビルドする際に自動的にプルされます。

使用できるのは、パブリックリポジトリをポイントするサブモジュールだけです。{% data variables.product.prodname_pages %} サーバーはプライベートリポジトリにはアクセスできないためです。

ネストされたサブモジュールも含めて、サブモジュールには `https://` 読み取り専用 URL を使用します。 この変更は _.gitmodules_ ファイルで行うことができます。

## 参考資料

- 『_Pro Git_』ブックの「[Git Tools - Submodules (Git ツール - サブモジュール)](https://git-scm.com/book/en/Git-Tools-Submodules)」
- 「[{% data variables.product.prodname_pages %} サイトの Jekyll ビルド エラーのトラブルシューティング](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)」
