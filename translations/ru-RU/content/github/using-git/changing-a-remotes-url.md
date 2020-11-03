---
title: Changing a remote's URL
redirect_from:
  - /articles/changing-a-remote-s-url
  - /articles/changing-a-remotes-url
intro: The `git remote set-url` command changes an existing remote repository URL.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Tip:** For information on the difference between HTTPS and SSH URLs, see "[Which remote URL should I use?](/articles/which-remote-url-should-i-use)"

{% endtip %}

The `git remote set-url` command takes two arguments:

* An existing remote name. For example, `origin` or `upstream` are two common choices.
* A new URL for the remote. Например:
  * If you're updating to use HTTPS, your URL might look like:
```shell
https://{% data variables.command_line.backticks %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
```
  * If you're updating to use SSH, your URL might look like:
```shell
git@{% data variables.command_line.codeblock %}:<em>USERNAME</em>/<em>REPOSITORY</em>.git
```

### Switching remote URLs from SSH to HTTPS

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Change the current working directory to your local project.
3. List your existing remotes in order to get the name of the remote you want to change.
  ```shell
  $ git remote -v
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (push)
  ```
4. Change your remote's URL from SSH to HTTPS with the `git remote set-url` command.
  ```shell
  $ git remote set-url origin https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
  ```
5. Verify that the remote URL has changed.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (push)
  ```

The next time you `git fetch`, `git pull`, or `git push` to the remote repository, you'll be asked for your GitHub username and password. {% data reusables.user_settings.password-authentication-deprecation %}

- If you have [two-factor authentication](/articles/securing-your-account-with-two-factor-authentication-2fa) enabled, you must [create a personal access token](/github/authenticating-to-github/creating-a-personal-access-token) to use instead of your GitHub password.
- You can [use a credential helper](/github/using-git/caching-your-github-credentials-in-git) so Git will remember your GitHub username and password every time it talks to GitHub.

### Switching remote URLs from HTTPS to SSH

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Change the current working directory to your local project.
3. List your existing remotes in order to get the name of the remote you want to change.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (push)
  ```
4. Change your remote's URL from HTTPS to SSH with the `git remote set-url` command.
  ```shell
  $ git remote set-url origin git@{% data variables.command_line.codeblock %}:<em>USERNAME</em>/<em>REPOSITORY</em>.git
  ```
5. Verify that the remote URL has changed.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (push)
  ```

### Устранение проблем

You may encounter these errors when trying to change a remote.

#### No such remote '[name]'

This error means that the remote you tried to change doesn't exist:

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

Check that you've correctly typed the remote name.

### Дополнительная литература

- ["Working with Remotes" from the _Pro Git_ book](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
