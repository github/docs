---
title: Habilitar o GitHub Packeges com o MinIO
intro: 'Configure {% data variables.product.prodname_registry %} com o MinIO como seu armazenamento externo.'
versions:
  enterprise-server: '>=2.22'
topics:
  - enterprise
---

{% warning %}

**Avisos:**
- É fundamental que você defina as políticas de acesso restritivas necessárias para o seu bucket de armazenamento, porque {% data variables.product.company_short %} não aplica permissões específicas de objeto ou listas de controle de acesso adicionais (ACLs) à sua configuração do bucket de armazenamento. Por exemplo, se você tornar o seu bucket público, os dados no bucket poderão ser acessados através da Internet pública.
- Recomendamos usar um bucket dedicado para {% data variables.product.prodname_registry %}, separar do bucket que você usa para o armazenamento de {% data variables.product.prodname_actions %}.
- Certifique-se de configurar o bucket que você vai querer usar no futuro. Não recomendamos alterar seu armazenamento depois de começar a usar {% data variables.product.prodname_registry %}.

{% endwarning %}
### Pré-requisitos
Antes de poder habilitar e configurar {% data variables.product.prodname_registry %} em {% data variables.product.product_location_enterprise %}, você precisa preparar seu grupo de armazenamento do MinIO. Para ajudá-lo a configurar rapidamente um bucket do MinIO e acessar as opções de personalização do MinIO, consulte o "[Guia de inícoio rápido para configurar seu bucket de armazenamento do MinIO para {% data variables.product.prodname_registry %}](/admin/packages/quickstart-for-configuring-your-minio-storage-bucket-for-github-packages)".

Certifique-se de que que o seu ID da chave de acesso e o segredo de armazenamento externo do MinIO tenham essas permissões:
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

### Habilitar {% data variables.product.prodname_registry %} com armazenamento externo do MinIO

Embora o MinIO atualmente não apareça na interface do usuário em "Armazenamento de Pacote", o MinIO ainda é {% if currentVersion == "enterprise-server@2. 2" %} oficialmente{% endif %} compatível com {% data variables.product.prodname_registry %} em {% data variables.product.prodname_enterprise %}. Além disso, observe que o armazenamento de objetos do MinIO é compatível com a API do S3 e você pode inserir detalhes do bucket do MinIO no lugar dos detalhes do AWS S3.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}
{% if currentVersion == "enterprise-server@2.22" %}
1. Em "URL de serviço do AWS" digite a URL do MinIO para a região do seu bucket. ![Campo da URL do Serviço do AWS](/assets/images/enterprise/site-admin-settings/storage-service-url.png)
1. Em "Bucket do AWS S3", digite o nome do bucket do MinIO que você deseja usar para armazenar artefatos do pacote. ![Campo de Bucket para AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-bucket.png)
1. Em "Chave de acesso do AWS S3", digite sua chave de acesso para o MinIO. ![Campo Chave de acesso do AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-access-key.png)
1. Em "Chave secreta do AWS S3", digite sua chave secreta para o MinIO. ![Campo Chave Secreta do AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-secret-key.png)
1. Em "Região do AWS S3", digite sua região para o MinIO. ![Campo Região do AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-region.png)
{% endif %}
{% if currentVersion ver_gt "enterprise-server@2.22" %}
1. Em "Armazenamento de pacotes", selecione **Amazon S3**.
1. Insira os detalhes do seu bucket de armazenamento do MinIO nas configurações de armazenamento do AWS.
    - **URL de serviço do AWS:** A URL de hospedagem do bucket do seu MinIO.
    - **Bucket do S3 AWS**: O nome do bucket do seu MinIO compatível com S3 e dedicado a {% data variables.product.prodname_registry %}.
    - **Chave de Acesso do AWS S3** e **Chave secreta do AWS S3**: Digite a chave de acesso do MinIO e a chave secreta para acessar seu bucket.

    ![Caixas de entrada para detalhes do seu bucket do AWS S3](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png)
{% endif %}
{% data reusables.enterprise_management_console.save-settings %}

### Próximas etapas

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
