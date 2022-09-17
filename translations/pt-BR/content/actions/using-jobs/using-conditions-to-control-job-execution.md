---
title: Usando condições para controlar a execução do trabalho
shortTitle: Using conditions to control job execution
intro: Impeça que um trabalho seja executado a menos que suas condições sejam atendidas.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: 2f39111eb4dca06231b582d0d955d2ea68088926
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145096045'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Visão geral

{% note %}

**Observação:** um trabalho ignorado relatará seu status como "Êxito". Ele não impedirá a mesclagem de uma solicitação de pull, mesmo que seja uma verificação necessária.

{% endnote %}

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

Você verá o seguinte status em um trabalho ignorado:

![Skipped-required-run-details](/assets/images/help/repository/skipped-required-run-details.png)
