您可以勾选 `https://HOSTNAME/status` URL 返回的状态代码，以监控 {% data variables.product.prodname_ghe_server %} 的可用性。 可提供用户流量的设备将返回状态代码 `200`（正常）。 设备可能出于以下几个原因而返回 `503`（服务不可用）：
 - 设备是被动副本，例如双节点高可用性配置中的副本。
 - 设备处于维护模式。
 - 设备属于地理副本配置，但为非活动的副本。

也可使用以下网址的“复制”概述：

`https://HOSTNAME/setup/replication`
