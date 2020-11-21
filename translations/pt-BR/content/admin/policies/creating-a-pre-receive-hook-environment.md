---
title: Criar um ambiente de hook pre-receive
intro: 'Para executar hooks pre-receive, use o ambiente pre-receive padrão ou crie um ambiente personalizado.'
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-environment
  - /enterprise/admin/policies/creating-a-pre-receive-hook-environment
versions:
  enterprise-server: '*'
---

Um ambiente pre-receive para o {% data variables.product.prodname_ghe_server %} é um ambiente Linux [`chroot`](https://en.wikipedia.org/wiki/Chroot). Como são executados em todos os eventos de push, os hooks pre-receive devem ser rápidos e leves. Em geral, o ambiente necessário para tais verificações é mínimo.

O {% data variables.product.prodname_ghe_server %} fornece um ambiente padrão que inclui os seguintes pacotes: `awk`,  `bash`, `coreutils`, `curl`, `find`, `gnupg`, `grep`, `jq`, `sed`.

Se você tiver algum requisito específico não atendido por esse ambiente, como suporte a determinado idioma, é possível criar e fazer upload do seu próprio ambiente Linux `chroot` de 64 bits.

### Criar um ambiente de hook pre-receive usando o Docker

Você pode usar uma ferramenta de gerenciamento de contêineres do Linux para criar um ambiente de hook pre-receive. Este exemplo usa o [Alpine Linux](http://www.alpinelinux.org/) e o [Docker](https://www.docker.com/).

{% data reusables.linux.ensure-docker %}
2. Crie o arquivo `Dockerfile.alpine-3.3` que contém estas informações:

    ```
    FROM gliderlabs/alpine:3.3
    RUN apk add --no-cache git bash
    ```
3. No diretório que contém `Dockerfile.alpine-3.3`, crie uma imagem:

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
5. Exporte o contêiner Docker para um arquivo `tar` compactado por `gzip`:

   ```shell
   $ docker export pre-receive.alpine-3.3 | gzip > alpine-3.3.tar.gz
  ```

  O arquivo `alpine-3.3.tar.gz` está pronto para o upload no appliance do {% data variables.product.prodname_ghe_server %}.

### Criar um ambiente de hook pre-receive usando chroot

1. Crie um ambiente Linux `chroot`.
2. Crie um arquivo `tar` do diretório `chroot` compactado em um `gzip`.
  ```shell
  $ cd /path/to/chroot
  $ tar -czf /path/to/pre-receive-environment.tar.gz .
   ```

  {% note %}

    **Notas:**
    - Não inclua caminhos do diretório principal de arquivos dentro do arquivo tar, como `/path/to/chroot`.
    - `/bin/sh` deve existir e ser executável, como o ponto de entrada no ambiente chroot.
    - Ao contrário de chroots tradicionais, o diretório `dev` não é exigido pelo ambiente chroot para hooks pre-receive.

  {% endnote %}

Para obter mais informações sobre como criar um ambiente chroot, consulte "[Chroot](https://wiki.debian.org/chroot)" na *Debian Wiki*, "[BasicChroot](https://help.ubuntu.com/community/BasicChroot)" na *Ubuntu Community Help Wiki* ou "[Instalar Alpine Linux em chroot](http://wiki.alpinelinux.org/wiki/Installing_Alpine_Linux_in_a_chroot)" na *Alpine Linux Wiki*.

### Fazer upload de um ambiente de hook pre-receive no {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Clique em **Manage environments** (Gerenciar ambientes). ![Gerenciar ambientes](/assets/images/enterprise/site-admin-settings/manage-pre-receive-environments.png)
6. Clique em **Add environments** (Adicionar ambientes). ![Adicionar ambiente](/assets/images/enterprise/site-admin-settings/add-pre-receive-environment.png)
7. Digite o nome desejado no campo **Environment name** (Nome do ambiente). ![Nome do ambiente](/assets/images/enterprise/site-admin-settings/pre-receive-environment-name.png)
8. Informe a URL do arquivo `*.tar.gz` que contém o ambiente. ![Fazer upload de um ambiente a partir da URL](/assets/images/enterprise/site-admin-settings/upload-environment-from-url.png)
9. Clique em **Add environments** (Adicionar ambientes). ![Botão Adicionar ambiente](/assets/images/enterprise/site-admin-settings/add-environment-button.png)

### Fazer upload de um ambiente de hook pre-receive via shell administrativo
1. Faça upload do arquivo legível `*.tar.gz` que contém o seu ambiente para um host na web e copie a URL, ou transfira o arquivo para o appliance do {% data variables.product.prodname_ghe_server %} via `scp`. Ao usar o `scp`, você deve ajustar as permissões do arquivo `*.tar.gz` para que ele seja legível.
1.  Conecte-se ao shell administrativo.
2.  Use o comando `ghe-hook-env-create` e digite o nome que você deseja para o ambiente como o primeiro argumento. Em seguida, informe o caminho local completo ou a URL do arquivo `*.tar.gz` que contém seu ambiente como segundo argumento.

   ```shell
   admin@ghe-host:~$ ghe-hook-env-create AlpineTestEnv /home/admin/alpine-3.3.tar.gz
   > Pre-receive hook environment 'AlpineTestEnv' (2) has been created.
  ```
