---
title: Sobre campos de texto e números
shortTitle: Sobre campos de texto e números
intro: Você pode adicionar campos personalizados de texto e número ao seu projeto.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
---

Você pode usar campos de texto para incluir notas ou qualquer outro texto de forma livre em seu projeto.

Campos de texto podem ser usados nos filtros, por exemplo: `field:"exact text"`. Campos de texto e títulos de itens também serão usados se você filtrar um texto sem especificar um campo.

Os campos de números também podem ser usados nos filtros. Você pode usar consultas de intervalo de `>`, `>=`, `<`, `<=` e `.` para filtrar por um campo numérico. Por exemplo: `field:5..15` ou `field:>=20`. Para obter mais informações, consulte "[Filtrando projetos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

## Adicionando um campo de texto

{% data reusables.projects.new-field %}
1. Selecione **Texto** ![Captura de tela que mostra a opção de texto](/assets/images/help/projects-v2/new-field-text.png)
1. Clique em **Salvar**. ![Captura de tela que mostra o botão salvar](/assets/images/help/projects-v2/new-field-save.png)

Como alternativa, abra a paleta de comandos pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Criar novo campo".

## Adicionando um campo de número

{% data reusables.projects.new-field %}
1. Selecione **Número** ![Captura de tela que mostra a opção número](/assets/images/help/projects-v2/new-field-number.png)
1. Clique em **Salvar**. ![Captura de tela que mostra o botão salvar](/assets/images/help/projects-v2/new-field-save.png)

Como alternativa, abra a paleta de comandos pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Criar novo campo".
