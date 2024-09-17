---
title: Recommended hardware resources for running CodeQL
shortTitle: Hardware resources for CodeQL
intro: 'Recommended specifications (RAM, CPU cores, and disk) for running {% data variables.product.prodname_codeql %} analysis on self-hosted machines, based on the size of your codebase.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Integration
  - CI
---
You can configure {% data variables.product.prodname_codeql %} on {% data variables.product.prodname_actions %} or on an external CI system. {% data variables.product.prodname_codeql %} is fully compatible with {% data variables.product.prodname_dotcom %}-hosted runners on {% data variables.product.prodname_actions %}.

If you're using an external CI system, or self-hosted runners on {% data variables.product.prodname_actions %} for private repositories, you're responsible for configuring your own hardware. The optimal hardware configuration for running {% data variables.product.prodname_codeql %} may vary based on the size and complexity of your codebase, the programming languages and build systems being used, and your CI workflow configuration.

The table below provides recommended hardware specifications for running {% data variables.product.prodname_codeql %} analysis, based on the size of your codebase. Use these as a starting point for determining your choice of hardware or virtual machine. A machine with greater resources may improve analysis performance, but may also be more expensive to maintain.

| Codebase size | RAM | CPU |
|--------|--------|--------|
| Small (<100 K lines of code) | 8 GB or higher | 2 cores |
| Medium (100 K to 1 M lines of code) | 16 GB or higher | 4 or 8 cores |
| Large (>1 M lines of code) | 64 GB or higher | 8 cores |

For all codebase sizes, we recommend using an SSD with 14 GB or more of disk space. There must be enough disk space to check out and build your code, plus additional space for data produced by {% data variables.product.prodname_codeql %}.
