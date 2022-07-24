---
title: 重复使用分配
intro: 您可以在多个教室（包括其他组织中的教室）中重复使用现有作业。
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can reuse assignments from a classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: 重复使用分配
---

## 关于重复使用作业

您可以在您有权访问的任何其他教室（包括其他组织中的教室）中重复使用现有的个人或小组作业。 您还可以在一个教室中一次重复使用多个作业。 如果您选择重复使用作业，{% data variables.product.prodname_classroom %} 会将作业复制到您选择的教室。 如果作业使用模板存储库，并且您选择在其他组织的教室中重复使用它，{% data variables.product.prodname_classroom %} 将在目标组织中创建存储库及其内容的副本。

复制的作业包括作业详细信息，例如名称、源存储库、自动评分测试和首选编辑器。 复制任务后，您可以对其进行编辑以进行更改。 您无法对首选编辑器进行更改。

## 重复使用作业

1. 登录 {% data variables.product.prodname_classroom_with_url %}。
1. 导航到包含要重复使用的作业的教室。

   ![组织教室列表中的教室](/assets/images/help/classroom/click-classroom-in-list.png)

1. 在作业列表中，单击要重复使用的作业。

   ![课堂作业列表中的作业](/assets/images/help/classroom/click-assignment-in-list.png)

1. 选择页面右上角的 **{% octicon "pencil" aria-label="The pencil icon" %} Edit（编辑）**下拉菜单，然后单击 **{% octicon "sync" aria-label="The sync icon" %} Reuse assignment（重复使用作业）**。

   ![重复使用作业按钮](/assets/images/help/classroom/reuse-assignment-button.png)

1. 在“Reuse assignment（重复使用作业）”模式中，使用 **Choose an organization（选择组织）**下拉菜单选择您希望作业所在的组织。  然后使用 **Choose a classroom（选择教室）**下拉菜单选择要将作业复制到的组织中教室。

   ![重复使用作业模式](/assets/images/help/classroom/reuse-assignment-modal.png)

1. 单击 **Create assignment（创建作业）**。
1. 作业将复制到所选教室，并显示一条确认消息。 如果选择在模板存储库中重复使用作业，则复制过程可能需要几分钟才能完成，并且可能需要刷新页面才能看到已完成的消息。

   ![重复使用的作业已完成消息](/assets/images/help/classroom/reuse-assignment-completed-message.png)

## 重复使用教室中的多个作业

1. 登录 {% data variables.product.prodname_classroom_with_url %}。
2. 在教室名称的右侧，选择 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 下拉菜单，然后单击“**Reuse assignment（重复使用作业）**”。

   ![强调下拉列表的课堂概述页面的屏幕截图](/assets/images/help/classroom/classroom-reuse-assignment-modal.png)

3. 在“Reuse assignment（重复使用作业）”模式中，使用 **Choose an organization（选择组织）**下拉菜单选择您希望作业所在的组织。  然后使用 **Choose a classroom（选择教室）**下拉菜单选择要将作业复制到的组织中教室。

   ![重用作业模式的屏幕截图](/assets/images/help/classroom/reuse-multiple-assignments-modal.png)

4. 在每个作业的左侧，选择要重复使用的作业。

   ![多个选定作业的屏幕截图](/assets/images/help/classroom/multiple-assignments-selected.png)

5. 单击 **Create assignments（创建作业）**。
6. 作业将复制到所选教室。 如果选择使用模板存储库重用分配，则复制过程可能需要几分钟才能完成。
