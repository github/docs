---
title: Solução de problemas de identidade e gerenciamento de acesso para sua empresa
shortTitle: Solucionar Problemas do IAM
intro: Revise os problemas e soluções comuns para gestão de identidade e acesso da sua empresa.
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
---

## Conflito de usuário

{% ifversion ghec %}Se sua empresa usa {% data variables.product.prodname_emus %}, {% endif %}{% data variables.product.product_name %} normaliza um identificador fornecido pelo seu provedor de identidade (IdP) para criar o nome de usuário de cada pessoa em {% data variables.product.prodname_dotcom %}. Se várias contas forem normalizadas para o mesmo nome de usuário {% data variables.product.prodname_dotcom %}, ocorrerá um conflito de nome de usuário e apenas a primeira conta de usuário será criada. Para obter mais informações, consulte "[Considerações de nome de usuário para autenticação externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

{% ifversion ghec %}
## Erros ao mudar configurações de autenticação

Se você estiver enfrentando problemas ao alternar entre diferentes configurações de autenticação como, por exemplo, alterar a configuração SAML SSO de uma organização para uma conta corporativa ou fazer a migração do SAML para o OIDC para {% data variables.product.prodname_emus %}, certifique-se de seguir nossas práticas recomendadas para a mudança.

- "[Alterando suas configurações SAML de uma organização para uma conta corporativa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)"
- "[Migrando do SAML para o OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)"

## Acessando a sua empresa quando o SSO não estiver disponível

Quando um erro de configuração ou um problema com o IdP do provedor de identidade impedir que você use o SSO, você poderá usar um código de recuperação para acessar sua empresa. Para obter mais informações, consulte "[Acessar a sua conta corporativa se seu provedor de identidade estiver indisponível](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)".
{% endif %}

## Erros de autenticação do SAML

Se os usuários estão enfrentando erros ao tentar efetuar a autenticação com o SAML, consulte "[Solução de problemas de autenticação do SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication)".

{% ifversion ghec %}
## Leia mais

- "[Solucionando problemas de identidade e gerenciamento de acesso para sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization)"
{% endif %}
