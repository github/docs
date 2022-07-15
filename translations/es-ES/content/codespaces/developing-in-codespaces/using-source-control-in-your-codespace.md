---
title: Utilizar el control de código fuente en tu codespace
intro: 'Después de hacer cambios en un archivo de tu codespace, puedes confirmar los cambios rápidamente y subir tu actualización al repositorio remoto.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Control origen
---

 

## Acerca del control de código fuente en {% data variables.product.prodname_github_codespaces %}

Puedes llevar a cabo todas las acciones de Git que necesites directamente dentro de tu codespace. Por ejemplo, puedes recuperar cambios del repositorio remoto, cambiar de rama, crear una rama nueva, confirmar y subir cambios y crear solicitudes de cambios. Puedes utilizar la terminal integrada dentro de tu codespace para ingresar comandos de Git o puedes hacer clic en los iconos u opciones de menú para completar las tareas más comunes de Git. Esta guía te explica cómo utilizar la interface de usuario gráfica para el control de código fuente.

El control de fuentes en {% data variables.product.prodname_github_codespaces %} utiliza el mismo flujo de trabajo que {% data variables.product.prodname_vscode %}. Para obtener más información, consulta la documentación de {% data variables.product.prodname_vscode_shortname %} en la sección "[Utilizar el control de versiones en {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)".

Un flujo de trabajo típico para actualizar un archivo utilizando {% data variables.product.prodname_github_codespaces %} sería:

* Desde la rama predeterminada de tu repositorio en {% data variables.product.prodname_dotcom %}, crea un codespace. Consulta la sección "[Crear un codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".
* En tu codespace, crea una rama nueva para trabajar en ella.
* Haz tus cambios y guárdalos.
* Confirma el cambio.
* Levanta una solicitud de cambios.

## Crear o cambiar de rama

{% data reusables.codespaces.create-or-switch-branch %}

{% tip %}

**Tip**: Si alguien cambió un archivo en el repositorio remoto, en la rama a la cual te cambiaste, no verás estos cambios hasta que los extraigas hacia tu codespace.

{% endtip %}

## Extraer cambios del repositorio remoto

Puedes extraer cambios del repositorio remoto hacia tu codespace en cualquier momento.

{% data reusables.codespaces.source-control-display-dark %}
1. En la parte superior de la barra lateral, haz clic en los puntos suspensivos (**...**). ![Botón de puntos suspensivos para las acciones de "más" y "ver"](/assets/images/help/codespaces/source-control-ellipsis-button.png)
1. En el menú desplegable, haz clic en **Extraer**.

Si el la configuración del contenedor dev cambió desde que creaste el codespace, puedes aplicar los cambios si recompilas el contenedor para el codespace. Para obtener más información, consulta la sección "[Introducción a los contenedores dev](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-configuration-changes-to-a-codespace)".

## Configurar tu codespace para que recupere los cambios nuevos automáticamente

Puedes configurar tu codespace para que recupere automáticamente los detalles de cualquier confirmación nueva que se haya hecho al repositorio remoto. Esto te permite ver si tu copia local del repositorio está desactualizada, en cuyo caso, podrías elegir extraer los cambios nuevos.

Si la operación de búsqueda detecta cambios nuevos en el repositorio remoto, verás la cantidad de confirmaciones nuevas en la barra de estado. Luego podrás extraer los cambios en tu copia local.

1. Haz clic en el botón de **Administrar** en la parte inferior de la barra de actividad. ![Botón de administrar](/assets/images/help/codespaces/manage-button.png)
1. En el menú, haz clic en **Ajustes**.
1. En la página de ajustes, busca: `autofetch`. ![Buscar la recuperación automática](/assets/images/help/codespaces/autofetch-search.png)
1. Para recuperar los detalles de las actualizaciones para todos los remotos registrados para el repositorio actual, configura **Git: Autofetch** en `all`. ![Habilitar la recuperación automática en Git](/assets/images/help/codespaces/autofetch-all.png)
1. Si quieres cambiar la cantidad de segundos entre cada recuperación automática, edita el valor de **Git: Autofetch Period**.

## Configramr tus cambios

{% data reusables.codespaces.source-control-commit-changes %}

## Levantar una solicitud de cambios

{% data reusables.codespaces.source-control-pull-request %}

## Subir cambios a tu repositorio remoto

Puedes subir los cambios que has hecho. Esto aplica a aquellos de la rama ascendente en el repositorio remoto. Puede que necesites hacer eso si aún no estás listo para crear una solicitud de cambios o si prefieres crearla en {% data variables.product.prodname_dotcom %}.

1. En la parte superior de la barra lateral, haz clic en los puntos suspensivos (**...**). ![Botón de puntos suspensivos para las acciones de "más" y "ver"](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. En el menú desplegable, haz clic en **Subir**.
