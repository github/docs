---
title: About GitHub Enterprise Server
intro: 'Find out if {% data variables.product.product_name %} is right for your business.'
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
---

{% data reusables.enterprise.ghes-is-a-self-hosted-platform %} Your business can benefit from increased control and avoid issues associated the public cloud, while your developers can benefit from familiar features and workflows from {% data variables.product.prodname_dotcom_the_website %}.

{% data variables.product.product_name %} is suitable for enterprises that are subject to regulatory compliance. It runs on your infrastructure and is governed by access and security controls that you define, such as firewalls, network policies, IAM, monitoring, and VPNs.

{% data variables.product.product_name %} is a deployment option for the {% data variables.product.prodname_enterprise %} plan. To learn about available features and assess other deployment options, see "[AUTOTITLE](/admin/overview/about-github-for-enterprises)."

## Features and releases

{% data reusables.enterprise.constantly-improving %}

Most features are released on {% data variables.product.prodname_dotcom_the_website %} first, then come to {% data variables.product.product_name %} through the release process. You can see which features we're working on in the [{% data variables.product.prodname_roadmap %}]({% data variables.product.prodname_roadmap_link %}).

### Optional features

You can also configure optional features on {% data variables.product.product_name %} to improve the software development lifecycle for your enterprise.

* **{% data variables.product.prodname_actions %}**: Automate CI/CD and development workflows
* **{% data variables.product.prodname_GH_advanced_security %}**: Scan code for secrets and vulnerabilities
* **{% data variables.product.prodname_github_connect %}**: Benefit from data and features on {% data variables.product.prodname_dotcom_the_website %}
* **{% data variables.product.prodname_registry %}**: Host software packages for your enterprise

## How do I deploy {% data variables.product.product_name %}?

{% data reusables.enterprise.github-distributes-ghes %} Installing third-party software or making changes to the underlying operating system is not supported.

You can deploy {% data variables.product.product_name %} to a virtualization hypervisor within your on-premises datacenter, or to a public cloud service.

### Supported on-premises hypervisors

* Microsoft Hyper-V
* OpenStack KVM
* VMware ESXi

### Supported cloud services

* Amazon Web Services (AWS)
* Google Cloud Platform (GCP)
* Microsoft Azure

## Administrative options

You can give certain employees administrative access to your {% data variables.product.product_name %} instance. {% data variables.product.company_short %} has found that people with Linux administration experience are more successful with deployment and maintenance.

Administrators can:

* Configure and monitor the instance via browser, administrative SSH access, and REST or GraphQL APIs
* Set up external authentication using CAS, LDAP, or SAML
* Set usage policies to ensure compliance with business rules or regulatory restrictions

## Backups and availability

{% data variables.product.product_name %} provides options for safeguarding against data loss or service disruptions.

* To back up configuration and user data, you can take regular snapshots of your instance using our Backup Utilities system.
* To increase reliability, you can configure a passive replica instance to fail over to in the event of a system or network failure.
* To improve performance, you can configure active replicas to scale the instance for dispersed users or high demand.

## Getting started

You can sign up for a free, 45-day trial of {% data variables.product.product_name %}. See "[AUTOTITLE](/admin/overview/setting-up-a-trial-of-github-enterprise-server)."

If you're ready to get started with a production instance, see "[AUTOTITLE](/get-started/onboarding/getting-started-with-github-enterprise-server)."
