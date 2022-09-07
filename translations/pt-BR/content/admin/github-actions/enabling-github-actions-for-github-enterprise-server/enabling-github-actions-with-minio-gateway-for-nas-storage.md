---
title: Habilitar o GitHub Actions com MinIO Gateway para armazenamento NAS
intro: 'Você pode habilitar {% data variables.product.prodname_actions %} no {% data variables.product.prodname_ghe_server %} e usar o Gateway MinIO para armazenamento NAS para armazenar dados gerados por execuções de fluxo de trabalho.'
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
shortTitle: MinIO Gateway for NAS storage
ms.openlocfilehash: 9fced80eb2a486ffae44d21f3fad278a933eb92d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146682306'
---
{% data reusables.actions.minio-gateways-removal %}

## Pré-requisitos

Antes de habilitar {% data variables.product.prodname_actions %}, certifique-se de que você realizou os seguintes passos:

* Para evitar contenção de recursos no dispositivo, recomendamos que o MinIO seja hospedado separadamente de {% data variables.product.product_location %}.
* Crie seu bucket para armazenar dados de fluxo de trabalho. {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}
  
{% data reusables.actions.enterprise-common-prereqs %}

## Habilitar {% data variables.product.prodname_actions %} com MinIO Gateway para armazenamento NAS

{% data reusables.enterprise_installation.ssh-into-instance %} {% data reusables.actions.perform-blob-storage-precheck %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. Em "Armazenamento de Logs e Artefatos", selecione **Amazon S3** e insira os detalhes do bucket de armazenamento:

   * **URL de Serviço da AWS**: a URL para o serviço do MinIO. Por exemplo, `https://my-minio.example:9000`.
   * **Bucket da AWS S3**: o nome do bucket S3.
   * **Chave de Acesso da AWS S3** e **Chave Secreta da AWS S3**: o `MINIO_ACCESS_KEY` e o `MINIO_SECRET_KEY` usado para sua instância do MinIO.

   ![Botão de opção para selecionar o Amazon S3 Storage e os campos para a configuração do MinIO](/assets/images/enterprise/management-console/actions-minio-s3-storage.png)
1. Em "Armazenamento de Logs e Artefatos", selecione **Forçar estilo de caminho**.
   ![Caixa de seleção de Forçar estilo de caminho](/assets/images/enterprise/management-console/actions-minio-force-path-style.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
