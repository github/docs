---
title: 外部モニタリングのセットアップ
intro: 'SNMP または collectd のいずれかの統計収集プロトコルを使用すれば、{% data variables.product.prodname_ghe_server %} アプライアンスで基本的なシステムリソースを監視できます。'
redirect_from:
  - /enterprise/admin/installation/setting-up-external-monitoring
versions:
  enterprise-server: '*'
---

### SNMPについて

Simple Network Management Protocol (SNMP) は、ネットワークデバイスやサーバのモニタリングの方法として広くサポートされています。 SNMPはデフォルトでは無効化されていますが、{% data variables.product.prodname_enterprise %}モニタリングダッシュボードを通じて設定できます。 UDPポート161は、オープンでネットワーク管理ステーションから到達可能でなければなりません。 詳細は「[SNMPを使用したモニタリング](/enterprise/{{ currentVersion }}/admin/guides/installation/monitoring-using-snmp/)」を参照してください。

### collectdについて

collectdはオープンソースの統計収集及びレポーティングデーモンで、RRDファイルの書き込みサポートが組み込まれています。 CPUの利用状況、メモリ及びディスクの消費、ネットワークインターフェースのトラフィックとエラー、システムの負荷に関する統計を外部のcollectdサーバに転送でき、そこで利用可能な幅広いツールやプラグインを使ってグラフ、分析、アラートを設定できます。 `collectd` 転送を設定するには、「[collectdの設定](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-collectd/)」を参照してください。

加えて、下位層の仮想化プラットフォームに組み込まれているモニタリングツールも、システムリソースの基本的なモニタリングとアラートに利用できます。 詳しい情報については[Amazon CloudWatch](https://aws.amazon.com/jp/cloudwatch//)や[vSphere の監視およびパフォー マンス](http://pubs.vmware.com/vsphere-50/topic/com.vmware.ICbase/PDF/vsphere-esxi-vcenter-server-50-monitoring-performance-guide.pdf)といったドキュメンテーションを参照してください。
