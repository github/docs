---
title: 'Fehler: „Permission to user/repo denied to other-user“ (Berechtigung für „user/repo" für „other-user" verweigert)'
intro: 'Diese Fehlermeldung bedeutet, dass der Schlüssel, den Du beim Push verwendest, an ein Konto angehängt ist, das keinen Zugriff auf das Repository hat.'
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-other-user
  - /articles/error-permission-to-userrepo-denied-to-other-user
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-other-user
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-other-user
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied other-user
ms.openlocfilehash: b46df8f9e8671008b37d3db69e2094e96e0413b8
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085879'
---
Zur Behebung dieses Problems muss der Inhaber des Repositorys (`user`) dein Konto (`other-user`) als Mitwirkenden am Repository oder als Mitglied eines Teams mit Schreibrechten für das Repository hinzufügen.
