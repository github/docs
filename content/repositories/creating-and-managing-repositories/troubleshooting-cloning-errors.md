---
title: Troubleshooting cloning errors
intro: 'If you''re having trouble cloning a repository, check these common errors.'
redirect_from:
  - /articles/error-the-requested-url-returned-error-403
  - /articles/error-the-requested-url-returned-error-401
  - /articles/error-did-you-run-git-update-server-info-on-the-server
  - /articles/error-the-requested-url-returned-error-403-while-accessing-https-github-com-user-repo-git-info-refs
  - /articles/https-cloning-errors
  - /github/creating-cloning-and-archiving-repositories/https-cloning-errors
  - /articles/error-repository-not-found
  - /github/creating-cloning-and-archiving-repositories/error-repository-not-found
  - /articles/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
  - /github/creating-cloning-and-archiving-repositories/error-remote-head-refers-to-nonexistent-ref-unable-to-checkout
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---

## HTTPS cloning errors

There are a few common errors when using HTTPS with Git. These errors usually indicate you have an old version of Git, or you don't have access to the repository.

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

## Error: Repository not found

{% ifversion fpt or ghae or ghec %}If you see this error when cloning a repository, it means that the repository does not exist or you do not have permission to access it.{% else %}If you see this error when cloning a repository, it means that the repository does not exist, you do not have permission to access it, or {% data variables.product.product_location %} is in private mode.{% endif %} There are a few solutions to this error, depending on the cause.

### Check your spelling

Typos happen, and repository names are case-sensitive.  If you try to clone `git@{% data variables.command_line.codeblock %}:user/repo.git`, but the repository is really named `User/Repo` you will receive this error.

To avoid this error, when cloning, always copy and paste the clone URL from the repository's page. For more information, see "[Cloning a repository](/articles/cloning-a-repository)."

To update the remote on an existing repository, see "[Managing remote repositories](/github/getting-started-with-github/managing-remote-repositories)".

### Checking your permissions

If you are trying to clone a private repository but do not have permission to view the repository, you will receive this error.

Make sure that you have access to the repository in one of these ways:

* The owner of the repository
* A [collaborator](/articles/inviting-collaborators-to-a-personal-repository) on the repository
* A [member of a team](/articles/adding-organization-members-to-a-team) that has access to the repository (if the repository belongs to an organization)

### Check your SSH access

In rare circumstances, you may not have the proper SSH access to a repository.

You should ensure that the SSH key you are using is attached to your personal account on {% data variables.product.product_name %}. You can check this by typing
the following into the command line:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% ifversion fpt or ghec %}
If the repository belongs to an organization and you're using an SSH key generated by an OAuth App, OAuth App access may have been restricted by an organization owner. For more information, see "[About OAuth App access restrictions](/organizations/restricting-access-to-your-organizations-data/about-oauth-app-access-restrictions)."
{% endif %}

For more information, see [Adding a new SSH key to your GitHub account](/articles/adding-a-new-ssh-key-to-your-github-account).

{% ifversion ghes %}
### Check if your instance is in private mode

If your site administrator has enabled private mode on your GitHub Enterprise instance, anonymous clones over `git://` will be disabled. If you are unable to clone a repository, contact your site administrator.
{% endif %}

### Check that the repository really exists

If all else fails, make sure that the repository really exists on {% data variables.product.product_location %}!
If you're trying to push to a repository that doesn't exist, you'll get this error.

## Error: Remote HEAD refers to nonexistent ref, unable to checkout

This error occurs if the default branch of a repository has been deleted on {% data variables.product.product_location %}.

Detecting this error is simple; Git will warn you when you try to clone the repository:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
# Clone a repo
> Cloning into 'repo'...
> remote: Counting objects: 66179, done.
> remote: Compressing objects: 100% (15587/15587), done.
> remote: Total 66179 (delta 46985), reused 65596 (delta 46402)
> Receiving objects: 100% (66179/66179), 51.66 MiB | 667 KiB/s, done.
> Resolving deltas: 100% (46985/46985), done.
> warning: remote HEAD refers to nonexistent ref, unable to checkout.
```

To fix the error, you'll need to be an administrator of the repository on {% data variables.product.product_location %}.
You'll want to [change the default branch](/github/administering-a-repository/changing-the-default-branch) of the repository.

After that, you can get a list of all the available branches from the command line:

```shell
$ git branch -a
# Lists ALL the branches
>   remotes/origin/awesome
>   remotes/origin/more-work
>   remotes/origin/new-main
```

Then, you can just switch to your new branch:

```shell
$ git checkout new-main
# Create and checkout a tracking branch
> Branch new-main set up to track remote branch new-main from origin.
> Switched to a new branch 'new-main'
```
