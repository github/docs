---
title: Ciclo de vida de los Codespaces
intro: Puedes desarrollar en un ambiente de {% data variables.product.prodname_codespaces %} y mantener tus datos a lo largo de todo el ciclo de vida del codespace.
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Codespaces
- Developer
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 21aa691b94c8247a11a06537523cdaa070bd24b9
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878659"
---
## Acerca del ciclo de vida de un codespace

El ciclo de vida de un codespace comienza cuando lo creas y termina cuando lo borras. Puedes desconectarte y reconectarte a un codespace activo sin afectar sus procesos de ejecución. También puedes detener y reiniciar un codespace sin perder los cambios que hayas hecho a tu proyecto.

## Crear un codespace

Cuando quieras trabajar en un proyecto, puedes elegir crear un codespace nuevo o abrir uno existente. Deberás crear un codespace nuevo desde una rama de tu proyecto cada que desarrolles en {% data variables.product.prodname_codespaces %} o mantener un codespace de ejecución extendida para una característica. Para obtener más información, consulta "[Creación de un codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".

{% data reusables.codespaces.max-number-codespaces %} Del mismo modo, si alcanza el número máximo de espacios de codespaces e intenta iniciar otro, se le pedirá que detenga uno de los codespaces activos.

Si eliges crear un codespace nuevo cada que trabajas en un proyecto, debes subir tus cambios frecuentemente para que todas las confirmaciones nuevas se enecuentren en {% data variables.product.prodname_dotcom %}. Si eliges utilizar un codespace de ejecución extendida para tu proyecto, deberías hacer extracciones desde tu rama predeterminada de repositorio cada que comiences a trabajar en tu codespace para que tu ambiente tenga las confirmaciones más recientes. Este flujo de trabajo es muy similar a que si estuvieras trabajando en un proyecto en tu máquina local. 

{% data reusables.codespaces.prebuilds-crossreference %}

## Guardar los cambios en un codespace

Cuando te conectas a un codespace a través de la web, el guardado automático se habilita automáticamente para el editor web y se configura para guardar los cambios después de un retraso. Cuando te conectes a un codespace a través de la instancia de {% data variables.product.prodname_vscode %} que se está ejecutando en tu máquina de escritorio, debes habilitar el guardado automático. Para más información, vea [Guardado o guardado automático](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) en la documentación de {% data variables.product.prodname_vscode %}.

Si quieres guardar tus cambios en el repositorio de git en el sistema de archivos del codespace, confírmalos y súbelos a una rama remota.

Si tienes cambios sin guardar, tu editor te pedirá guardarlos antes de salir.

## Tiempos de espera de los codespaces

Si dejas que tu codespace se ejecute sin interacción o si sales de este sin detenerlo explícitamente, el codespace se detendrá después de un periodo de espera y dejará de ejecutarse. Predeterminadamente, un codespace se detendrá después de 30 minutos de inactividad, pero puedes personalizar la duración del periodo de espera en cada codesapce nuevo que crees. Para obtener más información sobre cómo establecer el periodo de tiempo de espera predeterminado para los codespaces, vea "[Establecimiento del periodo de tiempo de espera para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)". Para obtener más información sobre cómo detener un codespace, vea "[Detención de un codespace](#stopping-a-codespace)".

Cuando un codespace agota su tiempo de espera, tus datos se preservan desde la última vez en la que hayas guardado tus cambios. Para obtener más información, vea "[Guardado de cambios en un codespace](#saving-changes-in-a-codespace)".

## Reconstruir un codespace

Puedes reconstruir tu codespace para restablecer un estado limpio como si hubieras creado uno nuevo. Para la mayoría de los usos, puedes crear un codespace como alternativa a reconstruir uno de ellos. Es muy probable que reconstruyas un codespace para implementar cambios en tu contenedor dev. Cuando reconstruyes un codespace, cualquier contenedor de Docker, imagen, volumen y caché se limpiarán y luego se reconstruirá el codespace.

Si necesitas que cualquiera de estos datos persista después de una reconstrucción, puedes crear un enlace simbólico (symlink) (en la ubicación deseada del codespace) hacia el directorio persistente. Por ejemplo, en el directorio `.devcontainer`, puede crear un directorio `config` que se conservará en una recompilación. Después, puede vincular de forma simbólica el directorio `config` y su contenido como `postCreateCommand` en el archivo `devcontainer.json`.

```json  
{
    "image": "mcr.microsoft.com/vscode/devcontainers/base:alpine",
    "postCreateCommand": ".devcontainer/postCreate.sh"
}
```

En el archivo de ejemplo `postCreate.sh` siguiente, el contenido del directorio `config` se vincula simbólicamente al directorio principal.

```bash
#!/bin/bash
ln -sf $PWD/.devcontainer/config $HOME/config && set +x
```

## Detener un codespace

Puedes detener un codespace en cualquier momento. Cuando detienes un codespace, cualquier proceso en ejecución se detendrá y el historial de la terminal se limpiará. Cualquier cambio que hayas guardado en tu codespace aún estará disponible cuando lo vuelvas a iniciar. Si no detienes un codespace explícitamente, este seguirá ejecutándose hasta que se detenga por inactividad. Para más información, vea "[Tiempos de espera de Codespaces](#codespaces-timeouts)".

Solo los codespaces en ejecución incurren en cargos por uso de CPU; un codespace que se haya detenido solo incurrirá en costos de almacenamiento.

Es posible que debas detener y reiniciar un codespace para que se apliquen los cambios a este. Por ejemplo, si cambias el tipo de máquina que utilizas para tu codespace, necesitarás detenerlo y reiniciarlo para que el cambio tome efecto. También puedes detener tu codespace y elegir restablecerlo o borrarlo si encuentras un error o algo inesperado. Para más información, vea "[Suspensión o detención de un codespace](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)".

## Borrar un codespace

Puedes crear un codespace para una tarea en particular y luego borrarlo de forma segura después de que subas tus cambios a una rama remota.

Si intentas borrar un codespace con confirmaciones de git sin subir, tu editor te notificará sobre los cambios que tengas sin subir a una rama remota. Puedes subir todos los cambios que desees y luego borrar tu codespace o continuar borrando tu codespace y cualquier cambio sin confirmar. También puedes exportar tu código a una rama nueva sin crear un codespace nuevo. Para obtener más información, vea "[Exportación de cambios a una rama](/codespaces/troubleshooting/exporting-changes-to-a-branch)".

Se te cobrará por el almacenamiento de todos tus codespaces. Cuando borras un codespce, ya no se te cobrará por él.

Para obtener más información sobre cómo eliminar un codespace, vea "[Eliminación de un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)".

## Perder la conexión al utilizar Codespaces

{% data variables.product.prodname_codespaces %} es u ambiente de desarrollo basado en la nube y requiere de una conexión a internet. Si pierdes la conexióna internet mientras trabajas en un codespace, no podrás acceder a él. Sin embargo, cualquier cambio sin confirmar, se guardará. Cuando tengas acceso a una conexión de internet nuevamente, puedes conectarte a tu codespace exactamente en el mismo estado en el que lo dejaste. Si tienes una conexión de internet inestable, deberías confirmar y subir tus cambios frecuentemente.

Si sabe que a menudo estará trabajando sin conexión, puede usar el archivo `devcontainer.json` con la extensión ["{% data variables.product.prodname_vscode %} Remote - Containers"](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) a fin de compilarlo y adjuntarlo a un contenedor de desarrollo local para el repositorio. Para obtener más información, vea [Desarrollo dentro de un contenedor](https://code.visualstudio.com/docs/remote/containers) en la documentación de {% data variables.product.prodname_vscode %}.
