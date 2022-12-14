---
title: Práticas recomendadas para gerenciar projetos (beta)
intro: Aprenda dicas para gerenciar seus projetos em {% data variables.product.company_short %}.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Projects
- Issues
- Project management
ms.openlocfilehash: 70c50bf58f99575759b91fb520fa3275127d9a49
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145126579"
---
{% data reusables.projects.projects-beta %}

Você pode usar os projetos para gerenciar seu trabalho em {% data variables.product.company_short %}, onde os seus problemas e pull requests são gerados. Leia sobre as dicas para gerenciar seus projetos de forma eficiente e eficaz. Para obter mais informações sobre projetos, confira "[Sobre os projetos](/issues/trying-out-the-new-projects-experience/about-projects)".

## <a name="break-down-large-issues-into-smaller-issues"></a>Dividir problemas grandes em problemas menores

Dividir um problema grande em problemas menores torna o trabalho mais gerenciável e permite que os integrantes da equipe trabalhem em paralelo. Isso também gera pull requests menores, que são mais fáceis de revisar.

Para acompanhar como os problemas menores encaixam-se na meta maior, use a lista de tarefas, marcos ou etiquetas. Para obter mais informações, confira "[Sobre as listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)", "[Sobre os marcos](/issues/using-labels-and-milestones-to-track-work/about-milestones)" e "[Como gerenciar rótulos](/issues/using-labels-and-milestones-to-track-work/managing-labels)".

## <a name="communicate"></a>Comunicar

Os problemas e pull requests incluem funcionalidades embutidas para permitir que você se comunique facilmente com os seus colaboradores. Use @mentions para alertar uma pessoa ou toda a equipe sobre um comentário. Atribua colaboradores a problemas para comunicar responsabilidade. Vincule a problemas relacionados ou pull requests para comunicar como eles estão conectados.

## <a name="make-use-of-the-description-and-readme"></a>Fazer uso da descrição e do README

Use a descrição do seu projeto e o README para compartilhar informações sobre o projeto.

Por exemplo:

- Explicando a finalidade do projeto.
- Descrevendo as visualizações do projeto e como usá-las.
- Incluindo links relevantes e pessoas para entrar em contato e obter mais informações.

Os READMEs de projeto são compatíveis com Markdown, o que permite que você utilize imagens e formatação avançada, como links, listas e cabeçalhos. 

Para obter mais informações, confira "[Como criar um projeto (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project#updating-your-project-description-and-readme)".

## <a name="use-views"></a>Usar visualizações

Use as visualizações do projeto para ver o seu projeto de ângulos diferentes.

Por exemplo:

- Filtrar por status para visualizar todos os itens não iniciados
- Agrupar por um campo personalizado de prioridade para monitorar o volume de itens de alta prioridade
- Ordenar por um campo de data personalizado para exibir os itens com a data de envio mais recente

Para obter mais informações, confira "[Como personalizar as exibições do projeto](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".

## <a name="have-a-single-source-of-truth"></a>Tenha uma única fonte de verdade

Para evitar que as informações não fiquem sincronizadas, mantenha uma única fonte de verdade. Por exemplo, monitore uma data de envio em um único local, em vez de se espalhar por vários campos. Posteriormente, se a data de envio for alterada, você deverá apenas atualizar a data em um só lugar.

Os projetos de {% data variables.product.company_short %} ficam automaticamente atualizados com os dados de {% data variables.product.company_short %}, como os responsáveis, marcos e etiquetas. Quando um desses campos é alterado em um problema ou pull request, a alteração é refletida automaticamente no seu projeto.

## <a name="use-automation"></a>Usar automação

Você pode automatizar as tarefas para gastar menos tempo com trabalho e mais tempo no próprio projeto. Quanto menos você precisar se lembrar de fazer manualmente, mais provável será que o seu projeto fique atualizado.

Os projetos (beta) oferecem fluxos de trabalho integrados. Por exemplo, quando um problema é fechado, você pode definir automaticamente o status como "Concluído".

Além disso, {% data variables.product.prodname_actions %} e a API do GraphQL permitem que você automatize as tarefas de gerenciamento de projetos rotineiros. Por exemplo, para manter o controle das solicitações de pull que estão aguardando revisão, crie um fluxo de trabalho que adiciona uma solicitação de pull a um projeto e define o status como "precisa de revisão". Esse processo pode ser disparado automaticamente quando uma solicitação de pull é marcada como "pronta para revisão".

- Para ver um exemplo de fluxo de trabalho, confira "[Como automatizar projetos](/issues/trying-out-the-new-projects-experience/automating-projects)".
- Para obter mais informações sobre a API, confira "[Como usar a API para gerenciar projetos](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)".
- Para obter mais informações sobre o {% data variables.product.prodname_actions %}, confira "[{% data variables.product.prodname_actions %}](/actions)".

## <a name="use-different-field-types"></a>Usar diferentes tipos de campos

Aproveite os vários tipos de campo para atender às suas necessidades.

Use um campo de iteração para agendar o trabalho ou criar uma linha do tempo. Você pode agrupar por iteração para ver se os itens estão equilibrados entre iterações, ou você pode filtrar para focar em uma única iteração. Os campos de iteração também permitem ver o trabalho que você realizou em iterações anteriores, o que pode ajudar no planejamento de velocidade e refletir sobre as realizações da sua equipe. Os campos de iteração também são compatíveis com pausas para mostrar quando você e sua equipe estão tirando tempo de suas iterações. Para obter mais informações, confira "[Como gerenciar iterações em projetos](/issues/trying-out-the-new-projects-experience/managing-iterations)".

Use um único campo de seleção para rastrear informações sobre uma tarefa com base em uma lista de valores predefinidos. Por exemplo, monitore a prioridade ou a fase do projeto. Como os valores são selecionados a partir de uma lista predefinida, você pode facilmente agrupar ou filtrar focar em itens com um valor específico.

Para obter mais informações sobre os diferentes tipos de campos, confira "[Como criar um projeto (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-custom-fields)".
