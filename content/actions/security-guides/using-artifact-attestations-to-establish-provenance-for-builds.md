---
title: Using artifact attestations to establish provenance for builds
intro: 'Artifact attestations enable you to increase the supply chain security of your builds by publicly establishing where and how your software was built and associating it with a signed software bill of materials (SBOM).'
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Artifact attestations
---

{% data reusables.actions.artifact-attestations-public-beta-note %}

## About artifact attestations

{% data reusables.actions.about-artifact-attestations %}

### About SLSA levels for artifact attestations

The SLSA framework is an industry standard used to evaluate supply chain security. It is organized into levels. Each level represents an increasing degree of security and trustworthiness for a software supply chain. Artifact attestations provides SLSA v1.0 Build Level 2.

You can use artifact attestations to achieve SLSA v1.0 Build Level 3; however, we strongly recommend first focusing on broad adoption of Build Level 2 across your organization. It is much better to consistently meet Level 2 across your builds than to have a small portion of builds that reach Level 3. To achieve Build Level 3, we recommend standardizing your build process with reusable workflows, auditing the reusable workflows to ensure they meet Level 3 requirements, and then updating your verification policy to require those audited reusable workflows.

For more information, see the [Provenance](https://slsa.dev/spec/v1.0/provenance) section of the SLSA documentation.

### About using Sigstore for artifact attestations

To generate artifact attestations, {% data variables.product.prodname_dotcom %} uses Sigstore, which is an open source project that offers a comprehensive solution for signing and verifying software artifacts via attestations.

**Public repositories** that generate artifact attestations use the [Sigstore Public Good Instance](https://openssf.org/blog/2023/10/03/running-sigstore-as-a-managed-service-a-tour-of-sigstores-public-good-instance/). A copy of the generated Sigstore bundle is stored with GitHub and is also written to an immutable transparency log that is publicly readable on the internet.

**Private repositories** that generate artifact attestations use GitHub's Sigstore instance. GitHub's Sigstore instance uses the same codebase as the Sigstore Public Good Instance, but it does not have a transparency log and only federates with {% data variables.product.prodname_actions %}.

### About verifying artifact attestations

If you consume software that publishes artifact attestations, you can use the {% data variables.product.prodname_cli %} to verify those attestations. Because the attestations give you information about where and how software was built, you can use that information to create and enforce security policies that elevate your supply chain security. For more information, see "[Verifying artifact attestations with the {% data variables.product.prodname_cli %}](#verifying-artifact-attestations-with-the-github-cli)."

>[!WARNING]It is important to remember that artifact attestations are _not_ a guarantee that an artifact is secure. Instead, artifact attestations link you to the source code and the build instructions that produced them. It is up to you to define your policy criteria, evaluate that policy by evaluating the content, and make an informed risk decision when you are consuming software.

## Generating artifact attestations for your builds

You can use {% data variables.product.prodname_actions %} to generate artifact attestations that establish build provenance for artifacts such as binaries and container images.

To generate an artifact attestation, you must:

- Ensure you have the appropriate permissions configured in your workflow.
- Include a step in your workflow that uses the [`attest-build-provenance` action](https://github.com/actions/attest-build-provenance).

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
     uses: actions/attest-build-provenance@v1
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
     uses: actions/attest-build-provenance@v1
     with:
       subject-name: {% raw %}${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}{% endraw %}
       subject-digest: 'sha256:fedcba0...'
       push-to-registry: true
   ```

   The value of the `subject-name` parameter should specify the fully-qualified image name. For example, `ghcr.io/user/app` or `acme.azurecr.io/user/app`. Do not include a tag as part of the image name.

   The value of the `subject-digest` parameter should be set to the SHA256 digest of the subject for the attestation, in the form `sha256:HEX_DIGEST`. If your workflow uses `docker/build-push-action`, you can use the [`digest`](https://github.com/docker/build-push-action?tab=readme-ov-file#outputs) output from that step to supply the value. For more information on using outputs, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idoutputs)."

## Generating an attestation for a software bill of materials (SBOM)

You can generate signed SBOM attestations for workflow artifacts.

To generate an attestation for an SBOM, you must:

- Ensure you have the appropriate permissions configured in your workflow.
- Create an SBOM for your artifact. For more information, see [`anchore-sbom-action`](https://github.com/marketplace/actions/anchore-sbom-action) in the {% data variables.product.prodname_marketplace %}.
- Include a step in your workflow that uses the [`attest-sbom` action](https://github.com/actions/attest-sbom).

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
     uses: actions/attest-sbom@v1
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
     uses: actions/attest-sbom@v1
     with:
       subject-name: {% raw %}${{ env.REGISTRY }}/PATH/TO/IMAGE{% endraw %}
       subject-digest: 'sha256:fedcba0...'
       sbom-path: 'sbom.json'
       push-to-registry: true
   ```

   The value of the `subject-name` parameter should specify the fully-qualified image name. For example, `ghcr.io/user/app` or `acme.azurecr.io/user/app`. Do not include a tag as part of the image name.

   The value of the `subject-digest` parameter should be set to the SHA256 digest of the subject for the attestation, in the form `sha256:HEX_DIGEST`. If your workflow uses `docker/build-push-action`, you can use the [`digest`](https://github.com/docker/build-push-action?tab=readme-ov-file#outputs) output from that step to supply the value. For more information on using outputs, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idoutputs)."

   The value of the `sbom-path` parameter should be set to the path to the JSON-formatted SBOM file you want to attest.

## Verifying artifact attestations with the {% data variables.product.prodname_cli %}

To verify artifact attestations for **binaries**, use the following {% data variables.product.prodname_cli %} command.

```bash copy
gh attestation verify PATH/TO/YOUR/BUILD/ARTIFACT-BINARY -R ORGANIZATION_NAME/REPOSITORY_NAME
```

To verify artifact attestations for **container images**, you must provide the image's FQDN prefixed with `oci://` instead of the path to a binary. You can use the following {% data variables.product.prodname_cli %} command.

```bash copy
docker login ghcr.io

gh attestation verify oci://ghcr.io/ORGANIZATION_NAME/IMAGE_NAME:test -R ORGANIZATION_NAME/REPOSITORY_NAME
```

For more information, see the [`attestation`](https://cli.github.com/manual/gh_attestation) section of the {% data variables.product.prodname_cli %} manual.
