---
title: Deployments
intro: The Deployments API allows you to create and delete deployments and deployment environments.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the deployments API

Deployments are requests to deploy a specific ref (branch, SHA, tag). GitHub dispatches a [`deployment` event](/developers/webhooks-and-events/webhook-events-and-payloads#deployment) that external services can listen for and act on when new deployments are created. Deployments enable developers and organizations to build loosely coupled tooling around deployments, without having to worry about the implementation details of delivering different types of applications (e.g., web, native).

Deployment statuses allow external services to mark deployments with an `error`, `failure`, `pending`, `in_progress`, `queued`, or `success` state that systems listening to [`deployment_status` events](/developers/webhooks-and-events/webhook-events-and-payloads#deployment_status) can consume.

Deployment statuses can also include an optional `description` and `log_url`, which are highly recommended because they make deployment statuses more useful. The `log_url` is the full URL to the deployment output, and
the `description` is a high-level summary of what happened with the deployment.

GitHub dispatches `deployment` and `deployment_status` events when new deployments and deployment statuses are created. These events allows third-party integrations to receive respond to deployment requests and update the status of a deployment as progress is made.

Below is a simple sequence diagram for how these interactions would work.

```
+---------+             +--------+            +-----------+        +-------------+
| Tooling |             | GitHub |            | 3rd Party |        | Your Server |
+---------+             +--------+            +-----------+        +-------------+
     |                      |                       |                     |
     |  Create Deployment   |                       |                     |
     |--------------------->|                       |                     |
     |                      |                       |                     |
     |  Deployment Created  |                       |                     |
     |<---------------------|                       |                     |
     |                      |                       |                     |
     |                      |   Deployment Event    |                     |
     |                      |---------------------->|                     |
     |                      |                       |     SSH+Deploys     |
     |                      |                       |-------------------->|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
     |                      |                       |   Deploy Completed  |
     |                      |                       |<--------------------|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
```

Keep in mind that GitHub is never actually accessing your servers. It's up to your third-party integration to interact with deployment events. Multiple systems can listen for deployment events, and it's up to each of those systems to decide whether they're responsible for pushing the code out to your servers, building native code, etc.

Note that the `repo_deployment` [OAuth scope](/developers/apps/scopes-for-oauth-apps) grants targeted access to deployments and deployment statuses **without** granting access to repository code, while the {% ifversion not ghae %}`public_repo` and{% endif %}`repo` scopes grant permission to code as well.

### Inactive deployments

When you set the state of a deployment to `success`, then all prior non-transient, non-production environment deployments in the same repository with the same environment name will become `inactive`. To avoid this, you can set `auto_inactive` to `false` when creating the deployment status.

You can communicate that a transient environment no longer exists by setting its `state` to `inactive`.  Setting the `state` to `inactive` shows the deployment as `destroyed` in {% data variables.product.prodname_dotcom %} and removes access to it.
