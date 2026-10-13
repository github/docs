---
title: Resolving a blocked host in a Dependabot update job
shortTitle: Resolve a blocked host
intro: 'Diagnose an update job that fails because {% data variables.product.prodname_dependabot %} could not reach a host, and allow the host it needs.'
versions:
  feature: dependabot-egress-allowlist
contentType: how-tos
category:
  - Secure your dependencies
---

Every {% data variables.product.prodname_dependabot %} update job runs behind an HTTP/HTTPS proxy. The proxy checks the host of every outbound request against an **egress allowlist**. It blocks requests to hosts that are not on it.

This reduces the risk that a malicious dependency or build script can send repository contents or registry credentials to an unapproved destination. It does not prevent data from being sent to an allowed or compromised host.

Most jobs are unaffected. The allowlist already covers public registries, mirrors, CDNs, and download hosts for supported ecosystems, as well as {% data variables.product.github %}'s infrastructure. Registries configured and referenced for a job are also allowed automatically.

A registry counts as configured only when you declare it under the top-level `registries` key in your `dependabot.yml` file. Defining a registry solely in an ecosystem-native configuration file, such as `.npmrc`, `nuget.config`, `pip.conf`, or Maven's `settings.xml`, does not allow its host. The package manager reads the registry from that file and tries to reach it, but the proxy blocks the request.

## Identifying a blocked request in job logs

When the proxy blocks a request, it returns `403 Forbidden` to the update job. The failure usually surfaces as a network or authentication error from the package manager. Check the proxy lines in the job log to confirm the cause. For how to open job logs, see [AUTOTITLE](/code-security/how-tos/view-and-interpret-data/view-dependabot-logs).

A blocked request looks like this:

```text
proxy | 2026/09/24 20:58:15 [052] GET https://packages.example.com:443/v2/my-package/tags/list
proxy | 2026/09/24 20:58:15 [052] * egress not allowlisted packages.example.com
proxy | 2026/09/24 20:58:15 [052] 403 https://packages.example.com:443/v2/my-package/tags/list
proxy | 2026/09/24 20:58:15 [052] Remote response: Forbidden
```

Lines from the proxy are prefixed with `proxy |`, and `[052]` is the request number that groups the lines for a single request. The `egress not allowlisted` line names the exact host that failed the check. Use that host to decide what to do next.

## How hosts are allowed

Two independent sets of hosts are allowed for each job.

**Default hosts** include public registries, mirrors, CDNs, and download hosts for supported ecosystems. They also include {% data variables.product.github %} and {% data variables.product.prodname_dependabot %} infrastructure. {% data variables.product.github %} maintains this list in the `dependabot/proxy` repository, and it applies to every job.

**Per-job hosts** come from registries configured for a specific job. Declare a registry under the top-level `registries` key in your `dependabot.yml` file and reference it from an `updates` entry. The registry's host is then allowed for that job without a change to the defaults.

Declare the registry even if it allows anonymous access. It is the declaration in `dependabot.yml`, not the presence of credentials, that makes the host reachable.

This split determines where a blocked host belongs.

* **A public registry or download host** that other users' jobs could legitimately need belongs in the defaults. See [Adding a host to the defaults](#adding-a-host-to-the-defaults).
* **A private or organization-specific registry** belongs in your `dependabot.yml` file, never in the defaults. Configure it under `registries` so it is allowed only for the jobs that need it. See [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries).

## Adding a host to the defaults

If a blocked host is a public registry, mirror, CDN, or download host, you can propose adding it by opening a pull request against [`dependabot/proxy`](https://github.com/dependabot/proxy). An accepted addition applies to every {% data variables.product.prodname_dependabot %} update job, not only to jobs in your organization.

The repository provides an [agent skill](https://github.com/dependabot/proxy/blob/main/.github/skills/add-egress-allowlist-domain/SKILL.md) that walks {% data variables.product.prodname_copilot_short %} through this process, from checking whether the host belongs in the defaults to opening the pull request. Working in the `dependabot/proxy` repository, tell {% data variables.product.prodname_copilot_short %} that a host is blocked, ask it to allowlist a host, or paste the blocked lines from your job log. For example, "`repo.example.org` is blocked" or "please allowlist `foo.bar.com`". Otherwise, follow these steps.

1. **Confirm the host belongs in the defaults.** It must be a public host that other users' jobs could legitimately need, not one that is specific to your organization. Confirm who controls the host and why a supported ecosystem requires access to it. If the host is specific to your organization, configure it in your `dependabot.yml` file instead.
1. **Verify the host from your job logs.** Note the exact host named on the `egress not allowlisted` line. Registries often redirect downloads to a separate storage or CDN host, so check whether more than one host was blocked.
1. **Open a pull request** to add the exact host to the appropriate section of `internal/handlers/egress_allowlist_defaults.yaml`. Include a short note explaining who controls the host and what it serves. Follow the comments in the file to choose the right section and apply its conventions. A maintainer will review the change.

If you are not sure whether a blocked host should be added to the defaults or configured in your `dependabot.yml` file, ask in the `dependabot/proxy` repository.
