---
title: Informationen zur Verifizierung einer Commit-Signatur
intro: 'Mit GPG{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.14" %} oder S/MIME{% endif %} kannst Du Tags und Commits lokal signieren. Diese Tags oder Commits werden auf {% data variables.product.product_name %} als verifiziert gekennzeichnet, sodass andere Personen darauf vertrauen können, dass die Änderungen aus einer vertrauenswürdigen Quelle stammen.'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures/
  - /articles/about-gpg/
  - /articles/about-commit-signature-verification
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Informationen zur Verifizierung einer Commit-Signatur

Du kannst Commits und Tags lokal signieren, sodass andere Personen überprüfen können, dass Deine Arbeit von einer vertrauenswürdigen Quelle stammt. Wenn ein Commit oder Tag eine GPG- oder S/MIME-Signatur hat, die kryptografisch verifiziert werden kann, wird der Commit oder das Tag von {% data variables.product.product_name %} als verifiziert gekennzeichnet.

![Verifizierter Commit](/assets/images/help/commits/verified-commit.png)

Wenn ein Commit oder Tag eine Signatur hat, die nicht verifiziert werden kann, wird der Commit oder das Tag von {% data variables.product.product_name %} als nicht verifiziert gekennzeichnet.

Repository-Administratoren können die obligatorische Commit-Signatur auf einem Branch erzwingen, um alle Commits zu blockieren, die nicht signiert und verifiziert sind. Weitere Informationen findest Du unter „[Informationen zur obligatorischen Commit-Signatur](/articles/about-required-commit-signing).“

Du kannst den Verifizierungsstatus Deines signierten Commits oder Tags auf {% data variables.product.product_name %} überprüfen und sehen, warum Deine Commit-Signaturen möglicherweise nicht verifiziert sind. Weitere Informationen findest Du unter „[Verifizierungsstatus Deiner Commit- und Tag-Signaturen überprüfen](/articles/checking-your-commit-and-tag-signature-verification-status).“

{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.product_name %} wird automatisch GPG verwenden, um Commits zu signieren, die Du über das {% data variables.product.product_name %} Web-Interface machst, ausgenommen wenn Du einen Pull Request squashen und zusammenführen willst, für den Du nicht der Autor bist. Commits, die von {% data variables.product.product_name %} signiert sind, werden auf {% data variables.product.product_name %} einen verifizierten Status haben. Du kannst die Signatur lokal mit dem unter https://github.com/web-flow.gpg verfügbaren öffentlichen Schlüssel verifizieren.{% endif %}

### GPG-Verifizierung einer Commit-Signatur

Du kannst GPG verwenden, um Commits mit einem GPG-Schlüssel zu signieren, den Du selbst generierst.

{% data variables.product.product_name %} verwendet OpenPGP-Bibliotheken, um zu bestätigen, dass Deine lokal signierten Commits und Tags kryptographisch mit einem öffentlichen Schlüssel verifizierbar sind, den Du zu Deinem {% data variables.product.product_name %}-Konto hinzugefügt hast.

Um Commits mit GPG zu signieren und diese Commits auf {% data variables.product.product_name %} verifizieren zu lassen, führe die folgenden Schritte aus:

1. [Suche nach vorhandenen GPG-Schlüsseln](/articles/checking-for-existing-gpg-keys)
2. [Generiere einen neuen GPG-Schlüssel](/articles/generating-a-new-gpg-key)
3. [Füge einen neuen GPG-Schlüssel zu Deinem GitHub-Konto hinzu](/articles/adding-a-new-gpg-key-to-your-github-account)
4. [Informiere Git über Deinen Signaturschlüssel](/articles/telling-git-about-your-signing-key)
5. [Signiere Commits](/articles/signing-commits)
6. [Signiere Tags](/articles/signing-tags)

### S/MIME-Verifizierung einer Commit-Signatur

Du kannst S/MIME verwenden, um Commits mit einem von Deiner Organisation ausgegebenen X.509-Schlüssel zu signieren.

{% data variables.product.product_name %} verwendet [das Debian-CA-Zertifikatspaket](https://packages.debian.org/hu/jessie/ca-certificates), den gleichen Trust Store, der auch von Mozilla-Browsern verwendet wird, um zu bestätigen, dass Deine lokal signierten Commits und Tags kryptographisch mit einem öffentlichen Schlüssel in einem vertrauenswürdigen Stammzertifikat verifizierbar sind.

{% data reusables.gpg.smime-git-version %}

Um Commits mit S/MIME zu signieren und diese Commits auf {% data variables.product.product_name %} verifizieren zu lassen, führe die folgenden Schritte aus:

1. [Informiere Git über Deinen Signaturschlüssel](/articles/telling-git-about-your-signing-key)
2. [Signiere Commits](/articles/signing-commits)
3. [Signiere Tags](/articles/signing-tags)

Du musst Deinen öffentlichen Schlüssel nicht auf {% data variables.product.product_name %} hochladen.

{% if currentVersion == "free-pro-team@latest" %}
### Signaturverifizierung für Bots

Organisationen und {% data variables.product.prodname_github_app %}s, bei denen Commit-Signaturen vorgeschrieben sind, können Bots für das Signieren von Commits verwenden. Wenn ein Commit oder Tag eine Bot-Signatur hat, die kryptografisch verifiziert werden kann, wird der Commit oder das Tag von {% data variables.product.product_name %} als verifiziert gekennzeichnet.

Die Signaturverifizierung für Bots funktioniert nur, wenn die Anforderung als {% data variables.product.prodname_github_app %} oder Bot verifiziert und authentifiziert ist und keine benutzerdefinierten Informationen zum Autor, zum Beitragenden oder zur Signatur aufweist, wie zum Beispiel Commits-API.
{% endif %}

### Weiterführende Informationen

- „[Commits signieren](/articles/signing-commits)“
- „[Tags signieren](/articles/signing-tags)“
- „[Fehlerbehebung bei der Verifizierung einer Commit-Signatur](/articles/troubleshooting-commit-signature-verification)“
