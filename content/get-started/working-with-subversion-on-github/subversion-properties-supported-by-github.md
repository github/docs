---
title: Subversion properties supported by GitHub
intro: 'There are several Subversion workflows and properties that are similar to existing functionality on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/subversion-properties-supported-by-github
  - /github/importing-your-projects-to-github/subversion-properties-supported-by-github
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/subversion-properties-supported-by-github
  - /get-started/importing-your-projects-to-github/working-with-subversion-on-github/subversion-properties-supported-by-github
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Properties supported by GitHub
---
{% data reusables.subversion.sunset %}

## Executable files (`svn:executable`)

We convert `svn:executable` properties by updating the file mode directly before adding it to the Git repository.

## MIME types (`svn:mime-type`)

{% data variables.product.product_name %} internally tracks the mime-type properties of files and the commits that added them.

## Ignoring unversioned items (`svn:ignore`)

If you've set files and directories to be ignored in Subversion, {% data variables.product.product_name %} will track them internally. Files ignored by subversion clients are completely distinct from entries in a _.gitignore_ file.

## Currently unsupported properties

{% data variables.product.product_name %} doesn't currently support `svn:externals`, `svn:global-ignores`, or any properties not listed above, including custom properties.
