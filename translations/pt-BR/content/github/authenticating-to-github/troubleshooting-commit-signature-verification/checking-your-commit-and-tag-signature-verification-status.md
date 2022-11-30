---
title: Confirmar o status de verificação da assinatura do commit e da tag
intro: 'Você pode conferir o status da verificação da assinatura do commit e da tag no {% data variables.product.product_name %}.'
redirect_from:
  - /articles/checking-your-gpg-commit-and-tag-signature-verification-status/
  - /articles/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/checking-your-commit-and-tag-signature-verification-status
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---
### Confirmar o status de verificação da assinatura do commit

1. Em

{% data variables.product.product_name %}, navegue até o seu pull request.
{% data reusables.repositories.review-pr-commits %}
3. Next to your commit's abbreviated commit hash, there is a box that shows whether your commit signature is verified{% if currentVersion == "free-pro-team@latest" %}, partially verified,{% endif %} or unverified. ![Commit assinado](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. To view more detailed information about the commit signature, click **Verified**{% if currentVersion == "free-pro-team@latest" %}, **Partially verified**,{% endif %} or **Unverified**. ![Commit assinado verificado](/assets/images/help/commits/gpg-signed-commit_verified_details.png)

### Confirmar o status de verificação da assinatura da tag

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. Na parte superior da página Versões, clique em **Tags**. ![Página de tags](/assets/images/help/releases/tags-list.png)
3. Next to your tag description, there is a box that shows whether your tag signature is verified{% if currentVersion == "free-pro-team@latest" %}, partially verified,{% endif %} or unverified. ![assinatura de tag verificada](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. To view more detailed information about the tag signature, click **Verified**{% if currentVersion == "free-pro-team@latest" %}, **Partially verified**,{% endif %} or **Unverified**. ![Tag assinada verificada](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

### Leia mais

- "[Sobre a verificação de assinatura de commit](/articles/about-commit-signature-verification)"
- "[Assinar commits](/articles/signing-commits)"
- "[Assinar tags](/articles/signing-tags)"
