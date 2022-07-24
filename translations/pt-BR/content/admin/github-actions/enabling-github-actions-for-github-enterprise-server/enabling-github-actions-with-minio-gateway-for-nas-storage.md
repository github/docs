---
title: Habilitar o GitHub Actions com MinIO Gateway para armazenamento NAS
intro: 'Você pode habilitar {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %} e usar MinIO Gateway para armazenamento NAS para armazenar dados gerados por execuções de fluxo de trabalho.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Storage
redirect_from:
  - /admin/github-actions/enabling-github-actions-with-minio-gateway-for-nas-storage
shortTitle: MinIO Gateway para armazenamento NAS
---

{% data reusables.actions.minio-gateways-removal %}

## Pré-requisitos

Antes de habilitar {% data variables.product.prodname_actions %}, certifique-se de que você realizou os seguintes passos:

* Para evitar contenção de recursos no dispositivo, recomendamos que o MinIO seja hospedado separadamente de {% data variables.product.product_location %}.
* Crie seu bucket para armazenar dados de fluxo de trabalho. {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}

{% data reusables.actions.enterprise-common-prereqs %}

## Habilitar {% data variables.product.prodname_actions %} com MinIO Gateway para armazenamento NAS

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.actions.perform-blob-storage-precheck %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.actions %}
{% data reusables.actions.enterprise-enable-checkbox %}
1. Em "Artefato & Registro de Armazenamento", selecione **Amazon S3**, e insira as informações do seu grupo de armazenamento:

   * **URL de serviço do AWS**: A URL para p serviço do seu MinIO. Por exemplo, `https://my-minio.example:9000`.
   * **Balde S3 AWS**: O nome do seu bucket S3.
   * **Chave de AWS S3 Access** e **Chave de AWS S3 Secret**: A `MINIO_ACCESS_KEY` e `MINIO_SECRET_KEY` utilizada para a sua instância do MinIO.

   ![Botão de opção para selecionar o Amazon S3 Storage e os campos para a configuração do MinIO](/assets/images/enterprise/management-console/actions-minio-s3-storage.png)
1. Em "Armazenamento de artefatos& registro", selecione **Forçar o estilo do caminho**. ![Caixa de seleção para forçar estilo de caminho](/assets/images/enterprise/management-console/actions-minio-force-path-style.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
