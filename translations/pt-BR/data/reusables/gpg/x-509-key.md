
### Contando ao Git sobre sua chave X.509

Você pode usar [smimesign](https://github.com/github/smimesign) para assinar commits e tags usando S/MIME em vez de GPG.

{% data reusables.gpg.smime-git-version %}

1. Instale [smimesign](https://github.com/github/smimesign#installation).
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Configure o Git para usar o S/MIME para assinar commits e tags. No Git 2.19 ou posterior, use os comandos `git config gpg.x509.program` e `git config gpg.format`:
  - Para usar o S/MIME para assinar todos os repositórios:
  ```shell
  $ git config --global gpg.x509.program smimesign
  $ git config --global gpg.format x509
  ```
  - Para usar o S/MIME para assinar um único repositório:
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local gpg.x509.program smimesign
  $ git config --local gpg.format x509
  ```
  No Git 2.18 ou anterior, use o comando `git config gpg.program`:
  - Para usar o S/MIME para assinar todos os repositórios:
  ```shell
  $ git config --global gpg.program smimesign
  ```
  - Para usar o S/MIME para assinar um único repositório:
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local gpg.program smimesign
  ```
  Se você estiver usando uma chave X.509 que corresponde à sua identidade do committer, poderá começar a assinar commits e tags.
4. If you're not using an X.509 key that matches your committer identity, list X.509 keys for which you have both a certificate and private key using the `smimesign --list-keys` command.
  ```shell
  $ smimesign --list-keys
  ```
5. Da lista de chaves X.509, copie o ID de certificado da chave X.509 que gostaria de usar. Neste exemplo, o ID do certificado é `0ff455a2708394633e4bb2f88002e3cd80cbd76f`:
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
6. Para definir sua chave de autenticação X.509 no Git, cole o texto abaixo, substituindo o certificado que você copiou anteriormente.
  - Para usar sua chave X.509 para assinar para todos os repositórios:
  ```shell
  $ git config --global user.signingkey <em>0ff455a2708394633e4bb2f88002e3cd80cbd76f</em>
  ```
  - Para usar sua chave X.509 para assinar um único repositório:
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local user.signingkey <em>0ff455a2708394633e4bb2f88002e3cd80cbd76f</em>
  ```
