---
title: SSH-Schlüssel überwachen
intro: Websiteadministratoren können ein instanzweites Audit der SSH-Schlüssel initiieren.
redirect_from:
  - /enterprise/admin/articles/auditing-ssh-keys
  - /enterprise/admin/user-management/auditing-ssh-keys
  - /admin/user-management/auditing-ssh-keys
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Security
  - SSH
ms.openlocfilehash: 6ffcbdc698b6eb3a4736fdb2b4713e2871dcaac2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147508432'
---
Sobald das Audit initiiert ist, werden alle vorhandenen SSH-Schlüssel deaktiviert und Benutzer gezwungen, sie zu genehmigen oder abzulehnen, bevor sie diese klonen, abrufen oder per Push-Vorgang an Repositorys übertragen können. Ein Audit eignet sich in Situationen, in denen ein Mitarbeiter oder Vertragsnehmer das Unternehmen verlässt und du sicherstellen musst, dass alle Schlüssel verifiziert sind.

## Audit initiieren

SSH-Schlüssel-Audits können im Websiteadministrator-Dashboard auf der Registerkarte „All users“ (Alle Benutzer) initiiert werden:

![Starting a public key audit (Audit für öffentliche Schlüssel starten)](/assets/images/enterprise/security/Enterprise-Start-Key-Audit.png)

Nachdem du auf die Schaltfläche „Start public key audit“ (Audit für öffentliche Schlüssel starten) geklickt hast, gelangst du zu einem Bestätigungsbildschirm, auf dem erklärt wird, was als Nächstes passiert:

![Audit bestätigen](/assets/images/enterprise/security/Enterprise-Begin-Audit.png)

Nachdem du auf die Schaltfläche „Begin audit“ (Audit starten) geklickt hast, sind alle SSH-Schlüssel ungültig und müssen genehmigt werden. Es wird eine Benachrichtigung angezeigt, die auf den Audit-Start hinweist.

## Anzeige für Benutzer

Wenn ein Benutzer versucht, einen Git-Vorgang mittels SSH durchzuführen, schlägt dieser fehl. Zudem wird die folgende Meldung angezeigt:

```shell
ERROR: Hi <em>username</em>. We're doing an SSH key audit.
Please visit http(s)://<em>hostname</em>/settings/ssh/audit/2
to approve this key so we know it's safe.
Fingerprint: ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91
fatal: The remote end hung up unexpectedly
```

Wenn du auf den Link klickst, wirst du aufgefordert, die Schlüssel für ihr Konto zu genehmigen:

![Schlüssel überwachen](/assets/images/enterprise/security/Enterprise-Audit-SSH-Keys.jpg)

Nachdem sie ihre Schlüssel genehmigt oder abgelehnt haben, können sie wie gewohnt mit den Repositorys interagieren.

## SSH-Schlüssel hinzufügen

{% ifversion ghes %}

Wenn ein*e neue*r Benutzer*in einem Konto einen SSH-Schlüssel hinzufügt, um seinen bzw. ihren Zugriff zu bestätigen, wird er bzw. sie von {% data variables.product.product_name %} zur Authentifizierung aufgefordert. Weitere Informationen findest du unter [Sudo-Modus](/authentication/keeping-your-account-and-data-secure/sudo-mode).

{% endif %}

Wenn ein Benutzer einen Schlüssel hinzufügt, erhält er eine Benachrichtigungs-E-Mail, die in etwa wie folgt aussieht:

    The following SSH key was added to your account:

    [title]
    ed:21:60:64:c0:dc:2b:16:0f:54:5f:2b:35:2a:94:91

    If you believe this key was added in error, you can remove the key and disable access at the following location:

    http(s)://HOSTNAME/settings/ssh
