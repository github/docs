---
title: Como arquivar itens automaticamente
shortTitle: Archiving automatically
intro: Você pode configurar os fluxos de trabalho internos do projeto para arquivar automaticamente itens que atendam a critérios específicos.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-auto-archive
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 75346021f51cb8cc373b4a50aef43e0b5c7646dc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107218'
---
{% note %}

**Observação:** fluxos de trabalho internos estão disponíveis como parte de um beta limitado.

{% endnote %}

## Sobre o arquivamento automático de itens

Você pode configurar os fluxos de trabalho internos do projeto para arquivar itens automaticamente. O arquivamento de itens ajuda você a ficar abaixo do limite de {% data variables.projects.item_limit %} itens em cada projeto.

Você pode usar os filtros `is`, `reason` e `last-updated` para especificar quando um item deve ser arquivado.

Quando você habilitar o arquivamento automático de problemas ou solicitações de pull, os itens no projeto que já atendem aos critérios também serão arquivados. Pode haver um certo atraso no arquivamento de um grande número de itens que já atendem aos critérios.

Os projetos também têm um limite no número de itens arquivados que podem conter. O projeto pode conter até {% data variables.projects.archived_item_limit %} itens arquivados. Para obter mais informações de como excluir itens permanentemente, confira "[Como excluir itens](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project#deleting-items)".

## Como configurar o arquivamento automático no projeto

{% data reusables.projects.access-workflows %}
1. Na lista "Fluxos de trabalho padrão", clique em **Arquivar itens automaticamente**.
   
   ![Captura de tela mostrando fluxos de trabalho de arquivamento automático](/assets/images/help/projects-v2/archive-workflows.png)
   
1. Ao lado de **Quando**, marque os tipos de item que você deseja arquivar automaticamente.
   
   ![Captura de tela mostrando a configuração "quando" para um fluxo de trabalho](/assets/images/help/projects-v2/workflow-when-archive.png)

1. Ao lado de {% octicon "filter" aria-label="The filter icon" %}, digite os critérios de filtro que você deseja usar para arquivar itens automaticamente. Você só pode usar os filtros `is`, `reason` e `last-updated`. Para obter mais informações sobre a sintaxe de filtro, confira [Como filtrar projetos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).
   
   ![Captura de tela que mostra a área de texto do filtro](/assets/images/help/projects-v2/auto-archive-filter.png)
   
1. Se o fluxo de trabalho estiver desabilitado, clique na alternância ao lado de **Desativado** para habilitá-lo.
   
   ![Captura de tela mostrando o controle "Ativar/Desativar" de um fluxo de trabalho](/assets/images/help/projects-v2/workflow-enable.png)
   

## Leitura adicional

* "[Como arquivar itens do projeto](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project)"
* "[Como usar as automações internas](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations)"
