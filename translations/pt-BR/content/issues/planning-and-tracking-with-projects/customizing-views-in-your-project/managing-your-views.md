---
title: Gerenciar o fluxo
intro: 'Saiba como criar, salvar e gerenciar as exibições do seu projeto.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 9b3d7f4b12210841a0c55f3b0b7356da9b225416
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107988'
---
## Criando uma visualização do projeto

As visualizações do projeto permitem que você visualize rapidamente os aspectos específicos do seu projeto. Cada visualização é exibida em uma guia separada no seu projeto. 

Por exemplo, você pode ter:
- Uma visualização que mostra todos os itens ainda não iniciados (filtro de "Status").
- Uma exibição que mostra a carga de trabalho para cada equipe (agrupar por um campo personalizado de "Equipe").
- Uma visualização que mostra itens com a data mais antiga de envio (classificar por um campo de data).

Para adicionar uma nova visualização:

{% data reusables.projects.new-view %}

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Nova exibição".

A nova visualização é salva automaticamente.

## Duplicar uma exibição

Você pode duplicar uma exibição existente e usá-la como base para fazer alterações adicionais.

1. Alterne para a exibição que você deseja duplicar.
{% data reusables.projects.open-view-menu %}
1. Clique em {% octicon "versions" aria-label="the versions icon" %} **Duplicar exibição**.
   ![Captura de tela mostrando o item de menu Duplicar](/assets/images/help/projects-v2/duplicate-view.png)

## Salvando alterações em uma visualização

Ao fazer alterações a uma visualização como, por exemplo, ordenação, reordenação, filtragem ou agrupamento de dados em uma visualização, será exibido um ponto ao lado do nome da visualização para indicar que existem alterações não salvas. 

![Indicador de alterações não salvas](/assets/images/help/projects/unsaved-changes.png)

Se você não desejar salvar as alterações, você poderá ignorar este indicador. Ninguém mais verá as suas alterações.

{% data reusables.projects.save-view %}

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Salvar exibição".

## Reordenando as visualizações salvas

Para alterar a ordem das abas que contêm as exibições salvas, clique e arraste uma aba para um novo local. A nova ordem da aba é salva automaticamente.

## Renomeando uma visualização salva

Você pode renomear as exibições salvas. A alteração de nome será salva automaticamente.

1. Alterne para a exibição que você deseja renomear.
{% data reusables.projects.open-view-menu %}
1. Clique em {% octicon "pencil" aria-label="the pencil icon" %} **Renomear exibição**.
   ![Captura de tela mostrando o item de menu Renomear](/assets/images/help/projects-v2/rename-view.png)
1. Digite o novo nome da sua exibição.
1. Para salvar as alterações, pressione <kbd>Return/Enter</kbd>.

## Excluindo uma visualização salva

1. Mude para a exibição que você deseja excluir.
{% data reusables.projects.open-view-menu %}
1. Clique em {% octicon "trash" aria-label="the trasj icon" %} **Excluir exibição**.
   ![Captura de tela mostrando o item de exclusão de renomeação](/assets/images/help/projects-v2/delete-view.png)

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Excluir exibição".
