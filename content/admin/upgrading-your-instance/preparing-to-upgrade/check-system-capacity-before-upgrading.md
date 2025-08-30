---
title: Check system capacity before upgrading
intro: 'Before upgrading {% data variables.product.prodname_ghe_server %}, you should perform these capacity checks and take the recommended steps.'
shortTitle: Check capacity before upgrade
versions:
  ghes: '*'
contentType: how-tos
topics:
  - Enterprise
  - Upgrades
---

Upgrading to newer versions of {% data variables.product.prodname_ghe_server %} typically increases resource consumption. Each feature release adds new functionality, some enabled by default, others opt-in, which requires more processing power. Customer usage patterns also affect demand; for example, enterprises with tens of thousands of organizations may see higher resource usage.

Resource increases most often appear as higher CPU utilization, more I/O operations per second (IOPS), greater memory use, or larger Aqueduct queue backlogs. To prepare for these changes, check your system’s available capacity and apply any remediation recommendations before upgrading. Run these checks during your busiest times of day and week to get the most accurate results.

## Resource requirements

Before upgrading your instance, it's crucial to verify that your system meets the necessary resource requirements:

1. [CPU usage below 70%](#cpu-usage-below-70)
1. [Memory usage below 70%](#memory-usage-below-70)
1. [Disk not saturated](#disk-not-saturated)
1. [Unicorn queue under 200–300](#unicorn-queue-under-200300)
1. [Aqueduct backlog under 1–2 hours](#aqueduct-backlog-under-12-hours)

### CPU usage below 70%

1. **Check CPU utilization.**
   In the {% data variables.enterprise.management_console %}, go to the monitor page (`https://HOSTNAME.com:8443/setup/monitor`) and view the `CPU` graph.

   * If utilization is **regularly below 70%**, continue to [Memory usage](#memory-usage-below-70).
   * If utilization is **regularly above 70%**, the system does not meet the criteria to upgrade.

1. **Compare utilization with CPU load average.**
   The comparison helps identify possible disk saturation.

   {% ifversion ghes > 3.15 %}
   * Go to **Operational Health view** and check the `Load` graph.
   * In the matrix, find the value where the `shortterm` row intersects with the `avg` column.
   * Calculate load average percentage:

     ```text
     (short-term avg ÷ number of vCPUs) × 100
     ```

   * In the same view, check the `CPU` graph. In the matrix, find the value where the `idle` row intersects with the `avg` column. Subtract this value from 100 to get utilization.
   {% endif %}

   {% ifversion ghes < 3.16 %}
   * On the `Load` graph, click **short-term** to show only the short-term line. Find the peak load value.
   * On the `CPU` graph, click **idle** to show only the idle line. Note the idle value at the same timestamp.
   * Calculate utilization:

     ```text
     100 – idle
     ```

   * Calculate load average percentage:

     ```text
     (peak load value ÷ number of vCPUs) × 100
     ```

   {% endif %}

1. **Interpret the results.**

   If the CPU load average percentage is more than 50% higher than utilization, this likely indicates resource contention. Do not proceed with the upgrade until you have investigated possible disk saturation (see [Disk not saturated](#disk-not-saturated)).

### Memory usage below 70%

1. **Check memory usage.**
    In the {% data variables.enterprise.management_console %}, go to the monitor page (`https://HOSTNAME.com:8443/setup/monitor`) and view the `Memory` graph.

1. **Interpret the results.**

   * If memory usage is **regularly below 70%**, continue to [Disk not saturated](#disk-not-saturated).
   * If memory usage is **regularly above 70%**, the system does not meet the criteria to upgrade.

### Disk not saturated

1. **Check provider specifications.**
   If your cloud or hardware provider offers disk utilization metrics, use them to confirm whether the disk is saturated.

   * If metrics are not available, request the disk specifications from your provider, including maximum throughput and maximum IOPS.
   * Compare these limits with your observed disk usage. If usage is approaching the maximum values, the disk is saturated.

1. **Check disk graphs in the {% data variables.enterprise.management_console %}.**
   Go to the monitor page (`https://HOSTNAME.com:8443/setup/monitor`).

   * View the `Disk Operations` and `Disk Traffic` graphs.
   * Compare Y-axis values with your provider’s specifications (not the maximum scale shown on the graph).
   * Review both data and root disks.

   {% ifversion ghes < 3.16 %}
   These graphs are available in the default dashboards on the monitor page.
   {% endif %}
   {% ifversion ghes > 3.15 %}
   These graphs are available in the "System & Application Insights" view.
   {% endif %}

1. **Interpret the results.**
   If disk usage is approaching provider-defined maximums, the disk is saturated. In this case, the system does not meet the criteria to upgrade.

### Unicorn queue under 200–300

1. **Check the queued requests graph.**
   In the {% data variables.enterprise.management_console %}, go to the monitor page (`https://HOSTNAME.com:8443/setup/monitor`) and view the `Queued Requests` graph.

   {% ifversion ghes < 3.16 %}
   This graph is available in the default dashboards on the monitor page.
   {% endif %}
   {% ifversion ghes > 3.15 %}
   This graph is available in the "System & Application Insights" view.
   {% endif %}

1. **Interpret the results.**

   * If queued requests are **consistently below 200**, continue to [Aqueduct backlog under 1–2 hours](#aqueduct-backlog-under-12-hours).
   * If queued requests are **regularly at or above 200–300**, the system does not meet the criteria to upgrade.

1. **Optional: Check unicorn worker utilization.**
   From the administrative shell, run:

   ```shell
   ps -ef | grep unicorn | grep -v gitauth | grep -v ".rb" | grep -v init | grep git
    ```

   Look at the last column of the output. If all processes show `> 90% utilization`, more unicorn workers are required.

### Aqueduct backlog under 1–2 hours

1. **Check the Aqueduct queue depth.**
   In the {% data variables.enterprise.management_console %}, go to the monitor page (`https://HOSTNAME.com:8443/setup/monitor`) and view the `Aqueduct queue depth` graph.

   {% ifversion ghes < 3.16 %}
   This graph appears in the default dashboards on the monitor page.
   {% endif %}
   {% ifversion ghes > 3.15 %}
   This graph is available in the "System & Application Insights" view.
   {% endif %}

1. **Interpret the results.**

   * If the backlog **lasts less than 1–2 hours**, you meet this requirement.
   * If the backlog **regularly lasts longer than 1–2 hours**, the system does not meet the criteria to upgrade.

1. **Monitor the `index_high` queue.**
   Large deployments may experience significant increases in `index_high` queue depth, which can worsen backlogs. Pay special attention to this queue when monitoring.

If **all criteria** (CPU, memory, disk, unicorn queue, Aqueduct backlog) are met, you can proceed with upgrading to your target feature version. After upgrading, expect resource consumption to increase further.

If **any criteria are not met**, resolve the underlying issues before attempting to upgrade.

## Upgrading hardware and fine-tune workers

If your system did not meet one or more of the resource requirements, you will need to increase capacity before upgrading. The following sections describe how to add hardware resources and adjust worker configuration to resolve common bottlenecks.

1. [CPU above 70%](#cpu-above-70)
1. [Memory above 70%](#memory-above-70)
1. [Disk saturated](#disk-saturated)
1. [Unicorn queue above 200–300](#unicorn-queue-above-200300)
1. [Aqueduct backlog above 1–2 hours](#aqueduct-backlog-above-12-hours)

### CPU above 70%

If CPU utilization is regularly above 70%:

* **Increase CPU resources.**
   Add at least 20% more vCPUs.
* **Account for new workers.**
   Allocate 1 vCPU per worker. For example, if you add 5 unicorn workers and 10 Resque workers, increase vCPUs by at least 15.

### Memory above 70%

If memory usage is regularly above 70%:

* **Increase memory.**
   Add additional RAM to reduce average usage below 70%.
* **Account for new workers.**
   Allocate 1 GB of memory per worker. For example, if you add 5 unicorn workers and 10 Resque workers, increase memory by at least 15 GB.

### Disk saturated

If the disk saturation check indicates saturation, upgrade to disks with higher throughput and maximum IOPS.

### Unicorn queue above 200–300

If unicorn requests are consistently queued above 200–300, you may need to add more unicorn workers. Follow these steps to determine the total target number of workers and update your configuration.

#### 1. Estimate additional workers

Run the following command during peak hours to view utilization per worker:

```shell
ps -ef | grep unicorn | grep -v gitauth | grep -v ".rb" | grep -v init | grep git
```

Example output:

```shell
git      3048972 3045762  0 Aug01 ?        00:07:47 unicorn 3-16-nightly.ghe-test.com[6e6ad46] worker[00]: 20491 reqs,  10.8 req/s,   13ms avg,   85.2% util
git      3048979 3045762  0 Aug01 ?        00:07:53 unicorn 3-16-nightly.ghe-test.com[6e6ad46] worker[01]: 20951 reqs,  12.5 req/s,   13ms avg,   80.3% util
git      3048985 3045762  0 Aug01 ?        00:08:04 unicorn 3-16-nightly.ghe-test.com[6e6ad46] worker[02]: 21502 reqs,  10.5 req/s,   15ms avg,   76.5% util
git      3048992 3045762  0 Aug01 ?        00:07:45 unicorn 3-16-nightly.ghe-test.com[6e6ad46] worker[03]: 20249 reqs,  14.2 req/s,   15ms avg,   86.9% util
```

The average requests/second is 12 req/s.

From this output, calculate the average requests per second (req/s).

* In the example above: 12 req/s.
* Target is to reduce queued requests to ≤100.
* Formula:

  ```bash
  (Queued requests – 100) ÷ avg req/s
  ```

* Example: (280 – 100) ÷ 12 = 15 additional workers needed.

  >[!TIP] If you want to confirm your findings, you can reach out to us by visiting {% data variables.contact.contact_ent_support %}, uploading a bundle, and asking for the total target number of unicorn workers.

#### 2. Check current configuration

Make sure the total number of workers (unicorn + Resque) does not exceed vCPUs. Allocate at least 1 vCPU per worker.

Check current numbers:

* Unicorn workers

  ```shell
  ps -ef | grep unicorn | grep -v gitauth | grep -v ".rb" | grep -v init | grep git | wc -l
  ```

  Add your calculated number of new workers to this value to get the total target.

* Resque workers

  ```shell
  ps -ef | grep aqueduct-1.1.0 | grep -v "grep aqueduct-1.1.0" | wc -l
  ```

#### 3. Adjust configuration

If the sum of unicorn + Resque workers exceeds vCPUs, add more vCPUs before continuing.

Update the number of unicorn workers:

```shell
ghe-config app.github.github-workers <NUM-WORKERS>
ghe-config-apply
```

Replace <NUM-WORKERS> with the total target number of unicorn workers.

### Aqueduct backlog above 1–2 hours

If Aqueduct jobs are regularly backlogged for more than 1–2 hours, add resqued-low workers to reduce the risk of queue backups. This issue often worsens after upgrading.

#### 1. Add resqued-low workers

* Increase the number of workers by **5–10**.
 Be mindful of CPU capacity—each worker requires at least **1 vCPU**.

```shell
ghe-config app.github.resqued-low-workers <NUM-WORKERS>
ghe-config-apply
```

Replace <NUM-WORKERS> with the new total number of resqued-low workers.

#### 2. Validate total worker count

Ensure the combined number of unicorn + Resque workers does not exceed the total number of vCPUs. See [Unicorn queue above 200–300](#unicorn-queue-above-200300) for instructions on checking current worker configuration.
