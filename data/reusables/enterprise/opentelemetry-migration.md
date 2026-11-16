{% ifversion ghes-opentelemetry %}

OpenTelemetry metrics are the foundation for monitoring {% data variables.product.prodname_ghe_server %}, available from version 3.18 onward. This monitoring stack provides enhanced observability and management capabilities compared to the legacy collectd system.

{% ifversion ghes-collectd-available %}

New installations of version 3.19 and later use OpenTelemetry metrics by default. Upgrades from versions earlier than 3.21 to 3.21 or 3.22 also enable OpenTelemetry and disable collectd, but you can re-enable collectd after the upgrade.

Collectd remains supported in this release but is retired in version 3.23, and upgrading to 3.23 disables it. For the migration timeline and steps to migrate instances that still use collectd, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/migration-guidance).

{% else %}

Collectd is retired in this release and can no longer be run. Upgrading to version 3.23 disables collectd, and OpenTelemetry metrics become the only metrics stack. For information about post-upgrade checks, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/migration-guidance).

{% endif %}

{% endif %}
