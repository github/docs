---
title: About clustering
intro: '{% data variables.product.prodname_ghe_server %} clustering allows services that make up {% data variables.product.prodname_ghe_server %} to be scaled out across multiple nodes.'
redirect_from:
  - /enterprise/admin/clustering/overview
  - /enterprise/admin/clustering/about-clustering
  - /enterprise/admin/clustering/clustering-overview/
  - /enterprise/admin/enterprise-management/about-clustering
  - /enterprise/admin/enterprise-management/about-clustering
  - /enterprise/admin/enterprise-management/about-clustering
versions:
  enterprise-server: '*'
---

### Clustering architecture

{% data variables.product.prodname_ghe_server %} is comprised of a set of services. In a cluster, these services run across multiple nodes and requests are load balanced between them. Changes are automatically stored with redundant copies on separate nodes. Most of the services are equal peers with other instances of the same service. The exceptions to this are the `mysql-server` and `redis-server` services. These operate with a single _primary_ node with one or more _replica_ nodes.

Learn more about [services required for clustering](/enterprise/{{ currentVersion }}/admin/enterprise-management/about-cluster-nodes#services-required-for-clustering).

### Is clustering right for my organization?

{% data reusables.enterprise_clustering.clustering-scalability %} However, setting up a redundant and scalable cluster can be complex and requires careful planning. This additional complexity will need to be planned for during installation, disaster recovery scenarios, and upgrades.

{% data variables.product.prodname_ghe_server %} requires low latency between nodes and is not intended for redundancy across geographic locations.

Clustering provides redundancy, but it is not intended to replace a High Availability configuration. For more information, see [High Availability configuration](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability). A primary/secondary failover configuration is far simpler than clustering and will serve the needs of many organizations. For more information, see [Differences between Clustering and High Availability](/enterprise/{{ currentVersion }}/admin/guides/clustering/differences-between-clustering-and-high-availability-ha/).

### How do I get access to clustering?

Clustering is designed for specific scaling situations and is not intended for every organization. If clustering is something you'd like to consider, please contact your dedicated representative or {% data variables.contact.contact_enterprise_sales %}.
