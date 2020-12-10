---
title: pre-receiveフック環境の作成
intro: 'pre-receiveフックを実行するには、デフォルトのpre-receive環境を使うか、カスタムの環境を作成します。'
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-environment
  - /enterprise/admin/policies/creating-a-pre-receive-hook-environment
versions:
  enterprise-server: '*'
---

{% data variables.product.prodname_ghe_server %} の pre-receive 環境は、Linux の [`chroot`](https://en.wikipedia.org/wiki/Chroot) 環境です。 pre-receiveフックはプッシュのイベントごとに実行されるので、高速かつ軽量でなければなりません。 こうしたチェックに必要となる環境は、通常最小限のものです。

{% data variables.product.prodname_ghe_server %} は、以下のパッケージを含むデフォルトの環境を提供します: `awk`、 `bash`、`coreutils`、`curl`、`find`、`gnupg`、`grep`、`jq`、`sed`

特定の言語のサポートなど、この環境が満たさない特定の要求があるなら、独自の64-bit Linux `chroot`環境を作成してアップロードできます。

### Dockerを利用したpre-receiveフック環境の作成

pre-receiveフック環境の構築には、Linuxのコンテナ管理ツールが利用できます。 この例では[Alpine Linux](http://www.alpinelinux.org/)と[Docker](https://www.docker.com/)を使っています。

{% data reusables.linux.ensure-docker %}
2. この情報を含む `Dockerfile.alpine-3.3` ファイルを作成してください:

   ```
   FROM gliderlabs/alpine:3.3
   RUN apk add --no-cache git bash
   ```
3. `Dockerfile.alpine-3.3`を含むワーキングディレクトリから、イメージをビルドします:

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
5. この Docker コンテナを `gzip` 圧縮された `tar` ファイルにエクスポートします:

   ```shell
   $ docker export pre-receive.alpine-3.3 | gzip > alpine-3.3.tar.gz
   ```

   このファイル `alpine-3.3.tar.gz` を {% data variables.product.prodname_ghe_server %} アプライアンスにアップロードする準備ができました。

### chrootを使ったpre-receiveフック環境の作成

1. Linux の `chroot` 環境を作成します。
2. `chroot` ディレクトリの `gzip` 圧縮された `tar` ファイルを作成します.
   ```shell
   $ cd /path/to/chroot
   $ tar -czf /path/to/pre-receive-environment.tar.gz .
   ```

   {% note %}

   **ノート:**
   - `/path/to/chroot`のような、ファイルの先行するディレクトリパスをtarアーカイブに含めないでください。
   - chroot環境へのエントリポイントとして、`/bin/sh`が存在し、実行可能でなければなりません。
   - 旧来のchrootと異なり、`dev`ディレクトリはpre-receiveフックのためのchroot環境では必要ありません。

   {% endnote %}

chroot 環境の作成に関する詳しい情報については *Debian Wiki* の「[Chroot](https://wiki.debian.org/chroot)」、*Ubuntu Community Help Wiki* の「[BasicChroot](https://help.ubuntu.com/community/BasicChroot)」、または *Alpine Linux Wiki* の「[Installing Alpine Linux in a chroot](http://wiki.alpinelinux.org/wiki/Installing_Alpine_Linux_in_a_chroot)」を参照してください。

### {% data variables.product.prodname_ghe_server %}へのpre-receiveフック環境のアップロード

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. [**Manage environments**] (環境を管理) をクリックします。 ![環境を管理](/assets/images/enterprise/site-admin-settings/manage-pre-receive-environments.png)
6. [**Add environment**] (環境を追加) をクリックします。 ![環境を追加](/assets/images/enterprise/site-admin-settings/add-pre-receive-environment.png)
7. 希望する名前を [**Environment name**] (環境名) フィールドに入力します。 ![環境名](/assets/images/enterprise/site-admin-settings/pre-receive-environment-name.png)
8. 環境が入っている `*.tar.gz` ファイルの URL を入力します。 ![URL から環境をアップロード](/assets/images/enterprise/site-admin-settings/upload-environment-from-url.png)
9. [**Add environment**] (環境を追加) をクリックします。 ![環境を追加するボタン](/assets/images/enterprise/site-admin-settings/add-environment-button.png)

### 管理シェル経由でのpre-receiveフック環境のアップロード
1. 環境が入っている読み出し可能な `*.tar.gz` ファイルを Web のホストにアップロードしてその URL をコピーするか、このファイルを `scp` で {% data variables.product.prodname_ghe_server %} アプライアンスに転送してください。 `scp` を使う場合には、`*.tar.gz` ファイルの権限を外界から読めるように調整しなければならないかもしれません。
1.  管理シェルに接続します。
2.  `ghe-hook-env-create` コマンドを使い、環境に与えたい名前を最初の引数に、環境が入っている `*.tar.gz` ファイルの完全なローカルパスあるいは URL を 2 番目の引数に入力してください。

   ```shell
   admin@ghe-host:~$ ghe-hook-env-create AlpineTestEnv /home/admin/alpine-3.3.tar.gz
   > Pre-receive hook environment 'AlpineTestEnv' (2) has been created.
   ```
