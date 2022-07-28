---
title: About iteration fields
shortTitle: About iteration fields
intro: Você pode criar iterações para planejar os itens de trabalho e grupos futuros.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-iterations
type: tutorial
topics:
  - Projects
---

Você pode criar um campo de iteração para associar itens com blocos de tempo repetidos específicos. As iterações podem ser definidas para qualquer período de tempo, podem incluir intervalos e podem ser editadas individualmente para modificar o nome e o intervalo de datas. Com os projetos, você pode agrupar por iteração para visualizar o equilíbrio do trabalho futuro, usar filtros para focar em uma única iteração, bem como ordenar por iteração.

You can filter for iterations by specifying the iteration name or `@current` for the current iteration, `@previous` for the previous iteration, or `@next` for the next iteration. You can also use operators such as `>`, `>=`, `<`, `<=`, and `..`.  For example, `iteration:>"Iteration 4"` and `iteration:<@current`. Para obter mais informações, consulte "[Filtrando projetos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

Ao criar um campo de iteração, três iterações serão criadas automaticamente.  Você pode adicionar iterações adicionais e fazer outras alterações na página de configurações do seu projeto.

![Captura de tela que mostra as configurações para um campo de iteração](/assets/images/help/issues/iterations-example.png)

## Adding an iteration field

{% data reusables.projects.new-field %}
1. Select **Iteration** ![Screenshot showing the iteration option](/assets/images/help/projects-v2/new-field-iteration.png)
2. Optionally, if you don't want the iteration to start today, select the calendar dropdown next to "Starts on" and choose a new start date. ![Screenshot showing the iteration start date](/assets/images/help/projects-v2/iteration-field-starts.png)
3. Para mudar a duração de cada iteração, digite um novo número, em seguida, selecione o menu suspenso e clique em **dias** ou **semanas**. ![Screenshot showing the iteration duration](/assets/images/help/projects-v2/iteration-field-duration.png)
4. Clique em **Salvar**. ![Screenshot showing save button](/assets/images/help/projects-v2/new-field-save-and-create.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Create new field."

## Adicionando novas iterações

{% data reusables.projects.project-settings %}
1. Click the name of the iteration field you want to adjust. ![Screenshot showing an iteration field](/assets/images/help/projects-v2/select-iteration-field.png)
1. Para adicionar uma nova iteração da mesma duração, clique em **Adicionar iteração**. ![Screenshot the "add iteration" button](/assets/images/help/projects-v2/add-iteration.png)
1. Optionally, to customize the duration of the new iteration and when it will start, click {% octicon "triangle-down" aria-label="The triangle icon" %} **More options**, select a starting date and duration, and click **Add**. ![Screenshot the add iteration options form](/assets/images/help/projects-v2/add-iteration-options.png)
1. Clique em **Save changes** (Salvar alterações). ![Screenshot the save button](/assets/images/help/projects-v2/iteration-save.png)

## Editando uma iteração

Você pode editar as iterações nas configurações do seu projeto. Você também pode acessar as configurações para um campo de iteração clicando em {% octicon "triangle-down" aria-label="The triangle icon" %} no cabeçalho da tabela para o campo e clicando em **Editar valores**.

{% data reusables.projects.project-settings %}
1. Click the name of the iteration field you want to adjust. ![Screenshot showing an iteration field](/assets/images/help/projects-v2/select-iteration-field.png)
1. To change the name of an iteration, click on the name and start typing. ![Screenshot an title field to rename an iteration](/assets/images/help/projects-v2/iteration-rename.png)
1. Para alterar a data ou a duração de uma iteração, clique na data para abrir o calendário. Clique no dia de início, depois clique no dia de fim e depois clique em **Aplicar**. ![Screenshot showing iteration dates](/assets/images/help/projects-v2/iteration-date.png)
1. Optionally, to delete an iteration, click {% octicon "trash" aria-label="The trash icon" %}. ![Screenshot the delete button](/assets/images/help/projects-v2/iteration-delete.png)
2. Clique em **Save changes** (Salvar alterações). ![Screenshot the save button](/assets/images/help/projects-v2/iteration-save.png)

## Inserindo uma pausa

Você pode inserir pausas em suas iterações para se comunicar quando você está tirando o tempo do trabalho agendado. O padrão da duração de uma nova pausa é o comprimento da iteração criada mais recentemente.

{% data reusables.projects.project-settings %}
1. Click the name of the iteration field you want to adjust. ![Screenshot showing an iteration field](/assets/images/help/projects-v2/select-iteration-field.png)
2. Na linha de divisão acima de uma iteração e à direita, clique em **Inserir pausa**. ![Captura de tela que mostra a localização do botão "Inserir pausa"](/assets/images/help/issues/iteration-insert-break.png)
3. Opcionalmente, para alterar a duração da pausa, clique na data para abrir o calendário. Clique no dia de início, depois clique no dia de fim e depois clique em **Aplicar**.
4. Clique em **Save changes** (Salvar alterações). ![Screenshot the save button](/assets/images/help/projects-v2/iteration-save.png)
