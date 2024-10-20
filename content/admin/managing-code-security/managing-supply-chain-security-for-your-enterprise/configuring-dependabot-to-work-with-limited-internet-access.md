---
title: Configuring Dependabot to work with limited internet access
intro: 'You can configure {% data variables.product.prodname_dependabot %} to generate pull requests for version and security updates using private registries when {% data variables.product.prodname_ghe_server %} has limited, or no, internet access.'
versions:
  feature: dependabot-ghes-no-public-internet
type: how_to
topics:
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
shortTitle: Limited internet access
redirect_from:
  - /admin/code-security/managing-supply-chain-security-for-your-enterprise/configuring-dependabot-to-work-with-limited-internet-access
---

## About {% data variables.product.prodname_dependabot %} updates

You can use {% data variables.product.prodname_dependabot_updates %} to fix vulnerabilities and keep dependencies updated to the latest version in {% data variables.product.prodname_ghe_server %}. {% data variables.product.prodname_dependabot_updates %} require {% data variables.product.prodname_actions %} with self-hosted runners set up for {% data variables.product.prodname_dependabot %} to use. {% data variables.product.prodname_dependabot %} alerts and security updates use information from the {% data variables.product.prodname_advisory_database %} accessed using {% data variables.product.prodname_github_connect %}. For more information, see "[AUTOTITLE](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)" and "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."

{% data reusables.dependabot.private-registry-support %} Alternatively, if your instance has limited or no internet access, you can configure {% data variables.product.prodname_dependabot %} to use only private registries as a source for security and version updates. For information on which ecosystems are supported as private registries, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/removing-dependabot-access-to-public-registries#about-configuring-dependabot-to-only-access-private-registries)."

The instructions below assume that you need to set up {% data variables.product.prodname_dependabot %} runners with the following limitations.
* No internet access.
* Access to limited internal resources, such as private registries for {% data variables.product.prodname_dependabot %}.

## Restricting internet access for {% data variables.product.prodname_dependabot %} runners

Before configuring {% data variables.product.prodname_dependabot %}, install Docker on your self-hosted runner. For more information, see "[AUTOTITLE](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates#configuring-self-hosted-runners-for-dependabot-updates)."

1. On {% data variables.product.prodname_ghe_server %}, navigate to the `github/dependabot-action` repository and retrieve information about the `dependabot-updater` and `dependabot-proxy` container images from the `containers.json` file.

   Each release of {% data variables.product.product_name %} includes an updated `containers.json` file at: `https://HOSTNAME/github/dependabot-action/blob/ghes-VERSION/docker/containers.json`. You can see the {% data variables.product.prodname_dotcom_the_website %} version of the file at: [containers.json](https://github.com/github/dependabot-action/blob/main/docker/containers.json).

1. Preload all the container images from the {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_container_registry %} onto the {% data variables.product.prodname_dependabot %} runner using the `docker pull` command. {% ifversion ghes %}Alternatively, preload the `dependabot-proxy` image and then preload only the container images for the ecosystems you require.

   For example, to support npm and {% data variables.product.prodname_actions %} you could use the following commands, copying details of the images to load from the `containers.json` file to ensure that you have the correct version and SHA for each image.

   ```shell
   docker pull ghcr.io/github/dependabot-update-job-proxy/dependabot-update-job-proxy:VERSION@SHA
   docker pull ghcr.io/dependabot/dependabot-updater-github-actions:VERSION@SHA
   docker pull ghcr.io/dependabot/dependabot-updater-npm:VERSION@SHA
   ```

   {%- endif %}

   {% note %}

   **Note:** You will need to repeat this step when you upgrade to a new minor version of {% data variables.product.product_name %}, or if you manually update the {% data variables.product.prodname_dependabot %} action from {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[AUTOTITLE](/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)."

   {% endnote %}

1. When you have finished adding these images to the runner, you are ready to restrict internet access to the {% data variables.product.prodname_dependabot %} runner, ensuring that it can still access your private registries for the required ecosystems and for {% data variables.product.prodname_ghe_server %}.

   You must add the images first because {% data variables.product.prodname_dependabot %} runners pull `dependabot-updater` and `dependabot-proxy` from the {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_container_registry %} when {% data variables.product.prodname_dependabot %} jobs start running.

## Verifying the configuration of {% data variables.product.prodname_dependabot %} runners

1. For a test repository, configure {% data variables.product.prodname_dependabot %} to access private registries and remove access to public registries. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot)" and "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/removing-dependabot-access-to-public-registries)."
1. In the **Insights** tab for the repository, click **Dependency graph** to display details of the dependencies.
1. Click **{% data variables.product.prodname_dependabot %}** to display the ecosystems configured for version updates.
1. For ecosystems that you want to test, click **Last checked TIME ago** to display the "Update logs" view.
1. Click **Check for updates** to check for new updates to dependencies for that ecosystem.

When the check for updates is complete, you should check the "Update logs" view to verify that {% data variables.product.prodname_dependabot %} accessed the configured private registries on your instance to check for version updates.

After you have verified that the configuration is correct, ask repository administrators to update their {% data variables.product.prodname_dependabot %} configurations to use private registries only. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/removing-dependabot-access-to-public-registries)."
