---
ms.openlocfilehash: 27ed9d55b8199298dc1cfdf8b4d3da925e08aa8d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145069452"
---
1. La imagen y arquitectura de tu sistema operativo para tu máquina del ejecutor auto-hospedado.
1. Verás instrucciones que te mostrarán cómo descargar la aplicación del ejecutor e instalarla en tu máquina de ejecutor autoalojado.

   Abre un shell en tu máquina de ejecutor autoalojado y ejecuta cada comando del shell en el orden que se muestra.

   {% note %}

   **Nota:** En Windows, si quiere instalar la aplicación de ejecutor autohospedado como un servicio, tendrá que abrir un shell con privilegios de administrador. También se recomienda usar `C:\actions-runner` como directorio para la aplicación del ejecuto autohospedado de modo que las cuentas del sistema de Windows puedan acceder al directorio del ejecutor.

   {% endnote %}

   Las instrucciones te guían para completar estas tareas:
   - Descargar y extraer la aplicación de ejecutor autoalojado.
   - Ejecutar el script `config` para configurar la aplicación de ejecutor autohospedado y registrarla con {% data variables.product.prodname_actions %}. El script `config` necesita la URL de destino y un token generado automáticamente de duración limitada para autenticar la solicitud.
     - En Windows, el script `config` también le pregunta si quiere instalar la aplicación de ejecutor autohospedado como un servicio. Para Linux y macOS, puedes instalar un servicio después de que termines de agregar el ejecutor. Para más información, vea "[Configuración de la aplicación de ejecutor autohospedado como servicio](/actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service)".
   - Ejecutar la aplicación del ejecutor autoalojado para conectar la máquina a las {% data variables.product.prodname_actions %}.
