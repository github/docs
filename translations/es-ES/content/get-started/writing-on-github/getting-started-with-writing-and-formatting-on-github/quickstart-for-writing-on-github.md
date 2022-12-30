---
title: Inicio rápido para escribir en GitHub
intro: 'Obtén información sobre las características de formato avanzadas creando LÉAME {% ifversion ghae %}gist para describirse a sí mismo{% else %}README para el perfil de {% data variables.product.prodname_dotcom %}{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
ms.openlocfilehash: a023d55dd4d7bd41af329a4eaac1e2408af96294
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107177'
---
## Introducción

Markdown es un lenguaje fácil de leer y escribir para aplicar formato al texto sin formato. Puedes usar la sintaxis de Markdown, junto con algunas etiquetas HTML adicionales, para aplicar formato a la escritura en {% data variables.product.prodname_dotcom %}, en lugares como los archivos LÉAME del repositorio y los comentarios en las solicitudes de incorporación de cambios y los problemas. En esta guía, descubrirás algunas características de formato avanzadas creando {% ifversion ghae %}un gist{% else %}o editando un archivo LÉAME para {% data variables.product.prodname_dotcom %} el perfil{% endif %}.

Si no estás familiarizado con Markdown, es posible que quieras empezar con "[Escritura básica y sintaxis de formato](/articles/basic-writing-and-formatting-syntax)" o el curso [Comunicación con Markdown](https://github.com/skills/communicate-using-markdown) {% data variables.product.prodname_learning %}.

{% ifversion not ghae %}

Si ya tienes un archivo LÉAME de perfil, puedes seguir esta guía agregando algunas características al archivo LÉAME existente o creando un gist con un archivo Markdown llamado algo así como `about-me.md`. Para obtener más información, consulta "[Creación de gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)".

{% endif %}

{% ifversion ghae %}

## Crear un gist

Los gists permiten almacenar o compartir fragmentos de código y otros fragmentos de información con otros usuarios en {% data variables.location.product_location %}. Para usar características de formato en gists, agrega un archivo gist con una extensión `.md`.

1. Dirígete a tu {% data variables.gists.gist_homepage %}.
1. Opcionalmente, escribe una descripción para el gist como, por ejemplo, "Acerca de mí".
1. En el campo **Nombre de archivo que incluya la extensión...** , escribe `about-me.md`.

Para obtener más información, consulta "[Creación de gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)".

{% else %}

## Creación o edición del archivo LÉAME de perfil

El archivo LÉAME de perfil permite compartir información sobre ti mismo con la comunidad en {% data variables.location.product_location %}. El archivo LÉAME se muestra en la parte superior de la página del perfil.

Si aún no tienes un archivo LÉAME de perfil, puedes agregar uno.

1. Crea un repositorio con el mismo nombre que el nombre de usuario de {% data variables.product.prodname_dotcom %}, inicializando el repositorio con un archivo `README.md`. Para más información, vea "[Administración del archivo Léame del perfil](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme#adding-a-profile-readme)".
1. Edita el archivo `README.md` y elimina el texto de la plantilla (empezando por `### Hi there`) que se agrega automáticamente al crear el archivo.

Si ya tienes un archivo LÉAME de perfil, puedes editarlo desde la página del perfil.

{% data reusables.profile.navigating-to-profile %}
1. Haz clic en el {% octicon "pencil" aria-label="The Pencil icon" %} junto al archivo LÉAME de perfil.

   ![Captura de pantalla de una página de perfil, con el icono de lápiz resaltado junto al archivo LÉAME de perfil](/assets/images/help/profile/edit-profile-readme.png)

{% endif %}

## Incorporación de una imagen para adaptarse a los visitantes

Puedes incluir imágenes en la comunicación en {% data variables.product.prodname_dotcom %}. Aquí, agregarás una imagen con capacidad de respuesta, como un banner, en la parte superior de tu {% ifversion ghae %}gist{% else %}archivo LÉAME de perfil{% endif %}. 

Si usas el elemento HTML `<picture>` con la característica de elementos multimedia `prefers-color-scheme`, puedes agregar una imagen que cambie en función de si un visitante usa el modo claro o oscuro. Para más información, vea "[Administración de la configuración de temas](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings)".

1. Copia y pega el marcado siguiente en el archivo {% ifversion ghae %}`about-me.md`{% else %}`README.md`{% endif %}.
   
   ```HTML{:copy}
   <picture>
    <source media="(prefers-color-scheme: dark)" srcset="YOUR-DARKMODE-IMAGE">
    <source media="(prefers-color-scheme: light)" srcset="YOUR-LIGHTMODE-IMAGE">
    <img alt="YOUR-ALT-TEXT" src="YOUR-DEFAULT-IMAGE">
   </picture>
   ```
1. Reemplaza los marcadores de posición del marcado por las direcciones URL de las imágenes elegidas. Como alternativa, para probar primero la característica, puedes copiar las direcciones URL de nuestro ejemplo siguiente.

   - Reemplaza `YOUR-DARKMODE-IMAGE` por la dirección URL de una imagen que se va a mostrar para los visitantes con el modo oscuro.
   - Reemplaza `YOUR-LIGHTMODE-IMAGE` por la dirección URL de una imagen que se va a mostrar para los visitantes con el modo claro.
   - Reemplaza `YOUR-DEFAULT-IMAGE` por la dirección URL de una imagen que se va a mostrar en caso de que ninguna de las otras imágenes pueda coincidir, por ejemplo, si el visitante usa un explorador que no admite la característica `prefers-color-scheme`.
1. A fin de que la imagen sea accesible para los visitantes que usan un lector de pantalla, reemplaza `YOUR-ALT-TEXT` por una descripción de la imagen.
1. Para comprobar que la imagen se ha representado correctamente, haz clic en la pestaña **Vista previa**.

Para obtener más información sobre el uso de imágenes en Markdown, consulta "[Sintaxis de escritura y formato básicos](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#images)".

### Ejemplo

{% data reusables.getting-started.picture-element-example %}

### Cómo se ve

![Captura de pantalla de la pestaña Vista previa en modo claro, en la que se muestra una imagen de un sol sonriente](/assets/images/help/profile/lightmode-image-example.png)

## Incorporación de una tabla

Puedes usar tablas de Markdown para organizar la información. Aquí, usarás una tabla para presentarte clasificando algo, como los lenguajes de programación o los marcos que más usas, las cosas a las que dedicas el tiempo aprendiendo o tus aficiones favoritas. Cuando una columna de tabla contiene números, resulta útil alinear la columna a la derecha mediante la sintaxis `--:` situada debajo de la fila de encabezado.

1. Vuelve a la pestaña **Editar {% ifversion ghae %}nuevo {% endif %}archivo**. 
1. Para presentarte, dos líneas debajo de la etiqueta `</picture>`, agrega un encabezado `## About me` y un párrafo corto sobre ti mismo, como el siguiente.
   
   ```Markdown
   ## About me

   Hi, I'm Mona. You might recognize me as {% data variables.product.prodname_dotcom %}'s mascot.
   ```
1. Dos líneas debajo de este párrafo, inserta una tabla copiando y pegando el marcado siguiente.
   
   ```Markdown{:copy}
   | Rank | THING-TO-RANK |
   |-----:|---------------|
   |     1|               |
   |     2|               |
   |     3|               |
   ```
1. En la columna de la derecha, reemplaza `THING-TO-RANK` por "Lenguajes", "Aficiones" o cualquier otra cosa, y rellena la columna con tu lista de cosas.
1. Para comprobar que la tabla se ha representado correctamente, haz clic en la pestaña **Vista previa**.

Para obtener más información, consulta "[Organización de la información con tablas](/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables)".

### Ejemplo

```Markdown
## About me

Hi, I'm Mona. You might recognize me as {% data variables.product.prodname_dotcom %}'s mascot.

| Rank | Languages |
|-----:|-----------|
|     1| Javascript|
|     2| Python    |
|     3| SQL       |
```

### Cómo se ve

![Captura de pantalla de la pestaña Vista previa, en la que se muestra un encabezado "Acerca de mí" y una tabla representada con una lista de lenguajes](/assets/images/help/profile/markdown-table-example.png)

## Incorporación de una sección contraída

Para mantener ordenado el contenido, puedes usar la etiqueta `<details>` a fin de crear una sección contraída expandible. 

1. A fin de crear una sección contraída para la tabla que has creado, encapsula la tabla en etiquetas `<details>`, como en el ejemplo siguiente.
   
   ```HTML{:copy}
   <details>
   <summary>My top THINGS-TO-RANK</summary>

   YOUR TABLE

   </details>
   ```
1. Entre las etiquetas `<summary>`, reemplaza `THINGS-TO-RANK` por lo que hayas clasificado en la tabla.
1. Opcionalmente, para que la sección se muestre como abierta de manera predeterminada, agrega el atributo `open` a la etiqueta `<details>`.

   ```HTML
   <details open>
   ```
1. Para comprobar que la sección contraída se ha representado correctamente, haz clic en la pestaña **Vista previa**.

### Ejemplo

```HTML
<details>
<summary>My top languages</summary>

| Rank | Languages |
|-----:|-----------|
|     1| Javascript|
|     2| Python    |
|     3| SQL       |
  
</details>
```

### Cómo se ve

![Captura de pantalla de la pestaña Vista previa, con una sección contraída denominada "Mis lenguajes favoritos" marcada por una flecha desplegable](/assets/images/help/profile/collapsed-section-example.png)

## Incorporación de una cita

Markdown tiene muchas otras opciones para aplicar formato al contenido. Aquí, agregarás una regla horizontal para dividir la página y un blockquote para aplicar formato a tu cita favorita.

1. En la parte inferior del archivo, dos líneas debajo de la etiqueta `</details>`, agrega una regla horizontal escribiendo tres o más guiones.

   ```Markdown
   ---
   ```
1. Debajo de la línea `---`, agrega una cita escribiendo marcado como el siguiente.
   
   ```Markdown
   > QUOTE
   ```

   Reemplaza `QUOTE` por la cita que prefiera. Como alternativa, copia la cita de nuestro ejemplo siguiente.
1. Para comprobar que todo se ha representado correctamente, haz clic en la pestaña **Vista previa**.

### Ejemplo

```Markdown
---
> If we pull together and commit ourselves, then we can push through anything.

— Mona the Octocat
```

### Cómo se ve

![Captura de pantalla de la pestaña Vista previa, con una cita con sangría debajo de una línea horizontal gruesa](/assets/images/help/profile/markdown-quote-example.png)

## Incorporación de un comentario

Puedes usar la sintaxis de comentario HTML para agregar un comentario que se ocultará en la salida. Aquí, agregarás un comentario para recordarte que tienes que actualizar tu {% ifversion ghae %}gist{% else %}archivo LÉAME{% endif %} más adelante.

1. Dos líneas debajo del encabezado `## About me`, inserta un comentario mediante el marcado siguiente.

   <pre>
   &lt;!-- COMMENT --&gt;
   </pre>
   
   Reemplaza `COMMENT` por un elemento de "tareas pendientes" que te recuerde hacer algo más adelante (por ejemplo, agregar más elementos a la tabla).
1. Para comprobar que el comentario está oculto en la salida, haz clic en la pestaña **Vista previa**.

### Ejemplo

<pre>
## About me

&lt;!-- TO DO: add more details about me later --&gt;
</pre>

## Guardar el trabajo

Cuando hayas acabado con los cambios, guarda tu{% ifversion ghae %}gist. 

- Para mantener el gist oculto de los motores de búsqueda, pero visible para cualquier persona con la que compartas la dirección URL, haz clic en **Crear gist secreto**. 
- Si aceptas que el gist sea visible para cualquier usuario en {% data variables.location.product_location %}, haz clic en **Crear gist interno**.

{% else %}archivo LÉAME de perfil haciendo clic en **Confirmar cambios**. 

Confirmar directamente en la rama `main` hará que los cambios sean visibles para cualquier visitante de tu perfil. Si quieres guardar el trabajo, pero no estás a punto para que sea visible en el perfil, puedes seleccionar **Crear una nueva rama para esta confirmación e iniciar una solicitud de incorporación de cambios**.

![Captura de pantalla de la sección "Confirmar cambios"](/assets/images/help/profile/readme-commit-changes.png)

{% endif %}

## Pasos siguientes

- Continúa para obtener información sobre las características de formato avanzadas. Por ejemplo, consulta {% ifversion fpt or ghec %}"[Creación de diagramas](/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)" y {% endif %}"[Creación y resaltado de bloques de código](/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks)".
- Usa tus nuevas aptitudes a medida que te comuniques en GitHub, en problemas, solicitudes de incorporación de cambios y discusiones. Para obtener más información, consulta "[Comunicación en {% data variables.product.prodname_dotcom %}](/get-started/quickstart/communicating-on-github)".
