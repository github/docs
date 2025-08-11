---
title: About billing for GitHub Spark
intro: 'Learn how {% data variables.product.prodname_spark %} is billed for users.'
versions:
  feature: spark
topics:
  - Copilot
shortTitle: Billing for Spark
redirect_from:
  - /copilot/concepts/copilot-billing/about-billing-for-github-spark
  - /copilot/concepts/copilot-billing/billing-for-spark
contentType: concepts
---

{% data reusables.copilot.spark-business-intro %}

> [!NOTE]
> {% data reusables.spark.preview-note-spark %}

## Billing for {% data variables.product.prodname_spark_short %} app creation

Each prompt consumes 4 premium requests, which draw from your plan's premium request allowance. If you or an administrator has set a budget for premium requests over your plan's allowance, additional premium requests beyond your plan’s included amount are billed at {% data variables.copilot.additional_premium_requests %} per request, meaning that one prompt to {% data variables.product.prodname_spark_short %} would cost **$0.16**. See [AUTOTITLE](/copilot/concepts/copilot-billing/understanding-and-managing-requests-in-copilot).

## Billing and limits for {% data variables.product.prodname_spark_short %} app deployment

You can publish apps created with {% data variables.product.prodname_spark_short %} to a deployment environment.

Deployed apps do not currently incur any charges. However, {% data variables.product.company_short %} currently **limits usage** of deployed sparks based on criteria including number of HTTP requests, data transfer, and storage.

* Limits apply to the billable owner, meaning if you own 10 deployed sparks, all 10 will count towards the limits.
* When any limit is reached, the spark is unpublished for the rest of the billing period.

In the future, a new billing system will allow sparks to continue being deployed once a limit is reached, with additional usage charged to the spark's billable owner. {% data variables.product.company_short %} will publish the limits once they are confirmed following a testing period. This article will be updated when more details are available.

## Further reading

* [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-spark)
* [AUTOTITLE](/copilot/tutorials/building-ai-app-prototypes)
