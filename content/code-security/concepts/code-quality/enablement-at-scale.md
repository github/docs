---
title: Code Quality enablement across organizations and enterprises
shortTitle: Enablement at scale
allowTitleToDifferFromFilename: true
intro: '{% data variables.product.prodname_code_quality %} can cover one repository or thousands from a single control point, giving every team the same quality baseline and giving you the guardrails to keep it there.'
versions:
  feature: code-quality
contentType: concepts
product: '{% data reusables.gated-features.code-quality-availability %}'
audience:
  - driver
category:
  - Improve code quality
---

## How enablement works across your enterprise

{% data variables.product.prodname_code_quality_short %} is controlled at three levels, so you can decide how much autonomy to give organizations and repositories:

* **Enterprise:** An enterprise owner must first allow {% data variables.product.prodname_code_quality_short %} for the enterprise. Until they do, organization owners cannot enable it.
* **Organization:** Organization owners control which repositories have {% data variables.product.prodname_code_quality_short %} enabled or disabled, by granting access to all repositories, a selected list, or repositories that match a filter. They can also enforce these settings so that repository administrators cannot change them.
* **Repository:** Repository administrators can enable or disable {% data variables.product.prodname_code_quality_short %} for individual repositories, unless organization-level enforcement applies.

When {% data variables.product.prodname_code_quality_short %} is enabled on a repository, {% data variables.product.prodname_codeql %} analysis runs via {% data variables.product.prodname_actions %} and surfaces findings in pull requests and on the default branch. Developers see quality checks and annotations on their pull requests.

## Organization-level repository access

At the organization level, you control {% data variables.product.prodname_code_quality_short %} with a single **Repository access** setting. This setting determines which repositories have {% data variables.product.prodname_code_quality_short %} enabled and which have it disabled: repositories within your selection are enabled, and repositories outside your selection are disabled.

> [!IMPORTANT]
> Changing the **Repository access** setting can both enable **and** disable {% data variables.product.prodname_code_quality_short %} across many repositories at once. For example, if you enable {% data variables.product.prodname_code_quality_short %} for repositories matching a filter, any repository that does not match the filter is disabled. Before your change is applied, a dialog shows the total number of enabled and disabled repositories, along with the billing impact.

### Repository access options

You can apply one of the following options at a time.

| Option | Behavior |
| ------ | -------- |
| **No repositories** | Disables {% data variables.product.prodname_code_quality_short %} for all current and future repositories in the organization. |
| **Let repositories decide** | The organization neither enables nor disables {% data variables.product.prodname_code_quality_short %}. Repository administrators choose whether to enable it for their own repositories. This option cannot be enforced. |
| **All repositories** | Enables {% data variables.product.prodname_code_quality_short %} for all current and future repositories. |
| **Selected repositories** | Enables {% data variables.product.prodname_code_quality_short %} for a specific list of repositories that you choose. Repositories you do not select are disabled, and new repositories are not enabled automatically. Best for pilots or exceptions. |
| **Matching a filter** | Enables {% data variables.product.prodname_code_quality_short %} for repositories that match a filter you define, now and in the future. Repositories that do not match are disabled. See [Filtering repositories](#filtering-repositories). |

### Filtering repositories

When you choose **Matching a filter**, you create a dynamic filter that automatically enables {% data variables.product.prodname_code_quality_short %} for existing and future repositories that match your criteria. This is useful for ongoing governance at scale.

You can filter on any combination of the following criteria:

* **Visibility:** Whether repositories are public, private, or internal. Useful for broad policies, such as enabling {% data variables.product.prodname_code_quality_short %} for all private repositories.
* **Fork status:** Whether repositories are forks. Useful when forks should not consume analysis resources.
* **Custom property:** Whether repositories have a specific custom property value. For example, you could target repositories with a `team:platform` property.

All conditions in a filter are combined with `AND`, so a repository must match every condition to be enabled. You can also exclude repositories that match specific conditions.

### Enforcing access

By default, repository administrators can change {% data variables.product.prodname_code_quality_short %} settings for their own repositories. To prevent this, enable **Enforce access**.

Enforcement locks in both the enabled and disabled states set by your **Repository access** option, so repository administrators cannot override them. This improves consistency across your organization, but reduces flexibility for individual repository administrators.

* Enforcement applies to most **Repository access** options you select, including **No repositories**, which enforces {% data variables.product.prodname_code_quality_short %} as disabled.
* Enforcement is not available with **Let repositories decide**, which intentionally leaves the choice to repository administrators.

## Planning your rollout

Because a single **Repository access** setting change can enable {% data variables.product.prodname_code_quality_short %} across many repositories at once, and each analysis consumes {% data variables.product.prodname_actions %} minutes, it's worth rolling out in phases rather than all at once. As you plan, weigh a few things:

* **Cost and capacity.** Confirm your runners can absorb the additional {% data variables.product.prodname_actions %} load before you enable {% data variables.product.prodname_code_quality_short %} broadly.
* **How much to enforce.** Enforcement gives you consistent coverage and stops repository administrators opting out, but it removes their flexibility. Leaving it off lets teams opt in on their own timeline.
* **When to expand.** Start with a small, representative pilot group, confirm that analysis runs smoothly and developers trust the findings, then widen your selection or filter to cover more repositories.

For a step-by-step rollout procedure, including piloting your quality thresholds in evaluate mode before you enforce them, see [AUTOTITLE](/code-security/how-tos/maintain-quality-code/roll-out-at-scale?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-enable-at-scale-roll-out-plan).
