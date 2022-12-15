---
title: Configurar a assinatura de commit da Web
shortTitle: Configure web commit signing
intro: 'Você pode habilitar a assinatura automática de commits feitos na interface da Web do {% data variables.product.product_name %}.'
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
ms.openlocfilehash: 759b158235e5727b474441d10b33016b58277c7f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147068031'
---
## Sobre a assinatura de commit da Web

Se você ativar a assinatura de commit da Web, {% data variables.product.product_name %} usará automaticamente o GPG para assinar as commits que os usuários fizerem na interface da Web de {% data variables.product.product_location %}. Os commits assinados por {% data variables.product.product_name %} terão um status verificado. Para obter mais informações, confira "[Sobre a verificação de assinatura de commit](/authentication/managing-commit-signature-verification/about-commit-signature-verification)".

Você pode habilitar a assinatura de commit da Web, alternar a chave privada usada para a assinatura de commit da Web e desabilitar a assinatura de commit da Web.

## Habilitar a assinatura de commit da Web

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   - Se você tiver um endereço de email sem resposta definido em {% data variables.enterprise.management_console %}, use esse endereço de email. Caso contrário, use qualquer endereço de email, como `web-flow@my-company.com`. O endereço de email não precisa ser válido.
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %} {% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %} {% data reusables.enterprise_site_admin_settings.update-commit-signing-service %}
1. Habilite a assinatura de commit da Web.

    ```bash{:copy}
    ghe-config app.github.web-commit-signing-enabled true
    ```
1. Aplique a configuração e aguarde a conclusão da execução da configuração.

   ```bash{:copy}
   ghe-config-apply
   ```
1. Crie um novo usuário em {% data variables.product.product_location %} por meio de autenticação integrada ou autenticação externa. Para obter mais informações, confira "[Sobre a autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)".
   - O nome de usuário precisa ser `web-flow`.
   - O endereço de email do usuário deve ser o mesmo endereço que você usou para a chave PGP. {% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %} {% data reusables.enterprise_site_admin_settings.email-settings %}
1. Em "Endereço de email sem resposta", digite o mesmo endereço de email usado para a chave PGP. 

   {% note %}

   **Observação:** O campo "Endereço de email sem resposta" só será exibido se você tiver ativado o email para {% data variables.product.product_location %}. Para obter mais informações, confira "[Como configurar o email para notificações](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications#configuring-smtp-for-your-enterprise)".

   {% endnote %} {% data reusables.enterprise_management_console.save-settings %}

## Girar a chave privada usada para assinatura de commit da Web

{% data reusables.enterprise_site_admin_settings.create-pgp-key-web-commit-signing %}
   - Use o endereço de email sem resposta definido em {% data variables.enterprise.management_console %}, que deve ser igual ao endereço de email do usuário `web-flow`.
{% data reusables.enterprise_site_admin_settings.pgp-key-no-passphrase %} {% data reusables.enterprise_site_admin_settings.pgp-key-env-variable %} {% data reusables.enterprise_site_admin_settings.update-commit-signing-service %} {% data reusables.enterprise_site_admin_settings.add-key-to-web-flow-user %}

## Desabilitar a assinatura de commit da Web

Você pode desabilitar a assinatura de commit da Web para {% data variables.product.product_location %}.

1. No shell administrativo, execute o comando a seguir.

   ```bash{:copy}
   ghe-config app.github.web-commit-signing-enabled false
   ```
1. Aplicar a configuração.

   ```bash{:copy}
   ghe-config-apply
   ```
