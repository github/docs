---
title: Trabalhando com o registro do Docker
intro: '{% ifversion fpt or ghec %}The Docker registry has now been replaced by the {% data variables.product.prodname_container_registry %}.{% else %}You can push and pull your Docker images using the {% data variables.product.prodname_registry %} Docker registry, which uses the package namespace `https://docker.pkg.github.com`.{% endif %}'
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
shortTitle: Registro Docker
---

<!-- Main versioning block. Short page for dotcom -->
{% ifversion fpt or ghec %}

O registro do Docker d e{% data variables.product.prodname_dotcom %} (que usou o namespace `docker.pkg.github.com`) foi substituído por {% data variables.product.prodname_container_registry %} (que usa o namespace `https://ghcr.io`). O {% data variables.product.prodname_container_registry %} oferece benefícios como, por exemplo, permissões granulares e otimização de armazenamento para imagens Docker.

As imagens do Docker armazenadas anteriormente no registro do Docker estão sendo automaticamente transferidas para {% data variables.product.prodname_container_registry %}. Para obter mais informações, consulte "[Fazendo a migração {% data variables.product.prodname_container_registry %} a partir do registro Docker](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry)" e "[Trabalhando com o {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".

{% else %}
<!-- The remainder of this article is displayed for releases that don't support the Container registry -->

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

**Note:** When installing or publishing a docker image, {% data variables.product.prodname_registry %} does not currently support foreign layers, such as Windows images.

## Sobre o suporte ao Docker

Ao instalar ou publicar uma imagem do Docker, o registro do Docker atualmente não é compatível com camadas externas como, por exemplo, as imagens do Windows.

## Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Efetuando a autenticação com um token de acesso pessoal

{% data reusables.package_registry.required-scopes %}

Você pode efetuar a autenticação no {% data variables.product.prodname_registry %} usando o comando de login do `docker`.

Para manter suas credenciais seguras, recomendamos que você salve seu token de acesso pessoal em um arquivo local no seu computador e use o sinalizador `--password-stdin` do Docker que lê o seu token a partir de um arquivo local.

{% ifversion fpt or ghec %}
{% raw %}
  ```shell
  $ cat <em>~/TOKEN.txt</em> | docker login https://docker.pkg.github.com -u <em>USERNAME</em> --password-stdin
  ```
{% endraw %}
{% endif %}

{% ifversion ghes or ghae %}
{% ifversion ghes %}
Se sua instância tem o isolamento de subdomínio habilitado:
{% endif %}
{% raw %}
 ```shell
 $ cat <em>~/TOKEN.txt</em> | docker login docker.HOSTNAME -u <em>USERNAME</em> --password-stdin
```
{% endraw %}
{% ifversion ghes %}
Se sua instância tem o isolamento de subdomínio desabilitado:

{% raw %}
 ```shell
 $ cat <em>~/TOKEN.txt</em> | docker login <em>HOSTNAME</em> -u <em>USERNAME</em> --password-stdin
```
{% endraw %}
{% endif %}

{% endif %}

To use this example login command, replace `USERNAME` with your {% data variables.product.product_name %} username{% ifversion ghes or ghae %}, `HOSTNAME` with the URL for {% data variables.product.product_location %},{% endif %} and `~/TOKEN.txt` with the file path to your personal access token for {% data variables.product.product_name %}.

Para obter mais informações, consulte "[Login do Docker](https://docs.docker.com/engine/reference/commandline/login/#provide-a-password-using-stdin)".

## Publicar uma imagem

{% data reusables.package_registry.docker_registry_deprecation_status %}

{% note %}

**Observação:** Os nomes de imagem devem usar apenas letras minúsculas.

{% endnote %}

O {% data variables.product.prodname_registry %} aceita várias imagens do Docker de nível superior por repositório. Um repositório pode ter qualquer número de tags de imagem. Você poderá conhecer uma publicação de serviço degradada ou instalar imagens do Docker com tamanho superior a 10 GB. As camadas são limitadas em 5 GB cada. Para obter mais informações, consulte "[Tag do Docker](https://docs.docker.com/engine/reference/commandline/tag/)" na documentação Docker.

{% data reusables.package_registry.viewing-packages %}

1. Determine o nome da imagem e o ID da sua imagem do docker usando `imagens do docker`.
  ```shell
  $ docker images
  > <&nbsp>
  > REPOSITORY        TAG        IMAGE ID       CREATED      SIZE
  > <em>IMAGE_NAME</em>        <em>VERSION</em>    <em>IMAGE_ID</em>       4 weeks ago  1.11MB
  ```
2. Ao usar o ID de imagem Docker, marque a imagem do docker, substituindo *OWNER* pelo nome do usuário ou conta de organização proprietária do repositório, *REPOSITORY* pelo nome do repositório que contém o seu projeto, *IMAGE_NAME* pelo nome do pacote ou imagem,{% ifversion ghes or ghae %} *HOSTNAME* pelo nome do host de {% data variables.product.product_location %}{% endif %} e *VERSION* pela versão do pacote no momento da compilação.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %}
  {% ifversion ghes %}
  Se sua instância tem o isolamento de subdomínio habilitado:
  {% endif %}
  ```shell
  $ docker tag <em>IMAGE_ID</em> docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% ifversion ghes %}
  Se sua instância tem o isolamento de subdomínio desabilitado:
  ```shell
  $ docker tag <em>IMAGE_ID</em> <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %}
  {% endif %}
3. Se você ainda não criou uma imagem d docker para o pacote, crie a imagem, substituindo *OWNER* pelo nome do usuário ou conta de organização proprietária do repositório, *REPOSITÓRIO* com o nome do repositório que contém o seu projeto, *IMAGE_NAME* com o nome do pacote ou imagem, *VERSÃO* com a versão do pacote na hora da compilação,{% ifversion ghes or ghae %} *HOSTNAME* com o nome do host de {% data variables.product.product_location %},{% endif %} e *PATH* para a imagem se não estiver no diretório de trabalho atual.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker build -t docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% else %}
  {% ifversion ghes %}
  Se sua instância tem o isolamento de subdomínio habilitado:
  {% endif %}
  ```shell
  $ docker build -t docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% ifversion ghes %}
  Se sua instância tem o isolamento de subdomínio desabilitado:
  ```shell
  $ docker build -t <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em> <em>PATH</em>
  ```
  {% endif %}
  {% endif %}
4. Publicar a imagem no {% data variables.product.prodname_registry %}.
  {% ifversion fpt or ghec %}
  ```shell
  $ docker push docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% else %}
  {% ifversion ghes %}
  Se sua instância tem o isolamento de subdomínio habilitado:
  {% endif %}
  ```shell
  $ docker push docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% ifversion ghes %}
  Se sua instância tem o isolamento de subdomínio desabilitado:
  ```shell
  $ docker push <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
  ```
  {% endif %}
  {% endif %}
  {% note %}

  **Observação:** Você deve enviar sua imagem usando `IMAGE_NAME:VERSION` e não `IMAGE_NAME:SHA`.

  {% endnote %}

### Exemplo de publicação de uma imagem do Docker

{% ifversion ghes %}
Esses exemplos assumem que sua instância tem o isolamento de subdomínio habilitado.
{% endif %}

Você pode publicar a versão 1.0 da imagem de `monalisa` para o repositório `octocat/octo-app` usando um ID de imagem.

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

Você pode publicar uma nova imagem do Docker pela primeira vez e nomeá-la como `monalisa`.

{% ifversion fpt or ghec %}
```shell
# Build the image with docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:VERSION</em>
# Assumes Dockerfile resides in the current working directory (.)
$ docker build -t docker.pkg.github.com/octocat/octo-app/monalisa:1.0 .
$ docker build -t docker.pkg.github.com/octocat/octo-app/monalisa:1.0 .

# Faça push da imagem no {% data variables.product.prodname_registry %}
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

## Fazer o download de uma imagem

{% data reusables.package_registry.docker_registry_deprecation_status %}

Você pode usar o comando `docker pull` para instalar uma imagem do docker a partir de {% data variables.product.prodname_registry %}, substituindo *OWNER* pelo nome do usuário ou conta de organização proprietária do repositório, *REPOSITÓRIO* pelo nome do repositório que contém seu projeto, *IMAGE_NAME* pelo nome do pacote ou da imagem, {% ifversion ghes or ghae %} *HOSTNAME* pelo nome do host {% data variables.product.product_location %}, {% endif %} e *TAG_NAME* éla tag para a imagem que você deseja instalar.

{% ifversion fpt or ghec %}
```shell
$ docker pull docker.pkg.github.com/<em>OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% else %}
<!--Versioning out this "subdomain isolation enabled" line because it's the only option for GHES 2.22 so it can be misleading.-->
{% ifversion ghes %}
Se sua instância tem o isolamento de subdomínio habilitado:
{% endif %}
```shell
$ docker pull docker.<em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% ifversion ghes %}
Se sua instância tem o isolamento de subdomínio desabilitado:
```shell
$ docker pull <em>HOSTNAME/OWNER/REPOSITORY/IMAGE_NAME:TAG_NAME</em>
```
{% endif %}
{% endif %}

{% note %}

**Nota:** Você deve fazer pull da imagem usando `IMAGE_NAME:VERSION` e não usar `IMAGE_NAME:SHA`.

{% endnote %}

## Leia mais

- "{% ifversion fpt or ghes > 3.0 or ghec %}[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif ghes < 3.1 or ghae %}[Deleting a package](/packages/learn-github-packages/deleting-a-package){% endif %}"

{% endif %}  <!-- End of main versioning block -->
