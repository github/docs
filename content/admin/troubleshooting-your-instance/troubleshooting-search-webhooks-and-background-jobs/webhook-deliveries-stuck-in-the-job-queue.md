---
title: Webhook deliveries stuck in the job queue
intro: 'If {% data variables.location.product_location %} stops sending webhooks and jobs build up in the internal job queue, the webhook delivery service may have lost its connection to the queue. You can confirm the problem, restore deliveries, and prevent it from happening again.'
versions:
  ghes: '*'
shortTitle: Webhook deliveries stuck
contentType: how-tos
category:
  - Troubleshoot your instance
---

## Symptoms

You may see any of the following.

* Pushes and other events that should trigger webhooks do not produce any delivery attempts. For more information, see [AUTOTITLE](/webhooks/testing-and-troubleshooting-webhooks/viewing-webhook-deliveries).
* In the {% data variables.enterprise.management_console %} monitor dashboard, the `Aqueduct queue depth` graph shows `hookshot-production.hookshot` jobs building up. For more information, see [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-the-monitor-dashboards).
* The system logs contain `hookshot-go` errors that say `Failed to receive job from queue`, with `connection refused` on `aqueduct-lite.sock`.

## Causes

`hookshot-go` is the service that sends webhooks. It gets each delivery as a job from `aqueduct-lite`, the internal job queue.

On older patch releases, `hookshot-go` connects to `aqueduct-lite` over a UNIX socket served by `haproxy-cluster-proxy`, the instance's internal proxy. If that connection is refused, `hookshot-go` cannot receive jobs, so no webhooks are sent and the jobs wait in the queue.

Restarting `hookshot-go` or `aqueduct-lite`, or running a configuration apply, may not restore the connection on its own.

Newer patch releases connect over TCP by default instead, which has proven more reliable. See [Resolving the problem](#resolving-the-problem) for the releases that include this change.

## Confirming the problem

1. SSH into the administrative shell. For more information, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
1. Search the system logs for the error.

   ```shell
   rg -z 'hookshot-go.*Failed to receive job from queue' /var/log/syslog*
   ```

   If you are affected, you will see entries like this.

   ```text
   Dec 20 17:28:04 github-example-com-primary hookshot-go[2598]: Timestamp=2024-12-20T17:28:04.923986779Z SeverityText=ERROR Body="Failed to receive job from queue" host.name=github-example-com-primary exception.message="receive failed: twirp error internal: failed to do request: Post \"http://unix/twirp/aqueduct.api.v1.JobQueueService/Receive\": dial unix /go/src/app/sockets/aqueduct-lite.sock: connect: connection refused" exception.type=*errors.withStack gh.hookshot.queue=hookshot-redeliveries
   ```

1. If you are running a patch release older than those listed in [Resolving the problem](#resolving-the-problem), check whether the socket accepts connections.

   ```shell
   echo "GET /" | sudo socat - UNIX-CONNECT:/data/hookshot/shared/sockets/aqueduct-lite.sock
   ```

   If the connection is refused, you are affected.

   ```text
   2025/03/20 23:21:51 socat[4164899] E connect(5, AF=1 "/data/hookshot/shared/sockets/aqueduct-lite.sock", 50): Connection refused
   ```

   If you see an `HTTP/1.1 400 Bad request` response instead, the socket is up and accepting connections.

## Resolving the problem

> [!WARNING]
> Every fix in this article interrupts service on {% data variables.location.product_location %}. Restarting the internal proxy causes a brief interruption. Switching to TCP, rebooting, and upgrading disrupt services for longer. Plan a maintenance window before you start.

The permanent fix is to upgrade to a patch release where `hookshot-go` connects to `aqueduct-lite` over TCP by default.

The interim steps below apply only while `hookshot-go` uses the UNIX socket, and the socket check in [Confirming the problem](#confirming-the-problem) reports `Connection refused`. If you are on a patch release that connects over TCP by default, or you have already switched to TCP, do not run them. Contact {% data variables.contact.github_support %} instead. See [Contacting {% data variables.contact.github_support %}](#contacting-github-support).

Until you can upgrade, work through the following in order, and stop when webhooks are delivered again.

1. [Restart the internal proxy](#restarting-the-internal-proxy). This works on every release.
1. If your patch release supports TCP but does not use it by default, [switch to TCP](#switching-to-tcp-on-earlier-patch-releases). If webhooks are still not delivered after you switch, contact {% data variables.contact.github_support %} rather than rebooting.
1. If you cannot switch to TCP and the problem continues, [reboot the instance](#rebooting-the-instance).

### Upgrading to a patch release with TCP by default

TCP is the default from the following patch releases onward. Upgrade to the latest patch release for your feature release, which includes the change.

| Feature release | First patch release with TCP by default |
| :- | :- |
| 3.19 | 3.19.8 |
| 3.20 | 3.20.4 |
| 3.21 | 3.21.5 |
| 3.22 and later | All releases |

No configuration change is needed after you upgrade. For more information, see [AUTOTITLE](/admin/upgrading-your-instance/preparing-to-upgrade/overview-of-the-upgrade-process) and [AUTOTITLE](/admin/upgrading-your-instance/performing-an-upgrade/upgrading-with-a-hotpatch).

### Restarting the internal proxy

Restarting `haproxy-cluster-proxy` recreates the socket. It causes a brief service interruption.

1. SSH into the administrative shell. For more information, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
1. Stop and remove the proxy job, then start it again.

   ```shell
   nomad job stop --purge haproxy-cluster-proxy
   sudo nomad job run /etc/nomad-jobs/haproxy/haproxy-cluster-proxy.hcl
   ```

1. Check the socket again. You should see an `HTTP/1.1 400 Bad request` response.

   ```shell
   echo "GET /" | sudo socat - UNIX-CONNECT:/data/hookshot/shared/sockets/aqueduct-lite.sock
   ```

1. Confirm that `hookshot-production.hookshot` jobs in the `Aqueduct queue depth` graph start to fall, and that new events produce webhook deliveries.

### Switching to TCP on earlier patch releases

Every supported feature release has a setting that switches `hookshot-go` to TCP. Use it if you are running one of the following patch releases, where the setting exists but is not on by default.

* 3.19.0 to 3.19.7
* 3.20.0 to 3.20.3
* 3.21.0 to 3.21.4

> [!WARNING]
> Running `ghe-config-apply` disrupts services.

1. Enable maintenance mode. For more information, see [AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).
1. SSH into the administrative shell, then restart the internal proxy.

   ```shell
   nomad job stop --purge haproxy-cluster-proxy
   sudo nomad job run /etc/nomad-jobs/haproxy/haproxy-cluster-proxy.hcl
   ```

1. Turn on the TCP connection, then apply the configuration.

   ```shell
   ghe-config app.hookshot-go.aqueduct-tcp-connection-enabled true
   ghe-config-apply
   ```

   For more information, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-config).

1. Check that `aqueduct-lite` accepts connections over TCP. You should see an `HTTP/1.1 400 Bad request` response.

   ```shell
   echo "GET /" | sudo socat - TCP:localhost:9096
   ```

1. Disable maintenance mode.
1. Confirm that `hookshot-production.hookshot` jobs in the `Aqueduct queue depth` graph start to fall, and that new events produce webhook deliveries.

If you run into an unexpected problem with TCP, switch back to the UNIX socket.

1. Enable maintenance mode.
1. Turn off the TCP connection, then apply the configuration.

   ```shell
   ghe-config app.hookshot-go.aqueduct-tcp-connection-enabled false
   ghe-config-apply
   ```

1. Check the socket. You should see an `HTTP/1.1 400 Bad request` response.

   ```shell
   echo "GET /" | sudo socat - UNIX-CONNECT:/data/hookshot/shared/sockets/aqueduct-lite.sock
   ```

1. Disable maintenance mode.

### Rebooting the instance

If you cannot switch to TCP and webhooks are still not delivered, reboot the instance. A reboot restores the connection, but the problem can return until you upgrade.

1. Schedule a maintenance window with your users.
1. Enable maintenance mode, then wait for active processes to complete. For more information, see [AUTOTITLE](/admin/administering-your-instance/configuring-maintenance-mode/enabling-and-scheduling-maintenance-mode).
1. Reboot the instance.

   ```shell
   sudo reboot
   ```

1. When the instance is back, SSH into the administrative shell and check the socket again. You should see an `HTTP/1.1 400 Bad request` response.

   ```shell
   echo "GET /" | sudo socat - UNIX-CONNECT:/data/hookshot/shared/sockets/aqueduct-lite.sock
   ```

1. Disable maintenance mode.
1. Confirm that `hookshot-production.hookshot` jobs in the `Aqueduct queue depth` graph start to fall, and that new events produce webhook deliveries.

## Preventing recurrence

Keep {% data variables.location.product_location %} on the latest patch release for its feature release. Patch releases from those listed above onward connect over TCP by default, which avoids this problem. If you cannot upgrade yet, switch to TCP manually.

## Contacting {% data variables.contact.github_support %}

If webhooks are still not delivered after you reboot, if you see these errors after switching to TCP or on a patch release that connects over TCP by default, or if you are unsure about any of these steps, contact {% data variables.contact.github_support %} rather than continuing. For more information, see [AUTOTITLE](/support/contacting-github-support/creating-a-support-ticket).

If you have already opened a ticket, attaching a support bundle helps {% data variables.contact.github_support %} diagnose the problem faster. For more information, see [AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support).

## Further reading

* [AUTOTITLE](/webhooks/testing-and-troubleshooting-webhooks/troubleshooting-webhooks)
* [AUTOTITLE](/admin/monitoring-and-managing-your-instance/monitoring-your-instance/about-system-logs)
