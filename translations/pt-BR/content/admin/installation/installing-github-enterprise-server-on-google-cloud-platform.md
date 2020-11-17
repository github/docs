---
title: Instalar o GitHub Enterprise Server no Google Cloud Platform
intro: 'Para instalar o {% data variables.product.prodname_ghe_server %} no Google Cloud Platform, você deve fazer a implantação em um tipo de máquina compatível e usar um disco padrão persistente ou SSD persistente.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-google-cloud-platform/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-google-cloud-platform
versions:
  enterprise-server: '*'
---

### Pré-requisitos

- {% data reusables.enterprise_installation.software-license %}
- É preciso ter uma conta do Google Cloud Platform que possa iniciar instâncias de máquina virtual (VM) do Google Compute Engine (GCE). Para obter mais informações, consulte o [site do Google Cloud Platform](https://cloud.google.com/) e a [documentação do Google Cloud Platform](https://cloud.google.com/docs/).
- A maioria das ações necessárias para iniciar sua instância também pode ser executada usando o [Google Cloud Platform Console](https://cloud.google.com/compute/docs/console). No entanto, é recomendável instalar a ferramenta de linha de comando gcloud compute para a configuração inicial. Veja abaixo alguns exemplos de uso da ferramenta de linha de comando gcloud compute. Para obter mais informações, consulte o guia de instalação e configuração do "[gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/)" na documentação do Google.

### Considerações de hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Determinar o tipo de máquina

Antes de iniciar a {% data variables.product.product_location %} no Google Cloud Platform, você terá que determinar o tipo de máquina virtual que melhor se adapta às demandas da sua organização.

#### Tipos de máquina compatíveis

O {% data variables.product.prodname_ghe_server %} é compatível nos seguintes tipos de máquina do Google Compute Engine (GCE). Para obter mais informações, consulte o [artigo sobre tipos de máquina do Google Cloud Platform](https://cloud.google.com/compute/docs/machine-types).

|  | Memória alta  |
|  | ------------- |
|  | n1-highmem-4  |
|  | n1-highmem-8  |
|  | n1-highmem-16 |
|  | n1-highmem-32 |
|  | n1-highmem-64 |
|  | n1-highmem-96 |

#### Tipos de máquina recomendados

Com base na contagem de licenças de usuário, recomendamos os seguintes tipos de máquina.

|                 Estações                 | Tipo recomendado |
|:----------------------------------------:|:----------------:|
| Teste, demonstração ou 10 usuários leves |  n1-standard-4   |
|                10 - 3000                 |  n1-standard-8   |
|               3000 - 5000                |   n1-highmem-8   |
|               5000 - 8000                |  n1-highmem-16   |
|              8000 - 10000+               |  n1-highmem-32   |

{% data reusables.enterprise_installation.warning-on-scaling %}

### Selecionar a imagem do {% data variables.product.prodname_ghe_server %}

1. Usando a ferramenta de linha de comando [gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/), liste as imagens públicas do {% data variables.product.prodname_ghe_server %}:
   ```shell
   $ gcloud compute images list --project github-enterprise-public --no-standard-images
  ```

2. Anote o nome da imagem GCE mais recente do {% data variables.product.prodname_ghe_server %}.

### Configurar o firewall

Máquinas virtuais GCE são criadas como integrantes de uma rede que tem um firewall. Na rede associada à VM do {% data variables.product.prodname_ghe_server %}, você terá que configurar o firewall para permitir as portas necessárias da tabela abaixo. Para obter mais informações sobre as regras de firewall no Google Cloud Platform, consulte o guia "[Visão geral das regras de firewall](https://cloud.google.com/vpc/docs/firewalls)" do Google.

1. Usando a ferramenta de linha de comando gcloud compute, crie a rede. Para obter mais informações, consulte "[criar redes com gcloud compute](https://cloud.google.com/sdk/gcloud/reference/compute/networks/create)" na documentação do Google.
  ```shell
  $ gcloud compute networks create <em>NETWORK-NAME</em> --subnet-mode auto
  ```
2. Crie uma regra de firewall para cada porta da tabela abaixo. Para obter mais informações, consulte "[regras de firewall do gcloud compute](https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/)" na documentação do Google.
  ```shell
  $ gcloud compute firewall-rules create <em>RULE-NAME</em> \
  --network <em>NETWORK-NAME</em> \
  --allow tcp:22,tcp:25,tcp:80,tcp:122,udp:161,tcp:443,udp:1194,tcp:8080,tcp:8443,tcp:9418,icmp
  ```
  Esta tabela identifica as portas necessárias e o uso de cada uma delas.

  {% data reusables.enterprise_installation.necessary_ports %}

### Alocar uma IP estática e associá-la com a VM

Se você estiver trabalhando com um appliance de produção, é altamente recomendável reservar um endereço IP externo estático e atribuí-lo à VM do {% data variables.product.prodname_ghe_server %}. Caso contrário, o endereço IP público da VM não será retido após a reinicialização. Para obter mais informações, consulte o guia "[Reservar um endereço IP externo estático](https://cloud.google.com/compute/docs/configure-instance-ip-addresses)" do Google.

Nas configurações de alta disponibilidade de produção, os appliances primário e réplica devem receber endereços IP estáticos separados.

### Criar a instância do {% data variables.product.prodname_ghe_server %}

Para criar a instância do {% data variables.product.prodname_ghe_server %}, você deve criar uma instância do GCE com a imagem do {% data variables.product.prodname_ghe_server %} e vincular um volume de armazenamento adicional aos dados da sua instância. Para obter mais informações, consulte "[Considerações de hardware](#hardware-considerations)".

1. Usando a ferramenta de linha de comando gcloud compute, crie um disco de dados para usar como volume de armazenamento para os dados da sua instância e configure o tamanho com base na contagem de licenças de usuário. Para obter mais informações, consulte "[criar discos no gcloud compute](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create)" na documentação do Google.
  ```shell
  $ gcloud compute disks create <em>DATA-DISK-NAME</em> --size <em>DATA-DISK-SIZE</em> --type <em>DATA-DISK-TYPE</em> --zone <em>ZONE</em>
  ```

2. Em seguida, crie uma instância usando o nome da imagem selecionada do {% data variables.product.prodname_ghe_server %} e vincule o disco de dados. Para obter mais informações, consulte "[criar instâncias no gcloud compute](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create)" na documentação do Google.
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

### Configurar a instância

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para obter mais informações, consulte "[Configurar o appliance do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)".
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Leia mais

- [Visão geral do sistema](/enterprise/admin/guides/installation/system-overview)
