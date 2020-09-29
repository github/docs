---
title: Sobre repositórios remotos
redirect_from:
  - /articles/working-when-github-goes-down/
  - /articles/sharing-repositories-without-github/
  - /articles/about-remote-repositories
intro: 'A abordagem colaborativa do GitHub para desenvolvimento depende da publicação de commits do seu repositório local para que outras pessoas exibam, façam fetch e atualizem.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Uma URL remota é outra forma de o Git dizer "o lugar onde seu código é armazenado". A URL poderia ser seu repositório no GitHub, ou a bifurcação de outro usuário, ou até mesmo em um servidor totalmente diferente.

Você pode fazer push apenas de dois tipos de endereço URL:

* Uma URL HTTPS como `https://{% data variables.command_line.backticks %}/user/repo.git`
* Uma URL SSH, como `git@{% data variables.command_line.backticks %}:user/repo.git`

O Git associa uma URL remota a um nome, e seu remote padrão geralmente é chamado de `origin`.

Para obter informações sobre diferenças entre essas URLs, consulte "[Qual URL remota devo usar?](/articles/which-remote-url-should-i-use)"

### Criar remotes

Você pode usar o comando `git remote add` para corresponder uma URL remota a um nome. Por exemplo, você digitaria o seguinte na linha de comando:

```shell
git remote add origin <em> &ltURL_REMOTO> </em>
```

Isso associa o nome `origin` ao `URL_REMOTO`.

É possível usar o comando `git remote set-url` para [alterar uma URL de remote](/articles/changing-a-remote-s-url).
