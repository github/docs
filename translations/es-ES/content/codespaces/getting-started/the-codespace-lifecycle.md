---
title: Ciclo de vida de un codespace
intro: 'Puedes desarrollar en un entorno de {% data variables.product.prodname_github_codespaces %} y mantener tus datos a lo largo de todo el ciclo de vida del codespace.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/codespaces-lifecycle
  - /codespaces/developing-in-codespaces/the-codespace-lifecycle
ms.openlocfilehash: 8f223bce2acf2f6dc6200271397c0d70f28aefe4
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188384'
---
## Acerca del ciclo de vida de un codespace

El ciclo de vida de un codespace comienza cuando lo creas y termina cuando lo borras. Puedes desconectarte y reconectarte a un codespace activo sin afectar sus procesos de ejecución. También puedes detener y reiniciar un codespace sin perder los cambios que hayas hecho a tu proyecto.

## Crear un codespace

Cuando quieras trabajar en un proyecto, puedes elegir crear un codespace nuevo o abrir uno existente. Deberás crear un codespace nuevo desde una rama de tu repositorio cada vez que desarrolles en {% data variables.product.prodname_github_codespaces %} o mantengas un codespace de ejecución extendida para una característica. {% data reusables.codespaces.starting-new-project-template %} Para obtener más información, consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)" y "[Creación de un codespace a partir de una plantilla](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)".

{% data reusables.codespaces.max-number-codespaces %} Del mismo modo, si alcanza el número máximo de espacios de codespaces e intenta iniciar otro, se le pedirá que detenga uno de los codespaces activos.

Si eliges crear un codespace nuevo cada que trabajas en un proyecto, debes subir tus cambios frecuentemente para que todas las confirmaciones nuevas se enecuentren en {% data variables.product.prodname_dotcom %}. Si eliges utilizar un codespace de ejecución extendida para tu proyecto, deberías hacer extracciones desde tu rama predeterminada de repositorio cada que comiences a trabajar en tu codespace para que tu ambiente tenga las confirmaciones más recientes. Este flujo de trabajo es muy similar a que si estuvieras trabajando en un proyecto en tu máquina local. 

{% data reusables.codespaces.prebuilds-crossreference %}

## Guardar los cambios en un codespace

Cuando te conectas a un codespace a través de la web, el guardado automático se habilita automáticamente para el editor web y se configura para guardar los cambios después de un retraso. Cuando te conectes a un codespace a través de la instancia de {% data variables.product.prodname_vscode %} que se está ejecutando en tu máquina de escritorio, debes habilitar el guardado automático. Para más información, vea [Guardado o guardado automático](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) en la documentación de {% data variables.product.prodname_vscode %}.

El trabajo se guardará en una máquina virtual en la nube. Puedes cerrar y detener un codespace y volver al trabajo guardado más adelante. Si tienes cambios sin guardar, tu editor te pedirá guardarlos antes de salir. Sin embargo, si se elimina el codespace, también se eliminará tu trabajo. Para conservar el trabajo, deberás confirmar los cambios e insertarlos en el repositorio remoto, o publicar tu trabajo en un nuevo repositorio remoto si creaste el codespace a partir de una plantilla. Para más información, vea "[Uso del control de código fuente en el codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)".

## Tiempos de expiración para {% data variables.product.prodname_github_codespaces %}

Si dejas que tu codespace se ejecute sin interacción o si sales de este sin detenerlo explícitamente, el codespace se detendrá después de un periodo de espera y dejará de ejecutarse. Predeterminadamente, un codespace se detendrá después de 30 minutos de inactividad, pero puedes personalizar la duración del periodo de espera en cada codesapce nuevo que crees. Para obtener más información sobre cómo establecer el periodo de tiempo de espera predeterminado para los codespaces, vea "[Establecimiento del periodo de tiempo de espera para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)". Para obtener más información sobre cómo detener un codespace, vea "[Detención de un codespace](#stopping-a-codespace)".

Cuando un codespace agota su tiempo de espera, tus datos se preservan desde la última vez en la que hayas guardado tus cambios. Para obtener más información, vea "[Guardado de cambios en un codespace](#saving-changes-in-a-codespace)".

## Reconstruir un codespace

Puedes recompilar el codespace para implementar cambios en la configuración de tu contenedor de desarrollo. Para la mayoría de los usos, puedes crear un codespace como alternativa a reconstruir uno de ellos. De forma predeterminada, al recompilar el codespace, {% data variables.product.prodname_github_codespaces %} reutilizará imágenes de la memoria caché para acelerar el proceso de recompilación. Como alternativa, puedes realizar una recompilación completa, que borra la memoria caché y recompila el contenedor con imágenes nuevas.

Para más información, consulta "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)" y "[Realización de una recompilación completa de un contenedor](/codespaces/codespaces-reference/performing-a-full-rebuild-of-a-container)".

## Detener un codespace

{% data reusables.codespaces.stopping-a-codespace %} Para obtener más información, consulta "[Detención e inicio de un codespace](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)".

## Borrar un codespace

Puedes crear un codespace para una tarea en particular y luego borrarlo de forma segura después de que subas tus cambios a una rama remota.

Si intentas borrar un codespace con confirmaciones de git sin subir, tu editor te notificará sobre los cambios que tengas sin subir a una rama remota. Puedes subir todos los cambios que desees y luego borrar tu codespace o continuar borrando tu codespace y cualquier cambio sin confirmar. También puedes exportar tu código a una rama nueva sin crear un codespace nuevo. Para obtener más información, vea "[Exportación de cambios a una rama](/codespaces/troubleshooting/exporting-changes-to-a-branch)".

Los codespaces que se han detenido y permanecen inactivos durante un período de tiempo determinado se eliminarán automáticamente. De manera predeterminada, los codespaces inactivos se eliminan después de 30 días, pero puedes personalizar el período de retención del codespace. Para más información, consulta "[Configuración de la eliminación automática de los codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)".

Si creas un codespace, seguirá acumulando cargos de almacenamiento hasta que se elimine, independientemente de si está activo o detenido. Para más información, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-storage-usage)". La eliminación de un codespace no reduce la cantidad facturable actual de {% data variables.product.prodname_github_codespaces %}, que se acumula durante cada ciclo de facturación mensual. Para más información, consulta "[Visualización del uso de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".

Para obtener más información sobre cómo eliminar un codespace, vea "[Eliminación de un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)".

## Pérdida de la conexión al usar {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} es un entorno de desarrollo basado en la nube y requiere de una conexión a internet. Si pierdes la conexióna internet mientras trabajas en un codespace, no podrás acceder a él. Sin embargo, cualquier cambio sin confirmar, se guardará. Cuando tengas acceso a una conexión de internet nuevamente, puedes conectarte a tu codespace exactamente en el mismo estado en el que lo dejaste. Si tienes una conexión de internet inestable, deberías confirmar y subir tus cambios frecuentemente.

Si sabes que a menudo estarás trabajando sin conexión, puedes usar el archivo `devcontainer.json` con la [extensión "Dev Containers"](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) para {% data variables.product.prodname_vscode_shortname %} a fin de compilarlo y adjuntarlo a un contenedor de desarrollo local para el repositorio. Para obtener más información, vea [Desarrollo dentro de un contenedor](https://code.visualstudio.com/docs/remote/containers) en la documentación de {% data variables.product.prodname_vscode %}.
