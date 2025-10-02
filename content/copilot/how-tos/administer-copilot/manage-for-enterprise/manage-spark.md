---
title: Managing GitHub Spark in your enterprise
shortTitle: 'Manage {% data variables.product.prodname_spark_short %}'
intro: 'Enable and manage {% data variables.product.prodname_spark %} for your enterprise.'
permissions: Enterprise owners
product: 'Enterprises with a {% data variables.copilot.copilot_enterprise_short %} plan'
versions:
  feature: spark
allowTitleToDifferFromFilename: true
topics:
  - Copilot
---

> [!NOTE]
> * {% data reusables.spark.preview-note-spark %}
> * {% data reusables.copilot.spark-data-res %}

## About {% data variables.product.prodname_spark_short %}

{% data variables.product.prodname_spark_short %} allows users to build intelligent applications using natural-language prompts. {% data variables.product.prodname_spark_short %} includes advanced controls and built-in design tools for customization. Once published, applications can be shared with teammates or deployed to production.

For details about benefits, development experience, billing, and enterprise considerations, see [AUTOTITLE](/copilot/concepts/spark#enterprise-considerations).

## Prerequisites

To use {% data variables.product.prodname_spark_short %}, your enterprise must be on a {% data variables.copilot.copilot_enterprise_short %} plan.

## Enabling {% data variables.product.prodname_spark_short %} for your {% data variables.product.prodname_copilot_short %} subscribers

By default, {% data variables.product.prodname_spark_short %} is **disabled** for users who receive a {% data variables.copilot.copilot_enterprise_short %} license from an enterprise-owned organization.

You can enable {% data variables.product.prodname_spark_short %} for your members on the {% data variables.product.prodname_copilot_short %} policies page for your enterprise. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise#defining-policies-for-your-enterprise).

* **Enabled**: All users granted a {% data variables.product.prodname_copilot_short %} license by any of your organizations can use {% data variables.product.prodname_spark_short %}. Enable this if your enterprise wants consistent access across all organizations and is ready to roll out {% data variables.product.prodname_spark_short %} broadly.
* **Disabled**: No users granted a {% data variables.product.prodname_copilot_short %} license by your organizations can use {% data variables.product.prodname_spark_short %}. Choose this if {% data variables.product.prodname_spark_short %} isn’t yet approved for use, for example, if your enterprise is still completing policy or security reviews.
* **No policy**: Organization owners in each of your organizations decide whether {% data variables.product.prodname_copilot_short %} licensees can use {% data variables.product.prodname_spark_short %}. Select this if you prefer a phased or opt-in adoption, where individual organizations can trial {% data variables.product.prodname_spark_short %} before a broader rollout.

### Next steps

* If you selected **Enabled**, tell organization owners that these features are enabled for all members.
* If you selected **No policy**, discuss member enablement with organization owners.

{% note %}

Was this article helpful in enabling and managing {% data variables.product.prodname_spark_short %} for your enterprise?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>

{% endnote %}

## Further reading

* [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-spark)
