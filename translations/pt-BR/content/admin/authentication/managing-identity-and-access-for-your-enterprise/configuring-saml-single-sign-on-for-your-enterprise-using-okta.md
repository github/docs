---
title: Configurar o logon único SAML para a sua empresa usando o Okta
intro: 'Você pode usar o logon único (SSO) da linguagem de declaração de markup (SAML) com o Okta para gerenciar automaticamente o acesso à sua conta corporativa em {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
type: how_to
shortTitle: Configurar o SAML com Okta
---

{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

{% data reusables.enterprise-accounts.emu-saml-note %}

## Sobre o SAML com Okta

Você pode controlar o acesso à conta corporativa no {% data variables.product.product_name %} e em outros aplicativos web, a partir de uma interface central, configurando a conta corporativa para usar SAML SSO com Okta, um provedor de identidade (IdP).

O SAML SSO controla e protege o acesso a recursos da conta corporativa, como, por exemplo, organizações, repositórios, problemas e pull requests. Para obter mais informações, consulte "[Configurar logon único SAML para a sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

{% data reusables.saml.switching-from-org-to-enterprise %} Para obter mais informações, consulte "[Alterando sua configuração do SAML de uma organização para uma conta corporativa](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)".

## Pré-requisitos

{% data reusables.saml.use-classic-ui %}

## Adicionar o aplicativo {% data variables.product.prodname_ghe_cloud %} no Okta

{% data reusables.saml.okta-admin-button %}
{% data reusables.saml.okta-dashboard-click-applications %}
{% data reusables.saml.add-okta-application %}
{% data reusables.saml.search-ghec-okta %}
1. Clique em "{% data variables.product.prodname_ghe_cloud %} - Contas corporativas".
1. Clique em **Salvar**.
1. Opcionalmente, à direita do "Etiqueta do aplicativo", digite um nome descritivo para o aplicativo. ![Campo da etiqueta do aplicativo](/assets/images/help/saml/okta-application-label.png)
1. À direita da "Empresas de {% data variables.product.prodname_dotcom %}", digite o nome da conta corporativa. Por exemplo, se a URL da conta corporativa for `https://github.com/enterprises/octo-corp`, digite `octo-corp`. ![Campo GitHub Enterprises](/assets/images/help/saml/okta-github-enterprises.png)
1. Clique em **Cpncluído**.

## Habilitar e e testar o SAML SSO

{% data reusables.saml.okta-admin-button %}
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

## Habilitar o SAML usando o provisionamento de usuário

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Em "Provisionamento de usuários de SAML", selecione **Habilitar provisionamento de usuário de SAML**. ![Caixa de seleção que habilita o provisionamento do usuário com SAML](/assets/images/help/business-accounts/user-provisioning.png)
1. Clique em **Salvar**.
1. Opcionalmente, habilite o desprovisionamento do usuário de SAML.
   - Selecione **Habilitar o desprovisionamento do usuário de SAML** e, em seguida, clique em **Salvar**. ![Caixa de seleção que habilita o desprovisionamento de usuário com SAML](/assets/images/help/business-accounts/saml-deprovisioning.png)
   - Leia o aviso e clique em **Habilitar o desprovisionamento de SAML**. ![Botão para habilitar o desaprovisionamento de usuários de SAML](/assets/images/help/business-accounts/saml-deprovisioning-confirm.png)
