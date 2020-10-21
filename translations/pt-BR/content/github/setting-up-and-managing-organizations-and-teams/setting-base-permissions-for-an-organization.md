---
title: Definir permissões básicas para uma organização
intro: Você pode definir permissões básicas para repositórios que uma organização possui.
permissions: Os proprietários da organização podem definir permissões básicas para uma organização.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre as permissões básicas para uma organização

É possível definir as permissões básicas que se aplicam a todos os integrantes da organização ao acessar qualquer um dos repositórios da organização. As permissões básicas não se aplicam a colaboradores externos.

{% if currentVersion == "free-pro-team@latest" %}Por padrão, os integrantes de uma organização terão permissões de **Leitura** nos repositórios da organização.{% endif %}

Se alguém com permissão de administrador no repositório de uma organização conceder a um membro um nível de permissão mais alto para o repositório, o nível mais alto de permissão irá substituir a permissão básica.

### Definir permissões básicas

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Em "Permissões básicas", use o menu suspenso para selecionar novas permissões básicas. ![Selecionar novo nível de permissão a partir do menu suspenso de permissões básicas](/assets/images/help/organizations/base-permissions-drop-down.png)
6. Revise as alterações. Para confirmar, clique em **Alterar permissão-padrão para PERMISSÃO**. ![Revisar e confirmar a alteração das permissões básicas](/assets/images/help/organizations/base-permissions-confirm.png)

### Leia mais

- "[Níveis de permissão do repositório da organização](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)"
- "[Adicionar colaboradores externos a repositórios na sua organização](/github/setting-up-and-managing-organizations-and-teams/adding-outside-collaborators-to-repositories-in-your-organization)"
