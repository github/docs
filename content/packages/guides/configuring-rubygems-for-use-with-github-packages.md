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
GitHub Docs
English
GitHub.com Authentication Managing commit signature verification Associating an email with your GPG key
Associating an email with your GPG key

Your GPG key must be associated with a GitHub verified email that matches your committer identity.

If you're using a GPG key that matches your committer identity and your verified email address associated with your GitHub account, then you can begin signing commits and signing tags.

    Open Terminal.

    Use the gpg --list-secret-keys --keyid-format LONG command to list GPG keys for which you have both a public and private key. A private key is required for signing commits or tags.

    $ gpg --list-secret-keys --keyid-format LONG

    Note: Some GPG installations on Linux may require you to use gpg2 --list-keys --keyid-format LONG to view a list of your existing keys instead. In this case you will also need to configure Git to use gpg2 by running git config --global gpg.program gpg2.

    From the list of GPG keys, copy the GPG key ID you'd like to use. In this example, the GPG key ID is 3AA5C34371567BD2:

    $ gpg --list-secret-keys --keyid-format LONG
    /Users/hubot/.gnupg/secring.gpg
    ------------------------------------
    sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
    uid                          Hubot 
    ssb   4096R/42B317FD4BA89E7A 2016-03-10

    Enter gpg --edit-key GPG key ID, substituting in the GPG key ID you'd like to use. In the following example, the GPG key ID is 3AA5C34371567BD2:

    $ gpg --edit-key 3AA5C34371567BD2

    Enter gpg> adduid to add the user ID details.

    $ gpg> adduid

    Follow the prompts to supply your real name, email address, and any comments. You can modify your entries by choosing N, C, or E. To keep your email address private, use your GitHub-provided no-reply email address. For more information, see "Setting your commit email address."

    Real Name: Octocat
      Email address: octocat@github.com
      Comment: GitHub key
      Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?

    Enter O to confirm your selections.

    Enter your key's passphrase.

    Enter gpg> save to save the changes

    $ gpg> save

    Enter gpg --armor --export GPG key ID, substituting in the GPG key ID you'd like to use. In the following example, the GPG key ID is 3AA5C34371567BD2:

    $ gpg --armor --export 3AA5C34371567BD2
    # Prints the GPG key, in ASCII armor format

    Upload the GPG key by adding it to your GitHub account.

Further reading

    "Checking for existing GPG keys"
    "Generating a new GPG key"
    "Using a verified email address in your GPG key"
    "Adding a new GPG key to your GitHub account"
    "Signing commits"
    "Signing tags"

Did this doc help you?

Privacy policy

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
Zachry T Wood III to


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

```ruby
gem.metadata = { "github_repo" => "ssh://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

### Installing a package

You can use gems from {% data variables.product.prodname_registry %} much like you use gems from *rubygems.org*. You need to authenticate to {% data variables.product.prodname_registry %} by adding your {% data variables.product.prodname_dotcom %} user or organization as a source in the *~/.gemrc* file or by using Bundler and editing you *Gemfile*.

{% data reusables.package_registry.authenticate-step %}
2. For Bundler, add your {% data variables.product.prodname_dotcom %} user or organization as a source in your *Gemfile* to fetch gems from this new source. For example, you can add a new `source` block to your *Gemfile* that uses {% data variables.product.prodname_registry %} only for the packages you specify, replacing *GEM NAME* with the package you want to install from {% data variables.product.prodname_registry %} and *OWNER* with the user or organization that owns the repository containing the gem you want to install.{% if enterpriseServerVersions contains currentVersion %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace *HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance.{% endif %}

  ```ruby
  source "https://rubygems.org"

  gem "rails"

  source "https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER" do
    gem "GEM NAME"
  end
  ```

3. For Bundler versions earlier than 1.7.0, you need to add a new global `source`. For more information on using Bundler, see the [bundler.io documentation](http://bundler.io/v1.5/gemfile.html).

  ```ruby
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

- "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.0" %}[Deleting a package](/packages/learn-github-packages/deleting-a-package){% endif %}."
