---
title: Gerenciar permissões de usuário para sua organização
intro: 'Você pode controlar quais usuários da sua organização podem usar {% data variables.product.prodname_codespaces %}.'
permissions: 'To manage user permissions for {% data variables.product.prodname_codespaces %} for an organization, you must be an organization owner.'
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Permissions
  - Administrator
---

{% data reusables.codespaces.release-stage %}

### Sobre as permissões de usuário para {% data variables.product.prodname_codespaces %}

Os proprietários da organização podem controlar quais usuários da sua organização podem criar e usar cdespaces.

Para usar codespaces na sua organização, os usuários devem ter pelo menos acesso de gravação aos repositórios onde desejam usar o codespace. Você pode habilitar os codespaces para todos os usuários da sua organização ou apenas para usuários específicos.

Por padrão, um codespace só pode acessar o repositório onde foi criado. Se você quiser que os codespaces na sua organização possam acessar outros repositórios da organização que o criador do codespace possa acessar, consulte "[Gerenciar acesso e segurança para {% data variables.product.prodname_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)".

### Configurar quais usuários da sua organização podem usar {% data variables.product.prodname_codespaces %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Em "Permissões de usuário", selecione uma das seguintes opções:

   * **Desabilitado** para não permitir que nenhum integrante da organização use {% data variables.product.prodname_codespaces %}.
   * **Permitir para todos os usuários** para permitir que todos os integrantes da sua organização usem {% data variables.product.prodname_codespaces %}.
   * **Usuários selecionados** para selecionar integrantes específicos da organização para usar {% data variables.product.prodname_codespaces %}.

   ![Botões de opção para "Permissões do usuário"](/assets/images/help/codespaces/organization-user-permission-settings.png)
