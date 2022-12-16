---
title: Einladungen zu Repositorys
allowTitleToDifferFromFilename: true
shortTitle: Invitations
intro: 'Mit der API für Einladungen zu Repositorys kannst du Einladungen anzeigen und verwalten, um an einem Repository zusammenzuarbeiten.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 8096f49ce586f3f56a686b99a688a6894653d9b4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065794'
---
## Informationen zur API für Einladungen zu Repositorys

Mit der API für Einladungen zu Repositorys kannst du Einladungen anzeigen und verwalten, um an einem Repository zusammenzuarbeiten. Die eingeladenen Benutzer*innen (oder externe Dienste im Namen eingeladener Benutzer*innen) können sich entscheiden, die Einladungen anzunehmen oder abzulehnen.

Um eine*n Benutzer*in als Projektmitarbeiter*in hinzuzufügen, verwende stattdessen die Projektmitarbeiter-API. Weitere Informationen findest du unter [Hinzufügen eines Projektmitarbeiters zu einem Repository](/rest/collaborators/collaborators#add-a-repository-collaborator).

Beachte, dass der `repo:invite`-[OAuth-Bereich](/developers/apps/scopes-for-oauth-apps) gezielten Zugriff auf Einladungen ermöglicht, **ohne** zusätzlich Zugriff auf den Repositorycode zu gewähren. Der `repo`-Bereich gewährt wiederum Berechtigungen für Code sowie für Einladungen.
