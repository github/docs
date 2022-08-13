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

Se alguém com acesso de administrador ao repositório de uma organização conceder a um integrante um nível maior de acesso para o repositório, o nível maior de acesso irá substituir a permissão de base.

{% ifversion custom-repository-roles %}
Se você criou uma função de repositório personalizado com uma função herdada com um acesso menor do que as permissões básicas da sua organização, qualquer integrante atribuído a essa função será padrão para as permissões básicas da organização, ao invés da função herdada. Para obter mais informações, consulte "[Gerenciando as funções de repositórios personalizados para uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
{% endif %}

## Definir permissões básicas

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Em "Permissões básicas", use o menu suspenso para selecionar novas permissões básicas. ![Selecionar novo nível de permissão a partir do menu suspenso de permissões básicas](/assets/images/help/organizations/base-permissions-drop-down.png)
6. Revise as alterações. Para confirmar, clique em **Alterar permissão-padrão para PERMISSÃO**. ![Revisar e confirmar a alteração das permissões básicas](/assets/images/help/organizations/base-permissions-confirm.png)

## Leia mais

- "[Funções do repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Adicionar colaboradores externos a repositórios na sua organização](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)"
