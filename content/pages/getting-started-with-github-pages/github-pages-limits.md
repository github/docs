---
title: GitHub Pages limits
intro: 'Learn about the limits and limitations of GitHub Pages.'
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pages
---

## Usage limits

{% data variables.product.prodname_pages %} is not intended for or allowed to be used as a free web-hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service (SaaS). {% data reusables.pages.no_sensitive_data_pages %}

In addition, your use of {% data variables.product.prodname_pages %} is subject to the [GitHub Terms of Service](/free-pro-team@latest/site-policy/github-terms/github-terms-of-service), including the restrictions on get-rich-quick schemes, sexually obscene content, and violent or threatening content or activity.

{% data variables.product.prodname_pages %} sites are subject to the following usage limits:

* You can only create one user or organization site for each account on {% data variables.product.github %}.
* {% data variables.product.prodname_pages %} source repositories have a recommended limit of 1 GB. {% ifversion fpt or ghec %}For more information, see [AUTOTITLE](/repositories/working-with-files/managing-large-files/about-large-files-on-github#file-and-repository-size-limitations){% endif %}.
* Published {% data variables.product.prodname_pages %} sites may be no larger than 1 GB.
* {% data variables.product.prodname_pages %} deployments will timeout if they take longer than 10 minutes.
{% ifversion fpt or ghec %}
* {% data variables.product.prodname_pages %} sites have a _soft_ bandwidth limit of 100 GB per month.
* {% data variables.product.prodname_pages %} sites have a _soft_ limit of 10 builds per hour. This limit does not apply if you build and publish your site with a custom {% data variables.product.prodname_actions %} workflow.
* In order to provide consistent quality of service for all {% data variables.product.prodname_pages %} sites, rate limits may apply. These rate limits are not intended to interfere with legitimate uses of {% data variables.product.prodname_pages %}. If your request triggers rate limiting, you will receive an appropriate response with an HTTP status code of `429`, along with an informative HTML body.

If your site exceeds these usage quotas, we may not be able to serve your site, or you may receive a polite email from {% data variables.contact.github_support %} suggesting strategies for reducing your site's impact on our servers, including putting a third-party content distribution network (CDN) in front of your site, making use of other {% data variables.product.prodname_dotcom %} features such as releases, or moving to a different hosting service that might better fit your needs.

{% endif %}

{% ifversion ghec %}

## Limits for {% data variables.product.prodname_emus %}

If you're a {% data variables.enterprise.prodname_managed_user %}, your use of {% data variables.product.prodname_pages %} is limited.

* {% data variables.product.prodname_pages %} sites can only be published from repositories owned by organizations.
* {% data variables.product.prodname_pages %} sites are always privately published, and you cannot change this visibility. For more information, see [AUTOTITLE](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site).
* You cannot create an organization site (a site published from a repository named `<organization>.github.io`)

For more information about {% data variables.product.prodname_emus %}, see [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users).

{% endif %}

## Educational exercises

Using {% data variables.product.prodname_pages %} to create a copy of an existing website as a learning exercise is not prohibited. However, in addition to complying with the [GitHub Terms of Service](/free-pro-team@latest/site-policy/github-terms/github-terms-of-service), you must write the code yourself, the site must not collect any user data, and you must include a prominent disclaimer on the site indicating that the project is not associated with the original and was only created for educational purposes.
