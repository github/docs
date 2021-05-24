---
title: Adicionar pessoas a equipes
redirect_from:
  - /enterprise/admin/articles/adding-teams/
  - /enterprise/admin/articles/adding-or-inviting-people-to-teams/
  - /enterprise/admin/guides/user-management/adding-or-inviting-people-to-teams/
  - /enterprise/admin/user-management/adding-people-to-teams
  - /admin/user-management/adding-people-to-teams
intro: 'Após a criação de uma equipe, os administradores da organização podem adicionar usuários da {% data variables.product.product_location %} e determinar quais repositórios eles poderão acessar.'
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Access management
  - Enterprise
  - Teams
  - User account
---
Cada equipe tem suas próprias [ permissões de acesso definidas individualmente para os repositórios pertencentes à organização](/articles/permission-levels-for-an-organization).

- Integrantes com função de Proprietário podem adicionar ou remover os integrantes atuais de todas as equipes da organização.
- Integrantes de equipes que concedem permissões de administrador só podem modificar a participação e as permissões de repositórios de sua própria equipe.

### Configurar uma equipe

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.invite_to_team %}
{% data reusables.organizations.review-team-repository-access %}

### Mapear equipes para grupos LDAP (em instâncias com sincronização LDAP para autenticação de usuários)

{% data reusables.enterprise_management_console.badge_indicator %}

Para adicionar um novo integrante a uma equipe sincronizada com um grupo LDAP, adicione o usuário como integrante do grupo LDAP ou entre em contato com o administrador do LDAP.
