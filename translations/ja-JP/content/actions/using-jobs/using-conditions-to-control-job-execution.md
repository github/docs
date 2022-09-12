---
title: 条件を使用してジョブの実行を制御する
shortTitle: Using conditions to control job execution
intro: 条件が満たされない限り、ジョブが実行されないようにします。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: 2f39111eb4dca06231b582d0d955d2ea68088926
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145120989'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

{% note %}

**注:** スキップされたジョブでは、その状態が "成功" として報告されます。 必要なチェックであっても、pull request のマージを妨げるものではありません。

{% endnote %}

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

スキップされたジョブでは、次の状態が表示されます。

![Skipped-required-run-details](/assets/images/help/repository/skipped-required-run-details.png)
