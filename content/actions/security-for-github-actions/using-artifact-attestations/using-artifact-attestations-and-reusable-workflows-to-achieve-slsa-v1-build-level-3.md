---
title: Using artifact attestations and reusable workflows to achieve SLSA v1 Build Level 3
shortTitle: Attest with reusable workflows
intro: Building software with reusable workflows and artifact attestations can streamline your supply chain security and help you achieve SLSA v1.0 Build Level 3.
type: quick_start
topics:
  - Actions
  - Security
  - Workflows
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /actions/security-guides/using-artifact-attestations-and-reusable-workflows-to-achieve-slsa-v1-build-level-3
---

## Introduction

Artifact attestations are a great way to create unfalsifiable provenance and integrity guarantees for the software you build.

But remember that by itself, artifact attestations provides links, like the build instructions an artifact was built with, which meets SLSA v1.0 Build Level 2. To make an informed risk decision, it's up to you to follow those links and evaluate those build instructions.

You can take this a step further by requiring builds make use of known, vetted build instructions. A great way to do this is to have your build take place in a reusable workflow that many repositories across your organization share. Reusable workflows can provide isolation between the build process and the calling workflow, to meet SLSA v1.0 Build Level 3.

Before starting this guide, you should be familiar with:
* Generating artifact attestations. See "[AUTOTITLE](/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds)."
* Writing and using reusable workflows. See "[AUTOTITLE](/actions/using-workflows/reusing-workflows)."

## Step 1: Configuring your builds

First, we need to build with both artifact attestations and a reusable workflow.

### Building with a reusable workflow

If you aren't already using reusable workflows to build your software, you'll need to take your build steps and move them into a reusable workflow. For more information on how to write and call a reusable workflow, see "[AUTOTITLE](/actions/using-workflows/reusing-workflows)."

### Building with artifact attestations

The reusable workflow you use to build your software must also generate artifact attestations to establish build provenance. For more information, see "[AUTOTITLE](/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds)."

When you use a reusable workflow to generate artifact attestations, both the calling workflow and the reusable workflow need to have the following permissions.

```yaml copy
permissions:
  attestations: write
  contents: read
  id-token: write
```

If you are building container images, you will also need to include the `packages: write` permission.

## Step 2: Verifying artifact attestations built with a reusable workflow

To verify the artifact attestations generated with your builds, you can use [`gh attestation verify`](https://cli.github.com/manual/gh_attestation_verify) from the GitHub CLI.

The `gh attestation verify` command requires either `--owner` or `--repo` flags to be used with it. These flags do two things.

* They tell `gh attestation verify` where to fetch the attestation from. This will always be your caller workflow.
* They tell `gh attestation verify` where the workflow that did the signing came from. This will always be the workflow that uses [`attest-build-provenance` action](https://github.com/actions/attest-build-provenance), which may be a reusable workflow.

You can use optional flags with the `gh attestation verify` command.

* If your reusable workflow is not in the same repository as the caller workflow, use the `--signer-repo` flag to specify the repository that contains the reusable workflow.
* If you would like to require an artifact attestation to be signed with a specific workflow, use the `--signer-workflow` flag to indicate the workflow file that should be used.

For example, if your calling workflow is `ORGANIZATION_NAME/REPOSITORY_NAME/.github/workflows/calling.yml` and it uses `REUSABLE_ORGANIZATION_NAME/REUSABLE_REPOSITORY_NAME/.github/workflows/reusable.yml` you could do:

```bash copy
gh attestation verify -o ORGANIZATION_NAME --signer-repo REUSABLE_ORGANIZATION_NAME/REUSABLE_REPOSITORY_NAME PATH/TO/YOUR/BUILD/ARTIFACT-BINARY
```

Or if you want to specify the exact workflow:

```bash copy
gh attestation verify -o ORGANIZATION_NAME --signer-workflow REUSABLE_ORGANIZATION_NAME/REUSABLE_REPOSITORY_NAME/.github/workflows/reusable.yml PATH/TO/YOUR/BUILD/ARTIFACT-BINARY
```

## Conclusion

You are now building and signing your artifacts in a reusable workflow, which can provide the isolation required by SLSA v1.0 Build Level 3. You can verify artifacts are built with known, vetted build instructions by requiring your artifact was built with a specific workflow, reusable or not.
