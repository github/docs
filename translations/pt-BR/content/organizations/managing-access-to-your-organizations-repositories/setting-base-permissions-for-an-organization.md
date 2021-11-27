---
title: Definir permissões básicas para uma organização
intro: Você pode definir permissões básicas para repositórios que uma organização possui.
permissions: Organization owners can set base permissions for an organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Definir permissões básicas
---

## Sobre as permissões básicas para uma organização

É possível definir as permissões básicas que se aplicam a todos os integrantes da organização ao acessar qualquer um dos repositórios da organização. As permissões básicas não se aplicam a colaboradores externos.

{% ifversion fpt or ghec %}Por padrão, os integrantes de uma organização terão permissão de **leitura** nos repositórios da organização.{% endif %}

If someone with admin access to an organization's repository grants a member a higher level of access for the repository, the higher level of access overrides the base permission.

{% ifversion ghec %}
If you've created a custom repository role with an inherited role that is lower access than your organization's base permissions, any members assigned to that role will default to the organization's base permissions rather than the inherited role. For more information, see "[Managing custom repository roles for an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)."
{% endif %}

## Definir permissões básicas

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Em "Permissões básicas", use o menu suspenso para selecionar novas permissões básicas. ![Selecionar novo nível de permissão a partir do menu suspenso de permissões básicas](/assets/images/help/organizations/base-permissions-drop-down.png)
6. Revise as alterações. Para confirmar, clique em **Alterar permissão-padrão para PERMISSÃO**. ![Revisar e confirmar a alteração das permissões básicas](/assets/images/help/organizations/base-permissions-confirm.png)

## Leia mais

- "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Adicionar colaboradores externos a repositórios na sua organização](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)"
