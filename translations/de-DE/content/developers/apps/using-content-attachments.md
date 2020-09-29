---
title: Using content attachments
intro: Content attachments allow a GitHub App to provide more information in GitHub for URLs that link to registered domains. GitHub renders the information provided by the app under the URL in the body or comment of an issue or pull request.
redirect_from:
  - /apps/using-content-attachments
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.pre-release-program.content-attachments-public-beta %}

### About content attachments

A GitHub App can register domains that will trigger `content_reference` events. When someone includes a URL that links to a registered domain in the body or comment of an issue or pull request, the app receives the [`content_reference` webhook](/webhooks/event-payloads/#content_reference). You can use content attachments to visually provide more context or data for the URL added to an issue or pull request. The URL must be a fully-qualified URL, starting with either `http://` or `https://`. URLs that are part of a markdown link are ignored and don't trigger the `content_reference` event.

Before you can use the {% data variables.product.prodname_unfurls %} API, you'll need to configure content references for your GitHub App:
* Give your app `Read & write` permissions for "Content references."
* Register up to 5 valid, publicly accessible domains when configuring the "Content references" permission. Do not use IP addresses when configuring content reference domains. You can register a domain name (example.com) or a subdomain (subdomain.example.com).
* Subscribe your app to the "Content reference" event.

Once your app is installed on a repository, issue or pull request comments in the repository that contain URLs for your registered domains will generate a content reference event. The app must create a content attachment within six hours of the content reference URL being posted.

Content attachments will not retroactively update URLs. It only works for URLs added to issues or pull requests after you configure the app using the requirements outlined above and then someone installs the app on their repository.

See "[Creating a GitHub App](/apps/building-github-apps/creating-a-github-app/)" or "[Editing a GitHub App's permissions](/apps/managing-github-apps/editing-a-github-app-s-permissions/)" for the steps needed to configure GitHub App permissions and event subscriptions.

### Implementing the content attachment flow

The content attachment flow shows you the relationship between the URL in the issue or pull request, the `content_reference` webhook event, and the REST API endpoint you need to call to update the issue or pull request with additional information:

**Step 1.** Set up your app using the guidelines outlined in [About content attachments](#about-content-attachments). You can also use the [Probot App example](#example-using-probot-and-github-app-manifests) to get started with content attachments.

**Step 2.** Add the URL for the domain you registered to an issue or pull request. You must use a fully qualified URL that starts with `http://` or `https://`.

![URL added to an issue](/assets/images/github-apps/github_apps_content_reference.png)

**Step 3.** Your app will receive the [`content_reference` webhook](/webhooks/event-payloads/#content_reference) with the action `created`.

``` json
{
  "action": "created",
  "content_reference": {
    "id": 17,
    "node_id": "MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA5",
    "reference": "errors.ai"
  },
  "repository": {...},
  "sender": {...},
  "installation": {
    "id": 371641,
    "node_id": "MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMzcxNjQx"
  }
}
```

**Step 4.** The app uses the `content_reference` `id`, to [Create a content attachment](/v3/apps/installations/#create-a-content-attachment) using the REST API. You'll also need the `installation` `id` to authenticate as a [GitHub App installation](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

{% data reusables.pre-release-program.corsair-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

The `body` parameter can contain markdown:

    ```shell
    curl -X POST \
      https://api.github.com/content_references/1512/attachments \
      -H 'Accept: application/vnd.github.corsair-preview+json' \
      -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
      -d '{
        "title": "[A-1234] Error found in core/models.py file",
        "body": "You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
    }'
    ```

For more information about creating an installation token, see "[Authenticating as a GitHub App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)."

**Step 5.** You'll see the new content attachment appear under the link in a pull request or issue comment:

![Content attached to a reference in an issue](/assets/images/github-apps/github_apps_content_reference_attachment.png)

### Using content attachments in GraphQL
We provide the `node_id` in the [`content_reference` webhook](/webhooks/event-payloads/#content_reference) event so you can refer to the `createContentAttachment` mutation in the GraphQL API.

{% data reusables.pre-release-program.corsair-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

Ein Beispiel:

``` graphql
mutation {
  createContentAttachment(input: {
    contentReferenceId: "MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1",
    title: "[A-1234] Error found in core/models.py file",
    body:"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
  }) {
    contentAttachment {
      ... on ContentAttachment {
        id
        title
        body
      }
    }
  }
}
```
Example cURL:

```shell
curl -X "POST" "https://api.github.com/graphql" \
     -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
     -H 'Accept: application/vnd.github.corsair-preview+json' \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "query": "mutation {\\n  createContentAttachment(input:{contentReferenceId: \\"MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1\\", title:\\"[A-1234] Error found in core/models.py file\\", body:\\"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n\self.save()\\"}) {\\n    contentAttachment {\\n      id,\\n      title,\\n      body\\n    }\\n  }\\n}"
}'
```

For more information on `node_id`, see "[Using Global Node IDs](/v4/guides/using-global-node-ids/)."

### Example using Probot and GitHub App Manifests

To quickly setup a GitHub App that can use the {% data variables.product.prodname_unfurls %} API, you can use [Probot](https://probot.github.io/). See "[Creating GitHub Apps from a manifest](/apps/building-github-apps/creating-github-apps-from-a-manifest/)" to learn how Probot uses GitHub App Manifests.

To create a Probot App, follow these steps:

1. [Generate a new GitHub App](https://probot.github.io/docs/development/#generating-a-new-app).
2. Open the project you created, and customize the settings in the `app.yml` file. Subscribe to the `content_reference` event and enable `content_references` write permissions:

   ``` yml

    default_events:
    - content_reference
    # The set of permissions needed by the GitHub App. The format of the object uses
    # the permission name for the key (for example, issues) and the access type for
    # the value (for example, write).
    # Valid values are `read`, `write`, and `none`
    default_permissions:
      content_references: write

    content_references:
    - type: domain
      value: errors.ai
    - type: domain
      value: example.org
   ```

3. Add this code to the `index.js` file to handle `content_reference` events and call the REST API:

    ``` javascript
    module.exports = app => {
      // Your code here
      app.log('Yay, the app was loaded!')
       app.on('content_reference.created', async context => {
        console.log('Content reference created!', context.payload)
         // Call the "Create a content reference" REST endpoint
        await context.github.request({
          method: 'POST',
          headers: { accept: 'application/vnd.github.corsair-preview+json' },
          url: `/content_references/${context.payload.content_reference.id}/attachments`,
          // Parameters
          title: '[A-1234] Error found in core/models.py file',
          body: 'You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\nself.save()'
        })
      })
    }
    ```

4. [Run the GitHub App locally](https://probot.github.io/docs/development/#running-the-app-locally). Navigate to [localhost:3000](http://localhost:3000), and click the **Register GitHub App** button:

   ![Register a Probot GitHub App](/assets/images/github-apps/github_apps_probot-registration.png)

5. Install the app on a test repository.
6. Create an issue in your test repository.
7. Add a comment to the issue you opened that includes the URL you configured in the `app.yml` file.
8. Take a look at the issue comment and you'll see an update that looks like this:

   ![Content attached to a reference in an issue](/assets/images/github-apps/github_apps_content_reference_attachment.png)
