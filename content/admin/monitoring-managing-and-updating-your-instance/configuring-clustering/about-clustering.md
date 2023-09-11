---
title: About clustering
intro: "The cluster topology for {% data variables.product.prodname_ghe_server %} is designed to support tens of thousands of users where other topologies would experience resource exhaustion. In a cluster, the instance's services scale horizontally across multiple nodes."
product: "{% data variables.product.company_short %} determines eligibility for clustering, and must enable the configuration for your instance's license. Clustering requires careful planning and additional administrative overhead."
redirect_from:
  - /enterprise/admin/clustering/overview
  - /enterprise/admin/clustering/about-clustering
  - /enterprise/admin/clustering/clustering-overview
  - /enterprise/admin/enterprise-management/about-clustering
  - /admin/enterprise-management/about-clustering
  - /admin/enterprise-management/configuring-clustering/about-clustering
versions:
  ghes: '*'
type: overview
topics:
  - Clustering
  - Enterprise
---

## About clustering for {% data variables.product.product_name %}

The cluster topology for {% data variables.product.prodname_ghe_server %} provides horizontal scaling for companies with tens of thousands of developers. {% data variables.product.company_short %} recommends clustering if a single primary node would routinely experience resource exhaustion.

In a cluster, the instance provides services and distributes data across multiple virtual machines (VMs) that run the {% data variables.product.product_name %}  software. Each VM is called a node. For more information, see "[AUTOTITLE](/admin/enterprise-management/configuring-clustering/about-cluster-nodes)."

<a name="is-clustering-right-for-my-organization"></a>

## Is clustering right for my environment?

{% data reusables.enterprise_clustering.clustering-scalability %} However, setting up a redundant and scalable cluster requires careful planning. Compared to other topologies like high availability (HA), additional complexity affects installation, configuration, disaster recovery, and upgrades.

{% data variables.product.product_name %} requires low latency between nodes and is not intended for redundancy across geographic locations.

Clustering provides redundancy, but it is not intended to replace a high-availability configuration. Configuration and maintenance of a high-availability configuration is far simpler than clustering and will accommodate most environments. For more information, see [AUTOTITLE](/admin/enterprise-management/configuring-high-availability) and [AUTOTITLE](/admin/enterprise-management/configuring-clustering/differences-between-clustering-and-high-availability-ha).

{% data reusables.package_registry.packages-cluster-support %}

## How do I get access to clustering?

{% data variables.product.company_short %} designed the cluster topology for specific scaling situations. Clustering is not intended for every company or environment. If you're interested in clustering for your environment, contact your dedicated account manager or {% data variables.contact.contact_enterprise_sales %}.
