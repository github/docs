---
title: Änderungen an einem Kommentar verfolgen
intro: Du kannst den Änderungsverlauf eines Kommentars ansehen und vertrauliche Informationen aus dem Änderungsverlauf eines Kommentars löschen.
redirect_from:
  - /articles/tracking-changes-in-a-comment
  - /github/building-a-strong-community/tracking-changes-in-a-comment
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Track comment changes
ms.openlocfilehash: 7da6b53f9b98ade8ee73411a80aaf2ff3f412700
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145090222'
---
## Änderungsverlauf eines Kommentars anzeigen

Jede Person mit Lesezugriff auf ein Repository kann den Änderungsverlauf eines darin enthaltenen Kommentars anzeigen.

1. Navigiere zu dem Kommentar, dessen Änderungsverlauf Du anzeigen möchtest.
{% data reusables.repositories.edited-comment-list %}

## Vertrauliche Informationen aus dem Verlauf eines Kommentars löschen

Verfasser von Kommentaren und Personen mit Schreibzugriff zu einem Repository können vertrauliche Informationen aus dem Änderungsverlauf eines Kommentars löschen.

Wenn Du sensible Informationen aus dem Änderungsverlauf eines Kommentars löschst, bleiben die Person, die die Änderung vorgenommen hat, und der Zeitpunkt der Änderung im Kommentarverlauf ersichtlich, der Inhalt der Änderung ist aber nicht mehr verfügbar.

1. Navigiere zu dem Kommentar, in dessen Änderungsverlauf Du vertrauliche Informationen löschen möchtest.
{% data reusables.repositories.edited-comment-list %}
3. Klicke rechts oben im Änderungsverlaufsfenster auf **Optionen**. Klicke dann auf **Revision aus Verlauf löschen**, um das Diff zu löschen, das den hinzugefügten Inhalt zeigt.
  ![Löschen der Änderungsdetails eines Kommentars](/assets/images/help/repository/delete-comment-edit-details.png)
4. Klicke zum Bestätigen des Löschens auf **OK**.

## Weiterführende Themen

{% ifversion fpt or ghec %}- [Melden von Missbrauch oder Spam](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam){% endif %}
- [Bearbeiten eines Kommentars](/articles/editing-a-comment)
