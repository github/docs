---
title: Interpreting secret risk assessment results
shortTitle: Interpret secret risk assessment
intro: Understand the results from your {% data variables.product.prodname_secret_risk_assessment %} and prioritize leak remediation.
permissions: Organization owners, security managers, and users with the **admin** role
allowTitleToDifferFromFilename: true
versions:
  feature: secret-risk-assessment
topics:
  - Secret Protection
  - Organizations
  - Security
contentType: tutorials
redirect_from:
  - /code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/interpreting-secret-risk-assessment-results
---

## Introduction

In this tutorial, you'll interpret your secret risk assessment results, and learn how to:

* Understand risk metrics on the dashboard
* Identify high-risk secret leaks
* Prioritize secrets for remediation

## Prerequisites

You must generate a {% data variables.product.prodname_secret_risk_assessment %} report and wait for the scan to complete. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/assess-your-secret-risk).

## Step 1: Understand your dashboard metrics

Once your assessment completes, review the key metrics at the top of the dashboard:

* **Total secrets**: Total number of secret leaks found across your organization
* **Public leaks**: Distinct secrets found in **public** repositories
* **Preventable leaks**: Leaks that push protection could have prevented

You can also determine the number of secrets found in your **private repositories** by subtracting the number of public leaks from your total secrets. While remediating these secrets is less immediately important, they still pose risk if someone gains unauthorized access to your repositories, or if a repository is made public.

## Step 2: Understand secret categories

Look at the **Secret categories** section to understand **what types of secrets** were leaked.

* **Provider patterns**: Specific secret formats for known services (AWS, Azure, {% data variables.product.github %} tokens)
* **Generic patterns**: Generic secret formats like private keys, API keys, passwords

Provider patterns are often easier to identify and revoke because you know exactly which service they belong to. Generic patterns may require more investigation.

## Step 3: Identify how many repositories are affected

Check the **Repositories with leaks** metric, which shows how many of your repositories contain secret leaks.

If a **high percentage** of repositories contain leaks, this may indicate:
* A widespread culture issue around secret management
* A need for organization-wide training
* Missing guardrails like push protection, which blocks secrets before they are committed

If only a **few** repositories contain leaks, you can:
* Focus remediation efforts on specific teams
* Use the leak information to determine which repositories are high-risk areas

## Step 4: Review leaked secrets by type

Scroll to the bottom to see the detailed **Secret type** table, which includes:

* **Secret type**: The specific kind of secret
* **Distinct repositories**: How many different repositories contain this type
* **Secrets found**: Total count of this secret type across all repositories

The table sorts by highest count automatically, helping you identify the greatest risks.

If you see **many secrets of the same type** (for example, multiple AWS keys), this indicates:
* Developers may not be using environment variables
* Missing documentation on secret management

## Step 5: Prioritize remediation and related actions

Now that you understand the metrics, prioritize remediation based on risk.

The highest priority secrets are **leaked provider patterns in public repositories**, because they are:

* Accessible to anyone on the internet
* Often easier to identify and revoke, since you know which service they belong to

Next, you can address secrets that present lower risk or require more extensive efforts to remediate. These can be:

* **Generic patterns in public repositories**, which may require investigation to identify the service or system they belong to
* **Private repository leaks**, that represent a lower immediate risk but should still be addressed

Finally, look for the following indicators, which may require additional prevention efforts beyond leak remediation:

* **Many repositories with leaks**: Indicates need for organization-wide training and improved security awareness
* **Repeated secret types**: Suggests specific workflows or teams need targeted intervention
* **Common secret categories**: May point to particular CI/CD processes requiring security improvements

## Next steps

For stronger secret security and additional insights, {% data variables.product.github %} recommends enabling {% data variables.product.prodname_GH_secret_protection %} for all of your repositories. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/protect-your-secrets).
