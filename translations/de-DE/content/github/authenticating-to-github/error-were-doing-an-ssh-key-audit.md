---
title: 'Fehler: „We''re doing an SSH key audit“ (Es wird ein SSH-Schlüsselaudit durchgeführt)'
intro: Diese Fehlermeldung bedeutet, dass der SSH-Schlüssel, den Du für die Ausführung eines Git-Vorgangs verwendest, nicht verifiziert ist.
redirect_from:
  - /articles/error-we-re-doing-an-ssh-key-audit
  - /articles/error-were-doing-an-ssh-key-audit
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
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
### Das Problem beheben

Um dieses Problem zu beheben, musst Du [Deine SSH-Schlüssel überprüfen](/articles/reviewing-your-ssh-keys) und den nicht verifizierten Schlüssel entweder zurückweisen oder genehmigen. Klicke auf den URL-Link in der Fehlermeldung. Daraufhin wird die Seite mit den SSH-Einstellungen angezeigt, wo der nicht verifizierte SSH-Schlüssel in der SSH-Schlüsselliste hervorgehoben ist.
