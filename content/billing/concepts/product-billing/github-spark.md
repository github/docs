---
title: GitHub Spark billing
intro: 'Learn how {% data variables.product.prodname_spark %} is billed for users.'
versions:
  feature: spark
shortTitle: GitHub Spark
redirect_from:
  - /copilot/concepts/copilot-billing/about-billing-for-github-spark
  - /copilot/concepts/copilot-billing/billing-for-spark
contentType: concepts
category:
  - Understand product costs
---

{% data reusables.copilot.spark-business-intro %}

> [!NOTE]
> {% data reusables.spark.preview-note-spark %}

## Billing for {% data variables.product.prodname_spark_short %} app creation

Each prompt to {% data variables.product.prodname_spark_short %} consumes {% data variables.product.prodname_ai_credits_short %} based on token usage and the model used. {% data variables.product.prodname_spark_short %} usage is attributed to a dedicated **{% data variables.product.prodname_spark_short %}** SKU, which allows you to track and set budgets specifically for {% data variables.product.prodname_spark_short %} separately from other {% data variables.product.prodname_copilot_short %} features. See [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

## Managing {% data variables.product.prodname_spark_short %} costs

You now have more granular options for managing {% data variables.product.prodname_spark_short %} costs:

### Budget options

* **Bundled budget**: Combine {% data variables.product.prodname_spark_short %} {% data variables.product.prodname_ai_credits_short %} with other {% data variables.product.prodname_copilot_short %} costs in a single budget for simplified management.
* **Individual product budget**: Set a dedicated budget specifically for {% data variables.product.prodname_spark_short %} for granular cost control.

For detailed information about setting up budgets, see [AUTOTITLE](/billing/tutorials/set-up-budgets).

### Analytics and monitoring

With the dedicated SKU, you can:

* Track {% data variables.product.prodname_spark_short %} {% data variables.product.prodname_ai_credits_short %} consumption separately from other {% data variables.product.prodname_copilot_short %} features in billing analytics
* Set up alerts when {% data variables.product.prodname_spark_short %} usage approaches budget limits
* Generate reports specifically for {% data variables.product.prodname_spark_short %} usage

## Billing and limits for {% data variables.product.prodname_spark_short %} app deployment

You can publish apps created with {% data variables.product.prodname_spark_short %} to a deployment environment.

Deployed apps do not currently incur any charges. However, {% data variables.product.company_short %} currently **limits usage** of deployed sparks based on criteria including number of HTTP requests, data transfer, and storage.

* Limits apply to the billable owner, meaning if you own 10 deployed sparks, all 10 will count towards the limits.
* When any limit is reached, the spark is unpublished for the rest of the billing period.

In the future, a new billing system will allow sparks to continue being deployed once a limit is reached, with additional usage charged to the spark's billable owner. {% data variables.product.company_short %} will publish the limits once they are confirmed following a testing period. This article will be updated when more details are available.

## Further reading

* [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-spark)
* [AUTOTITLE](/copilot/tutorials/building-ai-app-prototypes)
