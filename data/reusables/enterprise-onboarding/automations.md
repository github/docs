Automation on {% data variables.product.github %} typically involves multiple components working together. The most important {% data variables.product.github %} native components are:

* **{% data variables.product.prodname_actions %} workflows**, which provide a runtime for executing automation logic. Out of the box, they work within a single repository, but they can be extended to automate across or even outside of repositories.
* **{% data variables.product.prodname_github_apps %}**, which do not have a runtime. Instead, they provide identity, permissions, and event delivery so your automations, whether external services or workflows, can authenticate and act securely.

Most enterprise automation use {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_actions %} together. For example, a workflow running in {% data variables.product.prodname_actions %} may use a {% data variables.product.prodname_github_app %} to obtain a short-lived token that allows it to perform tasks across repositories or organizations.

This guide explains how {% data variables.product.prodname_github_apps %}, external automations, and {% data variables.product.prodname_actions %} complement each other, and when to use each in your enterprise.

## {% data variables.product.prodname_github_apps %}

A {% data variables.product.prodname_github_app %} provides the **identity, permissions, and webhook events** required for automation on or across repositories, organizations, or your enterprise. {% data variables.product.prodname_github_apps %} themselves do **not** execute logic, they enable other systems to do so.

{% data variables.product.prodname_github_apps %} support enterprise automation by offering:

* **Granular permissions** to follow least-privilege principles
* **Scoped installations** at the enterprise, organization, or repository level
* **Short-lived tokens** for secure access
* **Distinct identities** with full auditability
* **Delegated administration** through the {% data variables.product.prodname_github_app %} manager role
* **Consistency at scale** when owned by the enterprise account

### What do {% data variables.product.prodname_github_apps %} enable?

{% data variables.product.prodname_github_apps %} allow **automations you write elsewhere**—such as external services or workflow steps—to act on {% data variables.product.github %} APIs within the permissions you grant. For example:

* Receiving webhook events and triggering external services
* Enabling a workflow to act outside its default repository scope
* Integrating {% data variables.product.github %} with third-party systems
* Coordinating changes across many repositories
* Running long-lived bots or services that monitor enterprise-level activity

{% ifversion enterprise-installed-apps %}

> [!NOTE]
> Enterprise-installed {% data variables.product.prodname_github_apps %} cannot call every API endpoint. See [AUTOTITLE](/apps/using-github-apps/installing-a-github-app-on-your-enterprise#what-enterprise-installed-apps-can-do).

{% endif %}

## {% data variables.product.prodname_actions %}

{% data variables.product.prodname_actions %} provide {% data variables.product.github %}’s built-in **runtime** for executing automation logic inside repositories. Workflows run on hosted or self-hosted runners and are ideal for tasks tied to code changes or repository events.

Use {% data variables.product.prodname_actions %} for:

* CI/CD (build, test, deploy)
* Pull request checks and validations
* Repository-level maintenance tasks
* Event-driven workflows responding to pushes, tags, or issue updates
* Scheduled jobs with cron

### How {% data variables.product.prodname_actions %} uses {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_actions %} and {% data variables.product.prodname_github_apps %} are deeply connected:

* Workflow permissions map directly to {% data variables.product.prodname_github_app %} permissions.
* Workflows can authenticate as a specific {% data variables.product.prodname_github_app %} using `actions/create-github-app-token`.
* {% data variables.product.prodname_github_apps %} can trigger workflows through events such as `repository_dispatch`.

## External automations and services

External automations run outside {% data variables.product.github %} on your own infrastructure. These services typically:

* Receive webhook events from a {% data variables.product.prodname_github_app %}
* Use the {% data variables.product.prodname_github_app %} to request short-lived installation tokens
* Execute long-running or cross-enterprise logic
* Integrate with external business systems

Examples include:

* Organization-wide configuration management
* Policy enforcement services
* Multi-repository code or metadata synchronization
* Compliance report generation
* Cross-organization issue or pull request management

All of these rely on {% data variables.product.prodname_github_apps %} for authentication, identity, and events—**not** for execution.

## How these components work together

Most enterprise automation uses a combination of {% data variables.product.prodname_github_apps %}, external services, and {% data variables.product.prodname_actions %} to achieve robust, scalable workflows.

For example:

1. An enterprise {% data variables.product.prodname_github_app %} receives a webhook when a new repository is created, and sends the webhook payload to a server where an external service is running.
1. The external service standardizes required settings and provisions resources.
1. The service triggers a {% data variables.product.prodname_actions %} workflow in the repository.
1. The workflow performs CI, deploys templates, or configures scanning.

Each component handles a different layer of automation.

## When to use each type of automation

Use **a {% data variables.product.prodname_github_app %}** when you need:

* Authentication or permission to act across many repositories
* Integration with external systems
* Webhook-driven automations
* Long-lived or enterprise-wide workflows
* Auditability and identity separation

Use **external automations** when you need:

* Logic that runs continuously or outside {% data variables.product.github %}
* Integration with internal systems

Use **{% data variables.product.prodname_actions %}** when you need:

* CI/CD pipelines
* Repository-scoped automation
* Automated checks tied to repository events
* Execution of logic using {% data variables.product.github %}’s runner infrastructure

Use **{% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_actions %} together** when:

* A workflow must act beyond the repository’s default permissions
* A {% data variables.product.prodname_github_app %} needs to trigger a workflow
* External logic orchestrates in-repo execution
* Enterprise-wide policies or workflows require both identity and runtime
