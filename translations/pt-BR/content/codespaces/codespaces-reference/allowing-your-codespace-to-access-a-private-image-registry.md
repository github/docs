---
title: Permitir que seu codespace acesse um registro de imagens privadas
intro: 'Você pode usar segredos para permitir que {% data variables.product.prodname_codespaces %} acesse um registro de imagens privada'
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

Um registro é um espaço seguro para armazenar e gerenciar imagens de contêineres privadas, como Azure Container Registry ou DockerHub. Você pode criar segredos no GitHub para armazenar os detalhes de acesso de um registro privado e usá-los para dar ao seu código acesso as imagens armazenadas no registro.

Ao iniciar iniciar um código, {% data variables.product.prodname_codespaces %} verifica três segredos, que definem o nome do servidor, o nome de usuário e o token de acesso pessoal (PAT) para um registro do contêiner. Se estes segredos forem encontrados, {% data variables.product.prodname_codespaces %} disponibilizará o registro dentro do seu codespace.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

É possível armazenar segredos a nível do usuário, repositório ou organização, permitindo que você os compartilhe de forma segura entre diferentes codespaces. Ao criar um conjunto de segredos para um registro de imagem privado, você precisa substituir o "<*>" no nome por um identificador consistente. Para mais informações, consulte "[Gerenciar segredos criptografados para seus códigos](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)" e "[Gerenciar segredos criptografados para seu repositório e organização para os codespaces](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces)".

Por exemplo, se você tiver um registro de imagens privadas no Azure, você poderá criar os seguintes segredos:

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PAT>
```
![Exemplo de segredo do registro de imagem](/assets/images/help/settings/codespaces-image-registry-secret-example.png)
