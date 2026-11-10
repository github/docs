---
title: GitHub-hosted runners
intro: '{% data variables.product.prodname_dotcom %} offers hosted virtual machines to run workflows. The virtual machine contains an environment of tools, packages, and settings available for {% data variables.product.prodname_actions %} to use.'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/reference/virtual-environments-for-github-hosted-runners
  - /actions/reference/software-installed-on-github-hosted-runners
  - /actions/reference/specifications-for-github-hosted-runners
  - /actions/using-github-hosted-runners/about-github-hosted-runners
  - /actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners
  - /actions/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners
  - /actions/how-tos/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners
  - /actions/concepts/runners/about-github-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Set up runners
contentType: concepts
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview of {% data variables.product.prodname_dotcom %}-hosted runners

Runners are the machines that execute jobs in a {% data variables.product.prodname_actions %} workflow. For example, a runner can clone your repository locally, install testing software, and then run commands that evaluate your code.

{% data variables.product.prodname_dotcom %} provides runners that you can use to run your jobs, or you can [host your own runners](/actions/concepts/runners/self-hosted-runners). {% data reusables.actions.single-cpu-runners %}

Each runner comes with the runner application and other tools preinstalled. {% data variables.product.prodname_dotcom %}-hosted runners are available with Ubuntu Linux, Windows, or macOS operating systems. When you use a {% data variables.product.prodname_dotcom %}-hosted runner, machine maintenance and upgrades are taken care of for you.

{% ifversion not ghes %}

You can choose one of the standard {% data variables.product.prodname_dotcom %}-hosted runner options or, if you are on the {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %} plan, you can provision a runner with more cores, or a runner that's powered by a GPU processor. These machines are referred to as "{% data variables.actions.hosted_runner %}." For more information, see [AUTOTITLE](/enterprise-cloud@latest/actions/concepts/runners/larger-runners).

{% data variables.actions.hosted_runners_caps %} also support custom images, which let you create and manage your own preconfigured VM images. For more information, see [Custom images](#custom-images).

Using {% data variables.product.prodname_dotcom %}-hosted runners requires network access with at least 70 kilobits per second upload and download speeds.

{% endif %}

{% ifversion github-hosted-runners-emus-entitlements %}

> [!NOTE]
> {% data reusables.actions.entitlement-minutes-emus %} For more information, see [AUTOTITLE](/admin/concepts/identity-and-access-management/enterprise-managed-users).

{% endif %}

{% ifversion not ghes %}

## Runner images

{% data variables.product.github %} maintains our own set of VM images for our standard hosted runners. The list of images and their included tools are managed in the [`actions/runner-images`](https://github.com/actions/runner-images) repository.

### Preinstalled software for GitHub-owned images

The software tools included in our GitHub-owned images are updated weekly. The update process takes several days, and the list of preinstalled software on the `main` branch is updated after the whole deployment ends.

Workflow logs include a link to the preinstalled tools on the exact runner. To find this information in the workflow log, expand the `Set up job` section. Under that section, expand the `Runner Image` section. The link following `Included Software` will describe the preinstalled tools on the runner that ran the workflow.

For more information, see [AUTOTITLE](/actions/how-tos/monitor-workflows/view-workflow-run-history).

{% data variables.product.prodname_dotcom %}-hosted runners include the operating system's default built-in tools, in addition to the packages listed in the above references. For example, Ubuntu and macOS runners include `grep`, `find`, and `which`, among other default tools.

{% ifversion actions-sbom %}

You can also view a software bill of materials (SBOM) for each build of the Windows and Ubuntu runner images. For more information, see [AUTOTITLE](/actions/reference/security/secure-use#reviewing-the-supply-chain-for-github-hosted-runners).

{% endif %}

We recommend using actions to interact with the software installed on runners. This approach has several benefits:
* Usually, actions provide more flexible functionality like version selection, ability to pass arguments, and parameters
* It ensures the tool versions used in your workflow will remain the same regardless of software updates

If there is a tool that you'd like to request, please open an issue at [actions/runner-images](https://github.com/actions/runner-images). This repository also contains announcements about all major software updates on runners.

> [!NOTE]
> * You can also install additional software on {% data variables.product.prodname_dotcom %}-hosted runners. See [AUTOTITLE](/actions/how-tos/manage-runners/github-hosted-runners/customize-runners).
> * While nested virtualization is technically possible while using runners, it is not officially supported. Any use of nested VMs is experimental and done at your own risk, we offer no guarantees regarding stability, performance, or compatibility.

### Custom images

Custom images let you start with a {% data variables.product.github %}-provided base image and build your own VM image that’s customized to your workflow needs. With custom images, you can:
* Build custom VM images using existing workflow YAML syntax.
* Pre-configure environments with approved tooling, security patches, and dependencies before workflows start.
* Create consistent, validated base environments across all builds.

Custom images can include repository code, container images, binaries, certificates, and other dependencies to create a consistent build environment across workflows. This helps you gain control over your supply chain. They help reduce setup time, improve build performance, and strengthen security by reducing the surface attack vector on your images. Administrators can also apply policies to manage image versions, retention, and age to meet organizational security and compliance requirements.

Custom images can only be used with {% data variables.actions.hosted_runners %}. Jobs that use custom images are billed at the same per-minute rates as those runners. Storage for custom images is billed and metered through {% data variables.product.prodname_actions %} storage. For more information, see [AUTOTITLE](/billing/concepts/product-billing/github-actions#custom-image-storage).

To get started with custom images, see [AUTOTITLE](/actions/how-tos/manage-runners/larger-runners/use-custom-images).

## Cloud hosts used by {% data variables.product.prodname_dotcom %}-hosted runners

{% data variables.product.prodname_actions %} uses a multi-cloud compute pool to help improve runner availability for eligible Linux jobs. These jobs can run on either Amazon Web Services (AWS) or Microsoft Azure.

Multi-cloud compute is used for standard 2-core and 4-core Linux runners and compatible 2-core and 4-core {% data variables.actions.hosted_runners %} without specialized configurations. It does not apply to Windows runners or runners with private networking or other specialized configurations. Jobs are automatically scheduled across available cloud providers.

> [!NOTE] If you used {% data variables.product.prodname_dotcom %}-hosted Linux runners before multi-cloud compute was introduced, existing runner labels and workflow syntax remain unchanged.

<!-- Before publication, confirm GHE.com availability: the release description and later release discussion conflict. -->
Eligible runners on {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, and {% data variables.product.prodname_team %} automatically use multi-cloud compute. Enterprises on {% data variables.product.prodname_ghe_cloud %} can opt in. See [AUTOTITLE]({% ifversion ghec %}/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enabling-multi-cloud-compute{% else %}/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enabling-multi-cloud-compute{% endif %}).

If your workflows depend on network allowlists or Azure SDK credentials, running on a different cloud provider can cause connection or authentication failures. Review [IP address requirements](/actions/reference/runners/github-hosted-runners#ip-addresses) and [Azure SDK authentication troubleshooting](/actions/how-tos/troubleshoot-workflows#azure-sdk-authentication-failures).

{% data variables.product.prodname_dotcom %} hosts Windows runners and Linux runners that don't use multi-cloud compute on virtual machines in Azure. Inbound ICMP packets are blocked for Azure virtual machines, so ping or traceroute commands might not work. {% data variables.product.prodname_dotcom %} hosts macOS runners in Azure data centers.

## Workflow continuity

{% data reusables.actions.runner-workflow-continuity %}

In addition, if the workflow run has been successfully queued, but has not been processed by a {% data variables.product.prodname_dotcom %}-hosted runner within 45 minutes, then the queued workflow run is discarded.

## The `/etc/hosts` file

{% data reusables.actions.runners-etc-hosts-file %}

{% endif %}
