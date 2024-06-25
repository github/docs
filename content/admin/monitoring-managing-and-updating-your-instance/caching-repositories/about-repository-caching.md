---
title: About repository caching
intro: You can increase the performance of Git read operations for distributed teams and CI farms with repository caching.
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
redirect_from:
  - /admin/enterprise-management/caching-repositories/about-repository-caching
---

If you have teams and CI farms located around the world, you may experience reduced performance on your primary {% data variables.product.prodname_ghe_server %} instance. While active geo-replicas can improve the performance of read requests, this comes at the cost of limiting write throughput. To reduce load on your primary instance and improve write throughput performance, you can configure a repository cache, an asynchronous read-only mirror of repositories located near these geographically-distributed clients.

A repository cache eliminates the need for {% data variables.product.product_name %} to transmit the same Git data over a long-haul network link multiple times to serve multiple clients, by serving your repository data close to CI farms and distributed teams. For instance, if your primary instance is in North America and you also have a large presence in Asia, you will benefit from setting up the repository cache in Asia for use by CI runners there.

The repository cache listens to the primary instance, whether that's a single instance or a geo-replicated set of instances, for changes to Git data. CI farms and other read-heavy consumers clone and fetch from the repository cache instead of the primary instance. Changes are propagated across the network, at periodic intervals, once per cache instance rather than once per client. Git data will typically be visible on the repository cache within several minutes after the data is pushed to the primary instance.  {% ifversion ghes %}The [`cache_sync` webhook](/webhooks-and-events/webhooks/webhook-events-and-payloads#cache_sync) can be used by CI systems to react to data being available in the cache.{% endif %}

{% data variables.product.product_name %} caches both Git and {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) data.

You have fine-grained control over which repositories are allowed to sync to the repository cache. Git data will only be replicated to the locations you specify.

{% data reusables.enterprise.repository-caching-config-summary %} For more information, see "[AUTOTITLE](/admin/enterprise-management/caching-repositories/configuring-a-repository-cache)."

{% data reusables.enterprise_installation.replica-limit %}
