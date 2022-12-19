---
title: Usando as extensões de CLI do GitHub
intro: 'Aprenda a usar extensões personalizadas escritas por outros usuários de {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
ms.openlocfilehash: 14bd68ea6cec8df656e59c05f6cd3fa313857158
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145065529'
---
## Sobre extensões de {% data variables.product.prodname_cli %}

{% note %}

**Observação:** as extensões fora do {% data variables.product.product_name %} e da {% data variables.product.prodname_cli %} não são certificadas pelo {% data variables.product.product_name %} e são regidas por termos de serviço, política de privacidade e documentação de suporte separados. Para mitigar o risco ao usar extensões de terceiros, faça a auditoria do código-fonte da extensão antes de instalá-la ou atualizá-la.

{% endnote %}

{% data reusables.cli.cli-extensions %} Para obter mais informações sobre como criar extensões da {% data variables.product.prodname_cli %}, confira "[Como criar extensões da {% data variables.product.prodname_cli %}](/github-cli/github-cli/creating-github-cli-extensions)".

As extensões são instaladas localmente e têm seu escopo definido para o usuário. Portanto, se você acessar {% data variables.product.prodname_cli %} de uma máquina diferente ou outro usuário acessar {% data variables.product.prodname_cli %} da mesma máquina, a extensão não estará disponível.

## Encontrar extensões

Encontre extensões navegando por [repositórios com o tópico `gh-extension`](https://github.com/topics/gh-extension).

## Instalar extensões

Para instalar uma extensão, use o subcomando `extensions install`. Substitua o parâmetro `repo` pelo repositório da extensão. Use a URL completa, como `https://github.com/octocat/gh-whoami`, ou apenas o proprietário e o repositório, como `octocat/gh-whoami`.

Se o proprietário e o repositório forem usados, o `gh` instalará a extensão usando o nome do host no qual o `gh` está autenticado no momento. O formato completo da URL é útil ao instalar extensões de um host diferente. Por exemplo, os usuários em {% data variables.product.prodname_ghe_server %} devem usar a URL completa do repositório para instalar extensões de {% data variables.product.prodname_dotcom_the_website %} ou de qualquer outro host.

Para instalar uma extensão em desenvolvimento do diretório atual, use `.` como o valor do parâmetro `repo`.

```shell
gh extension install <em>repo</em>
```

Se você já tem uma extensão com o mesmo nome instalado, o comando irá falhar. Por exemplo, se você tiver o `octocat/gh-whoami` instalado, precisará desinstalá-lo antes de instalar o `hubot/gh-whoami`.

## Visualizando extensões instaladas

Para ver todas as extensões instaladas, use o subcomando `extensions list`. A saída também informará quais extensões possuem atualizações disponíveis.

```shell
gh extension list
```

## Atualizar extensões

Para atualizar uma extensão, use o subcomando `extensions upgrade`. Substitua o parâmetro `extension` pelo nome da extensão.

```shell
gh extension upgrade <em>extension</em>
```

Para atualizar todas as extensões instaladas, use o sinalizador `--all`.

```shell
gh extension upgrade --all
```

## Desinstalar extensões

Para desinstalar uma extensão, use o subcomando `extensions remove`. Substitua o parâmetro `extension` pelo nome da extensão.

```shell
gh extension remove <em>extension</em>
```
