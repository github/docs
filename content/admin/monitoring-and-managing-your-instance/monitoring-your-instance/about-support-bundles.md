---
title: About support bundles for GitHub Enterprise Server
shortTitle: About support bundles
intro: 'When something goes wrong on your {% data variables.product.prodname_ghe_server %} instance, a support bundle gives {% data variables.contact.github_support %} the diagnostic data they need to help you resolve the issue quickly.'
versions:
  ghes: '*'
contentType: concepts
category:
  - Monitor and audit your enterprise
---

## About support bundles

A support bundle is a compressed archive of diagnostic data from your {% data variables.product.prodname_ghe_server %} instance. You can use support bundles to work with {% data variables.contact.github_support %} on issues and to generate Health Check reports that summarize your instance's configuration, health, and activity.

## When to generate a support bundle

Generate a support bundle in several scenarios:

### Support ticket investigation

{% data variables.contact.github_support %} may request a support bundle when investigating performance problems, service failures, authentication issues, or other operational problems. Open a support ticket first, then generate the bundle and include your ticket number to associate it with your case. For details, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-support-bundle).

### Health Check analysis

You can generate a support bundle to create a Health Check report. Health Checks analyze your support bundle data and report on your instance's health, security, Git operations, and API usage. For more information, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/generating-a-health-check-for-your-enterprise).

## Contents of a support bundle

Support bundles contain several categories of data from your instance. The exact contents depend on your {% data variables.product.prodname_ghe_server %} version and configuration.

### System and instance information

Support bundles include diagnostic data about your instance's settings and environment, such as version information, system configuration, license details, and the output from the `ghe-diagnostics` command. For a complete list of diagnostic information, see [AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-diagnostic-files).

### Log files

Support bundles include log files from your instance's system services, applications, and databases. The amount of log data collected depends on the bundle type. To learn more about available log files, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-system-logs).

### Standard and extended bundles

There are two types of support bundles. A standard bundle is smaller and faster to generate, while an extended bundle provides more comprehensive data for in-depth troubleshooting.

| | Standard bundle | Extended bundle (`-x` flag) |
|---|---|---|
| **Log duration** | 2 days | 8 days |
| **Rotated log files** | Excluded | Included |
| **Core dumps** | Excluded | Included |
| **Disk usage report** | Excluded | Included |
| **Hotpatch logs** | Latest only | All versions |

{% data variables.contact.github_support %} will advise which type of bundle to generate. When in doubt, generate an extended bundle to ensure all diagnostic data is available. You can also specify a custom log duration using the `--period` flag (for example, `--period '4 days'`).

### Service status and metrics

Support bundles include current service health status, process information, performance metrics, and configuration files for key services running on your instance.

### High availability information

If your instance uses high availability or clustering, support bundles include:

* Replication status and lag information
* Cluster node configuration
* Cache replica details

## Data privacy and security

Support bundles are designed to help diagnose issues while protecting sensitive information:

* **Sanitization**: Sensitive data such as passwords, tokens, and private keys are removed or obfuscated before collection.
* **No repository content**: Support bundles don't include the contents of your Git repositories, such as source code, commit data, or file contents.
* **User data**: Support bundles don't include user profile information beyond what appears in system logs.
* **License information**: The bundle includes your organization name and license reference so {% data variables.contact.github_support %} can identify your instance.

When you provide a support bundle to {% data variables.contact.github_support %}, {% data variables.product.company_short %} uses the data only to address your support request. {% data variables.product.company_short %} won't disclose your data to third parties without your explicit consent unless required by law.

## Support bundle size and generation time

Support bundle size and generation time vary based on:

* Instance size and activity level
* Number and size of repositories
* Length of time since last log rotation
* Whether the instance uses clustering or high availability

Typical support bundles range from a few hundred MB to several GB. Generating a bundle can take from a few minutes for smaller instances to over an hour for very large or heavily loaded instances.

Large support bundles may affect instance performance during generation. Consider the following:

* **System load**: Generating a support bundle uses CPU, memory, and disk I/O resources.
* **Timing**: If possible, generate support bundles during off-peak hours.
* **Maintenance mode**: If your instance has severe performance issues, consider enabling maintenance mode before generating a support bundle to ensure it completes successfully. For more information, see [AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).

### Reducing performance impact

The `ghe-support-bundle` command automatically runs at the lowest CPU and I/O priority, so production workloads take precedence. To further reduce resource usage during generation, you can use these flags:

* `--no-async` (`-n`): Runs collections sequentially instead of in parallel, reducing resource contention.
* `--num-jobs 1` (`-l 1`): Limits parallelism to a single collection thread. The default is one third of the available CPU count.

For example, to generate and upload an extended bundle with minimal performance impact:

```shell
ghe-support-bundle -x -u --no-async --num-jobs 1
```

## Relationship to other diagnostic tools

Support bundles work alongside other monitoring and diagnostic features:

### Diagnostics files

The `ghe-diagnostics` command generates a smaller diagnostic file containing a subset of information from a full support bundle. Diagnostic files are useful for quick health checks or when you can't generate a full support bundle. The diagnostics output is also included in every support bundle.

### Monitor dashboards

The Monitor page in the {% data variables.enterprise.management_console %} provides real-time and historical metrics about your instance. For more information, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-the-monitor-dashboards).

## Generating and sharing support bundles

You can generate and share support bundles using the {% data variables.enterprise.management_console %} or the command line. For detailed instructions, see [AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles).

### Considerations for clustering

If you use {% data variables.product.prodname_ghe_server %} clustering, you can generate:

* **Per-node bundles**: Support bundles for individual cluster nodes.
* **Cluster bundles**: A combined bundle from all cluster nodes using `ghe-cluster-support-bundle`.

{% data variables.contact.github_support %} will advise which type of bundle to generate based on the issue you're investigating.

### Failed support bundle generation

The most common cause of failed bundle generation is insufficient free disk space in `/data/user/tmp`. Support bundles are assembled in this directory before compression, so it needs enough room to hold the uncompressed data. Check available space before generating a bundle:

```shell
df -h /data/user/tmp
```

If the generation fails or takes an unusually long time, free up space in `/data/user/tmp` and try again. If issues persist, contact {% data variables.contact.github_support %} for assistance. As an alternative, you can generate a smaller diagnostics file using the `ghe-diagnostics` command.

## Further reading

* [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-system-logs)
* [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-support-bundle)
* [AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support)
