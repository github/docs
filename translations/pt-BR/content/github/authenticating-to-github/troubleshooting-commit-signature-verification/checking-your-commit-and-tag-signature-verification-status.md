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

1. No {% data variables.product.product_name %}, navegue até sua pull request.
{% data reusables.repositories.review-pr-commits %}
3. Ao lado do hash do commit abreviado do seu commit, há uma caixa que mostra se a assinatura do seu commit foi verificada{% if currentVersion == "free-pro-team@latest" %}, parcialmente verificada{% endif %} ou não verificada. ![Commit assinado](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. Para ver informações mais detalhadas sobre a assinatura de commit, clique em **Verificado**{% if currentVersion == "free-pro-team@latest" %}, **Parcialmente verificado**,{% endif %} ou **Não verificado**. ![Commit assinado verificado](/assets/images/help/commits/gpg-signed-commit_verified_details.png)

### Confirmar o status de verificação da assinatura da tag

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. Na parte superior da página Versões, clique em **Tags**. ![Página de tags](/assets/images/help/releases/tags-list.png)
3. Ao lado da descrição da sua tag, há uma caixa que mostra se a assinatura da tag é verificada{% if currentVersion == "free-pro-team@latest" %}, parcialmente verificado,{% endif %} ou não verificada. ![assinatura de tag verificada](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. Para ver informações mais detalhadas sobre a assinatura do marcador, clique em **Verificado**{% if currentVersion == "free-pro-team@latest" %}, **Parcialmente verificado**,{% endif %} ou **Não verificado**. ![Tag assinada verificada](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

### Leia mais

- "[Sobre a verificação de assinatura de commit](/articles/about-commit-signature-verification)"
- "[Assinar commits](/articles/signing-commits)"
- "[Assinar tags](/articles/signing-tags)"
