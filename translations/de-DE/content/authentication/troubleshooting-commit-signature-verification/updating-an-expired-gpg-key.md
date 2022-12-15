---
title: Abgelaufenen GPG-Schlüssel aktualisieren
intro: Bei der Verifizierung einer Signatur überprüft {% data variables.product.product_name %}, ob der Schlüssel widerrufen wurde oder abgelaufen ist. Bei Widerruf oder Ablauf des Signaturschlüssels kann {% data variables.product.product_name %} Ihre Signaturen nicht verifizieren. Wenn Dein Schlüssel widerrufen wurde, verwende den primären Schlüssel oder einen anderen, nicht widerrufenen Schlüssel zum signieren Deiner Commits.
redirect_from:
- /articles/updating-an-expired-gpg-key
- /github/authenticating-to-github/updating-an-expired-gpg-key
- /github/authenticating-to-github/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Identity
- Access management
shortTitle: Update expired GPG key
ms.openlocfilehash: daf4f225426ccb67d2fa536afbd9a1f6517e4913
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145085912"
---
Wenn dein Schlüssel abgelaufen ist, musst du [den Ablauf aktualisieren](https://www.gnupg.org/gph/en/manual/c235.html#AEN328), den neuen Schlüssel exportieren, den abgelaufenen Schlüssel in deinem GitHub-Konto löschen und [den neuen Schlüssel in GitHub hochladen](/articles/adding-a-new-gpg-key-to-your-github-account/). Deine bisherigen Commits und Tags werden als verifiziert angezeigt, sofern der Schlüssel alle anderen Verifizierungsanforderungen erfüllt.

Wenn Dein Schlüssel ungültig ist und Du keinen anderen gültigen Schlüssel Deines Schlüsselsatzes verwendest, sondern stattdessen einen neuen GPG-Schlüssel mit einem neuen Satz an Anmeldeinformationen generierst, werden Commits, die Du mit dem widerrufenen oder abgelaufenen Schlüssel durchgeführt hast, weiterhin als nicht verifiziert angezeigt. Auch kannst Du mit den neuen Anmeldeinformationen die alten Commits und Tags weder neu signieren noch verifizieren.

## <a name="further-reading"></a>Weiterführende Themen

- [Informationen zur Verifizierung einer Commitsignatur](/articles/about-commit-signature-verification)
