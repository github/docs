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
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
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
