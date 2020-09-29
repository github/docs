---
title: pre-receiveフックスクリプトの作成
intro: pre-receiveフックスクリプトを使って、プッシュを内容に基づいて受け付けあるいは拒否するための要件を作成します。
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-script
versions:
  enterprise-server: '*'
---

{% data variables.product.prodname_ghe_server %} の pre-receive フックの例は、[`github/platform-samples`リポジトリ](https://github.com/github/platform-samples/tree/master/pre-receive-hooks)で見ることができます。

### pre-receiveフックスクリプトの作成
pre-receive フックスクリプトは、{% data variables.product.prodname_ghe_server %} アプライアンス上の pre-receive フック環境内で実行されます。 pre-receiveフックスクリプトを作成する際には、利用可能な入力、出力、終了ステータス、環境変数について考慮してください。

#### 入力（stdin）
プッシュが行われ、リモートリポジトリ上でrefがあった場合に、それらが更新される前、 `git-receive-pack`プロセスは更新されるrefごとに1行の標準入力を渡してpre-receiveフックスクリプトを呼び出します。

`<old-value> SP <new-value> SP <ref-name> LF`

この文字列は以下の引数を表現しています。

| 引数                  | 説明                                                           |
|:------------------- |:------------------------------------------------------------ |
| `<old-value>` | `ref`に保存されている古いオブジェクトネーム。<br>新しい`ref`を*作成*した場合、これは40個のゼロになる。 |
| `<new-value>` | `ref`に保存される新しいオブジェクトネーム。<br>`ref`を*削除*した場合、これは40個のゼロになる。     |
| `<ref-name>`  | `ref`の完全な名前。                                                 |

`git-receive-pack`に関する詳しい情報については、Gitのドキュメンテーション中の[git-receive-pack](https://git-scm.com/docs/git-receive-pack)を参照してください。 `refs`に関する詳しい情報については、*Pro Git*の[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)を参照してください。

#### 出力（stdout）

スクリプトの出力（`stdout`）はクライアントに返されるので、`echo`文があればその出力はコマンドライン上あるいはユーザインターフェースからユーザに見えることになります。

#### 終了ステータス

pre-receiveスクリプトの`終了ステータス`は、プッシュが受け付けられるかどうかを決めます。

| 終了ステータスの値 |     Action     |
|:---------:|:--------------:|
|     0     | プッシュは受け付けられます。 |
|    0以外    |  プッシュは拒否されます。  |

#### 環境変数
`stdin` に渡された値以外に、{% data variables.product.prodname_ghe_server %} 上で動作する pre-receive フックスクリプトから利用できる追加の変数があります。

| 変数                                    | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|:------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $GITHUB_USER_LOGIN                  | `ref` を作成したユーザ ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| $GIT_DIR                              | アプライアンス上のリモートリポジトリのパス。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| $GITHUB_USER_IP                     | プッシュを行ったユーザの IP アドレス。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| $GITHUB_REPO_NAME                   | `owner`/`repo` フォーマットでの更新されるリポジトリの名前。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| $GITHUB_PULL_REQUEST_AUTHOR_LOGIN | インスタンス上でオープンされたプルリクエストの作者のユーザ ID。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| $GITHUB_REPO_PUBLIC                 | 論理値で、`true` ならパブリックリポジトリを、`false` ならプライベートリポジトリを示す。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| $GITHUB_PUBLIC_KEY_FINGERPRINT      | ユーザの公開鍵のフィンガープリント。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| $GITHUB_PULL_REQUEST_HEAD           | PR の HEAD に対する `user:branch` という形式の文字列。<br>例: `octocat:fix-bug`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| $GITHUB_PULL_REQUEST_BASE           | PR の BASE に対する `user:branch` という形式の文字列。<br>例: `octocat:master`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| $GITHUB_VIA                           | ref の作成に使われた方式。<br>**取り得る値: **<br> - `auto-merge deployment api` <br> - `blob edit` <br> - `branch merge api` <br> - `branches page delete button` <br> - `git refs create api` <br> - `git refs delete api` <br> - `git refs update api` <br> - `merge api` <br> - `pull request branch delete button` <br> - `pull request branch undo button` <br> - `pull request merge api` <br> - `pull request merge button` <br> - `pull request revert button` <br> - `releases delete button` <br> - `stafftools branch restore` <br> - `slumlord (#{sha})` |
| $GIT_PUSH_OPTION_COUNT              | クライアントによって送信されたプッシュオプション数。 プッシュオプションに関する詳しい情報については、Gitのドキュメンテーションの[git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt)を参照してください。                                                                                                                                                                                                                                                                                                                                                                                            |
| $GIT_PUSH_OPTION_N                  | ここで <em>N</em> は 0 から始まる整数で、この変数にはクライアントから送信されたプッシュオプションの文字列が含まれます。 送信された最初のオプションはGIT_PUSH_OPTION_0に保存され、2番目のオプションはGIT_PUSH_OPTION_1に保存され、といったようになります。 プッシュオプションに関する詳しい情報については、Gitのドキュメンテーションの[git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt)を参照してください。                                                                                                                                                                                                                                             |

### 権限の設定と {% data variables.product.prodname_ghe_server %} への pre-receive フックのプッシュ

pre-receive フックスクリプトは、{% data variables.product.prodname_ghe_server %} アプライアンス上のリポジトリに含まれます。 サイト管理者はリポジトリの権限を考慮し、適切なユーザだけがアクセスできるようにしなければなりません。

フックは単一のリポジトリに集約することをおすすめします。 集約されたフックのリポジトリがパブリックになっている場合、`README.md`をポリシーの強制の説明に利用できます。 また、コントリビューションをプルリクエスト経由で受け付けることもできます。 しかし、pre-receiveフックはデフォルトブランチからのみ追加できます。 テストのワークフロー用には、設定を持つリポジトリのフォークを使うべきです。

1. Mac ユーザは、スクリプトに実行権限を持たせてください。

   ```shell
   $ sudo chmod +x <em>SCRIPT_FILE.sh</em>
  ```
  Windows ユーザは、スクリプトに実行権限を持たせてください。

  ```shell
  git update-index --chmod=+x <em>SCRIPT_FILE.sh</em>
  ```

2. {% data variables.product.prodname_ghe_server %} インスタンス上の対象となる pre-receive フックのリポジトリにコミットおよびプッシュしてください。

   ```shell
   $ git commit -m "<em>YOUR COMMIT MESSAGE</em>"
   $ git push
  ```

3. {% data variables.product.prodname_ghe_server %} のインスタンス上で [pre-receive フックを作成](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-appliance/#creating-pre-receive-hooks)してください。

### ローカルでのpre-receiveスクリプトのテスト
pre-receive フックスクリプトは、{% data variables.product.prodname_ghe_server %} アプライアンス上で作成したり更新したりする前に、ローカルでテストできます。 その方法の 1 つは、pre-receive フックを実行できるリモートリポジトリとして働くローカルの Docker 環境を作成することです。

{% data reusables.linux.ensure-docker %}

2. 以下を含む `Dockerfile.dev` というファイルを作成してください。

    ```
    FROM gliderlabs/alpine:3.3
    RUN \
      apk add --no-cache git openssh bash && \
      ssh-keygen -A && \
      sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g" /etc/ssh/sshd_config && \
      adduser git -D -G root -h /home/git -s /bin/bash && \
      passwd -d git && \
      su git -c "mkdir /home/git/.ssh && \
      ssh-keygen -t rsa -b 4096 -f /home/git/.ssh/id_rsa -P '' && \
      mv /home/git/.ssh/id_rsa.pub /home/git/.ssh/authorized_keys && \
      mkdir /home/git/test.git && \
      git --bare init /home/git/test.git"

    VOLUME ["/home/git/.ssh", "/home/git/test.git/hooks"]
    WORKDIR /home/git

    CMD ["/usr/sbin/sshd", "-D"]
    ```

3. `always_reject.sh` というテストのpre-receiveスクリプトを作成してください。 このスクリプト例では、全てのプッシュを拒否します。これは、リポジトリをロックする場合に役立ちます。

    ```
    #!/usr/bin/env bash

    echo "error: rejecting all pushes"
    exit 1
    ```

4. `always_reject.sh`スクリプトが実行権限を持つことを確認してください。

   ```shell
   $ chmod +x always_reject.sh
  ```

5. `Dockerfile.dev` を含むディレクトリからイメージをビルドしてください。

   ```shell
   $ docker build -f Dockerfile.dev -t pre-receive.dev .
   > Sending build context to Docker daemon 3.584 kB
   > Step 1 : FROM gliderlabs/alpine:3.3
   >  ---> 8944964f99f4
   > Step 2 : RUN apk add --no-cache git openssh bash && ssh-keygen -A && sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g"  /etc/ssh/sshd_config && adduser git -D -G root -h /home/git -s /bin/bash && passwd -d git && su git -c "mkdir /home/git/.ssh && ssh-keygen -t rsa -b 4096 -f /home/git/.ssh/id_rsa -P ' && mv /home/git/.ssh/id_rsa.pub /home/git/.ssh/authorized_keys && mkdir /home/git/test.git && git --bare init /home/git/test.git"
   >  ---> Running in e9d79ab3b92c
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/main/x86_64/APKINDEX.tar.gz
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/community/x86_64/APKINDEX.tar.gz
   ....truncated output....
   > OK: 34 MiB in 26 packages
   > ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519
   > Password for git changed by root
   > Generating public/private rsa key pair.
   > Your identification has been saved in /home/git/.ssh/id_rsa.
   > Your public key has been saved in /home/git/.ssh/id_rsa.pub.
   ....出力を省略....
   > Initialized empty Git repository in /home/git/test.git/
   > Successfully built dd8610c24f82
  ```

6. 生成された SSH キーを含むデータコンテナを実行してください。

   ```shell
   $ docker run --name data pre-receive.dev /bin/true
  ```

7. テスト pre-receive フックの `always_reject.sh` をデータコンテナにコピーしてください:

   ```shell
   $ docker cp always_reject.sh data:/home/git/test.git/hooks/pre-receive
  ```

8. `sshd` を実行しフックを動作させるアプリケーションコンテナを実行してください。 返されたコンテナ ID をメモしておいてください:

   ```shell
   $ docker run -d -p 52311:22 --volumes-from data pre-receive.dev
   > 7f888bc700b8d23405dbcaf039e6c71d486793cad7d8ae4dd184f4a47000bc58
  ```

9. 生成された SSH キーをデータコンテナからローカルマシンにコピーしてください:

   ```shell
   $ docker cp data:/home/git/.ssh/id_rsa .
  ```

10. テストリポジトリのリモートを修正して、Docker コンテナ内の `test.git` リポジトリにプッシュしてください。 この例では `git@github.com:octocat/Hello-World.git` を使っていますが、どのリポジトリを使ってもかまいません。 この例ではローカルマシン (127.0.0.1) がポート 52311 をバインドしているものとしていますが、docker がリモートマシンで動作しているなら異なる IP アドレスを使うことができます。

   ```shell
   $ git clone git@github.com:octocat/Hello-World.git
   $ cd Hello-World
   $ git remote add test git@127.0.0.1:test.git
   $ GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -p 52311 -i ../id_rsa" git push -u test master
   > Warning: Permanently added '[192.168.99.100]:52311' (ECDSA) to the list of known hosts.
   > Counting objects: 7, done.
   > Delta compression using up to 4 threads.
   > Compressing objects: 100% (3/3), done.
   > Writing objects: 100% (7/7), 700 bytes | 0 bytes/s, done.
   > Total 7 (delta 0), reused 7 (delta 0)
   > remote: error: rejecting all pushes
   > To git@192.168.99.100:test.git
   >  ! [remote rejected] master -> master (pre-receive hook declined)
   > error: failed to push some refs to 'git@192.168.99.100:test.git'
  ```

  pre-receive フックの実行後にプッシュが拒否され、スクリプトからの出力がエコーされていることに注意してください。

### 参考リンク
 - *Pro Git Webサイト*の「[Gitのカスタマイズ - Gitポリシーの実施例](https://git-scm.com/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy)」
