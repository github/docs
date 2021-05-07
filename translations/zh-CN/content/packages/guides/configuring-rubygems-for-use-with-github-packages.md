---
title: Configuring RubyGems for use with GitHub Packages
intro: 'You can configure RubyGems to publish a package to {% data variables.product.prodname_registry %} and to use packages stored on {% data variables.product.prodname_registry %} as dependencies in a Ruby project with Bundler.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-rubygems-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-rubygems-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

### Prerequisites

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
  
### Authenticating to {% data variables.product.prodname_registry %}
  
{% data reusables.package_registry.authenticate-packages %}
  
#### Authenticating with a personal access token
  
{% data reusables.package_registry.required-scopes %}
  
You can authenticate to {% data variables.product.prodname_registry %} with RubyGems by editing the  *~/.gem/credentials* file for publishing gems, editing the *~/.gemrc* file for installing a single gem, or using Bundler for tracking and installing one or more gems.
  
To publish new gems, you need to authenticate to {% data variables.product.prodname_registry %} with RubyGems by editing your *~/.gem/credentials* file to include your personal access token.  Create a new *~/.gem/credentials* file if this file doesn't exist.
  
For example, you would create or edit a *~/.gem/credentials* to include the following, replacing *TOKEN* with your personal access token.
  
```shell
---
:github: Bearer <em>TOKEN</em>
```
  
To install gems, you need to authenticate to {% data variables.product.prodname_registry %} by editing the *~/.gemrc* file for your project to include `https://USERNAME:TOKEN@{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/`. You must replace:
  - `USERNAME` with your {% data variables.product.prodname_dotcom %} username.
  - `TOKEN` with your personal access token.
  - `OWNER` with the name of the user or organization account that owns the repository containing your project.{% if enterpriseServerVersions contains currentVersion %}
  - `REGISTRY-URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace *HOSTNAME* with the hostname of your {% data variables.product.prodname_ghe_server %} instance.
{% endif %} 
  
If you don't have a *~/.gemrc* file, create a new *~/.gemrc* file using this example.
  
```shell
---
:backtrace: false
:bulk_threshold: 1000
:sources:
- https://rubygems.org/
- https://USERNAME:TOKEN@{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/
:update_sources: true
:verbose: true  

```
  
To authenticate with Bundler, configure Bundler to use your personal access token, replacing *USERNAME* with your {% data variables.product.prodname_dotcom %} username, *TOKEN* with your personal access token, and *OWNER* with the name of the user or organization account that owns the repository containing your project.{% if enterpriseServerVersions contains currentVersion %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace *HOSTNAME* with the hostname of your {% data variables.product.prodname_ghe_server %} instance.{% endif %} 
  
```shell
$ bundle config https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER USERNAME:TOKEN</em>
```
  
#### Authenticating with the `GITHUB_TOKEN`
  
{% data reusables.package_registry.package-registry-with-github-tokens %}
  
### Publishing a package

{% data reusables.package_registry.default-name %} For example, when you publish `octo-gem` to the `octo-org` organization, {% data variables.product.prodname_registry %} publishes the gem to the `octo-org/octo-gem` repository. For more information on creating your gem, see "[Make your own gem](http://guides.rubygems.org/make-your-own-gem/)" in the RubyGems documentation.
  
{% data reusables.package_registry.viewing-packages %}
  
{% data reusables.package_registry.authenticate-step %}
2. Build the package from the *gemspec* to create the *.gem* package.
  ```shell
  gem build OCTO-GEM.gemspec
  ```
3. Publish a package to {% data variables.product.prodname_registry %}, replacing `OWNER` with the name of the user or organization account that owns the repository containing your project and `OCTO-GEM` with the name of your gem package.{% if enterpriseServerVersions contains currentVersion %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace *HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance.{% endif %} 

  ```shell
  $ gem push --key github \
  --host https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER</em> \
  <em>OCTO-GEM-0.0.1</em>.gem
  ```

### Publishing multiple packages to the same repository

To publish multiple gems to the same repository, you can include the URL to the {% data variables.product.prodname_dotcom %} repository in the `github_repo` field in `gem.metadata`. If you include this field, {% data variables.product.prodname_dotcom %} matches the repository based on this value, instead of using the gem name.{% if enterpriseServerVersions contains currentVersion %} Replace *HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance.{% endif %} 

```
gem.metadata = { "github_repo" => "ssh://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

### Installing a package

You can use gems from {% data variables.product.prodname_registry %} much like you use gems from *rubygems.org*. You need to authenticate to {% data variables.product.prodname_registry %} by adding your {% data variables.product.prodname_dotcom %} user or organization as a source in the *~/.gemrc* file or by using Bundler and editing you *Gemfile*.

{% data reusables.package_registry.authenticate-step %}
2. For Bundler, add your {% data variables.product.prodname_dotcom %} user or organization as a source in your *Gemfile* to fetch gems from this new source. For example, you can add a new `source` block to your *Gemfile* that uses {% data variables.product.prodname_registry %} only for the packages you specify, replacing *GEM NAME* with the package you want to install from {% data variables.product.prodname_registry %} and *OWNER* with the user or organization that owns the repository containing the gem you want to install.{% if enterpriseServerVersions contains currentVersion %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace *HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance.{% endif %} 

  ```
  source "https://rubygems.org"

  gem "rails"

  source "https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER" do
    gem "GEM NAME"
  end
  ```

3. For Bundler versions earlier than 1.7.0, you need to add a new global `source`. For more information on using Bundler, see the [bundler.io documentation](http://bundler.io/v1.5/gemfile.html).

  ```
  source "https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER"
  source "https://rubygems.org"

  gem "rails"
  gem "GEM NAME"
  ```

4. Install the package:
  ```shell
  $ gem install octo-gem --version "0.1.1"
  ```

### Further reading

- "[Deleting a package](/packages/publishing-and-managing-packages/deleting-a-package/)"
