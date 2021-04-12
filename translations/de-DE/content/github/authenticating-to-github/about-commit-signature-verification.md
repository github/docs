---
title: Informationen zur Verifizierung einer Commit-Signatur
intro: 'Using GPG or S/MIME, you can sign tags and commits locally. Diese Tags oder Commits werden auf {% data variables.product.product_name %} als verifiziert gekennzeichnet, sodass andere Personen darauf vertrauen können, dass die Änderungen aus einer vertrauenswürdigen Quelle stammen.'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures/
  - /articles/about-gpg/
  - /articles/about-commit-signature-verification
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - identity
  - access management
---

### Informationen zur Verifizierung einer Commit-Signatur

Du kannst Commits und Tags lokal signieren, sodass andere Personen überprüfen können, dass Deine Arbeit von einer vertrauenswürdigen Quelle stammt. Wenn ein Commit oder Tag eine GPG- oder S/MIME-Signatur hat, die kryptografisch verifiziert werden kann, wird der Commit oder das Tag von {% data variables.product.product_name %} als verifiziert gekennzeichnet.

![Verifizierter Commit](/assets/images/help/commits/verified-commit.png)

Wenn ein Commit oder Tag eine Signatur hat, die nicht verifiziert werden kann, wird der Commit oder das Tag von {% data variables.product.product_name %} als nicht verifiziert gekennzeichnet.

Repository-Administratoren können die obligatorische Commit-Signatur auf einem Branch erzwingen, um alle Commits zu blockieren, die nicht signiert und verifiziert sind. Weitere Informationen findest Du unter „[Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches#require-signed-commits).“

Du kannst den Verifizierungsstatus Deines signierten Commits oder Tags auf {% data variables.product.product_name %} überprüfen und sehen, warum Deine Commit-Signaturen möglicherweise nicht verifiziert sind. Weitere Informationen findest Du unter „[Verifizierungsstatus Deiner Commit- und Tag-Signaturen überprüfen](/articles/checking-your-commit-and-tag-signature-verification-status).“

{% if currentVersion == "free-pro-team@latest" %}
{% data variables.product.product_name %} will automatically use GPG to sign commits you make using the {% data variables.product.product_name %} web interface, except for when you squash and merge a pull request that you are not the author of. You can optionally choose to have {% data variables.product.product_name %} sign commits you make in {% data variables.product.prodname_codespaces %}. Commits, die von {% data variables.product.product_name %} signiert sind, werden auf {% data variables.product.product_name %} einen verifizierten Status haben. Sie können die Signatur lokal mit dem unter https://github.com/web-flow.gpg verfügbaren öffentlichen Schlüssel verifizieren. For more information about enabling GPG verification for your codespaces, see "[Managing GPG verification for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)."
{% endif %}

### GPG-Verifizierung einer Commit-Signatur

Sie können GPG verwenden, um Commits mit einem GPG-Schlüssel zu signieren, den Sie selbst generieren.

{% data variables.product.product_name %} verwendet OpenPGP-Bibliotheken, um zu bestätigen, dass Deine lokal signierten Commits und Tags kryptographisch mit einem öffentlichen Schlüssel verifizierbar sind, den Du zu Deinem {% data variables.product.product_name %}-Konto hinzugefügt hast.

Um Commits mit GPG zu signieren und diese Commits auf {% data variables.product.product_name %} verifizieren zu lassen, führe die folgenden Schritte aus:

1. [Suche nach vorhandenen GPG-Schlüsseln](/articles/checking-for-existing-gpg-keys)
2. [Generiere einen neuen GPG-Schlüssel](/articles/generating-a-new-gpg-key)
3. [Füge einen neuen GPG-Schlüssel zu Deinem GitHub-Konto hinzu](/articles/adding-a-new-gpg-key-to-your-github-account)
4. [Informiere Git über Deinen Signaturschlüssel](/articles/telling-git-about-your-signing-key)
5. [Signiere Commits](/articles/signing-commits)
6. [Signiere Tags](/articles/signing-tags)

### S/MIME-Verifizierung einer Commit-Signatur

Sie können S/MIME verwenden, um Commits mit einem von Ihrer Organisation ausgegebenen X.509-Schlüssel zu signieren.

{% data variables.product.product_name %} verwendet [das Debian-CA-Zertifikatpaket](https://packages.debian.org/hu/jessie/ca-certificates), den gleichen Trust Store, der auch von Mozilla-Browsern verwendet wird, um zu bestätigen, dass Ihre lokal signierten Commits und Tags kryptographisch mit einem öffentlichen Schlüssel in einem vertrauenswürdigen Stammzertifikat verifizierbar sind.

{% data reusables.gpg.smime-git-version %}

Um Commits mit S/MIME zu signieren und diese Commits auf {% data variables.product.product_name %} verifizieren zu lassen, führen Sie die folgenden Schritte aus:

1. [Informiere Git über Deinen Signaturschlüssel](/articles/telling-git-about-your-signing-key)
2. [Signiere Commits](/articles/signing-commits)
3. [Signiere Tags](/articles/signing-tags)

Sie müssen Ihren öffentlichen Schlüssel nicht auf {% data variables.product.product_name %} hochladen.

{% if currentVersion == "free-pro-team@latest" %}
### Signaturverifizierung für Bots

Organisationen und {% data variables.product.prodname_github_app %}s, bei denen Commit-Signaturen vorgeschrieben sind, können Bots für das Signieren von Commits verwenden. Wenn ein Commit oder Tag eine Bot-Signatur hat, die kryptografisch verifiziert werden kann, wird der Commit oder das Tag von {% data variables.product.product_name %} als verifiziert gekennzeichnet.
Signature verification for bots will only work if the request is verified and authenticated as the

{% data variables.product.prodname_github_app %} or bot and contains no custom author information, custom committer information, and no custom signature information, such as Commits API.
{% endif %}

### Weiterführende Informationen

- „[Commits signieren](/articles/signing-commits)“
- „[Tags signieren](/articles/signing-tags)“
- „[Fehlerbehebung bei der Verifizierung einer Commit-Signatur](/articles/troubleshooting-commit-signature-verification)“
