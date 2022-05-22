---
title: Crear el primer repositorio mediante GitHub Desktop
shortTitle: Crear tu primer repositorio
intro: 'Puedes utilizar {% data variables.product.prodname_desktop %} para crear y administrar un repositorio de Git sin utilizar la línea de comandos.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop
versions:
  free-pro-team: '*'
---

### Introducción
{% data variables.product.prodname_desktop %} se extiende y simplifica tu flujo de trabajo {% data variables.product.prodname_dotcom_the_website %}, usando una interfaz visual en lugar de comandos de texto en la línea de comandos. Al final de esta guía, habrás utilizado {% data variables.product.prodname_desktop %} para crear un repositorio, hacer cambios en éste y publicarlos en {% data variables.product.product_name %}.

Después de instalar {% data variables.product.prodname_desktop %} y de iniciar sesión en {% data variables.product.prodname_dotcom %} o en {% data variables.product.prodname_enterprise %}, deberás crear y clonar un repositorio de tutorial. El tutorial te presentará lo básico de trabajar con Git y con {% data variables.product.prodname_dotcom %}, incluyendo el instalar un editor de texto, crear una rama, hacer una confirmación, cargarla a {% data variables.product.prodname_dotcom_the_website %} y abrir una solicitud de extracción. El tutorial está disponible si aún no tienes ningún repositorio en {% data variables.product.prodname_desktop %}.

Te recomendamos completar el tutorial, pero si quieres explorar {% data variables.product.prodname_desktop %} creando un nuevo repositorio, esta guía te describirá cómo utilizar {% data variables.product.prodname_desktop %} para trabajar en un repositorio de Git.

### Parte 1: Instalar {% data variables.product.prodname_desktop %} y autenticar tu cuenta
Puedes instalar {% data variables.product.prodname_desktop %} o cualquier sistema operativo compatible. Después de instalar la app, necesitarás iniciar sesión y autenticarte en tu cuenta de {% data variables.product.prodname_dotcom %} o de {% data variables.product.prodname_enterprise %} antes de que puedas crear y clonar un repositorio de tutorial.

Para obtener más información sobre la instalación y autenticación, consulta la sección "[Configurar {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-up-github-desktop)".

### Parte 2: Crear un repositorio nuevo
Si no tienes ningún repositorio asociado con {% data variables.product.prodname_desktop %}, tendrás una vista de "Let's get started!", en donde podrás elegir crear y clonar un repositorio de tutorial, clonar un repositorio existente desde internet, crear un repositorio nuevo, o agregar un repositorio existente desde tu disco duro.  ![¡Comencemos! Pantalla](/assets/images/help/desktop/lets-get-started.png)

#### Crear y clonar un repositorio de tutorial
Te recomendamos que tu primer poyecto sea crear y clonar un repositorio de tutorial para practicar cómo utilizar {% data variables.product.prodname_desktop %}.

1. Haz clic en **Create a tutorial repository and clone it** (Crear un repositorio de tutorial y clonarlo). ![Crear y clonar un botón de repositorio de tutorial](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. Sigue las instrucciones en el tutorial para instalar un editor de texto, crear una rama, editar un archivo, hacer una confirmación, publicar en {% data variables.product.prodname_dotcom %} y abrir una solicitud de extracción.

#### Crear un repositorio nuevo
Si no quieres crear y clonar un repositorio de tutorial, puedes crear un repositorio nuevo.

1. Haz clic en **Crear un nuevo repositorio en tu disco duro...** ![Crear un repositorio nuevo](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. Llena los campos y selecciona tus opciones preferidas. ![Crear un repositorio de opciones](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - "Name" (Nombre) define el nombre de tu repositorio a nivel local y en {% data variables.product.product_name %}.
   - "Description" (Descripción) es un campo opcional que puedes usar para brindar más información sobre el objetivo de tu repositorio.
   - "Local path" (Ruta local) establece la ubicación de tu repositorio en tu computadora. De manera predeterminada, {% data variables.product.prodname_desktop %} crea una carpeta _GitHub_ en tu carpeta _Documents_ (Documentos) para almacenar tus repositorios, pero puedes elegir cualquier ubicación en tu computadora. Tu nuevo repositorio será una carpeta dentro de la ubicación elegida. Por ejemplo, si colocas el nombre `Tutorial` a tu repositorio, se creará la carpeta _Tutorial_ dentro de la carpeta que seleccionaste en tu ruta local. {% data variables.product.prodname_desktop %} recuerda tu ubicación elegida la próxima vez que crees o clones un repositorio nuevo.
   - **Si inicializas este repositorio con un README** (Léeme), se crea una confirmación inicial con un archivo _README.md_. README ayuda a las personas a comprender el objetivo de tu proyecto, por lo que recomendamos seleccionarlo y completarlo con información útil. Cuando alguien visita tu repositorio en {% data variables.product.product_name %}, el archivo README es lo primero que verán a medida que aprenden sobre tu proyecto. Para obtener más información, consulta "[Acerca de los archivos README](/articles/about-readmes/)".
   - El menú desplegable **Git ignore** (Ignorar Git) te permite agregar un archivo personalizado para ignorar los archivos específicos en tu repositorio local que no deseas almacenar en el control de la versión. Si hay un lenguaje o marco de trabajo que estarás utilizando, puedes seleccionar una opción de la lista disponible. Si recién estás comenzando, puedes omitir esta selección. Para obtener más información, consulta "[Ignorar archivos](/github/getting-started-with-github/ignoring-files)".
   - El menú desplegable **License** (Licencia) te permite agregar una licencia de código abierto para un archivo _LICENSE_ (Licencia) en tu repositorio. No tienes que preocuparte por aprender cómo agregar una licencia inmediatamente. Para obtener más información sobre las licencias de código abierto disponibles y cómo agregarlas a tu repositorio, consulta "[Licenciar un repositorio](/articles/licensing-a-repository)".
3. Haz clic en **Crear repositorio**.

### Parte 3: Explorar {% data variables.product.prodname_desktop %}
En el menú del archivo en la parte superior de la pantalla, puedes acceder a la configuración y a las acciones que puedes realizar en {% data variables.product.prodname_desktop %}. La mayoría de las acciones tienen atajos del teclado para ayudarte a trabajar con más eficacia. Para encontrar un listado completo de atajos de teclado, consulta la sección "[Atajos de teclado](/desktop/getting-started-with-github-desktop/keyboard-shortcuts)".

#### La barra de menú de {% data variables.product.prodname_desktop %}
En la parte superior de la app de {% data variables.product.prodname_desktop %}, verás una barra que muestra el estado actual de tu repositorio.
  - **Current repository** (Repositorio actual) muestra el nombre del repositorio en el que estás trabajando. Puedes hacer clic en **Current repository** (Repositorio actual) para alternar a un repositorio diferente en {% data variables.product.prodname_desktop %}.
  - **Current branch** (Rama actual) muestra el nombre de la rama en la que estás trabajando. Puedes hacer clic en **Current branch** (Rama actual) para ver todas las ramas en tu repositorio, alternar a una rama diferente o crear una rama nueva. Una vez que creaste solicitud de extracción en tu repositorio, también puedes verlas haciendo clic en **Current branch** (Rama actual).
  - **Publish repository** (Publicar repositorio) aparece porque todavía no has publicado tu repositorio en {% data variables.product.product_name %}. que harás a continuación en el próximo paso. Esta sección de la barra cambiará con base en el estado de tu repositorio y rama actuales. Varias acciones dependientes del contexto estarán disponibles, las cuales te permitirán intercambiar datos entre tus repositorios locales y remotos.

  ![Explorar el escritorio de GitHub](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

#### Cambios e Historial
En la barra lateral a la izquierda, encontrarás la vista **Changes** (Cambios) y la vista**History** (Historial). ![Las pestañas de cambios y de historial](/assets/images/help/desktop/changes-and-history.png)

  - La vista **Changes** (Cambios) muestra los cambios que realizaste a los archivos en tu rama actual pero aún no confirmaste en tu repositorio local. En la parte inferior, encontrarás un recuadro con cajas de texto para "Resumen" y "Descripción", y un botón de **Confirmar a RAMA**. Aquí es donde confirmarás los campos nuevos. El botón de **Confirmar a RAMA** es dinámico y mostrará a qué rama estás confirmando tus cambios. ![Área de confirmación de cambios](/assets/images/help/desktop/getting-started-guide/commit-area.png)

  - La vista **History** (Historial) muestra las confirmaciones previas en la rama actual de tu repositorio. Deberías ver una "Initial commit" (Confirmación inicial) que fue creada por {% data variables.product.prodname_desktop %} cuando creaste tu repositorio. A la derecha de la confirmación, según las opciones que seleccionaste al crear tu repositorio, es posible que veas los archivos _.gitattributes_, _.gitignore_, _LICENSE_, o _README_. Puedes hacer clic en cada archivo para ver una diferencia para ese archivo, que son los cambios realizados en el archivo en esa confirmación. La diferencia solo muestra las partes del archivo que han cambiado, no slo los contenidos completos del archivo. ![Vista de historial](/assets/images/help/desktop/getting-started-guide/history-view.png)

### Parte 4: Publicar tu repositorio en {% data variables.product.product_name %}
Cuando creas un repositorio nuevo, éste solo existirá en tu computadora y serás el único que pueda acceder a él. Puedes publicar tu repositorio en {% data variables.product.product_name %} para mantenerlo sincronizado a través de varias computadoras y permitir que otras personas accedan a él. Para publicar tu repositorio, sube tus cambios locales a {% data variables.product.product_name %}.

1. Da clic en **Publicar repositorio** en la barra de menú. ![Publicar repositorio](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
    - {% data variables.product.prodname_desktop %} llenará los campos de "Nombre" y "Descripción" automáticamente con la información que ingresaste cuando creaste el repositorio.
    - La opción de **Mantener este código como privado** te permite controlar quién puede ver tu proyecto. Si no seleccionas esta opción, otros usuarios en {% data variables.product.product_name %} podrán ver tu código. Si seleccionas esta opción, tu código no estará disponible al público en general.
    - El menú desplegable de **Organización**, si es que lo hay, te permite publicar tu repositorio en una organización específica en {% data variables.product.product_name %} a la cual pertenezcas.

    ![Publicar pasos del repositorio](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
  2. Haz clic en el botón **Publish Repository** (Publicar repositorio).
  3. Puedes acceder al repositorio en {% data variables.product.prodname_dotcom_the_website %} desde el interior de {% data variables.product.prodname_desktop %}. En el menú del archivo, haz clic en **Repository** (Repositorio), luego haz clic en **View on GitHub** (Ver en GitHub). Esto te llevará directamente hasta el repositorio en tu navegador predeterminado.

### Parte 5: Hacer, confirmar y subir cambios
Ahora que creaste y publicaste tu repositorio, estás listo para hacer cambios en tu proyecto y comenzar a crear tu primera confirmación para este repositorio.

1. Para lanzar tu editor externo desde dentro de {% data variables.product.prodname_desktop %}, da clic en **Repositorio**, luego da clic en **Abrir en <em>EDITOR</em>**. Para obtener más información, consulta la sección "[Configurar un editor predeterminado](/desktop/getting-started-with-github-desktop/configuring-a-default-editor)". ![Abrir en editor](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. Haz algunos cambios al archivo _README.md_ que hayas creado previamente. Puedes agregar información que describa tu proyecto, como por ejemplo, que es lo que hace y por qué es útil. Cuando estés satisfecho con los cambios, guárdalos en tu editor de texto.
3. En {% data variables.product.prodname_desktop %}, navega a la vista de **Cambios**. En la lista de archivos, deberías ver tu _README.md_. La marca de verificación a la izquierda del archivo _README.md_ indica que los cambios que has hecho al archivo serán parte de la confirmación que haces. En el futuro, es posible que realices cambios a múltiples archivos pero solo quieras confirmar los cambios que realizaste en alguno de los archivos. Si das clic en la marca de verificación contigua a un archivo, este archivo no se incluirá en la confirmación. ![Ver cambios](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. En la parte inferior de la lista **Changes** (Cambios), escribe un mensaje de confirmación. A la derecha de tu imagen de perfil, escribe una descripción breve de la confirmación. Dado que estamos cambiando el archivo _README.md_, "Agregar información sobre el objetivo del proyecto" sería un buen resumen de la confirmación. Debajo del resumen, verás un campo de texto de "Descripción" en donde podrás teclear una descripción más amplia de los cambios en la confirmación, lo cual es de gran ayuda cuando regresas a ver el historial de un proyecto y entiendes por qué se realizaron los cambios. Dado que estás realizando una actualización básica de un archivo _README.md_, puedes omitir la descripción. ![Mensaje de confirmación](/assets/images/help/desktop/getting-started-guide/commit-message.png)
5. Da clic en **Confirmar al NOMBRE DE RAMA**. El botón de confirmación muestra tu rama actual, así que puedes estar seguro de confirmar a la rama que quieras. ![Confirmar a una rama](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
6. Para subir los cambios al repositorio remoto en {% data variables.product.product_name %}, haz clic en **Push origin** (Subir origen). ![Subir origen](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
  - El botón de **Subir el origen** es el mismo en el que diste clic para publicar tu repositorio en {% data variables.product.product_name %}. Este botón cambia contextualmente con base en el punto en el que estés en el flujo de trabajo de Git. Ahora debería decir `Subir el origen` con un `1` en un costado, indicando que hay una confirmación que no se ha subido a {% data variables.product.product_name %}.
  - El "origen" en **Subir el origen** significa que estás subiendo los cambios al repositorio remoto llamado `origin`, que en este caso es el repositorio de tu proyecto en {% data variables.product.prodname_dotcom_the_website %}. Hasta que hayas subido alguna de las nuevas confirmaciones {% data variables.product.product_name %}, habrá diferencias entre el repositorio de tu proyecto en tu computadora y el repositorio del proyecto en {% data variables.product.prodname_dotcom_the_website %}. Esto te permite trabajar localmente y solo subir tus cambios a {% data variables.product.prodname_dotcom_the_website %} cuando estés listo.
7. En la ventana, a la derecha de la vista de **Cambios**, verás las sugerencias para las acciones que puedes hacer después. Para abrir el repositorio en {% data variables.product.product_name %} en tu buscador, da clic en **Ver en {% data variables.product.product_name %}**. ![Acciones disponibles](/assets/images/help/desktop/available-actions.png)
8. En tu navegador, haz clic en **2 commits** (2 confirmaciones). Verás una lista de las confirmaciones en este repositorio en {% data variables.product.product_name %}. La primera confirmación deberá ser aquella que acabas de realizar en {% data variables.product.prodname_desktop %}. ![Hacer clic en dos confirmaciones](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

### Conclusión
Ya creaste un repositorio, lo publicaste en {% data variables.product.product_name %}, hiciste una confirmación y subiste tus cambios a {% data variables.product.product_name %}. Puedes seguir este flujo de trabajo cuando colabores con otros proyectos que crees o en los cuales colabores.

### Leer más
- "[Comenzar con Git](/github/getting-started-with-github/getting-started-with-git)"
- "[Aprender más sobre {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github)"
- "[Iniciar con {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)"
