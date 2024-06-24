---
title: Troubleshooting content type
intro: 'Troubleshooting content includes built-in errors we expect people to encounter, common problems reported to support, and situations people might encounter while completing tasks.'
versions:
  feature: 'contributing'
---

Use troubleshooting sections in guides or procedural articles to keep solutions close to procedures. Work with support and product managers to surface common errors and include them in the documentation.

## Known issues

Known issues are a subset of troubleshooting content specifically designed to respond to bugs, UX/UI issues, and other product quirks that generate a high volume of support tickets. Where troubleshooting content can describe errors that people _might_ encounter, known issues explain problems that people _will_ encounter.

Like all troubleshooting content, known issues can be a section in an article or a standalone article. If a known issue applies to a specific article, document it in that article. If a known issue applies to a specific set of articles or conceptual grouping of features, or if a product or feature has multiple known issues that should be grouped together, create a dedicated "Known issues with NAME" article.

Known issue content for a product or feature does not need to be comprehensive. Unlike other troubleshooting content, some known issues may not have workarounds. The goal of documenting an issue without a workaround is to help people confirm that the issue exists and save them time searching for a solution that doesn't exist yet after {% data variables.product.prodname_dotcom %} has already determined there isn't a workaround.

Product and feature owners (PMs and EMs) should help plan and review known issue content.

Use known issues to explain the following situations.

* Product behavior that regularly contradicts people's expectations, but is not yet prioritized for remediation.
* Behavior that regularly prevents the use of the product or feature for a common purpose.
* Rare or severe bugs that {% data variables.product.prodname_dotcom %} has not yet prioritized fixing, and that are not explained in the product or by existing content on {% data variables.product.prodname_docs %}.

## How to write troubleshooting content

* Use any {% data variables.product.prodname_docs %} content type to create troubleshooting sections.
* Whenever possible, keep troubleshooting content contained within procedural content or guides.
* You can create a troubleshooting article when it makes sense to keep it separate, such as when there’s a large amount of troubleshooting content on a particular topic.
* You can create a troubleshooting map topic if a product or feature has many troubleshooting articles, for example "[AUTOTITLE](/authentication/troubleshooting-ssh)."

## Title guidelines for troubleshooting content

* Troubleshooting FEATURE
* Error: ERROR NAME
* Known issues for PRODUCT

## Examples of troubleshooting content

* "[AUTOTITLE](/authentication/troubleshooting-ssh)"
* "[AUTOTITLE](/enterprise-server@latest/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#troubleshooting-connectivity-through-a-load-balancer)"
* "[Known issues](/enterprise-server@3.7/admin/release-notes#3.7.8-known-issues)" in the {% data variables.product.prodname_ghe_server %} release notes
* "[AUTOTITLE](/authentication/troubleshooting-ssh/error-were-doing-an-ssh-key-audit)"
