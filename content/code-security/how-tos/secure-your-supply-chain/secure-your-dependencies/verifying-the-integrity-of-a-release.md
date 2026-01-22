---
title: Verifying the integrity of a release
shortTitle: Verify release integrity
intro: You can avoid tampering and accidental changes by ensuring the releases you use have not been modified after publication.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Code Security
  - Vulnerabilities
  - Dependencies
defaultTool: cli
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/verifying-the-integrity-of-a-release
contentType: how-tos
---

{% cli %}

## Prerequisites

Before you can validate the authenticity of a release and its assets on the command line, you need to [install the {% data variables.product.prodname_cli %}](https://github.com/cli/cli?tab=readme-ov-file#installation).

## Verifying immutable releases and local artifacts

1. On the command line, open the repository containing the release you want to verify.
1. To verify a release exists and is immutable, run the following command:

    ```bash copy
    gh release verify RELEASE-TAG
    ```

1. To verify a local artifact is an exact match for a release asset, run the following command:

    ```bash copy
    gh release verify-asset RELEASE-TAG ARTIFACT-PATH
    ```

    > [!NOTE]
    > This command cannot be used to verify the source code zip file or tarball for a release, since these assets are only created when a download is requested.

{% endcli %}
{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
1. To the left of the release you want to verify, below the release author, confirm that "{% octicon "lock" aria-hidden="true" %} Immutable" is present.

{% endwebui %}
