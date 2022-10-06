---
title: コメントの変更を追跡する
intro: コメントの編集履歴を表示したり、コメントの編集履歴から機密情報を削除したりすることができます。
redirect_from:
  - /articles/tracking-changes-in-a-comment
  - /github/building-a-strong-community/tracking-changes-in-a-comment
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Track comment changes
ms.openlocfilehash: 7da6b53f9b98ade8ee73411a80aaf2ff3f412700
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090220'
---
## コメントの編集履歴の詳細を表示する

リポジトリの読み取りアクセスがあれば、誰でもコミットの編集履歴を見ることができます。

1. 編集履歴を表示したいコメントに移動します。
{% data reusables.repositories.edited-comment-list %}

## コメントの履歴から機密情報を削除します。

コメントの作者とリポジトリの書き込みアクセスがあるユーザは、コメントの編集履歴から機密情報を削除することもできます。

コメントの編集履歴から機密情報を削除した場合、その編集を行った人および編集が行われた時間はコメント履歴で引き続き表示されますが、編集内容は表示されなくなります。

1. 編集履歴から、機密情報を削除したいコメントに移動します。
{% data reusables.repositories.edited-comment-list %}
3. 編集履歴ウインドウの右上で **[オプション]** をクリックします。 次に、追加されたコンテンツを表示する diff を削除するために **[履歴からリビジョンを削除する]** をクリックします。
  ![コメントの編集履歴の詳細を削除](/assets/images/help/repository/delete-comment-edit-details.png)
4. 削除を確定するには、 **[OK]** をクリックします。

## 参考資料

{% ifversion fpt or ghec %}- 「[悪用あるいはスパムをレポートする](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)」{% endif %}
- 「[コメントを編集する](/articles/editing-a-comment)」
