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
ms.openlocfilehash: cb71a379f139bf264fa4a40786434d5cfeed8366
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145094985'
---
## Pré-requisitos

{% data reusables.actions.enterprise-s3-support-warning %}

Antes de habilitar {% data variables.product.prodname_actions %}, certifique-se de que você realizou os seguintes passos:

* Crie seu bucket do Amazon S3 para armazenar dados gerados pelas execuções do fluxo de trabalho. {% indented_data_reference reusables.actions.enterprise-s3-permission spaces=2 %}
  
{% data reusables.actions.enterprise-common-prereqs %}

## Habilitar {% data variables.product.prodname_actions %} com armazenamento do Amazon S3

{% data reusables.enterprise_installation.ssh-into-instance %} {% data reusables.actions.perform-blob-storage-precheck %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. Em "Armazenamento de Logs e Artefatos", selecione **Amazon S3** e insira os detalhes do bucket de armazenamento:

   * **URL de Serviço da AWS**: a URL de serviço do bucket. Por exemplo, se o bucket S3 foi criado na região `us-west-2`, esse valor deve ser `https://s3.us-west-2.amazonaws.com`.

     Para obter mais informações, confira "[Pontos de extremidade de serviço da AWS](https://docs.aws.amazon.com/general/latest/gr/rande.html)" na documentação da AWS.
   * **Bucket da AWS S3**: o nome do bucket S3.
   * **Chave de Acesso da AWS S3** e **Chave Secreta da AWS S3**: a ID da chave de acesso da AWS e a chave secreta do bucket. Para obter mais informações sobre como gerenciar chaves de acesso da AWS, confira a "[Documentação de gerenciamento de identidades e acesso da AWS](https://docs.aws.amazon.com/iam/index.html)".

   ![Botão de opção usado para selecionar o Amazon S3 Storage e campos para a configuração do S3](/assets/images/enterprise/management-console/actions-aws-s3-storage.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
