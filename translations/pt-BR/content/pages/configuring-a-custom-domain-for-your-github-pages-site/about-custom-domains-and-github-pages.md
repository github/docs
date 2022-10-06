---
title: Sobre domínios personalizados e GitHub Pages
intro: 'O {% data variables.product.prodname_pages %} permite o uso de domínios personalizados, ou a alteração da raiz do URL do seu site do padrão, como `octocat.github.io`, para qualquer domínio que você possua.'
redirect_from:
  - /articles/about-custom-domains-for-github-pages-sites
  - /articles/about-supported-custom-domains
  - /articles/custom-domain-redirects-for-your-github-pages-site
  - /articles/about-custom-domains-and-github-pages
  - /github/working-with-github-pages/about-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Custom domains in GitHub Pages
ms.openlocfilehash: a2c5ae3df0e2dd6248db6e03fd7c64e973b14f3d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128237'
---
## Domínios personalizados compatíveis

O {% data variables.product.prodname_pages %} trabalha com dois tipos de domínio: subdomínios e domínios apex. Para ver uma lista dos domínios personalizados sem suporte, confira "[Solução de problemas de domínios personalizados e do {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages/#custom-domain-names-that-are-unsupported)".

| Tipo de domínio personalizado compatível | Exemplo |
|---|---|
| Subdomínio `www` | `www.example.com` |
| Subdomínio personalizado | `blog.example.com` |
| Domínio Apex        | `example.com` |

Você pode definir configurações de apex e de subdomínio `www` para seu site. Para obter mais informações sobre os domínios apex, confira "[Como usar um domínio apex para seu site do {% data variables.product.prodname_pages %}](#using-an-apex-domain-for-your-github-pages-site)".

Recomendamos sempre usar um subdomínio `www`, mesmo que você também use um domínio apex. Quando você cria um site com um domínio apex, tentamos proteger automaticamente o subdomínio `www` para uso ao fornecer o conteúdo do seu site, mas você precisa fazer as alterações de DNS para usar o subdomínio `www`. Se você configurar um subdomínio `www`, tentaremos proteger automaticamente o domínio apex associado. Para obter mais informações, confira "[Como gerenciar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".

Depois de configurar um domínio personalizado para um site de usuário ou de organização, o domínio personalizado substituirá a parte `<user>.github.io` ou `<organization>.github.io` da URL para os sites de projeto pertencentes à conta que não tenham um domínio personalizado configurado. Por exemplo, se o domínio personalizado para seu site de usuário for `www.octocat.com` e você tiver um site de projeto sem domínio personalizado configurado que seja publicado em um repositório chamado `octo-project`, o site do {% data variables.product.prodname_pages %} para esse repositório estará disponível em `www.octocat.com/octo-project`.

## Usar um subdomínio para seu site do {% data variables.product.prodname_pages %}

Um subdomínio é a parte de um URL antes do domínio raiz. Você pode configurar seu subdomínio como `www` ou como uma seção distinta do seu site, como `blog.example.com`.

Os subdomínios são configurados com um registro `CNAME` por meio do provedor DNS. Para obter mais informações, confira "[Como gerenciar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)".

### Subdomínios `www`

Um subdomínio `www` é o tipo de subdomínio mais usado. Por exemplo, `www.example.com` inclui um subdomínio `www`.

Os subdomínios `www` são o tipo mais estável de domínio personalizado porque os subdomínios `www` não são afetados por alterações nos endereços IP dos servidores do {% data variables.product.product_name %}.

### Subdomínios personalizados

Um subdomínio personalizado é um tipo de subdomínio que não usa a variante padrão `www`. Os subdomínios personalizados são usados mais frequentemente quando você deseja duas seções distintas do site. Por exemplo, você pode criar um site chamado `blog.example.com` e personalizar essa seção independentemente de `www.example.com`.

## Usar um domínio apex para seu site do {% data variables.product.prodname_pages %}

Um domínio apex é um domínio personalizado que não contém um subdomínio, como `example.com`. Os domínios apex também são conhecidos como domínios base, bare, naked, apex raiz ou apex de zona.

Um domínio apex é configurado com um registro `A`, `ALIAS` ou `ANAME` por meio do provedor DNS. Para obter mais informações, confira "[Como gerenciar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)".

{% data reusables.pages.www-and-apex-domain-recommendation %} Para obter mais informações, confira "[Como gerenciar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site/#configuring-a-subdomain)".

## Protegendo o domínio personalizado para o seu site do {% data variables.product.prodname_pages %}

{% data reusables.pages.secure-your-domain %} Para obter mais informações, confira "[Como verificar seu domínio personalizado para o {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)" e "[Como gerenciar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".

Há alguns motivos para que seu site possa ser desabilitado automaticamente.

- Se você fizer downgrade do {% data variables.product.prodname_pro %} para o {% data variables.product.prodname_free_user %}, qualquer site do {% data variables.product.prodname_pages %} que esteja publicado no momento usando repositórios privados em sua conta terão a publicação cancelada. Para obter mais informações, confira "[Como fazer downgrade do seu plano de cobrança do {% data variables.product.prodname_dotcom %}](/articles/downgrading-your-github-billing-plan)".
- Se você transferir um repositório privado para uma conta pessoal que esteja usando o {% data variables.product.prodname_free_user %}, o repositório perderá o acesso ao recurso {% data variables.product.prodname_pages %} e o site do {% data variables.product.prodname_pages %} atualmente publicado terá a publicação cancelada. Para obter mais informações, confira "[Como transferir um repositório](/articles/transferring-a-repository)".

## Leitura adicional

- "[Solução de problemas de domínios personalizados e do {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages)"
