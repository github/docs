---
title: Recommended alert thresholds
intro: 'You can configure an alert to notify you of system resource issues before they affect your {% data variables.product.prodname_ghe_server %} appliance''s performance.'
redirect_from:
  - /enterprise/admin/guides/installation/about-recommended-alert-thresholds
  - /enterprise/admin/installation/about-recommended-alert-thresholds
  - /enterprise/admin/installation/recommended-alert-thresholds
  - /enterprise/admin/enterprise-management/recommended-alert-thresholds
  - /admin/enterprise-management/recommended-alert-thresholds
  - /admin/enterprise-management/monitoring-your-appliance/recommended-alert-thresholds
  - /admin/monitoring-managing-and-updating-your-instance/monitoring-your-appliance/recommended-alert-thresholds
  - /admin/monitoring-managing-and-updating-your-instance/monitoring-your-instance/recommended-alert-thresholds
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

## About recommended alert thresholds

You can configure external monitoring systems to alert you to storage, CPU, and memory usage that may cause problems with {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/admin/enterprise-management/monitoring-your-appliance/setting-up-external-monitoring)" and "[AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/accessing-the-monitor-dashboard)."

## Monitoring storage

We recommend that you monitor both the root and user storage devices and configure an alert with values that allow for ample response time when available disk space is low.

| Severity | Threshold |
| -------- | --------- |
| **Warning** | Disk use exceeds 60% of total available |
| **Critical** | Disk use exceeds 75% of total available |

You can adjust these values based on the total amount of storage allocated, historical growth patterns, and expected time to respond. We recommend over-allocating storage resources to allow for growth and prevent the downtime required to allocate additional storage.

## Monitoring CPU and load average usage

Although it is normal for CPU usage to fluctuate based on resource-intense Git operations, we recommend configuring an alert for abnormally high CPU utilization, as prolonged spikes can mean your instance is under-provisioned. Additionally, we recommend monitoring CPU utilization during a regular work week when the instance is in a healthy state to establish a baseline that can be used as a reference.

| Severity | Threshold |
| -------- | --------- |
| **Warning** | 20% above the baseline |
| **Critical** | 40% above the baseline |

We also recommend that you monitor virtualization "steal" time to ensure that other virtual machines running on the same host system are not using all of the instance's resources.

## Monitoring memory usage

The amount of physical memory allocated to {% data variables.location.product_location %} can have a large impact on overall performance and application responsiveness. The system is designed to make heavy use of the kernel disk cache to speed up Git operations. We recommend that the amount of physical memory assigned to the processes fit within 50% of total available RAM at peak usage.

| Severity | Threshold |
| -------- | --------- |
| **Warning**  | Sustained memory usage exceeds 50% of total available memory |
| **Critical** | Sustained memory usage exceeds 70% of total available memory |

Nevertheless, for cluster installations, we recommend following a similar approach to CPU monitoring: establish a baseline that defines what is considered normal usage, and set the threshold accordingly. This threshold may also vary between roles.

If memory is exhausted, the kernel OOM killer will attempt to free memory resources by forcibly killing RAM heavy application processes, which could result in a disruption of service. We recommend allocating more memory to the virtual machine than is required in the normal course of operations.
