---
title: 编辑作业
intro: 可以编辑课程中的现有作业。
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can edit assignments for that classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Edit an assignment
ms.openlocfilehash: 65814debd3fb5bf64ea83b04bef6349b7755b77f
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179846'
---
## 关于编辑作业

创建作业后，可以编辑作业的许多方面，以更好地满足自己和学生的需求。 请注意，创建作业后，无法更改作业类型（个人或组）或联机集成开发环境 (IDE)。 有关详细信息，请参阅“[创建个人作业](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)”和“[创建组作业](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)”。

## 编辑现有作业

1. 登录 {% data variables.product.prodname_classroom_with_url %}。
1. 导航到教室。

    ![GitHub Education 中教室磁贴的屏幕截图，其中突出显示了教室名称](/assets/images/help/classroom/classroom-card.png)

1. 在 {% octicon "repo" aria-label="The repo icon" %}“作业”选项卡中，在要编辑的作业旁边单击 {% octicon "pencil" aria-label="The pencil icon" %}。

    {% note %}
    
    注意：还可以从作业的页面编辑作业。 若要访问作业的页面，请在“作业”选项卡中，单击作业名称。
    
    {% endnote %}

    ![作业的屏幕截图，其中强调了编辑图标](/assets/images/help/classroom/edit-assignment.png)

1. 在“作业标题”下，单击文本字段，然后删除现有文本并键入新的作业标题。

    ![作业编辑器的屏幕截图，其中强调了“作业标题”文本字段](/assets/images/help/classroom/edit-assignment-title.png)

1. （可选）若要编辑每个学生的作业存储库的默认前缀，请单击 {% octicon "pencil" aria-label="The pencil icon" %}。

    {% note %}

    注意：编辑作业的标题或默认存储库前缀不会更改现有作业存储库的名称。

    {% endnote %}

    ![作业编辑器的屏幕截图，其中强调了学生存储库前缀的编辑图标](/assets/images/help/classroom/edit-assignment-repository-prefix-icon.png)

    然后，在“自定义存储库前缀”下键入新前缀。

    ![作业编辑器的屏幕截图，其中强调了“自定义存储库前缀”文本字段](/assets/images/help/classroom/edit-assignment-repository-prefix.png)

1. 在“截止日期(可选)”下，单击文本字段，然后使用日期选取器指定截止日期。 新的截止时间不能是过去，重新分配截止时间将更新所有学生的截止日期。

    ![作业编辑器的屏幕截图，其中强调了“截止时间(可选)”字段](/assets/images/help/classroom/edit-assignment-deadline.png)

1. 若要更改作业的状态，请选择“作业状态”下拉菜单，然后单击“活动”或“非活动”。  

    {% note %}
  
    注意：学生不能接受非活动作业。 一旦不再有学生应接受作业或作业截止日期已过，应将作业状态更改为非活动状态。
  
    {% endnote %}

    ![作业编辑器的屏幕截图，其中强调了“作业状态”下拉菜单](/assets/images/help/classroom/edit-assignment-status-dropdown.png)

1.  在“Repository visibility（仓库可见性）”下，选择可见性。 如果您使用私有仓库，只有学生或团队可以查看您提供的反馈。

    {% note %}
    
    注意：更改作业存储库的可见性不会以追溯方式更改现有作业存储库的可见性。
    
    {% endnote %}

    ![作业编辑器的屏幕截图，其中强调了“存储库可见性”单选按钮](/assets/images/help/classroom/edit-assignment-repository-visibility.png)

1.  （可选）选择或取消选择“授予学生对其存储库的管理员权限”。 有关存储库的管理员权限的详细信息，请参阅“[关于存储库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”和“[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”。

    {% note %}

    注意：创建作业后授予或撤销学生管理员访问权限不会以追溯方式更改现有作业存储库的权限。

    {% endnote %}

    ![作业编辑器的屏幕截图，其中强调了“向学生授予对其存储库的管理员访问权限”复选框](/assets/images/help/classroom/edit-assignment-admin-access.png)

1. 若要设置或更改作业的模板存储库，请在“添加模板存储库以为学生提供起始代码”部分中，选择“选择存储库”下拉菜单。
       - 若要选择模板存储库，请开始在文本字段中键入存储库名称，然后在搜索结果中单击该存储库。
       - 若要删除模板存储库，请删除文本字段中的任何文本。

    {% note %}

    注意：默认情况下，作业将为教室名册上的每个学生创建一个空存储库。

    {% endnote %}

    ![作业编辑器的屏幕截图，其中强调了“选择存储库”下拉菜单](/assets/images/help/classroom/edit-assignment-template-repository.png)

1. 若要添加新的自动评分测试，请在“添加自动评分测试”部分，选择“添加测试”下拉菜单，然后在显示的选项中单击评分方法。 有关详细信息，请参阅“[使用自动分级](/education/manage-coursework-with-github-classroom/use-autograding)”。
    
    ![作业编辑器的屏幕截图，其中强调了“添加测试”下拉菜单](/assets/images/help/classroom/edit-assignment-add-test.png)

    此外，可以使用 {% octicon "pencil" aria-label="The pencil icon" %} 或 {% octicon "trash" aria-label="The trash icon" %} 编辑或删除现有的自动评分测试。

    ![作业编辑器的屏幕截图，其中强调了编辑测试和删除测试图标](/assets/images/help/classroom/edit-assignment-edit-test.png)

1.  若要打开或关闭反馈拉取请求，请选择或取消选择“启用反馈拉取请求”。

    {% note %}
    
    注意：启用或禁用作业的反馈拉取请求不会创建或删除现有作业存储库的反馈拉取请求。
    
    {% endnote %}

    ![作业编辑器的屏幕截图，其中强调了“启用反馈拉取请求”复选框](/assets/images/help/classroom/edit-assignment-feedback.png)

{% data reusables.classroom.update-assignment %}

## 延伸阅读

- [创建单个分配](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)
- [创建组分配](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)
