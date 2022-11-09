---
title: 将 GitHub Codespaces 与 GitHub Classroom 配合使用
shortTitle: Using Codespaces with GitHub Classroom
product: '{% data reusables.gated-features.codespaces-classroom-articles %}'
intro: '你可以将 {% data variables.product.prodname_github_codespaces %} 用作你作业中的首选编辑器，使学生能够通过一键式设置访问基于浏览器的 Visual Studio Code 环境。'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can enable {% data variables.product.prodname_github_codespaces %} for their organization and integrate {% data variables.product.prodname_github_codespaces %} as the supported editor for an assignment. {% data reusables.classroom.classroom-admins-link %}'
ms.openlocfilehash: 062d7dc201a1f3c6ac1ee8bd92220b31c89f33b8
ms.sourcegitcommit: ca040a1871ab5e929b596686ef955b02c5afa051
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/02/2022
ms.locfileid: '148130995'
---
## 关于 {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} 是一个基于云的即时开发环境，它使用容器为你提供用于开发的通用语言、工具和实用程序。 {% data variables.product.prodname_github_codespaces %} 也是可配置的，使你能为项目的所有用户创建相同的自定义开发环境。 有关详细信息，请参阅“[{% data variables.product.prodname_github_codespaces %} 概述](/codespaces/overview)”。

在组织或企业中启用 {% data variables.product.prodname_github_codespaces %} 后，用户可以从组织或企业存储库中的任何分支或提交创建 codespace，并开始使用基于云的计算资源进行开发。 可以使用 Visual Studio Code 从浏览器或本地连接到 codespace。 {% data reusables.codespaces.links-to-get-started %}

将 {% data variables.product.prodname_github_codespaces %} 设置为 GitHub Classroom 作业的首选编辑器对学生和教师都很有用。 {% data variables.product.prodname_github_codespaces %} 是使用租赁设备或无法访问本地 IDE 设置的学生的理想选择，因为每个 codespace 都是基于云的，不需要进行本地设置。 学生可以直接在浏览器中为 Visual Studio Code 中的作业存储库启动 codespace，并立即开始开发，而无需进一步的配置。  

对于具有复杂设置环境的作业，教师可以自定义存储库 codespace 的开发容器配置。 这可以确保学生在创建 codespace 时，它会自动打开由教师配置的开发环境。 有关开发容器的详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”。

{% note %}

注意：各个 codespace 会在停止且长时间未使用的情况下自动删除。 有关详细信息，请参阅“[配置 codespace 的自动删除](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)”。

{% endnote %}

## 关于经过验证的教师的 {% data variables.product.prodname_codespaces %} 教育权益

{% data variables.product.prodname_codespaces %} 教育权益为经过验证的教师提供每月限额的免费 {% data variables.product.prodname_github_codespaces %} 小时数，可在 {% data variables.product.prodname_classroom %} 中使用。 免费限额估计足够一个每月有 5 次作业的 50 人班级使用，在一台双核机器上，每个学生存储 1 个 codespace。

{% data reusables.classroom.free-limited-codespaces-for-verified-teachers-beta-note %}

若要成为经过验证的教师，需要获得教师权益的批准。 有关详细信息，请参阅“[以教师身份申请加入 {% data variables.product.prodname_global_campus %}](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers/apply-to-github-global-campus-as-a-teacher)”。 

在确认你是一名经过验证的教师后，请访问 [{% data variables.product.prodname_global_campus %} for Teachers](https://education.github.com/globalcampus/teacher)，将组织升级为 GitHub 团队。 有关详细信息，请参阅“[GitHub 的产品](/get-started/learning-about-github/githubs-products#github-team)”。 

如果你有资格获得 {% data variables.product.prodname_codespaces %} 教育权益，则当你在 {% data variables.product.prodname_classroom %} 中为组织启用 {% data variables.product.prodname_github_codespaces %} 时，GitHub 会自动添加 Codespace 策略，以将组织内所有 codespace 的计算机类型限制为双核计算机。 这有助于充分利用免费的 {% data variables.product.prodname_github_codespaces %} 使用量。 但是，可以在组织设置中更改或移除这些策略。 有关详细信息，请参阅“[限制对计算机类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”。

当 {% data variables.product.prodname_codespaces %} 教育权益移出 beta 版时，如果你的组织超出 {% data variables.product.prodname_github_codespaces %} 的免费使用限额，则你的组织将因额外使用量而付费。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#about-billing-for-codespaces)”。

## 为组织启用 {% data variables.product.prodname_codespaces %}

对于使用 {% data variables.product.prodname_team %} 的组织，{% data variables.product.prodname_github_codespaces %} 可与 {% data variables.product.prodname_classroom %} 搭配使用。 如果你有资格获得 {% data variables.product.prodname_codespaces %} 教育权益，则必须通过 {% data variables.product.prodname_classroom %} 启用 {% data variables.product.prodname_github_codespaces %}，而不是直接在你的组织设置中启用它。 否则，你的组织将直接针对 {% data variables.product.prodname_github_codespaces %} 的所有使用量付费。

### 创建新课堂时为组织启用 Codespaces
{% data reusables.classroom.sign-into-github-classroom %}
1. 单击“新建教室”。
   
  ![“新建课堂”按钮](/assets/images/help/classroom/click-new-classroom-button.png)

1. 在组织列表中，单击您希望用于教室的组织。 有资格使用 {% data variables.product.prodname_github_codespaces %} 的组织将有一条备注，显示他们符合条件。 （可选）您可以创建一个新组织。 有关详细信息，请参阅[从头开始创建新组织](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)。

  ![为具有 codespace 资格的课堂选择组织](/assets/images/help/classroom/org-view-codespaces-eligibility.png)

1. 在“命名课堂”页的“课堂中的 {% data variables.product.prodname_codespaces %}”下，单击“启用”。 请注意，这将为组织中的所有存储库和用户启用 {% data variables.product.prodname_github_codespaces %}。

  ![在“设置课堂基础知识”页中为组织启用 Codespaces](/assets/images/help/classroom/setup-classroom-enable-codespaces-button.png)

1. 准备好创建新课堂时，单击“创建课堂”。

### 通过现有课堂为组织启用 Codespaces

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. 在“{% data variables.product.prodname_github_codespaces %}”下，单击“启用”。 这将为组织中的所有存储库和用户启用 {% data variables.product.prodname_github_codespaces %}。 还添加了新的 Codespace 策略，用于将组织中所有 codespace 的计算机类型限制为双核计算机。 
  
  ![为现有课堂设置中的组织启用 Codespaces](/assets/images/help/classroom/classroom-settings-enable-codespaces-button.png)

还可以使用与上述相同的方法为组织禁用 {% data variables.product.prodname_github_codespaces %}。 请注意，这将为组织中的所有用户和存储库禁用 {% data variables.product.prodname_github_codespaces %}。 

## 配置作业以使用 {% data variables.product.prodname_codespaces %}
若要使学生可以使用 {% data variables.product.prodname_github_codespaces %} 来完成作业，可以选择 {% data variables.product.prodname_github_codespaces %} 作为作业支持的编辑器。 创建新作业时，在“添加初学者代码并选择可选的联机 IDE”页的“添加受支持的编辑器”下，从下拉菜单中选择“{% data variables.product.prodname_github_codespaces %}”。 

![选择 Codespaces 作为作业支持的编辑器](/assets/images/help/classroom/select-supported-editor-including-codespaces.png)

如果使用模板存储库完成作业，则可以在存储库中定义开发容器，以便在学生启动 codespace 处理作业时自定义可供学生使用的工具和运行时。 如果未定义开发容器，{% data variables.product.prodname_github_codespaces %} 将使用默认配置，其中包含学生可能需要开发的许多常用工具。 有关定义开发容器的详细信息，请参阅“[将开发容器配置添加到存储库](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)”。

## 使用 {% data variables.product.prodname_github_codespaces %} 启动作业

当学生打开作业时，存储库的自述文件包括其教师建议的 IDE，他们应该使用该 IDE 来完成工作。

![学生作业存储库自述文件中 Codespaces 备注的屏幕截图](/assets/images/help/classroom/student-codespaces-readme-link.png)

学生可以通过单击 README 中的“在 GitHub Codespace 中打开”按钮，或通过单击作业存储库主页上的“{% octicon "code" aria-label="The code icon" %} 代码”按钮，然后选择“Codespaces”选项卡来启动新的或现有的 codespace。在“Codespaces”选项卡中，可以选择现有 codespace 或新建一个   。 有关详细信息，请参阅“[创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)”。

![在作业存储库中启动新的 codespace](/assets/images/help/classroom/student-launch-new-codespace.png)

教师可以在作业概述页中查看每个学生的作业 codespace。 可以单击每个学生行右侧的 Codespaces 图标以启动 codespace。 

![学生 codespace 的教师作业概述](/assets/images/help/classroom/teacher-assignment-view-with-codespaces.png)

通过浏览器连接到 codespace 时，会自动启用自动保存。 如果要将更改保存到存储库，则需要提交更改并将其推送到远程分支。 如果默认情况下允许 codespace 在没有互动的情况下运行 30 分钟，codespace 将超时并停止运行。 将保留上次更改以来的数据。 有关 codespace 生命周期的详细信息，请参阅“[Codespace 生命周期](/codespaces/developing-in-codespaces/codespaces-lifecycle)。”
