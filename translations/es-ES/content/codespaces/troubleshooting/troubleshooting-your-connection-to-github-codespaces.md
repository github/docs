---
title: Solución de problemas de la conexión a GitHub Codespaces
intro: 'Ayuda para resolver problemas para conectarse a {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Connection
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-your-connection-to-codespaces
ms.openlocfilehash: 75632e73b689ed7fe1df95027f6e5170136c7935
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160068'
---
## 503 codespace service unavailable

Los codespaces están configurados para detenerse después de pasar 30 minutos sin actividad. Si intenta interactuar con un codespace después de que se haya detenido, es posible que vea un error `503 service unavailable`. 

- Si se muestra un botón **Iniciar** en {% data variables.product.prodname_vscode %} o en la ventana del explorador, haga clic en **Iniciar** para volver a conectarse al codespace.
- Restablece tu codespace volviendo a cargar la ventana. Desde la [paleta de comandos](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#accessing-the-command-palette) de {% data variables.product.prodname_vscode %}, haz clic en **Desarrollador: Volver a cargar Windows**.

## El buscador no se puede conectar

Es posible que en ocasiones no puedas acceder a un codespace desde tu buscador. Si esto sucede, vaya a https://github.com/codespaces e intente conectarse al codespace desde esa página.

  - Si el codespce no se lista en esa página, verifica que seas el propietario del codespace al cual intentas conectarte. Solo puedes abrir un codespace que tú mismo hayas creado. Las URL de tus codespaces siempre incluyen tu manejo de {% data variables.product.company_short %}.
  - Si el codespace se enlista pero no puedes conectarte desde esa página, revisa si puedes conectarte utilizando un buscador diferente.

Tu red empresarial puede estar bloqueando la conección. De ser posible, revisa cualquier registro en bitácora para ver si hay conexiones rechazadas en tu dispositivo.

Si aún no puedes conectarte, {% data reusables.codespaces.contact-support %}

## No se puede conectar al codespace en JupyterLab

Para poder usar un codespace en JupyterLab, debes asegurarte de que el codespace lo tiene instalado. La imagen de contenedor predeterminada que usa {% data variables.product.prodname_github_codespaces %} incluye JupyterLab, pero si has personalizado la configuración del contenedor de desarrollo, tendrás que instalar manualmente JupyterLab.

Si el codespace usa una imagen basada en Debian, puedes instalar JupyterLab en el contenedor de desarrollo agregando la característica `python` al archivo `devcontainer.json`, con la opción `installJupyterlab` establecida en `true`. De lo contrario, instálalo directamente en el archivo Dockerfile. Para obtener instrucciones de instalación, consulta "[Instalación](https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html)" en la documentación de JupyterLab.

Para obtener más información sobre la característica `python`, consulta la página Léame en el [repositorio `devcontainers/features`](https://github.com/devcontainers/features/tree/main/src/python). Para obtener más información sobre el archivo `devcontainer.json` y el archivo Dockerfile, consulta "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)".

Si aún no puedes conectarte, {% data reusables.codespaces.contact-support %}

## La extensión de {% data variables.product.prodname_github_codespaces %} para {% data variables.product.prodname_vscode %} no puede conectarse

Si no puedes conectarte a un codespace desde la versión de escritorio de {% data variables.product.prodname_vscode %}, utiliza los siguientes pasos de solución de problemas.

1. Verifica que tengas instalada la última versión de {% data variables.product.prodname_github_codespaces %}. La extensión es un lanzamiento de vista previa y se lanzan actualizaciones frecuentemente.
   1. En {% data variables.product.prodname_vscode %}, muestra la pestaña de "Extensiones".
   2. Selecciona la extensión de {% data variables.product.prodname_github_codespaces %} para mostrar la página de resumen de extensiones.
   3. Si hay una actualización disponible, se muestra un botón; haga clic en **Actualizar a X.X.X** para actualizar a la versión más reciente.
2. Compruebe si usa la compilación estable de {% data variables.product.prodname_vscode %} o la versión [{% data variables.product.prodname_vscode %} Insiders](https://code.visualstudio.com/insiders/) (actualizaciones nocturnas). Si usa la versión Insiders, pruebe a instalar la [compilación estable](https://code.visualstudio.com/).
3. Tu red empresarial puede estar bloqueando la conección. De ser posible, revisa cualquier registro en bitácora para ver si hay conexiones rechazadas en tu dispositivo.

Si aún no puedes conectarte, {% data reusables.codespaces.contact-support %}

### El codespace tiene problemas de latencia

Si el codespace se ve particularmente lento o tiene problemas de latencia, es posible que se haya creado en una región lejos de ti. Para resolverlo, puede [establecer manualmente la región de {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces).
