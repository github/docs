---
title: Instalar o GitHub Enterprise Server no Hyper-V
intro: 'Para instalar o {% data variables.product.prodname_ghe_server %} no Hyper-V, você deve fazer a implantação em uma máquina que execute o Windows Server 2008 através do Windows Server 2019.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-hyper-v/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-hyper-v
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

### Pré-requisitos

- {% data reusables.enterprise_installation.software-license %}
- Seu sistema operacional deve estar entre o Windows Server 2008 e o Windows Server 2019, que são compatíveis com o Hyper-V.
- A maioria das ações necessárias para criar sua máquina virtual (VM) também pode ser executada usando o [Gerenciador do Hyper-V](https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/remotely-manage-hyper-v-hosts). No entanto, a configuração inicial é recomendável com o shell de linha de comando do Windows PowerShell. Veja abaixo alguns exemplos com o PowerShell. Para obter mais informações, consulte "[Introdução ao Windows PowerShell](https://docs.microsoft.com/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-5.1)" no guia da Microsoft.

### Considerações de hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Baixar a imagem do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. Selecione {% data variables.product.prodname_dotcom %} On-premises e clique em **Hyper-V**.
5. Clique em **Download for Hyper-V** (Baixar para Hyper-V).

### Criar a instância do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. No PowerShell, crie uma máquina virtual Generation 1, configure o tamanho com base na contagem de licenças de usuário e anexe a imagem do {% data variables.product.prodname_ghe_server %} que você baixou. Para obter mais informações, consulte "[Nova VM](https://docs.microsoft.com/powershell/module/hyper-v/new-vm?view=win10-ps)" na documentação da Microsoft.
  ```shell
  PS C:\> New-VM -Generation 1 -Name <em>VM_NAME</em> -MemoryStartupBytes <em>MEMORY_SIZE</em> -BootDevice VHD -VHDPath <em>PATH_TO_VHD</em>  
  ```
{% data reusables.enterprise_installation.create-attached-storage-volume %} Substitua `PATH_TO_DATA_DISK` pelo caminho no local em que você criará o disco. Para obter mais informações, consulte "[Novo VHD](https://docs.microsoft.com/powershell/module/hyper-v/new-vhd?view=win10-ps)" na documentação da Microsoft.
  ```shell
  PS C:\> New-VHD -Path <em>PATH_TO_DATA_DISK</em> -SizeBytes <em>DISK_SIZE</em>
  ```
3. Vincule o disco de dados à sua instância. Para obter mais informações, consulte "[Adicionar VMHardDiskDrive](https://docs.microsoft.com/powershell/module/hyper-v/add-vmharddiskdrive?view=win10-ps)" na documentação da Microsoft.
  ```shell
  PS C:\> Add-VMHardDiskDrive -VMName <em>VM_NAME</em> -Path <em>PATH_TO_DATA_DISK</em>
  ```
4. Inicie a VM. Para obter mais informações, consulte "[Iniciar a VM](https://docs.microsoft.com/powershell/module/hyper-v/start-vm?view=win10-ps)" na documentação da Microsoft.
  ```shell
  PS C:\> Start-VM -Name <em>VM_NAME</em>
  ```
5. Obtenha o endereço IP da sua VM. Para obter mais informações, consulte "[Obter VMNetworkAdapter](https://docs.microsoft.com/powershell/module/hyper-v/get-vmnetworkadapter?view=win10-ps)" na documentação da Microsoft.
  ```shell
  PS C:\> (Get-VMNetworkAdapter -VMName <em>VM_NAME</em>).IpAddresses
  ```
6. Copie o endereço IP da VM e cole em um navegador da web.

### Configurar a instância do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para obter mais informações, consulte "[Configurar o appliance do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)".
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Leia mais

- "[Visão geral do sistema](/enterprise/admin/guides/installation/system-overview){% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[Sobre atualizações para novas versões](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
