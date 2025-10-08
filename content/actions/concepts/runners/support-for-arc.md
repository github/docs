---
title: Support for Actions Runner Controller
shortTitle: Support for ARC
intro: 'What to know before you [contact {% data variables.contact.github_support %}](support/contacting-github-support) for assistance with Actions Runner Controller.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Actions Runner Controller
  - Support
redirect_from:
  - /actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-support-for-actions-runner-controller
  - /actions/concepts/runners/about-support-for-actions-runner-controller
  - /actions/concepts/runners/support-for-actions-runner-controller
---

## Overview

The Actions Runner Controller (ARC) project [was adopted by GitHub](https://github.com/actions/actions-runner-controller/discussions/2072) to release as a new GitHub product. As a result, there are currently two ARC releases: the legacy community-maintained ARC and GitHub's Autoscaling Runner Sets.

GitHub only supports the latest Autoscaling Runner Sets version of ARC. Support for the legacy ARC is provided by the community in the [Actions Runner Controller](https://github.com/actions/actions-runner-controller) repository only.

## Scope of support for Actions Runner Controller

If your support request is outside of the scope of what our team can help you with, we may recommend next steps to resolve your issue outside of {% data variables.contact.github_support %}. Your support request is possibly out of {% data variables.contact.github_support %}'s scope if the request is primarily about:

* The legacy community-maintained version of ARC
* Installing, configuring, or maintaining dependencies
* Template spec customization
* Container orchestration, such as Kubernetes setup, networking, building images in ARC (DinD), etc.
* Applying Kubernetes policies
* Managed Kubernetes providers or provider-specific configurations
* [Runner Container Hooks](https://github.com/actions/runner-container-hooks) in conjunction with ARC's `kubernetes` mode
* Installation tooling other than Helm
* Storage provisioners and PersistentVolumeClaims (PVCs)
* Best practices, such as configuring metrics servers, image caching, etc.

While ARC may be deployed successfully with different tooling and configurations, your support request is possibly out of {% data variables.contact.github_support %}'s scope if ARC has been deployed with:

* Installation tooling other than Helm
* Service account and/or template spec customization

For more information about contacting {% data variables.contact.github_support %}, see [AUTOTITLE](/support/contacting-github-support).

> [!NOTE]
> * OpenShift clusters are in public preview. See guidance from [Red Hat](https://developers.redhat.com/articles/2025/02/17/how-securely-deploy-github-arc-openshift#arc_architecture) for configuration recommendations.
> * ARC is only supported on GitHub Enterprise Server versions 3.9 and greater.

## Working with {% data variables.contact.github_support %} for Actions Runner Controller

{% data variables.contact.github_support %} may ask questions about your Actions Runner Controller deployment and request that you collect and attach [controller logs, listener logs](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/troubleshooting-actions-runner-controller-errors#checking-the-logs-of-the-controller-and-runner-set-listener), runner logs, and Helm charts (`values.yaml`) to the support ticket.
