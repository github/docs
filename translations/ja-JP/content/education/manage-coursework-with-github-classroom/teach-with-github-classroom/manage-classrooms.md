---
title: クラスルームの管理
intro: '{% data variables.product.prodname_classroom %}を使用して、あなたが教える各コースのクラスルームを作成、管理できます。'
permissions: Organization owners can manage a classroom for an organization.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/archive-a-classroom
  - /education/manage-coursework-with-github-classroom/manage-classrooms
---
### クラスルームについて

{% data reusables.classroom.about-classrooms %}

![クラスルーム](/assets/images/help/classroom/classroom-hero.png)

### クラスルームの管理について

{% data variables.product.prodname_classroom %}は、{% data variables.product.product_name %}のOrganizationアカウントを使用して、作成された各クラスルームの権限、運営、セキュリティを管理します。 各Organizationは、複数のクラスルームを持つことができます。

クラスルームの作成後、{% data variables.product.prodname_classroom %}はクラスルームにティーチングアシスタント (TA) と管理者を招待するよう促します。 各クラスルームには複数の管理者を置くことができます。 管理者には教師、TA、その他{% data variables.product.prodname_classroom %}でクラスルームの管理をさせたいコース管理者がなることができます。

TAおよび管理者をクラスルームに招待するには、{% data variables.product.product_name %}のユーザアカウントを、あなたのOrganizationにOrganizationのオーナーとして招待し、クラスルームのURLを共有します。 Organizationのオーナーは、Organizationの任意のクラスルームを管理できます。 詳しい情報については、「[Organizationの権限レベル](/organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization)」および「[Organizationに参加するようユーザを招待する](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)」を参照してください

クラスルームの使用を終えたら、後でクラスルーム、名簿、課題を参照するためにクラスルームをアーカイブできます。また、クラスルームが今後不要な場合は、クラスルームを削除できます。

### クラスルームの名簿について

各クラスルームには名簿があります。 名簿とは、コースに参加する学生の識別子リストのことです。

課題のURLを初めて学生に伝える際、学生はユーザアカウントで{% data variables.product.product_name %}にサインインし、そのユーザアカウントをクラスルームの識別子とリンクする必要があります。 学生がユーザアカウントをリンクすると、名簿に関連づけられたユーザアカウントが表示されます。 また、学生が課題を受け入れたり提出したりした際にも、それを確認できます。

![クラスルームの名簿](/assets/images/help/classroom/roster-hero.png)

### 必要な環境

{% data variables.product.prodname_classroom %}でクラスルームを管理するには、{% data variables.product.product_name %}でOrganizationアカウントが必要です。 詳しい情報については、「[{% data variables.product.company_short %}アカウントの種類](/github/getting-started-with-github/types-of-github-accounts#organization-accounts)」および「[新しいOrganizationをゼロから作成する](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)」を参照してください。

Organizationアカウントのクラスルームを管理するには、Organizationの{% data variables.product.prodname_classroom %}用OAuth Appを認証する必要があります。 詳しい情報については、「[OAuth App を認証する](/github/authenticating-to-github/authorizing-oauth-apps)」を参照してください。

### クラスルームを作成する

{% data reusables.classroom.sign-into-github-classroom %}
1. [**New classroom**] をクリックします。 ![[New classroom] ボタン](/assets/images/help/classroom/click-new-classroom-button.png)
{% data reusables.classroom.guide-create-new-classroom %}

クラスルームの作成後は、学生用の課題作成に取りかかることができます。 詳しい情報については、「[個人課題の作成](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)」または「[グループ課題の作成](/education/manage-coursework-with-github-classroom/create-a-group-assignment)」を参照してください。

### クラスルームの名簿を作成する

コースに参加する学生の名簿を作成できます。

コースに既に名簿がある場合は、その名簿で学生を更新するか、その名簿を削除できます。 詳しい情報については、「[クラスルームの名簿に学生を追加する](#adding-students-to-the-roster-for-your-classroom)」または「[クラスルームの名簿を削除する](#deleting-a-roster-for-a-classroom)」を参照してください。

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. {% data variables.product.prodname_classroom %}をLMSに接続して名簿をインポートするには、[{% octicon "mortar-board" aria-label="The mortar board icon" %} **Import from a learning management system**] をクリックして指示に従います。 詳しい情報については、「[学習管理システムを{% data variables.product.prodname_classroom %}に接続する](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)」を参照してください。 ![[Import from a learning management system] ボタン](/assets/images/help/classroom/click-import-from-a-learning-management-system-button.png)
1. 名簿を手動で作成するには、学生の識別子を入力します。 必要に応じて、[**Upload a CSV or text file**] をクリックし、識別子を含むファイルをアップロードてください。 ![学生の識別子を入力するためのテキストフィールドと [Upload a CSV or text file] ボタン](/assets/images/help/classroom/type-or-upload-student-identifiers.png)
1. [**Create roster**] をクリックします。 ![[Create roster] ボタン](/assets/images/help/classroom/click-create-roster-button.png)

### クラスルームの名簿に学生を追加する

学生を名簿に追加するには、クラスルームに名簿がある必要があります。 名簿の作成に関する詳細については、「[クラスルームの名簿を作成する](#creating-a-roster-for-your-classroom)」を参照してください。

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. [Classroom roster] の右側にある [**Update students**] をクリックします。 ![[Classroom roster] の右側、学生の名簿の上にある [Update students] ボタン](/assets/images/help/classroom/click-update-students-button.png)
1. 指示に従い、名簿に学生を追加します。
    - LMSから学生をインポートするには、[**Sync from a learning management system**] をクリックします。 LMSからの名簿のインポートに関する詳細については、「[学習管理システムを{% data variables.product.prodname_classroom %}に接続する](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)」を参照してください。
    - 学生を手動で追加するには、[Manually add students] で [**Upload a CSV or text file**] をクリックするか、学生の識別子を入力してから、[**Add roster entries**] をクリックします。 ![クラスルームに学生を追加する方法を選択するためのモーダル](/assets/images/help/classroom/classroom-add-students-to-your-roster.png)

### クラスルームの名前を変更する

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. [Classroom name] で、クラスルームの新しい名前を入力します。 ![[Classroom name] の下にある、クラスルーム名を入力するためのテキストフィールド](/assets/images/help/classroom/settings-type-classroom-name.png)
1. [**Rename classroom**] をクリックします。 ![[Rename classroom] ボタン](/assets/images/help/classroom/settings-click-rename-classroom-button.png)

### クラスルームをアーカイブまたはアーカイブ解除する

{% data variables.product.prodname_classroom %}で使用しないクラスルームについては、アーカイブすることができます。 クラスルームをアーカイブすると、そのクラスルームで新しい課題を作成したり、既存の課題を編集したりすることはできません。 学生は、アーカイブされたクラスルームの課題への招待を受け入れることはできません。

{% data reusables.classroom.sign-into-github-classroom %}
1. クラスルーム名の右側にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} ドロップダウンメニューを選択し、[**Archive**] をクリックします。 ![水平ケバブアイコンから表示されるドロップダウンメニューと [Archive] メニュー項目](/assets/images/help/classroom/use-drop-down-then-click-archive.png)
1. クラスルームをアーカイブ解除するには、クラスルーム名の右側にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} ドロップダウンメニューを選択し、[**Unarchive**] をクリックします。 ![水平ケバブアイコンから表示されるドロップダウンメニューと [Unarchive] メニュー項目](/assets/images/help/classroom/use-drop-down-then-click-unarchive.png)

### クラスルームの名簿を削除する

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. [Delete this roster] の下にある [**Delete roster**] をクリックします。 ![クラスルームの [Students] タブにある、[Delete this roster] の下の [Delete roster] ボタン](/assets/images/help/classroom/students-click-delete-roster-button.png)
1. 警告を読み、[**Delete roster**] をクリックします。 ![クラスルームの [Students] タブにある、[Delete this roster] の下の [Delete roster] ボタン](/assets/images/help/classroom/students-click-delete-roster-button-in-modal.png)

### クラスルームを削除する

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. [Delete this classroom] の右側にある [**Delete classroom**] をクリックします。 ![[Delete repository] ボタン](/assets/images/help/classroom/click-delete-classroom-button.png)
1. **警告を読みます**。
1. 削除しようとしているクラスルームに間違いがないことを確認するために、削除対象のクラスルーム名を入力します。 ![警告とクラスルーム名を入力するテキストフィールドがある、クラスルームを削除するためのモーダル](/assets/images/help/classroom/delete-classroom-modal-with-warning.png)
1. [**Delete classroom**] をクリックします。 ![[Delete classroom] ボタン](/assets/images/help/classroom/delete-classroom-click-delete-classroom-button.png)
