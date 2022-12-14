---
title: Verwalten der Abrechnung von Codespaces in deiner Organisation
shortTitle: Manage billing
intro: Du kannst deine {% data variables.product.prodname_codespaces %}-Nutzung überprüfen und Nutzungsgrenzwerte festlegen.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Billing
ms.openlocfilehash: a5cc1d61c560c534dc2bdf5a543097e49b336478
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145149724"
---
## <a name="overview"></a>Übersicht

Weitere Informationen zu den Preisen von {% data variables.product.prodname_codespaces %} findest du unter [Preise von {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing).

{% data reusables.codespaces.codespaces-billing %}

- Als Organisationsbesitzer*in oder Abrechnungsmanager*in kannst du die Abrechnung von {% data variables.product.prodname_codespaces %} für deine Organisation verwalten: [Informationen zur Abrechnung von Codespaces](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)

- Benutzer*innen steht ein Leitfaden zur Verfügung, in dem erläutert wird, wie die Abrechnung funktioniert: [Grundlegendes zur Abrechnung von Codespaces](/codespaces/codespaces-reference/understanding-billing-for-codespaces)

## <a name="usage-limits"></a>Usage limits (Nutzungseinschränkungen)

Du kannst ein Nutzungslimit für die Codespaces in deiner Organisation oder deinem Repository festlegen. Dieses Limit bezieht sich auf die Compute- und Speichernutzung von {% data variables.product.prodname_codespaces %}:
 
- **Computeminuten:** Die Computenutzung wird anhand der tatsächlichen Anzahl von Minuten berechnet, die von allen {% data variables.product.prodname_codespaces %}-Instanzen verbraucht wird, wenn sie aktiv sind. Diese Summen werden täglich an den Abrechnungsdienst gemeldet und monatlich berechnet. Du kannst ein Ausgabenlimit für die {% data variables.product.prodname_codespaces %}-Nutzung in deiner Organisation festlegen. Weitere Informationen findest du unter [Verwalten von Ausgabenlimits für Codespaces](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces).

- **Speichernutzung:** Zur Abrechnung von {% data variables.product.prodname_codespaces %} wird hier der von allen Codespaces in deinem Konto verwendete Speicher aufgeführt. Dazu gehört alles, was von den Codespaces genutzt wird, wie zum Beispiel geklonte Repositorys, Konfigurationsdateien, Erweiterungen und mehr. Diese Summen werden täglich an den Abrechnungsdienst gemeldet und monatlich berechnet. Am Ende jedes Monats rundet {% data variables.product.prodname_dotcom %} deine Speichernutzung auf das nächste MB. Unter [Anzeigen der Nutzung von Codespaces](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage) findest du Informationen dazu, wie du überprüfen kannst, wie viele Computeminuten und Speicher-GB von {% data variables.product.prodname_codespaces %} verbraucht wurden.

## <a name="disabling-or-limiting--data-variablesproductprodname_codespaces-"></a>Deaktivieren oder Einschränken von {% data variables.product.prodname_codespaces %}

Du kannst die Nutzung von {% data variables.product.prodname_codespaces %} in deiner Organisation oder deinem Repository deaktivieren. Weitere Informationen findest du unter [Verwalten des Repositoryzugriffs für die Codespaces deiner Organisation](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces).

Du kannst auch die Anzahl der Einzelbenutzer einschränken, die {% data variables.product.prodname_codespaces %} verwenden können. Weitere Informationen findest du unter [Verwalten von Benutzerberechtigungen für deine Organisation](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization).

Du kannst die Auswahl der Computertypen einschränken, die für Repositorys im Besitz deiner Organisation verfügbar sind. Dadurch kannst du verhindern, dass Personen übermäßig leistungsstarke Computer für ihre Codespaces verwenden. Weitere Informationen findest du unter [Einschränken des Zugriffs auf Computertypen](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types).

## <a name="deleting-unused-codespaces"></a>Löschen nicht verwendeter Codespaces

Deine Benutzer können ihre Codespaces in https://github.com/codespaces und innerhalb von {% data variables.product.prodname_vscode %} löschen. Um die Größe eines Codespaces zu verringern, können Benutzer Dateien manuell über das Terminal oder innerhalb von {% data variables.product.prodname_vscode_shortname %} löschen. 

{% note %}

**Hinweis:** Nur die Person, die einen Codespace erstellt hat, kann ihn löschen. Organisationsbesitzer*innen haben derzeit keine Möglichkeit, in ihrer Organisation erstellte Codepaces zu löschen.

{% endnote %}
