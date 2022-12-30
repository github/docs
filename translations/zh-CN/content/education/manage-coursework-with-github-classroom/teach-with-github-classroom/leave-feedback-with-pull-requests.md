---
title: 通过拉取请求留下反馈
intro: 您可以仓库内的特定拉取请求中给学生的每个作业留反馈。
permissions: People with read permissions to a repository can leave feedback in a pull request for the repository.
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/leaving-feedback-in-github
  - /education/manage-coursework-with-github-classroom/leave-feedback-with-pull-requests
shortTitle: Pull requests
ms.openlocfilehash: 6315904aaaa02acc66249039e99a402b455a8871
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145099775'
---
## 关于作业的反馈拉取请求

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

当对作业启用反馈拉取请求时，{% data variables.product.prodname_classroom %} 将在作业存储库中为每个学生或团队创建一个名为“反馈”的特殊拉取请求。 拉取请求会自动显示学生推送到作业仓库的默认分支的每个提交。

## 先决条件

要创建和访问反馈拉取请求，您必须在创建作业时启用反馈拉取请求。 {% data reusables.classroom.for-more-information-about-assignment-creation %}

## 在作业的拉取请求中留下反馈

{% data reusables.classroom.sign-into-github-classroom %}
1. 在教室列表中，单击包含要查看的作业的教室。
  ![组织教室列表中的教室](/assets/images/help/classroom/click-classroom-in-list.png) {% data reusables.classroom.click-assignment-in-list %}
1. 在提交右侧，单击“查看”。
  ![作业提交列表中的作业“查看”按钮](/assets/images/help/classroom/assignments-click-review-button.png)
1. 评审拉取请求。 有关详细信息，请参阅“[评论拉取请求](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)”。

## 延伸阅读

- [将 {% data variables.product.prodname_classroom %} 与 IDE 集成](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)
