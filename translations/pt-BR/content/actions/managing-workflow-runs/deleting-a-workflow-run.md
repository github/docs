---
title: Excluir execução de um fluxo de trabalho
intro: Você pode excluir uma execução do fluxo de trabalho que foi concluída ou que tem mais de duas semanas.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 54e494b2cff73650c0b9d5e46c8ce2772926831f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095096'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %}
1. Para excluir a execução de um fluxo de trabalho, use o menu suspenso {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e selecione **Excluir execução de fluxo de trabalho**.

    ![Excluir execução de um fluxo de trabalho](/assets/images/help/settings/workflow-delete-run.png)
2. Revise a solicitação de confirmação e clique em **Sim, excluir esta execução de fluxo de trabalho permanentemente**.

    ![Excluir uma confirmação de execução de fluxo de trabalho](/assets/images/help/settings/workflow-delete-run-confirmation.png)
