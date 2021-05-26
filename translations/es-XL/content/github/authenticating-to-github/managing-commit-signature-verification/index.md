---
title: Administrar la verificación de firma de confirmación de cambios
intro: 'Puedes firmar tu trabajo de forma local utilizando GPG{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.14" %} o S/MIME{% endif %}. {% data variables.product.product_name %} verificará estas firmas para que otras personas sepan que tus confirmaciones de cambios provienen de una fuente confiable.{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.product_name %} firmará de forma automática las confirmaciones de cambios que realices utilizando la interfaz web {% data variables.product.product_name %}.{% endif %}'
redirect_from:
  - /articles/generating-a-gpg-key/
  - /articles/signing-commits-with-gpg/
  - /articles/managing-commit-signature-verification
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
children:
  - /about-commit-signature-verification
  - /checking-for-existing-gpg-keys
  - /generating-a-new-gpg-key
  - /adding-a-new-gpg-key-to-your-github-account
  - /telling-git-about-your-signing-key
  - /associating-an-email-with-your-gpg-key
  - /signing-commits
  - /signing-tags
---

