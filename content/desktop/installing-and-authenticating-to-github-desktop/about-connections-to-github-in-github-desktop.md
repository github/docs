---
title: About connections to GitHub in GitHub Desktop
intro: '{% data variables.product.prodname_desktop %} uses HTTPS to securely exchange data with {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/about-connections-to-github
  - /desktop/installing-and-configuring-github-desktop/about-connections-to-github
  - /desktop/installing-and-configuring-github-desktop/installing-and-authenticating-to-github-desktop/about-connections-to-github
  - /desktop/installing-and-configuring-github-desktop/installing-and-authenticating-to-github-desktop/about-connections-to-github-in-github-desktop
versions:
  feature: desktop
shortTitle: About connections
---
{% data variables.product.prodname_desktop %} connects to {% data variables.product.prodname_dotcom %} when you pull from, push to, clone, and fork remote repositories. To connect to {% data variables.product.prodname_dotcom %} from {% data variables.product.prodname_desktop %}, you must authenticate your account. For more information, see "[AUTOTITLE](/desktop/installing-and-authenticating-to-github-desktop/authenticating-to-github-in-github-desktop)."

After you authenticate to {% data variables.product.prodname_dotcom %}, you can connect to remote repositories with {% data variables.product.prodname_desktop %}. {% data variables.product.prodname_desktop %} caches your credentials (username and password or {% data variables.product.pat_generic %}) and uses the credentials to authenticate for each connection to the remote repository.

{% data variables.product.prodname_desktop %} connects to {% data variables.product.prodname_dotcom %} using HTTPS. If you use {% data variables.product.prodname_desktop %} to access repositories that were cloned using SSH, you may encounter errors. To connect to a repository that was cloned using SSH, change the remote's URLs. For more information, see "[AUTOTITLE](/get-started/getting-started-with-git/managing-remote-repositories)."

## Further reading

* "[AUTOTITLE](/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop)"
