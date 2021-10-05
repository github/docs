---
title: Permitir que seu codespace acesse um registro de imagens privadas
intro: 'Você pode usar segredos para permitir que {% data variables.product.prodname_codespaces %} acesse um registro de imagens privada'
versions:
  fpt: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Registro de imagem privada
---

## About private image registries and {% data variables.product.prodname_codespaces %}

Um registro é um espaço seguro para armazenar e gerenciar imagens de contêineres privadas, como Azure Container Registry ou DockerHub. Você pode criar segredos no GitHub para armazenar os detalhes de acesso de um registro privado e usá-los para dar ao seu código acesso as imagens armazenadas no registro.

Ao iniciar iniciar um código, {% data variables.product.prodname_codespaces %} verifica três segredos, que definem o nome do servidor, o nome de usuário e o token de acesso pessoal (PAT) para um registro do contêiner. Se estes segredos forem encontrados, {% data variables.product.prodname_codespaces %} disponibilizará o registro dentro do seu codespace.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

É possível armazenar segredos a nível do usuário, repositório ou organização, permitindo que você os compartilhe de forma segura entre diferentes codespaces. Ao criar um conjunto de segredos para um registro de imagem privado, você precisa substituir o "<*>" no nome por um identificador consistente. Para mais informações, consulte "[Gerenciar segredos criptografados para seus códigos](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)" e "[Gerenciar segredos criptografados para seu repositório e organização para os codespaces](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces)".

If you are setting the secrets at the user or organization level, make sure to assign those secrets to the repository you'll be creating the codespace in by choosing an access policy from the dropdown list.

![Exemplo de segredo do registro de imagem](/assets/images/help/codespaces/secret-repository-access.png)

## Example secrets

For a private image registry in Azure, you could create the following secrets:

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PAT>
```

For information on common image registries, see "[Common image registry servers](#common-image-registry-servers)."

![Exemplo de segredo do registro de imagem](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

Once you've added the secrets, you may need to stop and then start the codespace you are in for the new environment variables to be passed into the container. For more information, see "[Suspending or stopping a codespace](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)."

## Common image registry servers

Some of the common image registry servers are listed below:

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [GitHub Container Registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Azure Container Registry](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [Amazon Elastic Container Registry](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Google Cloud Container Registry](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (US), `eu.gcr.io` (EU), `asia.gcr.io` (Asia)
