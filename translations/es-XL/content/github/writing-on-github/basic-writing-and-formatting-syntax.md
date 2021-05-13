---
title: Sintaxis de escritura y formato básicos
intro: Crear formatos sofisticados para tu prosa y código en GitHub con sintaxis simple.
redirect_from:
  - /articles/basic-writing-and-formatting-syntax
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Encabezados

Para crear un encabezado, agrega uno a seis símbolos `#` antes del encabezado del texto. La cantidad de `#`</code> que usas determinará el tamaño del ecanbezado.

```
# El encabezado más largo
## El segundo encabezado más largo
###### El encabezado más pequeño
```

![Encabezados H1, H2 y H6 representados](/assets/images/help/writing/headings-rendered.png)

### Estilo de texto

Puedes indicar énfasis con texto en negrita, cursiva o tachado.

| Estilo                       | Sintaxis          | Atajo del teclado   | Ejemplo                                         | Resultado                                     |
| ---------------------------- | ----------------- | ------------------- | ----------------------------------------------- | --------------------------------------------- |
| Negrita                      | `** **` o `__ __` | command/control + b | `**Este texto está en negrita**`                | **Este texto está en negrita**                |
| Cursiva                      | `* *` o `_ _`     | command/control + i | `*Este texto está en cursiva*`                  | *Este texto está en cursiva*                  |
| Tachado                      | `~~ ~~`           |                     | `~~Este texto está equivocado~~`                | ~~Este texto está equivocado~~                |
| Cursiva en negrita y anidada | `** **` y `_ _`   |                     | `**Este texto es _extremadamente_ importante**` | **Este texto es _extremadamente_ importante** |
| Todo en negrita y cursiva    | `*** ***`         |                     | `***Todo este texto es importante***`           | ***Todo este texto es importante***           |

### Cita de texto

Puedes citar texto con un `>`.

```
Tal como dice Abraham Lincoln:

> Con perdón de la expresión
```

![Texto citado representado](/assets/images/help/writing/quoted-text-rendered.png)

{% tip %}

**Sugerencia:** Al revisar una conversación, puedes citar un texto automáticamente en un comentario al resaltar el texto y luego escribir el código `r`. Puedes citar un comentario completo al hacer clic en {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, y luego en **Quote reply** (Citar respuesta). Para obtener más información sobre atajo del teclado, consulta "[Atajos del teclado](/articles/keyboard-shortcuts/)".

{% endtip %}

### Código de cita

Puedes indicar un código o un comando dentro de un enunciado con comillas simples. El texto dentro de las comillas simples no será formateado.

```
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

### Enlaces

Puedes crear un enlace en línea al encerrar el texto del enlace entre corchetes `[ ]`, y luego encerrar la URL entre paréntesis `( )`. También puedes usar el atajo del teclado `command + k` para crear un enlace.

`Este sitio se construyó usando [GitHub Pages](https://pages.github.com/).`

![Enlace representado](/assets/images/help/writing/link-rendered.png)

{% tip %}

**Sugerencias:** {% data variables.product.product_name %} automáticamente crea enlaces cuando las direcciones URL válidas están escritas en un comentario. Para obtener más información, consulta "[Referencias autovinculadas y direcciones de URL](/articles/autolinked-references-and-urls)".

{% endtip %}

### Enlaces de sección

{% data reusables.repositories.section-links %}

### Enlaces relativos

{% data reusables.repositories.relative-links %}

### Listas

Puedes realizar una lista desordenada al anteceder una o más líneas de texto con `-` o `*`.

```
- George Washington
- John Adams
- Thomas Jefferson
```

![Lista desordenada representada](/assets/images/help/writing/unordered-list-rendered.png)

Para ordenar tu lista, antecede cada línea con un número.

```
1. James Madison
2. James Monroe
3. John Quincy Adams
```

![Lista ordenada representada](/assets/images/help/writing/ordered-list-rendered.png)

#### Listas anidadas

Puedes crear una lista anidada al dejar sangría en uno o más elementos de la lista debajo de otro elemento.

Para crear una lista anidada mediante el editor web en {% data variables.product.product_name %} o un editor de texto que usa una fuente monoespaciada, como [Atom](https://atom.io/), puedes alinear tu lista visualmente. Escribe los caracteres con espacio frente a tu elemento de la lista anidada hasta que el carácter del marcador de lista (`-` or `*`) se encuentre directamente debajo del primer carácter del texto en el elemento que se encuentra por debajo.

```
1. Primer elemento de la lista
   - Primer elemento de la lista anidado
     - Segundo elemento de la lista anidado
```

![Lista anidada con alineación resaltada](/assets/images/help/writing/nested-list-alignment.png)

![Lista con dos niveles de elementos anidados](/assets/images/help/writing/nested-list-example-1.png)

Para crear una lista anidada en el editor de comentarios en {% data variables.product.product_name %}, que no usa una fuente monoespaciada, puedes observar el elemento de la lista inmediatamente anterior a la lista anidada y contar el número de caracteres que aparecen antes del contenido del elemento. Luego escribe ese número de caracteres de espacio frente al elemento de la lista anidada.

En este ejemplo, puedes agregar un elemento de la lista anidada debajo del elemento de la lista `100. Primer elemento de la lista` con una sangría mínima de cinco espacios para el elemento de la lista anidada, dado que hay cinco caracteres (`100.`) antes del `Primer elemento de la lista`.

```
100. Primer elemento de la lista
     - Primer elemento de la lista anidada
```

![Lista con un elemento de lista anidado](/assets/images/help/writing/nested-list-example-3.png)

Puedes crear múltiples niveles de listas anidadas mediante el mismo método. Por ejemplo, dado que el primer elemento de la lista tiene siete espacios (`␣␣␣␣␣-␣`) antes del contenido de la lista anidada `Primer elemento de la lista anidada`, deberías colocar sangría en el primer elemento de la lista anidada por siete espacios.

```
100. Primer elemento de la lista
     - Primer elemento de la lista anidada
       - Segundo elemento de la lista anidada
```

![Lista con dos niveles de elementos anidados](/assets/images/help/writing/nested-list-example-2.png)

Para conocer más ejemplos, consulta las [Especificaciones de formato Markdown de GitHub](https://github.github.com/gfm/#example-265).

### Listas de tareas

{% data reusables.repositories.task-list-markdown %}

If a task list item description begins with a parenthesis, you'll need to escape it with `\`:

`- [ ] \(Optional) Abre una propuesta de seguimiento`

Para obtener más información, consulta "[Acerca de las listas de tareas](/articles/about-task-lists)".

### Mencionar personas y equipos

Puedes mencionar a una persona o [equipo](/articles/setting-up-teams/) en {% data variables.product.product_name %} al escribir `@` más el nombre de usuario o el nombre del equipo. This will trigger a notification and bring their attention to the conversation. Las personas también recibirán una notificación si editas un comentario para mencionar su nombre de usuario o el nombre del equipo. Para obtener más información acerca de las notificaciones, consulta la sección {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Acerca de las notificaciones](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}"[Acerca de las notificaciones](/github/receiving-notifications-about-activity-on-github/about-notifications){% endif %}".

`@github/support ¿Qué piensas sobre estas actualizaciones?`

![@mention representado](/assets/images/help/writing/mention-rendered.png)

Cuando mencionas a un equipo padre, los miembros de los equipos hijo también reciben notificaciones, simplificando la comunicación con múltiples grupos de personas. Para obtener más información, consulta "[Acerca de los equipos](/articles/about-teams)".

Si escribes un símbolo `@` aparecerá una lista de personas o equipos en el proyecto. La lista filtra a medida que escribes, por lo que una vez que escribes el nombre de la persona o del equipo que estás buscando, puedes usar las teclas de flecha para seleccionarlos y presionar cada pestaña para ingresar para completar el nombre. En el caso de los equipos, escribe el nombre de la @organización/equipo y todos los miembros del equipo que se suscribirán a la conversación.

Los resultados autocompletados se restringen a los colaboradores del repositorio y a otros participantes en el hilo.

### Hacer referencia a propuestas y solicitudes de extracción

Puedes mencionar una lista de las propuestas y las solicitudes de extracción sugeridas dentro del repositorio al escribir `#`. Escribe el número o el título de la propuesta o la solicitud de extracción para filtrar la lista, y luego presiona cada pestaña o ingresa para completar el resultado resaltado.

Para obtener más información, consulta "[Referencias y direcciones URL autovinculadas](/articles/autolinked-references-and-urls)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
### Hacer referencia a recursos externos

{% data reusables.repositories.autolink-references %}

{% endif %}

### Adjuntos de contenido

Algunas {% data variables.product.prodname_github_app %} brindan información en {% data variables.product.product_name %} para las URL que se vinculan con sus dominios registrados. {% data variables.product.product_name %} presenta la información suministrada por la app debajo de la URL en el cuerpo o comentario de una propuesta o solicitud de extracción.

![Adjunto de contenido](/assets/images/help/writing/content-attachment.png)

Para ver los adjuntos de contenido, debes tener un {% data variables.product.prodname_github_app %} que use la API de los adjuntos de contenido instalada en el repositorio.{% if currentVersion == "free-pro-team@latest" %} Para obtener más información, consulta "[Instalar una app en tu cuenta personal](/articles/installing-an-app-in-your-personal-account)" y "[Instalar una app en tu organización](/articles/installing-an-app-in-your-organization)".{% endif %}

Los adjuntos de contenido no se mostrarán para las URL que son parte de un enlace de Markdown.

Para obtener más información sobre el desarrollo de una {% data variables.product.prodname_github_app %} que utilice adjuntos de contenido, consulta la sección "[Utilizar adjuntos de contenido](/apps/using-content-attachments)".

### Usar emojis

Puedes agregar emojis a tu escritura al escribir `:EMOJICODE:`.

`@octocat :+1: This PR looks great - it's ready to merge! :shipit:`

![Emoji representado](/assets/images/help/writing/emoji-rendered.png)

Si escribes `:` aparecerá una lista con los emojis sugeridos. La lista filtrará a medida que escribes; por lo tanto, una vez que encuentres el emoji que estás buscando, presiona **Tab** (Tabulador) o **Enter** (Intro) para completar el resultado resaltado.

Para conocer una lista completa de los emojis y los códigos disponibles, revisa [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com).

### Párrafos

Puedes crear un nuevo párrafo al dejar una línea en blanco entre las líneas de texto.

### Importar formato de Markdown

Puedes pedirle a {% data variables.product.product_name %} que ignore (o evada) el formato de Markdown usando la `\` antes del caracter de Markdown.

`Cambiemos el nombre de \*our-new-project\* a \*our-old-project\*.`

![Carácter evadido representado](/assets/images/help/writing/escaped-character-rendered.png)

Para obtener más información, consulta "[Sintaxis de Markdown" de Daring Fireball](https://daringfireball.net/projects/markdown/syntax#backslash),

### Leer más

- [{% data variables.product.prodname_dotcom %} Especificaciones del formato Markdown](https://github.github.com/gfm/)
- "[Acerca de escritura y formato en GitHub](/articles/about-writing-and-formatting-on-github)"
- "[Trabajar con formato avanzado](/articles/working-with-advanced-formatting)"
- "[Dominar Markdown](https://guides.github.com/features/mastering-markdown/)"
