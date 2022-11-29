---
title: Sobre campos de seleção única
shortTitle: About single select fields
intro: Você pode criar campos de seleção única com opções definidas que podem ser selecionadas em um menu suspenso.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
redirect_from:
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-single-select-fields
ms.openlocfilehash: b401f11502185527444cd72fa3264fda51465116
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159530'
---
Você pode filtrar por seus campos de seleção única especificando a opção, por exemplo: `fieldname:option`. É possível filtrar vários valores fornecendo uma lista de opções separada por vírgula, por exemplo: `fieldname:option,option`. Para obter mais informações, confira "[Filtragem de projetos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

Os campos de seleção única podem conter até 50 opções. 

## Adicionar um campo de seleção única

{% data reusables.projects.new-field %}
1. Selecione **Seleção única**
   ![Captura de tela mostrando a opção Seleção única](/assets/images/help/projects-v2/new-field-single-select.png)
1. Abaixo de "Opções", digite a primeira opção.
   ![Captura de tela mostrando a opção Seleção única](/assets/images/help/projects-v2/single-select-create-with-options.png)
   - Para adicionar mais opções, clique em **Adicionar opção**.
1. Clique em **Salvar**.
   ![Captura de tela mostrando o botão Salvar](/assets/images/help/projects-v2/new-field-save.png)

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Criar campo".

## Atualizar um campo de seleção única

{% data reusables.projects.project-settings %}
1. Clique no nome do campo de seleção única que você deseja ajustar.
   ![Captura de tela mostrando um campo de seleção única](/assets/images/help/projects-v2/select-single-select.png)
1. Edite as opções existentes ou clique em **Adicionar opção**.
   ![Captura de tela mostrando opções de seleção única](/assets/images/help/projects-v2/single-select-edit-options.png)
1. Como alternativa, para excluir uma opção, clique em {% octicon "x" aria-label="The x icon" %}.
   ![Captura de tela mostrando o botão Excluir](/assets/images/help/projects-v2/single-select-delete.png)
1. Clique em **Salvar opções**.
   ![Captura de tela mostrando o botão Salvar](/assets/images/help/projects-v2/save-options.png)
