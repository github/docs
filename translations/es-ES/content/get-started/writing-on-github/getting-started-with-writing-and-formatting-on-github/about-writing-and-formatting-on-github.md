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
shortTitle: Escribir & formatear en GitHub
---

[Markdown](http://daringfireball.net/projects/markdown/) es una sintáxis fácil de leer y fácil de escribir para el texto simple con formato.

Le hemos agregado alguna funcionalidad personalizada para crear el formato Markdown de {% data variables.product.prodname_dotcom %}, usado para dar formato a la prosa y al código en todo nuestro sitio.

También puedes interactuar con otros usuarios en las solicitudes de extracción y las propuestas, usando funciones como [@menciones](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), [propuesta y referencias PR](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests) y [emoji](/articles/basic-writing-and-formatting-syntax/#using-emoji).

## Barra de herramientas de formato de texto

Cada campo de comentario en {% data variables.product.product_name %} contiene una barra de herramientas de formato de texto, lo que te permite dar formato a tu texto sin tener que aprender la sintáxis de Markdown. Además del formato de Markdown como la negrita y la cursiva y crear encabezados, enlaces y listados, la barra de herramientas incluye características específicas de {% data variables.product.product_name %}, como las @menciones, los listados de tareas y los enlaces a propuestas y solicitudes de extracción.

{% ifversion fixed-width-font-gfm-fields %}

## Habilitar fuentes de ancho fijo en el editor

Puedes habilitar las fuentes de ancho fijo en cada campo de comentario de {% data variables.product.product_name %}. Cada carácter en una fuente de ancho fijo o de monoespacio ocupa el mismo espacio horizontal, lo cual hace más fácil la edición de las estructuras de lenguaje de marcado, tales como tablas y fragmentos de código.

![Captura de pantalla que muestra el campo de comentario de {% data variables.product.product_name %} con fuentes de ancho fijo habilitadas](/assets/images/help/writing/fixed-width-example.png)

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.appearance-settings %}
1. Debajo de "Preferencia de fuente en el editor de lenguaje de marcado", selecciona **Utilizar una fuente de ancho fijo (monoespacio) al editar el lenguaje de marcado**. ![Captura de pantalla que muestra el campo de comentario de {% data variables.product.product_name %} con fuentes de ancho fijo habilitadas](/assets/images/help/writing/enable-fixed-width.png)

{% endif %}

## Leer más

- [{% data variables.product.prodname_dotcom %} Especificaciones del formato Markdown](https://github.github.com/gfm/)
- "[Sintaxis de escritura y formato básicos](/articles/basic-writing-and-formatting-syntax)"
- "[Trabajar con formato avanzado](/articles/working-with-advanced-formatting)"
- "[Dominar Markdown](https://guides.github.com/features/mastering-markdown/)"
