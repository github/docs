---
title: Supported architectures and operating systems for self-hosted runners
shortTitle: Supported platforms
intro: 'The following processor architectures and operating systems are supported for the self-hosted runner application.'
redirect_from:
  - /actions/hosting-your-own-runners/managing-self-hosted-runners/supported-architectures-and-operating-systems-for-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: overview
---

## Linux

* Red Hat Enterprise Linux 8 or later
* CentOS 8 or later
* Oracle Linux 8 or later
* Fedora 29 or later
* Debian 10 or later
* Ubuntu 20.04 or later
* Linux Mint 20 or later
* openSUSE 15.2 or later
* SUSE Enterprise Linux (SLES) 15 SP2 or later

## Windows

* Windows 10 64-bit
* Windows 11 64-bit
* Windows Server 2016 64-bit
* Windows Server 2019 64-bit
* Windows Server 2022 64-bit

## macOS

* macOS 11.0 (Big Sur) or later

## Supported processor architectures

* `x64` - Linux, macOS, Windows.
* `ARM64` - Linux, macOS{% ifversion actions-windows-arm %}, Windows (currently in {% data variables.release-phases.public_preview %}){% endif %}.
* `ARM32` - Linux.
