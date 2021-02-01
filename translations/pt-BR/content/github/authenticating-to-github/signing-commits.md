---
title: Assinar commits
intro: Você pode assinar commits localmente usando GPG ou S/MIME.
redirect_from:
  - /articles/signing-commits-and-tags-using-gpg/
  - /articles/signing-commits-using-gpg/
  - /articles/signing-commits
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.gpg.desktop-support-for-commit-signing %}

{% tip %}

**Dicas:**

Para configurar seu cliente Git para assinar commits por padrão para um repositório local, em versões 2.0.0 e acima do Git, execute `git config commit.gpgsign true`. Para assinar todos os commits por padrão em qualquer repositório local no seu computador, execute `git config --global commit.gpgsign true`.

Para armazenar a frase secreta da chave GPG e não precisar inseri-la sempre que assinar um commit, recomendamos o uso das seguintes ferramentas:
  - Para usuários do Mac, o [GPG Suite](https://gpgtools.org/) permite armazenar a frase secreta da chave GPG no keychain do sistema operacional do Mac.
  - Para usuários do Windows, o [Gpg4win](https://www.gpg4win.org/) se integra a outras ferramentas do Windows.

Você também pode configurar manualmente o [gpg-agent](http://linux.die.net/man/1/gpg-agent) para salvar a frase secreta da chave GPG, mas ele não se integra ao keychain do sistema operacional do Mac, como o ssh-agent, e exige mais configuração.

{% endtip %}

Se você tiver várias chaves ou estiver tentando assinar commits ou tags com uma chave que não corresponde a sua identidade de committer, precisará [informar o Git a chave de assinatura](/articles/telling-git-about-your-signing-key).

1. Ao fazer commit das alterações no branch local, adicione o sinalizador -S flag ao comando git commit:
  ```shell
  $ git commit -S -m <em>your commit message</em>
  # Creates a signed commit
  ```
2. Ao usar o GPG, depois de criar o commit, forneça a frase secreta configurada quando você [gerou a chave GPG](/articles/generating-a-new-gpg-key).
3. Quando terminar de criar os commits localmente, faça o push para o repositório remoto no {% data variables.product.product_name %}:
  ```shell
  $ git push
  # Pushes your local commits to the remote repository
  ```
4. Em
{% data variables.product.product_name %}, navegue até o seu pull request.
{% data reusables.repositories.review-pr-commits %}
5. Para exibir informações mais detalhadas sobre a assinatura verificada, clique em Verified (Verificada). ![Commit assinado](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)

### Leia mais

* "[Verificar se há chaves GPG existentes](/articles/checking-for-existing-gpg-keys)"
* "[Gerar uma nova chave GPG](/articles/generating-a-new-gpg-key)"
* "[Adicionar uma nova chave GPG à sua conta do GitHub](/articles/adding-a-new-gpg-key-to-your-github-account)"
* "[Avisar o Git sobre sua chave de assinatura](/articles/telling-git-about-your-signing-key)"
* "[Associar um e-mail à sua chave GPG](/articles/associating-an-email-with-your-gpg-key)"
* "[Assinar tags](/articles/signing-tags)"
