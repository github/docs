---
title: 通过拉取请求留下反馈
intro: 您可以仓库内的特定拉取请求中给学生的每个作业留反馈。
permissions: People with read permissions to a repository can leave feedback in a pull request for the repository.
versions:
  free-pro-team: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/leaving-feedback-in-github
  - /education/manage-coursework-with-github-classroom/leave-feedback-with-pull-requests
---
### 关于作业的反馈拉取请求

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

对作业启用反馈拉取请求时，{% data variables.product.prodname_classroom %} 将在作业仓库中为每个学生或团队创建标题为**反馈**的拉取请求。 拉取请求会自动显示学生推送到作业仓库的默认分支的每个提交。

### 基本要求

要创建和访问反馈拉取请求，您必须在创建作业时启用反馈拉取请求。 {% data reusables.classroom.for-more-information-about-assignment-creation %}

### 在作业的拉取请求中留下反馈

{% data reusables.classroom.sign-into-github-classroom %}
1. 在教室列表中，单击包含要查看的作业的教室。 ![组织教室列表中的教室](/assets/images/help/classroom/click-classroom-in-list.png)
{% data reusables.classroom.click-assignment-in-list %}
1. 对于提交的右侧，请单击 **Review（查看）**。 ![作业提交列表中的作业查看按钮](/assets/images/help/classroom/assignments-click-review-button.png)
1. 查看拉取请求。 更多信息请参阅“[评论拉取请求](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)”。

### 延伸阅读

- "[集成 {% data variables.product.prodname_classroom %} 与 IDE](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)"
