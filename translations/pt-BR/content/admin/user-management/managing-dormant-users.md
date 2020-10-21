---
title: Gerenciar usuários inativos
redirect_from:
  - /enterprise/admin/articles/dormant-users/
  - /enterprise/admin/articles/viewing-dormant-users/
  - /enterprise/admin/articles/determining-whether-a-user-account-is-dormant/
  - /enterprise/admin/user-management/managing-dormant-users
intro: Uma conta de usuário é considerada inativa se não estiver ativa por no mínimo um mês. Você pode optar por suspender usuários inativos para liberar licenças de usuário.
versions:
  enterprise-server: '*'
---

O termo "atividade" inclui, entre outros:
- Fazer login no {% data variables.product.prodname_ghe_server %};
- Fazer comentários em problemas ou pull requests;
- Criar, excluir, ver e marcar repositórios como favoritos;
- Pushing commits.{% if currentVersion ver_gt "enterprise-server@2.21" %}
- Acessar recursos usando um token de acesso pessoal ou chave SSH.{% endif %}

### Exibir usuários inativos

É possível exibir uma lista de todos os usuários inativos que não foram suspensos e que não são administradores do site.

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. Na barra lateral esquerda, clique em **Dormant users** (Usuários inativos). ![Guia Dormant users (Usuários inativos)](/assets/images/enterprise/site-admin-settings/dormant-users-tab.png)
4. Para suspender todos os usuários inativos nesta lista, na parte superior da página, clique em **Suspend all** (Suspender todos). ![Botão Suspend all (Suspender todos)](/assets/images/enterprise/site-admin-settings/suspend-all.png)

### Determinar se uma conta de usuário está inativa

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
5. Na seção **User info** (Informações de usuário), um ponto vermelho com a palavra "Inativo" indica que a conta do usuário está inativa, e um ponto verde com a palavra "Ativo" indica que a conta do usuário está ativa. ![Conta de usuário inativa](/assets/images/enterprise/stafftools/dormant-user.png) ![Conta de usuário ativa](/assets/images/enterprise/stafftools/active-user.png)

### Configurar o limite de inatividade

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. Em "Dormancy threshold" (Limite de inatividade), use o menu suspenso e clique no limite de inatividade desejado.![Menu suspenso do limite de inatividade](/assets/images/enterprise/site-admin-settings/dormancy-threshold-menu.png)
