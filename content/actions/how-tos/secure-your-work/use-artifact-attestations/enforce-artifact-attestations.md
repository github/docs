---
title: Enforcing artifact attestations with a Kubernetes admission controller
intro: Use an admission controller to enforce artifact attestations in your Kubernetes cluster.
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Enforce artifact attestations
redirect_from:
  - /actions/security-guides/enforcing-artifact-attestations-with-a-kubernetes-admission-controller
  - /actions/security-for-github-actions/using-artifact-attestations/enforcing-artifact-attestations-with-a-kubernetes-admission-controller
  - /actions/how-tos/security-for-github-actions/using-artifact-attestations/enforcing-artifact-attestations-with-a-kubernetes-admission-controller
---

>[!NOTE] Before proceeding, ensure you have enabled build provenance for container images, including setting the `push-to-registry` attribute in the [`attest-build-provenance` action](https://github.com/actions/attest-build-provenance) as documented in [Generating build provenance for container images](/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds#generating-build-provenance-for-container-images). This is required for the Policy Controller to verify the attestation.

## Getting started with Kubernetes admission controller

To set up an admission controller for enforcing GitHub artifact attestations, you need to:

1. [Deploy the Sigstore Policy Controller](#deploy-the-sigstore-policy-controller).
1. [Add the GitHub `TrustRoot` and a `ClusterImagePolicy` to your cluster](#add-the-github-trustroot-and-a-clusterimagepolicy).
1. [Enable the policy in your namespace](#enable-the-policy-in-your-namespace).

### Deploy the Sigstore Policy Controller

We have packaged the Sigstore Policy Controller as a [GitHub distributed Helm chart](https://github.com/github/artifact-attestations-helm-charts). Before you begin, ensure you have the following prerequisites:

* A Kubernetes cluster with version 1.27 or later
* [Helm](https://helm.sh/docs/intro/install/) 3.0 or later
* [kubectl](https://kubernetes.io/docs/tasks/tools/)

First, install the Helm chart that deploys the Sigstore Policy Controller:

```bash copy
helm upgrade policy-controller --install --atomic \
  --create-namespace --namespace artifact-attestations \
  oci://ghcr.io/github/artifact-attestations-helm-charts/policy-controller \
  --version v0.12.0-github12
```

This installs the Policy Controller into the `artifact-attestations` namespace. At this point, no policies have been configured, and it will not enforce any attestations.

### Add the GitHub `TrustRoot` and a `ClusterImagePolicy`

Once the policy controller has been deployed, you need to add the GitHub `TrustRoot` and a `ClusterImagePolicy` to your cluster. Use the Helm chart we provide to do this. Make sure to replace `MY-ORGANIZATION` with your GitHub organization's name (e.g., `github` or `octocat-inc`).

```bash copy
helm upgrade trust-policies --install --atomic \
 --namespace artifact-attestations \
 oci://ghcr.io/github/artifact-attestations-helm-charts/trust-policies \
 --version v0.6.2 \
 --set policy.enabled=true \
 --set policy.organization=MY-ORGANIZATION
```

You've now installed the GitHub trust root, and an artifact attestation policy into your cluster. This policy will reject artifacts that have not originated from within your GitHub organization.

### Enable the policy in your namespace

> [!WARNING]
> This policy will not be enforced until you specify which namespaces it should apply to.

Each namespace in your cluster can independently enforce policies. To enable enforcement in a namespace, you can add the following label to the namespace:

```yaml
metadata:
  labels:
    policy.sigstore.dev/include: "true"
```

After the label is added, the GitHub artifact attestation policy will be enforced in the namespace.

Alternatively, you may run:

```bash copy
kubectl label namespace MY-NAMESPACE policy.sigstore.dev/include=true
```

### Matching images

By default, the policy installed with the `trust-policies` Helm chart will verify attestations for all images before admitting them into the cluster. If you only intend to enforce attestations for a subset of images, you can use the Helm values `policy.images` and `policy.exemptImages` to specify a list of images to match against. These values can be set to a list of glob patterns that match the image names. The globbing syntax uses Go [filepath](https://pkg.go.dev/path/filepath#Match) semantics, with the addition of `**` to match any character sequence, including slashes.

For example, to enforce attestations for images that match the pattern `ghcr.io/MY-ORGANIZATION/*` and admit `busybox` without a valid attestation, you can run:

```bash copy
helm upgrade trust-policies --install --atomic \
 --namespace artifact-attestations \
 oci://ghcr.io/github/artifact-attestations-helm-charts/trust-policies \
 --version v0.6.2 \
 --set policy.enabled=true \
 --set policy.organization=MY-ORGANIZATION \
 --set-json 'policy.exemptImages=["index.docker.io/library/busybox**"]' \
 --set-json 'policy.images=["ghcr.io/MY-ORGANIZATION/**"]'
 ```

All patterns must use the fully-qualified name, even if the images originate from Docker Hub. In this example, if we want to exempt the image `busybox`, we must provide the full name including the domain and double-star glob to match all image versions: `index.docker.io/library/busybox**`.

Note that any image you intend to admit _must_ have a matching glob pattern in the `policy.images` list. If an image does not match any pattern, it will be rejected. Additionally, if an image matches both `policy.images` and `policy.exemptImages`, it will be rejected.

{% ifversion ghec %}

If your GitHub Enterprise account has a subdomain on {% data variables.enterprise.data_residency_site %}, you must specify a value for the GitHub trust domain. This value is used to fetch the trusted materials associated with the data residency region that hosts your GitHub Enterprise account. This value can be found by logging into your enterprise account with the `gh` CLI tool and running the following command:

```bash copy
gh api meta --jq .domains.artifact_attestations.trust_domain
```

This value must be added when installing the `trust-policies` chart, like so:

```bash copy
--set-json 'policy.trust.githubTrustDomain="YOUR-GHEC-TRUST-DOMAIN"'
```

{% endif %}

### Advanced usage

To see the full set of options you may configure with the Helm chart, you can run either of the following commands.
For policy controller options:

```bash copy
helm show values oci://ghcr.io/github/artifact-attestations-helm-charts/policy-controller --version v0.12.0-github12
```

For trust policy options:

```bash copy
helm show values oci://ghcr.io/github/artifact-attestations-helm-charts/trust-policies --version v0.6.2
```

For more information on the Sigstore Policy Controller, see the [Sigstore Policy Controller documentation](https://docs.sigstore.dev/policy-controller/overview/).
