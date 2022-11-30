---
title: 混乱を生じるコメントを管理する
intro: 'Issue、pull request、コミットに対するコメントを{% ifversion fpt or ghec %}非表示、編集{% else %}編集{% endif %}、または削除できます。'
redirect_from:
  - /articles/editing-a-comment
  - /articles/deleting-a-comment
  - /articles/managing-disruptive-comments
  - /github/building-a-strong-community/managing-disruptive-comments
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Manage comments
ms.openlocfilehash: f27a310b0ee299839967f6db402c6fdebbc129f0
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145117654'
---
## コメントを非表示にする

{% ifversion fpt or ghec %}組織のモデレーターと、他のユーザー{% else %}リポジトリへの書き込みアクセス権を持つすべてのユーザー{% endif %}は、issue、pull request、コミットに関するコメントを非表示にできます。

1 つのディスカッションに集中し、プルリクエストのナビゲーションとレビューがしやすいように、トピックから外れている、古い、または解決済みのコメントは非表示にすることができます。 非表示のコメントは最小化されますが、リポジトリに対する読み取りアクセスがあるユーザは展開することができます。

![最小化されたコメント](/assets/images/help/repository/hidden-comment.png)

1. 非表示にするコメントに移動します。
2. コメントの右上隅で {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、次に **[非表示にする]** をクリックします。
  ![編集、非表示、削除のオプションが表示されている水平の kebab アイコンとコメント モデレーション メニュー](/assets/images/help/repository/comment-menu.png)
3. [Choose a reason] ドロップダウン メニューで、コメントを非表示にする理由をクリックします。 **[コメントを表示しない]** をクリックします。
  {% ifversion fpt or ghec %} ![[Choose reason for hiding comment]\(コメントを非表示にする理由を選択\) ドロップダウン メニュー](/assets/images/help/repository/choose-reason-for-hiding-comment.png) {% else %} ![[Choose reason for hiding comment]\(コメントを非表示にする理由を選択\) ドロップダウン メニュー](/assets/images/help/repository/choose-reason-for-hiding-comment-ghe.png) {% endif %}

## コメントを再表示する

{% ifversion fpt or ghec %}組織のモデレーターと、他のユーザー{% else %}リポジトリへの書き込みアクセス権を持つすべてのユーザー{% endif %}は、issue、pull request、コミットに関するコメントを再表示できます。

1. 再表示するコメントに移動します。
2. コメントの右上隅にある **{% octicon "fold" aria-label="The fold icon" %} [コメントの表示]** をクリックします。
   ![コメントの表示のテキスト](/assets/images/help/repository/hidden-comment-show.png)
3. 展開したコメントの右側にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックしてから、 **[再表示]** をクリックします。
   ![編集、再表示、削除のオプションが表示されている水平の kebab アイコンとコメント モデレーション メニュー](/assets/images/help/repository/comment-menu-hidden.png)

## コメントを編集する

リポジトリに対する書き込み権限があるユーザは、Issue、プルリクエスト、およびコミットに対するコメントを編集することができます。

会話に貢献せず、コミュニティの行動規範{% ifversion fpt or ghec %}または GitHub の[コミュニティ ガイドライン](/free-pro-team@latest/github/site-policy/github-community-guidelines){% endif %}に違反するコンテンツは、コメントを編集して削除するのが適切です。

編集とその正当性を明確に示すことが合理的である場合があります。

つまり、リポジトリの読み取りアクセスがあれば、誰でもコミットの編集履歴を見ることができます。 コメントの上部にある **[編集済み]** ドロップダウンには編集履歴があり、それぞれの編集のユーザーとタイムスタンプが表示されます。

![内容を削除編集したというメモを追加したコメント](/assets/images/help/repository/content-redacted-comment.png)

## 機密情報の編集

コメントの作者とリポジトリの書き込みアクセスがあるユーザは、コメントの編集履歴から機密情報を削除できます。 詳細については、「[コメントの変更を追跡する](/communities/moderating-comments-and-conversations/tracking-changes-in-a-comment)」を参照してください。

1. 編集したいコメントに移動します。
2. コメントの右上隅で {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、次に **[編集]** をクリックします。
  ![編集、非表示、削除、レポートのオプションが表示されている水平の kebab アイコンとコメント モデレーション メニュー](/assets/images/help/repository/comment-menu.png)
3. [コメント] ウィンドウで、削除するコンテンツを削除し、「`[REDACTED]`」と入力して置き換えます。
  ![コンテンツを編集した [コメント] ウィンドウ](/assets/images/help/issues/redacted-content-comment.png)
4. コメントの下部に、コメントを編集したことを示すメモを入力し、オプションで編集した理由も入力します。
  ![コンテンツを編集したというメモが追加された [コメント] ウィンドウ](/assets/images/help/issues/note-content-redacted-comment.png)
5. **[コメントの更新]** をクリックします。

## コメントを削除する

リポジトリに対する書き込み権限があるユーザは、Issue、プルリクエスト、 およびコミットに対するコメントを削除することができます。 Organization オーナー、チームメンテナ、コメント作成者は、チームのページのコメントを削除することもできます。

Issue やプルリクエストで、会話に役立つ建設的な内容が部分的に含まれているコメントは、削除せず編集してください。

コメントの削除は、モデレーターとしての最終手段です。 コメント全体が会話にとって建設的な内容ではない場合や、コミュニティの行動規範{% ifversion fpt or ghec %}または GitHub の[コミュニティ ガイドライン](/free-pro-team@latest/github/site-policy/github-community-guidelines){% endif %}に違反している場合は、コメントを削除するのが適切です。

コメントを削除すると、リポジトリに対する読み取りアクセスを持つユーザなら誰でも見ることのできるタイムラインイベントが作成されます。 ただし、コメントを削除したユーザの名前は、リポジトリへの書き込みアクセスを持つユーザにしか見えません。 書き込みアクセスを持たないユーザから見ると、タイムラインイベントは匿名化されています。

![削除したコメントについて匿名化されたタイムラインイベント](/assets/images/help/issues/anonymized-timeline-entry-for-deleted-comment.png)

{% note %}

**注:** issue または pull request の最初のコメント (または本文) を削除することはできません。 かわりに、Issue やプルリクエストの本文を編集して、不要な内容を削除してください。

{% endnote %}

### コメントを削除する手順

1. 削除したいコメントに移動します。
2. コメントの右上で {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、次に **[削除]** をクリックします。
  ![編集、非表示、削除、レポートのオプションが表示されている水平の kebab アイコンとコメント モデレーション メニュー](/assets/images/help/repository/comment-menu.png)
3. オプションで、コメントを削除したことを示すコメントとその理由を入力します。

{% ifversion fpt or ghec %}
## 参考資料
- 「[組織のモデレーターの管理](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-moderators-in-your-organization)」 {% endif %} 
