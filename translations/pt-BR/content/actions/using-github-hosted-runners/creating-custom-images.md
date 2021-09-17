---
title: Criar imagens personalizadas
intro: 'Você pode criar imagens personalizadas para {% data variables.actions.hosted_runner %}s.'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

### Criar um {% data variables.actions.hosted_runner %} com uma imagem personalizada

{% data variables.actions.hosted_runner %}s podem usar imagens do sistema operacional que você personalizou para atender às suas necessidades. Este artigo inclui os passos de alto nível para criar a imagem no Azure e prepará-lo para {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, consulte [a documentação Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/).

Durante este beta, para poder criar uma imagem personalizada para {% data variables.actions.hosted_runner %}s, você precisará de uma assinatura do Azure que seja capaz de fornecer uma máquina virtual.


1. Forneça uma nova VM no seu inquilino usando uma imagem de mercado ou um disco rígido virtual (VHD).
2. Opcionalmente, instale seu software necessário no VM.
3. Deprovisionamento do MV:
     - Para Linux: `ssh` para o VM e execute:
         ```sh
         $ sudo waagent -deprovision+user
         ```
     - Para Windows: Siga os passos descritos em ["Generalizar a fonte do VM usando Sysprep](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/upload-generalized-managed#generalize-the-source-vm-by-using-sysprep)".

4. Use o CLI do Azure para distribuir e generalizar o VM:
    ```powershell
    $resourceGroupName = "octocat-testgroup"
    $vmName = "octo-vm"

    Stop-AzVM -ResourceGroupName $resourceGroupName -Name $vmName
    Set-AzVM -ResourceGroupName $resourceGroupName -Name $vmName -Generalized
    ```
    - Substitua `octo-vm` pelo nome da sua máquina virtual.
    - Para obter mais informações sobre estes passos, consulte "[Como criar uma imagem gerenciada de uma máquina virtual ou VHD](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/capture-image#step-1-deprovision-the-vm)".
5. Gere um SAS URI para o disco do sistema operacional da VM.
   - Usar o Portal do Azure: No disco, acesse **Exportação de Discos**, definir `URL expira em (segundos)` a `86400` (24 horas) e gere a URL.
   - Usando a CLI do Azure:
        ```powershell
        $resourceGroupName = "octocat-testgroup"
        $vmName = "octo-vm"

        $vm = Get-AzVM -ResourceGroupName $resourceGroupName -Name $vmName
        Grant-AzDiskAccess `
            -ResourceGroupName $resourceGroupName `
            -DiskName $vm.StorageProfile.OsDisk.Name `
            -Access Read `
            -DurationInSecond 86400
        ```
        - Substitua `octo-vm` pelo nome da sua máquina virtual.

Depois de criar a imagem, você poderá adicioná-la a {% data variables.product.prodname_ghe_managed %}. Para obter mais informações, consulte ["Adicionar um {% data variables.actions.hosted_runner %} com uma imagem personalizada"](/actions/using-github-hosted-runners/adding-ae-hosted-runners#adding-an-ae-hosted-runner-with-a-custom-image).
