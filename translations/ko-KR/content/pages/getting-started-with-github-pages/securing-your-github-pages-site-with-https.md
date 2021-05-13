---
title: Securing your GitHub Pages site with HTTPS
intro: 'HTTPS adds a layer of encryption that prevents others from snooping on or tampering with traffic to your site. You can enforce HTTPS for your {% data variables.product.prodname_pages %} site to transparently redirect all HTTP requests to HTTPS.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/securing-your-github-pages-site-with-https
  - /github/working-with-github-pages/securing-your-github-pages-site-with-https
versions:
  free-pro-team: '*'
topics:
  - Pages
---

People with admin permissions for a repository can enforce HTTPS for a {% data variables.product.prodname_pages %} site.

### About HTTPS and {% data variables.product.prodname_pages %}

All {% data variables.product.prodname_pages %} sites, including sites that are correctly configured with a custom domain, support HTTPS and HTTPS enforcement. For more information about custom domains, see "[About custom domains and {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages)" and "[Troubleshooting custom domains and {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages#https-errors)."

{% data reusables.pages.no_sensitive_data_pages %}

{% data reusables.pages.private_pages_are_public_warning %}

### Enforcing HTTPS for your {% data variables.product.prodname_pages %} site

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. Under "{% data variables.product.prodname_pages %}," select **Enforce HTTPS**. ![Enforce HTTPS checkbox](/assets/images/help/pages/enforce-https-checkbox.png)

### Resolving problems with mixed content

If you enable HTTPS for your {% data variables.product.prodname_pages %} site but your site's HTML still references images, CSS, or JavaScript over HTTP, then your site is serving *mixed content*. Serving mixed content may make your site less secure and cause trouble loading assets.

To remove your site's mixed content, make sure all your assets are served over HTTPS by changing `http://` to `https://` in your site's HTML.

Assets are commonly found in the following locations:
- If your site uses Jekyll, your HTML files will probably be found in the *_layouts* folder.
- CSS is usually found in the `<head>` section of your HTML file.
- JavaScript is usually found in the `<head>` section or just before the closing `</body>` tag.
- Images are often found in the `<body>` section.

{% tip %}

**Tip:** If you can't find your assets in your site's source files, try searching your site's source files for `http` in your text editor or on {% data variables.product.product_name %}.

{% endtip %}

#### Examples of assets referenced in an HTML file

| Asset type |                                                       HTTP                                                       |                                                       HTTPS                                                        |
|:----------:|:----------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------:|
|    CSS     |                      `<link rel="stylesheet" href="http://example.com/css/main.css">`                      |                      `<link rel="stylesheet" href="https://example.com/css/main.css">`                       |
| JavaScript |            `<script type="text/javascript" src="http://example.com/js/main.js"></script>`            |            `<script type="text/javascript" src="https://example.com/js/main.js"></script>`             |
|   Image    | `<A HREF="http://www.somesite.com"><IMG SRC="http://www.example.com/logo.jpg" alt="Logo"></a>` | `<A HREF="https://www.somesite.com"><IMG SRC="https://www.example.com/logo.jpg" alt="Logo"></a>` |  
