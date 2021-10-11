---
title: codespace がプライベートイメージレジストリにアクセスできるようにする
intro: 'シークレットを使用して、{% data variables.product.prodname_codespaces %} がプライベートイメージレジストリにアクセスできるようにすることができます'
versions:
  fpt: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: プライベートイメージレジストリ
---

## About private image registries and {% data variables.product.prodname_codespaces %}

A registry is a secure space for storing and managing private container images, such as Azure Container Registry or DockerHub. GitHub でシークレットを作成して、プライベートレジストリのアクセスの詳細を保存し、それらを使用して、レジストリに保存されている画像へのアクセス許可を codespace に付与することができます。

codespace を起動すると、{% data variables.product.prodname_codespaces %} は、コンテナレジストリのサーバー名、ユーザ名、個人アクセストークン (PAT) を定義する 3 つのシークレットをチェックします。 これらのシークレットが見つかった場合、{% data variables.product.prodname_codespaces %} はレジストリを codespace 内で使用できるようにします。

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

シークレットは、ユーザ、リポジトリ、または Organization レベルで保存できるため、異なる Codespaces 間で安全に共有できます。 プライベートイメージレジストリのシークレットのセットを作成するときは、名前の「<*>」を一貫した識別子に置き換える必要があります。 詳しい情報については、「[Codespaces の暗号化されたシークレットを管理する](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)」および「[Codespaces のリポジトリと Organization の暗号化されたシークレットを管理する](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces)」を参照してください。

If you are setting the secrets at the user or organization level, make sure to assign those secrets to the repository you'll be creating the codespace in by choosing an access policy from the dropdown list.

![Image registry secret example](/assets/images/help/codespaces/secret-repository-access.png)

## Example secrets

For a private image registry in Azure, you could create the following secrets:

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PAT>
```

For information on common image registries, see "[Common image registry servers](#common-image-registry-servers)."

![Image registry secret example](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

Once you've added the secrets, you may need to stop and then start the codespace you are in for the new environment variables to be passed into the container. For more information, see "[Suspending or stopping a codespace](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)."

## Common image registry servers

Some of the common image registry servers are listed below:

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [GitHub Container Registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Azure Container Registry](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [Amazon Elastic Container Registry](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Google Cloud Container Registry](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (US), `eu.gcr.io` (EU), `asia.gcr.io` (Asia)
