---
title: Gerenciar um domínio personalizado do seu site do GitHub Pages
intro: 'É possível definir ou atualizar determinados registros DNS e as configurações de repositório para apontar o domínio padrão do seu site do {% data variables.product.prodname_pages %} para um domínio personalizado.'
redirect_from:
  - /articles/quick-start-setting-up-a-custom-domain/
  - /articles/setting-up-an-apex-domain/
  - /articles/setting-up-a-www-subdomain/
  - /articles/setting-up-a-custom-domain/
  - /articles/setting-up-an-apex-domain-and-www-subdomain/
  - /articles/adding-a-cname-file-to-your-repository/
  - /articles/setting-up-your-pages-site-repository/
  - /articles/managing-a-custom-domain-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
---

Pessoas com permissões de administrador para um repositório podem configurar um domínio personalizado de um site do {% data variables.product.prodname_pages %}.

### Sobre a configuração de domínio personalizado

Lembre-se de adicionar o domínio personalizado ao seu site do {% data variables.product.prodname_pages %} antes de configurar o domínio personalizado com o provedor DNS. Se você configurar o domínio personalizado com o provedor DNS sem adicioná-lo ao {% data variables.product.product_name %}, outra pessoa conseguirá hospedar um site em um dos seus subdomínios.

{% windows %}

O comando `dig`, que pode ser usado para verificar a configuração correta dos registros DNS, não está incluído no Windows. Antes de verificar se os registros DNS estão configurados corretamente, você deve instalar [BIND](https://www.isc.org/bind/).

{% endwindows %}

{% note %}

**Observação:** as alterações no DNS podem levar até 24 horas para serem propagadas.

{% endnote %}

### Configurando um subdomínio

Para configurar um `www` ou subdomínio personalizado, como `www.example.com` ou `blog.exemplo.com`, é preciso criar um arquivo _CNAME_ no repositório do site e configurar um registro `CNAME` com o provedor DNS.

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.save-custom-domain %}
5. Navegue até o provedor DNS e crie um registro `CNAME` que aponte seu subdomínio para o domínio padrão do seu site. Por exemplo, se você quiser usar o subdomínio `www.example.com` para seu site de usuário, crie um registro `CNAME` que aponte `www.example.com` para `<user>.github.io`. Se você desejar usar o subdomínio `www.anotherexample.com` no seu site da organização, crie um registro `CNAME` que aponte `www. notherexample.com` para `<organization>.github.io`. O arquivo `CNAME` sempre deve apontar para `<user>.github.io` ou `<organization>.github.io`, excluindo o nome do repositório.
{% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}
{% data reusables.command_line.open_the_multi_os_terminal %}
6. Para confirmar que o registro DNS foi configurado corretamente, use o comando `dig`, substituindo _WW.EXAMPLE.COM_ pelo seu subdomínio.
```shell
    $ dig <em>WWW.EXAMPLE.COM</em> +nostats +nocomments +nocmd
    > ;<em>WWW.EXAMPLE.COM.</em>                     IN      A
    > <em>WWW.EXAMPLE.COM.</em>              3592    IN      CNAME   <em>YOUR-USERNAME</em>.github.io.
    > <em>YOUR-USERNAME</em>.github.io.      43192   IN      CNAME   <em> GITHUB-PAGES-SERVER </em>.
    > <em> GITHUB-PAGES-SERVER </em>.         22      IN      A       192.0.2.1
```
{% data reusables.pages.build-locally-download-cname %}
{% data reusables.pages.enforce-https-custom-domain %}

### Configurando um domínio apex

Para configurar um domínio apex, como `example.com`, você deve configurar um arquivo _CNAME_ no repositório do {% data variables.product.prodname_pages %} e um registro `ALIAS`, `ANAME` ou `A` com o provedor DNS.

{% data reusables.pages.www-and-apex-domain-recommendation %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.save-custom-domain %}
5. Navegue até o provedor DNS e crie um registro `ALIAS`, `ANAME` ou `A`. {% data reusables.pages.contact-dns-provider %}
    - Para criar um registro `ALIAS` ou `ANAME`, aponte o domínio apex para o domínio padrão do seu site. {% data reusables.pages.default-domain-information %}
    - Para criar um registro `A`, aponte o domínio apex para os endereços IP do {% data variables.product.prodname_pages %}.
      ```shell
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
      ```
{% data reusables.command_line.open_the_multi_os_terminal %}
6. Para confirmar que o registro DNS foi configurado corretamente, use o comando `dig`, substituindo _WW.EXAMPLE.COM_ pelo domínio apex. Confirme que os resultados correspondem aos endereços IP do {% data variables.product.prodname_pages %} acima.
  ```shell
  $ dig <em>EXAMPLE.COM</em> +noall +answer
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.108.153
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.109.153
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.110.153
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.111.153
  ```
{% data reusables.pages.build-locally-download-cname %}
{% data reusables.pages.enforce-https-custom-domain %}

### Leia mais

- "[Solucionar problemas de domínios personalizados e do {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages)"
