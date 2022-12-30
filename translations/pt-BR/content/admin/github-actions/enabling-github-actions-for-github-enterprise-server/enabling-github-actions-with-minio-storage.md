---
title: Como habilitar o GitHub Actions com armazenamento do MinIO
intro: 'Você pode habilitar o {% data variables.product.prodname_actions %} no {% data variables.product.prodname_ghe_server %} e usar o armazenamento do MinIO para armazenar dados gerados por execuções de fluxo de trabalho.'
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
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enabling-github-actions-with-minio-gateway-for-nas-storage
shortTitle: MinIO storage
ms.openlocfilehash: fec0720c8779ba643735156e6413005ae35f5d85
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192959'
---
{% data reusables.actions.enterprise-storage-about %}

## Pré-requisitos

Antes de habilitar {% data variables.product.prodname_actions %}, certifique-se de que você realizou os seguintes passos:

* Crie seu bucket do MinIO para armazenar dados gerados pelas execuções do fluxo de trabalho. Para obter mais informações sobre como instalar e configurar o MinIO, confira "[Armazenamento de Objetos de Alto Desempenho do MinIO](https://min.io/docs/minio/container/index.html)" e "[mc mb](https://min.io/docs/minio/linux/reference/minio-mc/mc-mb.html)" na documentação do MinIO.

  Para evitar contenção de recursos no dispositivo, recomendamos que o MinIO seja hospedado separadamente de {% data variables.location.product_location %}.

  {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %} {% data reusables.actions.enterprise-common-prereqs %}

## Habilitar {% data variables.product.prodname_actions %} com armazenamento do MinIO

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. Em "Armazenamento de Logs e Artefatos", selecione **Amazon S3** e insira os detalhes do bucket de armazenamento:

   * **URL de Serviço da AWS**: a URL para o serviço do MinIO. Por exemplo, `https://my-minio.example:9000`.
   * **Bucket da AWS S3**: o nome do bucket S3.
   * **Chave de Acesso da AWS S3** e **Chave Secreta da AWS S3**: o `MINIO_ACCESS_KEY` e o `MINIO_SECRET_KEY` usado para sua instância do MinIO.

   ![Botão de opção para selecionar o Amazon S3 Storage e os campos para a configuração do MinIO](/assets/images/enterprise/management-console/actions-minio-s3-storage.png)
1. Em "Armazenamento de Logs e Artefatos", selecione **Forçar estilo de caminho**.

   ![Caixa de seleção para Forçar estilo de caminho](/assets/images/enterprise/management-console/actions-minio-force-path-style.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
