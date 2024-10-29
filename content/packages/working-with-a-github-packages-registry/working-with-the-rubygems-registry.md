---
title: Working with the RubyGems registry
intro: 'You can configure RubyGems to publish a package to {% data variables.product.prodname_registry %} and to use packages stored on {% data variables.product.prodname_registry %} as dependencies in a Ruby project with Bundler.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-rubygems-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-rubygems-for-use-with-github-packages
  - /packages/guides/configuring-rubygems-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: RubyGems registry
---

{% data reusables.package_registry.packages-ghes-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Prerequisites

* You must have RubyGems 2.4.1 or higher. To find your RubyGems version:

  ```shell
  gem --version
  ```

* You must have bundler 1.6.4 or higher. To find your Bundler version:

  ```shell
  $ bundle --version
  Bundler version 1.13.7
  ```

## Authenticating to {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% ifversion packages-rubygems-v2 %}

### Authenticating in a {% data variables.product.prodname_actions %} workflow

This registry supports granular permissions. {% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

{% data reusables.package_registry.v2-actions-codespaces %}

{% endif %}

### Authenticating with a {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

To publish and install gems, you can configure RubyGems or Bundler to authenticate to {% data variables.product.prodname_registry %} using your {% data variables.product.pat_generic %}.

To publish new gems, you need to authenticate to {% data variables.product.prodname_registry %} with RubyGems by editing your _~/.gem/credentials_ file to include your {% data variables.product.pat_v1 %}. Create a new _~/.gem/credentials_ file if this file doesn't exist.

For example, you would create or edit a _~/.gem/credentials_ to include the following, replacing TOKEN with your {% data variables.product.pat_generic %}.

```shell
---
:github: Bearer TOKEN
```

To install gems, you need to authenticate to {% data variables.product.prodname_registry %} by updating your gem sources to include `https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY_URL{% endif %}/NAMESPACE/`. You must replace:
* `USERNAME` with your {% data variables.product.prodname_dotcom %} username.
* `TOKEN` with your {% data variables.product.pat_v1 %}.
* `NAMESPACE` with the name of the personal account or organization {% ifversion packages-rubygems-v2 %}to which the gem is scoped{% else %}that owns the repository containing the gem{% endif %}.{% ifversion ghes %}
* `REGISTRY_URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace HOSTNAME with the hostname of your {% data variables.product.prodname_ghe_server %} instance.
{% endif %}

If you would like your package to be available globally, you can run the following command to add your registry as a source.

```shell
gem sources --add https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY_URL{% endif %}/NAMESPACE/
```

To authenticate with Bundler, configure Bundler to use your {% data variables.product.pat_v1 %}, replacing USERNAME with your {% data variables.product.prodname_dotcom %} username, TOKEN with your {% data variables.product.pat_generic %}, and NAMESPACE with the name of the personal account or organization {% ifversion packages-rubygems-v2 %}to which the gem is scoped{% else %}that owns the repository containing the gem{% endif %}.{% ifversion ghes %} Replace `REGISTRY_URL` with the URL for your instance's RubyGems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace HOSTNAME with the hostname of your {% data variables.product.prodname_ghe_server %} instance.{% endif %}

```shell
bundle config https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY_URL{% endif %}/NAMESPACE USERNAME:TOKEN
```

## Publishing a package

{% ifversion packages-rubygems-v2 %}{% data reusables.package_registry.publishing-user-scoped-packages %}{% else %}By default, GitHub publishes the package to an existing repository with the same name as the package. For example, when you publish `GEM_NAME` to the `octo-org` organization, GitHub Packages publishes the gem to the `octo-org/GEM_NAME` repository.{% endif %} For more information on creating your gem, see "[Make your own gem](http://guides.rubygems.org/make-your-own-gem/)" in the RubyGems documentation.

{% data reusables.package_registry.auto-inherit-permissions-note %}

{% data reusables.package_registry.authenticate-step %}

1. Build the package from the _gemspec_ to create the _.gem_ package. Replace `GEM_NAME` with the name of your gem.

   ```shell
   gem build GEM_NAME.gemspec
   ```

1. Publish a package to {% data variables.product.prodname_registry %}, replacing `NAMESPACE` with the name of the personal account or organization {% ifversion packages-rubygems-v2 %}to which the package will be scoped{% else %}that owns the repository containing your project{% endif %} and `GEM_NAME` with the name of your gem package.{% ifversion ghes %} Replace `REGISTRY_URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace `HOSTNAME` with the host name of your {% data variables.product.prodname_ghe_server %} instance.{% endif %}

   {% note %}

   **Note:** The maximum uncompressed size of a gem's `metadata.gz` file must be less than {% data variables.package_registry.limit_rubygems_max_metadata_size %}. Requests to push gems that exceed that limit will fail.

   {% endnote %}

   ```shell
   $ gem push --key github \
   --host https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY_URL{% endif %}/NAMESPACE \
   GEM_NAME-0.0.1.gem
   ```

{% ifversion packages-rubygems-v2 %}

## Connecting a package to a repository

The RubyGems registry stores packages within your organization or personal account, and allows you to associate packages with a repository. You can choose whether to inherit permissions from a repository, or set granular permissions independently of a repository.

You can ensure gems will be linked to a repository as soon as they are published by including the URL of the {% data variables.product.prodname_dotcom %} repository in the `github_repo` field in `gem.metadata`. You can link multiple gems to the same repository. {% ifversion ghes %} In the following example, replace HOSTNAME with the host name of {% data variables.location.product_location %}.{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

For information on linking a published package with a repository, see "[AUTOTITLE](/packages/learn-github-packages/connecting-a-repository-to-a-package)."

{% else %}

## Publishing multiple packages to the same repository

To publish multiple gems to the same repository, you can include the URL to the {% data variables.product.prodname_dotcom %} repository in the `github_repo` field in `gem.metadata`. If you include this field, {% data variables.product.prodname_dotcom %} matches the repository based on this value, instead of using the gem name.{% ifversion ghes %} Replace HOSTNAME with the host name of {% data variables.location.product_location %}.{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

{% endif %}

## Installing a package

You can use gems from {% data variables.product.prodname_registry %} much like you use gems from _rubygems.org_. You need to authenticate to {% data variables.product.prodname_registry %} by adding your {% data variables.product.prodname_dotcom %} user or organization as a source in the _~/.gemrc_ file or by using Bundler and editing your _Gemfile_.

{% data reusables.package_registry.authenticate-step %}
1. For Bundler, add your {% data variables.product.prodname_dotcom %} user or organization as a source in your _Gemfile_ to fetch gems from this new source. For example, you can add a new `source` block to your _Gemfile_ that uses {% data variables.product.prodname_registry %} only for the packages you specify, replacing `GEM_NAME` with the package you want to install from {% data variables.product.prodname_registry %} and `NAMESPACE` with the personal account or organization {% ifversion packages-rubygems-v2 %}to which the gem you want to install is scoped{% else %}that owns the repository containing the gem you want to install{% endif %}.{% ifversion ghes %} Replace `REGISTRY_URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace `HOSTNAME` with the host name of your {% data variables.product.prodname_ghe_server %} instance.{% endif %}

   ```ruby
   source "https://rubygems.org"

   gem "rails"

   source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY_URL{% endif %}/NAMESPACE" do
     gem "GEM_NAME"
   end
   ```

1. For Bundler versions earlier than 1.7.0, you need to add a new global `source`. For more information on using Bundler, see the [bundler.io documentation](https://bundler.io/gemfile.html).

   ```ruby
   source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY_URL{% endif %}/NAMESPACE"
   source "https://rubygems.org"

   gem "rails"
   gem "GEM_NAME"
   ```

1. Install the package:

   ```shell
   gem install GEM_NAME --version "0.1.1"
   ```

## Further reading

* "[AUTOTITLE](/packages/learn-github-packages/deleting-and-restoring-a-package)"
