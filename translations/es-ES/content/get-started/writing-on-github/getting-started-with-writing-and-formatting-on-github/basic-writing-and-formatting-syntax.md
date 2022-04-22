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
shortTitle: Sintaxis de formato básica
---

## Encabezados

Para crear un encabezado, agrega uno a seis símbolos <kbd>#</kbd> antes del encabezado del texto. The number of <kbd>#</kbd> you use will determine the size of the heading.

```markdown
# El encabezado más largo
## El segundo encabezado más largo
###### El encabezado más pequeño
```

![Encabezados H1, H2 y H6 representados](/assets/images/help/writing/headings-rendered.png)

When you use two or more headings, GitHub automatically generates a table of contents which you can access by clicking {% octicon "list-unordered" aria-label="The unordered list icon" %} within the file header. Each heading title is listed in the table of contents and you can click a title to navigate to the selected section.

![Screenshot highlighting the table of contents icon](/assets/images/help/repository/headings_toc.png)


## Estilo de texto

Puedes indicar énfasis con texto en negritas, itálicas o tachadas en los campos de comentario y archivos `.md`.

| Estilo                       | Sintaxis           | Atajo del teclado                                                                     | Ejemplo                                         | Resultado                                     |
| ---------------------------- | ------------------ | ------------------------------------------------------------------------------------- | ----------------------------------------------- | --------------------------------------------- |
| Negrita                      | `** **` o `__ __`  | <kbd>Command</kbd>+<kbd>B</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | `**Este texto está en negrita**`                | **Este texto está en negrita**                |
| Cursiva                      | `* *` o `_ _`      | <kbd>Command</kbd>+<kbd>I</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | `*Este texto está en cursiva*`                  | *Este texto está en cursiva*                  |
| Tachado                      | `~~ ~~`            |                                                                                       | `~~Este texto está equivocado~~`                | ~~Este texto está equivocado~~                |
| Cursiva en negrita y anidada | `** **` y `_ _`    |                                                                                       | `**Este texto es _extremadamente_ importante**` | **Este texto es _extremadamente_ importante** |
| Todo en negrita y cursiva    | `*** ***`          |                                                                                       | `***Todo este texto es importante***`           | ***Todo este texto es importante***           |

## Cita de texto

You can quote text with a <kbd>></kbd>.

```markdown
Texto que no es una cita

> Texto que es una cita
```

![Texto citado representado](/assets/images/help/writing/quoted-text-rendered.png)

{% tip %}

**Tip:** When viewing a conversation, you can automatically quote text in a comment by highlighting the text, then typing <kbd>R</kbd>. Puedes citar un comentario completo al hacer clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, y luego en **Quote reply** (Citar respuesta). Para obtener más información sobre atajo del teclado, consulta "[Atajos del teclado](/articles/keyboard-shortcuts/)".

{% endtip %}

## Código de cita

Puedes indicar un código o un comando dentro de un enunciado con comillas simples. The text within the backticks will not be formatted.{% ifversion fpt or ghae or ghes > 3.1 or ghec %} You can also press the <kbd>Command</kbd>+<kbd>E</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows/Linux) keyboard shortcut to insert the backticks for a code block within a line of Markdown.{% endif %}

```markdown
Usa `git status` para enumerar todos los archivos nuevos o modificados que aún no han sido confirmados.
```

![Bloque de código en línea representado](/assets/images/help/writing/inline-code-rendered.png)

Para formatear código o texto en su propio bloque distintivo, usa comillas triples.

<pre>
Algunos de los comandos de Git básicos son:
```
git status
git add
git commit
```
</pre>

![Bloque de código representado](/assets/images/help/writing/code-block-rendered.png)

Para obtener más información, consulta "[Crear y resaltar bloques de código](/articles/creating-and-highlighting-code-blocks)".

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Enlaces

Puedes crear un enlace en línea al encerrar el texto del enlace entre corchetes `[ ]`, y luego encerrar la URL entre paréntesis `( )`. {% ifversion fpt or ghae or ghes > 3.1 or ghec %}También puedes utilizar el atajo de teclado <kbd>Command</kbd>+<kbd>K</kbd> para crear un enlace.{% endif %}{% ifversion fpt or ghae-issue-5434 or ghes > 3.3 or ghec %} Cuando tengas texto seleccionado, puedes pegar una URL desde tu portapapeles para crear un enlace automáticamente desde la selección.{% endif %}

`Este sitio se construyó usando [GitHub Pages](https://pages.github.com/).`

![Enlace representado](/assets/images/help/writing/link-rendered.png)

{% tip %}

**Sugerencias:** {% data variables.product.product_name %} automáticamente crea enlaces cuando las direcciones URL válidas están escritas en un comentario. Para obtener más información, consulta "[Referencias y direcciones URL autovinculadas](/articles/autolinked-references-and-urls)".

{% endtip %}

## Enlaces de sección

{% data reusables.repositories.section-links %}

## Enlaces relativos

{% data reusables.repositories.relative-links %}

## Imágenes

You can display an image by adding <kbd>!</kbd> and wrapping the alt text in `[ ]`. Entonces encierra el enlace de la imagen entre paréntesis `()`.

`![Esta es una imagen](https://myoctocat.com/assets/images/base-octocat.svg)`

![Imagen interpretada](/assets/images/help/writing/image-rendered.png)

{% data variables.product.product_name %} es compatible con incrustar imágenes en tus propuestas, solicitudes de cambio{% ifversion fpt or ghec %}, debates{% endif %}, comentarios y archivos `.md`. Puedes mostrar una imagen desde tu repositorio, agregar un enlace a una imagen en línea o cargar una imagen. Para obtener más información, consulta la sección "[Cargar activos](#uploading-assets)".

{% tip %}

**Tip:** Cuando quieras mostrar una imagen que esté en tu repositorio, deberías utilizar enlaces relativos en vez de absolutos.

{% endtip %}

Aquí tienes algunos ejemplos para utilizar enlaces relativos para mostrar una imagen.

| Contexto                                                                | Enlace Relativo                                                        |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| En un archivo `.md` en la misma rama                                    | `/assets/images/electrocat.png`                                        |
| En un archivo `.md` en otra rama                                        | `/../main/assets/images/electrocat.png`                                |
| En propuestas, solicitudes de cambio y comentarios del repositorio      | `../blob/main/assets/images/electrocat.png`                            |
| En un archivo `.md` en otro repositorio                                 | `/../../../../github/docs/blob/main/assets/images/electrocat.png`      |
| En propuestas, solicitudes de cambios y comentarios de otro repositorio | `../../../github/docs/blob/main/assets/images/electrocat.png?raw=true` |

{% note %}

**Nota**: Los últimos dos enlaces relativos en la tabla anterior funcionarán únicamente para las imágenes en repositorios privados solo si el lector tiene por lo menos acceso de lectura a este.

{% endnote %}

Para obtener más información, consulta la sección "[Enlaces relativos](#relative-links)".

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5559 %}
### Especificar un tema en el que se muestra una imagen

Puedes especificar el tema en el cual se muestra una imagen si agregas `#gh-dark-mode-only` o `#gh-light-mode-only` al final de la URL de una imagen en lenguaje de marcado.

Distinguimos entre modos de color oscuro y claro, así que existen dos opciones disponibles. Puedes utilizar estas opciones para mostrar imágenes optimizadas para los fondos claros u oscuros. Esto es especialmente útil para las imágenes PNG transparentes.

| Contexto    | URL                                                                          |
| ----------- | ---------------------------------------------------------------------------- |
| Tema oscuro | `![GitHub Brillante](https://github.com/github-light.png#gh-dark-mode-only)` |
| Tema claro  | `![GitHub Oscuro](https://github.com/github-dark.png#gh-light-mode-only)`    |
{% endif %}

## Listas

Puedes realizar una lista desordenada al anteceder una o más líneas de texto con <kbd>-</kbd> o <kbd>*</kbd>.

```markdown
- George Washington
- John Adams
- Thomas Jefferson
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

Para crear una lista anidada mediante el editor web en {% data variables.product.product_name %} o un editor de texto que usa una fuente monoespaciada, como [Atom](https://atom.io/), puedes alinear tu lista visualmente. Escribe los caracteres con espacio frente a tu elemento de la lista anidada hasta que el carácter del marcador de lista (<kbd>-</kbd> or <kbd>*</kbd>) se encuentre directamente debajo del primer carácter del texto en el elemento que se encuentra por debajo.

```markdown
1. Primer elemento de la lista
   - Primer elemento de la lista anidado
     - Segundo elemento de la lista anidado
```

{% tip %}

**Note**: In the web-based editor, you can indent or dedent one or more lines of text by first highlighting the desired lines and then using <kbd>Tab</kbd> or <kbd>Shift</kbd>+<kbd>Tab</kbd> respectively.

{% endtip %}

![Lista anidada con alineación resaltada](/assets/images/help/writing/nested-list-alignment.png)

![Lista con dos niveles de elementos anidados](/assets/images/help/writing/nested-list-example-1.png)

Para crear una lista anidada en el editor de comentarios en {% data variables.product.product_name %}, que no usa una fuente monoespaciada, puedes observar el elemento de la lista inmediatamente anterior a la lista anidada y contar el número de caracteres que aparecen antes del contenido del elemento. Luego escribe ese número de caracteres de espacio frente al elemento de la lista anidada.

En este ejemplo, puedes agregar un elemento de la lista anidada debajo del elemento de la lista `100. Primer elemento de la lista` con una sangría mínima de cinco espacios para el elemento de la lista anidada, dado que hay cinco caracteres (`100.`) antes del `Primer elemento de la lista`.

```markdown
100. Primer elemento de la lista
     - Primer elemento de la lista anidada
```

![Lista con un elemento de lista anidado](/assets/images/help/writing/nested-list-example-3.png)

Puedes crear múltiples niveles de listas anidadas mediante el mismo método. Por ejemplo, ya que el primer elemento de la lista anidada tiene siete caracteres (`␣␣␣␣␣-␣`) antes del contenido `First nested list item` de la misma, necesitarás colocar sangría de siete espacios en el segundo elemento de esta.

```markdown
100. Primer elemento de la lista
     - Primer elemento de la lista anidada
       - Segundo elemento de la lista anidada
```

![Lista con dos niveles de elementos anidados](/assets/images/help/writing/nested-list-example-2.png)

Para conocer más ejemplos, consulta las [Especificaciones de formato Markdown de GitHub](https://github.github.com/gfm/#example-265).

## Listas de tareas

{% data reusables.repositories.task-list-markdown %}

If a task list item description begins with a parenthesis, you'll need to escape it with <kbd>\\</kbd>:

`- [ ] \(Optional) Abre una propuesta de seguimiento`

Para obtener más información, consulta "[Acerca de las listas de tareas](/articles/about-task-lists)".

## Mencionar personas y equipos

Puedes mencionar a una persona o [equipo](/articles/setting-up-teams/) en {% data variables.product.product_name %} al escribir <kbd>@</kbd> más el nombre de usuario o el nombre del equipo. Esto activará una notificación y llamará su atención hacia la conversación. Las personas también recibirán una notificación si editas un comentario para mencionar su nombre de usuario o el nombre del equipo. Para obtener más información acerca de las notificaciones, consulta la sección {% ifversion fpt or ghes or ghae or ghec %}"[Acerca de las notificaciones](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}"[Acerca de las notificaciones](/github/receiving-notifications-about-activity-on-github/about-notifications){% endif %}".

`@github/support ¿Qué piensas sobre estas actualizaciones?`

![@mention representado](/assets/images/help/writing/mention-rendered.png)

Cuando mencionas a un equipo padre, los miembros de los equipos hijo también reciben notificaciones, simplificando la comunicación con múltiples grupos de personas. Para obtener más información, consulta "[Acerca de los equipos](/articles/about-teams)".

Si escribes un símbolo <kbd>@</kbd> aparecerá una lista de personas o equipos en el proyecto. La lista filtra a medida que escribes, por lo que una vez que escribes el nombre de la persona o del equipo que estás buscando, puedes usar las teclas de flecha para seleccionarlos y presionar cada pestaña para ingresar para completar el nombre. En el caso de los equipos, escribe el nombre de la @organización/equipo y todos los miembros del equipo que se suscribirán a la conversación.

Los resultados autocompletados se restringen a los colaboradores del repositorio y a otros participantes en el hilo.

## Hacer referencia a propuestas y solicitudes de extracción

Puedes mencionar una lista de las propuestas y las solicitudes de extracción sugeridas dentro del repositorio al escribir <kbd>#</kbd>. Escribe el número o el título de la propuesta o la solicitud de extracción para filtrar la lista, y luego presiona cada pestaña o ingresa para completar el resultado resaltado.

Para obtener más información, consulta "[Referencias y direcciones URL autovinculadas](/articles/autolinked-references-and-urls)".

## Hacer referencia a recursos externos

{% data reusables.repositories.autolink-references %}

{% ifversion ghes < 3.4 %}
## Adjuntos de contenido

Algunas {% data variables.product.prodname_github_apps %} proporcionan información en {% data variables.product.product_name %} para las URL que enlazan a sus dominios registrados. {% data variables.product.product_name %} presenta la información suministrada por la app debajo de la URL en el cuerpo o comentario de una propuesta o solicitud de extracción.

![Adjunto de contenido](/assets/images/github-apps/content_reference_attachment.png)

Para ver los adjuntos de contenido, debes tener una {% data variables.product.prodname_github_app %} que use la API de los adjuntos de contenido instalada en el repositorio.{% ifversion fpt or ghec %} Para obtener más información, consulta las secciones "[Instalar una app en tu cuenta personal](/articles/installing-an-app-in-your-personal-account)" y "[Instalar una app en tu organización](/articles/installing-an-app-in-your-organization)".{% endif %}

Los adjuntos de contenido no se mostrarán para las URL que son parte de un enlace de Markdown.

Para obtener más información sobre el desarrollo de una {% data variables.product.prodname_github_app %} que usa adjuntos de contenido, consulta la sección "[Usar adjuntos de contenido](/apps/using-content-attachments)".{% endif %}

## Cargar activos

Puedes cargar activos como imágenes si las arrastras y sueltas, las seleccionas de un buscador de archivos o si las pegas. Puedes cargar activos a las propuestas, solicitudes de cambios, comentarios y archivos `.md` en tu repositorio.

## Usar emojis

Puedes agregar emojis a tu escritura al escribir `:EMOJICODE:`.

`@octocat :+1: This PR looks great - it's ready to merge! :shipit:`

![Emoji representado](/assets/images/help/writing/emoji-rendered.png)

Si escribes <kbd>:</kbd> aparecerá una lista con los emojis sugeridos. La lista filtrará a medida que escribes; por lo tanto, una vez que encuentres el emoji que estás buscando, presiona **Tab** (Tabulador) o **Enter** (Intro) para completar el resultado resaltado.

Para encontrar una lista completa de emojis y códigos disponibles, consulta el [listado de emojis](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md).

## Párrafos

Puedes crear un nuevo párrafo al dejar una línea en blanco entre las líneas de texto.

{% ifversion fpt or ghae-issue-5180 or ghes > 3.2 or ghec %}
## Notas al pie

Puedes agregar notas al pie para tu contenido si utilizas esta sintaxis de corchetes:

```
Esta es una nota al pie sencilla[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: Mi referencia.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.
```

La nota al pie se verá así:

![Nota al pie interpretada](/assets/images/site/rendered-footnote.png)

{% tip %}

**Notae**: La posición de una nota al pie en tu archivo con lenguaje de marcado no influencia la nota al pie que se interpretará. Puedes escribir una nota al pie después de referenciarla y esta aún se interpretará en la parte inferior del archivo con lenguaje de marcado.

Footnotes are not supported in wikis.

{% endtip %}
{% endif %}

## Ocultar el contenido con comentarios

Puedes decirle a {% data variables.product.product_name %} que oculte el contenido del lenguaje de marcado interpretado colocando el contenido en un comentario de HTML.

<pre>
&lt;!-- This content will not appear in the rendered Markdown --&gt;
</pre>

## Importar formato de Markdown

You can tell {% data variables.product.product_name %} to ignore (or escape) Markdown formatting by using <kbd>\\</kbd> before the Markdown character.

`Cambiemos el nombre de \*our-new-project\* a \*our-old-project\*.`

![Carácter evadido representado](/assets/images/help/writing/escaped-character-rendered.png)

Para obtener más información, consulta "[Sintaxis de Markdown" de Daring Fireball](https://daringfireball.net/projects/markdown/syntax#backslash),

{% ifversion fpt or ghes > 3.2 or ghae-issue-5232 or ghec %}

## Inhabilitar la representación del lenguaje de marcado

{% data reusables.repositories.disabling-markdown-rendering %}

{% endif %}

## Leer más

- [{% data variables.product.prodname_dotcom %} Especificaciones del formato Markdown](https://github.github.com/gfm/)
- "[Acerca de escritura y formato en GitHub](/articles/about-writing-and-formatting-on-github)"
- "[Trabajar con formato avanzado](/articles/working-with-advanced-formatting)"
- "[Dominar Markdown](https://guides.github.com/features/mastering-markdown/)"
