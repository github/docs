---
title: 集成 GitHub Classroom 与 IDE
shortTitle: 与 IDE 集成
intro: 'You can preconfigure a supported integrated development environment (IDE) for assignments you create in {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-online-ide
---

## About integration with an IDE

{% data reusables.classroom.about-online-ides %}

After a student accepts an assignment with an IDE, the README file in the student's assignment repository will contain a button to open the assignment in the IDE. 学生可以立即开始工作，无需进行其他配置。

## Supported IDEs

{% data variables.product.prodname_classroom %} supports the following IDEs. 您可以详细了解每个 IDE 的学生体验。

| IDE                       | 更多信息                                                                                                                                                                               |
|:------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Microsoft MakeCode Arcade | "[关于结合使用 MakeCode Arcade 与 {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom)" |
| Visual Studio Code        | [{% data variables.product.prodname_classroom %} extension](http://aka.ms/classroom-vscode-ext) in the Visual Studio Marketplace                                                   |

We know cloud IDE integrations are important to your classroom and are working to bring more options.

## Configuring an IDE for an assignment

You can choose the IDE you'd like to use for an assignment when you create an assignment. To learn how to create a new assignment that uses an IDE, see "[Create an individual assignment](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)" or "[Create a group assignment](/education/manage-coursework-with-github-classroom/create-a-group-assignment)."

## Authorizing the OAuth app for an IDE

The first time you configure an assignment with an IDE, you must authorize the OAuth app for the IDE for your organization.

对于所有仓库，授予应用程序**读取**元数据、管理和代码的权限，以及**写入**问管理和代码的权限。 更多信息请参阅“[授权 OAuth 应用程序](/github/authenticating-to-github/authorizing-oauth-apps)”。

## 延伸阅读

- "[关于 README](/github/creating-cloning-and-archiving-repositories/about-readmes)"
