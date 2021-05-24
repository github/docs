---
title: Adicionar uma nova chave GPG à sua conta do GitHub
intro: 'Para configurar sua conta do {% data variables.product.product_name %} para usar a chave GPG nova (ou a existente), você também precisará adicioná-la à sua conta do {% data variables.product.product_name %}.'
redirect_from:
  - /articles/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---
Antes de adicionar uma nova chave GPG à suas conta do {% data variables.product.product_name %}, você deve ter:
- [Verificado a existência de chaves GPG](/articles/checking-for-existing-gpg-keys)
- [Gerado e copiado uma nova chave GPG](/articles/generating-a-new-gpg-key)

{% data reusables.gpg.supported-gpg-key-algorithms %}

Ao verificar uma assinatura, extraímos a assinatura e tentamos analisar sua key-id. Fazemos a correspondência da key-id com as chaves carregadas no {% data variables.product.product_name %}. Enquanto não for feito upload da chave GPG no {% data variables.product.product_name %}, não podemos verificar suas assinaturas.

### Adicionar uma chave GPG

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. Clique em **New GPG key** (Nova chave GPG). ![Botão GPG Key (Chave GPG)](/assets/images/help/settings/gpg-add-gpg-key.png)
4. No campo "Key" (Chave), cole a chave GPG que você copiou quando [gerou sua chave GPG](/articles/generating-a-new-gpg-key). ![O campo de chave](/assets/images/help/settings/gpg-key-paste.png)
5. Clique em **Add GPG key** (Adicionar chave GPG). ![O botão Add key (Adicionar chave)](/assets/images/help/settings/gpg-add-key.png)
6. Para confirmar a ação, insira sua senha do {% data variables.product.product_name %}.

### Leia mais

* "[Verificar se há chaves GPG existentes](/articles/checking-for-existing-gpg-keys)"
* "[Gerar uma nova chave GPG](/articles/generating-a-new-gpg-key)"
* "[Avisar o Git sobre sua chave de assinatura](/articles/telling-git-about-your-signing-key)"
* "[Associar um e-mail à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)"
* "[Assinar commits e tags usando chaves GPG](/articles/signing-commits-and-tags-using-gpg)"
