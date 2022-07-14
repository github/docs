---
title: El editor basado en web de github.dev
intro: 'Utiliza el github.dev {% data variables.product.prodname_serverless %} desde tu repositorio o solicitud de cambios para crear y confirmar cambios.'
versions:
  feature: githubdev-editor
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
shortTitle: Editor basado en la web
redirect_from:
  - /codespaces/developing-in-codespaces/web-based-editor
---

{% note %}

**Nota:** el github.dev {% data variables.product.prodname_serverless %} se encuentra acutalmente en vista previa beta. Puedes proporcionar retroalimentación [En nuestros debates](https://github.co/browser-editor-feedback).

{% endnote %}

## Acerca de {% data variables.product.prodname_serverless %}

El {% data variables.product.prodname_serverless %} presenta una experiencia de edición ligera que se ejecuta completamente en tu buscador. Con el {% data variables.product.prodname_serverless %}, puedes navegar por los archivos y repositorios de código abierto desde {% data variables.product.prodname_dotcom %} y hacer y confirmar cambios de código. Puedes abrir cualquier repositorio, bifurcación o solicitud de cambios en el editor.

El {% data variables.product.prodname_serverless %} se encuentra disponible gratuitamente para todos en {% data variables.product.prodname_dotcom_the_website %}.

El {% data variables.product.prodname_serverless %} proporciona muchos de los beneficios de {% data variables.product.prodname_vscode %}, tales como búsqueda, resaltado de sintaxis y vista de control de código fuente. También puedes utilizar la Sincronización de Ajustes para compartir tus propios ajustes de {% data variables.product.prodname_vscode_shortname %} con el editor. Para obtener más información, consulta la sección de "[Sincronización de ajustes](https://code.visualstudio.com/docs/editor/settings-sync)" en la documentación de {% data variables.product.prodname_vscode_shortname %}.

El {% data variables.product.prodname_serverless %} se ejecuta completamente en el área de pruebas de tu buscador. El editor no clona el repositorio, sino que utiliza la [extensión de repositorios de GitHub](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension) para llevar a cabo la mayoría de la funcionalidad que utilizarás. Tu trabajo se guarda en el almacenamiento local de tu buscador hasta que lo confirmes. Debes confirmar tus cambios frecuentemente para asegurarte de que siempre sean accesibles.

## Abrir el {% data variables.product.prodname_serverless %}

Puedes abrir cualquier repositorio de {% data variables.product.prodname_dotcom %} en el {% data variables.product.prodname_serverless %} en cualquiera de las siguientes formas:

- To open the repository in the same browser tab, press `.` while browsing any repository or pull request on {% data variables.product.prodname_dotcom %}.

   To open the repository in a new browser tab, hold down the shift key and press `.`.

- Cambiando la URL de "github.com" a "github.dev".
- Al ver un archivo, utiliza el menú desplegable junto al {% octicon "pencil" aria-label="The edit icon" %} y selecciona **Abrir en github.dev**.

  ![Menú desplegable del botón "Editar archivo"](/assets/images/help/repository/edit-file-edit-dropdown.png)

## {% data variables.product.prodname_codespaces %} y el {% data variables.product.prodname_serverless %}

Tanto el {% data variables.product.prodname_serverless %} como los {% data variables.product.prodname_github_codespaces %} te permiten editar el código directamente desde tu repositorio. Sin embargo, ambos tienen beneficios ligeramente diferentes, dependiendo de tu caso de uso.

|                          | {% data variables.product.prodname_serverless %}                                                                                                                                                                               | {% data variables.product.prodname_codespaces %}
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Costo**                | Free.                                                                                                                                                                                                                          | Costos de cálculo y almacenamiento. Para obtener información sobre los precios, consulta "[Precios de los codespaces](/en/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing)".                                                                                                                                              |
| **Disponibilidad**       | Disponible para todos en GitHub.com.                                                                                                                                                                                           | Disponible para las organizaciones que utilizan GitHub Team o GitHub Enterprise Cloud.                                                                                                                                                                                                                                                                                   |
| **Inicio**               | El {% data variables.product.prodname_serverless %} se abre instantáneamente al presionar una tecla y puedes comenzar a usarlo de inmediato sin tener que esperar por configuraciones o instalaciones adicionales.             | Cuando creas o reanudas un codespace, a este se le asigna una MV y el contenedor se configura con base ene l contenido de un archivo de `devcontainer.json`. Esta configuración puede tomar algunos minutos para crear el ambiente. Para obtener más información, consulta la sección "[Crear un Codespace](/codespaces/developing-in-codespaces/creating-a-codespace)". |
| **Cálculo**              | No hay cálculos asociados, así que no podrás compilar y ejecutar tu código ni utilizar la terminal integrada.                                                                                                                  | Con {%  data   variables.product.prodname_codespaces %}, obtienes el poder de la MV dedicada en ela que ejecutas y depuras tu aplicación.                                                                                                                                                                                                                                |
| **Acceso a la terminal** | Ninguno.                                                                                                                                                                                                                       | {% data variables.product.prodname_codespaces %} proporciona un conjunto común de herramientas predeterminadamente, lo que significa que puedes utilizar la terminal como lo harías en tu ambiente local.                                                                                                                                                                |
| **Extensiones**          | Solo un subconjunto de extensiones que pueden ejecutarse en la web aparecerá en la Vista de Extensiones y podrá instalarse. Para obtener más información, consulta la sección "[Utilizar las extensiones](#using-extensions)". | Con los codespaces, puedes utilizar la mayoría de las extensiones de {% data variables.product.prodname_vscode_marketplace %}.                                                                                                                                                                                                                                         |

### Seguir trabajando en {%  data   variables.product.prodname_codespaces %}

Puedes iniciar tu flujo de trabajo en el {% data variables.product.prodname_serverless %} y seguir trabajando en un codespace, tomando en cuenta que tengas [acceso a {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces). Si intentas acceder a la Vista de Ejecución y Depuración o a la Terminal, se ten notificará que no están disponibles en {% data variables.product.prodname_serverless %}.

Para seguir trabajando en un codespace, haz clic en **Seguir trabajando en…** y selecciona **Crear codespace nuevo** para crear un codespace en tu rama actual. Antes de que elijas esta opción, debes confirmar cualquier cambio.

![Una captura de pantalla que muestra el botón "Seguir trabajando en" en la IU](/assets/images/help/codespaces/codespaces-continue-working.png)

## Utilizar el control de código fuente

Cuando utilizas el {% data variables.product.prodname_serverless %}, todas las acciones se administran a través de la Vista de Control de Código Fuente, la cual se ubica en la barra de actividad en la parte izquierda. Para obtener más información sobre la Vista de Control de Código Fuente, consulta la sección "[Control de versiones](https://code.visualstudio.com/docs/editor/versioncontrol)" en la documentación de {% data variables.product.prodname_vscode_shortname %}.

Ya que el editor basado en web utiliza la extensión de repositorios de GitHub para alimentar su funcionalidad, puedes cambiar de rama sin necesidad de acumular cambios. Para obtener más información, consulta la sección "[Repositorios de GitHub](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension)" en la documentación de {% data variables.product.prodname_vscode_shortname %}.

### Crear una rama nueva

{% data reusables.codespaces.create-or-switch-branch %}
  Cualquier cambio sin confirmar que hayas hecho en tu rama antigua estará disponible en la nueva.

### Confirmar tus cambios

{% data reusables.codespaces.source-control-commit-changes %}
5. Una vez que hayas confirmado tus cambios, estos se subirán automáticamente a tu rama de {% data variables.product.prodname_dotcom %}.
### Crear una solicitud de extracción

{% data reusables.codespaces.source-control-pull-request %}

### Trabajar con una solicitud de cambios existente

Puedes utilizar el {% data variables.product.prodname_serverless %} para trabajar con una solicitud de cambios existente.

1. Navega hasta la solicitud de cambios que te gustaría utilizar en el {% data variables.product.prodname_serverless %}.
2. Presiona `.` para abrir la solicitud de cambios en el {% data variables.product.prodname_serverless %}.
3. Una vez que hayas hecho cualquier cambio, confírmalo utilizando los pasos en [Confirmar tus cambios](#commit-your-changes). Tus cambios se confirmarán directamente en la rama, no es necesario subirlos.

## Utilizar extensiones

El {% data variables.product.prodname_serverless %} es compatible con las extensiones de {% data variables.product.prodname_vscode_shortname %} que se hayan creado o actualizado específicamente para ejecutarse en la web. A estas extensiones se les conoce como "extensiones web". Para aprender cómo puedes crear una extensión web o actualizar la existente para que funcione en la web, consulta la sección de "[Extensiones web](https://code.visualstudio.com/api/extension-guides/web-extensions)" en la documnetación de {% data variables.product.prodname_vscode_shortname %}.

Las extensiones que puedan ejecutarse en {% data variables.product.prodname_serverless %} aparecerán en la Vista de Extensiones y podrán instalarse. Si utilizas la sincronización de ajustes, cualquier extensión compatible también se instala automáticamente. Para obtener más información, consulta la sección de "[Sincronización de ajustes](https://code.visualstudio.com/docs/editor/settings-sync)" en la documentación de {% data variables.product.prodname_vscode_shortname %}.


## Solución de problemas

Si tienes problemas para abrir el {% data variables.product.prodname_serverless %}, intenta lo siguiente:

- Asegúrate de estar firmado en {% data variables.product.prodname_dotcom %}.
- Inhabilita cualquier bloqueador de anuncios.
- Utiliza una ventana de tu buscador que no esté en modo incógnito para abrir el {% data variables.product.prodname_serverless %}.

### Limitaciones conocidas

- El {% data variables.product.prodname_serverless %} es actualmente compatible en Chrome (y en varios otros buscadores basados en Chromium), Edge, Firefox y Safari. Te recomendamos que utilices las últimas versiones de estos buscadores.
- Es posible que algunos enlaces de teclas no funcionen, dependiendo del buscador que estás utilizando. Estas limitaciones de enlaces de teclas se documentan en la sección de "[limitaciones conocidas y adaptaciones](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)" de la documentación de {% data variables.product.prodname_vscode_shortname %}.
- `.` podría no funcionar para abrir el {% data variables.product.prodname_serverless %} de acuerdo con tu diseño de teclado local. En dado caso, puedes abrir cualquier repositorio de {% data variables.product.prodname_dotcom %} en el {% data variables.product.prodname_serverless %} si cambias la URL de `github.com` a `github.dev`.
