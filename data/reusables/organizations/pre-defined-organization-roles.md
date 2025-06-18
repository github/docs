Pre-defined organization roles are roles that are available by default in every organization. You don't need to create them yourself. They can include both organization permissions that let the recipient manage the organization, as well as repository permissions that apply to all of the repositories in the organization. The following pre-defined roles are built into every organization based on common patterns of permissions organizations usually need.

The current set of pre-defined roles are:

* **All-repository read:** Grants read access to all repositories in the organization.
* **All-repository write:** Grants write access to all repositories in the organization.
* **All-repository triage:** Grants triage access to all repositories in the organization.
* **All-repository maintain:** Grants maintenance access to all repositories in the organization.
* **All-repository admin:** Grants admin access to all repositories in the organization.
{%- ifversion fpt or ghec or ghes > 3.15 %}
* **CI/CD admin:** Grants admin access to manage Actions policies, runners, runner groups, hosted compute network configurations, secrets, variables, and usage metrics for an organization.
* **Security manager**: Grants the ability to manage security policies, security alerts, and security configurations for an organization and all its repositories.
{%- endif %}
