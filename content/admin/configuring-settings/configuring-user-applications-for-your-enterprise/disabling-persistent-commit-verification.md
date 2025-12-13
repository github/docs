---
title: Disabling persistent commit verification
shortTitle: Disable persistent commit verification
intro: 'You can disable persistent commit verification on {% data variables.product.prodname_ghe_server %} to reduce disk usage.'
versions:
  ghes: '>=3.17'
type: how_to
topics:
  - Access management
  - Enterprise
  - Fundamentals
  - Identity
  - Security
permissions: 'Site administrators'
---

## About persistent commit verification

When persistent commit verification is enabled, {% data variables.product.prodname_ghe_server %} stores a verification record alongside each commit when its signature is verified. This record ensures that verified commits maintain their verification status even if signing keys are later rotated, expired, or revoked. For more information about persistent commit verification, see [AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification#persistent-commit-signature-verification).

By default, persistent commit verification is enabled on {% data variables.product.prodname_ghe_server %} 3.17 and later.

Each verified commit requires approximately 80 bytes of storage. For large installations with a large number of verified commits (e.g., hundreds of thousands or more), you may want to disable this feature to limit data growth.

## Disabling persistent commit verification

You can disable persistent commit verification for {% data variables.location.product_location %}.

1. In the administrative shell, run the following command.

   ```bash copy
   ghe-config app.persist-commit-signature-verification.enabled false
   ```

1. Apply the configuration.

   ```bash copy
   ghe-config-apply
   ```

## Enabling persistent commit verification

If you previously disabled persistent commit verification, you can re-enable it.

1. In the administrative shell, run the following command.

   ```bash copy
   ghe-config app.persist-commit-signature-verification.enabled true
   ```

1. Apply the configuration.

   ```bash copy
   ghe-config-apply
   ```
