---
title: Migrar uma equipe de administradores para permissões de organização aprimoradas
intro: 'Se sua organização foi criada depois de setembro de 2015, tem permissões de organização aprimoradas por padrão. Organizações criadas antes de setembro de 2015 podem precisar migrar proprietários e equipes de administradores antigos para o modelo de permissões aprimoradas. Integrantes de equipes de administradores legadas mantêm automaticamente a capacidade de criar repositórios até que as equipes sejam migradas para o modelo de permissões de organização aprimoradas.'
redirect_from:
  - /articles/migrating-your-previous-admin-teams-to-the-improved-organization-permissions/
  - /articles/migrating-admin-teams-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/migrating-admin-teams-to-improved-organization-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - organizations
  - teams
---

Por padrão, todos os integrantes da organização podem criar repositórios. Se você restringir [as permissões de criação de repositórios](/articles/restricting-repository-creation-in-your-organization) para proprietários de organizações e sua organização foi criada sob a estrutura de permissões de organização legadas, os integrantes das equipes de administradores legadas ainda conseguirão criar repositórios.

Equipes de administradores legadas são equipes que foram criadas com o nível de permissão de administrador na estrutura de permissões de organização legadas. Integrantes dessas equipes conseguiam criar repositórios para a organização, e essa capacidade foi preservada na estrutura de permissões de organização aprimoradas.

Você pode remover essa capacidade migrando suas equipes de administradores legadas para as permissões de organização aprimoradas.

Para obter mais informações, consulte "[Níveis de permissão do repositório para organizações](/articles/repository-permission-levels-for-an-organization)".

{% warning %}

**Aviso:** se sua organização desabilitou [as permissões de criação de repositórios](/articles/restricting-repository-creation-in-your-organization) para todos os integrantes, alguns integrantes de equipes de administradores legadas podem perder as permissões de criação de repositórios. Se a organização habilitou a criação de repositórios pelos integrantes, migrar as equipes de administradores legadas para permissões de organização aprimoradas não afetará a capacidade de criação de repositórios pelos integrantes de equipes.

{% endwarning %}

### Migrar todas as equipes de administradores legadas da organização

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.teams_sidebar %}
1. Revise as equipes de administradores legadas da organização e clique em **Migrate all teams** (Migrar todas as equipes). ![Botão Migrate all teams (Migrar todas as equipes)](/assets/images/help/teams/migrate-all-legacy-admin-teams.png)
1. Leia as informações sobre possíveis alterações de permissões para integrantes dessas equipes e clique em **Migrate all teams** (Migrar todas as equipes). ![Botão Confirm migration (Confirmar migração)](/assets/images/help/teams/confirm-migrate-all-legacy-admin-teams.png)

### Migrar uma única equipe de administradores

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
1. Na caixa de descrição de equipe, clique em **Migrate team** (Migrar equipe). ![Botão Migrate team (Migrar equipe)](/assets/images/help/teams/migrate-a-legacy-admin-team.png)
