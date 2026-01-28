---
title: Configuring OpenTelemetry for your instance
intro: 'Learn how to configure OpenTelemetry metrics collection on your {% data variables.product.prodname_ghe_server %} instance for enhanced monitoring and observability.'
versions:
  feature: ghes-opentelemetry
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
type: how_to
shortTitle: Configure OpenTelemetry
---

{% data reusables.enterprise.opentelemetry-migration %}

{% ifversion ghes = 3.18 %}

{% data reusables.enterprise.opentelemetry-preview %}

{% endif %}

## Prerequisites

* {% data variables.product.prodname_ghe_server %} 3.18 or later
* Administrative access to the {% data variables.enterprise.management_console %}
* SSH access to your {% data variables.product.prodname_ghe_server %} appliance

## Enabling OpenTelemetry metrics

{% ifversion ghes > 3.18 %}

OpenTelemetry metrics are enabled by default for **new installations** of {% data variables.product.prodname_ghe_server %} 3.19 and later. Upgrades to {% data variables.product.prodname_ghe_server %} 3.19 will still have `collectd` metrics enabled by default, but you can choose to switch to OpenTelemetry metrics.

{% else %}

OpenTelemetry metrics are disabled by default. You can enable them through the {% data variables.enterprise.management_console %} or command line.

### Using the {% data variables.enterprise.management_console %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}

1. In the monitoring settings, select **Enable OpenTelemetry**.

{% data reusables.enterprise_management_console.save-settings %}

### Using the command line

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Run the following command to enable OpenTelemetry metrics.

   ```shell
   ghe-config observability.metrics.next-enabled true
    ```

{% data reusables.enterprise.apply-configuration %}

{% endif %}

## Performance considerations

When configuring OpenTelemetry metrics, consider the following performance factors:

* **Collection frequency**: More frequent collection increases system load
* **Data retention**: Longer retention periods require more storage
* **Custom exporters**: Additional exporters may increase CPU and memory usage
* **Network bandwidth**: External metric shipping affects network usage

## Configuring metrics collection

After enabling OpenTelemetry metrics, you can customize various aspects of the metrics collection process.

### Setting collection intervals

The default metrics collection interval is 30 seconds. You can adjust this based on your monitoring needs.

> [!IMPORTANT]
> Setting shorter intervals increases the precision of metrics but also increases storage requirements and system load. Consider your system resources and monitoring requirements before adjusting this setting.

#### Using the {% data variables.enterprise.management_console %} to set intervals

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}

1. In the monitoring settings, under **Metrics scrape interval**, enter the desired interval in seconds (for example, `60`).

{% data reusables.enterprise_management_console.save-settings %}

#### Using the command line to set intervals

SSH into your {% data variables.product.prodname_ghe_server %} appliance and run the following commands:

```shell
# Set scrape interval to 60 seconds
ghe-config observability.metrics.interval 60
ghe-config-apply
```

### Configuring data retention

By default, metrics data is retained for 30 days. You can modify this setting using either the {% data variables.enterprise.management_console %} or command line.

#### Using the {% data variables.enterprise.management_console %} to configure retention

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}

1. In the monitoring settings, under **Metrics retention**, enter the desired retention period in days (for example, `15`).

{% data reusables.enterprise_management_console.save-settings %}

#### Using the command line to configure retention

SSH into your {% data variables.product.prodname_ghe_server %} appliance and run the following commands:

```shell
# Set retention to 15 days
ghe-config observability.metrics.retention 15
ghe-config-apply
```

### Configuring the verbosity level for internal telemetry

The OpenTelemetry collector generates its own internal telemetry data for monitoring the health and performance of the collector itself. You can configure the verbosity of this internal telemetry using the command line.

The available telemetry levels are:
* `none`: Disables internal telemetry
* `basic`: Provides essential telemetry data (default)
* `normal`: Provides standard telemetry data
* `detailed`: Provides verbose telemetry data for debugging

SSH into your {% data variables.product.prodname_ghe_server %} appliance and run the following commands:

```shell
# Set internal telemetry level to normal
ghe-config observability.metrics.internal-otel-telemetry-level normal
ghe-config-apply
```

> [!NOTE]
> Higher telemetry levels provide more detailed information about the collector's internal operations but also increase resource usage. The `basic` level is recommended for production environments unless you need to troubleshoot collector issues.

## Troubleshooting configuration issues

If you encounter problems with OpenTelemetry configuration, the following information can help you identify and resolve common issues.

### Common configuration problems

* **Service startup failures**: Check system logs for error messages
* **Resource constraints**: Monitor system resources when adjusting collection intervals

### Viewing local logs

SSH into the node you want to debug and run the following commands:

View OpenTelemetry collector logs:

```shell
sudo journalctl -u otelcol-contrib -f
```

View VictoriaMetrics logs:

```shell
sudo journalctl -u victoriametrics -f
```

## Next steps

* To enable advanced monitoring dashboards, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/advanced-dashboards)
* To set up external monitoring, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/setting-up-external-monitoring-with-opentelemetry).
