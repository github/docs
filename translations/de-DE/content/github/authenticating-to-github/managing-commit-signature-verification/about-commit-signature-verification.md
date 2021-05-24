---
title: Informationen zur Verifizierung einer Commit-Signatur
intro: 'Using GPG or S/MIME, you can sign tags and commits locally. These tags or commits are marked as verified on {% data variables.product.product_name %} so other people can be confident that the changes come from a trusted source.'
redirect_from:
  - /articles/about-gpg-commit-and-tag-signatures/
  - /articles/about-gpg/
  - /articles/about-commit-signature-verification
  - /github/authenticating-to-github/about-commit-signature-verification
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---
### Informationen zur Verifizierung einer Commit-Signatur

You can sign commits and tags locally, to give other people confidence about the origin of a change you have made. If a commit or tag has a GPG or S/MIME signature that is cryptographically verifiable, GitHub marks the commit or tag {% if currentVersion == "free-pro-team@latest" %}"Verified" or "Partially verified."{% else %}"Verified."{% endif %}

![Verifizierter Commit](/assets/images/help/commits/verified-commit.png)

{% if currentVersion == "free-pro-team@latest" %}
Commits and tags have the following verification statuses, depending on whether you have enabled vigilant mode. By default vigilant mode is not enabled. For information on how to enable vigilant mode, see "[Displaying verification statuses for all of your commits](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)."

{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

#### Default statuses

| Status                 | Beschreibung                                                      |
| ---------------------- | ----------------------------------------------------------------- |
| **Verified**           | The commit is signed and the signature was successfully verified. |
| **Unverified**         | The commit is signed but the signature could not be verified.     |
| No verification status | The commit is not signed.                                         |

#### Statuses with vigilant mode enabled

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

{% else %}
If a commit or tag has a signature that can't be verified,
{% data variables.product.product_name %} marks the commit or tag "Unverified."
{% endif %}

Repository-Administratoren können die obligatorische Commit-Signatur auf einem Branch erzwingen, um alle Commits zu blockieren, die nicht signiert und verifiziert sind. Weitere Informationen findest Du unter „[Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches#require-signed-commits).“

{% data reusables.identity-and-permissions.verification-status-check %}

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
Signature verification for bots will only work if the request is verified and authenticated as the

{% data variables.product.prodname_github_app %} or bot and contains no custom author information, custom committer information, and no custom signature information, such as Commits API.
{% endif %}

### Weiterführende Informationen

- „[Commits signieren](/articles/signing-commits)“
- „[Tags signieren](/articles/signing-tags)“
- „[Fehlerbehebung bei der Verifizierung einer Commit-Signatur](/articles/troubleshooting-commit-signature-verification)“
