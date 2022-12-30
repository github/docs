---
title: Instalar o GitHub Enterprise Server no VMware
intro: 'Para instalar o {% data variables.product.prodname_ghe_server %} no VMware, você deve fazer o download do cliente do VMware vSphere e, em seguida, fazer o download e implantar o software do {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/articles/getting-started-with-vmware
  - /enterprise/admin/articles/installing-vmware-tools
  - /enterprise/admin/articles/vmware-esxi-virtual-machine-maximums
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-vmware
  - /enterprise/admin/installation/installing-github-enterprise-server-on-vmware
  - /admin/installation/installing-github-enterprise-server-on-vmware
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on VMware
ms.openlocfilehash: f9e81c624f93c7478eed04b65b3ef43a69ef9291
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147859407'
---
## Pré-requisitos

- {% data reusables.enterprise_installation.software-license %}
- Você precisa ter um Hipervisor VMware vSphere ESXi aplicado a um computador bare-metal que executará os {% data variables.product.product_location %}s. Damos suporte às versões 5.5 a 6.7 para o {% data variables.product.prodname_ghe_server %} 3.4 e versões anteriores. O ESX versão 7.0 é compatível com {% data variables.product.prodname_ghe_server %} 3.5 e versões posteriores. O Hpervisor ESXi é grátis e não inclui o Servidor vCenter (opcional). Para obter mais informações, confira a [documentação do VMware ESXi](https://www.vmware.com/products/esxi-and-esx.html).
- Você precisará de acesso a um cliente vSphere. Se tiver o servidor vCenter, você poderá usar o cliente vSphere Web. Para obter mais informações, confira o guia do VMware "[Fazer logon no vCenter Server usando o cliente Web do vSphere](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.install.doc/GUID-CE128B59-E236-45FF-9976-D134DADC8178.html)".

## Considerações sobre hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Baixar a imagem do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. Em "{% data variables.product.prodname_dotcom %} local", selecione o menu suspenso "Selecionar seu hipervisor" e clique em **VMware ESXi/vSphere (OVA)** .
5. Clique em **Baixar para VMware ESXi/vSphere (OVA)** .

## Criar a instância do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Usando o cliente vSphere Windows ou vCenter Web, importe a imagem do {% data variables.product.prodname_ghe_server %} que você baixou. Para obter instruções, confira o guia do VMware "[Implantar um modelo OVF ou OVA](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-17BEDA21-43F6-41F4-8FB2-E01D275FE9B4.html)".
    - Ao selecionar um armazenamento de dados, escolha um que tenha espaço suficiente para hospedar os discos da VM. Para ver as especificações mínimas de hardware recomendadas para o tamanho da instância, confira "[Considerações sobre hardware](#hardware-considerations)". Recomendamos um provisionamento robusto com lazy zeroing.
    - Mantenha a caixa **Ligar após implantação** desmarcada, pois você precisará adicionar um volume de armazenamento anexado aos dados do repositório após o provisionamento da VM.
{% data reusables.enterprise_installation.create-attached-storage-volume %} Para obter instruções, confira o guia do VMware "[Adicionar um novo disco rígido a uma máquina virtual](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-F4917C61-3D24-4DB9-B347-B5722A84368C.html)".

## Configurar a instância do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para obter mais informações, confira "[Como configurar o dispositivo do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)".
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Leitura adicional

- "[Visão geral do sistema](/enterprise/admin/guides/installation/system-overview)"{% ifversion ghes %}
- "[Sobre os upgrades para novas versões](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
