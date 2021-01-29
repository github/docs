---
title: Habilitar o GitHub Actions com MinIO Gateway para armazenamento NAS
intro: 'Você pode habilitar {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %} e usar MinIO Gateway para armazenamento NAS para armazenar artefatos gerados por execuções de fluxo de trabalho.'
permissions: 'Os administradores de site podem ativar o {% data variables.product.prodname_actions %} e definir as configurações empresariais.'
versions:
  enterprise-server: '>=3.0'
---

### Pré-requisitos

{% data reusables.actions.enterprise-s3-support-warning %}

Antes de habilitar {% data variables.product.prodname_actions %}, certifique-se de que você realizou os seguintes passos:

* Para evitar contenção de recursos no dispositivo, recomendamos que o MinIO seja hospedado separadamente de {% data variables.product.product_location %}.
* Crie seu bucket para armazenar artefatos de fluxo de trabalho. Para configurar seu bucket e chave de acesso, consulte a [Documentação do MinIO](https://docs.min.io/docs/minio-gateway-for-nas.html). {% indented_data_reference site.data.reusables.actions.enterprise-s3-permission spaces=2 %}

{% data reusables.actions.enterprise-common-prereqs %}

### Habilitar {% data variables.product.prodname_actions %} com MinIO Gateway para armazenamento NAS

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.actions %}
{% data reusables.actions.enterprise-enable-checkbox %}
1. Em "Artefato & Registro de Armazenamento", selecione **Amazon S3**, e insira as informações do seu grupo de armazenamento:

   * **URL de serviço do AWS**: A URL para p serviço do seu MinIO. Por exemplo, `https://my-minio.example:9000`.
   * **Balde S3 AWS**: O nome do seu bucket S3.
   * **AWS S3 Access Key** and **AWS S3 Secret Key**: The `MINIO_ACCESS_KEY` and `MINIO_SECRET_KEY` used for your MinIO instance. For more information, see the [MinIO documentation](https://docs.min.io/docs/minio-gateway-for-nas.html).

   ![Radio button for selecting Amazon S3 Storage and fields for MinIO configuration](/assets/images/enterprise/management-console/actions-minio-s3-storage.png)
1. Under "Artifact & Log Storage", select **Force path style**. ![Checkbox to Force path style](/assets/images/enterprise/management-console/actions-minio-force-path-style.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
