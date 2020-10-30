---
title: Configurar a visibilidade padrão de novos repositórios no appliance
intro: 'Você pode definir a visibilidade padrão de todos os repositórios criados pela interface da web no appliance do {% data variables.product.prodname_ghe_server %} como privada ou pública.'
redirect_from:
  - /enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance
versions:
  enterprise-server: '*'
---

Cada vez que alguém criar um novo repositório no {% data variables.product.product_location_enterprise %}, essa pessoa deve escolher uma visibilidade para o repositório. Ao optar por uma configuração de visibilidade padrão para a instância, você escolhe qual visibilidade será selecionada por padrão. Para obter mais informações sobre a visibilidade de repositório, consulte "[Sobre a visibilidade do repositório](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)".

Se um administrador do site impedir que os membros criem certos tipos de repositórios, os membros não serão capazes de criar esse tipo de repositório, mesmo se a configuração de visibilidade for padrão para esse tipo. Para obter mais informações, consulte "[Restringir a criação de repositórios na instância](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)".

{% tip %}

**Dica:** é possível restringir a capacidade de alterar a visibilidade do repositório apenas a administradores do site. Para obter mais informações, consulte "[Impedir os usuários de alterarem a visibilidade do repositório](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility)".

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
1. Em "Default repository visibility" (Visibilidade padrão do repositório), clique no menu suspenso e selecione uma visibilidade padrão.![Menu suspenso para definir a visibilidade padrão do repositório da instância](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}
