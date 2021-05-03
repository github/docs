---
title: Confirmar o status de verificação da assinatura do commit e da tag
intro: 'Você pode conferir o status da verificação da assinatura do commit e da tag no {% data variables.product.product_name %}.'
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

### Confirmar o status de verificação da assinatura do commit

1. Em

{% data variables.product.product_name %}, navegue até o seu pull request.
{% data reusables.repositories.review-pr-commits %}
3. Ao lado do hash de commit abreviado do seu commit, há uma caixa que mostra se a assinatura do commit foi verificada ou não. ![Commit assinado](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. Para exibir informações mais detalhadas sobre a assinatura do commit, clique em **Verified** (Verificada) ou **Unverified** (Não verificada). ![Commit assinado verificado](/assets/images/help/commits/gpg-signed-commit_verified_details.png)

Se a assinatura do commit não estiver verificada, você poderá saber mais sobre o por quê clicando na caixa **Unverified** (Não verificada). ![Commit assinado não verificado](/assets/images/help/commits/gpg-signed-commit-unverified-details.png)

### Confirmar o status de verificação da assinatura da tag

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. Na parte superior da página Versões, clique em **Tags**. ![Página de tags](/assets/images/help/releases/tags-list.png)
3. Ao lado da descrição da tag, há uma caixa que mostra se a assinatura da tag está verificada ou não verificada. ![assinatura de tag verificada](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. Para exibir informações mais detalhadas sobre a assinatura da tag, clique em **Verified** (Verificada) ou **Unverified** (Não verificada). Se a assinatura da tag não estiver verificada, você poderá saber mais sobre o por quê clicando na caixa **Unverified** (Não verificada). ![Tag assinada verificada](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

### Leia mais

- "[Sobre a verificação de assinatura de commit](/articles/about-commit-signature-verification)"
- "[Assinar commits](/articles/signing-commits)"
- "[Assinar tags](/articles/signing-tags)"
