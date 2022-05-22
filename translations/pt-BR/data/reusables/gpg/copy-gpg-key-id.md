1. Da lista de chaves GPG, copie o ID da chave GPG que você gostaria de usar. Neste exemplo, o ID da chave GPG é `3AA5C34371567BD2`:
  ```shell
  $ gpg --list-secret-keys --keyid-format LONG
  /Users/hubot/.gnupg/secring.gpg
  ------------------------------------
  sec   4096R/<em>3AA5C34371567BD2</em> 2016-03-10 [expires: 2017-03-10]
  uid                          Hubot <hubot@example.com>
  ssb   4096R/42B317FD4BA89E7A 2016-03-10
  ```
