---
title: Quickstart for Actions Runner Controller
shortTitle: Quickstart
intro: 'Try out {% data variables.product.prodname_actions_runner_controller %} in 5 minutes.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>= 3.9'
type: quick_start
topics:
  - Actions Runner Controller
defaultPlatform: linux
---

[Legal notice](#legal-notice)

## Introduction

{% data reusables.actions.actions-runner-controller-about-arc %}

You can set up ARC on Kubernetes using Helm, then create and run a workflow that uses runner scale sets. For more information about runner scale sets, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/deploying-runner-scale-sets-with-actions-runner-controller#runner-scale-set)."

## Prerequisites

In order to use ARC, ensure you have the following.

* A Kubernetes cluster
  * For a managed cloud environment, you can use AKS. For more information, see [Azure Kubernetes Service](https://azure.microsoft.com/en-us/products/kubernetes-service) in the Azure documentation.
  * For a local setup, you can use minikube or kind. For more information, see [minikube start](https://minikube.sigs.k8s.io/docs/start/) in the minikube documentation and [kind](https://kind.sigs.k8s.io/) in the kind documentation.

    {% note %}

    **Note:** OpenShift clusters are currently unsupported.

    {% endnote %}

* Helm 3
  * For more information, see [Installing Helm](https://helm.sh/docs/intro/install/) in the Helm documentation.
* While it is not required for ARC to be deployed, we recommend ensuring you have implemented a way to collect and retain logs from the controller, listeners, and ephemeral runners before deploying ARC in production workflows.

## Installing Actions Runner Controller

1. To install the operator and the custom resource definitions (CRDs) in your cluster, do the following.
    1. In your Helm chart, update the `NAMESPACE` value to the location you want your operator pods to be created. This namespace must allow access to the Kubernetes API server.
    1. Install the Helm chart.

    The following example installs the latest version of the chart. To install a specific version, you can pass the `--version` argument along with the version of the chart you wish to install. You can find the list of releases in the [GitHub Container Registry](https://github.com/actions/actions-runner-controller/pkgs/container/actions-runner-controller-charts%2Fgha-runner-scale-set-controller).

    ```bash copy
    NAMESPACE="arc-systems"
    helm install arc \
        --namespace "{% raw %}${NAMESPACE}{% endraw %}" \
        --create-namespace \
        oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set-controller
    ```

    For additional Helm configuration options, see [`values.yaml`](https://github.com/actions/actions-runner-controller/blob/master/charts/gha-runner-scale-set-controller/values.yaml) in the ARC documentation.

1. To enable ARC to authenticate to {% data variables.product.company_short %}, generate a {% data variables.product.pat_v1 %}. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/authenticating-to-the-github-api#deploying-using-personal-access-token-classic-authentication).

## Configuring a runner scale set

1. To configure your runner scale set, run the following command in your terminal, using values from your ARC configuration.

    When you run the command, keep the following in mind.

    * Update the `INSTALLATION_NAME` value carefully. You will use the installation name as the value of `runs-on` in your workflows. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idruns-on)."
    * Update the `NAMESPACE` value to the location you want the runner pods to be created.
    * Set `GITHUB_CONFIG_URL` to the URL of your repository, organization, or enterprise. This is the entity that the runners will belong to.
    * This example command installs the latest version of the Helm chart. To install a specific version, you can pass the `--version` argument with the version of the chart you wish to install. You can find the list of releases in the [GitHub Container Registry](https://github.com/actions/actions-runner-controller/pkgs/container/actions-runner-controller-charts%2Fgha-runner-scale-set).

        {% note %}

        **Note:**
        * {% data reusables.actions.actions-runner-controller-security-practices-namespace %}
        * {% data reusables.actions.actions-runner-controller-security-practices-secret %} For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/deploying-runner-scale-sets-with-actions-runner-controller)."

        {% endnote %}

        ```bash copy
        INSTALLATION_NAME="arc-runner-set"
        NAMESPACE="arc-runners"
        GITHUB_CONFIG_URL="https://github.com/<your_enterprise/org/repo>"
        GITHUB_PAT="<PAT>"
        helm install "{% raw %}${INSTALLATION_NAME}{% endraw %}" \
            --namespace "{% raw %}${NAMESPACE}{% endraw %}" \
            --create-namespace \
            --set githubConfigUrl="{% raw %}${GITHUB_CONFIG_URL}{% endraw %}" \
            --set githubConfigSecret.github_token="{% raw %}${GITHUB_PAT}{% endraw %}" \
            oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set
        ```

        For additional Helm configuration options, see [`values.yaml`](https://github.com/actions/actions-runner-controller/blob/master/charts/gha-runner-scale-set/values.yaml) in the ARC documentation.

1. From your terminal, run the following command to check your installation.

    ```bash copy
    helm list -A
    ```

    You should see an output similar to the following.

    ```bash
    NAME            NAMESPACE       REVISION        UPDATED                                 STATUS          CHART                                       APP VERSION
    arc             arc-systems     1               2023-04-12 11:45:59.152090536 +0000 UTC deployed        gha-runner-scale-set-controller-0.4.0       0.4.0
    arc-runner-set  arc-runners     1               2023-04-12 11:46:13.451041354 +0000 UTC deployed        gha-runner-scale-set-0.4.0                  0.4.0
    ```

1. To check the manager pod, run the following command in your terminal.

    ```bash copy
    kubectl get pods -n arc-systems
    ```

    If everything was installed successfully, the status of the pods shows as **Running**.

    ```bash
    NAME                                                   READY   STATUS    RESTARTS   AGE
    arc-gha-runner-scale-set-controller-594cdc976f-m7cjs   1/1     Running   0          64s
    arc-runner-set-754b578d-listener                       1/1     Running   0          12s
    ```

If your installation was not successful, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/troubleshooting-actions-runner-controller-errors)" for troubleshooting information.

## Using runner scale sets

Now you will create and run a simple test workflow that uses the runner scale set runners.

1. In a repository, create a workflow similar to the following example. The `runs-on` value should match the Helm installation name you used when you installed the autoscaling runner set.

    For more information on adding workflows to a repository, see "[AUTOTITLE](/actions/quickstart#creating-your-first-workflow)."

    ```yaml copy
    name: Actions Runner Controller Demo
    on:
      workflow_dispatch:

    jobs:
      Explore-GitHub-Actions:
        # You need to use the INSTALLATION_NAME from the previous step
        runs-on: arc-runner-set
        steps:
        - run: echo "🎉 This job uses runner scale set runners!"
    ```

1. Once you've added the workflow to your repository, manually trigger the workflow. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/manually-running-a-workflow)."

1. To view the runner pods being created while the workflow is running, run the following command from your terminal.

    ```bash copy
    kubectl get pods -n arc-runners
    ```

    A successful output will look similar to the following.

    ```bash
    NAMESPACE     NAME                                                  READY   STATUS    RESTARTS      AGE
    arc-runners   arc-runner-set-rmrgw-runner-p9p5n                     1/1     Running   0             21s
    ```

## Next steps

{% data variables.product.prodname_actions_runner_controller %} can help you efficiently manage your {% data variables.product.prodname_actions %} runners. Ready to get started? Here are some helpful resources for taking your next steps with ARC:

* For detailed authentication information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/authenticating-to-the-github-api)."
* For help using ARC runners in your workflows, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/using-actions-runner-controller-runners-in-a-workflow)."
* For deployment information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/deploying-runner-scale-sets-with-actions-runner-controller)."

## Legal notice

{% data reusables.actions.actions-runner-controller-legal-notice %}
