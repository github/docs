
### Informarle a Git acerca de tu llave X.509

Puedes usar [smimesign](https://github.com/github/smimesign) para firmar confirmaciones y etiquetas utilizando S/MIME en lugar de GPG.

{% data reusables.gpg.smime-git-version %}

1. Instala [smimesign](https://github.com/github/smimesign#installation).
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Configura Git para que use S/MIME para firmar confirmaciones y etiquetas. En Git 2.19 o posterior, utiliza los comandos `git config gpg.x509.program` y `git config gpg.format`:
  - Para utilizar S/MIME para firmar todos los repositorios:
  ```shell
  $ git config --global gpg.x509.program smimesign
  $ git config --global gpg.format x509
  ```
  - Para utilizar S/MIME para firmar un repositorio único:
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local gpg.x509.program smimesign
  $ git config --local gpg.format x509
  ```
  En Git 2.18 o inferior, utiliza el comando `git config gpg.program`:
  - Para utilizar S/MIME para firmar todos los repositorios:
  ```shell
  $ git config --global gpg.program smimesign
  ```
  - Para utilizar S/MIME para firmar un repositorio único:
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local gpg.program smimesign
  ```
  Si estás utilizando una llave X.509 que coincide con tu identidad de persona que confirma el cambio, puedes comenzar firmando confirmaciones y etiquetas.
4. Si no estás utilizando una llave X.509 que coincida con tu identidad de confirmante, lista las llaves X.509 para las cuales tienes tanto un certificado como una llave privada utilizando el comando `smimesign --list-keys`.
  ```shell
  $ smimesign --list-keys
  ```
5. De la lista de llaves X.509, copia el ID del certificado de la llave X.509 que desearías utilizar. En este ejemplo, el ID del certificado es `0ff455a2708394633e4bb2f88002e3cd80cbd76f`:
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
6. Para configurar tu llave de firma X.509 en Git, pega el texto de abajo, sustituyendo el ID del certificado que copiaste anteriormente.
  - Para utilizar tu llave X.509 para firmar todos los repositorios:
  ```shell
  $ git config --global user.signingkey <em>0ff455a2708394633e4bb2f88002e3cd80cbd76f</em>
  ```
  - Para utilizar tu llave X.509 para firmar un repositorio único:
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local user.signingkey <em>0ff455a2708394633e4bb2f88002e3cd80cbd76f</em>
  ```
