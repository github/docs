---
ms.openlocfilehash: 42d6bbb15a1f147d9eea0c908b17ec30790a54c3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145107484"
---
Wenn du über Administratorberechtigungen für ein Containerimage verfügst, kannst du die Zugriffsberechtigungen für das Containerimage auf „privat“ oder „öffentlich“ festlegen. Öffentliche Images erlauben anonymen Zugriff und können ohne Authentifizierung oder Anmeldung über die CLI gepullt werden.

Als Administrator kannst du auch Zugriffsberechtigungen für ein Containerimage erteilen, die unabhängig von den Berechtigungen sind, die du auf Organisations- und Repositoryebene festgelegt hast.

Für Containerimages, die über ein persönliches Konto veröffentlicht werden und in dessen Besitz sind, kannst du jeder Person eine Zugriffsrolle zuweisen. Für Containerimages, die von einer Organisation veröffentlicht werden und in deren Besitz sind, kannst du jeder Person oder jedem Team in der Organisation eine Zugriffsrolle zuweisen.

| Berechtigung | Zugriffsbeschreibung |
|------------|--------------------|
| Lesen       | Kann Paket herunterladen. <br> Kann Paketmetadaten lesen. |
| Schreiben      | Kann dieses Paket hochladen und herunterladen. <br> Kann Paketmetadaten lesen und schreiben. |
| Administrator      | Kann dieses Paket hochladen, herunterladen, löschen und verwalten. <br> Kann Paketmetadaten lesen und schreiben. <br> Kann Paketberechtigungen erteilen.
