---
title: Organizar información con secciones colapsadas
intro: Puedes optimizar tu lenguaje de marcado si creas una sección colapsada con la etiqueta `<details>`.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections
shortTitle: Secciones colapsadas
---

## Crear una sección colapsada

Puedes ocultar las secciones de tu lenguaje de marcado temporalmente si creas una sección colapsada que el lector pueda elegir desplegar. Por ejemplo, cuando incluyes detalles técnicas en un comentario de una propuesta, los cuales podrían no ser relevantes o de interés para todos los lectores, puedes ponerlos en una sección colapsada.

Cualquier lenguaje de mrcado dentro del bloque `<details>` se colapsará hasta que el lector haga clic en {% octicon "triangle-right" aria-label="The right triange icon" %} para expandir los detalles. Dentro del bloque de `<details>`, utiliza la marca `<summary>` para crear una etiqueta a la derecha de {% octicon "triangle-right" aria-label="The right triange icon" %}.

````markdown
<details><summary>CLICK ME</summary>


<p>

#### We can hide anything, even code!

```ruby
   puts "Hello World"
```

</p>


</details>
````

El lenguaje de marcado se colapsará predeterminadamente.

![Representación colapsada](/assets/images/help/writing/collapsed-section-view.png)

Después de que un lector hace clic en {% octicon "triangle-right" aria-label="The right triange icon" %}, los detalles se expandirán.

![Representación abierta](/assets/images/help/writing/open-collapsed-section.png)

## Leer más

- [{% data variables.product.prodname_dotcom %} Especificaciones del formato Markdown](https://github.github.com/gfm/)
- "[Sintaxis de escritura y formato básicos](/articles/basic-writing-and-formatting-syntax)"
