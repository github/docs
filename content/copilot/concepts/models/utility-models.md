---
title: Utility models
intro: 'Utility models power background {% data variables.product.prodname_copilot_short %} features.'
versions:
  feature: copilot
contentType: concepts
---

Utility models are a small set of models that are automatically enabled for all {% data variables.product.prodname_copilot %} users across every plan. They power background features such as the generation of commit messages or chat session titles, and they apply across {% data variables.product.prodname_copilot_short %} surfaces: in IDEs, on {% data variables.product.github %}, and in {% data variables.copilot.copilot_cli_short %}.

## How do utility models work?

Utility models:

* Are **not** visible in the model picker and cannot be selected by users directly.
* **Cannot** be disabled by organization or enterprise administrators, except by disabling {% data variables.product.prodname_copilot_short %} completely.
* Do **not** consume premium request units or tokens for usage-based billing, and do **not** appear as a billed line item in usage reports.
* **Are** subject to per-user rate limits.

These characteristics ensure that {% data variables.product.prodname_copilot_short %} features work smoothly regardless of your model policies and billing controls.

## List of utility models

Utility models are typically selected for being fast and lightweight. {% data reusables.copilot.utility-models %}
