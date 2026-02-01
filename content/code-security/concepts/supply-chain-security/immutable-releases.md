---
title: Immutable releases
intro: Learn about immutable releases and how they can help you maintain the integrity of your software supply chain.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Code Security
  - Vulnerabilities
  - Dependencies
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/immutable-releases
contentType: concepts
---

**Immutable releases** are releases where the assets and associated Git tag cannot be changed after publication. The use of this type of release increases security by blocking supply chain attacks. Attackers cannot:
* Inject vulnerabilities or malware into current project releases.
* Make changes to assets and tags that may break developer workflows.

## What immutable releases protect

When you enable immutable releases, the following protections are enforced:

* **Git tags cannot be moved or deleted**: Once an immutable release is published, its associated Git tag is locked to a specific commit and cannot be changed or removed.
* **Release assets cannot be modified or deleted**: All files attached to the release (such as binaries and archives) are protected from modification or deletion.

Additionally, creating an immutable release automatically generates a **release attestation**, which is a cryptographically verifiable record of a release containing the release tag, commit SHA, and release assets. Consumers can use this attestation to make sure the releases and artifacts they are using exactly match the published {% data variables.product.github %} releases.

> [!NOTE]
> Immutable releases include protection against repository resurrection attacks. Even if you delete a repository and create a new one with the same name, you cannot reuse tags that were associated with immutable releases in the original repository.

If a release is immutable, you will see "{% octicon "lock" aria-hidden="true" %} Immutable"  below the title on the release page.

## Best practices for publishing immutable releases

We recommend you use the following workflow for publishing an immutable release.

1. Create the release as a draft.
1. Attach all associated assets to the draft release.
1. Publish the draft release.

This ensures that all assets are in place before the release becomes immutable, preventing the need to work around immutability restrictions.

## Next steps

To learn how to enable immutable releases for your repository or organization, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/preventing-changes-to-your-releases).

To learn how to ensure a release and local assets have not been changed, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/verifying-the-integrity-of-a-release).
