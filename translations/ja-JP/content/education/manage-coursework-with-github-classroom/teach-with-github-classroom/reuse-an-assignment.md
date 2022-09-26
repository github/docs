---
title: 課題を再利用する
intro: 別の組織のクラスルームを含め、複数のクラスルームで既存の課題を再利用できます。
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can reuse assignments from a classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Reuse an assignment
ms.openlocfilehash: 4c1c9048847affef95d5c904b188e68d2c183b43
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066915'
---
## 課題の再利用について

個人またはグループの既存の課題は、自分がアクセス権を持つ他のクラスルーム (別の Organization のクラスルームを含む) で再利用できます。 クラスルームから複数の課題を一度に再利用することもできます。 課題を再利用することにすると、{% data variables.product.prodname_classroom %} により、選択したクラスルームに課題がコピーされます。 課題でテンプレート リポジトリが使用され、別の Organization のクラスルームでそれを再利用することにした場合、{% data variables.product.prodname_classroom %} により、リポジトリとその内容のコピーが対象の Organization に作成されます。

コピーされた課題には、名前、ソース リポジトリ、自動採点テスト、好みのエディターなどの課題の詳細が含まれます。 コピー後に課題を編集して、変更を加えることができます。 好みのエディターを変更することはできません。 

## 課題を再利用する

1. {% data variables.product.prodname_classroom_with_url %}にサインインしてください。
1. 再利用する課題があるクラスルームに移動します。

   ![Organizationのクラスルームのリストにあるクラスルーム](/assets/images/help/classroom/click-classroom-in-list.png)

1. 課題のリストで、再利用したい課題をクリックします。

   ![クラスルームの課題リスト中の課題](/assets/images/help/classroom/click-assignment-in-list.png)

1. ページの右上にある **{% octicon "pencil" aria-label="The pencil icon" %} [編集]** ドロップダウン メニューを選択し、 **{% octicon "sync" aria-label="The sync icon" %} [課題の再利用]** をクリックします。

   ![[課題の再利用] ボタン](/assets/images/help/classroom/reuse-assignment-button.png)

1. [課題の再利用] モーダルで、 **[Organization の選択]** ドロップダウン メニューを使って、課題を含める Organization を選びます。  次に、 **[クラスルームの選択]** ドロップダウン メニューを使用して、課題をコピーする Organization 内のクラスルームを選択します。

   ![[課題の再利用] モーダル](/assets/images/help/classroom/reuse-assignment-modal.png)

1. **[課題の作成]** をクリックします。
1. 選択したクラスルームに課題がコピーされ、確認メッセージが表示されます。 テンプレート リポジトリで課題を再利用することにした場合、コピー処理が完了するまでに数分かかる場合があり、完了メッセージを表示するにはページを更新する必要がある場合があります。

   ![再利用された課題の完了メッセージ](/assets/images/help/classroom/reuse-assignment-completed-message.png)

## クラスルームからの複数の課題の再利用

1. {% data variables.product.prodname_classroom_with_url %}にサインインしてください。
2. クラスルーム名の右側にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} ドロップダウン メニューを選んで、 **[課題の再利用]** をクリックします。
   
   ![ドロップダウンが強調された [クラスルームの概要] ページのスクリーンショット](/assets/images/help/classroom/classroom-reuse-assignment-modal.png)

3. [課題の再利用] モーダルで、 **[Organization の選択]** ドロップダウン メニューを使って、課題を含める Organization を選びます。  次に、 **[クラスルームの選択]** ドロップダウン メニューを使って、課題をコピーする Organization 内のクラスルームを選びます。
   
   ![再利用割り当てモーダルのスクリーンショット](/assets/images/help/classroom/reuse-multiple-assignments-modal.png)

4. 各割り当ての左側で、再利用する割り当てを選びます。

   ![選択した複数の割り当てのスクリーンショット](/assets/images/help/classroom/multiple-assignments-selected.png)

5. **[割り当ての作成]** をクリックします。
6. 課題は、選択したクラスルームにコピーされます。 テンプレート リポジトリで課題を再利用することにした場合、コピー処理が完了するまでに数分かかる場合があります。
