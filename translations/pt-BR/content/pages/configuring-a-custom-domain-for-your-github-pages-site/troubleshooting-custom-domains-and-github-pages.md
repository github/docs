---
title: Solucionar problemas de domínios personalizados e do GitHub Pages
intro: 'Você pode verificar os erros comuns para resolver problemas com domínios personalizados ou HTTPS no seu site do {% data variables.product.prodname_pages %}.'
redirect_from:
  - /articles/my-custom-domain-isn-t-working
  - /articles/custom-domain-isn-t-working
  - /articles/troubleshooting-custom-domains
  - /articles/troubleshooting-custom-domains-and-github-pages
  - /github/working-with-github-pages/troubleshooting-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Troubleshoot a custom domain
ms.openlocfilehash: ce6251dbe96d531462c5c664dc9000f138059889
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147428385'
---
## Erros de _CNAME_

{% ifversion pages-custom-workflow %}Se você estiver publicando de um fluxo de trabalho personalizado de {% data variables.product.prodname_actions %}, qualquer arquivo _CNAME_ será ignorado e não será necessário.{% endif %}

Se você estiver publicando de um branch, os domínios personalizados serão armazenados em um arquivo _CNAME_ na raiz da fonte de publicação. que pode ser adicionado ou atualizado manualmente ou por meio das configurações do repositório. Para obter mais informações, confira "[Como gerenciar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".

Para que o seu site seja renderizado no domínio correto, verifique se o arquivo _CNAME_ ainda existe no repositório. Por exemplo, muitos geradores de site estáticos forçam o push para o repositório, o que pode substituir o arquivo _CNAME_ que foi adicionado ao repositório quando você configurou o domínio personalizado. Se você compilar o site localmente e enviar arquivos gerados por push para o {% data variables.product.product_name %}, efetue pull do commit que adicionou o arquivo _CNAME_ para o repositório local primeiro, para que o arquivo seja incluído no build.

Em seguida, verifique se o arquivo _CNAME_ está formatado corretamente.

- O nome do arquivo _CNAME_ precisa estar todo em maiúsculas.
- O arquivo _CNAME_ pode conter apenas um domínio. Para apontar vários domínios para o site, é preciso configurar um redirecionamento por meio do provedor DNS.
- O arquivo _CNAME_ precisa conter apenas o nome de domínio. Por exemplo, `www.example.com`, `blog.example.com` ou `example.com`.
- O nome de domínio precisa ser único em todos os sites de {% data variables.product.prodname_pages %}. Por exemplo, se o arquivo _CNAME_ de outro repositório contiver `example.com`, não será possível usar `example.com` no arquivo _CNAME_ para o repositório.

## Configuração incorreta do DNS

Se você tiver problemas para apontar o domínio padrão do site para o domínio personalizado, entre em contato com seu provedor DNS.

Você também pode usar um dos seguintes métodos para testar se os registros DNS do seu domínio personalizado estão configurados corretamente:

- Uma ferramenta de CLI, como `dig`. Para obter mais informações, confira "[Como gerenciar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".
- Uma ferramenta de pesquisa de DNS on-line.

## Nomes de domínios personalizados que não são compatíveis

Se o seu domínio personalizado não for compatível, talvez você precise alterá-lo para um que tenha suporte. Você também pode entrar em contato com seu provedor DNS para ver se ele oferece serviços de encaminhamento para nomes de domínio.

Verifique se o seu site não:
- Usa mais de um domínio apex. Por exemplo, `example.com` e `anotherexample.com`.
- Use mais de um subdomínio `www`. Por exemplo, `www.example.com` e `www.anotherexample.com`.
- Usa um domínio apex e um subdomínio personalizado. Por exemplo, `example.com` e `docs.example.com`.

  A única exceção é o subdomínio `www`. Se ele estiver configurado corretamente, o subdomínio `www` será redirecionado automaticamente para o domínio apex. Para obter mais informações, confira "[Como gerenciar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)".

{% data reusables.pages.wildcard-dns-warning %}

Para ver uma lista dos domínios personalizados compatíveis, confira "[Sobre os domínios personalizados e o {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages/#supported-custom-domains)".

## Erros de HTTPS

Os sites do {% data variables.product.prodname_pages %} que usam do domínios personalizados e que estão configurados corretamente com registros DNS `CNAME`, `ALIAS`, `ANAME` ou `A` podem ser acessados por HTTPS. Para obter mais informações, confira "[Como proteger seu site do {% data variables.product.prodname_pages %} com HTTPS](/articles/securing-your-github-pages-site-with-https)".

Depois que você configurar seu domínio personalizado, pode levar até uma hora para o seu site ser disponibilizado por HTTPS. Após a atualização das configurações DNS existentes, talvez seja necessário remover o domínio personalizado e tornar a adicioná-lo ao repositório do site para acionar o processo de habilitação do HTTPS. Para obter mais informações, confira "[Como gerenciar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".

Se você estiver usando registros de CAA (Autorização da Autoridade de Certificação), pelo menos, um registro CAA precisará existir com o valor `letsencrypt.org` para que o seu site seja acessível por HTTPS. Para obter mais informações, confira "[CAA (Autorização da Autoridade de Certificação)](https://letsencrypt.org/docs/caa/)" na documentação do Let's Encrypt.

## Formatação de URL no Linux

Se a URL para o seu site incluir um nome de usuário ou de organização que começa ou termina com um traço ou contiver traços consecutivos, as pessoas que navegam com Linux receberão um erro de servidor quando tentarem visitar o site. Para corrigir isso, remova caracteres não alfanuméricos do seu nome de usuário do {% data variables.product.product_name %}. Para obter mais informações, confira "[Como alterar seu nome de usuário do {% data variables.product.prodname_dotcom %}](/articles/changing-your-github-username/)".

## Cache do navegador

Se você tiver alterado ou removido recentemente seu domínio personalizado e não conseguir acessar a nova URL no navegador, talvez precise limpar o cache do navegador para alcançar a nova URL. Para obter mais informações sobre limpeza do cache, consulte a documentação do navegador.
