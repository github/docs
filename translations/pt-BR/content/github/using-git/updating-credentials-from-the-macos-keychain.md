---
title: Atualizar credenciais da keychain OSX
intro: 'You''ll need to update your saved credentials in the `git-credential-osxkeychain` helper if you change your{% if currentVersion != "github-ae@latest" %} username, password, or{% endif %} personal access token on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - Entrada de senha do GitHub na keychain
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.user_settings.password-authentication-deprecation %}

### Atualizar credenciais pelo Keychain Access

1. Clique no ícone do Spotlight (lente ampliada) no lado direito da barra de menu. Digite `Acesso da Keychain` e, em seguida, pressione a chave Enter para iniciar o aplicativo. ![Barra de pesquisa do Spotlight](/assets/images/help/setup/keychain-access.png)
2. No Keychain Access, procure por **{% data variables.command_line.backticks %}**.
3. Localize a entrada "internet password" (senha da internet) referente a `{% data variables.command_line.backticks %}`.
4. Edite ou exclua a entrada de acordo.

### Excluir credenciais pela linha de comando

Through the command line, you can use the credential helper directly to erase the keychain entry.

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Pressione Return]</em>
```

Se a ação for bem-sucedida, nada será impresso. To test that it works, try and clone a repository from {% data variables.product.product_location %}. If you are prompted for a password, the keychain entry was deleted.

### Leia mais

- "[Armazenar suas credenciais de {% data variables.product.prodname_dotcom %} no Git](/github/using-git/caching-your-github-credentials-in-git/)"
