---
title: '{% data variables.product.prodname_actions %} failures from a stalled notification task'
intro: 'If {% data variables.product.prodname_actions %} stops working for repositories and organizations that have not used it before, or configuration runs fail while they update {% data variables.product.prodname_actions %}, a background task in one of the {% data variables.product.prodname_actions %} services may have stalled.'
versions:
  ghes: '*'
shortTitle: Stalled notification task
contentType: how-tos
category:
  - Troubleshoot your instance
---

## Symptoms

You may see one or more of the following problems. Other issues can result in the same problems, so use the checks in [Confirming the problem](#confirming-the-problem) to confirm that a stalled notification task is the cause.

* In repositories that have not used {% data variables.product.prodname_actions %} before, such as new repositories, workflows do not run. The repository's {% data variables.product.prodname_actions %} settings page, and the page for adding a self-hosted runner, return a 500 error. Repositories that already use {% data variables.product.prodname_actions %} usually keep working.
* In organizations that have not used {% data variables.product.prodname_actions %} before, the organization's {% data variables.product.prodname_actions %} settings, runners, and runner groups pages return a 500 error. If your enterprise has not used {% data variables.product.prodname_actions %} before, the enterprise runners and runner groups pages can fail in the same way.
* An upgrade or hotpatch, or another configuration run that updates {% data variables.product.prodname_actions %}, pauses for 15 minutes or more, then fails. The configuration log, `/data/user/common/ghe-config.log`, contains `Failed to update the following host process`. This error can also have other causes, especially during an upgrade.
* The system log gets a new message about every second, saying that a `SqlNotificationBackgroundWork` task `is still running past its interval time`. Stalled tasks in job agent processes do not log this message.

`ghe-actions-check` can report that every service is healthy while this problem is happening, so a healthy result does not rule it out.

## Causes

{% data variables.product.prodname_actions %} sets up storage for each repository, user, organization, and enterprise the first time {% data variables.product.prodname_actions %} is used there. This storage holds runner registrations and the other settings that {% data variables.product.prodname_actions %} needs.

The {% data variables.product.prodname_actions %} services run as several processes. Each process runs background tasks that check notification queues in the {% data variables.product.prodname_actions %} databases about once a second, and acknowledge the changes they find. Some operations wait until other processes acknowledge a change.

* Setting up storage for the first time waits for the two processes of the main {% data variables.product.prodname_actions %} service, `actions-api-server` and `actions-job-agent`.
* A configuration run that updates {% data variables.product.prodname_actions %} waits for the job agent processes, whose names end in `-job-agent`.

If a background task in one of these processes stops working, because it hangs or because it stops running, that process stops acknowledging changes, so the operations that wait for it fail. Most other {% data variables.product.prodname_actions %} activity does not depend on the queues, so the problem can go unnoticed for days, until a new repository needs {% data variables.product.prodname_actions %} or a configuration run updates it.

In the cases that {% data variables.product.company_short %} has investigated, the task did not recover by itself. Nothing in {% data variables.product.prodname_actions %} restarts it, and `ghe-actions-check` does not detect the problem. Restarting the {% data variables.product.prodname_actions %} services starts new processes with new background tasks, which fixes it. The reason the task stalls is not known, so the problem can happen again.

## Confirming the problem

Each {% data variables.product.prodname_actions %} process logs a heartbeat about every 5 minutes while its notification tasks are working. When a task stalls in a process whose name ends in `-api-server`, that process also logs a stalled-task message about once a second. Processes whose names end in `-job-agent` never log stalled-task messages, so for those processes, only the heartbeats show the problem.

1. SSH into the administrative shell. In a high availability configuration, connect to the primary. In a cluster, run these commands on each node that runs {% data variables.product.prodname_actions %}. To list those nodes, run `ghe-cluster-nodes --role actions`. For more information, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
1. For each {% data variables.product.prodname_actions %} process, count the heartbeats and the stalled-task messages from the last 15 minutes. If you started or restarted {% data variables.product.prodname_actions %} less than 15 minutes ago, wait until 15 minutes have passed first.

   ```shell
   for p in actions-api-server actions-job-agent mps-api-server mps-job-agent token-api-server token-job-agent artifactcache-api-server artifactcache-job-agent; do
     log=$(sudo journalctl -t "$p" --since '15 min ago' --no-pager)
     hb=$(grep -c 'Deployment Notification Heartbeat' <<< "$log")
     case "$p" in
       *-job-agent) st="n/a" ;;
       *) st=$(grep -c 'SqlNotificationBackgroundWork.*still running past its interval' <<< "$log") ;;
     esac
     echo "$p: $hb heartbeats, $st stalled-task messages"
   done
   ```

   The output looks like this. In this example, the notification task in `actions-api-server` has stalled.

   ```text
   actions-api-server: 0 heartbeats, 900 stalled-task messages
   actions-job-agent: 3 heartbeats, n/a stalled-task messages
   mps-api-server: 3 heartbeats, 0 stalled-task messages
   mps-job-agent: 3 heartbeats, n/a stalled-task messages
   token-api-server: 3 heartbeats, 0 stalled-task messages
   token-job-agent: 2 heartbeats, n/a stalled-task messages
   artifactcache-api-server: 3 heartbeats, 0 stalled-task messages
   artifactcache-job-agent: 3 heartbeats, n/a stalled-task messages
   ```

1. Use this table to read the result for each process.

   | Result for a process | What it means |
   | :- | :- |
   | 2 or more heartbeats, and no more than a few stalled-task messages | The process is working. A single slow check can log a few stalled-task messages. |
   | 0 heartbeats, while other processes show 2 or more | The notification task in this process has stalled. |
   | About 900 or more stalled-task messages, which is about one a second | The notification task in this process has stalled. |
   | 1 heartbeat, or more than a few but fewer than about 900 stalled-task messages | Not clear yet. Wait 15 minutes, then run the commands again. |
   | 0 heartbeats for every process | {% data variables.product.prodname_actions %} is not running on this node. Check that you are connected to the primary, or to a cluster node that runs {% data variables.product.prodname_actions %}. |
   | 0 heartbeats for only the two `artifactcache` processes | This is expected if you have disabled the {% data variables.product.prodname_actions %} cache service. For more information, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-actions-cache-disable). |

1. Check that the stalled processes match your symptoms.

   * The 500 errors happen when `actions-api-server` or `actions-job-agent` has stalled.
   * Configuration runs fail when a process whose name ends in `-job-agent` has stalled.

   If no process has stalled, or the stalled processes do not match your symptoms, a stalled notification task is probably not the cause. See [Contacting {% data variables.contact.github_support %}](#contacting-github-support).

1. Optionally, to find out when the task in a process whose name ends in `-api-server` stalled, view its most recent stalled-task message. Replace PROCESS-NAME with the name of the process.

   ```shell
   sudo journalctl -t PROCESS-NAME --since '15 min ago' --no-pager | grep 'SqlNotificationBackgroundWork.*still running past its interval' | tail -n 1
   ```

   The output looks like this. Each message is one long line, shortened here.

   ```text
   Mar 10 09:15:42 github-example-com-primary actions-api-server[2817]: {"logType": "ProductTrace", "logData": {"PreciseTimeStamp":"2026-03-10 09:15:42.1234","Level":"2", ... "Message":"Background task adcceb44-740e-44e8-a2cf-95c1d38db76c:Microsoft.TeamFoundation.Framework.Server.NotificationProcessor+SqlNotificationBackgroundWork:9442d144-43fd-4fe3-bdca-e460fdee6c01 is still running past its interval time and thus is delaying its next execution.\nThe next execution was supposed to occur 2.10:34:37.0512746 ago at 03/07/2026 22:41:05.", ... }}
   ```

   The date and time after `ago at` are about when the task stalled. They are in UTC, with the date in month/day/year order. The value before them shows how long ago that was, as `DAYS.HOURS:MINUTES:SECONDS`. The days part only appears if it was one day or more ago.

## Resolving the problem

Restart the {% data variables.product.prodname_actions %} services. In a high availability configuration, run every command on the primary. In a cluster, run them on the primary MySQL node, which is typically the node designated as `mysql-master` in the cluster configuration file. For more information, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/configuring-clustering/initializing-the-cluster#about-the-cluster-configuration-file).

If a configuration run is in progress, wait for it to finish or fail before you start. A run that this problem blocks fails after 15 minutes or more.

If you plan to contact {% data variables.contact.github_support %} about this problem, read [Contacting {% data variables.contact.github_support %}](#contacting-github-support) before you restart.

> [!WARNING]
> Stopping the {% data variables.product.prodname_actions %} services makes {% data variables.product.prodname_actions %} unavailable until you start them again. Jobs that are running when you stop the services can fail. If you can, restart the services when few workflows are running. After the restart, re-run any jobs that failed. Self-hosted runners reconnect on their own.

1. SSH into the administrative shell.
1. Check that the {% data variables.product.prodname_actions %} services and their storage are otherwise healthy.

   ```shell
   ghe-actions-check
   ghe-actions-check -s blob
   ```

   When storage is healthy, the last line of the output from the second command is `Blob Storage is healthy!`. If either command reports that a service failed to become healthy, or reports `Storage tests failed!`, do not continue. Contact {% data variables.contact.github_support %} instead. `ghe-actions-start` runs the same storage check, so it would fail too.

1. Stop the {% data variables.product.prodname_actions %} services.

   ```shell
   ghe-actions-stop
   ```

   For each service, the output includes a line that starts with `Attempting to stop`. If the output includes `Failed to stop`, continue to the next step to start the services again, then contact {% data variables.contact.github_support %}.

1. Start the {% data variables.product.prodname_actions %} services.

   ```shell
   ghe-actions-start
   ```

   This can take several minutes. Do not interrupt it. When it finishes, the last line of the output is `Actions was enabled!`. This means that the services are starting, not that they are ready, so check them in the next step. If the command ends with an error instead, {% data variables.product.prodname_actions %} may stay unavailable. Contact {% data variables.contact.github_support %} straight away.

1. Check that the services are healthy. This can take a few minutes.

   ```shell
   ghe-actions-check
   ```

   When every service is healthy, the output looks like this.

   ```text
   MSSQL is healthy!
   Mps database is healthy!
   Mps nomad job is healthy!
   Mps AT health api is healthy!
   Token database is healthy!
   Token nomad job is healthy!
   Token AT health api is healthy!
   Actions database is healthy!
   Actions nomad job is healthy!
   Actions AT health api is healthy!
   Artifactcache database is healthy!
   Artifactcache nomad job is healthy!
   Artifactcache AT health api is healthy!
   ```

   If you have disabled the {% data variables.product.prodname_actions %} cache service, the `Artifactcache` lines are not shown. While the services are starting, the output can also include lines such as `Mps nomad job is not yet healthy (attempt 1 of 20), trying again in 10 seconds...`.

1. Because `ghe-actions-check` cannot detect a stalled task, wait 15 minutes, then run the check in [Confirming the problem](#confirming-the-problem) again. Every process should show 2 or more heartbeats, and no more than a few stalled-task messages. If you have disabled the {% data variables.product.prodname_actions %} cache service, the two `artifactcache` processes show `0`.
1. Open the {% data variables.product.prodname_actions %} settings page of a repository that was affected, and check that it loads. If maintenance mode is enabled, for example because you are upgrading, do this after you disable maintenance mode. The first load can still fail. If it does, wait a minute and reload the page. If the page still returns a 500 error, contact {% data variables.contact.github_support %}. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository).

You do not need to clean up storage that failed to set up. The next time {% data variables.product.prodname_actions %} is used in an affected repository, user, organization, or enterprise, {% data variables.product.prodname_actions %} sets up the storage it needs. Workflows that should have run while the problem was happening might not run on their own. If you need them, trigger them again.

### Running a failed configuration run again

If a configuration run failed with `Failed to update the following host process`, and a process whose name ends in `-job-agent` had stalled, run the configuration run again after you restart the {% data variables.product.prodname_actions %} services. If no job agent process had stalled, do not run it again. Contact {% data variables.contact.github_support %} instead, because something else probably caused the failure.

If the configuration run was part of an upgrade, do not disable maintenance mode yet. In a high availability configuration, stay in maintenance mode until you have upgraded every replica and replication is current. For more information, see [AUTOTITLE](/admin/upgrading-your-instance/performing-an-upgrade/upgrading-with-an-upgrade-package).

In a cluster, do not follow these steps. Contact {% data variables.contact.github_support %} instead.

> [!WARNING]
> Running `ghe-config-apply` disrupts services.

1. If maintenance mode is not already enabled, enable it. For more information, see [AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).
1. Apply the configuration.

   ```shell
   ghe-config-apply
   ```

   If the configuration run fails again, leave maintenance mode enabled and contact {% data variables.contact.github_support %}.

1. When the configuration run succeeds, disable maintenance mode. If you are upgrading a high availability configuration, first upgrade every replica and wait until replication is current.

## Preventing recurrence

{% data variables.product.company_short %} does not know why the task stalls, so there is no known way to prevent it. You can find it before it affects your users.

* Before you upgrade or apply a hotpatch, check for a stalled notification task, as described in [Confirming the problem](#confirming-the-problem). If you find one, restart the {% data variables.product.prodname_actions %} services first. This can stop the stalled task from causing the configuration run to fail.
* If you forward logs to a monitoring system, alert when a {% data variables.product.prodname_actions %} process does not log `Deployment Notification Heartbeat` for more than 15 minutes. Also alert when messages that contain both `SqlNotificationBackgroundWork` and `still running past its interval` keep arriving for more than 15 minutes. For more information, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity-in-your-enterprise/log-forwarding).

## Contacting {% data variables.contact.github_support %}

Other issues can cause the same 500 errors and configuration failures. If the checks do not find a stalled notification task, if a task stalls again after the restart, if `ghe-actions-stop` prints `Failed to stop`, if `ghe-actions-start` or `ghe-actions-check` reports an error, or if you are unsure about any of these steps, contact {% data variables.contact.github_support %} rather than continuing. For more information, see [AUTOTITLE](/support/contacting-github-support/creating-a-support-ticket).

If you have already opened a ticket, attaching a support bundle helps {% data variables.contact.github_support %} diagnose the problem faster. Generate an extended support bundle as soon as you notice the problem, before you restart the {% data variables.product.prodname_actions %} services. Logs from the time when the task stalled are the most useful, and they might be several days old. An extended support bundle includes logs from the past eight days. For more information, see [AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support).

## Further reading

* [AUTOTITLE](/admin/managing-github-actions-for-your-enterprise/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise)
* [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#github-actions)
* [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-system-logs)
