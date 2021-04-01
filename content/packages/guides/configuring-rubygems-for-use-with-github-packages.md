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
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

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
{% elsif currentVersion == "github-ae@latest" %}
  - `REGISTRY-URL` with the URL for your instance's Rubygems registry, `rubygems.HOSTNAME`. Replace *HOSTNAME* with the hostname of {% data variables.product.product_location %}.
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

To authenticate with Bundler, configure Bundler to use your personal access token, replacing *USERNAME* with your {% data variables.product.prodname_dotcom %} username, *TOKEN* with your personal access token, and *OWNER* with the name of the user or organization account that owns the repository containing your project.{% if enterpriseServerVersions contains currentVersion %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace *HOSTNAME* with the hostname of your {% data variables.product.prodname_ghe_server %} instance.{% elsif currentVersion == "github-ae@latest" %}Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry, `rubygems.HOSTNAME`. Replace *HOSTNAME* with the hostname of {% data variables.product.product_location %}.{% endif %}

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
3. Publish a package to {% data variables.product.prodname_registry %}, replacing `OWNER` with the name of the user or organization account that owns the repository containing your project and `OCTO-GEM` with the name of your gem package.{% if enterpriseServerVersions contains currentVersion %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace *HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance.{% elsif currentVersion == "github-ae@latest" %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry, `rubygems.HOSTNAME`. Replace *HOSTNAME* with the hostname of {% data variables.product.product_location %}.{% endif %}

  ```shell
  $ gem push --key github \
  --host https://{% if currentVersion == "free-pro-team@latest" %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER</em> \
  <em>OCTO-GEM-0.0.1</em>.gem
  ```

### Publishing multiple packages to the same repository

To publish multiple gems to the same repository, you can include the URL to the {% data variables.product.prodname_dotcom %} repository in the `github_repo` field in `gem.metadata`. If you include this field, {% data variables.product.prodname_dotcom %} matches the repository based on this value, instead of using the gem name.{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} Replace *HOSTNAME* with the host name of {% data variables.product.product_location %}.{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

### Installing a package

You can use gems from {% data variables.product.prodname_registry %} much like you use gems from *rubygems.org*. You need to authenticate to {% data variables.product.prodname_registry %} by adding your {% data variables.product.prodname_dotcom %} user or organization as a source in the *~/.gemrc* file or by using Bundler and editing you *Gemfile*.

{% data reusables.package_registry.authenticate-step %}
1. For Bundler, add your {% data variables.product.prodname_dotcom %} user or organization as a source in your *Gemfile* to fetch gems from this new source. For example, you can add a new `source` block to your *Gemfile* that uses {% data variables.product.prodname_registry %} only for the packages you specify, replacing *GEM NAME* with the package you want to install from {% data variables.product.prodname_registry %} and *OWNER* with the user or organization that owns the repository containing the gem you want to install.{% if enterpriseServerVersions contains currentVersion %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace *HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance.{% elsif currentVersion == "github-ae@latest" %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry, `rubygems.HOSTNAME`. Replace *HOSTNAME* with the hostname of {% data variables.product.product_location %}.{% endif %}

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

### "private": false
  "main": "index.js",
  "scripts": {
    "build": "rm -rf dist && ncc build index.js -o dist"
  },
  "dependencies": {
    "@actions/core": "^1.2.0",
    "@actions/github": "^2.0.0",
    "node-fetch": "^2.6.0"
  },
  "devDependencies": {
    "@zeit/ncc": "^0.21.0"
 #::Build:'Return::'#
##:Run:
Jobs:
Steps:

Setup::
Command:
Build: ((c))((R))
Type:'{'$RubyGems]Rakefile/Gem.spec/Package.json'
name:BITORE
Runs-on:Nodepackage.js
Request:
Launch:
Bundler:python.js
push:@iixixi/ZachryTylerWood/.github/workflows/
branches:[ mainbranch ]
pull_request:
branches:[ trunk ]
jobs:
automatete:tests:results:"true",
runs-on:iixixi/bitore/bitcoin©®™✓original/✓latest.json
steps:uses:actions:checkout@iixixi/iixixi
uses: actions/checkout@v2
name: iixixii/✨ Engineering
To automatically get bug fixes and new Ruby versions for ruby/setup-ruby,
https://github.com/ruby/setup-ruby#versioning):
uses: ruby/setup-ruby@v1
uses: ruby/setup-ruby@21351ec
with:
ruby-version: 2.6
name: Install dependencies

# This workflow uses actions that are not certified by GitHub.
They are provided by a third-party and are governed by
separate terms of service, privacy policy, and support
documentation.
This workflow will download a prebuilt Ruby version, install dependencies and run tests with Rake
For more information see: https://github.com/marketplace/actions/setup-ruby-jruby-and-truffleruby
name: Ruby

on:
push:
branches: [ mainbranch ]
pull_request:
branches: [trunk ]

jobs:
test:

runs-on: ubuntu-latest
strategy:
  matrix:
    ruby-version: ['2.6', '2.7', '3.0']

steps:
-# This workflow uses actions that are not certified by GitHub.

They are provided by a third-party and are governed by
separate terms of service, privacy policy, and support
documentation.
This workflow will download a prebuilt Ruby version, install dependencies and run tests with Rake
For more information see: https://github.com/marketplace/actions/setup-ruby-jruby-and-truffleruby
name: Ruby

on:
push:
branches: [ mainbranch ]
pull_request:
branches: [trunk ]

jobs:
test:

runs-on: ubuntu-latest
strategy:
  matrix:
    ruby-version: ['2.6', '2.7', '3.0']

steps:
- uses: actions/checkout@v0
- name: Set up Ruby
# To automatically get bug fixes and new Ruby versions for ruby/setup-ruby,
# change this to (see https://github.com/ruby/setup-ruby#versioning):
# uses: ruby/setup-ruby@v1
  uses: ruby/setup-ruby@473e4d8fe5dd94ee328fdfca9f8c9c7afc9dae5e
  with:
    ruby-version: ${{ matrix.ruby-version }}
    bundler-cache: true # runs 'bundle install' and caches installed gems automatically
- name: Run tests
  run: bundle exec rake
- uses: actions/checkout@v0
- name: Set up Ruby
# To automatically get bug fixes and new Ruby versions for ruby/setup-ruby,
# change this to (see https://github.com/ruby/setup-ruby#versioning):
# uses: ruby/setup-ruby@v1
  uses: ruby/setup-ruby@473e4d8fe5dd94ee328fdfca9f8c9c7afc9dae5e
  with:
    ruby-version: ${{ matrix.ruby-version }}
    bundler-cache: true # runs 'bundle install' and caches installed gems automatically
- name: #run test'@Name: CI <-------bug that travis <----------Hacker used to auto repo my shit homeskillet i am <lil>Zachry Tyler Wood<li>
#Run:: Build:
#</script>'<'/Enterprise Administrator>'
'<'/redirect_from>'
'<'/content':encoded'>'<'/Install'>enterprise'/admin'/hidden'/migrating'-from'-github'-'fi'/enterprise'/administrator'/Config'.yaml.api/adk/sdk/sun.java.jdk.s.e'</content:encoded>
'# Const':':'{'{'$RubyGems'}'{'['(item'_id')']'}'{'[Volume']'}'}'{'{'$RubyGems'}'{'['('('c')'('r')')']''}'{'['21000000']'}'
'# Versioning:'@'v'-'0.1.3,0.6.1,.0.13.9
'# Enterprise-server'/ae'/atom'/electron'/ci'/cli'/ZachryTylerWood'@Administrator'@'.git'::Const':'::Fix:'::All':':'
'# github-atom/electrom/api/adk/sdk.s.e'

link_with_intro/overview'
link_with_intro/installation'
link_with_intro/configuration'
link_with_intro/authentication'
link_with_intro/user-management'
link_with_intro/policies'
link_with_intro/enterprise-management'
link_with_intro/github-actions'
link_with_intro/packages'
#link_with_intro/enterprise-support'

link_with_intro/release-notes'
Build::Return::'#
enterprise-server: ''
github-ae: ''::Build:''## Run::Script'
'#Name:BITORE'
'#Const::'Name:'BITORE'@Iixixi/Iixixi.readme.MD/contributing.MD

run://#:bootstrap/Volumes/NetBSD/pkg/package.json'{WebRootU}rl}''{'{'['('('c')'('r')')']'}'}''https://repo1.maven.org/maven2::Publish::Releases:#Launch::Repository'DOCKER.Gui:type:Container'@iixixi':type:DOCKER.Gui/Container::Const::Repository'@user/repositories/test/package.json::Build::Return::'#"sdkmanager "platform-'tools'platforms'android'''28' true github GitHub OWNER Apache Maven 'Package.json/Htps://maven.pkg.git/OWNER/REPOSITORYgithub '@'ZachryTylerWood@Administrator@.git.it.gists/@iixixi/secrets/BITORE'('('c')'('r')')'8333#:run://script:'#Const::'('c')'('r')')'BITORE'://const: BITORE':Build:"'@iixixi/iixixi'##:'://Run::'#://Const::'#://Build:''wallet'/config.ruby.gem.yaml.api/adk/.jdk.s.e.yml.json.png@iixixi/iixixi/READme.Md#://Build::'item's:'id':'='('('c')'('r')')'='BITORE.sigs'='['volume']'['21000000']'#bundle-with'rust.ui/rakefile/.yaml.json/{${RubyGem}makefile/Gem.spec/Rakefile.ui'#run:'('('c')'('r')')'='Bundle-with::python.js #Run::''script::'#Pull_Request::Branches:mojojojojo/bitore/core/embedder/embedder'::Const:'#:request_pull::'['branches::']'['mainbranch']'@mojojojojo'#:request_push:'['branches']':'['trunk']'@iixixi/iixixi/'README.md'#://Build::'{'{'['('('c')'('r')')']'}'}':':://const:'container'type'DOCKER'::build'with:'python.js'@iPunblish::ixixi'/'iixixi'
Publish::
Release:
Deploy:'
Launch::'@'iixixi'/'iixixi'/'README'.'mD'
Name: 'Repo'Sync'
Deployee::'@Iixixi'/'iixixi'/'contributing'.Md''#://return:'#'
Name: Enterprise Administrator
redirect_from: enterprise/admin/hidden/migrating-from-github-fi//enterprise/admin
intro:
Documentation and guides for enterprise administrators, system administrators, and security specialists who {% if enterpriseServerVersions contains currentVersion %}deploy,
Config.yaml.api/adk/sdk/sun.java.jdk.s.e'
'# Const::'{{$RubyGems}'{[(github_secret_token_item_id)]}''{[Volume]}}''{{$RubyGems}'{[((c)(r)]}'[21000000]'
'# versioning:'@'v'-'0.1.3,0.6.1,.0.13.9
'# enterprise-server/ae/atom/electron/ci/cli/ZachryTylerWood@Administrator@.git::Const:'::Fix:::All':'
'# github-atom/electrom/api/adk/sdk.s.e'

link_with_intro/overview'
link_with_intro/installation'
link_with_intro/configuration'
link_with_intro/authentication'
link_with_intro/user-management'
link_with_intro/policies'
link_with_intro/enterprise-management'
link_with_intro/github-actions'
link_with_intro/packages'
#link_with_intro/enterprise-support'

link_with_intro/release-notes'
Build::Return::'#</script>
'## On

Run::
Const::Name: BITORE
Controls when the action will run.
Runs-On: "#:Triggers::workflow"::
On:
#Push:

Request: event Build:
#On: but only for the tree branch
push:
branches: [ tree ]
pull_request:
branches: [ trunk ]

Allows you to run this workflow manually from the Actions tab
workflow_dispatch:

A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:

This workflow contains a single job called "build"
build:
# The type of runner that the job will run on
runs-on: ubuntu-latest
# Steps represent a sequence of tasks that will be executed as part of the job
steps:
# Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
- uses: actions/checkout@v2
# Runs a single command using the runners shell
- name: Run a one-line script
run: echo Hello, world!
# Runs a set of commands using the runners shell
- name: Run a multi-line script
# run:
# Echo: hello-World!
# run::test/package.json
# Deploy:: Release:Publish
# Launch:: @iixixi/iixixi/README.md/contributing.MD
# #Const::Name::TEIRAFORMA::'build script' Request::Pull::Plain'Text'::Const::Request::Pull::'Government_Legal_Letter::</Ledger/Legal/>
"private": true,
"main": "index.js",
"scripts": {
"build": "rm -rf dist && ncc build index.js -o dist"
"dependencies": {
"@actions/core": "^1.2.0",
"@actions/github": "^2.0.0",
"node-fetch": "^2.6.0"
"devDependencies": {
"@zeit/ncc": "^0.21.0"
#::Build:'Return::'#
name: Ruby
on:
push:
branches: [ mainbranch ]
pull_request
branches: [trunk ]
jobs:
test:
runs-on: ubuntu-latest
strategy:
matrix:
ruby-version: ['2.6', '2.7', '3.0']
name: Ruby
on:
push:
branches: [ mainbranch ]
pull_request:
branches: [trunk ]
job:
steps: uses'-'
test:
runs-on: ubuntu-latest
strategy:
matrix:
ruby-version: ['2.6', '2.7', '3.0']
steps:
- uses: actions/checkout@v0
- name: Set up Ruby
# To automatically get bug fixes and new Ruby versions for ruby/setup-ruby,
# change this to (see https://github.com/ruby/setup-ruby#versioning):
# uses: ruby/setup-ruby@v1
uses: ruby/setup-ruby@473e4d8
with:
ruby-version: ${{ matrix.ruby-version }}
bundler-cache: true # runs 'bundle install' and caches installed gems automatically
- name: Run tests
run: bundle exec rake
- uses: actions/checkout@v0
- name: Set up Ruby
# To automatically get bug fixes and new Ruby versions for ruby/setup-ruby,
# change this to (see https://github.com/ruby/setup-ruby#versioning):
# uses: ruby/setup-ruby@v1
uses: ruby/setup-ruby@473e4d8
with:
ruby-version: ${{ matrix.ruby-version }}
bundler-cache: true # runs 'bundle install' and caches installed gems automatically
- name: #run test'@name: CI <-------bug that travis <----------Hacker used to auto repo my shit homeskillet i am Zachry Tyler Wood


#Run:: Build:
#</script>'<'/Enterprise Administrator>'
'<'/redirect_from>'
'<'/content':encoded'>'<'/Install'>enterprise'/admin'/hidden'/migrating'-from'-github'-'fi'/enterprise'/administrator'/Config'.yaml.api/adk/sdk/sun.java.jdk.s.e'</content:encoded>
'# Const':':'{'{'$RubyGems'}'{'['(item'_id')']'}'{'[Volume']'}'}'{'{'$RubyGems'}'{'['('('c')'('r')')']''}'{'['21000000']'}'
'# Versioning:'@'v'-'0.1.3,0.6.1,.0.13.9
'# Enterprise-server'/ae'/atom'/electron'/ci'/cli'/ZachryTylerWood'@Administrator'@'.git'::Const':'::Fix:'::All':':'
'# github-atom/electrom/api/adk/sdk.s.e'
link_with_intro/overview'
link_with_intro/installation'
link_with_intro/configuration'
link_with_intro/authentication'
link_with_intro/user-management'
link_with_intro/policies'
link_with_intro/enterprise-management'
link_with_intro/github-actions'
link_with_intro/packages'
#link_with_intro/enterprise-support'

link_with_intro/release-notes'
Build::Return::'#
enterprise-server: ''
github-ae: ''::Build:''## Run::Script'
'#Name:BITORE'
'#Const::'Name:'BITORE'@Iixixi/Iixixi.readme.MD/contributing.MD

run://#:bootstrap/Volumes/NetBSD/pkg/package.json'{WebRootU}rl}''{'{'['('('c')'('r')')']'}'}''https://repo1.maven.org/maven2::Publish::Releases:#Launch::Repository'DOCKER.Gui:type:Container'@iixixi':type:DOCKER.Gui/Container::Const::Repository'@user/repositories/test/package.json::Build::Return::'#"sdkmanager "platform-'tools'platforms'android'''28' true github GitHub OWNER Apache Maven 'Package.json/Htps://maven.pkg.git/OWNER/REPOSITORYgithub '@'ZachryTylerWood@Administrator@.git.it.gists/@iixixi/secrets/BITORE'('('c')'('r')')'8333#:run://script:'#Const::'('c')'('r')')'BITORE'://const: BITORE':Build:"'@iixixi/iixixi'##:'://Run::'#://Const::'#://Build:''wallet'/config.ruby.gem.yaml.api/adk/.jdk.s.e.yml.json.png@iixixi/iixixi/READme.Md#://Build::'item's:'id':'='('('c')'('r')')'='BITORE.sigs'='['volume']'['21000000']'#bundle-with'rust.ui/rakefile/.yaml.json/{${RubyGem}makefile/Gem.spec/Rakefile.ui'#run:'('('c')'('r')')'='Bundle-with::python.js #Run::''script::'#Pull_Request::Branches:mojojojojo/bitore/core/embedder/embedder'::Const:'#:request_pull::'['branches::']'['mainbranch']'@mojojojojo'#:request_push:'['branches']':'['trunk']'@iixixi/iixixi/'README.md'#://Build::'{'{'['('('c')'('r')')']'}'}':':://const:'container'type'DOCKER'::build'with:'python.js'@iPunblish::ixixi'/'iixixi'
Publish::
Release:
Deploy:'
Launch::'@'iixixi'/'iixixi'/'README'.'mD'
Name: 'Repo'Sync'
Deployee::'@Iixixi'/'iixixi'/'contributing'.Md''#://return:'#'
Name: Enterprise Administrator
redirect_from: enterprise/admin/hidden/migrating-from-github-fi//enterprise/admin
intro:
Documentation and guides for enterprise administrators, system administrators, and security specialists who {% if enterpriseServerVersions contains currentVersion %}deploy,
Config.yaml.api/adk/sdk/sun.java.jdk.s.e'
'# Const::'{{$RubyGems}'{[(github_secret_token_item_id)]}''{[Volume]}}''{{$RubyGems}'{[((c)(r)]}'[21000000]'
'# versioning:'@'v'-'0.1.3,0.6.1,.0.13.9
'# enterprise-server/ae/atom/electron/ci/cli/ZachryTylerWood@Administrator@.git::Const:'::Fix:::All':'
'# github-atom/electrom/api/adk/sdk.s.e'

link_with_intro/overview'
link_with_intro/installation'
link_with_intro/configuration'
link_with_intro/authentication'
link_with_intro/user-management'
link_with_intro/policies'
link_with_intro/enterprise-management'
link_with_intro/github-actions'
link_with_intro/packages'
#link_with_intro/enterprise-support'

link_with_intro/release-notes'
Build::Return::'#</script>
'# Name: BITORE

Controls when the action will run.
on:

Triggers the workflow on push or pull request events but only for the tree branch
push:
branches: [ TREE ]
pull_request:
branches: [ trunk ]

Allows you to run this workflow manually from the Actions tab
workflow_dispatch:

A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:

This workflow contains a single job called "build"
build:
# The type of runner that the job will run on
runs-on: ubuntu-latest
# Steps represent a sequence of tasks that will be executed as part of the job
steps:
# Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
- uses: actions/checkout@v2
# Runs a single command using the runners shell
- name: Run a one-line script
run: echo Hello, world!
# Runs a set of commands using the runners shell
# name: Run a multi-line script
# run:.
#Const::Name::TEIRAFORMA::'build script'
#Reques
#Pull
#Branches::
"private": false
"main": "index.js",
"scripts": {
"build"
#Const:
#Build:
run: bundle install
name: Run tests
run: bundle exec rake
name:autoupdate branch
on:
push:
branches:
[main]
jobs:
autoupdate:
name: autoupdate
runs-on: ubuntu-18.04
steps:uses:'-'
-uses:
-actions:@v-0.1.0.3.6.9
-env:{'{'['('GITHUB_TOKEN_ITEM_ID')']'}'}'{'$'{'{'['('('c')'('r')')'}']'}'}'}'
-[Volume]'e'.g'.[21000000]'
-PR_FILTER: labelled
-PR_LABELS: autoupdate
-Pull: iixixi/✨Engineering
-MERGE:PR'@'"iixixi✨Engineering
-Construct:terraform:build:Repo-sync:Bundle:container:rakrfileadk.api.json.yaml
-#update::dependencies:[none]
-#Automate:Update::sev1:tta:3sec:sev2:issue:https://github.com/github/docs-internal/issuestta:5 sec::sev3:slack: docs-engineering'@Iixixi
-#Automate::HerokuDependaBot::Automate::Update:All:# lint Expected — Waiting for status to be reported
-Required# staging Expected — Waiting for status to be reported
-Required# test (content) Expected — Waiting for status to be reported
-Required# test (graphql) Expected — Waiting for status to be reported
-Required# test (meta) Expected — Waiting for status to be reported
-Required# test (rendering) Expected — Waiting for status to be reported
-Required# test (routing) Expected — Waiting for status to be reported
-Required# test (unit) Expected — Waiting for status to be reported
-Required
#Return:Run

- "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[Deleting a package](/packages/learn-github-packages/deleting-a-package){% endif %}"
