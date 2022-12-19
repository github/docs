---
title: Gerenciar um domínio personalizado do seu site do GitHub Pages
intro: 'É possível definir ou atualizar determinados registros DNS e as configurações de repositório para apontar o domínio padrão do seu site do {% data variables.product.prodname_pages %} para um domínio personalizado.'
redirect_from:
  - /articles/quick-start-setting-up-a-custom-domain
  - /articles/setting-up-an-apex-domain
  - /articles/setting-up-a-www-subdomain
  - /articles/setting-up-a-custom-domain
  - /articles/setting-up-an-apex-domain-and-www-subdomain
  - /articles/adding-a-cname-file-to-your-repository
  - /articles/setting-up-your-pages-site-repository
  - /articles/managing-a-custom-domain-for-your-github-pages-site
  - /github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Manage a custom domain
ms.openlocfilehash: d8c11f50369d27a1bf99b10ba843e1525b3d4014
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181241'
---
Pessoas com permissões de administrador para um repositório podem configurar um domínio personalizado de um site do {% data variables.product.prodname_pages %}.

## Sobre a configuração de domínio personalizado

Lembre-se de adicionar o domínio personalizado ao seu site do {% data variables.product.prodname_pages %} antes de configurar o domínio personalizado com o provedor DNS. Se você configurar o domínio personalizado com o provedor DNS sem adicioná-lo ao {% data variables.product.product_name %}, outra pessoa conseguirá hospedar um site em um dos seus subdomínios.

{% windows %}

O comando `dig`, que pode ser usado para verificar a configuração correta dos registros DNS, não está incluído no Windows. Para verificar se os registros DNS estão configurados corretamente, instale o [BIND](https://www.isc.org/bind/).

{% endwindows %}

{% note %}

**Observação:** as alterações de DNS podem levar até 24 horas para serem propagadas.

{% endnote %}

## Configurando um subdomínio

Para configurar um subdomínio `www` ou personalizado, como `www.example.com` ou `blog.example.com`, você precisa adicionar seu domínio às configurações do repositório. Em seguida, configure um registro CNAME com seu provedor DNS.

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. Em "Domínio personalizado", digite seu domínio personalizado e clique em **Salvar**. Se você estiver publicando seu site de um branch, isso criará um commit que adiciona um arquivo `CNAME` à raiz do branch de origem. Se você estiver publicando seu site com um fluxo de trabalho de {% data variables.product.prodname_actions %}, nenhum arquivo `CNAME` será criado. Para obter mais informações sobre a sua fonte de publicação, confira "[Como configurar uma fonte de publicação para o seu site do GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."
  ![Botão Salvar domínio personalizado](/assets/images/help/pages/save-custom-subdomain.png)

  {% note %}
  
  **Observação:** se seu domínio personalizado for um nome de domínio internacionalizado, insira a versão codificada pelo Punycode.
  
  Para saber mais sobre Punycodes, confira [Nome de domínio internacionalizado](https://en.wikipedia.org/wiki/Internationalized_domain_name).
  
  {% endnote %}

5. Navegue até o provedor DNS e crie um registro `CNAME` que aponte o subdomínio para o domínio padrão do seu site. Por exemplo, se você quiser usar o subdomínio `www.example.com` para seu site de usuário, crie um registro `CNAME` que aponte `www.example.com` para `<user>.github.io`. Caso deseje usar o subdomínio `another.example.com` para seu site de organização, crie um registro `CNAME` que aponte `another.example.com` para `<organization>.github.io`. O registro `CNAME` deve sempre apontar para `<user>.github.io` ou `<organization>.github.io`, excluindo o nome do repositório. {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}

{% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %} {% data reusables.command_line.open_the_multi_os_terminal %}
6. Para confirmar se o registro DNS foi configurado corretamente, use o comando `dig`, substituindo _WWW.EXAMPLE.COM_ pelo subdomínio.
```shell
    $ dig WWW.EXAMPLE.COM +nostats +nocomments +nocmd
    > ;WWW.EXAMPLE.COM.                    IN      A
    > WWW.EXAMPLE.COM.             3592    IN      CNAME   YOUR-USERNAME.github.io.
    > YOUR-USERNAME.github.io.      43192   IN      CNAME   GITHUB-PAGES-SERVER .
    > GITHUB-PAGES-SERVER .         22      IN      A       192.0.2.1
```
{% data reusables.pages.build-locally-download-cname %} {% data reusables.pages.enforce-https-custom-domain %}

## Configurando um domínio apex

Para configurar um domínio apex, como `example.com`, você precisa configurar um domínio personalizado nas configurações do seu repositório e pelo menos um registro `ALIAS`, `ANAME` ou `A` com seu provedor DNS.

{% data reusables.pages.www-and-apex-domain-recommendation %} Para obter mais informações, confira "[Como configurar um subdomínio](#configuring-a-subdomain)".

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. Em "Domínio personalizado", digite seu domínio personalizado e clique em **Salvar**. Se você estiver publicando seu site de um branch, isso criará um commit que adiciona um arquivo `CNAME` à raiz do branch de origem. Se você estiver publicando seu site com um fluxo de trabalho de {% data variables.product.prodname_actions %}, nenhum arquivo `CNAME` será criado. Para obter mais informações sobre a sua fonte de publicação, confira "[Como configurar uma fonte de publicação para o seu site do GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."
  ![Botão Salvar domínio personalizado](/assets/images/help/pages/save-custom-apex-domain.png)
5. Navegue até o provedor DNS e crie um registro `ALIAS`, `ANAME` ou `A`. Crie também registros `AAAA` para suporte ao IPv6. {% data reusables.pages.contact-dns-provider %}
    - Para criar um registro `ALIAS` ou um registro `ANAME`, aponte seu domínio apex para o domínio padrão do seu site. {% data reusables.pages.default-domain-information %}
    - Para criar registros `A`, aponte seu domínio apex para os endereços IP do {% data variables.product.prodname_pages %}.
      ```shell
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
      ```
    - Para criar registros `AAAA`, aponte seu domínio apex para os endereços IP do {% data variables.product.prodname_pages %}.
      ```shell
      2606:50c0:8000::153
      2606:50c0:8001::153
      2606:50c0:8002::153
      2606:50c0:8003::153
      ```

{% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %} {% data reusables.command_line.open_the_multi_os_terminal %}
6. Para confirmar se o registro DNS foi configurado corretamente, use o comando `dig`, substituindo _EXAMPLE.COM_ pelo domínio apex. Confirme que os resultados correspondem aos endereços IP do {% data variables.product.prodname_pages %} acima.
   - Para registros `A`.
    ```shell
    $ dig EXAMPLE.COM +noall +answer -t A
    > EXAMPLE.COM    3600    IN A     185.199.108.153
    > EXAMPLE.COM    3600    IN A     185.199.109.153
    > EXAMPLE.COM    3600    IN A     185.199.110.153
    > EXAMPLE.COM    3600    IN A     185.199.111.153
    ```
   - Para registros `AAAA`.
    ```shell
    $ dig EXAMPLE.COM +noall +answer -t AAAA
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8000::153
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8001::153
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8002::153
    > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8003::153
    ```
{% data reusables.pages.build-locally-download-cname %} {% data reusables.pages.enforce-https-custom-domain %}

## Como configurar um domínio apex e a variante de subdomínio `www`

Quando você usar um domínio apex, recomendamos que você configure seu site do {% data variables.product.prodname_pages %} para hospedar o conteúdo no domínio apex e na variante de subdomínio `www`.

Para configurar um subdomínio `www` ao lado do domínio apex, primeiro, você precisa configurar um domínio apex criando um registro `ALIAS`, `ANAME` ou `A` com o provedor DNS. Para obter mais informações, confira "[Como configurar um domínio apex](#configuring-an-apex-domain)".

Depois de configurar o domínio apex, você deverá configurar um registro CNAME com seu provedor DNS.

1. Navegue até o provedor DNS e crie um registro `CNAME` que aponte `www.example.com` para o domínio padrão do seu site: `<user>.github.io` ou `<organization>.github.io`. Não inclua o nome do repositório. {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}
2. Para confirmar se o registro DNS foi configurado corretamente, use o comando `dig`, substituindo _WWW.EXAMPLE.COM_ pela variante de subdomínio `www`.
```shell
    $ dig WWW.EXAMPLE.COM +nostats +nocomments +nocmd
    > ;WWW.EXAMPLE.COM                     IN      A
    > WWW.EXAMPLE.COM.              3592    IN      CNAME   YOUR-USERNAME.github.io.
    > YOUR-USERNAME.github.io.      43192   IN      CNAME   GITHUB-PAGES-SERVER.
    > GITHUB-PAGES-SERVER.         22      IN      A       192.0.2.1
```
## Remover um domínio personalizado

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
4. Em "Domínio personalizado", clique em **Remover**.
  ![Botão Salvar domínio personalizado](/assets/images/help/pages/remove-custom-domain.png)

## Protegendo seu domínio personalizado

{% data reusables.pages.secure-your-domain %} Para obter mais informações, confira "[Como verificar seu domínio personalizado do {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)".

## Leitura adicional

- "[Solução de problemas de domínios personalizados e do {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages)"
