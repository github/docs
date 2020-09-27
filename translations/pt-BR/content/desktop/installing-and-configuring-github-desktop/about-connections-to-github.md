---
title: Sobre conexões com o GitHub
intro: '{{ site.data.variables.product.prodname_desktop }} usa HTTPS para trocar dados de forma segura com {{ site.data.variables.product.prodname_dotcom }}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/about-connections-to-github
versions:
  free-pro-team: '*'
---

{{ site.data.variables.product.prodname_desktop }} conecta-se a {{ site.data.variables.product.prodname_dotcom }} quando você pull, push, clona e bifurca os repositórios remotos. Para se conectar a {{ site.data.variables.product.prodname_dotcom }} a partir de {{ site.data.variables.product.prodname_desktop }}, você deve autenticar sua conta. Para obter mais informações, consulte "
Autenticar-se no {{ site.data.variables.product.prodname_dotcom }}."</p> 

Depois de se autenticar no {{ site.data.variables.product.prodname_dotcom }}, você poderá se conectar a repositórios remotos com o {{ site.data.variables.product.prodname_desktop }}. O {{ site.data.variables.product.prodname_desktop }} armazena suas credenciais (nome de usuário e senha ou token de acesso pessoal) e usa as credenciais para autenticar cada conexão ao repositório remoto.

{{ site.data.variables.product.prodname_desktop }} se conecta ao {{ site.data.variables.product.prodname_dotcom }} usando HTTPS. Se você usar o {{ site.data.variables.product.prodname_desktop }} para acessar repositórios que foram clonados usando SSH, você poderá encontrar erros. Para se conectar a um repositório que foi clonado usando SSH, altere as URLs do remote. Para obter mais informações, consulte "[Alterar a URL de um remote](/github/using-git/changing-a-remotes-url)".



### Leia mais

- "[Clonagem e bifurcação de repositórios no GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)"
