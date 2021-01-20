---
title: Instalar o GitHub Enterprise Server no Azure
intro: 'Para instalar o {% data variables.product.prodname_ghe_server %} no Azure, você deve fazer a implantação em uma instância da série DS e usar o armazenamento Premium-LRS.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-azure/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-azure
versions:
  enterprise-server: '*'
---

Você pode implantar o {% data variables.product.prodname_ghe_server %} no Azure global ou Azure Government.

### Pré-requisitos

- {% data reusables.enterprise_installation.software-license %}
- Você deve ter uma conta do Azure que permita provisionar novas máquinas. Para obter mais informações, consulte o [site do Microsoft Azure](https://azure.microsoft.com).
- A maioria das ações necessárias para iniciar sua máquina virtual (VM) também pode ser executada pelo Portal do Azure. No entanto, é recomendável instalar a interface da linha de comando (CLI) do Azure para a configuração inicial. Veja abaixo alguns exemplos de uso da CLI do Azure 2.0. Para obter mais informações, consulte o guia "[Instalar a CLI do Azure 2.0](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest)".

### Considerações de hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Determinar o tipo de máquina virtual

Antes de iniciar a {% data variables.product.product_location %} no Azure, você terá que determinar o tipo de máquina virtual que melhor se adapta às demandas da sua organização.

#### Regiões e tipos de VM compatíveis

O appliance do {% data variables.product.prodname_ghe_server %} requer um disco de dados de armazenamento premium e é compatível com qualquer VM do Azure que tenha suporte ao armazenamento premium. Para obter mais informações, consulte "[VMs compatíveis](https://docs.microsoft.com/azure/storage/common/storage-premium-storage#supported-vms)" na documentação do Azure. Para ver informações gerais sobre as VMs disponíveis, consulte a [página de visão geral das máquinas virtuais do Azure](https://azure.microsoft.com/pricing/details/virtual-machines/#Linux).

O {% data variables.product.prodname_ghe_server %} dá suporte a qualquer região compatível com o seu tipo de VM. Para obter mais informações sobre as regiões compatíveis com cada VM, consulte "[Produtos disponíveis por região](https://azure.microsoft.com/regions/services/)".

#### Tipos recomendados de VM

É recomendável usar um tipo de instância DS v2 com no mínimo 14 GB de RAM. Você pode usar qualquer tipo de VM compatível. Com base na contagem de licenças de usuário, recomendamos os seguintes tipos de instâncias.

|                 Estações                 |  Tipo recomendado  |
|:----------------------------------------:|:------------------:|
| Teste, demonstração ou 10 usuários leves | Standard_DS11_v2 |
|                10 - 3000                 | Standard_DS12_v2 |
|               3000 - 8000                | Standard_DS14_v2 |
|              8000 - 10000+               | Standard_DS15_v2 |

{% data reusables.enterprise_installation.warning-on-scaling %}

### Criar a instância da máquina virtual do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. Localize a imagem mais recente do appliance do {% data variables.product.prodname_ghe_server %}. Para obter mais informações sobre o comando `vm image list`, consulte "[Lista de imagens de vm no az](https://docs.microsoft.com/cli/azure/vm/image?view=azure-cli-latest#az_vm_image_list)" na documentação da Microsoft.
  ```shell
  $ az vm image list --all -f GitHub-Enterprise | grep '"urn":' | sort -V
  ```

2. Crie uma VM usando a imagem do appliance. Para obter mais informações, consulte "[criar vm no az](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_create)" na documentação da Microsoft.

  Veja as opções de nome da VM, grupo de recursos, tamanho da VM, nome da região preferida do Azure, nome da da imagem de VM do appliance que você listou na etapa anterior e o SKU de armazenamento para Premium. Para obter mais informações sobre grupos de recursos, consulte "[Grupos de recursos](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-overview#resource-groups)" na documentação da Microsoft.

  ```shell
  $ az vm create -n <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --size <em>VM_SIZE</em> -l <em>REGION</em> --image <em>APPLIANCE_IMAGE_NAME</em> --storage-sku Premium_LRS
  ```

3. Defina as configurações de segurança na VM para abrir as portas necessárias. Para obter mais informações, consulte "[abrir portas para a vm no az](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_open_port)" na documentação da Microsoft. A tabela abaixo descreve cada porta para determinar quais portas você precisa abrir.

  ```shell
  $ az vm open-port -n <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --port <em>PORT_NUMBER</em>
  ```

  Esta tabela identifica o uso de cada porta.

  {% data reusables.enterprise_installation.necessary_ports %}

4. Crie e anexe um novo disco de dados não criptografado à VM e configure o tamanho com base na sua contagem de licenças do usuário. Para obter mais informações, consulte "[anexar disco a uma vm no az](https://docs.microsoft.com/cli/azure/vm/disk?view=azure-cli-latest#az_vm_disk_attach)" na documentação da Microsoft.

  Veja as opções de nome da VM (por exemplo, `ghe-acme-corp`), o grupo de recursos, o SKU de armazenamento Premium, o tamanho do disco (por exemplo, `100`) e um nome para o VHD resultante.

  ```shell
  $ az vm disk attach --vm-name <em>VM_NAME</em> -g <em>RESOURCE_GROUP</em> --sku Premium_LRS --new -z <em>SIZE_IN_GB</em> --name ghe-data.vhd --caching ReadWrite
  ```

  {% note %}

   **Observação:** para que as instâncias não relacionadas à produção tenham capacidade suficiente de E/S, o tamanho mínimo de disco recomendado é de 40 GB com cache de leitura e gravação habilitado (`--caching ReadWrite`).

   {% endnote %}

### Configurar a máquina virtual do {% data variables.product.prodname_ghe_server %}

1. Antes de configurar a VM, você deve aguardar a entrada no status ReadyRole. Verifique o status da VM com o comando `vm list`. Para obter mais informações, consulte "[listar vms no az](https://docs.microsoft.com/cli/azure/vm?view=azure-cli-latest#az_vm_list)" na documentação da Microsoft.
  ```shell
  $ az vm list -d -g <em>RESOURCE_GROUP</em> -o table
  > Name    ResourceGroup    PowerState    PublicIps     Fqdns    Location    Zones
  > ------  ---------------  ------------  ------------  -------  ----------  -------
  > VM_NAME RESOURCE_GROUP   VM running    40.76.79.202           eastus

  ```
  {% note %}

  **Observação:** o Azure não cria uma entrada FQDNS automaticamente para a VM. Para obter mais informações, consulte o guia do Azure sobre como "[Criar um nome de domínio totalmente qualificado no portal do Azure para uma VM Linux](https://docs.microsoft.com/azure/virtual-machines/linux/portal-create-fqdn)".

  {% endnote %}

  {% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
  {% data reusables.enterprise_installation.upload-a-license-file %}
  {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para obter mais informações, consulte "[Configurar o appliance do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)".
  {% data reusables.enterprise_installation.instance-will-restart-automatically %}
  {% data reusables.enterprise_installation.visit-your-instance %}


  ### Leia mais

  - [Visão geral do sistema](/enterprise/admin/guides/installation/system-overview)
  
