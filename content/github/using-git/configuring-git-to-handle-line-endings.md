---
title: Configuring Git to handle line endings
intro: 'To avoid problems in your diffs, you can configure Git to properly handle line endings.'
redirect_from:
  - /dealing-with-lineendings/
  - /line-endings/
  - /articles/dealing-with-line-endings/
  - /articles/configuring-git-to-handle-line-endings
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Every time you press <kbd>return</kbd> on your keyboard you insert an invisible character called a line ending. Different operating systems handle line endings differently.

When you're collaborating on projects with Git and {% data variables.product.product_name %}, Git might produce unexpected results if, for example, you're working on a Windows machine, and your collaborator has made a change in OS X.

You can configure Git to handle line endings automatically so you can collaborate effectively with people who use different operating systems.

### Global settings for line endings

The `git config core.autocrlf` command is used to change how Git handles line endings. It takes a single argument.

{% mac %}

On OS X, you simply pass `input` to the configuration. For example:

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for OS X
```

{% endmac %}

{% windows %}

On Windows, you simply pass `true` to the configuration. For example:

```shell
$ git config --global core.autocrlf true
# Configure Git to ensure line endings in files you checkout are correct for Windows.
# For compatibility, line endings are converted to Unix style when you commit files.
```

{% endwindows %}

{% linux %}

On Linux, you simply pass `input` to the configuration. For example:

```shell
$ git config --global core.autocrlf input
# Configure Git to ensure line endings in files you checkout are correct for Linux
```

{% endlinux %}

### Per-repository settings

Optionally, you can configure a *.gitattributes* file to manage how Git reads line endings in a specific repository. When you commit this file to a repository, it overrides the `core.autocrlf` setting for all repository contributors. This ensures consistent behavior for all users, regardless of their Git settings and environment.

The *.gitattributes* file must be created in the root of the repository and committed like any other file.

A *.gitattributes* file looks like a table with two columns:

* On the left is the file name for Git to match.
* On the right is the line ending configuration that Git should use for those files.

#### Example

Here's an example *.gitattributes* file. You can use it as a template for your repositories:

```
# Set the default behavior, in case people don't have core.autocrlf set.
* text=auto

# Explicitly declare text files you want to always be normalized and converted
# to native line endings on checkout.
*.c text
*.h text

# Declare files that will always have CRLF line endings on checkout.
*.sln text eol=crlf

# Denote all files that are truly binary and should not be modified.
*.png binary
*.jpg binary
```

You'll notice that files are matched—`*.c`, `*.sln`, `*.png`—, separated by a space, then given a setting—`text`, `text eol=crlf`, `binary`. We'll go over some possible settings below.

- `text=auto` Git will handle the files in whatever way it thinks is best. This is a good default option.

- `text eol=crlf` Git will always convert line endings to `CRLF` on checkout. You should use this for files that must keep `CRLF` endings, even on OSX or Linux.

- `text eol=lf` Git will always convert line endings to `LF` on checkout. You should use this for files that must keep LF endings, even on Windows.

- `binary` Git will understand that the files specified are not text, and it should not try to change them. The `binary` setting is also an alias for `-text -diff`.

### Refreshing a repository after changing line endings

When you set the `core.autocrlf` option or commit a *.gitattributes* file, you may find that Git reports changes to files that you have not modified. Git has changed line endings to match your new configuration.

To ensure that all the line endings in your repository match your new configuration, backup your files with Git, delete all files in your repository (except the `.git` directory), then restore the files all at once.

1. Save your current files in Git, so that none of your work is lost.
  ```shell
  $ git add . -u
  $ git commit -m "Saving files before refreshing line endings"
  ```
2. Add all your changed files back and normalize the line endings.
  ```shell
  $ git add --renormalize .
  ```
3. Show the rewritten, normalized files.
  ```shell
  $ git status
  ```
4. Commit the changes to your repository.
  ```shell
  $ git commit -m "Normalize all the line endings"
  ```

### Further reading

- [Customizing Git - Git Attributes](https://git-scm.com/book/en/Customizing-Git-Git-Attributes) in the Pro Git book
- [git-config](https://git-scm.com/docs/git-config) in the man pages for Git
- [Getting Started - First-Time Git Setup](https://git-scm.com/book/en/Getting-Started-First-Time-Git-Setup) in the Pro Git book
- [Mind the End of Your Line](http://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/) by [Tim Clem](https://github.com/tclem)
