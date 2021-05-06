---
title: HTTPS cloning errors
intro: 'There are a few common errors when using HTTPS with Git. These errors usually indicate you have an old version of Git, or you don''t have access to the repository.'
redirect_from:
  - /articles/error-the-requested-url-returned-error-403/
  - /articles/error-the-requested-url-returned-error-401/
  - /articles/error-did-you-run-git-update-server-info-on-the-server/
  - /articles/error-the-requested-url-returned-error-403-while-accessing-https-github-com-user-repo-git-info-refs/
  - /articles/https-cloning-errors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Here's an example of an HTTPS error you might receive:

```shell
> error: The requested URL returned error: 401 while accessing
> https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs?service=git-receive-pack
> fatal: HTTP request failed
```

```shell
> Error: The requested URL returned error: 403 while accessing
> https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs
> fatal: HTTP request failed
```

```shell
> Error: https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git/info/refs not found: did you run git
> update-server-info on the server?
```

### Check your Git version

There's no minimum Git version necessary to interact with {% data variables.product.product_name %}, but we've found version 1.7.10 to be a comfortable stable version that's available on many platforms. You can always [download the latest version on the Git website](https://git-scm.com/downloads).

### Ensure the remote is correct

The repository you're trying to fetch must exist on {% data variables.product.product_location %}, and the URL is case-sensitive.

You can find the URL of the local repository by opening the command line and
typing `git remote -v`:

```shell
$ git remote -v
# View existing remotes
> origin  https://github.com/ghost/reactivecocoa.git (fetch)
> origin  https://github.com/ghost/reactivecocoa.git (push)

$ git remote set-url origin https://github.com/ghost/ReactiveCocoa.git
# Change the 'origin' remote's URL

$ git remote -v
# Verify new remote URL
> origin  https://github.com/ghost/ReactiveCocoa.git (fetch)
> origin  https://github.com/ghost/ReactiveCocoa.git (push)
```

Alternatively, you can change the URL through our
[{% data variables.product.prodname_desktop %}](https://desktop.github.com/) application.

### Provide an access token

To access {% data variables.product.prodname_dotcom %}, you must authenticate with a personal access token instead of your password. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."

{% data reusables.command_line.provide-an-access-token %}

### Check your permissions

When prompted for a username and password, make sure you use an account that has access to the repository.

{% tip %}

**Tip**: If you don't want to enter your credentials every time you interact with the remote repository, you can turn on [credential caching](/github/getting-started-with-github/caching-your-github-credentials-in-git). If you are already using credential caching, please make sure that your computer has the correct credentials cached. Incorrect or out of date credentials will cause authentication to fail.

{% endtip %}

### Use SSH instead

If you've previously set up SSH keys, you can use the SSH clone URL instead of HTTPS.  For more information, see "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."
