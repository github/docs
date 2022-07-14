---
title: Adicionar uma nova chave GPG à sua conta do GitHub
intro: 'Para configurar a sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} para usar sua chave GPG nova (ou existente), você também precisará da chave para a sua conta.'
redirect_from:
  - /articles/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Adicionar uma nova chave GPG
---

Antes de adicionar uma nova chave GPG à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, você deverá ter:
- [Verificado a existência de chaves GPG](/articles/checking-for-existing-gpg-keys)
- [Gerado e copiado uma nova chave GPG](/articles/generating-a-new-gpg-key)

Você pode adicionar várias chaves públicas à sua conta do GitHub. Os commits assinados por qualquer uma das chaves privadas correspondentes serão exibidos como verificado. Se você remover uma chave pública, todos os commits assinados pela chave privada correspondente não serão mais mostrados como verificados.

{% data reusables.gpg.supported-gpg-key-algorithms %}

Ao verificar uma assinatura, extraímos a assinatura e tentamos analisar sua key-id. Fazemos a correspondência da key-id com as chaves carregadas no {% data variables.product.product_name %}. Enquanto não for feito upload da chave GPG no {% data variables.product.product_name %}, não podemos verificar suas assinaturas.

## Adicionar uma chave GPG

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
3. Clique em **New GPG key** (Nova chave GPG). ![Botão GPG Key (Chave GPG)](/assets/images/help/settings/gpg-add-gpg-key.png)
4. No campo "Key" (Chave), cole a chave GPG que você copiou quando [gerou sua chave GPG](/articles/generating-a-new-gpg-key). ![O campo de chave](/assets/images/help/settings/gpg-key-paste.png)
5. Clique em **Add GPG key** (Adicionar chave GPG). ![O botão Add key (Adicionar chave)](/assets/images/help/settings/gpg-add-key.png)
6. Para confirmar a ação, insira sua senha do {% data variables.product.product_name %}.

## Leia mais

* "[Verificar se há chaves GPG existentes](/articles/checking-for-existing-gpg-keys)"
* "[Gerar uma nova chave GPG](/articles/generating-a-new-gpg-key)"
* "[Avisar o Git sobre sua chave de assinatura](/articles/telling-git-about-your-signing-key)"
* "[Associar um e-mail à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)"
* "[Assinar commits e tags usando chaves GPG](/articles/signing-commits-and-tags-using-gpg)"
