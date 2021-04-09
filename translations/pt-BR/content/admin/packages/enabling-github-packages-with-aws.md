---
title: Habilitar o GitHub Packeges com AWS
intro: 'Configure {% data variables.product.prodname_registry %} com AWS como seu armazenamento externo.'
versions:
  enterprise-server: '>=2.22'
topics:
  - enterprise
---

{% warning %}

**Avisos:**
- É fundamental que você configure todas as políticas de acesso restritivas necessárias para o seu bucket de armazenamento, porque {% data variables.product.company_short %} não aplica permissões específicas de objeto ou listas de controle de acesso adicionais (ACLs) à sua configuração do bucket de armazenamento. Por exemplo, se o seu bucket for público, os dados do bucket poderão ser acessados por meio da internet pública. Para obter mais informações, consulte "[Configurar as permissões de acesso de objetos](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-permissions.html)" na documentação do AWS.
- Recomendamos usar um bucket dedicado para {% data variables.product.prodname_registry %}, separar do bucket que você usa para o armazenamento de {% data variables.product.prodname_actions %}.
- Certifique-se de configurar o bucket que você vai querer usar no futuro. Não recomendamos alterar seu armazenamento depois de começar a usar {% data variables.product.prodname_registry %}.

{% endwarning %}

### Pré-requisitos

Antes de poder habilitar e configurar {% data variables.product.prodname_registry %} em {% data variables.product.product_location_enterprise %}, você precisa preparar o bucket do seu armazenamento do AWS. Para preparar seu bucket de armazenamento do AWS, recomendamos consultar a documentação oficial do AWS na [Documentação do AWS](https://docs.aws.amazon.com/index.html).

Certifique-se de que o seu ID da sua chave e o segredo de acesso do AWS tenham as permissões a seguir:
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

### Habilitar {% data variables.product.prodname_registry %} com armazenamento externo do AWS

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
{% data reusables.package_registry.enable-enterprise-github-packages %}
{% if currentVersion == "enterprise-server@2.22" %}
1. Em "URL de serviço do AWS", digite a URL do ponto de extremidade S3 para a região do seu bucket. ![Campo da URL do Serviço do AWS](/assets/images/enterprise/site-admin-settings/storage-service-url.png)
1. Em "Bucket do AWS S3", digite o nome do bucket S3 que você deseja usar para armazenar artefatos do pacote. ![Campo de Bucket para AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-bucket.png)
1. Em "Chave de acesso do AWS S3", digite sua chave de acesso para o S3. ![Campo Chave de acesso do AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-access-key.png)
1. Em "Chave secreta do AWS S3", digite sua chave secreta para S3. ![Campo Chave Secreta do AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-secret-key.png)
1. Em "Região do AWS S3", digite sua região para o S3. ![Campo Região do AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-region.png)
{% endif %}
{% if currentVersion ver_gt "enterprise-server@2.22" %}
1. Em "Armazenamento de pacotes", selecione **Amazon S3** e insira os detalhes do seu bucket de armazenamento:
    - **URL do serviço do AWS:** A URL do serviço para seu bucket. Por exemplo, se seu bucket de S3 foi criado em `us-west-2 region`, esse valor deve ser `https://s3.us-west-2.guide/s.com`.

      Para obter mais informações, consulte "[pontos de extremidade do serviço AWS](https://docs.aws.amazon.com/general/latest/gr/rande.html)" na documentação do AWS.

    - **Balde S3 AWS:** O nome do seu bucket do S3 dedicado a {% data variables.product.prodname_registry %}.
    - **AWS S3 Access Key** e **AWS S3 Secret Key**: O ID da chave de acesso e segredo do AWS para acessar o seu bucket.

      Para mais informações sobre como gerenciar as chaves de acesso do AWS, consulte a "[Documentação de identidade do AWS e gerenciamento de acesso](https://docs.aws.amazon.com/iam/index.html)".

    ![Caixas de entrada para detalhes do seu bucket do AWS S3](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png)
{% endif %}
{% data reusables.enterprise_management_console.save-settings %}

### Próximas etapas

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
