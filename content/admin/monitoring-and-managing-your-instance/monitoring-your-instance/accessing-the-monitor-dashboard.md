---
title: Accessing the monitor dashboard
intro: '{% data variables.product.prodname_ghe_server %} includes a web-based monitoring dashboard that displays historical data about your {% data variables.product.prodname_ghe_server %} appliance, such as CPU and storage usage, application and authentication response times, and general system health.'
redirect_from:
  - /enterprise/admin/installation/accessing-the-monitor-dashboard
  - /enterprise/admin/enterprise-management/accessing-the-monitor-dashboard
  - /admin/enterprise-management/accessing-the-monitor-dashboard
  - /admin/enterprise-management/monitoring-your-appliance/accessing-the-monitor-dashboard
  - /admin/monitoring-managing-and-updating-your-instance/monitoring-your-appliance/accessing-the-monitor-dashboard
  - /admin/monitoring-managing-and-updating-your-instance/monitoring-your-instance/accessing-the-monitor-dashboard
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
shortTitle: Access the monitor dashboard
---
## Accessing the monitor dashboard

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. In the top navigation bar, click **Monitor**.

   ![Screenshot of the header of the {% data variables.enterprise.management_console %}. A tab, labeled "Monitor", is highlighted with an orange outline.](/assets/images/enterprise/management-console/monitor-dash-link.png)

1. In HA and cluster environments you can switch between nodes using the dropdown and clicking on a different hostname.

## Using the monitor dashboard

The page visualizes metrics which can be useful for troubleshooting performance issues and better understanding how your {% data variables.product.prodname_ghe_server %} appliance is being used. The data behind the graphs is gathered by the `collectd` service and sampled every 10 seconds.

Within the pre-built dashboard you can find various sections grouping graphs of different types of system resources.

Building your own dashboard and alerts requires the data to be forwarded to an external instance, by enabling `collectd` forwarding. For more information, see "[AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/configuring-collectd-for-your-instance)."

## About the metrics on the monitor dashboard

### System health

The system health graphs provide a general overview of services and system resource utilization. The CPU, memory, and load average graphs are useful for identifying trends or times where provisioned resource saturation has occurred. For more information, see "[AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/recommended-alert-thresholds)."

### Processes

The processes graph section looks deeper into the major individual services which make up the {% data variables.product.prodname_ghe_server %} appliance. Looking at these services individually can show how usage trends impact system resources over time.

### Authentication

The authentication graphs break down the rates at which users and applications are authenticating to the {% data variables.product.prodname_ghe_server %} appliance. We also track the protocol or service type such as Git or API for the authentications, which is useful in identifying broad user activity trends. The authentication graphs can help you find interesting trends or timeframes to look at when diving deeper into authentication and API request logs.

### LDAP

LDAP graphs will only display data if LDAP authentication is enabled on the {% data variables.product.prodname_ghe_server %} appliance. For more information, see "[AUTOTITLE](/admin/managing-iam/using-ldap-for-enterprise-iam/using-ldap)." These graphs can help you to identify slow responses from your LDAP server, as well as the overall volume of LDAP password based authentications.

### App servers

The application servers section provides insight into the activity of {% data variables.product.prodname_ghe_server %} services which provide data to users and integrations.

### App request/response

The **App request/response** section looks at the rate of requests, how quickly those requests are responded to, and with what status they returned.

### Actions

The graphs break down different metrics about {% data variables.product.prodname_actions %} on {% data variables.location.product_location %} including an overview of {% data variables.product.prodname_actions %} services web requests.

### Background jobs

Number of tasks queued for background processing on the {% data variables.product.prodname_ghe_server %} appliance.

### Network

The network interface graphs can be useful in profiling user activity, and throughput of traffic in and out of the {% data variables.product.prodname_ghe_server %} appliance.

### Storage

{% data variables.product.prodname_ghe_server %} repository performance is very dependent on the underlying storage system. Low latency, local SSD disks provide the highest performance. For more information on the {% data variables.product.prodname_enterprise %} storage architecture, see "[AUTOTITLE](/enterprise-server@3.14/admin/overview/system-overview)."

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
* ghes-manage: Service powering GHES Manage API.
