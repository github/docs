---
title: Hola Mundo
intro: 'Sigue este ejercicio de "Hello World" para iniciar con {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pull requests
  - Fundamentals
miniTocMaxHeadingLevel: 3
---

## Introducción

{% data variables.product.product_name %} es una plataforma de hospedaje de código para el control de versiones y la colaboración. Este permite que tú y otras personas trabajen juntos en proyectos desde donde sea.

Este tutorial te enseña lo esencial de {% data variables.product.product_name %}, como los repositorios, ramas, confirmaciones y solicitudes de cambio. Crearás tu propio repositorio de "Hello World" y aprenderás el flujo de trabajo de las solicitudes de cambio de {% data variables.product.product_name %}, una forma popular de crear y revisar código.

En esta guía de inicio rápido:

* Crearás y utilizarás un repositorio
* Iniciarás y administrarás una rama nueva
* Harás cambios a un archivo y los subirás a {% data variables.product.product_name %} como confirmaciones
* Abrirás y fusionarás una solicitud de cambios

Para completar este tutorial, necesitarás una [cuenta de {% data variables.product.product_name %}](http://github.com) y acceso a internet. No necesitas saber cómo codificar, utilizar la línea de comandos o instalar Git (el software de control de versiones en el que está compilado {% data variables.product.product_name %}).

## Crear un repositorio

Un repositorio se utiliza a menudo para organizar un solo proyecto. Los repositorios pueden contener carpetas y archivos, imágenes, videos, hojas de cálculo y conjuntos de datos; todo lo que necesita tu proyecto. A menudo, los repositorios incluyen un archivo de `README`, que es un archivo con información sobre tu proyecto. {% data variables.product.product_name %} facilita agregar uno de ellos al mismo tiempo que creas tu repositorio nuevo. También ofrece otras opciones comunes, tales como un archivo de licencia.

Tu repositorio de `hello-world` puede ser un lugar donde almacenes ideas, recursos o incluso compartas y debatas cosas con los demás.

{% data reusables.repositories.create_new %}
1. En la caja de **Nombre de repositorio**, ingresa `hello-world`.
2. En la caja de **Descripción**, escribe una descripción corta.
3. Selecciona **Agregar un archivo README**.
4. Haz clic en **Crear repositorio**.

   ![Crear un repositorio de hello world](/assets/images/help/repository/hello-world-repo.png)

## Cómo crear una rama

La ramificación te permite tener versiones diferentes de un repositorio en una ocasión.

Predeterminadamente, tu repositorio tiene una rama llamada `main`, la cual se considera como la rama definitiva. Puedes utilizar ramas para experimentar y hacer ediciones antes de confirmarlas a `main`.

Cuando creas una rama fuera de la de `main`, estás haciendo una copia o captura de pantalla de `main` como lo fue en ese momento. Si alguien más hizo cambios en la rama `main` mientras estuviste trabajando en tu rama, podrías extraer esas actualizaciones.

Este diagrama muestra:

* La rama `main`
* Una rama nueva llamada `feature`
* El viaje que hace `feature` antes de fusionarse en `main`

![diagrama de ramificado](/assets/images/help/repository/branching.png)

¿Alguna vez has guardado versiones distintas de un archivo? Algo como:

* `story.txt`
* `story-joe-edit.txt`
* `story-joe-edit-reviewed.txt`

Las ramas logran metas similares en los repositorios de {% data variables.product.product_name %}.

En {% data variables.product.product_name %}, nuestros desarrolladores, escritores y diseñadores utilizan ramas para mantener las correcciones de errores y el trabajo de las características separados de nuestra rama `main` (productiva). Cuando un cambio está listo, se fusiona su rama en `main`.

### Crear una rama

1. Haz clic en la pestaña de **Código** de tu repositorio `hello-world`.
2. Haz clic ene l menú desplegable en la parte superior del archivo que dice **main**. ![Menú de la rama](/assets/images/help/branch/branch-selection-dropdown.png)
4. Teclea un nombre de rama, `readme-edits`, en la caja de texto.
5. Haz clic en **Crear rama: readme-dits desde main**.

![Menú de la rama](/assets/images/help/repository/new-branch.png)

Ahora tienes dos ramas, `main` y `readme-edits`. Ahora mismo, se ven idénticas. A continuación, agregarás cambios a la rama nueva.

## Hacer y confirmar cambios

Cuando creaste una rama nueva en el paso anterior, {% data variables.product.product_name %} te llevó a la página de código de tu rama `readme-edits` nueva, la cual es una copia de `main`.

Puedes hacer y guardar cambios a los archivos de tu repositorio. En {% data variables.product.product_name %}, los cambios guardados se llaman confirmaciones. Cada confirmación tiene un mensaje de confirmación asociado, el cual es una descripción que explica por qué se realizó algún cambio en particular. Los mensajes de confirmación capturan la historia de tus cambios para que otros contribuyentes puedan entender lo que hiciste y por qué.

1. Haz clic en el archivo `README.md`.
1. Haz clic en {% octicon "pencil" aria-label="The edit icon" %} para editar el archivo.
3. En el editor, escribe un poco sobre ti mismo.
4. En la caja de **Cambios de confirmación**, escribe un mensaje de confirmación que describa tus cambios.
5. Haz clic en **Commit changes** (Confirmar cambios).

   ![Ejemplo de confirmación](/assets/images/help/repository/first-commit.png)

Estos cambios se harán únicamente al archivo README en tu rama `readme-edits`, así que ahora esta rama tiene contenido que es diferente de la de `main`.

## Abrir una solicitud de extracción

Ahora que tienes cambios en una rama furea de la de `main`, puedes abrir una solicitud de cambios.

Las solicitudes de cambios son el núcleo de la colaboración en {% data variables.product.product_name %}. Cuando abres una solicitud de cambios, estás proponiendo tus cambios y solicitando que alguien revise e integre tu contribución y la fusione en su rama. Las solicitudes de cambio muestran diffs o diferencias del contenido de ambas ramas. Los cambios, adiciones y sustracciones se muestran en varios colores.

Tan pronto hagas una confirmación, puedes abrir una solicitud de cambios y comenzar un debate, incluso antes de que se termine el código.

Si utilizas la característica de `@mention` de {% data variables.product.product_name %} en tu mensaje de solicitud de cambios, puedes pedir retroalimentación de una persona o equipo específico, ya sea que estén al fondo del pasillo o a 10 zonas horarias de distancia.

Incluso puedes abrir solicitudes de cambio en tu propio repositorio y fusionarlas tú mismo. Es una forma genial para aprenderse el flujo de {% data variables.product.product_name %} antes de trabajar en proyectos más grandes.

1. Haz clic en la pestaña de **Solicitudes de cambios** de tu repositorio `hello-world`.
2. Haz clic en **Solicitud de cambios nueva**
3. En la caja de **Comparaciones de ejemplo**, selecciona la rama que hiciste, `readme-edits`, para compararla con `main` (la original).
4. Mira tus cambios en los diffs en la página de Comparar, asegúrate que son lo que quieres enviar.

   ![ejemplo de diff](/assets/images/help/repository/diffs.png)

5. Haz clic en **Create Pull Request** (Crear solicitud de extracción).
6. Dale un título a tu solicitud de cambios y escribe una descripción breve de estos. Puedes incluir emojis y arrastrar y soltar imágenes y gifs.
7. Haz clic en **Create Pull Request** (Crear solicitud de extracción).

Tus colaboradores ahora pueden revisar tus ediciones y hacer sugerencias.

## Fusionar tu solicitud de cambios

En este paso final, fusionarás tu rama de `readme-edits` en la rama `main`.

1. Haz clic en **Fusionar solicitud de cambios** para fusionar los cambios en `main`.
2. Haz clic en **Confirmar fusión**.
3. Ve y borra la rama, ya que estos cambios se incorporaron, haciendo clic en **Borrar rama**.

## Pasos siguientes

Al haber completado este tutorial, aprendiste a crear un proyecto y hacer una solicitud de cambios en {% data variables.product.product_name %}.

Esto es lo que lograste en este tutorial:

* Creaste y abriste un repositorio de código fuente
* Iniciaste y administraste una rama nueva
* Cambiaste un archivo y confirmaste esos cambios en {% data variables.product.product_name %}
* Abriste y fusionaste una solicitud de cambios

Echa un vistazo a tu perfil de {% data variables.product.product_name %} y verás tu trabajo reflejado en tu gráfica de contribuciones.

Para obtener más información sobre el poder de las ramas y las solicitudes de cambios, consulta la sección "[Flujo de GitHub](/get-started/quickstart/github-flow)". Para obtener más información sobre cómo iniciar con {% data variables.product.product_name %}, consulta el resto de las guías en la [guía rápida de inicio](/get-started/quickstart).
