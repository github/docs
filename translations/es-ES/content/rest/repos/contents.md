---
title: Contenido
intro: 'Las terminales de esta API te permiten crear, modificar y borrar contenido cifrado en Base64 en un repositorio.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Para solicitar el formato sin procesar y interpretado en HTML (cuando sea posible), utiliza los tipos de medios personalizados para el contenido de un repositorio.

### Tipos de medios personalizados para el contenido de un repositorio

Los [README](/rest/reference/repos#get-a-repository-readme), [archivos](/rest/reference/repos#get-repository-content) y [symlinks](/rest/reference/repos#get-repository-content) son compatibles con los siguientes tipos de medios personalizados:

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.html

Utiliza el tipo de medios `.raw` para recuperar el contenido del archivo.

Para archivos de markup tales como Markdown o AsciiDoc, puedes recuperar la interpretación en HTML si utilizas el tipo de medios `.html`. Los lenguajes de Markup se interpretan en HTML utilizando nuestra [biblioteca de Markup](https://github.com/github/markup) de código abierto.

[Todos los objetos](/rest/reference/repos#get-repository-content) son compatibles con el siguiente tipo de medios personalizados:

    application/vnd.github.VERSION.object

Utiliza el parámetro de tipo de medios `object` para recuperar el contenido en un formato de objeto consistente sin importar el tipo de contenido. Por ejemplo, en vez de ser una matriz de objetos para un directorio, la respuesta será un objeto con un atributo de `entries` que contenga la matriz de objetos.

Puedes leer más acerca del uso de tipos de medios en la API [aquí](/rest/overview/media-types).
