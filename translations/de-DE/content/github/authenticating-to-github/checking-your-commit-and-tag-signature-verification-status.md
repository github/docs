---
title: Verifizierungsstatus der Commit- und Tag-Signaturen prüfen
intro: 'Sie können den Verifizierungsstatus Ihrer Commit- und Tag-Signaturen auf {% data variables.product.product_name %} überprüfen.'
redirect_from:
  - /articles/checking-your-gpg-commit-and-tag-signature-verification-status/
  - /articles/checking-your-commit-and-tag-signature-verification-status
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

### Den Verifizierungsstatus Deiner Commit-Signatur prüfen

1. On

{% data variables.product.product_name %}, navigate to your pull request.
{% data reusables.repositories.review-pr-commits %}
3. Das Feld neben dem verkürzten Commit-Hash Deines Commits zeigt, ob die Commit-Signatur verifiziert ist oder nicht. ![Signierter Commit](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. Um detailliertere Informationen zur Commit-Signatur anzuzeigen, klicke auf **Verified** (Verifiziert) oder **Unverified** (Nicht verifiziert). ![Verifizierter signierter Commit](/assets/images/help/commits/gpg-signed-commit_verified_details.png)

Wenn Deine Commit-Signatur nicht verifiziert ist, kannst Du mehr darüber erfahren, indem Du auf das Feld **Unverified** (Nicht verifiziert) klickst. ![Nicht verifizierter signierter Commit](/assets/images/help/commits/gpg-signed-commit-unverified-details.png)

### Den Verifizierungsstatus Deiner Tag-Signatur überprüfen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. Klicke oben auf der Releases-Seite auf **Tags**. ![Tags-Seite](/assets/images/help/releases/tags-list.png)
3. Das Feld neben der Tag-Beschreibung zeigt, ob die Tag-Signatur verifiziert ist oder nicht. ![Verifizierte Tag-Signatur](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. Um detailliertere Informationen zur Tag-Signatur anzuzeigen, klicke auf **Verified** (Verifiziert) oder **Unverified** (Nicht verifiziert). Wenn die Tag-Signatur nicht verifiziert ist, kannst Du mehr darüber erfahren, indem Du auf das Feld **Unverified** (Nicht verifiziert) klickst. ![Verifizierter signierter Tag](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

### Weiterführende Informationen

- „[Informationen zur Verifizierung einer Commit-Signatur](/articles/about-commit-signature-verification)“
- „[Commits signieren](/articles/signing-commits)“
- „[Tags signieren](/articles/signing-tags)“
