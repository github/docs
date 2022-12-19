---
title: Instalar o GitHub Enterprise Server no AWS
intro: 'Para instalar o {% data variables.product.prodname_ghe_server %} no Amazon Web Services (AWS), você deve iniciar uma instância do Amazon Elastic Compute Cloud (EC2) e, em seguida, criar e vincular um volume de dados separado do Amazon Elastic Block Store (EBS).'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-aws
  - /enterprise/admin/installation/installing-github-enterprise-server-on-aws
  - /admin/installation/installing-github-enterprise-server-on-aws
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Infrastructure
  - Set up
shortTitle: Install on AWS
ms.openlocfilehash: f91f2337cc13690d0476c836a15ec72a5c0685cb
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147875569'
---
## Pré-requisitos

- {% data reusables.enterprise_installation.software-license %}
- Você deve ter uma conta do AWS que possa iniciar instâncias do EC2 e criar volumes EBS. Para obter mais informações, confira o [site da Amazon Web Services](https://aws.amazon.com/).
- A maioria das ações necessárias para iniciar o {% data variables.product.product_location %} também pode ser executada por meio do console de gerenciamento da AWS. No entanto, é recomendável instalar a interface da linha de comando (CLI) do AWS para a configuração inicial. Veja abaixo alguns exemplos de uso da CLI do AWS. Para obter mais informações, confira os guias da Amazon "[Como trabalhar com o Console de Gerenciamento da AWS](http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/getting-started.html)" e "[O que é a interface de linha de comando da AWS](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)".

{% note %}

**Observação:** no momento, o {% data variables.product.prodname_ghe_server %} não dá suporte ao uso da API de Metadados do Amazon IDMSv2.

{% endnote %}

Para usar este guia, você deve conhecer os seguintes conceitos do AWS:

 - [Como iniciar instâncias do EC2](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/LaunchingAndUsingInstances.html)
 - [Gerenciar volumes do EBS](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html)
 - [Como usar grupos de segurança](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html) (para gerenciar o acesso à rede na sua instância)
 - [EIP (Endereços IP elásticos)](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) (altamente recomendado para ambientes de produção)
 - [EC2 e nuvem virtual privada](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-vpc.html) (se você pretende iniciá-la em uma nuvem virtual privada)
 - [Preços da AWS](https://aws.amazon.com/pricing/) (para calcular e gerenciar os custos)

Para ter uma visão geral de arquitetura, confira o "[Diagrama de Arquitetura da AWS para implantação do GitHub Enterprise Server](/assets/images/installing-github-enterprise-server-on-aws.png)". 

Este guia recomenda o princípio do menor privilégio ao configurar {% data variables.product.product_location %} no AWS. Para obter mais informações, veja a [documentação do IAM (Gerenciamento de Identidades e Acesso) da AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege).

## Considerações sobre hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

## Determinar o tipo de instância

Antes de lançar {% data variables.product.product_location %} no AWS, você deverá determinar o tipo de máquina que melhor se adequa às necessidades da sua organização. Para revisar os requisitos mínimos do {% data variables.product.product_name %}, confira "[Requisitos mínimos](#minimum-requirements)".

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

## Selecionar a AMI do {% data variables.product.prodname_ghe_server %}

É possível selecionar uma Amazon Machine Image (AMI) para o {% data variables.product.prodname_ghe_server %} usando o portal do {% data variables.product.prodname_ghe_server %} na CLI do AWS.

As AMIs para o {% data variables.product.prodname_ghe_server %} estão disponíveis na região (EUA-Leste e EUA-Oeste) do AWS GovCloud. Com isso, os clientes dos EUA com requisitos regulamentares específicos podem executar o {% data variables.product.prodname_ghe_server %} em um ambiente em nuvem de conformidade federal. Para obter mais informações sobre a conformidade da AWS com os padrões federais e outros, confira a [página do GovCloud (US) da AWS](http://aws.amazon.com/govcloud-us/) e a [página de conformidade da AWS](https://aws.amazon.com/compliance/).

### Usar o portal do {% data variables.product.prodname_ghe_server %} para selecionar uma AMI

{% data reusables.enterprise_installation.download-appliance %}
3. Em "{% data variables.product.prodname_dotcom %} na Nuvem", selecione o menu suspenso "Selecionar sua plataforma" e clique na **Amazon Web Services**.
4. Escolha o menu suspenso "Selecionar sua região da AWS" e clique na região desejada.
5. Anote a ID da AMI.

### Usar a CLI do AWS para selecionar uma AMI

1. Usando a CLI da AWS, obtenha uma lista de imagens do {% data variables.product.prodname_ghe_server %} publicadas pelas IDs do proprietário da AWS do {% data variables.product.prodname_dotcom %} (`025577942450` para GovCloud e `895557238572` para outras regiões). Para obter mais informações, confira "[describe-images](http://docs.aws.amazon.com/cli/latest/reference/ec2/describe-images.html)" na documentação da AWS.
  ```shell
  aws ec2 describe-images \
  --owners <em>OWNER ID</em> \
  --query 'sort_by(Images,&Name)[*].{Name:Name,ImageID:ImageId}' \
  --output=text
  ```
2. Anote a ID da AMI para a imagem mais recente do {% data variables.product.prodname_ghe_server %}.

## Criação de um grupo de segurança

Se estiver configurando a AMI pela primeira vez, você terá que criar um grupo de segurança e adicionar uma nova regra de grupo de segurança para cada porta na tabela abaixo. Para obter mais informações, confira o guia da AWS "[Como usar grupos de segurança](http://docs.aws.amazon.com/cli/latest/userguide/cli-ec2-sg.html)".

1. Usando a CLI do AWS, crie um grupo de segurança. Para obter mais informações, confira "[create-security-group](http://docs.aws.amazon.com/cli/latest/reference/ec2/create-security-group.html)" na documentação da AWS.
  ```shell
  $ aws ec2 create-security-group --group-name <em>SECURITY_GROUP_NAME</em> --description "<em>SECURITY GROUP DESCRIPTION</em>"
  ```

2. Anote a ID do grupo de segurança (`sg-xxxxxxxx`) do grupo de segurança recém-criado.

3. Crie uma regra de grupo de segurança para cada porta da tabela abaixo. Para obter mais informações, confira "[authorize-security-group-ingress](http://docs.aws.amazon.com/cli/latest/reference/ec2/authorize-security-group-ingress.html)" na documentação da AWS.
  ```shell
  $ aws ec2 authorize-security-group-ingress --group-id <em>SECURITY_GROUP_ID</em> --protocol <em>PROTOCOL</em> --port <em>PORT_NUMBER</em> --cidr <em>SOURCE IP RANGE</em>
  ```
  Esta tabela identifica o uso de cada porta.

  {% data reusables.enterprise_installation.necessary_ports %}

## Criar a instância do {% data variables.product.prodname_ghe_server %}

Para criar a instância, você deve iniciar uma instância EC2 com sua AMI do {% data variables.product.prodname_ghe_server %} e vincular um volume de armazenamento adicional aos dados da sua instância. Para obter mais informações, confira "[Considerações sobre hardware](#hardware-considerations)".

{% note %}

**Observação:** você pode criptografar o disco de dados para obter um nível extra de segurança e garantir que todos os dados gravados na sua instância estejam protegidos. Usar discos criptografados gera um leve impacto no desempenho. Se você decidir criptografar o volume, recomendaremos expressamente fazer isso **antes** de iniciar a instância pela primeira vez.
Para obter mais informações, confira o [guia da Amazon sobre a criptografia EBS](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html).

{% endnote %}

{% warning %}

**Aviso:** se você decidir habilitar a criptografia depois de configurar sua instância, precisará migrar seus dados para o volume criptografado, o que vai gerar algum tempo de inatividade para os usuários.

{% endwarning %}

### Iniciar uma instância do EC2

Na CLI do AWS, inicie uma instância do EC2 usando sua AMI e o grupo de segurança que você criou. Vincule um novo dispositivo de bloqueio para uso como volume de armazenamento dos dados da sua instância e configure o tamanho com base na contagem de licença de usuário. Para obter mais informações, confira "[run-instances](http://docs.aws.amazon.com/cli/latest/reference/ec2/run-instances.html)" na documentação da AWS.

```shell
aws ec2 run-instances \
  --security-group-ids <em>SECURITY_GROUP_ID</em> \
  --instance-type <em>INSTANCE_TYPE</em> \
  --image-id <em>AMI_ID</em> \
  --block-device-mappings '[{"DeviceName":"/dev/xvdf","Ebs":{"VolumeSize":<em>SIZE</em>,"VolumeType":"<em>TYPE</em>"}}]' \
  --region <em>REGION</em> \
  --ebs-optimized
```

### Alocar uma IP elástica e associá-la com a instância

Se for uma instância de produção, é recomendável alocar uma IP Elástica (EIP) e associá-la à instância antes de seguir para a configuração do {% data variables.product.prodname_ghe_server %}. Caso contrário, o endereço IP público da instância não será retido após a reinicialização da instância. Para obter mais informações, confira "[Como alocar um endereço IP elástico](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-allocating)" e "[Como associar um endereço IP elástico a uma instância em execução](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#using-instance-addressing-eips-associating)" na documentação da Amazon.  

As instâncias primária e de réplica devem receber EIPs separados nas configurações de alta disponibilidade de produção. Para obter mais informações, confira "[Como configurar o {% data variables.product.prodname_ghe_server %} para alta disponibilidade](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/)".

## Configurar a instância do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %} {% data reusables.enterprise_installation.upload-a-license-file %} {% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para obter mais informações, confira "[Como configurar o dispositivo do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)".
{% data reusables.enterprise_installation.instance-will-restart-automatically %} {% data reusables.enterprise_installation.visit-your-instance %}

## Leitura adicional

- "[Visão geral do sistema](/enterprise/admin/guides/installation/system-overview)"{% ifversion ghes %}
- "[Sobre os upgrades para novas versões](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
