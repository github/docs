---
title: Recommended alert thresholds
intro: 'You can configure an alert to notify you of system resource issues before they affect your {% data variables.product.prodname_ghe_server %} appliance''s performance.'
redirect_from:
  - /enterprise/admin/guides/installation/about-recommended-alert-thresholds
  - /enterprise/admin/installation/about-recommended-alert-thresholds
  - /enterprise/admin/installation/recommended-alert-thresholds
  - /enterprise/admin/enterprise-management/recommended-alert-thresholds
  - /admin/enterprise-management/recommended-alert-thresholds
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
  - Storage
shortTitle: Recommended alert thresholds
---
## Monitoring storage

We recommend that you monitor both the root and user storage devices and configure an alert with values that allow for ample response time when available disk space is low.

| Severity | Threshold |
| -------- | --------- |
| **Warning** | Disk use exceeds 70% of total available |
| **Critical** | Disk use exceeds 85% of total available |

You can adjust these values based on the total amount of storage allocated, historical growth patterns, and expected time to respond. We recommend over-allocating storage resources to allow for growth and prevent the downtime required to allocate additional storage.

## Monitoring CPU and load average usage

Although it is normal for CPU usage to fluctuate based on resource-intense Git operations, we recommend configuring an alert for abnormally high CPU utilization, as prolonged spikes can mean your instance is under-provisioned. We recommend monitoring the fifteen-minute system load average for values nearing or exceeding the number of CPU cores allocated to the virtual machine.

| Severity | Threshold |
| -------- | --------- |
| **Warning** | Fifteen minute load average exceeds 1x CPU cores |
| **Critical** | Fifteen minute load average exceeds 2x CPU cores |

We also recommend that you monitor virtualization "steal" time to ensure that other virtual machines running on the same host system are not using all of the instance's resources.

## Monitoring memory usage

The amount of physical memory allocated to {% data variables.location.product_location %} can have a large impact on overall performance and application responsiveness. The system is designed to make heavy use of the kernel disk cache to speed up Git operations. We recommend that the normal RSS working set fit within 50% of total available RAM at peak usage.

| Severity | Threshold |
| -------- | --------- |
| **Warning**  | Sustained RSS usage exceeds 50% of total available memory |
| **Critical** | Sustained RSS usage exceeds 70% of total available memory |

If memory is exhausted, the kernel OOM killer will attempt to free memory resources by forcibly killing RAM heavy application processes, which could result in a disruption of service. We recommend allocating more memory to the virtual machine than is required in the normal course of operations.
