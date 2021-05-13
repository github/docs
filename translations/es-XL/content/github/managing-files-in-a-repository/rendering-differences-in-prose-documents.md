---
title: Representar diferencias en documentos en prosa
redirect_from:
  - /articles/rendering-differences-in-prose-documents
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Las confirmaciones y solicitudes de extracción que incluyen documentos en prosa tienen la capacidad de representar esos documentos con vistas *de origen* y *representadas*.

La vista de origen muestra el texto en bruto que se escribió, mientras que la vista representada muestra la manera en que ese texto se vería una vez que se represente en {% data variables.product.product_name %}. Por ejemplo, esto puede ser la diferencia entre mostrar `**negrita**` en Markdown y **negrita** en la vista representada.

Se admite la representación en prosa para documentos representados compatibles con [github/markup](https://github.com/github/markup):

* Markdown
* AsciiDoc
* Textile
* ReStructuredText
* Rdoc
* Org
* Creole
* MediaWiki
* Pod

![Icono Paper (Papel) para ver el documento en prosa representado](/assets/images/help/repository/rendered_prose_diff.png)

Puedes hacer clic en {% octicon "file" aria-label="The paper icon" %} para ver los cambios hechos al documento como parte de una confirmación.

![Cambios en prosa representados](/assets/images/help/repository/rendered_prose_changes.png)

### Ver los cambios del atributo

Proporcionamos una información de herramienta que describe los cambios en los atributos que, a diferencia de las palabras, no serían visibles en el documento representado. Por ejemplo, si la URL de un enlace cambia de un sitio web a otro, mostraríamos una información de herramienta como la siguiente:

![Cambios en atributos de la prosa representados](/assets/images/help/repository/prose_diff_attributes.png)

### Comentar cambios

Solo se pueden agregar [comentarios de la confirmación](/articles/commenting-on-differences-between-files) en los archivos dentro de la vista *de origen*, línea por línea.

### Vincular a encabezados

Como con [otros documentos en prosa representados](/articles/about-readmes), deslizarse sobre un encabezado de tu documento crea un icono de enlace. Puedes vincular a los lectores de tu diferencia de prosa representada a secciones específicas.

### Ver diferencias complejas

Algunas solicitudes de extracción incluyen una gran cantidad de cambios con documentos grandes y complejos. When the changes take too long to analyze, {% data variables.product.product_name %} can't always produce a rendered view of the changes. If this happens, you'll see an error message when you click the rendered button.

![Message when view can't be rendered](/assets/images/help/repository/prose_diff_rendering.png)

Aún puedes utilizar la vista de origen para analizar y comentar cambios.

### Ver elementos HTML

No admitimos directamente vistas representadas de confirmaciones en documentos HTML. Algunos formatos, como Markdown, te permiten insertar HTML arbitrarios en un documento. Cuando estos documentos se muestran en {% data variables.product.product_name %}, algunos de esos HTML insertados pueden aparecer en una vista previa, mientras que con otros no es posible hacerlo (como un video de YouTube insertado).

En general, las vistas representadas de los cambios en un documento que contiene HTML insertados mostrarán los cambios en los elementos que se admiten en la vista del documento de {% data variables.product.product_name %}. Los cambios en los documentos que contienen HTML insertados siempre se deben verificar en las vistas de origen y representada para corroborar que estén todos.
