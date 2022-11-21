---
title: Entfernen von Organisationen aus deinem Unternehmen
intro: 'Wenn eine Organisation nicht mehr Teil deines Unternehmens sein sollte, kannst du die Organisation entfernen.'
permissions: Enterprise owners can remove any organization from their enterprise.
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
shortTitle: Removing organizations
ms.openlocfilehash: 8645e8f6d424ee8a02ae5d414e9901173df460aa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145104163'
---
{% warning %}

**Warnung**: Wenn du eine Organisation aus deinem Unternehmen entfernst, passiert Folgendes:
- Abrechnung, Identitätsverwaltung, Vorgaben für die zweistufige Authentifizierung und andere Richtlinien für die Organisation werden nicht mehr von deinem Unternehmen gesteuert.
- Die Organisation wird auf den Free-Tarif herabgestuft.
- Für die Organisation gelten unsere Standardvertragsbedingungen.
- Alle ggf. vorhandenen internen Repositorys innerhalb der Organisation werden in private Repositorys konvertiert.

{% endwarning %}

## Entfernen einer Organisation aus deinem Unternehmen

{% data reusables.enterprise-accounts.access-enterprise %}
2. Beginne unter „Organisationen“ auf der Suchleiste mit der Eingabe des Namens der gewünschten Organisation, bis die Organisation in den Suchergebnissen angezeigt wird.
![Screenshot: Suchfeld für Organisationen](/assets/images/help/enterprises/organization-search.png)
3. Wähle rechts neben dem Namen der Organisation das Dropdownmenü {% octicon "gear" aria-label="The gear icon" %} aus, und klicke auf **Organisation entfernen**.
![Screenshot: Organisation in den Suchergebnissen](/assets/images/help/enterprises/remove-organization.png)
4. Überprüfe die Warnungen, und klicke anschließend auf **Organisation entfernen**.
![Screenshot: Warnmeldung und Schaltfläche zum Entfernen der Organisation](/assets/images/help/enterprises/remove-organization-warning.png)
