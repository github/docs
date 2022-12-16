---
ms.openlocfilehash: 7de065c9dec15e3b92cabf5d3fa711c7d88249ba
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "147882787"
---
- [Mindestanforderungen](#minimum-requirements)
- [Storage](#storage)
- [CPU und Arbeitsspeicher](#cpu-and-memory)

### Mindestanforderungen

Wir empfehlen verschiedene Hardwarekonfigurationen basierend auf der Anzahl der Benutzerlizenzen für {% data variables.product.product_location %}. Wenn du mehr Ressourcen als die Mindestanforderungen bereitstellst, werden dadurch die Leistung und die Skalierung deiner Instanz verbessert.

{% data reusables.enterprise_installation.hardware-rec-table %}

{% data reusables.actions.more-resources-for-ghes %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

### Storage

Wir empfehlen ein Hochleistungs-SSD mit hoher Eingabe-/Ausgaberate pro Sekunde (IOPS) und niedriger Latenz für {% data variables.product.prodname_ghe_server %}. Workloads sind E/A-intensiv. Wenn du einen Bare-Metal-Hypervisor verwendest, empfehlen wir, den Datenträger direkt anzufügen oder einen Datenträger aus einem Storage Area Network (SAN) zu verwenden.

Deine Instanz erfordert einen beständigen Datenträger, der vom Stammdatenträger getrennt ist. Weitere Informationen findest du unter [Systemübersicht](/enterprise/admin/guides/installation/system-overview).

{% ifversion ghes %}

Zum Konfigurieren von {% data variables.product.prodname_actions %} musst du externen Blobspeicher bereitstellen. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_actions %} für {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server##external-storage-requirements).

{% endif %}

Der verfügbare Speicherplatz im Stammdateisystem beträgt 50 % der Gesamtdatenträgergröße. Du kannst die Größe des Stammdatenträgers deiner Instanz ändern, indem du eine neue Instanz erstellst oder eine vorhandene Instanz verwendest. Weitere Informationen findest du unter [Systemübersicht](/enterprise/admin/guides/installation/system-overview#storage-architecture) und unter [Erhöhen der Speicherplatzkapazität](/enterprise/admin/guides/installation/increasing-storage-capacity).

### CPU und Arbeitsspeicher

Die für {% data variables.product.prodname_ghe_server %} erforderlichen CPU- und Arbeitsspeicherressourcen hängen vom Aktivitätsgrad für Benutzer, Automatisierungen und Integrationen ab.

{% ifversion ghes %}

Wenn du beabsichtigst, {% data variables.product.prodname_actions %} für die Benutzer deiner {% data variables.product.prodname_ghe_server %}-Instanz zu aktivieren, musst du möglicherweise zusätzliche CPU- und Arbeitsspeicherressourcen für deine Instanz bereitstellen. Weitere Informationen findest du unter [Erste Schritte mit {% data variables.product.prodname_actions %} für {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations).

{% endif %}

{% data reusables.enterprise_installation.increasing-cpus-req %}

{% warning %}

**Warnung**: Benutzern wird empfohlen, Webhookereignisse zu konfigurieren, um externe Systeme über Aktivität auf {% data variables.product.prodname_ghe_server %} zu benachrichtigen. Automatisierte Überprüfungen auf Änderungen, oder auch _Abrufe_, wirken sich negativ auf die Leistung und Skalierbarkeit deiner Instanz aus. Weitere Informationen findest du unter [Informationen zu Webhooks](/github/extending-github/about-webhooks).

{% endwarning %}

Weitere Informationen zur Überwachung der Kapazität und Leistung von {% data variables.product.prodname_ghe_server %} findest du unter [Überwachen deiner Appliance](/admin/enterprise-management/monitoring-your-appliance).

Du kannst die CPU- oder Arbeitsspeicherressourcen deiner Instanz erhöhen. Weitere Informationen findest du unter [Erhöhen von CPU- oder Arbeitsspeicherressourcen](/enterprise/admin/installation/increasing-cpu-or-memory-resources).
