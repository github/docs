---
title: Enabling GitHub Packages with AWS
intro: 'Set up {% data variables.product.prodname_registry %} with AWS as your external storage.'
versions:
  enterprise-server: '>=2.22'
---

{% warning %}

**Avisos:**
- It is critical that you configure any restrictive access policies you need for your storage bucket, because {% data variables.product.company_short %} does not apply specific object permissions or additional access control lists (ACLs) to your storage bucket configuration. For example, if you make your bucket public, data in the bucket will be accessible to the public internet. For more information, see "[Setting bucket and object access permissions](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-permissions.html)" in the AWS Documentation.
- Recomendamos usar um bucket dedicado para {% data variables.product.prodname_registry %}, separar do bucket que você usa para o armazenamento de {% data variables.product.prodname_actions %}.
- Certifique-se de configurar o bucket que você vai querer usar no futuro. Não recomendamos alterar seu armazenamento depois de começar a usar {% data variables.product.prodname_registry %}.

{% endwarning %}

### Pré-requisitos

Before you can enable and configure {% data variables.product.prodname_registry %} on {% data variables.product.product_location_enterprise %}, you need to prepare your AWS storage bucket. To prepare your AWS storage bucket, we recommend consulting the official AWS docs at [AWS Documentation](https://docs.aws.amazon.com/index.html).

Ensure your AWS access key ID and secret have the following permissions:
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

### Enabling {% data variables.product.prodname_registry %} with AWS external storage

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
1. Under "Packages Storage", select **Amazon S3** and enter your storage bucket's details:
    - **AWS Service URL:** The service URL for your bucket. For example, if your S3 bucket was created in the `us-west-2 region`, this value should be `https://s3.us-west-2.amazonaws.com`.

      For more information, see "[AWS service endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html)" in the AWS documentation.

    - **AWS S3 Bucket:** The name of your S3 bucket dedicated to {% data variables.product.prodname_registry %}.
    - **AWS S3 Access Key** and **AWS S3 Secret Key**: The AWS access key ID and secret key to access your bucket.

      For more information on managing AWS access keys, see the "[AWS Identity and Access Management Documentation](https://docs.aws.amazon.com/iam/index.html)."

    ![Entry boxes for your S3 AWS bucket's details](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png)
{% endif %}
{% data reusables.enterprise_management_console.save-settings %}

### Próximas etapas

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
