---
title: Dependabot update pull requests no longer generated
intro: '{% data variables.product.prodname_dependabot %} can pause updates based on your interaction with {% data variables.product.prodname_dependabot %} pull requests. Learn more about the automatic deactivation of {% data variables.product.prodname_dependabot_updates %}.'
allowTitleToDifferFromFilename: true
permissions: '{% data reusables.permissions.dependabot-yml-configure %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Dependabot stopped working
---

* When maintainers of a repository stop interacting with {% data variables.product.prodname_dependabot %} pull requests, {% data variables.product.prodname_dependabot %} temporarily pauses its updates and lets you know.

* {% data variables.product.prodname_dependabot %} stops rebasing pull requests for version and security updates after 30 days, reducing notifications for inactive {% data variables.product.prodname_dependabot %} pull requests.

## About automatic deactivation of {% data variables.product.prodname_dependabot_updates %}

{% data variables.product.prodname_dependabot %} pauses updates on your repositories, based on your interaction with pull requests from {% data variables.product.prodname_dependabot_updates %}. When {% data variables.product.prodname_dependabot %} automatically deactivates {% data variables.product.prodname_dependabot_updates %}, there is:

* No creation of pull requests for version and security updates.
* No rebasing of {% data variables.product.prodname_dependabot %} pull requests for inactive repositories.

>[!NOTE] The automatic deactivation of {% data variables.product.prodname_dependabot %} updates only applies to repositories where {% data variables.product.prodname_dependabot %} has opened pull requests but the pull requests remain untouched. If {% data variables.product.prodname_dependabot %} hasn't opened any pull requests, {% data variables.product.prodname_dependabot %} will never become paused.

An active repository is a repository where a user (**not** {% data variables.product.prodname_dependabot %}) has taken **any** of the following actions in the last 90 days:

* Merged or closed a {% data variables.product.prodname_dependabot %} pull request on the repository.
* Made a change to the `dependabot.yml` file for the repository.
* Manually triggered a security update or a version update.
* Enabled {% data variables.product.prodname_dependabot_security_updates %} for the repository.
* Used `@dependabot` commands on pull requests.

An inactive repository is a repository:

* That has at least one {% data variables.product.prodname_dependabot %} pull request open for more than 90 days,
* That has been enabled for the full period, and
* Where none of the actions listed above has been taken by a user.

## How to know if {% data variables.product.prodname_dependabot_updates %} are paused

When {% data variables.product.prodname_dependabot %} is paused, {% data variables.product.github %} adds a banner notice:
* To all open {% data variables.product.prodname_dependabot %} pull requests.
* To the UI of the **Settings** tab of the repository (under {% ifversion ghes %}**Code security and analysis**{% else %}**Code security**{% endif %}, then **{% data variables.product.prodname_dependabot %}**).
* To the list of {% data variables.product.prodname_dependabot_alerts %} (if {% data variables.product.prodname_dependabot_security_updates %} are affected).

{% ifversion dependabot-updates-paused-enterprise-orgs %} Additionally, you will be able to see whether {% data variables.product.prodname_dependabot %} is paused at the organization level in the security overview. The `paused` status will also be visible via the API. For more information, see [AUTOTITLE](/rest/repos#enable-automated-security-fixes).{% endif %}

## About automatic reactivation of {% data variables.product.prodname_dependabot_updates %}

As soon as someone interacts with a {% data variables.product.prodname_dependabot %} pull request again, {% data variables.product.prodname_dependabot %} will unpause itself:
* Security updates are automatically resumed for {% data variables.product.prodname_dependabot_alerts %}.
* Version updates are automatically resumed with the schedule specified in the `dependabot.yml` file.
