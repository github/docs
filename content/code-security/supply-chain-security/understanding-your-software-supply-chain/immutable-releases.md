---
title: Immutable releases
intro: 'Learn about immutable releases and how they can help you maintain the integrity of your software supply chain.'
versions:
  feature: immutable-releases-preview
type: overview
topics:
  - Code Security
  - Vulnerabilities
  - Dependencies
---

{% data reusables.releases.immutable-releases-preview-note %}

**Immutable releases** are releases where the assets and associated Git tag cannot be changed after publication. They increase security by blocking:
* Supply chain attacks where attackers inject vulnerabilities or malware into current project releases
* Accidental changes to assets and tags that may break developer workflows

Additionally, creating an immutable release automatically generates a **release attestation**, which is a cryptographically verifiable record of a release containing the release tag, commit SHA, and release assets. Consumers can use this attestation to make sure the releases and artifacts they are using exactly match the published {% data variables.product.github %} releases.

If a release is immutable, you will see "{% octicon "lock" aria-hidden="true" %} Immutable"  below the title on the release page.

## Next steps

To learn how to enable immutable releases for your repository or organization, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/preventing-changes-to-your-releases).

To learn how to ensure a release and local assets have not been changed, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/verifying-the-integrity-of-a-release).
