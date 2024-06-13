---
title: About contributing to GitHub Docs
shortTitle: About contributing
intro: 'You can contribute to GitHub Docs content in several ways.'
versions:
  feature: 'contributing'
---

{% data variables.product.prodname_dotcom %} documentation is open source. Anyone can contribute to the docs in the public `docs` repository: https://github.com/github/docs. {% data variables.product.prodname_dotcom %} employees work on the documentation in a copy of this repository called `docs-internal`. The two repositories are automatically synced to keep them both up to date with changes merged into the `main` branch of either repository. For simplicity, we'll refer to "the documentation repository" in the articles about contributing to {% data variables.product.prodname_docs %}.

The documentation repository is the place to discuss and collaborate on the documentation that is published here on [docs.github.com](/).<!-- markdownlint-disable-line search-replace -->

## Issues

[Issues](/github/managing-your-work-on-github/about-issues) are used to track tasks that contributors can help with. If an issue has a `triage` label, we haven't reviewed it yet, and you shouldn't begin work on it.

If you've found something in the documentation content, or something about the docs.github.com website, that should be updated, search the open issues to see if someone else has reported the same thing. If it's something new, open an issue using a [template](https://github.com/github/docs/issues/new/choose). We'll use the issue to have a conversation about the problem you'd like to be fixed.<!-- markdownlint-disable-line search-replace -->

{% note %}

**Note**: {% data variables.product.prodname_dotcom %} employees should open issues in the private `docs-content` repository.

{% endnote %}

## Pull requests

A [pull request](/github/collaborating-with-issues-and-pull-requests/about-pull-requests) is a way to suggest changes in our repository. When we merge those changes, they're deployed to the live site within 24 hours.

We cannot accept contributions to the [REST API reference documentation](/rest/reference). If you spot an inaccuracy in the REST API reference documentation, open an issue in the [`rest-api-description`](https://github.com/github/rest-api-description/issues/new?template=schema-inaccuracy.md) repository.

We only document {% data variables.product.prodname_dotcom %} products, features, tools, and extensions. We may mention or link to third-party tools to demonstrate how a feature works, but we do not accept pull requests to document third-party tools or integrations unless they were codeveloped with {% data variables.product.company_short %}.

### Reviewing your own pull requests

You should always review your own pull request first, before marking it as ready for review by others.

For content changes, make sure that you:

* Confirm that the changes meet the user experience and goals outlined in the content design plan (if there is one).
* Review the content for technical accuracy.
* Check your changes for grammar, spelling, and adherence to the [AUTOTITLE](/contributing/style-guide-and-content-model/style-guide).
* Make sure the text in your pull request will be easy to translate. For more information, see "[AUTOTITLE](/contributing/writing-for-github-docs/writing-content-to-be-translated)."
* Check new or updated Liquid statements to confirm that versioning is correct. For more information, see "[AUTOTITLE](/contributing/syntax-and-versioning-for-github-docs/versioning-documentation)."
* Check the preview of any pages you have changed. A preview is automatically generated after you submit a pull request and links are added to the pull request. The preview sometimes takes several minutes before it is ready to view. Confirm that everything is rendering as expected. Checking the preview will help you identify problems such as typos, content that doesn't follow the style guide, or content that isn't rendering due to versioning problems. Make sure to check the rendered output for lists and tables, which can sometimes have problems that are difficult to identify in the Markdown.
* If there are any failing checks in your pull request, troubleshoot them until they're all passing.

## Support

We are a small team working hard to keep up with the documentation demands of a continuously changing product. Unfortunately, we just can't help with support questions in this repository. If you are experiencing a problem with {% data variables.product.prodname_dotcom %}, unrelated to our documentation, please [contact {% data variables.product.prodname_dotcom %} Support directly](https://support.github.com/contact). Any issues or pull requests opened in the documentation repository requesting support will be given information about how to contact {% data variables.product.prodname_dotcom %} Support, then closed and locked.

If you're having trouble with your {% data variables.product.prodname_dotcom %} account, contact [Support](https://support.github.com/contact?tags=docs-contributing-guide).

## Translations

This website is internationalized and available in multiple languages. The source content in this repository is written in English. We automate translations through an internal process, working with professional translators to localize the English content.

If you spot a translation error, please raise an issue with the details.

We do not currently accept pull requests for translated content.

## Site policy

{% data variables.product.prodname_dotcom %}'s site policies are also published on docs.github.com.<!-- markdownlint-disable-line search-replace -->

If you find a typo in the site policy section, you can open a pull request to fix it. For anything else, see "[Contributing](https://github.com/github/site-policy/blob/main/CONTRIBUTING.md)" in the `site-policy` repository.
