---
title: Acerca de los campos de selección única
shortTitle: About single select fields
intro: Puedes crear campos de selección única con opciones definidas que se pueden seleccionar en un menú desplegable.
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
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160356'
---
Puedes filtrar por los campos de selección única si especificas la opción, por ejemplo: `fieldname:option`. Puedes filtrar por varios valores si proporcionas una lista de opciones separadas por comas, por ejemplo: `fieldname:option,option`. Para obtener más información, consulta "[Filtrar proyectos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)".

Los campos de selección única pueden contener hasta 50 opciones. 

## Adición de un campo de selección única

{% data reusables.projects.new-field %}
1. Selecciona **Selección única**
   ![Captura de pantalla en la que se muestra la opción de selección única](/assets/images/help/projects-v2/new-field-single-select.png)
1. Debajo de "Opciones", escribe la primera opción.
   ![Captura de pantalla en la que se muestra la opción de selección única](/assets/images/help/projects-v2/single-select-create-with-options.png)
   - Para agregar opciones adicionales, haz clic en **Agregar opción**.
1. Haga clic en **Save**(Guardar).
   ![Captura de pantalla en la que se muestra el botón Guardar](/assets/images/help/projects-v2/new-field-save.png)

Como alternativa, presiona {% data variables.projects.command-palette-shortcut %} para abrir la paleta de comandos del proyecto y empieza a escribir "Crear campo".

## Edición de un campo de selección única

{% data reusables.projects.project-settings %}
1. Haz clic en el nombre del campo de selección única que quieras ajustar.
   ![Captura de pantalla en la que se muestra un campo de selección única](/assets/images/help/projects-v2/select-single-select.png)
1. Edita las opciones existentes o haz clic en **Agregar opción**.
   ![Captura de pantalla en la que se muestran las opciones de selección única](/assets/images/help/projects-v2/single-select-edit-options.png)
1. Opcionalmente, para eliminar una opción, haz clic en {% octicon "x" aria-label="The x icon" %}.
   ![Captura de pantalla en la que se muestra el botón Eliminar](/assets/images/help/projects-v2/single-select-delete.png)
1. Haz clic en **Guardar opciones**.
   ![Captura de pantalla en la que se muestra el botón Guardar](/assets/images/help/projects-v2/save-options.png)
