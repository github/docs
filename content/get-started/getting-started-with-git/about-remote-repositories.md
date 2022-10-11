---
title: About remote repositories
redirect_from:
  - /articles/working-when-github-goes-down/
  - /articles/sharing-repositories-without-github/
  - /articles/about-remote-repositories
  - /articles/which-url-should-i-use/
  - /articles/which-remote-url-should-i-use
  - /github/using-git/which-remote-url-should-i-use
  - /github/using-git/about-remote-repositories
  - /github/getting-started-with-github/about-remote-repositories
  - /github/getting-started-with-github/getting-started-with-git/about-remote-repositories
intro: 'GitHub''s collaborative approach to development depends on publishing commits from your local repository to {% data variables.product.product_name %} for other people to view, fetch, and update.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
---
## About remote repositories

A remote URL is Git's fancy way of saying "the place where your code is stored." That URL could be your repository on GitHub, or another user's fork, or even on a completely different server.

You can only push to two types of URL addresses:

* An HTTPS URL like `https://{% data variables.command_line.backticks %}/user/repo.git`
* An SSH URL, like `git@{% data variables.command_line.backticks %}:user/repo.git`

Git associates a remote URL with a name, and your default remote is usually called `origin`.

## Creating remote repositories

You can use the `git remote add` command to match a remote URL with a name.
For example, you'd type the following in the command line:

```shell
git remote add origin <em> &lt;REMOTE_URL> </em>
```

This associates the name `origin` with the `REMOTE_URL`.

You can use the command `git remote set-url` to [change a remote's URL](/github/getting-started-with-github/managing-remote-repositories).

## Choosing a URL for your remote repository

There are several ways to clone repositories available on {% data variables.product.product_location %}.

When you view a repository while signed in to your account, the URLs you can use to clone the project onto your computer are available below the repository details.

For information on setting or changing your remote URL, see "[Managing remote repositories](/github/getting-started-with-github/managing-remote-repositories)."

## Cloning with HTTPS URLs

The `https://` clone URLs are available on all repositories, regardless of visibility. `https://` clone URLs work even if you are behind a firewall or proxy.

When you `git clone`, `git fetch`, `git pull`, or `git push` to a remote repository using HTTPS URLs on the command line, Git will ask for your {% data variables.product.product_name %} username and password. {% data reusables.user_settings.password-authentication-deprecation %}

{% data reusables.command_line.provide-an-access-token %}

{% tip %}

**Tips**:
- You can use a credential helper so Git will remember your {% data variables.product.prodname_dotcom %} credentials every time it talks to {% data variables.product.prodname_dotcom %}. For more information, see "[Caching your {% data variables.product.prodname_dotcom %} credentials in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)."
- To clone a repository without authenticating to {% data variables.product.product_name %} on the command line, you can use {% data variables.product.prodname_desktop %} to clone instead. For more information, see "[Cloning a repository from {% data variables.product.prodname_dotcom %} to {% data variables.product.prodname_dotcom %} Desktop](/desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)."

{% endtip %}

 {% ifversion fpt %}If you'd rather use SSH but cannot connect over port 22, you might be able to use SSH over the HTTPS port. For more information, see "[Using SSH over the HTTPS port](/github/authenticating-to-github/using-ssh-over-the-https-port)."{% endif %}

## Cloning with SSH URLs

SSH URLs provide access to a Git repository via SSH, a secure protocol. To use these URLs, you must generate an SSH keypair on your computer and add the **public** key to your {% data variables.product.product_name %} account. For more information, see "[Connecting to {% data variables.product.prodname_dotcom %} with SSH](/github/authenticating-to-github/connecting-to-github-with-ssh)."

When you `git clone`, `git fetch`, `git pull`, or `git push` to a remote repository using SSH URLs, you'll be prompted for a password and must provide your SSH key passphrase. For more information, see "[Working with SSH key passphrases](/github/authenticating-to-github/working-with-ssh-key-passphrases)."

{% ifversion fpt %}If you are accessing an organization that uses SAML single sign-on (SSO), you must authorize your SSH key to access the organization before you authenticate. For more information, see "[About authentication with SAML single sign-on](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)" and "[Authorizing an SSH key for use with SAML single sign-on](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."{% endif %}

{% tip %}

**Tip**: You can use an SSH URL to clone a repository to your computer, or as a secure way of deploying your code to production servers. You can also use SSH agent forwarding with your deploy script to avoid managing keys on the server. For more information, see "[Using SSH Agent Forwarding](/developers/overview/using-ssh-agent-forwarding)."

{% endtip %}

{% ifversion fpt or ghes or ghae %}

## Cloning with {% data variables.product.prodname_cli %}

You can also install {% data variables.product.prodname_cli %} to use {% data variables.product.product_name %} workflows in your terminal. For more information, see "[About {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)."

{% endif %}

{% ifversion not ghae %}
## Cloning with Subversion

You can also use a [Subversion](https://subversion.apache.org/) client to access any repository on {% data variables.product.prodname_dotcom %}. Subversion offers a different feature set than Git. For more information, see "[What are the differences between Subversion and Git?](/github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git)"

You can also access repositories on {% data variables.product.prodname_dotcom %} from Subversion clients. For more information, see "[Support for Subversion clients](/github/importing-your-projects-to-github/support-for-subversion-clients)."
{% endif %}
