---
title: Actions runner pricing
shortTitle: Actions runner pricing
intro: Reference information for calculating the cost of using different {% data variables.product.github %}-hosted runners.
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

{% data variables.product.github %} rounds the minutes and partial minutes each job uses up to the nearest whole minute.

{% data reusables.billing.actions-standard-runner-prices %}

## x64-powered {% data variables.actions.hosted_runners %}

| Operating system      | Billing SKU                | Per-minute rate (USD) |
| --------------------- | -------------------------- | --------------------- |
| Linux Advanced 2-core | `linux_2_core_advanced`    | $0.006                |
| Linux 4-core          | `linux_4_core`             | $0.012                |
| Linux 8-core          | `linux_8_core`             | $0.022                |
| Linux 16-core         | `linux_16_core`            | $0.042                |
| Linux 32-core         | `linux_32_core`            | $0.082                |
| Linux 64-core         | `linux_64_core`            | $0.162                |
| Linux 96-core         | `linux_96_core`            | $0.252                |
| Windows 4-core        | `windows_4_core`           | $0.022                |
| Windows 8-core        | `windows_8_core`           | $0.042                |
| Windows 16-core       | `windows_16_core`          | $0.082                |
| Windows 32-core       | `windows_32_core`          | $0.162                |
| Windows 64-core       | `windows_64_core`          | $0.322                |
| Windows 96-core       | `windows_96_core`          | $0.552                |
| macOS 12-core         | `macos_l`                  | $0.077                |

## arm64-powered {% data variables.actions.hosted_runners %}

| Operating system      | Billing SKU           | Per-minute rate (USD) |
| --------------------- | --------------------- | --------------------- |
| Linux 2-core          | `linux_2_core_arm`    | $0.005                |
| Linux 4-core          | `linux_4_core_arm`    | $0.008                |
| Linux 8-core          | `linux_8_core_arm`    | $0.014                |
| Linux 16-core         | `linux_16_core_arm`   | $0.026                |
| Linux 32-core         | `linux_32_core_arm`   | $0.050                |
| Linux 64-core         | `linux_64_core_arm`   | $0.098                |
| Windows 2-core        | `windows_2_core_arm`  | $0.008                |
| Windows 4-core        | `windows_4_core_arm`  | $0.014                |
| Windows 8-core        | `windows_8_core_arm`  | $0.026                |
| Windows 16-core       | `windows_16_core_arm` | $0.050                |
| Windows 32-core       | `windows_32_core_arm` | $0.098                |
| Windows 64-core       | `windows_64_core_arm` | $0.194                |
| macOS 5-core (M2 Pro) | `macos_xl`            | $0.102                |

## GPU-powered {% data variables.actions.hosted_runners %}

| Operating system   | Billing SKU          | Per-minute rate (USD) |
| ------------------ | ---------------------| ----------------------|
| Linux 4-core       | `linux_4_core_gpu`   | $0.052                |
| Windows 4-core     | `windows_4_core_gpu` | $0.102                |

## Points to note about rates for runners

* The number of jobs you can run concurrently across all repositories in your user or organization account depends on your {% data variables.product.github %} plan. For more information, see [AUTOTITLE](/actions/learn-github-actions/usage-limits-billing-and-administration) for {% data variables.product.github %}-hosted runners and [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/usage-limits-for-self-hosted-runners) for self-hosted runner usage limits.
* {% data reusables.actions.larger-runner-permissions %}
* {% data reusables.actions.about-larger-runners-billing %}
* For {% data variables.actions.hosted_runner %}s, there is no additional cost for configurations that assign public static IP addresses to a {% data variables.actions.hosted_runner %}. For more information on {% data variables.actions.hosted_runner %}s, see [AUTOTITLE](/actions/using-github-hosted-runners/using-larger-runners/about-larger-runners).
* Included minutes cannot be used for {% data variables.actions.hosted_runner %}s.
* The {% data variables.actions.hosted_runner %}s are not free for public repositories.
* Custom images can only be used with larger runners and are billed at the same per-minute rates as those runners.
