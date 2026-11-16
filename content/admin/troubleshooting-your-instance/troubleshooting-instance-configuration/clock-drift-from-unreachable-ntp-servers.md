---
title: Clock drift from unreachable NTP servers
intro: "When {% data variables.location.product_location %} cannot reach the time servers it is configured against, its clock drifts away from real time. Sign-in, integrations, and {% data variables.product.prodname_actions %} can then fail for reasons that never mention the clock."
versions:
  ghes: '*'
shortTitle: Clock drift
contentType: how-tos
category:
  - Troubleshoot your instance
---

## Symptoms

The clock is rarely mentioned in what you actually see. The symptoms instead land on whatever depends on two systems agreeing about the time.

* Users cannot sign in, or sessions end sooner than expected.
* {% data variables.product.prodname_github_connect %} fails to connect, or the license page returns a server error.
* {% data variables.product.prodname_actions %} jobs fail to start, or tokens are rejected as invalid.
* `/var/log/github/exceptions.log` contains errors about a token expiry claim being too far in the future, such as `'Expiration time' claim ('exp') is too far in the future`.
* Timestamps in the web interface, in logs, or in commits do not match the time you expect.

A token signed by an instance whose clock is wrong looks invalid to the system receiving it, even though nothing is wrong with the token itself. That is why these failures point at authentication rather than at the time.

## Causes

{% data variables.product.prodname_ghe_server %} keeps its clock accurate by synchronizing with Network Time Protocol (NTP) servers over UDP port 123. It needs to reach at least one of them, continuously.

A configured server stops being reachable for ordinary reasons.

* A firewall or security group blocks outbound UDP port 123, which is easy to miss because the rest of the instance works.
* An internal time server is decommissioned or renamed, and the instance is still pointed at the old address.
* The hostname no longer resolves.
* Only one server is configured, so there is nothing to fall back to when it goes away.

When no configured server can be reached, chrony keeps running the local system clock with no external correction, reporting the fallback stratum of 10 that {% data variables.product.prodname_ghe_server %} configures. This is not the hardware clock, which is a separate device managed outside chrony.

Nothing fails at that moment, and no error is raised. The clock just stops being corrected and drifts, slowly at first, until something that depends on accurate time breaks. The further the drift, the broader the failures.

A hypervisor that also tries to set the virtual machine's clock can produce the same result, by fighting the instance's own synchronization.

## Confirming the problem

1. SSH into the administrative shell. For more information, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/accessing-the-administrative-shell-ssh).
1. List the time sources and their state.

   ```shell
   sudo chronyc sources -v
   ```

   Read the `MS` column on the left of each source. A `?` means chrony is not using that source. On its own that is not proof of a network problem, because the same marker appears for a server that is itself unsynchronized, and for a source that has not yet supplied enough measurements.

   What identifies an unreachable source is the supporting evidence on the same line. In the output below, `Reach` is `0`, meaning none of the recent polls got a reply, and `LastRx` is `-`, meaning no sample has ever arrived. Neither server has ever answered.

   ```text
   MS Name/IP address         Stratum Poll Reach LastRx Last sample
   ===============================================================================
   ^? ntp1.example.com              0  10     0     -     +0ns[   +0ns] +/-    0ns
   ^? ntp2.example.com              0  10     0     -     +0ns[   +0ns] +/-    0ns
   ```

   If a source is marked `*`, chrony has selected it, which rules out the reachability problem. It does not confirm the clock is accurate, because chrony corrects a large offset gradually and the instance can be well off real time while it does. Continue with the remaining checks either way.

1. Check what the instance is actually synchronized to.

   ```shell
   sudo chronyc tracking
   ```

   A reference ID with an empty name in brackets, together with a stratum of `10`, means the instance has given up on its configured servers and is using its own clock.

   ```text
   Reference ID    : 7F7F0101 ()
   Stratum         : 10
   System time     : 0.000000000 seconds fast of NTP time
   ```

   Stratum counts how many steps the instance is from a reference clock, and an instance always reports one more than the server it follows. The value of `10` is specific: it is the fallback {% data variables.product.prodname_ghe_server %} configures for when no source is available, so seeing it alongside an unnamed reference ID is the signal.

   A healthy instance names the server it is following instead, and reports a stratum one above that server's.

   ```text
   Reference ID    : D9723B03 (ntp1.example.com)
   Stratum         : 3
   System time     : 0.000079420 seconds fast of NTP time
   ```

   `System time` is measured against the servers the instance is following, so when it is following its own clock the value is meaningless. It reads as near zero no matter how far the clock has drifted.

1. Measure the drift for yourself by comparing the instance clock against a source you trust.

   ```shell
   date -u
   ```

   Note how far off it is. A large difference confirms the clock has been drifting unchecked.

1. If you want the supporting detail on each source, such as how far it is skewed and how many samples were kept, use the following command.

   ```shell
   sudo chronyc sourcestats -v
   ```

## Resolving the problem

Restore synchronization first, then correct the drift that built up while it was lost. Correcting the drift without fixing reachability only buys you time before it returns.

1. Check which servers the instance is configured against, in the "Time" section of the Management Console. For more information, see [AUTOTITLE](/admin/configuring-settings/configuring-network-settings/configuring-time-synchronization#changing-the-default-ntp-servers).
1. Confirm the instance can reach them. Outbound UDP port 123 must be open to each server, in every firewall and security group between the instance and the server. For more information, see [AUTOTITLE](/admin/configuring-settings/configuring-network-settings/network-ports#administrative-ports).
1. If a server is gone, or you cannot open the path to it, configure servers the instance can reach. Configure at least two, so that one going away does not leave the instance with nothing.
1. Confirm chrony has selected a source again. One of them should now be marked `*`, with a non-zero `Reach`.

   ```shell
   sudo chronyc sources -v
   ```

1. Correct the drift that built up while the instance was unsynchronized. NTP corrects small discrepancies on its own, but a large difference needs the following command. For more information, see [AUTOTITLE](/admin/configuring-settings/configuring-network-settings/configuring-time-synchronization#correcting-a-large-time-drift).

   ```shell
   sudo chronyc -a makestep
   ```

1. Confirm the clock now agrees with a source you trust. This is the check that tells you the drift is actually gone, rather than still being corrected.

   ```shell
   date -u
   ```

1. Retry whatever was failing.

## Preventing recurrence

* Configure at least two time servers, so losing one does not stop synchronization.
* After you change the servers, check that the instance can actually reach them. A configured server is not necessarily a working one, and nothing warns you when it stops answering.
* Keep outbound UDP port 123 open to your time servers when firewall rules change.
* Stop your hypervisor from setting the virtual machine's clock, so it does not compete with the instance's own synchronization. For more information, see the documentation provided by your virtualization provider.
* Check the time source as part of your routine health checks. Drift is harmless until it is not, and catching it while it is small saves you working out which of several unrelated failures came from the clock.

## Contacting {% data variables.contact.github_support %}

If the instance still cannot reach a time server after you have checked the configuration and the network path, or if the original symptoms continue once the clock is accurate, contact {% data variables.contact.github_support %} rather than continuing. For more information, see [AUTOTITLE](/support/contacting-github-support/creating-a-support-ticket).

If you have already opened a ticket, attaching a support bundle helps {% data variables.contact.github_support %} diagnose the problem faster. For more information, see [AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support).

## Further reading

* [AUTOTITLE](/admin/configuring-settings/configuring-network-settings/configuring-dns-nameservers)
* [AUTOTITLE](/admin/configuring-settings/configuring-github-connect/about-github-connect)
* [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities)
