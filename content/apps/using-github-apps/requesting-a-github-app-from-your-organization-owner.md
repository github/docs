---
title: Requesting a GitHub App from your organization owner
intro: 'Organization members can request installation of a {% data variables.product.prodname_github_app %} for their organization.'
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Request for org
---

{% note %}

**Note**: Currently, you can only request a {% data variables.product.prodname_github_app %} from your organization owner when installing the {% data variables.product.prodname_github_app %} directly from the {% data variables.product.prodname_github_app %} owner, not when installing a {% data variables.product.prodname_github_app %} from {% data variables.product.prodname_marketplace %}.

If you find a {% data variables.product.prodname_github_app %} on {% data variables.product.prodname_marketplace %} that you want your organization owner to install, you must make the request from the {% data variables.product.prodname_github_app %}'s public installation page. The URL for a {% data variables.product.prodname_github_app %} public installation page is `https://github.com/apps/APP-NAME/installations/new`, where `APP-NAME` is the name of the {% data variables.product.prodname_github_app %}.

{% endnote %}

Organization members can send a request for their organization owner to install a {% data variables.product.prodname_github_app %} on the organization. To do so, follow the steps outlined in "[AUTOTITLE](/apps/using-github-apps/installing-a-github-app-from-a-third-party#installing-a-github-app)." If you don't have permission to install the {% data variables.product.prodname_github_app %} on the organization, {% data variables.product.company_short %} will send an email to the organization owner to notify them of the request. The organization owner can modify the repositories that you selected and choose whether to install the {% data variables.product.prodname_github_app %}.
