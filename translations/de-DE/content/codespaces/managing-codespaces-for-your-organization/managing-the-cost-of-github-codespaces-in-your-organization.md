---
title: Verwalten der Kosten von GitHub Codespaces in deiner Organisation
shortTitle: Manage Codespaces costs
intro: 'Du kannst deine Nutzung von {% data variables.product.prodname_github_codespaces %} überprüfen und Nutzungsgrenzen festlegen.'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Billing
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization
ms.openlocfilehash: f11c6e22fa8a233fd4429b91390d25471ad17e6d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158709'
---
## Übersicht

Die Abrechnung für deine Organisation basiert auf ihrer Compute- und Speichernutzung für {% data variables.product.prodname_github_codespaces %}. In diesem Artikel erfährst du, wie du als Organisationsbesitzer diese Kosten verwalten kannst.

Preisinformationen für {% data variables.product.prodname_github_codespaces %} findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing).

## Ausgabenlimits

Du kannst ein Ausgabenlimit für die {% data variables.product.prodname_github_codespaces %} in deiner Organisation festlegen. Dieses Limit wird auf die Compute- und Speicherkosten für {% data variables.product.prodname_github_codespaces %} angewendet. Weitere Informationen findest du unter [Verwalten von Ausgabenlimits für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces).
 
- **Computenutzung:** Dies ist die Gesamtdauer, für die alle {% data variables.product.prodname_github_codespaces %}-Instanzen (Codespaces) in einem Abrechnungsmonat aktiv waren. 

- **Speichernutzung:** Für die Abrechnung von {% data variables.product.prodname_github_codespaces %} schließt dies alle Dateien ein, die von allen Codespaces und Prebuilds in deinem Konto verwendet werden. Dazu gehören Ressourcen wie zum Beispiel geklonte Repositorys, Konfigurationsdateien, Erweiterungen und mehr. 

Du kannst die Compute- und Speichernutzung für {% data variables.product.prodname_github_codespaces %} für den aktuellen Abrechnungsmonat überprüfen. Entsprechende Informationen findest du unter [Anzeigen deiner {% data variables.product.prodname_github_codespaces %}-Nutzung](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage).

{% note %}

**Hinweis:** Prebuilds für {% data variables.product.prodname_github_codespaces %} werden mithilfe von {% data variables.product.prodname_actions %} erstellt und aktualisiert. Dadurch können Kosten für {% data variables.product.prodname_actions %} entstehen. Du kannst ein Ausgabenlimit für {% data variables.product.prodname_actions %} festlegen. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds) sowie unter [Dein Ausgabenlimit für {% data variables.product.prodname_actions %} verwalten](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions). Die Speicherung der generierten Prebuilds wird zum gleichen Preis abgerechnet wie deine Codespaces und ist in deinem {% data variables.product.prodname_github_codespaces %}-Ausgabenlimit enthalten.

{% endnote %}

## Deaktivieren oder Einschränken von {% data variables.product.prodname_codespaces %}

Du kannst die gesamte Nutzung von {% data variables.product.prodname_github_codespaces %} deaktivieren, die deiner Organisation in Rechnung gestellt werden würde. Alternativ kannst du angeben, welche Organisationsmitglieder oder Mitarbeiter {% data variables.product.prodname_codespaces %} auf Kosten deiner Organisation verwenden können. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_github_codespaces %} für deine Organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization).

{% data reusables.codespaces.codespaces-disabling-org-billing %}

Du kannst konfigurieren, auf welche Repositorys von Codespaces aus zugegriffen werden kann, die für ein bestimmtes Repository erstellt wurden. Weitere Informationen findest du unter [Verwalten des Zugriffs auf andere Repositorys innerhalb deines Codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces).

Du kannst die Auswahl der Computertypen einschränken, die für Codespaces verfügbar sind, die aus Repositorys im Besitz deiner Organisation erstellt wurden. Dadurch kannst du verhindern, dass Personen übermäßig leistungsstarke Computer für ihre Codespaces verwenden und unnötige Kosten verursachen. Weitere Informationen findest du unter [Einschränken des Zugriffs auf Computertypen](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types).

Du kannst ein maximales Leerlauftimeout festlegen, um das maximale Timeout zu begrenzen, das Benutzer für Codespaces festlegen können, die deiner Organisation in Rechnung gestellt werden können. Dadurch lassen sich die Gebühren für die Computenutzung durch Codespaces im Leerlauf verringern, da aktive Codespaces nach einem kürzeren Timeoutzeitraum beendet werden. Weitere Informationen findest du unter [Einschränken des Zeitraums für Leerlauftimeouts](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period).

Du kannst auch einschränken, wie lange beendete Codespaces ungenutzt bleiben können, bevor sie automatisch gelöscht werden. Dies kann dazu beitragen, die Speicherkosten für {% data variables.product.prodname_codespaces %} zu verringern. Weitere Informationen findest du unter [Einschränken des Aufbewahrungszeitraums für Codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces).

Repositorybesitzer, die Prebuilds für ihr Repository einrichten, können die Speicherkosten von Prebuilds verringern, indem sie diese so konfigurieren, dass sie nur in ausgewählten Regionen erstellt werden. Weitere Informationen findest du unter [Konfigurieren von Prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds).

## Löschen nicht verwendeter Codespaces

Deine Benutzer können ihre eigenen Codespaces in https://github.com/codespaces und innerhalb von {% data variables.product.prodname_vscode %} löschen. Um die Größe eines Codespaces zu verringern, können Benutzer Dateien manuell über das Terminal oder innerhalb von {% data variables.product.prodname_vscode_shortname %} löschen. 

Als Organisationsinhaber*in kannst du alle Codespaces in deiner Organisation löschen. Weitere Informationen findest du unter [Löschen eines Codespace](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization).

{% note %}

**Hinweis:** Codespaces werden automatisch gelöscht, nachdem sie beendet wurden und für eine bestimmte Anzahl von Tagen inaktiv geblieben sind. Weitere Informationen findest du unter [Konfigurieren des automatischen Löschens deiner Codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces). Als Organisationsbesitzer kannst du einen maximalen Aufbewahrungszeitraum für Codespaces festlegen, die deiner Organisation gehören. Dadurch wird die persönliche Aufbewahrungseinstellung von Benutzern außer Kraft gesetzt. Weitere Informationen findest du unter [Einschränken des Aufbewahrungszeitraums für Codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces).

{% endnote %}

## Weitere Informationsquellen

- [Auflisten der Codespaces in deiner Organisation](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)
