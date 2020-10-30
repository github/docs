---
title: Restringir a criação de repositórios na instância
intro: 'Você pode escolher se os membros da organização em seu appliance {% data variables.product.prodname_ghe_server %} podem criar repositórios e quais tipos de repositórios os membros podem criar.'
redirect_from:
  - /enterprise/admin/user-management/restricting-repository-creation-in-your-instance
versions:
  enterprise-server: '*'
---

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Em "Repository creation" (Criação de repositório), revise as informações sobre como alterar a configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
{% if currentVersion ver_gt "enterprise-server@2.19" %}
{% data reusables.enterprise-accounts.repo-creation-policy %}
{% data reusables.enterprise-accounts.repo-creation-types %}
{% else %}
6. Em "Repository creation" (Criação de repositórios), use o menu suspenso e escolha uma política. ![Menu suspenso com opções de políticas de criação de repositórios](/assets/images/enterprise/site-admin-settings/repository-creation-drop-down.png)
{% endif %}
