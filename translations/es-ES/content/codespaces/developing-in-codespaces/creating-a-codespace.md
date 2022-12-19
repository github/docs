---
title: Crear un codespace
intro: Puedes crear un codespace para una rama en un repositorio para desarrollar en línea.
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
- /github/developing-online-with-github-codespaces/creating-a-codespace
- /github/developing-online-with-codespaces/creating-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Fundamentals
- Developer
shortTitle: Create a codespace
ms.openlocfilehash: ae14b01f409f9c6bfb43c579aaa9c76bb2421cfe
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148106737"
---
## Acerca de la creación de codespaces

Puedes crear un codespace en {% data variables.product.prodname_dotcom_the_website %}, en {% data variables.product.prodname_vscode %} o utilizando el {% data variables.product.prodname_cli %}. {% data reusables.codespaces.codespaces-are-personal %}

Los codespaces se asocian con una rama específica de un repositorio y este repositorio no puede estar vacío. Puedes crear más de un codespace por repositorio o incluso por rama.

Cuando creas un codespace, se suscitan varios pasos para crear y conectarte a tu ambiente de desarrollo:

- Paso 1: se le asignan una MV y almacenamiento a tu codespace.
- Paso 2: Se crea el contenedor y se clona tu repositorio.
- Paso 3: Puedes conectarte al codespace.
- Paso 4: El codespace sigue con la configuración post-creación.

Para más información sobre lo que sucede al crear un codespace, vea "[Análisis en profundidad](/codespaces/getting-started/deep-dive)".

Para más información sobre el ciclo de vida de un codespace, consulte "[Ciclo de vida de Codespaces](/codespaces/developing-in-codespaces/codespaces-lifecycle)".

Si quiere usar enlaces de Git para el codespace, debe configurarlos mediante los [scripts de ciclo de vida `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts), como `postCreateCommand`, durante el paso 4. Como el contenedor de codespace se crea después de clonar el repositorio, cualquier [directorio de plantilla de Git](https://git-scm.com/docs/git-init#_template_directory) configurado en la imagen de contenedor no se aplicará al codespace. En su lugar, deben instalarse los ganchos después de que se crea el codespace. Para obtener más información sobre cómo usar `postCreateCommand`, consulta la referencia [`devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) en la documentación de {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

{% data reusables.codespaces.prebuilds-crossreference %}

## Acceso a {% data variables.product.prodname_github_codespaces %}

Cuando tengas acceso a {% data variables.product.prodname_github_codespaces %}, verás una pestaña "Codespaces" en el menú desplegable **{% octicon "code" aria-label="The code icon" %} Código** cuando veas un repositorio.

Tendrás acceso a {% data variables.product.prodname_github_codespaces %} en las condiciones siguientes:

Cualquiera de estos son verdaderos:
* Eres miembro, o colaborador externo, de una organización que habilitó {% data variables.product.prodname_codespaces %} y configuró un límite de gastos.
* El propietario de la organización te ha permitido crear espacios de código a costa de la organización.
* El repositorio para el que desea screar un codespace es propiedad de esta organización.

O ambos son verdaderos:
* Participas en la versión beta de {% data variables.product.prodname_codespaces %} para usuarios individuales.
* Posees el repositorio para el que deseas crear un codespace o es propiedad de una organización de la que eres miembro o colaborador externo.

Antes de que puedas utilizar {% data variables.product.prodname_codespaces %} en una organización, un propietario o gerente de facturación debe haber configurado un límite de gastos. Para más información, consulta "[Administración de los límites de gasto para {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces#about-spending-limits-for-codespaces)".

Los propietarios de la organización pueden especificar quién puede crear y usar codespaces a costa de la organización. Los propietarios de la organización también pueden impedir que el uso de codespace se cobre a la organización. Para más información, consulta ["Habilitación de {% data variables.product.prodname_github_codespaces %} para la organización](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#choose-who-can-create-codespaces-that-are-billed-to-your-organization)".

## Crear un codespace

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
1. Debajo del nombre de repositorio, utiliza el menú desplegable de "Rama" y selecciona aquella en la que quieras crear un codespace.

   ![Menú desplegable de rama](/assets/images/help/codespaces/branch-drop-down.png)

1. Haz clic en el botón **{% octicon "code" aria-label="The code icon" %} Código** y , a continuación, haz clic en la pestaña **Codespaces**.

   ![Botón de codespace nuevo](/assets/images/help/codespaces/new-codespace-button.png)

   Si los codespaces de este repositorio son facturables, debajo del botón **Crear codespace en RAMA** verás un mensaje que indica quién pagará por el codespace.

1. Crea el codespace, ya sea con las opciones predeterminadas o después de configurar las opciones avanzadas:
 
   * **Uso de las opciones predeterminadas**

      Para crear un codespace con las opciones predeterminadas, haz clic en **Crear codespace en RAMA**.

      Opcionalmente, antes de hacer clic en **Crear codespace en RAMA**, puedes hacer clic en la flecha abajo situada al lado del botón para ver qué tipo de máquina se usará para el codespace.

      ![Visualización del tipo de máquina predeterminado](/assets/images/help/codespaces/default-machine-type.png)

      {% note %}

      **Nota**: El tipo de equipo con los recursos más bajos que son válidos para el repositorio está seleccionado de forma predeterminada.

      {% endnote %}

   * **Configurar opciones**

      Para configurar opciones avanzadas para el codespace, como un tipo de máquina diferente o un archivo determinado `devcontainer.json`:

      1. Haz clic en la flecha abajo situada al lado del botón **Crear codespace en RAMA** y, a continuación, haz clic en **Configurar y crear codespace**.
      1. Haz clic en el botón **Configurar y crear codespace**.
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

      1. Haz clic en **Iniciar sesión**.

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

Se te pedirá que elijas un repositorio. Si los codespaces de este repositorio son facturables, verás un mensaje que indica quién pagará por el codespace. Luego, se te pedirá que elijas una rama, un archivo de configuración de contenedor de desarrollo (si hay más de uno disponible) y un tipo de máquina (si hay más de uno disponible).

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
- "[Adición de un distintivo "Abrir en GitHub Codespaces"](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge)"
