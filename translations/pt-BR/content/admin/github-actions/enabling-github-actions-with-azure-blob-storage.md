---
title: Habilitar o o GitHub Actions com armazenamento do Azure Blob
intro: 'Você pode habilitar {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %} e usar o Azure Blob Storage para armazenar artefatos gerados por execuções do fluxo de trabalho.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  enterprise-server: '>=3.0'
topics:
  - Enterprise
---

### Pré-requisitos

Antes de habilitar {% data variables.product.prodname_actions %}, certifique-se de que você realizou os seguintes passos:

* Crie sua conta de armazenamento do Azure para armazenar artefatos de fluxo de trabalho. {% data variables.product.prodname_actions %} armazena seus dados como blobs de bloco, e dois tipos de conta de armazenamento são compatíveis:
  * Uma conta de armazenamento para **propósitos gerais** (também conhecida como `propósito geral v1` ou `propósito geral v2`) que usa o nível de desempenho **padrão**.

    {% warning %}

    **Aviso:** Usar a camada de desempenho **premium** com uma conta de armazenamento com propósito geral não é compatível. A camada de desempenho **padrão** deve ser selecionada ao criar a conta de armazenamento e não pode ser alterada posteriormente.

    {% endwarning %}
  * Uma conta de armazenamento</strong>BlockBlobStorage**, que usa a camada de desempenho **premium**.</li> </ul>

  Para obter mais informações sobre os tipos de conta de armazenamento do Azure e níveis de desempenho, consulte a [Documentação do Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview?toc=/azure/storage/blobs/toc.json#types-of-storage-accounts).
{% data reusables.actions.enterprise-common-prereqs %}</li> </ul>

### Habilitar {% data variables.product.prodname_actions %} com o armazenamento do Azure Blob

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.actions %}
{% data reusables.actions.enterprise-enable-checkbox %}
1. Em "Artefato & Registro de armazenamento", selecione **Azure Blob Storage**, e insira a string de conexão da sua conta de do Azure Storage. Para obter mais informações sobre como obter a string de conexão para sua conta de armazenamento, consulte a [Documentação do Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#view-account-access-keys). ![Botão de opção para selecionar o armazenamento do Azure Blob e o campo de string de conexão](/assets/images/enterprise/management-console/actions-azure-storage.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
