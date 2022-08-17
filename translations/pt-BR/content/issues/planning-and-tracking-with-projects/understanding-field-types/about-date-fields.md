---
title: Sobre campos de data
shortTitle: Sobre campos de data
intro: Você pode criar campos de data personalizados que podem ser definidos digitando uma data ou usando um calendário.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
---

Você pode filtrar por valores de data usando o formato `YYYY-MM-DD` , por exemplo: `date:2022-07-01`. Você também pode usar operadores, como `>`, `>=`, `<`, `<=` e `.`. Por exemplo, data `:>2022-07-01` e `date:2022-07-01..2022-07-31`. Você também pode inserir `@today` para representar o dia atual em seu filtro. Para obter mais informações, consulte "[Filtrando projetos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

## Adicionando um campo de data

{% data reusables.projects.new-field %}
1. Selecione **Data** ![Captura de tela que mostra a opção de data](/assets/images/help/projects-v2/new-field-date.png)
1. Clique em **Salvar**. ![Captura de tela que mostra o botão salvar](/assets/images/help/projects-v2/new-field-save.png)

Como alternativa, abra a paleta de comandos pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Criar novo campo".
