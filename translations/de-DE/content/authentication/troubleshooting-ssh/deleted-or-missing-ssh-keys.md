---
title: Gelöschte oder fehlende SSH-Schlüssel
intro: 'Als eine Sicherheitsmaßnahme entfernt {% data variables.product.prodname_dotcom %} automatisch SSH-Schlüssel, die seit einem Jahr nicht verwendet wurden.'
redirect_from:
  - /articles/deleted-or-missing-ssh-keys
  - /github/authenticating-to-github/deleted-or-missing-ssh-keys
  - /github/authenticating-to-github/troubleshooting-ssh/deleted-or-missing-ssh-keys
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Deleted or missing SSH keys
ms.openlocfilehash: aa26a5bf39db3f41aa3c3aa01f59c392a42f467f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145085891'
---
{% data variables.product.prodname_dotcom %} löscht automatisch inaktive SSH-Schlüssel, um Konten zu schützen, beispielsweise, wenn jemand seine Arbeitsstelle wechselt oder seinen Computer verliert.

Ob Du einen SSH-Schlüssel seit einem Jahr nicht mehr verwendet hast, kannst Du anhand des Sicherheitsprotokolls Deines Kontos überprüfen. Weitere Informationen findest du unter [Überprüfen deines Sicherheitsprotokolls](/articles/reviewing-your-security-log/).

Wenn Dein inaktiver SSH-Schlüssel gelöscht wurde, musst Du einen neuen SSH-Schlüssel erzeugen und ihn mit Deinem Konto verknüpfen. Weitere Informationen findest du unter [Generieren eines neuen SSH-Schlüssels und Hinzufügen des Schlüssels zum ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) und unter [Hinzufügen eines neuen SSH-Schlüssels zu deinem GitHub Konto](/articles/adding-a-new-ssh-key-to-your-github-account/).
