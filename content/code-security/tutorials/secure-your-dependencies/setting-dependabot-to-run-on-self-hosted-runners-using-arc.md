---
title: Setting up Dependabot to run on self-hosted action runners using the Actions Runner Controller
intro: You can configure the {% data variables.product.prodname_actions_runner_controller %} to run {% data variables.product.prodname_dependabot %} on self-hosted runners.
versions:
  feature: dependabot-arc-support
permissions: '{% data reusables.permissions.dependabot-various-tasks %}'
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Security updates
  - Dependencies
  - Pull requests
contentType: tutorials
allowTitleToDifferFromFilename: true
shortTitle: Configure ARC
redirect_from:
  - /code-security/dependabot/working-with-dependabot/setting-dependabot-to-run-on-self-hosted-runners-using-arc
---

## Working with the {% data variables.product.prodname_actions_runner_controller %} (ARC)

This article provides step-by-step instructions for setting up ARC on a Kubernetes cluster and configuring {% data variables.product.prodname_dependabot %} to run on self-hosted action runners. The article:

* Contains an overview of the ARC and {% data variables.product.prodname_dependabot %} integration.
* Provides detailed installation and configuration steps using helm scripts.

## What is ARC?

The {% data variables.product.prodname_actions_runner_controller %} is a Kubernetes controller that manages self-hosted {% data variables.product.prodname_actions %} as Kubernetes pods. It allows you to dynamically scale and orchestrate runners based on your workflows, providing better resource utilization and integration with Kubernetes environments. See [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller).

## {% data variables.product.prodname_dependabot %} on ARC

You can run {% data variables.product.prodname_dependabot %} on self-hosted {% data variables.product.prodname_actions %} runners managed within a Kubernetes cluster via ARC. This enables auto-scaling, workload isolation, and better resource management for {% data variables.product.prodname_dependabot %} jobs, ensuring that dependency updates can run efficiently within an organization's controlled infrastructure while integrating seamlessly with {% data variables.product.prodname_actions %}.

## Setting up ARC for {% data variables.product.prodname_dependabot %} on your Local environment

### Prerequisites

* A Kubernetes cluster
  * For a managed cloud environment, you can use Azure Kubernetes Service (AKS).
  * For a local setup, you can use minikube.
* Helm
  * A package manager for Kubernetes.

### Setting up ARC

1. Install ARC. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/quickstart-for-actions-runner-controller).
1. Create a work directory for the ARC setup and create a shell script file (for example, `helm_install_arc.sh`) to install the latest ARC version.

    ```bash copy
        mkdir ARC
        touch helm_install_arc.sh
        chmod 755 helm_install_arc.sh
    ```

1. Edit `helm_install_arc.sh` with this bash script for installing ARC.

   ```text copy
   NAMESPACE="arc-systems"
   helm install arc \
       --namespace "${NAMESPACE}" \
       --create-namespace \
       oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set-controller
   ```

1. Execute the `helm_install_arc.sh` script file.

   ```bash
   ./helm_install_arc.sh
   ```

1. Now, you need to configure the runner scale set. For this, let's start by creating and editing a file with the following bash script.

   ```bash copy
   touch arc-runner-set.sh
   chmod 755 arc-runner-set.sh
   ```

   ```text copy
   INSTALLATION_NAME="dependabot"
   NAMESPACE="arc-runners"
   GITHUB_CONFIG_URL=REPO_URL
   GITHUB_PAT=PAT
   helm install "${INSTALLATION_NAME}" \
       --namespace "${NAMESPACE}" \
       --create-namespace \
       --set githubConfigUrl="${GITHUB_CONFIG_URL}" \
       --set githubConfigSecret.github_token="${GITHUB_PAT}" \
       --set containerMode.type="dind" \
       oci://ghcr.io/actions/actions-runner-controller-charts/gha-runner-scale-set
   ```

1. Execute the `arc-runner-set.sh` script file.

   ```bash copy
   ./arc-runner-set.sh
   ```

> [!NOTE]
>
> * The installation name of the runner scale set has to be `dependabot` in order to target the dependabot job to the runner.
> * The `containerMode.type="dind"` configuration is required to allow the runner to connect to the Docker daemon.
> * If an organization-level or enterprise-level runner is created, then the appropriate scopes should be provided to the {% data variables.product.pat_generic_title_case %} (PAT).
> * A {% data variables.product.pat_v1 %} (PAT) can be created. The token should have the following scopes based on whether you are creating a repository, organization or enterprise level runner scale set.
>   * Repository level: **repo**
>   * Organization level: **admin:org**
>   * Enterprise level: **admin:enterprise**\
>   For information about creating a {% data variables.product.pat_v1 %}, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

### Adding runner groups

Runner groups are used to control which organizations or repositories have access to runner scale sets. To add a runner scale set to a runner group, you must already have a runner group created.

For information about creating runner groups, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization).

Don't forget to add the following setting to the runner scale set configuration in the helm chart.

   ```text copy
   --set runnerGroup="<Runner group name>" \
   ```

### Checking your installation

1. Check your installation.

    ```bash copy
    helm list -A
    ```

    Output:

    ```text
    ➜  ARC git:(master) ✗ helm list -A
        NAME           NAMESPACE   REVISION UPDATED                              STATUS   CHART                                  APP VERSION
        arc            arc-systems 1        2025-04-11 14:41:53.70893 -0500 CDT  deployed gha-runner-scale-set-controller-0.11.0 0.11.0
        arc-runner-set arc-runners 1        2025-04-11 15:08:12.58119 -0500 CDT  deployed gha-runner-scale-set-0.11.0            0.11.0
        dependabot     arc-runners 1        2025-04-16 21:53:40.080772 -0500 CDT deployed gha-runner-scale-set-0.11.0
    ```

1. Check the manager pod using this command.

    ```bash copy
    kubectl get pods -n arc-systems
    ```

    Output:

    ```text
    ➜  ARC git:(master) ✗ kubectl get pods -n arc-systems

    NAME                                    READY   STATUS    RESTARTS      AGE
    arc-gha-rs-controller-57c67d4c7-zjmw2   1/1     Running   8 (36h ago)   6d9h
    arc-runner-set-754b578d-listener        1/1     Running   0             11h
    dependabot-754b578d-listener            1/1     Running   0             14h
    ```

### Setting up {% data variables.product.prodname_dependabot %}

{% ifversion fpt or ghec %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}

1. Under "{% data variables.product.prodname_dependabot %}", scroll to "{% data variables.product.prodname_dependabot %} on Action Runners", and select **Enable** for "{% data variables.product.prodname_dependabot %} on self-hosted runners".

{% elsif ghes %}

1. Create an organization on {% data variables.product.prodname_ghe_server %}. For more information, see [AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).
1. Create a runner group. See [Adding runner groups](#adding-runner-groups).
1. Enable the dependency graph from the {% data variables.enterprise.management_console %}. See [AUTOTITLE](/admin/managing-code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise#enabling-the-dependency-graph-via-the-management-console).
1. Enable {% data variables.product.prodname_github_connect %} for your enterprise. See [AUTOTITLE](/admin/configuring-settings/configuring-github-connect/enabling-github-connect-for-githubcom#enabling-github-connect).
1. Enable {% data variables.product.prodname_dependabot_alerts %} for the enterprise. See [AUTOTITLE](/admin/configuring-settings/configuring-github-connect/enabling-dependabot-for-your-enterprise#enabling-dependabot-alerts).

{% endif %}

## Triggering a {% data variables.product.prodname_dependabot %} run

Now that you've set up ARC, you can start a {% data variables.product.prodname_dependabot %} run.

{% data reusables.dependabot.trigger-run %}

## Viewing the generated ARC runners

You can view the ARC runners that have been created for the {% data variables.product.prodname_dependabot %} job.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}

1. On the left sidebar, click **Runners**.
1. Under "Runners", click **Self-hosted runners** to view the list of all the runners available in the repository. You can see the ephemeral dependabot runner that has been created.
   ![Screenshot showing a dependabot runner in the list of available runners. The runner is highlighted with an orange outline.](/assets/images/help/dependabot/dependabot-self-hosted-runner.png)

   You can also view the same dependabot runner pod created in your kubernetes cluster from the terminal by executing this command.

   ```text copy
   ➜  ARC git:(master) ✗ kubectl get pods -n arc-runners
       NAME                            READY   STATUS    RESTARTS   AGE
       dependabot-sw8zn-runner-4mbc7   2/2     Running   0          46s
   ```

Additionally, you can verify:

* The logs, by checking the runner and machine name. See [AUTOTITLE](/code-security/dependabot/troubleshooting-dependabot/viewing-dependabot-job-logs).

  ![Example of log for a dependabot self hosted runner.](/assets/images/help/dependabot/dependabot-self-hosted-runner-log.png)

* The version update pull requests created by the dependabot job in the **Pull requests** tab of the repository.
