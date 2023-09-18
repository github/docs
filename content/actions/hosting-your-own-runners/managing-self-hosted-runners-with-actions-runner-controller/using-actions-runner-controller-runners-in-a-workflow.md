---
title: Using Actions Runner Controller runners in a workflow
shortTitle: Using ARC in a workflow
intro: 'You can use {% data variables.product.prodname_actions_runner_controller %} runners in a workflow file.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>= 3.9'
type: overview
topics:
  - Actions Runner Controller
defaultPlatform: linux
---

[Legal notice](#legal-notice)

## About using ARC runners in a workflow file

To assign jobs to run on a runner scale set, you can specify the name of the scale set as the value for the `runs-on` key in your {% data variables.product.prodname_actions %} workflow file.

For example, the following configuration for a runner scale set has the `INSTALLATION_NAME` value set to `arc-runner-set`.

```bash
# Using a {% data variables.product.pat_generic_title_case %} (PAT)
INSTALLATION_NAME="arc-runner-set"
NAMESPACE="arc-runners"
GITHUB_CONFIG_URL="https://github.com/<your_enterprise/org/repo>"
GITHUB_PAT="<PAT>"
helm install "${INSTALLATION_NAME}" \
    --namespace "${NAMESPACE}" \
    --create-namespace \
    --set githubConfigUrl="${GITHUB_CONFIG_URL}" \
    --set githubConfigSecret.github_token="${GITHUB_PAT}" \
    oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set
```

To use this configuration in a workflow, set the value of the `runs-on` key in your workflow to  `arc-runner-set`, similar to the following example.

```yaml
jobs:
  job_name:
    runs-on: arc-runner-set
```

## Using runner scale set names

Runner scale set names are unique within the runner group they belong to. To deploy multiple runner scale sets with the same name, they must belong to different runner groups. For more information about specifying runner scale set names, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/deploying-runner-scale-sets-with-actions-runner-controller)."

{% data reusables.actions.actions-runner-controller-labels %} For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/deploying-runner-scale-sets-with-actions-runner-controller#scaling-runners)."

## Legal notice

{% data reusables.actions.actions-runner-controller-legal-notice %}
