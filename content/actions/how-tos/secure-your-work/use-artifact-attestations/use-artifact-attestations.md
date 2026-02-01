---
title: Using artifact attestations to establish provenance for builds
intro: Artifact attestations enable you to increase the supply chain security of your builds by establishing where and how your software was built.
product: '{% data reusables.gated-features.attestations %}'
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Use artifact attestations
redirect_from:
  - /actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds
  - /actions/security-for-github-actions/using-artifact-attestations/using-artifact-attestations-to-establish-provenance-for-builds
  - /actions/how-tos/security-for-github-actions/using-artifact-attestations/using-artifact-attestations-to-establish-provenance-for-builds
---

## Prerequisites

Before you start generating artifact attestations, you need to understand what they are and when you should use them. See [AUTOTITLE](/actions/concepts/security/artifact-attestations).

## Generating artifact attestations for your builds

You can use {% data variables.product.prodname_actions %} to generate artifact attestations that establish build provenance for artifacts such as binaries and container images.

To generate an artifact attestation, you must:

* Ensure you have the appropriate permissions configured in your workflow.
* Include a step in your workflow that uses the [`attest-build-provenance` action](https://github.com/actions/attest-build-provenance).

When you run your updated workflows, they will build your artifacts and generate an artifact attestation that establishes build provenance. You can view attestations in your repository's **Actions** tab. For more information, see the [`attest-build-provenance`](https://github.com/actions/attest-build-provenance) repository.

### Generating build provenance for binaries

1. In the workflow that builds the binary you would like to attest, add the following permissions.

   ```yaml
   permissions:
     id-token: write
     contents: read
     attestations: write
   ```

1. After the step where the binary has been built, add the following step.

   ```yaml
   - name: Generate artifact attestation
     uses: actions/attest-build-provenance@v3
     with:
       subject-path: 'PATH/TO/ARTIFACT'
   ```

   The value of the `subject-path` parameter should be set to the path to the binary you want to attest.

### Generating build provenance for container images

1. In the workflow that builds the container image you would like to attest, add the following permissions.

   ```yaml
   permissions:
     id-token: write
     contents: read
     attestations: write
     packages: write
   ```

1. After the step where the image has been built, add the following step.

   ```yaml
   - name: Generate artifact attestation
     uses: actions/attest-build-provenance@v3
     with:
       subject-name: {% raw %}${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}{% endraw %}
       subject-digest: 'sha256:fedcba0...'
       push-to-registry: true
   ```

   The value of the `subject-name` parameter should specify the fully-qualified image name. For example, `ghcr.io/user/app` or `acme.azurecr.io/user/app`. Do not include a tag as part of the image name.

   The value of the `subject-digest` parameter should be set to the SHA256 digest of the subject for the attestation, in the form `sha256:HEX_DIGEST`. If your workflow uses `docker/build-push-action`, you can use the [`digest`](https://github.com/docker/build-push-action?tab=readme-ov-file#outputs) output from that step to supply the value. For more information on using outputs, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idoutputs).

## Generating an attestation for a software bill of materials (SBOM)

You can generate signed SBOM attestations for workflow artifacts.

To generate an attestation for an SBOM, you must:

* Ensure you have the appropriate permissions configured in your workflow.
* Create an SBOM for your artifact. For more information, see [`anchore-sbom-action`](https://github.com/marketplace/actions/anchore-sbom-action) in the {% data variables.product.prodname_marketplace %}.
* Include a step in your workflow that uses the [`attest-sbom` action](https://github.com/actions/attest-sbom).

When you run your updated workflows, they will build your artifacts and generate an SBOM attestation. You can view attestations in your repository's **Actions** tab. For more information, see the [`attest-sbom` action](https://github.com/actions/attest-sbom) repository.

### Generating an SBOM attestation for binaries

1. In the workflow that builds the binary you would like to attest, add the following permissions.

   ```yaml
   permissions:
     id-token: write
     contents: read
     attestations: write
   ```

1. After the step where the binary has been built, add the following step.

   ```yaml
   - name: Generate SBOM attestation
     uses: actions/attest-sbom@v2
     with:
       subject-path: 'PATH/TO/ARTIFACT'
       sbom-path: 'PATH/TO/SBOM'
   ```

   The value of the `subject-path` parameter should be set to the path of the binary the SBOM describes. The value of the `sbom-path` parameter should be set to the path of the SBOM file you generated.

### Generating an SBOM attestation for container images

1. In the workflow that builds the container image you would like to attest, add the following permissions.

   ```yaml
   permissions:
     id-token: write
     contents: read
     attestations: write
     packages: write
   ```

1. After the step where the image has been built, add the following step.

   ```yaml
   - name: Generate SBOM attestation
     uses: actions/attest-sbom@v2
     with:
       subject-name: {% raw %}${{ env.REGISTRY }}/PATH/TO/IMAGE{% endraw %}
       subject-digest: 'sha256:fedcba0...'
       sbom-path: 'sbom.json'
       push-to-registry: true
   ```

   The value of the `subject-name` parameter should specify the fully-qualified image name. For example, `ghcr.io/user/app` or `acme.azurecr.io/user/app`. Do not include a tag as part of the image name.

   The value of the `subject-digest` parameter should be set to the SHA256 digest of the subject for the attestation, in the form `sha256:HEX_DIGEST`. If your workflow uses `docker/build-push-action`, you can use the [`digest`](https://github.com/docker/build-push-action?tab=readme-ov-file#outputs) output from that step to supply the value. For more information on using outputs, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idoutputs).

   The value of the `sbom-path` parameter should be set to the path to the JSON-formatted SBOM file you want to attest.

## Uploading artifacts to the {% data variables.product.virtual_registry %}

We recommend uploading attested assets to your organization's {% data variables.product.virtual_registry %}. This page displays artifacts' build history, deployment records, and storage details. You can use this data to prioritize security alerts or quickly connect vulnerable artifacts to their owning team, source code, and build run. For more information, see [AUTOTITLE](/code-security/concepts/supply-chain-security/linked-artifacts).

{% data reusables.actions.attestation-virtual-registry %}

For an example workflow, see [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/upload-linked-artifacts#generating-an-attestation).

## Verifying artifact attestations with the {% data variables.product.prodname_cli %}

You can validate artifact attestations for binaries and container images and validate SBOM attestations using the {% data variables.product.prodname_cli %}. For more information, see the [`attestation`](https://cli.github.com/manual/gh_attestation) section of the {% data variables.product.prodname_cli %} manual.

>[!NOTE]These commands assume you are in an online environment. If you are in an offline or air-gapped environment, see [AUTOTITLE](/actions/security-guides/verifying-attestations-offline).

### Verifying an artifact attestation for binaries

To verify artifact attestations for **binaries**, use the following {% data variables.product.prodname_cli %} command.

```bash copy
gh attestation verify PATH/TO/YOUR/BUILD/ARTIFACT-BINARY -R ORGANIZATION_NAME/REPOSITORY_NAME
```

### Verifying an artifact attestation for container images

To verify artifact attestations for **container images**, you must provide the image's FQDN prefixed with `oci://` instead of the path to a binary. You can use the following {% data variables.product.prodname_cli %} command.

```bash copy
docker login ghcr.io

gh attestation verify oci://ghcr.io/ORGANIZATION_NAME/IMAGE_NAME:test -R ORGANIZATION_NAME/REPOSITORY_NAME
```

### Verifying an attestation for SBOMs

To verify SBOM attestations, you have to provide the `--predicate-type` flag to reference a non-default predicate. For more information, see [Vetted predicates](https://github.com/in-toto/attestation/tree/main/spec/predicates#vetted-predicates) in the `in-toto/attestation` repository.

For example, the [`attest-sbom` action](https://github.com/actions/attest-sbom) currently supports either SPDX or CycloneDX SBOM predicates. To verify an SBOM attestation in the SPDX format, you can use the following {% data variables.product.prodname_cli %} command.

```bash copy
gh attestation verify PATH/TO/YOUR/BUILD/ARTIFACT-BINARY \
  -R ORGANIZATION_NAME/REPOSITORY_NAME \
  --predicate-type https://spdx.dev/Document/v2.3
```

To view more information on the attestation, reference the `--format json` flag. This can be especially helpful when reviewing SBOM attestations.

```bash copy
gh attestation verify PATH/TO/YOUR/BUILD/ARTIFACT-BINARY \
  -R ORGANIZATION_NAME/REPOSITORY_NAME \
  --predicate-type https://spdx.dev/Document/v2.3 \
  --format json \
  --jq '.[].verificationResult.statement.predicate'
```

## Next steps

To keep your attestations relevant and manageable, you should delete attestations that are no longer needed. See [AUTOTITLE](/actions/how-tos/security-for-github-actions/using-artifact-attestations/managing-the-lifecycle-of-artifact-attestations).

You can also generate release attestations to help consumers verify the integrity and origin of your releases. For more information, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/immutable-releases).
