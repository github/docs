
### Telling Git about your X.509 key

You can use [smimesign](https://github.com/github/smimesign) to sign commits and tags using S/MIME instead of GPG.

{% data reusables.gpg.smime-git-version %}

1. Install [smimesign](https://github.com/github/smimesign#installation).
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Configure Git to use S/MIME to sign commits and tags. In Git 2.19 or later, use the `git config gpg.x509.program` and `git config gpg.format` commands:
  - To use S/MIME to sign for all repositories:
  ```shell
  $ git config --global gpg.x509.program smimesign
  $ git config --global gpg.format x509
  ```
  - To use S/MIME to sign for a single repository:
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local gpg.x509.program smimesign
  $ git config --local gpg.format x509
  ```
  In Git 2.18 or earlier, use the `git config gpg.program` command:
  - To use S/MIME to sign for all repositories:
  ```shell
  $ git config --global gpg.program smimesign
  ```
  - To use S/MIME to sign for a single repository:
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local gpg.program smimesign
  ```
  If you're using an X.509 key that matches your committer identity, you can begin signing commits and tags.
4. If you're not using an X.509 key that matches your committer identity, list X.509 keys for which you have both a certificate and private key using the `smimesign --list-keys` command.
  ```shell
  $ smimesign --list-keys
  ```
5. From the list of X.509 keys, copy the certificate ID of the X.509 key you'd like to use. In this example, the certificate ID is `0ff455a2708394633e4bb2f88002e3cd80cbd76f`:
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
6. To set your X.509 signing key in Git, paste the text below, substituting in the certificate ID you copied earlier.
  - To use your X.509 key to sign for all repositories:
  ```shell
  $ git config --global user.signingkey <em>0ff455a2708394633e4bb2f88002e3cd80cbd76f</em>
  ```
  - To use your X.509 key to sign for a single repository:
  ```shell
  $ cd <em>/path/to/my/repository</em>
  $ git config --local user.signingkey <em>0ff455a2708394633e4bb2f88002e3cd80cbd76f</em>
  ```
