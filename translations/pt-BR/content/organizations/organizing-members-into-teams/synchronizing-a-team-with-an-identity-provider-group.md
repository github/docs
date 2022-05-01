---
title: Sincronizar uma equipe com um grupo de provedor de identidade
intro: 'Você pode sincronizar uma equipe do {% data variables.product.product_name %} com um grupo de provedor de identidade (IdP) para adicionar e remover automaticamente os integrantes da equipe.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group
permissions: 'Organization owners and team maintainers can synchronize a {% data variables.product.prodname_dotcom %} team with an IdP group.'
versions:
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Sincronizar com um IdP
---

{% data reusables.enterprise-accounts.emu-scim-note %}

## Sobre a sincronização de equipes

{% data reusables.identity-and-permissions.about-team-sync %}

{% ifversion ghec %}Você pode conectar até cinco grupos de IdP a uma equipe de {% data variables.product.product_name %}.{% elsif ghae %}Você pode conectar uma equipe em {% data variables.product.product_name %} a um grupo de IdP. Todos os usuários do grupo são automaticamente adicionados à equipe e também adicionados à organização principal como integrantes. Ao desconectar um grupo de uma equipe, os usuários que se tornaram integrantes da organização por meio da associação da equipe serão removidos da organização.{% endif %} Você pode atribuir um grupo de IdP a várias equipes de {% data variables.product.product_name %}.

{% ifversion ghec %}A sincronização de equipes não é compatível com grupos de IdP com mais de 5000 integrantes.{% endif %}

Uma vez que uma equipe do {% data variables.product.prodname_dotcom %} está conectada a um grupo de IdP, o administrador do IdP deve efetuar as alterações da associação da equipe por meio do provedor de identidade. Você não pode gerenciar a associação da equipe em {% data variables.product.product_name %}{% ifversion ghec %} ou usando a API{% endif %}.

{% ifversion ghec %}{% data reusables.enterprise-accounts.team-sync-override %}{% endif %}

{% ifversion ghec %}
Todas as alterações de membros da equipe feitas através do seu IdP aparecerão no log de auditoria do {% data variables.product.product_name %} como alterações feitas pelo bot de sincronização de equipe. Seu IdP enviará dados de membros da equipe para {% data variables.product.prodname_dotcom %} uma vez a cada hora. A conexão de uma equipe a um grupo de IdP pode remover alguns integrantes da equipe. Para obter mais informações, consulte "[Requisitos para integrantes de equipes sincronizadas](#requirements-for-members-of-synchronized-teams)".
{% endif %}

{% ifversion ghae %}
Quando o membro do grupo for alterado no seu IdP, este enviará uma solicitação SCIM com as alterações para {% data variables.product.product_name %} de acordo com o agendamento determinado pelo seu IdP. Qualquer solicitação que altere a equipe de {% data variables.product.prodname_dotcom %} equipe ou associação da organização será registrada no log de auditoria como alterações feitas pela conta usada para configurar provisionamento do usuário. Para obter mais informações sobre essa conta, consulte "[Configurar o provisionamento de usuários para sua empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)". Para obter mais informações sobre o agendamento de pedidos do SCIM, consulte "[Verificar o status do provisionamento do usuário](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/application-provisioning-when-will-provisioning-finish-specific-user)" na documentação da Microsoft.
{% endif %}

As equipes principais não podem sincronizar com grupos de IdP. Se a equipe que você deseja conectar a um grupo IdP for uma equipe principal, recomendamos criar uma equipe nova ou remover as relações aninhadas que fazem da sua equipe uma equipe principal. Para obter mais informações, consulte "[Sobre as equipes](/articles/about-teams#nested-teams)"[Criar uma equipe](/organizations/organizing-members-into-teams/creating-a-team), e "[Mover uma equipe para a hierarquia da sua organização](/articles/moving-a-team-in-your-organizations-hierarchy)

Para gerenciar o acesso ao repositório de qualquer equipe do {% data variables.product.prodname_dotcom %} incluindo equipes conectadas a um grupo de IdP, você deve fazer alterações com o {% data variables.product.product_name %}. Para obter mais informações, consulte "[Sobre equipes](/articles/about-teams)" e "[Gerenciar o acesso da equipe ao repositório de uma organização](/articles/managing-team-access-to-an-organization-repository)".

{% ifversion ghec %}Você também pode gerenciar a sincronização de equipes com a API. Para obter mais informações, consulte "[Sincronização de equipe](/rest/reference/teams#team-sync)".{% endif %}

{% ifversion ghec %}
## Requisitos para integrantes de equipes sincronizadas

Após conectar uma equipe a um grupo de IdP, a sincronização da equipe adicionará cada integrante do grupo IdP à equipe correspondente em {% data variables.product.product_name %} apenas se:
- A pessoa for integrante da organização em {% data variables.product.product_name %}.
- The person has already logged in with their personal account on {% data variables.product.product_name %} and authenticated to the organization or enterprise account via SAML single sign-on at least once.
- A identidade SSO da pessoa é um integrante do grupo IdP.

As equipes ou integrantes de grupo que não atenderem a esses critérios serão automaticamente removidos da equipe em {% data variables.product.product_name %} e perderão o acesso aos repositórios. Revogar a identidade vinculada a um usuário também removerá o usuário de quaisquer equipes mapeadas com os grupos de IdP. Para obter mais informações, consulte "[Visualizando e gerenciando o acesso do SAML de um membro da sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)" e "[Visualizando e gerenciando o acesso do SAML de um usuário da sua organização](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity)."

Um integrante removido da equipe pode ser adicionado de volta a uma equipe automaticamente após efetuar a autenticação na conta da organização ou na conta corporativa usando SSO e será movidos para o grupo de IdP conectado.

Para evitar a remoção involuntária dos integrantes da equipe, recomendamos a aplicar SSO SAML na conta da organização ou da empresa. criar novas equipes para sincronizar dados da associação e verificar a associação de grupo de IdP antes de sincronizar as equipes existentes. Para mais informações, consulte "[Aplicar logon único SAML para a sua organização](/articles/enforcing-saml-single-sign-on-for-your-organization)" e "[Configurando o logon único SAML para organizações na sua empresa](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

{% endif %}

## Pré-requisitos

{% ifversion ghec %}
Antes de você poder conectar uma equipe de {% data variables.product.product_name %} a um grupo de provedores de identidade, uma organização ou proprietário da empresa deverá habilitar a sincronização de equipes para a sua organização ou conta corporativa. Para mais informações, consulte "[Gerenciando a sincronização de equipes para a sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)" e "[Gerenciando a sincronização de equipes para organizações na sua conta corporativa](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)".

Para evitar a remoção involuntária dos integrantes da equipe, visite o portal administrativo do seu IdP e confirme se cada integrante atual da equipe está também nos grupos de IdP aos quais você deseja conectar a esta equipe. Se você não tiver acesso ao provedor de identidade, entre em contato com o administrador do IdP.

Você deve efetuar a autenticação usando SAML SSO. Para obter mais informações, consulte "[Autenticar com logon único de SAML](/articles/authenticating-with-saml-single-sign-on)".

{% elsif ghae %}
Antes de conectar uma equipe de {% data variables.product.product_name %} a um grupo de IdP, primeiro você deve configurar o provisionamento de usuários para {% data variables.product.product_location %} usando um Sistema suportado para Gerenciamento de Identidade entre Domínios (SCIM). Para obter mais informações, consulte "[Configurar provisionamento do usuário para sua empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

Quando o provisionamento de {% data variables.product.product_name %} for configurado usando o SCIM, você poderá atribuir o aplicativo de {% data variables.product.product_name %} a cada grupo de IdP que você deseja usar em {% data variables.product.product_name %}. Para obter mais informações, consulte [Configurar o provisionamento automático do usuário no GitHub AE](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-ae-provisioning-tutorial#step-5-configure-automatic-user-provisioning-to-github-ae) na documentação da Microsoft.
{% endif %}

## Conectar um grupo de IdP a uma equipe

Ao conectar um grupo de IdP a uma equipe de {% data variables.product.product_name %}, todos os usuários do grupo serão automaticamente adicionados à equipe. {% ifversion ghae %}Todos os usuários que não eram integrantes dos da organização principal também serão adicionados à organização.{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% ifversion ghec %}
6. Em "Grupos de provedores de identidade", use o menu suspenso e selecione até 5 grupos de provedores de identidade. ![Drop-down menu to choose identity provider groups](/assets/images/help/teams/choose-an-idp-group.png){% elsif ghae %}
6. No "Grupo de Provedores de Identidade", use o menu suspenso e selecione um grupo de provedores de identidade na lista. ![Drop-down menu to choose identity provider group](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png){% endif %}
7. Clique em **Save changes** (Salvar alterações).

## Desconectar um grupo de IdP de uma equipe

Se desconectar um grupo de IdP de uma equipe do {% data variables.product.prodname_dotcom %}, os integrantes da equipe atribuídos à equipe do {% data variables.product.prodname_dotcom %} por meio do grupo de IdP serão removidos da equipe. {% ifversion ghae %} Todos os usuários que eram integrantes da organização principal apenas por causa da conexão com a equipe também serão removidos da organização.{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% ifversion ghec %}
6. Em "Grupos de provedores de identidade", à direita do grupo de IdP que você deseja desconectar, clique em {% octicon "x" aria-label="X symbol" %}. ![Unselect a connected IdP group from the GitHub team](/assets/images/help/teams/unselect-idp-group.png){% elsif ghae %}
6. Em "Grupo de Provedores de Identidade", à direita do grupo de IdP que você deseja desconectar, clique em {% octicon "x" aria-label="X symbol" %}. ![Unselect a connected IdP group from the GitHub team](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png){% endif %}
7. Clique em **Save changes** (Salvar alterações).
