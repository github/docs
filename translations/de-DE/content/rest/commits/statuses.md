---
title: Commitstatus
intro: 'Die Commitstatus-API ermöglicht externen Diensten das Markieren von Commits mit einem Status, der dann in Pull Requests mit diesen Commits widergespiegelt wird.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 4c75b4817ecddad0e91460d7d12eddabc634d588
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882295'
---
## Informationen zur Commitstatus-API

Die Commitstatus-API ermöglicht externen Diensten das Markieren von Commits mit einem `error`-, `failure`-, `pending`- oder `success`-Status, der dann in Pull Requests mit diesen Commits widergespiegelt wird. Statuswerte können auch eine optionale `description` und `target_url` enthalten, und es wird dringend empfohlen, sie bereitzustellen, weil dadurch die Statuswerte auf der GitHub-Benutzeroberfläche viel zweckmäßiger sind.

Ein Beispiel für die Verwendung ist für Continuous Integration-Dienste, um Commits als Builds mit dem Status „Übergeben“ oder „Fehler“ zu kennzeichnen.  `target_url` wäre hier die vollständige URL für die Buildausgabe, und `description` wäre die allgemeine Zusammenfassung der Ereignisse mit dem Build.

Statuswerte können `context` einschließen, um anzugeben, welcher Dienst diesen Status bereitstellt. Als Beispiel können die Pushstatuswerte deines Continuous Integration-Diensts den Kontext `ci` und die Pushstatuswerte deines Sicherheitsüberwachungstools den Kontext `security` besitzen.  Anschließend kannst du den [kombinierten Status für einen bestimmten Verweis abrufen](/rest/reference/commits#get-the-combined-status-for-a-specific-reference), um den gesamten Status eines Commits zu erhalten.

Beachte, dass der `repo:status`-[OAuth-Bereich](/developers/apps/scopes-for-oauth-apps) gezielten Zugriff auf Statuswerte ermöglicht, **ohne** zusätzlich Zugriff auf den Repositorycode zu gewähren. Der `repo`-Bereich gewährt wiederum Berechtigungen für Code sowie für Statuswerte.

Wenn du eine GitHub-App entwickelst und weitere detaillierte Informationen zu einem externen Dienst bereitstellen möchtest, solltest du die [Überprüfungen-API](/rest/reference/checks) verwenden.
