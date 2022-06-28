---
title: Gerenciando sua função em uma organização pertencente à sua empresa
intro: Você pode gerenciar a sua ssoviação em qualquer organização pertencente à sua empresa e mudar sua função dentro da organização.
permissions: Enterprise owners can manage their role in an organization owned by the enterprise.
versions:
  feature: enterprise-owner-join-org
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Gerenciar as funções da sua organização
---

## Sobre o gerenciamento de funções

Você pode optar por participar de uma organização pertencente à sua empresa como integrante ou como proprietário da organização, mudar a sua função dentro da organização ou sair da organização.

{% ifversion ghec %}
{% warning %}

**Aviso**: Se uma organização usar o SCIM para fornecer usuários, entrar na organização desta forma poderia ter consequências não desejadas. Para obter mais informações, consulte "[Sobre SCIM para as organizações](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".

{% endwarning %}
{% endif %}

Para obter informações sobre como gerenciar as funções de outras pessoas em uma organização, consulte "[Gerenciando integrantes da sua organização](/organizations/managing-membership-in-your-organization)" e "[Gerenciando o acesso das pessoas à sua organização com as funções](/organizations/managing-peoples-access-to-your-organization-with-roles)".

## Gerenciando seu papel com as configurações corporativas

Você pode participar de uma organização pertencente à sua empresa e gerenciar sua função na organização, diretamente nas configurações da conta corporativa.

{% ifversion ghec %}

Se uma organização aplivar o logon único do SAML (SSO), você não poderá usar as configurações corporativas para participar da organização. Em vez disso, você deve participar da organização usando o provedor de identidade (IdP) dessa organização. Em seguida, você pode gerenciar a sua função nas configurações da sua empresa. Para obter mais informações, consulte[Entrando para uma organização que apliva o SAML SSO](#joining-an-organization-that-enforces-saml-sso)".

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. Na guia **Organizações**, à direita da organização em que você deseja gerenciar sua função, selecione o menu suspenso {% octicon "gear" aria-label="The gear icon" %} e clique na ação que você deseja assumir.

   ![Captura de tela do menu suspenso para o ícone de engrenagem de uma organização](/assets/images/help/business-accounts/change-role-in-org.png)

{% ifversion ghec %}

## Entrando para uma organização que apliva o SAML SSO

Se uma organização aplicar o SSO SAML, você não poderá usar as configurações da empresa para participar da organização. Em vez disso, você deve participar da organização usando o provedor de identidade (IdP) dessa organização.

1. Você deve ter acesso no seu IdP para o aplicativo {% data variables.product.prodname_ghe_cloud %} que é usado pela organização. Se você não conseguir configurar seu IdP, entre em contato com o administrador do seu IdP.
1. Efetuar a autentivação na organização usando o SAML SSO.

   - Se a organização usar o SCIM, aceite o convite da organização que será gerado pela integração do SCIM.
   - Se a organização não usar o SCIM, acesse o URL a seguir, substituindo a ORGANIZAÇÃO pelo nome da organização e, em seguida, siga as instruções para efetuar a autenticação.

    `https://github.com/orgs/ORGANIZATION/sso`

Depois de entrar na organização, você poderá usar as configurações corporativas para gerenciar a sua função na organização como, por exemplo, se tornar proprietário da organização. Para obter mais informações, consulte "[Gerenciando sua função com as configurações corporativas](#managing-your-role-with-the-enterprise-settings)".

{% endif %}
