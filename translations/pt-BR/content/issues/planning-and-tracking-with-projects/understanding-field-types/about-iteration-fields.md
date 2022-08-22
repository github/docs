---
title: Sobre os campos de iteração
shortTitle: Sobre os campos de iteração
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

Você pode filtrar para iterações especificando o nome da iteração ou `@current` para a iteração atual, `@previous` para a iteração anterior ou `@next` para a próxima iteração. Você também pode usar operadores como `>`, `>=`, `<`, `<=` e `.`.  Por exemplo, a iteração `>"Iteration 4"` e `iteration:<@current`. Para obter mais informações, consulte "[Filtrando projetos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

Ao criar um campo de iteração, três iterações serão criadas automaticamente.  Você pode adicionar iterações adicionais e fazer outras alterações na página de configurações do seu projeto.

![Captura de tela que mostra as configurações para um campo de iteração](/assets/images/help/issues/iterations-example.png)

## Adicionando um campo de iteração

{% data reusables.projects.new-field %}
1. Selecionar **Iteração** ![Captura de tela que mostra a opção de iteração](/assets/images/help/projects-v2/new-field-iteration.png)
2. Opcionalmente, se você não quiser que a iteração comece hoje, selecione o menu suspenso do calendário ao lado de "Iniciar em" e escolha uma nova data de início. ![Captura de tela que mostra a data de início de iteração](/assets/images/help/projects-v2/iteration-field-starts.png)
3. Para mudar a duração de cada iteração, digite um novo número, em seguida, selecione o menu suspenso e clique em **dias** ou **semanas**. ![Captura de tela que mostra a duração de iteração](/assets/images/help/projects-v2/iteration-field-duration.png)
4. Clique em **Salvar**. ![Captura de tela que mostra o botão salvar](/assets/images/help/projects-v2/new-field-save-and-create.png)

Como alternativa, abra a paleta de comandos pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Criar novo campo".

## Adicionando novas iterações

{% data reusables.projects.project-settings %}
1. Clique no nome do campo de iteração que você deseja ajustar. ![Captura de tela que mostra um campo de iteração](/assets/images/help/projects-v2/select-iteration-field.png)
1. Para adicionar uma nova iteração da mesma duração, clique em **Adicionar iteração**. ![Captura de tela do botão "adicionar iteração"](/assets/images/help/projects-v2/add-iteration.png)
1. Opcionalmente, para personalizar a duração da nova iteração e quando ela vai começar, clique em {% octicon "triangle-down" aria-label="The triangle icon" %} **Mais opções**, selecione uma data e duração iniciais e clique **Adicionar**. ![Captura de tela do formulário das opções de adcionar iteração](/assets/images/help/projects-v2/add-iteration-options.png)
1. Clique em **Save changes** (Salvar alterações). ![Captura de tela do botão salvar](/assets/images/help/projects-v2/iteration-save.png)

## Editando uma iteração

Você pode editar as iterações nas configurações do seu projeto. Você também pode acessar as configurações para um campo de iteração clicando em {% octicon "triangle-down" aria-label="The triangle icon" %} no cabeçalho da tabela para o campo e clicando em **Editar valores**.

{% data reusables.projects.project-settings %}
1. Clique no nome do campo de iteração que você deseja ajustar. ![Captura de tela que mostra um campo de iteração](/assets/images/help/projects-v2/select-iteration-field.png)
1. Para alterar o nome de uma iteração, clique no nome e comece a digitar. ![Captura de tela de um campo de título para renomear uma iteração](/assets/images/help/projects-v2/iteration-rename.png)
1. Para alterar a data ou a duração de uma iteração, clique na data para abrir o calendário. Clique no dia de início, depois clique no dia de fim e depois clique em **Aplicar**. ![Captura de tela que mostra as datas de iteração](/assets/images/help/projects-v2/iteration-date.png)
1. Opcionalmente, para excluir uma iteração, clique em {% octicon "trash" aria-label="The trash icon" %}. ![Captura de tela do botão excluir](/assets/images/help/projects-v2/iteration-delete.png)
2. Clique em **Save changes** (Salvar alterações). ![Captura de tela do botão salvar](/assets/images/help/projects-v2/iteration-save.png)

## Inserindo uma pausa

Você pode inserir pausas em suas iterações para se comunicar quando você está tirando o tempo do trabalho agendado. O padrão da duração de uma nova pausa é o comprimento da iteração criada mais recentemente.

{% data reusables.projects.project-settings %}
1. Clique no nome do campo de iteração que você deseja ajustar. ![Captura de tela que mostra um campo de iteração](/assets/images/help/projects-v2/select-iteration-field.png)
2. Na linha de divisão acima de uma iteração e à direita, clique em **Inserir pausa**. ![Captura de tela que mostra a localização do botão "Inserir pausa"](/assets/images/help/issues/iteration-insert-break.png)
3. Opcionalmente, para alterar a duração da pausa, clique na data para abrir o calendário. Clique no dia de início, depois clique no dia de fim e depois clique em **Aplicar**.
4. Clique em **Save changes** (Salvar alterações). ![Captura de tela do botão salvar](/assets/images/help/projects-v2/iteration-save.png)
