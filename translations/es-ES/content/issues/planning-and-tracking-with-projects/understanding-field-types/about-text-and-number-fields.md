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
ms.openlocfilehash: d6ab274812f4f35ff4f6afa9e1e2139abf86dd54
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147424383'
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
