---
title: Sincronizar uma equipe com um grupo de provedor de identidade
intro: 'Você pode sincronizar uma equipe do {% data variables.product.prodname_dotcom %} com um grupo de provedor de identidade (IdP) para adicionar e remover automaticamente os integrantes da equipe.'
product: '{% data reusables.gated-features.team-synchronization %}'
permissions: 'Os proprietários da organização e mantenedores da equipe podem sincronizar uma equipe do {% data variables.product.prodname_dotcom %} com um grupo de IdP.'
versions:
  free-pro-team: '*'
---

{% data reusables.gated-features.okta-team-sync %}

### Sobre a sincronização de equipes

{% data reusables.identity-and-permissions.about-team-sync %}

Você pode conectar até cinco grupos de IdP a uma equipe do {% data variables.product.prodname_dotcom %}. Um grupo de IdP pode ser atribuído a várias equipes do {% data variables.product.prodname_dotcom %} sem restrição.

Uma vez que uma equipe do {% data variables.product.prodname_dotcom %} está conectada a um grupo de IdP, o administrador do IdP deve efetuar as alterações da associação da equipe por meio do provedor de identidade. Você não pode gerenciar a associação na equipe em {% data variables.product.product_name %} ou usar a API.

Todas as alterações de membros da equipe feitas através do seu IdP aparecerão no log de auditoria do {% data variables.product.product_name %} como alterações feitas pelo bot de sincronização de equipe. Seu IdP enviará dados de membros da equipe para {% data variables.product.prodname_dotcom %} uma vez a cada hora. A conexão de uma equipe a um grupo de IdP pode remover alguns integrantes da equipe. Para obter mais informações, consulte "[Requisitos para integrantes de equipes sincronizadas](#requirements-for-members-of-synchronized-teams)".

As equipes principais não podem sincronizar com grupos de IdP. Se a equipe que você deseja conectar a um grupo IdP for uma equipe principal, recomendamos criar uma equipe nova ou remover as relações aninhadas que fazem da sua equipe uma equipe principal. Para obter mais informações, consulte "[Sobre as equipes](/articles/about-teams#nested-teams)"[Criar uma equipe](/github/setting-up-and-managing-organizations-and-teams/creating-a-team), e "[Mover uma equipe para a hierarquia da sua organização](/articles/moving-a-team-in-your-organizations-hierarchy)

Para gerenciar o acesso ao repositório de qualquer equipe do {% data variables.product.prodname_dotcom %} incluindo equipes conectadas a um grupo de IdP, você deve fazer alterações com o {% data variables.product.product_name %}. Para obter mais informações, consulte "[Sobre equipes](/articles/about-teams)" e "[Gerenciar o acesso da equipe ao repositório de uma organização](/articles/managing-team-access-to-an-organization-repository)".

Você também pode gerenciar a sincronização de equipe com a API. Para obter mais informações, consulte "[Sincronização de equipe](/v3/teams/team_sync/)".

### Requisitos para integrantes de equipes sincronizadas

Após conectar uma equipe a um grupo de IdP, os dados da associação para cada integrante da equipe serão sincronizados se a pessoa continuar a efetuar a autenticação usando o SAML SSO com a mesma identidade SSO em {% data variables.product.prodname_dotcom %} e se a pessoa continuar como integrante do grupo de IdP conectado.

As equipes ou integrantes de grupo existentes podem ser automaticamente removidos da equipe em {% data variables.product.prodname_dotcom %}. Todas as equipes ou membros de grupo que não efetuem a autenticação na conta da organização ou da empresa usando SSO podem perder o acesso aos repositórios. Todas as equipes existentes ou integrantes de grupo que não estiverem no grupo de IdP conectado podem perder o acesso aos repositórios.

Um integrante removido da equipe pode ser adicionado de volta a uma equipe automaticamente após efetuar a autenticação na conta da organização ou na conta corporativa usando SSO e será movidos para o grupo de IdP conectado.

Para evitar a remoção involuntária dos integrantes da equipe, recomendamos a aplicar SSO SAML na conta da organização ou da empresa. criar novas equipes para sincronizar dados da associação e verificar a associação de grupo de IdP antes de sincronizar as equipes existentes. Para obter mais informações, consulte "[Aplicando o logon único SAML para a sua organização](/articles/enforcing-saml-single-sign-on-for-your-organization)".

Se sua organização pertencer a uma conta corporativa, habilitar a sincronização de equipes para a conta corporativa irá substituir as configurações de sincronização de equipe no nível da organização. Para obter mais informações, consulte "[Aplicar as configurações de segurança na conta corporativa](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#managing-team-synchronization-for-organizations-in-your-enterprise-account)".

### Pré-requisitos

Antes poder conectar uma equipe a um grupo de provedores de identidade, uma organização ou dono da empresa deve habilitar a sincronização de equipes para sua organização ou conta corporativa. Para mais informações consulte "[Gerenciar a sincronização de equipes para sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)" e "[Aplicar configurações de segurança na conta corporativa](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#managing-team-synchronization-for-organizations-in-your-enterprise-account)".

Para evitar a remoção involuntária dos integrantes da equipe, visite o portal administrativo do seu IdP e confirme se cada integrante atual da equipe está também nos grupos de IdP aos quais você deseja conectar a esta equipe. Se você não tiver acesso ao provedor de identidade, entre em contato com o administrador do IdP.

Você deve efetuar a autenticação usando SAML SSO. Para obter mais informações, consulte "[Autenticar com logon único de SAML](/articles/authenticating-with-saml-single-sign-on)".

### Conectar um grupo de IdP a uma equipe

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. Em "Grupos de provedores de identidade", use o menu suspenso e selecione até 5 grupos de provedores de identidade. ![Menu suspenso para escolher grupos de provedores de identidade](/assets/images/help/teams/choose-an-idp-group.png)
6. Clique em **Save changes** (Salvar alterações).

### Desconectar um grupo de IdP de uma equipe

Se desconectar um grupo de IdP de uma equipe do {% data variables.product.prodname_dotcom %}, os integrantes da equipe atribuídos à equipe do {% data variables.product.prodname_dotcom %} por meio do grupo de IdP serão removidos da equipe.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
6. Em "Grupos de provedores de identidade", à direita do grupo de IdP que você deseja desconectar, clique em {% octicon "x" aria-label="X symbol" %}. ![Cancelar a seleção de um grupo de IdP conectado da equipe do GitHub](/assets/images/help/teams/unselect-idp-group.png)
7. Clique em **Save changes** (Salvar alterações).
