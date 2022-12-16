---
title: クラスルームの管理
intro: '{% data variables.product.prodname_classroom %}を使用して、あなたが教える各コースのクラスルームを作成、管理できます。'
permissions: 'Organization owners who are admins for a classroom can manage the classroom for an organization. {% data reusables.classroom.classroom-admins-link %}'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/archive-a-classroom
  - /education/manage-coursework-with-github-classroom/manage-classrooms
ms.openlocfilehash: 0c492f26092e7e9ad47c6237a55de1cf1c90e65f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145112157'
---
## クラスルームについて

{% data reusables.classroom.about-classrooms %}

![教室](/assets/images/help/classroom/classroom-hero.png)

## クラスルームの管理について

{% data variables.product.prodname_classroom %}は、{% data variables.product.product_name %}のOrganizationアカウントを使用して、作成された各クラスルームの権限、運営、セキュリティを管理します。 各Organizationは、複数のクラスルームを持つことができます。

クラスルームの作成後、{% data variables.product.prodname_classroom %}はクラスルームにティーチングアシスタント (TA) と管理者を招待するよう促します。 各クラスルームには複数の管理者を置くことができます。 管理者には教師、TA、その他{% data variables.product.prodname_classroom %}でクラスルームの管理をさせたいコース管理者がなることができます。

TA および管理者をクラスルームに招待するには、{% data variables.product.product_name %} の個人用アカウントを、自分の Organization に Organization の所有者として招待し、クラスルームの URL を共有します。 Organizationのオーナーは、Organizationの任意のクラスルームを管理できます。 詳細については、「[Organization のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」および「[Organization に参加するようユーザーを招待する](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)」を参照してください。

クラスルームの使用を終えたら、後でクラスルーム、名簿、課題を参照するためにクラスルームをアーカイブできます。また、クラスルームが今後不要な場合は、クラスルームを削除できます。 

{% data reusables.classroom.reuse-assignment-link %}

## クラスルームの名簿について

各クラスルームには名簿があります。 名簿とは、コースに参加する学生の識別子リストのことです。

課題の URL を初めて学生に伝える際、学生は個人用アカウントで {% data variables.product.product_name %} にサインインし、その個人用アカウントをクラスルームの識別子とリンクする必要があります。 学生が個人用アカウントをリンクすると、名簿に関連づけられた個人用アカウントが表示されます。 また、学生が課題を受け入れたり提出したりした際にも、それを確認できます。

![クラスルームの名簿](/assets/images/help/classroom/roster-hero.png)

## 前提条件

{% data variables.product.prodname_classroom %}でクラスルームを管理するには、{% data variables.product.product_name %}でOrganizationアカウントが必要です。 詳細については、「[{% data variables.product.company_short %} アカウントの種類](/github/getting-started-with-github/types-of-github-accounts#organization-accounts)」および「[新しい Organization をゼロから作成](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)」を参照してください。

Organizationアカウントのクラスルームを管理するには、Organizationの{% data variables.product.prodname_classroom %}用OAuth Appを認証する必要があります。 詳細については、「[Authorizing OAuth Apps (OAuth アプリの認可)](/github/authenticating-to-github/authorizing-oauth-apps)」を参照してください。

## クラスルームを作成する

{% data reusables.classroom.sign-into-github-classroom %}
1. **[新しいクラスルーム]** をクリックします。
  ![[新しいクラスルーム] ボタン](/assets/images/help/classroom/click-new-classroom-button.png) {% data reusables.classroom.guide-create-new-classroom %}

クラスルームの作成後は、学生用の課題作成に取りかかることができます。 詳しくは、「[Git と {% data variables.product.company_short %} の初心者用課題を使用する](/education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment)」、「[個人課題の作成](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)」、「[グループ課題の作成](/education/manage-coursework-with-github-classroom/create-a-group-assignment)」、または「[課題を再利用する](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment)」を参照してください。

## クラスルームの名簿を作成する

コースに参加する学生の名簿を作成できます。

コースに既に名簿がある場合は、その名簿で学生を更新するか、その名簿を削除できます。 詳細については、「[クラスルームの名簿に学生を追加する](#adding-students-to-the-roster-for-your-classroom)」または「[クラスルームの名簿を削除する](#deleting-a-roster-for-a-classroom)」を参照してください。

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. {% data variables.product.prodname_classroom %} を LMS に接続して名簿をインポートするには、 **[{% octicon "mortar-board" aria-label="The mortar board icon" %} 学習管理システムからインポート]** をクリックして指示に従います。 詳細については、「[学習管理システムを {% data variables.product.prodname_classroom %} に接続する](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)」を参照してください。
    ![[学習管理システムからインポート] ボタン](/assets/images/help/classroom/click-import-from-a-learning-management-system-button.png)
1. 名簿の学生識別子を指定します。
     - 学生の識別子を含むファイルをアップロードして名簿をインポートするには、 **[CSV またはテキスト ファイルのアップロード]** をクリックします。
     - 名簿を手動で作成するには、学生の識別子を入力します。
       ![学生の識別子を入力するためのテキスト フィールドと [CSV またはテキスト ファイルのアップロード] ボタン](/assets/images/help/classroom/type-or-upload-student-identifiers.png)
1. **[名簿の作成]** をクリックします。
  ![[名簿の作成] ボタン](/assets/images/help/classroom/click-create-roster-button.png)

## クラスルームの名簿に学生を追加する

学生を名簿に追加するには、クラスルームに名簿がある必要があります。 名簿の作成の詳細については、「[クラスルームの名簿を作成する](#creating-a-roster-for-your-classroom)」を参照してください。

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. [クラスルームの名簿] の右側にある **[学生の更新]** をクリックします。
  ![学生の一覧の上にある [クラスルームの名簿] という見出しの右側にある [学生の更新] ボタン](/assets/images/help/classroom/click-update-students-button.png)
1. 指示に従い、名簿に学生を追加します。
    - LMS から学生をインポートするには、 **[学習管理システムから同期]** をクリックします。 LMS からの名簿のインポートの詳細については、「[学習管理システムを {% data variables.product.prodname_classroom %} に接続する](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)」を参照してください。
    - 学生を手動で追加するには、[手動で学生を追加する] で、 **[CSV またはテキスト ファイルのアップロード]** をクリックするか、学生の識別子を入力してから、 **[名簿エントリの追加]** をクリックします。
      ![クラスルームに学生を追加する方法を選択するためのモーダル](/assets/images/help/classroom/classroom-add-students-to-your-roster.png)

## クラスルームの名前を変更する

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. [Classroom name] で、クラスルームの新しい名前を入力します。
  ![クラスルーム名を入力するための [クラスルーム名] の下のテキスト フィールド](/assets/images/help/classroom/settings-type-classroom-name.png)
1. **[クラスルーム名の変更]** をクリックします。
  ![[クラスルーム名の変更] ボタン](/assets/images/help/classroom/settings-click-rename-classroom-button.png)

## クラスルームをアーカイブまたはアーカイブ解除する

{% data variables.product.prodname_classroom %}で使用しないクラスルームについては、アーカイブすることができます。 クラスルームをアーカイブすると、そのクラスルームで新しい課題を作成したり、既存の課題を編集したりすることはできません。 学生は、アーカイブされたクラスルームの課題への招待を受け入れることはできません。

{% data reusables.classroom.sign-into-github-classroom %}
1. クラスルーム名の右側にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} ドロップダウン メニューを選択し、 **[アーカイブ]** をクリックします。
  ![水平ケバブ アイコンのドロップダウン メニューと [アーカイブ] メニュー項目](/assets/images/help/classroom/use-drop-down-then-click-archive.png)
1. クラスルームをアーカイブ解除するには、クラスルーム名の右側にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} ドロップダウン メニューを選択し、 **[アーカイブ解除]** をクリックします。
  ![水平ケバブ アイコンのドロップダウン メニューと [アーカイブ解除] メニュー項目](/assets/images/help/classroom/use-drop-down-then-click-unarchive.png)

## クラスルームの名簿を削除する

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. [この名簿を削除する] で、 **[名簿の削除]** をクリックします。
  ![クラスルームの [学生] タブの [この名簿を削除する] の下にある [名簿の削除] ボタン](/assets/images/help/classroom/students-click-delete-roster-button.png)
1. 警告を読み、 **[名簿の削除]** をクリックします。
  ![クラスルームの [学生] タブの [この名簿を削除する] の下にある [名簿の削除] ボタン](/assets/images/help/classroom/students-click-delete-roster-button-in-modal.png)

## クラスルームを削除する

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. [このクラスルームを削除する] の右側にある **[クラスルームの削除]** をクリックします。
  ![[リポジトリの削除] ボタン](/assets/images/help/classroom/click-delete-classroom-button.png)
1. **警告を読みます**。
1. 削除しようとしているクラスルームに間違いがないことを確認するために、削除対象のクラスルーム名を入力します。
  ![警告とクラスルーム名を入力するテキスト フィールドがある、クラスルームを削除するためのモーダル](/assets/images/help/classroom/delete-classroom-modal-with-warning.png)
1. **[クラスルームの削除]** をクリックします。
  ![[クラスルームの削除] ボタン](/assets/images/help/classroom/delete-classroom-click-delete-classroom-button.png)
