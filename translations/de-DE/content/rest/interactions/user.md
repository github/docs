---
title: Benutzerinteraktionen
shortTitle: User
allowTitleToDifferFromFilename: true
intro: 'Mit der Benutzerinteraktions-API kannst du vorübergehend einschränken, welche Benutzer*innen kommentieren, Issues öffnen oder Pull Requests in deinen öffentlichen Repositorys können.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: e61096e6f09a9c17608e67846c138142c527c314
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066898'
---
## Informationen zur Benutzerinteraktions-API

Mit der Benutzerinteraktions-API kannst du vorübergehend einschränken, welche Benutzer*innen kommentieren, Issues öffnen oder Pull Requests in deinen öffentlichen Repositorys können. {% data reusables.interactions.interactions-detail %} Hier findest du weitere Informationen zu den Typen von {% data variables.product.product_name %}-Benutzer*innen:

* {% data reusables.interactions.existing-user-limit-definition %} von der Interaktion mit deinen Repositorys.
* {% data reusables.interactions.contributor-user-limit-definition %} von der Interaktion mit deinen Repositorys.
* {% data reusables.interactions.collaborator-user-limit-definition %} von der Interaktion mit deinen Repositorys.

Durch Festlegen des Interaktionslimits auf Benutzerebene werden alle Interaktionsbeschränkungen überschrieben, die für einzelne Repositorys im Besitz des Benutzers bzw. der Benutzerin festgelegt sind. Verwende stattdessen die [Repositoryinteraktionsendpunkte](#repository), um unterschiedliche Interaktionsgrenzwerte für einzelne Repositorys festzulegen, die dem Benutzer bzw. der Benutzerin gehören.
