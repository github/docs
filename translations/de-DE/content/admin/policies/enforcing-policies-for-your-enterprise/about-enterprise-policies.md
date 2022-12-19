---
title: Informationen zu Unternehmensrichtlinien
intro: Mit Unternehmensrichtlinien kannst du die Richtlinien für alle Organisationen im Besitz deines Unternehmens verwalten.
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Policies
ms.openlocfilehash: d452a6f24b3108b915e20b673ebd317a409ac8ae
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718117'
---
Um Geschäftsregeln und Einhaltung gesetzlicher Bestimmungen zu erzwingen, bieten Richtlinien einen einzigen Verwaltungspunkt für alle Organisationen im Besitz eines Unternehmenskontos. 

{% data reusables.enterprise.about-policies %}

Mit der Richtlinie „Basisberechtigungen“ kannst du beispielsweise Organisationsbesitzern die Konfiguration der Richtlinie „Basisberechtigungen“ für ihre Organisation ermöglichen, oder du kannst eine bestimmte Basisberechtigungsstufe wie „Lesen“ für alle Organisationen innerhalb des Unternehmens erzwingen.

Standardmäßig werden keine Unternehmensrichtlinien erzwungen. Um Richtlinien zu identifizieren, die erzwungen werden sollten, um die individuellen Anforderungen deines Unternehmens zu erfüllen, solltest du beginnend mit Richtlinien zur Repositoryverwaltung alle verfügbaren Richtlinien in deinem Unternehmenskonto überprüfen. Weitere Informationen findest du unter [Erzwingen von Richtlinien zur Repositoryverwaltung in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise).

Um die Auswirkungen der Änderung einzelner Richtlinien zu verstehen, kannst du während der Konfiguration von Unternehmensrichtlinien die aktuellen Konfigurationen für die Organisationen im Besitz deines Unternehmens anzeigen.

{% ifversion ghes %} Eine weitere Möglichkeit, Standards in deinem Unternehmen zu erzwingen, ist die Verwendung von Pre-Receive-Hooks, d. h. Skripts, die auf {% data variables.product.product_location %} ausgeführt werden, um Qualitätsprüfungen zu implementieren. Weitere Informationen findest du unter [Erzwingen einer Richtlinie mit Pre-Receive-Hooks](/admin/policies/enforcing-policy-with-pre-receive-hooks).
{% endif %}

## Weitere Informationsquellen

- [Informationen zu Unternehmenskonten](/admin/overview/about-enterprise-accounts)
