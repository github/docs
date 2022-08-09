---
title: 'Práticas recomendadas para {% data variables.product.prodname_projects_v2 %}'
intro: Learn tips for managing your projects.
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
---

You can use {% data variables.product.prodname_projects_v2 %} to manage your work on {% data variables.product.company_short %}, where your issues and pull requests live. Leia sobre as dicas para gerenciar seus projetos de forma eficiente e eficaz. Para obter mais informações sobre {% data variables.product.prodname_projects_v2 %}, consulte "[Sobre {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)."

## Dividir problemas grandes em problemas menores

Dividir um problema grande em problemas menores torna o trabalho mais gerenciável e permite que os integrantes da equipe trabalhem em paralelo. Isso também gera pull requests menores, que são mais fáceis de revisar.

Para acompanhar como os problemas menores encaixam-se na meta maior, use a lista de tarefas, marcos ou etiquetas. Para obter mais informações, consulte "[Sobre listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)", "[Sobre marcos](/issues/using-labels-and-milestones-to-track-work/about-milestones)" e "[Gerenciando etiquetas](/issues/using-labels-and-milestones-to-track-work/managing-labels)".

## Comunicar

Os problemas e pull requests incluem funcionalidades embutidas para permitir que você se comunique facilmente com os seus colaboradores. Use @menções para alertar uma pessoa ou uma equipe inteira sobre um comentário. Atribua colaboradores a problemas para comunicar responsabilidade. Vincule a problemas relacionados ou pull requests para comunicar como eles estão conectados.

## Fazer uso da descrição e do README

Use a descrição do seu projeto e o README para compartilhar informações sobre o projeto.

Por exemplo:

- Explicando a finalidade do projeto.
- Descrevendo as visualizações do projeto e como usá-las.
- Incluindo links relevantes e pessoas para entrar em contato e obter mais informações.

Os READMEs de projeto são compatíveis com Markdown, o que permite que você utilize imagens e formatação avançada, como links, listas e cabeçalhos.

Para obter mais informações, consulte "[Criando um {% data variables.projects.project_v2 %}](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project)."

## Usar visualizações

Use as visualizações do projeto para ver o seu projeto de ângulos diferentes.

Por exemplo:

- Filtrar por status para visualizar todos os itens não iniciados
- Agrupar por um campo personalizado de prioridade para monitorar o volume de itens de alta prioridade
- Ordenar por um campo de data personalizado para exibir os itens com a data de envio mais recente

For more information, see "[Customizing a view](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)."

## Tenha uma única fonte de verdade

Para evitar que as informações não fiquem sincronizadas, mantenha uma única fonte de verdade. Por exemplo, monitore uma data de envio em um único local, em vez de se espalhar por vários campos. Posteriormente, se a data de envio for alterada, você deverá apenas atualizar a data em um só lugar.

{% data variables.product.prodname_projects_v2 %} automatically stay up to date with {% data variables.product.company_short %} data, such as assignees, milestones, and labels. Quando um desses campos é alterado em um problema ou pull request, a alteração é refletida automaticamente no seu projeto.

## Usar automação

Você pode automatizar as tarefas para gastar menos tempo com trabalho e mais tempo no próprio projeto. Quanto menos você precisar se lembrar de fazer manualmente, mais provável será que o seu projeto fique atualizado.

{% data variables.product.prodname_projects_v2 %} offers built-in workflows. Por exemplo, quando um problema é fechado, você pode definir automaticamente o status como "Concluído".

Além disso, {% data variables.product.prodname_actions %} e a API do GraphQL permitem que você automatize as tarefas de gerenciamento de projetos rotineiros. Por exemplo, para manter o controle de pull requests que estão aguardando revisão, você pode criar um fluxo de trabalho que adiciona um pull request a um projeto e define o status para "precisa de revisão"; este processo pode ser acionado automaticamente quando um pull request é marcado como "pronto para revisão."

- For an example workflow, see "[Automating {% data variables.product.prodname_projects_v2 %} using Actions](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions)."
- For more information about the API, see "[Using the API to manage {% data variables.product.prodname_projects_v2 %}](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects)."
- Para obter mais informações sobre {% data variables.product.prodname_actions %}, consulte ["{% data variables.product.prodname_actions %}](/actions)".

## Usar diferentes tipos de campos

Aproveite os vários tipos de campo para atender às suas necessidades.

Use um campo de iteração para agendar o trabalho ou criar uma linha do tempo. Você pode agrupar por iteração para ver se os itens estão equilibrados entre iterações, ou você pode filtrar para focar em uma única iteração. Os campos de iteração também permitem ver o trabalho que você realizou em iterações anteriores, o que pode ajudar no planejamento de velocidade e refletir sobre as realizações da sua equipe. Os campos de iteração também são compatíveis com pausas para mostrar quando você e sua equipe estão tirando tempo de suas iterações. For more information, see "[About iteration fields](/issues/planning-and-tracking-with-projects/understanding-field-types/about-iteration-fields)."

Use um único campo de seleção para rastrear informações sobre uma tarefa com base em uma lista de valores predefinidos. Por exemplo, monitore a prioridade ou a fase do projeto. Como os valores são selecionados a partir de uma lista predefinida, você pode facilmente agrupar ou filtrar focar em itens com um valor específico.

For more information about the different field types, see "[Understanding field types](/issues/planning-and-tracking-with-projects/understanding-field-types)."
