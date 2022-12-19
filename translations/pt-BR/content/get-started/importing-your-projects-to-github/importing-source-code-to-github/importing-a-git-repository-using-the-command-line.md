---
title: Importar um repositório Git usando a linha de comando
intro: '{% ifversion fpt %}Se o [GitHub Importer](/articles/importing-a-repository-with-github-importer) não for adequado aos seus propósitos, como quando o código existente está hospedado em uma rede privada, recomendamos que a importação seja feita usando a linha de comando.{% else %}A importação de projetos do Git usando a linha de comando é indicada quando o código existente está hospedado em uma rede privada.{% endif %}'
redirect_from:
  - /articles/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Import repo locally
ms.openlocfilehash: bd3a5e5ffca38250a74851444f6cac4cbb06eb53
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126720'
---
Antes de iniciar, certifique-se de que sabe:

- Seu nome de usuário {% data variables.product.product_name %}
- A URL de clone para o repositório externo, como `https://external-host.com/user/repo.git` ou `git://external-host.com/user/repo.git` (talvez com um `user@` na frente do nome de domínio `external-host.com`)

{% tip %}

Como demonstração, usaremos:

- Uma conta externa chamada **extuser**
- Um host do Git externo chamado `https://external-host.com`
- Uma conta pessoal do {% data variables.product.product_name %} chamada **ghuser**
- Um repositório no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} chamado **repo.git**

{% endtip %}

1. [Crie um repositório no {% data variables.product.product_name %}](/articles/creating-a-new-repository). Você importará o repositório Git externo para este novo repositório.
2. Na linha de comando, faça um clone "vazio" do repositório usando a URL clone externo. Isso criará uma cópia integral dos dados, mas sem um diretório de trabalho para editar arquivos, e garantirá uma exportação limpa e recente de todos os dados antigos.
  ```shell
  $ git clone --bare https://external-host.com/<em>extuser</em>/<em>repo.git</em>
  # Makes a bare clone of the external repository in a local directory
  ```
3. Faça o push do repositório clonado localmente em {% data variables.product.product_name %} usando a opção "mirror" (espelho), que assegura que todas as referências, como branches e tags, são copiadas para o repositório importado.
  ```shell
  $ cd <em>repo.git</em>
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>ghuser</em>/<em>repo.git</em>
  # Pushes the mirror to the new repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}
  ```
4. Remova o repositório local temporário.
  ```shell
  $ cd ..
  $ rm -rf <em>repo.git</em>
  ```
