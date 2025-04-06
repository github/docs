---
title: Managing a custom domain for your GitHub Pages site
intro: 'You can set up or update certain DNS records and your repository settings to point the default domain for your {% data variables.product.prodname_pages %} site to a custom domain.'
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
---

People with admin permissions for a repository can configure a custom domain for a {% data variables.product.prodname_pages %} site.

## About custom domain configuration

{% data reusables.pages.custom-domain-warning %}

Make sure you add your custom domain to your {% data variables.product.prodname_pages %} site before configuring your custom domain with your DNS provider. Configuring your custom domain with your DNS provider without adding your custom domain to {% data variables.product.product_name %} could result in someone else being able to host a site on one of your subdomains.

{% windows %}

The `dig` command, which can be used to verify correct configuration of DNS records, is not included in Windows. To verify that your DNS records are configured correctly, you can use the `Resolve-DnsName` PowerShell command or install [BIND](https://www.isc.org/bind/).

{% endwindows %}

{% note %}

**Note:** DNS changes can take up to 24 hours to propagate.

{% endnote %}

## Configuring an apex domain

To set up an apex domain, such as `example.com`, you must configure a custom domain in your repository settings and at least one `ALIAS`, `ANAME`, or `A` record with your DNS provider.

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
1. Under "Custom domain", type your custom domain, then click **Save**. If you are publishing your site from a branch, this will create a commit that adds a `CNAME` file directly to the root of your source branch. If you are publishing your site with a custom {% data variables.product.prodname_actions %} workflow, no `CNAME` file is created, so you need to create one manually (containing only a line of text with your custom domain). For more information about your publishing source, see "[AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."
1. Navigate to your DNS provider and create either an `ALIAS`, `ANAME`, or `A` record. You can also create `AAAA` records for IPv6 support. If you're implementing IPv6 support, we highly recommend using an `A` record in addition to your `AAAA` record, due to slow adoption of IPv6 globally. {% data reusables.pages.contact-dns-provider %}
    * To create an `ALIAS` or `ANAME` record, point your apex domain to the default domain for your site. {% data reusables.pages.default-domain-information %}
    * To create `A` records, point your apex domain to the IP addresses for {% data variables.product.prodname_pages %}.

      ```shell
      185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
      ```

    * To create `AAAA` records, point your apex domain to the IP addresses for {% data variables.product.prodname_pages %}.

      ```shell
      2606:50c0:8000::153
      2606:50c0:8001::153
      2606:50c0:8002::153
      2606:50c0:8003::153
      ```

{% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %}
{% data reusables.command_line.open_the_multi_os_terminal %}
1. To confirm that your DNS record configured correctly, use the `dig` command, replacing _EXAMPLE.COM_ with your apex domain. Confirm that the results match the IP addresses for {% data variables.product.prodname_pages %} above.
   * For `A` records:

     ```shell
     $ dig EXAMPLE.COM +noall +answer -t A
     > EXAMPLE.COM    3600    IN A     185.199.108.153
     > EXAMPLE.COM    3600    IN A     185.199.109.153
     > EXAMPLE.COM    3600    IN A     185.199.110.153
     > EXAMPLE.COM    3600    IN A     185.199.111.153
     ```

   * For `AAAA` records:

     ```shell
     $ dig EXAMPLE.COM +noall +answer -t AAAA
     > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8000::153
     > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8001::153
     > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8002::153
     > EXAMPLE.COM     3600    IN AAAA     2606:50c0:8003::153
     ```

      Remember to also check your `A` record.
{% data reusables.pages.build-locally-download-cname %}
{% data reusables.pages.enforce-https-custom-domain %}

### Configuring an apex domain and the `www` subdomain variant

{% note %}

**Note:** Setting up a `www` subdomain alongside an apex domain is recommended for HTTPS secured websites.

{% endnote %}

{% data reusables.pages.www-and-apex-domain-recommendation %} For more information, see "[Configuring a subdomain](#configuring-a-subdomain)."

Navigate to your DNS provider and create a `CNAME` record for the `www` subdomain that points to your {% data variables.product.prodname_pages %} default domain. For example, if your site is located at `<user>.github.io`, you should create a `CNAME` record that points `www.example.com` to `<user>.github.io` Similarly, for an organization site located at `<organization>.github.io`, you should create a `CNAME` record that points `www.example.com` to `<organization>.github.io`. Ensure that the `CNAME` record points directly to `<user>.github.io` or `<organization>.github.io` without including the repository name.

{% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}

## Configuring a subdomain

To set up a `www` or custom subdomain, such as `www.example.com` or `blog.example.com`, you must add your domain in the repository settings. After that, configure a CNAME record with your DNS provider.

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
1. Under "Custom domain", type your custom domain, then click **Save**. If you are publishing your site from a branch, this will create a commit that adds a `CNAME` file directly to the root of your source branch. If you are publishing your site with a custom {% data variables.product.prodname_actions %} workflow, no `CNAME` file is created, so you need to create one manually (containing only a line of text with your custom domain). For more information about your publishing source, see "[AUTOTITLE](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."

   {% note %}

   **Note:** If your custom domain is an internationalized domain name, you must enter the Punycode encoded version.

   For more information on Punycodes, see [Internationalized domain name](https://en.wikipedia.org/wiki/Internationalized_domain_name).

   {% endnote %}

1. Navigate to your DNS provider and create a `CNAME` record that points your subdomain to the default domain for your site. For example, if you want to use the subdomain `www.example.com` for your user site, create a `CNAME` record that points `www.example.com` to `<user>.github.io`. If you want to use the subdomain `another.example.com` for your organization site, create a `CNAME` record that points `another.example.com` to `<organization>.github.io`. The `CNAME` record should always point to `<user>.github.io` or `<organization>.github.io`, excluding the repository name. {% data reusables.pages.contact-dns-provider %} {% data reusables.pages.default-domain-information %}

{% indented_data_reference reusables.pages.wildcard-dns-warning spaces=3 %}
{% data reusables.command_line.open_the_multi_os_terminal %}
1. To confirm that your DNS record configured correctly, use the `dig` command, replacing _WWW.EXAMPLE.COM_ with your subdomain.

   ```shell
   $ dig WWW.EXAMPLE.COM +nostats +nocomments +nocmd
   > ;WWW.EXAMPLE.COM.                    IN      A
   > WWW.EXAMPLE.COM.             3592    IN      CNAME   YOUR-USERNAME.github.io.
   > YOUR-USERNAME.github.io.      43192   IN      CNAME   GITHUB-PAGES-SERVER .
   > GITHUB-PAGES-SERVER .         22      IN      A       192.0.2.1
   ```

{% data reusables.pages.build-locally-download-cname %}
{% data reusables.pages.enforce-https-custom-domain %}

   {% note %}

   **Note:** If you point your custom subdomain to your apex domain, you will encounter issues with enforcing HTTPS to your website, and you may encounter issues where your subdomain does not reach your {% data variables.product.prodname_pages %} site at all.

   {% endnote %}

## DNS records for your custom domain

If you are familiar with the process of configuring your domain for a {% data variables.product.prodname_pages %} site, you can use the table below to find the DNS values for your specific scenario and the DNS record types that your DNS provider supports. For more information, including how to configure your {% data variables.product.prodname_pages %} site on {% data variables.product.product_name %} and how to verify the configuration using the `dig` command, refer to the sections above.

To configure an apex domain, you only need to pick a single DNS record type from the table below. To configure an apex domain and `www` subdomain (for example, `example.com` and `www.example.com`), configure the apex domain and then the subdomain. For more information, see "[Configuring an apex domain and the `www` subdomain variant](#configuring-an-apex-domain-and-the-www-subdomain-variant)."

{% data reusables.pages.wildcard-dns-warning %}

| Scenario | DNS record type | DNS record name | DNS record value(s) |
|---|---|---|---|
| Apex domain<br />(`example.com`) | `A` | `@` | `185.199.108.153`<br />`185.199.109.153`<br />`185.199.110.153`<br />`185.199.111.153` |
| Apex domain<br />(`example.com`) | `AAAA` | `@` | `2606:50c0:8000::153`<br />`2606:50c0:8001::153`<br />`2606:50c0:8002::153`<br />`2606:50c0:8003::153` |
| Apex domain<br />(`example.com`) | `ALIAS` or `ANAME` | `@` | `USERNAME.github.io` or<br /> `ORGANIZATION.github.io` |
| Subdomain<br />(`ww​w.example.com`,<br />`blog.example.com`) | `CNAME` | `SUBDOMAIN` | `USERNAME.github.io` or<br /> `ORGANIZATION.github.io` |

## Removing a custom domain

If you get an error about a custom domain being taken, you may need to remove the custom domain from another repository.

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
1. Under "Custom domain," click **Remove**.

   ![Screenshot of a settings box to save or remove a custom domain on {% data variables.product.prodname_pages %} . To the right of a text box reading "example.com" is a button labeled "Remove" in red type.](/assets/images/help/pages/remove-custom-domain.png)

## Securing your custom domain

{% data reusables.pages.secure-your-domain %} For more information, see "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)."

## Further reading

* "[AUTOTITLE](/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)"
