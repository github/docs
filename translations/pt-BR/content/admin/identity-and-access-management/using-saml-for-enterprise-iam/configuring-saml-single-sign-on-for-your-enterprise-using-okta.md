---
title: Configurar o logon único SAML para a sua empresa usando o Okta
intro: 'Você pode usar o logon único (SSO) da linguagem de declaração de markup (SAML) com o Okta para gerenciar automaticamente o acesso à sua conta corporativa em {% data variables.product.product_name %}.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
type: how_to
shortTitle: Configurar o SAML SSO com o Okta
---

{% data reusables.enterprise-accounts.emu-saml-note %}

## Sobre o SAML com Okta

Você pode controlar o acesso à conta corporativa no {% data variables.product.product_name %} e em outros aplicativos web, a partir de uma interface central, configurando a conta corporativa para usar SAML SSO com Okta, um provedor de identidade (IdP).

O SAML SSO controla e protege o acesso a recursos da conta corporativa, como, por exemplo, organizações, repositórios, problemas e pull requests. Para obter mais informações, consulte "[Configurar logon único SAML para a sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

{% data reusables.saml.switching-from-org-to-enterprise %} Para obter mais informações, consulte "[Alterando sua configuração do SAML de uma organização para uma conta corporativa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".

Como alternativa, você também pode configurar SAML SSO usando o Okta para uma organização que usa {% data variables.product.prodname_ghe_cloud %}. Para obter mais informações, consulte "[Configuring SAML single sign-on and SCIM using Okta](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)" (Configurar SAML logon único e SCIM usando Okta)

## Adicionar o aplicativo {% data variables.product.prodname_ghe_cloud %} no Okta

{% data reusables.saml.okta-sign-into-your-account %}
1. Acesse o aplicativo [{% data variables.product.prodname_ghe_cloud %} -Contas corporativas](https://www.okta.com/integrations/github-enterprise-cloud-enterprise-accounts) na na rede de integração do Okta e clique em **Adicionar integração**.
{% data reusables.saml.okta-dashboard-click-applications %}
1. Opcionalmente, à direita do "Etiqueta do aplicativo", digite um nome descritivo para o aplicativo.
1. À direita da "Empresas de {% data variables.product.prodname_dotcom %}", digite o nome da conta corporativa. Por exemplo, se a URL da conta corporativa for `https://github.com/enterprises/octo-corp`, digite `octo-corp`.
1. Clique em **Cpncluído**.

## Habilitar e e testar o SAML SSO

{% data reusables.saml.okta-sign-into-your-account %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.click-enterprise-account-application %}
{% data reusables.saml.assign-yourself-to-okta %}
{% data reusables.saml.okta-sign-on-tab %}
1. À direita das configurações, clique em **Editar**.
1. Em "Atributos de SAML configurados", à direita de "grupos", use o menu suspenso e selecione **Correspondências de regex**.
1. À direita do menu suspenso, digite `.*.*`.
1. Clique em **Salvar**.
{% data reusables.saml.okta-view-setup-instructions %}
1. Habilite o SAML para a conta corporativa usando as informações nas instruções de configuração. Para obter mais informações, consulte "[Configurar logon único SAML para a sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

## Criar grupos no Okta

1. No Okta, crie um grupo para corresponder a cada organização pertencente à conta corporativa. O nome de cada grupo deve corresponder ao nome da conta da organização (não ao nome de exibição da organização). Por exemplo, se a URL da organização for `https://github.com/octo-org`, nomeie o grupo `octo-org`.
1. Atribua o aplicativo que você criou para a sua conta corporativa a cada grupo. {% data variables.product.prodname_dotcom %} receberá todos os `grupos` de dados para cada usuário.
1. Adicione usuários a grupos baseados nas organizações às quais você deseja que os usuários pertençam.
