---
title: 使用条件控制作业执行
shortTitle: 使用条件控制作业执行
intro: 除非满足条件，否则阻止作业运行。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 概览

{% note %}

**注意：** 跳过的作业将报告其状态为“成功”。 它不会阻止拉取请求合并，即使它是必需的检查。

{% endnote %}

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

您将在跳过的作业上看到以下状态：

![Skipped-required-run-details](/assets/images/help/repository/skipped-required-run-details.png)
