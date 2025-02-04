---
title: 'About the monitor {% ifversion ghes > 3.15 %}dashboards{% else %}dashboard{% endif %}'
allowTitleToDifferFromFilename: true
intro: 'View historical data for details like CPU and storage usage, application and authentication response times, and general system health.'
redirect_from:
  - /enterprise/admin/installation/accessing-the-monitor-dashboard
  - /enterprise/admin/enterprise-management/accessing-the-monitor-dashboard
  - /admin/enterprise-management/accessing-the-monitor-dashboard
  - /admin/enterprise-management/monitoring-your-appliance/accessing-the-monitor-dashboard
  - /admin/monitoring-managing-and-updating-your-instance/monitoring-your-appliance/accessing-the-monitor-dashboard
  - /admin/monitoring-managing-and-updating-your-instance/monitoring-your-instance/accessing-the-monitor-dashboard
  - /admin/monitoring-and-managing-your-instance/monitoring-your-instance/accessing-the-monitor-dashboard
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
shortTitle: About the monitor {% ifversion ghes > 3.15 %}dashboards{% else %}dashboard{% endif %}
---
## Accessing the monitor {% ifversion ghes > 3.15 %}dashboards{% else %}dashboard{% endif %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. In the top navigation bar, click **Monitor**.

   ![Screenshot of the header of the {% data variables.enterprise.management_console %}. A tab, labeled "Monitor", is highlighted with an orange outline.]({% ifversion ghes > 3.15 %}/assets/images/enterprise/management-console/monitor-dash-link.png{% else %}/assets/images/enterprise/management-console/monitor-dash-link-old.png{% endif %})

1. In HA and cluster environments you can switch between nodes using the dropdown and clicking on a different hostname.
{% ifversion ghes > 3.15 %}

## Using the monitor dashboards

The dashboards visualize metrics which can be useful for troubleshooting performance issues and better understanding how your {% data variables.product.prodname_ghe_server %} appliance is being used. The data behind the graphs is gathered by the `collectd` service and sampled every 10 seconds.

Within the pre-built dashboards you can find various sections grouping graphs of different types of system resources. Use the links on the page to navigate between the dashboards.

![Screenshot of the {% data variables.enterprise.management_console %} header. The dashboard navigation links provided at the top right are highlighted in orange.](/assets/images/enterprise/management-console/monitor-dash-navigation.png)

### "Operational Health" dashboard

This is the default dashboard displayed on the "Monitor" page. It visualizes key metrics that help you to get a quick overview of the health of your {% data variables.product.prodname_ghe_server %} appliance.

### "System & Application Insights" dashboard

On this more detailed dashboard you can get further insights into all aspects of the services that are running on your appliance.

## Creating new dashboards

Building your own dashboard and alerts requires the data to be forwarded to an external instance, by enabling `collectd` forwarding. For more information, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/configuring-collectd-for-your-instance).

{% else %}

## Using the monitor dashboard

The page visualizes metrics which can be useful for troubleshooting performance issues and better understanding how your {% data variables.product.prodname_ghe_server %} appliance is being used. The data behind the graphs is gathered by the `collectd` service and sampled every 10 seconds.

Within the pre-built dashboard you can find various sections grouping graphs of different types of system resources.

Building your own dashboard and alerts requires the data to be forwarded to an external instance, by enabling `collectd` forwarding. For more information, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/configuring-collectd-for-your-instance).
{% endif %}

## About the metrics on the monitor dashboards

### System Health

The system health graphs provide a general overview of services and system resource utilization. The CPU, memory, and load average graphs are useful for identifying trends or times where provisioned resource saturation has occurred. For more information, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/recommended-alert-thresholds).
{% ifversion ghes > 3.15 %}

### Application Health

These graphs include key metrics for the resource utilization of services that power  {% data variables.product.prodname_ghe_server %}. They help visualize ongoing issues while processing requests.

* **Nomad jobs:** The CPU and memory usage of individual services. {% data variables.product.prodname_ghe_server %} utilizes Nomad internally as the workload orchestrator.
* **Response code:** The number of responses by status code returned across {% data variables.product.prodname_ghe_server %} services.
* **Response time:** The speed of web requests at the 90th percentile in milliseconds.
* **Active workers:** The number of web workers busy per {% data variables.product.prodname_ghe_server %} application.
* **Queued requests:** The number of web requests queued per {% data variables.product.prodname_ghe_server %} application. It is expected for this panel to display 'No data' when no requests are queued up.
* **ElasticSearch Cluster Health:** The health status of the ElasticSearch cluster, based on the state of its primary and replica shards. This cluster powers {% data variables.product.prodname_ghe_server %} search.
{% endif %}

### Processes

The processes graph section looks deeper into the major individual services which make up the {% data variables.product.prodname_ghe_server %} appliance. Looking at these services individually can show how usage trends impact system resources over time.

### Authentication

The authentication graphs break down the rates at which users and applications are authenticating to the {% data variables.product.prodname_ghe_server %} appliance. We also track the protocol or service type such as Git or API for the authentications, which is useful in identifying broad user activity trends. The authentication graphs can help you find interesting trends or timeframes to look at when diving deeper into authentication and API request logs.

### LDAP

LDAP graphs will only display data if LDAP authentication is enabled on the {% data variables.product.prodname_ghe_server %} appliance. For more information, see [AUTOTITLE](/admin/managing-iam/using-ldap-for-enterprise-iam/using-ldap). These graphs can help you to identify slow responses from your LDAP server, as well as the overall volume of LDAP password based authentications.

### App servers

The application servers section provides insight into the activity of {% data variables.product.prodname_ghe_server %} services which provide data to users and integrations.

### App request/response

The **App request/response** section looks at the rate of requests, how quickly those requests are responded to, and with what status they returned.

### Actions

The graphs break down different metrics about {% data variables.product.prodname_actions %} on {% data variables.location.product_location %} including an overview of {% data variables.product.prodname_actions %} services web requests {% ifversion ghes > 3.15 %} and MSSQL database transaction log size{% endif %}.

### Background jobs

Number of tasks queued for background processing on the {% data variables.product.prodname_ghe_server %} appliance.

### Network

The network interface graphs can be useful in profiling user activity, and throughput of traffic in and out of the {% data variables.product.prodname_ghe_server %} appliance.

### Storage

{% data variables.product.prodname_ghe_server %} repository performance is very dependent on the underlying storage system. Low latency, local SSD disks provide the highest performance. For more information on the {% data variables.product.prodname_enterprise %} storage architecture, see [AUTOTITLE](/enterprise-server@3.14/admin/overview/system-overview).

### Appliance-specific system services

System services graphs contain data related to the major databases on {% data variables.product.prodname_ghe_server %}. These are MySQL, and Elasticseach persistent databases, as well as Redis and Memcached which contain ephemeral data.

* Memcached: Provides a layer of in-memory caching for web and API operations. Memcached helps to provide quicker response times for users and integrations interacting with the system.
* MySQL: The primary database in {% data variables.product.prodname_ghe_server %}. User, issue, and other non-git or search related metadata is stored within MySQL.
* Nomad Jobs: {% data variables.product.prodname_ghe_server %} utilizes Nomad internally as the workload orchestrator, where the CPU and memory usage of individual services can be seen.
* Redis: The database mainly contains background job queue, as well as session state information.
* Kafka-Lite: Kafka broker service for job processing.
* Elasticsearch: Powers the built-in search features in {% data variables.product.prodname_ghe_server %}.
* Custom hooks: Graphs related to pre-receive hook execution.
* Git fetch caching: {% data variables.product.prodname_ghe_server %} will attempt to cache intensive operations, such as Git pack-objects, when multiple identical requests arrive in quick succession.
* MinIO: Storage used by some {% data variables.product.prodname_ghe_server %} services.
* Packages: Requests powering {% data variables.product.prodname_registry %}.
* SecretScanning: Services powering {% data variables.product.prodname_secret_scanning_caps %} features.
* CodeScanning: Services powering {% data variables.product.prodname_code_scanning_caps %} features.
* Cluster: Graphs related to {% data variables.product.prodname_ghe_server %} high availability or clustering.
* Babeld: Git proxy.
* Alive: Service powering live updates.
* Ghes-manage: Service powering GHES Manage API.
