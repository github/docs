---
title: Using Grafana to analyze OpenTelemetry metrics
intro: Monitor the health and performance of your instance using dashboards and metrics provided by the OpenTelemetry metrics stack.
versions:
  feature: ghes-opentelemetry
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
type: how_to
shortTitle: Using Grafana to analyze metrics
contentType: other
---

## Prerequisites

OpenTelemetry metrics must be enabled on the instance. For configuration instructions, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/configuring-opentelemetry-for-your-instance).

## Navigating to the monitor dashboards

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
1. Click the **Monitor** tab.


### Metric labels

The OpenTelemetry stack exporters automatically attach labels to metrics. Common labels are:

* `job` — the name of the exporter that produced the metric
* `instance` — the instance name from which the metric originated

For some exporters (like `node_exporter` or `haproxy_exporter`), open-source documentation may be available by searching for the `job` label value.

Label availability varies by exporter and metric. Some GitHub application-level metrics may provide fewer labels than infrastructure/exporter metrics, and labels are subject to change from version to version.


## Inspecting panel queries

> [!IMPORTANT] Pre-built dashboards can be opened and edited for inspection, but changes cannot be saved. Create a copy of a dashboard to apply and retain any customizations.

To understand which metrics and queries power a given panel, use the graph panel menu *(3 vertical dots)* when viewing a Grafana dashboard:

* **Edit**: Opens the panel editor. This is the most direct way to review and adjust the queries that power the visualization.  
* **Explore**: Opens Grafana Explore with the panel’s queries pre-populated, allowing interactive analysis.  
* **Metrics Drilldown**: Opens a side panel for discovering related metrics and breaking down the metric by label values.

## Exploring metrics in Grafana

Grafana provides multiple ways to discover and analyze the metrics available on your instance.

### Grafana Drilldown

Grafana Drilldown provides a guided workflow to discover metrics by filtering on metric prefixes, labels, and label values. After selecting a metric, Grafana can break down the series by available label values. For example, `haproxy_backend_response_errors_total` can be grouped by proxy/back-end label values.

### Grafana Explore

Grafana Explore enables interactive analysis using PromQL (Prometheus Query Language), including a query builder that can help users discover available metrics and labels.

Tips for working in Grafana Explore:

* Use **Code mode's Metric browser** to discover metrics and labels. Selecting labels and label values can reveal associated metrics, and selecting a metric can reveal associated labels and label values.
* After selecting a metric, switch to **Builder mode** for suggestions to refine the query.
* Access additional operations via the **+ Operations** button.
* Customize legend labels in the **Options** panel using the **Legend** setting, for example `{{<label_name>}}`. By default, Grafana assigns legend labels based on unique label sets.

## Further reading

* [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/advanced-dashboards)
* [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-the-monitor-dashboards#creating-new-dashboards)
* [Get Started with Explore](https://grafana.com/docs/grafana/latest/visualizations/explore/get-started-with-explore/) in the Grafana documentation 
* [Promql - Querying Basics](https://prometheus.io/docs/prometheus/latest/querying/basics/) in the Prometheus documentation
