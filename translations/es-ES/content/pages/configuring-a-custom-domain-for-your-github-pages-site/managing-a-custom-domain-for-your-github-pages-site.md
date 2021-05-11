---
title: Configurar un dominio personalizado para tu sitio de Páginas de GitHub
intro: 'Puedes configurar o actualizar determinados registros DNS y las configuraciones de tu repositorio para que apunten el dominio predeterminado de tu sitio de {% data variables.product.prodname_pages %} a un dominio personalizado.'
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
  - Pages
---

Las personas con permisos de administración para un repositorio pueden configurar un dominio personalizado para un sitio de {% data variables.product.prodname_pages %}.

### Acerca de la configuración de dominios personalizados

Asegúrate de agregar tu dominio personalizado al sitio de {% data variables.product.prodname_pages %} antes de configurar el dominio personalizado con tu proveedor DNS. Configurar tu dominio personalizado con tu proveedor DNS sin agregar tu dominio personalizado a {% data variables.product.product_name %} podría dar como resultado que alguien aloje un sitio en uno de tus subdominios.

{% windows %}

El comando `dig`, que se puede usar para verificar la correcta configuración de los registros DNS, no está incluido en Windows. Antes de poder verificar que tus registros DNS estén configurados correctamente, debes instalar [BIND](https://www.isc.org/bind/).

{% endwindows %}

{% note %}

**Nota:** Los cambios DNS pueden tardar hasta 24 horas en propagarse.

{% endnote %}

### Configurar un subdominio

Para configurar un subdominio personalizado o de `www` tal como `www.example.com` o `blog.example.com`, debes agregar tu dominio en la configuración de repositorio, el cual creará un archivo de CNAME en el repositorio de tu sitio. Después de esto, configura un registro de CNAME con tu proveedor de DNS.

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
4. Debajo de "Dominio personalizado", teclea tu dominio personalizado y luego da clic en **Guardar**. Esto creará una confirmación que agregará un archivo _CNAME_ en la raíz de tu fuente de publicación. ![Botón de guardar dominio personalizado](/assets/images/help/pages/save-custom-subdomain.png)
5. Desplázate hasta tu proveedor DNS y crea un registro `CNAME` que apunte tu subdominio al dominio predeterminado de tu sitio. Por ejemplo, si quieres usar el subdominio `www.example.com` para tu sitio de usuario, crea un registro `CNAME` que apunte `www.example.com` a `<user>.github.io`. Si quieres utilizar el subdominio `www.anotherexample.com` para el sitio de tu organización, crea un registro de `CNAME` que apunte a `www.anotherexample.com` hacia `<organization>.github.io`. El registro `CNAME` siempre deberá apuntar hacia `<user>.github.io` o `<organization>.github.io`, excluyendo el nombre del repositorio. {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}

{% indented_data_reference site.data.reusables.pages.wildcard-dns-warning spaces=3 %}
{% data reusables.command_line.open_the_multi_os_terminal %}
6. Para confirmar que tu registro DNS esté configurado correctamente, usa el comando `dig` reemplazando _WW.EXAMPLE.COM_ por tu subdominio.
```shell
    $ dig <em>WWW.EXAMPLE.COM</em> +nostats +nocomments +nocmd
    > ;<em>WWW.EXAMPLE.COM.</em>                     IN      A
    > <em>WWW.EXAMPLE.COM.</em>              3592    IN      CNAME   <em>YOUR-USERNAME</em>.github.io.
    > <em>YOUR-USERNAME</em>.github.io.      43192   IN      CNAME   <em> GITHUB-PAGES-SERVER </em>.
    > <em> GITHUB-PAGES-SERVER </em>.         22      IN      A       192.0.2.1
```
{% data reusables.pages.build-locally-download-cname %}
{% data reusables.pages.enforce-https-custom-domain %}

### Configurar un dominio apex

To set up an apex domain, such as `example.com`, you must configure a _CNAME_ file  in your {% data variables.product.prodname_pages %} repository and at least one `ALIAS`, `ANAME`, or `A` record with your DNS provider.

{% data reusables.pages.www-and-apex-domain-recommendation %} For more information, see "[Configuring a subdomain](#configuring-a-subdomain)."

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
4. Debajo de "Dominio personalizado", teclea tu dominio personalizado y luego da clic en **Guardar**. Esto creará una confirmación que agregará un archivo _CNAME_ en la raíz de tu fuente de publicación. ![Botón de guardar dominio personalizado](/assets/images/help/pages/save-custom-apex-domain.png)
5. Desplázate hasta tu proveedor DNS y crea un registro `ALIAS`, `ANAME` o `A`. {% data reusables.pages.contact-dns-provider %}
    - Para crear un registro `ALIAS` o `ANAME`, apunta tu dominio apex al dominio predeterminado de tu sitio. {% data reusables.pages.default-domain-information %}
    - To create `A` records, point your apex domain to the IP addresses for {% data variables.product.prodname_pages %}.
      ```shell
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
      ```

{% indented_data_reference site.data.reusables.pages.wildcard-dns-warning spaces=3 %}
{% data reusables.command_line.open_the_multi_os_terminal %}
6. Para confirmar que tu registro DNS esté configurado correctamente, usa el comando `dig` reemplazando _EXAMPLE.COM_ por tu dominio apex. Confirma que los resultados coincidan con las direcciones IP de las {% data variables.product.prodname_pages %} que aparecen arriba.
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
4. Under "Custom domain," click **Remove**. ![Botón de guardar dominio personalizado](/assets/images/help/pages/remove-custom-domain.png)

### Leer más

- "[Solución de problemas de dominios personalizados y {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages)"
