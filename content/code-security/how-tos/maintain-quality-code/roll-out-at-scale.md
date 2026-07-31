---
title: Rolling out {% data variables.product.prodname_code_quality %} at scale
shortTitle: Roll out at scale
intro: 'Bring {% data variables.product.prodname_code_quality_short %} to every team with confidence by piloting on a small group first, then expanding once your quality thresholds are tuned.'
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.code-quality-repo-enable %}'
audience:
  - driver
contentType: how-tos
category:
  - Improve code quality
---

Turning {% data variables.product.prodname_code_quality_short %} on everywhere at once means every team starts seeing {% data variables.product.prodname_code_quality_short %} findings on their pull requests on the same day, which can be surprising and disruptive. In this tutorial, you'll learn how to roll it out in phases: introduce findings to a small group first, calibrate your thresholds, and then expand. You'll prove the value before it affects your whole organization.

## Prerequisites

* An enterprise owner has allowed {% data variables.product.prodname_code_quality_short %} in your enterprise. See [AUTOTITLE](/code-security/code-quality/how-tos/allow-in-enterprise?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-roll-out-at-scale-enable-cq).
* You're an organization owner, so you can enable {% data variables.product.prodname_code_quality_short %} and configure rulesets at the organization level.

## Plan your pilot

**Start with a small pilot group** rather than your whole organization. A good pilot group is a single engineering team, or a related set of applications, that's active enough to generate meaningful findings and owned by people who can give you feedback on the results.

To target that group, use your organization's **Repository access** setting for {% data variables.product.prodname_code_quality_short %}. You have two good options for a pilot:

* **Selected repositories:** Pick a fixed list of pilot repositories by hand. Best when your pilot group is small and stable.
* **Matching a filter:** Enable every repository that matches criteria you define, such as a custom property like `code-quality-enabled: true`. Best when you want the pilot to grow automatically as teams tag more repositories.

Targeting by a custom property, rather than naming repositories one by one, means you can widen the pilot later just by setting the property on more repositories. If you want to use a custom property:

1. Create the custom property. See [AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization).
1. Enable {% data variables.product.prodname_code_quality_short %} at the organization level, for repositories matching a filter. See [AUTOTITLE](/code-security/concepts/code-quality/enablement-at-scale#organization-level-repository-access).

## Turn on quality rulesets in evaluate mode

**Enable your quality thresholds in evaluate mode first.** In this mode, {% data variables.product.prodname_code_quality_short %} reports which pull requests *would* be blocked, without actually blocking them, so your pilot teams can see the impact before it becomes enforcing.

Set up your thresholds as an organization ruleset scoped to the pilot repositories, and leave it in evaluate mode until you've gathered enough pull request activity to judge the impact, typically **a week or two**. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/set-pr-thresholds).

## Tune your thresholds

**Use the evaluate-mode results to calibrate your thresholds.** Check the **ruleset insights** (the ruleset's history) to see exactly which pull requests would have been blocked and why. If too many pull requests would be blocked, your thresholds may be stricter than your codebase is ready for. If almost none would be blocked, you may want to tighten them. Adjust until the gate reflects the quality bar you actually want to enforce.

## Move to enforce mode

**When the evaluate-mode results look right, switch your ruleset from Evaluate to Active.** The thresholds now start blocking pull requests that don't meet them. Your pilot teams experience the enforced gate, giving you a final check before you widen the rollout.

## Expand across your organization

**Expand the rollout using what you learned from the pilot.** You can widen it in two ways:

* Add repositories to your **Selected repositories** list, or set your custom property on more repositories that match your filter.
* Once you're confident in your thresholds, switch your **Repository access** setting to **All repositories** to apply {% data variables.product.prodname_code_quality_short %} across your whole organization in a single change.

A few things to know about how organization-level enablement behaves, so you can choose the right approach:

* Your **Repository access** choice applies to **both existing and future repositories**, so repositories created later inherit your choice automatically. This is true for **All repositories**, **Matching a filter**, and **No repositories**.
* Turn on **Enforce access** for a guaranteed baseline that repository administrators can't override. Leave it off, or choose **Let repositories decide**, to let teams opt in on their own timeline.

For the full list of access options and how enforcement works, see [AUTOTITLE](/code-security/concepts/code-quality/enablement-at-scale#organization-level-repository-access).

### Scale programmatically

For most rollouts, enabling through the UI is the best starting point: it lets you filter and target repositories directly, which is harder to reproduce in a script.

If you need automation around your rollout, you can fetch {% data variables.product.prodname_code_quality_short %} findings through the REST API, which is useful for reporting on progress as you expand. You can also enable {% data variables.product.prodname_code_quality_short %} on repositories through the REST API, so you can script enablement across your organization instead of enabling each repository in the UI. See [AUTOTITLE](/rest/code-quality/code-quality).

## Set up code coverage

**Add code coverage once your thresholds are tuned.** Code coverage is separate from the quality thresholds you rolled out in the previous steps, so you can turn it on whenever it suits your teams, or skip it entirely if you don't want it.

Enabling {% data variables.product.prodname_code_quality_short %} does not automatically turn on code coverage. Coverage is opt-in per repository, and it starts reporting only after a workflow that uploads coverage data is added to the repository. This means teams can adopt {% data variables.product.prodname_code_quality_short %} first and add coverage later.

To set up coverage for a repository, see [AUTOTITLE](/code-security/how-tos/maintain-quality-code/set-up-code-coverage).

## Next steps

Now that you've rolled out {% data variables.product.prodname_code_quality_short %} across your organization, you can assess the health of your repositories at a glance and decide where to focus. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/explore-code-quality).
