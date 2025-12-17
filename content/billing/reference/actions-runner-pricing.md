---
title: Actions runner pricing
shortTitle: Actions runner pricing
intro: Reference information for calculating the cost of using different types of runners.
versions:
  fpt: "*"
  ghec: "*"
  ghes: "*"
topics:
  - Billing
  - Actions
contentType: reference
redirect_from:
  - /billing/reference/actions-minute-multipliers
---

{% data reusables.billing.actions-price-changes %}

{% data variables.product.github %} rounds the minutes and partial minutes each job uses up to the nearest whole minute.

## Self-hosted runners

{% ifversion actions-cloud-platform-march %}
The cost of using a self-hosted runner on the {% data variables.product.prodname_actions %} cloud platform is $0.002 USD per minute.
{% elsif fpt or ghec %}
From {% data variables.actions.self_hosted_runner_charge_date %}, the cost of using a self-hosted runner on the {% data variables.product.prodname_actions %} cloud platform will be $0.002 USD per minute.
{% endif %}

The cost of using the {% data variables.product.prodname_actions %} cloud platform is included in the per-minute cost of all {% data variables.product.github %}-hosted runners.

## Standard {% data variables.product.github %}-hosted runners

These runners will use minutes included in your quota to run workflows in private and internal repositories until the quota is used up.

{% data reusables.billing.actions-standard-runner-prices %}

## x64-powered {% data variables.actions.hosted_runners %}

| Operating system      | Billing SKU                | Per-minute rate until January 1, 2026 (USD) | January 1, 2026 onward | Percentage change |
| --------------------- | -------------------------- | ----------------- |---------------|------|
| Linux Advanced 2-core | `linux_2_core_advanced`    | $0.008            | $0.006        | -25% |
| Linux 4-core          | `linux_4_core`             | $0.016            | $0.012        | -25% |
| Linux 8-core          | `linux_8_core`             | $0.032            | $0.022        | -31% |
| Linux 16-core         | `linux_16_core`            | $0.064            | $0.042        | -34% |
| Linux 32-core         | `linux_32_core`            | $0.128            | $0.082        | -36% |
| Linux 64-core         | `linux_64_core`            | $0.256            | $0.162        | -37% |
| Linux 96-core         | `linux_96_core`            | $0.384            | $0.252        | -34% |
| Windows 4-core        | `windows_4_core`           | $0.032            | $0.022        | -31% |
| Windows 8-core        | `windows_8_core`           | $0.064            | $0.042        | -34% |
| Windows 16-core       | `windows_16_core`          | $0.128            | $0.082        | -36% |
| Windows 32-core       | `windows_32_core`          | $0.256            | $0.162        | -37% |
| Windows 64-core       | `windows_64_core`          | $0.512            | $0.322        | -37% |
| Windows 96-core       | `windows_96_core`          | $0.768            | $0.552        | -28% |
| macOS 12-core         | `macos_l`                  | $0.120            | $0.077        | -36% |

## arm64-powered {% data variables.actions.hosted_runners %}

| Operating system      | Billing SKU           | Per-minute rate until January 1, 2026 (USD) | January 1, 2026 onward | Percentage change |
| --------------------- | --------------------- | ----------------- |---------------|------|
| Linux 2-core          | `linux_2_core_arm`    | $0.005            | $0.005        | &nbsp; &nbsp; 0% |
| Linux 4-core          | `linux_4_core_arm`    | $0.010            | $0.008        | -20% |
| Linux 8-core          | `linux_8_core_arm`    | $0.020            | $0.014        | -30% |
| Linux 16-core         | `linux_16_core_arm`   | $0.040            | $0.026        | -35% |
| Linux 32-core         | `linux_32_core_arm`   | $0.080            | $0.050        | -38% |
| Linux 64-core         | `linux_64_core_arm`   | $0.160            | $0.098        | -39% |
| Windows 2-core        | `windows_2_core_arm`  | $0.010            | $0.008        | -20% |
| Windows 4-core        | `windows_4_core_arm`  | $0.020            | $0.014        | -30% |
| Windows 8-core        | `windows_8_core_arm`  | $0.040            | $0.026        | -35% |
| Windows 16-core       | `windows_16_core_arm` | $0.080            | $0.050        | -38% |
| Windows 32-core       | `windows_32_core_arm` | $0.160            | $0.098        | -39% |
| Windows 64-core       | `windows_64_core_arm` | $0.320            | $0.194        | -39% |
| macOS 5-core (M2 Pro) | `macos_xl`            | $0.160            | $0.102        | -36% |

## GPU-powered {% data variables.actions.hosted_runners %}

| Operating system      | Billing SKU          | Per-minute rate until January 1, 2026 (USD) | January 1, 2026 onward | Percentage change |
| ------------------ | ------------------------ | ------------- |------------|------|
| Linux 4-core          | `linux_4_core_gpu`        | $0.070           | $0.052       | -26% |
| Windows 4-core    | `windows_4_core_gpu` | $0.14             | $0.102        | -27% |

## Points to note about rates for runners

* The number of jobs you can run concurrently across all repositories in your user or organization account depends on your {% data variables.product.github %} plan. For more information, see [AUTOTITLE](/actions/learn-github-actions/usage-limits-billing-and-administration) for {% data variables.product.github %}-hosted runners and [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/usage-limits-for-self-hosted-runners) for self-hosted runner usage limits.
* {% data reusables.actions.larger-runner-permissions %}
* {% data reusables.actions.about-larger-runners-billing %}
* For {% data variables.actions.hosted_runner %}s, there is no additional cost for configurations that assign public static IP addresses to a {% data variables.actions.hosted_runner %}. For more information on {% data variables.actions.hosted_runner %}s, see [AUTOTITLE](/actions/using-github-hosted-runners/using-larger-runners/about-larger-runners).
* Included minutes cannot be used for {% data variables.actions.hosted_runner %}s.
* The {% data variables.actions.hosted_runner %}s are not free for public repositories.
* Custom images can only be used with larger runners and are billed at the same per-minute rates as those runners.
