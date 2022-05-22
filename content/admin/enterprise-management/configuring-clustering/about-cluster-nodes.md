---
title: About cluster nodes
intro: '*Nodes* are {% data variables.product.prodname_ghe_server %} instances that operate in a cluster. Each node runs a set of services that are provided to the cluster, and ultimately to the users.'
redirect_from:
  - /enterprise/admin/clustering/about-cluster-nodes
  - /enterprise/admin/enterprise-management/about-cluster-nodes
  - /admin/enterprise-management/about-cluster-nodes
versions:
  enterprise-server: '*'
type: overview
topics:
  - Clustering
  - Enterprise
---
{% data reusables.enterprise_clustering.clustering-requires-https %}

### Minimum hardware recommendations
Each node must have a root volume, as well as a separate data volume. These are minimum recommendations. More resources may be required depending on your usage, such as user activity and selected integrations.

| Services | Minimum Memory Required    | Minimum Data Volume Free Space Required |
| :-: | :-: | :-: |
| `job-server`,<br/>`memcache-server`,<br/>`web-server` | 14 GB | 1 GB |
| `consul-server`,<br/>`mysql-server`,<br/>`redis-server` | 14 GB | 10 GB |
| `git-server`,<br/>`metrics-server`,<br/>`pages-server`,<br/>`storage-server` | 7 GB | 10 GB |
| `elasticsearch-server` | 14 GB | 10 GB |

### Services required for clustering
For adequate redundancy, use these minimum nodes operating each service.

{% tip %}

**Note:** Your organization's needs for scalability will depend on many factors including the size and number of repositories, number of users, and overall utilization.

{% endtip %}

| Services | Minimum Nodes Required |
| :-: | :-: |
| `job-server`,<br/>`memcache-server`,<br/>`metrics-server`,<br/>`web-server` | 2 |
| `mysql-server`,<br/>`redis-server` | 2 |
| `consul-server` | 3 |
| `git-server`,<br/>`pages-server`,<br/>`storage-server` | 3 |
| `elasticsearch-server` | 3 |

### Cluster design recommendations

Clustering allows services that make up {% data variables.product.prodname_ghe_server %} to be scaled out independently of each other. This flexibility can be used to design and implement a cluster that fits organizations with different scalability requirements. For example, some organizations may need more storage throughput for large or frequent fetches, but web server usage may be relatively low. Another organization may have good performance with fewer storage resources, but need many nodes running `pages-server` or `elasticsearch-server`. Many different combinations are possible. Work with your account representative to determine the best cluster configuration for your specific needs.

- Spread redundant nodes across independent hardware. If you share CPU, memory, or storage devices, you'll reduce performance and introduce single points of failure. Shared networking components can also reduce throughput and increase risk of loss of connectivity in the event of an outage.
- Use fast storage. Storage area networks (SAN) are often optimized for maximum space utilization, availability and fault tolerance, not absolute throughput. {% data variables.product.prodname_ghe_server %} clustering provides redundancy and availability, and will perform best on the fastest storage available. Local SSD storage is recommended.
- Establish tiers of nodes that make sense for your organization. An example configuration:
  - Front-end tier with two nodes and the following services:
    - `web-server`
    - `jobs-server`
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

#### Example cluster diagram
{% note %}

**Note: This is only an example.** Your organization's optimal cluster design will depend on your unique needs. Talk to your dedicated representative or {% data variables.contact.contact_enterprise_sales %} so we can help you determine the best cluster configuration.

{% endnote %}

<img src="/assets/images/enterprise/cluster/cluster-diagram.png" alt="Example Cluster" style="width: 800px;border:0"/>
