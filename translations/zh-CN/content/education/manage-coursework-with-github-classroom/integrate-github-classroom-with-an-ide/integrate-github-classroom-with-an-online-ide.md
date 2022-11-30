---
title: 将 GitHub Classroom 与在线 IDE 集成
shortTitle: 与在线 IDE 集成
intro: '您可以为您在 {% data variables.product.prodname_classroom %} 中创建的作业预配置受支持的在线集成开发环境 (IDE)。'
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide
---
### 关于与在线 IDE 集成

{% data reusables.classroom.about-online-ides %}

学生接受具有联机 IDE 的作业后，学生作业仓库中的 README 文件将包含一个按钮，用于打开 IDE 中的作业。 学生可以立即开始工作，无需进行其他配置。

![作业仓库的 README.md 中的在线 IDE 按钮](/assets/images/help/classroom/assignment-repository-ide-button-in-readme.png)

### 支持的在线 IDE

{% data variables.product.prodname_classroom %} 支持以下在线 IDE。 您可以详细了解每个 IDE 的学生体验。

| IDE                       | 更多信息                                                                                                                                                                               |
|:------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Microsoft MakeCode Arcade | "[关于结合使用 MakeCode Arcade 与 {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom)" |
| Repl.it                   | "[关于结合使用 Repl.it 与 GitHub Classroom](/education/manage-coursework-with-github-classroom/about-using-replit-with-github-classroom)"                                                 |

### 为作业配置在线 IDE

创建作业时，您可以选择要用于作业的在线 IDE。 要了解如何创建使用在线 IDE 的新作业，请参阅“[创建个人作业](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)”或“[创建小组作业](/education/manage-coursework-with-github-classroom/create-a-group-assignment)”。

### 为在线 IDE 授权 OAuth 应用程序

第一次使用在线 IDE 配置作业时，必须为组织的在线 IDE 授权 OAuth 应用程序。

![用于为在线 IDE 授权 OAuth 应用程序的弹出窗口中的 "Go grant access（授予访问）"按钮](/assets/images/help/classroom/assignment-ide-go-grant-access-button.png)

对于所有仓库，授予应用程序**读取**元数据、管理和代码的权限，以及**写入**问管理和代码的权限。 更多信息请参阅“[授权 OAuth 应用程序](/github/authenticating-to-github/authorizing-oauth-apps)”。

### 延伸阅读

- "[关于 README](/github/creating-cloning-and-archiving-repositories/about-readmes)"
