---
ms.openlocfilehash: faf2e19d40e921c1a3d1b6cff91aaf3e4dd2b97b
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145102315"
---
{% ifversion ghes < 3.2 %}

### <a name="about-minimum-requirements-for--data-variablesproductprodname_ghe_server--30-and-later"></a>Informationen zu den Mindestanforderungen für {% data variables.product.prodname_ghe_server %} 3.0 und höher

Überprüfe vor einem Upgrade von {% data variables.product.prodname_ghe_server %} 3.0 oder höher die Hardwareressourcen, die du für deine Instanz bereitgestellt hast. In {% data variables.product.prodname_ghe_server %} 3.0 werden neue Features wie {% data variables.product.prodname_actions %} und {% data variables.product.prodname_registry %} eingeführt, und diese Version erfordert mehr Ressourcen als Version 2.22 und niedriger. Weitere Informationen findest du in den [Versionshinweisen zu {% data variables.product.prodname_ghe_server %} 3.0](/enterprise-server@3.0/admin/release-notes).

Die höheren Anforderungen für {% data variables.product.prodname_ghe_server %} 3.0 und höher sind in der folgenden Tabelle **fett** formatiert.

| Benutzerlizenzen | vCPUs | Arbeitsspeicher | Angeschlossener Speicher | Stammspeicher |
| :- | -: | -: | -: | -: |
| Test, Demo oder 10 Benutzer mit eingeschränkten Funktionen | **4**<br/>_Erhöht von 2_ | **32 GB**<br/>_Erhöht von 16 GB_ | **150 GB**<br/>_Erhöht von 100 GB_ | 200 GB |
| 10–3000  | **8**<br/>_Erhöht von 4_ | **48 GB**<br/>_Erhöht von 32 GB_ | **300 GB**<br/>_Erhöht von 250 GB_ | 200 GB |
| 3000–5000 | **12**<br/>_Erhöht von 8_ | 64 GB | 500 GB | 200 GB |
| 5000–8000 | **16**<br/>_Erhöht von 12_ | 96 GB | 750 GB | 200 GB |
| 8000–10000+ | **20**<br/>_Erhöht von 16_ | **160 GB**<br/>_Erhöht von 128 GB_ | 1000 GB | 200 GB |

{% ifversion ghes %}

Weitere Informationen zu den Hardwareanforderungen für {% data variables.product.prodname_actions %} findest du unter [Erste Schritte mit {% data variables.product.prodname_actions %} für {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations).

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% endif %}
