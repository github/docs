---
title: Configuración de la eliminación automática de los codespaces
shortTitle: Configure automatic deletion
intro: "Los codespaces inactivos se eliminan automáticamente. Puedes elegir cuánto tiempo se conservan los codespaces detenidos, hasta un máximo de 30\_días."
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 5414d2223f490638f27475840a25883e9c353e77
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160307'
---
De forma predeterminada, los {% data variables.product.prodname_github_codespaces %} se eliminan automáticamente una vez que se hayan detenido y hayan permanecido inactivos durante 30 días.

Sin embargo, dado que {% data variables.product.prodname_github_codespaces %} incurre en cargos de almacenamiento, es posible que prefieras reducir el período de retención cambiando el período predeterminado en la configuración personal de {% data variables.product.prodname_github_codespaces %}. Para obtener más información sobre los cargos de almacenamiento, consulta "[Acerca de la facturación de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)".

{% note %}

**Nota**: Independientemente de si has establecido o no un período de retención de codespace personal, es una buena idea adquirir el hábito de eliminar codespaces que ya no necesite. Para más información, vea "[Eliminación de un codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)".

{% endnote %}

La eliminación automática se produce independientemente de si un codespace contiene cambios no subidos. Para evitar la eliminación automática de un codespace, simplemente abre el codespace de nuevo. El período de retención se restablece cada vez que te conectas a un codespace y la cuenta atrás de retención se reinicia cuando se detiene el codespace.

Si un repositorio pertenece a una organización, es posible que el administrador de la organización haya establecido un período de retención para toda la organización. Si este período es menor que el período de retención predeterminado en la configuración personal, el período de retención de la organización se aplicará a los codespaces que cree para este repositorio. Para obtener más información, consulta "[Restringir el período de retención para los codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)".

Cada codespace tiene su propio período de retención. Por lo tanto, puedes tener codespaces con diferentes periodos de retención. Por ejemplo, si:
* Has creado un codespace, has cambiado el período de retención predeterminado y, a continuación, has creado otro codespace.
* Has creado un codespace con {% data variables.product.prodname_cli %} y has especificado un período de retención diferente.
* Has creado un codespace a partir de un repositorio propiedad de la organización que tiene un período de retención configurado para la organización.

{% note %}

**Nota**: El período de retención se especifica en días. Un día representa un período de 24 horas, comenzando en la hora del día en que se detiene un codespace.

{% endnote %}

{% webui %}

## Establecimiento de un período de retención predeterminado para los codespaces

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. En "Período de retención predeterminado", escribe el número de días para los que deseas que se conserven los codespaces, de forma predeterminada, una vez detenidos. 

   ![Selección del período de retención](/assets/images/help/codespaces/setting-default-retention.png)

   Puedes establecer el período de retención predeterminado entre `0` y `30` días. 

   {% warning %}

   **Advertencia**: establecer el período en `0` dará lugar a que los codespaces se eliminen inmediatamente cuando los detengas, o cuando se haya agotado el tiempo de espera debido a la inactividad. Para obtener más información, consulta "[Establecimiento del período de tiempo de espera para {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)."

   {% endwarning %}
 
1. Haga clic en **Save**(Guardar).

Al crear un codespace con {% data variables.product.prodname_cli %}, puedes invalidar este valor predeterminado. Si creas un codespace en una organización que especifica un período de retención más corto, el valor de nivel de organización invalida la configuración personal.

Si estableces un período de retención de más de un día, se te enviará una notificación por correo electrónico un día antes de su eliminación. 

## Comprobación del tiempo restante hasta la eliminación automática

Puedes comprobar si un codespace se va a eliminar automáticamente en breve. 

Cuando un codespace inactivo se aproxima al final de su período de retención, se indica en la lista de codespaces en {% data variables.product.prodname_dotcom %} en [https://github.com/codespaces](https://github.com/codespaces).

![El mensaje previo a la eliminación en la lista de codespaces en {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/retention-deletion-message.png)

{% endwebui %}

{% cli %}

## Establecimiento de un período de retención para un codespace

Para establecer el período de tiempo del codespace, usa la marca `--retention-period` con el subcomando `codespace create`. Especifica el período en días. El período debe estar comprendido entre 0 y 30 días.

```shell
gh codespace create --retention-period DAYS
```

Si no especificas un período de retención al crear un codespace, se usará el período de retención predeterminado o un período de retención de la organización, dependiendo de cuál sea menor. Para obtener información sobre la configuración del periodo de retención predeterminado, haz clic en la pestaña "Explorador web" de esta página. 

{% data reusables.cli.cli-learn-more %}

{% endcli %}

{% vscode %}

## Configuración del período de retención

Puedes establecer el período de retención predeterminado en el explorador web, en {% data variables.product.prodname_dotcom_the_website %}. De manera alternativa, si usas {% data variables.product.prodname_cli %} para crear un codespace, puedes establecer un período de retención para ese codespace determinado. Para más información, haz clic en la pestaña correspondiente arriba.

## Comprobación de si los codespaces se eliminarán automáticamente pronto

Puede comprobar, en la aplicación de escritorio {% data variables.product.prodname_vscode %}, si un codespace se va a eliminar automáticamente pronto.

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Elige **{% data variables.product.prodname_github_codespaces %}** en el menú desplegable situado en la parte superior derecha del explorador remoto, si aún no está seleccionado.
1. En "GITHUB CODESPACES", coloca el puntero sobre el codespace que te interesa. Se muestra un cuadro emergente que informa sobre el codespace.

   Si el codespace está cerca del final de su período de retención, se incluye una línea que indica cuándo se eliminará el codespace.

   ![Información del codespace que muestra el tiempo hasta la eliminación](/assets/images/help/codespaces/vscode-deleting-in-5-days.png)

{% endvscode %}
