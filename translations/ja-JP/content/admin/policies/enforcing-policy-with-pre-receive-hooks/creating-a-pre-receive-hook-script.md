---
title: pre-receiveフックスクリプトの作成
intro: pre-receiveフックスクリプトを使って、プッシュを内容に基づいて受け付けあるいは拒否するための要件を作成します。
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-script
  - /enterprise/admin/policies/creating-a-pre-receive-hook-script
  - /admin/policies/creating-a-pre-receive-hook-script
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Pre-receive hook scripts
ms.openlocfilehash: 3d01ba3d5d189e65cbd2b4589af9072571837944
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '146332353'
---
{% data variables.product.prodname_ghe_server %} の受信前フックの例を [`github/platform-samples` リポジトリ](https://github.com/github/platform-samples/tree/master/pre-receive-hooks)で参照できます。

## pre-receiveフックスクリプトの作成
受信前フック スクリプトは、{% data variables.product.product_location %}上の 受信前フック スクリプト環境で実行されます。 受信前フック スクリプトを作成する際には、利用可能な入力、出力、終了ステータス、環境変数について考慮します。

### 入力 (`stdin`)
プッシュが発生した後で、リモート リポジトリに関して参照が更新される前に、{% data variables.product.product_location %}上の `git-receive-pack` プロセスが受信前フック スクリプトを呼び出します。 このスクリプトの標準入力 `stdin` は、更新する参照ごとの行を含む文字列です。 各行には、参照の古いオブジェクト名、参照の新しいオブジェクト名、および参照の完全な名前が含まれています。

```
<old-value> SP <new-value> SP <ref-name> LF
```

この文字列は次の引数を表します。

| 引数 | 説明     |
| :------------- | :------------- |
| `<old-value>` | 参照に格納されている古いオブジェクト名。<br> 新しい参照を作成するとき、値は 40 個のゼロです。 |
| `<new-value>` | 参照に格納される新しいオブジェクト名。<br> 参照を削除するとき、値は 40 個のゼロです。 |
| `<ref-name>`  | 参照の完全な名前。 |

`git-receive-pack` の詳細については、Git ドキュメントの「[git-receive-pack](https://git-scm.com/docs/git-receive-pack)」を参照してください。 参照の詳細については、*Pro Git* の「[Git 参照](https://git-scm.com/book/en/v2/Git-Internals-Git-References)」を参照してください。

### 出力 (`stdout`)

スクリプトの標準出力 `stdout` はクライアントに返されます。 すべての `echo` ステートメントは、コマンド ラインまたはユーザー インターフェイスでユーザーに表示されます。

### 終了ステータス

受信前スクリプトの終了ステータスによって、プッシュが受け付けられるかどうかが決まります。

| 終了ステータスの値 | アクション |
| :- | :- |
| 0 | プッシュは受け付けられます。 |
| 0 以外 | プッシュは拒否されます。 |

### 環境変数

受信前フック スクリプトの標準入力 `stdin` に加え、{% data variables.product.prodname_ghe_server %} によって、スクリプトの実行のために次の変数が Bash 環境で使用できるようになります。 受信前フック スクリプトの `stdin` の詳細については、「[入力 (`stdin`)](#input-stdin)」を参照してください。

受信前フック スクリプトで使用できる環境変数は、スクリプトが実行するトリガーに応じて異なります。

- [常に使用可能](#always-available)
- [Web インターフェイスまたは API からのプッシュで使用可能](#available-for-pushes-from-the-web-interface-or-api)
- [pull request のマージで使用可能](#available-for-pull-request-merges)
- [SSH 認証を使用したプッシュで使用可能](#available-for-pushes-using-ssh-authentication)

#### 常に使用可能かどうか

次の変数は、受信前フック環境で常に使用できます。

| 変数 | 説明 | 値の例 |
| :- | :- | :- |
|  <pre>$GIT_DIR</pre> | インスタンス上のリモート リポジトリのパス | /data/user/repositories/a/ab/<br>a1/b2/34/100001234/1234.git |
|  <pre>$GIT_PUSH_OPTION_COUNT</pre> | クライアントによって `--push-option` で送信されたプッシュ オプションの数。 詳細については、Git ドキュメントの「[git-push](https://git-scm.com/docs/git-push#Documentation/git-push.txt---push-optionltoptiongt)」を参照してください。 | 1 |
| <pre>$GIT\_PUSH\_OPTION\_<em>N</em></pre> | ここで _N_ は 0 から始まる整数です。この変数にはクライアントから送信されたプッシュ オプションの文字列が含まれます。 送信された最初のオプションは `GIT_PUSH_OPTION_0`、送信された 2 番目のオプションは `GIT_PUSH_OPTION_1` のように、順に格納されます。 プッシュ オプションの詳細については、Git ドキュメントの「[git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt)」を参照してください。 | abcd |{% ifversion ghes %}
|  <pre>$GIT_USER_AGENT</pre> | 変更をプッシュした Git クライアントから送信されたユーザーエージェント文字列 | git/2.0.0{% endif %}
|  <pre>$GITHUB_REPO_NAME</pre> | 更新対象のリポジトリの名前 (_NAME_/_OWNER_ 形式) | octo-org/hello-enterprise |
|  <pre>$GITHUB_REPO_PUBLIC</pre> | 更新対象のリポジトリがパブリックかどうかを表すブール値 | <ul><li>true: リポジトリの可視性がパブリック</li><li>false: リポジトリの可視性がプライベートまたは内部</li></ul>
|  <pre>$GITHUB_USER_IP</pre> | プッシュを開始したクライアントの IP アドレス | 192.0.2.1 |
|  <pre>$GITHUB_USER_LOGIN</pre> | プッシュを開始したアカウントのユーザー名 | octocat |

#### Web インターフェイスまたは API からのプッシュで使用可能

`$GITHUB_VIA` 変数を受信前フック環境で使用できるのは、フックをトリガーする参照更新が {% data variables.product.prodname_ghe_server %} の Web インターフェイスまたは API を介して発生するときです。 値は、参照を更新したアクションを表します。

| 値 | アクション | 説明を見る |
| :- | :- | :- |
| <pre>auto-merge deployment api</pre> | API を使用して作成されたデプロイを介したベース ブランチの自動マージ | REST API ドキュメントの「[デプロイの作成](/rest/reference/deployments#create-a-deployment)」 |
| <pre>blob#save</pre> | Web インターフェイスでのファイルの内容に対する変更 | 「[ファイルの編集](/repositories/working-with-files/managing-files/editing-files)」 |
| <pre>branch merge api</pre> | API を使用したブランチのマージ | REST API ドキュメントの「[ブランチのマージ](/rest/reference/branches#merge-a-branch)」 |
| <pre>branches page delete button</pre> | Web インターフェイスでのブランチの削除 | 「[リポジトリ内でブランチを作成および削除する](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch)」 |
| <pre>git refs create api</pre> | API を使用した参照の作成 | REST API ドキュメントの「[Git データベース](/rest/reference/git#create-a-reference)」 |
| <pre>git refs delete api</pre> | API を使用した参照の削除 | REST API ドキュメントの「[Git データベース](/rest/reference/git#delete-a-reference)」 |
| <pre>git refs update api</pre> | API を使用した参照の更新 | REST API ドキュメントの「[Git データベース](/rest/reference/git#update-a-reference)」 |
| <pre>git repo contents api</pre> | API を使用したファイルの内容に対する変更 | REST API ドキュメントの「[ファイル コンテンツの作成または更新](/rest/reference/repos#create-or-update-file-contents)」 |
{%- ifversion ghes %} | `merge ` | 自動マージを使用した pull request のマージ | 「[pull request を自動的にマージする](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)」 | {%- endif %} | <pre>merge base into head</pre> | ベース ブランチで厳密な状態チェックが必要になる際のベース ブランチのトピック ブランチの更新 (たとえば、pull request で **[Update branch]\(ブランチを更新\)** を使用) | 「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)」 | | <pre>pull request branch delete button</pre> | Web インターフェイスでの pull request のトピック ブランチの削除 | 「[pull request でのブランチの削除と復元](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request#deleting-a-branch-used-for-a-pull-request)」 | | <pre>pull request branch undo button</pre> | Web インターフェイスでの pull request のトピック ブランチの復元 | 「[pull request でのブランチの削除と復元](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request#restoring-a-deleted-branch)」 | | <pre>pull request merge api</pre> | API を使用した pull request のマージ | REST API ドキュメントの「[プル](/rest/reference/pulls#merge-a-pull-request)」 | | <pre>pull request merge button</pre> | Web インターフェイスでの pull request のマージ | 「[pull request のマージ](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request#merging-a-pull-request-on-github)」 | | <pre>pull request revert button</pre> | pull request を元に戻す| 「[pull request を元に戻す](/github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request)」 | | <pre>releases delete button</pre> | リリースの削除 | 「[リポジトリでのリリースの管理](/github/administering-a-repository/managing-releases-in-a-repository#deleting-a-release)」 | | <pre>stafftools branch restore</pre> | サイト管理者ダッシュボードでのブランチの復元 | 「[サイト管理者ダッシュボード](/admin/configuration/site-admin-dashboard#repositories)」 | | <pre>tag create api</pre> | API を使用したタグの作成| REST API ドキュメントの「[Git データベース](/rest/reference/git#create-a-tag-object)」 | | <pre>slumlord (#<em>SHA</em>)</pre> | Subversion を使用したコミット | 「[Subversion クライアントのサポート](/github/importing-your-projects-to-github/support-for-subversion-clients#making-commits-to-subversion)」 | | <pre>web branch create</pre> | Web インターフェイスを使用したブランチの作成 | 「[リポジトリ内でのブランチの作成と削除](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)」 |

#### pull request のマージで使用可能

次の変数を受信前フック環境で使用できるのは、フックをトリガーするプッシュが pull request のマージによるプッシュであるときです。

| 変数 | 説明 | 値の例 |
| :- | :- | :- |
|  <pre>$GITHUB_PULL_REQUEST_AUTHOR_LOGIN</pre> | pull request を作成したアカウントのユーザー名 | octocat |
|  <pre>$GITHUB_PULL_REQUEST_HEAD</pre> | pull request のトピック ブランチの名前 (`USERNAME:BRANCH` 形式) | <nobr>octocat:fix-bug</nobr> |
|  <pre>$GITHUB_PULL_REQUEST_BASE</pre> | pull request のベース ブランチの名前 (`USERNAME:BRANCH` 形式) | octocat:main |

#### SSH 認証を使用したプッシュで使用可能

| 変数 | 説明 | 値の例 |
| :- | :- | :- |
|  <pre>$GITHUB_PUBLIC_KEY_FINGERPRINT</pre> | 変更をプッシュしたユーザーの公開キー フィンガープリント | a1:b2:c3:d4:e5:f6:g7:h8:i9:j0:k1:l2:m3:n4:o5:p6 |

## 権限の設定と {% data variables.product.prodname_ghe_server %} への pre-receive フックのプッシュ

受信前フック スクリプトは、{% data variables.product.product_location %}のリポジトリに含まれています。 サイト管理者はリポジトリの権限を考慮し、適切なユーザだけがアクセスできるようにしなければなりません。

フックは単一のリポジトリに集約することをおすすめします。 集約されたフックのリポジトリがパブリックである場合、`README.md` を使用してポリシーの適用を説明できます。 また、コントリビューションをプルリクエスト経由で受け付けることもできます。 しかし、pre-receiveフックはデフォルトブランチからのみ追加できます。 テストのワークフロー用には、設定を持つリポジトリのフォークを使うべきです。

1. Mac ユーザは、スクリプトに実行権限を持たせてください。

   ```shell
   $ sudo chmod +x <em>SCRIPT_FILE.sh</em>
   ```
   Windows ユーザは、スクリプトに実行権限を持たせてください。

   ```shell
   git update-index --chmod=+x <em>SCRIPT_FILE.sh</em>
   ```

2. {% data variables.product.product_location %}上の受信前フック用の指定リポジトリにコミットしてプッシュします。

   ```shell
   $ git commit -m "<em>YOUR COMMIT MESSAGE</em>"
   $ git push
   ```

3. {% data variables.product.prodname_ghe_server %} インスタンス上に[受信前フックを作成](/enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance/#creating-pre-receive-hooks)します。

## ローカルでのpre-receiveスクリプトのテスト
受信前フック スクリプトを {% data variables.product.product_location %}上で作成または更新する前に、ローカルでテストできます。 その方法の 1 つは、pre-receive フックを実行できるリモートリポジトリとして働くローカルの Docker 環境を作成することです。

{% data reusables.linux.ensure-docker %}

2. 次を含む `Dockerfile.dev` というファイルを作成します。

   ```dockerfile
   FROM gliderlabs/alpine:3.3
   RUN \
     apk add --no-cache git openssh bash && \
     ssh-keygen -A && \
     sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g" /etc/ssh/sshd_config && \
     adduser git -D -G root -h /home/git -s /bin/bash && \
     passwd -d git && \
     su git -c "mkdir /home/git/.ssh && \
     ssh-keygen -t ed25519 -f /home/git/.ssh/id_ed25519 -P '' && \
     mv /home/git/.ssh/id_ed25519.pub /home/git/.ssh/authorized_keys && \
     mkdir /home/git/test.git && \
     git --bare init /home/git/test.git"

   VOLUME ["/home/git/.ssh", "/home/git/test.git/hooks"]
   WORKDIR /home/git

   CMD ["/usr/sbin/sshd", "-D"]
   ```

3. `always_reject.sh` という名前のテスト用の受信前スクリプトを作成します。 このスクリプト例では、全てのプッシュを拒否します。これは、リポジトリをロックする場合に役立ちます。

   ```
   #!/usr/bin/env bash

   echo "error: rejecting all pushes"
   exit 1
   ```

4. `always_reject.sh` スクリプトに実行アクセス許可があることを確認します。

   ```shell
   $ chmod +x always_reject.sh
   ```

5. `Dockerfile.dev` を含むディレクトリで、イメージをビルドします。

   ```shell
   $ docker build -f Dockerfile.dev -t pre-receive.dev .
   > Sending build context to Docker daemon 3.584 kB
   > Step 1 : FROM gliderlabs/alpine:3.3
   >  ---> 8944964f99f4
   > Step 2 : RUN apk add --no-cache git openssh bash && ssh-keygen -A && sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g"  /etc/ssh/sshd_config && adduser git -D -G root -h /home/git -s /bin/bash && passwd -d git && su git -c "mkdir /home/git/.ssh && ssh-keygen -t ed25519 -f /home/git/.ssh/id_ed25519 -P ' && mv /home/git/.ssh/id_ed25519.pub /home/git/.ssh/authorized_keys && mkdir /home/git/test.git && git --bare init /home/git/test.git"
   >  ---> Running in e9d79ab3b92c
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/main/x86_64/APKINDEX.tar.gz
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/community/x86_64/APKINDEX.tar.gz
   ....truncated output....
   > OK: 34 MiB in 26 packages
   > ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519
   > Password for git changed by root
   > Generating public/private ed25519 key pair.
   > Your identification has been saved in /home/git/.ssh/id_ed25519.
   > Your public key has been saved in /home/git/.ssh/id_ed25519.pub.
   ....truncated output....
   > Initialized empty Git repository in /home/git/test.git/
   > Successfully built dd8610c24f82
   ```

6. 生成された SSH キーを含むデータコンテナを実行してください。

   ```shell
   $ docker run --name data pre-receive.dev /bin/true
   ```

7. テスト用の受信前フック `always_reject.sh` をデータ コンテナーにコピーします。

   ```shell
   $ docker cp always_reject.sh data:/home/git/test.git/hooks/pre-receive
   ```

8. `sshd` を実行してフックを実行するアプリケーション コンテナーを実行します。 返されたコンテナ ID をメモしておいてください:

   ```shell
   $ docker run -d -p 52311:22 --volumes-from data pre-receive.dev
   > 7f888bc700b8d23405dbcaf039e6c71d486793cad7d8ae4dd184f4a47000bc58
   ```

9. 生成された SSH キーをデータコンテナからローカルマシンにコピーしてください:

   ```shell
   $ docker cp data:/home/git/.ssh/id_ed25519 .
   ```

10. テスト リポジトリのリモートを変更し、Docker コンテナー内の `test.git` リポジトリにプッシュします。 この例では `git@github.com:octocat/Hello-World.git` を使用しますが、必要に応じてリポジトリを使用できます。 この例ではローカルマシン (127.0.0.1) がポート 52311 をバインドしているものとしていますが、docker がリモートマシンで動作しているなら異なる IP アドレスを使うことができます。

   ```shell
   $ git clone git@github.com:octocat/Hello-World.git
   $ cd Hello-World
   $ git remote add test git@127.0.0.1:test.git
   $ GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -p 52311 -i ../id_ed25519" git push -u test main
   > Warning: Permanently added '[192.168.99.100]:52311' (ECDSA) to the list of known hosts.
   > Counting objects: 7, done.
   > Delta compression using up to 4 threads.
   > Compressing objects: 100% (3/3), done.
   > Writing objects: 100% (7/7), 700 bytes | 0 bytes/s, done.
   > Total 7 (delta 0), reused 7 (delta 0)
   > remote: error: rejecting all pushes
   > To git@192.168.99.100:test.git
   >  ! [remote rejected] main -> main (pre-receive hook declined)
   > error: failed to push some refs to 'git@192.168.99.100:test.git'
   ```

   pre-receive フックの実行後にプッシュが拒否され、スクリプトからの出力がエコーされていることに注意してください。

## 参考資料
 - "*Pro Git Web サイト*" の「[Git のカスタマイズ - Git-Enforced ポリシーの実施例](https://git-scm.com/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy)」
