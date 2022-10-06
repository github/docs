---
title: GitHub Pages サイトのカスタム 404 ページを作成する
intro: サイト上の存在しないページにアクセスしようとした際に表示される、404 エラーページをカスタマイズできます。
redirect_from:
  - /articles/custom-404-pages
  - /articles/creating-a-custom-404-page-for-your-github-pages-site
  - /github/working-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create custom 404 page
ms.openlocfilehash: 1b10946277d90773b847b929d85a3b6cf8212a4e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880566'
---
{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %} {% data reusables.files.add-file %}
3. ファイル名フィールドに、`404.html` または `404.md` と入力します。
  ![ファイル名フィールド](/assets/images/help/pages/404-file-name.png)
4. ファイルに `404.md` という名前を付けた場合は、ファイルの先頭に次の YAML フロント マターを追加します。
  ```yaml
  ---
  permalink: /404.html
  ---
  ```
5. YAML front matter の下に、404 ページに表示したいコンテンツがある場合には、それを追加します。
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## 参考資料

- Jekyll ドキュメントの「[フロント マター](http://jekyllrb.com/docs/frontmatter)」
