---
ms.openlocfilehash: 99be41c3a31f1602c08160b3c552e2686820974d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145102366"
---
| Port | Service | Description                                                |
|------|---------|------------------------------------------------------------|
| 22   | SSH     | Accès Git via SSH Opérations de clonage, de récupération (fetch) et d’envoi (push) sur les référentiels publics et privés pris en charge. |
| 25   | SMTP    | Prise en charge de SMTP avec chiffrement (STARTTLS). |
| 80   | HTTP    | Accès aux applications web. *Toutes les requêtes sont redirigées vers le port HTTPS lorsque SSL est activé.* |
| 122  | SSH     | Accès à l’interpréteur de commandes de l’instance. *Le port SSH par défaut (22) est dédié au trafic réseau des applications Git et SSH.* |
| 161/UDP | SNMP | Nécessaire au fonctionnement du protocole de supervision de réseau. |
| 443  | HTTPS   | Accès aux applications web et à Git via HTTPS. |
| 1194/UDP | VPN | Tunnel de réseau de réplication sécurisé dans une configuration à haute disponibilité. |
| 8080 | HTTP    | {% data variables.enterprise.management_console %} web en texte brut. *Non obligatoire, sauf si SSL est désactivé manuellement.* |
| 8443 | HTTPS   | {% data variables.enterprise.management_console %} web sécurisée. *Requis pour l’installation et la configuration de base.* |
| 9418 | Git     | Port du protocole Git simple. Opérations de clonage et de récupération (fetch) sur référentiels publics uniquement. *Communication réseau non chiffrée.* {% data reusables.enterprise_installation.when-9418-necessary %}  |
