---
title: Configurar servidores de nomes DNS
intro: 'O {% data variables.product.prodname_ghe_server %} usa o protocolo de configuração dinâmica de host (DHCP) para configurações de DNS quando as concessões de DHCP fornecem servidores de nomes. Se os servidores de nomes não forem fornecidos por uma concessão do protocolo DHCP, ou caso você precise usar configurações DNS específicas, será possível especificá-los manualmente.'
redirect_from:
  - /enterprise/admin/guides/installation/about-dns-nameservers/
  - /enterprise/admin/installation/configuring-dns-nameservers
versions:
  enterprise-server: '*'
---

Os servidores de nomes que você especificar devem resolver o nome de host da {% data variables.product.product_location_enterprise %}.

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

### Configurar servidores de nomes usando o console de máquina virtual

{% data reusables.enterprise_installation.open-vm-console-start %}
2. Configure os servidores de nomes da sua instância.
{% data reusables.enterprise_installation.vm-console-done %}

### Configurar servidores de nomes usando o shell administrativo

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Para editar seus servidores de nomes, insira:
  ```shell
  $ sudo vim /etc/resolvconf/resolv.conf.d/head
  ```
3. Adicione quaisquer entradas `nameserver` e salve o arquivo.
4. Depois de verificar suas alterações, salve o arquivo.
5. Para adicionar suas novas entradas de servidor de nomes à {% data variables.product.product_location_enterprise %}, insira:
  ```shell
  $ sudo service resolvconf restart
  ```
