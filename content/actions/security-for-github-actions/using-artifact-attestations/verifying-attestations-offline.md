---
title: Verifying attestations offline
shortTitle: Verifying attestations offline
intro: Artifact attestations can be verified without an internet connection.
type: quick_start
topics:
  - Actions
  - Security
  - Workflows
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /actions/security-guides/verifying-attestations-offline
---

## Introduction

Artifact attestations are a great way to create unfalsifiable provenance and integrity guarantees for the software you build.

By default, attestations are stored in GitHub's attestation API, which `gh attestation verify` will query when you go to verify your attestation. That command will also contact GitHub's servers to check for updated key material to use to verify the attestation.

This command can work without internet connectivity, but you need to supply the attestation bundle and the key material in the trusted root manually.

Before starting this guide, you should be building with generating artifact attestations. See "[AUTOTITLE](/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds)."

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

## Conclusion

You are now verifying artifact attestations in an offline environment. We recommend importing a new trusted root whenever you are introducing new signed artifacts to your offline environment.
