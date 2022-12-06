---
title: Solução de problemas de gerenciamento de identidade e acesso da empresa
shortTitle: Troubleshoot IAM
intro: Examine os problemas e as soluções comuns para o gerenciamento de identidade e acesso da empresa.
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
ms.openlocfilehash: 7b8c42a1012e91268f4315d99934a4f38c52a529
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107530'
---
## Conflitos de nome de usuário

{% ifversion ghec %}Se a empresa usa {% data variables.product.prodname_emus %}, o {% endif %}{% data variables.product.product_name %} normaliza um identificador fornecido pelo IdP (provedor de identidade) para criar o nome de usuário de cada pessoa no {% data variables.product.prodname_dotcom %}. Se várias contas forem normalizadas com o mesmo nome de usuário do {% data variables.product.prodname_dotcom %}, apenas a primeira conta de usuário será criada. Para obter mais informações, confira "[Considerações de nome de usuário para autenticação externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

{% ifversion ghec %}
## Erros ao alternar as configurações de autenticação

Se você estiver com problemas ao alternar entre diferentes configurações de autenticação, como alterar a configuração de SSO do SAML de uma organização para uma conta empresarial ou migrar do SAML para o OIDC com {% data variables.product.prodname_emus %}, verifique se as práticas recomendadas para a alteração estão sendo seguidas.

- "[Como alterar a configuração do SAML de uma organização para uma conta empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)"
- "[Como migrar do SAML para o OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)"
- "[Como migrar a empresa para um novo provedor de identidade ou locatário](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-your-enterprise-to-a-new-identity-provider-or-tenant)"

## Como acessar a empresa quando o SSO não estiver disponível

Se um erro de configuração ou um problema com o IdP (provedor de identidade) impedir que você use o SSO, use um código de recuperação para acessar a empresa. Para obter mais informações, confira "[Como acessar sua conta corporativa se o seu provedor de identidade não estiver disponível](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)".
{% endif %}

## Erros de autenticação do SAML

Se os usuários estiverem recebendo erros durante a tentativa de autenticação com o SAML, confira "[Solução de problemas de autenticação do SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication)".

{% ifversion ghec %}
## Leitura adicional

- "[Solução de problemas de gerenciamento de identidade e acesso da organização](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization)" {% endif %}
