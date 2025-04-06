---
title: Ignoring files
redirect_from:
  - /git-ignore
  - /ignore-files
  - /articles/ignoring-files
  - /github/using-git/ignoring-files
  - /github/getting-started-with-github/ignoring-files
  - /github/getting-started-with-github/getting-started-with-git/ignoring-files
intro: 'You can configure Git to ignore files you don''t want to check in to {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---
## Configuring ignored files for a single repository

You can create a `.gitignore` file in your repository's root directory to tell Git which files and directories to ignore when you make a commit.
To share the ignore rules with other users who clone the repository, commit the `.gitignore` file in to your repository.

GitHub maintains an official list of recommended `.gitignore` files for many popular operating systems, environments, and languages in the "github/gitignore" public repository. You can also use gitignore.io to create a `.gitignore` file for your operating system, programming language, or IDE. For more information, see "[github/gitignore](https://github.com/github/gitignore)" and the "[gitignore.io](https://www.gitignore.io/)" site.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Navigate to the location of your Git repository.
1. Create a `.gitignore` file for your repository.

   ```shell
   touch .gitignore
   ```

   If the command succeeds, there will be no output.

For an example `.gitignore` file, see "[Some common .gitignore configurations](https://gist.github.com/octocat/9257657)" in the Octocat repository.

If you want to ignore a file that is already checked in, you must untrack the file before you add a rule to ignore it. From your terminal, untrack the file.

```shell
git rm --cached FILENAME
```

## Configuring ignored files for all repositories on your computer

You can tell Git to always ignore certain files or directories when you make a commit in any Git repository on your computer. For example, you could use this feature to ignore any temporary backup files that your text editor creates.

To always ignore a certain file or directory, add it to a file named `ignore` that's located inside the directory `~/.config/git`. By default, Git will ignore any files and directories that are listed in the global configuration file `~/.config/git/ignore`. If the `git` directory and `ignore` file don't exist yet, you may need to create them.

## Excluding local files without creating a _.gitignore_ file

If you don't want to create a `.gitignore` file to share with others, you can create rules that are not committed with the repository. You can use this technique for locally-generated files that you don't expect other users to generate, such as files created by your editor.

Use your favorite text editor to open the file called `.git/info/exclude` within the root of your Git repository. Any rule you add here will not be checked in, and will only ignore files for your local repository.

{% data reusables.command_line.open_the_multi_os_terminal %}
1. Navigate to the location of your Git repository.
1. Using your favorite text editor, open the file `.git/info/exclude`.

## Further Reading

* [Ignoring files](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring) in the Git documentation
* [.gitignore](https://git-scm.com/docs/gitignore) in the Git documentation
* [A collection of useful _.gitignore_ templates](https://github.com/github/gitignore) in the github/gitignore repository
* [gitignore.io](https://www.gitignore.io/) site
