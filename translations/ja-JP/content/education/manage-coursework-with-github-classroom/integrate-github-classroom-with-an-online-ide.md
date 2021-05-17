---
title: GitHub ClassroomとオンラインIDEの統合
shortTitle: オンラインIDEとの統合
intro: '{% data variables.product.prodname_classroom %}で作成した課題のために、サポートされているオンライン統合開発環境 (IDE) を事前に設定できます。'
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
---

### オンラインIDEとの統合について

{% data reusables.classroom.about-online-ides %}

学生がオンラインIDEで課題を受け入れた後、学生の課題リポジトリにあるREADMEファイルには、IDEで課題を開くためのボタンが表示されます。 学生はただちに作業を開始でき、追加の設定は必要ありません。

![課題リポジトリのREADME.mdにあるオンラインIDEのボタン](/assets/images/help/classroom/assignment-repository-ide-button-in-readme.png)

### サポートされているオンラインIDE

{% data variables.product.prodname_classroom %}は、次のオンラインIDEをサポートしています。 各IDEについて、学生としての使い方を詳しく知ることができます。

| IDE                       | 詳細情報                                                                                                                                                                           |
|:------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Microsoft MakeCode Arcade | 「[{% data variables.product.prodname_classroom %}でMakeCode Arcadeを使用する](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom)」 |
| Repl.it                   | 「[GitHub ClassroomでRepl.itを使用する](/education/manage-coursework-with-github-classroom/about-using-replit-with-github-classroom)」                                                 |

### 課題用のオンラインIDEを設定する

課題の作成時に、課題で使用するオンラインIDEを選択できます。 オンラインIDEを使用する新しい課題の作成方法については、「[個人課題の作成](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)」または「[グループ課題の作成](/education/manage-coursework-with-github-classroom/create-a-group-assignment)」を参照してください。

### オンラインIDE用にOAuth Appを承認する

オンラインIDEで課題を最初に作成する際は、あなたのOrganizationのオンラインIDEのためにOAuth Appを承認する必要があります。

![オンラインIDEに対してOAuth Appを承認するための、ポップオーバーにある [Go grant access] ボタン](/assets/images/help/classroom/assignment-ide-go-grant-access-button.png)

すべてのリポジトリに対する、メタデータ、管理、コードへの**読み取り**アクセス、および管理、コードへの**書き込み**アクセスをアプリケーションに付与します。 詳しい情報については、「[OAuth App を認証する](/github/authenticating-to-github/authorizing-oauth-apps)」を参照してください。

### 参考リンク

- [READMEについて](/github/creating-cloning-and-archiving-repositories/about-readmes)
