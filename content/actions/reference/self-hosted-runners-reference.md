---
title: Self-hosted runners reference
shortTitle: Self-hosted runners reference
intro: Find information about requirements and supported actions for self-hosted runners.
redirect_from:
  - /actions/hosting-your-own-runners/managing-self-hosted-runners/supported-architectures-and-operating-systems-for-self-hosted-runners
  - /actions/reference/supported-architectures-and-operating-systems-for-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
---

## Requirements for self-hosted runner machines

You can use a machine as a self-hosted runner as long as it meets these requirements:

* You can install and run the self-hosted runner application on the machine. See [Supported operating systems](#supported-operating-systems) and [Supported processor architectures](#supported-processor-architectures).
* The machine can communicate with {% data variables.product.prodname_actions %}.
* The machine has enough hardware resources for the type of workflows you plan to run. The self-hosted runner application itself only requires minimal resources.
* If you want to run workflows that use Docker container actions or service containers, you must use a Linux machine and Docker must be installed.

### Supported operating systems

#### Linux

* Red Hat Enterprise Linux 8 or later
* CentOS 8 or later
* Oracle Linux 8 or later
* Fedora 29 or later
* Debian 10 or later
* Ubuntu 20.04 or later
* Linux Mint 20 or later
* openSUSE 15.2 or later
* SUSE Enterprise Linux (SLES) 15 SP2 or later

#### Windows

* Windows 10 64-bit
* Windows 11 64-bit
* Windows Server 2016 64-bit
* Windows Server 2019 64-bit
* Windows Server 2022 64-bit

#### macOS

* macOS 11.0 (Big Sur) or later

### Supported processor architectures

* `x64` - Linux, macOS, Windows.
* `ARM64` - Linux, macOS{% ifversion actions-windows-arm %}, Windows (currently in {% data variables.release-phases.public_preview %}){% endif %}.
* `ARM32` - Linux.
