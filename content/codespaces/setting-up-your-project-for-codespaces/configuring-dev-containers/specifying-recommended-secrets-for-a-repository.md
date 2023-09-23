---
title: Specifying recommended secrets for a repository
shortTitle: Specifying recommended secrets
intro: 'You can add a setting to your dev container configuration that will prompt people to set specific secrets when they create a codespace.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
---

## About recommended secrets

If a project needs user-specific secrets to be set up, you can prompt people to do this when they create a codespace. You do this by adding a setting to a dev container configuration file for the repository.

After you specify recommended secrets, if people have not already created those secrets in their personal settings for {% data variables.product.prodname_codespaces %}, they will be prompted to do so when they use the advanced options method of creating a codespace. This is done on {% data variables.product.prodname_dotcom_the_website %} by clicking the **{% octicon "code" aria-hidden="true" %} Code** button, then clicking the **Codespaces** tab, then selecting {% octicon "kebab-horizontal" aria-label="Codespace repository configuration" %} and clicking **New with options**.

![Screenshot of the options dropdown in the "{% data variables.product.prodname_codespaces %}" tab, with the option "New with options" highlighted.](/assets/images/help/codespaces/default-machine-type.png)

Recommended secrets are listed at the bottom of the page.

<img src="/assets/images/help/codespaces/recommended-secrets.png" style="max-height:50rem"  alt='Screenshot of the "Create codespace" page with four recommended secrets highlighted with a dark orange outline.' />

{% note %}

**Note**: The names of the recommended secrets are only listed on this page when the container configuration on the selected branch specifies these secrets.

{% endnote %}

Each recommended secret is displayed in one of three ways:

- If the person has not set the recommended secret in their {% data variables.product.prodname_codespaces %} settings, an input box is displayed, allowing them to create the secret now. A description and link to more information are displayed if you have configured them. Entering a value is optional.
- If the person has already created the recommended secret but has not associated it with this repository, they can select a checkbox to add this association. Doing so is optional.
- If the person has already created the recommended secret and associated it with this repository, a preselected checkbox is displayed.

### When to specify recommended secrets for a project

You should use recommended secrets for secrets that the user who creates the codespace, rather than the owner of the repository or organization, must provide. For example, if you have a public project, and users must provide a personal API key to run the application in your project, you can specify a recommended secret so that users will be prompted to provide the key as the value of the secret when they use the advanced options page to create a codespace.

Alternatively, for secrets that the owner of the repository or organization can provide, such as API keys shared across a team, you can set secrets at the level of the repository or organization. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/managing-secrets-for-your-repository-and-organization-for-github-codespaces)."

## Specifying recommended secrets in the dev container configuration

{% data reusables.codespaces.edit-devcontainer-json %}
1. Edit the `devcontainer.json` file, adding the `secrets` property at the top level of the file, within the enclosing JSON object. For example:

   ```json copy
   "secrets": {
     "NAME_OF_SECRET_1": {
       "description": "This is the description of the secret.",
       "documentationUrl": "https://example.com/link/to/info"
     },
     "NAME_OF_SECRET_2": { }
   }
   ```

1. Add a property within `secrets` for each secret you want to recommend.  For example, change `NAME_OF_SECRET_1` and `NAME_OF_SECRET_2`, in the previous code example, to the names of the secrets that people should create in their personal settings for {% data variables.product.prodname_codespaces %}.
1. Optionally, supply a description for each secret and a URL for more information about this secret.

   You can omit `description` and `documentationUrl`, as shown by `NAME_OF_SECRET_2` in the previous code example.

1. Specify additional secrets, as required.
1. Save the file and commit your changes to the required branch of the repository.

## Further reading

- "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository?tool=webui#creating-a-codespace-for-a-repository)"
