---
title: Ein Repository nur für Issues erstellen
intro: '{% data variables.product.product_name %} bietet keine Berechtigungen für den ausschließlichen Zugriff auf Issues. Du kannst zu diesem Zweck aber ein zweites Repository erstellen, das nur die Issues enthält.'
redirect_from:
  - /articles/issues-only-access-permissions
  - /articles/is-there-issues-only-access-to-organization-repositories
  - /articles/creating-an-issues-only-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-issues-only-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-an-issues-only-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Issues-only repository
ms.openlocfilehash: 76450c6d3bddd02ab3e389b35e6ce67d01ffd771
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132333'
---
1. Erstelle ein **privates** Repository, um den Quellcode über dein Projekt zu hosten.
2. Erstelle ein zweites Repository mit den gewünschten Berechtigungen, um den Issue-Tracker zu hosten.
3. Füge eine README-Datei zum Issues-Repository hinzu, in der du den Zweck dieses Repositorys erläuterst und zum Issues-Abschnitt verknüpfst.
4. Lege deine Mitarbeiter oder Teams fest, um den Zugriff auf die Repositorys wie gewünscht zu verwalten.

Benutzer mit Schreibzugriff auf beide Repositorys können zwischen den Repositorys auf Issues verweisen und Issues schließen. Benutzer ohne die erforderlichen Berechtigungen sehen nur Verweise mit sehr wenigen Informationen.

Wenn du beispielsweise einen Commit mit der Mitteilung `Fixes organization/public-repo#12` an den Standard-Branch des privaten Repositorys überträgst, würde der Issue geschlossen, aber nur Benutzer mit den entsprechenden Berechtigungen könnten den Repository-übergreifenden Verweis auf den Commit sehen, der den Issue geschlossen hat. Benutzern ohne diese Berechtigungen wird ein Verweis angezeigt, aber ohne detaillierte Angaben.
