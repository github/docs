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
  ghae: '*'
shortTitle: RubyGems registry
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Prerequisites

- You must have rubygems 2.4.1 or higher. To find your rubygems version:

  ```shell
  $ gem --version
  ```

- You must have bundler 1.6.4 or higher. To find your Bundler version:

  ```shell
  $ bundle --version
  Bundler version 1.13.7
  ```

- Install keycutter to manage multiple credentials. To install keycutter:

  ```shell
  $ gem install keycutter
  ```

## Authenticating to {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Authenticating with a personal access token

{% data reusables.package_registry.required-scopes %}

You can authenticate to {% data variables.product.prodname_registry %} with RubyGems by editing the  *~/.gem/credentials* file for publishing gems, editing the *~/.gemrc* file for installing a single gem, or using Bundler for tracking and installing one or more gems.

To publish new gems, you need to authenticate to {% data variables.product.prodname_registry %} with RubyGems by editing your *~/.gem/credentials* file to include your personal access token.  Create a new *~/.gem/credentials* file if this file doesn't exist.

For example, you would create or edit a *~/.gem/credentials* to include the following, replacing *TOKEN* with your personal access token.

```shell
---
:github: Bearer <em>TOKEN</em>
```

To install gems, you need to authenticate to {% data variables.product.prodname_registry %} by editing the *~/.gemrc* file for your project to include `https://USERNAME:TOKEN@{% ifversion fpt %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/`. You must replace:
  - `USERNAME` with your {% data variables.product.prodname_dotcom %} username.
  - `TOKEN` with your personal access token.
  - `OWNER` with the name of the user or organization account that owns the repository containing your project.{% ifversion ghes %}
  - `REGISTRY-URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace *HOSTNAME* with the hostname of your {% data variables.product.prodname_ghe_server %} instance.
{% elsif ghae %}
  - `REGISTRY-URL` with the URL for your instance's Rubygems registry, `rubygems.HOSTNAME`. Replace *HOSTNAME* with the hostname of {% data variables.product.product_location %}.
{% endif %}

If you don't have a *~/.gemrc* file, create a new *~/.gemrc* file using this example.

```shell
---
:backtrace: false
:bulk_threshold: 1000
:sources:
- https://rubygems.org/
- https://USERNAME:TOKEN@{% ifversion fpt %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/
:update_sources: true
:verbose: true  

```

To authenticate with Bundler, configure Bundler to use your personal access token, replacing *USERNAME* with your {% data variables.product.prodname_dotcom %} username, *TOKEN* with your personal access token, and *OWNER* with the name of the user or organization account that owns the repository containing your project.{% ifversion ghes %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace *HOSTNAME* with the hostname of your {% data variables.product.prodname_ghe_server %} instance.{% elsif ghae %}Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry, `rubygems.HOSTNAME`. Replace *HOSTNAME* with the hostname of {% data variables.product.product_location %}.{% endif %}

```shell
$ bundle config https://{% ifversion fpt %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER USERNAME:TOKEN</em>
```

## Publishing a package

{% data reusables.package_registry.default-name %} For example, when you publish `octo-gem` to the `octo-org` organization, {% data variables.product.prodname_registry %} publishes the gem to the `octo-org/octo-gem` repository. For more information on creating your gem, see "[Make your own gem](http://guides.rubygems.org/make-your-own-gem/)" in the RubyGems documentation.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. Build the package from the *gemspec* to create the *.gem* package.
  ```shell
  gem build OCTO-GEM.gemspec
  ```
3. Publish a package to {% data variables.product.prodname_registry %}, replacing `OWNER` with the name of the user or organization account that owns the repository containing your project and `OCTO-GEM` with the name of your gem package.{% ifversion ghes %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace *HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance.{% elsif ghae %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry, `rubygems.HOSTNAME`. Replace *HOSTNAME* with the hostname of {% data variables.product.product_location %}.{% endif %}

  ```shell
  $ gem push --key github \
  --host https://{% ifversion fpt %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER</em> \
  <em>OCTO-GEM-0.0.1</em>.gem
  ```

## Publishing multiple packages to the same repository

To publish multiple gems to the same repository, you can include the URL to the {% data variables.product.prodname_dotcom %} repository in the `github_repo` field in `gem.metadata`. If you include this field, {% data variables.product.prodname_dotcom %} matches the repository based on this value, instead of using the gem name.{% ifversion ghes or ghae %} Replace *HOSTNAME* with the host name of {% data variables.product.product_location %}.{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% ifversion fpt %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

## Installing a package

You can use gems from {% data variables.product.prodname_registry %} much like you use gems from *rubygems.org*. You need to authenticate to {% data variables.product.prodname_registry %} by adding your {% data variables.product.prodname_dotcom %} user or organization as a source in the *~/.gemrc* file or by using Bundler and editing your *Gemfile*.

{% data reusables.package_registry.authenticate-step %}
1. For Bundler, add your {% data variables.product.prodname_dotcom %} user or organization as a source in your *Gemfile* to fetch gems from this new source. For example, you can add a new `source` block to your *Gemfile* that uses {% data variables.product.prodname_registry %} only for the packages you specify, replacing *GEM NAME* with the package you want to install from {% data variables.product.prodname_registry %} and *OWNER* with the user or organization that owns the repository containing the gem you want to install.{% ifversion ghes %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace *HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance.{% elsif ghae %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry, `rubygems.HOSTNAME`. Replace *HOSTNAME* with the hostname of {% data variables.product.product_location %}.{% endif %}

  ```ruby
  source "https://rubygems.org"

  gem "rails"

  source "https://{% ifversion fpt %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER" do
    gem "GEM NAME"
  end
  ```

3. For Bundler versions earlier than 1.7.0, you need to add a new global `source`. For more information on using Bundler, see the [bundler.io documentation](http://bundler.io/v1.5/gemfile.html).

  ```ruby
  source "https://{% ifversion fpt %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER"
  source "https://rubygems.org"

  gem "rails"
  gem "GEM NAME"
  ```

4. Install the package:
  ```shell
  $ gem install octo-gem --version "0.1.1"
  ```

## Further reading

- "{% ifversion fpt or ghes > 3.0 %}[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif ghes < 3.1 or ghae %}[Deleting a package](/packages/learn-github-packages/deleting-a-package){% endif %}"
GitHub Docs
GitHub Packages/Working with a GitHub Packages registry/RubyGems registry
Working with the RubyGems registry
You can configure RubyGems to publish a package to GitHub Packages and to use packages stored on GitHub Packages as dependencies in a Ruby project with Bundler.

GitHub Packages is available with GitHub Free, GitHub Pro, GitHub Free for organizations, GitHub Team, GitHub Enterprise Cloud, GitHub Enterprise Server, and GitHub AE.


GitHub Packages is not available for private repositories owned by accounts using legacy per-repository plans. Also, accounts using legacy per-repository plans cannot access the Container registry since these accounts are billed by repository. For more information, see "GitHub's products."

In this article
Prerequisites
Authenticating to GitHub Packages
Publishing a package
Publishing multiple packages to the same repository
Installing a package
Further reading
Prerequisites
You must have rubygems 2.4.1 or higher. To find your rubygems version:

$ gem --version
You must have bundler 1.6.4 or higher. To find your Bundler version:

$ bundle --version
Bundler version 1.13.7
Install keycutter to manage multiple credentials. To install keycutter:

$ gem install keycutter
Authenticating to GitHub Packages
You need an access token to publish, install, and delete packages.

You can use a personal access token (PAT) to authenticate to GitHub Packages or the GitHub API. When you create a personal access token, you can assign the token different scopes depending on your needs. For more information about packages-related scopes for a PAT, see "About permissions for GitHub Packages."

To authenticate to a GitHub Packages registry within a GitHub Actions workflow, you can use:

GITHUB_TOKEN to publish packages associated with the workflow repository.
a PAT to install packages associated with other private repositories (which GITHUB_TOKEN can't access).
For more information about GITHUB_TOKEN used in GitHub Actions workflows, see "Authentication in a workflow."

Authenticating with a personal access token
You must use a personal access token with the appropriate scopes to publish and install packages in GitHub Packages. For more information, see "About GitHub Packages."

You can authenticate to GitHub Packages with RubyGems by editing the ~/.gem/credentials file for publishing gems, editing the ~/.gemrc file for installing a single gem, or using Bundler for tracking and installing one or more gems.

To publish new gems, you need to authenticate to GitHub Packages with RubyGems by editing your ~/.gem/credentials file to include your personal access token. Create a new ~/.gem/credentials file if this file doesn't exist.

For example, you would create or edit a ~/.gem/credentials to include the following, replacing TOKEN with your personal access token.

---
:github: Bearer TOKEN
To install gems, you need to authenticate to GitHub Packages by editing the ~/.gemrc file for your project to include https://USERNAME:TOKEN@rubygems.pkg.github.com/OWNER/. You must replace:

USERNAME with your GitHub username.
TOKEN with your personal access token.
OWNER with the name of the user or organization account that owns the repository containing your project.
If you don't have a ~/.gemrc file, create a new ~/.gemrc file using this example.

---
:backtrace: false
:bulk_threshold: 1000
:sources:
- https://rubygems.org/
- https://USERNAME:TOKEN@rubygems.pkg.github.com/OWNER/
:update_sources: true
:verbose: true  
To authenticate with Bundler, configure Bundler to use your personal access token, replacing USERNAME with your GitHub username, TOKEN with your personal access token, and OWNER with the name of the user or organization account that owns the repository containing your project.

$ bundle config https://rubygems.pkg.github.com/OWNER USERNAME:TOKEN
Publishing a package
By default, GitHub publishes the package to an existing repository with the same name as the package. For example, when you publish octo-gem to the octo-org organization, GitHub Packages publishes the gem to the octo-org/octo-gem repository. For more information on creating your gem, see "Make your own gem" in the RubyGems documentation.

After you publish a package, you can view the package on GitHub. For more information, see "Viewing packages."

Authenticate to GitHub Packages. For more information, see "Authenticating to GitHub Packages."

Build the package from the gemspec to create the .gem package.

gem build OCTO-GEM.gemspec
Publish a package to GitHub Packages, replacing OWNER with the name of the user or organization account that owns the repository containing your project and OCTO-GEM with the name of your gem package.

$ gem push --key github \
--host https://rubygems.pkg.github.com/OWNER \
OCTO-GEM-0.0.1.gem
Publishing multiple packages to the same repository
To publish multiple gems to the same repository, you can include the URL to the GitHub repository in the github_repo field in gem.metadata. If you include this field, GitHub matches the repository based on this value, instead of using the gem name.

gem.metadata = { "github_repo" => "ssh://github.com/OWNER/REPOSITORY" }
Installing a package
You can use gems from GitHub Packages much like you use gems from rubygems.org. You need to authenticate to GitHub Packages by adding your GitHub user or organization as a source in the ~/.gemrc file or by using Bundler and editing your Gemfile.

Authenticate to GitHub Packages. For more information, see "Authenticating to GitHub Packages."

For Bundler, add your GitHub user or organization as a source in your Gemfile to fetch gems from this new source. For example, you can add a new source block to your Gemfile that uses GitHub Packages only for the packages you specify, replacing GEM NAME with the package you want to install from GitHub Packages and OWNER with the user or organization that owns the repository containing the gem you want to install.

source "https://rubygems.org"

gem "rails"

source "https://rubygems.pkg.github.com/OWNER" do
  gem "GEM NAME"
end
For Bundler versions earlier than 1.7.0, you need to add a new global source. For more information on using Bundler, see the bundler.io documentation.

source "https://rubygems.pkg.github.com/OWNER"
source "https://rubygems.org"

gem "rails"
gem "GEM NAME"
Install the package:

$ gem install octo-gem --version "0.1.1"
Further reading
"Deleting and restoring a package"
Did this doc help you?Privacy policy

Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Or, learn how to contribute.

Still need help?
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
Developer API
Training
About

