---
title: DNSネームサーバの設定
intro: '{% data variables.product.prodname_ghe_server %} は、動的ホスト構成プロトコル (DHCP) のリースがネームサーバーを提供するときに、DNS 設定に対して DHCP を使用します。 ネームサーバがDHCPのリースで提供されない場合、あるいは特定のDNS設定を使う必要がある場合は、手動でネームサーバを指定できます。'
redirect_from:
  - /enterprise/admin/guides/installation/about-dns-nameservers/
  - /enterprise/admin/installation/configuring-dns-nameservers
  - /enterprise/admin/configuration/configuring-dns-nameservers
  - /admin/configuration/configuring-dns-nameservers
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
---

指定するネームサーバは、{% data variables.product.product_location %}のホスト名を解決できなければなりません。

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

### 仮想マシンのコンソールを使ったネームサーバの設定

{% data reusables.enterprise_installation.open-vm-console-start %}
2. インスタンスに対してネームサーバーを設定します。
{% data reusables.enterprise_installation.vm-console-done %}

### 管理シェルを使ったネームサーバの設定

{% data reusables.enterprise_installation.ssh-into-instance %}
2. ネームサーバーを編集するには、次を入力します:
  ```shell
  $ sudo vim /etc/resolvconf/resolv.conf.d/head
  ```
3. `nameserver` エントリを追加し、続いてファイルを保存します。
4. 変更を確認したら、ファイルを保存します。
5. 新しいネームサーバーエントリを {% data variables.product.product_location %} に追加するには、次を入力します:
  ```shell
  $ sudo service resolvconf restart
  ```
