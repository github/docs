---
ms.openlocfilehash: 9523f75cde4298a6e1cd4335127a1dfb5bb342b5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160092"
---
Cuando una aplicación que se ejecuta dentro de un codespace imprime la salida en el terminal que contiene una dirección URL de localhost, como `http://localhost:PORT` o `http://127.0.0.1:PORT`, el puerto se reenvía de forma automática. Si estás utilizando {% data variables.product.prodname_github_codespaces %} en el explorador o en {% data variables.product.prodname_vscode %}, la secuencia de URL en la terminal se convertirá en un vínculo en el que puedes hacer clic para ver la página web en tu máquina local. De manera predeterminada, {% data variables.product.prodname_github_codespaces %} reenvía los puertos mediante HTTP.

![Reenvío automático de puertos](/assets/images/help/codespaces/automatic-port-forwarding.png)

También puedes reenviar un puerto de forma manual, etiquetar los puertos reenviados, compartir los puertos reenviados con los miembros de tu organización, compartir los puertos reenviados de forma pública y agregar puertos reenviados a la configuración del codespace.

{% note %}

**Nota**: {% data reusables.codespaces.restrict-port-visibility %}

{% endnote %}

## Reenviar un puerto

Puedes reenviar manualmente a un puerto que no se haya reenviado automáticamente.