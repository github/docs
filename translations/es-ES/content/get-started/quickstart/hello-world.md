---
title: Hola mundo
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
ms.openlocfilehash: 71278b720bcbfaabc892c396ab7fb558f5309173
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126256'
---
## Introducción

{% data variables.product.product_name %} es una plataforma de hospedaje de código para el control de versiones y la colaboración. Este permite que tú y otras personas trabajen juntos en proyectos desde donde sea.

Este tutorial te enseña lo esencial de {% data variables.product.product_name %}, como los repositorios, ramas, confirmaciones y solicitudes de cambio. Crearás tu propio repositorio de "Hello World" y aprenderás el flujo de trabajo de las solicitudes de cambio de {% data variables.product.product_name %}, una forma popular de crear y revisar código.

En esta guía de inicio rápido:

* Crearás y utilizarás un repositorio
* Iniciarás y administrarás una rama nueva
* Harás cambios a un archivo y los subirás a {% data variables.product.product_name %} como confirmaciones
* Abrirás y fusionarás una solicitud de cambios

Para completar este tutorial, necesita una [cuenta de {% data variables.product.product_name %}](http://github.com) y acceso a Internet. No necesitas saber cómo codificar, utilizar la línea de comandos o instalar Git (el software de control de versiones en el que está compilado {% data variables.product.product_name %}). Si tiene alguna pregunta sobre cualquiera de las expresiones usadas en esta guía, diríjase al [glosario](/get-started/quickstart/github-glossary) para obtener más información sobre nuestra terminología.

## Crear un repositorio

Un repositorio se utiliza a menudo para organizar un solo proyecto. Los repositorios pueden contener carpetas y archivos, imágenes, videos, hojas de cálculo y conjuntos de datos; todo lo que necesita tu proyecto. A menudo, los repositorios incluyen un archivo _LÉAME_ con información sobre el proyecto. Los archivos _LÉAME_ se escriben en el lenguaje Markdown de texto sin formato. Puede usar esta [hoja de referencia rápida](https://www.markdownguide.org/cheat-sheet/) para empezar a trabajar con la sintaxis de Markdown. {% data variables.product.product_name %} permite agregar un archivo _LÉAME_ al mismo tiempo que crea el repositorio. {% data variables.product.product_name %} también ofrece otras opciones comunes, tales como un archivo de licencia, pero no teines que seleccionar ninguna de ellas ahora mismo.

El repositorio `hello-world` puede ser un lugar donde almacene ideas, recursos o incluso comparta y debata cosas con otros usuarios.

{% data reusables.repositories.create_new %}
1. En el cuadro **Nombre del repositorio**, escriba `hello-world`.
2. En el cuadro **Descripción**, escriba una breve descripción.
3. Seleccione **Agregar un archivo LÉAME**.
4. Seleccione si el repositorio será **Público** o **Privado**.
5. Haga clic en **Create repository** (Crear repositorio).

   ![Crear un repositorio de hello world](/assets/images/help/repository/hello-world-repo.png)

## Cómo crear una rama

La ramificación te permite tener versiones diferentes de un repositorio en una ocasión.

De manera predeterminada, el repositorio tiene una rama llamada `main` que se considera la rama definitiva. Puede crear ramas adicionales fuera de `main` en el repositorio. Puedes utilizar ramas para tener versiones diferentes de un proyecto en algún momento específico. Esto es útil cuando quieres agregar características nuevas a un proyecto sin cambiar la fuente de código principal. El trabajo que se hace en las diferentes ramas no se mostrará en la rama principal sino hasta que la fusiones, lo cual veremos más adelante en esta guía. Puede utilizar ramas para experimentar y realizar ediciones antes de confirmarlas en `main`.

Al crear una rama a partir de la rama `main`, se realiza una copia, o instantánea, de `main` como estaba en ese momento en el tiempo. Si alguien más ha realizado cambios en la rama `main` mientras trabajaba en el rama, podría extraer esas actualizaciones.

En este diagrama se muestra:

* La rama `main`
* Una nueva rama denominada `feature`
* El recorrido que realiza `feature` antes de combinarse en `main`

![diagrama de ramificado](/assets/images/help/repository/branching.png)

¿Alguna vez has guardado versiones distintas de un archivo? Algo como:

* `story.txt`
* `story-edit.txt`
* `story-edit-reviewed.txt`

Las ramas logran metas similares en los repositorios de {% data variables.product.product_name %}.

En {% data variables.product.product_name %}, nuestros desarrolladores, escritores y diseñadores utilizan ramas para mantener las correcciones de errores y el trabajo de las características separados de nuestra rama `main` (de producción). Cuando un cambio está listo, combinan su rama en `main`.

### Crear una rama

1. Haga clic en la pestaña **Código** del repositorio `hello-world`.
2. Haga clic en la lista desplegable de la parte superior de la lista de archivos que indica **main**.
   ![Menú de la rama](/assets/images/help/branch/branch-selection-dropdown.png)
4. Escriba un nombre de rama, `readme-edits`, en el cuadro de texto.
5. Haga clic en **Crear rama: readme-edits desde main**.

![Menú de la rama](/assets/images/help/repository/new-branch.png)

Ahora tiene dos ramas, `main` y `readme-edits`. Ahora mismo, se ven idénticas. A continuación, agregarás cambios a la rama nueva.

## Hacer y confirmar cambios

Cuando ha creado una rama en el paso anterior, {% data variables.product.product_name %} le ha llevado a la página de código de la nueva rama `readme-edits`, que es una copia de `main`.

Puedes hacer y guardar cambios a los archivos de tu repositorio. En {% data variables.product.product_name %}, los cambios guardados se llaman confirmaciones. Cada confirmación tiene un mensaje de confirmación asociado, el cual es una descripción que explica por qué se realizó algún cambio en particular. Los mensajes de confirmación capturan la historia de tus cambios para que otros contribuyentes puedan entender lo que hiciste y por qué.

1. En la rama `readme-edits` que ha creado, haga clic en el archivo _README.md_.
2. Haz clic en {% octicon "pencil" aria-label="The edit icon" %} para editar el archivo.
3. En el editor, escribe un poco sobre ti mismo. Intenta utilizar elementos de lenguaje de marcado diferentes.
4. En el cuadro **Confirmar cambios**, escriba un mensaje de confirmación que describa los cambios.
5. Haga clic en **Confirmar cambios**.

   ![Ejemplo de confirmación](/assets/images/help/repository/first-commit.png)

Estos cambios solo se realizarán en el archivo LÉAME de la rama `readme-edits`, por lo que ahora contiene contenido diferente al de `main`.

## Abrir una solicitud de extracción

Ahora que tiene cambios en una rama derivada de `main`, puede abrir una solicitud de incorporación de cambios.

Las solicitudes de cambios son el núcleo de la colaboración en {% data variables.product.product_name %}. Cuando abres una solicitud de cambios, estás proponiendo tus cambios y solicitando que alguien revise e integre tu contribución y la fusione en su rama. Las solicitudes de cambio muestran diffs o diferencias del contenido de ambas ramas. Los cambios, adiciones y sustracciones se muestran en varios colores.

Tan pronto hagas una confirmación, puedes abrir una solicitud de cambios y comenzar un debate, incluso antes de que se termine el código.

Al usar la característica `@mention` de {% data variables.product.product_name %} en el mensaje de solicitud de incorporación de cambios, puede solicitar comentarios de una persona o un equipo específico, con independencia de que esté al final del pasillo o a 10 zonas horarias de distancia.

Incluso puedes abrir solicitudes de cambio en tu propio repositorio y fusionarlas tú mismo. Es una forma genial para aprenderse el flujo de {% data variables.product.product_name %} antes de trabajar en proyectos más grandes.

1. Haga clic en la pestaña **Solicitudes de incorporación de cambios** del repositorio `hello-world`.
2. Haga clic en **Nueva solicitud de incorporación de cambios**.
3. En el cuadro **Comparaciones de ejemplo**, seleccione la rama que ha creado, `readme-edits`, para compararla con `main` (la original).
4. Mira tus cambios en los diffs en la página de Comparar, asegúrate que son lo que quieres enviar.

   ![ejemplo de diff](/assets/images/help/repository/diffs.png)

5. Haga clic en **Create pull request** (Crear solicitud de incorporación de cambios).
6. Dale un título a tu solicitud de cambios y escribe una descripción breve de estos. Puedes incluir emojis y arrastrar y soltar imágenes y gifs.
7. Opcionalmente, a la derecha del título y la descripción, haga clic en {% octicon "gear" aria-label="The Gear icon" %} junto a **Revisores**. **Usuarios asignados**, **Etiquetas**, **Proyectos** o **Hito** para agregar cualquiera de estas opciones a la solicitud de incorporación de cambios. No necesitas agregar ninguna aún, pero estas opciones ofrecen diversas formas de colaborar utilizando solicitudes de cambio. Para más información, vea "[Acerca de las solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".
7. Haga clic en **Create pull request** (Crear solicitud de incorporación de cambios).

Tus colaboradores ahora pueden revisar tus ediciones y hacer sugerencias.

## Fusionar tu solicitud de cambios

En este paso final, combinará la rama `readme-edits` en la rama `main`.  Después de combinar la solicitud de incorporación de cambios, los cambios en la rama `readme-edits` se incorporarán a `main`.

En ocasiones, una solicitud de cambios podría introducir cambios en el código que entren en conflicto con el código existente en `main`. Si existe cualquier conflicto, {% data variables.product.product_name %} te alertará sobre el código que lo ocasiona y no dejará que se fusione sino hasta que esto se resuelva. Puedes hacer una confirmación que resuelva los conflictos o que utilice comentarios en la solicitud de cambios para debatir estos conflictos con tus miembros de equipo.

En este recorrido, no deberías de tener conflictos, así que estás listo para fusionar tu rama en la principal.

1. Haga clic en **Combinar solicitud de incorporación de cambios** para combinar los cambios en `main`.
  ![Captura de pantalla del botón Combinar.](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
2. Haga clic en **Confirmar combinación**. Recibirás un mensaje indicando que la solicitud se fusionó con éxito y luego se cerró.
3. Haga clic en **Eliminar rama**. Ahora que la solicitud de incorporación de cambios se ha combinado y los cambios están en `main`, puede eliminar la rama `readme-edits` de forma segura. Si quieres hacer más cambios a tu proyecto, siempre puedes crear una rama nueva y repetir este proceso.

## Pasos siguientes

Al haber completado este tutorial, aprendiste a crear un proyecto y hacer una solicitud de cambios en {% data variables.product.product_name %}.

Esto es lo que lograste en este tutorial:

* Creaste y abriste un repositorio de código fuente
* Iniciaste y administraste una rama nueva
* Cambiaste un archivo y confirmaste esos cambios en {% data variables.product.product_name %}
* Abriste y fusionaste una solicitud de cambios

Echa un vistazo a tu perfil de {% data variables.product.product_name %} y verás tu trabajo reflejado en tu gráfica de contribuciones.

Para más información sobre la eficacia de las ramas y las solicitudes de incorporación de cambios, vea "[Flujo de GitHub](/get-started/quickstart/github-flow)". Para más información sobre cómo empezar a trabajar con {% data variables.product.product_name %}, vea las otras guías del [inicio rápido de introducción](/get-started/quickstart).
