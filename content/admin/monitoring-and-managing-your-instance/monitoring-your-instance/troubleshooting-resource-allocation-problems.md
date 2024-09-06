---
title: Troubleshooting resource allocation problems
intro: Troubleshooting common resource allocation issues that may occur on your {% data variables.product.prodname_ghe_server %} appliance.
redirect_from:
  - /enterprise/admin/installation/troubleshooting-resource-allocation-problems
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
  - Troubleshooting
shortTitle: Troubleshooting resource allocation problems
---

## Troubleshooting common resource allocation problems on your appliance

{% note %}

**Note**: Regularly making repeated requests (polling) to {% data variables.location.product_location %} from continuous integration (CI) systems, build servers, or any other clients (such as Git or API clients) can overwhelm the system. This can lead to a denial of service (DoS) attack, causing significant performance issues and resource saturation.

To avoid these problems, we strongly recommend using webhooks to receive updates. Webhooks allow the system to push updates to you automatically, eliminating the need for constant polling. Additionally, consider using conditional requests and caching strategies to minimize unnecessary requests. Avoid running jobs in large, simultaneous batches (thundering herds) and instead wait for webhook events to trigger actions.

For more information, see "[AUTOTITLE](/get-started/exploring-integrations/about-webhooks)."

{% endnote %}

We recommend using the monitor dashboard to stay informed on your appliance's resource health and make decisions on how to fix high usage issues, such as the ones outlined on this page.

For system-critical issues, and prior to making modifications to your appliance, we highly recommend contacting us by visiting {% data variables.contact.contact_ent_support %} and including your support bundle. For more information, see "[Providing data to {% data variables.product.prodname_enterprise %} Support](/enterprise/{{ currentVersion}}/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-support-bundles)."

## High CPU usage

### Possible Causes

* CPU of your instance is under-provisioned for your workload.
* Upgrading to a new {% data variables.product.prodname_ghe_server %} releases often increases CPU and memory usage due to new features. Additionally, post-upgrade migration or reconciliation background jobs can temporarily degrade performance until they complete.
* Elevated requests against Git or API. Increased requests to Git or API can occur due to various factors, such as excessive repository cloning, CI/CD processes, or unintentional usage by API scripts or new workloads.
* Increased number of [GitHub Actions jobs](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/accessing-the-monitor-dashboard#actions).
* Elevated amount of Git commands executed a large repository.

### Recommendations

* Ensure CPU cores are [provisioned appropriately](/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance/installing-github-enterprise-server-on-aws#minimum-requirements).
* [Set alert thresholds](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/recommended-alert-thresholds).
* After an upgrade, check whether background upgrade jobs have completed, by running `ghe-check-background-upgrade-jobs`.
* Use webhooks instead of pulling.
* Use [API rate-limiting](/admin/configuring-settings/configuring-user-applications-for-your-enterprise/configuring-rate-limits).
* Analyze Git usage by checking [current operations](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-btop) and [Git traffic](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-governor).

## High memory usage

### Possible causes

* Memory of your instance is under-provisioned.
* Elevated requests against Git or API. Increased requests to Git or API can occur due to various factors, such as excessive repository cloning, CI/CD processes, or unintentional usage by API scripts or new workloads.
* Individual services exceeding their expected memory usage and running Out Of Memory (OOM).
* Increased background job processing.

### Recommendations

* Memory of your instance is under-provisioned for your workload, data volume, given usage over time may exceed the [minimum requirements](/admin/installing-your-enterprise-server/setting-up-a-github-enterprise-server-instance/installing-github-enterprise-server-on-aws#minimum-requirements).
* Within the Nomad graphs, identify services with out of memory trends which are often followed by free memory trends after they get restarted. For more information, see "[AUTOTITLE](/enterprise-server@3.14/admin/monitoring-and-managing-your-instance/monitoring-your-instance/accessing-the-monitor-dashboard#appliance-specific-system-services)."
* Check logs for processes going out of memory by running `rg -z 'kernel: Out of memory: Killed process' /var/log/syslog*` (for this, first log in to the administrative shell using SSH - see "[AUTOTITLE](/enterprise-server@3.14/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).")
* Ensure the correct ratio of memory to CPU services is met (at least `6.5:1`).
* Check the amount of tasks queued for background processing - see "[AUTOTITLE](/enterprise-server@3.14/admin/monitoring-and-managing-your-instance/monitoring-your-instance/accessing-the-monitor-dashboard#background-jobs)."

## Low disk space availability

Both storage volumes, the one mounted to the root filesystem path (`/`) and the other to the user filesystem path (`/data/user`) can cause problems to the stability of your instance if low disk space is available.

Keep in mind that the root storage volume is split into two equally-sized partitions. One of the partitions will be mounted as the root filesystem (`/`). The other partition is only mounted during upgrades and rollbacks of upgrades as `/mnt/`upgrade, to facilitate easier rollbacks if necessary. For more information, see "[AUTOTITLE](/admin/overview/system-overview#storage-architecture)."

### Possible Causes

* Service failure causing increased amount of logs
* High disk usage through organic traffic

### Recommendations

* Check disk usage of `/var/log` folder by running (`sudo du -csh /var/log/*`) or manually force a log rotation (`sudo logrotate -f /etc/logrotate.conf`).
* Check the disk for large files that have been deleted but still have open file handles (`ghe-check-disk-usage`).
* Increase disk storage capacity - see "[AUTOTITLE](/enterprise-server@3.14/admin/monitoring-and-managing-your-instance/updating-the-virtual-machine-and-physical-resources/increasing-storage-capacity)."

## Higher than usual response times

### Possible causes

* Elevated requests against Git or API. Increased requests to Git or API can occur due to various factors, such as excessive repository cloning, CI/CD processes, or unintentional usage by API scripts or new workloads.
* Slow database queries.
* Post upgrade ElasticSearch elevated service resource usage.
* Reaching IOPS quotas on disk and/or heavy IO contention.
* Saturated workers.
* Webhook delivery delays.

### Recommendations

* Look for spikes or sustained numbers in the **Disk pending operations: Number of operations queued** graphs.
* Check the **App request/response** panel to see if only certain services are affected.
* After an upgrade, check whether background upgrade jobs have completed, by running `ghe-check-background-upgrade-jobs`.
* Check the database logs for slow queries in `/var/log/github/exceptions.log` (for this, first log in to the administrative shell using SSH - see "[AUTOTITLE](/enterprise-server@3.14/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh)"), for example by checking for Top 10 slow requests by URL: `grep SlowRequest github-logs/exceptions.log | jq '.url' | sort | uniq -c | sort -rn | head`.
* Check the **Queued requests** graph for certain workers and consider adjusting their active worker count.
* Increase the storage disks to ones with higher IOPS/throughput.
* Check the amount of tasks queued for background processing - see "[AUTOTITLE](/enterprise-server@3.14/admin/monitoring-and-managing-your-instance/monitoring-your-instance/accessing-the-monitor-dashboard#background-jobs)."

## Elevated error rates

### Possible Causes

* Elevated requests against Git or API. Increased requests to Git or API can occur due to various factors, such as excessive repository cloning, CI/CD processes, or unintentional usage by API scripts or new workloads.
* Failing `haproxy` service or non-availability of individual services.
* Failed repository network maintenance over time.

### Recommendations

* Check the **App request/response** panel to see if only certain services are affected.
* Check the `haproxy` logs and try to identify if bad actors may be cause.
* Check for failed repository network maintenance jobs (visit `http(s)://[hostname]/stafftools/networks`).
