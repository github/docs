---
title: Mapeando grupos do Okta com as equipes
shortTitle: Mapear grupos do Okta com equipes
intro: 'Você pode mapear os seus grupos do Okta com as equipes em {% data variables.product.prodname_ghe_managed %} para adicionar e remover automaticamente os integrantes da equipe.'
permissions: 'Enterprise owners can configure authentication and provisioning for {% data variables.product.prodname_ghe_managed %}.'
versions:
  ghae: '*'
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

{% data reusables.saml.okta-ae-sso-beta %}

## Sobre o mapeamento de equipe

Se você usar o Okta como seu IdP, você poderá mapear seu grupo do Okta com uma equipe em {% data variables.product.prodname_ghe_managed %}. Os integrantes do grupo do Okta irão tornar-se automaticamente integrantes da equipe de {% data variables.product.prodname_ghe_managed %} mapeada. Para configurar este mapeamento, você pode configurar o aplicativo do Okta "GitHub AE" para fazer envio por push do grupo e dos seus integrantes para {% data variables.product.prodname_ghe_managed %}. Em seguida, você pode escolher qual equipe em {% data variables.product.prodname_ghe_managed %} será mapeada com o grupo do Okta.

## Pré-requisitos

Você ou o administrador do Okta deve ser um administrador global ou um administrador de Função Privilegiada no Okta.

Você deve habilitar o logon único SAML com o Okta. Para obter mais informações, consulte "[Configurar logon único SAML para a sua empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

Você deve efetuar a autenticação na sua conta corporativa usando SAML SSO e o Okta. Para obter mais informações, consulte "[Autenticar com logon único de SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)".

## Atribuindo o seu grupo Okta ao aplicativo "GitHub AE"

1. No painel do Okta, abra as configurações do seu grupo.
1. Clique **Gerenciar aplicativos**. ![Adicionar grupo ao aplicativo](/assets/images/help/saml/okta-ae-group-add-app.png)

1. À direita do "GitHub AE", clique em **Atribuir**.

  ![Atribuir aplicativo](/assets/images/help/saml/okta-ae-assign-group-to-app.png)

1. Clique em **Cpncluído**.

## Fazendo envio por push do grupo do Okta para {% data variables.product.prodname_ghe_managed %}

Ao fazer envio por push de um grupo do Okta e mapear o grupo com uma equipe, todos os integrantes do grupo poderão efetuar o login em {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.okta-ae-applications-menu %}
{% data reusables.saml.okta-ae-configure-app %}

1. Clique **Envio por push de grupos**.

  ![Aba de Grupos Push](/assets/images/help/saml/okta-ae-push-groups-tab.png)

1. Selecione o menu suspenso de grupos de push e clique em **Encontrar grupos por nome**.

  ![Adicionar botão do grupo](/assets/images/help/saml/okta-ae-push-groups-add.png)

1. Digite o nome do grupo para faer envio por push para {% data variables.product.prodname_ghe_managed %}e, em seguida, clique em **Salvar**.

  ![Adicionar nome do grupo](/assets/images/help/saml/okta-ae-push-groups-by-name.png)

## Mapeando uma equipe para o grupo do Okta

Você pode mapear uma equipe na sua empresa com um grupo do Okta que você enviou por push anteriormente para {% data variables.product.prodname_ghe_managed %}. Os integrantes do grupo doOkta irão tornar-se automaticamente integrantes da equipe de {% data variables.product.prodname_ghe_managed %}. Todas as alterações subsequentes na associação do grupo do Okta serão automaticamente sincronizadas com a equipe de {% data variables.product.prodname_ghe_managed %}.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
6. Em "Grupo de Provedores de identidade", selecione o menu suspenso e clique em um grupo de provedores de identidade. ![Menu suspenso para escolher grupo de provedores de identidade](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
7. Clique em **Save changes** (Salvar alterações).

## Verificando o status das suas equipes mapeadas

Os proprietários de empresas podem usar o painel de administração do site para verificar como os grupos do Okta são mapeados com as equipes em {% data variables.product.prodname_ghe_managed %}.

1. Para acessar o painel, clique em {% octicon "rocket" aria-label="The rocket ship" %} no canto superior direito de qualquer página. ![Ícone de foguete para acessar as configurações de administrador do site](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

1. No painel esquerdo, clique em **Grupos externos**.

  ![Adicionar nome do grupo](/assets/images/help/saml/okta-ae-site-admin-external-groups.png)

1. Para visualizar mais informações sobre um grupo, na lista de grupos externos, clique em um grupo.

  ![Lista de grupos externos](/assets/images/help/saml/okta-ae-site-admin-list-groups.png)

1. Os detalhes do grupo incluem o nome do grupo do Okta, uma lista dos usuários do Okta que são integrantes do grupo, e a equipe correspondente mapeada em {% data variables.product.prodname_ghe_managed %}.

  ![Lista de grupos externos](/assets/images/help/saml/okta-ae-site-admin-group-details.png)

## Visualizando eventos de log de auditoria para grupos mapeados

 Para monitorar a atividade de SSO para grupos mapeados, você pode revisar os seguintes eventos no log de auditoria de {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.external-group-audit-events %}

{% data reusables.saml.external-identity-audit-events %}

For more information, see "[Reviewing the audit log for your organization](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)."
