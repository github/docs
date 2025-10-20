---
title: About Collectd metrics
intro: '{% ifversion ghes-opentelemetry %}Collectd metrics provide a legacy monitoring solution for {% data variables.product.prodname_ghe_server %} instances that is supported alongside a {% data variables.release-phases.public_preview %} of OpenTelemetry metrics.{% else %}Collectd metrics provide a monitoring solution for {% data variables.product.prodname_ghe_server %} instances.{% endif %}'
versions:
  ghes: '*'
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
type: overview
shortTitle: About Collectd metrics
---

{% data reusables.enterprise.collectd-metrics-future %}

## About collectd metrics

Collectd is a daemon that collects system performance statistics periodically and stores them in a variety of ways. For {% data variables.product.prodname_ghe_server %}, collectd gathers metrics from various system components and services, providing insight into system health and performance.

### Key components

The collectd monitoring stack includes the following components:

* **Collectd**: The main daemon that collects system performance statistics
* **Graphite**: Serves as the datasource for dashboard visualizations

### Metrics collection

Collectd gathers metrics from various sources including:

* **System metrics**: CPU usage, memory utilization, disk I/O, network statistics
* **Application metrics**: HAProxy statistics, Resque queue metrics, database performance
* **Custom metrics**: Service-specific metrics through custom plugins and scripts

## Architecture

### Single appliance

In a single appliance deployment, collectd runs locally and stores metrics in RRD (Round Robin Database) files. The {% data variables.enterprise.management_console %} reads these files to display monitoring dashboards.

### Cluster environment

In cluster environments, collectd operates in a distributed manner:

* **Metrics servers**: Designated nodes that collect and store metrics from all cluster nodes
* **Metrics clients**: All other nodes that forward their metrics to the metrics servers
* **Redundancy**: Metrics are duplicated across multiple metrics servers for failover support

## Configuring collectd metrics

Collectd metrics are enabled by default on {% data variables.product.prodname_ghe_server %} instances.

## External monitoring with collectd

You can set up external monitoring systems to collect and analyze collectd metrics from your {% data variables.product.prodname_ghe_server %} instance. This enables integration with existing monitoring infrastructure and provides additional visualization and alerting capabilities.

For more information about setting up external monitoring, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/collectd-metrics/setting-up-external-monitoring-with-collectd).

## Collectd metrics reference

{% data variables.product.prodname_ghe_server %} collects various metrics through collectd, covering system resources, application performance, and service health. Understanding these metrics is essential for effective monitoring and troubleshooting.

For a comprehensive list of available metrics, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/collectd-metrics/collectd-metrics-for-github-enterprise-server).

{% ifversion ghes-opentelemetry %}

## Migration considerations

As {% data variables.product.prodname_ghe_server %} transitions to OpenTelemetry metrics, consider the following:

* **Coexistence**: Both collectd and OpenTelemetry metrics can run simultaneously during the transition period
* **Feature parity**: OpenTelemetry metrics provide equivalent and enhanced monitoring capabilities
* **Planning**: Begin evaluating OpenTelemetry metrics for your monitoring workflows
* **Timeline**: Plan for the eventual {% data variables.release-phases.closing_down %} and then {% data variables.release-phases.retired %} of collectd metrics in future releases

{% endif %}

## Next steps

* To set up external monitoring, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/collectd-metrics/setting-up-external-monitoring-with-collectd).
* To explore available metrics, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/collectd-metrics/collectd-metrics-for-github-enterprise-server).
