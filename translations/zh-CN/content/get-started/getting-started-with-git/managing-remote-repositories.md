---
title: Managing remote repositories
intro: 'Learn to work with your local repositories on your computer and remote repositories hosted on {% data variables.product.product_name %}.'
redirect_from:
  - /categories/18/articles
  - /remotes
  - /categories/managing-remotes
  - /articles/managing-remote-repositories
  - /articles/adding-a-remote
  - /github/using-git/adding-a-remote
  - /articles/changing-a-remote-s-url
  - /articles/changing-a-remotes-url
  - /github/using-git/changing-a-remotes-url
  - /articles/renaming-a-remote
  - /github/using-git/renaming-a-remote
  - /articles/removing-a-remote
  - /github/using-git/removing-a-remote
  - /github/using-git/managing-remote-repositories
  - /github/getting-started-with-github/managing-remote-repositories
  - /github/getting-started-with-github/getting-started-with-git/managing-remote-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Manage remote repositories
---
## Adding a remote repository

To add a new remote, use the `git remote add` command on the terminal, in the directory your repository is stored at.

The `git remote add` command takes two arguments:
* A remote name, for example, `origin`
* A remote URL, for example, `https://{% data variables.command_line.backticks %}/user/repo.git`

For example:

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/USER/REPO>.git
# Set a new remote

$ git remote -v
# Verify new remote
> origin  https://{% data variables.command_line.codeblock %}/USER/REPO.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/USER/REPO.git (push)
```

For more information on which URL to use, see "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."

### Troubleshooting: Remote origin already exists

This error means you've tried to add a remote with a name that already exists in your local repository.

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
> fatal: remote origin already exists.
```

To fix this, you can:
* Use a different name for the new remote.
* Rename the existing remote repository before you add the new remote. For more information, see "[Renaming a remote repository](#renaming-a-remote-repository)" below.
* Delete the existing remote repository before you add the new remote. For more information, see "[Removing a remote repository](#removing-a-remote-repository)" below.

## Changing a remote repository's URL

The `git remote set-url` command changes an existing remote repository URL.

{% tip %}

**Tip:** For information on the difference between HTTPS and SSH URLs, see "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."

{% endtip %}

The `git remote set-url` command takes two arguments:

* An existing remote name. For example, `origin` or `upstream` are two common choices.
* A new URL for the remote. For example:
  * If you're updating to use HTTPS, your URL might look like:
```shell
https://{% data variables.command_line.backticks %}/USERNAME/REPOSITORY.git
```
  * If you're updating to use SSH, your URL might look like:
```shell
git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git
```

### Switching remote URLs from SSH to HTTPS

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Change the current working directory to your local project.
3. List your existing remotes in order to get the name of the remote you want to change.
  ```shell
  $ git remote -v
  > origin  git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git (push)
  ```
4. Change your remote's URL from SSH to HTTPS with the `git remote set-url` command.
  ```shell
  $ git remote set-url origin https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git
  ```
5. Verify that the remote URL has changed.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (push)
  ```

The next time you `git fetch`, `git pull`, or `git push` to the remote repository, you'll be asked for your GitHub username and password. {% data reusables.user-settings.password-authentication-deprecation %}

You can [use a credential helper](/github/getting-started-with-github/caching-your-github-credentials-in-git) so Git will remember your GitHub username and {% data variables.product.pat_generic %} every time it talks to GitHub.

### Switching remote URLs from HTTPS to SSH

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Change the current working directory to your local project.
3. List your existing remotes in order to get the name of the remote you want to change.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (push)
  ```
4. Change your remote's URL from HTTPS to SSH with the `git remote set-url` command.
  ```shell
  $ git remote set-url origin git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git
  ```
5. Verify that the remote URL has changed.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  git@{% data variables.command_line.codeblock %}: USERNAME/REPOSITORY.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}: USERNAME/REPOSITORY.git (push)
  ```

### Troubleshooting: No such remote '[name]'

This error means that the remote you tried to change doesn't exist:

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

Check that you've correctly typed the remote name.

## Renaming a remote repository

Use the `git remote rename` command to rename an existing remote.

The `git remote rename` command takes two arguments:
* An existing remote name, for example, `origin`
* A new name for the remote, for example, `destination`

## Example

These examples assume you're [cloning using HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), which is recommended.

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)

$ git remote rename origin destination
# Change remote name from 'origin' to 'destination'

$ git remote -v
# Verify remote's new name
> destination  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

### Troubleshooting: Could not rename config section 'remote.[old name]' to 'remote.[new name]'

This error means that the old remote name you typed doesn't exist.

You can check which remotes currently exist with the `git remote -v` command:

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

### Troubleshooting: Remote [new name] already exists

This error means that the remote name you want to use already exists. To solve this, either use a different remote name, or rename the original remote.

## Removing a remote repository 

Use the `git remote rm` command to remove a remote URL from your repository.

The `git remote rm` command takes one argument:
* A remote name, for example, `destination`

Removing the remote URL from your repository only unlinks the local and remote repositories. It does not delete the remote repository.

## Example

These examples assume you're [cloning using HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), which is recommended.

```shell
$ git remote -v
# View current remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
> destination  https://{% data variables.command_line.codeblock %}/FORKER/REPOSITORY.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/FORKER/REPOSITORY.git (push)

$ git remote rm destination
# Remove remote
$ git remote -v
# Verify it's gone
> origin  https://{% data variables.command_line.codeblock %}/ OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/ OWNER/REPOSITORY.git (push)
```

{% warning %}

**Note**: `git remote rm` does not delete the remote repository from the server. It simply
removes the remote and its references from your local repository.

{% endwarning %}

### Troubleshooting: Could not remove config section 'remote.[name]'

This error means that the remote you tried to delete doesn't exist:

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

Check that you've correctly typed the remote name.

## Further reading

- "[Working with Remotes" from the _Pro Git_ book](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
