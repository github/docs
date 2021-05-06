---
title: Instalar o GitHub Enterprise Server no OpenStack KVM
intro: 'Para instalar o {% data variables.product.prodname_ghe_server %} no OpenStack KVM, você deve ter acesso ao OpenStack e baixar a imagem QCOW2 do {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-openstack-kvm/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-openstack-kvm
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

### Pré-requisitos

- {% data reusables.enterprise_installation.software-license %}
- Você deve ter acesso a uma instalação do OpenStack Horizon, a interface de usuário baseada na web para os serviços do OpenStack. Para obter mais informações, consulte a [Documentação do Horizon](https://docs.openstack.org/horizon/latest/).

### Considerações de hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Baixar a imagem do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. Selecione o {% data variables.product.prodname_dotcom %} On-premises e clique em **OpenStack KVM (QCOW2)**.
5. Clique em **Download for OpenStack KVM (QCOW2)** (Baixar para OpenStack KVM [QCOW2]).

### Criar a instância do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. No OpenStack Horizon, faça o upload do

imagem de {% data variables.product.prodname_ghe_server %} que você baixou. Para obter instruções, consulte a seção "Fazer upload de uma imagem" do guia OpenStack "[Fazer upload e gerenciar imagens](https://docs.openstack.org/horizon/latest/user/manage-images.html)".
{% data reusables.enterprise_installation.create-attached-storage-volume %} Para obter instruções, consulte o guia OpenStack "[Criar e gerenciar volumes](https://docs.openstack.org/horizon/latest/user/manage-volumes.html)".
3. Crie um grupo de segurança e adicione uma nova regra de grupo de segurança para cada porta na tabela abaixo. Para ver as instruções, consulte o guia do OpenStack "[Configurar o acesso e a segurança nas instâncias](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html)".

  {% data reusables.enterprise_installation.necessary_ports %}
4. Você também pode associar um IP flutuante à instância. Dependendo da sua configuração do OpenStack, talvez seja necessário alocar um IP flutuante para o projeto e associá-lo à instância. Entre em contato com o administrador do sistema para determinar se esse é o seu caso. Para obter mais informações, consulte "[Alocar endereço IP flutuante a uma instância](https://docs.openstack.org/horizon/latest/user/configure-access-and-security-for-instances.html#allocate-a-floating-ip-address-to-an-instance)" na documentação do OpenStack.
5. Inicie a {% data variables.product.product_location %} usando a imagem, o volume de dados e o grupo de segurança criados nas etapas anteriores. Para ver as instruções, consulte "[Iniciar e gerenciar instâncias](https://docs.openstack.org/horizon/latest/user/launch-instances.html)" no guia do OpenStack.

### Configurar a instância do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para obter mais informações, consulte "[Configurar o appliance do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)".
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Leia mais

- "[Visão geral do sistema](/enterprise/admin/guides/installation/system-overview){% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[Sobre atualizações para novas versões](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
