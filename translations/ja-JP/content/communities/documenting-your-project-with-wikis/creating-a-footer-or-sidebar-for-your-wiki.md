---
title: ウィキにフッタやサイドバーを作成する
intro: カスタムのサイドバーやフッタをウィキに追加して、さらに多くのコンテキスト情報を読者に提供できます。
redirect_from:
  - /articles/creating-a-footer
  - /articles/creating-a-sidebar
  - /articles/creating-a-footer-or-sidebar-for-your-wiki
  - /github/building-a-strong-community/creating-a-footer-or-sidebar-for-your-wiki
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create footer or sidebar
ms.openlocfilehash: 0f65114a5258d312d5a81381a59149c589ee54a4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090333'
---
## フッタの作成

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. ページの下部にある **[カスタム フッターの追加]** をクリックします。
  ![ウィキのフッターの追加セクション](/assets/images/help/wiki/wiki_add_footer.png)
4. テキストエディタを使用して、フッタに表示するコンテンツを入力します。
  ![ウィキの WYSIWYG](/assets/images/help/wiki/wiki-footer.png)
5. 追加中のフッタを説明するコミットメッセージを入力します。
  ![ウィキのコミット メッセージ](/assets/images/help/wiki/wiki_commit_message.png)
6. 変更をウィキにコミットするには **[ページの保存]** をクリックします。

## サイドバーの作成

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. **[カスタム サイドバーの追加]** をクリックします。
  ![ウィキのサイドバーの追加セクション](/assets/images/help/wiki/wiki_add_sidebar.png)
4. テキストエディタを使って、ページの内容を追加してください。
  ![ウィキの WYSIWYG](/assets/images/help/wiki/wiki-sidebar.png)
5. 追加するサイドバーを説明するコミットメッセージを入力します。
  ![ウィキのコミット メッセージ](/assets/images/help/wiki/wiki_commit_message.png)
6. 変更をウィキにコミットするには **[ページの保存]** をクリックします。

## フッタまたはサイドバーをローカルで作成

`_Footer.<extension>` または `_Sidebar.<extension>` という名前のファイルを作成した場合は、ウィキのフッターとサイドバーを設定するためにそれらがそれぞれ使用されます。 他のすべてのウィキページと同じく、これらのファイルは、その拡張子に応じて描画されます。
