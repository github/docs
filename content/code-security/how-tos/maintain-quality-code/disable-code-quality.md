---
title: Disabling {% data variables.product.prodname_code_quality %}
shortTitle: Disable Code Quality
intro:  Stop {% data variables.product.prodname_code_quality_short %} scans and avoid charges before the feature becomes generally available.
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.code-quality-repo-enable %}'
contentType: how-tos
category:
  - Improve code quality
---

{% data reusables.code-quality.code-quality-preview-note %}

<!-- expires 2026-07-20 -->
<!-- on July 20, 2026, remove this article and add a redirect to it to code-security/how-tos/maintain-quality-code/enable-code-quality.md. In that article, also mention how to disable the feature and explain why users may want to do this (to avoid charges) -->

When {% data variables.product.prodname_code_quality_short %} becomes generally available on July 20, 2026, usage will incur charges. If you want to avoid charges, you can disable {% data variables.product.prodname_code_quality_short %} before that date. **Disabling {% data variables.product.prodname_code_quality_short %} stops all future scans and billing.**

## Disabling {% data variables.product.prodname_code_quality_short %} for your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the sidebar, under "Security", click **{% data variables.code-quality.code_quality_ui_settings %}** to display the "{% data variables.code-quality.code_quality_ui %}" page.
1. Click **Disable**.
1. Click **Save changes**.

This stops all future {% data variables.product.prodname_code_quality_short %} scans and associated billing for the repository.
