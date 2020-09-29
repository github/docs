---
title: Configurar o GitLarge File Storage
intro: 'Assim que o [{% data variables.large_files.product_name_short %} estiver instalado](/articles/installing-git-large-file-storage/), você precisará associá-lo a um arquivo grande no seu repositório.'
redirect_from:
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-a-repository/
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-every-repository-owned-by-a-user-account-or-organization/
  - /enterprise/admin/articles/configuring-git-large-file-storage-for-your-appliance/
  - /enterprise/admin/installation/configuring-git-large-file-storage
versions:
  enterprise-server: '*'
---

### Sobre o {% data variables.large_files.product_name_long %}

{% data reusables.enterprise_site_admin_settings.configuring-large-file-storage-short-description %} Você pode usar o {% data variables.large_files.product_name_long %} com um único repositório, com todos os seus repositórios pessoais ou da organização, ou com todos os repositórios na {% data variables.product.product_location_enterprise %}. Antes de poder habilitar o {% data variables.large_files.product_name_short %} para repositórios ou organizações específicos, é necessário habilitar o {% data variables.large_files.product_name_short %} no appliance.

{% data reusables.large_files.storage_assets_location %}
{% data reusables.large_files.rejected_pushes %}

Para obter mais informações, consulte "[Sobre o {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)", "[Controlar versões em arquivos grandes](/enterprise/user/articles/versioning-large-files/)" e acesse o [site do projeto do {% data variables.large_files.product_name_long %}](https://git-lfs.github.com/).

### Configurar o {% data variables.large_files.product_name_long %} no appliance

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. No menu suspenso em "{% data variables.large_files.product_name_short %} access" (Acesso ao {% data variables.large_files.product_name_short %}), clique em **Enabled** (Habilitado) ou **Disabled** (Desabilitado). ![Acesso ao Git LFS](/assets/images/enterprise/site-admin-settings/git-lfs-admin-center.png)

### Configurar o {% data variables.large_files.product_name_long %} em um repositório específico

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
{% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}

### Configurar o {% data variables.large_files.product_name_long %} para cada repositório pertencente a uma conta ou organização

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
{% data reusables.enterprise_site_admin_settings.git-lfs-toggle %}
