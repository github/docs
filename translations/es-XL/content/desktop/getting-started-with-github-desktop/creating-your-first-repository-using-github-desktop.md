---
title: Crear el primer repositorio mediante GitHub Desktop
intro: 'Puedes usar {% data variables.product.prodname_desktop %} para comenzar a trabajar rápidamente con un repositorio Git sin necesidad de usar la línea de comando.'
versions:
  free-pro-team: '*'
---

### Introducción

Esta guía te orientará a través del proceso de uso de {% data variables.product.prodname_desktop %} para trabajar en un repositorio Git. {% data variables.product.prodname_desktop %} se extiende y simplifica tu flujo de trabajo {% data variables.product.prodname_dotcom_the_website %}, usando una interfaz visual en lugar de comandos de texto en la línea de comandos. Al final de esta guía, habrás usado {% data variables.product.prodname_desktop %} para crear un repositorio, realizar cambios al repositorio, y publicar los cambios en {% data variables.product.prodname_dotcom_the_website %} o {% data variables.product.prodname_ghe_server %}.

Después de descargar {% data variables.product.prodname_desktop %} e iniciar sesión en {% data variables.product.prodname_dotcom %} o {% data variables.product.prodname_enterprise %} puedes crear y clonar un repositorio de tutorial. El tutorial introducirá los aspectos básicos del trabajo con Git y {% data variables.product.prodname_dotcom %}, que incluye la instalación de un editor, la creación de una rama, la generación de una confirmación, la extracción de {% data variables.product.prodname_dotcom_the_website %}, y la creación de una solicitud de extracción. El tutorial está disponible mientras no tengas ningún repositorio en {% data variables.product.prodname_desktop %}.

### Paso 1. Instalar e iniciar sesión en {% data variables.product.prodname_desktop %}

1. Descarga {% data variables.product.prodname_desktop %} de {% data variables.product.desktop_link %}. {% data variables.product.prodname_desktop %} soporta las versiones recientes de Windows y macOS. Para conocer las instrucciones de instalación específicas para tu sistema operativo, consulta [Instalar {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/installing-github-desktop)."

2. Abre {% data variables.product.prodname_desktop %} y sigue el flujo de bienvenida inicial para iniciar sesión en tu cuenta de {% data variables.product.product_name %}. Verás un paso "Configure Git" (Configurar Git), donde puedes configurar tu nombre y dirección de correo electrónico. Para asegurarte de que tus confirmaciones se atribuyan correctamente a tu cuenta de {% data variables.product.product_name %}, usa la dirección de correo electrónico asociada a tu cuenta de {% data variables.product.product_name %}. Para obtener más información, consulta "[Establecer tu dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)."

### Paso 2. Crear un repositorio nuevo

Verás una vista "Let's get started!" (¡Comencemos"), donde puedes elegir si deseas crear y clonar un repositorio de tutorial, crear un repositorio nuevo o agregar un repositorio existente.

#### Crear y clonar un repositorio de tutorial

1. Haz clic en **Create a tutorial repository and clone it** (Crear un repositorio de tutorial y clonarlo). ![Crear y clonar un botón de repositorio de tutorial](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. Sigue las instrucciones en el tutorial.

#### Crear un repositorio nuevo

1. Haz clic en **Crear un nuevo repositorio en tu disco duro...** ![Crear un repositorio nuevo](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. Para crear un repositorio nuevo, completa los campos: ![Crear un repositorio de opciones](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - "Name" (Nombre) define el nombre de tu repositorio a nivel local y en {% data variables.product.product_name %}.
   - "Description" (Descripción) es un campo opcional que puedes usar para brindar más información sobre el objetivo de tu repositorio.
   - "Local path" (Ruta local) establece la ubicación de tu repositorio en tu computadora. De manera predeterminada, {% data variables.product.prodname_desktop %} crea una carpeta _GitHub_ en tu carpeta _Documents_ (Documentos) para almacenar tus repositorios, pero puedes elegir cualquier ubicación en tu computadora. Tu nuevo repositorio será una carpeta dentro de la ubicación elegida. Por ejemplo, si colocas el nombre `Tutorial` a tu repositorio, se creará la carpeta _Tutorial_ dentro de la carpeta que seleccionaste en tu ruta local. {% data variables.product.prodname_desktop %} recuerda tu ubicación elegida la próxima vez que crees o clones un repositorio nuevo.
   - **Si inicializas este repositorio con un README** (Léeme), se crea una confirmación inicial con un archivo _README.md_. README ayuda a las personas a comprender el objetivo de tu proyecto, por lo que recomendamos seleccionarlo y completarlo con información útil. Cuando alguien visita tu repositorio en {% data variables.product.product_name %}, el archivo README es lo primero que verán a medida que aprenden sobre tu proyecto. Para obtener más información, consulta "[Acerca de los archivos README](/articles/about-readmes/)".
   - El menú desplegable **Git ignore** (Ignorar Git) te permite agregar un archivo personalizado para ignorar los archivos específicos en tu repositorio local que no deseas almacenar en el control de la versión. Si existe un idioma o encuadre específico que estarás usando, puedes seleccionar una opción desde la lista disponible. Si recién estás comenzando, puedes omitir esta selección. Para obtener más información, consulta "[Ignorar archivos](/articles/ignoring-files)".
   - El menú desplegable **License** (Licencia) te permite agregar una licencia de código abierto para un archivo _LICENSE_ (Licencia) en tu repositorio. No tienes que preocuparte por aprender cómo agregar una licencia inmediatamente. Para obtener más información sobre las licencias de código abierto disponibles y cómo agregarlas a tu repositorio, consulta "[Licenciar un repositorio](/articles/licensing-a-repository)".
3. Haz clic en **Crear repositorio**.

### Paso 3. Explorar {% data variables.product.prodname_desktop %}

Ahora que has creado un repositorio, verás un menú de archivo en la parte superior de la pantalla. Allí es donde puedes acceder a la configuración y las acciones que puedes realizar en {% data variables.product.prodname_desktop %}. La mayoría de las acciones tienen atajos del teclado para ayudarte a trabajar con más eficacia. Para encontrar un listado completo de atajos de teclado, consulta la sección "[Atajos de teclado](/desktop/getting-started-with-github-desktop/keyboard-shortcuts)".

1. Debajo del menú se encuentra una barra que muestra el estado actual del repositorio en {% data variables.product.prodname_desktop %}:
    - **Current repository** (Repositorio actual) muestra el nombre del repositorio en el que estás trabajando. Puedes hacer clic en **Current repository** (Repositorio actual) para alternar a un repositorio diferente en {% data variables.product.prodname_desktop %}.
    - **Current branch** (Rama actual) muestra el nombre de la rama en la que estás trabajando. Puedes hacer clic en **Current branch** (Rama actual) para ver todas las ramas en tu repositorio, alternar a una rama diferente o crear una rama nueva. Una vez que creaste solicitud de extracción en tu repositorio, también puedes verlas haciendo clic en **Current branch** (Rama actual).
    - **Publish repository** (Publicar repositorio) aparece porque todavía no has publicado tu repositorio en {% data variables.product.product_name %}. que harás a continuación en el próximo paso.

  ![Explorar el escritorio de GitHub](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

2. En la barra lateral a la izquierda, encontrarás la vista **Changes** (Cambios) y la vista**History** (Historial).

    - La vista **Changes** (Cambios) muestra los cambios que realizaste a los archivos en tu rama actual pero aún no confirmaste en tu repositorio local. En la parte inferior, advertirás un cuadro con los cuadros de texto "Summary" (Resumen) y "Description" (Descripción) y un botón **Commit to master** (Confirmar en principal). Aquí es donde confirmarás los campos nuevos. El botón **Commit** (Confirmar) te permite saber en qué rama estás confirmando los cambios. ![Área de confirmación de cambios](/assets/images/help/desktop/getting-started-guide/commit-area.png)

    - La vista **History** (Historial) muestra las confirmaciones previas en la rama actual de tu repositorio. Deberías ver una "Initial commit" (Confirmación inicial) que fue creada por {% data variables.product.prodname_desktop %} cuando creaste tu repositorio. A la derecha de la confirmación, según las opciones que seleccionaste al crear tu repositorio, es posible que veas los archivos _.gitattributes_, _.gitignore_, _LICENSE_, o _README_. Puedes hacer clic en cada archivo para ver una diferencia para ese archivo, que son los cambios realizados en el archivo en esa confirmación. La diferencia solo muestra las partes del archivo que han cambiado, no slo los contenidos completos del archivo. ![Vista de historial](/assets/images/help/desktop/getting-started-guide/history-view.png)

### Paso 4. Subir tu repositorio a {% data variables.product.product_name %}

Actualmente, tu repositorio solo existe en tu computadora, y eres el único que puede acceder al repositorio. Al publicar tu repositorio en {% data variables.product.product_name %} se mantiene actualizado con múltiples computadoras y miembros del equipo en el mismo proyecto. Para publicar el repositorio, lo "subirás" a {% data variables.product.product_name %}, lo que permite que también esté disponible en {% data variables.product.prodname_dotcom_the_website %}.

1. Haz clic en **Publish repository** (Publicar repositorio). ![Publicar repositorio](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
   - Verás algunos campos familiares. "Name" (Nombre) y "Description" (Descripción) coinciden con los campos completados cuando creaste el repositorio.
   - Verás la opción **Keep this code private** (Mantener la privacidad de este código). Selecciona esta opción si no deseas compartir tu código públicamente con otros usuarios en {% data variables.product.product_name %}.
   - El desplegable **Organization** (Organización), si está presente, te permite publicar tu repositorio a una organización específica a la que perteneces en {% data variables.product.product_name %}. No hay problemas si todavía no eres miembro de una organización. ![Publicar pasos del repositorio](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
2. Haz clic en **Publish repository** (Publicar repositorio).
3. Puedes acceder al repositorio en {% data variables.product.prodname_dotcom_the_website %} desde el interior de {% data variables.product.prodname_desktop %}. En el menú del archivo, haz clic en **Repository** (Repositorio), luego haz clic en **View on GitHub** (Ver en GitHub). Esto te llevará directamente hasta el repositorio en tu navegador predeterminado.

Ahora que el repositorio está publicado, volvamos a {% data variables.product.prodname_desktop %} y realicemos más cambios a tu repositorio local. En primer lugar, repasaremos la configuración de un editor de texto predeterminado.

### Paso 5. Configurar un editor de texto

Para reducir la cantidad de tiempo dedicada a la configuración de tu entorno de desarrollo, lanzaremos un número de editores de texto y entornos de desarrollo integrados (IDE, por sus siglas en inglés) directamente desde {% data variables.product.prodname_desktop %}. Desde un repositorio en {% data variables.product.prodname_desktop %}, puedes abrir perfectamente la carpeta del proyecto en tu editor de texto favorito.

1. Haz clic en **File** (Archivo), luego haz clic en **Options** (Opciones) y luego haz clic en **Advanced** (Avanzado).
2. Usa el menú desplegable **External editor** (Editor externo) y selecciona un editor de la lista. Deberías ver los editores que has instalado en la lista. Si no ves ningún editor, instala un editor compatible como [Atom](https://atom.io). Para ver la lista de editores compatibles, consulta [ la integración "Open External Editor" ](https://github.com/desktop/desktop/blob/development/docs/technical/editor-integration.md#windows) (Abrir editor externo) en el repositorio {% data variables.product.prodname_desktop %}</a>. ![Editor externo](/assets/images/help/desktop/mac-editor-menu.png)
3. Si instalaste un editor nuevo, reinicia {% data variables.product.prodname_desktop %} para que el editor esté disponible en el menú desplegable **External editor** (Editor externo).

### Paso 6. Realizar, confirmar y subir cambios

Ahora que has configurado un editor predeterminado, estás listo para hacer cambios en tu proyecto y para comenzar a crear tu primera confirmación en tu repositorio.

1. Para iniciar tu editor externo desde el interior {% data variables.product.prodname_desktop %}, haz clic en **Repository** (Repositorio) y luego haz clic en **Open in <em>EDITOR</em>** (Abrir en EDITOR). ![Abrir en editor](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. Comienza por realizar algunos cambios en el archivo _README.md_ que creaste previamente. Agrega la información que describe el proyecto, como qué hace y por qué resulta útil. Recuerda que esta es la primera interacción que tendrán las personas con tu proyecto. Ahora estás listo para hacer tu primera confirmación.
3. Cambia desde el editor de texto hasta {% data variables.product.prodname_desktop %} y desplázate hasta la pestaña **Changes** (Cambios). En la lista de archivos, deberías ver tu _README.md_. La marca de verificación junto al archivo _README.md_ indica que los cambios que realizaste en el archivo formarán parte de la confirmación que realizaste. En el futuro, es posible que realices cambios a múltiples archivos pero solo quieras confirmar los cambios que realizaste en alguno de los archivos. {% data variables.product.prodname_desktop %} te permite seleccionar los cambios específicos que deseas confirmar. ![Ver cambios](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. En la parte inferior de la lista **Changes** (Cambios), escribe un mensaje de confirmación. A la derecha de tu imagen de perfil, escribe una descripción breve de la confirmación. Dado que estamos cambiando el archivo _README.md_, "Agregar información sobre el objetivo del proyecto" sería un buen resumen de la confirmación. Debajo del resumen, verás un campo de texto "Description" (Descripción), donde puedes escribir una descripción más extensa de los cambios en la confirmación, que resulta útil al volver a mirar el historial de un proyecto y comprender por qué se hicieron los cambios. Dado que estás realizando una actualización básica de un archivo _README.md_, puedes omitir la descripción. ![Mensaje de confirmación](/assets/images/help/desktop/getting-started-guide/commit-message.png)
5. Haz clic en **Committ to master** (Confirmar en principal). El botón de confirmación muestra tu rama actual, que en este caso es `master` (principal), por lo que debes asegurarte de confirmar la rama que deseas. ![Confirmar al principal](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
6. Para subir los cambios al repositorio remoto en {% data variables.product.product_name %}, haz clic en **Push origin** (Subir origen). ![Subir origen](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
   - ¿Recuerdas el botón **Publish** (Publicar) que usaste para publicar tu repositorio en {% data variables.product.product_name %}? Ahora debería decir `Push origin` (Subir origen), con un código `1`, junto al nombre, indicando que existe una confirmación que no ha sido subida a {% data variables.product.product_name %}.
   - El "origen" en **Push origin** (Subir origen) significa que estamos subiendo los cambios al remoto llamado `origin` (origen), que en este caso es tu repositorio del proyecto en {% data variables.product.prodname_dotcom_the_website %}. Hasta que hayas subido alguna de las nuevas confirmaciones {% data variables.product.product_name %}, habrá diferencias entre el repositorio de tu proyecto en tu computadora y el repositorio del proyecto en {% data variables.product.prodname_dotcom_the_website %}. Esto te permite trabajar localmente y solo subir tu trabajo a {% data variables.product.prodname_dotcom_the_website %} cuando estés listo.
7. En el área abierta junto a la pestaña **Changes** (Cambios), verás sugerencias sobre lo que puedes hacer a continuación. Para abrir el repositorio en {% data variables.product.product_name %} en tu navegador, haz clic en **View on GitHub** (Ver en GitHub). ![Ver en GitHub](/assets/images/help/desktop/getting-started-guide/view-on-github.png)
8. En tu navegador, haz clic en **2 commits** (2 confirmaciones). Verás una lista de las confirmaciones en este repositorio en {% data variables.product.product_name %}. La primera confirmación deberá ser la confirmación que acabas de realizar en {% data variables.product.prodname_desktop %}. ![Hacer clic en dos confirmaciones](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

### Conclusión

¡Felicitaciones! Has creado un repositorio, publicado el repositorio en {% data variables.product.product_name %}, realizado una confirmación y subido tus cambios. Esta es solo una muestra de todas las cosas que puedes hacer con {% data variables.product.product_name %} y {% data variables.product.prodname_desktop %}. Esperamos que este ejercicio te estimule para explorar un poco más.
