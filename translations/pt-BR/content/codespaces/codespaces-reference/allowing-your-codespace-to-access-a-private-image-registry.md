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

## Sobre registros de imagens privadas e {% data variables.product.prodname_codespaces %}

Um registro é um espaço seguro para armazenar e gerenciar imagens de contêineres privadas, como Azure Container Registry ou DockerHub. Você pode criar segredos no GitHub para armazenar os detalhes de acesso de um registro privado e usá-los para dar ao seu código acesso as imagens armazenadas no registro.

Ao iniciar iniciar um código, {% data variables.product.prodname_codespaces %} verifica três segredos, que definem o nome do servidor, o nome de usuário e o token de acesso pessoal (PAT) para um registro do contêiner. Se estes segredos forem encontrados, {% data variables.product.prodname_codespaces %} disponibilizará o registro dentro do seu codespace.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

É possível armazenar segredos a nível do usuário, repositório ou organização, permitindo que você os compartilhe de forma segura entre diferentes codespaces. Ao criar um conjunto de segredos para um registro de imagem privado, você precisa substituir o "<*>" no nome por um identificador consistente. Para mais informações, consulte "[Gerenciar segredos criptografados para seus códigos](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)" e "[Gerenciar segredos criptografados para seu repositório e organização para os codespaces](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces)".

Se você estiver definindo os segredos no nível do usuário ou da organização. certifique-se de atribuir esses segredos para o repositório no qual você irá criar o codespace, escolhendo uma política de acesso na lista suspensa.

![Exemplo de segredo do registro de imagem](/assets/images/help/codespaces/secret-repository-access.png)

## Exemplos de segredos

Para uma lista de imagens privadas no Azure, você pode criar os seguintes segredos:

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PAT>
```

Para obter informações sobre registros de imagens comuns, consulte "[Servidores de registro de imagens comuns](#common-image-registry-servers)".

![Exemplo de segredo do registro de imagem](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

Após adicionar os segredos, pode ser que você precise parar e, em seguida, iniciar o processo de codespace para que as novas variáveis de ambiente sejam passadas para o contêiner. Para obter mais informações, consulte "[Suspender ou interromper um codespace](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)".

## Servidores de registro de imagens comuns

Alguns dos servidores comuns de registro de imagens estão listados abaixo:

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [Registro de Contêiner do GitHub](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Registro do Contêiner do Azure](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [Registro de Contêiner Elástico da Amazon](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Registro de Contêiner do Google Cloud](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (US), `eu.gcr.io` (EU), `asia.gcr.io` (Asia)
