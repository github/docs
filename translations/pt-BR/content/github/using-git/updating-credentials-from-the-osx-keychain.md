---
title: Atualizar credenciais da keychain OSX
intro: 'You''ll need to update your saved credentials in the `git-credential-osxkeychain` helper if you change your username, password, or personal access token on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.user_settings.password-authentication-deprecation %}

### Atualizar credenciais pelo Keychain Access

1. Procure o app **Keychain Access** (Acesso a keychain) no Finder (Localizador). ![Barra de pesquisa do Spotlight](/assets/images/help/setup/keychain-access.png)
2. No Keychain Access, procure por **{% data variables.command_line.backticks %}**.
3. Localize a entrada "internet password" (senha da internet) referente a `{% data variables.command_line.backticks %}`. ![Entrada de senha do GitHub na keychain](/assets/images/help/setup/keychain-entry.png)
4. Edite ou exclua a entrada de acordo.

### Excluir credenciais pela linha de comando

É possível usar o auxiliar de credenciais diretamente na linha de comando para apagar a entrada de keychain.

Para fazer isso, digite este comando:

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Pressione Return]</em>
```

Se a ação for bem-sucedida, nada será impresso. Para testar se funcionou, experimente clonar um repositório do {% data variables.product.product_location %}. Se for solicitada uma senha, significa que a entrada de keychain foi excluída.

### Leia mais

- "[Caching your {% data variables.product.prodname_dotcom %} credentials in Git](/github/using-git/caching-your-github-credentials-in-git/)"
