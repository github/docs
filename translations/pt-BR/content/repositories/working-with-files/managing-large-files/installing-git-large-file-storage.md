---
title: Instalar o Git Large File Storage
intro: 'Para usar o {% data variables.large_files.product_name_short %}, você precisará baixar e instalar um novo programa separado do Git.'
redirect_from:
  - /articles/installing-large-file-storage
  - /articles/installing-git-large-file-storage
  - /github/managing-large-files/installing-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/installing-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Install Git LFS
ms.openlocfilehash: b7078a3147ed610ff67bdc4b0bdce93158279a94
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126957'
---
{% mac %}

1. Navegue até [git-lfs.github.com](https://git-lfs.github.com) e clique em **Baixar**. Como alternativa, é possível instalar o {% data variables.large_files.product_name_short %} usando um gerenciador de pacotes:
    - Para usar o [Homebrew](http://brew.sh/), execute `brew install git-lfs`.
    - Para usar o [MacPorts](https://www.macports.org/), execute `port install git-lfs`.

 Se você instalar o {% data variables.large_files.product_name_short %} com Homebrew ou MacPorts, passe para a etapa 6.

2. Em seu computador, localize e descompacte o arquivo que foi baixado.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Mude o diretório de trabalho atual para o folder que você baixou e descompactou.
  ```shell
  $ cd ~/Downloads/git-lfs-<em>1.X.X</em>
  ```
 {% note %}

 **Observação:** o caminho do arquivo que você usa depois de `cd` depende de seu sistema operacional, da versão do Git LFS que você baixou e do local em que você salvou o download do {% data variables.large_files.product_name_short %}.

 {% endnote %}
4. Para instalar o arquivo, execute este comando:
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **Observação:** talvez seja necessário usar `sudo ./install.sh` para instalar o arquivo.

 {% endnote %}
5. Verifique se a instalação foi bem-sucedida:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Se você não vir uma mensagem indicando que `git {% data variables.large_files.command_name %} install` foi bem-sucedido, entre em contato com o {% data variables.contact.contact_support %}. Certifique-se de incluir o nome de seu sistema operacional.

{% endmac %}

{% windows %}

1. Navegue até [git-lfs.github.com](https://git-lfs.github.com) e clique em **Baixar**.

  {% tip %}

  **Dica:** para obter mais informações sobre maneiras alternativas de instalar o {% data variables.large_files.product_name_short %} no Windows, veja este [Guia de introdução](https://github.com/github/git-lfs#getting-started).

  {% endtip %}
2. Em seu computador, localize o arquivo que foi baixado.
3. Clique duas vezes sobre o arquivo denominado *git-lfs-windows-1.X.X.exe*, em que 1.X.X é substituído pela versão do Git LFS que você baixou. Quando você abrir esse arquivo, o Windows executará um assistente de configuração para instalar o {% data variables.large_files.product_name_short %}.
{% data reusables.command_line.open_the_multi_os_terminal %}
5. Verifique se a instalação foi bem-sucedida:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Se você não vir uma mensagem indicando que `git {% data variables.large_files.command_name %} install` foi bem-sucedido, entre em contato com o {% data variables.contact.contact_support %}. Certifique-se de incluir o nome de seu sistema operacional.

{% endwindows %}

{% linux %}

1. Navegue até [git-lfs.github.com](https://git-lfs.github.com) e clique em **Baixar**.

  {% tip %}

  **Dica:** para obter mais informações sobre maneiras alternativas de instalar o {% data variables.large_files.product_name_short %} no Linux, veja este [Guia de introdução](https://github.com/github/git-lfs#getting-started).

  {% endtip %}
2. Em seu computador, localize e descompacte o arquivo que foi baixado.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Mude o diretório de trabalho atual para o folder que você baixou e descompactou.
  ```shell
  $ cd ~/Downloads/git-lfs-<em>1.X.X</em>
  ```
 {% note %}

 **Observação:** o caminho do arquivo que você usa depois de `cd` depende de seu sistema operacional, da versão do Git LFS que você baixou e do local em que você salvou o download do {% data variables.large_files.product_name_short %}.

 {% endnote %}
4. Para instalar o arquivo, execute este comando:
  ```shell
  $ ./install.sh
  > {% data variables.large_files.product_name_short %} initialized.
  ```
 {% note %}

 **Observação:** talvez seja necessário usar `sudo ./install.sh` para instalar o arquivo.

 {% endnote %}
5. Verifique se a instalação foi bem-sucedida:
  ```shell
  $ git {% data variables.large_files.command_name %} install
  > {% data variables.large_files.product_name_short %} initialized.
  ```
6. Se você não vir uma mensagem indicando que `git {% data variables.large_files.command_name %} install` foi bem-sucedido, entre em contato com o {% data variables.contact.contact_support %}. Certifique-se de incluir o nome de seu sistema operacional.

{% endlinux %}

## Leitura adicional

- "[Como configurar o {% data variables.large_files.product_name_long %}](/articles/configuring-git-large-file-storage)"
