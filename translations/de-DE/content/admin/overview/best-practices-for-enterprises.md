---
title: Bewährte Methoden für Unternehmen
shortTitle: Best practices
intro: 'Lerne die von {% data variables.product.company_short %} empfohlenen Vorgehensweisen für dein Unternehmen kennen.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 9c9ccfb0437b451188f8180dcf5ae29a6030f72d
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163437'
---
{% ifversion ghec %}
## Identifizieren der besten Authentifizierungsmethode für dein Unternehmen

{% data reusables.enterprise.ghec-authentication-options %}

Hilfe beim Ermitteln der Authentifizierungsmethode, die deinen Anforderungen am besten entspricht, findest du unter [Informationen zur Authentifizierung für dein Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise). {% endif %}

## Verwenden von Richtlinien

Wir empfehlen die Verwendung von Richtlinien, um die Einhaltung von Geschäftsregeln und gesetzlicher Bestimmungen zu erzwingen. 

{% data reusables.enterprise.about-policies %} Weitere Informationen findest du unter [Informationen zu Unternehmensrichtlinien](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies).

## Minimieren der Anzahl von Organisationen

Große Unternehmen benötigen oft mehrere Organisationen, versuchen aber, deren Anzahl so gering wie möglich zu halten, um die Unternehmensbereiche auf höchster Ebene abzubilden. Eine kleinere Anzahl von Organisationen begünstigt Inner-Source-Praktiken und ermöglicht Diskussionen mit einem breiteren Publikum.

Stattdessen kannst du den Repositoryzugriff und die Sicherheitsanforderungen auf einer detaillierteren Ebene innerhalb jeder Organisation verwalten, indem du Teams einsetzt. Weitere Informationen findest du unter [Informationen zu Teams](/organizations/organizing-members-into-teams/about-teams).

## Vermeiden einer umfangreichen Zusammenarbeit in benutzereigenen Repositorys

Wir empfehlen, möglichst in organisationsinternen Repositorys zusammenzuarbeiten und die Zusammenarbeit in benutzereigenen Repositorys zu minimieren. Repositorys in Organisationsbesitz verfügen über ausgefeiltere Sicherheits- und Verwaltungsfunktionen und bleiben auch dann zugänglich, wenn sich die Unternehmensmitgliedschaft ändert.

## Verwenden von durch Menschen lesbaren Benutzernamen

{% ifversion ghec %}Wenn du die Benutzernamen für Unternehmensmitglieder kontrollierst, verwende{% else %}Verwende{% endif %} für Menschen lesbare Benutzernamen und vermeide maschinell generierte IDs, die für Menschen schwer zu lesen sind.

Du kannst die Anzeige von Benutzernamen innerhalb der privaten Repositorys deines Unternehmens verwalten. Weitere Informationen findest du unter [Verwalten der Anzeige von Mitgliedsnamen in deiner Organisation](/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization).

## Weiterführende Themen

- [Bewährte Methoden für Repositorys](/repositories/creating-and-managing-repositories/best-practices-for-repositories)
- [Bewährte Methoden für Organisationen](/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations)
