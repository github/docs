---
title: GitHub Classroom での Visual Studio Code の使用について
shortTitle: About using Visual Studio Code
intro: '{% data variables.product.prodname_vscode %} は、{% data variables.product.prodname_classroom %} の割り当ての優先エディターとして構成できます。'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/about-using-vs-code-with-github-classroom
ms.openlocfilehash: fe0e8e0c3194f9c97cc30c80dcec00256824e6ab
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145148745'
---
## {% data variables.product.prodname_vscode %} について

{% data variables.product.prodname_vscode %} は、軽量でありながら強力なソース コード エディターです。これはデスクトップで使用でき、Windows、macOS、Linux に対応しています。 [{% data variables.product.prodname_vscode_shortname %} 用 GitHub Classroom 拡張機能](https://aka.ms/classroom-vscode-ext)を使用すると、学生は Classroom の課題を簡単に参照、編集、送信、共同作業、およびテストできます。 IDE と {% data variables.product.prodname_classroom %} の詳細については、「[{% data variables.product.prodname_classroom %} と IDE の統合](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)」を参照してください。

### 任意の学生のエディター 
GitHub Classroom と {% data variables.product.prodname_vscode_shortname %} の統合により、以下を含む拡張機能パックが学生に提供されます。

1. [GitHub Classroom 拡張機能](https://aka.ms/classroom-vscode-ext)とカスタム抽象化により、学生が簡単に作業を開始できるようになります。
2. [Visual Studio Live Share 拡張機能](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)を学生ビューに統合することで、支援と共同作業のために補助教員やクラスメートに簡単にアクセスできます。
3. [GitHub Pull Request 拡張機能](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)を使用すると、学生はエディター内で講師からのフィードバックを確認できます。 

### {% data variables.product.prodname_vscode_shortname %} で割り当てを起動する方法
割り当てを作成するときに、割り当ての優先エディターとして {% data variables.product.prodname_vscode_shortname %} を追加できます。 詳細については、「[{% data variables.product.prodname_classroom %} と IDE の統合](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)」を参照してください。

これには、すべての学生リポジトリの [{% data variables.product.prodname_vscode_shortname %} で開く] バッジが含まれます。 このバッジでは、{% data variables.product.prodname_vscode_shortname %} のインストール、Classroom 拡張機能パック、およびワン クリックでのアクティブな課題の開始について処理します。

{% note %}

**注:** 学生は {% data variables.product.prodname_vscode_shortname %} からリポジトリにコードをプッシュするために、Git を自分のコンピューターにインストールする必要があります。 **[{% data variables.product.prodname_vscode_shortname %} で開く]** ボタンをクリックしても、これは自動的にインストールされません。 学生は [ここ](https://git-scm.com/downloads)から Git をダウンロードできます。

{% endnote %}

### GitHub Classroom 拡張機能パックを使用する方法 
GitHub Classroom 拡張機能には、[クラスルーム] ビューと [アクティブな課題] ビューの 2 つの主要なコンポーネントがあります。 

学生が初めて拡張機能を起動すると、{% data variables.product.prodname_vscode_shortname %} の [エクスプローラー] タブに自動的に移動され、リポジトリ内のファイルのツリービューと共に [アクティブな課題] ビューを表示できます。 

![GitHub Classroom の [アクティブな課題] ビュー](/assets/images/help/classroom/vs-code-active-assignment.png)

学生は、[アクティブな課題] 行の上にカーソルを置いたときに表示される **[変更を同期する]** ボタンをクリックして、コミットを最新バージョンのリモートにプッシュできます。 これにより、Git でのソース管理が抽象化され、講師が自分のペースで Git を教えられるようになります。
変更の同期により、教師が課題に対して自動採点を構成した場合に実行される [テスト] もトリガーされます。

課題がグループ プロジェクトの場合は、[アクティブな課題] の下の [グループ] ノードにグループのメンバーが表示されます。 また、学生が行き詰ったときに役立つ場合があるリポジトリの管理者メンバーも表示されます。 プロジェクトで共同作業を行うために、学生はグループ ノード内の誰とでも Live Share セッションを開始でき、彼らはすぐにリポジトリのコンテキスト全体を共有するようになります。 Live Share とそれを使った共同作業の詳細については、[こちら](https://docs.microsoft.com/en-us/visualstudio/liveshare/)を参照してください。

学生は課題を完了したら、移動して他の [課題] や [クラスルーム] を表示することもできます。 これらは [GitHub] タブで見つけることができます。
