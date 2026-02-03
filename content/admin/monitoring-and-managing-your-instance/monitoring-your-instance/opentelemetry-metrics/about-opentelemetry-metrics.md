---
title: About OpenTelemetry metrics
intro: 'OpenTelemetry metrics provide a comprehensive monitoring solution for {% data variables.product.prodname_ghe_server %} instances, offering enhanced observability and management capabilities.'
versions:
  feature: ghes-opentelemetry
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
type: overview
shortTitle: OpenTelemetry metrics
---

{% data reusables.enterprise.opentelemetry-migration %}

{% ifversion ghes = 3.18 %}

{% data reusables.enterprise.opentelemetry-preview %}

{% endif %}

## About OpenTelemetry metrics

The OpenTelemetry monitoring stack is based on industry-standard observability tools and includes various components for collecting, processing, and storing metrics. This comprehensive approach provides a complete view of your system's performance and health across all components of your {% data variables.product.prodname_ghe_server %} instance.

### Benefits of OpenTelemetry metrics

OpenTelemetry metrics offer several advantages over the legacy collectd system:

* **Industry standard**: Based on widely adopted OpenTelemetry and Prometheus standards
* **Scalable storage**: VictoriaMetrics provides efficient time-series data storage
* **Rich visualization**: Grafana offers advanced dashboard and alerting capabilities
* **Extensible**: Support for custom metrics and external monitoring integrations
* **Native endpoints**: Direct integration with service `/metrics` endpoints for efficient monitoring

With OpenTelemetry, advanced Grafana dashboards with enhanced visualization and monitoring capabilities are available, see: [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/advanced-dashboards).

## Key components

The OpenTelemetry monitoring stack includes the following components:

* **OpenTelemetry Collector**: Receives, processes, and exports telemetry data, acting as the central hub for collecting metrics from various sources
* **VictoriaMetrics**: A fast, efficient, and scalable time-series database that stores all metrics collected from your {% data variables.product.prodname_ghe_server %} instance
* **Grafana**: Provides powerful visualization capabilities for time-series data, allowing you to create, explore, and share dashboards
* **Exporters**: Specialized components that collect metrics from specific services, including:
  * [Node exporter](https://github.com/prometheus/node_exporter): System-level metrics including CPU, memory, disk, and network statistics
  * [Process exporter](https://github.com/ncabatoff/process-exporter): Detailed process-level metrics and resource utilization
  * [StatsD exporter](https://github.com/prometheus/statsd_exporter): Used by {% data variables.product.github %} components to expose application-level metrics using the StatsD protocol
  * [HAProxy exporter](https://github.com/prometheus/haproxy_exporter): Load balancer metrics for frontend, cluster, and data tiers
  * Nomad exporter: Job scheduler and resource allocation metrics (native Nomad `/v1/metrics` endpoint)
  * [MySQL exporter](https://github.com/prometheus/mysqld_exporter): Database performance and query metrics (when MySQL is enabled)
  * [Elasticsearch exporter](https://github.com/prometheus-community/elasticsearch_exporter): Search engine performance and indexing metrics (when Elasticsearch is enabled)
  * [Redis exporter](https://github.com/oliver006/redis_exporter): Cache performance and memory usage metrics (when Redis is enabled)
  * [Memcached exporter](https://github.com/prometheus/memcached_exporter): Cache hit rates and memory statistics (when Memcached is enabled)
  * MinIO exporter: Object storage cluster metrics (native MinIO `/minio/v2/metrics/cluster` endpoint, when MinIO is enabled)
  * [Nginx exporter](https://github.com/nginxinc/nginx-prometheus-exporter): Web server performance and request metrics (when Nginx is enabled)
  * [SQL exporter](https://github.com/burningalchemist/sql_exporter): Microsoft SQL Server metrics (when SQL Server is enabled)
  * [Blackbox exporter](https://github.com/prometheus/blackbox_exporter): Network probe and connectivity metrics (in cluster deployments)
* **Custom metrics services**: Additional {% data variables.product.github %}-specific services that push OpenTelemetry metrics directly to the collector, including:
  * **Resque metrics**: Background job processing and queue metrics
  * **Postfix metrics**: Email delivery and mail server performance metrics
  * **Listener stats metrics**: Connection and request handling statistics
  * **WireGuard metrics**: VPN tunnel and network encryption metrics

## Next steps

* To enable and configure OpenTelemetry metrics, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/configuring-opentelemetry-for-your-instance).
* To set up external monitoring, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/setting-up-external-monitoring-with-opentelemetry).
