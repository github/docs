---
title: Configuring data encryption for your enterprise
shortTitle: Configuring data encryption
intro: 'For encryption at rest, you can provide your own encryption key to encrypt your data under your encryption policies.'
versions:
  github-ae: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Security
---

{% note %}

**Note:** Configuring encryption at rest with a customer-managed key is currently in beta and subject to change.

{% endnote %}

### About data encryption

To provide a high level of security, {% data variables.product.product_name %} encrypts your data while at rest in the data centers and while your data is in transit between users' machines and the data centers.

For encryption in transit, {% data variables.product.product_name %} uses Transport Layer Security (TLS). For encryption at rest, {% data variables.product.product_name %} provides a default RSA key. 