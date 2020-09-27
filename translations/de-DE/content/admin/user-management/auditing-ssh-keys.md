---
title: SSH-Schlüssel überwachen
intro: Websiteadministratoren können ein instanzweites Audit der SSH-Schlüssel initiieren.
redirect_from:
  - /enterprise/admin/articles/auditing-ssh-keys/
  - /enterprise/admin/user-management/auditing-ssh-keys
versions:
  enterprise-server: '*'
---

Sobald das Audit initiiert ist, werden alle vorhandenen SSH-Schlüssel deaktiviert und Benutzer gezwungen, sie zu genehmigen oder abzulehnen, bevor sie diese klonen, abrufen oder per Push-Vorgang an Repositorys übertragen können. Ein Audit eignet sich in Situationen, in denen ein Mitarbeiter oder Vertragsnehmer das Unternehmen verlässt und Sie sicherstellen müssen, dass alle Schlüssel verifiziert sind.

### Audit initiieren

SSH-Schlüssel-Audits können im Websiteadministrator-Dashboard auf der Registerkarte „All users“ (Alle Benutzer) initiiert werden:

![Starting a public key audit (Audit für öffentliche Schlüssel starten)](/assets/images/enterprise/security/Enterprise-Start-Key-Audit.png)

Nachdem Sie auf die Schaltfläche „Start public key audit“ (Audit für öffentliche Schlüssel starten) geklickt haben, gelangen Sie zu einem Bestätigungsbildschirm, auf dem erklärt wird, was als Nächstes passiert:

![Audit bestätigen](/assets/images/enterprise/security/Enterprise-Begin-Audit.png)

Nachdem Sie auf die Schaltfläche „Begin audit“ (Audit starten) geklickt haben, sind alle SSH-Schlüssel ungültig und müssen genehmigt werden. Es wird eine Benachrichtigung angezeigt, die auf den Audit-Start hinweist.

### Benutzer sehen Folgendes

Wenn ein Benutzer versucht, einen Git-Vorgang mittels SSH durchzuführen, schlägt dieser fehl. Zudem wird die folgende Meldung angezeigt:

```shell
ERROR: Hi <em>username</em>. We're doing an SSH key audit.
Please visit http(s)://<em>hostname</em>/settings/ssh/audit/2
to approve this key so we know it's safe.
Fingerprint: ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91
fatal: The remote end hung up unexpectedly
```

Wenn Sie auf den Link klicken, werden sie aufgefordert, die Schlüssel für ihr Konto zu genehmigen:

![Schlüssel überwachen](/assets/images/enterprise/security/Enterprise-Audit-SSH-Keys.jpg)

Nachdem sie ihre Schlüssel genehmigt oder abgelehnt haben, können sie wie gewohnt mit den Repositorys interagieren.

### SSH-Schlüssel hinzufügen

Neue Benutzer werden beim Hinzufügen eines SSH-Schlüssels aufgefordert, ihr Passwort einzugeben:

![Passwortbestätigung](/assets/images/help/settings/sudo_mode_popup.png)

Wenn ein Benutzer einen Schlüssel hinzufügt, erhält er eine Benachrichtigungs-E-Mail, die in etwa wie folgt aussieht:

    The following SSH key was added to your account:
    
    [title]
    ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91
    
    If you believe this key was added in error, you can remove the key and disable access at the following location:
    
    http(s)://HOSTNAME/settings/ssh
