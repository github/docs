
### 将您的 X.509 密钥告知 Git

您可以使用 [smimesign](https://github.com/github/smimesign) 以 S/MIME 代替 GPG 对提交和标记签名。

{% data reusables.gpg.smime-git-version %}

1. 安装 [smimesign](https://github.com/github/smimesign#installation)。
{% data reusables.command_line.open_the_multi_os_terminal %}
3. 配置 Git 使用 S/MIME 对提交和标记签名。 在 Git 2.19 或更高版本中，使用 `git config gpg.x509.program` 和 `git config gpg.form` 命令：
  - 要使用 S/MIME 对所有仓库签名：
  ```shell
  $ git config --global gpg.x509.program smimesign
  $ git config --global gpg.format x509
  ```
  - 要使用 S/MIME 对单一仓库签名：
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local gpg.x509.program smimesign
  $ git config --local gpg.format x509
  ```
  在 Git 2.18 或更早版本中，使用 `git config gpg.program` 命令：
  - 要使用 S/MIME 对所有仓库签名：
  ```shell
  $ git config --global gpg.program smimesign
  ```
  - 要使用 S/MIME 对单一仓库签名：
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local gpg.program smimesign
  ```
  如果您使用的是与提交者身份匹配的 X.509 密钥，您可以开始对提交和标记签名。
4. 如果您使用的不是与提交者身份匹配的 X.509 密钥，则使用 `smimesign --list-keys` 命令列出您有其证书和私钥的 X.509 密钥。
  ```shell
  $ smimesign --list-keys
  ```
5. 从 X.509 密钥列表中复制您想要使用的 X.509 密钥的证书 ID。 在此示例中，证书 ID 是 `0ff455a2708394633e4b2f88002e3cd80cbd76f`：
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
6. 要在 Git 中设置您的 X.509 签名密钥，请粘贴下面的文本，替换之前复制的证书 ID 。
  - 要使用 X.509 密钥注册所有仓库：
  ```shell
  $ git config --global user.signingkey <em>0ff455a2708394633e4bb2f88002e3cd80cbd76f</em>
  ```
  - 要使用 X.509 密钥注册单一仓库：
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local user.signingkey <em>0ff455a2708394633e4bb2f88002e3cd80cbd76f</em>
  ```
