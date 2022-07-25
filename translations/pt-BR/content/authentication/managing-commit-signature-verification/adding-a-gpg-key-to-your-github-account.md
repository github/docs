---
title: Adding a GPG key to your GitHub account
intro: 'Para configurar a sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} para usar sua chave GPG nova (ou existente), você também precisará da chave para a sua conta.'
redirect_from:
  - /articles/adding-a-gpg-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
  - /articles/updating-an-expired-gpg-key
  - /authentication/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /github/authenticating-to-github/updating-an-expired-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Add a GPG key
---

## About addition of GPG keys to your account

To sign commits associated with your account on {% data variables.product.product_name %}, you can add a public GPG key to your personal account. Before you add a key, you should check for existing keys. If you don't find any existing keys, you can generate and copy a new key. For more information, see "[Checking for existing GPG keys](/articles/checking-for-existing-gpg-keys)" and "[Generating a new GPG key](/articles/generating-a-new-gpg-key)."

You can add multiple public keys to your account on {% data variables.product.product_name %}. Os commits assinados por qualquer uma das chaves privadas correspondentes serão exibidos como verificado. Se você remover uma chave pública, todos os commits assinados pela chave privada correspondente não serão mais mostrados como verificados.

{% ifversion upload-expired-or-revoked-gpg-key %}
To verify as many of your commits as possible, you can add expired and revoked keys. If the key meets all other verification requirements, commits that were previously signed by any of the corresponding private keys will show as verified and indicate that their signing key is expired or revoked.

![A verified commit whose key expired](/assets/images/help/settings/gpg-verified-with-expired-key.png)
{% endif %}

{% data reusables.gpg.supported-gpg-key-algorithms %}

When verifying a signature, {% data variables.product.product_name %} extracts the signature and attempts to parse its key ID. The key ID is then matched with keys added to {% data variables.product.product_name %}. Until a matching GPG key is added to {% data variables.product.product_name %}, it cannot verify your signatures.

## Adicionar uma chave GPG

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
3. Clique em **New GPG key** (Nova chave GPG). ![Botão GPG Key (Chave GPG)](/assets/images/help/settings/gpg-add-gpg-key.png)
4. No campo "Key" (Chave), cole a chave GPG que você copiou quando [gerou sua chave GPG](/articles/generating-a-new-gpg-key). ![O campo de chave](/assets/images/help/settings/gpg-key-paste.png)
5. Clique em **Add GPG key** (Adicionar chave GPG). ![O botão Add key (Adicionar chave)](/assets/images/help/settings/gpg-add-key.png)
6. Para confirmar a ação, insira sua senha do {% data variables.product.product_name %}.

{% ifversion upload-expired-or-revoked-gpg-key %}
{% else %}
## Atualizar uma chave GPG expirada

Ao verificar uma assinatura, o {% data variables.product.product_name %} confere se a chave foi revogada ou está expirada. Caso a chave de assinatura tenha sido revogada ou esteja expirada, o {% data variables.product.product_name %} não poderá verificar as assinaturas.

If your key is expired, you must [update its expiration](https://www.gnupg.org/gph/en/manual.html#AEN329), export the new key, delete the expired key in your account on {% data variables.product.product_name %}, and add the new key to your account as described above. As tags e os commits anteriores serão exibidos como verificados, desde que a chave atenda a todos os outros requisitos de verificação.

Se a chave foi revogada, use a chave principal ou outra chave que não tenha sido revogada para assinar os commits.

Se a chave for inválida, você não usar outra chave válida no conjunto de chaves e ainda gerar uma nova chave GPG com um novo conjunto de credenciais, os commits feitos com a chave revogada ou expirada continuarão sendo exibidos como não verificados. Also, your new credentials will not be able to re-sign or verify your old commits and tags.
{% endif %}

## Leia mais

- "[Verificar se há chaves GPG existentes](/articles/checking-for-existing-gpg-keys)"
- "[Gerar uma nova chave GPG](/articles/generating-a-new-gpg-key)"
- "[Avisar o Git sobre sua chave de assinatura](/articles/telling-git-about-your-signing-key)"
- "[Associar um e-mail à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)"
- "[Assinar commits e tags usando chaves GPG](/articles/signing-commits-and-tags-using-gpg)"
- "[Sobre a verificação de assinatura de commit](/articles/about-commit-signature-verification)"
