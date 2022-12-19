---
title: コミットを修正する
intro: '{% data variables.product.prodname_desktop %} を使って、最後のコミットを修正できます。'
versions:
  fpt: '*'
ms.openlocfilehash: 8d92d5f755df662c4948196cf9f84b3227ec0067
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117502'
---
## コミットの修正について

コミットの修正は、現在のブランチで行った最新のコミットを修正する方法です。 これは、コミット メッセージを編集する必要がある場合や、コミットに変更を含めるのを忘れた場合に役立ちます。

コミットをリモート リポジトリにプッシュするまで、コミットを修正し続けられます。 コミットをプッシュした後、そのコミットを修正するオプションは、{% data variables.product.prodname_desktop %} で無効になります。 コミットを修正するときは、前のコミットを現在のブランチへの新しいコミットに置き換えます。 リモート リポジトリにプッシュされたコミットを修正すると、そのリポジトリを操作する他のコラボレーターの混乱を招く可能性があります。

## コミットを修正する

{% data reusables.desktop.history-tab %}
2. 最新のコミットを右クリックし、 **[コミットの修正]** を選択します。
  ![[コミットの修正] コンテキスト メニュー](/assets/images/help/desktop/amend-commit-context-menu.png)
3. コミット メッセージを変更するには、 **[概要]** フィールドをクリックします。 必要に応じて、 **[説明]** フィールドでコミットに関する情報を変更または追加できます。
4. コミットに追加する未確定の変更を選択します。 変更の選択の詳細については、「[プロジェクトへの変更のコミットやレビュー](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)」を参照してください。
5. 変更を確定したら、 **[最後のコミットの修正]** をクリックします。
  ![最後のコミットの修正](/assets/images/help/desktop/amend-last-commit-overview.png)
