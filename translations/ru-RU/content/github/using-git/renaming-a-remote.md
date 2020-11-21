---
title: Renaming a remote
intro: Use the `git remote rename` command to rename an existing remote.
redirect_from:
  - /articles/renaming-a-remote
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

The `git remote rename` command takes two arguments:

* An existing remote name, for example, `origin`
* A new name for the remote, for example, `destination`

### Пример

These examples assume you're [cloning using HTTPS](/articles/which-remote-url-should-i-use/#cloning-with-https-urls), which is recommended.

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)

$ git remote rename origin destination
# Change remote name from 'origin' to 'destination'

$ git remote -v
# Verify remote's new name
> destination  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)
```

### Устранение проблем

You may encounter these errors when trying to rename a remote.

#### Could not rename config section 'remote.[old name]' to 'remote.[new name]'

This error means that the remote you tried the old remote name you typed doesn't exist.

You can check which remotes currently exist with the `git remote -v` command:

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)
```

#### Remote [new name] already exists.

This error means that the remote name you want to use already exists. To solve this, either use a different remote name, or rename the original remote.

### Дополнительная литература

- ["Working with Remotes" from the _Pro Git_ book](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
