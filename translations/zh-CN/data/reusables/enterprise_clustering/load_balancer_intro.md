负载均衡器设计使用网络设备将 Git 和 HTTP 流量引导至各个 {% data variables.product.prodname_ghe_server %} 设备。 您可以使用负载均衡器限制引导至设备的流量以确保安全，或者在没有 DNS 记录更改的情况下根据需要重定向流量。 我们强烈建议使用支持 PROXY 协议的基于 TCP 负载均衡器。
