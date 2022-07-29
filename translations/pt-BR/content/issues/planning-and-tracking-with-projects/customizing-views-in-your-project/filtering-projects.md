---
title: 'Filtering {% data variables.projects.projects_v2 %}'
intro: Use filters to choose which items appear in your project's views.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/filtering-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

Você pode personalizar as visualizações usando filtros para os metadados do item, como os responsáveis e as etiquetas aplicadas aos problemas e pelos campos no seu projeto. Você pode combinar filtros e salvá-los como visualizações. Para obter mais informações, consulte "[Personalizar as visualizações do seu projeto](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)".

Para filtrar um projeto, clique em {% octicon "filter" aria-label="The Filter icon" %} e comece a digitar os campos e valores que você gostaria de filtrar. À medida que você digita, serão exibidos os possíveis valores. You can also open the project command palette, by pressing {% data variables.projects.command-palette-shortcut %}, and type "Filter by" to choose from the available filters.

Using multiple filters will act as a logical AND filter. For example, `label:bug status:"In progress"` will return items with the `bug` label with the "In progress" status. {% data variables.product.prodname_projects_v2 %} does not currently support logical OR filters across multiple fields.

The same filters are available for charts you create using insights for {% data variables.product.prodname_projects_v2 %}, allowing you to filter the data used to create your charts. Para obter mais informações, consulte "[Usando insights com projetos](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects)".

## Filtrando itens

Clique em {% octicon "filter" aria-label="the filter icon" %} na parte superior da tabela para mostrar a barra "Filtrar por palavra-chave ou por campo". Comece a digitar o nome do campo e o valor que você deseja filtrar. À medida que você digita, serão exibidos os possíveis valores.

{% data reusables.projects.projects-filters %}

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Filter by."

No layout da tabela, você pode clicar nos dados de item para filtrar para itens com esse valor. Por exemplo, clique em um responsável para mostrar apenas itens para ele. Para remover o filtro, clique nos dados do item novamente.
