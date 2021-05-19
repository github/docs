---
title: Solucionar problemas de domínios personalizados e do GitHub Pages
intro: 'Você pode verificar os erros comuns para resolver problemas com domínios personalizados ou HTTPS no seu site do {% data variables.product.prodname_pages %}.'
redirect_from:
  - /articles/my-custom-domain-isn-t-working/
  - /articles/custom-domain-isn-t-working/
  - /articles/troubleshooting-custom-domains/
  - /articles/troubleshooting-custom-domains-and-github-pages
  - /github/working-with-github-pages/troubleshooting-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
topics:
  - Páginas
---
### Erros _CNAME_

Os domínios personalizados são armazenados em um arquivo _CNAME_ na raiz da fonte de publicação que pode ser adicionado ou atualizado manualmente ou por meio das configurações do repositório. Para obter mais informações, consulte "[Gerenciar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".

Para que o site seja renderizado no domínio correto, verifique se o arquivo _CNAME_ ainda existe no repositório. Por exemplo, muitos geradores de site estáticos fazem push forçado para o repositório, o que pode substituir o arquivo _CNAME_ que foi adicionado ao repositório quando você configurou o domínio personalizado. Se você criar o site localmente e fizer push dos arquivos gerados para o {% data variables.product.product_name %}, primeiro insira o commit que adicionou o arquivo _CNAME_ ao repositório local, para que o arquivo seja incluído na criação.

Em seguida, verifique se o arquivo _CNAME_ está formatado corretamente.

- O nome de arquivo _CNAME_ deve estar todo em letras maiúsculas.
- O arquivo _CNAME_ só pode conter um domínio. Para apontar vários domínios para o site, é preciso configurar um redirecionamento por meio do provedor DNS.
- The _CNAME_ file must contain the domain name only. For example, `www.example.com`, `blog.example.com`, or `example.com`.
- The domain name must be unique across all {% data variables.product.prodname_pages %} sites. Por exemplo, se o arquivo _CNAME_ de outro repositório contiver `example.com`, você não poderá usar `example.com` no arquivo _CNAME_ para o repositório.

### Configuração incorreta do DNS

Se você tiver problemas para apontar o domínio padrão do site para o domínio personalizado, entre em contato com seu provedor DNS.

Você também pode testar se os registros DNS do domínio personalizado estão configurados corretamente. Para obter mais informações, consulte "[Gerenciar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".

### Nomes de domínios personalizados que não são compatíveis

Se o seu domínio personalizado não for compatível, talvez você precise alterá-lo para um que tenha suporte. Você também pode entrar em contato com seu provedor DNS para ver se ele oferece serviços de encaminhamento para nomes de domínio.

Verifique se o seu site não:
- Usa mais de um domínio apex. Por exemplo, `example.com` e `anotherexample.com`.
- Usa mais de um subdomínio `www`. Por exemplo, `www.example.com` e `www.anotherexample.com`.
- Usa um domínio apex e um subdomínio personalizado. Por exemplo, `example.com` e `docs.example.com`.

{% data reusables.pages.wildcard-dns-warning %}

Para obter uma lista de domínios personalizados compatíveis, consulte "[Sobre domínios personalizados e o {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages/#supported-custom-domains)".

### Erros de HTTPS

É possível acessar por HTTPS os sites do {% data variables.product.prodname_pages %} que usem domínios personalizados e estejam corretamente configurados com registros DNS _CNAME_, `ALIAS`, `ANAME` ou `A`. Para obter mais informações, consulte "[Proteger seu site do {% data variables.product.prodname_pages %} com HTTPS](/articles/securing-your-github-pages-site-with-https)".

Depois que você configurar seu domínio personalizado, pode levar até uma hora para o seu site ser disponibilizado por HTTPS. Após a atualização das configurações DNS existentes, talvez seja necessário remover o domínio personalizado e tornar a adicioná-lo ao repositório do site para acionar o processo de habilitação do HTTPS. Para obter mais informações, consulte "[Gerenciar um domínio personalizado para seu site do {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".

Se você estiver usando registros CAA (Certification Authority Authorization, Autorização da autoridade de certificação), pelo menos um deles deverá ter o valor `letsencrypt.org` para que o seu site possa ser acessado por HTTPS. Para obter mais informações, consulte "[Autorização da autoridade de certificação (CAA)](https://letsencrypt.org/docs/caa/)" na documentação de Let's Encrypt.

### Formatação de URL no Linux

Se a URL para o seu site incluir um nome de usuário ou de organização que começa ou termina com um traço ou contiver traços consecutivos, as pessoas que navegam com Linux receberão um erro de servidor quando tentarem visitar o site. Para corrigir isso, remova caracteres não alfanuméricos do seu nome de usuário do {% data variables.product.product_name %}. Para obter mais informações, consulte "[Alterar seu nome de usuário do {% data variables.product.prodname_dotcom %}](/articles/changing-your-github-username/)".

### Cache do navegador

Se você tiver alterado ou removido recentemente seu domínio personalizado e não conseguir acessar a nova URL no navegador, talvez precise limpar o cache do navegador para alcançar a nova URL. Para obter mais informações sobre limpeza do cache, consulte a documentação do navegador.
