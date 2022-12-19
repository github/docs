---
ms.openlocfilehash: 99be41c3a31f1602c08160b3c552e2686820974d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145111545"
---
| Port | Servicio | Descripción                                                |
|------|---------|------------------------------------------------------------|
| 22   | SSH     | Git a través de acceso SSH. Se admite clonar, extraer y subir operaciones a repositorios privados/públicos. |
| 25   | SMTP    | SMTP con soporte de encriptación (STARTTLS). |
| 80   | HTTP    | Acceso a aplicación web. *Todas las solicitudes se redirigen al puerto HTTPS cuando se habilita SSL.* |
| 122  | SSH     | Acceso a shell de instancia. *El puerto SSH predeterminado (22) se dedica a la aplicación de Git y el tráfico de red SSH.* |
| 161/UDP | SNMP | Se requiere para operar el protocolo de revisión de red. |
| 443  | HTTPS   | Aplicación web y Git a través de acceso HTTPS. |
| 1194/UDP | VPN | Túnel de red de replicación segura en la configuración de alta disponibilidad. |
| 8080 | HTTP    | {% data variables.enterprise.management_console %} basada en la web de texto simple. *No es obligatorio a menos que SSL se deshabilite de forma manual.* |
| 8443 | HTTPS   | {% data variables.enterprise.management_console %} seguro basada en la web. *Necesario para la instalación y la configuración básicas.* |
| 9418 | Git     | Puerto simple de protocolo de Git. Únicamente clonar y extraer operaciones a repositorios públicos. *Comunicación de red sin cifrar.* {% data reusables.enterprise_installation.when-9418-necessary %}  |
