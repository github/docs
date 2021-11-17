---
title: Getting started with GitHub Actions for GitHub Enterprise Server
shortTitle: Getting started with GitHub Actions
intro: 'Learn about enabling and configuring {% data variables.product.prodname_actions %} on {% data variables.product.prodname_ghe_server %} for the first time.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/enabling-github-actions-and-configuring-storage
  - /admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
---
{% data reusables.actions.enterprise-beta %}

{% data reusables.actions.enterprise-github-hosted-runners %}

{% ifversion ghes %}

This article explains how site administrators can configure {% data variables.product.prodname_ghe_server %} to use {% data variables.product.prodname_actions %}. It covers the hardware and software requirements, presents the storage options, and describes the security management policies.

{% endif %}

## Review hardware considerations

{% ifversion ghes = 3.0 %}

{% note %}

**Note**: If you're upgrading an existing {% data variables.product.prodname_ghe_server %} instance to 3.0 or later and want to configure {% data variables.product.prodname_actions %}, note that the minimum hardware requirements have increased. For more information, see "[Upgrading {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server#about-minimum-requirements-for-github-enterprise-server-30-and-later)."

{% endnote %}

{% endif %}

{%- ifversion ghes < 3.2 %}

The CPU and memory resources available to {% data variables.product.product_location %} determine the maximum job throughput for {% data variables.product.prodname_actions %}.

Internal testing at {% data variables.product.company_short %} demonstrated the following maximum throughput for {% data variables.product.prodname_ghe_server %} instances with a range of CPU and memory configurations. You may see different throughput depending on the overall levels of activity on your instance.

{%- endif %}

{%- ifversion ghes > 3.1 %}

The CPU and memory resources available to {% data variables.product.product_location %} determine the number of jobs that can be run concurrently without performance loss.

The peak quantity of concurrent jobs running without performance loss depends on such factors as job duration, artifact usage, number of repositories running Actions, and how much other work your instance is doing not related to Actions. Internal testing at GitHub demonstrated the following performance targets for GitHub Enterprise Server on a range of CPU and memory configurations:

{% endif %}

{%- ifversion ghes < 3.2 %}

| vCPUs | Memory | Maximum job throughput |
| :--- | :--- | :--- |
| 4 | 32 GB | Demo or light testing |
| 8 | 64 GB | 25 jobs |
| 16 | 160 GB | 35 jobs |
| 32 | 256 GB | 100 jobs |

{%- endif %}

{%- ifversion ghes > 3.1 %}

| vCPUs | Memory | Maximum Concurrency*|
| :--- | :--- | :--- |
| 32 | 128 GB | 1500 jobs |
| 64 | 256 GB | 1900 jobs |
| 96 | 384 GB | 2200 jobs |

*Maximum concurrency was measured using multiple repositories, job duration of approximately 10 minutes, and 10 MB artifact uploads. You may experience different performance depending on the overall levels of activity on your instance.

{%- endif %}

If you plan to enable {% data variables.product.prodname_actions %} for the users of an existing instance, review the levels of activity for users and automations on the instance and ensure that you have provisioned adequate CPU and memory for your users. For more information about monitoring the capacity and performance of {% data variables.product.prodname_ghe_server %}, see "[Monitoring your appliance](/admin/enterprise-management/monitoring-your-appliance)."

For more information about minimum hardware requirements for {% data variables.product.product_location %}, see the hardware considerations for your instance's platform.

- [AWS](/admin/installation/installing-github-enterprise-server-on-aws#hardware-considerations)
- [Azure](/admin/installation/installing-github-enterprise-server-on-azure#hardware-considerations)
- [Google Cloud Platform](/admin/installation/installing-github-enterprise-server-on-google-cloud-platform#hardware-considerations)
- [Hyper-V](/admin/installation/installing-github-enterprise-server-on-hyper-v#hardware-considerations)
- [OpenStack KVM](/admin/installation/installing-github-enterprise-server-on-openstack-kvm#hardware-considerations)
- [VMware](/admin/installation/installing-github-enterprise-server-on-vmware#hardware-considerations){% ifversion ghes < 3.3 %}
- [XenServer](/admin/installation/installing-github-enterprise-server-on-xenserver#hardware-considerations){% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

## External storage requirements

To enable {% data variables.product.prodname_actions %} on {% data variables.product.prodname_ghe_server %}, you must have access to external blob storage.

{% data variables.product.prodname_actions %} uses blob storage to store artifacts generated by workflow runs, such as workflow logs and user-uploaded build artifacts. The amount of storage required depends on your usage of {% data variables.product.prodname_actions %}. Only a single external storage configuration is supported, and you can't use multiple storage providers at the same time.

{% data variables.product.prodname_actions %} supports these storage providers:

* Azure Blob storage
* Amazon S3
* S3-compatible MinIO Gateway for NAS

{% note %}

**Note:** These are the only storage providers that {% data variables.product.company_short %} supports and can provide assistance with. Other S3 API-compatible storage providers are unlikely to work due to differences from the S3 API. [Contact us](https://support.github.com/contact) to request support for additional storage providers.

{% endnote %}

## Networking considerations

{% data reusables.actions.proxy-considerations %} For more information about using a proxy with {% data variables.product.prodname_ghe_server %}, see "[Configuring an outbound web proxy server](/admin/configuration/configuring-network-settings/configuring-an-outbound-web-proxy-server)."

{% ifversion ghes %}

## Enabling {% data variables.product.prodname_actions %} with your storage provider

Follow one of the procedures below to enable {% data variables.product.prodname_actions %} with your chosen storage provider:

* [Enabling GitHub Actions with Azure Blob storage](/admin/github-actions/enabling-github-actions-with-azure-blob-storage)
* [Enabling GitHub Actions with Amazon S3 storage](/admin/github-actions/enabling-github-actions-with-amazon-s3-storage)
* [Enabling GitHub Actions with MinIO Gateway for NAS storage](/admin/github-actions/enabling-github-actions-with-minio-gateway-for-nas-storage)

## Managing access permissions for {% data variables.product.prodname_actions %} in your enterprise

You can use policies to manage access to {% data variables.product.prodname_actions %}. For more information, see "[Enforcing GitHub Actions policies for your enterprise](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."

## Adding self-hosted runners

{% data reusables.actions.enterprise-github-hosted-runners %}

To run {% data variables.product.prodname_actions %} workflows, you need to add self-hosted runners. You can add self-hosted runners at the enterprise, organization, or repository levels. For more information, see "[Adding self-hosted runners](/actions/hosting-your-own-runners/adding-self-hosted-runners)."

## Managing which actions can be used in your enterprise

You can control which actions your users are allowed to use in your enterprise. This includes setting up {% data variables.product.prodname_github_connect %} for automatic access to actions from {% data variables.product.prodname_dotcom_the_website %}, or manually syncing actions from {% data variables.product.prodname_dotcom_the_website %}.

For more information, see "[About using actions in your enterprise](/admin/github-actions/about-using-actions-in-your-enterprise)."

## General security hardening for {% data variables.product.prodname_actions %} 

If you want to learn more about security practices for {% data variables.product.prodname_actions %}, see "[Security hardening for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions)."

{% endif %}

## Reserved Names

When you enable {% data variables.product.prodname_actions %} for your enterprise, two organizations are created: `github` and `actions`. If your enterprise already uses the `github` organization name, `github-org` (or `github-github-org` if `github-org` is also in use) will be used instead. If your enterprise already uses the `actions` organization name, `github-actions` (or `github-actions-org` if `github-actions` is also in use) will be used instead. Once actions is enabled, you won't be able to use these names anymore.
