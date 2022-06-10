---
title: About GitHub Pages
intro: 'You can use {% data variables.product.prodname_pages %} to host a website about yourself, your organization, or your project directly from a repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.'
redirect_from:
  - /articles/what-are-github-pages
  - /articles/what-is-github-pages
  - /articles/user-organization-and-project-pages
  - /articles/using-a-static-site-generator-other-than-jekyll
  - /articles/mime-types-on-github-pages
  - /articles/should-i-rename-usernamegithubcom-repositories-to-usernamegithubio
  - /articles/about-github-pages
  - /github/working-with-github-pages/about-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
---

## About {% data variables.product.prodname_pages %}

{% data variables.product.prodname_pages %} is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on {% data variables.product.product_name %}, optionally runs the files through a build process, and publishes a website. You can see examples of {% data variables.product.prodname_pages %} sites in the [{% data variables.product.prodname_pages %} examples collection](https://github.com/collections/github-pages-examples).

{% ifversion fpt or ghec %}
You can host your site on {% data variables.product.prodname_dotcom %}'s `github.io` domain or your own custom domain. For more information, see "[Using a custom domain with {% data variables.product.prodname_pages %}](/articles/using-a-custom-domain-with-github-pages)."
{% endif %}

{% ifversion fpt or ghec %}
{% data reusables.pages.about-private-publishing %} For more information, see "[Changing the visibility of your {% data variables.product.prodname_pages %} site]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}
{% endif %}

To get started, see "[Creating a {% data variables.product.prodname_pages %} site](/articles/creating-a-github-pages-site)."

{% ifversion fpt or ghes or ghec %}
Organization owners can disable the publication of {% data variables.product.prodname_pages %} sites from the organization's repositories. For more information, see "[Managing the publication of {% data variables.product.prodname_pages %} sites for your organization](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)."
{% endif %}

## Types of {% data variables.product.prodname_pages %} sites

There are three types of {% data variables.product.prodname_pages %} sites: project, user, and organization. Project sites are connected to a specific project hosted on {% data variables.product.product_name %}, such as a JavaScript library or a recipe collection. User and organization sites are connected to a specific account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

To publish a user site, you must create a repository owned by your personal account that's named {% ifversion fpt or ghec %}`<username>.github.io`{% else %}`<username>.<hostname>`{% endif %}. To publish an organization site, you must create a repository owned by an organization that's named {% ifversion fpt or ghec %}`<organization>.github.io`{% else %}`<organization>.<hostname>`{% endif %}. {% ifversion fpt or ghec %}Unless you're using a custom domain, user and organization sites are available at `http(s)://<username>.github.io` or `http(s)://<organization>.github.io`.{% elsif ghae %}User and organization sites are available at `http(s)://pages.<hostname>/<username>` or `http(s)://pages.<hostname>/<organization>`.{% endif %}

The source files for a project site are stored in the same repository as their project. {% ifversion fpt or ghec %}Unless you're using a custom domain, project sites are available at `http(s)://<username>.github.io/<repository>` or `http(s)://<organization>.github.io/<repository>`.{% elsif ghae %}Project sites are available at `http(s)://pages.<hostname>/<username>/<repository>/` or `http(s)://pages.<hostname>/<organization>/<repository>/`.{% endif %}

{% ifversion ghec %}
If you publish your site privately, the URL for your site will be different. For more information, see "[Changing the visibility of your {% data variables.product.prodname_pages %} site](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)."
{% endif %}

{% ifversion fpt or ghec %}
For more information about how custom domains affect the URL for your site, see "[About custom domains and {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages)."
{% endif %}

You can only create one user or organization site for each account on {% data variables.product.product_name %}. Project sites, whether owned by an organization or a personal account, are unlimited.

{% ifversion ghes %}
The URL where your site is available depends on whether subdomain isolation is enabled for {% data variables.product.product_location %}.

| Type of site | Subdomain isolation enabled | Subdomain isolation disabled |
| ------------ | --------------------------- | ---------------------------- |
User | `http(s)://pages.<hostname>/<username>` | `http(s)://<hostname>/pages/<username>` |
Organization | `http(s)://pages.<hostname>/<organization>` | `http(s)://<hostname>/pages/<organization>` |
Project site owned by personal account | `http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/`
Project site owned by organization account | `http(s)://pages.<hostname>/<orgname>/<repository>/` | `http(s)://<hostname>/pages/<orgname>/<repository>/`

For more information, see "[Enabling subdomain isolation](/enterprise/{{ currentVersion }}/admin/installation/enabling-subdomain-isolation)" or contact your site administrator.
{% endif %}

## Publishing sources for {% data variables.product.prodname_pages %} sites

The publishing source for your {% data variables.product.prodname_pages %} site is the branch and folder where the source files for your site are stored.

{% data reusables.pages.private_pages_are_public_warning %}

If the default publishing source exists in your repository, {% data variables.product.prodname_pages %} will automatically publish a site from that source. The default publishing source for user and organization sites is the root of the default branch for the repository. The default publishing source for project sites is the root of the `gh-pages` branch.

If you want to keep the source files for your site in a different location, you can change the publishing source for your site. You can publish your site from any branch in the repository, either from the root of the repository on that branch, `/`, or from the `/docs` folder on that branch. For more information, see "[Configuring a publishing source for your {% data variables.product.prodname_pages %} site](/articles/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)."

If you choose the `/docs` folder of any branch as your publishing source, {% data variables.product.prodname_pages %} will read everything to publish your site{% ifversion fpt or ghec %}, including the _CNAME_ file,{% endif %} from the `/docs` folder.{% ifversion fpt or ghec %} For example, when you edit your custom domain through the {% data variables.product.prodname_pages %} settings, the custom domain will write to `/docs/CNAME`. For more information about _CNAME_ files, see "[Managing a custom domain for your {% data variables.product.prodname_pages %} site](/articles/managing-a-custom-domain-for-your-github-pages-site)."{% endif %}

{% ifversion ghec %}
## Limitations for {% data variables.product.prodname_emus %}
If you're a {% data variables.product.prodname_managed_user %}, your use of {% data variables.product.prodname_pages %} is limited.

  - {% data variables.product.prodname_pages %} sites can only be published from repositories owned by organizations.
  - {% data variables.product.prodname_pages %} sites are only visible to other members of the enterprise.

For more information about {% data variables.product.prodname_emus %}, see "[About {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)."
{% endif %}

## Static site generators

{% data variables.product.prodname_pages %} publishes any static files that you push to your repository. You can create your own static files or use a static site generator to build your site for you. You can also customize your own build process locally or on another server. We recommend Jekyll, a static site generator with built-in support for {% data variables.product.prodname_pages %} and a simplified build process. For more information, see "[About {% data variables.product.prodname_pages %} and Jekyll](/articles/about-github-pages-and-jekyll)."

{% data variables.product.prodname_pages %} will use Jekyll to build your site by default. If you want to use a static site generator other than Jekyll, disable the Jekyll build process by creating an empty file called `.nojekyll` in the root of your publishing source, then follow your static site generator's instructions to build your site locally.

{% data variables.product.prodname_pages %} does not support server-side languages such as PHP, Ruby, or Python.

## Limits on use of {% data variables.product.prodname_pages %}

{% ifversion fpt or ghec %}
{% data variables.product.prodname_pages %} sites created after June 15, 2016, and using `github.io` domains are served over HTTPS. If you created your site before June 15, 2016, you can enable HTTPS support for traffic to your site. For more information, see "[Securing your {% data variables.product.prodname_pages %} with HTTPS](/articles/securing-your-github-pages-site-with-https)."

### Prohibited uses
{% endif %}
{% data variables.product.prodname_pages %} is not intended for or allowed to be used as a free web-hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS). {% data reusables.pages.no_sensitive_data_pages %}

In addition, your use of {% data variables.product.prodname_pages %} is subject to the [GitHub Terms of Service](/free-pro-team@latest/github/site-policy/github-terms-of-service/), including the restrictions on get-rich-quick schemes, sexually obscene content, and violent or threatening content or activity.

### Usage limits
{% data variables.product.prodname_pages %} sites are subject to the following usage limits:

  - {% data variables.product.prodname_pages %} source repositories have a recommended limit of 1 GB.{% ifversion fpt or ghec %} For more information, see "[What is my disk quota?](/articles/what-is-my-disk-quota/#file-and-repository-size-limitations)"{% endif %}
  - Published {% data variables.product.prodname_pages %} sites may be no larger than 1 GB.
{% ifversion fpt or ghec %}
  - {% data variables.product.prodname_pages %} sites have a *soft* bandwidth limit of 100 GB per month.
  - {% data variables.product.prodname_pages %} sites have a *soft* limit of 10 builds per hour.

If your site exceeds these usage quotas, we may not be able to serve your site, or you may receive a polite email from {% data variables.contact.contact_support %} suggesting strategies for reducing your site's impact on our servers, including putting a third-party content distribution network (CDN) in front of your site, making use of other {% data variables.product.prodname_dotcom %} features such as releases, or moving to a different hosting service that might better fit your needs.

{% endif %}

## MIME types on {% data variables.product.prodname_pages %}

A MIME type is a header that a server sends to a browser, providing information about the nature and format of the files the browser requested. {% data variables.product.prodname_pages %} supports more than 750 MIME types across thousands of file extensions. The list of supported MIME types is generated from the [mime-db project](https://github.com/jshttp/mime-db).

While you can't specify custom MIME types on a per-file or per-repository basis, you can add or modify MIME types for use on {% data variables.product.prodname_pages %}. For more information, see [the mime-db contributing guidelines](https://github.com/jshttp/mime-db#adding-custom-media-types).

{% ifversion fpt %}
## Data collection

When a {% data variables.product.prodname_pages %} site is visited, the visitor's IP address is logged and stored for security purposes, regardless of whether the visitor has signed into {% data variables.product.prodname_dotcom %} or not. For more information about {% data variables.product.prodname_dotcom %}'s security practices, see <a href="/articles/github-privacy-statement/" class="dotcom-only">{% data variables.product.prodname_dotcom %} Privacy Statement</a>.
{% endif %}

## Further reading

- [{% data variables.product.prodname_pages %}](https://github.com/skills/github-pages) on {% data variables.product.prodname_learning %}
- "[{% data variables.product.prodname_pages %}](/rest/reference/repos#pages)"
