---
title: Sobre campos de iteração
shortTitle: About iteration fields
intro: Você pode criar iterações para planejar os itens de trabalho e grupos futuros.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-iterations
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-iteration-fields
type: tutorial
topics:
  - Projects
ms.openlocfilehash: ae598dc481c54adfb817e110794f43f0f80a7c16
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159307'
---
Você pode criar um campo de iteração para associar itens com blocos de tempo repetidos específicos. As iterações podem ser definidas para qualquer período de tempo, podem incluir intervalos e podem ser editadas individualmente para modificar o nome e o intervalo de datas. Com os projetos, você pode agrupar por iteração para visualizar o equilíbrio do trabalho futuro, usar filtros para focar em uma única iteração, bem como ordenar por iteração.

Você pode filtrar iterações especificando o nome da iteração ou `@current` para a iteração atual, `@previous` para a iteração anterior ou `@next` para a próxima iteração. Você também pode usar operadores como `>`, `>=`, `<`, `<=` e `..`.  Por exemplo, `iteration:>"Iteration 4"` e `iteration:<@current`. Para obter mais informações, confira "[Filtragem de projetos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

Ao criar um campo de iteração, três iterações serão criadas automaticamente.  Você pode adicionar iterações adicionais e fazer outras alterações na página de configurações do seu projeto.

![Captura de tela que mostra as configurações para um campo de iteração](/assets/images/help/issues/iterations-example.png)

## Adicionar um campo de iteração

{% data reusables.projects.new-field %}
1. Selecione **Iteração**
   ![Captura de tela mostrando a opção Iteração](/assets/images/help/projects-v2/new-field-iteration.png)
2. Como opção, se você não quiser que a iteração comece hoje, selecione a lista suspensa do calendário ao lado de "Inicia em" e escolha uma nova data de início.
   ![Captura de tela mostrando a data de início da iteração](/assets/images/help/projects-v2/iteration-field-starts.png)
3. Para alterar a duração de cada iteração, digite um novo número, selecione o menu suspenso e clique em **dias** ou **semanas**.
   ![Captura de tela mostrando a duração da iteração](/assets/images/help/projects-v2/iteration-field-duration.png)
4. Clique em **Salvar**.
   ![Captura de tela mostrando o botão Salvar](/assets/images/help/projects-v2/new-field-save-and-create.png)

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Criar campo".

## Adicionando novas iterações

{% data reusables.projects.project-settings %}
1. Clique no nome do campo de iteração que você deseja ajustar.
   ![Captura de tela mostrando um campo Iteração](/assets/images/help/projects-v2/select-iteration-field.png)
1. Para adicionar uma nova iteração da mesma duração, clique em **Adicionar iteração**.
   ![Captura de tela do botão "Adicionar iteração"](/assets/images/help/projects-v2/add-iteration.png)
1. Como opção, para personalizar a duração da nova iteração e o início dela, clique em {% octicon "triangle-down" aria-label="The triangle icon" %} **Mais opções**, selecione a data de início e a duração e clique em **Adicionar**.
   ![Captura de tela do formulário Adicionar opções de iteração](/assets/images/help/projects-v2/add-iteration-options.png)
1. Clique em **Salvar alterações**.
   ![Captura de tela do botão Salvar](/assets/images/help/projects-v2/iteration-save.png)

## Editando uma iteração

Você pode editar as iterações nas configurações do seu projeto. Você também pode acessar as configurações de um campo de iteração clicando em {% octicon "triangle-down" aria-label="The triangle icon" %} no cabeçalho da tabela do campo e clicando em **Editar valores**.

{% data reusables.projects.project-settings %}
1. Clique no nome do campo de iteração que você deseja ajustar.
   ![Captura de tela mostrando um campo Iteração](/assets/images/help/projects-v2/select-iteration-field.png)
1. Para alterar o nome de uma iteração, clique no nome e comece a digitar.
   ![Captura de tela de um campo de título para renomear uma iteração](/assets/images/help/projects-v2/iteration-rename.png)
1. Para alterar a data ou a duração de uma iteração, clique na data para abrir o calendário. Clique no dia de início, no dia de término e em **Aplicar**.
   ![Captura de tela mostrando datas de iteração](/assets/images/help/projects-v2/iteration-date.png)
1. Opcionalmente, para excluir uma iteração, clique em {% octicon "trash" aria-label="The trash icon" %}.
   ![Captura de tela do botão Excluir](/assets/images/help/projects-v2/iteration-delete.png)
2. Clique em **Salvar alterações**.
   ![Captura de tela do botão Salvar](/assets/images/help/projects-v2/iteration-save.png)

## Inserindo uma pausa

Você pode inserir pausas em suas iterações para se comunicar quando você está tirando o tempo do trabalho agendado. O padrão da duração de uma nova pausa é o comprimento da iteração criada mais recentemente.

{% data reusables.projects.project-settings %}
1. Clique no nome do campo de iteração que você deseja ajustar.
   ![Captura de tela mostrando um campo Iteração](/assets/images/help/projects-v2/select-iteration-field.png)
2. Na linha divisória acima de uma iteração e à direita, clique em **Inserir quebra**.
   ![Captura de tela que mostra o local do botão "Inserir quebra"](/assets/images/help/issues/iteration-insert-break.png)
3. Opcionalmente, para alterar a duração da pausa, clique na data para abrir o calendário. Clique no dia de início, no dia de término e em **Aplicar**.
4. Clique em **Salvar alterações**.
   ![Captura de tela do botão Salvar](/assets/images/help/projects-v2/iteration-save.png)
