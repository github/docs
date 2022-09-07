---
title: 重用作业
intro: 你可以在多个教室中重用现有作业，包括不同组织中的教室。
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can reuse assignments from a classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Reuse an assignment
ms.openlocfilehash: 4c1c9048847affef95d5c904b188e68d2c183b43
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066912'
---
## 关于重用作业

你可在有权访问的任何其他教室（包括其他组织中的教室）中重用现有的个人或小组作业。 你还可以从一个教室一次性重用多个作业。 如果选择重用作业，{% data variables.product.prodname_classroom %} 会将作业复制到你所选择的教室。 如果作业使用模板存储库并且你选择在其他组织的教室中重复使用它，{% data variables.product.prodname_classroom %} 将在目标组织中创建存储库及其内容的副本。

复制的作业包括作业详细信息，例如名称、源存储库、自动分级测试和首选编辑器。 可以在复制作业后对其进行编辑，以进行更改。 无法更改首选编辑器。 

## 重用作业

1. 登录 {% data variables.product.prodname_classroom_with_url %}。
1. 导航到包含要重用的作业的教室。

   ![组织教室列表中的教室](/assets/images/help/classroom/click-classroom-in-list.png)

1. 在作业列表中，单击要重用的作业。

   ![课堂作业列表中的作业](/assets/images/help/classroom/click-assignment-in-list.png)

1. 选择页面右上角的“{% octicon "pencil" aria-label="The pencil icon" %} 编辑”下拉菜单，然后单击“{% octicon "sync" aria-label="The sync icon" %} 重用作业” 。

   ![“重用作业”按钮](/assets/images/help/classroom/reuse-assignment-button.png)

1. 在“重用作业”模式中，使用“选择组织”下拉菜单选择希望作业所在的组织。  然后，使用“选择教室”下拉菜单选择组织内要将作业复制到的教室。

   ![“重用作业”模式](/assets/images/help/classroom/reuse-assignment-modal.png)

1. 单击“创建作业”。
1. 将作业复制到选定的教室，并显示确认消息。 如果选择通过模板存储库重用作业，则复制过程可能需要几分钟才能完成，你可能需要刷新页面才能看到已完成的消息。

   ![已完成重用作业的消息](/assets/images/help/classroom/reuse-assignment-completed-message.png)

## 从一个教室重用多个作业

1. 登录 {% data variables.product.prodname_classroom_with_url %}。
2. 在教室名称右侧，选择 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 下拉菜单，然后单击“重用作业”。
   
   ![“教室概述”页的屏幕截图，其中突出显示了下拉菜单](/assets/images/help/classroom/classroom-reuse-assignment-modal.png)

3. 在“重用作业”模式中，使用“选择组织”下拉菜单选择希望作业所在的组织。  然后，使用“选择教室”下拉菜单选择组织内要将作业复制到的教室。
   
   ![重用作业模式的屏幕截图](/assets/images/help/classroom/reuse-multiple-assignments-modal.png)

4. 在每个作业的左侧，选择要重用的作业。

   ![多个所选作业的屏幕截图](/assets/images/help/classroom/multiple-assignments-selected.png)

5. 单击“创建作业”。
6. 作业将复制到所选教室。 如果选择通过模板存储库重用作业，则复制过程可能需要几分钟才能完成。
