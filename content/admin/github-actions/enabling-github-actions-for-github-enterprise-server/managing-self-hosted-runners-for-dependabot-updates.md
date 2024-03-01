---
title: Managing self-hosted runners for Dependabot updates on your enterprise
intro: 'You can create dedicated runners for {% data variables.location.product_location %} that {% data variables.product.prodname_dependabot %} uses to create pull requests to help secure and maintain the dependencies used in repositories on your enterprise.'
redirect_from:
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/setting-up-dependabot-updates
allowTitleToDifferFromFilename: true
versions:
  ghes: '> 3.2'
topics:
  - Enterprise
  - Security
  - Dependabot
  - Dependencies
shortTitle: Dependabot updates
---

## About self-hosted runners for {% data variables.product.prodname_dependabot_updates %}

You can help users of {% data variables.location.product_location %} to create and maintain secure code by setting up {% data variables.product.prodname_dependabot %} security and version updates. With {% data variables.product.prodname_dependabot_updates %}, developers can configure repositories so that their dependencies are updated and kept secure automatically. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."

To use {% data variables.product.prodname_dependabot_updates %} on {% data variables.location.product_location %}, you must configure self-hosted runners to create the pull requests that will update dependencies.

## Prerequisites

{% ifversion dependabot-updates-github-connect %}
Configuring self-hosted runners is only one step in the middle of the process for enabling {% data variables.product.prodname_dependabot_updates %}. There are several steps you must follow before these steps, including configuring {% data variables.location.product_location %} to use {% data variables.product.prodname_actions %} with self-hosted runners. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."
{% else %}
Before you configure self-hosted runners for {% data variables.product.prodname_dependabot_updates %}, you must:

- Configure {% data variables.location.product_location %} to use {% data variables.product.prodname_actions %} with self-hosted runners. For more information, see "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)."
- Enable {% data variables.product.prodname_dependabot_alerts %} for your enterprise. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."
{% endif %}

## Configuring self-hosted runners for {% data variables.product.prodname_dependabot_updates %}

After you configure {% data variables.location.product_location %} to use {% data variables.product.prodname_actions %}, you need to add self-hosted runners for {% data variables.product.prodname_dependabot_updates %}.

### System requirements for {% data variables.product.prodname_dependabot %} runners

Any VM that you use for {% data variables.product.prodname_dependabot %} runners must meet the requirements for self-hosted runners. In addition, they must meet the following requirements.

- Linux operating system
- x64 architecture

- Docker installed with access for the runner users:
  - We recommend installing Docker in rootless mode and configuring the runners to access Docker without `root` privileges.
  - Alternatively, install Docker and give the runner users raised privileges to run Docker.

The CPU and memory requirements will depend on the number of concurrent runners you deploy on a given VM. As guidance, we have successfully set up 20 runners on a single 2 CPU 8GB machine, but ultimately, your CPU and memory requirements will heavily depend on the repositories being updated. Some ecosystems will require more resources than others.

If you specify more than 14 concurrent runners on a VM, you must also update the Docker `/etc/docker/daemon.json` configuration to increase the default number of networks Docker can create.

```json
{
  "default-address-pools": [
    {"base":"10.10.0.0/16","size":24}
  ]
}
```

### Network requirements for {% data variables.product.prodname_dependabot %} runners

{% data variables.product.prodname_dependabot %} runners require access to the public internet, {% data variables.product.prodname_dotcom_the_website %}, and any internal registries that will be used in {% data variables.product.prodname_dependabot %} updates. To minimize the risk to your internal network, you should limit access from the Virtual Machine (VM) to your internal network. This reduces the potential for damage to internal systems if a runner were to download a hijacked dependency.

### Certificate configuration for {% data variables.product.prodname_dependabot %} runners

If your {% data variables.product.prodname_ghe_server %} instance uses a self-signed certificate, or if {% data variables.product.prodname_dependabot %} needs to interact with registries that use self-signed certificates, those certificates must also be installed on the self-hosted runners that run {% data variables.product.prodname_dependabot %} jobs. This security hardens the connection. You must also configure Node.js to use the certificate, because most actions are written in JavaScript and run using Node.js, which does not use the operating system certificate store.

### Adding self-hosted runners for {% data variables.product.prodname_dependabot %} updates

1. Provision self-hosted runners, at the repository, organization, or enterprise account level. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)" and "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners)."

1. Set up the self-hosted runners with the requirements described above. For example, on a VM running Ubuntu 20.04 you would:
   - Install Docker and ensure that the runner users have access to Docker. For more information, see the Docker documentation.
     - [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
     - Recommended approach: [Run the Docker daemon as a non-root user (Rootless mode)](https://docs.docker.com/engine/security/rootless/)
     - Alternative approach: [Manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
   - Verify that the runners have access to the public internet and can only access the internal networks that {% data variables.product.prodname_dependabot %} needs.
   - Install any self-signed certificates for your {% data variables.product.prodname_ghe_server %} instance or for registries that {% data variables.product.prodname_dependabot %} will need to interact with.
     - Configure Node.js to use the same certificate. For more information, see "[AUTOTITLE](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#configuring-nodejs-to-use-the-certificate)."

1. Assign a `dependabot` label to each runner you want {% data variables.product.prodname_dependabot %} to use. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-labels-with-self-hosted-runners#assigning-a-label-to-a-self-hosted-runner)."

1. Optionally, enable workflows triggered by {% data variables.product.prodname_dependabot %} to use more than read-only permissions and to have access to any secrets that are normally available. For more information, see "[AUTOTITLE](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#enabling-workflows-triggered-by-dependabot-access-to-dependabot-secrets-and-increased-permissions)."
