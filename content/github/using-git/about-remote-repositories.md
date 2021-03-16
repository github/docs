---
title: About remote repositories
redirect_from:
  - /articles/working-when-github-goes-down/
  - /articles/sharing-repositories-without-github/
  - /articles/about-remote-repositories
intro: 'GitHub''s collaborative approach to development depends on publishing commits from your local repository for other people to view, fetch, and update.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

A remote URL is Git's fancy way of saying "the place where your code is stored."
That URL could be your repository on GitHub, or another user's fork, or even on
a completely different server.

You can only push to two types of URL addresses:

* An HTTPS URL like `https://{% data variables.command_line.backticks %}/user/repo.git`
* An SSH URL, like `git@{% data variables.command_line.backticks %}:user/repo.git`

Git associates a remote URL with a name, and your default remote is usually called `origin`.

For information on the differences between these URLs, see "[Which remote URL should I use?](/articles/which-remote-url-should-i-use)"

### Creating remotes

You can use the `git remote add` command to match a remote URL with a name.
For example, you'd type the following in the command line:

```shell
git remote add origin <em> &lt;REMOTE_URL> </em>
```

This associates the name `origin` with the `REMOTE_URL`.

You can use the command `git remote set-url` to [change a remote's URL](/articles/changing-a-remote-s-url).
