---
title: Configurando assinatura do commit da web
shortTitle: Configurar assinatura do commit da web
intro: 'Você pode habilitar a assinatura automática de commits criados na interface web de {% data variables.product.product_name %}.'
versions:
  ghes: '>=3.5'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Identity
  - Security
permissions: 'Site administrators can configure web commit signing for {% data variables.product.product_location %}.'
---

## Sobre a assinatura do commit da web

Se você habilitar a assinatura de commit da web, {% data variables.product.product_name %} usará o GPG automaticamente para assinar commits que os usuários fazem na interface web de {% data variables.product.product_location %}. Os commits assinados por {% data variables.product.product_name %} terão um status verificado. Para obter mais informações, consulte "[Sobre verificação de assinatura commit](/authentication/managing-commit-signature-verification/about-commit-signature-verification)".

Você pode habilitar a assinatura do commit da web, girar a chave privada usada para a assinatura de web commit e desabilitar a assinatura do commit da web.

## Habilitando a assinatura de commit da web

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   - Se você tiver um endereço de e-mail sem resposta definido em {% data variables.enterprise.management_console %}, use esse endereço de e-mail. Caso contrário, use qualquer endereço de e-mail, como `web-flow@my-company.com`. O endereço de e-mail não precisa ser válido.
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %}
{% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %}
{% data reusables.enterprise_site_admin_settings.update-commit-signing-service %}
1. Habilitar assinatura do commit da web.

    ```bash{:copy}
    ghe-config app.github.web-commit-signing-enabled true
    ```
1. Aplique a configuração e, em seguida, aguarde até que a configuração seja concluída.

   ```bash{:copy}
   ghe-config-apply
   ```
1. Crie um novo usuário em {% data variables.product.product_location %} por meio da autenticação integrada ou autenticação externa. Para obter mais informações, consulte "[Sobre a autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".
   - O nome de usuário do usuário deve ser `web-flow`.
   - O endereço de e-mail do usuário deve ser o mesmo endereço usado para a chave PGP.
{% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %}
{% data reusables.enterprise_site_admin_settings.email-settings %}
1. Em "Endereço de e-mail de não responda", digite o mesmo endereço de e-mail que você usou para a chave PGP.

   {% note %}

   **Observação:** O campo "Endereço de e-mail não responda" será exibido somente se você habilitou o e-mail para {% data variables.product.product_location %}. Para obter mais informações, consulte "[Configurar e-mail para notificações](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications#configuring-smtp-for-your-enterprise).

   {% endnote %}
{% data reusables.enterprise_management_console.save-settings %}

## Girando a chave privada usada para a assinatura do commit web

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   - Use o endereço de e-mail de não responda definido no {% data variables.enterprise.management_console %}, que deve ser o mesmo que o endereço de e-mail do usuário de `web-flow`.
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %}
{% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %}
{% data reusables.enterprise_site_admin_settings.update-commit-signing-service %}
{% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %}

## Desabilitar a assinatura do commit da web

Você pode desabilitar a assinatura do commit da web para {% data variables.product.product_location %}.

1. No terminal administrativo, execute o seguinte comando.

   ```bash{:copy}
   ghe-config app.github.web-commit-signing-enabled false
   ```
1. Aplique a configuração.

   ```bash{:copy}
   ghe-config-apply
   ```
