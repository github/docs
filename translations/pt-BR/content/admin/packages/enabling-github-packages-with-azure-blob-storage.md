---
title: Habilitar o GitHub Packages com o Azure Blob Storage
intro: 'Configure o {% data variables.product.prodname_registry %} com o Azure Blob Storage como seu armazenamento externo.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Enterprise
  - Packages
  - Storage
shortTitle: Enable Packages with Azure
ms.openlocfilehash: ff9f7cc0e001a639cf5222ade02a6dabd57a3c47
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145095836'
---
{% warning %}

**Avisos:**
- É fundamental que você defina as políticas de acesso restritivas necessárias para o seu bucket de armazenamento, porque {% data variables.product.company_short %} não aplica permissões específicas de objeto ou listas de controle de acesso adicionais (ACLs) à sua configuração do bucket de armazenamento. Por exemplo, se você tornar o seu bucket público, os dados no bucket poderão ser acessados através da Internet pública.
- Recomendamos usar um bucket dedicado para {% data variables.product.prodname_registry %}, separar do bucket que você usa para o armazenamento de {% data variables.product.prodname_actions %}.
- Certifique-se de configurar o bucket que você vai querer usar no futuro. Não recomendamos alterar seu armazenamento depois de começar a usar {% data variables.product.prodname_registry %}.

{% endwarning %}

## Pré-requisitos

Antes de poder habilitar e configurar {% data variables.product.prodname_registry %} em {% data variables.product.product_location_enterprise %}, você precisa preparar o bucket do seu Azure Blob Storage. Para preparar o bucket de armazenamento de Blobs do Azure, recomendamos consultar a documentação oficial do Armazenamento de Blobs do Azure no [site oficial da documentação do Armazenamento de Blobs do Azure](https://docs.microsoft.com/en-us/azure/storage/blobs/).

## Habilitar {% data variables.product.prodname_registry %} com o Azure Blob Storage

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}
1. Em "Pacotes de Armazenamento", selecione **Armazenamento de Blobs do Azure** e insira o nome do contêiner do Azure para o bucket de armazenamento de pacotes e a cadeia de conexão.
  ![Nome do contêiner do Armazenamento de Blobs do Azure e caixas da cadeia de conexão](/assets/images/help/package-registry/azure-blob-storage-settings.png)

  {% note %}

  **Observação:** você pode encontrar sua Cadeia de Conexão do Azure navegando até o menu Chave de Acesso em sua conta de armazenamento do Azure. 
  No momento, não há suporte para o uso de um Token SAS ou URL SAS como cadeia de conexão.
  
  {% endnote %}

{% data reusables.enterprise_management_console.save-settings %}

## Próximas etapas

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
