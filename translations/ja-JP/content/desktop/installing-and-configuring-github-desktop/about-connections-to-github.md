---
title: About connections to GitHub
intro: '{% data variables.product.prodname_desktop %} uses HTTPS to securely exchange data with {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/about-connections-to-github
versions:
  free-pro-team: '*'
---

{% data variables.product.prodname_desktop %} connects to {% data variables.product.prodname_dotcom %} when you pull from, push to, clone, and fork remote repositories. To connect to {% data variables.product.prodname_dotcom %} from {% data variables.product.prodname_desktop %}, you must authenticate your account. 詳しい情報については「[{% data variables.product.prodname_dotcom %}への認証を行う](/desktop/getting-started-with-github-desktop/authenticating-to-github)」を参照してください。

After you authenticate to {% data variables.product.prodname_dotcom %}, you can connect to remote repositories with {% data variables.product.prodname_desktop %}. {% data variables.product.prodname_desktop %} caches your credentials (username and password or personal access token) and uses the credentials to authenticate for each connection to the remote repository.

{% data variables.product.prodname_desktop %} connects to {% data variables.product.prodname_dotcom %} using HTTPS. If you use {% data variables.product.prodname_desktop %} to access repositories that were cloned using SSH, you may encounter errors. To connect to a repository that was cloned using SSH, change the remote's URLs. 詳しい情報については、「[リモートの URL を変更する](/github/using-git/changing-a-remotes-url)」を参照してください。

### 参考リンク
- "[Cloning and forking repositories from GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)"
