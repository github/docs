---
title: Adding a remote
intro: 'To add a new remote, use the `git remote add` command on the terminal, in the directory your repository is stored at.'
redirect_from:
  - /articles/adding-a-remote
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

The `git remote add` command takes two arguments:

* A remote name, for example, `origin`
* A remote URL, for example, `https://{% data variables.command_line.backticks %}/user/repo.git`

For example:

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
# Set a new remote

$ git remote -v
# Verify new remote
> origin  https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git (push)
```

Not sure which URL to use?  Check out "[Which remote URL should I use?](/articles/which-remote-url-should-i-use)"

### Troubleshooting

You may encounter these errors when trying to add a remote.

#### Remote `name` already exists

This error means you've tried to add a remote with a name that already exists in your local repository:

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: remote origin already exists.
```

To fix this, you can

* Use a different name for the new remote
* [Rename the existing remote](/articles/renaming-a-remote)
* [Delete the existing remote](/articles/removing-a-remote)

### Further reading

- "[Working with Remotes" from the _Pro Git_ book](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
