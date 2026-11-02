---
title: About monitoring your instance
intro: 'You can configure monitoring and alerting so that you''re aware of potential issues before they negatively impact application performance or availability.'
versions:
  ghes: '*'
shortTitle: About monitoring
category:
  - Monitor and audit your enterprise
---

## Metrics

OpenTelemetry metrics were introduced in {% data variables.product.prodname_ghe_server %} 3.18 and are the foundation for monitoring {% data variables.product.prodname_ghe_server %} instances.

{% ifversion ghes < 3.23 %}

New installations of version 3.19 and later use OpenTelemetry metrics by default. On version 3.18, and on instances upgraded from earlier releases, collectd metrics are still gathered by default. Collectd is retired in version 3.23, and upgrading to 3.23 disables it. For migration guidance for instances that still use collectd, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/migration-guidance).

{% else %}

Collectd is retired in version 3.23 and can no longer be run. Upgrading to 3.23 disables collectd, and OpenTelemetry metrics are the only metrics stack.

{% endif %}

For more information about OpenTelemetry metrics, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/about-opentelemetry-metrics).

For more information about collectd metrics, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/collectd-metrics/about-collectd-metrics).

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
