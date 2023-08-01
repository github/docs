When maintainers of a repository stop interacting with {% data variables.product.prodname_dependabot %} pull requests, {% data variables.product.prodname_dependabot %} temporarily pauses its updates and lets you know. This automatic opt-out behavior reduces noise because {% data variables.product.prodname_dependabot %} doesn't create pull requests for version and security updates, and doesn't rebase {% data variables.product.prodname_dependabot %} pull requests for inactive repositories.

The automatic deactivation of {% data variables.product.prodname_dependabot %} updates only applies to repositories where {% data variables.product.prodname_dependabot %} has opened pull requests but the pull requests remain untouched. If {% data variables.product.prodname_dependabot %} hasn't opened any pull requests, {% data variables.product.prodname_dependabot %} will never become paused.

An active repository is a repository for which a user (not {% data variables.product.prodname_dependabot %}) has carried out _any_ of the actions below in the last 90 days:

- Merge or close a {% data variables.product.prodname_dependabot %} pull request on the repository.
- Make a change to the `dependabot.yml` file for the repository.
- Manually trigger a security update or a version update.
- Enable {% data variables.product.prodname_dependabot_security_updates %} for the repository.
- Use `@dependabot` commands on pull requests.

An inactive repository is a repository that has at least one {% data variables.product.prodname_dependabot %} pull request open for more than 90 days, has been enabled for the full period, and where none of the actions listed above has been taken by a user.

When {% data variables.product.prodname_dependabot %} is paused, {% data variables.product.prodname_dotcom %} adds a notice to the body of all open {% data variables.product.prodname_dependabot %} pull requests, and assigns a `dependabot-paused` label to these pull requests. You'll also see a banner notice in the UI of the **Settings** tab of the repository (under **Code security and analysis**, then **{% data variables.product.prodname_dependabot %}**), as well in the list of {% data variables.product.prodname_dependabot_alerts %} (if {% data variables.product.prodname_dependabot_security_updates %} are affected).{% ifversion dependabot-updates-paused-enterprise-orgs %} Additionally, you will be able to see whether {% data variables.product.prodname_dependabot %} is paused at the organization-level in the security overview. The `paused` status will also be visible via the API. For more information, see "[AUTOTITLE](/rest/repos#enable-automated-security-fixes)" in the REST API documentation.{% endif %}

As soon as a maintainer interacts with a {% data variables.product.prodname_dependabot %} pull request again, {% data variables.product.prodname_dependabot %} will unpause itself:
- Security updates are automatically resumed for {% data variables.product.prodname_dependabot_alerts %}.
- Version updates are automatically resumed with the schedule specified in the `dependabot.yml` file.
