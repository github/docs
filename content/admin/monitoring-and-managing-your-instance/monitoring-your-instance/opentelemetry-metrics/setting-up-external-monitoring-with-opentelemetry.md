---
title: Setting up external monitoring with OpenTelemetry
intro: 'Configure external monitoring systems to collect and analyze OpenTelemetry metrics from your {% data variables.product.prodname_ghe_server %} instance.'
versions:
  feature: ghes-opentelemetry
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
type: how_to
shortTitle: External monitoring OpenTelemetry
---

{% ifversion ghes = 3.18 %}

{% data reusables.enterprise.opentelemetry-preview %}

{% endif %}

## External monitoring approaches

External monitoring with OpenTelemetry allows you to integrate your {% data variables.product.prodname_ghe_server %} instance with existing monitoring infrastructure and tools. {% data variables.product.prodname_ghe_server %} provides two primary approaches for external monitoring:

1. **Prometheus endpoint**: Expose metrics in Prometheus format for external tools to scrape
1. **Custom OpenTelemetry pipelines**: Configure the OpenTelemetry collector to push metrics to external monitoring systems

> [!NOTE]
> In cluster deployments, each node exposes its own local metrics. This includes node servers, which collect metrics from all servers in the cluster but only expose their own local metrics through monitoring endpoints. To collect metrics from all nodes in a cluster, you must configure your monitoring system to collect from each node individually.

## Prerequisites

* {% data variables.product.prodname_ghe_server %} 3.18 or later with OpenTelemetry metrics enabled
* Network connectivity between your {% data variables.product.prodname_ghe_server %} instance and external monitoring systems
* Administrative access to both your {% data variables.product.prodname_ghe_server %} instance and monitoring systems

## Choosing your monitoring approach

Choose the monitoring approach that best fits your infrastructure and requirements.

### Prometheus endpoint (recommended for most users)

Use the Prometheus endpoint when:

* You have existing Prometheus-based monitoring infrastructure
* You prefer a pull-based monitoring model
* You want to use external tools to scrape {% data variables.product.prodname_ghe_server %} metrics
* You need simple integration with minimal configuration

### Custom OpenTelemetry pipelines

Use custom OpenTelemetry pipelines when:

* You need to push metrics to multiple monitoring systems simultaneously
* You want to transform, filter, or aggregate metrics before sending them externally
* You're using cloud-native monitoring solutions that prefer OTLP
* You need advanced metric processing capabilities

## Option 1: Using the Prometheus endpoint

The OpenTelemetry monitoring stack includes a Prometheus-compatible endpoint that exposes all collected metrics in Prometheus format, enabling integration with external monitoring tools. See [Text-based format](https://prometheus.io/docs/instrumenting/exposition_formats/#text-based-format) in the documentation for Prometheus.

### Enabling the Prometheus endpoint

You can enable the Prometheus endpoint using either the {% data variables.enterprise.management_console %} or the command line interface.

#### Using the Management Console

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}

1. In the monitoring settings, select **Enable OpenTelemetry**.
1. Optionally, adjust the **Metrics retention** and **Metrics scrape interval** fields to optimize performance.
1. Select **Enable Prometheus-compatible (/metrics) endpoint**.
1. In the **Endpoint password** field, enter a strong password to control access to the endpoint.
1. Optionally, in the **Trusted IPv4/IPv6 addresses or CIDR blocks in a comma-separated list** field, enter the IP addresses or CIDR blocks that are allowed to access the endpoint.

{% data reusables.enterprise_management_console.save-settings %}

#### Using the command line interface

1. SSH into your {% data variables.product.prodname_ghe_server %} instance.

1. Enable the Prometheus endpoint:

   ```shell
   ghe-config observability.metrics.prometheus-endpoint-enabled true
   ghe-config-apply
   ```

1. Set up authentication for the endpoint (strongly recommended):

   ```shell
   ghe-config observability.metrics.prometheus-endpoint-password your-secure-password
   ghe-config-apply
   ```

### Accessing the Prometheus endpoint

The Prometheus endpoint will be available at:

```text
https://[hostname]:8010/metrics
```

Authentication uses:

* **Username**: `ghes-metrics`
* **Password**: The value set in your configuration

### Configuring external tools to scrape metrics

You can configure various external monitoring tools to scrape metrics from the Prometheus endpoint.

#### Prometheus

Add the following job configuration to your Prometheus configuration file:

```yaml
scrape_configs:
  - job_name: 'github-enterprise-server'
    static_configs:
      - targets: ['your-ghes-hostname:8010']
    basic_auth:
      username: 'ghes-metrics'
      password: 'your-secure-password'
    scrape_interval: 30s
    metrics_path: '/metrics'
    scheme: https
    tls_config:
      # Set `true` only when testing with self-signed certificates
      insecure_skip_verify: false
```

#### Other monitoring tools

The Prometheus endpoint is compatible with any monitoring tool that can scrape Prometheus-format metrics, including:

* Grafana (using Prometheus data source)
* Datadog (using Prometheus check)
* New Relic (using Prometheus integration)
* Victoria Metrics
* InfluxDB (using Prometheus input plugin)

### Security considerations for the Prometheus endpoint

Additional security measures can be implemented to protect your metrics endpoint.

#### Password protection

The Prometheus endpoint supports using a password to limit access. You can configure this through either the {% data variables.enterprise.management_console %} or the command line interface.

* **Using the Management Console**:

   In the monitoring settings, use the **Endpoint password** field to enter a strong password to control access to the endpoint.

* **Using the command line interface**:

   ```shell
   ghe-config observability.metrics.prometheus-endpoint-password your-secure-password
   ghe-config-apply
   ```

#### IP allowlisting

The Prometheus endpoint supports IP allowlisting for enhanced security. You can configure this through either the {% data variables.enterprise.management_console %} or the command line interface.

* **Using the Management Console**:

   In the monitoring settings, use the **Trusted IPv4/IPv6 addresses or CIDR blocks in a comma-separated list** field to enter IP addresses or CIDR blocks that should have access to the endpoint.

* **Using the command line interface**:

   ```shell
   ghe-config observability.metrics.prometheus-endpoint-trusted-ips "10.0.0.0/8,192.168.0.0/16"
   ghe-config-apply
   ```

### Testing the endpoint

Check that metrics are being exported:

```shell
# Test the Prometheus endpoint
curl -u ghes-metrics:your-password https://your-ghes-hostname:8010/metrics
```

## Option 2: Using custom OpenTelemetry pipelines

{% data variables.product.prodname_ghe_server %} supports custom OpenTelemetry collector configurations, allowing you to extend the monitoring capabilities by adding custom pipelines, exporters, and processors. This enable you to ship metrics to external monitoring systems while maintaining the default {% data variables.product.prodname_ghe_server %} observability stack.

### Important considerations for custom configurations

* Custom configurations are additive to the default {% data variables.product.prodname_ghe_server %} OpenTelemetry configuration
* **Reserved paths**: The paths `/ghes` and `/internal` are reserved for {% data variables.product.prodname_ghe_server %} internal use and must not be used in custom configuration files
* `otlp/ghes` and `prometheus/ghes` receivers are the built-in sources of {% data variables.product.prodname_ghe_server %} metrics that you can use in your custom pipelines
* Test your configuration thoroughly in a non-production environment before applying to production
* Monitor resource usage after enabling custom configurations, as additional pipelines may increase CPU and memory consumption

### Enabling custom OpenTelemetry configuration

You can enable custom OpenTelemetry configuration using either the {% data variables.enterprise.management_console %} or the command line interface.

#### Using the Management Console

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}

1. In the monitoring settings, first select **Enable OpenTelemetry**.
1. Select **Enable custom OpenTelemetry Collector pipelines**.
1. Use the **Browse...** button to upload your custom OpenTelemetry collector config file (*.yml), see [Example configurations for popular monitoring systems](#example-configurations-for-popular-monitoring-systems).

{% data reusables.enterprise_management_console.save-settings %}

#### Using the command line

1. SSH into your {% data variables.product.prodname_ghe_server %} instance and run the following command.

   ```shell
   ghe-config observability.metrics.custom-config-enabled true
   ```

1. Create your custom OpenTelemetry configuration file at `/data/user/common/otelcol.yaml`:

   ```shell
   sudo nano /data/user/common/otelcol.yaml
   ```

1. Add your custom configuration (see [Example configurations for popular monitoring systems](#example-configurations-for-popular-monitoring-systems)).

1. Apply the configuration:

   ```shell
   ghe-config-apply
   ```

### Example configurations for popular monitoring systems

The following examples show how to configure custom OpenTelemetry pipelines for popular monitoring platforms. For information on other exporters or to create your own, see the repository of [OpenTelemetry Collectors](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter).

#### Grafana Cloud

```yaml
---
exporters:
  prometheusremotewrite:
    endpoint: "https://prometheus-us-central1.grafana.net/api/prom/push"
    headers:
      Authorization: "Bearer your-grafana-cloud-token"

service:
  pipelines:
    metrics:
      receivers: [otlp/ghes, prometheus/ghes]
      processors: [batch/ghes]
      exporters: [prometheusremotewrite]
```

#### Datadog

```yaml
---
exporters:
  datadog:
    api:
      site: datadoghq.com
      key: your-datadog-api-key
    host_metadata:
      enabled: true

service:
  pipelines:
    metrics:
      receivers: [otlp/ghes, prometheus/ghes]
      processors: [batch/ghes]
      exporters: [datadog]
```

#### New Relic

```yaml
---
exporters:
  otlp:
    endpoint: "https://otlp.nr-data.net:4317"
    headers:
      api-key: "your-new-relic-license-key"

service:
  pipelines:
    metrics:
      receivers: [otlp/ghes, prometheus/ghes]
      processors: [batch/ghes]
      exporters: [otlp]
```

#### Generic OTLP endpoint

```yaml
---
exporters:
  otlp:
    endpoint: "https://your-otel-collector:4317"
    headers:
      api-key: "your-api-key"
    tls:
      insecure: false

service:
  pipelines:
    metrics:
      receivers: [otlp/ghes, prometheus/ghes]
      processors: [batch/ghes]
      exporters: [otlp]
```

## Network and security considerations

Configure your network and security settings based on your chosen monitoring approach.

### TLS and certificates

For secure connections to external monitoring systems:

* Use valid TLS certificates when possible
* Configure appropriate `tls_config` settings in your monitoring system
* Consider using mutual TLS (mTLS) for enhanced security

## Next steps

* To configure OpenTelemetry settings, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/configuring-opentelemetry-for-your-instance).
* To learn more about available metrics, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/about-opentelemetry-metrics).
