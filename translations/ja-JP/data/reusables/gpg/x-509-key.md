
### Git にX.509 キーについて知らせる

GPGではなくS/MIMEを使ってコミットやタグに署名するために、[smimesign](https://github.com/github/smimesign)を使うことができます。

{% data reusables.gpg.smime-git-version %}

1. [smimesign](https://github.com/github/smimesign#installation)をインストールしてください。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. コミットやタグの署名にS/MIMEを使うようGitを設定してください。 Git 2.19以降では、`git config gpg.x509.program`及び`git config gpg.format`コマンドを使ってください。
  - すべてのリポジトリへの署名にS/MIMEを使うには以下のようにします。
  ```shell
  $ git config --global gpg.x509.program smimesign
  $ git config --global gpg.format x509
  ```
  - 1つのリポジトリへの署名にS/MIMEを使うには以下のようにします。
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local gpg.x509.program smimesign
  $ git config --local gpg.format x509
  ```
  Git 2.18以前では、`git config gpg.program`コマンドを使ってください。
  - すべてのリポジトリへの署名にS/MIMEを使うには以下のようにします。
  ```shell
  $ git config --global gpg.program smimesign
  ```
  - 1つのリポジトリへの署名にS/MIMEを使うには以下のようにします。
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local gpg.program smimesign
  ```
  自分のコミッタアイデンティティにマッチにするX.509キーを使っているなら、コミットやタグへの署名を始められます。
4. コミッタアイデンティティにマッチしているX.509キーを使っていないなら、`smimesign --list-keys`コマンドを使って証明書と秘密鍵の両方を持っているX.509キーのリストを取ってください。
  ```shell
  $ smimesign --list-keys
  ```
5. X.509キーのリストから、使いたいX.509キーの証明書IDをコピーしてください。 以下の例では、証明書IDは`0ff455a2708394633e4bb2f88002e3cd80cbd76f`です。
  ```shell
  $ smimesign --list-keys
               ID: 0ff455a2708394633e4bb2f88002e3cd80cbd76f
              S/N: a2dfa7e8c9c4d1616f1009c988bb70f
        Algorithm: SHA256-RSA
         Validity: 2017-11-22 00:00:00 +0000 UTC - 2020-11-22 12:00:00 +0000 UTC
           Issuer: CN=DigiCert SHA2 Assured ID CA,OU=www.digicert.com,O=DigiCert Inc,C=US
          Subject: CN=Octocat,O=GitHub\, Inc.,L=San Francisco,ST=California,C=US
           Emails: octocat@github.com
  ```
6. X.509署名キーをGitに設定するには、証明書IDをさきほどコピーしたものに置き換えて以下のテキストを貼り付けてください。
  - すべてのリポジトリへの署名にX.509キーを使うには以下のようにします。
  ```shell
  $ git config --global user.signingkey <em>0ff455a2708394633e4bb2f88002e3cd80cbd76f</em>
  ```
  - 1つのリポジトリへの署名にX.509キーを使うには以下のようにします。
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local user.signingkey <em>0ff455a2708394633e4bb2f88002e3cd80cbd76f</em>
  ```
