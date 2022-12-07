---
title: Creación de un codespace para un repositorio
intro: Puedes crear un codespace para una rama en un repositorio para desarrollar en línea.
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
  - /github/developing-online-with-codespaces/creating-a-codespace
  - /codespaces/developing-in-codespaces/creating-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Create a codespace for a repo
ms.openlocfilehash: 409c946feda4ffbd3d9ab615b6ea07fabee3f530
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188324'
---
## Acerca de la creación de un codespace para un repositorio

{% data reusables.codespaces.ways-to-create-a-codespace %} Usa las pestañas de este artículo a fin de mostrar instrucciones para cada una de estas formas de crear un codespace.

{% data reusables.codespaces.starting-new-project-template %} Para obtener más información, consulta "[Creación de un codespace a partir de una plantilla](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)".

{% note %}

**Nota**: Si usas un IDE de JetBrains, puedes usar la {% data variables.product.prodname_cli %} para crear un codespace. Después, puedes usar la aplicación de Puerta de enlace de JetBrains para abrir el codespace en un IDE de JetBrains. Para obtener más información, consulta "[Uso de codespaces en el IDE de JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)".

{% endnote %}

Puedes usar {% data variables.product.prodname_github_codespaces %} en tu cuenta personal del {% data variables.product.prodname_dotcom_the_website %}, con la cuota de uso gratuito incluido cada mes para las cuentas de los planes Gratis y Pro. {% data reusables.codespaces.codespaces-continue-by-paying %}

Las organizaciones pueden permitir que los miembros y colaboradores externos creen y usen codespaces a costa de la organización. Para más información, consulta ["Habilitación de {% data variables.product.prodname_github_codespaces %} para la organización](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)".

{% data reusables.codespaces.codespaces-are-personal %}

Si creas un codespace desde un repositorio, este se asociará a una rama específica, que no puede estar vacía. Puedes crear más de un codespace por repositorio o incluso por rama.

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

### Proceso de creación de codespace

Cuando creas un codespace, se suscitan varios pasos para crear y conectarte a tu ambiente de desarrollo:

- Paso 1: se le asignan una MV y almacenamiento a tu codespace.
- Paso 2: Se crea el contenedor y se clona tu repositorio.
- Paso 3: Puedes conectarte al codespace.
- Paso 4: El codespace sigue con la configuración post-creación.

Para más información sobre lo que sucede al crear un codespace, vea "[Análisis en profundidad](/codespaces/getting-started/deep-dive)".

Para obtener más información sobre el ciclo de vida de un codespace, consulta "[Ciclo de vida del codespaces](/codespaces/getting-started/the-codespace-lifecycle)".

Si quiere usar enlaces de Git para el codespace, debe configurarlos mediante los [scripts de ciclo de vida `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts), como `postCreateCommand`, durante el paso 4. Como el contenedor de codespace se crea después de clonar el repositorio, cualquier [directorio de plantilla de Git](https://git-scm.com/docs/git-init#_template_directory) configurado en la imagen de contenedor no se aplicará al codespace. En su lugar, deben instalarse los ganchos después de que se crea el codespace. Para obtener más información sobre cómo usar `postCreateCommand`, consulta la referencia [`devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) en la documentación de {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.prebuilds-crossreference %}

## Creación de un codespace para un repositorio

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
1. Debajo del nombre de repositorio, utiliza el menú desplegable "Rama" y selecciona aquella en la que quieras crear un codespace.

   ![Menú desplegable Rama](/assets/images/help/codespaces/branch-drop-down.png)

1. Haz clic en el botón **{% octicon "code" aria-label="The code icon" %} Código** y , a continuación, haz clic en la pestaña **Codespaces**.

   ![Botón de codespace nuevo](/assets/images/help/codespaces/new-codespace-button.png)

   Si los codespaces de este repositorio son facturables a una organización o a su empresa matriz, debajo del botón **Crear codespace en RAMA** verás un mensaje que indica quién pagará el codespace.

1. Crea el codespace, ya sea con las opciones predeterminadas o después de configurar las opciones avanzadas:
 
   * **Uso de las opciones predeterminadas**

      Para crear un codespace con las opciones predeterminadas, haz clic en el signo más ({% octicon "plus" aria-label="The plus icon" %}). Como alternativa, si actualmente no tienes ningún codespace para este repositorio, puedes hacer clic en **Crear codespace en RAMA**.

   * **Configurar opciones**

      Para configurar opciones avanzadas para el codespace, como un tipo de máquina diferente o un archivo determinado `devcontainer.json`:

      1. Haz clic en los puntos suspensivos ( **...** ) de la parte superior derecha de la pestaña **Codespaces** y selecciona **Nuevo con opciones**.

      ![Visualización del tipo de máquina predeterminado](/assets/images/help/codespaces/default-machine-type.png)

      1. En la página de opciones del codespace, elige tus opciones preferidas en los menús desplegables.

         ![Página de opciones de codespaces](/assets/images/help/codespaces/advanced-options.png)

         {% note %}
      
         **Notas**
      
         * Puedes marcar la página de opciones para poder crear rápidamente un codespace para este repositorio y esta rama.
         * La página [https://github.com/codespaces/new](https://github.com/codespaces/new) proporciona una manera rápida de crear un codespace para cualquier repositorio y rama. Puedes acceder a esta página rápidamente escribiendo `codespace.new` en la barra de direcciones del explorador.
         * Para obtener más información sobre el archivo `devcontainer.json`, consulta "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)".
         * Para obtener más información, consulta "[Cambio del tipo de máquina para el codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)".
         * {% data reusables.codespaces.codespaces-machine-type-availability %}
      
         {% endnote %}

      1. Haga clic en **Crear codespace**.

{% endwebui %}
   
{% vscode %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

{% endvscode %}
   
{% cli %}

{% data reusables.cli.cli-learn-more %}

Para crear un codespace, use el subcomando `gh codespace create`. 

```shell
gh codespace create 
```

Se te pedirá que elijas un repositorio. Si los codespaces de este repositorio son facturables a una organización o a su empresa matriz, se muestra un mensaje que indica quién pagará el codespace. Luego, se te pedirá que elijas una rama, un archivo de configuración de contenedor de desarrollo (si hay más de uno disponible) y un tipo de máquina (si hay más de uno disponible).

Como alternativa, puedes utilizar marcadores para especificar algunas o todas las opciones:

```shell
gh codespace create -r OWNER/REPO -b BRANCH --devcontainer-path PATH -m MACHINE-TYPE
```

En este ejemplo, reemplaza `owner/repo` por el identificador del repositorio. Reemplace a `branch` por el nombre de la rama o el hash SHA completo de la confirmación que quiera que se extraiga inicialmente en el codespace. Si usa la marca `-r` sin la marca `b`, el codespace se crea a partir de la rama predeterminada.

Reemplaza `path` por la ruta de acceso al archivo de configuración de contenedor de desarrollo que desees usar para el nuevo codespace. Si omites este marcador y hay más de un tipo de archivo de contenedor de desarrollo disponible, se te pedirá que lo elijas en una lista. Para obtener más información sobre el archivo de configuración de contenedor de desarrollo, consulta "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

Reemplace `machine-type` por un identificador válido para un tipo de máquina disponible. Los identificadores son cadenas como: `basicLinux32gb` y `standardLinux32gb`. El tipo de máquinas que están disponibles depende del repositorio, la cuenta personal y la ubicación. Si ingresas un tipo de máquina no disponible o inválido, los tipos disponibles se mostrarán en el mensaje de error. Si omites este marcador y hay más de un tipo de máquina disponible, se te pedirá elegirlo de una lista.

Para obtener los detalles completos de las opciones de este comando, consulta [el manual de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_create).

{% endcli %}

## Información adicional
- "[Apertura de un codespace existente](/codespaces/developing-in-codespaces/opening-an-existing-codespace)"
- "[Incorporación de un distintivo 'Abrir en {% data variables.product.prodname_github_codespaces %}'](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge)"
