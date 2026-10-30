{% ifversion ghes-opentelemetry %}

Collectd metrics are gathered by default and are fully supported in this release. OpenTelemetry metrics are the future foundation for monitoring, available from {% data variables.product.prodname_ghe_server %} 3.18 onward.

> [!IMPORTANT]
> Collectd metrics are {% data variables.release-phases.retired %} in {% data variables.product.prodname_ghe_server %} 3.23. We recommend migrating to OpenTelemetry metrics before upgrading. See [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/migration-guidance).

{% endif %}
