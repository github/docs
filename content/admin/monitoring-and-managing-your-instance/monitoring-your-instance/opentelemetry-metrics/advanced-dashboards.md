---
title: Advanced dashboards of OpenTelemetry metrics
intro: After enabling OpenTelemetry metrics collection on your {% data variables.product.prodname_ghe_server %} instance, you have access to additional dashboards with enhanced visualization and monitoring capabilities.
redirect_from:
  - /enterprise/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/enable-advanced-dashboards
versions:
  feature: ghes-opentelemetry
shortTitle: Advanced dashboards
contentType: how-tos
category:
  - Monitor and audit your enterprise
---

{% data reusables.enterprise.opentelemetry-migration %}

## Prerequisites

* OpenTelemetry metrics are enabled for your {% data variables.product.prodname_ghe_server %} instance


## Additional dashboards

When OpenTelemetry metrics are enabled, you will have access to advanced Grafana dashboards with enhanced visualization and monitoring capabilities.

* **Elasticsearch** - Detailed metrics for search performance, indexing operations, and cluster health
* **Nomad** - In-depth monitoring of job scheduling, resource allocation, and service orchestration
* **HAProxy** - Load balancer performance metrics, connection statistics, and request routing information
* **Node Exporter** - System-level metrics including CPU, memory, disk, and network statistics for each node
* **Process Exporter** - Detailed process-level metrics for monitoring individual service performance

These dashboards provide more granular insights into your {% data variables.product.prodname_ghe_server %} instance's performance and can help with advanced troubleshooting and capacity planning.
