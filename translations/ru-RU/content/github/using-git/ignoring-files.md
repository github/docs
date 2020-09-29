---
title: Ignoring files
redirect_from:
  - /git-ignore/
  - /ignore-files/
  - /articles/ignoring-files
intro: 'You can configure Git to ignore files you don''t want to check in to {% data variables.product.product_name %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Configuring ignored files for a single repository

You can create a *.gitignore* file in your repository's root directory to tell Git which files and directories to ignore when you make a commit. To share the ignore rules with other users who clone the repository, commit the *.gitignore* file in to your repository.

GitHub maintains an official list of recommended *.gitignore* files for many popular operating systems, environments, and languages in the `github/gitignore` public repository. You can also use gitignore.io to create a *.gitignore* file for your operating system, programming language, or IDE. For more information, see "[github/gitignore](https://github.com/github/gitignore)" and the "[gitignore.io](https://www.gitignore.io/)" site.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navigate to the location of your Git repository.
3. Create a *.gitignore* file for your repository.
   ```shell
   $ touch .gitignore
  ```

For an example *.gitignore* file, see "[Some common .gitignore configurations](https://gist.github.com/octocat/9257657)" in the Octocat repository.

If you want to ignore a file that is already checked in, you must untrack the file before you add a rule to ignore it. From your terminal, untrack the file.

```shell
$ git rm --cached <em>FILENAME</em>
```

### Configuring ignored files for all repositories on your computer

You can also create a global *.gitignore* file to define a list of rules for ignoring files in every Git repository on your computer. For example, you might create the file at *~/.gitignore_global* and add some rules to it.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Configure Git to use the exclude file *~/.gitignore_global* for all Git repositories.
  ```shell
  $ git config --global core.excludesfile ~/.gitignore_global
  ```

### Excluding local files without creating a *.gitignore* file

If you don't want to create a *.gitignore* file to share with others, you can create rules that are not committed with the repository. You can use this technique for locally-generated files that you don't expect other users to generate, such as files created by your editor.

Use your favorite text editor to open the file called *.git/info/exclude* within the root of your Git repository. Any rule you add here will not be checked in, and will only ignore files for your local repository.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navigate to the location of your Git repository.
3. Using your favorite text editor, open the file *.git/info/exclude*.

### Дальнейшее изучение

* [Ignoring files](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring) in the Pro Git book
* [.gitignore](https://git-scm.com/docs/gitignore) in the man pages for Git
* [A collection of useful *.gitignore* templates](https://github.com/github/gitignore) in the github/gitignore repository
* [gitignore.io](https://www.gitignore.io/) site
