---
title: Troubleshooting Jekyll build errors for GitHub Pages sites
intro: 'You can use Jekyll build error messages to troubleshoot problems with your {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /articles/page-build-failed-missing-docs-folder
  - /articles/page-build-failed-invalid-submodule
  - /articles/page-build-failed-missing-submodule
  - /articles/page-build-failed-markdown-errors
  - /articles/page-build-failed-config-file-error
  - /articles/page-build-failed-unknown-tag-error
  - /articles/page-build-failed-tag-not-properly-terminated
  - /articles/page-build-failed-tag-not-properly-closed
  - /articles/page-build-failed-file-does-not-exist-in-includes-directory
  - /articles/page-build-failed-file-is-a-symlink
  - /articles/page-build-failed-symlink-does-not-exist-within-your-sites-repository
  - /articles/page-build-failed-file-is-not-properly-utf-8-encoded
  - /articles/page-build-failed-invalid-post-date
  - /articles/page-build-failed-invalid-sass-or-scss
  - /articles/page-build-failed-invalid-highlighter-language
  - /articles/page-build-failed-relative-permalinks-configured
  - /articles/page-build-failed-syntax-error-in-for-loop
  - /articles/page-build-failed-invalid-yaml-in-data-file
  - /articles/page-build-failed-date-is-not-a-valid-datetime
  - /articles/troubleshooting-github-pages-builds
  - /articles/troubleshooting-jekyll-builds
  - /articles/troubleshooting-jekyll-build-errors-for-github-pages-sites
  - /github/working-with-github-pages/troubleshooting-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Troubleshoot Jekyll errors
---

## Troubleshooting build errors

If Jekyll encounters an error building your {% data variables.product.prodname_pages %} site locally or on {% data variables.product.product_name %}, you can use error messages to troubleshoot. For more information about error messages and how to view them, see "[About Jekyll build errors for {% data variables.product.prodname_pages %} sites](/articles/about-jekyll-build-errors-for-github-pages-sites)."

If you received a generic error message, check for common issues.
- You're using unsupported plugins. For more information, see "[About {% data variables.product.prodname_pages %} and Jekyll](/articles/about-github-pages-and-jekyll#plugins)."{% ifversion fpt or ghec %}
- Your repository has exceeded our repository size limits. For more information, see "[What is my disk quota?](/articles/what-is-my-disk-quota)"{% endif %}
- You changed the `source` setting in your *_config.yml* file. {% data variables.product.prodname_pages %} overrides this setting during the build process.
- A filename in your publishing source contains a colon (`:`) which is not supported.

If you received a specific error message, review the troubleshooting information for the error message below.

After you've fixed any errors, push the changes to your site's publishing source to trigger another build on {% data variables.product.product_name %}.

## Config file error

This error means that your site failed to build because the *_config.yml* file contains syntax errors.

To troubleshoot, make sure that your *_config.yml* file follows these rules:

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

## Date is not a valid datetime

This error means that one of the pages on your site includes an invalid datetime.

To troubleshoot, search the file in the error message and the file's layouts for calls to any date-related Liquid filters. Make sure that any variables passed into date-related Liquid filters have values in all cases and never pass `nil` or `""`. For more information, see "[Liquid filters](https://help.shopify.com/en/themes/liquid/filters)" in the Liquid documentation.

## File does not exist in includes directory

This error means that your code references a file that doesn't exist in your *_includes* directory.

{% data reusables.pages.search-for-includes %} If any of the files you've referenced aren't in the *_includes* directory, copy or move the files into the *_includes* directory.

## File is a symlink

This error means that your code references a symlinked file that does not exist in the publishing source for your site.

{% data reusables.pages.search-for-includes %} If any of the files you've referenced are symlinked, copy or move the files into the *_includes* directory.

## File is not properly UTF-8 encoded

This error means that you used non-Latin characters, like `日本語`, without telling the computer to expect these symbols.

To troubleshoot, force UTF-8 encoding by adding the following line to your *_config.yml* file:
```yaml
encoding: UTF-8
```

## Invalid highlighter language

This error means that you specified any syntax highlighter other than [Rouge](https://github.com/jneen/rouge) or [Pygments](http://pygments.org/) in your configuration file.

To troubleshoot, update your *_config.yml* file to specify [Rouge](https://github.com/jneen/rouge) or [Pygments](http://pygments.org/). For more information, see "[About {% data variables.product.product_name %} and Jekyll](/articles/about-github-pages-and-jekyll#syntax-highlighting)."

## Invalid post date

This error means that a post on your site contains an invalid date in the filename or YAML front matter.

To troubleshoot, make sure all dates are formatted as YYYY-MM-DD HH:MM:SS for UTC and are actual calendar dates. To specify a time zone with an offset from UTC, use the format YYYY-MM-DD HH:MM:SS +/-TTTT, like `2014-04-18 11:30:00 +0800`.

If you specify a date format in your *_config.yml* file, make sure the format is correct.

## Invalid Sass or SCSS

This error means your repository contains a Sass or SCSS file with invalid content.

To troubleshoot, review the line number included in the error message for invalid Sass or SCSS. To help prevent future errors, install a Sass or SCSS linter for your favorite text editor.

## Invalid submodule

This error means that your repository includes a submodule that hasn't been properly initialized.

{% data reusables.pages.remove-submodule %}

If do you want to use the submodule, make sure you use `https://` when referencing the submodule (not `http://`) and that the submodule is in a public repository.

## Invalid YAML in data file

This error means that one of more files in the *_data* folder contains invalid YAML.

To troubleshoot, make sure the YAML files in your *_data* folder follow these rules:

{% data reusables.pages.yaml-rules %}

{% data reusables.pages.yaml-linter %}

For more information about Jekyll data files, see "[Data Files](https://jekyllrb.com/docs/datafiles/)" in the Jekyll documentation.

## Markdown errors

This error means that your repository contains Markdown errors.

To troubleshoot, make sure you are using a supported Markdown processor. For more information, see "[Setting a Markdown processor for your {% data variables.product.prodname_pages %} site using Jekyll](/articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll)."

Then, make sure the file in the error message uses valid Markdown syntax. For more information, see "[Markdown: Syntax](https://daringfireball.net/projects/markdown/syntax)" on Daring Fireball.

## Missing docs folder

This error means that you have chosen the `docs` folder on a branch as your publishing source, but there is no `docs` folder in the root of your repository on that branch.

To troubleshoot, if your `docs` folder was accidentally moved, try moving the `docs` folder back to the root of your repository on the branch you chose for your publishing source. If the `docs` folder was accidentally deleted, you can either:
- Use Git to revert or undo the deletion. For more information, see "[git-revert](https://git-scm.com/docs/git-revert.html)" in the Git documentation.
- Create a new `docs` folder in the root of your repository on the branch you chose for your publishing source and add your site's source files to the folder. For more information, see "[Creating new files](/articles/creating-new-files)."
- Change your publishing source. For more information, see "[Configuring a publishing source for {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-github-pages)."

## Missing submodule

This error means that your repository includes a submodule that doesn't exist or hasn't been properly initialized.

{% data reusables.pages.remove-submodule %}

If you do want to use a submodule, initialize the submodule. For more information, see "[Git Tools - Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)" in the _Pro Git_ book.

## Relative permalinks configured

This errors means that you have relative permalinks, which are not supported by {% data variables.product.prodname_pages %}, in your *_config.yml* file.

Permalinks are permanent URLs that reference a particular page on your site. Absolute permalinks begin with the root of the site, while relative permalinks begin with the folder containing the referenced page. {% data variables.product.prodname_pages %} and Jekyll no longer support relative permalinks. For more information about permalinks, see "[Permalinks](https://jekyllrb.com/docs/permalinks/)" in the Jekyll documentation.

To troubleshoot, remove the `relative_permalinks` line from your *_config.yml* file and reformat any relative permalinks in your site with absolute permalinks. For more information, see "[Editing files](/repositories/working-with-files/managing-files/editing-files)."

## Symlink does not exist within your site's repository

This error means that your site includes a symbolic link (symlink) that does not exist in the publishing source for your site. For more information about symlinks, see "[Symbolic link](https://en.wikipedia.org/wiki/Symbolic_link)" on Wikipedia.

To troubleshoot, determine if the file in the error message is used to build your site. If not, or if you don't want the file to be a symlink, delete the file. If the symlinked file is necessary to build your site, make sure the file or directory the symlink references is in the publishing source for your site. To include external assets, consider using {% ifversion fpt or ghec %}`git submodule` or {% endif %}a third-party package manager such as [Bower](https://bower.io/).{% ifversion fpt or ghec %} For more information, see "[Using submodules with {% data variables.product.prodname_pages %}](/articles/using-submodules-with-github-pages)."{% endif %}

## Syntax error in 'for' loop

This error means that your code includes invalid syntax in a Liquid `for` loop declaration.

To troubleshoot, make sure all `for` loops in the file in the error message have proper syntax. For more information about proper syntax for `for` loops, see "[Iteration tags](https://help.shopify.com/en/themes/liquid/tags/iteration-tags#for)" in the Liquid documentation.

## Tag not properly closed

This error message means that your code includes a logic tag that is not properly closed. For example, {% raw %}`{% capture example_variable %}` must be closed by `{% endcapture %}`{% endraw %}.

To troubleshoot, make sure all logic tags in the file in the error message are properly closed. For more information, see "[Liquid tags](https://help.shopify.com/en/themes/liquid/tags)" in the Liquid documentation.

## Tag not properly terminated

This error means that your code includes an output tag that is not properly terminated. For example, {% raw %}`{{ page.title }` instead of `{{ page.title }}`{% endraw %}.

To troubleshoot, make sure all output tags in the file in the error message are terminated with `}}`. For more information, see "[Liquid objects](https://help.shopify.com/en/themes/liquid/objects)" in the Liquid documentation.

## Unknown tag error

This error means that your code contains an unrecognized Liquid tag.

To troubleshoot, make sure all Liquid tags in the file in the error message match Jekyll's default variables and there are no typos in the tag names. For a list of default variables, see "[Variables](https://jekyllrb.com/docs/variables/)" in the Jekyll documentation.

Unsupported plugins are a common source of unrecognized tags. If you use an unsupported plugin in your site by generating your site locally and pushing your static files to {% data variables.product.product_name %}, make sure the plugin is not introducing tags that are not in Jekyll's default variables. For a list of supported plugins, see "[About {% data variables.product.prodname_pages %} and Jekyll](/articles/about-github-pages-and-jekyll#plugins)."
