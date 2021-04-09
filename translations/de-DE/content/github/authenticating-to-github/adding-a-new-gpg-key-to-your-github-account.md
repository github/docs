---
title: Einen neuen GPG-Schlüssel zum GitHub-Konto hinzufügen
intro: 'Um Ihr {% data variables.product.product_name %}-Konto für die Verwendung eines neuen (oder vorhandenen) GPG-Schlüssels zu konfigurieren, müssen Sie diesen Schlüssel auch zu Ihrem {% data variables.product.product_name %}-Konto hinzufügen.'
redirect_from:
  - /articles/adding-a-new-gpg-key-to-your-github-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - identity
  - access management
---

Bevor Sie einen neuen GPG-Schlüssel zu Ihrem {% data variables.product.product_name %}-Konto hinzufügen, sollten Sie
- [nach vorhandenen GPG-Schlüsseln gesucht haben](/articles/checking-for-existing-gpg-keys)
- [einen neuen GPG-Schlüssel erzeugt und kopiert haben](/articles/generating-a-new-gpg-key)

{% data reusables.gpg.supported-gpg-key-algorithms %}

Beim Überprüfen einer Signatur extrahieren wir die Signatur und versuchen, ihre Schlüssel-ID zu parsen. Wir gleichen die Schlüssel-ID mit den auf {% data variables.product.product_name %} hochgeladenen Schlüsseln ab. Wir können Ihre Signaturen erst überprüfen, wenn Sie Ihren GPG-Schlüssel auf {% data variables.product.product_name %} hochgeladen haben.

### Einen GPG-Schlüssel hinzufügen

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. Klicken Sie auf **New GPG key** (Neuer GPG-Schlüssel). ![Schaltfläche für GPG-Schlüssel](/assets/images/help/settings/gpg-add-gpg-key.png)
4. Fügen Sie den GPG-Schlüssel, den Sie beim [Erzeugen des GPG-Schlüssels](/articles/generating-a-new-gpg-key) kopiert haben, in das Feld „Key“ (Schlüssel) ein. ![Das Feld „Key“ (Schlüssel)](/assets/images/help/settings/gpg-key-paste.png)
5. Klicken Sie auf **Add GPG key** (GPG-Schlüssel hinzufügen). ![Die Schaltfläche zum Hinzufügen eines Schlüssels](/assets/images/help/settings/gpg-add-key.png)
6. Um die Aktion zu bestätigen, geben Sie Ihr {% data variables.product.product_name %}-Passwort ein.

### Weiterführende Informationen

* „[Nach vorhandenen GPG-Schlüsseln suchen](/articles/checking-for-existing-gpg-keys)“
* „[Einen neuen GPG-Schlüssel erzeugen](/articles/generating-a-new-gpg-key)“
* „[GitHub über Deinen Signaturschlüssel informieren](/articles/telling-git-about-your-signing-key)“
* „[Eine E-Mail-Adresse mit Deinem GPG-Schlüssel verknüpfen](/articles/associating-an-email-with-your-gpg-key)“
* „[Commits und Tags mit GPG-Schlüsseln signieren](/articles/signing-commits-and-tags-using-gpg)“
