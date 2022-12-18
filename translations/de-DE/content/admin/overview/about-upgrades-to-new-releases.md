---
title: Informationen zu Upgrades auf neue Releases
shortTitle: About upgrades
intro: '{% ifversion ghae %}Dein Unternehmen auf {% data variables.product.product_name %} wird von {% data variables.product.company_short %} regelmäßig mit den neuesten Features und Fehlerkorrekturen aktualisiert.{% else %}Du kannst von neuen Features und Fehlerkorrekturen für {% data variables.product.product_name %} profitieren, indem du für dein Unternehmen ein Upgrade auf eine neu veröffentlichte Version durchführst.{% endif %}'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Upgrades
ms.openlocfilehash: b3a2d340ef73ffe92f2117caf38a84e76ba0c8d1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108318'
---
{% data reusables.enterprise.constantly-improving %}{% ifversion ghae %}{% data variables.product.prodname_ghe_managed %} ist ein vollständig verwalteter Dienst, sodass {% data variables.product.company_short %} den Upgradeprozess für dein Unternehmen abschließt.{% endif %}

Featurereleases umfassen neue Funktionen und Featureupgrades und werden in der Regel vierteljährlich veröffentlicht. {% ifversion ghae %}{% data variables.product.company_short %} aktualisiert dein Unternehmen auf das neueste Featurerelease. Du erhältst eine Vorabbenachrichtigung über alle geplanten Ausfallzeiten für dein Unternehmen.{% endif %}

{% ifversion ghes %}

Ab {% data variables.product.prodname_ghe_server %} 3.0 beginnen alle Featurereleases mit mindestens einem Release Candidate. Release Candidates sind vorgeschlagene Featurereleases mit einem vollständigen Featuresatz. Ein Release Candidate kann Fehler oder Probleme enthalten, die nur durch das Feedback von Kunden gefunden werden können, die {% data variables.product.product_name %} tatsächlich verwenden. 

Du kannst die neuesten Funktionen frühzeitig nutzen, indem du einen Release Candidate testest, sobald dieser verfügbar ist. Du kannst ein Upgrade auf einen Release Candidate aus einer unterstützten Version durchführen und von dem Release Candidate auf spätere Versionen aktualisieren, wenn sie veröffentlicht werden. Sobald die neue Version allgemein verfügbar ist, solltest du alle Umgebungen, in denen ein Release Candidate ausgeführt wird, aktualisieren. Weitere Informationen findest du unter [Upgradeanforderungen](/admin/enterprise-management/upgrade-requirements).

Release Candidates sollten in Test- oder Stagingumgebungen bereitgestellt werden. Wenn du einen Release Candidate testest, richten dein Feedback bitte an den Support. Weitere Informationen findest du unter [Arbeiten mit {% data variables.contact.github_support %}](/admin/enterprise-support).

Wir verwenden dein Feedback, um Fehlerkorrekturen und andere erforderliche Änderungen für ein stabiles Produktionsrelease anzuwenden. Jeder neue Release Candidate fügt Fehlerkorrekturen für Probleme hinzu, die in früheren Versionen gefunden wurden. Wenn die Release für die allgemeine Einführung bereit ist, veröffentlicht {% data variables.product.company_short %} eine stabile Produktionsrelease.

{% endif %}

{% warning %}

**Warnung:** Das Upgrade auf ein neues Featurerelease führt zu einigen Stunden Downtime, während denen keine deiner Benutzer*innen das Unternehmen verwenden können. Du kannst Benutzer über Ausfallzeiten informieren, indem du ein globales Ankündigungsbanner mithilfe deiner Unternehmenseinstellungen oder der REST-API veröffentlichst. Weitere Informationen findest du unter [Anpassen von Benutzernachrichten in deiner Instanz](/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner) und [{% data variables.product.prodname_enterprise %}-Administration](/rest/reference/enterprise-admin#announcements).

{% endwarning %}

{% ifversion ghes %}

Patchreleases, die nur aus Hotpatches und Bugfixes bestehen, werden häufiger veröffentlicht. Patchreleases sind allgemein verfügbar, wenn sie zuerst, d. h. ohne Release Candidates, veröffentlicht werden. Das Upgrade auf eine Patchrelease dauert in der Regel weniger als fünf Minuten.

Informationen zum Upgrade deines Unternehmens auf eine neue Release findest du unter [Versionshinweise](/enterprise-server/admin/release-notes) und [Upgrade von {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server). Da du nur ein Upgrade von einem Featurerelease durchführen kannst, die maximal zwei Releases älter ist, verwende den [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade), um den Upgradepfad deiner aktuellen Releaseversion zu finden.

{% endif %}

## Weitere Informationsquellen

- [ {% data variables.product.prodname_roadmap %} ]( {% data variables.product.prodname_roadmap_link %} ) im `github/roadmap`-Repository{% ifversion ghae %}
- [Versionshinweise zu {% data variables.product.prodname_ghe_managed %}](/admin/release-notes) {% endif %}
