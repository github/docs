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
  - /github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
topics:
  - Páginas
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

Para configurar um `www` ou um subdomínio personalizado como, por exemplo, `www.example.com` ou `blog.example.com`, você deve adicionar seu domínio nas configurações do repositório, o que criará um arquivo CNAME no repositório do seu site. Em seguida, configure um registro CNAME com seu provedor DNS.

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
4. Em "Domínio personalizado,", digite o seu domínio personalizado e clique em **Salvar**. Isso criará um commit que adiciona um arquivo _CNAME_ à raiz da sua fonte de publicação. ![Botão Salvar domínio personalizado](/assets/images/help/pages/save-custom-subdomain.png)
5. Navegue até o provedor DNS e crie um registro `CNAME` que aponte seu subdomínio para o domínio padrão do seu site. Por exemplo, se você quiser usar o subdomínio `www.example.com` para seu site de usuário, crie um registro `CNAME` que aponte `www.example.com` para `<user>.github.io`. Se você desejar usar o subdomínio `www.anotherexample.com` no seu site da organização, crie um registro `CNAME` que aponte `www. notherexample.com` para `<organization>.github.io`. O registro `CNAME` sempre deve apontar para `<user>.github.io` ou `<organization>.github.io`, excluindo o nome do repositório. {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}

{% indented_data_reference site.data.reusables.pages.wildcard-dns-warning spaces=3 %}
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

To set up an apex domain, such as `example.com`, you must configure a _CNAME_ file  in your {% data variables.product.prodname_pages %} repository and at least one `ALIAS`, `ANAME`, or `A` record with your DNS provider.

{% data reusables.pages.www-and-apex-domain-recommendation %} For more information, see "[Configuring a subdomain](#configuring-a-subdomain)."

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
4. Em "Domínio personalizado,", digite o seu domínio personalizado e clique em **Salvar**. Isso criará um commit que adiciona um arquivo _CNAME_ à raiz da sua fonte de publicação. ![Botão Salvar domínio personalizado](/assets/images/help/pages/save-custom-apex-domain.png)
5. Navegue até o provedor DNS e crie um registro `ALIAS`, `ANAME` ou `A`. {% data reusables.pages.contact-dns-provider %}
    - Para criar um registro `ALIAS` ou `ANAME`, aponte o domínio apex para o domínio padrão do seu site. {% data reusables.pages.default-domain-information %}
    - To create `A` records, point your apex domain to the IP addresses for {% data variables.product.prodname_pages %}.
      ```shell
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
      ```

{% indented_data_reference site.data.reusables.pages.wildcard-dns-warning spaces=3 %}
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

### Configuring an apex domain and the `www` subdomain variant

When using an apex domain, we recommend configuring your {% data variables.product.prodname_pages %} site to host content at both the apex domain and that domain's `www` subdomain variant.

To set up a `www` subdomain alongside the apex domain, you must first configure an apex domain, which will create an `ALIAS`, `ANAME`, or `A` record with your DNS provider. For more information, see "[Configuring an apex domain](#configuring-an-apex-domain)."

After you configure the apex domain, you must to configure a CNAME record with your DNS provider.

1. Navigate to your DNS provider and create a `CNAME` record that points `www.example.com` to the default domain for your site: `<user>.github.io` or `<organization>.github.io`. Do not include the repository name. {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}
2. To confirm that your DNS record configured correctly, use the `dig` command, replacing _WWW.EXAMPLE.COM_ with your `www` subdomain variant.
```shell
    $ dig <em>WWW.EXAMPLE.COM</em> +nostats +nocomments +nocmd
    > ;<em>WWW.EXAMPLE.COM.</em>                     IN      A
    > <em>WWW.EXAMPLE.COM.</em>              3592    IN      CNAME   <em>YOUR-USERNAME</em>.github.io.
    > <em>YOUR-USERNAME</em>.github.io.      43192   IN      CNAME   <em> GITHUB-PAGES-SERVER </em>.
    > <em> GITHUB-PAGES-SERVER </em>.         22      IN      A       192.0.2.1
```
### Removing a custom domain

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
4. Under "Custom domain," click **Remove**. ![Botão Salvar domínio personalizado](/assets/images/help/pages/remove-custom-domain.png)

### Leia mais

- "[Solucionar problemas de domínios personalizados e do {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages)"
