---
title: About webhooks
redirect_from:
  - /post-receive-hooks/
  - /articles/post-receive-hooks/
  - /articles/creating-webhooks/
  - /articles/about-webhooks
intro: Webhooks provide a way for notifications to be delivered to an external web server whenever certain actions occur on a repository or organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
---

{% tip %}

**Tip:** {% data reusables.organizations.owners-and-admins-can %} manage webhooks for an organization. {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

Webhooks can be triggered whenever a variety of actions are performed on a repository or an organization. For example, you can configure a webhook to execute whenever:

* A repository is pushed to
* A pull request is opened
* A {% data variables.product.prodname_pages %} site is built
* A new member is added to a team

Using the {% data variables.product.product_name %} API, you can make these webhooks update an external issue tracker, trigger CI builds, update a backup mirror, or even deploy to your production server.

To set up a new webhook, you'll need access to an external server and familiarity with the technical procedures involved. For help on building a webhook, including a full list of actions you can associate with, see "[Webhooks](/webhooks)."
