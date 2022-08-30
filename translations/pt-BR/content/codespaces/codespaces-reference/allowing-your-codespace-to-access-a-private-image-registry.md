---
title: Permitir que seu codespace acesse um registro de imagens privadas
intro: 'Você pode usar segredos para permitir que {% data variables.product.prodname_github_codespaces %} acesse um registro de imagens privada'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Registro de imagem privada
---

## Sobre registros de imagens privadas e {% data variables.product.prodname_github_codespaces %}

Um registro é um espaço seguro para armazenar, gerenciar e buscar imagens privadas de contêineres. Você pode usar uma para armazenar uma ou mais imagens. There are many examples of registries, such as {% data variables.product.prodname_container_registry %}, {% data variables.product.prodname_npm_registry %}, Azure Container Registry, or DockerHub.

{% data variables.product.prodname_ghcr_and_npm_registry %} can be configured to allow container images to be pulled seamlessly into {% data variables.product.prodname_github_codespaces %} during codespace creation, without having to provide any authentication credentials. Para outros registros de imagem, você deve criar segredos em {% data variables.product.prodname_dotcom %} para armazenar os detalhes de acesso, o que permitirá que {% data variables.product.prodname_codespaces %} acesse imagens armazenadas nesse registro.

## Accessing images stored in {% data variables.product.prodname_ghcr_and_npm_registry %}

{% data variables.product.prodname_ghcr_and_npm_registry %} provide the easiest way for {% data variables.product.prodname_codespaces %} to consume dev container images.

For more information, see "[Working with the Container registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)" and "[Working with the npm registry](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)".

### Acessar uma imagem publicada no mesmo repositório que o codespace

If you publish a container image to {% data variables.product.prodname_ghcr_or_npm_registry %} in the same repository that the codespace is being launched in, you will automatically be able to fetch that image on codespace creation. Você não terá que fornecer qualquer credencial adicional, a menos a opção **Herdar acesso do repositório** tenha sido desmarcada quando a imagem do contêiner foi publicada.

#### Herdando acesso a partir do repositório no qual uma imagem foi publicada

By default, when you publish a container image to {% data variables.product.prodname_ghcr_or_npm_registry %}, the image inherits the access setting of the repository from which the image was published. Por exemplo, se o repositório for público, a imagem também é pública. Se o repositório for privado, a imagem também é privada, mas pode ser acessada a partir do repositório.

Este comportamento é controlado pela opção de **Herdar acesso do repositório**. **Inherit access from repo** is selected by default when publishing via {% data variables.product.prodname_actions %}, but not when publishing directly to {% data variables.product.prodname_ghcr_or_npm_registry %} using a Personal Access Token (PAT).

Se a opção **Herdar acesso do repositório** não foi selecionada quando a imagem foi publicada, você pode adicionar o repositório manualmente aos controles de acesso da imagem de contêiner. Para obter mais informações, consulte "[Configurar o controle de acesso e visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#inheriting-access-for-a-container-image-from-a-repository)".

### Ao acessar uma imagem publicada na organização, um codespace será lançado em

Se você deseja que uma imagem de contêiner possa ser acessada por todos os codespaces em uma organização, recomendamos que você publique a imagem do contêiner com visibilidade interna. Isso tornará a imagem visível automaticamente para todos os códigos dentro da organização, a menos que o repositório no qual o código é iniciado seja público.

Se o codespace for lançado a partir de um repositório público que faz referência uma imagem interna ou privada, você deverá permitir manualmente o acesso do repositório público à imagem interna do contêiner. Isto impede que a imagem interna seja acidentalmente divulgada publicamente. Para obter mais informações, consulte "[Garantir o acesso dos codespaces para o seu pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)".

### Acessar um contêiner privado a partir de um subconjunto de repositórios em uma organização

Se você deseja permitir que um subconjunto de repositórios de uma organização acesse uma imagem de contêiner ou permitir que uma imagem interna ou privada seja acessada a partir de um codespace lançado em um repositório público, você pode adicionar repositórios manualmente às configurações de acesso da <span class="x x-first x-last">imagem</span> de um container. Para obter mais informações, consulte "[Garantindo o acesso de codespaces de segurança ao seu pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)<span class="x x-first x-last">.</span>"

### Publicando uma imagem de contêiner a partir de um codespace

Seamless access from a codespace to {% data variables.product.prodname_ghcr_or_npm_registry %} is limited to pulling container images. Se você deseja publicar a imagem de um contêiner de dentro de um codespace, você deve usar um token de acesso pessoal (PAT) com o escopo `write:packages`.

Recomendamos publicar imagens via {% data variables.product.prodname_actions %}. For more information, see "[Publishing Docker images](/actions/publishing-packages/publishing-docker-images)" and "[Publishing Node.js packages](/actions/publishing-packages/publishing-nodejs-packages)."

## Acessando as imagens armazenadas em outros registros de contêiner

If you are accessing a container image from a registry that isn't {% data variables.product.prodname_ghcr_or_npm_registry %}, {% data variables.product.prodname_codespaces %} checks for the presence of three secrets, which define the server name, username, and personal access token (PAT) for a container registry. Se estes segredos forem encontrados, {% data variables.product.prodname_github_codespaces %} disponibilizará o registro dentro do seu codespace.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

É possível armazenar segredos a nível do usuário, repositório ou organização, permitindo que você os compartilhe de forma segura entre diferentes codespaces. Ao criar um conjunto de segredos para um registro de imagem privado, você deverá substituir o "<*>" no nome por um identificador consistente. Para obter mais informações, consulte "[Gerenciando segredos criptografados para seus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)" e "[Gerenciando segredos criptografados para seu repositório e organização para {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)".

Se você estiver definindo os segredos no nível do usuário ou da organização. certifique-se de atribuir esses segredos para o repositório no qual você irá criar o codespace, escolhendo uma política de acesso na lista suspensa.

![Exemplo de segredo do registro de imagem](/assets/images/help/codespaces/secret-repository-access.png)

### Exemplos de segredos

Para uma lista de imagens privadas no Azure, você pode criar os seguintes segredos:

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PAT>
```

Para obter informações sobre registros de imagens comuns, consulte "[Servidores de registro de imagens comuns](#common-image-registry-servers)". Observe que acessar o AWS Elastic Container Registry (ECR) é diferente.

![Exemplo de segredo do registro de imagem](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

Após adicionar os segredos, pode ser que você precise parar e, em seguida, iniciar o processo de codespace para que as novas variáveis de ambiente sejam passadas para o contêiner. Para obter mais informações, consulte "[Suspender ou interromper um codespace](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)".

#### Acessando o AWS Elastic Container Registry

Para acessar o AWS Elastic Container Registry (ECR), você pode fornecer o ID de uma chave de acesso do AWS e a chave do segredo e {% data variables.product.prodname_dotcom %} poderá obter um token de acesso para você e egetuar o login em seu nome.

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = <AWS_ACCESS_KEY_ID>
*_CONTAINER_REGISTRY_PASSWORD = <AWS_SECRET_KEY>
```

Você deve também garantir que terá as permissões do AWS IAM apropriadas para executar o swap de credenciais (por exemplo, `sts:GetServiceBearerToken`) bem como a operação de leitura do ECR ( `AmazonEC2ContainerRegistryFullAccess` ou `ReadOnlyAccess`).

Como alternativa, se você não quiser que o GitHub execute a troca de credenciais em seu nome, você poderá fornecer um token de autorização obtido por meio das APIs ou da CLI do AWS.

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = AWS
*_CONTAINER_REGISTRY_PASSWORD = <TOKEN>
```

Como esses tokens são curtos e precisam ser atualizados periodicamente, recomendamos fornecer um ID de chave de acesso e um segredo.

Embora esses segredos possam ter qualquer nome, contanto que o `*_CONTAINER_REGISTRY_SERVER` seja uma URL de ECR, recomendamos usar `ECR_CONTAINER_REGISTRY_*` a menos que você esteja lidando com vários registros de ECR.

Para obter mais informações, consulte a"[documentação de autenticação de registro privado](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html) do ECR do AWS".

### Servidores de registro de imagens comuns

Alguns dos servidores comuns de registro de imagens estão listados abaixo:

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [Registro de Contêiner do GitHub](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Registro do Contêiner do Azure](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [Registry Container Elastic do AWS](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Registro de Contêiner do Google Cloud](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (US), `eu.gcr.io` (EU), `asia.gcr.io` (Asia)

## Depurando o acesso ao registro de imagens privadas

Se você estiver tendo problemas para extrair uma imagem de um registro de imagens privada, certifique-se de estar apto a executar `docker login -u <user> -p <password> <server>`, usando os valores dos segredos definidos acima. Se o login falhar, certifique-se de que as credenciais de login sejam válidas e que você tenha as permissões de prioridade no servidor para obter uma imagem do contêiner. Se o login for bem-sucedido, certifique-se de que esses valores são copiados adequadamente para os segredos de {% data variables.product.prodname_codespaces %} corretos, seja no nível de usuário, repositório ou organização e tente novamente.
