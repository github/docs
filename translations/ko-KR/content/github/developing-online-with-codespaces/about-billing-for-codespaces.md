---
title: About billing for Codespaces
intro: 'When {% data variables.product.prodname_codespaces %} becomes generally available, you will be billed for storage and compute usage.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
topics:
  - codespaces
---

{% data reusables.codespaces.release-stage %}

{% data reusables.codespaces.about-billing-for-codespaces %}

Compute costs are incurred only when a codespace is active. When you're using a codespace, the codespace is active. After 30 minutes of inactivity, a codespace becomes suspended automatically.

Compute usage is billed per hour, at a rate that depends on your codespace's instance type. During the beta, {% data variables.product.prodname_codespaces %} offers a single, Linux instance type. At general availability, we'll support three Linux instance types.

| Instance Type (Linux)                   | Per-hour rate |
| --------------------------------------- | ------------- |
| Basic (2 cores, 4GB RAM, 32 GB SSD)     | $0.085        |
| Standard (4 cores, 8 GB RAM, 32 GB SSD) | $0.169        |
| Premium (8 cores, 16 GB RAM, 32 GB SSD) | $0.339        |

Compute pricing may vary for additional instance types and operating systems supported in the future.

Each codespace also incurs monthly storage costs until you delete the codespace. Storage costs for all instance types are $0.10/GB-month.

We'll share more information about any compute and storage usage included in each plan at general availability.
