---
title: Habilitar o o GitHub Actions com armazenamento do Azure Blob
intro: 'Você pode habilitar {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %} e usar o Azure Blob Storage para armazenar dados gerados por execuções do fluxo de trabalho.'
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
  - /admin/github-actions/enabling-github-actions-with-azure-blob-storage
shortTitle: Azure Blob storage
ms.openlocfilehash: 856748a3219be7789f0339c43210ca204fe56d91
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192974'
---
{% data reusables.actions.enterprise-storage-about %}

## Pré-requisitos

Antes de habilitar {% data variables.product.prodname_actions %}, certifique-se de que você realizou os seguintes passos:

* Crie sua conta de armazenamento do Azure para armazenar dados de fluxo de trabalho. {% data variables.product.prodname_actions %} armazena seus dados como blobs de bloco, e dois tipos de conta de armazenamento são compatíveis:
  * Uma conta de armazenamento de **uso geral** (também conhecida como `general-purpose v1` ou `general-purpose v2`) que usa o nível de desempenho **standard**.

    {% warning %}

    **Aviso:** não há suporte para o uso do nível de desempenho **premium** com uma conta de armazenamento de uso geral. O nível de desempenho **standard** precisa ser selecionado quando a conta de armazenamento é criada e não pode ser alterado posteriormente.

    {% endwarning %}
  * Uma conta de armazenamento **BlockBlobStorage**, que usa o nível de desempenho **premium**.

  Para obter mais informações sobre os tipos de contas de armazenamento do Azure e os níveis de desempenho, confira a [documentação do Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview?toc=/azure/storage/blobs/toc.json#types-of-storage-accounts).
{% data reusables.actions.enterprise-common-prereqs %}

## Habilitar {% data variables.product.prodname_actions %} com o armazenamento do Azure Blob

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.actions %} {% data reusables.actions.enterprise-enable-checkbox %}
1. Em "Armazenamento de Logs e Artefatos", selecione **Armazenamento de Blobs do Azure** e insira a cadeia de conexão da sua conta de armazenamento do Azure. Para obter mais informações sobre como obter a cadeia de conexão para sua conta de armazenamento, confira a [documentação do Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#view-account-access-keys).

   ![Botão de opção para selecionar o Armazenamento de Blobs do Azure e o campo Cadeia de conexão](/assets/images/enterprise/management-console/actions-azure-storage.png) {% data reusables.enterprise_management_console.test-storage-button %} {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
