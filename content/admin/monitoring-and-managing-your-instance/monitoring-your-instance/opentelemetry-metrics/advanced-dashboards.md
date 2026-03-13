---
title: Advanced dashboards of OpenTelemetry metrics
intro: 'After enabling OpenTelemetry metrics collection on your {% data variables.product.prodname_ghe_server %} instance, you have access to additional dashboards with enhanced visualization and monitoring capabilities.'
redirect_from:
  - /enterprise/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/enable-advanced-dashboards
versions:
  feature: ghes-opentelemetry
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
type: how_to
shortTitle: Advanced dashboards
---

{% data reusables.enterprise.opentelemetry-migration %}

{% ifversion ghes = 3.18 %}

{% data reusables.enterprise.opentelemetry-preview %}

{% endif %}

## Prerequisites

* OpenTelemetry metrics are enabled for your {% data variables.product.prodname_ghe_server %} instance


## Additional dashboards

{% ifversion ghes < 3.19 %}
When OpenTelemetry metrics are enabled, you can turn on advanced Grafana dashboards with enhanced visualization and monitoring capabilities.
{% else %}
When OpenTelemetry metrics are enabled, you will have access to advanced Grafana dashboards with enhanced visualization and monitoring capabilities.
{% endif %}

* **Elasticsearch** - Detailed metrics for search performance, indexing operations, and cluster health
* **Nomad** - In-depth monitoring of job scheduling, resource allocation, and service orchestration
* **HAProxy** - Load balancer performance metrics, connection statistics, and request routing information
* **Node Exporter** - System-level metrics including CPU, memory, disk, and network statistics for each node
* **Process Exporter** - Detailed process-level metrics for monitoring individual service performance

These dashboards provide more granular insights into your {% data variables.product.prodname_ghe_server %} instance's performance and can help with advanced troubleshooting and capacity planning.

{% ifversion ghes < 3.19 %}
## Enabling advanced dashboards

### Prerequisites

* SSH access to your {% data variables.product.prodname_ghe_server %} instance

---


{% data reusables.enterprise_installation.ssh-into-instance %}
1. Run the following command to enable advanced dashboards:

   ```shell
   ghe-config observability.metrics.advanced-dashboards-enabled true
   ```

{% data reusables.enterprise.apply-configuration %}

After running these commands, your external Grafana instance will have access to additional pre-configured dashboards.
{% endif %}
