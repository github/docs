---
ms.openlocfilehash: c760b3f26f89437d485cc222de4fbc54fa907735
ms.sourcegitcommit: f464cc9bfc41132f315ea172c591bfd145a06736
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/15/2022
ms.locfileid: "148165464"
---
## Publicación de un codespace creado a partir de una plantilla

Al crear un codespace a partir de un repositorio de plantillas o una plantilla en la página "Tus codespaces", el trabajo que realices no se almacenará en un repositorio de {% data variables.product.prodname_dotcom %} hasta que no publiques el codespace. Para obtener más información, consulta "[Creación de un codespace a partir de una plantilla](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-to-a-repository-on-github)".

{% data reusables.codespaces.publishing-template-codespaces %}

## Crear o cambiar de rama

{% data reusables.codespaces.create-or-switch-branch %}

{% tip %}

**Sugerencia**: Si alguien ha modificado recientemente un archivo en el repositorio remoto, en la rama a la que hayas cambiado quizá no veas estos cambios hasta que los extraigas en el codespace. 

{% endtip %}

## Configramr tus cambios 

{% data reusables.codespaces.source-control-commit-changes %} 

## Extraer cambios del repositorio remoto

Puedes extraer cambios del repositorio remoto hacia tu codespace en cualquier momento. 

{% data reusables.codespaces.source-control-display-dark %}
1. En la parte superior de la barra lateral, haz clic en los puntos suspensivos ( **...** ). ![Botón de puntos suspensivos para las opciones Ver y Más acciones](/assets/images/help/codespaces/source-control-ellipsis-button.png)
1. En el menú desplegable, haz clic en **Extraer**.

Si el la configuración del contenedor dev cambió desde que creaste el codespace, puedes aplicar los cambios si recompilas el contenedor para el codespace. Para más información, vea "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration)".

## Configurar tu codespace para que recupere los cambios nuevos automáticamente 

Puedes configurar tu codespace para que recupere automáticamente los detalles de cualquier confirmación nueva que se haya hecho al repositorio remoto. Esto te permite ver si tu copia local del repositorio está desactualizada, en cuyo caso, podrías elegir extraer los cambios nuevos. 

Si la operación de búsqueda detecta cambios nuevos en el repositorio remoto, verás la cantidad de confirmaciones nuevas en la barra de estado. Luego podrás extraer los cambios en tu copia local.

1. Haga clic en el botón **Administrar** en la parte inferior de la barra de actividad.
![Botón Administrar](/assets/images/help/codespaces/manage-button.png)
1. En el menú, haga clic en **Configuración**.
1. En la página Configuración, busque: `autofetch`.
![Búsqueda de captura automática](/assets/images/help/codespaces/autofetch-search.png)
1. Para capturar detalles de las actualizaciones de todos los remotos registrados para el repositorio actual, establezca **Captura automática de Git** en `all`.
![Habilitación de la captura automática de Git](/assets/images/help/codespaces/autofetch-all.png)
1. Si quiere cambiar la cantidad de segundos entre cada captura automática, edite el valor de **Git: Periodo de captura automática**.

## Levantar una solicitud de cambios

{% data reusables.codespaces.source-control-pull-request %} 

## Subir cambios a tu repositorio remoto

Puedes insertar los cambios que hayas guardado y confirmado. Esto aplica a aquellos de la rama ascendente en el repositorio remoto. Puede que necesites hacer eso si aún no estás listo para crear una solicitud de cambios o si prefieres crearla en {% data variables.product.prodname_dotcom %}.

1. En la parte superior de la barra lateral, haz clic en los puntos suspensivos ( **...** ). ![Botón de puntos suspensivos para las opciones Ver y Más acciones](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. En el menú desplegable, haz clic en **Insertar**.
