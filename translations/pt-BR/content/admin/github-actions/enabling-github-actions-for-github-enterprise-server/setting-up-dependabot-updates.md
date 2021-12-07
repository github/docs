---
title: Setting up Dependabot security and version updates on your enterprise
intro: 'You can create dedicated runners for {% data variables.product.product_location %} that {% data variables.product.prodname_dependabot %} uses to create pull requests to help secure and maintain the dependencies used in repositories on your enterprise.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  ghes: '> 3.2'
topics:
  - Enterprise
  - Security
  - Dependabot
  - Dependencies
shortTitle: Set up Dependabot updates
---

{% data reusables.dependabot.beta-security-and-version-updates %}

{% tip %}

**Tip**: If {% data variables.product.product_location %} uses clustering, you cannot set up {% data variables.product.prodname_dependabot %} security and version updates as {% data variables.product.prodname_actions %} are not supported in cluster mode.

{% endtip %}

## About {% data variables.product.prodname_dependabot %} updates

When you set up {% data variables.product.prodname_dependabot %} security and version updates for {% data variables.product.product_location %}, users can configure repositories so that their dependencies are updated and kept secure automatically. This is an important step in helping developers create and maintain secure code.

Users can set up {% data variables.product.prodname_dependabot %} to create pull requests to update their dependencies using two features.

- **{% data variables.product.prodname_dependabot_version_updates %}**: Users add a {% data variables.product.prodname_dependabot %} configuration file to the repository to enable {% data variables.product.prodname_dependabot %} to create pull requests when a new version of a tracked dependency is released. For more information, see "[About {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)."
- **{% data variables.product.prodname_dependabot_security_updates %}**: Users toggle a repository setting to enable {% data variables.product.prodname_dependabot %} to create pull requests when {% data variables.product.prodname_dotcom %} detects a vulnerability in one of the dependencies of the dependency graph for the repository. For more information, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)" and "[About {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)."

## Prerequisites for {% data variables.product.prodname_dependabot %} updates

Both types of {% data variables.product.prodname_dependabot %} update have the following requirements.

- Configure {% data variables.product.product_location %} to use {% data variables.product.prodname_actions %}. For more information, see "[Getting started with {% data variables.product.prodname_actions %} for GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)."
- Set up one or more {% data variables.product.prodname_actions %} self-hosted runners for {% data variables.product.prodname_dependabot %}. For more information, see "[Setting up self-hosted runners for {% data variables.product.prodname_dependabot %} updates](#setting-up-self-hosted-runners-for-dependabot-updates)" below.

Additionally, {% data variables.product.prodname_dependabot_security_updates %} rely on the dependency graph, vulnerability data from {% data variables.product.prodname_github_connect %}, and {% data variables.product.prodname_dependabot_alerts %}. These features must be enabled on {% data variables.product.product_location %}. For more information, see "[Enabling the dependency graph and  {% data variables.product.prodname_dependabot_alerts %} on your enterprise account](/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account)."

## Setting up self-hosted runners for {% data variables.product.prodname_dependabot %} updates

When you have configured {% data variables.product.product_location %} to use {% data variables.product.prodname_actions %}, you need to add self-hosted runners for {% data variables.product.prodname_dependabot %} updates. For more information, see "[Getting started with {% data variables.product.prodname_actions %} for GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)."

### System requirements for {% data variables.product.prodname_dependabot %} runners

Any VM that you use for {% data variables.product.prodname_dependabot %} runners must meet the requirements for self-hosted runners. In addition, they must meet the following requirements.

- Linux operating system
- Git installed
- Docker installed with access for the runner users:
  - We recommend installing Docker in rootless mode and configuring the runners to access Docker without `root` privileges.
  - Alternatively, install Docker and give the runner users raised privileges to run Docker.

The CPU and memory requirements will depend on the number of concurrent runners you deploy on a given VM. As guidance, we have successfully set up 20 runners on a single 2 CPU 8GB machine, but ultimately, your CPU and memory requirements will heavily depend on the repositories being updated. Some ecosystems will require more resources than others.

If you specify more than 14 concurrent runners on a VM, you must also update the Docker `/etc/docker/daemon.json` configuration to increase the default number of networks Docker can create.

```
{
  "default-address-pools": [
    {"base":"10.10.0.0/16","size":24}
  ]
}
```

### Network requirements for {% data variables.product.prodname_dependabot %} runners

{% data variables.product.prodname_dependabot %} runners require access to the public internet, {% data variables.product.prodname_dotcom_the_website %}, and any internal registries that will be used in {% data variables.product.prodname_dependabot %} updates. To minimize the risk to your internal network, you should limit access from the Virtual Machine (VM) to your internal network. This reduces the potential for damage to internal systems if a runner were to download a hijacked dependency.

### Adding self-hosted runners for {% data variables.product.prodname_dependabot %} updates

1. Provision self-hosted runners, at the repository, organization, or enterprise account level. For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)" and "[Adding self-hosted runners](/actions/hosting-your-own-runners/adding-self-hosted-runners)."

2. Set up the self-hosted runners with the requirements described above. For example, on a VM running Ubuntu 20.04 you would:

   - Verify that Git is installed: `command -v git`
   - Install Docker and ensure that the runner users have access to Docker. For more information, see the Docker documentation.
     - [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
     - Recommended approach: [Run the Docker daemon as a non-root user (Rootless mode)](https://docs.docker.com/engine/security/rootless/)
     - Alternative approach: [Manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
   - Verify that the runners have access to the public internet and can only access the internal networks that {% data variables.product.prodname_dependabot %} needs.

3. Assign a `dependabot` label to each runner you want {% data variables.product.prodname_dependabot %} to use. For more information, see "[Using labels with self-hosted runners](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners#assigning-a-label-to-a-self-hosted-runner)."

4. Optionally, enable workflows triggered by {% data variables.product.prodname_dependabot %} to use more than read-only permissions and to have access to any secrets that are normally available. For more information, see "[Troubleshooting {% data variables.product.prodname_actions %} for your enterprise](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#enabling-workflows-triggered-by-dependabot-access-to-dependabot-secrets-and-increased-permissions)."
