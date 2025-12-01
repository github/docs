---
title: GitHub Product and SKU names
shortTitle: Product and SKU names
intro: Learn about the product and SKU identifiers used in the billing platform and REST API.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Billing
  - Enterprise
contentType: reference
---

When working with billing through the REST API to create budgets or query usage, you'll need to use specific product and SKU identifiers. This reference provides the valid values for these identifiers.

## Product-level identifiers

For **ProductPricing** budgets or to query usage by product, use one of the following values:

* `actions` - {% data variables.product.prodname_actions %}
* `packages` - {% data variables.product.prodname_registry %}
* `codespaces` - {% data variables.product.prodname_github_codespaces %}
* `copilot` - {% data variables.product.prodname_copilot %}
* `ghas` - {% data variables.product.prodname_GH_advanced_security %}
* `ghec` - {% data variables.product.prodname_ghe_cloud %}

## SKU-level identifiers

For **SkuPricing** budgets or to query usage by SKU, use one of the following values:

### {% data variables.product.prodname_actions %} SKUs

<!-- markdownlint-disable GHD046 -->

* `actions_beta_classroom_repository` - Actions beta classroom repository
* `actions_beta_custom_runner_azure` - Actions beta custom runner (Azure)
* `actions_beta_macos_xl_runner` - Actions beta macOS XL runner
* `actions_beta_public_repository` - Actions beta public repository
* `actions_beta_self_hosted_runner` - Actions beta self-hosted runner
* `actions_cache_storage` - Actions cache storage
* `actions_custom_image_storage` - Actions custom image storage
* `actions_linux` - Actions Linux runners
* `actions_linux_16_core_perf` - Actions Linux 16-core performance
* `actions_linux_20_core_mem` - Actions Linux 20-core memory
* `actions_linux_2_core_advanced` - Actions Linux 2-core advanced
* `actions_linux_2_core_arm` - Actions Linux 2-core ARM
* `actions_linux_32_core` - Actions Linux 32-core
* `actions_linux_32_core_arm` - Actions Linux 32-core ARM
* `actions_linux_32_core_stor` - Actions Linux 32-core storage
* `actions_linux_4_core` - Actions Linux 4-core
* `actions_linux_4_core_advanced` - Actions Linux 4-core advanced
* `actions_linux_4_core_gpu` - Actions Linux 4-core GPU
* `actions_linux_64_core` - Actions Linux 64-core
* `actions_linux_64_core_arm` - Actions Linux 64-core ARM
* `actions_linux_8_core` - Actions Linux 8-core
* `actions_linux_8_core_arm` - Actions Linux 8-core ARM
* `actions_linux_8_core_stor` - Actions Linux 8-core storage
* `actions_linux_96_core` - Actions Linux 96-core
* `actions_linux_a100_24_core_gpu` - Actions Linux A100 24-core GPU
* `actions_linux_a10_36_core_gpu` - Actions Linux A10 36-core GPU
* `actions_linux_arm` - Actions Linux ARM
* `actions_linux_slim` - Actions Linux slim
* `actions_macos` - Actions macOS runners
* `actions_macos_12_core` - Actions macOS 12-core
* `actions_macos_8_core` - Actions macOS 8-core
* `actions_macos_l` - Actions macOS large
* `actions_macos_xl` - Actions macOS XL
* `actions_self_hosted_linux` - Actions self-hosted Linux
* `actions_self_hosted_macos` - Actions self-hosted macOS
* `actions_self_hosted_unknown` - Actions self-hosted unknown
* `actions_self_hosted_windows` - Actions self-hosted Windows
* `actions_storage` - Actions storage
* `actions_unknown` - Actions unknown
* `actions_windows` - Actions Windows runners
* `actions_windows_16_core` - Actions Windows 16-core
* `actions_windows_176_core_perf` - Actions Windows 176-core performance
* `actions_windows_2_core` - Actions Windows 2-core
* `actions_windows_2_core_advanced` - Actions Windows 2-core advanced
* `actions_windows_2_core_arm` - Actions Windows 2-core ARM
* `actions_windows_32_core` - Actions Windows 32-core
* `actions_windows_32_core_arm` - Actions Windows 32-core ARM
* `actions_windows_32_core_stor` - Actions Windows 32-core storage
* `actions_windows_4_core` - Actions Windows 4-core
* `actions_windows_4_core_gpu` - Actions Windows 4-core GPU
* `actions_windows_64_core` - Actions Windows 64-core
* `actions_windows_64_core_arm` - Actions Windows 64-core ARM
* `actions_windows_8_core` - Actions Windows 8-core
* `actions_windows_8_core_arm` - Actions Windows 8-core ARM
* `actions_windows_8_core_mem` - Actions Windows 8-core memory
* `actions_windows_8_core_stor` - Actions Windows 8-core storage
* `actions_windows_a100_24_core_gpu` - Actions Windows A100 24-core GPU
* `actions_windows_a10_36_core_gpu` - Actions Windows A10 36-core GPU
* `actions_windows_arm` - Actions Windows ARM

 <!-- markdownlint-enable GHD046 -->

### {% data variables.product.prodname_github_codespaces %} SKUs

* `codespaces_compute_d16` - Codespaces compute (16-core)
* `codespaces_compute_d2` - Codespaces compute (2-core)
* `codespaces_compute_d32` - Codespaces compute (32-core)
* `codespaces_compute_d4` - Codespaces compute (4-core)
* `codespaces_compute_d8` - Codespaces compute (8-core)
* `codespaces_prebuild_storage` - Codespaces prebuild storage
* `codespaces_storage` - Codespaces storage

### {% data variables.product.prodname_copilot %} SKUs

* `copilot_agent_premium_request` - Copilot agent premium request
* `copilot_enterprise` - Copilot Enterprise
* `copilot_for_business` - Copilot for Business
* `copilot_premium_request` - Copilot premium request
* `copilot_standalone` - Copilot standalone

### {% data variables.product.prodname_GH_advanced_security %} SKUs

* `ghas_code_security_licenses` - GHAS code security licenses
* `ghas_licenses` - GHAS licenses
* `ghas_secret_protection_licenses` - GHAS secret protection licenses

### Other SKUs

* `ghec_licenses` - {% data variables.product.prodname_ghe_cloud %} licenses
* `git_lfs_bandwidth` - Git LFS bandwidth
* `git_lfs_storage` - Git LFS storage
* `models_inference` - Models inference
* `packages_bandwidth` - Packages bandwidth
* `packages_storage` - Packages storage
* `spark_premium_request` - Spark premium request

> [!NOTE]
> The exact SKUs available may vary depending on your enterprise or organization configuration and the features enabled. If you receive a `404` error when creating a budget through the REST API, look at the error response to see the current list of valid SKUs for your account.
