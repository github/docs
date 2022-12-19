---
title: pre-receiveフック環境の作成
intro: pre-receiveフックを実行するには、デフォルトのpre-receive環境を使うか、カスタムの環境を作成します。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145116366'
---
{% data variables.product.prodname_ghe_server %} の受信前環境は Linux [`chroot`](https://en.wikipedia.org/wiki/Chroot) 環境です。 pre-receiveフックはプッシュのイベントごとに実行されるので、高速かつ軽量でなければなりません。 こうしたチェックに必要となる環境は、通常最小限のものです。

{% data variables.product.prodname_ghe_server %} には、次のパッケージを含む既定の環境が用意されています: `awk`、`bash`、`coreutils`、`curl`、`find`、`gnupg`、`grep`、`jq`、`sed`。

特定の言語のサポートなど、この環境が満たさない特定の要求があるなら、独自の 64 ビット Linux `chroot` 環境を作成してそれをアップロードできます。

## Dockerを利用したpre-receiveフック環境の作成

pre-receiveフック環境の構築には、Linuxのコンテナ管理ツールが利用できます。 この例では、[Alpine Linux](http://www.alpinelinux.org/) と [Docker](https://www.docker.com/) を使用します。

{% data reusables.linux.ensure-docker %}
2. 次の情報を含むファイル `Dockerfile.alpine-3.3` を作成します。

   ```
   FROM gliderlabs/alpine:3.3
   RUN apk add --no-cache git bash
   ```
3. `Dockerfile.alpine-3.3` が格納されている作業ディレクトリから、イメージをビルドします。

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
4. コンテナを作成します:

   ```shell
   $ docker create --name pre-receive.alpine-3.3 pre-receive.alpine-3.3 /bin/true
   ```
5. Docker コンテナーを `gzip` で圧縮された `tar` ファイルにエクスポートします。

   ```shell
   $ docker export pre-receive.alpine-3.3 | gzip > alpine-3.3.tar.gz
   ```

   この `alpine-3.3.tar.gz` ファイルは、{% data variables.product.prodname_ghe_server %} アプライアンスにアップロードする準備ができています。

## chrootを使ったpre-receiveフック環境の作成

1. Linux `chroot` 環境を作成します。
2. `chroot` ディレクトリの `gzip` で圧縮された `tar` ファイルを作成します。
   ```shell
   $ cd /path/to/chroot
   $ tar -czf /path/to/pre-receive-environment.tar.gz .
   ```

   {% note %}

   **注:**
   - tar アーカイブ内に、ファイルの先頭のディレクトリ パスは含めないでください (`/path/to/chroot` など)。
   - chroot 環境へのエントリ ポイントとして、`/bin/sh` が存在し、実行可能でなければなりません。
   - 旧来の chroot と異なり、chroot 環境では受信前フックのために `dev` ディレクトリを必要とすることはありません。

   {% endnote %}

chroot 環境の作成方法の詳細については、*Debian Wiki* の「[Chroot](https://wiki.debian.org/chroot)」、*Ubuntu Community Help Wiki* の「[BasicChroot](https://help.ubuntu.com/community/BasicChroot)」、*Alpine Linux Wiki* の 「[chroot への Alpine Linux のインストール](http://wiki.alpinelinux.org/wiki/Installing_Alpine_Linux_in_a_chroot)」を参照してください。

## {% data variables.product.prodname_ghe_server %}へのpre-receiveフック環境のアップロード

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. **[環境を管理する]** をクリックします。
![環境を管理する](/assets/images/enterprise/site-admin-settings/manage-pre-receive-environments.png)
6. **[環境の追加]** をクリックします。
![環境の追加](/assets/images/enterprise/site-admin-settings/add-pre-receive-environment.png)
7. **[環境名]** フィールドに目的の名前を入力します。
![環境名](/assets/images/enterprise/site-admin-settings/pre-receive-environment-name.png)
8. ご利用の環境を含む `*.tar.gz` ファイルの URL を入力します。
![URL から環境をアップロードする](/assets/images/enterprise/site-admin-settings/upload-environment-from-url.png)
9. **[環境の追加]** をクリックします。
![[環境の追加] ボタン](/assets/images/enterprise/site-admin-settings/add-environment-button.png)

## 管理シェル経由でのpre-receiveフック環境のアップロード
1. ご利用の環境が含まれている読み出し可能な `*.tar.gz` ファイルを Web のホストにアップロードし、その URL をコピーするか、またはそのファイルを `scp` を介して {% data variables.product.prodname_ghe_server %} アプライアンスに転送してください。 `scp` を使用する場合には、`*.tar.gz` ファイルの権限を外界から読めるように調整することが必要な場合があります。
1.  管理シェルに接続します。
2.  `ghe-hook-env-create` コマンドを使用して、最初の引数として環境に使用する名前を入力し、2 番目の引数として環境を含む `*.tar.gz` ファイルの完全なローカル パスまたは URL を入力します。

   ```shell
   admin@ghe-host:~$ ghe-hook-env-create AlpineTestEnv /home/admin/alpine-3.3.tar.gz
   > Pre-receive hook environment 'AlpineTestEnv' (2) has been created.
   ```
