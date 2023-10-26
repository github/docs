---
title: collectd metrics for GitHub Enterprise Server
shortTitle: collectd metrics
intro: "You can review the metrics that `collectd` gathers for {% data variables.location.product_location %}."
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
---

## About `collectd` metrics

By default, `collectd` on {% data variables.location.product_location %} gathers metrics related to the instance's performance. For more information, see "[AUTOTITLE](/admin/monitoring-managing-and-updating-your-instance/monitoring-your-instance/configuring-collectd-for-your-instance)."

You can learn more about the type of data that `collectd` gathers, and you can download a CSV file that contains a full list of metrics.

## Metrics gathered by `collectd` plugins

Plugins provide metrics to `collectd`. You can learn about each plugin available on {% data variables.location.product_location %}, and you can review documentation about the plugin. To review a full list of metrics for a {% data variables.product.product_name %} instance, see the [CSV file with `collectd` metrics](/assets/ghes-collectd-metrics.csv).

| Plugin | Metrics gathered | More information |
| :- | :- | :- |
| `cpu` | Amount of time spent by the instance's CPU in various states: for example, execution of user code, execution of system code, waiting for I/O operations, and remaining idle | [Plugin:CPU](https://collectd.org/wiki/index.php/Plugin:CPU) in the `collectd` wiki |
| `curl_json` | On an instance in a high-availability, repository caching, or cluster configuration, data related to repository replication | [Plugin:cURL-JSON](https://collectd.org/wiki/index.php/Plugin:cURL-JSON) in the `collectd` wiki |
| `df` | Usage information about the instance's file system | [Plugin:DF](https://collectd.org/wiki/index.php/Plugin:DF) in the `collectd` wiki |
| `disk` | Performance statistics for the instance's hard disks and other block devices | [Plugin:Disk](https://collectd.org/wiki/index.php/Plugin:Disk) in the `collectd` wiki |
| `elasticsearch` | Statistics for Elasticsearch, which provides the instance's search functionality | [phobos182/collectd-elasticsearch](https://github.com/phobos182/collectd-elasticsearch/) repository on {% data variables.product.prodname_dotcom_the_website %} |
| `fhcount` | Total, used, and unused file handles for the instance's Linux OS | [Manpage collectd.conf(5)](https://collectd.org/documentation/manpages/collectd.conf.5.shtml#plugin_fhcount) in the `collectd` wiki |
| `haproxy` | Front-end connections to the instance from HAProxy's management socket | [mleinart/collectd-haproxy](https://github.com/mleinart/collectd-haproxy) repository on {% data variables.product.prodname_dotcom_the_website %} |
| `listener` | Active and queued connections to the instance's `github-unicorn`, `github-gitauth`, and `github-ernicorn` services | N/A |
| `load` | System load average | [Plugin:Load](https://collectd.org/wiki/index.php/Plugin:Load) in the `collectd` wiki |
| `memcached` | Number of connections and requests handled by the instance's memcached daemon, as well as CPU resources consumed, number of items cached, number of threads, and bytes sent and received | [Plugin:memcached](https://collectd.org/wiki/index.php/Plugin:memcached) in the `collectd` wiki |
| `memory` | Instance's memory usage | [Plugin:Memory](https://collectd.org/wiki/index.php/Plugin:Memory) in the `collectd` wiki |
| `minio` | On an instance that uses MinIO blob storage for {% data variables.product.prodname_actions %} or {% data variables.product.prodname_registry %}, statistics for objects and buckets in the connected MinIO cluster from MinIO's `/metrics` endpoint | [minio/minio](https://github.com/minio/minio/blob/master/docs/metrics/prometheus/list.md) repository on {% data variables.product.prodname_dotcom_the_website %} |
| `mysql` | Statistics related to instance's MySQL database server | [Plugin:MySQL](https://collectd.org/wiki/index.php/Plugin:MySQL) in the `collectd` wiki |
| `netlink` | Statistics related to instance's network interface | [Plugin:Netlink](https://collectd.org/wiki/index.php/Plugin:Netlink) in the `collectd` wiki |
| `nginx` | Statistics related to the instance's Nginx HTTP server | [Plugin:nginx](https://collectd.org/wiki/index.php/Plugin:nginx) in the `collectd` wiki |
| `nomad` | Statistics related to the instance's scheduler and orchestrator, Nomad | N/A |
| `processes` | The number of processes and threads on the instance | [Plugin:Processes](https://collectd.org/wiki/index.php/Plugin:Processes) in the `collectd` wiki |
| `protocols` | The number of TCP, UDP, and other IP packets received and sent by the instance | [Plugin:Protocols](https://collectd.org/wiki/index.php/Plugin:Protocols) in the `collectd` wiki |
| `redis` | Statistics related to the instance's key-value store in Redis | [Plugin:Redis](https://collectd.org/wiki/index.php/Plugin:Redis) in the `collectd` wiki |
| `statsd` | Statistics sent to `collectd` using the StatsD protocol, including from a variety of features and services on the instance | [Plugin:StatsD](https://collectd.org/wiki/index.php/Plugin:StatsD) in the `collectd` wiki |
| `tcpconns` | The number of the instance's TCP connections in various states | [Plugin:TCPConns](https://collectd.org/wiki/index.php/Plugin:TCPConns) in the `collectd` wiki |
| `vmem` | Statistics related to the virtual memory subsystem for the instance's Linux OS kernel | [Plugin:vmem](https://collectd.org/wiki/index.php/Plugin:vmem) in the `collectd` wiki |
