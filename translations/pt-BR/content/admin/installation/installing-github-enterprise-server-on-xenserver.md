---
title: Instalar o GitHub Enterprise Server no XenServer
intro: 'Para instalar o {% data variables.product.prodname_ghe_server %} no XenServer, você deve implantar a imagem de disco do {% data variables.product.prodname_ghe_server %} em um host do XenServer.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-xenserver/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-xenserver
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

### Pré-requisitos

- {% data reusables.enterprise_installation.software-license %}
- Você deve instalar o XenServer Hypervisor na máquina que executará a sua máquina virtual (VM) do {% data variables.product.prodname_ghe_server %}. As versões 6.0 a 7.0 são compatíveis.
- É recomendável usar o Console de gerenciamento do XenCenter Windows para a configuração inicial (veja as instruções de uso abaixo). Para obter mais informações, consulte "[Como baixar e instalar uma nova versão do XenCenter](https://support.citrix.com/article/CTX118531)" no guia do Citrix.

### Considerações de hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Baixar a imagem do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.enterprise-download-procedural %}
{% data reusables.enterprise_installation.download-license %}
{% data reusables.enterprise_installation.download-appliance %}
4. Selecione {% data variables.product.prodname_dotcom %} On-premises e clique em **XenServer (VHD)**.
5. Para baixar o arquivo de licença, clique em **Download license** (Baixar licença).

### Criar a instância do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.create-ghe-instance %}

1. No XenCenter, importe a imagem do {% data variables.product.prodname_ghe_server %} que você baixou. Para obter instruções, consulte "[Importar imagens de disco](https://docs.citrix.com/en-us/xencenter/current-release/vms-importdiskimage.html)" no guia do XenCenter.
    - Na etapa "Enable Operating System Fixup" (Habilitar correção do sistema operacional), selecione **Don't use Operating System Fixup** (Não usar correção do sistema operacional).
    - Ao concluir, deixe a VM desligada.
{% data reusables.enterprise_installation.create-attached-storage-volume %} Para obter instruções, consulte "[Adicionar discos virtuais](https://docs.citrix.com/en-us/xencenter/current-release/vms-storage-addnewdisk.html)" no guia do XenCenter.

### Configurar a instância do {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para obter mais informações, consulte "[Configurar o appliance do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)".
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Leia mais

- "[Visão geral do sistema](/enterprise/admin/guides/installation/system-overview){% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[Sobre atualizações para novas versões](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
