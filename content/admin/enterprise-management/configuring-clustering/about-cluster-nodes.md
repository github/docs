---
title: About cluster nodes
product: '{% data reusables.gated-features.cluster %}'
intro: 'In a {% data variables.product.product_name %} cluster, nodes are individual virtual machines (VMs) running the {% data variables.product.prodname_ghe_server %} software that comprise the instance. Each node runs a set of services.'
redirect_from:
  - /enterprise/admin/clustering/about-cluster-nodes
  - /enterprise/admin/enterprise-management/about-cluster-nodes
  - /admin/enterprise-management/about-cluster-nodes
versions:
  ghes: '*'
type: overview
topics:
  - Clustering
  - Enterprise
---
## About {% data variables.product.product_name %} cluster nodes

Each node in a {% data variables.product.product_name %} cluster is a virtual machine (VM) that runs the {% data variables.product.product_name %} software. Before you deploy a cluster, you can review hardware requirements, required services, and design recommendations.

{% data reusables.enterprise_clustering.clustering-requires-https %}

## Hardware requirements

Each node must have a root volume, as well as a separate data volume. These are minimum recommendations. More resources may be required depending on your usage, such as user activity and selected integrations.

| Services | Minimum memory required    | Minimum data volume free space Required |
| :- | :- | :- |
| `job-server`,<br/>`memcache-server`,<br/>`web-server` | 14 GB | 1 GB |
| `consul-server`,<br/>`mysql-server`,<br/>`redis-server` | 14 GB | 10 GB |
| `git-server`,<br/>`metrics-server`,<br/>`pages-server`,<br/>`storage-server` | 14 GB | 10 GB |
| `elasticsearch-server` | 14 GB | 10 GB |

## Services required for clustering

{% data variables.product.prodname_ghe_server %} comprises a set of services. In a cluster, these services run across multiple nodes, and the instance balances requests between the nodes. The instance automatically stores redundant copies of data on separate nodes. Most services are equal peers with other instances of the same service. The exceptions to this distribution are the `mysql-server` and `redis-server` services, which operate with a single primary node with one or more replica nodes.

For adequate redundancy, use these minimum nodes operating each service.

{% tip %}

**Note:** Your environment's scaling requirements depend on many factors, including the size and number of repositories, number of users, and overall utilization.

{% endtip %}

| Services | Minimum nodes required |
| :- | :- |
| `job-server`,<br/>`memcache-server`,<br/>`metrics-server`,<br/>`web-server` | 2 |
| `mysql-server`,<br/>`redis-server` | 2 |
| `consul-server` | 3 |
| `git-server`,<br/>`pages-server`,<br/>`storage-server` | 3 |
| `elasticsearch-server` | 3 |

## Cluster design recommendations

Clustering allows services that make up {% data variables.product.prodname_ghe_server %} to be scaled out independently of each other. This flexibility can be used to design and implement a cluster that fits organizations with different scalability requirements. For example, some organizations may need more storage throughput for large or frequent fetches, but web server usage may be relatively low. Another organization may have good performance with fewer storage resources, but need many nodes running `pages-server` or `elasticsearch-server`. Many different combinations are possible. Work with your account representative to determine the best cluster configuration for your specific needs.

- Spread redundant nodes across independent hardware. If you share CPU, memory, or storage devices, you'll reduce performance and introduce single points of failure. Shared networking components can also reduce throughput and increase risk of loss of connectivity in the event of an outage.
- Use fast storage. Storage area networks (SAN) are often optimized for maximum space utilization, availability and fault tolerance, not absolute throughput. {% data variables.product.prodname_ghe_server %} clustering provides redundancy and availability, and will perform best on the fastest storage available. Local SSD storage is recommended.
- Establish tiers of nodes that make sense for your organization. An example configuration:
  - Front-end tier with two nodes and the following services:
    - `web-server`
    - `job-server`
    - `memcache-server`
  - Database tier with three nodes and the following services:
    - `consul-server`
    - `mysql-server`
    - `redis-server`
  - Search tier with three nodes and the following service:
    - `elasticsearch-server`
  - Storage tier with three nodes and the following services:
    - `git-server`
    - `pages-server`
    - `storage-server`
    - `metrics-server`
