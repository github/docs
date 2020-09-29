---
title: Removing a remote
intro: Use the `git remote rm` command to remove a remote URL from your repository.
redirect_from:
  - /articles/removing-a-remote
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

The `git remote rm` command takes one argument:

* A remote name, for example, `destination`

### 예시

These examples assume you're [cloning using HTTPS](/articles/which-remote-url-should-i-use/#cloning-with-https-urls), which is recommended.

```shell
$ git remote -v
# View current remotes
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (push)
> destination  https://{% data variables.command_line.codeblock %}/<em>FORKER/REPOSITORY</em>.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/<em>FORKER/REPOSITORY</em>.git (push)

$ git remote rm destination
# Remove remote
$ git remote -v
# Verify it's gone
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (push)
```

{% warning %}

**Note**: `git remote rm` does not delete the remote repository from the server.  It simply removes the remote and its references from your local repository.

{% endwarning %}

### 문제 해결

You may encounter these errors when trying to remove a remote.

#### Could not remove config section 'remote.[name]'

This error means that the remote you tried to delete doesn't exist:

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

Check that you've correctly typed the remote name.

### 더 읽을거리

- ["Working with Remotes" from the _Pro Git_ book](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
