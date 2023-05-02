---
title: About Actions Runner Controller
shortTitle: About ARC
intro: 'You can host your own runners and customize the environment used to run jobs in your {% data variables.product.prodname_actions %} workflows.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>= 3.9'
type: overview
topics:
  - Actions Runner Controller
---

{% data reusables.actions.actions-runner-controller-beta %}

[Legal notice](#legal-notice)

## About {% data variables.product.prodname_actions_runner_controller %}

{% data reusables.actions.actions-runner-controller-about-arc %}

## {% data variables.product.prodname_actions_runner_controller %} components

ARC consists of a set of custom resources. An ARC deployment applies these custom resources onto a Kubernetes cluster. Once applied, it creates a set of Pods that contain your self-hosted runners' containers. With ARC, {% data variables.product.company_short %} can treat these runner containers as self-hosted runners and allocate jobs to them as needed.

### About custom resources

ARC consists of several custom resource definitions (CRDs). For more information on custom resources, see [Custom Resources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) in the Kubernetes documentation. You can find the list of custom resource definitions used for ARC in the following API schema definitions.

- [actions.github.com/v1alpha1](https://pkg.go.dev/github.com/actions/actions-runner-controller/apis/actions.github.com/v1alpha1)
- [actions.summerwind.net/v1alpha1](https://pkg.go.dev/github.com/actions/actions-runner-controller/apis/actions.summerwind.net/v1alpha1)

Because custom resources are extensions of the Kubernetes API, they won't be available in a default Kubernetes installation. You will need to install these custom resources to use ARC. For more information on installing custom resources, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/quickstart-for-actions-runner-controller)."

Once the custom resources are installed, you can deploy ARC into your Kubernetes cluster. For information about deploying ARC, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/deploying-runner-scale-sets-with-actions-runner-controller)."

### About the runner container image

{% data variables.product.company_short %} maintains a [minimal runner container image](https://github.com/actions/runner/pkgs/container/actions-runner). A new image will be published with every runner binaries release. The most recent image will have the runner binaries version and `latest` as tags.

This image contains the least amount of packages necessary for the container runtime and the runner binaries. To install additional software, you can create your own runner image. You can use ARC's runner image as a base, or use the corresponding setup actions. For instance, `actions/setup-java` for Java or `actions/setup-node` for Node.

You can find the definition of ARC's runner image in [this Dockerfile](https://github.com/actions/runner/blob/main/images/Dockerfile) and the definition of the base image in [this Dockerfile](https://github.com/dotnet/dotnet-docker/blob/main/src/runtime-deps/6.0/bullseye-slim/amd64/Dockerfile).

#### Creating your own runner image

You can create your own runner image that meets your requirements. Your runner image must fulfill the following conditions.

- Use a base image that can run the self-hosted runner application. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)."
- The [runner binary](https://github.com/actions/runner/releases) must be placed placed under `/home/runner/` and launched using `/home/runner/run.sh`.
- If you use Kubernetes mode, the [runner container hooks](https://github.com/actions/runner-container-hooks/releases) must be placed under `/home/runner/k8s`.

You can use the following example Dockerfile to start creating your own runner image.

```Dockerfile{:copy}
FROM mcr.microsoft.com/dotnet/runtime-deps:6.0 as build

# Replace value with the latest runner release version
# source: https://github.com/actions/runner/releases
# ex: 2.303.0
ARG RUNNER_VERSION=""
ARG RUNNER_ARCH="x64"
# Replace value with the latest runner-container-hooks release version
# source: https://github.com/actions/runner-container-hooks/releases
# ex: 0.3.1
ARG RUNNER_CONTAINER_HOOKS_VERSION=""

ENV DEBIAN_FRONTEND=noninteractive
ENV RUNNER_MANUALLY_TRAP_SIG=1
ENV ACTIONS_RUNNER_PRINT_LOG_TO_STDOUT=1

RUN apt update -y && apt install curl unzip -y

RUN adduser --disabled-password --gecos "" --uid 1001 runner \
    && groupadd docker --gid 123 \
    && usermod -aG sudo runner \
    && usermod -aG docker runner \
    && echo "%sudo   ALL=(ALL:ALL) NOPASSWD:ALL" > /etc/sudoers \
    && echo "Defaults env_keep += \"DEBIAN_FRONTEND\"" >> /etc/sudoers

WORKDIR /home/runner

RUN curl -f -L -o runner.tar.gz https://github.com/actions/runner/releases/download/v${RUNNER_VERSION}/actions-runner-linux-${RUNNER_ARCH}-${RUNNER_VERSION}.tar.gz \
    && tar xzf ./runner.tar.gz \
    && rm runner.tar.gz

RUN curl -f -L -o runner-container-hooks.zip https://github.com/actions/runner-container-hooks/releases/download/v${RUNNER_CONTAINER_HOOKS_VERSION}/actions-runner-hooks-k8s-${RUNNER_CONTAINER_HOOKS_VERSION}.zip \
    && unzip ./runner-container-hooks.zip -d ./k8s \
    && rm runner-container-hooks.zip

USER runner
```

## Executing workflows

After installation and configuration are complete, you can use ARC to execute workflow runs. A workflow can be created in the same repository that can target a self hosted runner created by ARC. For more information about targeting workflows to run on self-hosted runners, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-self-hosted-runners-in-a-workflow)."

### Using ARC runners in a workflow

{% data reusables.actions.actions-runner-controller-labels %} For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/using-actions-runner-controller-runners-in-a-workflow)."

## Scaling runners

You can scale runners statically or dynamically depending on your needs. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/deploying-runner-scale-sets-with-actions-runner-controller#scaling-runners)."

## Software installed in the ARC runner image

The ARC [runner image](https://github.com/actions/runner/pkgs/container/actions-runner) is bundled with the following software:

- [Runner binaries](https://github.com/actions/runner)
- [Runner container hooks](https://github.com/actions/runner-container-hooks)
- Docker (required for Docker-in-Docker mode)

For more information, see [ARC's runner image Dockerfile](https://github.com/actions/runner/blob/main/images/Dockerfile) in the Actions repository.

## Legal notice

{% data reusables.actions.actions-runner-controller-legal-notice %}
