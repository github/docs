{% ifversion ghes-opentelemetry %}

Collectd metrics are gathered by default and are fully supported in this release. OpenTelemetry metrics are the future foundation for monitoring, available from {% data variables.product.prodname_ghe_server %} 3.18 onward.

> [!NOTE]
> Collectd metrics are expected to be {% data variables.release-phases.closing_down %} and then {% data variables.release-phases.retired %} in a future release of {% data variables.product.prodname_ghe_server %}. We recommend that your long-term monitoring strategy includes a migration to OpenTelemetry metrics. See [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/opentelemetry-metrics/about-opentelemetry-metrics).

{% endif %}
