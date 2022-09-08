---
title: Sobre campos de texto e número
shortTitle: About text and number fields
intro: Você pode adicionar campos personalizados de texto e número ao seu projeto.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
ms.openlocfilehash: d6ab274812f4f35ff4f6afa9e1e2139abf86dd54
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423790'
---
Você pode usar campos de texto para incluir observações ou qualquer outro texto de forma livre em seu projeto.

Os campos de texto podem ser usados em filtros, por exemplo: `field:"exact text"`. Campos de texto e títulos de itens também serão usados se você filtrar para texto sem especificar um campo. 

Campos numéricos também podem ser usados em filtros. Você pode usar as consultas de intervalo `>`, `>=`, `<`, `<=` e `..` para filtrar por um campo numérico. Por exemplo: `field:5..15` ou `field:>=20`. Para obter mais informações, confira "[Filtragem de projetos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

## Adicionar um campo de texto

{% data reusables.projects.new-field %}
1. Selecione **Texto**
   ![Captura de tela mostrando a opção Texto](/assets/images/help/projects-v2/new-field-text.png)
1. Clique em **Salvar**.
   ![Captura de tela mostrando o botão Salvar](/assets/images/help/projects-v2/new-field-save.png)

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Criar campo".

## Adicionar um campo numérico

{% data reusables.projects.new-field %}
1. Selecione **Número**
   ![Captura de tela mostrando a opção Número](/assets/images/help/projects-v2/new-field-number.png)
1. Clique em **Salvar**.
   ![Captura de tela mostrando o botão Salvar](/assets/images/help/projects-v2/new-field-save.png)

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Criar campo".
