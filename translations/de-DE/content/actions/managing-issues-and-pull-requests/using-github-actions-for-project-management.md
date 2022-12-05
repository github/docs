---
title: Verwenden von GitHub Actions für die Projektverwaltung
intro: 'Du kannst mit {% data variables.product.prodname_actions %} viele deiner Projektmanagementaufgaben automatisieren.'
redirect_from:
  - /actions/guides/using-github-actions-for-project-management
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Project management
shortTitle: Actions for project management
ms.openlocfilehash: 5f5d1cb222824bbb451ad603e35b4986384645e4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145105019'
---
Du kannst {% data variables.product.prodname_actions %} verwenden, um deine Projektmanagementaufgaben durch Erstellen von Workflows zu automatisieren. Jeder Workflow enthält eine Reihe von Aufgaben, die bei jeder Ausführung des Workflows automatisch ausgeführt werden. Du kannst beispielsweise einen Workflow erstellen, der jedesmal ausgeführt wird, wenn ein Issue erstellt wird, um eine Bezeichnung hinzuzufügen, einen Kommentar zu hinterlassen und das Issue auf ein Projektboard zu verschieben.

## Wann werden Workflows ausgeführt?

Du kannst deine Workflows so konfigurieren, dass sie nach einem Zeitplan ausgeführt oder bei einem Ereignis ausgelöst werden. Du kannst deinen Workflow beispielsweise so festlegen, dass er ausgeführt wird, wenn jemand ein Issue in einem Repository erstellt.

Viele Workflowtrigger sind nützlich für die Automatisierung der Projektverwaltung.

- Ein Issue wird geöffnet, zugewiesen oder gekennzeichnet.
- Einem Issue wird ein Kommentar hinzugefügt.
- Eine Projektkarte wird erstellt oder verschoben.
- Eine geplante Uhrzeit.

Eine vollständige Liste der Ereignisse, die Workflows auslösen können, findest du unter [Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows).

## Welche Aktionen können von Workflows ausgeführt werden?

Mit Workflows lassen sich viele Aktionen ausführen, z. B. Hinzufügen von Kommentaren zu einem Issue, Hinzufügen oder Entfernen von Bezeichnungen, Verschieben von Karten auf Projektboards und Öffnen von Issues.

In den folgenden Tutorials erfährst du, wie du {% data variables.product.prodname_actions %} für die Projektverwaltung verwendest. Die Tutorials enthalten Beispielworkflows, die du an deine Anforderungen anpassen kannst.

- [Hinzufügen von Bezeichnungen zu Issues](/actions/guides/adding-labels-to-issues)
- [Entfernen einer Bezeichnung, wenn eine Karte einer Projektboardspalte hinzugefügt wird](/actions/guides/removing-a-label-when-a-card-is-added-to-a-project-board-column)
- [Verschieben zugewiesener Issues in Projektboards](/actions/guides/moving-assigned-issues-on-project-boards)
- [Kommentar zu einem Issue, wenn eine Bezeichnung hinzugefügt wird](/actions/guides/commenting-on-an-issue-when-a-label-is-added)
- [Schließen inaktiver Issues](/actions/guides/closing-inactive-issues)
- [Planen der Erstellung von Issues](/actions/guides/scheduling-issue-creation)
