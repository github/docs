---
title: Baixar os códigos de recuperação de logon único de SAML da organização
intro: 'Os administradores da organização devem baixar os códigos de recuperação de logon único de SAML dela para garantir que possam acessar o {% data variables.product.product_name %} mesmo se o provedor de identidade da organização não estiver disponível.'
redirect_from:
  - /articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes
  - /articles/downloading-your-organizations-saml-single-sign-on-recovery-codes
  - /github/setting-up-and-managing-organizations-and-teams/downloading-your-organizations-saml-single-sign-on-recovery-codes
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Download SAML recovery codes
ms.openlocfilehash: 9b17e3e4fc20cc9eaedf59afe45e393054d7d8e5
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/12/2022
ms.locfileid: '145097255'
---
Os códigos de recuperação não devem ser compartilhados ou distribuídos. Recomendamos salvá-los com um gerenciador de senhas, como o [LastPass](https://lastpass.com/) ou o [1Password](https://1password.com/).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. Em "Logon único do SAML", na observação sobre códigos de recuperação, clique em **Salvar os códigos de recuperação**.
![Link para ver e salvar os códigos de recuperação](/assets/images/help/saml/saml_recovery_codes.png)
6. Salve os códigos de recuperação clicando em **Baixar**, **Imprimir** ou **Copiar**.
![Botões usados para baixar, imprimir ou copiar os códigos de recuperação](/assets/images/help/saml/saml_recovery_code_options.png)

  {% note %}

  **Observação:** os códigos de recuperação ajudam você a voltar ao {% data variables.product.product_name %} caso o IdP fique indisponível. Se você gerar novos códigos de recuperação, os exibidos na página "Códigos de recuperação de logon único" serão atualizados automaticamente.

  {% endnote %}

7. Cada código de recuperação só pode ser usado uma vez para recuperar o acesso ao {% data variables.product.product_name %}. O acesso ao {% data variables.product.product_name %} só ficará disponível 24 horas antes de você fazer login usando o login único.

## Leitura adicional

- "[Sobre o gerenciamento de identidades e acesso com o logon único do SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- "[Como acessar sua organização se o provedor de identidade não estiver disponível](/articles/accessing-your-organization-if-your-identity-provider-is-unavailable)"
