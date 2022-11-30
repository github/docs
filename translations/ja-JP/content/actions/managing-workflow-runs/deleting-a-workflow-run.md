---
title: ワークフロー実行の削除
intro: 完了した、または 2 週間以上経過したワークフロー実行を削除できます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 54e494b2cff73650c0b9d5e46c8ce2772926831f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117190'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %}
1. ワークフローの実行を削除するには、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} ドロップダウン メニューを使用して、 **[ワークフローの実行の削除]** を選びます。

    ![ワークフロー実行の削除](/assets/images/help/settings/workflow-delete-run.png)
2. 確認プロンプトを確認し、 **[はい、このワークフローの実行を完全に削除します]** をクリックします。

    ![ワークフロー実行確認の削除](/assets/images/help/settings/workflow-delete-run-confirmation.png)
