---
title: Acerca de los campos numéricos y de texto
shortTitle: About text and number fields
intro: Puedes agregar campos numéricos y de texto personalizados al proyecto.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
- Projects
ms.openlocfilehash: 2ef01bbd4ec13e37fdcd95e2a536e73c6da2304d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109960"
---
Puedes usar campos de texto para incluir notas o cualquier otro texto de forma libre en el proyecto.

Los campos de texto se pueden usar en filtros, por ejemplo: `field:"exact text"`. También se usarán campos de texto y títulos de elemento si filtras por texto sin especificar un campo. 

Los campos numéricos también se pueden usar en filtros. Puedes usar las consultas de intervalo `>`, `>=`, `<`, `<=` y `..` para filtrar por un campo numérico. Por ejemplo: `field:5..15` o `field:>=20`. Para obtener más información, consulta "[Filtrar proyectos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

## Adición de un campo de texto

{% data reusables.projects.new-field %}
1. Selecciona **Texto**
   ![Captura de pantalla en la que se muestra la opción Texto](/assets/images/help/projects-v2/new-field-text.png)
1. Haga clic en **Save**(Guardar).
   ![Captura de pantalla en la que se muestra el botón Guardar](/assets/images/help/projects-v2/new-field-save.png)

Como alternativa, presiona {% data variables.projects.command-palette-shortcut %} para abrir la paleta de comandos del proyecto y empieza a escribir "Crear campo".

## Adición de un campo numérico

{% data reusables.projects.new-field %}
1. Selecciona **Número**
   ![Captura de pantalla en la que se muestra la opción Número](/assets/images/help/projects-v2/new-field-number.png)
1. Haga clic en **Save**(Guardar).
   ![Captura de pantalla en la que se muestra el botón Guardar](/assets/images/help/projects-v2/new-field-save.png)

Como alternativa, presiona {% data variables.projects.command-palette-shortcut %} para abrir la paleta de comandos del proyecto y empieza a escribir "Crear campo".
