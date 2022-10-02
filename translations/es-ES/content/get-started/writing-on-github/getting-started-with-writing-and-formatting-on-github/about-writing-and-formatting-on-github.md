---
title: Acerca de escritura y formato en GitHub
intro: GitHub combina una sintáxis para el texto con formato llamado formato Markdown de GitHub con algunas características de escritura únicas.
redirect_from:
  - /articles/about-writing-and-formatting-on-github
  - /github/writing-on-github/about-writing-and-formatting-on-github
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Write & format on GitHub
ms.openlocfilehash: 7819ebc6bbf3ffa8696c87f82745a19c103c8134
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147860838'
---
[Markdown](http://daringfireball.net/projects/markdown/) es una sintaxis fácil de leer y escribir para dar formato al texto sin formato.

Le hemos agregado alguna funcionalidad personalizada para crear el formato Markdown de {% data variables.product.prodname_dotcom %}, usado para dar formato a la prosa y al código en todo nuestro sitio.

También puede interactuar con otros usuarios en solicitudes de incorporación de cambios e incidencias mediante características como [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), [referencias de incidencia y PR](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests), y [emoji](/articles/basic-writing-and-formatting-syntax/#using-emoji).

## Barra de herramientas de formato de texto

Cada campo de comentario en {% data variables.product.product_name %} contiene una barra de herramientas de formato de texto, lo que te permite dar formato a tu texto sin tener que aprender la sintáxis de Markdown. Además del formato de Markdown como los estilos de negrita y cursiva, y la creación de encabezados, enlaces y listas, la barra de herramientas incluye características específicas de {% data variables.product.product_name %}, como @mentions, listados de tareas y vínculos a incidencias y solicitudes de incorporación de cambios.

{% ifversion fixed-width-font-gfm-fields %}

## Habilitar fuentes de ancho fijo en el editor

Puedes habilitar las fuentes de ancho fijo en cada campo de comentario de {% data variables.product.product_name %}. Cada carácter en una fuente de ancho fijo o de monoespacio ocupa el mismo espacio horizontal, lo cual hace más fácil la edición de las estructuras de lenguaje de marcado, tales como tablas y fragmentos de código.

![Captura de pantalla que muestra el campo de comentario de {% data variables.product.product_name %} con fuentes de ancho fijo habilitadas](/assets/images/help/writing/fixed-width-example.png)

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}
1. En "Preferencia de fuente del editor de Markdown", seleccione **Usar una fuente de ancho fijo (monoespacial) al editar Markdown**.
  ![Captura de pantalla en la que se muestra el campo de comentario de {% data variables.product.product_name %} con fuentes de ancho fijo habilitadas](/assets/images/help/writing/enable-fixed-width.png)

{% endif %}

## Información adicional

- [Especificación de {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
- "[Sintaxis de escritura y formato básicos](/articles/basic-writing-and-formatting-syntax)"
- "[Trabajo con el formato avanzado](/articles/working-with-advanced-formatting)"
