---
title: Instalar o GitHub Enterprise Server no XenServer
intro: Para instalar o {% data variables.product.prodname_ghe_server %} no XenServer, você deve implantar a imagem de disco do {% data variables.product.prodname_ghe_server %} em um host do XenServer.
redirect_from:
- /enterprise/admin/guides/installation/installing-github-enterprise-on-xenserver
- /enterprise/admin/installation/installing-github-enterprise-server-on-xenserver
- /admin/installation/installing-github-enterprise-server-on-xenserver
versions:
  ghes: <=3.2
type: tutorial
topics:
- Administrator
- Enterprise
- Infrastructure
- Set up
shortTitle: Install on XenServer
ms.openlocfilehash: f4991244e74c9a61d953ecba08cc5c4985906fb6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145094929"
---
{% note %}

  **Observação:** o suporte para o {% data variables.product.prodname_ghe_server %} no XenServer será descontinuado no {% data variables.product.prodname_ghe_server %} 3.3. Para obter mais informações, confira as [notas sobre a versão do {% data variables.product.prodname_ghe_server %} 3.1](/admin/release-notes#3.1.0)

{% endnote %}

## Pré-requisitos

- {% data reusables.enterprise_installation.software-license %}
- Você deve instalar o XenServer Hypervisor na máquina que executará a sua máquina virtual (VM) do {% data variables.product.prodname_ghe_server %}. As versões 6.0 a 7.0 são compatíveis.
- É recomendável usar o Console de gerenciamento do XenCenter Windows para a configuração inicial (veja as instruções de uso abaixo). Para obter mais informações, confira o guia do Citrix "[Como baixar e instalar uma nova versão do XenCenter](https://support.citrix.com/article/CTX118531)".

## Considerações sobre hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Baixar a imagem do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. Em "{% data variables.product.prodname_dotcom %} local", selecione o menu suspenso "Selecionar seu hipervisor" e clique em **XenServer (VHD)** .
5. Para baixar o arquivo de licença, clique em **Baixar licença**.

## Criar a instância do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. No XenCenter, importe a imagem do {% data variables.product.prodname_ghe_server %} que você baixou. Para obter instruções, confira o guia do XenCenter "[Importar imagens de disco](https://docs.citrix.com/en-us/xencenter/current-release/vms-importdiskimage.html)".
    - Na etapa "Habilitar correção do sistema operacional", selecione **Não usar a Correção do Sistema Operacional**.
    - Ao concluir, deixe a VM desligada.
{% data reusables.enterprise_installation.create-attached-storage-volume %} Para obter instruções, confira o guia do XenCenter "[Adicionar discos virtuais](https://docs.citrix.com/en-us/xencenter/current-release/vms-storage-addnewdisk.html)".

## Configurar a instância do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para obter mais informações, confira "[Como configurar o dispositivo do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)".
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Leitura adicional

- "[Visão geral do sistema](/enterprise/admin/guides/installation/system-overview)"{% ifversion ghes %}
- "[Sobre os upgrades para novas versões](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
