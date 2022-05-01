---
title: Alterar endereço de e-mail principal
intro: Você pode alterar o endereço de e-mail associado à sua conta pessoal a qualquer momento.
redirect_from:
  - /articles/changing-your-primary-email-address
  - /github/setting-up-and-managing-your-github-user-account/changing-your-primary-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/changing-your-primary-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Endereço de e-mail principal
---

{% note %}

**Observação:** Você não pode alterar seu endereço de e-mail principal para um e-mail que já está definido como seu endereço de e-mail de backup.

{% endnote %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.emails %}
3. Se desejar adicionar um novo endereço de e-mail para definir como endereço de e-mail principal, em "Add email address" (Adicionar endereço de e-mail), digite um novo endereço de e-mail e clique em **Add** (Adicionar). ![Botão para adicionar outro endereço de e-mail](/assets/images/help/settings/add_another_email_address.png)
4. Em "Primary email address" (Endereço de e-mail principal), use o menu suspenso para clicar no endereço de e-mail que deseja definir como endereço de e-mail principal e clique em **Save** (Salvar). ![Botão para definir como principal](/assets/images/help/settings/set_as_primary_email.png)
5. Para remover o endereço de e-mail antigo da sua conta, ao lado do e-mail antigo, clique em {% octicon "trash" aria-label="The trash symbol" %}.
{% ifversion fpt or ghec %}
6. Verifique o novo endereço de e-mail principal. Sem um endereço de e-mail verificado, você não poderá usar todos os recursos do {% data variables.product.product_name %}. Para obter mais informações, consulte "[Verificar o endereço de e-mail](/articles/verifying-your-email-address)".
{% endif %}
