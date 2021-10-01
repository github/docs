---
title: Atualizar credenciais da keychain OSX
intro: 'Você precisará atualizar suas credenciais salvas no auxiliar `git-credential-osxkeychain` se você alterar o seu {% ifversion not ghae %} nome de usuário, senha ou{% endif %} token de acesso pessoal em {% data variables.product.product_name %}.'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/getting-started-with-git/updating-credentials-from-the-macos-keychain
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Credenciais de keychain do macOS
---

{% tip %}

**Note:** Updating credentials from the macOS Keychain only applies to users who manually configured a PAT using the  `osxkeychain` helper that is built-in to macOS.

We recommend you either [configure SSH](/articles/generating-an-ssh-key) or upgrade to the [Git Credential Manager Core](/get-started/getting-started-with-git/caching-your-github-credentials-in-git) (GCM Core) instead. GCM Core can manage authentication on your behalf (no more manual PATs) including 2FA (two-factor auth).

{% endtip %}

{% data reusables.user_settings.password-authentication-deprecation %}

## Atualizar credenciais pelo Keychain Access

1. Clique no ícone do Spotlight (lente ampliada) no lado direito da barra de menu. Digite `Acesso da Keychain` e, em seguida, pressione a chave Enter para iniciar o aplicativo. ![Barra de pesquisa do Spotlight](/assets/images/help/setup/keychain-access.png)
2. No Keychain Access, procure por **{% data variables.command_line.backticks %}**.
3. Localize a entrada "internet password" (senha da internet) referente a `{% data variables.command_line.backticks %}`.
4. Edite ou exclua a entrada de acordo.

## Excluir credenciais pela linha de comando

Através da linha de comando, você pode usar o auxiliar de credenciais diretamente para apagar a entrada de keychain.

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Pressione Return]</em>
```

Se a ação for bem-sucedida, nada será impresso. Para testar se funciona, tente clonar um repositório privado a partir de {% data variables.product.product_location %}. Se for solicitada uma senha, significa que a entrada da keychain foi excluída.

## Leia mais

- "[Armazenar suas credenciais de {% data variables.product.prodname_dotcom %} no Git](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
