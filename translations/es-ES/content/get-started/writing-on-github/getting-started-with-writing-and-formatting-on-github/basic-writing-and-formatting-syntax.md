---
title: Sintaxis de escritura y formato básicos
intro: Crear formatos sofisticados para tu prosa y código en GitHub con sintaxis simple.
redirect_from:
  - /articles/basic-writing-and-formatting-syntax
  - /github/writing-on-github/basic-writing-and-formatting-syntax
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Basic formatting syntax
ms.openlocfilehash: e8df0930f675834c120bbe187924f9696142e09f
ms.sourcegitcommit: e4069b5613c10d74954185995d0fb73224079463
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/17/2022
ms.locfileid: '148169252'
---
## Encabezados

Para crear un encabezado, agrega entre uno y seis símbolos <kbd>#</kbd> antes del encabezado del texto. El número de <kbd>#</kbd> que use determinará el tamaño del encabezado.

```markdown
# The largest heading
## The second largest heading
###### The smallest heading
```

![Encabezados H1, H2 y H6 representados](/assets/images/help/writing/headings-rendered.png)

Al usar dos o más encabezados, GitHub genera automáticamente una tabla de contenido a la que puede acceder haciendo clic en {% octicon "list-unordered" aria-label="The unordered list icon" %} dentro del encabezado del archivo. Todos los títulos de encabezado aparecen en la tabla de contenido, y puede hacer clic en un título para ir a la sección seleccionada. 

![Captura de pantalla en la que se resalta el icono de tabla de contenido](/assets/images/help/repository/headings_toc.png)

## Estilos de texto

Puedes indicar énfasis con texto en negrita, cursiva, tachado, o de subíndice o superíndice en los campos de comentarios y archivos `.md`.  

| Estilo | Sintaxis | Métodos abreviados de teclado | Ejemplo | Resultados |
| --- | --- | --- | --- | --- |
| Bold | `** **` o `__ __`| <kbd>Command</kbd>+<kbd>B</kbd> (Mac) o <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | `**This is bold text**` | **Esto es texto en negrita**. |
| Cursiva | `* *` o `_ _`     | <kbd>Command</kbd>+<kbd>I</kbd> (Mac) o <kbd>CtrI</kbd>+ (Windows/Linux)<kbd></kbd> | `*This text is italicized*` | *Este texto está en cursiva* |
| Tachado | `~~ ~~` | | `~~This was mistaken text~~` | ~~Este texto está equivocado~~ |
| Cursiva en negrita y anidada | `** **` y `_ _` | | `**This text is _extremely_ important**` | **Este texto es _extremadamente_ importante** |
| Todo en negrita y cursiva | `*** **_` | | `_*_All this text is important_*_` | _ *_Todo este texto es importante_** |
| Subscript | `<sub> </sub>` | | `<sub>This is a subscript text</sub>` | <sub>Se trata de un texto de subíndice</sub> |
| Superscript | `<sup> </sup>` | | `<sup>This is a superscript text</sup>` | <sup>Se trata de un texto de superíndice</sup> |

## Entrecomillado de texto

Puede entrecomillar texto con <kbd>></kbd>.

```markdown
Text that is not a quote

> Text that is a quote
```

![Texto citado representado](/assets/images/help/writing/quoted-text-rendered.png)

{% tip %}

**Sugerencia:** Al visualizar una conversación, puede citar automáticamente el texto en un comentario resaltándolo y escribiendo <kbd>R</kbd>. Para citar un comentario completo; para ello, haga clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} y, a continuación, en **Quote reply**. Para obtener más información sobre los métodos abreviados de teclado, consulte "[Métodos abreviados de teclado](/articles/keyboard-shortcuts/)".

{% endtip %}

## Código de cita

Puedes indicar un código o un comando dentro de un enunciado con comillas simples. El texto dentro de las comillas simples no será formateado. También puedes presionar el método abreviado de teclado <kbd>Comando</kbd>+<kbd>E</kbd> (Mac) o <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows o Linux) para insertar las comillas simples de bloque de código en una línea de Markdown.

```markdown
Use `git status` to list all new or modified files that haven't yet been committed.
```

![Bloque de código en línea representado](/assets/images/help/writing/inline-code-rendered.png)

Para formatear código o texto en su propio bloque distintivo, usa comillas triples.

<pre>
Some basic Git commands are:
```
git status
git add
git commit
```
</pre>

![Bloque de código representado](/assets/images/help/writing/code-block-rendered.png)

Para obtener más información, vea "[Crear y resaltar bloques de código](/articles/creating-and-highlighting-code-blocks)".

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Modelos de color compatibles

En los problemas, las solicitudes de incorporación de cambios y los debates, puedes llamar a los colores dentro de una oración mediante comillas simples. Un modelo de color compatible dentro de las comillas simples mostrará una visualización del color.

```markdown
The background color should be `#ffffff` for light mode and `#0d1117` for dark mode.
```

![Modelo de color compatible representado.](/assets/images/help/writing/supported-color-models-rendered.png)

Estos son los modelos de color admitidos actualmente.

| Color | Sintaxis | Ejemplo | Resultados |
| --- | --- | --- | --- |
| HEX | <code>\`#RRGGBB\`</code> | <code>\`#0969DA\`</code> | ![Modelo de color admitido representado en formato HEX.](/assets/images/help/writing/supported-color-models-hex-rendered.png) |
| RGB | <code>\`rgb(R,G,B)\`</code> | <code>\`rgb(9, 105, 218)\`</code> | ![Modelo de color admitido representado en formato RGB.](/assets/images/help/writing/supported-color-models-rgb-rendered.png) |
| HSL | <code>\`hsl(H,S,L)\`</code> | <code>\`hsl(212, 92%, 45%)\`</code> | ![Modelo de color admitido representado en formato HSL.](/assets/images/help/writing/supported-color-models-hsl-rendered.png) |

{% note %}

**Notas:**

- Un modelo de color admitido no puede tener espacios iniciales o finales dentro de las comillas simples.
- La visualización del color solo se admite en problemas, solicitudes de incorporación de cambios y debates.

{% endnote %}

## Vínculos

Puede crear un vínculo en línea escribiendo su texto entre corchetes `[ ]` y escribiendo la URL entre paréntesis `( )`. También puedes usar el método abreviado de teclado <kbd>Comando</kbd>+<kbd>K</kbd> para crear un vínculo.{% ifversion fpt or ghae > 3.3 or ghes > 3.3 or ghec %} Cuando tienes texto seleccionado, puedes pegar una dirección URL del Portapapeles para crear un vínculo automáticamente a partir de la selección.{% endif %}

{% ifversion fpt or ghae > 3.5 or ghes > 3.5 or ghec %} También puedes crear un hipervínculo de Markdown resaltando el texto y usando el método abreviado de teclado <kbd>Comando</kbd>+<kbd>V</kbd>. Si quieres reemplazar el texto por el vínculo, usa el método abreviado de teclado <kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>V</kbd>.{% endif %}

`This site was built using [GitHub Pages](https://pages.github.com/).`

![Enlace representado](/assets/images/help/writing/link-rendered.png)

{% tip %}

**Sugerencia:** {% data variables.product.product_name %} crea vínculos automáticamente cuando las direcciones URL válidas se escriben en un comentario. Para obtener más información, consulte "[Referencias y direcciones URL vinculadas automáticamente](/articles/autolinked-references-and-urls)".

{% endtip %}

## Enlaces de sección

{% data reusables.repositories.section-links %}

## Vínculos relativos

{% data reusables.repositories.relative-links %}

## Imágenes

Puede mostrar una imagen agregando <kbd>!</kbd> y ajustar el texto alternativo en `[ ]`. Escriba el vínculo de la imagen entre paréntesis `()`.

`![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)`

![Imagen interpretada](/assets/images/help/writing/image-rendered.png)

{% data variables.product.product_name %} admite la inserción de imágenes en incidencias, solicitudes de incorporación de cambios{% ifversion fpt or ghec %}, debates{% endif %}, comentarios y archivos `.md`. Puedes mostrar una imagen desde tu repositorio, agregar un enlace a una imagen en línea o cargar una imagen. Para obtener más información, consulte "[Carga de recursos](#uploading-assets)".

{% tip %}

**Sugerencia:** Cuando quiera mostrar una imagen incluida en su repositorio, deberá usar vínculos relativos en vez de absolutos.

{% endtip %}

Aquí tienes algunos ejemplos para utilizar enlaces relativos para mostrar una imagen.

| Context | Enlace Relativo |
| ------ | -------- |
| En un archivo `.md` de la misma rama | `/assets/images/electrocat.png` |
| En un archivo `.md` de otra rama | `/../main/assets/images/electrocat.png` |
| En propuestas, solicitudes de cambio y comentarios del repositorio | `../blob/main/assets/images/electrocat.png?raw=true` |
| En un archivo `.md` de otro repositorio | `/../../../../github/docs/blob/main/assets/images/electrocat.png` |
| En propuestas, solicitudes de cambios y comentarios de otro repositorio | `../../../github/docs/blob/main/assets/images/electrocat.png?raw=true` |

{% note %}

**Nota**: Los últimos dos vínculos relativos de la tabla anterior funcionarán únicamente para las imágenes de repositorios privados solo si el lector tiene (como mínimo) acceso de lectura.

{% endnote %}

Para obtener más información, consulte "[Vínculos relativos](#relative-links)".

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
### Especificar un tema en el que se muestra una imagen

Puedes especificar el tema para el que se muestra una imagen en Markdown mediante el elemento `<picture>` de HTML en combinación con la característica de elementos multimedia `prefers-color-scheme`. Distinguimos entre modos de color oscuro y claro, así que existen dos opciones disponibles. Puedes utilizar estas opciones para mostrar imágenes optimizadas para los fondos claros u oscuros. Esto es especialmente útil para las imágenes PNG transparentes.

Por ejemplo, en el código siguiente se muestra una imagen del sol para temas claros y una luna para temas oscuros:

{% data reusables.getting-started.picture-element-example %}

El método anterior en el que se especifican imágenes basadas en el tema mediante un fragmento anexado a la dirección URL (`#gh-dark-mode-only` o `#gh-light-mode-only`), está en desuso y se eliminará en favor del método nuevo descrito anteriormente.
{% endif %}

## Listas

Puedes crear una lista sin ordenar. Para ello, coloca <kbd>-</kbd>, <kbd>*</kbd> o <kbd>+</kbd> antes de una o más líneas de texto.

```markdown
- George Washington
* John Adams
+ Thomas Jefferson
```

![Lista desordenada representada](/assets/images/help/writing/unordered-list-rendered.png)

Para ordenar tu lista, antecede cada línea con un número.

```markdown
1. James Madison
2. James Monroe
3. John Quincy Adams
```

![Lista ordenada representada](/assets/images/help/writing/ordered-list-rendered.png)

### Listas anidadas

Puedes crear una lista anidada al dejar sangría en uno o más elementos de la lista debajo de otro elemento.

Para crear una lista anidada mediante el editor web en {% data variables.product.product_name %} o un editor de texto que usa una fuente monoespaciada, como [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/), puedes alinear la lista visualmente. Escriba los caracteres con espacio frente al elemento de la lista anidada hasta que el carácter del marcador de lista (<kbd>-</kbd> o <kbd>*</kbd>) se encuentre directamente debajo del primer carácter del texto en el elemento que se encuentra debajo.

```markdown
1. First list item
   - First nested list item
     - Second nested list item
```

{% tip %}

**Nota**: En el editor web, puede aplicar o desaplicar sangría en una o varias líneas de texto resaltando primero las líneas deseadas y, a continuación, usando <kbd>Tab</kbd> o <kbd>mayús</kbd>+<kbd>Tab</kbd> respectivamente.

{% endtip %}

![Lista anidada con alineación resaltada](/assets/images/help/writing/nested-list-alignment.png)

![Lista con dos niveles de elementos anidados](/assets/images/help/writing/nested-list-example-1.png)

Para crear una lista anidada en el editor de comentarios en {% data variables.product.product_name %}, que no usa una fuente monoespaciada, puedes observar el elemento de la lista inmediatamente anterior a la lista anidada y contar el número de caracteres que aparecen antes del contenido del elemento. Luego escribe ese número de caracteres de espacio frente al elemento de la lista anidada.

En este ejemplo, podría agregar un elemento de lista anidada bajo el elemento de lista `100. First list item` mediante la aplicación de sangría de mínimo cinco espacios en el elemento de lista anidada, ya que hay cinco caracteres (`100. `) antes de `First list item`.

```markdown
100. First list item
     - First nested list item
```

![Lista con un elemento de lista anidado](/assets/images/help/writing/nested-list-example-3.png)   

Puedes crear múltiples niveles de listas anidadas mediante el mismo método. Por ejemplo, dado que el primer elemento de lista anidada tiene siete caracteres (`␣␣␣␣␣-␣`) antes del contenido `First nested list item` de la lista anidada, tedría que aplicar sangría (siete espacios) en el segundo elemento de lista anidada.

```markdown
100. First list item
     - First nested list item
       - Second nested list item
```

![Lista con dos niveles de elementos anidados](/assets/images/help/writing/nested-list-example-2.png)    

Para obtener más ejemplos, consulte las [especificaciones de GitHub Flavored Markdwon](https://github.github.com/gfm/#example-265).

## Listas de tareas

{% data reusables.repositories.task-list-markdown %}

Si la descripción de un elemento de la lista de tareas comienza por un paréntesis, necesitará agregar el carácter de escape <kbd>\\</kbd>:

`- [ ] \(Optional) Open a followup issue`

Para obtener más información, consulte "[Acerca de las listas de tareas](/articles/about-task-lists)".

## Mencionar personas y equipos

Puede mencionar a una persona o [equipo](/articles/setting-up-teams/) en {% data variables.product.product_name %}, Para ello, escriba <kbd>@</kbd> junto con su nombre de usuario o equipo. Esto activará una notificación y llamará su atención hacia la conversación. Las personas también recibirán una notificación si editas un comentario para mencionar su nombre de usuario o el nombre del equipo. Para obtener más información acerca de las notificaciones, consulta "[Acerca de las notificaciones](/github/managing-subscriptions-and-notifications-on-github/about-notifications)".

{% note %}

**Nota:** Solo se notificará a un usuario acerca de una mención si este tiene acceso de lectura al repositorio y, si el repositorio pertenece a una organización, el usuario es miembro de la organización.

{% endnote %}

`@github/support What do you think about these updates?`

![@mention representado](/assets/images/help/writing/mention-rendered.png)

Cuando mencionas a un equipo padre, los miembros de los equipos hijo también reciben notificaciones, simplificando la comunicación con múltiples grupos de personas. Para más información, vea "[Acerca de los equipos](/articles/about-teams)".

Si escribe un símbolo <kbd>@</kbd>, aparecerá una lista de personas o equipos en el proyecto. La lista filtra a medida que escribes, por lo que una vez que escribes el nombre de la persona o del equipo que estás buscando, puedes usar las teclas de flecha para seleccionarlos y presionar cada pestaña para ingresar para completar el nombre. En el caso de los equipos, escriba @organization/team-name y todos los miembros de ese equipo se suscribirán a la conversación.

Los resultados autocompletados se restringen a los colaboradores del repositorio y a otros participantes en el hilo.

## Hacer referencia a propuestas y solicitudes de extracción

Puede mencionar una lista de las incidencias y solicitudes de incorporación de cambios dentro del repositorio escribiendo <kbd>#</kbd>. Escribe el número o el título de la propuesta o la solicitud de extracción para filtrar la lista, y luego presiona cada pestaña o ingresa para completar el resultado resaltado.

Para obtener más información, consulte "[Referencias y direcciones URL vinculadas automáticamente](/articles/autolinked-references-and-urls)".

## Hacer referencia a recursos externos

{% data reusables.repositories.autolink-references %}

{% ifversion ghes < 3.4 %}
## Adjuntos de contenido

Algunas {% data variables.product.prodname_github_apps %} proporcionan información en {% data variables.product.product_name %} para las URL que enlazan a sus dominios registrados. {% data variables.product.product_name %} presenta la información suministrada por la app debajo de la URL en el cuerpo o comentario de una propuesta o solicitud de extracción.

![Adjunto de contenido](/assets/images/github-apps/content_reference_attachment.png)

Para ver los datos adjuntos de contenido, debe tener una {% data variables.product.prodname_github_app %} que use la API de datos adjuntos de contenido instalada en el repositorio.{% ifversion fpt or ghec %} Para obtener más información, consulte "[Instalación de una aplicación en su cuenta personal](/articles/installing-an-app-in-your-personal-account)" e "[Instalación de una aplicación en su organización](/articles/installing-an-app-in-your-organization)".{% endif %}

Los adjuntos de contenido no se mostrarán para las URL que son parte de un enlace de Markdown.

Para obtener más información sobre cómo crear una {% data variables.product.prodname_github_app %} que use datos adjuntos de contenido, consulte "[Uso de datos adjuntos de contenido](/apps/using-content-attachments)".{% endif %}

## Cargar activos

Puedes cargar activos como imágenes si las arrastras y sueltas, las seleccionas de un buscador de archivos o si las pegas. Puede cargar recursos en las incidencias, solicitudes de incorporación de cambios, comentarios y archivos `.md` en el repositorio.

## Usar emojis

Puede agregar emoji al texto escribiendo `:EMOJICODE:`.

`@octocat :+1: This PR looks great - it's ready to merge! :shipit:`

![Emoji representado](/assets/images/help/writing/emoji-rendered.png)

Escriba <kbd>:</kbd> mostrará una lista de emojis sugeridos. La lista se filtrará a medida que escriba, por lo que una vez que encuentre el emoji que está buscando, pulse **Tab** o **Entrar** para completar el resultado resaltado.

Para obtener una lista completa de los códigos y emoji disponibles, consulte [the Emoji-Cheat-Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md).

## Párrafos

Puedes crear un nuevo párrafo al dejar una línea en blanco entre las líneas de texto.

## Notas al pie

Puedes agregar notas al pie para tu contenido si utilizas esta sintaxis de corchetes:

```
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.
```

La nota al pie se verá así:

![Nota al pie interpretada](/assets/images/site/rendered-footnote.png)

{% tip %}

**Nota**: La posición de una nota al pie de página en Markdown no influye en dónde se representará la nota al pie de página. Puedes escribir una nota al pie después de referenciarla y esta aún se interpretará en la parte inferior del archivo con lenguaje de marcado.

Las notas al pie no se admiten en las wikis.

{% endtip %}

## Ocultar el contenido con comentarios

Puedes decirle a {% data variables.product.product_name %} que oculte el contenido del lenguaje de marcado interpretado colocando el contenido en un comentario de HTML.

<pre>
&lt;!-- This content will not appear in the rendered Markdown --&gt;
</pre>

## Ignorar formato de Markdown

Puede pedirle a {% data variables.product.product_name %} que ignore (u omita) el formato de Markdown escribiendo <kbd>\\</kbd> antes del carácter de Markdown.

`Let's rename \*our-new-project\* to \*our-old-project\*.`

![Carácter evadido representado](/assets/images/help/writing/escaped-character-rendered.png)

Para obtener más información, consulte "[Sintaxis de Markdown](https://daringfireball.net/projects/markdown/syntax#backslash)" de Daring Fireball.

## Inhabilitar la representación del lenguaje de marcado

{% data reusables.repositories.disabling-markdown-rendering %}

## Información adicional

- [Especificación de {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
- "[Acerca de la escritura y la aplicación de formato en GitHub](/articles/about-writing-and-formatting-on-github)"
- "[Trabajar con formato avanzado](/articles/working-with-advanced-formatting)"
- "[Inicio rápido para escribir en {% data variables.product.prodname_dotcom %}](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)"
