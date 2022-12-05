---
title: Eine verifizierte E-Mail-Adresse in Ihrem GPG-Schlüssel verwenden
intro: 'Bei der Verifizierung einer Signatur überprüft {% data variables.product.product_name %}, ob die E-Mail-Adresse des Beitragenden oder des Taggers mit einer E-Mail-Adresse aus den Identitäten des GPG-Schlüssels übereinstimmt und ob es sich dabei im Konto des Benutzers um eine verifizierte E-Mail-Adresse handelt. Dadurch wird sichergestellt, dass der Schlüssel zu Dir gehört und dass Du den Commit oder das Tag erstellt hast.'
redirect_from:
  - /articles/using-a-verified-email-address-in-your-gpg-key
  - /github/authenticating-to-github/using-a-verified-email-address-in-your-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/using-a-verified-email-address-in-your-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Use verified email in GPG key
ms.openlocfilehash: bb9f4fbbfdb70ba55870ab068a33c566791fbaf2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145085907'
---
{% ifversion fpt or ghec %} Wenn du deine GitHub-E-Mail-Adresse verifizieren musst, siehe " [Verifizieren deiner E-Mail-Adresse](/articles/verifying-your-email-address/) ." {% endif %}Wenn du eine E-Mail-Adresse zu deinem GPG-Schlüssel aktualisieren oder hinzufügen musst, siehe " [Eine E-Mail mit deinem GPG-Schlüssel verbinden ](/articles/associating-an-email-with-your-gpg-key)."

Commits und Tags können verschiedene E-Mail-Adressen enthalten. Für Commits gibt es den Autor (die Person, die den Code geschrieben hat) und den Beitragenden (die Person, die den Commit zur Struktur hinzugefügt hat). Wenn du einen Commit mit Git signierst, egal ob bei einem Merge, Cherry-Pick oder einem normalen `git commit`, ist die E-Mail-Adresse des Committers deine, auch wenn die E-Mail-Adresse des Autors es nicht ist. Tags sind einfacher. Die Tagger-E-Mail-Adresse ist immer der Benutzer, der das Tag erstellt hat.

Wenn du deinen Committer- oder Tagger-E-Mail-Adresse ändern müssen, findest du unter "[Festlegen deiner Commit-E-Mail-Adresse](/articles/setting-your-commit-email-address/)."

## Weiterführende Themen

- [Informationen zur Verifizierung einer Commitsignatur](/articles/about-commit-signature-verification)
