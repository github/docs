---
title: Sobre campos de data
shortTitle: About date fields
intro: Você pode criar campos de data personalizados que podem ser definidos digitando uma data ou usando um calendário.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
redirect_from:
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-date-fields
ms.openlocfilehash: d6057212941db8d20ed49f240052e5ad0fc8eb80
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159358'
---
Você pode filtrar valores de data usando o formato `YYYY-MM-DD`, por exemplo: `date:2022-07-01`. Você também pode usar operadores, como `>`, `>=`, `<`, `<=` e `..`. Por exemplo, `date:>2022-07-01` e `date:2022-07-01..2022-07-31`. Você também pode usar `@today` para representar o dia atual em seu filtro. Para obter mais informações, confira "[Filtragem de projetos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

## Adicionar um campo de data

{% data reusables.projects.new-field %}
1. Selecione **Data**
   ![Captura de tela mostrando a opção Data](/assets/images/help/projects-v2/new-field-date.png)
1. Clique em **Salvar**.
   ![Captura de tela mostrando o botão Salvar](/assets/images/help/projects-v2/new-field-save.png)

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Criar campo".
