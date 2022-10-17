---
title: Usar o GitHub Actions para gerenciamento de projetos
intro: 'Você pode usar {% data variables.product.prodname_actions %} para automatizar muitas das suas tarefas de gerenciamento de projeto.'
redirect_from:
  - /actions/guides/using-github-actions-for-project-management
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Project management
shortTitle: Actions for project management
ms.openlocfilehash: 5f5d1cb222824bbb451ad603e35b4986384645e4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145095010'
---
Você pode usar {% data variables.product.prodname_actions %} para automatizar suas tarefas de gerenciamento de projeto, criando fluxos de trabalho. Cada fluxo de trabalho contém uma série de tarefas que são executadas automaticamente toda vez que o fluxo de trabalho é executado. Por exemplo, você pode criar um fluxo de trabalho que é executado toda vez que um problema é criado para adicionar uma etiqueta, deixar um comentário e transferir um problema para um quadro de projeto.

## Quando os fluxos de trabalho são executados?

Você pode configurar seus fluxos de trabalho para ser executado em um cronograma ou serem acionados quando um evento ocorre. Por exemplo, você pode definir o fluxo de trabalho para ser executado quando alguém cria um problema em um repositório.

Muitos gatilhos de fluxo de trabalho são úteis para automatizar o gerenciamento do projeto.

- Um problema é aberta, atribuído ou etiquetado.
- Um comentário é adicionado a um problema.
- Um cartão de projeto foi criado ou transferido.
- Um horário agendado.

Para ver a lista completa de eventos que podem disparar fluxos de trabalho, confira "[Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows)".

## O que os fluxos de trabalho podem fazer?

Os fluxos de trabalho podem fazer muitas coisas como, por exemplo, comentar em um problema, adicionar ou remover etiquetas, mover cartões nos quadros do projeto e abrir problemas.

Você pode aprender sobre como usar {% data variables.product.prodname_actions %} para gerenciamento de projetos seguindo esses tutoriais, que incluem fluxos de trabalho de exemplo que você pode adaptar para atender às suas necessidades.

- "[Como adicionar rótulos a problemas](/actions/guides/adding-labels-to-issues)"
- "[Como remover um rótulo quando um cartão é adicionado a uma coluna de quadro de projetos](/actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column)"
- "[Como transferir problemas atribuídos em quadros de projetos](/actions/guides/moving-assigned-issues-on-project-boards)"
- "[Como comentar sobre um problema quando um rótulo é adicionado](/actions/guides/commenting-on-an-issue-when-a-label-is-added)"
- "[Como fechar problemas inativos](/actions/guides/closing-inactive-issues)"
- "[Como agendar a criação de problemas](/actions/guides/scheduling-issue-creation)"
