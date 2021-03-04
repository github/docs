---
title: About Jekyll build errors for GitHub Pages sites
intro: 'If Jekyll encounters an error building your {% data variables.product.prodname_pages %} site locally or on {% data variables.product.product_name %}, you''ll receive an error message with more information.'
redirect_from:
  - /articles/viewing-jekyll-build-error-messages/
  - /articles/generic-jekyll-build-failures/
  - /articles/about-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### About Jekyll build errors

Sometimes, {% data variables.product.prodname_pages %} will not attempt to build your site after you push changes to your site's publishing source.{% if currentVersion == "free-pro-team@latest" %}
- The person who pushed the changes hasn't verified their email address. For more information, see "[Verifying your email address](/articles/verifying-your-email-address)."{% endif %}
- You're pushing with a deploy key. If you want to automate pushes to your site's repository, you can set up a machine user instead. For more information, see "[Managing deploy keys](/developers/overview/managing-deploy-keys#machine-users)."
- You're using a CI service that isn't configured to build your publishing source. For example, Travis CI won't build the `gh-pages` branch unless you add the branch to a safe list. For more information, see "[Customizing the build](https://docs.travis-ci.com/user/customizing-the-build/#safelisting-or-blocklisting-branches)" on Travis CI, or your CI service's documentation.

{% note %}

**Note:** It can take up to 20 minutes for changes to your site to publish after you push the changes to {% data variables.product.product_name %}.

{% endnote %}

If Jekyll does attempt to build your site and encounters an error, you will receive a build error message. There are two main types of Jekyll build error messages.
- A "Page build warning" message means your build completed successfully, but you may need to make changes to prevent future problems.
- A "Page build failed" message means your build failed to complete. If Jekyll is able to detect a reason for the failure, you'll see a descriptive error message.

For more information about troubleshooting build errors, see "[Troubleshooting Jekyll build errors for {% data variables.product.prodname_pages %} sites](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)."

### Viewing Jekyll build error messages

We recommend testing your site locally, which allows you to see build error messages on the command line, and addressing any build failures before pushing changes to {% data variables.product.product_name %}. For more information, see "[Testing your {% data variables.product.prodname_pages %} site locally with Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll)."

When you create a pull request to update your publishing source on {% data variables.product.product_name %}, you can see build error messages on the **Checks** tab of the pull request. For more information, see "[About status checks](/articles/about-status-checks)."

When you push changes to your publishing source on {% data variables.product.product_name %}, {% data variables.product.prodname_pages %} will attempt to build your site. If the build fails, you'll receive an email at your primary email address. You'll also receive emails for build warnings. {% data reusables.pages.build-failure-email-server %}

You can see build failures (but not build warnings) for your site on {% data variables.product.product_name %} in the **Settings** tab of your site's repository.

You can configure a third-party service, such as [Travis CI](https://travis-ci.org/), to display error messages after each commit.

1. If you haven't already, add a file called _Gemfile_ in the root of your publishing source, with the following content:
  ```ruby
  source `https://rubygems.org`
  gem `github-pages`
  ```

2. Configure your site's repository for the testing service of your choice. For example, to use [Travis CI](https://travis-ci.org/), add a file named _.travis.yml_ in the root of your publishing source, with the following content:
  ```yaml
  language: ruby
  rvm:
    - 2.3
  script: "bundle exec jekyll build"
  ```
3. You may need to activate your repository with the third-party testing service. For more information, see your testing service's documentation.
