---
title: Subversion properties supported by GitHub
intro: 'There are several Subversion workflows and properties that are similar to existing functionality on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/subversion-properties-supported-by-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Executable files (svn:executable)

We convert `svn:executable` properties by updating the file mode directly before adding it to the Git repository.

### MIME types (svn:mime-type)

{% data variables.product.product_name %} internally tracks the mime-type properties of files and the commits that added them.

### Ignoring unversioned items (svn:ignore)

If you've set files and directories to be ignored in Subversion, {% data variables.product.product_name %} will track them internally. Files ignored by subversion clients are completely distinct from entries in a *.gitignore* file.

### Currently unsupported properties

{% data variables.product.product_name %} doesn't currently support `svn:externals`, `svn:global-ignores`, or any properties not listed above, including custom properties.
