---
title: Removing Dependabot access to public registries
intro: 'Examples of how you can configure {% data variables.product.prodname_dependabot %} to only access private registries by removing calls to public registries.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_dependabot %} for the repository.'
versions:
  feature: dependabot-private-registries
type: how_to
topics:
  - Dependabot
  - Version updates
shortTitle: Remove access to public registries
redirect_from:
  - /code-security/dependabot/working-with-dependabot/configuring-dependabot-to-only-access-private-registries
---

## About configuring {% data variables.product.prodname_dependabot %} to only access private registries

{% data reusables.dependabot.private-registry-support %} For more information about private registry support and configuration, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot)." {% data reusables.dependabot.advanced-private-registry-config-link %}

You can configure {% data variables.product.prodname_dependabot %} to access _only_ private registries by removing calls to public registries. This can only be configured for the ecosystems listed in this article.

{% ifversion dependabot-ghes-no-public-internet %}

{% note %}

**Note:** Before you remove access to public registries from your configuration for {% data variables.product.prodname_dependabot_updates %}, check that your site administrator has set up the {% data variables.product.prodname_dependabot %} runners with access to the private registries you need. For more information, see "[AUTOTITLE](/admin/code-security/managing-supply-chain-security-for-your-enterprise/configuring-dependabot-to-work-with-limited-internet-access)."

{% endnote %}

{% endif %}

## Bundler

To configure the Bundler ecosystem to only access private registries, you can set `replaces-base` as `true` in the `dependabot.yml` file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#rubygems-server)."

The Bundler ecosystem additionally requires a `Gemfile` file with the private registry URL to be checked into the repository.

```yaml
# Example Gemfile

 source "https://private_registry_url"
 ```

## Docker

To configure the Docker ecosystem to only access private registries, you can use these configuration methods.

**Option 1**

Define the private registry configuration in a `dependabot.yml` file without `replaces-base`. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#docker-registry)."

{% note %}

**Note:** Remove `replaces-base: true` from the configuration file.

{% endnote %}

```yaml
version: 2
registries:
  azuretestregistry: # Define access for a private registry
    type: docker-registry
    url: firewallregistrydep.azurecr.io
    username: firewallregistrydep
    password: {% raw %}${{ secrets.AZUREHUB_PASSWORD }}{% endraw %}
```

In the `Dockerfile` file, add the image name in the format of `IMAGE[:TAG]`, where `IMAGE` consists of your username and the name of the repository.

```yaml
 FROM firewallregistrydep.azurecr.io/myreg/ubuntu:22.04
```

**Option 2**

Set `replaces-base` as `true` in the `dependabot.yml` file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#docker-registry)." The registry configured with the `replaces-base` can be used as a mirror or a pull through cache. For further details, see [Registry as a pull through cache](https://docs.docker.com/registry/recipes/mirror/) in the Docker documentation.

## Gradle

To configure the Gradle ecosystem to only access private registries, you can use these configuration methods.

Define the private registry configuration in a `dependabot.yml` file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#maven-repository)."

{% note %}

**Note**: Remove replaces-base: true from the configuration file.

{% endnote %}

Additionally, you also need to specify the private registry URL in the `repositories` section of the `build.gradle` file.

```groovy
# Example build.gradle file

repositories {
    maven {
        url "https://private_registry_url"
    }
}
```

## Maven

To configure the Maven ecosystem to only access private registries, you can use these configuration methods.

**Option 1**

Set `replaces-base` as `true` in the `dependabot.yml` file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#maven-repository)."

**Option 2**

Use only the private registry URL in the `pom.xml` file.

   ```xml
   <project>
   ...
    <repositories>
     <repository>
       <id>central</id>
       <name>your custom repo</name>
       <url>https://private_registry_url</url>
    </repository>
   ...
   </project>
   ```

## Node

### npm

To configure the npm ecosystem to only access private registries, you can use these configuration methods.

**Option 1**

Define the private registry configuration in a `dependabot.yml` file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#npm-registry)."

{% note %}

**Note:** Remove `replaces-base: true` from the configuration file.

{% endnote %}

The npm ecosystem additionally requires a `.npmrc` file with the private registry URL to be checked into the repository.

   ```yaml
    registry=https://private_registry_url
   ```

**Option 2**

If there is no global registry defined in an `.npmrc` file, you can set `replaces-base` as `true` in the `dependabot.yml` file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#npm-registry)."

{% note %}

**Note:** For scoped dependencies (`@my-org/my-dep`), {% data variables.product.prodname_dependabot %} requires that the private registry is defined in the project's `.npmrc` file. To define private registries for individual scopes, use `@myscope:registry=https://private_registry_url`.

{% endnote %}

### Yarn

Yarn Classic and Yarn Berry private registries are both supported by {% data variables.product.prodname_dependabot %}, but {% data variables.product.prodname_dependabot %} requires a different configuration for each ecosystem to access only private registries.

#### Yarn Classic

To configure the Yarn Classic ecosystem to only access private registries, you can use these configuration methods.

**Option 1**

Define the private registry configuration in a `dependabot.yml` file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#npm-registry)."

{% note %}

**Note:** Delete `replaces-base: true` from the configuration file.

{% endnote %}

To ensure the private registry is listed as the dependency source in the project's `yarn.lock` file, run `yarn install` on a machine with private registry access. Yarn should update the `resolved` field to include the private registry URL.

```yaml
encoding@^0.1.11:
  version "0.1.13"
  resolved "https://private_registry_url/encoding/-/encoding-0.1.13.tgz#56574afdd791f54a8e9b2785c0582a2d26210fa9"
  integrity sha512-ETBauow1T35Y/WZMkio9jiM0Z5xjHHmJ4XmjZOq1l/dXz3lr2sRn87nJy20RupqSh1F2m3HHPSp8ShIPQJrJ3A==
  dependencies:
    iconv-lite "^0.6.2"
```

**Option 2**

If the `yarn.lock` file doesn't list the private registry as the dependency source, you can set up Yarn Classic according to the normal package manager instructions:
   1. Define the private registry configuration in a `dependabot.yml` file
   1. Add the registry to a `.yarnrc` file in the project root with the key registry. Alternatively run `yarn config set registry <private registry URL>`.

      ```yaml
      registry https://private_registry_url
      ```

**Option 3**

If there is no global registry defined in a `.yarnrc` file, you can set `replaces-base` as `true` in the `dependabot.yml` file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#npm-registry)."

{% note %}

**Note:** For scoped dependencies (`@my-org/my-dep`), {% data variables.product.prodname_dependabot %} requires that the private registry is defined in the project's `.npmrc` file. To define private registries for individual scopes, use `@myscope:registry=https://private_registry_url`.

{% endnote %}

#### Yarn Berry

To configure the Yarn Berry ecosystem to only access private registries, you can use these configuration methods.

**Option 1**

Define the private registry configuration in a `dependabot.yml` file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#npm-registry)."

{% note %}

**Note:** Delete `replaces-base: true` from the configuration file.

{% endnote %}

To ensure the private registry is listed as the dependency source in the project's `yarn.lock` file, run `yarn install` on a machine with private registry access. Yarn should update the `resolved` field to include the private registry URL.

{% raw %}

```yaml
encoding@^0.1.11:
  version "0.1.13"
  resolved "https://private_registry_url/encoding/-/encoding-0.1.13.tgz#56574afdd791f54a8e9b2785c0582a2d26210fa9"
  integrity sha512-ETBauow1T35Y/WZMkio9jiM0Z5xjHHmJ4XmjZOq1l/dXz3lr2sRn87nJy20RupqSh1F2m3HHPSp8ShIPQJrJ3A==
  dependencies:
    iconv-lite "^0.6.2"
```

{% endraw %}

**Option 2**

If the `yarn.lock` file doesn't list the private registry as the dependency source, you can set up Yarn Berry according to the normal package manager instructions:
   1. Define the private registry configuration in a `dependabot.yml` file
   1. Add the registry to a `.yarnrc.yml` file in the project root with the key `npmRegistryServer`. Alternatively run `yarn config set npmRegistryServer <private registry URL>`.
    ```
    npmRegistryServer: "https://private_registry_url"
    ```

{% note %}

**Note:** For scoped dependencies (`@my-org/my-dep`), {% data variables.product.prodname_dependabot %} requires that the private registry is defined in the project's `.yarnrc` file. To define private registries for individual scopes, use `"@myscope:registry" "https://private_registry_url"`.

{% endnote %}

## Nuget

To allow the Nuget ecosystem to only access private registries, you can configure the `dependabot.yml` file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#nuget-feed)."

The Nuget ecosystem additionally requires a `nuget.config` file to be checked into the repository, with either a `< clear />` tag in `<packageSources>` section or a key `nuget.org` as true in the `disabledPackageSources` section of the `nuget.config` file.

This is an example of a `< clear />` tag in the `packageSources` section of the `nuget.config`.

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
 <packageSources>
   < clear />
   <add key="example-nuget" value="https://private_registry_url/nuget/example-nuget/index.json" />
 </packageSources>
</configuration>
```

This is an example of adding key `nuget.org` as true to the `disabledPackageSources` section of the `nuget.config`

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <packageSources>
    <add key="example-nuget" value="https://private_registry_url/nuget/example-nuget/index.json" />
  </packageSources>
  <disabledPackageSources>
    <add key="nuget.org" value="true" />
  </disabledPackageSources>
</configuration>
```

To configure {% data variables.product.prodname_dependabot %} to access both private _and_ public feeds, view the following `dependabot.yml` example which includes the configured `public` feed under `registries`:

```yaml
version: 2
registries:
  nuget-example:
    type: nuget-feed
    url: https://nuget.example.com/v3/index.json
    username: ${{ secrets.USERNAME }}
    password: ${{ secrets.PASSWORD }}
  public:
    type: nuget-feed
    url: https://api.nuget.org/v3/index.json
updates:
  - package-ecosystem: nuget
    directory: "/"
    registries: "*"
    schedule:
      interval: daily
```

## Python

Pip, Pip-compile, Pipenv, and Poetry are the four package managers that the Python ecosystem currently supports.

### Pip

To configure the Pip ecosystem to only access private registries, you can use these configuration methods.

**Option 1**

Define the private registry configuration in a `dependabot.yml` file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#npm-registry)."

{% note %}

**Note:** Delete `replaces-base: true` from the configuration file.

{% endnote %}

Add the private registry URL to the `[global]` section of the `pip.conf` file and check the file into the repository.

   ```yaml
   [global]
   timeout = 60
   index-url = https://private_registry_url
   ```

**Option 2**

Set `replaces-base` as `true` in the `dependabot.yml` file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#python-index)."

### Pip-compile

To configure the Pip-compile ecosystem to only access private registries, you can use these configuration methods.

**Option 1**

Set `replaces-base` as `true` in the `dependabot.yml` file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#python-index)."

**Option 2**

Define the private registry configuration in a `dependabot.yml` file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#npm-registry)."

{% note %}

**Note:** Delete `replaces-base: true` from the configuration file.

{% endnote %}

Add the private registry URL to the `requirements.txt` file and check the file into the repository.

```yaml
--index-url https://private_registry_url
```

### Pipenv

To configure Pipenv to only access private registries, remove `replaces-base` from the `dependabot.yml` file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#python-index)."

{% note %}

**Note:** Delete `replaces-base: true` from the configuration file.

{% endnote %}

Add the private registry URL to the `[[source]]` section of the `Pipfile` file and check the file into the repository.

```yaml
[[source]]
url = "https://private_registry_url"
verify_ssl = true
name = "pypi"
```

### Poetry

To configure Poetry to only access private registries, set `replaces-base` as `true` in the `dependabot.yml` file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#python-index)."

Add the private registry url to the `[[tool.poetry.source]]` section of the `pyproject.toml` file and checked it in the repository.

```yaml
[[tool.poetry.source]]
name = "private"
url = "https://private_registry_url"
default = true
```
