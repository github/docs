---
title: 关闭议题
intro: 您可以在修复 Bug、对反馈执行操作或显示未计划工作时关闭议题。
permissions: 'Anyone can close an issue they opened.<br><br>Repository owners, collaborators on repositories owned by a personal account, and people with triage permissions or greater on repositories owned by an organization can close issues opened by others. {% data reusables.enterprise-accounts.emu-permission-repo %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Project management
shortTitle: 关闭议题
---

{% note %}

**注意：** 您还可以使用拉取请求中的关键字自动关闭议题并提交消息。 更多信息请参阅“[将拉取请求链接到议题](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword#linking-a-pull-request-to-an-issue-using-a-keyword)”。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
1. 在议题列表中，单击您想要关闭的议题。
{%- ifversion issue-close-reasons %}
1. （可选）要更改关闭议题的原因，请选择“Close issue（关闭议题）”旁边的 {% octicon "triangle-down" aria-label="The down triangle octicon" %} ，然后单击原因。 ![显示包含议题关闭原因的下拉菜单的屏幕截图](/assets/images/help/issues/close-issue-select-reason.png)
2. 单击 **Close issue（关闭议题）**。 ![显示 "关闭议题" 按钮的屏幕截图](/assets/images/help/issues/close-issue-with-reason.png)
{%- else %}
1. 在页面底部，单击 **Close issue（关闭议题）**。 ![显示 "关闭议题" 按钮的屏幕截图](/assets/images/help/issues/close-issue.png)
{% endif %}
