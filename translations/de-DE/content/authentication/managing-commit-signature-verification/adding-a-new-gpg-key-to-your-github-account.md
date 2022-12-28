---
title: Einen neuen GPG-Schlüssel zum GitHub-Konto hinzufügen
intro: Du benötigst auch den Schlüssel zu deinem Konto, um es auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} zu konfigurieren, um den neuen (oder vorhandenen) GPG-Schlüssel zu verwenden.
redirect_from:
- /articles/adding-a-new-gpg-key-to-your-github-account
- /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
- /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Identity
- Access management
shortTitle: Add a new GPG key
ms.openlocfilehash: 73d58f3194e2ba37b38ce8e4b80de6b78888bbff
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145085988"
---
Wenn du deinem Konto unter {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} einen neuen SSH-Schlüssel hinzufügst, solltest du:
- [Nach vorhandenen GPG-Schlüsseln gesucht haben](/articles/checking-for-existing-gpg-keys)
- [Einen neuen GPG-Schlüssel erzeugt und kopiert haben](/articles/generating-a-new-gpg-key)

Du kannst deinem GitHub-Konto mehrere öffentliche Schlüssel hinzufügen. Commits, die von einem der entsprechenden privaten Schlüssel signiert wurden, werden als überprüft angezeigt. Wenn du einen öffentlichen Schlüssel entfernst, werden alle von dem entsprechenden privaten Schlüssel signierten Commits nicht mehr als überprüft angezeigt.

{% data reusables.gpg.supported-gpg-key-algorithms %}

Beim Überprüfen einer Signatur extrahieren wir die Signatur und versuchen, ihre Schlüssel-ID zu parsen. Wir gleichen die Schlüssel-ID den Schlüsseln an, die in {% data variables.product.product_name %} hochgeladen wurden. Wir können deine Signaturen erst überprüfen, wenn du deinen GPG-Schlüssel auf {% data variables.product.product_name %} hochgeladen hast.

## <a name="adding-a-gpg-key"></a>Einen GPG-Schlüssel hinzufügen

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Klicke auf **Neuer GPG-Schlüssel**.
   ![Schaltfläche für GPG-Schlüssel](/assets/images/help/settings/gpg-add-gpg-key.png)
4. Füge im Feld „Schlüssel" den GPG-Schlüssel ein, den du kopiert hast, wenn du [den GPG-Schlüssel generiert hast](/articles/generating-a-new-gpg-key).
   ![Das Schlüssel-Feld](/assets/images/help/settings/gpg-key-paste.png)
5. Klicke auf **GPG-Schlüssel hinzufügen**.
   ![Die Schaltfläche Schlüssel hinzufügen](/assets/images/help/settings/gpg-add-key.png)
6. Um die Aktion zu bestätigen, gib dein {% data variables.product.product_name %}-Passwort ein.

## <a name="further-reading"></a>Weitere Informationsquellen

* „[Auf vorhandene GPG-Schlüssel hin prüfen](/articles/checking-for-existing-gpg-keys)“
* „[Einen neuen GPG-Schlüssel erzeugen](/articles/generating-a-new-gpg-key)“
* „[Git deinen Signaturschlüssel mitteilen](/articles/telling-git-about-your-signing-key)“
* „[Eine E-Mail-Adresse mit deinem GPG-Schlüssel verknüpfen](/articles/associating-an-email-with-your-gpg-key)“
* „[Unter Verwendung eines GPG-Schlüssels Commits und Tags signieren](/articles/signing-commits-and-tags-using-gpg)“
