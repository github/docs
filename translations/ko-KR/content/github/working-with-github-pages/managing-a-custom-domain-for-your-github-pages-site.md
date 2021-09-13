---
title: Managing a custom domain for your GitHub Pages site
intro: 'You can set up or update certain DNS records and your repository settings to point the default domain for your {% data variables.product.prodname_pages %} site to a custom domain.'
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
topics:
  - pages
---

People with admin permissions for a repository can configure a custom domain for a {% data variables.product.prodname_pages %} site.

### About custom domain configuration

Make sure you add your custom domain to your {% data variables.product.prodname_pages %} site before configuring your custom domain with your DNS provider. Configuring your custom domain with your DNS provider without adding your custom domain to {% data variables.product.product_name %} could result in someone else being able to host a site on one of your subdomains.

{% windows %}

The `dig` command, which can be used to verify correct configuration of DNS records, is not included in Windows. Before you can verify that your DNS records are configured correctly, you must install [BIND](https://www.isc.org/bind/).

{% endwindows %}

{% note %}

**Note:** DNS changes can take up to 24 hours to propagate.

{% endnote %}

### Configuring a subdomain

To set up a `www` or custom subdomain, such as `www.example.com` or `blog.example.com`, you must add your domain in the repository settings, which will create a CNAME file in your site’s repository. After that, configure a CNAME record with your DNS provider.

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
4. Under "Custom domain", type your custom domain, then click **Save**. This will create a commit that adds a _CNAME_ file in the root of your publishing source. ![Save custom domain button](/assets/images/help/pages/save-custom-subdomain.png)
5. Navigate to your DNS provider and create a `CNAME` record that points your subdomain to the default domain for your site. For example, if you want to use the subdomain `www.example.com` for your user site, create a `CNAME` record that points `www.example.com` to `<user>.github.io`. If you want to use the subdomain `www.anotherexample.com` for your organization site, create a `CNAME` record that points `www.anotherexample.com` to `<organization>.github.io`. The `CNAME` record should always point to `<user>.github.io` or `<organization>.github.io`, excluding the repository name. {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}

{% indented_data_reference site.data.reusables.pages.wildcard-dns-warning spaces=3 %}
{% data reusables.command_line.open_the_multi_os_terminal %}
6. To confirm that your DNS record configured correctly, use the `dig` command, replacing _WWW.EXAMPLE.COM_ with your subdomain.
```shell
    $ dig <em>WWW.EXAMPLE.COM</em> +nostats +nocomments +nocmd
    > ;<em>WWW.EXAMPLE.COM.</em>                     IN      A
    > <em>WWW.EXAMPLE.COM.</em>              3592    IN      CNAME   <em>YOUR-USERNAME</em>.github.io.
    > <em>YOUR-USERNAME</em>.github.io.      43192   IN      CNAME   <em> GITHUB-PAGES-SERVER </em>.
    > <em> GITHUB-PAGES-SERVER </em>.         22      IN      A       192.0.2.1
```
{% data reusables.pages.build-locally-download-cname %}
{% data reusables.pages.enforce-https-custom-domain %}

### Configuring an apex domain

To set up an apex domain, such as `example.com`, you must configure a _CNAME_ file  in your {% data variables.product.prodname_pages %} repository and an `ALIAS`, `ANAME`, or `A` record with your DNS provider.

{% data reusables.pages.www-and-apex-domain-recommendation %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
4. Under "Custom domain", type your custom domain, then click **Save**. This will create a commit that adds a _CNAME_ file in the root of your publishing source. ![Save custom domain button](/assets/images/help/pages/save-custom-apex-domain.png)
5. Navigate to your DNS provider and create either an `ALIAS`, `ANAME`, or `A` record. {% data reusables.pages.contact-dns-provider %}
    - To create an `ALIAS` or `ANAME` record, point your apex domain to the default domain for your site. {% data reusables.pages.default-domain-information %}
    - To create an `A` record, point your apex domain to the IP addresses for {% data variables.product.prodname_pages %}.
      ```shell
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
      ```

{% indented_data_reference site.data.reusables.pages.wildcard-dns-warning spaces=3 %}
{% data reusables.command_line.open_the_multi_os_terminal %}
6. To confirm that your DNS record configured correctly, use the `dig` command, replacing _EXAMPLE.COM_ with your apex domain. Confirm that the results match the IP addresses for {% data variables.product.prodname_pages %} above.
  ```shell
  $ dig <em>EXAMPLE.COM</em> +noall +answer
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.108.153
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.109.153
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.110.153
  > <em>EXAMPLE.COM</em>     3600    IN A     185.199.111.153
  ```
{% data reusables.pages.build-locally-download-cname %}
{% data reusables.pages.enforce-https-custom-domain %}

### 더 읽을거리

- "[Troubleshooting custom domains and {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages)"
