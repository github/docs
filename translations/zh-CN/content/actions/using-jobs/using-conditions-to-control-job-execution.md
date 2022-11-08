---
title: 使用条件控制作业执行
shortTitle: Using conditions to control job execution
intro: 除非满足条件，否则阻止作业运行。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: 2f39111eb4dca06231b582d0d955d2ea68088926
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145100139'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概述

{% note %}

注意：跳过的作业将报告其状态为“成功”。 即使是必需检查，也不会阻止拉取请求合并。

{% endnote %}

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

你将在跳过的作业上看到以下状态：

![Skipped-required-run-details](/assets/images/help/repository/skipped-required-run-details.png)
