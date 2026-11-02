---
title: Migrating from collectd to OpenTelemetry
intro: This guide describes the migration of a {% data variables.product.prodname_ghe_server %} instance from collectd to the OpenTelemetry metrics stack.
versions:
  feature: ghes-opentelemetry
shortTitle: Migration guidance
contentType: how-tos
category:
  - Monitor and audit your enterprise
---

{% data variables.product.prodname_ghe_server %} is transitioning from the collectd metrics stack to OpenTelemetry. Collectd is retired in version 3.23, and upgrading to 3.23 disables it.

## Migration timeline

| Version | Default for new installations | Default for instances upgraded from earlier releases | Notes |
| :- | :- | :- | :- |
| 3.18 | Collectd | Collectd | OpenTelemetry is opt-in. |
| 3.19 to 3.22 | OpenTelemetry | Collectd | Migration to OpenTelemetry is possible before upgrading to 3.23. |
| 3.23 and later | OpenTelemetry | OpenTelemetry | Collectd is retired and cannot be used. The upgrade disables it. |

## Preparing to migrate

Before you migrate, complete the following preparations:

* Test the migration on a staging instance before applying it in production.
* Identify the monitoring integrations that depend on collectd metrics, such as external dashboards and alerts.
* If you plan to run both metrics stacks during a transition period, review the caveats in [Running both metrics stacks](#running-both-metrics-stacks).

## Migrating to OpenTelemetry

You can migrate to OpenTelemetry on instances running version 3.19 to 3.22. On version 3.18, OpenTelemetry is opt-in, so you can also enable it there. We recommend migrating before you upgrade to 3.23, so that you can verify your monitoring setup while you can still use collectd.

If you don't migrate, upgrading to version 3.23 or later does it for you: collectd is disabled and cannot be re-enabled, and OpenTelemetry metrics are enabled and become the only metrics stack.

Migration requires enabling OpenTelemetry metrics and disabling collectd. Both settings are available through the {% data variables.enterprise.management_console %} or the command line.

### Using the {% data variables.enterprise.management_console %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}

1. In the monitoring settings, select **Enable OpenTelemetry**.
1. Under **Metrics - Collectd**, select **Disable collectd metrics**.

{% data reusables.enterprise_management_console.save-settings %}

### Using the command line

{% data reusables.enterprise_installation.ssh-into-instance %}
1. To enable OpenTelemetry metrics and disable collectd, run the following commands.

   ```shell
   ghe-config observability.metrics.next-enabled true
   ghe-config observability.metrics.legacy-disabled true
   ```

{% data reusables.enterprise.apply-configuration %}

### Running both metrics stacks

On version 3.18 to 3.22, running the collectd and OpenTelemetry stacks at the same time is possible but **not recommended**. This configuration has the following caveats:

* Some metric names may differ to remain compatible with the collectd format.
* Some OpenTelemetry metrics do not include labels.
* Increased resource utilization to deliver metrics to both solutions.

Collectd is retired in version 3.23, so running both stacks is not possible after upgrading.

## Post-upgrade checks

After the configuration run completes, whether you migrated manually or upgraded to version 3.23 or later:

* Verify that the metrics are visible and collected in the **Monitoring** tab of the {% data variables.enterprise.management_console %}.
* Update monitoring integrations that depend on collectd metrics. For information about connecting external tools, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/setting-up-external-monitoring-with-opentelemetry).
* For information about analyzing metrics, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/using-grafana-to-analyze-opentelemetry-metrics).

### Viewing historical collectd data

Since patches 3.22.3, 3.21.8, 3.20.10, and 3.19.14, the **Monitoring** tab includes collectd dashboards for viewing historical data. These dashboards display collectd metrics recorded up to the time the collectd stack was disabled.
