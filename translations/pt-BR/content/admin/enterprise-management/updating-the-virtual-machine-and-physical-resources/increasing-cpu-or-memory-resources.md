---
title: Aprimorar os recursos de CPU ou memória
intro: 'Se houver lentidão das operações na {% data variables.product.prodname_ghe_server %}, pode ser necessário adicionar recursos de CPU ou memória.'
redirect_from:
  - /enterprise/admin/installation/increasing-cpu-or-memory-resources
  - /enterprise/admin/enterprise-management/increasing-cpu-or-memory-resources
  - /admin/enterprise-management/increasing-cpu-or-memory-resources
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
shortTitle: Increase CPU or memory
ms.openlocfilehash: 1ac89694cf374cca1ba47f228f881dc4a5fd405f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331861'
---
{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

{% note %}

**Observação:** antes de aumentar os recursos de CPU ou memória, coloque sua instância no modo de manutenção.{% ifversion ip-exception-list %} Você pode validar as alterações configurando uma lista de exceções de IP para permitir o acesso de endereços IP especificados. {% endif %} Para obter mais informações, confira "[Como habilitar e agendar o modo de manutenção](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

{% endnote %}

## Adicionar recursos de CPU ou memória para AWS

{% note %}

**Observação:** para adicionar recursos de CPU ou memória à AWS, você deve saber usar o console de gerenciamento da AWS ou a interface da linha de comando da `aws ec2` para gerenciar instâncias do EC2. Para obter informações e detalhes sobre como usar as ferramentas da AWS de sua preferência para executar o redimensionamento, consulte a documentação da AWS sobre o [redimensionamento de uma instância com backup do Amazon EBS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html).

{% endnote %}

### Considerações de redimensionamento

Para aumentar recursos de CPU ou memória do {% data variables.product.product_location %}, examine as seguintes recomendações:

- **Escale sua memória com CPUs**. {% data reusables.enterprise_installation.increasing-cpus-req %}
- **Atribua um endereço IP Elástico à instância**. Se não houver IP elástica atribuída, você terá que ajustar os registros DNS A do seu host do {% data variables.product.prodname_ghe_server %} após o reinício para explicar a alteração no endereço IP público. Depois que a instância for reiniciada, a IP elástica (EIP) será automaticamente mantida se a instância for iniciada em uma VPC. Se a instância for iniciada no EC2-Classic, a IP elástica deverá ser associada outra vez manualmente.

### Tipos de instância do AWS compatíveis

É necessário determinar o tipo de instância para a qual você pretende atualizar com base nas especificações de CPU/memória.

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

### Redimensionar para o AWS

{% note %}

**Observação:** para instâncias iniciadas no EC2-Classic, anote o endereço IP Elástico associado à instância e a ID da instância. Depois de reiniciar a instância, reassocie o endereço IP elástico.

{% endnote %}

Não é possível adicionar recursos de CPU ou memória a uma instância atual do AWS/EC2. Faça o seguinte:

1. Pare a instância;
2. Altere o tipo de instância.
3. Inicie a instância.
{% data reusables.enterprise_installation.configuration-recognized %}

## Adicionar recursos de CPU ou memória ao Microsoft Azure

{% note %}

**Observação:** para adicionar recursos de CPU ou memória no Microsoft Azure, você deve estar familiarizado com o uso do Portal Azure, da Azure CLI ou do Azure Powershell para gerenciar as instâncias de VM. Para obter informações e detalhes sobre como usar as ferramentas do Azure de sua preferência para executar o redimensionamento, confira a documentação do Azure sobre [como alterar o tamanho de uma máquina virtual](https://docs.microsoft.com/en-us/azure/virtual-machines/resize-vm).

{% endnote %}

### Considerações de redimensionamento

Para aumentar recursos de CPU ou memória do {% data variables.product.product_location %}, examine as seguintes recomendações:

- **Escale sua memória com CPUs**. {% data reusables.enterprise_installation.increasing-cpus-req %}
- **Atribua um endereço IP estático à instância**. Se você não atribuiu um IP estático à instância, você deve ter que ajustar os registros DNS A para o seu host de {% data variables.product.prodname_ghe_server %} após a reinicialização da conta para alterar o endereço IP.

### Tamanhos compatíveis da instância do Microsoft Azure

É necessário determinar tamanho da instância para a qual você pretende atualizar com base nas especificações de CPU/memória.

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

### Redimensionamento para o Microsoft Azure

Você pode dimensionar a VM alterando o tamanho da VM. Alterar o tamanho dele fará com que ele seja reiniciado. Em alguns casos, você deverá desalocar a VM primeiro. Isso pode acontecer se o novo tamanho não estiver disponível no cluster de hardware que hospeda atualmente a VM. 

1. Consulte a documentação do Azure sobre [como alterar o tamanho de uma máquina virtual](https://docs.microsoft.com/en-us/azure/virtual-machines/resize-vm) para as etapas necessárias.
{% data reusables.enterprise_installation.configuration-recognized %}

## Adicionar recursos de CPU ou memória para OpenStack KVM

Não é possível adicionar recursos de CPU ou memória a uma instância atual do OpenStack KVM. Faça o seguinte:

1. Tire um instantâneo da instância atual;
2. Pare a instância;
3. Selecione um novo tipo de instância que tenha os recursos de CPU e/ou memória desejados.

## Adicionar recursos de memória ou CPU para VMware

{% data reusables.enterprise_installation.increasing-cpus-req %}

1. Use o cliente vSphere para conexão com o host VMware ESXi.
2. Desligue a {% data variables.product.product_location %}.
3. Selecione a máquina virtual e clique em **Editar Configurações**.
4. Em "Hardware", ajuste a CPU e/ou os recursos de memória alocados à máquina virtual, conforme necessário: ![recursos de configuração do VMware](/assets/images/enterprise/vmware/vsphere-hardware-tab.png)
5. Para iniciar a máquina virtual, clique em **OK**.
{% data reusables.enterprise_installation.configuration-recognized %}
