---
title: Trabalhando com o registro do Docker
intro: '{% ifversion fpt or ghec %}O registro do Docker foi substituído pelo {% data variables.product.prodname_container_registry %}.{% else %}Você pode fazer push e pull das imagens Docker usando o Docker de {% data variables.product.prodname_registry %}{% endif %}'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-docker-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-docker-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-docker-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages
  - /packages/guides/container-guides-for-github-packages/configuring-docker-for-use-with-github-packages
  - /packages/guides/configuring-docker-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Docker registry
ms.openlocfilehash: f5d37e74f93535fd48f3400ef0b504825aadc657
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147888449'
---
<!-- Main versioning block. Short page for dotcom -->
{% ifversion fpt or ghec %}

O registro do Docker do {% data variables.product.prodname_dotcom %} (que usava o namespace `docker.pkg.github.com`) foi substituído pelo {% data variables.product.prodname_container_registry %} (que usa o namespace `https://ghcr.io`). O {% data variables.product.prodname_container_registry %} oferece benefícios como, por exemplo, permissões granulares e otimização de armazenamento para imagens Docker.

As imagens do Docker armazenadas anteriormente no registro do Docker estão sendo automaticamente transferidas para {% data variables.product.prodname_container_registry %}. Para obter mais informações, confira "[Como migrar para o {% data variables.product.prodname_container_registry %} do registro do Docker](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)" e "[Como trabalhar com o {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".

{% else %}
<!-- The remainder of this article is displayed for releases that don't support the Container registry -->

{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Sobre o suporte ao Docker

Ao instalar ou publicar uma imagem do Docker, o registro do Docker atualmente não é compatível com camadas externas como, por exemplo, as imagens do Windows.

## Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Efetuando a autenticação com um token de acesso pessoal

{% data reusables.package_registry.required-scopes %}

Você pode se autenticar no {% data variables.product.prodname_registry %} usando o comando de logon `docker` do Docker.

Para manter suas credenciais seguras, recomendamos que você salve seu token de acesso pessoal em um arquivo local no computador e use o sinalizador `--password-stdin` do Docker, que lê o token por meio de um arquivo local.

{% ifversion fpt or ghec %} {% raw %}
  ```shell
  $ cat <em>~/TOKEN.txt</em> | docker login https://docker.pkg.github.com -u <em>USERNAME</em> --password-stdin
  ```
{% endraw %} {% endif %}

{% ifversion ghes or ghae %} {% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio habilitado: {% endif %} {% raw %}
 ```shell
 $ cat <em>~/TOKEN.txt</em> | docker login docker.HOSTNAME -u <em>USERNAME</em> --password-stdin
```
{% endraw %} {% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio desabilitado:

{% raw %}
 ```shell
 $ cat <em>~/TOKEN.txt</em> | docker login <em>HOSTNAME</em> -u <em>USERNAME</em> --password-stdin
```
{% endraw %} {% endif %}

{% endif %}

Para usar este exemplo de comando de logon, substitua `USERNAME` pelo seu nome de usuário do {% data variables.product.product_name %} {% ifversion ghes or ghae %}, `HOSTNAME` pela URL do {% data variables.product.product_location %}{% endif %} e `~/TOKEN.txt` pelo caminho do arquivo para o token de acesso pessoal do {% data variables.product.product_name %}.

Para obter mais informações, confira "[Logon do Docker](https://docs.docker.com/engine/reference/commandline/login/#provide-a-password-using-stdin)".

## Publicar uma imagem

{% data reusables.package_registry.docker_registry_deprecation_status %}

{% note %}

**Observação:** os nomes das imagens só devem usar letras minúsculas.

{% endnote %}

O {% data variables.product.prodname_registry %} aceita várias imagens do Docker de nível superior por repositório. Um repositório pode ter qualquer número de tags de imagem. Você poderá conhecer uma publicação de serviço degradada ou instalar imagens do Docker com tamanho superior a 10 GB. As camadas são limitadas em 5 GB cada. Para obter mais informações, confira "[Marca do Docker](https://docs.docker.com/engine/reference/commandline/tag/)" na documentação do Docker.

{% data reusables.package_registry.viewing-packages %}

1. Determine o nome e a ID da imagem do Docker usando `docker images`.
  ```shell
  $ docker images
  > <&nbsp>
  > REPOSITORY        TAG        IMAGE ID       CREATED      SIZE
  > <em>IMAGE_NAME</em>        <em>VERSION</em>    <em>IMAGE_ID</em>       4 weeks ago  1.11MB
  ```
2. Ao usar a ID de imagem do Docker, marque a imagem do Docker substituindo *OWNER* pelo nome da conta de usuário ou de organização que é o proprietário do repositório, *REPOSITORY* pelo nome do repositório que contém o projeto, *IMAGE_NAME* pelo nome do pacote ou da imagem,{% ifversion ghes or ghae %} *HOSTNAME* pelo nome do host do {% data variables.product.product_location %}{% endif %} e *VERSION* pela versão do pacote no momento do build.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %} {% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio habilitado: {% endif %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio desabilitado:
  ```shell
  $ docker tag <em>IMAGE_ID</em> <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %} {% endif %}
3. Se você ainda não compilou uma imagem do Docker para o pacote, compile a imagem substituindo *OWNER* pelo nome da conta de usuário ou de organização que é o proprietário do repositório, *REPOSITORY* pelo nome do repositório que contém o projeto, *IMAGE_NAME* pelo nome do pacote ou da imagem, *VERSION* pela versão do pacote no momento do build,{% ifversion ghes or ghae %} *HOSTNAME* pelo nome do host do {% data variables.product.product_location %}{% endif %} e *PATH* pela imagem se não está no diretório de trabalho atual.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker build -t docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% else %} {% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio habilitado: {% endif %}
  ```shell
  $ docker build -t docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio desabilitado:
  ```shell
  $ docker build -t <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% endif %} {% endif %}
4. Publicar a imagem no {% data variables.product.prodname_registry %}.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker push docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %} {% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio habilitado: {% endif %}
  ```shell
  $ docker push docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio desabilitado:
  ```shell
  $ docker push <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %} {% endif %} {% note %}

  **Observação:** efetue push da imagem usando `IMAGE_NAME:VERSION` e não `IMAGE_NAME:SHA`.

  {% endnote %}

### Exemplo de publicação de uma imagem do Docker

{% ifversion ghes %} Esses exemplos pressupõem que a sua instância tenha o isolamento de subdomínio habilitado.
{% endif %}

Você pode publicar a versão 1.0 da imagem `monalisa` no repositório `octocat/octo-app` usando uma ID de imagem.

{% ifversion fpt or ghec %}
```shell
$ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# Tag the image with <em>OWNER/REPO/IMAGE_NAME</em>
$ docker tag c75bebcdd211 docker.pkg.github.com/octocat/octo-app/monalisa:1.0

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.pkg.github.com/octocat/octo-app/monalisa:1.0
```

{% else %}

```shell
$ docker images

> REPOSITORY           TAG      IMAGE ID      CREATED      SIZE
> monalisa             1.0      c75bebcdd211  4 weeks ago  1.11MB

# Tag the image with <em>OWNER/REPO/IMAGE_NAME</em>
$ docker tag c75bebcdd211 docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0
```

{% endif %}

Você pode publicar uma nova imagem do Docker pela primeira vez e dar a ela o nome `monalisa`.

{% ifversion fpt or ghec %}
```shell
# Build the image with docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
# Assumes Dockerfile resides in the current working directory (.)
$ docker build -t docker.pkg.github.com/octocat/octo-app/monalisa:1.0 .

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.pkg.github.com/octocat/octo-app/monalisa:1.0
```

{% else %}
```shell
# Build the image with docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
# Assumes Dockerfile resides in the current working directory (.)
$ docker build -t docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0 .

# Push the image to {% data variables.product.prodname_registry %}
$ docker push docker.<em>HOSTNAME</em>/octocat/octo-app/monalisa:1.0
```
{% endif %}

## Baixando uma imagem

{% data reusables.package_registry.docker_registry_deprecation_status %}

Use o comando `docker pull` para instalar uma imagem do Docker por meio do {% data variables.product.prodname_registry %}, substituindo *OWNER* pelo nome da conta de usuário ou de organização que é o proprietário do repositório, *REPOSITORY* pelo nome do repositório que contém o projeto, *IMAGE_NAME* pelo nome do pacote ou da imagem, {% ifversion ghes or ghae %} *HOSTNAME* pelo nome do host do {% data variables.product.product_location %} {% endif %} e *TAG_NAME* pela marca da imagem que deseja instalar.

{% ifversion fpt or ghec %}
```shell
$ docker pull docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% else %}
<!--Versioning out this "subdomain isolation enabled" line because it's the only option for GHES 2.22 so it can be misleading.-->
{% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio habilitado: {% endif %}
```shell
$ docker pull docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio desabilitado:
```shell
$ docker pull <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% endif %} {% endif %}

{% note %}

**Observação:** efetue pull da imagem usando `IMAGE_NAME:VERSION` e não `IMAGE_NAME:SHA`.

{% endnote %}

## Leitura adicional

- "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)"

{% endif %}  <!-- End of main versioning block -->
