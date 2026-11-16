---
title: Verifying attestations offline
shortTitle: Verify attestations offline
intro: Artifact attestations can be verified without an internet connection.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /actions/security-guides/verifying-attestations-offline
  - /actions/security-for-github-actions/using-artifact-attestations/verifying-attestations-offline
  - /actions/how-tos/security-for-github-actions/using-artifact-attestations/verifying-attestations-offline
category:
  - Secure your workflows
contentType: how-tos
---

## Prerequisites

Before starting this guide, you should be generating artifact attestations for your builds. See [AUTOTITLE](/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations).

## Step 1: Download attestation bundle

First, get the attestation bundle from the attestation API.

You can do so with the following command from a machine that is online:

```bash copy
gh attestation download PATH/TO/YOUR/BUILD/ARTIFACT-BINARY -R ORGANIZATION_NAME/REPOSITORY_NAME
```

Here is example output from that command:

```bash
Wrote attestations to file sha256:ae57936def59bc4c75edd3a837d89bcefc6d3a5e31d55a6fa7a71624f92c3c3b.jsonl.
Any previous content has been overwritten

The trusted metadata is now available at sha256:ae57936def59bc4c75edd3a837d89bcefc6d3a5e31d55a6fa7a71624f92c3c3b.jsonl
```

## Step 2: Download trusted roots

Next, get the key material from the trusted roots.

Artifact attestations uses the Sigstore public good instance for public repositories, and GitHub's Sigstore instance for private repositories. You can use one command to get both trusted roots:

```bash copy
gh attestation trusted-root > trusted_root.jsonl
```

### Updating trusted root information in an offline environment

It's best practice to generate a new `trusted_root.jsonl` file any time you are importing new signed material into your offline environment.

The key material in `trusted_root.jsonl` does not have a built-in expiration date, so anything signed before you generate the trusted root file will continue to successfully verify. Anything signed after the file is generated will verify until that Sigstore instance rotates its key material, which typically happens a few times per year. You will not know if key material has been revoked since you last generated the trusted root file.

## Step 3: Perform offline verification

Now, you are ready to verify the artifact offline.

You should import into your offline environment:
* {% data variables.product.prodname_cli %}
* Your artifact
* The bundle file
* The trusted root file

You can then perform offline verification with the following command:

```bash copy
gh attestation verify PATH/TO/YOUR/BUILD/ARTIFACT-BINARY -R ORGANIZATION_NAME/REPOSITORY_NAME --bundle sha256:ae57936def59bc4c75edd3a837d89bcefc6d3a5e31d55a6fa7a71624f92c3c3b.jsonl --custom-trusted-root trusted_root.jsonl
```

### Confirming the repository in an offline environment

When you verify offline, `gh attestation verify` compares the `-R` value only with the repository and owner names recorded in the attestation's signing certificate. These are the names that the repository and owner had when the attestation was created. The command can't detect whether the repository or owner has since been renamed, or whether a different repository or owner now uses that name.

To make sure an attestation comes from the repository that currently has the name, download its bundle from the attestation API, as described in Step 1. The attestation API returns only attestations from that repository.

The signing certificate also records the repository's ID. A repository keeps its ID when it's renamed, and a new repository that takes the old name gets a different ID. If you verify a bundle from another source, such as a bundle published alongside the artifact, compare this ID with the ID of the repository you expect.

1. On a machine that is online, get the ID of the repository that you expect the artifact to come from.

   ```bash copy
   gh api repos/ORGANIZATION_NAME/REPOSITORY_NAME --jq .id
   ```

1. In your offline environment, add the `--format json` and `--jq` flags to the verification command to print the repository ID from each verified attestation.

   For `-R`, replace `ORGANIZATION_NAME/REPOSITORY_NAME` with the owner and repository names recorded in the signing certificate. If the repository or owner has been renamed, these differ from the current names used for the API lookup.

   ```bash copy
   gh attestation verify PATH/TO/YOUR/BUILD/ARTIFACT-BINARY \
     -R ORGANIZATION_NAME/REPOSITORY_NAME \
     --bundle PATH/TO/YOUR/BUNDLE.jsonl \
     --custom-trusted-root trusted_root.jsonl \
     --format json \
     --jq '.[].verificationResult.signature.certificate.sourceRepositoryIdentifier'
   ```

1. Check that each ID in the output matches the ID from the first step. Don't trust an attestation whose ID doesn't match, because another repository that used the same name created it.
