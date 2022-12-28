---
title: Sobre repositórios remote
redirect_from:
  - /articles/working-when-github-goes-down
  - /articles/sharing-repositories-without-github
  - /articles/about-remote-repositories
  - /articles/which-url-should-i-use
  - /articles/which-remote-url-should-i-use
  - /github/using-git/which-remote-url-should-i-use
  - /github/using-git/about-remote-repositories
  - /github/getting-started-with-github/about-remote-repositories
  - /github/getting-started-with-github/getting-started-with-git/about-remote-repositories
intro: 'A abordagem colaborativa do GitHub para o desenvolvimento depende da publicação de commits do seu repositório local para {% data variables.product.product_name %} para que outras pessoas visualizem, façam buscas e atualizações.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: fded875778bd0c573d82db5043e3ce8f195a0d2f
ms.sourcegitcommit: a9ede282ae525dfe101b3e80ac85763d242a744a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/02/2022
ms.locfileid: '148130887'
---
## Sobre repositórios remote

Uma URL remota é outra forma de o Git dizer "o lugar onde seu código é armazenado". A URL poderia ser seu repositório no GitHub, ou a bifurcação de outro usuário, ou até mesmo em um servidor totalmente diferente.

Você pode fazer push apenas de dois tipos de endereço URL:

* Uma URL HTTPS como `https://{% data variables.command_line.backticks %}/user/repo.git`
* Uma URL SSH como `git@{% data variables.command_line.backticks %}:user/repo.git`

O Git associa uma URL remota a um nome, e o repositório remoto padrão geralmente é chamado `origin`.

## Criar repositórios remotos

Use o comando `git remote add` para corresponder uma URL remota com um nome.
Por exemplo, você digitaria o seguinte na linha de comando:

```shell
git remote add origin &lt;REMOTE_URL>
```

Isso associa o nome `origin` à `REMOTE_URL`.

Use o comando `git remote set-url` para [alterar a URL de um repositório remoto](/get-started/getting-started-with-git/managing-remote-repositories).

## Escolher uma URL para o seu repositório remoto

Existem várias maneiras de clonar repositórios disponíveis no {% data variables.location.product_location %}.

Quando você visualiza um repositório conectado à sua conta, as URLs que podem ser usadas para clonar o projeto no computador ficam disponíveis abaixo dos detalhes do repositório.

Para obter informações sobre como definir ou alterar a URL remota, confira "[Como gerenciar repositórios remotos](/get-started/getting-started-with-git/managing-remote-repositories)".

## Clonando com as URLs de HTTPS

As URLs de clone `https://` estão disponíveis em todos os repositórios, independentemente da visibilidade. As URLs de clone `https://` funcionam mesmo que você esteja protegido por um firewall ou um proxy.

Quando você usar `git clone`, `git fetch`, `git pull` ou `git push` em um repositório remoto usando URLs HTTPS na linha de comando, o Git solicitará seu nome de usuário e sua senha do {% data variables.product.product_name %}. {% data reusables.user-settings.password-authentication-deprecation %}

{% data reusables.command_line.provide-an-access-token %}

{% tip %}

**Dicas**:
- Você pode usar um auxiliar de credenciais para que o Git se lembre de suas credenciais de {% data variables.product.prodname_dotcom %} toda vez que falar com {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Como armazenar em cache suas credenciais do {% data variables.product.prodname_dotcom %} no Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)".
- Para clonar um repositório sem se autenticar no {% data variables.product.product_name %} na linha de comando, use o {% data variables.product.prodname_desktop %} para a clonagem. Para obter mais informações, confira "[Como clonar um repositório do {% data variables.product.prodname_dotcom %} no {% data variables.product.prodname_dotcom %} Desktop](/desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)".

{% endtip %}

 {% ifversion fpt or ghec %}Se você prefere usar o SSH mas não consegue se conectar pela porta 22, use o SSH pela porta HTTPS. Para obter mais informações, confira "[Como usar o SSH na porta HTTPS](/github/authenticating-to-github/using-ssh-over-the-https-port)".{% endif %}

## Clonar com URLs de SSH

As URLs de SSH fornecem acesso a um repositório do Git via SSH, um protocolo seguro. Para usar estas URLs, gere um par de chaves SSH no computador e adicione a chave **pública** à sua conta do {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}. Para obter mais informações, confira "[Como se conectar ao {% data variables.product.prodname_dotcom %} com o SSH](/github/authenticating-to-github/connecting-to-github-with-ssh)".

Quando você usar `git clone`, `git fetch`, `git pull`ou `git push` em um repositório remoto usando URLs SSH, precisará inserir uma senha e fornecer sua frase secreta de chave SSH. Para obter mais informações, confira "[Como trabalhar com frases secretas de chave SSH](/github/authenticating-to-github/working-with-ssh-key-passphrases)".

{% ifversion fpt or ghec %}Se você estiver acessando uma organização que usa o SSO (logon único) do SAML, precisará autorizar sua chave SSH a acessar a organização antes de realizar a autenticação. Para obter mais informações, confira "[Sobre a autenticação com o logon único do SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)" e "[Como autorizar uma chave SSH para uso com o logon único do SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}{% endif %}

{% tip %}

**Dica**: use uma URL com SSH para clonar um repositório no computador ou como uma forma segura de implantar seu código em servidores de produção. Você também pode usar o encaminhamento de agente SSH com o seu script de implantação para evitar o gerenciamento de chaves no servidor. Para obter mais informações, confira "[Como usar o encaminhamento do agente SSH](/developers/overview/using-ssh-agent-forwarding)".

{% endtip %}

## Clonar com {% data variables.product.prodname_cli %}

Você também pode instalar o {% data variables.product.prodname_cli %} para usar os fluxos de trabalho do {% data variables.product.product_name %} no seu terminal. Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

{% ifversion not ghae %}
## Clonar com o Subversion

Use também um cliente do [Subversion](https://subversion.apache.org/) para acessar qualquer repositório no {% data variables.product.prodname_dotcom %}. O Subversion oferece um conjunto de recursos diferente do Git. Para obter mais informações, confira "[Quais são as diferenças entre o Subversion e o Git?](/github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git)"

Você também pode acessar repositórios no {% data variables.product.prodname_dotcom %} a partir de clientes do Subversion. Para obter mais informações, confira "[Suporte para clientes do Subversion](/github/importing-your-projects-to-github/support-for-subversion-clients)".
{% endif %}
