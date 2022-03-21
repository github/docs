---
title: Usando insights com projetos (beta)
intro: Você pode visualizar e personalizar gráficos construídos a partir dos dados do seu projeto.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Projects
  - Organizations
---

{% data reusables.projects.insights-alpha %}

## Sobre insights

Você pode usar os insights para visualizar e personalizar gráficos que usam os itens adicionados ao seu projeto como seus dados de origem. The default "Burn up" chart shows item status over time, allowing you to visualize progress. Você pode aplicar filtros para o gráfico padrão e também personalizar e salvar gráficos que estejam disponíveis para todos que possam visualizar o projeto.

![Screenshot showing an example of the default burn up chart for the current iteration](/assets/images/help/issues/burnup-example.png)

## Criando um gráfico

1. Navigate to your project.
2. No canto superior direito, clique {% octicon "graph" aria-label="the graph icon" %} para acessar os insights. Este recurso está atualmente em uma visualização privada e ainda não está disponível para todas as organizações. Se os insights ainda não estiverem habilitados para a sua organização, o ícone {% octicon "graph" aria-label="the graph icon" %} não estará disponível.
3. No menu à esquerda, clique em **Novo gráfico**.
4. Opcionalmente, para alterar o nome do novo gráfico, clique em {% octicon "triangle-down" aria-label="The triangle icon" %}, digite um novo nome e pressione <kbd>Retornar</kbd>.
5. Acima do gráfico, digite os filtros para alterar os dados utilizados para a construção do gráfico. Para obter mais informações, consulte "[Filtrando projetos](/issues/trying-out-the-new-projects-experience/filtering-projects)".
6. À direita da caixa de texto do filtro, clique em **Salvar alterações**.
