---
title: Managing your views
intro: 'Learn how to create, save, and manage your project views.'
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

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "New view."

A nova visualização é salva automaticamente.

## Duplicating a view

You can duplicate an existing view and use it as a base to make further changes.

1. Switch to the view you want to duplicate.
{% data reusables.projects.open-view-menu %}
1. Click {% octicon "versions" aria-label="the versions icon" %} **Duplicate view**. ![Screenshot showing the duplicate menu item](/assets/images/help/projects-v2/duplicate-view.png)

## Salvando alterações em uma visualização

Ao fazer alterações a uma visualização como, por exemplo, ordenação, reordenação, filtragem ou agrupamento de dados em uma visualização, será exibido um ponto ao lado do nome da visualização para indicar que existem alterações não salvas.

![Indicador de alterações não salvas](/assets/images/help/projects/unsaved-changes.png)

Se você não desejar salvar as alterações, você poderá ignorar este indicador. Ninguém mais verá as suas alterações.

{% data reusables.projects.save-view %}

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Save view."

## Reordenando as visualizações salvas

Para alterar a ordem das abas que contêm as exibições salvas, clique e arraste uma aba para um novo local. A nova ordem da aba é salva automaticamente.

## Renomeando uma visualização salva

You can rename your saved views. A alteração de nome será salva automaticamente.

1. Switch to the view you want to rename.
{% data reusables.projects.open-view-menu %}
1. Click {% octicon "pencil" aria-label="the pencil icon" %} **Rename view**. ![Screenshot showing the rename menu item](/assets/images/help/projects-v2/rename-view.png)
1. Type the new name for your view.
1. To save your changes, press <kbd>Return</kbd>.

## Excluindo uma visualização salva

1. Switch to the view you want to delete.
{% data reusables.projects.open-view-menu %}
1. Click {% octicon "trash" aria-label="the trasj icon" %} **Delete view**. ![Screenshot showing the rename delete item](/assets/images/help/projects-v2/delete-view.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Delete view."
