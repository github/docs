---
title: Executar uma recompilação completa de um contêiner
intro: 'Se você tiver pouco espaço em disco ou quiser garantir que sua configuração de contêiner de desenvolvimento funcione em novos codespaces, poderá executar uma recompilação completa de um contêiner.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Full rebuilds
ms.openlocfilehash: f844d5f92073adf01c3b1a1100e6fe1912b2d7ad
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180833'
---
## Sobre a recompilação de um contêiner

Quando você trabalha em um codespace, seu ambiente de desenvolvimento é um contêiner do Docker executado em uma máquina virtual. Se você fizer alterações na configuração do contêiner de desenvolvimento de dentro de um codespace e quiser aplicar essas alterações ao codespace atual, precisará recompilar o contêiner.

Por padrão, quando você recompilar um contêiner, o {% data variables.product.prodname_github_codespaces %} acelerará o processo de compilação reutilizando imagens armazenadas em cache de compilações anteriores do contêiner. Essa geralmente é a maneira mais rápida de implementar alterações na configuração do contêiner de desenvolvimento, pelos motivos a seguir.
- {% data variables.product.prodname_github_codespaces %} pode reutilizar imagens em seu cache em vez de reposicioná-las de registros de contêiner.
- As partes da configuração do contêiner de desenvolvimento que definem como o contêiner é criado, como recursos de contêiner de desenvolvimento e instruções do Dockerfile, podem já ter sido implementadas em camadas de imagem em seu cache. Portanto, você não precisará esperar que esses processos sejam executados novamente. (No entanto, os comandos em sua configuração que são executados após a criação do contêiner, como `onCreateCommand`, serão executados novamente.)

Ocasionalmente, talvez você queira executar uma recompilação completa do contêiner. Com uma recompilação completa, o {% data variables.product.prodname_github_codespaces %} limpa todos os contêineres, imagens e volumes do Docker do cache e recria o contêiner com imagens extraídas recentemente. Toda a configuração definida será executada novamente, gerando novas camadas de imagem. Talvez você queira executar uma recompilação completa após muitas iterações de recompilação do contêiner com imagens armazenadas em cache, em situações a seguir.

- Você deseja garantir que a configuração definida não dependa de imagens armazenadas em cache e será executada conforme necessário quando alguém criar um novo codespace com base nela. Por exemplo, uma dependência pode ter sido removida da imagem base desde que foi extraída pela última vez para o seu codespace.
- Você quer liberar o espaço em disco usado pelo cache, por exemplo, se você tiver pouco espaço em disco ou quiser minimizar os encargos de armazenamento. O cache de imagens poderá estar usando uma quantidade significativa de espaço em disco se você tiver alterado a imagem base várias vezes, se tiver feito um grande número de alterações iterativas na configuração ou se estiver executando vários contêineres com o Docker Compose.

## Executar uma recompilação completa

Você pode executar uma recompilação completa em {% data variables.product.prodname_vscode %}.

{% data reusables.codespaces.command-pallette %}
1. Comece a digitar "Recompilar" e selecione **Codespaces: Full Rebuild Container**.

   ![Captura de tela do comando Full Rebuild Container no Command Pallette](/assets/images/help/codespaces/codespaces-rebuild-full.png)

## Persistir dados em uma recompilação completa

Todos os arquivos e pastas contidos no diretório `/workspaces` do seu codespace são sempre persistidos em uma recompilação. Você não precisa alterar ou adicionar nenhuma configuração para manter o conteúdo desse diretório em uma recompilação completa.

Se você quiser preservar os arquivos fora do diretório `/workspaces` em uma recompilação completa, poderá criar um link simbólico (symlink) para o diretório persistente no local desejado no contêiner. Por exemplo, no diretório `/workspaces/.devcontainer`, você pode criar um diretório `config` que será preservado em uma recompilação. Em seguida, você pode vincular o diretório `config` com um link simbólico e o conteúdo como um `postCreateCommand` no arquivo `devcontainer.json`.

```json  
{
    "image": "mcr.microsoft.com/vscode/devcontainers/base:alpine",
    "postCreateCommand": ".devcontainer/postCreate.sh"
}
```

No exemplo de arquivo `postCreate.sh` abaixo, o conteúdo do diretório `config` está simbolicamente vinculado ao diretório base.

```bash
#!/bin/bash
ln -sf $PWD/.devcontainer/config $HOME/config && set +x
```

## Leitura adicional
- [Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)
