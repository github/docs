---
title: Práticas recomendadas para gerenciar projetos (beta)
intro: 'Aprenda dicas para gerenciar seus projetos em {% data variables.product.company_short %}.'
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
---

{% data reusables.projects.projects-beta %}

Você pode usar os projetos para gerenciar seu trabalho em {% data variables.product.company_short %}, onde os seus problemas e pull requests são gerados. Leia sobre as dicas para gerenciar seus projetos de forma eficiente e eficaz. Para obter mais informações sobre projetos, consulte "[Sobre projetos](/issues/trying-out-the-new-projects-experience/about-projects)".

## Dividir problemas grandes em problemas menores

Dividir um problema grande em problemas menores torna o trabalho mais gerenciável e permite que os integrantes da equipe trabalhem em paralelo. Isso também gera pull requests menores, que são mais fáceis de revisar.

Para acompanhar como os problemas menores encaixam-se na meta maior, use a lista de tarefas, marcos ou etiquetas. Para obter mais informações, consulte "[Sobre listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)", "[Sobre marcos](/issues/using-labels-and-milestones-to-track-work/about-milestones)" e "[Gerenciando etiquetas](/issues/using-labels-and-milestones-to-track-work/managing-labels)".

## Comunicar

Os problemas e pull requests incluem funcionalidades embutidas para permitir que você se comunique facilmente com os seus colaboradores. Use @menções para alertar uma pessoa ou uma equipe inteira sobre um comentário. Atribua colaboradores a problemas para comunicar responsabilidade. Vincule a problemas relacionados ou pull requests para comunicar como eles estão conectados.

## Usar visualizações

Use as visualizações do projeto para ver o seu projeto de ângulos diferentes.

Por exemplo:

- Filtrar por status para visualizar todos os itens não iniciados
- Agrupar por um campo personalizado de prioridade para monitorar o volume de itens de alta prioridade
- Ordenar por um campo de data personalizado para exibir os itens com a data de envio mais recente

Para obter mais informações, consulte "[Personalizar as visualizações do seu projeto](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".

## Tenha uma única fonte de verdade

Para evitar que as informações não fiquem sincronizadas, mantenha uma única fonte de verdade. Por exemplo, monitore uma data de envio em um único local, em vez de se espalhar por vários campos. Posteriormente, se a data de envio for alterada, você deverá apenas atualizar a data em um só lugar.

Os projetos de {% data variables.product.company_short %} ficam automaticamente atualizados com os dados de {% data variables.product.company_short %}, como os responsáveis, marcos e etiquetas. Quando um desses campos é alterado em um problema ou pull request, a alteração é refletida automaticamente no seu projeto.

## Usar automação

Você pode automatizar as tarefas para gastar menos tempo com trabalho e mais tempo no próprio projeto. Quanto menos você precisar se lembrar de fazer manualmente, mais provável será que o seu projeto fique atualizado.

Os projetos (beta) oferecem fluxos de trabalho integrados. Por exemplo, quando um problema é fechado, você pode definir automaticamente o status como "Concluído".

Além disso, {% data variables.product.prodname_actions %} e a API do GraphQL permitem que você automatize as tarefas de gerenciamento de projetos rotineiros. Por exemplo, para manter o controle de pull requests que estão aguardando revisão, você pode criar um fluxo de trabalho que adiciona um pull request a um projeto e define o status para "precisa de revisão"; este processo pode ser acionado automaticamente quando um pull request é marcado como "pronto para revisão."

- Para obter um exemplo de fluxo de trabalho, consulte "[Automatizando projetos](/issues/trying-out-the-new-projects-experience/automating-projects)".
- Para obter mais informações sobre a API, consulte "[Usando a API para gerenciar projetos](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)".
- Para obter mais informações sobre {% data variables.product.prodname_actions %}, consulte ["{% data variables.product.prodname_actions %}](/actions)".

## Usar diferentes tipos de campos

Aproveite os vários tipos de campo para atender às suas necessidades.

Use um campo de iteração para agendar o trabalho ou criar uma linha do tempo. Você pode agrupar por iteração para ver se os itens estão equilibrados entre iterações, ou você pode filtrar para focar em uma única iteração. Os campos de iteração também permitem ver o trabalho que você realizou em iterações anteriores, o que pode ajudar no planejamento de velocidade e refletir sobre as realizações da sua equipe.

Use um único campo de seleção para rastrear informações sobre uma tarefa com base em uma lista de valores predefinidos. Por exemplo, monitore a prioridade ou a fase do projeto. Como os valores são selecionados a partir de uma lista predefinida, você pode facilmente agrupar ou filtrar focar em itens com um valor específico.

Para obter mais informações sobre os diferentes tipos de campos, consulte "[Criando um projeto (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-custom-fields)".
