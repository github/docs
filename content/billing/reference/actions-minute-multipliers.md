---
title: Actions minute multiplier reference
shortTitle: Actions minute multipliers
intro: 'Reference information for calculating the cost of using different {% data variables.product.github %}-hosted runners.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Billing
  - Actions
contentType: reference
---

{% data variables.product.github %} rounds the minutes and partial minutes each job uses up to the nearest whole minute.

## Standard runners

| Operating system                      | Per-minute rate (USD) |
|---------------------------------------| ----------------------|
|  Linux 2-core                         |   $0.008              |
|  Windows 2-core                       |   $0.016              |
|  macOS 3-core or 4-core (M1 or Intel) |   $0.08               |

## x64-powered {% data variables.actions.hosted_runners %}

| Operating system       | Per-minute rate (USD) |
|------------------------| ----------------------|
|  Linux Advanced 2-core |   $0.008   |
|  Linux 4-core          |   $0.016   |
|  Linux 8-core          |   $0.032   |
|  Linux 16-core         |   $0.064   |
|  Linux 32-core         |   $0.128   |
|  Linux 64-core         |   $0.256   |
| Linux 96-core          |   $0.384   |
|  Windows 4-core        |   $0.032   |
|  Windows 8-core        |   $0.064   |
|  Windows 16-core       |   $0.128   |
|  Windows 32-core       |   $0.256   |
|  Windows 64-core       |   $0.512   |
| Windows 96-core        |   $0.768   |
|  macOS 12-core         |   $0.12    |

## arm64-powered {% data variables.actions.hosted_runners %}

| Operating system    | Per-minute rate (USD) |
|---------------------| -----------|
|  Linux 2-core       |   $0.005   |
|  Linux 4-core       |   $0.01    |
|  Linux 8-core       |   $0.02    |
|  Linux 16-core      |   $0.04    |
|  Linux 32-core      |   $0.08    |
|  Linux 64-core      |   $0.16    |
|  Windows 2-core     |   $0.01    |
|  Windows 4-core     |   $0.02    |
|  Windows 8-core     |   $0.04    |
|  Windows 16-core    |   $0.08    |
|  Windows 32-core    |   $0.16    |
|  Windows 64-core    |   $0.32    |
|  macOS 6-core (M1)  |   $0.16    |

## GPU-powered {% data variables.actions.hosted_runners %}

| Operating system    | Per-minute rate (USD) |
|---------------------| -----------|
|  Linux 4-core       |   $0.07    |
|  Windows 4-core     |   $0.14    |

## Points to note about rates for runners

* The number of jobs you can run concurrently across all repositories in your user or organization account depends on your {% data variables.product.github %} plan. For more information, see [AUTOTITLE](/actions/learn-github-actions/usage-limits-billing-and-administration) for {% data variables.product.github %}-hosted runners and [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/usage-limits-for-self-hosted-runners) for self-hosted runner usage limits.
* {% data reusables.actions.larger-runner-permissions %}
* {% data reusables.actions.about-larger-runners-billing %}
* For {% data variables.actions.hosted_runner %}s, there is no additional cost for configurations that assign public static IP addresses to a {% data variables.actions.hosted_runner %}. For more information on {% data variables.actions.hosted_runner %}s, see [AUTOTITLE](/actions/using-github-hosted-runners/using-larger-runners/about-larger-runners).
* Included minutes cannot be used for {% data variables.actions.hosted_runner %}s.
* The {% data variables.actions.hosted_runner %}s are not free for public repositories.
