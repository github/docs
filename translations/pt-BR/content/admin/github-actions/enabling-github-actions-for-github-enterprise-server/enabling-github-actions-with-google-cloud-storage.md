---
title: Como habilitar o GitHub Actions com o Google Cloud Storage
intro: 'Você pode habilitar o {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %} e usar o Google Cloud Storage para armazenar dados gerados por execuções de fluxo de trabalho.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  feature: actions-ghes-gcp-storage
type: how_to
topics:
  - Actions
  - Enterprise
  - Infrastructure
  - Storage
shortTitle: Google Cloud Storage
ms.openlocfilehash: abbac860ed3f6f1caaec1152b426762535b8fba4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108244'
---
{% note %}

**Observação:** o suporte do {% data variables.product.prodname_actions %} para o Google Cloud Storage está em versão beta e sujeito a alterações no momento.

{% endnote %}

## Pré-requisitos

Antes de habilitar {% data variables.product.prodname_actions %}, certifique-se de que você realizou os seguintes passos:

* Crie um bucket do Google Cloud Storage para armazenar dados gerados pelas execuções de fluxo de trabalho.
* Crie uma conta de serviço do Google Cloud que possa acessar o bucket e crie uma chave HMAC (Hash-based Message Authentication Code) para a conta de serviço. Para obter mais informações, confira "[Como criar e gerenciar chaves HMAC para contas de serviço](https://cloud.google.com/storage/docs/authentication/managing-hmackeys)" na documentação do Google Cloud.

  A conta de serviço precisa ter as seguintes [permissões de IAM (Gerenciamento de Identidades e Acesso)](https://cloud.google.com/storage/docs/access-control/iam-permissions) para o bucket:

  * `storage.objects.create`
  * `storage.objects.get`
  * `storage.objects.list`
  * `storage.objects.update`
  * `storage.objects.delete`
  * `storage.multipartUploads.create`
  * `storage.multipartUploads.abort`
  * `storage.multipartUploads.listParts`
  * `storage.multipartUploads.list` {% data reusables.actions.enterprise-common-prereqs %}

## Como habilitar o {% data variables.product.prodname_actions %} com o Google Cloud Storage

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. Em "Armazenamento de Artefatos e Logs", selecione **Google Cloud Storage** e insira os detalhes do bucket de armazenamento:

   * **URL de Serviço**: a URL de serviço do bucket. Geralmente, é `https://storage.googleapis.com`.
   * **Nome do bucket**: o nome do bucket.
   * **ID de acesso HMAC** e **Segredo HMAC**: a ID de acesso do Google Cloud e o segredo da conta de armazenamento. Para obter mais informações, confira "[Como criar e gerenciar chaves HMAC para contas de serviço](https://cloud.google.com/storage/docs/authentication/managing-hmackeys)" na documentação do Google Cloud.

   ![Botão de opção para selecionar o Google Cloud Storage e campos para configuração](/assets/images/enterprise/management-console/actions-google-cloud-storage.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
