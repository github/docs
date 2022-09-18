---
title: Instalar o GitHub Enterprise Server no Google Cloud Platform
intro: 'Para instalar o {% data variables.product.prodname_ghe_server %} no Google Cloud Platform, você deve fazer a implantação em um tipo de máquina compatível e usar um disco padrão persistente ou SSD persistente.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-google-cloud-platform
  - /enterprise/admin/installation/installing-github-enterprise-server-on-google-cloud-platform
  - /admin/installation/installing-github-enterprise-server-on-google-cloud-platform
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on GCP
ms.openlocfilehash: 0fffebece94753365e1b98f014f0514cdef4f98a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145094930'
---
## Pré-requisitos

- {% data reusables.enterprise_installation.software-license %}
- É preciso ter uma conta do Google Cloud Platform que possa iniciar instâncias de máquina virtual (VM) do Google Compute Engine (GCE). Para obter mais informações, consulte o [site do Google Cloud Platform](https://cloud.google.com/) e a [Documentação do Google Cloud Platform](https://cloud.google.com/docs/).
- A maioria das ações necessárias para iniciar sua instância também pode ser executada usando o [Console do Google Cloud Platform](https://cloud.google.com/compute/docs/console). No entanto, é recomendável instalar a ferramenta de linha de comando gcloud compute para a configuração inicial. Veja abaixo alguns exemplos de uso da ferramenta de linha de comando gcloud compute. Para obter mais informações, consulte o guia de instalação e configuração do "[gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/)" na documentação do Google.

## Considerações sobre hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Determinar o tipo de máquina

Antes de iniciar o {% data variables.product.product_location %} no Google Cloud Platform, você precisará determinar o melhor tipo de computador para as necessidades da sua organização. Para revisar os requisitos mínimos do {% data variables.product.product_name %}, confira "[Requisitos mínimos](#minimum-requirements)".

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data variables.product.company_short %} recomenda uma máquina de uso geral e de alta memória para {% data variables.product.prodname_ghe_server %}. Para obter mais informações, consulte "[Tipos de computador](https://cloud.google.com/compute/docs/machine-types#n2_high-memory_machine_types)" na documentação do Google Compute Engine.

## Selecionar a imagem do {% data variables.product.prodname_ghe_server %}

1. Usando a ferramenta de linha de comando [gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/), liste as imagens públicas de {% data variables.product.prodname_ghe_server %}:
   ```shell
   $ gcloud compute images list --project github-enterprise-public --no-standard-images
   ```

2. Anote o nome da imagem GCE mais recente do {% data variables.product.prodname_ghe_server %}.

## Configurar o firewall

Máquinas virtuais GCE são criadas como integrantes de uma rede que tem um firewall. Na rede associada à VM do {% data variables.product.prodname_ghe_server %}, você terá que configurar o firewall para permitir as portas necessárias da tabela abaixo. Para obter mais informações sobre regras de firewall no Google Cloud Platform, consulte o guia do Google "[Visão geral das regras de firewall](https://cloud.google.com/vpc/docs/firewalls)".

1. Usando a ferramenta de linha de comando gcloud compute, crie a rede. Para obter mais informações, consulte "[gcloud compute networks create](https://cloud.google.com/sdk/gcloud/reference/compute/networks/create)" na documentação do Google.
   ```shell
   $ gcloud compute networks create <em>NETWORK-NAME</em> --subnet-mode auto
   ```
2. Crie uma regra de firewall para cada porta da tabela abaixo. Para obter mais informações, consulte "[gcloud compute firewall-rules](https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/)" na documentação do Google.
   ```shell
   $ gcloud compute firewall-rules create <em>RULE-NAME</em> \
   --network <em>NETWORK-NAME</em> \
   --allow tcp:22,tcp:25,tcp:80,tcp:122,udp:161,tcp:443,udp:1194,tcp:8080,tcp:8443,tcp:9418,icmp
   ```
   Esta tabela identifica as portas necessárias e o uso de cada uma delas.

   {% data reusables.enterprise_installation.necessary_ports %}

## Alocar uma IP estática e associá-la com a VM

Se você estiver trabalhando com um appliance de produção, é altamente recomendável reservar um endereço IP externo estático e atribuí-lo à VM do {% data variables.product.prodname_ghe_server %}. Caso contrário, o endereço IP público da VM não será retido após a reinicialização. Para obter mais informações, consulte o guia do Google "[Como reservar um endereço IP externo estático](https://cloud.google.com/compute/docs/configure-instance-ip-addresses)".

Nas configurações de alta disponibilidade de produção, os appliances primário e réplica devem receber endereços IP estáticos separados.

## Criar a instância do {% data variables.product.prodname_ghe_server %}

Para criar a instância do {% data variables.product.prodname_ghe_server %}, você deve criar uma instância do GCE com a imagem do {% data variables.product.prodname_ghe_server %} e vincular um volume de armazenamento adicional aos dados da sua instância. Para obter mais informações, confira "[Considerações sobre hardware](#hardware-considerations)".

1. Usando a ferramenta de linha de comando gcloud compute, crie um disco de dados para usar como volume de armazenamento para os dados da sua instância e configure o tamanho com base na contagem de licenças de usuário. Para obter mais informações, consulte "[gcloud compute disks create](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create)" na documentação do Google.
   ```shell
   $ gcloud compute disks create <em>DATA-DISK-NAME</em> --size <em>DATA-DISK-SIZE</em> --type <em>DATA-DISK-TYPE</em> --zone <em>ZONE</em>
   ```

2. Em seguida, crie uma instância usando o nome da imagem selecionada do {% data variables.product.prodname_ghe_server %} e vincule o disco de dados. Para obter mais informações, consulte "[gcloud compute instances create](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create)" na documentação do Google.
   ```shell
   $ gcloud compute instances create <em>INSTANCE-NAME</em> \
   --machine-type n1-standard-8 \
   --image <em>GITHUB-ENTERPRISE-IMAGE-NAME</em> \
   --disk name=<em>DATA-DISK-NAME</em> \
   --metadata serial-port-enable=1 \
   --zone <em>ZONE</em> \
   --network <em>NETWORK-NAME</em> \
   --image-project github-enterprise-public
   ```

## Configurar a instância

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para obter mais informações, confira "[Como configurar o dispositivo do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)".
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Leitura adicional

- "[Visão geral do sistema](/enterprise/admin/guides/installation/system-overview)"{% ifversion ghes %}
- "[Sobre os upgrades para novas versões](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
