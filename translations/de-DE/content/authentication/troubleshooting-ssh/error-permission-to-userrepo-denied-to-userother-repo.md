---
title: 'Fehler: „Permission to user/repo denied to user/other-repo“ (Berechtigung für „user/repo" für „user/other-repo" verweigert)'
intro: 'Diese Fehlermeldung bedeutet, dass der Schlüssel, den du beim Pushen verwendest, als Bereitstellungsschlüssel an ein anderes Repository angefügt ist und keinen Zugriff auf das Repository hat, in das du pushen möchtest.'
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-user-other-repo
  - /articles/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-userother-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied other-repo
ms.openlocfilehash: 4d4898e947338e39c5ade86b5ea0a71f54f36f03
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085876'
---
Um dies zu beheben, entferne den Bereitstellungsschlüssel aus dem Repository, und [füge stattdessen den Schlüssel zu deinem persönlichen Konto hinzu](/articles/adding-a-new-ssh-key-to-your-github-account).

Wenn der von dir verwendete Schlüssel ein Bereitstellungsschlüssel sein soll, findest du weitere Informationen in [unserem Leitfaden zu Bereitstellungsschlüsseln](/guides/managing-deploy-keys).
