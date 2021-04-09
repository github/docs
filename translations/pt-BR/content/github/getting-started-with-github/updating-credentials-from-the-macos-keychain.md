---
title: Atualizar credenciais da keychain OSX
intro: 'Você precisará atualizar suas credenciais salvas no auxiliar `git-credential-osxkeychain` se você alterar o seu {% if currentVersion != "github-ae@latest" %} nome de usuário, senha ou{% endif %} token de acesso pessoal em {% data variables.product.product_name %}.'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - Entrada de senha do GitHub na keychain
  - /github/using-git/updating-credentials-from-the-macos-keychain
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

Através da linha de comando, você pode usar o auxiliar de credenciais diretamente para apagar a entrada de keychain.

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Pressione Return]</em>
```

Se a ação for bem-sucedida, nada será impresso. Para testar se funciona, tente clonar um repositório privado a partir de {% data variables.product.product_location %}. Se for solicitada uma senha, significa que a entrada da keychain foi excluída.

### Leia mais

- "[Armazenar suas credenciais de {% data variables.product.prodname_dotcom %} no Git](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
