---
title: Gerenciando iterações em projetos (beta)
intro: Você pode criar iterações para planejar os itens de trabalho e grupos futuros.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Projects
  - Organizations
---

{% data reusables.projects.projects-beta %}

## Sobre iterações

Você pode criar um campo de iteração para associar itens com blocos de tempo repetidos específicos. As iterações podem ser definidas para qualquer período de tempo, podem incluir intervalos e podem ser editadas individualmente para modificar o nome e o intervalo de datas. Com os projetos, você pode agrupar por iteração para visualizar o equilíbrio do trabalho futuro, usar filtros para focar em uma única iteração, bem como ordenar por iteração.

Ao criar um campo de iteração, três iterações serão criadas automaticamente.  Você pode adicionar iterações adicionais e fazer outras alterações na página de configurações do seu projeto.

![Captura de tela que mostra as configurações para um campo de iteração](/assets/images/help/issues/iterations-example.png)

## Criando um campo de iteração

Você pode criar um campo de iteração usando a paleta de comandos ou a interface do projeto.

1. {% data reusables.projects.open-command-palette %} Comece a digitar qualquer parte de "Criar novo campo". Quando "Criar novo campo" for exibido na paleta de comandos, selecione-o.

   Como alternativa, clique em {% octicon "plus" aria-label="the plus icon" %} no cabeçalho do campo mais à direita. Será exibido um menu suspenso com os campos do projeto. Clique em **Novo campo**.
1. Na caixa de texto, digite um nome para o novo campo de iteração.
1. Selecione o menu suspenso abaixo e clique em **Iteração**.
1. Opcionalmente, se quiser mudar a data de início a partir do dia atual, selecione o calendário suspenso ao lado de "Começa em" e clique em uma nova data de início.
2. Para mudar a duração de cada iteração, digite um novo número, em seguida, selecione o menu suspenso e clique em **dias** ou **semanas**.
3. Clique em **Salvar & Criar**.

## Adicionando novas iterações

{% data reusables.projects.project-settings %}
1. Clique no nome do campo de iteração que você deseja ajustar.
1. Para adicionar uma nova iteração da mesma duração, clique em **Adicionar iteração**.
1. Opcionalmente, para personalizar a duração da nova iteração e quando ela vai começar, clique em {% octicon "triangle-down" aria-label="The triangle icon" %} ao lado de "Adicionar iteração", selecione uma data e duração iniciais, e clique em **Adicionar**.
1. Clique em **Save changes** (Salvar alterações).

## Editando uma iteração

Você pode editar as iterações nas configurações do seu projeto. Você também pode acessar as configurações para um campo de iteração clicando em {% octicon "triangle-down" aria-label="The triangle icon" %} no cabeçalho da tabela para o campo e clicando em **Editar valores**.

{% data reusables.projects.project-settings %}
1. Clique no nome do campo de iteração que você deseja ajustar.
1. Para alterar o nome de uma iteração, clique no nome e comece a digitar.
1. Para alterar a data ou a duração de uma iteração, clique na data para abrir o calendário. Clique no dia de início, depois clique no dia de fim e depois clique em **Aplicar**.
1. Opcionalmente, para excluir uma iteração, clique em {% octicon "trash" aria-label="The trash icon" %}.
1. Clique em **Save changes** (Salvar alterações).

## Inserindo uma pausa

Você pode inserir pausas em suas iterações para se comunicar quando você está tirando o tempo do trabalho agendado. O padrão da duração de uma nova pausa é o comprimento da iteração criada mais recentemente.

{% data reusables.projects.project-settings %}
1. Clique no nome do campo de iteração que você deseja ajustar.
2. Na linha de divisão acima de uma iteração e à direita, clique em **Inserir pausa**. ![Captura de tela que mostra a localização do botão "Inserir pausa"](/assets/images/help/issues/iteration-insert-break.png)
3. Opcionalmente, para alterar a duração da pausa, clique na data para abrir o calendário. Clique no dia de início, depois clique no dia de fim e depois clique em **Aplicar**.
4. Clique em **Save changes** (Salvar alterações).
