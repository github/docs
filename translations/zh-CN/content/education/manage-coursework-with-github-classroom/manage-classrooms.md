---
title: 管理教室
intro: '您可以为您使用 {% data variables.product.prodname_classroom %} 教授的每个课程创建和管理一个教室。'
permissions: Organization owners can manage a classroom for an organization.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/archive-a-classroom
---

### 关于教室

{% data reusables.classroom.about-classrooms %}

![教室](/assets/images/help/classroom/classroom-hero.png)

### 关于教室的管理

{% data variables.product.prodname_classroom %} 使用 {% data variables.product.product_name %} 上的组织帐户来管理您创建的每个教室的权限、管理和安全。 每个组织可以有多个教室。

创建教室后，{% data variables.product.prodname_classroom %} 将提示您邀请助教 (TA) 和管理员到教室。 每个教室可以有一个或多个管理员。 管理员可以是教师、TA 或您希望其控制您在 {% data variables.product.prodname_classroom %} 上的教室的任何其他课程管理员。

邀请 TA 和管理员进入您的教室，操作方法是以组织所有者身份邀请 {% data variables.product.product_name %} 上的用户帐户到您的组织，并共享您教室的 URL。 组织所有者可以管理组织的任何教室。 更多信息请参阅“[组织的权限级别](/organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization)”和“[邀请用户加入您的组织](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)”。

使用完教室后，可以存档教室，以后可以参考该教室、名册和作业，或者如果您不再需要该教室，也可以将其删除。

### 关于教室名册

每个教室都有一个名册。 名册是参加您的课程的学生的标识符列表。

首次与学生共享作业 URL 时，学生必须使用其用户帐户登录 {% data variables.product.product_name %}，才能将用户帐户链接到教室的标识符。 学生链接用户帐户后，您可以在名册中看到关联的用户帐户。 您还可以查看学生何时接受或提交作业。

![教室名册](/assets/images/help/classroom/roster-hero.png)

### 基本要求

您必须在 {% data variables.product.product_name %} 上拥有组织帐户才能管理 {% data variables.product.prodname_classroom %} 上的教室。 更多信息请参阅“[{% data variables.product.company_short %} 帐户的类型](/github/getting-started-with-github/types-of-github-accounts#organization-accounts)”和“[从头开始创建新组织](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”。

您必须为组织授权 {% data variables.product.prodname_classroom %} 的 OAuth 应用程序才可管理组织帐户的教室。 更多信息请参阅“[授权 OAuth 应用程序](/github/authenticating-to-github/authorizing-oauth-apps)”。

### 创建教室

{% data reusables.classroom.sign-into-github-classroom %}
1. 单击 **New classroom（新教室）**。 !["New classroom（新教室）"按钮](/assets/images/help/classroom/click-new-classroom-button.png)
{% data reusables.classroom.guide-create-new-classroom %}

创建教室后，您便可开始为学生创建作业。 更多信息请参阅“[创建个人作业](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)”或“[创建小组作业](/education/manage-coursework-with-github-classroom/create-a-group-assignment)”。

### 为教室创建名册

您可以创建参加本课程的学生名册。

如果您的课程已有名册，您可以更新名册上的学生或删除名册。 更多信息请参阅“[将学生添加到教室的名册](#adding-students-to-the-roster-for-your-classroom)”或“[删除教室的名册](#deleting-a-roster-for-a-classroom)”。

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. 要将 {% data variables.product.prodname_classroom %} 连接到 LMS 并导入名册，请单击 {% octicon "mortar-board" aria-label="The mortar board icon" %} **从学习管理系统导入**并按照说明操作。 更多信息请参阅“[将学习管理系统连接到 {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)”。 !["Import from a learning management system（从学习管理系统导入）"按钮](/assets/images/help/classroom/click-import-from-a-learning-management-system-button.png)
1. 要手动创建名册，请键入学生标识符。 （可选）单击 **Upload a CSV or text file（上传 CSV 或文本文件）**以上传包含标识符的文件。 ![用于键入学生标识符的文本字段和"上传 CSV 或文本文件"按钮](/assets/images/help/classroom/type-or-upload-student-identifiers.png)
1. 单击 **Create roster（创建名册）**。 !["创建名册" 按钮](/assets/images/help/classroom/click-create-roster-button.png)

### 将学生添加到教室的名册

教室必须有一个现有的名册，才能将学生添加到名册中。 有关创建名册的更多信息，请参阅"[为教室创建名册](#creating-a-roster-for-your-classroom)。

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. 在“Classroom roster（教室名册）”右侧，单击 **Update students（更新学生）**。 ![学生列表上方"教室名册"标题右侧的"更新学生"按钮](/assets/images/help/classroom/click-update-students-button.png)
1. 按照说明将学生添加到名册中。
    - 要从 LMS 导入学生，请点击 **Sync from a learning management system（从学习管理系统同步）**。 有关将从 LMS 导入名册的更多信息，请参阅“[将学习管理系统连接到 {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom)”。
    - 要手动添加学生，在“Manually add students（手动添加学生）”下，单击 **Upload a CSV or text file（上传 CSV 或文本文件）**或输入学生的标识符，然后单击 **Add roster entries（添加名册条目）**。 ![用于选择将学生添加到课堂的方法的模式](/assets/images/help/classroom/classroom-add-students-to-your-roster.png)

### 重命名教室

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. 在“Classroom name（教室名称）”下，为教室输入一个新的名称。 !["教室名称"下用于键入教室名称的文本字段](/assets/images/help/classroom/settings-type-classroom-name.png)
1. 单击 **Rename classroom（重命名教室）**。 !["重命名教室"按钮](/assets/images/help/classroom/settings-click-rename-classroom-button.png)

### 存档或取消存档教室

您可以在 {% data variables.product.prodname_classroom %} 上存档不再使用的教室。 存档教室时，无法为教室创建新作业或编辑现有作业。 学生不能在存档的教室中接受分配作业的邀请。

{% data reusables.classroom.sign-into-github-classroom %}
1. 在教室名称的右侧，选择 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 下拉菜单，然后单击“**Archive（存档）**”。 ![水平烤肉串图标的下拉菜单和"存档"菜单项](/assets/images/help/classroom/use-drop-down-then-click-archive.png)
1. 要取消存档教室，在教室名称的右侧，选择 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 下拉菜单，然后单击 **Unarchive（取消存档）**。 ![水平烤肉串图标的下拉菜单和"Unarchive（取消存档）"菜单项](/assets/images/help/classroom/use-drop-down-then-click-unarchive.png)

### 删除教室的名册

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-students %}
1. 在“Delete this roster（删除此名册）”下，单击 **Delete roster（删除名册）**。 ![教室的"学生"选项卡中"删除此名册"下的"删除名册"按钮](/assets/images/help/classroom/students-click-delete-roster-button.png)
1. 阅读警告，然后单击 **Delete roster（删除名册）**。 ![教室的"学生"选项卡中"删除此名册"下的"删除名册"按钮](/assets/images/help/classroom/students-click-delete-roster-button-in-modal.png)

### 删除教室

{% data reusables.classroom.sign-into-github-classroom %}
{% data reusables.classroom.click-classroom-in-list %}
{% data reusables.classroom.click-settings %}
1. 在“Delete this classroom（删除此教室）”右侧，单击 **Delete classroom（删除教室）**。 !["删除仓库"按钮](/assets/images/help/classroom/click-delete-classroom-button.png)
1. **阅读警告**。
1. 要验证删除的是否为正确的教室，请键入要删除的教室的名称。 ![用于删除包含警告的教室的模式和教室名称的文本字段](/assets/images/help/classroom/delete-classroom-modal-with-warning.png)
1. 单击 **Delete classroom（删除教室）**。 !["删除教室"按钮](/assets/images/help/classroom/delete-classroom-click-delete-classroom-button.png)
