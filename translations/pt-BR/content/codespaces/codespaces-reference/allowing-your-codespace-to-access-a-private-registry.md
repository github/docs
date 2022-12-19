---
title: Como permitir que seu codespace acesse um registro privado
intro: 'Você pode permitir que {% data variables.product.prodname_github_codespaces %} acesse imagens de contêiner ou outros pacotes em um registro privado.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry
shortTitle: Access a private registry
ms.openlocfilehash: 2957fe914e620b63a7ba0e2c38b6a949bd632fd6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193203'
---
## Sobre registros privados e {% data variables.product.prodname_github_codespaces %}

Um registro é um espaço seguro para armazenar, gerenciar e buscar imagens de contêiner ou outros pacotes. Há muitos exemplos de registros, como: 
- {% data variables.product.prodname_container_registry %} do {% data variables.product.company_short %}, o Registro de Contêiner do Azure e o DockerHub para imagens de contêiner
- O {% data variables.product.prodname_npm_registry %} para pacotes do Node.js.

Certos registros do {% data variables.product.prodname_registry %}, incluindo o {% data variables.product.prodname_container_registry %}, podem ser configurados para permitir que os pacotes sejam extraídos sem problemas para {% data variables.product.prodname_github_codespaces %} durante a criação do codespace, sem precisar fornecer nenhuma credencial de autenticação.

Para acessar outros registros de imagem de contêiner, você pode criar segredos no {% data variables.product.prodname_dotcom %} para armazenar os dados de acesso, o que permitirá que o {% data variables.product.prodname_github_codespaces %} acesse as imagens armazenadas nesse registro.

## Como acessar pacotes armazenados em registros com permissões granulares

Registros {% data variables.product.prodname_registry %} que dão suporte a permissões granulares, incluindo o {% data variables.product.prodname_container_registry %}, fornecem a maneira mais fácil para o {% data variables.product.prodname_github_codespaces %} consumir pacotes. Para ver a lista de registros do {% data variables.product.prodname_registry %} que dão suporte a permissões granulares e acesso contínuo a {% data variables.product.prodname_github_codespaces %}, confira "[Sobre permissões para {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."

### Como acessar um pacote publicado no mesmo repositório que o codespace

Se você publicar um pacote no mesmo repositório em que o codespace está sendo iniciado, será possível buscar automaticamente esse pacote na criação do codespace. Você não precisará fornecer nenhuma credencial adicional, a menos que a opção **Herdar acesso do repositório** tenha sido desmarcada quando o pacote foi publicado.

#### Herdar o acesso do repositório do qual um pacote foi publicado

Por padrão, o pacote herda a configuração de acesso do repositório do qual foi publicado. Por exemplo, se o repositório for público, o pacote também será público. Se o repositório for privado, o pacote também será privado, mas acessível a partir do repositório.

Esse comportamento é controlado pela opção **Herdar acesso do repositório**. **Herdar acesso do repositório** é selecionado por padrão ao publicar por meio de {% data variables.product.prodname_actions %}, mas não ao publicar diretamente em um registro usando um {% data variables.product.pat_generic %}.

Se a opção **Herdar acesso do repositório** não foi selecionada quando o pacote foi publicado, você poderá adicionar manualmente o repositório aos controles de acesso do pacote publicado. Para obter mais informações, confira "[Como configurar o controle de acesso e a visibilidade de um pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#inheriting-access-for-a-container-image-from-a-repository)".

### Acessar um pacote publicado para a organização na qual um codespace será inicializado

Se você deseja que um pacote seja acessível a todos os codespaces em uma organização, recomendamos que você publique o pacote com visibilidade interna. Isso tornará o pacote automaticamente visível para todos os codespaces dentro da organização, a menos que o repositório do qual o codespace é inicializado seja público.

Se o codespace estiver sendo inicializado de um repositório público referenciando um pacote interno ou privado, você deverá permitir manualmente o acesso do repositório público ao pacote interno. Isso evita que o pacote interno vaze acidentalmente para o público. Para obter mais informações, confira "[Como garantir que os codespaces acessem seu pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)".

### Acessar um pacote privado de um subconjunto de repositórios em uma organização

Se você deseja permitir que um subconjunto dos repositórios de uma organização acesse um pacote, ou permitir que um pacote interno ou privado seja acessado de um codespace inicializado em um repositório público, você pode adicionar repositórios manualmente às configurações de acesso de um pacote. Para obter mais informações, confira "[Como garantir que os codespaces acessem seu pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)".

### Como publicar um pacote de um codespace

O acesso contínuo de um codespace para um registro é limitado a efetuar pull de pacotes. Se você deseja publicar um pacote de dentro de um codespace, deve usar um {% data variables.product.pat_v1 %} com o escopo `write:packages`.

Recomendamos a publicação de pacotes via {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Como publicar imagens do Docker](/actions/publishing-packages/publishing-docker-images)" e "[Como publicar pacotes Node.js](/actions/publishing-packages/publishing-nodejs-packages)".

## Como acessar imagens armazenadas em outros registros

Você pode definir segredos para permitir que o {% data variables.product.prodname_github_codespaces %} acesse registros de imagem de contêiner que não sejam {% data variables.product.prodname_container_registry %} do {% data variables.product.company_short %}. Se você estiver acessando uma imagem de contêiner de um registro que não oferece suporte ao acesso contínuo, o {% data variables.product.prodname_github_codespaces %} verificará a presença de três segredos, que definirão o nome do servidor, nome de usuário e {% data variables.product.pat_generic %} para um registro. Se esses segredos forem encontrados, o {% data variables.product.prodname_github_codespaces %} disponibilizará o registro dentro do seu codespace.

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

Se você tendo problemas para extrair uma imagem de um registro de imagem privada, verifique se consegue executar `docker login -u <user> -p <password> <server>` usando os valores dos segredos definidos acima. Se o login falhar, certifique-se de que as credenciais de login sejam válidas e que você tenha as permissões apropriadas no servidor para buscar uma imagem de contêiner. Se o login for bem-sucedido, certifique-se de que esses valores são copiados adequadamente para os segredos de {% data variables.product.prodname_github_codespaces %} corretos, seja no nível de usuário, repositório ou organização e tente novamente.
