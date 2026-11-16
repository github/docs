---
title: About reachability analysis for Dependabot alerts
shortTitle: '{% data variables.product.prodname_dependabot_reachability_caps %}'
intro: '{% data variables.product.prodname_dependabot_reachability_caps %} helps prioritize {% data variables.product.prodname_dependabot_alerts %} by identifying whether your application can reach vulnerable dependency code.'
product: '{% data reusables.gated-features.dependabot-reachability %}'
versions:
  feature: dependabot-reachability
contentType: concepts
category:
  - Secure your dependencies
---

Having a vulnerable dependency does not always mean your application calls the affected function. {% data variables.product.prodname_dependabot_reachability_caps %} adds a verdict to each {% data variables.product.prodname_dependabot %} alert to help you prioritize fixes based on how your code uses the dependency.

> [!NOTE]
> {% data reusables.dependabot.reachability-public-preview %}

## How {% data variables.product.prodname_dependabot_reachability %} works

{% data variables.product.prodname_dependabot_reachability_caps %} analyzes your open {% data variables.product.prodname_dependabot_alerts %} to determine whether your application can call the vulnerable functions. It uses {% data variables.product.prodname_codeql %} static analysis and curated data identifying the affected functions to look for call paths from your code to those functions.

Each analyzed {% data variables.product.prodname_dependabot %} alert receives a **verdict** that helps you decide its priority. Where available, **call-path evidence** shows how your code can reach a vulnerable function, so you can understand why an alert matters to your application.

## Requirements and supported ecosystems

{% data variables.product.prodname_dependabot_reachability_caps %} supports JavaScript repositories that use npm, pnpm, or Yarn, and TypeScript repositories. Your repository must have a lock file, such as `package-lock.json`, `pnpm-lock.yaml`, or `yarn.lock`.

{% data variables.product.prodname_dependabot_alerts %} must be enabled for {% data variables.product.prodname_dependabot_reachability %} to work.

The analysis runs on {% data variables.product.github %}-hosted runners. Self-hosted runners are not supported.

## Understanding reachability verdicts

Use reachability alongside severity, Exploit Prediction Scoring System (EPSS) scores, dependency scope, and dependency relationship to decide which alerts to address first.

| Verdict | Meaning | Recommended response |
| :--- | :--- | :--- |
| Reachable | Analysis found at least one call path from your repository's code to a vulnerable function. | Prioritize remediation and review the call-path evidence. |
| Potentially reachable | Analysis could not rule out a call to a vulnerable function. This uncertainty is not caused by an unsupported ecosystem or a failed scan. In repositories with multiple manifests, calls found only outside a manifest’s directory are considered potentially reachable. | Prioritize remediation alongside reachable alerts. |
| Unreachable | Analysis completed and did not find a call from your application's code to a vulnerable function. | Give the alert a lower priority, but do not dismiss or close it solely because of this verdict. |
| Reachability unavailable | Analysis could not provide a verdict, for example because the alert is for an unsupported ecosystem or the scan failed or timed out. | Triage the alert using the other prioritization signals. |

### Use reachability to prioritize, not close, alerts

{% data variables.product.prodname_dependabot_reachability_caps %} adds information to existing open alerts to help you prioritize remediation. It does not find new vulnerabilities or automatically close or dismiss alerts.

A verdict is a point-in-time assessment. You shouldn't close or dismiss an alert solely based on its reachability verdict; while a function may not be reachable from your code today, code changes or updates to an advisory can change the result of a later scan.

### Reachability is not exploitability

A reachable function is not necessarily exploitable. Reachability shows that a call path exists, not that an attacker can use it to exploit the vulnerability.

Similarly, an "Unreachable" verdict is not a guarantee that a dependency is safe. Continue to review these alerts and keep dependencies up to date.

### Call-path evidence

For reachable alerts, call-path evidence shows how a call from your code can lead to a vulnerable function. Use this evidence to understand where your application uses the affected dependency and plan remediation.

An alert can show up to five sample paths. These samples are not an exhaustive list of every possible call path.

## Understanding when results are updated

Enabling {% data variables.product.prodname_dependabot_reachability %} starts an initial scan of your repository's open alerts. After that, scans run once every 24 hours while the repository has open alerts. Each scan covers all open alerts.

Pushing code changes does not trigger a scan. After you change your code, the verdict will not reflect those changes until a subsequent scan completes.

During {% data variables.release-phases.public_preview %}, you cannot schedule or trigger on-demand scans.

Scan duration depends on repository size and dependencies. Scans can complete in a few minutes, but larger scans take longer. During the {% data variables.release-phases.public_preview %}, scans have a three-hour time limit.

## Billing and usage during the {% data variables.release-phases.public_preview %}

{% data variables.product.prodname_dependabot_reachability_caps %} is **free** during the {% data variables.release-phases.public_preview %}. Its scans do not consume billed {% data variables.product.prodname_actions %} minutes.

## Known limitations

{% data variables.product.prodname_dependabot_reachability_caps %} has the following limitations during the {% data variables.release-phases.public_preview %}:

* **Ecosystem support**: Alerts outside the supported JavaScript and TypeScript ecosystems are not supported.
* **Large repositories and monorepos**: Some repositories can reach the three-hour scan limit or encounter resource limits, leaving results unavailable.

## Using verdicts through the REST API

The {% data variables.product.prodname_dependabot_alerts %} REST API exposes verdicts for {% data variables.product.prodname_dependabot_reachability %}. You can retrieve verdicts through the repository, organization, and enterprise alert endpoints. See [AUTOTITLE](/rest/dependabot/alerts).

## Next steps

To enable {% data variables.product.prodname_dependabot_reachability %} for your repository, see [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-reachability-analysis).
