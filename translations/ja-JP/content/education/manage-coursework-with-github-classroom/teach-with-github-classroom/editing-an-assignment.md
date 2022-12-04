---
title: 課題を編集する
intro: コースでの既存の課題を編集できます。
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can edit assignments for that classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Edit an assignment
ms.openlocfilehash: 65814debd3fb5bf64ea83b04bef6349b7755b77f
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179857'
---
## 課題の編集について

課題を作成した後、課題の多くの部分を編集して、自分と学生のニーズに合わせることができます。 課題を作成した後では、課題の種類 (個人またはグループ) またはオンライン統合開発環境 (IDE) を変更できないことに注意してください。 詳細については、「[個人課題の作成](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)」と「[グループ課題の作成](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)」を参照してください。

## 既存の課題を編集する

1. {% data variables.product.prodname_classroom_with_url %}にサインインしてください。
1. クラスルームにアクセスしてください。

    ![クラスルーム名が強調されている GitHub Education のクラスルーム タイルのスクリーンショット](/assets/images/help/classroom/classroom-card.png)

1. {% octicon "repo" aria-label="The repo icon" %} **[Assignments]\(課題\)** タブで、編集する課題の横にある {% octicon "pencil" aria-label="The pencil icon" %} をクリックします。

    {% note %}
    
    **注:** 課題のページから課題を編集することもできます。 課題のページにアクセスするには、 **[Assignments]\(課題\)** タブで課題名をクリックします。
    
    {% endnote %}

    ![編集アイコンが強調されている課題のスクリーンショット](/assets/images/help/classroom/edit-assignment.png)

1. [Assignment title]\(課題タイトル\) のテキスト フィールドをクリックし、既存のテキストを削除してから、新しい課題タイトルを入力します。

    ![[Assignment title]\(課題タイトル\) テキスト フィールドが強調されている課題エディターのスクリーンショット](/assets/images/help/classroom/edit-assignment-title.png)

1. 必要に応じて、各学生の課題リポジトリの既定のプレフィックスを編集するには、{% octicon "pencil" aria-label="The pencil icon" %} をクリックします。

    {% note %}

    **注:** 課題のタイトルまたは既定のリポジトリ プレフィックスを編集しても、既存の課題リポジトリの名前は変更されません。

    {% endnote %}

    ![学生リポジトリ プレフィックスの編集アイコンが強調されている課題エディターのスクリーンショット](/assets/images/help/classroom/edit-assignment-repository-prefix-icon.png)

    次に、[Custom repository prefix]\(カスタム リポジトリ プレフィックス\) に新しいプレフィックスを入力します。

    ![[Custom repository prefix]\(カスタム リポジトリ プレフィックス\) テキスト フィールドが強調されている課題エディターのスクリーンショット](/assets/images/help/classroom/edit-assignment-repository-prefix.png)

1. [Deadline (optional)]\(期限 (省略可能)\) のテキスト フィールドをクリックし、日付ピッカーを使って期限を割り当てます。 新しい期限を過去にすることはできず、期限を割り当て直すと、すべての学生の期限が更新されます。

    ![[Deadline (optional)]\(期限 (省略可能)\) フィールドが強調されている課題エディターのスクリーンショット](/assets/images/help/classroom/edit-assignment-deadline.png)

1. 課題の状態を変更するには、 **[Assignment status]\(課題の状態\)** ドロップダウン メニューを選んでから、 **[アクティブ]** または **[非アクティブ]** をクリックします。

    {% note %}
  
    **注:** 非アクティブの課題を学生が受け入れることはできません。 学生が課題を受け入れる必要がなくなったり、課題の期限が過ぎたら、課題の状態を非アクティブに変更する必要があります。
  
    {% endnote %}

    ![[Assignment status]\(課題の状態\) ドロップダウン メニューが強調されている課題エディターのスクリーンショット](/assets/images/help/classroom/edit-assignment-status-dropdown.png)

1.  [リポジトリの可視性] の下で、可視性を選択します。 プライベートリポジトリを使うと、学生あるいはTeamだけが提供されたフィードバックを見ることができます。

    {% note %}
    
    **注:** 課題リポジトリの可視性を変更しても、既存の課題リポジトリの可視性が遡って変更されることはありません。
    
    {% endnote %}

    ![[Repository visibility]\(リポジトリの可視性\) ラジオ ボタンが強調されている課題エディターのスクリーンショット](/assets/images/help/classroom/edit-assignment-repository-visibility.png)

1.  必要に応じて、 **[Grant students admin access to their repository]\(リポジトリへの管理者アクセス権を学生に付与する\)** をオンまたはオフにします。 リポジトリの管理者アクセス許可について詳しくは、「[リポジトリについて](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)」と「[Organization のリポジトリ ロール](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)」をご覧ください。

    {% note %}

    **注:** 課題の作成後に学生の管理者アクセス権を付与または取り消しても、既存の課題リポジトリのアクセス許可が遡って変更されることはありません。

    {% endnote %}

    ![[Grant students admin access to their repository]\(リポジトリへの管理者アクセス権を学生に付与する\) チェックボックスが強調されている課題エディターのスクリーンショット](/assets/images/help/classroom/edit-assignment-admin-access.png)

1. 課題のテンプレート リポジトリを設定または変更するには、[Add a template repository to give students starter code]\(テンプレート リポジトリを追加して学生にスターター コードを与える\) セクションで、 **[Select a repository]\(リポジトリの選択\)** ドロップダウン メニューを選びます。
       - テンプレート リポジトリを選ぶには、テキスト フィールドにリポジトリ名の入力を開始し、検索結果でリポジトリをクリックします。
       - テンプレート リポジトリを削除するには、テキスト フィールド内のテキストを削除します。

    {% note %}

    **注:** 既定では、課題により、クラスルームの名簿の各学生に対して、空のリポジトリが作成されます。

    {% endnote %}

    ![[Select a repository]\(リポジトリの選択\) ドロップダウンが強調されている課題エディターのスクリーンショット](/assets/images/help/classroom/edit-assignment-template-repository.png)

1. 新しい自動採点テストを追加するには、[Add autograding tests]\(自動採点テストの追加\) セクションの **[Add test]\(テストの追加\)** ドロップダウン メニューを選んで、表示されるオプションから採点方法をクリックします。 詳しくは、「[自動採点を使用する](/education/manage-coursework-with-github-classroom/use-autograding)」をご覧ください。
    
    ![[Add test]\(テストの追加\) ドロップダウンが強調されている課題エディターのスクリーンショット](/assets/images/help/classroom/edit-assignment-add-test.png)

    さらに、{% octicon "pencil" aria-label="The pencil icon" %} または {% octicon "trash" aria-label="The trash icon" %} を使って、既存の自動採点テストを編集または削除できます。

    ![テストの編集アイコンとテストの削除アイコンが強調されている課題エディターのスクリーンショット](/assets/images/help/classroom/edit-assignment-edit-test.png)

1.  フィードバック pull request をオンまたはオフにするには、 **[Enable feedback pull requests]\(フィードバック pull request を有効にする\)** をオンまたはオフにします。

    {% note %}
    
    **注:** 課題のフィードバック pull request を有効または無効にしても、既存の課題リポジトリのフィードバック pull request が作成または削除されることはありません。
    
    {% endnote %}

    ![[Enable feedback pull requests]\(フィードバック pull request を有効にする\) チェックボックスが強調されている課題エディターのスクリーンショット](/assets/images/help/classroom/edit-assignment-feedback.png)

{% data reusables.classroom.update-assignment %}

## 参考資料

- 「[個人課題の作成](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)」
- 「[グループ課題の作成](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)」
