---
title: Suporte do arquivo Docker para GitHub Actions
shortTitle: Dockerfile support
intro: 'Ao criar um `Dockerfile` para uma ação do contêiner Docker, você deverá ter em mente como algumas instruções do Docker interagem com o GitHub Actions e com um arquivo de metadados da ação.'
redirect_from:
  - /actions/building-actions/dockerfile-support-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
ms.openlocfilehash: 6e061e479f4988398cbdc92114e387a3055734af
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145083685'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre as instruções do arquivo Docker

Um `Dockerfile` contém instruções e argumentos que definem o conteúdo e o comportamento de inicialização de um contêiner do Docker. Para obter mais informações sobre as instruções às quais o Docker dá suporte, confira "[Referência do Dockerfile](https://docs.docker.com/engine/reference/builder/)" na documentação do Docker.

## Instruções e substituições do arquivo Docker

Algumas instruções do Docker interagem com o GitHub Actions e um arquivo de metadados pode substituir algumas instruções do Docker. Certifique-se de que você esteja familiarizado com a forma como o arquivo Docker interage com {% data variables.product.prodname_actions %} para evitar comportamento inesperado.

### USER

As ações do Docker devem ser executadas pelo usuário-padrão do Docker (raiz). Não use a instrução `USER` no `Dockerfile`, porque você não poderá acessar o `GITHUB_WORKSPACE`. Para obter mais informações, confira "[Como usar variáveis de ambiente](/actions/configuring-and-managing-workflows/using-environment-variables)" e [Referência de USER](https://docs.docker.com/engine/reference/builder/#user) na documentação do Docker.

### FROM

A primeira instrução no `Dockerfile` precisa ser `FROM`, que seleciona uma imagem base do Docker. Para obter mais informações, confira a [Referência de FROM](https://docs.docker.com/engine/reference/builder/#from) na documentação do Docker.

Estas são algumas melhores práticas ao definir o argumento `FROM`:

- Recomendamos o uso de imagens oficiais do Docker. Por exemplo, `python` ou `ruby`.
- Use uma tag da versão, se houver, preferencialmente com uma versão principal. Por exemplo, use `node:10` ao invés de `node:latest`.
- Recomendamos usar imagens do Docker com base no sistema operacional [Debian](https://www.debian.org/).

### WORKDIR

O {% data variables.product.product_name %} define o caminho do diretório de trabalho na variável de ambiente `GITHUB_WORKSPACE`. Recomendamos não usar a instrução `WORKDIR` no `Dockerfile`. Antes da execução da ação, o {% data variables.product.product_name %} montará o diretório `GITHUB_WORKSPACE` em qualquer item que estava naquele local na imagem do Docker e definirá `GITHUB_WORKSPACE` como o diretório de trabalho. Para obter mais informações, confira "[Como usar variáveis de ambiente](/actions/configuring-and-managing-workflows/using-environment-variables)" e a [Referência de WORKDIR](https://docs.docker.com/engine/reference/builder/#workdir) na documentação do Docker.

### ENTRYPOINT

Se você definir `entrypoint` no arquivo de metadados de uma ação, ele substituirá o `ENTRYPOINT` definido no `Dockerfile`. Para obter mais informações, confira "[Sintaxe de metadados do {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions/#runsentrypoint)".

A instrução `ENTRYPOINT` do Docker tem um formulário _shell_ e um formulário _exec_. A documentação de `ENTRYPOINT` do Docker recomenda o uso do formulário _exec_ da instrução `ENTRYPOINT`. Para obter mais informações sobre os formulários _exec_ e _shell_, confira a [Referência de ENTRYPOINT](https://docs.docker.com/engine/reference/builder/#entrypoint) na documentação do Docker.

Você não deve usar `WORKDIR` para especificar o ponto de entrada no Dockerfile. Em vez disso, você edverá usar um caminho absoluto. Para obter mais informações, confira [WORKDIR](#workdir).

Se você configurar o contêiner para usar o formulário _exec_ da instrução `ENTRYPOINT`, os `args` configurados no arquivo de metadados da ação não serão executados em um shell de comando. Se os `args` da ação contiverem uma variável de ambiente, a variável não será substituída. Por exemplo, o uso do formato _exec_ a seguir não imprimirá o valor armazenado em `$GITHUB_SHA`, mas imprimirá `"$GITHUB_SHA"`.

```dockerfile
ENTRYPOINT ["echo $GITHUB_SHA"]
```

 Caso deseje fazer a substituição da variável, use o formulário _shell_ ou execute um shell diretamente. Por exemplo, usando o formato _exec_ a seguir, você pode executar um shell para imprimir o valor armazenado na variável de ambiente `GITHUB_SHA`.

```dockerfile
ENTRYPOINT ["sh", "-c", "echo $GITHUB_SHA"]
```

 Para fornecer os `args` definidos no arquivo de metadados da ação para um contêiner do Docker que usa o formulário _exec_, `ENTRYPOINT`recomendamos criar um script de shell com o nome `entrypoint.sh` que é chamado por meio da instrução `ENTRYPOINT`:

#### Exemplo de *Dockerfile*

```dockerfile
# Container image that runs your code
FROM debian:9.5-slim

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Executes `entrypoint.sh` when the Docker container starts up
ENTRYPOINT ["/entrypoint.sh"]
```

#### Exemplo de arquivo *entrypoint.sh*

Usando o exemplo de Dockerfile acima, o {% data variables.product.product_name %} enviará os `args` configurados no arquivo de metadados da ação como argumentos para `entrypoint.sh`. Adicione o [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) `#!/bin/sh` no início do arquivo `entrypoint.sh` para usar explicitamente o shell compatível com [POSIX](https://en.wikipedia.org/wiki/POSIX) do sistema.

``` sh
#!/bin/sh

# `$*` expands the `args` supplied in an `array` individually
# or splits `args` in a string separated by whitespace.
sh -c "echo $*"
```

O seu código deve ser executável. Verifique se o arquivo `entrypoint.sh` tem as permissões `execute` antes de usá-lo em um fluxo de trabalho. Você pode modificar as permissões a partir do seu terminal usando este comando:
  ``` sh
  chmod +x entrypoint.sh
  ```

Quando um script de shell `ENTRYPOINT` não for executável, você receberá um erro semelhante a este:

``` sh
Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"/entrypoint.sh\": permission denied": unknown
```

### CMD

Se você definir `args` no arquivo de metadados da ação, `args` substituirá a instrução `CMD` especificada no `Dockerfile`. Para obter mais informações, confira "[Sintaxe de metadados do {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#runsargs)".

Se você usar `CMD` no `Dockerfile`, siga estas diretrizes:

{% data reusables.actions.dockerfile-guidelines %}

## Recursos compatíveis com o Linux

{% data variables.product.prodname_actions %} suporta os recursos-padrão compatíveis com o Linux que são compatíveis com o Docker. Não é possível adicionar ou remover recursos. Para obter mais informações sobre as funcionalidades padrão do Linux compatíveis com o Docker, confira "[Privilégio de runtime e funcionalidades do Linux](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities)" na documentação do Docker. Para saber mais sobre as funcionalidades do Linux, confira "[Visão geral das funcionalidades do Linux](http://man7.org/linux/man-pages/man7/capabilities.7.html)" nas páginas do manual do Linux.
