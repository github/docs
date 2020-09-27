---
title: About connections to GitHub
intro: '{{ site.data.variables.product.prodname_desktop }} uses HTTPS to securely exchange data with {{ site.data.variables.product.prodname_dotcom }}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/about-connections-to-github
versions:
  free-pro-team: '*'
---

{{ site.data.variables.product.prodname_desktop }} connects to {{ site.data.variables.product.prodname_dotcom }} when you pull from, push to, clone, and fork remote repositories. To connect to {{ site.data.variables.product.prodname_dotcom }} from {{ site.data.variables.product.prodname_desktop }}, you must authenticate your account. For more information, see "[Authenticating to {{ site.data.variables.product.prodname_dotcom }}](/desktop/getting-started-with-github-desktop/authenticating-to-github)."

After you authenticate to {{ site.data.variables.product.prodname_dotcom }}, you can connect to remote repositories with {{ site.data.variables.product.prodname_desktop }}. {{ site.data.variables.product.prodname_desktop }} caches your credentials (username and password or personal access token) and uses the credentials to authenticate for each connection to the remote repository.

{{ site.data.variables.product.prodname_desktop }} connects to {{ site.data.variables.product.prodname_dotcom }} using HTTPS. If you use {{ site.data.variables.product.prodname_desktop }} to access repositories that were cloned using SSH, you may encounter errors. To connect to a repository that was cloned using SSH, change the remote's URLs. For more information, see "[Changing a remote's URL](/github/using-git/changing-a-remotes-url)."

### Дополнительная литература
- "[Cloning and forking repositories from GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)"
