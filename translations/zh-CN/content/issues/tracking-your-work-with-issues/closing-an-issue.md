---
title: 关闭问题
intro: 修复 bug、操作反馈或显示工作未计划时，可关闭问题。
permissions: 'Anyone can close an issue they opened.<br><br>Repository owners, collaborators on repositories owned by a personal account, and people with triage permissions or greater on repositories owned by an organization can close issues opened by others. {% data reusables.enterprise-accounts.emu-permission-repo %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Project management
shortTitle: Close an issue
ms.openlocfilehash: 889775474dc94f10c62e59916e1fa13b263b3474
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060424'
---
{% note %}

注意：还可在拉取请求和提交消息中通过关键字自动关闭问题。 有关详细信息，请参阅“[将拉取请求链接到问题](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword#linking-a-pull-request-to-an-issue-using-a-keyword)”。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
1. 在问题列表中，单击想要删除的问题。
{%- ifversion issue-close-reasons %}
1. （可选）要更改关闭问题的原因，请选择“关闭问题”旁边的 {% octicon "triangle-down" aria-label="The down triangle octicon" %}，再单击一个原因。
   ![显示包含问题关闭原因的下拉菜单的屏幕截图](/assets/images/help/issues/close-issue-select-reason.png)
2. 单击“关闭问题”。
   ![显示“关闭问题”按钮的屏幕截图](/assets/images/help/issues/close-issue-with-reason.png) {%- else %}
1. 在页面底部，单击“关闭问题”。
   ![显示“关闭问题”按钮的屏幕截图](/assets/images/help/issues/close-issue.png) {% endif %}
