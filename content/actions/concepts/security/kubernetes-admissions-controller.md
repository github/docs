---
title: Kubernetes admissions controller
intro: Understand how you can use an admissions controller to enforce artifact attestations in your Kubernetes cluster.
versions:
  fpt: '*'
  ghec: '*'
---

## About Kubernetes admission controller

[Artifact attestations](/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds) enable you to create unfalsifiable provenance and integrity guarantees for the software you build. In turn, people who consume your software can verify where and how your software was built.

Kubernetes admission controllers are plugins that govern the behavior of the Kubernetes API server. They are commonly used to enforce security policies and best practices in a Kubernetes cluster.

Using the open source [Sigstore Policy Controller](https://docs.sigstore.dev/policy-controller/overview/) project you can add an admission controller to your Kubernetes cluster that can enforce artifact attestations. This way, you can ensure that only artifacts with valid attestations can be deployed.

To [install the controller](/actions/how-tos/security-for-github-actions/using-artifact-attestations/enforcing-artifact-attestations-with-a-kubernetes-admission-controller), we offer [two Helm charts](https://github.com/github/artifact-attestations-helm-charts): one for deploying the Sigstore Policy Controller, and another for loading the GitHub trust root and a default policy.

### About image verification

When the Policy Controller is installed, it will intercept all image pull requests and verify the attestation for the image. The attestation must be stored in the image registry as an [OCI attached artifact](https://oras.land/docs/concepts/reftypes/) containing a [Sigstore Bundle](https://docs.sigstore.dev/about/bundle/) which contains the attestation and cryptographic material (e.g. certificates and signatures) used to verify the attestation. A verification process is then performed that ensures the image was built with the specified build provenance and matches any policies enabled by the cluster administrator.

In order for an image to be verifiable, it must have a valid provenance attestation in the registry, which can be done by enabling the `push-to-registry: true` attribute in the `actions/attest-build-provenance` action. See [Generating build provenance for container images](/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds#generating-build-provenance-for-container-images) for more details on how to generate attestations for container images.

### About trust roots and policies

The Sigstore Policy Controller is primarily configured with trust roots and policies, represented by the Custom Resources `TrustRoot` and `ClusterImagePolicy`. A `TrustRoot` represents a trusted distribution channel for the public key material used to verify attestations. A `ClusterImagePolicy` represents a policy for enforcing attestations on images.

A `TrustRoot` may also contain a [TUF](https://theupdateframework.io/) repository root, making it possible for your cluster to continuously and securely receive updates to its trusted public key material. If left unspecified, a `ClusterImagePolicy` will by default use the open source Sigstore Public Good Instance's key material. When verifying attestations generated for private repositories, the `ClusterImagePolicy` must reference the GitHub `TrustRoot`.

## Next steps

When you're ready to use an admission controller, see [AUTOTITLE](/actions/how-tos/security-for-github-actions/using-artifact-attestations/enforcing-artifact-attestations-with-a-kubernetes-admission-controller).
