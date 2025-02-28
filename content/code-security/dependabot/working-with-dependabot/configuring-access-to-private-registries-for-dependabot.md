---
title: Configuring access to private registries for Dependabot
intro: 'You can configure {% data variables.product.prodname_dependabot %} to access dependencies stored in private registries. You can store authentication information, like passwords and access tokens, as encrypted secrets and then reference these in the {% data variables.product.prodname_dependabot %} configuration file.{% ifversion dependabot-on-actions-self-hosted %} If you have registries on private networks, you can also configure {% data variables.product.prodname_dependabot %} access when running {% data variables.product.prodname_dependabot %} on self-hosted runners.{% endif %}'
permissions: '{% data reusables.permissions.dependabot-various-tasks %}'
redirect_from:
  - /github/administering-a-repository/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot
  - /code-security/dependabot/working-with-dependabot/managing-encrypted-secrets-for-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Secret store
  - Repositories
  - Dependencies
shortTitle: Configure access to private registries
---

## About private registries

{% data variables.product.prodname_dependabot_version_updates %} keeps your dependencies up-to-date and {% data variables.product.prodname_dependabot_security_updates %} updates vulnerable dependencies. {% data variables.product.prodname_dependabot %} can access public registries. In addition, you can give {% data variables.product.prodname_dependabot %} access to private package registries and private {% data variables.product.github %} repositories so that you can keep your private and innersource dependencies as up-to-date and secure as your public dependencies.

In most ecosystems, private dependencies are usually published to private package registries. These private registries are similar to their public equivalents, but they require authentication.

For specific ecosystems, you can configure {% data variables.product.prodname_dependabot %} to access _only_ private registries by removing calls to public registries. For more information, see [AUTOTITLE](/code-security/dependabot/maintain-dependencies/removing-dependabot-access-to-public-registries).

{% ifversion dependabot-on-actions-self-hosted %}To allow {% data variables.product.prodname_dependabot %} access to registries hosted privately or restricted to internal networks, configure {% data variables.product.prodname_dependabot %} to run on {% data variables.product.prodname_actions %} self-hosted runners. For more information, see [AUTOTITLE](/code-security/dependabot/maintain-dependencies/managing-dependabot-on-self-hosted-runners).{% endif %}

## Configuring private registries

You configure {% data variables.product.prodname_dependabot %}'s access to private registries in the `dependabot.yml` file.
The top-level `registries` key is optional and specifies authentication details.

{% data reusables.dependabot.dependabot-updates-registries %}

{% data reusables.dependabot.dependabot-updates-registries-options %}

For more information about the configuration options that are available and about the supported types, see [AUTOTITLE](/code-security/dependabot/working-with-dependabot/dependabot-options-reference#top-level-registries-key).

## Storing credentials for Dependabot to use

To give {% data variables.product.prodname_dependabot %} access to the private registries supported by {% data variables.product.prodname_dotcom %}, you store the registry’s access token or secret in the secret store for your repository or organization.

### About encrypted secrets for {% data variables.product.prodname_dependabot %}

{% data variables.product.prodname_dependabot %} secrets are encrypted credentials that you create at either the organization level or the repository level.
When you add a secret at the organization level, you can specify which repositories can access the secret. You can use secrets to allow {% data variables.product.prodname_dependabot %} to update dependencies located in private package registries. When you add a secret, it's encrypted before it reaches {% data variables.product.prodname_dotcom %} and it remains encrypted until it's used by {% data variables.product.prodname_dependabot %} to access a private package registry.

{% data variables.product.prodname_dependabot %} secrets also include secrets that are used by {% data variables.product.prodname_actions %} workflows triggered by {% data variables.product.prodname_dependabot %} pull requests. {% data variables.product.prodname_dependabot %} itself may not use these secrets, but the workflows require them. For more information, see [AUTOTITLE](/code-security/dependabot/troubleshooting-dependabot/troubleshooting-dependabot-on-github-actions#accessing-secrets).

After you add a {% data variables.product.prodname_dependabot %} secret, you can reference it in the `dependabot.yml` configuration file like this: {% raw %}`${{secrets.NAME}}`{% endraw %}, where "NAME" is the name you chose for the secret. For example:

{% raw %}

```yaml copy
password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```

{% endraw %}

#### Naming your secrets

The name of a {% data variables.product.prodname_dependabot %} secret:
* Can only contain alphanumeric characters (`[A-Z]`, `[0-9]`) or underscores (`_`). Spaces are not allowed. If you enter lowercase letters these are changed to uppercase.
* Must not start with the `GITHUB_` prefix.
* Must not start with a number.

### Adding a repository secret for {% data variables.product.prodname_dependabot %}

{% data reusables.repositories.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.dependabot.sidebar-secret %}
1. Click **New repository secret**.
1. Type a name for your secret in the **Name** input box.
1. Enter the value for your secret.
1. Click **Add secret**.

   The name of the secret is listed on the Dependabot secrets page. You can click **Update** to change the secret value. You can click **Remove** to delete the secret.

### Adding an organization secret for {% data variables.product.prodname_dependabot %}

When creating a secret in an organization, you can use a policy to limit which repositories can access that secret. For example, you can grant access to all repositories, or limit access to only private repositories or a specified list of repositories.

{% data reusables.organizations.secrets-permissions-statement %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.dependabot.sidebar-secret %} {% ifversion org-private-registry %}Ignore the "Private Registries" option, this is used only by {% data variables.product.prodname_code_scanning %} default setup.{% endif %}
1. Click **New organization secret**.
1. Type a name for your secret in the **Name** input box.
1. Enter the **Value** for your secret.
1. From the **Repository access** dropdown list, choose an access policy.
1. If you chose **Selected repositories**:

   * Click {% octicon "gear" aria-label="selected repositories" %}.
   * In the dialog box, select the repositories that can access this secret.
   * Click **Update selection**.

1. Click **Add secret**.

   The name of the secret is listed on the {% data variables.product.prodname_dependabot %} secrets page. You can click **Update** to change the secret value or its access policy. You can click **Remove** to delete the secret.

{% ifversion dependabot-on-actions-self-hosted %}

## Configuring firewall IP rules

You can add {% data variables.product.prodname_dependabot %}-related IP addresses to your registries IP allow list.

If your private registry is configured with an IP allow list, you can find the IP addresses {% data variables.product.prodname_dependabot %} uses to access the registry in the meta API endpoint, under the `dependabot` key. If you run {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} self-hosted runners, you should instead use the IP addresses under the `actions` key. For more information, see [AUTOTITLE](/rest/meta/meta) and [AUTOTITLE](/code-security/dependabot/working-with-dependabot/about-dependabot-on-github-actions-runners).

{% endif %}

## Allowing external code execution

When you give {% data variables.product.prodname_dependabot %} access to one or more registries, external code execution is automatically disabled to protect your code from compromised packages. However, some version updates may fail.

If you need to allow {% data variables.product.prodname_dependabot %} to access a private package registry and enable limited external code execution, you can set `insecure-external-code-execution` to `allow`. Allowing {% data variables.product.prodname_dependabot %} to execute external code in the manifest during updates is not as scary as it sounds:

* Any external code execution will only have access to the package managers in the registries associated with the enclosing `updates` setting.
* There is no access allowed to any of the registries defined in the top level `registries` configuration.

It is common for tooling, such as `bundler`, `mix`, `pip`, and `swift`, to allow the execution of external code by default.

In this example, the configuration file allows {% data variables.product.prodname_dependabot %} to access the `ruby-github` private package registry. In the same `updates`setting, `insecure-external-code-execution`is set to `allow`, which means that the code executed by dependencies will only access the `ruby-github` registry, and not the `dockerhub` registry.
{% raw %}

```yaml copy
# Allow external code execution when updating dependencies from private registries

version: 2
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
updates:
  - package-ecosystem: "bundler"
    directory: "/rubygems-server"
    insecure-external-code-execution: allow
    registries: "*"
    schedule:
      interval: "monthly"
```

{% endraw %}

## Supported private registeries

Examples of how to configure access to the private registries supported by {% data variables.product.prodname_dependabot %}.

{% ifversion dependabot-updates-cargo-private-registry-support %}
* [`cargo-registry`](#cargo-registry){% endif %}
* [`composer-repository`](#composer-repository)
* [`docker-registry`](#docker-registry)
* [`git`](#git)
* [`hex-organization`](#hex-organization)
* [`hex-repository`](#hex-repository)
* [`maven-repository`](#maven-repository)
* [`npm-registry`](#npm-registry)
* [`nuget-feed`](#nuget-feed){% ifversion dependabot-updates-pub-private-registry %}
* [`pub-repository`](#pub-repository){% endif %}
* [`python-index`](#python-index)
* [`rubygems-server`](#rubygems-server)
* [`terraform-registry`](#terraform-registry)

{% ifversion dependabot-updates-cargo-private-registry-support %}

### `cargo-registry`

The `cargo-registry` type supports a token.

{% data reusables.dependabot.dependabot-updates-path-match %}

{% data reusables.dependabot.cargo-private-registry-config-example %}

{% endif %}

### `composer-repository`

The `composer-repository` type supports username and password. {% data reusables.dependabot.password-definition %}

{% data reusables.dependabot.dependabot-updates-path-match %}

{% raw %}

```yaml copy
registries:
  composer:
    type: composer-repository
    url: https://repo.packagist.com/example-company/
    username: octocat
    password: ${{secrets.MY_PACKAGIST_PASSWORD}}
```

{% endraw %}

### `docker-registry`

{% data variables.product.prodname_dependabot %} works with any container registries that implement the OCI container registry spec. For more information, see [https://github.com/opencontainers/distribution-spec/blob/main/spec.md](https://github.com/opencontainers/distribution-spec/blob/main/spec.md). {% data variables.product.prodname_dependabot %} supports authentication to private registries via a central token service or HTTP Basic Auth. For further details, see [Token Authentication Specification](https://docs.docker.com/registry/spec/auth/token/) in the Docker documentation and [Basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) on Wikipedia.

The `docker-registry` type supports username and password. {% data reusables.dependabot.password-definition %}

{% data reusables.dependabot.dependabot-updates-path-match %}

{% raw %}

```yaml copy
registries:
  dockerhub:
    type: docker-registry
    url: https://registry.hub.docker.com
    username: octocat
    password: ${{secrets.MY_DOCKERHUB_PASSWORD}}
    replaces-base: true
```

{% endraw %}

The `docker-registry` type can also be used to pull from private Amazon ECR using static AWS credentials.

{% raw %}

```yaml copy
registries:
  ecr-docker:
    type: docker-registry
    url: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
    username: ${{secrets.ECR_AWS_ACCESS_KEY_ID}}
    password: ${{secrets.ECR_AWS_SECRET_ACCESS_KEY}}
    replaces-base: true
```

{% endraw %}

### `git`

The `git` type supports username and password. {% data reusables.dependabot.password-definition %}

{% raw %}

```yaml copy
registries:
  github-octocat:
    type: git
    url: https://github.com
    username: x-access-token
    password: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
```

{% endraw %}

### `hex-organization`

The `hex-organization` type supports organization and key.

{% data reusables.dependabot.dependabot-updates-path-match %}

{% raw %}

```yaml copy
registries:
  github-hex-org:
    type: hex-organization
    organization: github
    key: ${{secrets.MY_HEX_ORGANIZATION_KEY}}
```

{% endraw %}

### `hex-repository`

The `hex-repository` type supports an authentication key.

`repo` is a required field, which must match the name of the repository used in your dependency declaration.

The `public-key-fingerprint` is an optional configuration field, representing the fingerprint of the public key for the Hex repository. `public-key-fingerprint` is used by Hex to establish trust with the private repository. The `public-key-fingerprint` field can be either listed in plaintext or stored as a {% data variables.product.prodname_dependabot %} secret.

{% raw %}

```yaml copy
registries:
   github-hex-repository:
     type: hex-repository
     repo: private-repo
     url: https://private-repo.example.com
     auth-key: ${{secrets.MY_AUTH_KEY}}
     public-key-fingerprint: ${{secrets.MY_PUBLIC_KEY_FINGERPRINT}}
```

{% endraw %}

### `maven-repository`

The `maven-repository` type supports username and password. {% data reusables.dependabot.password-definition %}

{% data reusables.dependabot.dependabot-updates-path-match %}

{% raw %}

```yaml copy
registries:
  maven-artifactory:
    type: maven-repository
    url: https://acme.jfrog.io/artifactory/my-maven-registry
    username: octocat
    password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```

{% endraw %}

### `npm-registry`

The `npm-registry` type supports username and password, or token. {% data reusables.dependabot.password-definition %}

When using username and password, your `.npmrc`'s auth token may contain a `base64` encoded `_password`; however, the password referenced in your {% data variables.product.prodname_dependabot %} configuration file must be the original (unencoded) password.

> [!NOTE]
> When using `npm.pkg.github.com`, don't include a path. Instead use the `https://npm.pkg.github.com` URL without a path.

{% raw %}

```yaml copy
registries:
  npm-npmjs:
    type: npm-registry
    url: https://registry.npmjs.org
    username: octocat
    password: ${{secrets.MY_NPM_PASSWORD}}  # Must be an unencoded password
    replaces-base: true
```

{% endraw %}

{% raw %}

```yaml copy
registries:
  npm-github:
    type: npm-registry
    url: https://npm.pkg.github.com
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
    replaces-base: true
```

{% endraw %}

For security reasons, {% data variables.product.prodname_dependabot %} does not set environment variables. Yarn (v2 and later) requires that any accessed environment variables are set. When accessing environment variables in your `.yarnrc.yml` file, you should provide a fallback value such as {% raw %}`${ENV_VAR-fallback}`{% endraw %} or {% raw %}`${ENV_VAR:-fallback}`{% endraw %}. For more information, see [Yarnrc files](https://yarnpkg.com/configuration/yarnrc) in the Yarn documentation.

### `nuget-feed`

The `nuget-feed` type supports username and password, or token. {% data reusables.dependabot.password-definition %}

{% raw %}

```yaml copy
registries:
  nuget-example:
    type: nuget-feed
    url: https://nuget.example.com/v3/index.json
    username: octocat@example.com
    password: ${{secrets.MY_NUGET_PASSWORD}}
```

{% endraw %}

{% raw %}

```yaml copy
registries:
  nuget-azure-devops:
    type: nuget-feed
    url: https://pkgs.dev.azure.com/.../_packaging/My_Feed/nuget/v3/index.json
    username: octocat@example.com
    password: ${{secrets.MY_AZURE_DEVOPS_TOKEN}}
```

{% endraw %}

{% ifversion dependabot-updates-pub-private-registry %}

### `pub-repository`

The `pub-repository` type supports a URL and a token.

{% raw %}

```yaml copy
registries:
  my-pub-registry:
    type: pub-repository
    url: https://example-private-pub-repo.dev/optional-path
    token: ${{secrets.MY_PUB_TOKEN}}
updates:
  - package-ecosystem: "pub"
    directory: "/"
    schedule:
      interval: "weekly"
    registries:
      - my-pub-registry
```

{% endraw %}

{% endif %}

### `python-index`

The `python-index` type supports username and password, or token. {% data reusables.dependabot.password-definition %}

{% data reusables.dependabot.dependabot-updates-path-match %}

{% raw %}

```yaml copy
registries:
  python-example:
    type: python-index
    url: https://example.com/_packaging/my-feed/pypi/example
    username: octocat
    password: ${{secrets.MY_BASIC_AUTH_PASSWORD}}
    replaces-base: true
```

{% endraw %}

{% raw %}

```yaml copy
registries:
  python-azure:
    type: python-index
    url: https://pkgs.dev.azure.com/octocat/_packaging/my-feed/pypi/example
    username: octocat@example.com
    password: ${{secrets.MY_AZURE_DEVOPS_TOKEN}}
    replaces-base: true
```

{% endraw %}

### `rubygems-server`

The `rubygems-server` type supports username and password, or token. {% data reusables.dependabot.password-definition %}

{% data reusables.dependabot.dependabot-updates-path-match %}

{% raw %}

```yaml copy
registries:
  ruby-example:
    type: rubygems-server
    url: https://rubygems.example.com
    username: octocat@example.com
    password: ${{secrets.MY_RUBYGEMS_PASSWORD}}
    replaces-base: true
```

{% endraw %}

{% raw %}

```yaml copy
registries:
  ruby-github:
    type: rubygems-server
    url: https://rubygems.pkg.github.com/octocat/github_api
    token: ${{secrets.MY_GITHUB_PERSONAL_TOKEN}}
    replaces-base: true
```

{% endraw %}

### `terraform-registry`

The `terraform-registry` type supports a token.

{% raw %}

```yaml copy
registries:
  terraform-example:
    type: terraform-registry
    url: https://terraform.example.com
    token: ${{secrets.MY_TERRAFORM_API_TOKEN}}
```

{% endraw %}
