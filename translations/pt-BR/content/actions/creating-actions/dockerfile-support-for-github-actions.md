---
title: Suporte do arquivo Docker para GitHub Actions
shortTitle: Docker
intro: 'Ao criar um "arquivo Docker" para uma ação do contêiner Docker, você deverá ter em mente como algumas instruções do Docker interagem com o GitHub Actions e com um arquivo de metadados da ação.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/building-actions/dockerfile-support-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: reference
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Sobre as instruções do arquivo Docker

Um `arquivo Docker` contém instruções e argumentos que definem o conteúdo e o comportamento inicial de um contêiner Docker. Para obter mais informações sobre o suporte de instruções do Docker, consulte "[Referência do arquivo Docker](https://docs.docker.com/engine/reference/builder/)" na documentação do Docker.

### Instruções e substituições do arquivo Docker

Algumas instruções do Docker interagem com o GitHub Actions e um arquivo de metadados pode substituir algumas instruções do Docker. Certifique-se de que você esteja familiarizado com a forma como o arquivo Docker interage com {% data variables.product.prodname_actions %} para evitar comportamento inesperado.

#### USUÁRIO

As ações do Docker devem ser executadas pelo usuário-padrão do Docker (raiz). Não use a instrução do `USUÁRIO` no seu `arquivo Docker`, pois você não poderá acessar o `GITHUB_WORKSPACE`. Para obter mais informações, consulte "[Usando variáveis de ambiente](/actions/configuring-and-managing-workflows/using-environment-variables)" e [referência do USUÁRIO](https://docs.docker.com/engine/reference/builder/#user) na documentação do Docker.

#### DE

A primeira instrução no `arquivo Docker` deve ser `DE`, que seleciona uma imagem-base para o Docker. Para obter mais informações, consulte [referência DE](https://docs.docker.com/engine/reference/builder/#from) na documentação do Docker.

Essas são algumas práticas recomendadas ao definir o argumento `DE`:

- Recomendamos o uso de imagens oficiais do Docker. Por exemplo, `python` ou `ruby`.
- Use uma tag da versão, se houver, preferencialmente com uma versão principal. Por exemplo, use `nó:10` em vez de `nó:latest`.
- Recomendamos o uso das imagens do Docker com base no sistema operacional [Debian](https://www.debian.org/).

#### WORKDIR

{% data variables.product.product_name %} define o caminho do diretório de trabalho na variável do ambiente `GITHUB_WORKSPACE`. Recomendamos não usar a instrução `WORKDIR` no seu `arquivo Docker`. Antes de a ação ser executada, {% data variables.product.product_name %} irá montar o diretório `GITHUB_WORKSPACE` na parte superior de qualquer que tenha sido o local na imagem do Docker e definir `GITHUB_WORKSPACE` como o diretório de trabalho. Para obter mais informações, consulte "[Usando variáveis do ambiente](/actions/configuring-and-managing-workflows/using-environment-variables)" e a [referência do WORKDIR ](https://docs.docker.com/engine/reference/builder/#workdir) na documentação do Docker.

#### ENTRYPOINT

Se você definir o `entrypoint` em um arquivo de metadados de uma ação, ele irá substituir o `ENTRYPOINT` definido no `arquivo Docker`. Para obter mais informações, consulte "[sintaxe dos metadados para {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions/#runsentrypoint)."

A instrução do `ENTRYPOINT` do Docker tem forma de _shell_ e forma de _exec_. A documentação do `ENTRYPOINT` do docker recomenda o uso da forma _exec_ da instrução do `ENTRYPOINT`. Para obter mais informações sobre as formas _exec_ e _shell_, consulte a referência ENTRYPOINT [](https://docs.docker.com/engine/reference/builder/#entrypoint) na documentação do Docker.

Se você configurar o seu contêiner para usar a forma _exec_ da instrução `ENTRYPOINT`, os `args` configurados no arquivo de metadados da ação não serão executados em um shell do comando. Se os `args` da ação contiverem uma variável do ambiente, esta não será substituída. Por exemplo, usar o formato _exec_ a seguir não imprimirá o valor armazenado em `$GITHUB_SHA`. Em vez disso, imprimirá `$GITHUB_SHA`.

```dockerfile
ENTRYPOINT ["echo $GITHUB_SHA"]
```

 Se você desejar uma substituição de variável, use a forma _shell_ ou execute um shell diretamente. Por exemplo, ao usar o formato _exec_ a seguir, você poderá executar um shell para imprimir o valor armazenado na variável do ambiente `GITHUB_SHA`.

```dockerfile
ENTRYPOINT ["sh", "-c", "echo $GITHUB_SHA"]
```

 Para fornecer os `args` definidos no arquivo de metadados da ação para um contêiner Dock que usa a forma _exec_ no `ENTRYPOINT`, recomendamos criar um script do shell denominado `entrypoint.sh` que você pode acessar a partir da instrução `ENTRYPOINT`:

##### Exemplo *arquivo Docker*

```dockerfile
# Container image that runs your code
FROM debian:stretch-20210329-slim

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Executes `entrypoint.sh` when the Docker container starts up
ENTRYPOINT ["/entrypoint.sh"]
```

##### Exemplo: arquivo *entrypoint.sh*

Ao usar o arquivo Docker acima, {% data variables.product.product_name %}, enviará os `args` configurados no arquivo de metadados da ação como argumentos para o`entrypoint.sh`. Adicione `#!/bin/sh`[shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) na parte superior do arquivo `entrypoint.sh` para usar explicitamente o shell conforme o [POSIX](https://en.wikipedia.org/wiki/POSIX) do sistema.

``` sh
#!/bin/sh

# `$*` expands the `args` supplied in an `array` individually
# or splits `args` in a string separated by whitespace.
sh -c "echo $*"
```

O seu código deve ser executável. Certifique-se de que o arquivo `entrypoint.sh`tenha permissões `de execução` antes de usá-lo em um fluxo de trabalho. Você pode modificar as permissões a partir do seu terminal usando este comando:
  ``` sh
  chmod +x entrypoint.sh
  ```

Quando o script do shell de um `ENTRYPOINT` não for executável, você receberá uma mensagem de erro semelhante à mensagem a seguir:

``` sh
Resposta de erro do daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"/entrypoint.sh\": permission denied": unknown
```

#### CMD

Se você definir os `args` no arquivo de metadados da ação, os `args` irão substituir a instrução `CMD` especificada no `arquivo Docker`. Para obter mais informações, consulte "[Sintaxe dos metadados para {% data variables.product.prodname_actions %}}](/actions/creating-actions/metadata-syntax-for-github-actions#runsargs)".

Se você usar `CMD` no seu `arquivo Docker`, siga essas diretrizes:

{% data reusables.github-actions.dockerfile-guidelines %}

### Recursos compatíveis com o Linux

{% data variables.product.prodname_actions %} suporta os recursos-padrão compatíveis com o Linux que são compatíveis com o Docker. Não é possível adicionar ou remover recursos. Para obter mais informações sobre os recursos-padrão compatíveis com o Linux e com o Docker, consulte "[Privilégio do momento de execução e recursos do Linux](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities)" na documentação do Docker. Para aprender mais sobre os recursos do Linux, consulte "[Visão geral dos recursos do Linux](http://man7.org/linux/man-pages/man7/capabilities.7.html)" nas páginas do manual do Linux.
