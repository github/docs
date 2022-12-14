---
title: Resolver problemas de tu conexión a Codespaces
intro: Ayuda para resolver problemas para conectarse a {% data variables.product.prodname_codespaces %}.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Connection
ms.openlocfilehash: c551126781da972ad39c42aea3ac67b121fab301
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145092464"
---
## <a name="503-codespace-service-unavailable"></a>503 codespace service unavailable

Los codespaces están configurados para detenerse después de pasar 30 minutos sin actividad. Si intenta interactuar con un codespace después de que se haya detenido, es posible que vea un error `503 service unavailable`. 

- Si se muestra un botón **Iniciar** en {% data variables.product.prodname_vscode %} o en la ventana del explorador, haga clic en **Iniciar** para volver a conectarse al codespace.
- Restablece tu codespace volviendo a cargar la ventana. Desde la [paleta de comandos](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#accessing-the-command-palette) de {% data variables.product.prodname_vscode %}, haga clic en **Desarrollador: Volver a cargar ventana**.

## <a name="browser-cannot-connect"></a>El buscador no se puede conectar

Es posible que en ocasiones no puedas acceder a un codespace desde tu buscador. Si esto sucede, vaya a https://github.com/codespaces e intente conectarse al codespace desde esa página.

  - Si el codespce no se lista en esa página, verifica que seas el propietario del codespace al cual intentas conectarte. Solo puedes abrir un codespace que tú mismo hayas creado. Las URL de tus codespaces siempre incluyen tu manejo de {% data variables.product.company_short %}.
  - Si el codespace se enlista pero no puedes conectarte desde esa página, revisa si puedes conectarte utilizando un buscador diferente.

Tu red empresarial puede estar bloqueando la conección. De ser posible, revisa cualquier registro en bitácora para ver si hay conexiones rechazadas en tu dispositivo.

Si aún no puedes conectarte, {% data reusables.codespaces.contact-support %}

## <a name="-data-variablesproductprodname_github_codespaces--extension-for--data-variablesproductprodname_vscode--cannot-connect"></a>La extensión de {% data variables.product.prodname_github_codespaces %} para {% data variables.product.prodname_vscode %} no puede conectarse

Si no puedes conectarte a un codespace desde la versión de escritorio de {% data variables.product.prodname_vscode %}, utiliza los siguientes pasos de solución de problemas.

1. Verifica que tengas instalada la última versión de {% data variables.product.prodname_github_codespaces %}. La extensión es un lanzamiento de vista previa y se lanzan actualizaciones frecuentemente.
   1. En {% data variables.product.prodname_vscode %}, muestra la pestaña de "Extensiones".
   2. Selecciona la extensión de {% data variables.product.prodname_github_codespaces %} para mostrar la página de resumen de extensiones.
   3. Si hay una actualización disponible, se muestra un botón; haga clic en **Actualizar a X.X.X** para actualizar a la versión más reciente.
2. Compruebe si usa la compilación estable de {% data variables.product.prodname_vscode %} o la versión [{% data variables.product.prodname_vscode %} Insiders](https://code.visualstudio.com/insiders/) (actualizaciones nocturnas). Si usa la versión Insiders, pruebe a instalar la [compilación estable](https://code.visualstudio.com/).
3. Tu red empresarial puede estar bloqueando la conección. De ser posible, revisa cualquier registro en bitácora para ver si hay conexiones rechazadas en tu dispositivo.

Si aún no puedes conectarte, {% data reusables.codespaces.contact-support %}

### <a name="the-codespace-has-latency-issues"></a>El codespace tiene problemas de latencia

Si el codespace se ve particularmente lento o tiene problemas de latencia, es posible que se haya creado en una región lejos de ti. Para resolverlo, puede [establecer manualmente la región de {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces).
