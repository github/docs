{% ifversion ghes-opentelemetry %}

OpenTelemetry metrics are the foundation for monitoring {% data variables.product.prodname_ghe_server %}, available from version 3.18 onward. This monitoring stack provides enhanced observability and management capabilities compared to the legacy collectd system.

{% ifversion ghes < 3.23 %}

New installations of version 3.19 and later use OpenTelemetry metrics by default. On version 3.18, and on instances upgraded from earlier releases, collectd metrics are still gathered by default and remain supported in this release. Collectd is retired in version 3.23, and upgrading to 3.23 disables it. Migration to OpenTelemetry is recommended before upgrading instances that still use collectd. See [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/migration-guidance).

{% else %}

Collectd is retired in this release and can no longer be run. Upgrading to version 3.23 disables collectd, and OpenTelemetry metrics become the only metrics stack. For information about post-upgrade checks, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/migration-guidance).

{% endif %}

{% endif %}
