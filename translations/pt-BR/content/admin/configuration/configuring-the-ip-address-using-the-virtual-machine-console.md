---
title: Configurar endereço IP usando o console de máquina virtual
intro: 'Por padrão, o {% data variables.product.prodname_ghe_server %} recupera as configurações de rede pelo protocolo de configuração dinâmica de host (DHCP). Se a sua plataforma for compatível ou se o DHCP estiver indisponível, você também poderá definir as configurações de rede usando o console da máquina virtual.'
redirect_from:
  - /enterprise/admin/installation/configuring-the-ip-address-using-the-virtual-machine-console
  - /enterprise/admin/configuration/configuring-the-ip-address-using-the-virtual-machine-console
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_installation.open-vm-console-start %}
3. Escolha configurar o protocolo `IPv4` ou `IPv6`. ![Escolha entre os protocolos IPv4 ou IPv6](/assets/images/enterprise/network-configuration/IPv4-or-IPv6-protocol.png)
4. Configure as opções para o protocolo escolhido. ![Menu com opções de protocolo IP](/assets/images/enterprise/network-configuration/network-settings-selection.png)
{% data reusables.enterprise_installation.vm-console-done %}
