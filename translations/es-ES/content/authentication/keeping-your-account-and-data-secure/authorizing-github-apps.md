---
title: Authorizing GitHub Apps
intro: 'You can authorize a {% data variables.product.prodname_github_app %} to allow an application to retrieve information about your {% data variables.product.prodname_dotcom %} account and, in some circumstances, to make changes on {% data variables.product.prodname_dotcom %} on your behalf.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps
---

Third-party applications that need to verify your {% data variables.product.prodname_dotcom %} identity, or interact with the data on {% data variables.product.prodname_dotcom %} on your behalf, can ask you to authorize the {% data variables.product.prodname_github_app %} to do so. 

When authorizing the {% data variables.product.prodname_github_app %}, you should ensure you trust the application, review who it's developed by, and review the kinds of information the application wants to access.

During authorization, you'll be prompted to grant the {% data variables.product.prodname_github_app %} permission to:
* **Verify your {% data variables.product.prodname_dotcom %} identity**<br/>
  When authorized, the {% data variables.product.prodname_github_app %} will be able to programmatically retrieve your public GitHub profile, as well as some private details (such as your email address), depending on the level of access requested.
* **Know which resources you can access**<br/>
  When authorized, the {% data variables.product.prodname_github_app %} will be able to programmatically read the _private_ {% data variables.product.prodname_dotcom %} resources that you can access (such as private  {% data variables.product.prodname_dotcom %}  repositories) _where_ an installation of the {% data variables.product.prodname_github_app %} is also present. The application may use this, for example, so that it can show you an appropriate list of repositories.
* **Act on your behalf**<br/>
  The application may need to perform tasks on {% data variables.product.prodname_dotcom %}, as you. This might include creating an issue, or commenting on a pull request. This ability to act on your behalf is limited to the {% data variables.product.prodname_dotcom %} resources where _both_ you and the {% data variables.product.prodname_github_app %} have access. In some cases, however, the application may never make any changes on your behalf.
  
## When does a {% data variables.product.prodname_github_app %} act on your behalf?

The situations in which a {% data variables.product.prodname_github_app %} acts on your behalf vary according to the purpose of the {% data variables.product.prodname_github_app %} and the context in which it is being used. 

For example, an integrated development environment (IDE) may use a {% data variables.product.prodname_github_app %} to interact on your behalf in order to push changes you have authored through the IDE back to repositories on {% data variables.product.prodname_dotcom %}.  The {% data variables.product.prodname_github_app %} will achieve this through a [user-to-server request](/get-started/quickstart/github-glossary#user-to-server-request).

When a {% data variables.product.prodname_github_app %} acts on your behalf in this way, this is identified on GitHub via a special icon that shows a small avatar for the {% data variables.product.prodname_github_app %} overlaid onto your own avatar, similar to the one shown below.

![An issue created by a "user-to-server" request from a {% data variables.product.prodname_github_app %}](/assets/images/help/apps/github-apps-new-issue.png)

## To what extent can a {% data variables.product.prodname_github_app %} know which resources you can access  and act on your behalf?

The extent to which a {% data variables.product.prodname_github_app %} can know which resources you can access and act on your behalf, after you have authorized it, is limited by:

* The organizations or repositories on which the app is installed 
* The permissions the app has requested
* Your access to {% data variables.product.prodname_dotcom %} resources

Let's use an example to explain this.

{% data variables.product.prodname_dotcom %} user Alice logs into a third-party web application, ExampleApp, using their {% data variables.product.prodname_dotcom %} identity. During this process, Alice authorizes ExampleApp to perform actions on their behalf.

However, the activity ExampleApp is able to perform on Alice's behalf in {% data variables.product.prodname_dotcom %} is constrained by: the repositories on which ExampleApp is installed, the permissions ExampleApp has requested, and Alice's access to {% data variables.product.prodname_dotcom %} resources. 

This means that, in order for ExampleApp to create an issue on Alice's behalf, in a repository called Repo A, all of the following must be true:

* ExampleApp's {% data variables.product.prodname_github_app %} requests write access to issues.
* A user having admin access for Repo A must have installed ExampleApp's {% data variables.product.prodname_github_app %} on Repo A.
* Alice must have read permission for Repo A. For information about which permissions are required to perform various activities, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)."
