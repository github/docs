---
title: 关于通知
intro: '通知提供您感兴趣的活动和对话的更新。 您可以在 {% data variables.product.product_name %} 上或通过电子邮件客户端接收通知。'
versions:
  enterprise-server: <2.21
---

### 通知类型

您收到的通知将是*参与*通知和*查看*通知。 这两种类型的通知可作为 web 通知或电子邮件通知予以接收。 更多信息请参阅：

- "[关于 web 通知](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-web-notifications)"
- "[关于电子邮件通知](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/about-email-notifications)"
- "[选择通知的递送方式](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)"

{% data reusables.notifications.outbound_email_tip %}

{% data reusables.notifications.shared_state %}

#### 参与通知

当您直接参与仓库或所在团队的活动或对话时，{% data variables.product.product_name %} 会发送*参与*通知。 您在以下情况下会收到通知：
  - 您或您所在的团队被提及。 更多信息请参阅“[基本撰写和格式语法](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)”。
  - 您所在子团队的父团队被提及。 更多信息请参阅“[关于团队](/articles/about-teams)”。
  - 您被分配到某个议题或拉取请求。
  - 您订阅的对话中新增了评论。
  - 您订阅的拉取请求有提交。
  - 您打开、评论或关闭某个议题或拉取请求。
  - 提交了批准或申请更改您所订阅的拉取请求的审查。
  - 有人申请您或您所在的团队审查拉取请求。
  - 您或您所在的团队被指定为某个文件的所有者，并且有人打开更改该文件的拉取请求。 更多信息请参阅“[关于代码所有者](/articles/about-code-owners)”。
  - 您创建或回复团队讨论。

#### 查看通知

您查看的仓库或团队讨论如有更新，{% data variables.product.product_name %} 会发送*查看*通知。  {% data reusables.notifications.auto-watch %}更多信息请参阅“[关注和取消关注仓库](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)”。
您在以下情况下会收到通知：
  - 新开了一个议题。
  - 打开的议题新增了评论。
  - 新开了一个拉取请求。
  - 打开的拉取请求新增了评论。
  - 提交新增了评论。
  - 发布了版本。 更多信息请参阅“[关于发行版](/articles/about-releases)”。 您也只能查看仓库中发布的版本，而不能查看仓库的所有更新。 更多信息请参阅“[关注和取消关注仓库的发行版](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository)”。
  - 提交了批准或申请更改拉取请求的审查。
  - 创建了团队讨论帖子或者回复了您查看的团队。
  - 新开、编辑或回复了您所在和查看团队的父团队的团队讨论帖子。 更多信息请参阅"[嵌套的团队](/articles/about-teams/#nested-teams)。"

您也可以在仪表板上浏览您关注的人员、您查看的仓库以及您所在组织的活动。 更多信息请参阅“[关于个人仪表板](/articles/about-your-personal-dashboard)”。

### 延伸阅读

- "[列出您关注的仓库](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/listing-the-repositories-youre-watching)"
- "[关注和取消关注仓库](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-repositories)"
- "[关注和取消关注团队讨论](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-team-discussions)"
- "[订阅和退订通知](/enterprise/{{ currentVersion }}/user/github/receiving-notifications-about-activity-on-github/subscribing-to-and-unsubscribing-from-notifications)"
