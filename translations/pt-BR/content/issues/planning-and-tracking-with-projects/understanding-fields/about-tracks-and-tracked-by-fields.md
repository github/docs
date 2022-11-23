---
title: Sobre campos de acompanhamento e acompanhados por
shortTitle: About Tracks and Tracked-by fields
intro: Você pode exibir as subtarefas dos problemas nos projetos.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-tasklists
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 74cd26d20882a00ac8c7ac1d109cc6810286cec6
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159343'
---
{% data reusables.projects.tasklists-release-stage %}

Você pode habilitar os campos Acompanhamento e Acompanhados por nos projetos para ver as relações entre os problemas à medida que adiciona subtarefas em listas de tarefas. Para obter mais informações de como criar hierarquias de problemas em listas de tarefas, confira "[Sobre listas de tarefas](/issues/tracking-your-work-with-issues/about-tasklists)".

O campo Acompanhado por pode ser usado para agrupar itens, criando uma exibição que mostre claramente as subtarefas de cada problema e o trabalho necessário para concluí-las. Para obter mais informações, confira "[Agrupamento por valores de campo no layout de tabela](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#grouping-by-field-values-in-table-layout)".

Você também pode filtrar pelo campo Acompanhado por para exibir apenas os itens que são acompanhados por problemas específicos. Comece a digitar "acompanhado por" e selecione um problema na lista ou, se você souber o repositório e o número do problema, digite o filtro abaixo na íntegra.

```
tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>"
```

Para usar o filtro, substitua `<OWNER>` pelo proprietário do repositório, `<REPO>` pelo nome do repositório e `<ISSUE NUMBER>` pelo número do problema. Para obter mais informações, confira "[Filtragem de projetos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

### Como habilitar o campo Acompanhado por

Você pode habilitar o campo Acompanhado por para ver quais problemas estão acompanhando um item no projeto.

1. Na exibição de tabela, clique em {% octicon "plus" aria-label="the plus icon" %} no cabeçalho do campo mais à direita.
   
   ![Captura de tela mostrando o botão Novo campo](/assets/images/help/projects-v2/new-field-button.png)
   
1. Em "Campos ocultos", clique em **Acompanhado por**.
   
   ![Captura de tela mostrando o nome do campo](/assets/images/help/projects-v2/select-tracked-by-field.png)
   

### Como habilitar o campo Acompanhamentos

Você pode habilitar o campo Acompanhamentos para ver quais outros problemas um item no projeto está acompanhando.

1. Na exibição de tabela, clique em {% octicon "plus" aria-label="the plus icon" %} no cabeçalho do campo mais à direita.
   
   ![Captura de tela mostrando o botão Novo campo](/assets/images/help/projects-v2/new-field-button.png)
   
1. Em "Campos ocultos", clique em **Acompanhamentos**.
   
   ![Captura de tela mostrando o nome do campo](/assets/images/help/projects-v2/select-tracks-field.png)
   
