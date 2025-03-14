---
title: Exporting and scraping Prometheus metrics
shortTitle: Export and scrape Prometheus metrics
intro: "{% data variables.product.prodname_ghe_server %} provides Prometheus-compatible metrics by transforming `collectd` data. These metrics can be scraped from a dedicated endpoint, allowing integration with observability and monitoring tools for performance insights."
versions:
  feature: prometheus-metrics-exporter
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
---

{% data variables.product.prodname_ghe_server %} includes a Prometheus metrics exporter to simplify observability and monitoring. This feature allows metrics to be scraped directly from the appliance, eliminating the need to forward `collectd` metrics to an external `collectd` server for transformation before sending them to a Prometheus system. By supporting Prometheus-compatible metrics natively, the exporter enables seamless integration with external monitoring dashboards and alerting systems.

## Enabling Prometheus metrics exporter and scraping metrics

By default, the Prometheus metrics exporter and scraping are disabled. Enabling the exporter for `collectd` metrics opens the metrics endpoint (also knows as `scrape endpoint`) at `http(s)://HOSTNAME:9103`. Ensure that firewall rules allow traffic on port 9103.

You can enable the Prometheus metrics exporter using the {% data variables.enterprise.management_console %}, the command line interface within the appliance, or the API.

### Enabling using the {% data variables.enterprise.management_console %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. In the monitoring settings, select **Enable prometheus**.
1. In the **Trusted IPv4/IPv6 addresses or CIDR blocks in a comma-separated list** field, type the comma-separated list of ip addresses or CIDR blocks. An example: `10.0.0.1, 192.168.1.0/8`. If this field is left empty, then scraping requests from any source IP will be accepted.
{% data reusables.enterprise_management_console.save-settings %}

### Enabling via the command line interface

To enable the Prometheus metrics exporter, SSH into the {% data variables.product.prodname_ghe_server %} appliance and run the following commands:

```shell
ghe-config app.prometheus.enabled true
# Specify a comma-separated list of trusted IPv4/IPv6 addresses or CIDR blocks.
ghe-config app.prometheus.trusted-ips "10.0.0.1, 192.168.1.0/8"
ghe-config-apply
```

### Enabling using the API

You can enable the Prometheus metrics exporter using the API by sending a `PUT` request to update the configuration settings.

```shell
curl -L -H "Content-Type: application/json" -X PUT -u "api_key:xxxxxxx" https://<hostname>/manage/v1/config/settings -d '{"prometheus": {"enabled": true, "trusted_ips": "10.0.0.1, 192.168.1.0/8"}}'
```

## Verifying the Prometheus metrics exporter is enabled

To verify that the Prometheus metrics exporter is enabled, use `curl` to query the `/metrics` endpoint on port 9103. For more information about the administrative ports, see [AUTOTITLE](/admin/configuring-settings/configuring-network-settings/network-ports#administrative-ports).

```shell
curl localhost:9103/metrics
```

If successful, the response will include metrics with the `collectd_` prefix.

## Configuring your external Prometheus server

To scrape exported metrics from  {% data variables.product.prodname_ghe_server %}, add a scraping configuration to the `prometheus.yaml` file on your external Prometheus server.

```yaml
- job_name: "ghes-prom-agent"
  scrape_interval: 10s
  static_configs:
    - targets: ["http(s)://HOSTNAME:9103/metrics"]
```

## Support for the darkshipped Prometheus metrics exporter

If you have been using the Prometheus metrics exporter since it was darkshipped in {% data variables.product.prodname_ghe_server %} 3.12, it will continue to work after upgrading to 3.16. In this version, you now have the option to specify trusted IPs for scraping requests.

## Sharing feedback

You can share your feedback on the Prometheus metrics exporter and scraping functionality with {% data variables.product.company_short %}. For help with questions or issues, visit {% data variables.contact.contact_ent_support %}.
