---
title: Adicionar uma chave GPG à sua conta do GitHub
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
shortTitle: Adicionar uma chave GPG
---

## Sobre a adição de chaves GPG à sua conta

Para assinar commits associados à sua conta no {% data variables.product.product_name %}, você pode adicionar uma chave GPG pública à sua conta pessoal. Antes de adicionar uma chave, verifique se há as chaves existentes. Se você não encontrar nenhuma chave existente, você poderá gerar e copiar uma nova chave. Para obter mais informações, consulte "[Verifricando se há chaves GPG existentes](/articles/checking-for-existing-gpg-keys)" e "[Gerando uma nova chave GPG](/articles/generating-a-new-gpg-key)."

Você pode adicionar várias chaves públicas à sua conta em {% data variables.product.product_name %}. Os commits assinados por qualquer uma das chaves privadas correspondentes serão exibidos como verificado. Se você remover uma chave pública, todos os commits assinados pela chave privada correspondente não serão mais mostrados como verificados.

{% ifversion upload-expired-or-revoked-gpg-key %}
Para verificar o máximo possível dos seus commits, você pode adicionar chaves vencidas e revogadas. Se a chave atende a todos os outros requisitos de verificação, os commits que foram assinados anteriormente por qualquer uma das chaves privadas correspondentes serão exibidos como verificados e indicarão que sua chave de assinatura venceu ou foi revogada.

![Um commit verificado cuja chave venceu](/assets/images/help/settings/gpg-verified-with-expired-key.png)
{% endif %}

{% data reusables.gpg.supported-gpg-key-algorithms %}

Ao verificar uma assinatura, {% data variables.product.product_name %} extrai a assinatura e tenta analisar o ID da sua chave. O ID da chave é correspondido com as chaves adicionadas a {% data variables.product.product_name %}. Até que uma chave de GPG correspondente seja adicionada a {% data variables.product.product_name %}, ela não poderá verificar suas assinaturas.

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

Se sua chave vencer, você deverá [atualizar seu vencimento](https://www.gnupg.org/gph/en/manual.html#AEN329), exportar a nova chave, excluir a chave vencida na sua conta em {% data variables.product.product_name %} e adicionar a nova chave à sua conta, conforme descrito acima. As tags e os commits anteriores serão exibidos como verificados, desde que a chave atenda a todos os outros requisitos de verificação.

Se a chave foi revogada, use a chave principal ou outra chave que não tenha sido revogada para assinar os commits.

Se a chave for inválida, você não usar outra chave válida no conjunto de chaves e ainda gerar uma nova chave GPG com um novo conjunto de credenciais, os commits feitos com a chave revogada ou expirada continuarão sendo exibidos como não verificados. Além disso, as novas credenciais não conseguirão assinar novamente ou verificar tags e commits antigos.
{% endif %}

## Leia mais

- "[Verificar se há chaves GPG existentes](/articles/checking-for-existing-gpg-keys)"
- "[Gerar uma nova chave GPG](/articles/generating-a-new-gpg-key)"
- "[Avisar o Git sobre sua chave de assinatura](/articles/telling-git-about-your-signing-key)"
- "[Associar um e-mail à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)"
- "[Assinar commits e tags usando chaves GPG](/articles/signing-commits-and-tags-using-gpg)"
- "[Sobre a verificação de assinatura de commit](/articles/about-commit-signature-verification)"
