---
title: Informationen zur Verifizierung einer Commit-Signatur
intro: 'Du kannst Tags und Commits lokal mit GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} oder S/MIME signieren. Diese Tags oder Commits werden auf {% data variables.product.product_name %} als überprüft gekennzeichnet, sodass andere Personen darauf vertrauen können, dass die Änderungen aus einer vertrauenswürdigen Quelle stammen.'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures
  - /articles/about-gpg
  - /articles/about-commit-signature-verification
  - /github/authenticating-to-github/about-commit-signature-verification
  - /github/authenticating-to-github/managing-commit-signature-verification/about-commit-signature-verification
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Commit signature verification
ms.openlocfilehash: e54ecb30d3730be7da3e50721bd62e334bb53f75
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147653274'
---
## Informationen zur Verifizierung einer Commit-Signatur

Du kannst Commits und Tags lokal signieren, um anderen Personen Sicherheit in Bezug auf den Ursprung einer vorgenommenen Änderung zu geben. Wenn ein Commit oder Tag eine GPG-{% ifversion ssh-commit-verification %}, SSH-{% endif %} oder S/MIME-Signatur aufweist, die kryptografisch verifizierbar ist, markiert {% data variables.product.product_name %} den Commit oder das Tag als {% ifversion fpt or ghec %}„Überprüft“ oder „Teilweise überprüft“.{% else %}„Überprüft“.{% endif %}

![Verifizierter Commit](/assets/images/help/commits/verified-commit.png)

{% ifversion ghes or ghae %} Wenn ein Commit oder ein Tag eine Signatur aufweist, die nicht verifiziert werden kann, markiert {% data variables.product.product_name %} den Commit oder das Tag als „Nicht überprüft“.
{% endif %}

{% ifversion ssh-commit-verification %} Für die meisten Einzelbenutzer ist GPG oder SSH die beste Wahl, um Commits zu signieren. S/MIME-Signaturen werden normalerweise im Kontext einer größeren Organisation benötigt. SSH-Signaturen sind am einfachsten zu generieren. Du kannst sogar deinen vorhandenen Authentifizierungsschlüssel in {% data variables.product.product_name %} hochladen, um ihn auch als Signaturschlüssel zu verwenden. Das Generieren eines GPG Signaturschlüssels ist aufwändiger als das Generieren eines SSH-Schlüssels, aber GPG bietet Funktionen, die SSH nicht bereitstellt. Ein GPG-Schlüssel kann ablaufen oder widerrufen werden, wenn er nicht mehr verwendet wird. {% data variables.product.product_name %} zeigt Commits an, die mit einem solchen Schlüssel als „Überprüft“ signiert wurden, es sei denn, der Schlüssel wurde als kompromittiert markiert. SSH-Schlüssel bieten diese Möglichkeit nicht.
{% endif %}

{% ifversion fpt or ghec %} Je nachdem, ob du den wachsamen Modus aktiviert hast, weisen Commits und Tags die folgenden Überprüfungsstatus auf. Standardmäßig ist der wachsame Modus nicht aktiviert. Weitere Informationen zum Aktivieren des wachsamen Modus findest du unter „[Anzeigen von Überprüfungsstatus für alle Commits](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)“.

{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

Das Signieren von Commits unterscheidet sich vom Abzeichnen eines Commits. Weitere Informationen zum Abzeichnen von Commits findest du unter [Verwalten der Richtlinie zum Abzeichnen von Commits für dein Repository](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository).

### Standardstatus

| Status         | BESCHREIBUNG |
| -------------- | ----------- |
| **Überprüft**   | Der Commit ist signiert, und die Signatur wurde erfolgreich überprüft.
| **Nicht überprüft** | Der Commit ist signiert, aber die Signatur konnte nicht überprüft werden.
| Kein Überprüfungsstatus | Der Commit ist nicht signiert.

### Signaturüberprüfung für das Ausführen von Rebases und Mergevorgängen
{% data reusables.pull_requests.rebase_and_merge_verification %}

Weitere Informationen findest du unter [Ausführen von Rebases und Mergevorgängen für deine Commits](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github#rebasing-and-merging-your-commits).

### Status bei aktiviertem wachsamem Modus

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

{% endif %}


Repository-Administratoren können die obligatorische Commit-Signatur auf einem Branch erzwingen, um alle Commits zu blockieren, die nicht signiert und verifiziert sind. Weitere Informationen findest du unter [Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches#require-signed-commits).

{% data reusables.identity-and-permissions.verification-status-check %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% ifversion ghes %} Wenn ein Websiteadministrator die Webcommitsignierung aktiviert hat, verwendet {% data variables.product.product_name %} zum Signieren von Commits, die du über die Webschnittstelle vornimmst, automatisch GPG. Die von {% data variables.product.product_name %} signierten Commits haben den Status „Überprüft“. Du kannst die Signatur mithilfe des öffentlichen Schlüssels, der unter `https://HOSTNAME/web-flow.gpg` verfügbar ist, lokal überprüfen. Weitere Informationen findest du unter [„Konfigurieren der Webcommitsignierung](/admin/configuration/configuring-your-enterprise/configuring-web-commit-signing)“.
{% else %} {% data variables.product.prodname_dotcom %} verwendet GPG automatisch, um Commits zu signieren, die du über die Webschnittstelle vornimmst. Die von {% data variables.product.prodname_dotcom %} signierten Commits haben den Status „Überprüft“. Du kannst die Signatur mithilfe des öffentlichen Schlüssels, der unter https://github.com/web-flow.gpg verfügbar ist, lokal überprüfen. Der vollständige Fingerabdruck des Schlüssels ist `5DE3 E050 9C47 EA3C F04A 42D3 4AEE 18F8 3AFD EB23`.

Du kannst optional festlegen, dass {% data variables.product.prodname_dotcom %} in {% data variables.product.prodname_github_codespaces %} durchgeführte Commits mit GPG signiert. Weitere Informationen zum Aktivieren der GPG-Überprüfung für deine Codespaces findest du unter [Verwalten der GPG-Überprüfung für {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces).{% endif %} {% endif %}

## GPG-Verifizierung einer Commit-Signatur

Du kannst GPG verwenden, um Commits mit einem GPG-Schlüssel zu signieren, den du selbst generierst.

{% data variables.product.product_name %} verwendet OpenPGP-Bibliotheken, um zu bestätigen, dass deine lokal signierten Commits und Tags kryptographisch mit einem öffentlichen Schlüssel überprüft werden können, den du deinem Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} hinzugefügt hast.

Um Commits mit GPG zu signieren und diese Commits auf {% data variables.product.product_name %} verifizieren zu lassen, führe die folgenden Schritte aus:

1. [Nach vorhandenen GPG-Schlüsseln suchen](/articles/checking-for-existing-gpg-keys)
2. [Einen neuen GPG-Schlüssel generieren](/articles/generating-a-new-gpg-key)
3. [Hinzufügen eines GPG-Schlüssels zu deinem GitHub-Konto](/articles/adding-a-gpg-key-to-your-github-account)
4. [Git über den Signaturschlüssel informieren](/articles/telling-git-about-your-signing-key)
5. [Commits signieren](/articles/signing-commits)
6. [Tags signieren](/articles/signing-tags)

{% ifversion ssh-commit-verification %}
## SSH-Verifizierung einer Commitsignatur

Du kannst SSH verwenden, um Commits mit einem öffentlichen SSH-Schlüssel zu signieren, den du selbst generierst. Wenn du bereits einen SSH-Schlüssel verwendest, um dich bei {% data variables.product.product_name %} zu authentifizieren, kannst du diesen Schlüssel erneut hochladen, um ihn auch als Signaturschlüssel zu verwenden. Es gibt keine Begrenzung für die Anzahl von Signaturschlüsseln, die du zu deinem Konto hinzufügen kannst.

{% data variables.product.product_name %} verwendet [ssh_data](https://github.com/github/ssh_data), eine Open-Source-Ruby-Bibliothek, um zu bestätigen, dass deine lokal signierten Commits und Tags kryptografisch mit einem öffentlichen Schlüssel verifizierbar sind, den du deinem Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} hinzugefügt hast.

{% data reusables.gpg.ssh-git-version %}

Führe die folgenden Schritte aus, um Commits mit SSH zu signieren und diese Commits auf {% data variables.product.product_name %} zu verifizieren:

1. [Suche nach vorhandenen SSH-Schlüsseln](/articles/checking-for-existing-ssh-keys)
2. [Generieren eines neuen SSH-Schlüssels](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
3. [Hinzufügen eines SSH-Schlüssels zu deinem GitHub-Konto](/articles/adding-a-new-ssh-key-to-your-github-account)
4. [Git über den Signaturschlüssel informieren](/articles/telling-git-about-your-signing-key)
5. [Commits signieren](/articles/signing-commits)
6. [Tags signieren](/articles/signing-tags)

{% endif %}
## S/MIME-Verifizierung einer Commit-Signatur

Du kannst S/MIME verwenden, um Commits mit einem von deiner Organisation ausgegebenen X.509-Schlüssel zu signieren.

{% data variables.product.product_name %} verwendet [das Debian-CA-Zertifikatpaket](https://packages.debian.org/bullseye/ca-certificates), denselben Trust Store, der auch von Mozilla-Browsern verwendet wird, um zu bestätigen, dass deine lokal signierten Commits und Tags kryptographisch mit einem öffentlichen Schlüssel in einem vertrauenswürdigen Stammzertifikat überprüft werden können.

{% data reusables.gpg.smime-git-version %}

Um Commits mit S/MIME zu signieren und diese Commits auf {% data variables.product.product_name %} verifizieren zu lassen, führe die folgenden Schritte aus:

1. [Git über den Signaturschlüssel informieren](/articles/telling-git-about-your-signing-key)
2. [Commits signieren](/articles/signing-commits)
3. [Tags signieren](/articles/signing-tags)

Du musst deinen öffentlichen Schlüssel nicht auf {% data variables.product.product_name %} hochladen.

{% ifversion fpt or ghec %}
## Signaturverifizierung für Bots

Organisationen und {% data variables.product.prodname_github_apps %}, bei denen Commit-Signaturen vorgeschrieben sind, können Bots für das Signieren von Commits verwenden. Wenn ein Commit oder Tag eine Bot-Signatur hat, die kryptografisch verifiziert werden kann, wird der Commit oder das Tag von {% data variables.product.product_name %} als verifiziert gekennzeichnet.

Die Signaturverifizierung für Bots funktioniert nur, wenn die Anforderung als {% data variables.product.prodname_github_app %} oder Bot verifiziert und authentifiziert ist und keine benutzerdefinierten Informationen zum Autor, zum Beitragenden oder zur Signatur aufweist, also z. B. keine Commits-API.
{% endif %}

## Weitere Informationsquellen

- [Signieren von Commits](/articles/signing-commits)
- [Signieren von Tags](/articles/signing-tags)
- „[Fehlerbehebung bei der Überprüfung einer Commit-Signatur](/articles/troubleshooting-commit-signature-verification)“
