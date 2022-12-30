---
title: Crear el primer repositorio mediante GitHub Desktop
shortTitle: Creating your first repository
intro: 'Puedes utilizar {% data variables.product.prodname_desktop %} para crear y administrar un repositorio de Git sin utilizar la línea de comandos.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop
  - /desktop/installing-and-configuring-github-desktop/creating-your-first-repository-using-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: bdfaa5770faef23d8176b24753e23d6a3d5159a1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117329'
---
## Introducción
{% data variables.product.prodname_desktop %} se extiende y simplifica tu flujo de trabajo {% data variables.product.prodname_dotcom_the_website %}, usando una interfaz visual en lugar de comandos de texto en la línea de comandos. Al final de esta guía, habrás utilizado {% data variables.product.prodname_desktop %} para crear un repositorio, hacer cambios en éste y publicarlos en {% data variables.product.product_name %}.

Después de instalar {% data variables.product.prodname_desktop %} y de iniciar sesión en {% data variables.product.prodname_dotcom %} o en {% data variables.product.prodname_enterprise %}, deberás crear y clonar un repositorio de tutorial. El tutorial te presentará lo básico de trabajar con Git y con {% data variables.product.prodname_dotcom %}, incluyendo el instalar un editor de texto, crear una rama, hacer una confirmación, cargarla a {% data variables.product.prodname_dotcom_the_website %} y abrir una solicitud de extracción. El tutorial está disponible si aún no tienes ningún repositorio en {% data variables.product.prodname_desktop %}.

Te recomendamos completar el tutorial, pero si quieres explorar {% data variables.product.prodname_desktop %} creando un nuevo repositorio, esta guía te describirá cómo utilizar {% data variables.product.prodname_desktop %} para trabajar en un repositorio de Git.

## Parte 1: Instalar {% data variables.product.prodname_desktop %} y autenticar tu cuenta
Puedes instalar {% data variables.product.prodname_desktop %} en cualquier sistema operativo compatible. Después de instalar la app, necesitarás iniciar sesión y autenticarte en tu cuenta de {% data variables.product.prodname_dotcom %} o de {% data variables.product.prodname_enterprise %} antes de que puedas crear y clonar un repositorio de tutorial.

Para más información sobre la instalación y la autenticación, vea "[Configuración de {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-up-github-desktop)".

## Parte 2: Crear un repositorio nuevo
Si no tiene repositorios asociados con {% data variables.product.prodname_desktop %}, verá una vista "Comencemos", donde puede elegir crear y clonar un repositorio de tutoriales, clonar un repositorio existente desde Internet, crear un repositorio, o bien agregar un repositorio existente desde el disco duro.
  ![La pantalla "Comencemos"](/assets/images/help/desktop/lets-get-started.png)

### Crear y clonar un repositorio de tutorial
Te recomendamos que tu primer poyecto sea crear y clonar un repositorio de tutorial para practicar cómo utilizar {% data variables.product.prodname_desktop %}.

1. Haga clic en **Crear un repositorio de tutoriales y clonarlo**.
  ![Botón Crear un repositorio de tutoriales y clonarlo](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. Sigue las instrucciones en el tutorial para instalar un editor de texto, crear una rama, editar un archivo, hacer una confirmación, publicar en {% data variables.product.prodname_dotcom %} y abrir una solicitud de extracción.

### Crear un repositorio nuevo
Si no quieres crear y clonar un repositorio de tutorial, puedes crear un repositorio nuevo.

1. Haga clic en **Crear un repositorio en el disco duro...** . ![Creación de un repositorio](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. Llena los campos y selecciona tus opciones preferidas.
  ![Opciones de creación de un repositorio](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - "Name" (Nombre) define el nombre de tu repositorio a nivel local y en {% data variables.product.product_name %}.
   - "Description" (Descripción) es un campo opcional que puedes usar para brindar más información sobre el objetivo de tu repositorio.
   - "Local path" (Ruta local) establece la ubicación de tu repositorio en tu computadora. De manera predeterminada, {% data variables.product.prodname_desktop %} crea una carpeta _GitHub_ dentro de la carpeta _Documentos_ para almacenar los repositorios, pero puede elegir cualquier ubicación en el equipo. Tu nuevo repositorio será una carpeta dentro de la ubicación elegida. Por ejemplo, si asigna el nombre `Tutorial` al repositorio, se crea una carpeta denominada _Tutorial_ dentro de la carpeta seleccionada para la ruta de acceso local. {% data variables.product.prodname_desktop %} recuerda tu ubicación elegida la próxima vez que crees o clones un repositorio nuevo.
   - **Inicializar este repositorio con un archivo Léame** crea una confirmación inicial con un archivo _README.md_. README ayuda a las personas a comprender el objetivo de tu proyecto, por lo que recomendamos seleccionarlo y completarlo con información útil. Cuando alguien visita tu repositorio en {% data variables.product.product_name %}, el archivo README es lo primero que verán a medida que aprenden sobre tu proyecto. Para más información, vea "[Acerca de los archivos Léame](/articles/about-readmes)".
   - El menú desplegable **Ignorar Git** permite agregar un archivo personalizado para ignorar archivos concretos del repositorio local que no quiera almacenar en el control de versiones. Si hay un lenguaje o marco de trabajo que estarás utilizando, puedes seleccionar una opción de la lista disponible. Si recién estás comenzando, puedes omitir esta selección. Para más información, vea "[Omitir archivos](/github/getting-started-with-github/ignoring-files)".
   - El menú desplegable **Licencia** permite agregar una licencia de código abierto a un archivo _LICENSE_ en el repositorio. No tienes que preocuparte por aprender cómo agregar una licencia inmediatamente. Para más información sobre las licencias de código abierto disponibles y cómo agregarlas al repositorio, vea "[Licencias de un repositorio](/articles/licensing-a-repository)".
3. Haga clic en **Create repository** (Crear repositorio).

## Parte 3: Explorar {% data variables.product.prodname_desktop %}
En el menú del archivo en la parte superior de la pantalla, puedes acceder a la configuración y a las acciones que puedes realizar en {% data variables.product.prodname_desktop %}. La mayoría de las acciones tienen atajos del teclado para ayudarte a trabajar con más eficacia. Para obtener una lista completa de los métodos abreviados de teclado, vea "[Métodos abreviados de teclado](/desktop/getting-started-with-github-desktop/keyboard-shortcuts)".

### La barra de menú de {% data variables.product.prodname_desktop %}
En la parte superior de la app de {% data variables.product.prodname_desktop %}, verás una barra que muestra el estado actual de tu repositorio.
  - En **Repositorio actual** se muestra el nombre del repositorio en el que trabaja. Puede hacer clic en **Repositorio actual** para cambiar a otro repositorio de {% data variables.product.prodname_desktop %}.
  - En **Rama actual** se muestra el nombre de la rama en la que trabaja. Puede hacer clic en **Rama actual** para ver todas las ramas del repositorio, cambiar a otra rama o crear una. Una vez que haya creado solicitudes de incorporación de cambios en el repositorio, también puede verlas si hace **Rama actual**.
  - **Publicar repositorio** aparece porque todavía no ha publicado el repositorio en {% data variables.product.product_name %}, lo que hará más tarde en el paso siguiente. Esta sección de la barra cambiará con base en el estado de tu repositorio y rama actuales. Varias acciones dependientes del contexto estarán disponibles, las cuales te permitirán intercambiar datos entre tus repositorios locales y remotos.

  ![Explorar el escritorio de GitHub](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

### Cambios e Historial
En la barra lateral de la izquierda, encontrará las vistas **Cambios** e **Historial**.
  ![Las pestañas Cambios e Historial](/assets/images/help/desktop/changes-and-history.png)

  - En la vista **Cambios** se muestran los cambios que ha realizado en los archivos de la rama actual, pero que todavía no ha confirmado en el repositorio local. En la parte inferior, hay un cuadro con los cuadros de texto "Resumen" y "Descripción", y un botón **Confirmar en RAMA**. Aquí es donde confirmarás los campos nuevos. El botón **Confirmar en RAMA** es dinámico y mostrará la rama en la que se van a confirmar los cambios.
  ![Área de confirmación](/assets/images/help/desktop/getting-started-guide/commit-area.png)

  - En la vista **Historial** se muestran las confirmaciones anteriores en la rama actual del repositorio. Deberías ver una "Initial commit" (Confirmación inicial) que fue creada por {% data variables.product.prodname_desktop %} cuando creaste tu repositorio. A la derecha de la confirmación, en función de las opciones que haya seleccionado al crear el repositorio, puede ver archivos _.gitattributes_, _.gitignore_, _LICENSE_ o _README_. Puedes hacer clic en cada archivo para ver una diferencia para ese archivo, que son los cambios realizados en el archivo en esa confirmación. La diferencia solo muestra las partes del archivo que han cambiado, no slo los contenidos completos del archivo.
  ![Vista Historial](/assets/images/help/desktop/getting-started-guide/history-view.png)

## Parte 4: Publicar tu repositorio en {% data variables.product.product_name %}
Cuando creas un repositorio nuevo, éste solo existirá en tu computadora y serás el único que pueda acceder a él. Puedes publicar tu repositorio en {% data variables.product.product_name %} para mantenerlo sincronizado a través de varias computadoras y permitir que otras personas accedan a él. Para publicar tu repositorio, sube tus cambios locales a {% data variables.product.product_name %}.

1. Haga clic en **Publicar repositorio** en la barra de menús.
    ![Publicar repositorio](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
    - {% data variables.product.prodname_desktop %} llenará los campos de "Nombre" y "Descripción" automáticamente con la información que ingresaste cuando creaste el repositorio.
    - **Mantener este código privado** le permite controlar quién puede ver el proyecto. Si no seleccionas esta opción, otros usuarios en {% data variables.product.product_name %} podrán ver tu código. Si seleccionas esta opción, tu código no estará disponible al público en general.
    - El menú desplegable **Organización**, si se muestra, permite publicar el repositorio en una organización concreta de {% data variables.product.product_name %} a la que pertenezca.

    ![Publicar pasos del repositorio](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
  2. Haga clic en el botón **Publicar repositorio**.
  3. Puedes acceder al repositorio en {% data variables.product.prodname_dotcom_the_website %} desde el interior de {% data variables.product.prodname_desktop %}. En el menú Archivo, haga clic en **Repositorio** y después en **Ver en GitHub**. Esto te llevará directamente hasta el repositorio en tu navegador predeterminado.

## Parte 5: Hacer, confirmar y subir cambios
Ahora que creaste y publicaste tu repositorio, estás listo para hacer cambios en tu proyecto y comenzar a crear tu primera confirmación para este repositorio.

1. Para iniciar el editor externo desde {% data variables.product.prodname_desktop %}, haga clic en **Repositorio** y después en **Abrir en <em>EDITOR</em>** . Para más información, vea "[Configuración de un editor predeterminado](/desktop/getting-started-with-github-desktop/configuring-a-default-editor)".
  ![Abrir en editor](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. Realice algunos cambios en el archivo _README.md_ que ha creado antes. Puedes agregar información que describa tu proyecto, como por ejemplo, que es lo que hace y por qué es útil. Cuando estés satisfecho con los cambios, guárdalos en tu editor de texto.
3. En {% data variables.product.prodname_desktop %}, vaya a la vista **Cambios**. En la lista de archivos, debería ver el archivo _README.md_. La marca de verificación a la izquierda del archivo _README.md_ indica que los cambios que ha realizado en el archivo formarán parte de la confirmación que realice. En el futuro, es posible que realices cambios a múltiples archivos pero solo quieras confirmar los cambios que realizaste en alguno de los archivos. Si das clic en la marca de verificación contigua a un archivo, este archivo no se incluirá en la confirmación.
  ![Visualización de los cambios](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. En la parte inferior de la lista **Cambios**, escriba un mensaje de confirmación. A la derecha de tu imagen de perfil, escribe una descripción breve de la confirmación. Como se va a cambiar el archivo _README.md_, "Agregar información sobre el objetivo del proyecto" sería un buen resumen de la confirmación. Debajo del resumen, verás un campo de texto de "Descripción" en donde podrás teclear una descripción más amplia de los cambios en la confirmación, lo cual es de gran ayuda cuando regresas a ver el historial de un proyecto y entiendes por qué se realizaron los cambios. Como va a realizar una actualización básica de un archivo _README.md_, puede omitir la descripción.
  ![Mensaje de confirmación](/assets/images/help/desktop/getting-started-guide/commit-message.png)
5. Haga clic en **Confirmar en NOMBRE DE RAMA**. El botón de confirmación muestra tu rama actual, así que puedes estar seguro de confirmar a la rama que quieras.
  ![Confirmación en una rama](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
6. Para insertar los cambios en el repositorio remoto en {% data variables.product.product_name %}, haga clic en **Insertar origen**.
  ![Insertar origen](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
  - El botón **Insertar origen** es el mismo en el que ha hecho clic para publicar el repositorio en {% data variables.product.product_name %}. Este botón cambia contextualmente con base en el punto en el que estés en el flujo de trabajo de Git. Ahora debería mostrar `Push origin` con un `1` junto a él, lo que indica que hay una confirmación que no se ha insertado en {% data variables.product.product_name %}.
  - El "origen" de **Insertar origen** significa que va a insertar cambios en el repositorio remoto `origin` que, en este caso, es el repositorio del proyecto en {% data variables.product.prodname_dotcom_the_website %}. Hasta que hayas subido alguna de las nuevas confirmaciones {% data variables.product.product_name %}, habrá diferencias entre el repositorio de tu proyecto en tu computadora y el repositorio del proyecto en {% data variables.product.prodname_dotcom_the_website %}. Esto te permite trabajar localmente y solo subir tus cambios a {% data variables.product.prodname_dotcom_the_website %} cuando estés listo.
7. En la ventana situada a la derecha de la vista **Cambios**, verá sugerencias para las acciones que puede realizar a continuación. Para abrir el repositorio en {% data variables.product.product_name %} en el explorador, haga clic en **Ver en {% data variables.product.product_name %}** .
  ![Acciones disponibles](/assets/images/help/desktop/available-actions.png)
8. En el explorador, haga clic en **2 confirmaciones**. Verás una lista de las confirmaciones en este repositorio en {% data variables.product.product_name %}. La primera confirmación deberá ser aquella que acabas de realizar en {% data variables.product.prodname_desktop %}.
  ![Clic en dos confirmaciones](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

## Conclusión
Ya creaste un repositorio, lo publicaste en {% data variables.product.product_name %}, hiciste una confirmación y subiste tus cambios a {% data variables.product.product_name %}. Puedes seguir este flujo de trabajo cuando colabores con otros proyectos que crees o en los cuales colabores.

## Información adicional
- "[Introducción a GitHub](/github/getting-started-with-github/getting-started-with-git)"
- "[Información sobre {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github)"
- "[Introducción a {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)"
