---
title: 'Fehler: „We''re doing an SSH key audit“ (Es wird ein SSH-Schlüsselaudit durchgeführt)'
intro: 'Diese Fehlermeldung bedeutet, dass der SSH-Schlüssel, den Du für die Ausführung eines Git-Vorgangs verwendest, nicht verifiziert ist.'
redirect_from:
  - /articles/error-we-re-doing-an-ssh-key-audit
  - /articles/error-were-doing-an-ssh-key-audit
  - /github/authenticating-to-github/error-were-doing-an-ssh-key-audit
  - /github/authenticating-to-github/troubleshooting-ssh/error-were-doing-an-ssh-key-audit
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: SSH key audit
ms.openlocfilehash: 8683f5506fc2a026c11f22f2086de2308d096906
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085852'
---
Wenn Du zum Ausführen von Git-Vorgängen einen nicht verifizierten Schlüssel verwendest, wirst Du dazu aufgefordert, ein Audit Deiner SSH-Schlüssel durchzuführen.

```shell
ERROR: We're doing an SSH key audit.
Reason: unverified due to lack of use
Please visit https://github.com/settings/ssh
to approve this key so we know it's safe.
Fingerprint: ab:08:46:83:ff:f6:c4:f8:a9:4e:68:6b:94:17:f2:46
fatal: could not read from remote repository
```
## Das Problem beheben

Um dies zu beheben, musst du [deine SSH-Schlüssel überprüfen](/articles/reviewing-your-ssh-keys) und entweder den nicht überprüften Schlüssel ablehnen oder genehmigen. Klicke auf den URL-Link in der Fehlermeldung. Daraufhin wird die Seite mit den SSH-Einstellungen angezeigt, wo der nicht verifizierte SSH-Schlüssel in der SSH-Schlüsselliste hervorgehoben ist.
