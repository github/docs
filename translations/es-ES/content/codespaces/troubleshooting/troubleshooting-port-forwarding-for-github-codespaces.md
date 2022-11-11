---
title: Solución de problemas de reenvío de puertos en GitHub Codespaces
intro: Pasos de solución de problemas para los problemas comunes del reenvío de puertos.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Port forwarding
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-port-forwarding-for-codespaces
ms.openlocfilehash: e6ce1be59f9154f8c192bab215e68dd3dfdc5b6c
ms.sourcegitcommit: 43a959b8faf78d9c5b3deadffa079d24cd11650b
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/04/2022
ms.locfileid: '148134765'
---
Cuando una aplicación que se ejecuta en un codespace genera un puerto para la consola, {% data variables.product.prodname_github_codespaces %} detecta el patrón de la dirección URL del host local y reenvía el puerto automáticamente. Para obtener más información, consulta "[Reenvío de puertos en el codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

Si un puerto no se reenvía automáticamente, puedes reenviarlo manualmente. Para obtener más información, consulta "[Reenvío de un puerto](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#forwarding-a-port)".

Si se configura el reenvío de puertos, verifica lo siguiente:

- Utiliza la alerta de notificación o haz clic en la URL de la Terminal para abrir el puerto reenviado. No funcionará teclear `localhost:8000` (como ejemplo) en tu equipo local si estás conectado al codespace a través del explorador.
- Asegúrate de verificar que tu aplicación aún se esté ejecutando desde dentro de tu codespace. Si tu codespace paró después de un periodo de inactividad, necesitarás garantizar que tu aplicación reinicie una vez que se reinició el codespace.

Normalmente, puedes hacer que un puerto reenviado sea accesible públicamente o dentro de la organización que posee un repositorio. Para obtener más información, consulta "[Reenvío de puertos en el codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)". Si las opciones de visibilidad pública o de la organización no están disponibles, esto indica que se ha configurado una directiva de nivel de organización. Para más información, vea "[Restricción de la visibilidad de los puertos reenviados](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)".

{% data reusables.codespaces.forwarded-ports-environment-variable %}
