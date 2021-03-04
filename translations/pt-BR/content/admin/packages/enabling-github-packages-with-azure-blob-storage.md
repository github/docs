---
title: Habilitar o GitHub Packages com o Azure Blob Storage
intro: 'Configure o {% data variables.product.prodname_registry %} com o Azure Blob Storage como seu armazenamento externo.'
versions:
  enterprise-server: '>=3.0'
---

{% warning %}

**Avisos:**
- É fundamental que você defina as políticas de acesso restritivas necessárias para o seu bucket de armazenamento, porque {% data variables.product.company_short %} não aplica permissões específicas de objeto ou listas de controle de acesso adicionais (ACLs) à sua configuração do bucket de armazenamento. Por exemplo, se você tornar o seu bucket público, os dados no bucket poderão ser acessados através da Internet pública.
- Recomendamos usar um bucket dedicado para {% data variables.product.prodname_registry %}, separar do bucket que você usa para o armazenamento de {% data variables.product.prodname_actions %}.
- Certifique-se de configurar o bucket que você vai querer usar no futuro. Não recomendamos alterar seu armazenamento depois de começar a usar {% data variables.product.prodname_registry %}.

{% endwarning %}

### Pré-requisitos

Antes de poder habilitar e configurar {% data variables.product.prodname_registry %} em {% data variables.product.product_location_enterprise %}, você precisa preparar o bucket do seu Azure Blob Storage. Para preparar o bucket do seu Azure Blob Storage, recomendamos consultar a documentação oficial do do Azure Blob Storage no [site oficial da documentação do Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/).

### Habilitar {% data variables.product.prodname_registry %} com o Azure Blob Storage

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}
1. Em "Armazenamento de pacotes", selecione **Azure Blob Storage** e insira o nome do seu contêiner do Azure para seus pacotes de armazenamento e string de conexão. ![Nome do contêiner do Azure Blob Storage e caixas de string de conexão](/assets/images/help/package-registry/azure-blob-storage-settings.png)

{% data reusables.enterprise_management_console.save-settings %}

### Próximas etapas

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
