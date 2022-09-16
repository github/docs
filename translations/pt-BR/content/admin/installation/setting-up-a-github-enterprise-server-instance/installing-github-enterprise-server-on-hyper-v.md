---
title: Instalar o GitHub Enterprise Server no Hyper-V
intro: 'Para instalar o {% data variables.product.prodname_ghe_server %} no Hyper-V, você deve fazer a implantação em uma máquina que execute o Windows Server 2008 através do Windows Server 2019.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-hyper-v
  - /enterprise/admin/installation/installing-github-enterprise-server-on-hyper-v
  - /admin/installation/installing-github-enterprise-server-on-hyper-v
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on Hyper-V
ms.openlocfilehash: f5b465edc4ff84be00e2749766091cc5cfb1962a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095866'
---
## Pré-requisitos

- {% data reusables.enterprise_installation.software-license %}
- Você precisa ter uma versão que esteja entre o Windows Server 2008 e o Windows Server 2019, que dão suporte ao Hyper-V.
- A maioria das ações necessárias para criar sua VM (máquina virtual) também pode ser executada por meio do [Gerenciador do Hyper-V](https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/remotely-manage-hyper-v-hosts). No entanto, a configuração inicial é recomendável com o shell de linha de comando do Windows PowerShell. Veja abaixo alguns exemplos com o PowerShell. Para obter mais informações, confira o guia da Microsoft "[Introdução ao Windows PowerShell](https://docs.microsoft.com/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-5.1)".

## Considerações sobre hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Baixar a imagem do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.download-license %} {% data reusables.enterprise_installation.download-appliance %}
4. Em "{% data variables.product.prodname_dotcom %} local", selecione o menu suspenso "Selecionar seu hipervisor" e clique em **Hyper-V (VHD)** .
5. Clique em **Baixar para Hyper-V (VHD)** .

## Criar a instância do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. No PowerShell, crie uma máquina virtual Generation 1, configure o tamanho com base na contagem de licenças de usuário e anexe a imagem do {% data variables.product.prodname_ghe_server %} que você baixou. Para obter mais informações, confira "[New-VM](https://docs.microsoft.com/powershell/module/hyper-v/new-vm?view=win10-ps)" na documentação da Microsoft.
  ```shell
  PS C:\> New-VM -Generation 1 -Name <em>VM_NAME</em> -MemoryStartupBytes <em>MEMORY_SIZE</em> -BootDevice VHD -VHDPath <em>PATH_TO_VHD</em>  
  ```
{% data reusables.enterprise_installation.create-attached-storage-volume %} Substitua `PATH_TO_DATA_DISK` pelo caminho até o local em que você criará o disco. Para obter mais informações, confira "[New-VHD](https://docs.microsoft.com/powershell/module/hyper-v/new-vhd?view=win10-ps)" na documentação da Microsoft.
  ```shell
  PS C:\> New-VHD -Path <em>PATH_TO_DATA_DISK</em> -SizeBytes <em>DISK_SIZE</em>
  ```
3. Vincule o disco de dados à sua instância. Para obter mais informações, confira "[Add-VMHardDiskDrive](https://docs.microsoft.com/powershell/module/hyper-v/add-vmharddiskdrive?view=win10-ps)" na documentação da Microsoft.
  ```shell
  PS C:\> Add-VMHardDiskDrive -VMName <em>VM_NAME</em> -Path <em>PATH_TO_DATA_DISK</em>
  ```
4. Inicie a VM. Para obter mais informações, confira "[Start-VM](https://docs.microsoft.com/powershell/module/hyper-v/start-vm?view=win10-ps)" na documentação da Microsoft.
  ```shell
  PS C:\> Start-VM -Name <em>VM_NAME</em>
  ```
5. Obtenha o endereço IP da sua VM. Para obter mais informações, confira "[Get-VMNetworkAdapter](https://docs.microsoft.com/powershell/module/hyper-v/get-vmnetworkadapter?view=win10-ps)" na documentação da Microsoft.
  ```shell
  PS C:\> (Get-VMNetworkAdapter -VMName <em>VM_NAME</em>).IpAddresses
  ```
6. Copie o endereço IP da VM e cole em um navegador da web.

## Configurar a instância do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para obter mais informações, confira "[Como configurar o dispositivo do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)".
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Leitura adicional

- "[Visão geral do sistema](/enterprise/admin/guides/installation/system-overview)"{% ifversion ghes %}
- "[Sobre os upgrades para novas versões](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
