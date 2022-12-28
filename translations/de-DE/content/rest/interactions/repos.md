---
title: Repositoryinteraktionen
shortTitle: Repository
intro: 'Mit der Repositoryinteraktions-API können Personen mit Besitzer- oder Administratorzugriff vorübergehend einschränken, welcher Benutzertyp in einem öffentlichen Repository Kommentare abgeben, Issues öffnen oder Pull Requests erstellen darf.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e1d7d0137ddc2334bb08e17a0c8d7069c13d982d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147064666'
---
## Informationen zur Repositoryinteraktions-API

Mit der Repositoryinteraktions-API können Personen mit Besitzer- oder Administratorzugriff vorübergehend einschränken, welcher Benutzertyp in einem öffentlichen Repository Kommentare abgeben, Issues öffnen oder Pull Requests erstellen darf. {% data reusables.interactions.interactions-detail %} Hier findest du weitere Informationen zu den Typen von {% data variables.product.product_name %}-Benutzern:

* {% data reusables.interactions.existing-user-limit-definition %} im Repository.
* {% data reusables.interactions.contributor-user-limit-definition %} im Repository.
* {% data reusables.interactions.collaborator-user-limit-definition %} im Repository.

Wenn ein Interaktionsgrenzwert für den Benutzer oder die Organisation, die Besitzer des Repositorys ist, aktiviert ist, kann der Grenzwert für das einzelne Repository nicht geändert werden. Verwende stattdessen die Interaktionsendpunkte [Benutzer](#user) oder [Organisation](#organization), um den Interaktionsgrenzwert zu ändern.
