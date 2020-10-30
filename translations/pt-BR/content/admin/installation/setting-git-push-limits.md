---
title: Definir limites de push do Git
intro: É possível exigir um tamanho máximo para objetos Git em um repositório.
redirect_from:
  - /enterprise/admin/guides/installation/git-server-settings/
  - /enterprise/admin/articles/setting-git-push-limits/
  - /enterprise/admin/installation/setting-git-push-limits
versions:
  enterprise-server: '*'
---

Para manter o tamanho do repositório gerenciável e evitar problemas de desempenho, você pode configurar um limite de tamanho de arquivo para os repositórios em sua instância.

Por padrão, quando você impõe os limites de upload do repositório, as pessoas não podem adicionar ou atualizar arquivos maiores que 100 MB.

{% if currentVersion ver_lt "enterprise-server@2.20" %}
{% tip %}

**Observação:** o limite de push do Git será verificado somente em arquivos com mais de {% data variables.large_files.warning_size %}. Se quiser definir um limite de push mais baixo, entre em contato com o {% data variables.contact.contact_ent_support %} para obter assistência.

{% endtip %}
{% endif %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. Em "Repository upload limit" (Limite de upload de repositório), use o menu suspenso e clique para definir o tamanho máximo do objeto. ![Menu suspenso com opções de tamanho máximo de objeto](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. Opcionalmente, para aplicar um limite de upload máximo para todos os repositórios no {% data variables.product.product_location_enterprise %}, selecione **Limitar todos os repositórios** ![Opção de limitar o tamanho máximo de objeto em todos os repositórios](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png)
