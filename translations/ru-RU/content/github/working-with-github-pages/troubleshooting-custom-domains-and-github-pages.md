---
title: Troubleshooting custom domains and GitHub Pages
intro: 'You can check for common errors to resolve issues with custom domains or HTTPS for your {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /articles/my-custom-domain-isn-t-working/
  - /articles/custom-domain-isn-t-working/
  - /articles/troubleshooting-custom-domains/
  - /articles/troubleshooting-custom-domains-and-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
---

### _CNAME_ errors

Custom domains are stored in a _CNAME_ file in the root of your publishing source. You can add or update this file through your repository settings or manually. For more information, see "[Managing a custom domain for your {% data variables.product.prodname_pages %} site](/articles/managing-a-custom-domain-for-your-github-pages-site)."

For your site to render at the correct domain, make sure your _CNAME_ file still exists in the repository. For example, many static site generators force push to your repository, which can overwrite the _CNAME_ file that was added to your repository when you configured your custom domain. If you build your site locally and push generated files to {% data variables.product.product_name %}, make sure to pull the commit that added the _CNAME_ file to your local repository first, so the file will be included in the build.

Then, make sure the _CNAME_ file is formatted correctly.

- The _CNAME_ filename must be all uppercase.
- The _CNAME_ file can contain only one domain. To point multiple domains to your site, you must set up a redirect through your DNS provider.
- The _CNAME_ entry must be the bare domain. For example, `www.example.com`,`blog.example.com`, or `example.com`.
- The _CNAME_ entry can only be used once on {% data variables.product.product_name %}. For example, if another repository's _CNAME_ file contains `example.com`, you cannot use `example.com` in the _CNAME_ file for your repository.

### DNS misconfiguration

If you have trouble pointing the default domain for your site to your custom domain, contact your DNS provider.

You can also test whether your custom domain's DNS records are configured correctly. For more information, see "[Managing a custom domain for your {% data variables.product.prodname_pages %} site](/articles/managing-a-custom-domain-for-your-github-pages-site)."

### Custom domain names that are unsupported

If your custom domain is unsupported, you may need to change your domain to a supported domain. You can also contact your DNS provider to see if they offer forwarding services for domain names.

Make sure your site does not:
- Use more than one apex domain. For example, both `example.com` and `anotherexample.com`.
- Use more than one `www` subdomain. For example, both `www.example.com` and `www.anotherexample.com`.
- Use both an apex domain and custom subdomain. For example, both `example.com` and `docs.example.com`.

{% data reusables.pages.wildcard-dns-warning %}

For a list of supported custom domains, see "[About custom domains and {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages/#supported-custom-domains)."

### HTTPS errors

{% data variables.product.prodname_pages %} sites using custom domains that are correctly configured with _CNAME_, `ALIAS`, `ANAME`, or `A` DNS records can be accessed over HTTPS. For more information, see "[Securing your {% data variables.product.prodname_pages %} site with HTTPS](/articles/securing-your-github-pages-site-with-https)."

It can take up to an hour for your site to become available over HTTPS after you configure your custom domain. After you update existing DNS settings, you may need to remove and re-add your custom domain to your site's repository to trigger the process of enabling HTTPS. For more information, see "[Managing a custom domain for your {% data variables.product.prodname_pages %} site](/articles/managing-a-custom-domain-for-your-github-pages-site)."

If you're using Certification Authority Authorization (CAA) records, at least one CAA record must exist with the value `letsencrypt.org` for your site to be accessible over HTTPS. For more information, see "[Certificate Authority Authorization (CAA)](https://letsencrypt.org/docs/caa/)" in the Let's Encrypt documentation.

### URL formatting on Linux

If the URL for your site contains a username or organization name that begins or ends with a dash, or contains consecutive dashes, people browsing with Linux will receive a server error when they attempt to visit your site. To fix this, change your {% data variables.product.product_name %} username to remove non-alphanumeric characters. For more information, see "[Changing your {% data variables.product.prodname_dotcom %} username](/articles/changing-your-github-username/)."

### Browser cache

If you've recently changed or removed your custom domain and can't access the new URL in your browser, you may need to clear your browser's cache to reach the new URL. For more information on clearing your cache, see your browser's documentation.
