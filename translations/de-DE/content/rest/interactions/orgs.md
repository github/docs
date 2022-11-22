---
title: Organisationsinteraktionen
shortTitle: Organization
intro: 'Mit der Organisationsinteraktions-API können Organisationsbesitzer*innen vorübergehend einschränken, welche Art von Benutzern in den öffentlichen Repositorys der Organisation Kommentare schreiben, Issues öffnen oder Pull Requests erstellen können.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: f06bfbe50c7fa43d03329d69bba8816e4559565a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062466'
---
## Informationen zur Organisationsinteraktions-API

Mit der Organisationsinteraktions-API können Organisationsbesitzer*innen vorübergehend einschränken, welche Art von Benutzern in den öffentlichen Repositorys der Organisation Kommentare schreiben, Issues öffnen oder Pull Requests erstellen können. {% data reusables.interactions.interactions-detail %} Hier findest du weitere Informationen zu den Typen von {% data variables.product.product_name %}-Benutzern:

* {% data reusables.interactions.existing-user-limit-definition %} in der Organisation.
* {% data reusables.interactions.contributor-user-limit-definition %} in der Organisation.
* {% data reusables.interactions.collaborator-user-limit-definition %} in der Organisation.

Durch Festlegen des Interaktionslimits auf Organisationsebene werden alle Interaktionsbeschränkungen überschrieben, die für einzelne Repositorys im Besitz der Organisation festgelegt sind. Verwende stattdessen die [Repositoryinteraktionsendpunkte](#repository), um unterschiedliche Interaktionslimits für einzelne Repositorys festzulegen, die der Organisation gehören.
