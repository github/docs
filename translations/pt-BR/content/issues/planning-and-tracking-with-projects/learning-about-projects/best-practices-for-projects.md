---
title: 'Melhores práticas para {% data variables.product.prodname_projects_v2 %}'
intro: Confira dicas para gerenciar projetos.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/best-practices-for-managing-projects
type: overview
topics:
  - Projects
  - Issues
  - Project management
ms.openlocfilehash: 1473e08a8a6d3bf4df480b4b5ce6930753a04491
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106762'
---
Você pode usar {% data variables.product.prodname_projects_v2 %} para gerenciar seu trabalho no {% data variables.product.company_short %}, onde os seus problemas e suas solicitações de pull são mantidos. Leia sobre as dicas para gerenciar seus projetos de forma eficiente e eficaz. Para obter mais informações sobre {% data variables.product.prodname_projects_v2 %}, confira "[Sobre {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)".

## Dividir problemas grandes em problemas menores

Dividir um problema grande em problemas menores torna o trabalho mais gerenciável e permite que os integrantes da equipe trabalhem em paralelo. Isso também gera pull requests menores, que são mais fáceis de revisar.

Para acompanhar como os problemas menores encaixam-se na meta maior, use a lista de tarefas, marcos ou etiquetas. Para obter mais informações, confira "[Sobre as listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)", "[Sobre os marcos](/issues/using-labels-and-milestones-to-track-work/about-milestones)" e "[Como gerenciar rótulos](/issues/using-labels-and-milestones-to-track-work/managing-labels)".

## Comunicar

Os problemas e pull requests incluem funcionalidades embutidas para permitir que você se comunique facilmente com os seus colaboradores. Use @mentions para alertar uma pessoa ou toda a equipe sobre um comentário. Atribua colaboradores a problemas para comunicar responsabilidade. Vincule a problemas relacionados ou pull requests para comunicar como eles estão conectados.

## Fazer uso da descrição e do README

Use a descrição do seu projeto e o README para compartilhar informações sobre o projeto.

Por exemplo:

- Explicando a finalidade do projeto.
- Descrevendo as visualizações do projeto e como usá-las.
- Incluindo links relevantes e pessoas para entrar em contato e obter mais informações.

Os READMEs de projeto são compatíveis com Markdown, o que permite que você utilize imagens e formatação avançada, como links, listas e cabeçalhos. 

Para obter mais informações, confira "[Criar um {% data variables.projects.project_v2 %}](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project)".

## Usar visualizações

Use as visualizações do projeto para ver o seu projeto de ângulos diferentes.

Por exemplo:

- Filtrar por status para visualizar todos os itens não iniciados
- Agrupar por um campo personalizado de prioridade para monitorar o volume de itens de alta prioridade
- Ordenar por um campo de data personalizado para exibir os itens com a data de envio mais recente

Para obter mais informações, confira "[Personalizar uma exibição](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)".

## Tenha uma única fonte de verdade

Para evitar que as informações não fiquem sincronizadas, mantenha uma única fonte de verdade. Por exemplo, monitore uma data de envio em um único local, em vez de se espalhar por vários campos. Posteriormente, se a data de envio for alterada, você deverá apenas atualizar a data em um só lugar.

Os {% data variables.product.prodname_projects_v2 %} ficam automaticamente atualizados com os dados do {% data variables.product.company_short %}, como os destinatários, os marcos e as etiquetas. Quando um desses campos é alterado em um problema ou pull request, a alteração é refletida automaticamente no seu projeto.

## Usar automação

Você pode automatizar as tarefas para gastar menos tempo com trabalho e mais tempo no próprio projeto. Quanto menos você precisar se lembrar de fazer manualmente, mais provável será que o seu projeto fique atualizado.

Os {% data variables.product.prodname_projects_v2 %} oferecem fluxos de trabalho internos. Por exemplo, quando um problema é fechado, você pode definir automaticamente o status como "Concluído". {% ifversion projects-v2-auto-archive %}Você também pode configurar os fluxos de trabalho internos para arquivar automaticamente itens que atendam a determinados critérios.{% endif %}

Além disso, {% data variables.product.prodname_actions %} e a API do GraphQL permitem que você automatize as tarefas de gerenciamento de projetos rotineiros. Por exemplo, para manter o controle das solicitações de pull que estão aguardando revisão, crie um fluxo de trabalho que adiciona uma solicitação de pull a um projeto e define o status como "precisa de revisão". Esse processo pode ser disparado automaticamente quando uma solicitação de pull é marcada como "pronta para revisão".

- Para obter mais informações sobre os fluxos de trabalho internos, confira "[Como usar as automações internas](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations)".{% ifversion projects-v2-auto-archive %}
- Para obter mais informações sobre o arquivamento automático de itens, confira "[Como arquivar itens automaticamente](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically)".{% endif %}
- Para obter um exemplo de fluxo de trabalho, confira "[Automatizar {% data variables.product.prodname_projects_v2 %} usando o Actions](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions)".
- Para obter mais informações sobre a API, confira "[Usar a API para gerenciar {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects)".
- Para obter mais informações sobre o {% data variables.product.prodname_actions %}, confira "[{% data variables.product.prodname_actions %}](/actions)".

## Usar diferentes tipos de campos

Aproveite os vários tipos de campo para atender às suas necessidades.

Use um campo de iteração para agendar o trabalho ou criar uma linha do tempo. Você pode agrupar por iteração para ver se os itens estão equilibrados entre iterações, ou você pode filtrar para focar em uma única iteração. Os campos de iteração também permitem ver o trabalho que você realizou em iterações anteriores, o que pode ajudar no planejamento de velocidade e refletir sobre as realizações da sua equipe. Os campos de iteração também são compatíveis com pausas para mostrar quando você e sua equipe estão tirando tempo de suas iterações. Para obter mais informações, confira "[Sobre campos de iteração](/issues/planning-and-tracking-with-projects/understanding-field-types/about-iteration-fields)".

Use um único campo de seleção para rastrear informações sobre uma tarefa com base em uma lista de valores predefinidos. Por exemplo, monitore a prioridade ou a fase do projeto. Como os valores são selecionados a partir de uma lista predefinida, você pode facilmente agrupar ou filtrar focar em itens com um valor específico.

Para obter mais informações sobre os diferentes tipos de campos, confira "[Noções básicas de tipos de campos](/issues/planning-and-tracking-with-projects/understanding-field-types)".
