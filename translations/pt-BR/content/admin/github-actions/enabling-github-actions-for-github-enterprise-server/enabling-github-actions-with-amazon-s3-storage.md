---
title: Habilitar o GitHub Actions com armazenamento do Amazon S3
intro: 'Você pode habilitar o {% data variables.product.prodname_actions %} no {% data variables.product.prodname_ghe_server %} e usar o armazenamento do Amazon S3 para armazenar dados gerados por execuções de fluxo de trabalho.'
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
  - /admin/github-actions/enabling-github-actions-with-amazon-s3-storage
shortTitle: Amazon S3 storage
ms.openlocfilehash: dd0f4c7135def456212de3355d6f6af17076c40c
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192982'
---
{% data reusables.actions.enterprise-storage-about %}

## Pré-requisitos

{% note %}

**Observação:** os únicos provedores de armazenamento S3 com suporte {% data variables.product.prodname_dotcom %} são o Amazon S3 e o Gateway do MinIO para NAS.

{% data reusables.actions.enterprise-s3-tech-partners %}

{% endnote %}

Antes de habilitar {% data variables.product.prodname_actions %}, certifique-se de que você realizou os seguintes passos:

* Crie seu bucket do Amazon S3 para armazenar dados gerados pelas execuções do fluxo de trabalho. {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}
  
{% data reusables.actions.enterprise-common-prereqs %}

## Habilitar {% data variables.product.prodname_actions %} com armazenamento do Amazon S3

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. Em "Armazenamento de Logs e Artefatos", selecione **Amazon S3** e insira os detalhes do bucket de armazenamento:

   * **URL de Serviço da AWS**: a URL de serviço do bucket. Por exemplo, se o bucket S3 foi criado na região `us-west-2`, esse valor deve ser `https://s3.us-west-2.amazonaws.com`.

     Para obter mais informações, confira "[Pontos de extremidade de serviço da AWS](https://docs.aws.amazon.com/general/latest/gr/rande.html)" na documentação da AWS.
   * **Bucket da AWS S3**: o nome do bucket S3.
   * **Chave de Acesso da AWS S3** e **Chave Secreta da AWS S3**: a ID da chave de acesso da AWS e a chave secreta do bucket. Para obter mais informações sobre como gerenciar chaves de acesso da AWS, confira a "[Documentação de gerenciamento de identidades e acesso da AWS](https://docs.aws.amazon.com/iam/index.html)".

   ![Botão de opção usado para selecionar o Amazon S3 Storage e campos para a configuração do S3](/assets/images/enterprise/management-console/actions-aws-s3-storage.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
