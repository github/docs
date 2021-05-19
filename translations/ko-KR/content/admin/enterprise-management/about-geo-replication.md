---
title: About geo-replication
intro: 'Geo-replication on {% data variables.product.prodname_ghe_server %} uses multiple active replicas to fulfill requests from geographically distributed data centers.'
redirect_from:
  - /enterprise/admin/installation/about-geo-replication
  - /enterprise/admin/enterprise-management/about-geo-replication
versions:
  enterprise-server: '*'
type: overview
topics:
  - Enterprise
  - High availability
---

Multiple active replicas can provide a shorter distance to the nearest replica. For example, an organization with offices in San Francisco, New York, and London could run the primary appliance in a datacenter near New York and two replicas in datacenters near San Francisco and London. Using geolocation-aware DNS, users can be directed to the closest server available and access repository data faster. Designating the appliance near New York as the primary helps reduce the latency between the hosts, compared to the appliance near San Francisco being the primary which has a higher latency to London.

The active replica proxies requests that it can't process itself to the primary instance. The replicas function as a point of presence terminating all SSL connections. Traffic between hosts is sent through an encrypted VPN connection, similar to a two-node high availability configuration without geo-replication.

Git requests and specific file server requests, such as LFS and file uploads, can be served directly from the replica without loading any data from the primary. Web requests are always routed to the primary, but if the replica is closer to the user the requests are faster due to the closer SSL termination.

Geo DNS, such as [Amazon's Route 53 service](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-geo), is required for geo-replication to work seamlessly. The hostname for the instance should resolve to the replica that is closest to the user's location.

### 제한 사항

Writing requests to the replica requires sending the data to the primary and all replicas. This means that the performance of all writes are limited by the slowest replica, although new geo-replicas can seed the majority of their data from existing co-located geo-replicas, rather than from the primary. Geo-replication will not add capacity to a {% data variables.product.prodname_ghe_server %} instance or solve performance issues related to insufficient CPU or memory resources. If the primary appliance is offline, active replicas will be unable to serve any read or write requests.

{% data reusables.enterprise_installation.replica-limit %}

### Monitoring a geo-replication configuration

{% data reusables.enterprise_installation.monitoring-replicas %}

### 더 읽을거리
- "[Creating geo-replication replicas](/enterprise/{{ currentVersion }}/admin/guides/installation/creating-a-high-availability-replica/#creating-geo-replication-replicas)"
