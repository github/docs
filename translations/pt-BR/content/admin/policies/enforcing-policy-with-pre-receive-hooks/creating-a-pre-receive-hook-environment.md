---
title: Criar um ambiente de hook pre-receive
intro: 'Para executar hooks pre-receive, use o ambiente pre-receive padrão ou crie um ambiente personalizado.'
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-environment
  - /enterprise/admin/policies/creating-a-pre-receive-hook-environment
  - /admin/policies/creating-a-pre-receive-hook-environment
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Pre-receive hook environments
ms.openlocfilehash: 2c2a31a4092b475170449ba138d6f0798424206b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145094890'
---
Um ambiente de pré-recebimento do {% data variables.product.prodname_ghe_server %} é um ambiente [`chroot`](https://en.wikipedia.org/wiki/Chroot) do Linux. Como são executados em todos os eventos de push, os hooks pre-receive devem ser rápidos e leves. Em geral, o ambiente necessário para tais verificações é mínimo.

O {% data variables.product.prodname_ghe_server %} fornece um ambiente padrão que inclui estes pacotes: `awk`, `bash`, `coreutils`, `curl`, `find`, `gnupg`, `grep`, `jq` e `sed`.

Se você tiver um requisito específico que não é atendido por esse ambiente, como suporte para uma linguagem específica, crie e carregue seu ambiente `chroot` do Linux de 64 bits.

## Criar um ambiente de hook pre-receive usando o Docker

Você pode usar uma ferramenta de gerenciamento de contêineres do Linux para criar um ambiente de hook pre-receive. Este exemplo usa o [Alpine Linux](http://www.alpinelinux.org/) e o [Docker](https://www.docker.com/).

{% data reusables.linux.ensure-docker %}
2. Crie o arquivo `Dockerfile.alpine-3.3` que contém estas informações:

   ```
   FROM gliderlabs/alpine:3.3
   RUN apk add --no-cache git bash
   ```
3. No diretório de trabalho que contém `Dockerfile.alpine-3.3`, compile uma imagem:

   ```shell
   $ docker build -f Dockerfile.alpine-3.3 -t pre-receive.alpine-3.3 .
   > Sending build context to Docker daemon 12.29 kB
   > Step 1 : FROM gliderlabs/alpine:3.3
   >  ---> 8944964f99f4
   > Step 2 : RUN apk add --no-cache git bash
   >  ---> Using cache
   >  ---> 0250ab3be9c5
   > Successfully built 0250ab3be9c5
   ```
4. Crie um contêiner:

   ```shell
   $ docker create --name pre-receive.alpine-3.3 pre-receive.alpine-3.3 /bin/true
   ```
5. Exporte o contêiner do Docker para um arquivo `tar` compactado em `gzip`:

   ```shell
   $ docker export pre-receive.alpine-3.3 | gzip > alpine-3.3.tar.gz
   ```

   Este arquivo `alpine-3.3.tar.gz` está pronto para ser carregado no dispositivo do {% data variables.product.prodname_ghe_server %}.

## Criar um ambiente de hook pre-receive usando chroot

1. Crie um ambiente `chroot` do Linux.
2. Crie um arquivo `tar` compactado em `gzip` do diretório `chroot`.
   ```shell
   $ cd /path/to/chroot
   $ tar -czf /path/to/pre-receive-environment.tar.gz .
   ```

   {% note %}

   **Observações:**
   - Não inclua os principais caminhos de diretório de arquivos no arquivo TAR, como `/path/to/chroot`.
   - `/bin/sh` precisa existir e ser executável, como o ponto de entrada no ambiente chroot.
   - Ao contrário dos chroots tradicionais, o diretório `dev` não é necessário para o ambiente chroot em ganchos de pré-recebimento.

   {% endnote %}

Para obter mais informações sobre como criar um ambiente chroot, confira "[Chroot](https://wiki.debian.org/chroot)" no *wiki do Debian*, "[BasicChroot](https://help.ubuntu.com/community/BasicChroot)" no *wiki de Ajuda da Comunidade do Ubuntu* ou "[Como instalar o Alpine Linux em um chroot](http://wiki.alpinelinux.org/wiki/Installing_Alpine_Linux_in_a_chroot)" no *wiki do Alpine Linux*.

## Fazer upload de um ambiente de hook pre-receive no {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Clique em **Gerenciar ambientes**.
![Gerenciar ambientes](/assets/images/enterprise/site-admin-settings/manage-pre-receive-environments.png)
6. Clique em **Adicionar ambiente**.
![Adicionar ambiente](/assets/images/enterprise/site-admin-settings/add-pre-receive-environment.png)
7. Insira o nome desejado no campo **Nome do ambiente**.
![Nome do ambiente](/assets/images/enterprise/site-admin-settings/pre-receive-environment-name.png)
8. Insira a URL do arquivo `*.tar.gz` que contém seu ambiente.
![Carregar um ambiente por meio da URL](/assets/images/enterprise/site-admin-settings/upload-environment-from-url.png)
9. Clique em **Adicionar ambiente**.
![Botão Adicionar ambiente](/assets/images/enterprise/site-admin-settings/add-environment-button.png)

## Fazer upload de um ambiente de hook pre-receive via shell administrativo
1. Carregue um arquivo `*.tar.gz` legível que contém seu ambiente em um host da Web e copie a URL ou transfira o arquivo para o dispositivo do {% data variables.product.prodname_ghe_server %} por meio de `scp`. Quando `scp` é usado, talvez seja necessário ajustar as permissões do arquivo `*.tar.gz` para que o arquivo seja legível.
1.  Conecte-se ao shell administrativo.
2.  Use o comando `ghe-hook-env-create` e digite o nome desejado para o ambiente como o primeiro argumento e o caminho local completo ou a URL de um arquivo `*.tar.gz` que contém o ambiente como o segundo argumento.

   ```shell
   admin@ghe-host:~$ ghe-hook-env-create AlpineTestEnv /home/admin/alpine-3.3.tar.gz
   > Pre-receive hook environment 'AlpineTestEnv' (2) has been created.
   ```
