---
title: Impedir os usuários de alterarem a visibilidade do repositório
intro: 'É possível impedir que os usuários alterem a visibilidade dos repositórios pertencentes à organização no seu appliance do {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility
  - /enterprise/admin/user-management/preventing-users-from-changing-a-repositorys-visibility
versions:
  enterprise-server: '*'
---

Se você impedir que os integrantes alterem a visibilidade do repositório, somente os administradores do site poderão tornar privados os repositórios públicos ou tornar públicos os repositórios privados.

Se um administrador do site tiver restringido a criação do repositório somente aos proprietários da organização, os integrantes não poderão alterar a visibilidade do repositório. Além disso, se o administrador do site restringir a criação de repositórios apenas aos repositórios privados, os integrantes só conseguirão tornar privados os repositórios públicos. Para obter mais informações, consulte "[Restringir a criação de repositórios na instância](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)".

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. Em "Repository visibility change" (Alteração da visibilidade do repositório), revise as informações sobre a alteração da configuração. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-visibility-policy %}
