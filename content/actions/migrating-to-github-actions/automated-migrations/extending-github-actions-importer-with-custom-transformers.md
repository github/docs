---
title: Extending GitHub Actions Importer with custom transformers
intro: '{% data variables.product.prodname_actions_importer %} offers the ability to extend its built-in mapping.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Migration
  - CI
  - CD
shortTitle: 'Extending GitHub Actions Importer'
---

[Legal notice](#legal-notice)

## About custom transformers

{% data variables.product.prodname_actions_importer %} offers the ability to extend its built-in mapping by creating custom transformers. Custom transformers can be used to:

- Convert items that {% data variables.product.prodname_actions_importer %} does not automatically convert, or modify how items are converted. For more information, see "[Creating custom transformers for items](#creating-custom-transformers-for-items)."
- Convert references to runners to use different runner labels. For more information, see "[Creating custom transformers for runners](#creating-custom-transformers-for-runners)."
- Convert environment variable values from your existing pipelines to {% data variables.product.prodname_actions %} workflows. For more information, see "[Creating custom transformers for environment variables](#creating-custom-transformers-for-environment-variables)."

## Using custom transformers with {% data variables.product.prodname_actions_importer %}

A custom transformer contains mapping logic that {% data variables.product.prodname_actions_importer %} can use to transform your plugins, tasks, runner labels, or environment variables to work with {% data variables.product.prodname_actions %}. Custom transformers are written with a domain-specific language (DSL) built on top of Ruby, and are defined within a file with the `.rb` file extension.

You can use the `--custom-transformers` CLI option to specify which custom transformer files to use with the `audit`, `dry-run`, and `migrate` commands.

For example, if custom transformers are defined in a file named `transformers.rb`, you can use the following command to use them with {% data variables.product.prodname_actions_importer %}:

```shell
gh actions-importer ... --custom-transformers transformers.rb
```

Alternatively, you can use the glob pattern syntax to specify multiple custom transformer files. For example, if multiple custom transformer files are within a directory named `transformers`, you can provide them all to {% data variables.product.prodname_actions_importer %} with the following command:

```shell
gh actions-importer ... --custom-transformers transformers/*.rb
```

{% note %}

**Note:** When you use custom transformers, the custom transformer files must reside in the same directory, or in subdirectores, from where the `gh actions-importer` command is run.

{% endnote %}

## Creating custom transformers for items

You can create custom transformers that {% data variables.product.prodname_actions_importer %} will use when converting existing build steps or triggers to their equivalent in {% data variables.product.prodname_actions %}. This is especially useful when:

- {% data variables.product.prodname_actions_importer %} doesn't automatically convert an item.
- You want to change how an item is converted by {% data variables.product.prodname_actions_importer %}.
- Your existing pipelines use custom or proprietary extensions, such as shared libraries in Jenkins, and you need to define how these steps should function in {% data variables.product.prodname_actions %}.

{% data variables.product.prodname_actions_importer %} uses custom transformers that are defined using a DSL built on top of Ruby. In order to create custom transformers for build steps and triggers:

- Each custom transformer file must contain at least one `transform` method.
- Each `transform` method must return a `Hash`, an array of `Hash`'s, or `nil`. This returned value will correspond to an action defined in YAML. For more information about actions, see "[AUTOTITLE](/actions/learn-github-actions/understanding-github-actions)."

### Example custom transformer for a build step

The following example converts a build step that uses the "buildJavascriptApp" identifier to run various `npm` commands:

```ruby copy
transform "buildJavascriptApp" do |item|
  command = ["build", "package", "deploy"].map do |script|
    "npm run #{script}"
  end

  {
    name: "build javascript app",
    run: command.join("\n")
  }
end
```

The above example results in the following {% data variables.product.prodname_actions %} workflow step. It is comprised of converted build steps that had a `buildJavascriptApp` identifier:

```yaml
- name: build javascript app
  run: |
    npm run build
    npm run package
    npm run deploy
```

The `transform` method uses the identifier of the build step from your source CI/CD instance in an argument. In this example, the identifier is `buildJavascriptLibrary`. You can also use comma-separated values to pass multiple identifiers to the `transform` method. For example, `transform "buildJavascriptApp", "buildTypescriptApp" { |item| ... }`.

{% note %}

**Note**: The data structure of `item` will be different depending on the CI/CD platform and the type of item being converted.

{% endnote %}

## Creating custom transformers for runners

You can customize the mapping between runners in your source CI/CD instance and their equivalent {% data variables.product.prodname_actions %} runners.

{% data variables.product.prodname_actions_importer %} uses custom transformers that are defined using a DSL built on top of Ruby. To create custom transformers for runners:

- The custom transformer file must have at least one `runner` method.
- The `runner` method accepts two parameters. The first parameter is the source CI/CD instance's runner label, and the second parameter is the corresponding {% data variables.product.prodname_actions %} runner label. {% ifversion not ghae %}For more information on {% data variables.product.prodname_actions %} runners, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)."{% endif %}

### Example custom transformers for runners

The following example shows a `runner` method that converts one runner label to one {% data variables.product.prodname_actions %} runner label in the resulting workflow.

```ruby copy
runner "linux", "ubuntu-latest"
```

You can also use the `runner` method to convert one runner label to multiple {% data variables.product.prodname_actions %} runner labels in the resulting workflow.

```ruby copy
runner "big-agent", ["self-hosted", "xl", "linux"]
```

{% data variables.product.prodname_actions_importer %} attempts to map the runner label as best it can. In cases where it cannot do this, the `ubuntu-latest` runner label is used as a default. You can use a special keyword with the `runner` method to control this default value. For example, the following custom transformer instructs {% data variables.product.prodname_actions_importer %} to use `macos-latest` as the default runner instead of `ubuntu-latest`.

```ruby copy
runner :default, "macos-latest"
```

## Creating custom transformers for environment variables

You can customize the mapping between environment variables in your source CI/CD pipelines to their values in {% data variables.product.prodname_actions %}.

{% data variables.product.prodname_actions_importer %} uses custom transformers that are defined using a DSL built on top of Ruby. To create custom transformers for environment variables:

- The custom transformer file must have at least one `env` method.
- The `env` method accepts two parameters. The first parameter is the name of the environment variable in the original pipeline, and the second parameter is the updated value for the environment variable for {% data variables.product.prodname_actions %}. For more information about {% data variables.product.prodname_actions %} environment variables, see "[AUTOTITLE](/actions/learn-github-actions/variables)."

### Example custom transformers for environment variables

There are several ways you can set up custom transformers to map your environment variables.

- The following example sets the value of any existing environment variables named `OCTO`, to `CAT` when transforming a pipeline.

  ```ruby copy
  env "OCTO", "CAT"
  ```

  You can also remove all instances of a specific environment variable so they are not transformed to an {% data variables.product.prodname_actions %} workflow. The following example removes all environment variables with the name `MONA_LISA`.

  ```ruby copy
  env "MONA_LISA", nil
  ```

- You can also map your existing environment variables to secrets. For example, the following `env` method maps an environment variable named `MONALISA` to a secret named `OCTOCAT`.

  ```ruby copy
  env "MONALISA", secret("OCTOCAT")
  ```

  This will set up a reference to a secret named `OCTOCAT` in the transformed workflow. For the secret to work, you will need to create the secret in your GitHub repository. For more information, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository)."

- You can also use regular expressions to update the values of multiple environment variables at once. For example, the following custom transformer removes all environment variables from the converted workflow:

  ```ruby copy
  env /.*/, nil
  ```

  The following example uses a regular expression match group to transform environment variable values to dynamically generated secrets.

  ```ruby copy
  env /^(.+)_SSH_KEY/, secret("%s_SSH_KEY)
  ```

  {% note %}

  **Note**: The order in which `env` methods are defined matters when using regular expressions. The first `env` transformer that matches an environment variable name takes precedence over subsequent `env` methods. You should define your most specific environment variable transformers first.

  {% endnote %}

## Legal notice

{% data reusables.actions.actions-importer-legal-notice %}
