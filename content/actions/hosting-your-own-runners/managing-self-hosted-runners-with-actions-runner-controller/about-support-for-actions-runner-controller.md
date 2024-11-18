---
title: About support for Actions Runner Controller
intro: 'What to know before you [contact {% data variables.contact.github_support %}](support/contacting-github-support) for assistance with Actions Runner Controller.'
shortTitle: About Support for ARC
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>= 3.9'
topics:
  - Actions Runner Controller
  - Support
---

You can [contact {% data variables.contact.github_support %}](/support/contacting-github-support) for assistance with Actions Runner Controller.

## About support for Actions Runner Controller Versions

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

If you're uncertain if the issue is out of scope, open a ticket and we're happy to help you determine the best way to proceed.

For more information about contacting {% data variables.contact.github_support %}, see [AUTOTITLE](/support/contacting-github-support).

{% note %}

**Note:**

* OpenShift clusters are currently unsupported.
* ARC is only supported on GitHub Enterprise Server versions 3.9 and greater.

{% endnote %}

## Working with {% data variables.contact.github_support %} for Actions Runner Controller

{% data variables.contact.github_support %} may ask questions about your Actions Runner Controller deployment and request that you collect and attach the [controller, listener](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/troubleshooting-actions-runner-controller-errors#checking-the-logs-of-the-controller-and-runner-set-listener), and runner logs to the support ticket.
