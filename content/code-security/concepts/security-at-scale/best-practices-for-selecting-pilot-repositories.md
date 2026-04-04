---
title: Best practices for selecting pilot repositories
shortTitle: Select pilot repositories
intro: 'The right pilot repositories demonstrate value quickly and prepare your organization for broader enablement of {% data variables.product.prodname_GH_secret_protection %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: concepts
---

Before enabling {% data variables.product.prodname_GH_secret_protection %} organization-wide, run a pilot to validate the solution with a small set of repositories. A pilot helps you refine your rollout strategy, identify workflow adjustments, and demonstrate security value to stakeholders. This article will help you choose the best repositories for your pilot.

A successful pilot requires strategic repository selection. The repositories you choose determine how quickly you can demonstrate value, gather actionable feedback, and prepare for organization-wide adoption.

## Selection criteria

A successful pilot requires strategic repository selection. The repositories you choose determine how quickly you can demonstrate value, gather actionable feedback, and prepare for organization-wide adoption.

When choosing repositories, consider the following criteria.

### Active development and team engagement

Your pilot needs repositories that generate timely feedback on how {% data variables.product.prodname_secret_protection %} fits into daily development work.

* Select repositories with **regular commits and pull requests**. Active repositories generate feedback quickly and show how {% data variables.product.prodname_secret_protection %} fits into real development workflows.
* Choose **teams** that will engage with the pilot. Responsive maintainers will identify workflow adjustments faster and help refine your rollout strategy.
* **Use repository properties** to systematically identify repositories by team, criticality, or other custom attributes. See [AUTOTITLE](/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization).

### Known secret exposure

{% ifversion secret-risk-assessment %}

Choose repositories flagged in your secret risk assessment. These repositories are ideal pilot candidates because they demonstrate immediate value by showing secrets that need remediation.

{% else %}

Choose repositories you suspect contain secrets based on past incidents or security reviews. These repositories are ideal pilot candidates because they allow you to validate the tool's effectiveness quickly.

{% endif %}

Prioritize repositories with production credentials, infrastructure configurations, or integrations with critical services. These high-value targets demonstrate the security value of {% data variables.product.prodname_secret_protection %}.

### Technical diversity

Your pilot should validate that {% data variables.product.prodname_secret_protection %} works with your programming languages and tools.

* Include repositories using different programming languages and frameworks. This validates {% data variables.product.prodname_secret_protection %} coverage across your codebase.
* Select repositories with CI/CD pipelines to identify potential deployment impacts early. Understanding these interactions prevents surprises during broader rollout.

### Organizational representation

A successful pilot requires buy-in from different parts of your organization.

* Choose repositories from different teams or business units. Diverse feedback reveals patterns that wouldn't emerge from a single team's experience.
* Include at least one repository that leadership cares about. Executive visibility maintains pilot momentum and facilitates future budget discussions.

### Repositories to avoid initially

Not all repositories make good pilot candidates.

* **Low-activity or archived repositories**: You won't get timely workflow feedback.
* **Experimental or personal repositories**: These repositories don't reflect production patterns.
* **Repositories with complex custom tooling**: Unusual workflows may complicate feedback.
* **Mission-critical repositories with zero change tolerance**: It's best to add these repositories _after_ validating the solution.

## Pilot size by organization

Once you've identified repositories that meet these criteria, determine the size of your pilot. The right pilot size balances gathering sufficient feedback with avoiding team overwhelm.

| Organization size | Number of repositories | Recommendations |
|---|---|---|
| **Small** (under 100 developers) | 3-5 repositories | Start with your most critical projects. |
| **Medium** (100-500 developers) | 5-10 repositories | Select repositories across different teams, including a mix of high-activity and moderate-activity repositories. |
| **Large** (500+ developers) | 10-20 repositories | Ensure broad representation across the organization. Consider a phased approach with waves of repository additions. |

## Before enabling your pilot

Take these steps to set your pilot up for success.

* Confirm repository owners agree to participate. Unwilling teams generate negative feedback that doesn't reflect actual product issues.
* Identify champions within each pilot team. Champions answer questions and keep feedback flowing.
* Document baseline metrics like commit frequency and contributor count. These baselines help you measure pilot impact.

## Further reading

* [Identify repositories for secret protection](https://support.github.com/product-guides/github-advanced-security-secret-protection/get-started/identify-repositories-for-secret-protection) in the GitHub Advanced Security product guides

{% ifversion secret-risk-assessment %}

## Next steps

Now that you've selected your pilot repositories, review pricing and configure {% data variables.product.prodname_GH_secret_protection %}. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/protect-your-secrets).

{% endif %}