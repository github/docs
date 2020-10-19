---
title: 仮想マシンのコンソールを使ったIPアドレスの設定
intro: 'デフォルトでは、{% data variables.product.prodname_ghe_server %} は動的ホスト構成プロトコル (DHCP) を通じてネットワーク設定を取得します。 利用するプラットフォームでサポートされている場合、あるいはDHCPが利用できない場合、ネットワーク設定を仮想マシンのコンソールを使って設定することもできます。'
redirect_from:
  - /enterprise/admin/installation/configuring-the-ip-address-using-the-virtual-machine-console
  - /enterprise/admin/configuration/configuring-the-ip-address-using-the-virtual-machine-console
versions:
  enterprise-server: '*'
---

{% note %}

**注釈:** {% data variables.product.prodname_ghe_server %} へのネットワークアダプタの追加はサポートされていません。

{% endnote %}

{% data reusables.enterprise_installation.open-vm-console-start %}
3. `IPv4`あるいは`IPv6`プロトコルの設定を選択してください。 ![IPv4 または IPv6 プロトコルを選択するためのオプション](/assets/images/enterprise/network-configuration/IPv4-or-IPv6-protocol.png)
4. 選択したプロトコルのオプションを設定してください。 ![IP プロトコルオプションのメニュー](/assets/images/enterprise/network-configuration/network-settings-selection.png)
{% data reusables.enterprise_installation.vm-console-done %}


