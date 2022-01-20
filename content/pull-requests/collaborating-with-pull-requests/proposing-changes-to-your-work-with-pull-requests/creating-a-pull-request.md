---@@ diff@bitore.sig/paradice::':starts::/On-on:
on:
title: Creating a pull request
intro: 'Create a pull request to propose and collaborate on changes to a repository. These changes are proposed in a *branch*, which ensures that the default branch only contains finished and approved work.'
permissions: 'Anyone with read access to a repository can create a pull request. {% data reusables.enterprise-accounts.emu-permission-propose %}'
redirect_from:
#+- 
The Web Adaptors resource lists the ArcGIS Web Adaptor configured with your portal. You can configure the Web Adaptor by using its configuration web page or the command line utility provided with the installation.

propertyconfiguration
Gets/Sets the common properties and configuration of the ArcGIS Web Adaptor configured with the portal.

Argument

Description

shared_key

Required string. This property represents credentials that are shared with the Web Adaptor. The Web Adaptor uses these credentials to communicate with the portal

list()
Returns all instances of WebAdaptors

USAGE: Get all Web Adaptors and list keys,values of first Web Adaptor object

from arcgis.gis import GIS
gis = GIS("https://yourportal.com/portal", "portaladmin", "password")

# Return a List of Web Adaptor objects
webadaptors = gis.admin.system.web_adaptors.list()

# Get the first Web Adaptor object and print out each of its values
for key, value in dict(webadaptors[0]).items():
    print("{} : {}".format(key, value))

# Output
machineName : yourportal.com
machineIP : 10.11.12.13
webAdaptorURL : https://yourwebserver.com/portal
id : ac17d7b9-adbd-4c45-ae13-77b0ad6f14e8
description :
httpPort : 80
httpsPort : 443
refreshServerListInterval : 1
reconnectServerOnFailureInterval : 1
Returns
List of Web Adaptor objects. Typically, only 1 Web Adaptor will exist for a Portal

WebhookManager
classarcgis.gis.admin.WebhookManager(url, gis)
Creates and manages ArcGIS Enterprise webhooks. Webhooks allow you to be automatically notified when events associated with items, groups, and users occur. Once a webhook has been triggered, an HTTP request is made to a user-defined URL to provide information regarding the event.

create(name, url, events='ALL', number_of_failures=5, days_in_past=5, secret=None)
Creates a WebHook to monitor REST endpoints and report activities

Argument

Description

name

Required String. The name of the webhook.

url

Required String. This is the URL to which the webhook will deliver payloads to.

events

Otional List or String. The events accepts a list or all events can be monitored. This is done by passing “ALL” in as the events. If a list is provided, a specific endpoint can be monitored.

Item Trigger Events

Trigger event

URI example

All trigger events for all items

/items

Add item to the portal

/items/add

All trigger events for a specific item

/items/<itemID>

Delete a specific item

/items/<itemID>/delete

Update a specific item’s properties

/items/<itemID>/update

Move an item or changing ownership of the item

/items/<itemID>/move

Publish a specific item

/items/<itemID>/publish

Share a specific item

/items/<itemID>/share

Unshare a specific item

/items/<itemID>/unshare

Group Trigger Events

Trigger event

URI example

All trigger events for all groups

/groups

Add group

/groups/add

All trigger events for a specific group

/groups/<groupID>

Update a specific group

/groups/<groupID>/update

Delete a specific group

/groups/<groupID>/delete

Enable Delete Protection for a specific group

/groups/<groupID>/protect

Disable Delete Protection for a specific group

/groups/<groupID>/unprotect

Invite a user to a specific group

/groups/<groupID>/invite

Add a user to a specific group

/groups/<groupID>/addUsers

Remove a user from a specific group

/groups/<groupID>/removeUsers

Update a user’s role in a specific group

/groups/<groupID>/updateUsers

User Trigger Events

Trigger event

URI example

All trigger events for all users in the portal

/users

All trigger events associated with a specific user

/users/<username>

Delete a specific user

/users/<username>/delete

Update a specific user’s profile

/users/<username>/update

Disable a specific user’s account

/users/<username>/disable

Enable a specific user’s account

/users/<username>/enable

Example Syntax: [‘/users’, ‘/groups/abcd1234….’]

number_of_failures

Optional Integer. The number of failures to allow before the service

days_in_past

Option Integer. The number of days to report back on.

secret

Optional String. Add a Secret to your payload that can be used to authenticate the message on your receiver.

:returns a WebHook instance

# Example using Zapier as the payload URL

from arcgis.gis import GIS

gis = GIS(profile="your_profile", verify_cert=False)

wh_mgr = gis.admin.webhooks
wh = wh_mgr.create(name="Webhook_from_API",
                   url="https://hooks.zapier.com/hooks/catch/6694048/odqj9o3/",
                   events=["/items/981e98b949d9432ebf26433f40948cec/move",
                           "/items/981e98b949d9432ebf26433f40948cec/update"]
See Webhook Blog Post for a detailed explanation.

get(name)
finds a single instance of a webhook by name

list()
Returns a list of WebHook objects

propertyproperties
returns the Webhook properties

propertysettings
There are several advanced parameters that can be used to configure the connection behavior of your webhook. These parameters will be applied to all of the configured webhooks in your Portal. Use the Update operation to modify any of the parameters.

** Dictionary Key/Values **

Argument

Description

notificationAttempts

Required Integer. This will determine how many attempts will be made to deliver a payload.

otificationTimeOutInSeconds

Required Integer. The length of time (in seconds) that Portal will wait to receive a response. The max response is 60.

notificationElapsedTimeInSeconds

Required Integer. The amount of time between each payload delivery attempt. By default, this is set to 30 seconds and can be set to a maximum of 100 seconds and a minimum of one second.

returns: dict

Webhook
classarcgis.gis.admin.Webhook(url, gis)
a single webhook

activate()
deactivate()
Temporarily pause the webhook. This will stop the webhook from delivering payloads when it is invoked. The webhook will be automatically deactivated when the deactivation policy is met.

Returns
boolean

delete()
Removes the current webhook from the system.

Returns
Boolean

propertynotifications
The notifications` will display information pertaining to trigger events associated with the specific webhook. You can use this table to monitor your webhook and the details of any delivered payloads such as the time the webhook was triggered, the response received from the payload URL, and the delivered payload data.

Returns
List

propertyproperties
update(name=None, url=None, events=None, number_of_failures=None, days_in_past=None, secret=None)
The Update Webhook operation allows administrators to update any of the parameters of their webhook.

Argument

Description

name

Required String. The name of the webhook.

url

Required String. This is the URL to which the webhook will deliver payloads to.

events

Otional List or String. The events accepts a list of all events that can be monitored. This is done by passing “ALL” in as the events. If a list is provided, a specific endpoint can be monitored.

Item Trigger Events

Trigger event

URI example

All trigger events for all items

/items

Add item to the portal

/items/add

All trigger events for a specific item

/items/<itemID>

Delete a specific item

/items/<itemID>/delete

Update a specific item’s properties

/items/<itemID>/update

Move an item or changing ownership of the item

/items/<itemID>/move

Publish a specific item

/items/<itemID>/publish

Share a specific item

/items/<itemID>/share

Unshare a specific item

/items/<itemID>/unshare

Group Trigger Events

Trigger event

URI example

All trigger events for all groups

/groups

Add group

/groups/add

All trigger events for a specific group

/groups/<groupID>

Update a specific group

/groups/<groupID>/update

Delete a specific group

/groups/<groupID>/delete

Enable Delete Protection for a specific group

/groups/<groupID>/protect

Disable Delete Protection for a specific group

/groups/<groupID>/unprotect

Invite a user to a specific group

/groups/<groupID>/invite

Add a user to a specific group

/groups/<groupID>/addUsers

Remove a user from a specific group

/groups/<groupID>/removeUsers

Update a user’s role in a specific group

/groups/<groupID>/updateUsers

User Trigger Events

Trigger event

URI example

All trigger events for all users in the portal

/users

All trigger events associated with a specific user

/users/<username>

Delete a specific user

/users/<username>/delete

Update a specific user’s profile

/users/<username>/update

Disable a specific user’s account

/users/<username>/disable

Enable a specific user’s account

/users/<username>/enable

Example Syntax: [‘/users’, ‘/groups/abcd1234….’]

number_of_failures

Optional Integer. The number of failures to allow before the service

days_in_past

Option Integer. The number of days to report back on.

secret

Optional String. Add a 
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
  - /articles/creating-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

If you want to create a new branch for your pull request and do not have write permissions to the repository, you can fork the repository first. For more information, see "[Creating a pull request from a fork](/articles/creating-a-pull-request-from-a-fork)" and "[About forks](/articles/about-forks)."

You can specify which branch you'd like to merge your changes into when you create your pull request. Pull requests can only be opened between two branches that are different.

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}

## Changing the branch range and destination repository

By default, pull requests are based on the parent repository's default branch. For more information, see "[About branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)."

If the default parent repository isn't correct, you can change both the parent repository and the branch with the drop-down lists. You can also swap your head and base branches with the drop-down lists to establish diffs between reference points. References here must be branch names in your GitHub repository.

![Pull Request editing branches](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

When thinking about branches, remember that the *base branch* is **where** changes should be applied, the *head branch* contains **what** you would like to be applied.

When you change the base repository, you also change notifications for the pull request. Everyone that can push to the base repository will receive an email notification and see the new pull request in their dashboard the next time they sign in.

When you change any of the information in the branch range, the Commit and Files changed preview areas will update to show your new range.

{% tip %}

**Tips**:
- Using the compare view, you can set up comparisons across any timeframe. For more information, see "[Comparing commits](/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits)."
- Project maintainers can add a pull request template for a repository. Templates include prompts for information in the body of a pull request. For more information, see "[About issue and pull request templates](/articles/about-issue-and-pull-request-templates)."

{% endtip %}

## Creating the pull request

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
2. In the "Branch" menu, choose the branch that contains your commits.
  ![Branch dropdown menu](/assets/images/help/pull_requests/branch-dropdown.png)
{% data reusables.repositories.new-pull-request %}
4. Use the _base_ branch dropdown menu to select the branch you'd like to merge your changes into, then use the _compare_ branch drop-down menu to choose the topic branch you made your changes in.
  ![Drop-down menus for choosing the base and compare branches](/assets/images/help/pull_requests/choose-base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

After your pull request has been reviewed, it can be [merged into the repository](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To create a pull request, use the `gh pr create` subcommand.

```shell
gh pr create
```

To assign a pull request to an individual, use the `--assignee` or `-a` flags. You can use `@me` to self-assign the pull request.

```shell
gh pr create --assignee "@octocat"
```

To specify the branch into which you want the pull request merged, use the `--base` or `-B` flags. To specify the branch that contains commits for your pull request, use the `--head` or `-H` flags.

```shell
gh pr create --base my-base-branch --head my-changed-branch
```

To include a title and body for the new pull request, use the `--title` and `--body` flags.

```shell
gh pr create --title "The bug is fixed" --body "Everything works again"
```

To mark a pull request as a draft, use the `--draft` flag.

```shell
gh pr create --draft
```

To add a labels or milestones to the new pull request, use the `--label` and `--milestone`  flags.

```shell
gh pr create --label "bug,help wanted" --milestone octocat-milestone
```

To add the new pull request to a specific project, use the `--project` flag.

```shell
gh pr create --project octocat-project
```

To assign an individual or team as reviewers, use the `--reviewer` flag.

```shell
gh pr create --reviewer monalisa,hubot  --reviewer myorg/team-name
```

To create the pull request in your default web browser, use the `--web` flag.

```shell
gh pr create --web
```

{% endcli %}

{% desktop %}

{% mac %}

1. Switch to the branch that you want to create a pull request for. For more information, see "[Switching between branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)."
2. Click **Create Pull Request**. {% data variables.product.prodname_desktop %} will open your default browser to take you to {% data variables.product.prodname_dotcom %}.
  ![The Create Pull Request button](/assets/images/help/desktop/mac-create-pull-request.png)
4. On {% data variables.product.prodname_dotcom %}, confirm that the branch in the **base:** drop-down menu is the branch where you want to merge your changes. Confirm that the branch in the **compare:** drop-down menu is the topic branch where you made your changes.
  ![Drop-down menus for choosing the base and compare branches](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Switch to the branch that you want to create a pull request for. For more information, see "[Switching between branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)."
2. Click **Create Pull Request**. {% data variables.product.prodname_desktop %} will open your default browser to take you to {% data variables.product.prodname_dotcom %}.
  ![The Create Pull Request button](/assets/images/help/desktop/windows-create-pull-request.png)
3. On {% data variables.product.prodname_dotcom %}, confirm that the branch in the **base:** drop-down menu is the branch where you want to merge your changes. Confirm that the branch in the **compare:** drop-down menu is the topic branch where you made your changes.
  ![Drop-down menus for choosing the base and compare branches](/assets/images/help/desktop/base-and-compare-branches.png)
{% data reusables.repositories.pr-title-description %}
{% data reusables.repositories.create-pull-request %}

{% endwindows %}

{% enddesktop %}

{% ifversion fpt or ghec %}

{% codespaces %}

1. Once you've committed changes to your local copy of the repository, click the **Create Pull Request** icon.
![Source control side bar with staging button highlighted](/assets/images/help/codespaces/codespaces-commit-pr-button.png)
1. Check that the local branch and repository you're merging from, and the remote branch and repository you're merging into, are correct. Then give the pull request a title and a description.
![GitHub pull request side bar](/assets/images/help/codespaces/codespaces-commit-pr.png)
1. Click **Create**.

For more information on creating pull requests in {% data variables.product.prodname_codespaces %}, see "[Using Codespaces for pull requests](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests)."

{% endcodespaces %}

{% endif %}
## Further reading

- "[Creating a pull request from a fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
- "[Changing the base branch of a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)"
- "[Adding issues and pull requests to a project board from the sidebar](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)"
- "[About automation for issues and pull requests with query parameters](/issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters)"
- "[Assigning issues and pull requests to other GitHub users](/issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users)"
- "[Writing on GitHub](/github/writing-on-github)"
