---
title: Permitir que seu codespace acesse um registro de imagens privadas
intro: Você pode usar segredos para permitir que o {% data variables.product.prodname_github_codespaces %} acesse um registro de imagens privadas
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
shortTitle: Private image registry
ms.openlocfilehash: c11cfe0179856caf17f30ac32830ee1485defa3c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159202"
---
## Sobre registros de imagens privadas e o {% data variables.product.prodname_github_codespaces %}

Um registro é um espaço seguro para armazenar, gerenciar e buscar imagens privadas de contêineres. Você pode usar uma para armazenar uma ou mais imagens. Existem muitos exemplos de registros, como {% data variables.product.prodname_container_registry %}, {% data variables.product.prodname_npm_registry %}, Registro de Contêiner do Azure ou DockerHub.

O {% data variables.packages.prodname_ghcr_and_npm_registry %} pode ser configurado para permitir que imagens de contêiner sejam puxadas diretamente para {% data variables.product.prodname_github_codespaces %} durante a criação do codespace, sem precisar fornecer credenciais de autenticação. Para outros registros de imagem, você deve criar segredos em {% data variables.product.prodname_dotcom %} para armazenar os detalhes de acesso, o que permitirá que {% data variables.product.prodname_github_codespaces %} acesse imagens armazenadas nesse registro.

## Acessar imagens armazenadas no {% data variables.packages.prodname_ghcr_and_npm_registry %}

O {% data variables.packages.prodname_ghcr_and_npm_registry %} fornece a maneira mais fácil para o {% data variables.product.prodname_github_codespaces %} consumir imagens do contêiner de desenvolvimento.

Para obter mais informações, confira "[Como trabalhar com o registro de contêiner](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)" e "[Como trabalhar com o registro npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)".

### Acessar uma imagem publicada no mesmo repositório que o codespace

Se você publicar uma imagem de contêiner no {% data variables.packages.prodname_ghcr_or_npm_registry %} no mesmo repositório em que o codespace está sendo lançado, você poderá buscar automaticamente essa imagem na criação de um codespace. Você não precisará fornecer nenhuma credencial adicional, a menos a opção **Herdar acesso do repositório** tenha sido desmarcada quando a imagem de contêiner foi publicada.

#### Herdando acesso a partir do repositório no qual uma imagem foi publicada

Por padrão, quando você publica uma imagem de contêiner no {% data variables.packages.prodname_ghcr_or_npm_registry %}, a imagem herda as configurações de acesso do repositório do qual foi publicada. Por exemplo, se o repositório for público, a imagem também é pública. Se o repositório for privado, a imagem também é privada, mas pode ser acessada a partir do repositório.

Esse comportamento é controlado pela opção **Herdar acesso do repositório**. A opção **Herdar acesso do repositório** está selecionada por padrão na publicação por meio de {% data variables.product.prodname_actions %}, mas não ao publicar diretamente no {% data variables.packages.prodname_ghcr_or_npm_registry %} usando um {% data variables.product.pat_generic %}.

Se a opção **Herdar acesso do repositório** não estava selecionada quando a imagem foi publicada, adicione o repositório manualmente aos controles de acesso da imagem de contêiner publicada. Para obter mais informações, confira "[Como configurar o controle de acesso e a visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#inheriting-access-for-a-container-image-from-a-repository)".

### Ao acessar uma imagem publicada na organização, um codespace será lançado em

Se você deseja que uma imagem de contêiner possa ser acessada por todos os codespaces em uma organização, recomendamos que você publique a imagem do contêiner com visibilidade interna. Isso tornará a imagem visível automaticamente para todos os códigos dentro da organização, a menos que o repositório no qual o código é iniciado seja público.

Se o codespace for lançado a partir de um repositório público que faz referência uma imagem interna ou privada, você deverá permitir manualmente o acesso do repositório público à imagem interna do contêiner. Isto impede que a imagem interna seja acidentalmente divulgada publicamente. Para obter mais informações, confira "[Como garantir que os codespaces acessem seu pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)".

### Acessar um contêiner privado a partir de um subconjunto de repositórios em uma organização

Se você deseja permitir que um subconjunto de repositórios de uma organização acesse uma imagem de contêiner ou permitir que uma imagem interna ou privada seja acessada por meio de um codespace iniciado em um repositório público, adicione repositórios manualmente às configurações de acesso da <span class="x x-first x-last">imagem</span> de um contêiner. Para obter mais informações, confira "[Como garantir que os codespaces acessem seu pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)<span class="x x-first x-last">"</span>.

### Publicando uma imagem de contêiner a partir de um codespace

O acesso seguro de um codespace ao {% data variables.packages.prodname_ghcr_or_npm_registry %} é limitado à extração de imagens de contêineres. Se você deseja publicar uma imagem de contêiner por meio de um codespace, use um {% data variables.product.pat_v1 %} com o escopo `write:packages`.

Recomendamos publicar imagens via {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Como publicar imagens do Docker](/actions/publishing-packages/publishing-docker-images)" e "[Como publicar pacotes Node.js](/actions/publishing-packages/publishing-nodejs-packages)".

## Acessando as imagens armazenadas em outros registros de contêiner

Se estiver acessando uma imagem de contêiner a partir de um registro que não é um {% data variables.packages.prodname_ghcr_or_npm_registry %}, o {% data variables.product.prodname_github_codespaces %} verificará a presença de três segredos, que definem o nome de servidor, nome de usuário e {% data variables.product.pat_generic %} para um registro de contêiner. Se esses segredos forem encontrados, o {% data variables.product.prodname_github_codespaces %} disponibilizará o registro dentro do seu codespace.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

É possível armazenar segredos a nível do usuário, repositório ou organização, permitindo que você os compartilhe de forma segura entre diferentes codespaces. Ao criar um conjunto de segredos para um registro de imagem privado, você deverá substituir o "<*>" no nome por um identificador consistente. Para obter mais informações, confira "[Como gerenciar segredos criptografados para seus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)" e "[Como gerenciar segredos criptografados para seu repositório e sua organização para o {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)".

Se você estiver definindo os segredos no nível do usuário ou da organização. certifique-se de atribuir esses segredos para o repositório no qual você irá criar o codespace, escolhendo uma política de acesso na lista suspensa.  

![Exemplo de segredo do registro de imagem](/assets/images/help/codespaces/secret-repository-access.png)

### Exemplos de segredos

Para uma lista de imagens privadas no Azure, você pode criar os seguintes segredos:

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PERSONAL_ACCESS_TOKEN>
```

Para obter informações sobre registros de imagem comuns, confira "[Servidores de registro de imagem comuns](#common-image-registry-servers)". Observe que acessar o AWS Elastic Container Registry (ECR) é diferente.

![Exemplo de segredo do registro de imagem](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

Após adicionar os segredos, pode ser que você precise parar e, em seguida, iniciar o processo de codespace para que as novas variáveis de ambiente sejam passadas para o contêiner. Para obter mais informações, confira "[Como suspender ou parar um codespace](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)".

#### Acessando o AWS Elastic Container Registry

Para acessar o AWS Elastic Container Registry (ECR), você pode fornecer o ID de uma chave de acesso do AWS e a chave do segredo e {% data variables.product.prodname_dotcom %} poderá obter um token de acesso para você e egetuar o login em seu nome.

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = <AWS_ACCESS_KEY_ID>
*_CONTAINER_REGISTRY_PASSWORD = <AWS_SECRET_KEY>
```

Você também precisa garantir que tenha as permissões apropriadas de IAM da AWS para fazer a troca de credenciais (por exemplo, `sts:GetServiceBearerToken`), bem como a operação de leitura do ECR (`AmazonEC2ContainerRegistryFullAccess` ou `ReadOnlyAccess`).

Como alternativa, se você não quiser que o GitHub execute a troca de credenciais em seu nome, você poderá fornecer um token de autorização obtido por meio das APIs ou da CLI do AWS.

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = AWS
*_CONTAINER_REGISTRY_PASSWORD = <TOKEN>
```

Como esses tokens são curtos e precisam ser atualizados periodicamente, recomendamos fornecer um ID de chave de acesso e um segredo.

Embora esses segredos possam ter qualquer nome, desde que o `*_CONTAINER_REGISTRY_SERVER` seja uma URL do ECR, recomendamos usar `ECR_CONTAINER_REGISTRY_*`, a menos que você esteja lidando com vários registros do ECR.

Para obter mais informações, confira a "[documentação de autenticação de registro privado](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html)" do ECR da AWS.

### Servidores de registro de imagens comuns

Alguns dos servidores comuns de registro de imagens estão listados abaixo:

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [Registro de Contêiner do GitHub](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Registro de Contêiner do Azure](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [AWS Elastic Container Registry](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Google Cloud Container Registry](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (EUA), `eu.gcr.io` (UE), `asia.gcr.io` (Ásia)

## Depurando o acesso ao registro de imagens privadas

Se você tendo problemas para extrair uma imagem de um registro de imagem privada, verifique se consegue executar `docker login -u <user> -p <password> <server>` usando os valores dos segredos definidos acima. Se o login falhar, certifique-se de que as credenciais de login sejam válidas e que você tenha as permissões de prioridade no servidor para obter uma imagem do contêiner. Se o login for bem-sucedido, certifique-se de que esses valores são copiados adequadamente para os segredos de {% data variables.product.prodname_github_codespaces %} corretos, seja no nível de usuário, repositório ou organização e tente novamente.
