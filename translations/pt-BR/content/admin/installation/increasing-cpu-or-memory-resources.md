---
title: Aprimorar os recursos de CPU ou memória
intro: 'Para adicionar recursos de CPU ou memória a uma instância do {% data variables.product.prodname_ghe_server %}, desligue a instância e use as ferramentas da plataforma virtual subjacente para alocar os recursos para a máquina virtual. Os recursos recém-alocados são reconhecidos automaticamente na inicialização, e nenhuma configuração adicional é necessária.'
redirect_from:
  - /enterprise/admin/installation/increasing-cpu-or-memory-resources
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

### Adicionar recursos de CPU ou memória para AWS

{% note %}

**Observação:** para adicionar recursos de CPU ou memória ao AWS, você deve saber usar o console de gerenciamento do AWS ou a interface da linha de comandos `aws ec2` para gerenciar instâncias do EC2. Para obter detalhes sobre o uso das ferramentas do AWS escolhidas para o redimensionamento, consulte a documentação do AWS sobre [redimensionar uma instância da Amazon com EBS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html).

{% endnote %}

#### Considerações de redimensionamento

Antes de aumentar recursos de CPU ou memória do {% data variables.product.product_location_enterprise %}:
{% if currentVersion != "free-pro-team@latest" %}
- **Amplie sua memória com CPUs**
    {% data reusables.enterprise_installation.increasing-cpus-max %}{% endif %}
- **Verifique se há uma IP elástica atribuída à instância**

    Se não houver IP elástica atribuída, você terá que ajustar os registros DNS A do seu host do {% data variables.product.prodname_ghe_server %} após o reinício para explicar a alteração no endereço IP público. Depois que a instância for reiniciada, a IP elástica (EIP) será automaticamente mantida se a instância for iniciada em uma VPC. Se a instância for iniciada no EC2-Classic, a IP elástica deverá ser associada outra vez manualmente.

#### Tipos de instância do AWS compatíveis

É necessário determinar o tipo de instância para a qual você pretende atualizar com base nas especificações de CPU/memória.
{% data reusables.enterprise_installation.aws-supported-instance-types %}

#### Tipos de instância do AWS recomendados

{% data reusables.enterprise_installation.aws-recommended-instance-types %}

{% data reusables.enterprise_installation.warning-on-scaling %}

#### Redimensionar para o AWS

{% note %}

**Observação:** para instâncias iniciadas no EC2-Classic, anote o endereço IP elástico associado à instância e o ID da instância. Depois de reiniciar a instância, reassocie o endereço IP elástico.

{% endnote %}

Não é possível adicionar recursos de CPU ou memória a uma instância atual do AWS/EC2. Faça o seguinte:

1. Interrompa a instância.
2. Altere o tipo de instância.
3. Inicie a instância.
{% data reusables.enterprise_installation.configuration-recognized %}

### Adicionar recursos de CPU ou memória para OpenStack KVM

Não é possível adicionar recursos de CPU ou memória a uma instância atual do OpenStack KVM. Faça o seguinte:

1. Tire um instantâneo da instância atual;
2. Pare a instância;
3. Selecione um novo tipo de instância que tenha os recursos de CPU e/ou memória desejados.

### Adicionar recursos de CPU ou memória para VMware

Se houver lentidão das operações na {% data variables.product.product_location_enterprise %}, pode ser necessário adicionar recursos de CPU ou memória.

{% data reusables.enterprise_installation.increasing-cpus-max %}

1. Use o cliente vSphere para conexão com o host VMware ESXi.
2. Desligue a {% data variables.product.product_location_enterprise %}.
3. Selecione a máquina virtual e clique em **Edit Settings** (Editar configurações).
4. Em "Hardware", ajuste a CPU e/ou os recursos de memória alocados à máquina virtual, conforme necessário. ![Recursos de configuração VMware](/assets/images/enterprise/vmware/vsphere-hardware-tab.png)
5. Para iniciar a máquina virtual, clique em **OK**.
{% data reusables.enterprise_installation.configuration-recognized %}
