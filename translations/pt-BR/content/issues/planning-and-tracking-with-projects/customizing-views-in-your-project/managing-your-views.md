---
title: Gerenciando suas visualizações
intro: 'Aprenda a criar, salvar e gerenciar as visualizações de seu projeto.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
---


## Criando uma visualização do projeto

As visualizações do projeto permitem que você visualize rapidamente os aspectos específicos do seu projeto. Cada visualização é exibida em uma guia separada no seu projeto.

Por exemplo, você pode ter:
- Uma visualização que mostra todos os itens ainda não iniciados (filtro de "Status").
- Uma exibição que mostra a carga de trabalho para cada equipe (agrupar por um campo personalizado de "Equipe").
- Uma visualização que mostra itens com a data mais antiga de envio (classificar por um campo de data).

Para adicionar uma nova visualização:

{% data reusables.projects.new-view %}

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Nova visualização".

A nova visualização é salva automaticamente.

## Duplicando uma visualização

Você pode duplicar uma visão existente e usá-la como base para fazer mais alterações.

1. Alternar para a visualização que você deseja duplicar.
{% data reusables.projects.open-view-menu %}
1. Clique em {% octicon "versions" aria-label="the versions icon" %} **Duplicar visualização**. ![Captura de tela que mostra o item de menu duplicado](/assets/images/help/projects-v2/duplicate-view.png)

## Salvando alterações em uma visualização

Ao fazer alterações a uma visualização como, por exemplo, ordenação, reordenação, filtragem ou agrupamento de dados em uma visualização, será exibido um ponto ao lado do nome da visualização para indicar que existem alterações não salvas.

![Indicador de alterações não salvas](/assets/images/help/projects/unsaved-changes.png)

Se você não desejar salvar as alterações, você poderá ignorar este indicador. Ninguém mais verá as suas alterações.

{% data reusables.projects.save-view %}

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Salvar visualização".

## Reordenando as visualizações salvas

Para alterar a ordem das abas que contêm as exibições salvas, clique e arraste uma aba para um novo local. A nova ordem da aba é salva automaticamente.

## Renomeando uma visualização salva

Você pode renomear as suas visualizações salvas. A alteração de nome será salva automaticamente.

1. Alterne para a visualização que você deseja renomear.
{% data reusables.projects.open-view-menu %}
1. Clique em {% octicon "pencil" aria-label="the pencil icon" %} **Renomear visualização**. ![Captura de tela que mostra o item de menu de renomear](/assets/images/help/projects-v2/rename-view.png)
1. Digite o novo nome para a sua visualização.
1. Para salvar as alterações, pressione <kbd>Retornar</kbd>.

## Excluindo uma visualização salva

1. Alterne para a visualização que você deseja excluir.
{% data reusables.projects.open-view-menu %}
1. Clique em {% octicon "trash" aria-label="the trasj icon" %} **Excluir visualização**. ![Captura de tela que mostra o item excluir renomeado](/assets/images/help/projects-v2/delete-view.png)

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Excluir visualização".
