---
title: GitHub ClassroomとIDEの統合
shortTitle: IDEとの統合
intro: 'You can preconfigure a supported integrated development environment (IDE) for assignments you create in {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can integrate {% data variables.product.prodname_classroom %} with an IDE. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-online-ide
---

## About integration with an IDE

{% data reusables.classroom.about-online-ides %}

After a student accepts an assignment with an IDE, the README file in the student's assignment repository will contain a button to open the assignment in the IDE. 学生はただちに作業を開始でき、追加の設定は必要ありません。

## Supported IDEs

{% data variables.product.prodname_classroom %} supports the following IDEs. 各IDEについて、学生としての使い方を詳しく知ることができます。

| IDE                       | 詳細情報                                                                                                                                                                           |
|:------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Microsoft MakeCode Arcade | 「[{% data variables.product.prodname_classroom %}でMakeCode Arcadeを使用する](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom)」 |
| Visual Studio Code        | [{% data variables.product.prodname_classroom %} extension](http://aka.ms/classroom-vscode-ext) in the Visual Studio Marketplace                                               |

We know cloud IDE integrations are important to your classroom and are working to bring more options.

## Configuring an IDE for an assignment

You can choose the IDE you'd like to use for an assignment when you create an assignment. To learn how to create a new assignment that uses an IDE, see "[Create an individual assignment](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" or "[Create a group assignment](/education/manage-coursework-with-github-classroom/create-a-group-assignment)."

## Authorizing the OAuth app for an IDE

The first time you configure an assignment with an IDE, you must authorize the OAuth app for the IDE for your organization.

すべてのリポジトリに対する、メタデータ、管理、コードへの**読み取り**アクセス、および管理、コードへの**書き込み**アクセスをアプリケーションに付与します。 詳しい情報については、「[OAuth App を認証する](/github/authenticating-to-github/authorizing-oauth-apps)」を参照してください。

## 参考リンク

- [READMEについて](/github/creating-cloning-and-archiving-repositories/about-readmes)
