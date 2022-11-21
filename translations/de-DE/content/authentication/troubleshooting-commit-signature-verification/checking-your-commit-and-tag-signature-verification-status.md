---
title: Verifizierungsstatus der Commit- und Tag-Signaturen
intro: 'Du kannst den Verifizierungsstatus deiner Commit- und Tag-Signaturen auf {% data variables.product.product_name %} überprüfen.'
redirect_from:
  - /articles/checking-your-gpg-commit-and-tag-signature-verification-status
  - /articles/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/checking-your-commit-and-tag-signature-verification-status
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Check verification status
ms.openlocfilehash: c43072b238d6064b8d6a8cc27bb1994f4806875f
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147653314'
---
## Den Verifizierungsstatus Deiner Commit-Signatur prüfen

1. Navigiere auf {% data variables.product.product_name %} zu Deinem Pull Request.
{% data reusables.repositories.review-pr-commits %}
3. Das Feld neben dem verkürzten Commit-Hash Deines Commits zeigt, ob die Commit-Signatur verifiziert{% ifversion fpt or ghec %}, teilweise verifiziert{% endif %} oder nicht verifiziert ist.
![Signierter Commit](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. Wenn Du ausführlichere Informationen zur Commitsignatur anzeigen möchtest, klicke auf **Verifiziert**{% ifversion fpt or ghec %}, **Teilweise verifiziert**,"{% endif %} oder **Nicht verifiziert**.
  GPG-signierte Commits zeigen die ID des verwendeten Schlüssels an.
  ![Überprüfter GPG-signierter Commit](/assets/images/help/commits/gpg-signed-commit_verified_details.png) {% ifversion ssh-commit-verification %} SSH-signierte Commits zeigen die Signatur des verwendeten öffentlichen Schlüssels an.
![Überprüfter SSH-signierter Commit](/assets/images/help/commits/ssh-signed-commit-verified-details.png) {% endif %}

## Den Verifizierungsstatus Deiner Tag-Signatur überprüfen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
2. Klicke oben auf der Seite „Releases“ auf **Tags**.
![Tags-Seite](/assets/images/help/releases/tags-list.png)
3. Das Feld neben der Tag-Beschreibung zeigt, ob Deine Tag-Signatur verifiziert{% ifversion fpt or ghec %}, teilweise verifiziert{% endif %} oder nicht verifiziert ist.
![Verifizierte Tag-Signatur](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. Wenn Du ausführlichere Informationen zur Tag-Signatur anzeigen möchtest, klicke auf **Verifiziert**{% ifversion fpt or ghec %}, **Teilweise verifiziert**,{% endif %} oder **Nicht verifiziert**. 
![Verifizierter signierter Tag](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

## Weiterführende Themen

- [Informationen zur Verifizierung einer Commitsignatur](/articles/about-commit-signature-verification)
- „[Signieren von Commits](/articles/signing-commits)“
- [Signieren von Tags](/articles/signing-tags)
