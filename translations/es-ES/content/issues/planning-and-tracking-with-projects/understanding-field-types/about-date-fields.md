---
title: Acerca de los campos de fecha
shortTitle: About date fields
intro: Puedes crear campos de fecha personalizados que se pueden establecer si escribes una fecha o usas un calendario.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
ms.openlocfilehash: e5cdcbdfbc2e51949c22c27fb1071b6e931ee59a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147424317'
---
Puedes filtrar los valores de fecha con el formato `YYYY-MM-DD`, por ejemplo: `date:2022-07-01`. También puedes usar operadores como `>`, `>=`, `<`, `<=` y `..`. Por ejemplo, `date:>2022-07-01` y `date:2022-07-01..2022-07-31`. También puedes proporcionar `@today` para representar el día actual en el filtro. Para obtener más información, consulta "[Filtrar proyectos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

## Adición de un campo de fecha

{% data reusables.projects.new-field %}
1. Selecciona **Fecha**
   ![Captura de pantalla en la que se muestra la opción Fecha](/assets/images/help/projects-v2/new-field-date.png)
1. Haga clic en **Save**(Guardar).
   ![Captura de pantalla en la que se muestra el botón Guardar](/assets/images/help/projects-v2/new-field-save.png)

Como alternativa, presiona {% data variables.projects.command-palette-shortcut %} para abrir la paleta de comandos del proyecto y empieza a escribir "Crear campo".
