---
title: About monitoring your instance
intro: 'You can configure monitoring and alerting so that you''re aware of potential issues before they negatively impact application performance or availability.'
versions:
  ghes: '*'
topics:
  - Enterprise
shortTitle: About monitoring
---

## Metrics

{% ifversion ghes-opentelemetry %}OpenTelemetry metrics were introduced in {% data variables.product.prodname_ghe_server %} 3.18 and are the future foundation for monitoring your {% data variables.product.prodname_ghe_server %} instance. {% endif %}
Collectd metrics {% ifversion ghes-opentelemetry %}will continue to be gathered by default, but we expect collectd metrics to be discontinued in a future release.{% else %}provide monitoring capabilities for your {% data variables.product.prodname_ghe_server %} instance.{% endif %}

{% ifversion ghes-opentelemetry %}For more information about OpenTelemetry metrics, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/about-opentelemetry-metrics).{% endif %}

For more information about Collectd metrics, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/collectd-metrics/about-collectd-metrics).

## Dashboards

The {% data variables.enterprise.management_console %} provides built-in dashboards that visualize metrics to help you troubleshoot performance issues and better understand how your {% data variables.product.prodname_ghe_server %} appliance is being used. The data behind the graphs is gathered by the monitoring services and sampled regularly.

For more information about the monitor dashboards, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-the-monitor-dashboards).

## System Logs

{% data variables.product.prodname_ghe_server %} maintains system logs that can be used to monitor system events and troubleshoot issues. These logs provide detailed information about various system processes and can be valuable for debugging and monitoring purposes.

For more information about system logs, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-system-logs).

## Troubleshooting resource allocation problems

Resource allocation problems can impact the performance and availability of your {% data variables.product.prodname_ghe_server %} instance. Understanding how to identify and resolve these issues is crucial for maintaining optimal system performance.

For more information about troubleshooting resource allocation problems, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/troubleshooting-resource-allocation-problems).

## Generating a Health Check for your enterprise

A health check provides a comprehensive overview of your {% data variables.product.prodname_ghe_server %} instance's current state and can help identify potential issues before they become critical.

For more information about generating a health check, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/generating-a-health-check-for-your-enterprise).
