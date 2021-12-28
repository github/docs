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
  ghec: '*'
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

To install gems, you need to authenticate to {% data variables.product.prodname_registry %} by editing the *~/.gemrc* file for your project to include `https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/`. You must replace:
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
- https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/
:update_sources: true
:verbose: true  

```

To authenticate with Bundler, configure Bundler to use your personal access token, replacing *USERNAME* with your {% data variables.product.prodname_dotcom %} username, *TOKEN* with your personal access token, and *OWNER* with the name of the user or organization account that owns the repository containing your project.{% ifversion ghes %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace *HOSTNAME* with the hostname of your {% data variables.product.prodname_ghe_server %} instance.{% elsif ghae %}Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry, `rubygems.HOSTNAME`. Replace *HOSTNAME* with the hostname of {% data variables.product.product_location %}.{% endif %}

```shell
$ bundle config https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER USERNAME:TOKEN</em>
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
  --host https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/<em>OWNER</em> \
  <em>OCTO-GEM-0.0.1</em>.gem
  ```

## Publishing multiple packages to the same repository

To publish multiple gems to the same repository, you can include the URL to the {% data variables.product.prodname_dotcom %} repository in the `github_repo` field in `gem.metadata`. If you include this field, {% data variables.product.prodname_dotcom %} matches the repository based on this value, instead of using the gem name.{% ifversion ghes or ghae %} Replace *HOSTNAME* with the host name of {% data variables.product.product_location %}.{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

## Installing a package

You can use gems from {% data variables.product.prodname_registry %} much like you use gems from *rubygems.org*. You need to authenticate to {% data variables.product.prodname_registry %} by adding your {% data variables.product.prodname_dotcom %} user or organization as a source in the *~/.gemrc* file or by using Bundler and editing your *Gemfile*.

{% data reusables.package_registry.authenticate-step %}
1. For Bundler, add your {% data variables.product.prodname_dotcom %} user or organization as a source in your *Gemfile* to fetch gems from this new source. For example, you can add a new `source` block to your *Gemfile* that uses {% data variables.product.prodname_registry %} only for the packages you specify, replacing *GEM NAME* with the package you want to install from {% data variables.product.prodname_registry %} and *OWNER* with the user or organization that owns the repository containing the gem you want to install.{% ifversion ghes %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry. If your instance has subdomain isolation enabled, use `rubygems.HOSTNAME`. If your instance has subdomain isolation disabled, use `HOSTNAME/_registry/rubygems`. In either case, replace *HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance.{% elsif ghae %} Replace `REGISTRY-URL` with the URL for your instance's Rubygems registry, `rubygems.HOSTNAME`. Replace *HOSTNAME* with the hostname of {% data variables.product.product_location %}.{% endif %}

  ```ruby
  source "https://rubygems.org"

  gem "rails"

  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER" do
    gem "GEM NAME"
  end
  ```

3. For Bundler versions earlier than 1.7.0, you need to add a new global `source`. For more information on using Bundler, see the [bundler.io documentation](http://bundler.io/v1.5/gemfile.html).

  ```ruby
  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER"
  source "https://rubygems.org"

  gem "rails"
  gem "GEM NAME"
  ```

4. Install the package:
  ```shell
  $ gem install octo-gem --version "0.1.1"
  ```

## Further reading

- "{% ifversion fpt or ghes > 3.0 or ghec %}[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif ghes < 3.1 or ghae %}[Deleting a package](/packages/learn-github-packages/deleting-a-package){% endif %}"
     ____  __           __        __          _     
     ____  __           __        __          _     

   / __ )/ /___  _____/ /_______/ /_  ____ _(_)____
  / __  / / __ \/ ___/ //_/ ___/ __ \/ __ `/ / ___/
 / /_/ / / /_/ / /__/ ,< / /__/ / / / /_/ / / /    
/_____/_/\____/\___/_/|_|\___/_/ /_/\__,_/_/_/     
                                                   


IntroductionBlockchair API provides developers with access to data contained in 18 different blockchains. Unlike other APIs, Blockchair also supports numerous analytical queries like filtering, sorting, and aggregating blockchain data.

Here are some examples of what you can build using our API:

A wallet supporting multiple blockchains (request transaction, address, xpub data, and also broadcast transactions)
An analytical service showing some blockchain stats and visualizations
A service tracking the integrity of your or your customers' cold wallets
A solid academic research
Some fun stuff like finding the first Bitcoin block over 1 megabyte in size
For some tasks like extracting lots of blockchain data (e.g. all transactions over a 2 month period) it's better to use our Database dumps feature instead (see https://blockchair.com/dumps for documentation) — it's possible to download the entire database dumps in TSV format and insert the data onto your own database server (like Postgresql or whatever) to further analyze it.

Almost every API endpoint description is accompanied with an example visualization of the data on our website (https://blockchair.com), and it's also worth it to note that the website is working completely using our API (yes, even the data for charts is pulled from one of our endpoints, and it's fully customizable).

Blockchair cares about user privacy, we neither collect nor share with anyone your personal data rather than for statistical purposes. That includes using the API as well. Please refer to our Privacy policy: https://blockchair.com/privacy. Please also check out our Terms of service available here: https://blockchair.com/terms — by using our API, you are agreeing to these terms.

We have a public tracker for bugs, issues, and questions available on GitHub: https://github.com/Blockchair/Blockchair.Support/issues — please use it or contact us by any other means available.

Our API is free to try under some limitations, and we have a variety of premium plans. Please check out the information about the limits and plans.

Supported blockchains and second layersAs of today, our API supports 19 blockchains (17 mainnets and 2 testnets) divided into 9 groups:

Bitcoin-like blockchains (Bitcoin, Bitcoin Cash, Litecoin, Bitcoin SV, Dogecoin, Dash, Groestlcoin, Zcash, eCash, Bitcoin Testnet), also known as UTXO-based blockchains
Ethereum-like blockchains (Ethereum, Ethereum Goerli Testnet)
Ripple-like blockchains (Ripple)
Stellar-like blockchains (Stellar)
Monero-like blockchains (Monero)
Cardano-like blockchains (Cardano)
Mixin-like DAGs (Mixin) — technically, it's a DAG rather than a blockchain, but for the sake of unification it may be mentioned as a blockchain further in this documentation
Tezos-like blockchains (Tezos)
EOS-like blockchains (EOS)
Within a group, there's no or little difference between the set of available endpoints and their output.

Here's the list of available mainnets:

BlokchainGroupAPI path prefixSupport statusBitcoinBitcoin-likehttps://api.blockchair.com/bitcoinFull supportBitcoin CashBitcoin-likehttps://api.blockchair.com/bitcoin-cashFull supportEthereumEthereum-likehttps://api.blockchair.com/ethereumFull supportLitecoinBitcoin-likehttps://api.blockchair.com/litecoinFull supportBitcoin SVBitcoin-likehttps://api.blockchair.com/bitcoin-svFull supportDogecoinBitcoin-likehttps://api.blockchair.com/dogecoinFull supportDashBitcoin-likehttps://api.blockchair.com/dashFull supportRippleRipple-likehttps://api.blockchair.com/rippleAlpha mode, possible compatibility-breaking changesGroestlcoinBitcoin-likehttps://api.blockchair.com/groestlcoinFull support at least till January 1st, 2021StellarStellar-likehttps://api.blockchair.com/stellarAlpha mode, possible compatibility-breaking changesMoneroMonero-likehttps://api.blockchair.com/moneroAlpha mode, possible compatibility-breaking changesCardanoCardano-likehttps://api.blockchair.com/cardanoAlpha mode, possible compatibility-breaking changesZcashBitcoin-likehttps://api.blockchair.com/zcashFull supportMixinMixin-likehttps://api.blockchair.com/mixinFull support at least till April 24th, 2021TezosTezos-likehttps://api.blockchair.com/tezosAlpha mode, possible compatibility-breaking changesEOSEOS-likehttps://api.blockchair.com/eosAlpha mode, possible compatibility-breaking changeseCashBitcoin-likehttps://api.blockchair.com/ecashBeta mode, possible instability. Also known as Bitcoin Cash ABC and Bitcoin ABC.
Please read our statement on the November 15th, 2020 Bitcoin Cash split: https://twitter.com/Blockchair/status/1324424632179576832. It is expected that Bitcoin ABC's hashrate will be very low so 51% attacks are possible. We'll be running Bitcoin ABC in beta mode and we don't guarantee neither its stability, nor that we'll run it if the chain won't be used by businesses. Once the situation becomes more stable we'll update the documentation. At the moment, other parts of the documentation don't reflect Bitcoin ABC support, so please assume that for every bitcoin-cash endpoint there's a bitcoin-abc equivalent except for https://api.blockchair.com/bitcoin-cash/nodes.

There are also following testnets supported which are technically considered as separate blockchains:

BlokchainGroupAPI path prefixSupport statusBitcoin TestnetBitcoin-likehttps://api.blockchair.com/bitcoin/testnetFull supportEthereum Goerli TestnetEthereum-likehttps://api.blockchair.com/ethereum/testnetDevelopment mode, no guaranteed stability
We aim to support more blockchains (and their testnets) in future to cover as many users as possible. We don't disclose which blockchains we'll add next and how we choose them, but our main markers are daily number of real transactions and market capitalization. If you're representing a coin community which would like to add its blockchain to our platform, we'd be happy to talk.

As a general rule, if we add a blockchain to our platform, it means we'll support it and related functions indefinitely. However, there are some exceptions:

Since a blockchain system can be an unstable product, we may cease support in case the blockchain itself (or the node software we're using) stops to function or starts to function improperly;
If a blockchain hard-forks and that results in a new ruleset we can't support for technical or other reasons, we may either drop support for this blockchain, or don't accept the new ruleset;
If a blockchain is community-backed, we guarantee support till some specified date (this is reflected in the tables above). If its community decides not to prolong the agreement with Blockchair after that date, we may either continue to support that blockchain for free, or drop support for it;
If we see that a particular blockchain became unpopular on our platform, we may terminate its support with a 3 month notice.
For some of the blockchains we support we don't store full historical data. These blockchains are: Ripple, Stellar, EOS. That means you won't be able to query some old blocks, and the transaction list for an address may not show some old transactions. See Available block ranges API endpoint to get data on which blocks are available in these blockchains. All other blockchains have full historical data. It's our intent to have full historical data for all blockchains.

Blockchair API also supports 2 layer 2 solutions (tokens) divided into 2 groups:

Omni-like tokens (Omni Layer on top of Bitcoin)
ERC-20-like tokens (ERC-20's on top of Ethereum)
Like with blockchains, within a group, there's no or little difference between the available endpoints.

Layer 2GroupParent blockchainAPI path prefixSupport statusOmni LayerOmni-likeBitcoinhttps://api.blockchair.com/bitcoin/omniAlpha supportERC-20ERC-20-likeEthereumhttps://api.blockchair.com/ethereum/erc-20Beta support
We also plan to bring ERC-721 support in the future.

Ethereum Goerli Testnet also supports ERC-20's.

Wormhole support was dropped on January 1st, 2020 with a 3-month notice as it's not used by anyone anymore.

Quick endpoint referenceThis is the full list of available API endpoints.

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, or bitcoin/testnet
{:eth_chain} can be ethereum or ethereum/testnet
{:xrp_chain} can be only ripple
{:xlm_chain} can be only stellar
{:xmr_chain} can be only monero
{:ada_chain} can be only cardano
{:xin_chain} can be only mixin
{:xtz_chain} can be only tezos
{:eos_chain} can be only eos
{:xchain_token} can be tether, usd-coin, or binance-usd
Endpoint pathDocsBase request costStatusGeneral stats———https://api.blockchair.com/stats👉1Stablehttps://api.blockchair.com/{:btc_chain}/stats👉1Stablehttps://api.blockchair.com/{:eth_chain}/stats👉1Stablehttps://api.blockchair.com/{:xrp_chain}/stats👉1Stablehttps://api.blockchair.com/{:xlm_chain}/stats👉1Stablehttps://api.blockchair.com/{:xmr_chain}/stats👉1Stablehttps://api.blockchair.com/{:ada_chain}/stats👉1Stablehttps://api.blockchair.com/{:xin_chain}/stats👉1Stablehttps://api.blockchair.com/{:xtz_chain}/stats👉1Stablehttps://api.blockchair.com/{:eos_chain}/stats👉1Stablehttps://api.blockchair.com/cross-chain/{:xchain_token}/stats👉1AlphaBlock-related information———https://api.blockchair.com/{:btc_chain}/dashboards/block/{:height}₀👉1Stablehttps://api.blockchair.com/{:btc_chain}/dashboards/block/{:hash}₀👉1Stablehttps://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:height}₀,...,{:height}ᵩ👉1 + 0.1*cStablehttps://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:hash}₀,...,{:hash}ᵩ👉1 + 0.1*cStablehttps://api.blockchair.com/{:btc_chain}/raw/block/{:height}₀👉1Unstablehttps://api.blockchair.com/{:btc_chain}/raw/block/{:hash}₀👉1Unstablehttps://api.blockchair.com/{:btc_chain}/blocks?{:query}👉2Stablehttps://api.blockchair.com/{:eth_chain}/dashboards/block/{:height}₀👉1Stablehttps://api.blockchair.com/{:eth_chain}/dashboards/block/{:hash}₀👉1Stablehttps://api.blockchair.com/{:eth_chain}/dashboards/blocks/{:height}₀,...,{:height}ᵩ👉1 + 0.1*cStablehttps://api.blockchair.com/{:eth_chain}/dashboards/blocks/{:hash}₀,...,{:hash}ᵩ👉1 + 0.1*cStablehttps://api.blockchair.com/{:eth_chain}/raw/block/{:height}₀👉1Unstablehttps://api.blockchair.com/{:eth_chain}/raw/block/{:hash}₀👉1Unstablehttps://api.blockchair.com/{:eth_chain}/blocks?{:query}👉2Stablehttps://api.blockchair.com/{:xrp_chain}/raw/ledger/{:height}₀👉1Alphahttps://api.blockchair.com/{:xrp_chain}/raw/ledger/{:hash}₀👉1Alphahttps://api.blockchair.com/{:xlm_chain}/raw/ledger/{:height}₀👉1Alphahttps://api.blockchair.com/{:xmr_chain}/raw/block/{:height}₀👉1Alphahttps://api.blockchair.com/{:xmr_chain}/raw/block/{:hash}₀👉1Alphahttps://api.blockchair.com/{:ada_chain}/raw/block/{:height}₀👉1Alphahttps://api.blockchair.com/{:ada_chain}/raw/block/{:hash}₀👉1Alphahttps://api.blockchair.com/{:xin_chain}/raw/snapshot/{:height}₀👉1Alphahttps://api.blockchair.com/{:xin_chain}/raw/snapshot/{:hash}₀👉1Alphahttps://api.blockchair.com/{:xin_chain}/raw/snapshots?{:query}👉1Alphahttps://api.blockchair.com/{:xtz_chain}/raw/block/{:height}₀👉1Alphahttps://api.blockchair.com/{:xtz_chain}/raw/block/{:hash}₀👉1Alphahttps://api.blockchair.com/{:xtz_chain}/raw/blocks?{:query}👉1Alphahttps://api.blockchair.com/{:eos_chain}/raw/block/{:height}₀👉1AlphaTransaction-related information and actions———https://api.blockchair.com/{:btc_chain}/dashboards/transaction/{:hash}₀👉1Stablehttps://api.blockchair.com/{:btc_chain}/dashboards/transactions/{:hash}₀,...,{:hash}ᵩ👉1 + 0.1*cStablehttps://api.blockchair.com/{:btc_chain}/raw/transaction/{:hash}₀👉1Unstablehttps://api.blockchair.com/{:btc_chain}/push/transaction (POST)👉1Stablehttps://api.blockchair.com/{:btc_chain}/transactions?{:query}👉5Stablehttps://api.blockchair.com/{:btc_chain}/mempool/transactions?{:query}👉2Stablehttps://api.blockchair.com/{:eth_chain}/dashboards/transaction/{:hash}₀👉1Stablehttps://api.blockchair.com/{:eth_chain}/dashboards/transactions/{:hash}₀,...,{:hash}ᵩ👉1 + 0.1*cStablehttps://api.blockchair.com/{:eth_chain}/raw/transaction/{:hash}₀👉1Unstablehttps://api.blockchair.com/{:eth_chain}/push/transaction (POST)👉1Stablehttps://api.blockchair.com/{:eth_chain}/transactions?{:query}👉5Stablehttps://api.blockchair.com/{:eth_chain}/mempool/transactions?{:query}👉2Stablehttps://api.blockchair.com/{:xrp_chain}/raw/transaction/{:hash}₀👉1Alphahttps://api.blockchair.com/{:xlm_chain}/raw/transaction/{:hash}₀👉1Alphahttps://api.blockchair.com/{:xmr_chain}/raw/transaction/{:hash}₀👉1Alphahttps://api.blockchair.com/{:ada_chain}/raw/transaction/{:hash}₀👉1Alphahttps://api.blockchair.com/{:xin_chain}/raw/transaction/{:hash}₀👉1Alphahttps://api.blockchair.com/{:xin_chain}/push/transaction (POST)👉1Stablehttps://api.blockchair.com/{:xtz_chain}/raw/operation/{:hash}₀👉1Alphahttps://api.blockchair.com/{:eos_chain}/raw/transaction/{:hash}₀👉1Alphahttps://api.blockchair.com/{:eos_chain}/raw/transaction/({:block_height},{:hash})👉1AlphaAddress-related information———https://api.blockchair.com/{:btc_chain}/dashboards/address/{:address}₀👉1Stablehttps://api.blockchair.com/{:btc_chain}/dashboards/addresses/{:address}₀,...,{:address}ᵩ👉1 + 0.1*cStablehttps://api.blockchair.com/{:btc_chain}/addresses/balances (POST, mass balance check)👉1 + 0.001*cStablehttps://api.blockchair.com/{:btc_chain}/dashboards/xpub/{:extended_key}👉1 + 0.1*dBetahttps://api.blockchair.com/{:btc_chain}/addresses?{:query}👉2Stablehttps://api.blockchair.com/{:eth_chain}/dashboards/address/{:address}₀👉1Stablehttps://api.blockchair.com/{:eth_chain}/addresses?{:query}👉2Stablehttps://api.blockchair.com/{:xrp_chain}/raw/account/{:address}₀👉1Alphahttps://api.blockchair.com/{:xlm_chain}/raw/account/{:address}₀👉1Alphahttps://api.blockchair.com/{:ada_chain}/raw/address/{:address}₀👉1Alphahttps://api.blockchair.com/{:xtz_chain}/raw/account/{:address}₀👉1Alphahttps://api.blockchair.com/{:eos_chain}/raw/account/{:address}₀👉1Alphahttps://api.blockchair.com/multi/dashboards/addresses/{:address}₀,...,{:address}ᵩ👉ComplexAlphaSpecial entities———https://api.blockchair.com/{:btc_chain}/outputs?{:query}👉10Betahttps://api.blockchair.com/{:btc_chain}/mempool/outputs?{:query}👉2Betahttps://api.blockchair.com/{:eth_chain}/dashboards/uncle/{:hash}₀👉1Stablehttps://api.blockchair.com/{:eth_chain}/dashboards/uncles/{:hash}₀,...,{:hash}ᵩ👉1 + 0.1*cStablehttps://api.blockchair.com/{:eth_chain}/uncles?{:query}👉2Stablehttps://api.blockchair.com/{:eth_chain}/calls?{:query}👉10Stablehttps://api.blockchair.com/{:xmr_chain}/outputs?{:query}👉1Alphahttps://api.blockchair.com/zcash/raw/validate?paymentdisclosure=zpd:...N/A1Alphahttps://api.blockchair.com/{:xin_chain}/raw/round/{:hash}👉1Alphahttps://api.blockchair.com/{:xin_chain}/raw/round/({:node_hash},{:id})👉1Alphahttps://api.blockchair.com/{:xin_chain}/raw/node/{:hash}👉1Alphahttps://api.blockchair.com/{:xin_chain}/raw/graph👉1Alphahttps://api.blockchair.com/{:xin_chain}/raw/mintings?{:query}👉1Alphahttps://api.blockchair.com/{:xin_chain}/raw/nodes?{:query}👉1AlphaSpecial second layer protocol endpoints (Omni Layer and ERC-20 tokens)———https://api.blockchair.com/bitcoin/omni/stats👉1Alphahttps://api.blockchair.com/bitcoin/omni/dashboards/property/{:prorerty_id}👉1Alphahttps://api.blockchair.com/bitcoin/omni/properties👉10Alphahttps://api.blockchair.com/ethereum/erc-20/{:token_address}/stats👉1Betahttps://api.blockchair.com/ethereum/erc-20/{:token_address}/dashboards/address/{:address}👉1Betahttps://api.blockchair.com/ethereum/erc-20/tokens?{:query}👉2Betahttps://api.blockchair.com/ethereum/erc-20/transactions?{:query}👉5Betahttps://api.blockchair.com/ethereum/erc-20/{:token_address}/utils/allowance?owner={:owner_address}&spender={:spender_address}N/A1AlphaState changes———https://api.blockchair.com/{:btc_chain}/state/changes/block/{:block_id}👉5Stablehttps://api.blockchair.com/{:btc_chain}/state/changes/mempool👉10Stablehttps://api.blockchair.com/{:eth_chain}/state/changes/block/{:block_id}👉5StableMisc———https://api.blockchair.com/range👉1Stablehttps://api.blockchair.com/tools/releases👉1Stablehttps://api.blockchair.com/tools/halvening👉1Stablehttps://api.blockchair.com/news (News API)👉1StableNetwork nodes———https://api.blockchair.com/nodes👉1Stablehttps://api.blockchair.com/{:btc_chain}/nodes👉1StableSpecial Premium API endpoints———https://api.blockchair.com/premium/stats?key={:api_key}👉0Stable
Please note there are some endpoints which aren't listed here (most of the times they have the https://api.blockchair.com/internal prefix), but used by our web interface — these endpoints aren't meant to be used by 3rd parties.

The base request cost is used only if there are no additional parameters included in the request, and the default limits on the number of results are used. For example, if you're requesting info on ERC-20 tokens while getting data on an Ethereum address using a special parameter or increasing the number of latest transactions for this address, you may be charged additional request points. c in formulas means "number of requested entities". d means "depth" (applied to xpub lookups). Detailed cost formulas are available in the corresponding documentation sections.

Basic API requestRequests to the API should be made through the HTTPS protocol by GET requests to the domain api.blockchair.com. Here's an example request URL: https://api.blockchair.com/bitcoin/blocks?a=sum(generation)

> curl 'https://api.blockchair.com/bitcoin/blocks?a=sum(generation)'
{"data":[{"sum(generation)":1800957104497237}],"context":{"code":200,"source":"A","time":0.007825851440429688,"limit":10000,"offset":null,"rows":1,"pre_rows":1,"total_rows":1,"state":600767,"cache":{"live":true,"duration":60,"since":"2019-10-23 21:33:00","until":"2019-10-23 21:34:00","time":null},"api":{"version":"2.0.38","last_major_update":"2019-07-19 18:07:19","next_major_update":null,"documentation":"https:\/\/github.com\/Blockchair\/Blockchair.Support\/blob\/master\/API.md","notice":"Beginning July 19th, 2019 all applications using Blockchair API on a constant basis should apply for an API key (mailto:info@blockchair.com)"}}}


Here are some considerations:

If you're building a web app, your users shouldn't make direct API requests from there. While we don't have any limitations in our CORS policy (API currently responds with a Access-Control-Allow-Origin: * header), that policy may be changed in the future without any warnings
Please don't use some random keys in your requests (e.g. ?random_key=random_value) as this can result in a 400 error (though we don't force this rule at the moment for most of our endpoints)
If you're using the API with an API key, you should keep it in secret. In order to build an app for public use using our API, you should build a proxy, so the requrst flow will look like the following: user → https://your-proxy/{:request_string} → https://api.blockchair.com/{:request_string}?key={:api_key} — that way you won't disclose the key to your users
The only exception to the "requests should be made using GET" rule is the Broadcasting transactions endpoint accepting POST requests
Basic API responseAPI returns JSON-encoded data. Typically, the response is an array consisting of two subarrays:

data — contains the data you requested

context — contains some metadata, e.g. a status code, query execution time, used options, etc. Here are some of it (note that not all endpoints return all of the keys listed here):

context.code — server response code (also included in HTTP headers), can return:200 if the request succeeded
400 if there is a user error in the request
404 for some endpoints in case there's no results (this behavior is deprecated), also if you're requesting non-existing endpoint
402, 429, 435, 436, or 437 if any limit on the number or complexity of requests is exceeded (see the list of limits, and please contact us if you'd like to increase them) — your IP address will be unblocked automatically after some time
430, 434, or 503 if your IP address is temporarily blocked
500 or 503 in case of a server error (it makes sense to wait and repeat the same request or open a ticket at https://github.com/Blockchair/Blockchair.Support/issues/new or write to info@blockchair.com)
context.error — error description in the case there's an error
context.state — number of the latest known block (e.g., for all requests to endpoints connected to the Bitcoin blockchain this will yield the latest block number for Bitcoin). For example, it may be useful to calculate the number of network сonfirmations, or correctly iterate trough the results using ?offset=. Not returned if the request has failed.
context.state_layer_2 — the latest block number for which our engine has processed second layer (e.g. ERC-20) transactions. If it's less than the block id in your current environment (e.g. block id of a transaction you requested), it makes sense to repeat the request after some time to retrieve second layer data. With our current architecture it always equals to context.state, but that may change in future.
context.results — contains the number of found results (dashboard and raw endpoints)
context.limit — applied limit to the number of results (the default one or user set in the ?limit= query section)
context.offset — applied offset (the default one or user set in the ?offset= query section)
context.rows — contains the number of shown rows returned from the database (infinitable endpoints)
context.total_rows — total number of rows meeting the request (infinitable endpoints)
context.api — array of data on the status of the API:context.api.version — version of API
context.api.last_major_update — timestamp of the last update, that somehow has broken backward compatibility for "stable" endpoints
context.api.next_major_update — timestamp of the next scheduled update, that can break compatibility, or null, if there are no updates scheduled
context.api.documentation — an URL to the latest version of documentation
context.api.notice — just a text notice which, for example, may describe upcoming changes (this is an optional field)
context.cache — array of info on whether the response comes from the cache or notcontext.cache.live — false if the response comes from the cache, true otherwise
context.cache.until — cache expiry timestamp
context.request_cost — API request cost (1 for ordinary queries, more than 1 for complex requests, see the next section for details)
There are also some things which are the same across all endpoints:

All timestamps are in the UTC timezone, and have the following format: YYYY-MM-DD hh:ii:ss . If you require an ISO 8601 timestamp with the timezone, just replace the space with a T, and append Z to the timestamp (e.g. 2009-01-03 18:15:05 will then become 2009-01-03T18:15:05Z)
There are some endpoints allowing you to request data in formats other than JSON (e.g. TSV or CSV). In that case, the API returns plain output data in the desired format without metadata
Most of the responses are cached for some amount of time. Bypassing cache is allowed in some of our Premium API plans (see the next documentation section)
API rate limits, API keys, and Premium APIWhile we do allow to perform some amount of requests free of charge, generally our API is not free to use.

Here's our policy:

If you use our API occasionally for personal use or testing up to 1440 requests a day (1 request a minute in average) — a key is not required
Non-commercial and academic projects which require up to 1440 requests a day — a key is not required
Non-commercial and academic projects requiring more than 1440 requests a day should apply for a Premium API key, and are subject to a discount up to 50%
Non-commercial and academic projects requiring more than 1440 requests a day which are also Blockchair partners are subject to a discount up to 100%
Commercial projects should apply for a key to Premium API not depending on the required number of requests
Commercial projects which are also Blockchair partners (e.g. linking to Blockchair from the app's interface) are subject to a discount up to 10%
Up to 1440 requests a dayMore than 1440 requests a dayPersonal or testingKey is not neededKey is requiredNon-commercial or academicKey is not neededKey is required, up to 100% discountCommercialKey is requiredKey is required, up to 10% discount
Our Premium API plans are available here: https://blockchair.com/api/plans, please contact us if you have any questions or would like to have a custom plan.

The daily request counter is reset at 00:00 UTC every day.

There's an additional hard limit of 30 requests per minute on the free plan.

If you exceed the limit, an error 402 or 429 will be returned. On some of our Premium API plans it's possible to "borrow" requests from the next day if you hit the limit (if your daily limit is n and you hit it, n more requests will be added to the limit for 1 day, you will be notified, and your subscription period will shrink by 1 day) — this behavior is turned off by default.

There's an additional soft limit of 5 requests per second on both free and paid plans. This limit is applied only if we experience a very high load on our servers, and it's turned on and off manually by our admins. In case you hit this limit, an error 435 will be returned.

If you have exceeded the limit multiple times without using a key, an error 430, 434, or 503 may be returned meaning that you've been blocked. It's also possible to get automatically blocked without exceeding the limit in case we're seeing botnet usage in order to bypass the limit. If you've been blocked and you believe you haven't abused our API above the limit, please contact us. If you're using a valid API key it's not possible to get blocked; if you've been previously blocked and starting to use a key, you'll get automatically unblocked.

Please note that some of API requests may "cost" more than 1 request. Here's an example:

https://api.blockchair.com/bitcoin/dashboards/block/0 — requesting information about one block via one request "costs" 1 request
https://api.blockchair.com/bitcoin/dashboards/blocks/0,1,2,3,4,5,6,7,8,9 — requesting information about ten blocks via one request "costs" 1.9 requests
Every API endpoint documentation has the "Request cost formula" section describing how the "cost" is calculated. For most API requests it's always 1. It's more than 1 in cases when you're requiring additional data (e.g. when you're requesting data on an Ethereum address, and you're also requesting its ERC-20 token balances).

Every API response yields context.request_cost with the request cost number ("request points").

As a kindly reminder, there are tasks such as extracting lots of blockchain data (e.g. all transactions over a 2 month period) which require lots of requests done — it may be better to use our Database dumps feature instead of the API (see https://blockchair.com/dumps for documentation)

What are the steps to acquire an API key?

Our Premium API dashboard is available here: https://api.blockchair.com/premium

First, you need to choose a suitable plan: https://blockchair.com/api/plans

At the moment, this automated system accepts PayPal payments only (which also allows you to pay with your card). If you'd like to pay via wire transfer or crypto, please contact us at info@blockchair.com

Once you've paid, you will receive a one-time password which can be used to generate and activate your API key. Enter it on this page into the "I want to activate an API key I've just purchased..." form, then fill in a small form about yourself, and you'll get the key.

After you have received a key, you can track your stats and extend your subscription. Enter your API key on this page into the "I already have an API key and would like to see some stats or extend my subscription..." form. If you'd like to extend your subscription, you'd need to buy a one-time extension password and enter it on your key management page.

If you have any questions about how to buy and use your key, you can always contact us.

In order to use an API key, you need to append ?key={:api_key} or &key={:api_key} to the end of request URLs. You should use ? if there are no other parameters in the URL, and & otherwise. Here are three examples of correct URLs with a key:

https://api.blockchair.com/bitcoin/dashboards/block/0?key=myfirstpasswordwas4321andifeltsmartaboutit

https://api.blockchair.com/bitcoin/dashboards/block/0?limit=0&key=myfirstpasswordwas4321andifeltsmartaboutit

https://api.blockchair.com/bitcoin/dashboards/block/0?key=myfirstpasswordwas4321andifeltsmartaboutit&limit=0

There's an extra API endpoint for those who have an API key allowing to track the number of request made.

API versioning and changelogAs a reminder, there's the context.api array in every API response which contains the following data:

context.api.version — version of API
context.api.last_major_update — timestamp of the last update, that somehow has broken backward compatibility for "stable" endpoints
context.api.next_major_update — timestamp of the next scheduled update, that can break compatibility, or null, if there are no updates scheduled
context.api.documentation — an URL to the latest version of documentation
context.api.notice — just a text notice which, for example, may describe upcoming changes (this is an optional field)
When we change something, or add new functions, we bump the API version number. Generally, we try as hard as possible not to bring any compatibility-breaking changes in API updates, but sometimes this is needed as some blockchains change their features themselves, we're fixing various bugs, etc. This doesn't apply, however, to changes to endpoints which are either marked as alpha- or beta-stage functions, or unstable in nature (e.g. all raw endpoints where the API returns data directly from our nodes, and the response may change as we upgrade the nodes). These marks are reflected in the Quick endpoint reference.

The changelog is available here: https://github.com/Blockchair/Blockchair.Support/blob/master/API.md

It makes sense to check if context.api.version has increased and/or just whether context.api.next_major_update is not null or larger than the latest update date known to you. If that's the case — you can send yourself a notification and review the changelog to make your application compatible with the changes starting from context.api.next_major_update.

General stats endpointsStats on multiple blockchains at onceAllows to retrieve the most important stats on all blockchains we support via just one API request.

Endpoint:

https://api.blockchair.com/stats
If you require data on just one blockchain, please use https://api.blockchair.com/{:chain}/stats instead.

Output:

data contains an array with stats on 15 blockchains we support at once:

Bitcoin
Bitcoin Cash
Ethereum
Litecoin
Bitcoin SV
Dogecoin
Dash
Ripple
Groestlcoin
Stellar
Monero
Cardano
Zcash
Mixin
Tezos
eCash
and on 3 cross-chain tokens:

Tether (USDT)
USD Coin (USDC)
Binance USD (BUSD)
Note that Bitcoin Testnet stats are not included in this output.

Description of the fields is available in the next three sections of documentation.

Example output:

https://api.blockchair.com/stats:

{
  "data": {
    "bitcoin": {
      "data": {
        "blocks": 599952,
        ...
      }
    },
    "bitcoin-cash": {
      "data": {
        "blocks": 605134,
        ...
      }
    },
    "bitcoin-sv": {
      "data": {
        "blocks": 604886,
        ...
      }
    },
    "ethereum": {
      "data": {
        "blocks": 8766052,
        ...
      }
    },
    "litecoin": {
      "data": {
        "blocks": 1721519,
        ...
      }
    },
    "dogecoin": {
      "data": {
        "blocks": 2941267,
        ...
      }
    },
    "dash": {
      "data": {
        "blocks": 1156197,
        ...
      }
    },
    "ripple": {
      "data": {
        "ledgers": 50795982,
        ...
      }
    },
    "groestlcoin": {
      "data": {
        "blocks": 2801282,
        ...
      }
    },
    "stellar": {
      "data": {
        "ledgers": 26968006,
        ...
      }
    },
    "monero": {
      "data": {
        "blocks": 2014108,
        ...
      }
    },
    "cardano": {
      "data": {
        "blocks": 3673733,
        ...
      }
    },
    "zcash": {
      "data": {
        "blocks": 756512,
        ...
      }
    },
    "mixin": {
      "data": {
        "snapshots": 18632532,
        ...
      }
    },
    "tezos": {
      "data": {
        "blocks": 974144,
        ...
      }
    },
    "cross-chain": {
      "tether": {
        "data": ...
      },
      "usd-coin": {
        "data": ...
      },
      "binance-usd": {
        "data": ...
      }
    }
  },
  "context": {
    "code": 200,
    ...
    }
  }
}


Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/
https://blockchair.com/compare
Bitcoin-like blockchain statsEndpoints:

https://api.blockchair.com/bitcoin/stats
https://api.blockchair.com/bitcoin-cash/stats
https://api.blockchair.com/litecoin/stats
https://api.blockchair.com/bitcoin-sv/stats
https://api.blockchair.com/dogecoin/stats
https://api.blockchair.com/dash/stats
https://api.blockchair.com/groestlcoin/stats
https://api.blockchair.com/zcash/stats
https://api.blockchair.com/ecash/stats
https://api.blockchair.com/bitcoin/testnet/stats
Output:

data contains an array with blockchain statistics:

blocks — total number of blocks (note that it's 1 more than the latest block number as there is block #0)
transactions — total number of transactions
outputs — total number of outputs (including spent)
circulation — number of coins in circulation (in satoshi)
blockchain_size — total size of all blocks in bytes (note: it's not the size of a full node, it's just bare blocks; nodes are bigger in size as they use database indexing, etc)
nodes— number of full network nodes (it's an approximate number and actually not a blockchain metric)
difficulty — current mining difficulty
hashrate_24h — approximated hashrate over the last 24 hours (returned as a string as it doesn't fit into an integer)
next_retarget_time_estimate — approximate timestamp of the next difficulty retarget (this field is available for Bitcoin and Litecoin only)
next_difficulty_estimate — approximate next difficulty value (this field is available for Bitcoin and Litecoin only)
best_block_height — the latest block height
best_block_hash — the latest block hash
best_block_time — the latest block time
mempool_transactions — number of transactions in the mempool
mempool_outputs — number of outputs in the mempool
mempool_size — mempool size in bytes
mempool_tps — number of transactions per second added to the mempool
mempool_total_fee_usd — sum of transaction fees in the mempool, in USD
blocks_24h — number of blocks mined over the last 24 hours
transactions_24h — number of transactions confirmed over the last 24 hours
volume_24h — total monetary volume of transactions over the last 24 hours
average_transaction_fee_24h — average transaction fee over the last 24 hours
average_transaction_fee_usd_24h — the same in USD
median_transaction_fee_24h— median transaction fee over the last 24 hours
median_transaction_fee_usd_24h — the same in USD
inflation_24h— number of new coins mined over the last 24 hours (in satoshi), this can be considered as the daily inflation
inflation_usd_24h — the same in USD
cdd_24h— total coindays destroyed over the last 24 hours
largest_transaction_24h — array of hash and value_usd — biggest payment over the last 24 hours
market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko)
market_price_btc — average market price of 1 coin in BTC (for Bitcoin it always returns 1)
market_price_usd_change_24h_percentage — market price change in percent for 24 hours
market_cap_usd — market capitalization (coins in circulation * price per coin in USD)
market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin)
countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event
suggested_transaction_fee_per_byte_sat — suggests a proper transaction fee in satoshi per byte based on the latest block
hodling_addresses — the total number of addresses with positive balance
Example output:

https://api.blockchair.com/bitcoin/stats:

{
  "data": {
    "blocks": 690165,
    "transactions": 654248075,
    "outputs": 1776138129,
    "circulation": 1875100229497096,
    "blocks_24h": 130,
    "transactions_24h": 229726,
    "difficulty": 14363025673660,
    "volume_24h": 187713267560047,
    "mempool_transactions": 6591,
    "mempool_outputs": 16532,
    "mempool_size": 5076549,
    "mempool_tps": 5.416666666666667,
    "mempool_total_fee_usd": 14219.1005,
    "best_block_height": 690164,
    "best_block_hash": "000000000000000000023fcb3703bf89ddbfc1ef5109f21c2387a9d630b78c6e",
    "best_block_time": "2021-07-08 14:37:00",
    "blockchain_size": 353767186147,
    "average_transaction_fee_24h": 14421,
    "inflation_24h": 81250000000,
    "median_transaction_fee_24h": 5269,
    "cdd_24h": 3696149.5996842394,
    "mempool_outputs": 44316,
    "largest_transaction_24h": {
      "hash": "7a83c11f42dadad1c6916cceb079835aa09ed70127dba7cdf15aa904277c907d",
      "value_usd": 773548352
    },
    "nodes": 8502,
    "hashrate_24h": "92904707138521187685",
    "inflation_usd_24h": 26587437.5,
    "average_transaction_fee_usd_24h": 4.719001232335435,
    "median_transaction_fee_usd_24h": 1.724338485,
    "market_price_usd": 32723,
    "market_price_btc": 1,
    "market_price_usd_change_24h_percentage": -5.7534,
    "market_cap_usd": 613578128025,
    "market_dominance_percentage": 43.03,
    "next_retarget_time_estimate": "2021-07-18 19:23:20",
    "next_difficulty_estimate": 17958208674260,
    "countdowns": [],
    "suggested_transaction_fee_per_byte_sat": 17,
    "hodling_addresses": 38343147
  },
  "context": {
    "code": 200,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/bitcoin
https://blockchair.com/bitcoin-cash
https://blockchair.com/litecoin
https://blockchair.com/bitcoin-sv
https://blockchair.com/dogecoin
https://blockchair.com/dash
https://blockchair.com/groestlcoin
https://blockchair.com/zcash
https://blockchair.com/ecash
https://blockchair.com/bitcoin/testnet
Ethereum-like blockchain statsEndpoints:

https://api.blockchair.com/ethereum/stats
https://api.blockchair.com/ethereum/testnet/stats
Output:

data contains an array with blockchain statistics:

blocks — total number of blocks (note that it's 1 more than the latest block number as there is block #0)
uncles — total number of uncles
transactions — total number of transactions
calls — total number of internal calls
circulation_approximate — number of coins in circulation (in wei)
blockchain_size — total size of all blocks in bytes (note: it's not the size of a full node, it's just bare blocks; nodes are bigger in size as they use database indexing, etc)
difficulty — current mining difficulty
hashrate_24h — approximated hashrate over the last 24 hours (returned as a string as it doesn't fit into an integer)
best_block_height — the latest block height
best_block_hash — the latest block hash
best_block_time — the latest block time
mempool_transactions — number of transactions in the mempool
mempool_median_gas_price — median gas price of transactions in the mempool
mempool_tps — number of transactions per second added to the mempool
mempool_total_value_approximate — sum of transaction amounts in the mempool, in wei
blocks_24h — number of blocks mined over the last 24 hours
uncles_24h — number of uncles over the last 24 hours
transactions_24h — number of transactions confirmed over the last 24 hours
volume_24h_approximate — total monetary volume of transactions over the last 24 hours
average_transaction_fee_24h — average transaction fee over the last 24 hours
average_transaction_fee_usd_24h — the same in USD
median_transaction_fee_24h— median transaction fee over the last 24 hours
median_transaction_fee_usd_24h — the same in USD
average_simple_transaction_fee_24h — average simple transfer (i.e. just sending ethers for 21.000 gas) fee over the last 24 hours
average_simple_transaction_fee_usd_24h — the same in USD
median_simple_transaction_fee_24h— median simple transfer fee over the last 24 hours
median_simple_transaction_fee_usd_24h — the same in USD
inflation_24h— number of new coins mined over the last 24 hours (in satoshi), this can be considered as the daily inflation
inflation_usd_24h — the same in USD
largest_transaction_24h: array of hash and value_usd — biggest payment over the last 24 hours
market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko)
market_price_btc — average market price of 1 coin in BTC
market_price_usd_change_24h_percentage — market price change in percent for 24 hours
market_cap_usd — market capitalization (coins in circulation * price per coin in USD)
market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin)
countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event
layer_2.erc_20 — an array of stats on the ERC-20 token layer consisting of the following elements:tokens — total number of created ERC-20 tokens (which have at least 1 transaction)
transactions — total number of ERC-20 transfers
tokens_24h — number of tokens created over the last 24 hours
transactions_24h — total number of ERC-20 transfers over the last 24 hours
suggested_transaction_fee_gwei_options — recommended transaction fees in gwei. It has 5 options: sloth for occasions when take the risk and wait; slow, normal, and fast if you want to get the transaction confirmed within 2-10 minutes; cheetah for an almost guaranteed next-block confirmation
Example output:

https://api.blockchair.com/ethereum/stats:

{
  "data": {
    "blocks": 12023239,
    "transactions": 1043567165,
    "blocks_24h": 6433,
    "circulation_approximate": "115018182780730000000000000",
    "transactions_24h": 1302619,
    "difficulty": 5447494005324207,
    "volume_24h_approximate": "6300512633065118000000000",
    "mempool_transactions": 94866,
    "mempool_median_gas_price": 40000000000,
    "mempool_tps": 7.983333333333333,
    "mempool_total_value_approximate": "77011108570302550000000",
    "best_block_height": 12023240,
    "best_block_hash": "4338ee00f57c8d0bfcb5e9bbbdc47ab40d9685e2b41801541acda53da71132f3",
    "best_block_time": "2021-03-12 10:43:40",
    "uncles": 1121915,
    "uncles_24h": 307,
    "blockchain_size": 213678005011,
    "calls": 3032610029,
    "average_transaction_fee_24h": "9339692912924509",
    "median_transaction_fee_24h": "4887620538746249",
    "inflation_24h": 13411.4375,
    "average_simple_transaction_fee_24h": "2947056048574188",
    "median_simple_transaction_fee_24h": "3129000000000000",
    "largest_transaction_24h": {
      "hash": "0xbc4fc78885355694f0a5ffe27af7e2157f323855a4e40beaf37905e3f3617640",
      "value_usd": 872236755.0026
    },
    "hashrate_24h": "453957833777017",
    "inflation_usd_24h": 23792024.239375,
    "average_transaction_fee_usd_24h": 16.56870862445721,
    "median_transaction_fee_usd_24h": 8.670687711941234,
    "average_simple_transaction_fee_usd_24h": 5.228106900731096,
    "median_simple_transaction_fee_usd_24h": 5.55087729,
    "market_price_usd": 1774.01,
    "market_price_btc": 0.031517784173684,
    "market_price_usd_change_24h_percentage": 0.95673,
    "market_cap_usd": 203352392960,
    "market_dominance_percentage": 11.66,
    "layer_2": {
      "erc_20": {
        "tokens": 246816,
        "transactions": 604957673,
        "tokens_24h": 100,
        "transactions_24h": 859287
      }
    },
    "countdowns": [
      {
        "event": "eth2 launch",
        "eth_staked": 3487170.000069,
        "eth_needed": 524288
      }
    ],
    "suggested_transaction_fee_gwei_options": {
      "sloth": 102,
      "slow": 115,
      "normal": 122,
      "fast": 134,
      "cheetah": 173
    }
  },
  "context": {
    "code": 200,
    "state": 12023239,
    "state_layer_2": 12023239,
    "request_cost": 1,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/ethereum
https://blockchair.com/ethereum/testnet
Ripple-like blockchain statsEndpoint:

https://api.blockchair.com/ripple/stats
Output:

data contains an array with blockchain statistics:

ledgers — total number of ledgers
circulation — number of coins in circulation (in XRP)
best_ledger_height — the latest ledger number
best_ledger_hash — the latest ledger hash
best_ledger_time — the latest ledger time
mempool_transactions — number of unconfirmed transactions
mempool_tps — number of transactions per second added to the mempool
mempool_total_fee_usd — sum of transaction fees in the mempool, in USD
ledgers_24h — number of ledgers closed over the last 24 hours
transactions_24h — number of transactions confirmed over the last 24 hours
volume_24h — total monetary volume of transactions over the last 24 hours
average_transaction_fee_24h — average transaction fee over the last 24 hours
average_transaction_fee_usd_24h — the same in USD
median_transaction_fee_24h— median transaction fee over the last 24 hours
median_transaction_fee_usd_24h — the same in USD
inflation_24h— number of new coins issued over the last 24 hours (can be negative in case more coins are destroyed than issued)
inflation_usd_24h — the same in USD
largest_transaction_24h: array of hash and value_usd — biggest payment over the last 24 hours
market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko)
market_price_btc — average market price of 1 coin in BTC
market_price_usd_change_24h_percentage — market price change in percent for 24 hours
market_cap_usd — market capitalization (coins in circulation * price per coin in USD)
market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin)
countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event
Example output:

https://api.blockchair.com/ripple/stats:

{
  "data": {
    "market_price_usd": 0.290587,
    "market_price_btc": 0.0000365637358586,
    "market_price_usd_change_24h_percentage": -3.31938,
    "market_cap_usd": 12543700763,
    "market_dominance_percentage": 5.78,
    "ledgers": 50795576,
    "best_ledger_height": 50795575,
    "best_ledger_hash": "07AFA06C63D6C24C31CBD83938A711C098D6C251EEAFC7AE65733CEA3D5EE32A",
    "best_ledger_time": "2019-10-18 16:28:41",
    "mempool_transactions": 43,
    "mempool_total_fee_usd": 0.00024496484099999997,
    "circulation": 99991318056632960,
    "average_transaction_fee_24h": 874.9259920487995,
    "median_transaction_fee_24h": 12,
    "average_transaction_fee_usd_24h": 0.00025366991765268457,
    "median_transaction_fee_usd_24h": 0.000003479196,
    "ledgers_24h": 22359,
    "transactions_24h": 864272,
    "mempool_tps": 10.003148148148147,
    "inflation_24h": -756174037,
    "inflation_usd_24h": -219.239807069521,
    "volume_24h": 712237245463407,
    "largest_transaction_24h": {
      "hash": "A773E7C3D07D76834280766AF7F90FE7E773E8D5AD77327A603BD6A5B1083611",
      "value_usd": 14496650
    }
  },
  "context": {
    "code": 200,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/ripple
Stellar-like blockchain statsEndpoint:

https://api.blockchair.com/stellar/stats
Output:

data contains an array with blockchain statistics:

ledgers — total number of ledgers
circulation — number of coins in circulation (in stroops)
best_ledger_height — the latest ledger number
best_ledger_hash — the latest ledger hash
best_ledger_time — the latest ledger time
ledgers_24h — number of ledgers closed over the last 24 hours
transactions_24h — number of transactions confirmed over the last 24 hours
successful_transactions_24h— number of successful transactions over the last 24 hours
failed_transactions_24h— number of failed transactions over the last 24 hours
operations_24h — number of operations over the last 24 hours
average_transaction_fee_24h — average transaction fee over the last 24 hours
average_transaction_fee_usd_24h — the same in USD
market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko)
market_price_btc — average market price of 1 coin in BTC
market_price_usd_change_24h_percentage — market price change in percent for 24 hours
market_cap_usd — market capitalization (coins in circulation * price per coin in USD)
market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin)
countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event
Example output:

https://api.blockchair.com/stellar/stats:

{
  "data": {
    "ledgers": 26602978,
    "best_ledger_height": 26602978,
    "best_ledger_hash": "3151f16e9a6ce9ee43f57a068c83a04c7e864ccc7d1027519d42aab79e13b40f",
    "best_ledger_time": "2019-11-02 16:42:01",
    "circulation": 1054439020873472900,
    "ledgers_24h": 15643,
    "transactions_24h": 461072,
    "successful_transactions_24h": 285958,
    "failed_transactions_24h": 175114,
    "operations_24h": 1085466,
    "average_transaction_fee_24h": 283.5731513695005,
    "average_transaction_fee_usd_24h": 0.000001991250668916633,
    "market_price_usd": 0.07022,
    "market_price_btc": 0.0000075229454120425,
    "market_price_usd_change_24h_percentage": 3.41847,
    "market_cap_usd": 1406714595,
    "market_dominance_percentage": 0.56
  },
  "context": {
    "code": 200,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/stellar
Monero-like blockchain statsEndpoint:

https://api.blockchair.com/monero/stats
Output:

data contains an array with blockchain statistics:

blocks — total number of blocks (note that it's 1 more than the latest block number as there is block #0)
transactions — total number of transactions
circulation — number of coins in circulation (in satoshi)
blockchain_size — total size of all blocks in bytes (note: it's not the size of a full node, it's just bare blocks; nodes are bigger in size as they use database indexing, etc)
difficulty — current mining difficulty
best_block_height — the latest block height
best_block_hash — the latest block hash
best_block_time — the latest block time
mempool_transactions — number of transactions in the mempool
mempool_size — mempool size in bytes
market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko)
market_price_btc — average market price of 1 coin in BTC
market_price_usd_change_24h_percentage — market price change in percent for 24 hours
market_cap_usd — market capitalization (coins in circulation * price per coin in USD)
market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin)
countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event
suggested_transaction_fee_per_byte_sat — suggests a proper transaction fee in piconero per byte
Example output:

https://api.blockchair.com/stellar/stats:

{
  "data": {
    "blocks": 2012711,
    "transactions": 6147319,
    "circulation": 17402679371662576000,
    "difficulty": 127374112357,
    "hashrate_24h": 1061450936,
    "mempool_transactions": 140,
    "mempool_size": 681994000,
    "best_block_height": 2012710,
    "best_block_hash": "3cfcac0ccd9e058f56158686fd4d7258351071e113feac9c1b10da65ce62cce5",
    "best_block_time": "2020-01-16 20:42:47",
    "suggested_transaction_fee_per_byte_sat": 13,
    "market_price_usd": 79.36,
    "market_price_btc": 0.0079091090293004,
    "market_price_usd_change_24h_percentage": -0.96449,
    "market_cap_usd": 1362957367,
    "market_dominance_percentage": 0.52
  },
  "context": {
    "code": 200,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/monero
Cardano-like blockchain statsEndpoint:

https://api.blockchair.com/cardano/stats
Output:

data contains an array with blockchain statistics:

blocks — total number of blocks
transactions — total number of transactions
circulation — number of coins in circulation (in satoshi)
blockchain_size — total size of all blocks in bytes (note: it's not the size of a full node, it's just bare blocks; nodes are bigger in size as they use database indexing, etc)
best_block_epoch — the latest epoch number
best_block_slot — the latest slot number
best_block_height — the latest block height
best_block_hash — the latest block hash
best_block_time — the latest block time
blocks_24h — number of blocks over the last 24 hours
transactions_24h — number of transactions over the last 24 hours
market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko)
market_price_btc — average market price of 1 coin in BTC
market_price_usd_change_24h_percentage — market price change in percent for 24 hours
market_cap_usd — market capitalization (coins in circulation * price per coin in USD)
market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin)
countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event
Example output:

https://api.blockchair.com/cardano/stats:

{
  "data": {
    "blocks": 3673733,
    "transactions": 1725714,
    "best_block_epoch": 170,
    "best_block_slot": 3790,
    "best_block_height": 3673733,
    "best_block_hash": "d70406d8707105b333f2107d6d786316f8232fd8c7beb9565b02f134fe1c03f2",
    "best_block_time": "2020-01-22 18:48:11",
    "blocks_24h": 4320,
    "transactions_24h": 1987,
    "circulation": 31112169560261348,
    "blockchain_size": 3474703715,
    "market_price_usd": 0.04703496,
    "market_price_btc": 0.000004687558301774,
    "market_price_usd_change_24h_percentage": -3.43458,
    "market_cap_usd": 1465483381,
    "market_dominance_percentage": 0.55
  },
  "context": {
    "code": 200,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/cardano
Mixin-like DAG statsEndpoint:

https://api.blockchair.com/mixin/stats
Output:

data contains an array with DAG statistics:

snapshots — total number of snapshots
snapshots_24h — number of snapshots over the last 24 hours
transactions_24h — number of transactions over the last 24 hours
mempool_transactions — number of unvonfirmed transactions
tps_24h — transactions per second over 24 hours period
best_snapshot_height — the latest snapshot number
best_snapshot_hash — the latest snapshots hash
best_snapshot_time — the latest snapshot time (UTC)
circulation — number of coins in circulation (smallest denomination)
circulation_xin — number of coins in circulation (in XINs)
market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko)
market_price_btc — average market price of 1 coin in BTC
market_price_usd_change_24h_percentage — market price change in percent for 24 hours
market_cap_usd — market capitalization (coins in circulation * price per coin in USD)
market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin)
countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event
accepted_nodes — number of accepted network nodes
mintings — number of coin mintings
Example output:

https://api.blockchair.com/mixin/stats:

{
  "data": {
    "snapshots": 18626733,
    "snapshots_24h": 135000,
    "transactions_24h": 135000,
    "mempool_transactions": 0,
    "tps_24h": 1.5625,
    "best_snapshot_height": 18626732,
    "best_snapshot_hash": "6cc46ccbd753dbaf09c1a72d94225af0aaabc5c0c1f705939c7ea77515d6d18c",
    "best_snapshot_time": "2020-04-22 16:33:08",
    "circulation_xin": 550991.78082032,
    "circulation": 55099178082032,
    "market_price_usd": 168.06,
    "market_price_btc": 0.02323,
    "market_price_usd_change_24h_percentage": 2.901,
    "market_cap_usd": 84247126,
    "market_dominance_percentage": 0.01,
    "accepted_nodes": 22,
    "mintings": 419
  },
  "context": {
    "code": 200,
    "state": 18626733,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/mixin
Tezos-like blockchain statsEndpoint:

https://api.blockchair.com/tezos/stats
Output:

data contains an array with blockchain statistics:

blocks — total number of blocks
operations — total number of operations
operations_24h — number of operations over the last 24 hours
volume_24h — volume transacted over the last 24 hours
inflation_24h — newly minted coin count over the last 24 hours
best_block_height — the latest block number
best_block_hash — its hash…
best_block_time — … and timestamp
circulation and circulation_xtz — total circulating supply
market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko)
market_price_btc — average market price of 1 coin in BTC
market_price_usd_change_24h_percentage — market price change in percent for 24 hours
market_cap_usd — market capitalization (coins in circulation * price per coin in USD)
market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin)
countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event
Example output:

https://api.blockchair.com/tezos/stats:

{
  "data": {
    "blocks": 974146,
    "operations": 25664439,
    "operations_24h": 41556,
    "volume_24h": 19467451942626,
    "inflation_24h": 114867833312,
    "best_block_height": 974145,
    "best_block_hash": "BL5GrLjJVpKfDGBxh3GgVKE25hYcX8FJEN7LmmohyXrS42H2Yx1",
    "best_block_time": "2020-05-29 22:31:38",
    "circulation_xtz": 712341492.340773,
    "circulation": 712341492340773,
    "market_price_usd": 2.86,
    "market_price_btc": 0.00030425564282515,
    "market_price_usd_change_24h_percentage": 2.51544,
    "market_cap_usd": 2033457725,
    "market_dominance_percentage": 0.77
  },
  "context": {
    "code": 200,
    "state": 974145,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/tezos
EOS-like blockchain statsEndpoint:

https://api.blockchair.com/eos/stats
Output:

data contains an array with blockchain statistics:

blocks — total number of blocks
circulation_eos — total circulating supply in EOS
circulation_limit_eos — circulating supply limit
staked_eos — staked amount of EOS
staked_percentage — (staked_eos / circulation_eos) * 100%
best_block_height — latest block number
best_block_time — its timestamp...
best_block_producer — and producer account name
irreversible_block_height — latest irreversible block number
irreversible_block_hash — its hash
ram_max_size — max RAM size in bytes
ram_allocated_size — allocated RAM size in bytes
ram_allocated_percentage — (ram_allocated_size / ram_max_size) * 100%
market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko)
market_price_btc — average market price of 1 coin in BTC
market_price_usd_change_24h_percentage — market price change in percent for 24 hours
market_cap_usd — market capitalization (coins in circulation * price per coin in USD)
market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin)
countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event
Example output:

https://api.blockchair.com/tezos/stats:

{
  "data": {
    "blocks": 125855542,
    "circulation_eos": 1020158333.6877,
    "circulation_limit_eos": 10000000000,
    "staked_eos": 524985046.5825,
    "staked_percentage": 51.46113394817525,
    "best_block_height": 125855542,
    "best_block_time": "2020-06-13 17:33:53",
    "best_block_producer": "newdex.bp",
    "irreversible_block_height": 125855206,
    "irreversible_block_hash": "078065e6d5a20d200729a117d6747761b52b9531eddb1072a62b5fe839dec3da",
    "ram_max_size": 192171732992,
    "ram_allocated_size": 81993066226,
    "ram_allocated_percentage": 42.66655920171846,
    "market_price_usd": 2.59,
    "market_price_btc": 0.00027429815680111,
    "market_price_usd_change_24h_percentage": 0.6576,
    "market_cap_usd": 2433086848,
    "market_dominance_percentage": 0.9
  },
  "context": {
    "code": 200,
    "state": 125855542,
    "request_cost": 1,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/eos
Stats for cross-chain tokens (USDT, USDC, BUSD)Endpoints:

https://api.blockchair.com/cross-chain/tether/stats
https://api.blockchair.com/cross-chain/usd-coin/stats
https://api.blockchair.com/cross-chain/binance-usd/stats
Output:

circulation shows the total token circulation across all supported blockchains
blockchains is an array of blockchains the token supports:circulation is the token circulation on a particular blockchain
explorer is a link to Blockchair's explorer for the token
Example output:

https://api.blockchair.com/cross-chain/usd-coin/stats:

{
  "data": {
    "circulation": 26017746210.430256,
    "blockchains": {
      "ethereum": {
        "circulation": 25058405745.44955,
        "explorer": "https://blockchair.com/ethereum/erc-20/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
      },
      "algorand": {
        "circulation": 174340444.981248,
        "explorer": null
      },
      "solana": {
        "circulation": 785000019.99946,
        "explorer": null
      }
    }
  },
  "context": {
    "code": 200,
    "request_cost": 1,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

Not yet available

Omni Layer statsAllows to retrieve the some basic stats on Omni Layer (Bitcoin). Note that this endpoint is in the Alpha stage, and Wormhole (Bitcoin Cash Omni-like token system) was phased out on January 1st, 2020.

Endpoint:

https://api.blockchair.com/bitcoin/omni/stats
Output:

data contains an array with second layer statistics:

properties — total number of created properties
properties_mainnet — total number of "mainnet" properties
properties_testnet — total number of "testnet" properties
transactions_approximate — approximate number of transactions
latest_transactions — array of 10 latest transactions
Note that the "mainnet" and "testnet" terms don't imply using Bitcoin Testnet, the idea behind that is "testnet" properties still live on the Bitcoin Mainnet, but they have should have no monetary value, and their purpose is for testing only.

Example request:

https://api.blockchair.com/bitcoin/omni/stats
Example output:

https://api.blockchair.com/bitcoin/omni/stats:

{
  "data": {
    "properties": 1187,
    "properties_mainnet": 751,
    "properties_testnet": 436,
    "transactions_approximate": 14406305,
    "latest_transactions": [
      {
        "property_id": 31,
        "property_name": "TetherUS",
        "type_id": 0,
        "type": "Simple Send",
        "sender": "1B4dCsH6MC9XoZ6ob2nngvJesYEfNNtMQS",
        "recipient": "1FoWyxwPXuj4C6abqwhjDWdz6D4PZgYRjA",
        "valid": false,
        "amount": 960000,
        "transaction_hash": "ee1f0401cae15e5ad35cc760c99aacc8c25f21814f234bd80038b99d0ec83d9c",
        "time": "2019-10-18 19:34:28"
      },
      ...
    ]
  },
  "context": {
    "code": 200,
    "state": 599972,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/bitcoin/omni
ERC-20 statsThere's no separate endpoint to get ERC-20 stats, use https://api.blockchair.com/ethereum/stats instead which includes ERC-20 info. Description is available here

Dashboard endpointsRetrieve information about various entities in a neat format from our databases

The API supports a number of calls that produce some aggregated data, or data in a more convenient form for certain entities.

Dashboard endpoints for Bitcoin-like blockchains (Bitcoin, Bitcoin Cash, Litecoin, Bitcoin SV, Dogecoin, Dash, Groestlcoin, Zcash, eCash, Bitcoin Testnet)Block infoEndpoints:

https://api.blockchair.com/{:btc_chain}/dashboards/block/{:height}₀
https://api.blockchair.com/{:btc_chain}/dashboards/block/{:hash}₀
https://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:height}₀,...,{:height}ᵩ (up to 10 blocks, comma-separated)
https://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:hash}₀,...,{:hash}ᵩ (up to 10 blocks, comma-separated)
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:height}ᵢ is the block height (integer value), also known as block id
{:hash}ᵢ is the block hash (regex: /^[0-9a-f]{64}$/i)
Possible options:

?limit={:limit} limits the number of returned transaction hashes contained in the block. Default is 100. Maximum is 10000. In case of 0 returns an empty transaction hashes array
?offset={:offset} allows to paginate transaction hashes. Default is 0. Maximum is 1000000.
Output:

data contains an associative array where found block heights or block hashes used as keys:

data.{:id}ᵢ.block - information about the block (see Bitcoin-like block object for the field descriptions)
data.{:id}ᵢ.transactions - the array of transaction hashes (sorted by position in the block ascending) included in the block (respecting the set limit and offset)
Where {:id}ᵢ is either {:height}ᵢ or {:hash}ᵢ from the query string. If there's no {:id}ᵢ has been found in the database, there won't be such key.

Note that the total number of transactions in the block is contained in data.{:id}ᵢ.block.transaction_count

Context keys:

context.results — number of found blocks
context.limit — applied limit
context.offset — applied offset
context.state — best block height on the {:btc_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = context.state - data.{:id}ᵢ.block.id + 1)
Example requests:

https://api.blockchair.com/bitcoin/dashboards/block/0
https://api.blockchair.com/bitcoin/dashboards/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f
https://api.blockchair.com/bitcoin/dashboards/blocks/0,1,2,3,4,5,6,7,8,9
https://api.blockchair.com/bitcoin-cash/dashboards/block/556045?limit=10000
https://api.blockchair.com/bitcoin-cash/dashboards/block/556045?limit=10000&offset=10000
https://api.blockchair.com/bitcoin/dashboards/block/9999999
Example output:

https://api.blockchair.com/bitcoin/dashboards/block/0:

{
  "data": {
    "0": {
      "block": {
        "id": 0,
        "hash": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
        "date": "2009-01-03",
        "time": "2009-01-03 18:15:05",
        "median_time": "2009-01-03 18:15:05",
        "size": 285,
        "version": 1,
        "version_hex": "1",
        "version_bits": "000000000000000000000000000001",
        "merkle_root": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
        "nonce": 2083236893,
        "bits": 486604799,
        "difficulty": 1,
        "chainwork": "0000000000000000000000000000000000000000000000000000000100010001",
        "coinbase_data_hex": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
        "transaction_count": 1,
        "input_count": 1,
        "output_count": 1,
        "input_total": 0,
        "input_total_usd": 0,
        "output_total": 5000000000,
        "output_total_usd": 0,
        "fee_total": 0,
        "fee_total_usd": 0,
        "fee_per_kb": 0,
        "fee_per_kb_usd": 0,
        "cdd_total": 0,
        "generation": 5000000000,
        "generation_usd": 0,
        "reward": 5000000000,
        "reward_usd": 0,
        "guessed_miner": "Unknown"
      },
      "transactions": [
        "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b"
      ]
    }
  ],
  "context": {
    "code": 200,
    "limit": 100,
    "offset": 0,
    "results": 1,
    "state": 555555,
    ...
    }
  }
}


Request cost formula:

1 for https://api.blockchair.com/{:btc_chain}/dashboards/block/{:height}₀ and https://api.blockchair.com/{:btc_chain}/dashboards/block/{:hash}₀ endpoints
1 + (0.1 * (entity count - 1)) for https://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:height}₀,...,{:height}ᵩ and https://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:hash}₀,...,{:hash}ᵩ endpoints (e.g. it's 1 + (0.1 * (10 - 1)) = 1.9 for requesting 10 blocks)
Explore visualizations on our front-end:

https://blockchair.com/bitcoin/block/0
https://blockchair.com/bitcoin-cash/block/0
https://blockchair.com/litecoin/block/0
https://blockchair.com/bitcoin-sv/block/0
https://blockchair.com/dogecoin/block/0
https://blockchair.com/dash/block/0
https://blockchair.com/groestlcoin/block/0
https://blockchair.com/zcash/block/0
https://blockchair.com/ecash/block/0
https://blockchair.com/bitcoin/testnet/block/0
Transaction infoEndpoints:

https://api.blockchair.com/{:chain}/dashboards/transaction/{:hash}₀
https://api.blockchair.com/{:chain}/dashboards/transactions/{:hash}₀,...,{:hash}ᵩ (up to 10 transactions, comma-separated)
Where:

{:chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:hashᵢ} is the transaction hash (regex: /^[0-9a-f]{64}$/i), also known as txid
Possible options:

?omni=true (for bitcoin only; in alpha test mode) — shows information about Omni Layer token transfers in this transaction
Output:

data contains an associative array where found transaction hashes are used as keys:

data.{:hash}ᵢ.transaction — information about the transaction (see Bitcoin-like transaction object)
data.{:hash}ᵢ.inputs — the array of transaction inputs (sorted by spending_index ascending), where each element is a Bitcoin-like output object (inputs represented as spent outputs), or an empty array in case of coinbase transaction
data.{:hash}ᵢ.outputs — the array of transaction outputs (sorted by index ascending), where each element is a Bitcoin-like output object
Additional data:

data.{:hash}ᵢ.layer_2.omni (for bitcoin only; in alpha test mode) — Omni layer transaction data in case there's any
scripthash_type field for inputs and outputs (example: https://api.blockchair.com/bitcoin/dashboards/transaction/4d41241148a7cb8f4e2820d4393415ccd3d0793053a3855b44c33e5053c231ff) in the multisig_{:m}_of_{:n} format. Please note that if output is unspent, scripthash_type will always be null, even if the associated address multisig type can be derived from some other spent output.
data.{:hash}ᵢ.transaction.is_rbf (for bitcoin and bitcoin/testnet only) — yields true if the transaction can be replaced with a transaction with a higher fee (replace-by-fee), and false otherwise; for blockchain transactions it shows whether the transaction could've been replaced before it has been included into the block.
In case transaction is confirmed on the blockchain, data.{:hash}ᵢ.transaction.block_id contains the block number it's included in. If the transaction is in the mempool, data.{:hash}ᵢ.transaction.block_id yields -1. If the transaction is neither present in the blockchain, nor in the mempool, there won't be data.{:hash}ᵢ key with data.

Context keys:

context.results — number of found transactions
context.state — best block height on the {:chain} chain (tip: it's possible to calculate the number of confirmation transaction received using this formula: confirmations = data.{:id}ᵢ.transaction.block_id - context.state + 1, or if data.{:id}ᵢ.transaction.block_id is -1 it's an unconfirmed transaction)
Example requests:

https://api.blockchair.com/bitcoin/dashboards/block/0
https://api.blockchair.com/bitcoin/dashboards/blocks/0,1,2,3,4,5,6,7,8,9
https://api.blockchair.com/bitcoin-cash/dashboards/block/556045?limit=10000
https://api.blockchair.com/bitcoin-cash/dashboards/block/556045?limit=10000&offset=10000
https://api.blockchair.com/bitcoin/dashboards/block/9999999
Example output:

https://api.blockchair.com/bitcoin/dashboards/transaction/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16:

{
  "data": {
    "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16": {
      "transaction": {
        "block_id": 170,
        "id": 171,
        "hash": "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
        "date": "2009-01-12",
        "time": "2009-01-12 03:30:25",
        "size": 275,
        "weight": 1100,
        "version": 1,
        "lock_time": 0,
        "is_coinbase": false,
        "has_witness": false,
        "input_count": 1,
        "output_count": 2,
        "input_total": 5000000000,
        "input_total_usd": 0.5,
        "output_total": 5000000000,
        "output_total_usd": 0.5,
        "fee": 0,
        "fee_usd": 0,
        "fee_per_kb": 0,
        "fee_per_kb_usd": 0,
        "fee_per_kwu": 0,
        "fee_per_kwu_usd": 0,
        "cdd_total": 149.15856481481,
        "is_rbf": false
      },
      "inputs": [
        {
          "block_id": 9,
          "transaction_id": 9,
          "index": 0,
          "transaction_hash": "0437cd7f8525ceed2324359c2d0ba26006d92d856a9c20fa0241106ee5a597c9",
          "date": "2009-01-09",
          "time": "2009-01-09 03:54:39",
          "value": 5000000000,
          "value_usd": 0.5,
          "recipient": "12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S",
          "type": "pubkey",
          "script_hex": "410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac",
          "is_from_coinbase": true,
          "is_spendable": true,
          "is_spent": true,
          "spending_block_id": 170,
          "spending_transaction_id": 171,
          "spending_index": 0,
          "spending_transaction_hash": "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
          "spending_date": "2009-01-12",
          "spending_time": "2009-01-12 03:30:25",
          "spending_value_usd": 0.5,
          "spending_sequence": 4294967295,
          "spending_signature_hex": "47304402204e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd410220181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d0901",
          "spending_witness": "",
          "lifespan": 257746,
          "cdd": 149.158564814815,
          "scripthash_type": null
        }
      ],
      "outputs": [
        {
          "block_id": 170,
          "transaction_id": 171,
          "index": 0,
          "transaction_hash": "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
          "date": "2009-01-12",
          "time": "2009-01-12 03:30:25",
          "value": 1000000000,
          "value_usd": 0.1,
          "recipient": "1Q2TWHE3GMdB6BZKafqwxXtWAWgFt5Jvm3",
          "type": "pubkey",
          "script_hex": "4104ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302fa28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e6cd84cac",
          "is_from_coinbase": false,
          "is_spendable": true,
          "is_spent": true,
          "spending_block_id": 92240,
          "spending_transaction_id": 156741,
          "spending_index": 0,
          "spending_transaction_hash": "ea44e97271691990157559d0bdd9959e02790c34db6c006d779e82fa5aee708e",
          "spending_date": "2010-11-16",
          "spending_time": "2010-11-16 20:39:27",
          "spending_value_usd": 2.7,
          "spending_sequence": 4294967295,
          "spending_signature_hex": "4730440220576497b7e6f9b553c0aba0d8929432550e092db9c130aae37b84b545e7f4a36c022066cb982ed80608372c139d7bb9af335423d5280350fe3e06bd510e695480914f01",
          "spending_witness": "",
          "lifespan": 58208942,
          "cdd": 6737.14606481481,
          "scripthash_type": null
        },
        {
          "block_id": 170,
          "transaction_id": 171,
          "index": 1,
          "transaction_hash": "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
          "date": "2009-01-12",
          "time": "2009-01-12 03:30:25",
          "value": 4000000000,
          "value_usd": 0.4,
          "recipient": "12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S",
          "type": "pubkey",
          "script_hex": "410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac",
          "is_from_coinbase": false,
          "is_spendable": true,
          "is_spent": true,
          "spending_block_id": 181,
          "spending_transaction_id": 183,
          "spending_index": 0,
          "spending_transaction_hash": "a16f3ce4dd5deb92d98ef5cf8afeaf0775ebca408f708b2146c4fb42b41e14be",
          "spending_date": "2009-01-12",
          "spending_time": "2009-01-12 06:02:13",
          "spending_value_usd": 0.4,
          "spending_sequence": 4294967295,
          "spending_signature_hex": "473044022027542a94d6646c51240f23a76d33088d3dd8815b25e9ea18cac67d1171a3212e02203baf203c6e7b80ebd3e588628466ea28be572fe1aaa3f30947da4763dd3b3d2b01",
          "spending_witness": "",
          "lifespan": 9108,
          "cdd": 4.21666666666667,
          "scripthash_type": null
        }
      ]
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 555555,
    ...
  }
}


Bonus endpoint:

https://api.blockchair.com/{:btc_chain}/dashboards/transaction/{:hash}₀/priority
For mempool transactions shows priority (position) — for chains supporting SegWit by fee_per_kwu, for others by fee_per_kb— over other transactions (out_of mempool transactions). position is null if the transaction is neither in the mempool nor in the blockchain, confirmed if it's in the blockchain. eta_seconds returns an approximate time for the transaction to confirm (in seconds, exprimental). Cost: 1.

Request cost formula:

1 for https://api.blockchair.com/{:btc_chain}/dashboards/transaction/{:hash}₀ endpoint
1 + (0.1 * (entity count - 1)) for https://api.blockchair.com/{:btc_chain}/dashboards/transactions/{:hash}₀,...,{:hash}ᵩ endpoint (e.g. it's 1 + (0.1 * (10 - 1)) = 1.9 for requesting 10 transactions)
Using ?omni=true adds 1 for each requested transaction
Explore visualization on our front-end:

https://blockchair.com/bitcoin/transaction/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b
Address and extended public key (xpub) infoEndpoints:

https://api.blockchair.com/{:btc_chain}/dashboards/address/{:address}₀ (for a single address; further referred to as the address dashboard)
https://api.blockchair.com/{:btc_chain}/dashboards/addresses/{:address}₀,...,{:address}ᵩ (for a set of up to 100 addresses, comma-separated, further referred to as the addresses dashboard)
https://api.blockchair.com/{:btc_chain}/dashboards/xpub/{:extended_key} (info on xpub, ypub, or zpub extended key; further referred to as the xpub dashboard)
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:address}ᵢ is the address, possible formats are:

p2pk/p2pkh format (supported for all blockchains, example for Bitcoin: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa)
p2sh format (supported for all blockchains, example for Bitcoin: 342ftSRCvFHfCeFFBuz4xwbeqnDw6BGUey)
Only for the dashboards/address endpoint Bitcoin Cash also supports Legacy address variant, and Bitcoin SV supports CashAddr variant for p2pkh and p2sh formats. It's also possible to use bitcoincash: prefix (examples: qzyl04w3m99ddpqahzwghn3erallm3e7z5le4aqqmh or bitcoincash:qzyl04w3m99ddpqahzwghn3erallm3e7z5le4aqqmh for both Bitcoin Cash and Bitcoin SV.
bech32 format (witness_v0_keyhash, witness_v0_scripthash, or witness_unknown — supported for Bitcoin, Litecoin, Groestlcoin, and Bitcoin Testnet only; example for Bitcoin: bc1q34aq5drpuwy3wgl9lhup9892qp6svr8ldzyy7c)
Internal Blockchair format (for multisig. nulldata, and nonstandard output types)
For eCash the ecash: prefix and format are used
{:extended_key} is the extended public key, possible formats are:

xpub (supported for all blockchains, example for Bitcoin: xpub6CUGRUonZSQ4TWtTMmzXdrXDtypWKiKrhko4egpiMZbpiaQL2jkwSB1icqYh2cfDfVxdx4df189oLKnC5fSwqPfgyP3hooxujYzAu3fDVmz, yields p2pkh addresses)
ypub (supported for Bitcoin, Litecoin, Groestlcoin, and Bitcoin Testnet only, example for Bitcoin: ypub6XiW9nhToS1gjVsFKzgmtWZuqo6V1YY7xaCns37aR3oYhFyAsTehAqV1iW2UCNtgWFQFkz3aNSZZbkfe5d1tD8MzjZuFJQn2XnczsxtjoXr, yields p2sh addresses)
zpub (supported for Bitcoin, Litecoin, Groestlcoin, and Bitcoin Testnet only, example for Bitcoin: ypub6XiW9nhToS1gjVsFKzgmtWZuqo6V1YY7xaCns37aR3oYhFyAsTehAqV1iW2UCNtgWFQFkz3aNSZZbkfe5d1tD8MzjZuFJQn2XnczsxtjoXr, yields witness_v0_keyhash addresses)
Note that custom xpub formats (e.g. ltub for Litecoin) are not supported.

Possible options:

?limit={:transaction_limit},{:utxo_limit} or a shorthand ?limit={:limit}. {:transaction_limit} limits the number of returned latest transaction hashes (in the transactions array) for an address or an address set. Default is 100. Maximum is 10000. In case of 0 returns an empty transaction hashes array. {:utxo_limit} limits the number of returned latest UTXOs (in the utxo array) for an address or an address set. Default is 100. Maximum is 10000. In case of 0 returns an empty UTXO array. If only one limit is set, it applies to both {:transaction_limit} and {:utxo_limit} (e.g. ?limit=100 is an equivalent of ?limit=100,100).
?offset={:transaction_offset},{:utxo_offest} or a shorthand ?offset={:offset} allows to paginate transaction hashes and the UTXO array. The behaviour is similar to the ?limit= section. Default for both offset is 0, and the maximum is 1000000.
?transaction_details=true — returns detailed info on transactions instead of just hashes in the transactions array. Each element contains block_id, transaction_hash, time, and balance_change (shows how the transactions affected the balance of {:address}, i.e. it can be a negative value). This option is available for all three endpoints: dashboards/address, dashboards/addresses, and dashboards/xpub.
?omni=true (for bitcoin only; in alpha test mode) — shows information about Omni Layer tokens belonging to the address. At the moment, this option is available for the address endpoint only. The data is returned in the layer_2.omni array.
?state=latest — discards unconfirmed transactions from the output — balance will show only confirmed balance, and transactions and utxo arrays won't include unconfirmed data.
Output:

Please note that while the only difference between for example transaction and transactions dashboards is the number of elements in the data array, address and addresses differ semantically. address returns info on a single address with its recent transaction hashes and its UTXO set, while addresses and xpub return info on an address set (as well as some stats on separate addresses) where transaction hashes and the UTXO set are returned for the entire set (that's more useful for wallets as in most cases the task is, for example, to retrieve latest 10 transaction hashes for a set of addresses sorted by time descending, but not 10 transactions for each address as it's not clear how to sort them).

Here's how these three dashboard calls structured (see more detailed examples below):

address endpoint (single address):

data{:address}₀address — an associative array with address info (balance, script_hex, transaction_count, etc.)
transactions — an array of latest transaction hashes where the address is a participant (either sender or recipient)
utxo — the UTXO set for the address
context — some context info
addresses endpoint (2 addresses for example):

dataset — an associative array with info on the address set (balance yields the total balance of 2 addresses, transaction_count is for both, etc.)
addresses{:address}₀ — an associative array with the first address info (balance, script_hex, output_count, etc.)
{:address}₁ — an associative array with the second address info (balance, script_hex, output_count, etc.)
transactions — an array of latest transaction hashes for the entire set
utxo — the UTXO set for the address set
context — some context info
xpub endpoint:

data{:extended_key}xpub — an associative array with xpub info (balance yields the total balance of all addresses derived from the xpub, transaction_count, etc.)
addresses{:address}₀ — an associative array with the first address info (balance, script_hex, output_count, etc.)
{:address}₁ — an associative array with the second address info (balance, script_hex, output_count, etc.)
transactions — an array of latest transaction hashes for the entire set
utxo — the UTXO set for the address set
context — some context info
Note that currently the maximum depth for xpub address discovery is 250 main addresses and 250 change addresses (larger limits up to 10.000 main / 10.000 change are available on Premium plans). According to BIP 32, our engine looks for 20 addresses at once, and if there's no transactions associated with this set, it stops looking.

data.addresses for both the addresses and the xpub endpoints don't include addresses which don't participate in transactions.

Address object specification:

type — address type (the same as type here, can be one of these: pubkey (P2PK), pubkeyhash (P2PKH), scripthash (P2SH), multisig, nulldata (OP_RETURN), nonstandard, witness_v0_keyhash (P2WPKH), witness_v0_scripthash (P2WSH), witness_unknown)
script_hex — output script (in hex) corresponding to the address
balance — address balance in satoshi (hereinafter — including unconfirmed outputs unless ?state=latest option is used)
balance_usd — address balance in USD
received — total received in satoshi
received_usd — total received in USD
spent — total spent in satoshi
spent_usd — total spent in USD
output_count — the number of outputs this address received
unspent_output_count — number of unspent outputs for this address (i.e. the number of inputs for an address can be calculated as output_count-unspent_output_count)
first_seen_receiving — timestamp (UTC) when the first time this address received coins
last_seen_receiving — timestamp (UTC) when the last time this address received coins
first_seen_spending — timestamp (UTC) when the first time this address sent coins
last_seen_spending — timestamp (UTC) when the last time this address sent coins
transaction_count — number of unique transactions this address participating in (available only in the address endpoint)
path — derived address path (available only in the xpub endpoint)
scripthash_type — in case the type is either scripthash (P2SH) or witness_v0_scripthash (P2WSH) — yields multisig type in the following format: multisig_{:m}_of_{:n}. If it's not multisig, or it's not possible to derive the type because there has been no spendings from this address — yields null. Available only in the address endpoint.
Context keys:

context.results — number of found addresses
context.limit — applied limit
context.offset — applied offset
context.state — best block height on the {:btc_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = context.state - data.{:id}ᵢ.block.id + 1)
context.checked (for the xpub endpoint only) — lists the addresses checked by our engine with their paths
Example requests:

https://api.blockchair.com/bitcoin/dashboards/address/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
https://api.blockchair.com/bitcoin/dashboards/addresses/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa,12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX
https://api.blockchair.com/bitcoin/dashboards/xpub/xpub6CUGRUonZSQ4TWtTMmzXdrXDtypWKiKrhko4egpiMZbpiaQL2jkwSB1icqYh2cfDfVxdx4df189oLKnC5fSwqPfgyP3hooxujYzAu3fDVmz
https://api.blockchair.com/bitcoin/dashboards/xpub/xpub6CUGRUonZSQ4TWtTMmzXdrXDtypWKiKrhko4egpiMZbpiaQL2jkwSB1icqYh2cfDfVxdx4df189oLKnC5fSwqPfgyP3hooxujYzAu3fDVmz?transaction_details=true&limit=10,0
https://api.blockchair.com/bitcoin/dashboards/address/12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S?transaction_details=true
https://api.blockchair.com/bitcoin/dashboards/address/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?limit=1&offset=1&transaction_details=true
Example outputs:

https://api.blockchair.com/bitcoin/dashboards/address/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?limit=1&offset=1&transaction_details=true:

{
  "data": {
    "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa": {
      "address": {
        "type": "pubkey",
        "script_hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
        "balance": 6812392291,
        "balance_usd": 508913.63494609314,
        "received": 6812392291,
        "received_usd": 15293.3019,
        "spent": 0,
        "spent_usd": 0,
        "output_count": 1820,
        "unspent_output_count": 1820,
        "first_seen_receiving": "2009-01-03 18:15:05",
        "last_seen_receiving": "2019-10-24 18:47:23",
        "first_seen_spending": null,
        "last_seen_spending": null,
        "transaction_count": 1820,
        "scripthash_type": null
,      },
      "transactions": [
        {
          "block_id": 600890,
          "hash": "4db4d68b13bf667ad9a44f4222bad2239de318fa75555ef966e84315056374b5",
          "time": "2019-10-24 18:47:23",
          "balance_change": 267582
        }
      ],
      "utxo": [
        {
          "block_id": 600890,
          "transaction_hash": "4db4d68b13bf667ad9a44f4222bad2239de318fa75555ef966e84315056374b5",
          "index": 1,
          "value": 267582
        }
      ]
    }
  },
  "context": {
    "code": 200,
    "limit": "1,1",
    "offset": "1,1",
    "results": 1,
    "state": 600897,
    ...
  }
}


https://api.blockchair.com/bitcoin/dashboards/addresses/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa,12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX?limit=1:

{
  "data": {
    "set": {
      "address_count": 2,
      "balance": 11846862777,
      "balance_usd": 885009.2215792858,
      "received": 11846862777,
      "spent": 0,
      "output_count": 1915,
      "unspent_output_count": 1915,
      "first_seen_receiving": "2009-01-03 18:15:05",
      "last_seen_receiving": "2019-10-24 18:47:23",
      "first_seen_spending": null,
      "last_seen_spending": null,
      "transaction_count": 1912
    },
    "addresses": {
      "12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX": {
        "type": "pubkeyhash",
        "script_hex": "76a914119b098e2e980a229e139a9ed01a469e518e6f2688ac",
        "balance": 5034470486,
        "balance_usd": 376095.5866331926,
        "received": 5034470486,
        "received_usd": 1216.4402,
        "spent": 0,
        "spent_usd": 0,
        "output_count": 95,
        "unspent_output_count": 95,
        "first_seen_receiving": "2009-01-09 02:54:25",
        "last_seen_receiving": "2019-09-18 18:29:01",
        "first_seen_spending": null,
        "last_seen_spending": null
      },
      "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa": {
        "type": "pubkeyhash",
        "script_hex": "76a91462e907b15cbf27d5425399ebf6f0fb50ebb88f1888ac",
        "balance": 6812392291,
        "balance_usd": 508913.63494609314,
        "received": 6812392291,
        "received_usd": 15293.3019,
        "spent": 0,
        "spent_usd": 0,
        "output_count": 1820,
        "unspent_output_count": 1820,
        "first_seen_receiving": "2009-01-03 18:15:05",
        "last_seen_receiving": "2019-10-24 18:47:23",
        "first_seen_spending": null,
        "last_seen_spending": null
      }
    },
    "transactions": [
      "f16bcc481a8939bc1c2f1b7df061f89958e265894dc71df248dabaad8e0815ed"
    ],
    "utxo": [
      {
        "block_id": -1,
        "transaction_hash": "f16bcc481a8939bc1c2f1b7df061f89958e265894dc71df248dabaad8e0815ed",
        "index": 0,
        "value": 558,
        "address": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
      }
    ]
  },
  "context": {
    "code": 200,
    "limit": "1,1",
    "offset": "0,0",
    "results": 2,
    "state": 600898,
    ...
  }
}


https://api.blockchair.com/bitcoin/dashboards/xpub/xpub6CUGRUonZSQ4TWtTMmzXdrXDtypWKiKrhko4egpiMZbpiaQL2jkwSB1icqYh2cfDfVxdx4df189oLKnC5fSwqPfgyP3hooxujYzAu3fDVmz?limit=1,2:

{
  "data": {
    "xpub6CUGRUonZSQ4TWtTMmzXdrXDtypWKiKrhko4egpiMZbpiaQL2jkwSB1icqYh2cfDfVxdx4df189oLKnC5fSwqPfgyP3hooxujYzAu3fDVmz": {
      "xpub": {
        "address_count": 11,
        "balance": 491868,
        "balance_usd": 36.744556258799996,
        "received": 711868,
        "spent": 220000,
        "output_count": 11,
        "unspent_output_count": 9,
        "first_seen_receiving": "2014-12-22 17:42:10",
        "last_seen_receiving": "2019-09-25 16:12:10",
        "first_seen_spending": "2014-12-22 21:32:22",
        "last_seen_spending": "2014-12-23 17:26:21",
        "transaction_count": 13
      },
      "addresses": {
        "1EfgV2Hr5CDjXPavHDpDMjmU33BA2veHy6": {
          "path": "0/0",
          "type": "pubkeyhash",
          "script_hex": "76a91495ea668e0322bd99dac54ffdc9089d68e56c3aa188ac",
          "balance": 0,
          "balance_usd": 0,
          "received": 100000,
          "received_usd": 0.3255,
          "spent": 100000,
          "spent_usd": 0.3292,
          "output_count": 1,
          "unspent_output_count": 0,
          "first_seen_receiving": "2014-12-22 17:42:10",
          "last_seen_receiving": "2014-12-22 17:42:10",
          "first_seen_spending": "2014-12-23 17:26:21",
          "last_seen_spending": "2014-12-23 17:26:21"
        },
        "12iNxzdF6KFZ14UyRTYCRuptxkKSSVHzqF": {
          "path": "0/1",
          "type": "pubkeyhash",
          "script_hex": "76a91412cb841986033f5ec9a4a1babe3a47339beac81c88ac",
          "balance": 0,
          "balance_usd": 0,
          "received": 120000,
          "received_usd": 0.3906,
          "spent": 120000,
          "spent_usd": 0.3906,
          "output_count": 1,
          "unspent_output_count": 0,
          "first_seen_receiving": "2014-12-22 17:42:10",
          "last_seen_receiving": "2014-12-22 17:42:10",
          "first_seen_spending": "2014-12-22 21:32:22",
          "last_seen_spending": "2014-12-22 21:32:22"
        },
        "1CcEugXu9Yf9Qw5cpB8gHUK4X9683WyghM": {
          "path": "0/2",
          "type": "pubkeyhash",
          "script_hex": "76a9147f538d66e3745866949f1b98c72c00638f16c7a088ac",
          "balance": 8747,
          "balance_usd": 0.6534367627,
          "received": 8747,
          "received_usd": 0.0506,
          "spent": 0,
          "spent_usd": 0,
          "output_count": 1,
          "unspent_output_count": 1,
          "first_seen_receiving": "2016-08-18 04:07:11",
          "last_seen_receiving": "2016-08-18 04:07:11",
          "first_seen_spending": null,
          "last_seen_spending": null
        },
        "15xANZb5vJv5RGL263NFuh8UGgHT7noXeZ": {
          "path": "0/3",
          "type": "pubkeyhash",
          "script_hex": "76a914364f34453e722af26f5f861aafbb7105176edcee88ac",
          "balance": 100000,
          "balance_usd": 7.47041,
          "received": 100000,
          "received_usd": 2.6486,
          "spent": 0,
          "spent_usd": 0,
          "output_count": 1,
          "unspent_output_count": 1,
          "first_seen_receiving": "2017-06-21 03:01:22",
          "last_seen_receiving": "2017-06-21 03:01:22",
          "first_seen_spending": null,
          "last_seen_spending": null
        },
        "1PJMBXKBYEBMRDmpAoBRbDff26gHJrawSp": {
          "path": "0/4",
          "type": "pubkeyhash",
          "script_hex": "76a914f49aaf692e1aca7d9de273d5b5538ad69677c74d88ac",
          "balance": 100000,
          "balance_usd": 7.47041,
          "received": 100000,
          "received_usd": 2.4581,
          "spent": 0,
          "spent_usd": 0,
          "output_count": 1,
          "unspent_output_count": 1,
          "first_seen_receiving": "2017-07-02 17:12:03",
          "last_seen_receiving": "2017-07-02 17:12:03",
          "first_seen_spending": null,
          "last_seen_spending": null
        },
        "16ZBYSHkLkRFHAuZvyzosXYgU1UDJxRV1R": {
          "path": "0/5",
          "type": "pubkeyhash",
          "script_hex": "76a9143ceebd5df25f739b5025d61fa4be2346fada97fd88ac",
          "balance": 100000,
          "balance_usd": 7.47041,
          "received": 100000,
          "received_usd": 2.4581,
          "spent": 0,
          "spent_usd": 0,
          "output_count": 1,
          "unspent_output_count": 1,
          "first_seen_receiving": "2017-07-02 17:26:49",
          "last_seen_receiving": "2017-07-02 17:26:49",
          "first_seen_spending": null,
          "last_seen_spending": null
        },
        "1EHeVKfjjq6FJpix86G2yzFeRbZ6RNg2Zm": {
          "path": "0/6",
          "type": "pubkeyhash",
          "script_hex": "76a91491bf9590d5cf0412d5b3fec1284d7164b161c65088ac",
          "balance": 100000,
          "balance_usd": 7.47041,
          "received": 100000,
          "received_usd": 2.4581,
          "spent": 0,
          "spent_usd": 0,
          "output_count": 1,
          "unspent_output_count": 1,
          "first_seen_receiving": "2017-07-02 18:11:17",
          "last_seen_receiving": "2017-07-02 18:11:17",
          "first_seen_spending": null,
          "last_seen_spending": null
        },
        "1HqsYkwczwvkMXCobk5WPZmhj2S2TK613Z": {
          "path": "0/8",
          "type": "pubkeyhash",
          "script_hex": "76a914b8c02c75c59f6320b729af2b0a5e0bff7efab95388ac",
          "balance": 40161,
          "balance_usd": 3.0001913601,
          "received": 40161,
          "received_usd": 2.6369,
          "spent": 0,
          "spent_usd": 0,
          "output_count": 1,
          "unspent_output_count": 1,
          "first_seen_receiving": "2018-10-08 00:43:16",
          "last_seen_receiving": "2018-10-08 00:43:16",
          "first_seen_spending": null,
          "last_seen_spending": null
        },
        "1687EJf5YEmeEtcscnuJPiV5b8HkM1o98q": {
          "path": "0/9",
          "type": "pubkeyhash",
          "script_hex": "76a9143830bd9d4d16ecbfc7456c2668a5dfa2954ab64088ac",
          "balance": 40160,
          "balance_usd": 3.000116656,
          "received": 40160,
          "received_usd": 2.6369,
          "spent": 0,
          "spent_usd": 0,
          "output_count": 1,
          "unspent_output_count": 1,
          "first_seen_receiving": "2018-10-08 00:43:16",
          "last_seen_receiving": "2018-10-08 00:43:16",
          "first_seen_spending": null,
          "last_seen_spending": null
        },
        "1MS6eGqD4iUGyJPbEsjqmoNaRhApgtmF8J": {
          "path": "0/10",
          "type": "pubkeyhash",
          "script_hex": "76a914e0219ffd268cf0a459d69c85557c68261b21026488ac",
          "balance": 1800,
          "balance_usd": 0.13446738,
          "received": 1800,
          "received_usd": 0.1157,
          "spent": 0,
          "spent_usd": 0,
          "output_count": 1,
          "unspent_output_count": 1,
          "first_seen_receiving": "2018-11-07 17:26:45",
          "last_seen_receiving": "2018-11-07 17:26:45",
          "first_seen_spending": null,
          "last_seen_spending": null
        },
        "1LDPJCMZhYZjTvTGYahdhMXLuMfjfi6Kua": {
          "path": "0/29",
          "type": "pubkeyhash",
          "script_hex": "76a914d2c1fe5c55a1e9d818149750f2662ba57748247088ac",
          "balance": 1000,
          "balance_usd": 0.07470410000000001,
          "received": 1000,
          "received_usd": 0.0868,
          "spent": 0,
          "spent_usd": 0,
          "output_count": 1,
          "unspent_output_count": 1,
          "first_seen_receiving": "2019-09-25 16:12:10",
          "last_seen_receiving": "2019-09-25 16:12:10",
          "first_seen_spending": null,
          "last_seen_spending": null
        }
      },
      "transactions": [
        "a24445474a9a7c0698e8db221ad2cae06792a899e9bc7f5a590687c3c810c480"
      ],
      "utxo": [
        {
          "block_id": 596536,
          "transaction_hash": "a24445474a9a7c0698e8db221ad2cae06792a899e9bc7f5a590687c3c810c480",
          "index": 0,
          "value": 1000,
          "address": "1LDPJCMZhYZjTvTGYahdhMXLuMfjfi6Kua"
        },
        {
          "block_id": 549163,
          "transaction_hash": "0c9a0219a8f3ef4a7d00483a755a9a18a674340c547bdf573481c1c613898746",
          "index": 0,
          "value": 1800,
          "address": "1MS6eGqD4iUGyJPbEsjqmoNaRhApgtmF8J"
        }
      ]
    }
  },
  "context": {
    "code": 200,
    "limit": "1,2",
    "offset": "0,0",
    "results": 1,
    "checked": [
      "0/0: 1EfgV2Hr5CDjXPavHDpDMjmU33BA2veHy6",
      "0/1: 12iNxzdF6KFZ14UyRTYCRuptxkKSSVHzqF",
      "0/2: 1CcEugXu9Yf9Qw5cpB8gHUK4X9683WyghM",
      "0/3: 15xANZb5vJv5RGL263NFuh8UGgHT7noXeZ",
      "0/4: 1PJMBXKBYEBMRDmpAoBRbDff26gHJrawSp",
      "0/5: 16ZBYSHkLkRFHAuZvyzosXYgU1UDJxRV1R",
      "0/6: 1EHeVKfjjq6FJpix86G2yzFeRbZ6RNg2Zm",
      "0/7: 17BvBPGypT4nt1xc5QpdSDkQb54xoUuQkD",
      "0/8: 1HqsYkwczwvkMXCobk5WPZmhj2S2TK613Z",
      "0/9: 1687EJf5YEmeEtcscnuJPiV5b8HkM1o98q",
      "0/10: 1MS6eGqD4iUGyJPbEsjqmoNaRhApgtmF8J",
      "0/11: 1JSAD9Z8cpcMkwv98eFNWRciAMDqrPYJTE",
      "0/12: 18zBZa3GWoqxuJK9qgJnoVoYEJSpFGDn6x",
      "0/13: 17DcBkPv4VwdzC4837535XyyoUPZDkKArf",
      "0/14: 1DMZDJV5XgnTswpuP85Gnfk7p1473QmxuF",
      "0/15: 1AWhq6hMWzwxEG1wGeR7Y9aTyoxEjw7Rjj",
      "0/16: 1HxhnLyFE3b7CWxtcxRKjKQ9fcjHeweq8R",
      "0/17: 1H4J9nwbyUTvZ527K9fqaTeT3vd7Q4fVNC",
      "0/18: 1KWLBZNwdGVxWyVhSSYjScLNevvxrSm1ww",
      "0/19: 1J3BmEZTgHSgPcZptEP9grBVg8crvYYPSk",
      "0/20: 1deZJSgLcwqUm9gBoo7TMzC6CEBpeweJS",
      "0/21: 14hLE4kcxsL2E9VHwiztVokubR2rFkDnVr",
      "0/22: 17THvVGQF1kFyjQHWcW5AiwBxDvx7GRcLm",
      "0/23: 15RE6yBUX351VyAAht4SESXdgqEFAgwLdS",
      "0/24: 1DzbL4hx1BTKpuDKjeA2JxD598kDe1BVGz",
      "0/25: 1JwMtErm8siMrGM2LXBUrWTy1aBRkku79t",
      "0/26: 189tJnNzz9RP8ZRdrB8UTAoVkeNt7yJrGb",
      "0/27: 14S1fPp686HvwcuG4oBPHvn1HXeDZSAwjD",
      "0/28: 17JspALUGU9Kw5Ui3xX8VFnCx8JVjUj4zr",
      "0/29: 1LDPJCMZhYZjTvTGYahdhMXLuMfjfi6Kua",
      "0/30: 1AKP5BtANmebif9vNwYGNx5qcSxASJWSP9",
      "0/31: 1PqivQQbGwMmmDypaqoNLbE8vpKppihavk",
      "0/32: 1M1mGGEgtFZtcEjnmWzkWEJmTpr8dCLpaX",
      "0/33: 13srT2gVpj4G8kDNJJicsw28Ecxt3gvz6E",
      "0/34: 1NyEZ7zU8C2nEysVgHTYBjBgeCdmz4XSMX",
      "0/35: 1PtAfTFFtJUvQJRsY6v8gyjNyH3cu4ueyJ",
      "0/36: 1PLYcCvCkZCwgK9kq5T53fG5SRGkjieZve",
      "0/37: 1DFaATuBZXs9nYwEsihBpadnN1oYXPCwsn",
      "0/38: 1FnHfiGBb2ND6q8Q1Be5Sc9jwwFGsZzYcE",
      "0/39: 1GFjXEtmkV9XpC2D4Lbjvrk2NYFjHQRfnr",
      "0/40: 1MGAnDNvkDQvTGdJ9oZdSBtiTc9vuwRN2A",
      "0/41: 1Hrf1TUUSNnhgCFsywvA9BX9YaTABo4zsP",
      "0/42: 1CK4cQ85AAyB8s7FtENx3q7cCKTHqsCpD8",
      "0/43: 1Md5gRHwHUkUUbaeGB2EoWgfPBg1ERUc9C",
      "0/44: 16ubuUFzMQWzRpDFU39p9jBnJUqQBmq9hC",
      "0/45: 1CrBcrqv4p9mC6Am9Zc5WmzDW9h4B7yifL",
      "0/46: 14C3hQ3pHbg3mZw9cUsKVfVXkS5tYbx82i",
      "0/47: 1EM5gi9sURngbxXszMhXweqDm7vW8fFHvY",
      "0/48: 15NvG6YpVh2aUc3DroVttEcWa1Z99qhACP",
      "0/49: 18UXoW2caqHyTpDueSDtFrJyekg7VBzRzt",
      "0/50: 1P5chLKDSFVUJaf4ahwpZ1sJxUFoY2Ph1E",
      "0/51: 1CnsHtMDDPpwwjDX1idaVmXoAkn5w5DUFo",
      "0/52: 1DCP8fg3pCcTY3Voi5zf1em9ZFpjC8TZdE",
      "0/53: 1CiDp9n9G5Jw4mrqEYeZf2hGou3Qxbubfd",
      "0/54: 1DYMSL8EusREgBaSjuZ5BXyLgwsGFjQK4z",
      "0/55: 18Zwy9C8qwzr1WNqETs7ghQbbP1GaY2o4F",
      "0/56: 1GVFgnLwgEbxLi2gZXoScnGvnzefZNtvHw",
      "0/57: 1JeTm8ps2mnZMnzhrxMz3N26jk9pnxWjWk",
      "0/58: 14VecjHW9Mz7dwofxox1hRhBgitoXGvdtb",
      "0/59: 13n3no297bTMqnYPmtHgMaE7dtmsEXDPAT",
      "1/0: 1muF2Eq9iR4ttJKpc4zZkoTmu3E41Ab9v",
      "1/1: 18RtYUqcNDRjvbB8gg2hwxCYkWwuFcURJp",
      "1/2: 15LE2wxPfw54p3RYWtd7TiduPVqNWiRdFv",
      "1/3: 1CjYeTqk2M4qfnJWyYmLiGmm9BrX9Vdn7f",
      "1/4: 1NWaSHQZsedx3X5ySwkesL7SfDrfQ38TwZ",
      "1/5: 1HwVbcCNyoej8oyRn5ayTaMJbUbh1XH17D",
      "1/6: 1M2R4jSZHiJebjMZ6FEkE9kAFAF55SsNuf",
      "1/7: 1N2PNkgCAfkshYL1R533Q7nsEdUBiu69ou",
      "1/8: 1KaYtjPYwUaXKswMT6dVkjU1i3AaGRbwgc",
      "1/9: 16C6Dns9gfUAJ9PXPQj9hxcLmJaUgvCztg",
      "1/10: 14fXx1jkGk85izCGnhFUL1PfwNSEP5hrLj",
      "1/11: 1LGf9DzHTQd1BwakvcrQnQbKom7mZRmTnX",
      "1/12: 1Npzk7S3FdBqZUmCUFnpVAkbPZKcHEakd9",
      "1/13: 154Xhii1fs4qqPJWFSgV7NoQqheKj24zB6",
      "1/14: 16K7tqjnVEKqn9bS4mqmAv2ra4JnwoWFU3",
      "1/15: 1CN1oU8YF9udAKratV33EHGxmgR54d4CwY",
      "1/16: 1Ry5PG7hKm7H1Kvf7FTfoRt8n4kPtY6hL",
      "1/17: 1PNKjpz35PaWyeJrinQab2E1a1vtWcfRdy",
      "1/18: 16VwyBxQyJT5DUswUoyq7Ga6t6sY7Ua8aA",
      "1/19: 1GMdnCiw1dgGjaMAWyWssToYvtcGA5ERaH"
    ],
    "state": 600898,
    ...
  }
}


Request cost formula:

1 for the address endpoint (add 1 if ?omni=true is used)
1 + (0.1 * (entity count - 1)) for the addresses endpoint (e.g. it's 1 + (0.1 * (100 - 1)) = 10.9 for requesting 100 addresses)
1 + 2 * depth - 0.1 for the xpub endpoint, where depth is the number of 20-addresses iterations (BIP 32 standard). The minimum number of iterations is 1 (the cost would be 2.9 in that case), if there are 5 iterations required, 100 addresses will be checked in total (the cost would be 10.9)
Additional 1 point if ?transaction_details=true is used
Explore visualizations on our front-end:

https://blockchair.com/bitcoin/address/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
https://blockchair.com/bitcoin/xpub/xpub6CUGRUonZSQ4TWtTMmzXdrXDtypWKiKrhko4egpiMZbpiaQL2jkwSB1icqYh2cfDfVxdx4df189oLKnC5fSwqPfgyP3hooxujYzAu3fDVmz
Address balance mass checkThis endpoint returns confirmed balances only. If address hasn't been seen on the blockchain or has a zero balance, it's not shown among the results. It's extremely fast (under 1 second for 25.000 addresses) and cheap (it costs only 26 request points to fetch 25.000 addresses).

Endpoints:

https://api.blockchair.com/{:btc_chain}/addresses/balances (POST)
https://api.blockchair.com/{:btc_chain}/addresses/balances?addresses={:comma_separated_list} (GET)
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:comma_separated_list} is the comma-separated list of addresses (up to 25.000)
Example output:

https://api.blockchair.com/bitcoin/addresses/balances?addresses=34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo,35hK24tcLEWcgNA4JxpvbkNkoAcDGqQPsP,1DoesntExist:

{
  "data": {
    "35hK24tcLEWcgNA4JxpvbkNkoAcDGqQPsP": 25550215769897,
    "34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo": 4053399981517
  },
  "context": {
    "code": 200,
    "results": 2,
    "state": 635329,
    "request_cost": 1.003,
    ...
  }
}


Example POST request:

> curl -v --data "addresses=34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo,35hK24tcLEWcgNA4JxpvbkNkoAcDGqQPsP,1DoesntExist" https://api.blockchair.com/bitcoin/addresses/balances


(it's better to use POST for long requests)

Request cost formula:

1 + 0.001 per each requested address (i.e. for 25.000 addresses it's just 25, so it's the best and the fastest way to fetch balances)

Dashboard endpoints for EthereumBlock infoEndpoints:

https://api.blockchair.com/{:eth_chain}/dashboards/block/{:height}₀
https://api.blockchair.com/{:eth_chain}/dashboards/block/{:hash}₀
https://api.blockchair.com/{:eth_chain}/dashboards/blocks/{:height}₀,...,{:height}ᵩ (up to 10 blocks, comma-separated)
https://api.blockchair.com/{:eth_chain}/dashboards/blocks/{:hash}₀,...,{:hash}ᵩ (up to 10 blocks, comma-separated)
Where:

{:eth_chain} can only be: ethereum or ethereum/testnet
{:height}ᵢ is the block height (integer value), also known as block id
{:hash}ᵢ is the block hash (regex: /^0x[0-9a-f]{64}$/i)
Possible options:

?limit={:limit} limits the number of returned transaction hashes contained in the block. Default is 100. Maximum is 10000. In case of 0 returns an empty transaction hashes array
?offset={:offset} allows to paginate transaction hashes. Default is 0. Maximum is 1000000.
Output:

data contains an associative array where found block heights or block hashes used as keys:

data.{:id}ᵢ.block — information about the block (see Ethereum-like block object for the field descriptions)
data.{:id}ᵢ.transactions — the array of transaction hashes (sorted by position in the block ascending) included in the block (respecting the set limit and offset)
data.{:id}ᵢ.synthetic_transactions — array of internal Blockchair ids of synthetic transactions. By synthetic transactions we understand state changes in the blockchain which don't have parental transaction entities, i.e. transferring miner reward (for blocks and uncles), coin generation in the genesis block, etc. This array is not iterable, and always yields the entire result set.
data.{:id}ᵢ.uncles — the array of hashes of the block's uncles (in case there are no uncles — an empty array). This array is not iterable as well, and always yields the entire result set.
Where {:id}ᵢ is either {:height}ᵢ or {:hash}ᵢ from the query string.

If there's no {:id}ᵢ has been found in the database, there won't be such key.

Note that the total number of transactions in the block is contained in data.{:id}ᵢ.block.transaction_count, but that doesn't take synthetic transactions into account (use data.{:id}ᵢ.block.synthetic_transaction_count instead)

Context keys:

context.results — number of found blocks
context.limit — applied limit
context.offset — applied offset
context.state — best block height on the {:eth_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = context.state - data.{:id}ᵢ.block.id + 1)
Example requests:

https://api.blockchair.com/ethereum/dashboards/block/2345678
https://api.blockchair.com/ethereum/dashboards/block/0xda214d1b1d458e7ae0e626b69a52a59d19762c51a53ff64813c4d31256282fdf
context.state: best block height on the {:eth_chain} chain (tip: it's possible to calculate the number of confirmation transaction received using this formula: confirmations = data.{:id}ᵢ.transaction.block_id - context.state + 1, or if data.{:id}ᵢ.transaction.block_id is -1 it's an unconfirmed transaction)
https://api.blockchair.com/ethereum/dashboards/block/2345678?limit=2
https://api.blockchair.com/ethereum/dashboards/block/2345678?limit=2&offset=2
Example output:

https://api.blockchair.com/ethereum/dashboards/block/2345678:

{
  "data": {
    "2345678": {
      "block": {
        "id": 2345678,
        "hash": "0xda214d1b1d458e7ae0e626b69a52a59d19762c51a53ff64813c4d31256282fdf",
        "date": "2016-09-29",
        "time": "2016-09-29 01:39:41",
        "size": 1109,
        "miner": "0x4bb96091ee9d802ed039c4d1a5f6216f90f81b01",
        "extra_data_hex": "657468706f6f6c2e6f7267202845553129",
        "difficulty": 81923183857781,
        "gas_used": 105000,
        "gas_limit": 1500000,
        "logs_bloom": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "mix_hash": "f5b95f5b79cd8425db7f04d200d78d16c104c28d078d0b653ae1c24f31759662",
        "nonce": "681508643254209570",
        "receipts_root": "51a6952987f2c7ebf74fc1a4f644265aebb660b1d86a12c0f6e3001a2866331f",
        "sha3_uncles": "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "state_root": "4f6b1af13d99c75e0d644b226d57767a0d2f22921c529dfe3455bc63154b01e5",
        "total_difficulty": "66939257372572274863",
        "transactions_root": "dde4d2ce7556effca10c868f500f0e47fb09b5cb4a003d781080f1a06e582352",
        "uncle_count": 0,
        "transaction_count": 5,
        "synthetic_transaction_count": 1,
        "call_count": 5,
        "synthetic_call_count": 1,
        "value_total": "17966223975031638280",
        "value_total_usd": 238.950782294711,
        "internal_value_total": "17963073975031638280",
        "internal_value_total_usd": 238.90888729411,
        "generation": "5000000000000000000",
        "generation_usd": 66.5000009536743,
        "uncle_generation": "0",
        "uncle_generation_usd": 0,
        "fee_total": "3150000000000000",
        "fee_total_usd": 0.0418950006008148,
        "reward": "5003150000000000000",
        "reward_usd": 66.5418959542751
      },
      "uncles": [],
      "transactions": [
        "0x4052841e7ff856e08e73245ed1fab5f41021d4bfe83202b6581870cb559b44c4",
        "0xa1ed63865958a1b3abc8e259dc980bd76dd3f989f14577cce18b7e265cf9528e",
        "0x1d6713c7e6be2a45e6b3d2a7dfc1af96443cfb65d4b51cd41ac21b7b840e77e0",
        "0xffbcdcbef6c5341dd60a9b7f182b61cf0c468d63defcc2fa8c56e292d4bfc8d6",
        "0x0c79e3ae36150eb36d6a631cc8d6250db4b9b832a82ac58ea356357f5987debe"
      ],
      "synthetic_transactions": [
        2345678000005
      ]
    }
  },
  "context": {
    "code": 200,
    "limit": 100,
    "offset": 0,
    "results": 1,
    "state": 8766187,
    "state_layer_2": 8766186,
    ...
  }
}


Request cost formula:

1 for https://api.blockchair.com/{:eth_chain}/dashboards/block/{:height}₀ and https://api.blockchair.com/{:eth_chain}/dashboards/block/{:hash}₀ endpoints
1 + (0.1 * (entity count - 1)) for https://api.blockchair.com/{:eth_chain}/dashboards/blocks/{:height}₀,...,{:height}ᵩ and https://api.blockchair.com/{:eth_chain}/dashboards/blocks/{:hash}₀,...,{:hash}ᵩ endpoints (e.g. it's 1 + (0.1 * (10 - 1)) = 1.9 for requesting 10 blocks)
Explore visualizations on our front-end:

https://blockchair.com/ethereum/block/2345678
Uncle infoEndpoints:

https://api.blockchair.com/{:eth_chain}/dashboards/uncle/{:hash}₀
https://api.blockchair.com/{:eth_chain}/dashboards/uncle/{:hash}₀,...,{:hash}ᵩ (up to 10 uncles, comma-separated)
Where:

{:eth_chain} can only be: ethereum or ethereum/testnet
{:hash}ᵢ is the uncle hash (regex: /^0x[0-9a-f]{64}$/i)
Output:

data contains an associative array where uncle hashes used as keys:

data.{:hash}ᵢ.uncle — information about the block (see Ethereum-like uncle object for the field descriptions)
If there's no {:hash}ᵢ has been found in the database, there won't be such key.

Context keys:

context.results: number of found uncles
context.limit: applied limit
context.offset: applied offset
context.state: best block height on the {:eth_chain} chain
Example requests:

https://api.blockchair.com/ethereum/dashboards/uncle/0x5cd50096dbb856a6d1befa6de8f9c20decb299f375154427d90761dc0b101109
https://api.blockchair.com/ethereum/dashboards/uncles/0x5cd50096dbb856a6d1befa6de8f9c20decb299f375154427d90761dc0b101109,0xedc7a92c2a8aa140b0afa26db4ce8e05994a67d6fc3d736ddd77210b0ba565bb
Example output:

https://api.blockchair.com/ethereum/dashboards/uncle/0x5cd50096dbb856a6d1befa6de8f9c20decb299f375154427d90761dc0b101109:

{
  "data": {
    "0x5cd50096dbb856a6d1befa6de8f9c20decb299f375154427d90761dc0b101109": {
      "uncle": {
        "parent_block_id": 3,
        "index": 0,
        "id": 1,
        "hash": "0x5cd50096dbb856a6d1befa6de8f9c20decb299f375154427d90761dc0b101109",
        "date": "2015-07-30",
        "time": "2015-07-30 15:26:58",
        "size": 538,
        "miner": "0xc8ebccc5f5689fa8659d83713341e5ad19349448",
        "extra_data_hex": "59617465732052616e64616c6c202d2045746865724e696e6a61",
        "difficulty": 17171480576,
        "gas_used": 0,
        "gas_limit": 5000,
        "logs_bloom": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "mix_hash": "f8c94dfe61cf26dcdf8cffeda337cf6a903d65c449d7691a022837f6e2d99459",
        "nonce": "7545615996671392490",
        "receipts_root": "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "sha3_uncles": "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "state_root": "1e6e030581fd1873b4784280859cd3b3c04aa85520f08c304cf5ee63d3935add",
        "transactions_root": "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "generation": "3750000000000000000",
        "generation_usd": 3.75
      }
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 8792290,
    "state_layer_2": 8792279,
    ...
  }
}


Request cost formula:

1 for https://api.blockchair.com/{:eth_chain}/dashboards/uncle/{:hash}₀ endpoint
1 + (0.1 * (entity count - 1)) for https://api.blockchair.com/{:eth_chain}/dashboards/uncles/{:hash}₀,...,{:hash}ᵩ endpoint (e.g. it's 1 + (0.1 * (10 - 1)) = 1.9 for requesting 10 uncles)
Explore visualizations on our front-end:

https://blockchair.com/ethereum/uncle/0x5cd50096dbb856a6d1befa6de8f9c20decb299f375154427d90761dc0b101109
Transaction infoEndpoints:

https://api.blockchair.com/{:eth_chain}/dashboards/transaction/{:hash}₀
https://api.blockchair.com/{:eth_chain}/dashboards/transactions/{:hash}₀,...,{:hash}ᵩ (up to 10 transactions, comma-separated)
Where:

{:eth_chain} can only be: ethereum or ethereum/testnet
{:hashᵢ} is the transaction hash (regex: /^0x[0-9a-f]{64}$/i), also known as txid
Possible options:

?erc_20=true shows information about ERC-20 token transfers in this transaction
?effects=true shows state changes for the transaction
?trace_mempool=true — this option tries to retrieve a list of internall calls for mempool transactions. In conjunction with &erc_20=true it also shows the list of ERC-20 transfers. This is an experimental feature. Please note that internal transfers may get invalidated when transaction gets confirmed.
?assets_in_usd=true — adds value_usd_now to all layer_2.erc_20 items yielding the current (not at the moment of the transaction!) USD value of tokens (null if the price is unknown)
?events=true — this option costs 1 additional request point to use. When enabled, it adds an array of event logs to the output. Every log contains topics, data, contract, log_index, and decoded_event. Depending on how much our API knows about the event signature, there are 3 detalization levels for decoded_event (example transaction with all 3: https://api.blockchair.com/ethereum/dashboards/transaction/0x7d52cf58fe78403e8816dae6e900baff92b35760b4ed81cecd2590eafcde3dad?events=true):Full data: decoded_event contains both the full event name with its argument names (name_full, example: Approval(address owner, address spender, uint256 value)), and the argument values in the arguments array;
Partial data: only name_with_types is known (example: Withdrawal(address, uint256)), arguments yields null;
No data: decoded_event yields null.
Output:

data contains an associative array where found transaction hashes are used as keys:

data.{:hash}ᵢ.transaction — information about the transaction (see Ethereum-like transaction object)
data.{:hash}ᵢ.calls — the array of all calls made during the execution of the transaction (always null for mempool transactions and the last 6 blocks)
Additional data:

data.{:hash}ᵢ.layer_2.erc_20 (only if ?erc_20=true is set) — an array of ERC-20 transfers (or an empty array if there are none), Each array element contains the following keys: token_address, token_name, token_symbol, token_decimals, sender, recipient, value — field descriptions are available here.
data.{:hash}ᵢ.effects (only if ?effects=true is set) — yields all ETH ad ERC-20 balance changes for the transaction in a neat format. Keys are 0x0000000000000000000000000000000000000000 for ETH or token address for ERC-20's. Each array element contains the following keys: asset_type, asset_name, asset_symbol, asset_decimals, changes. changes is an array containing all the changes for the asset (keys are Ethereum addresses, and values are balance changes). Please note this option is experimental. Example request: https://api.blockchair.com/ethereum/dashboards/transaction/0xd9a24f57c713207c39c58e8ef3cb44e115fcc8bd0f85eb4ea82c78bc065a723f?effects=true&erc_20=true. If ?erc_20=true option is not used, ?effects=true won't yield ERC-20 data.
In case transaction is confirmed on the blockchain, data.{:hash}ᵢ.transaction.block_id contains the block number it's included in. If the transaction is in the mempool, data.{:hash}ᵢ.transaction.block_id yields -1. If the transaction is neither present in the blockchain, nor in the mempool, there won't be data.{:hash}ᵢ key with data.

Context keys:

context.results — number of found transactions
context.state — best block height on the {:eth_chain} chain (tip: it's possible to calculate the number of confirmation transaction received using this formula: confirmations = data.{:id}ᵢ.transaction.block_id - context.state + 1, or if data.{:id}ᵢ.transaction.block_id is -1 it's an unconfirmed transaction)
context.state_layer_2 — the latest block number for which our engine has processed second layer (e.g. ERC-20) transactions. If it's less than the block id in your current environment (e.g. block id of a transaction you requested), it makes sense to repeat the request after some time to retrieve second layer data
Example requests:

https://api.blockchair.com/ethereum/dashboards/transaction/0xc132a422513e39038269e091847319a14029feb42c66bd1424c57dfc0e4f8d08
https://api.blockchair.com/ethereum/dashboards/transactions/0xc132a422513e39038269e091847319a14029feb42c66bd1424c57dfc0e4f8d08,0x502bc6fe1f39738f0fd3223a2f125433b8ec7e80acd11ef514f6909536cc9e66
https://api.blockchair.com/ethereum/dashboards/transaction/0xc132a422513e39038269e091847319a14029feb42c66bd1424c57dfc0e4f8d08?erc_20=true
https://api.blockchair.com/ethereum/dashboards/transaction/0x77025c5c7ff5eeb4bb164a4be84dd49192e12086cc321199f73888830c3ecd9e?erc_20=true&assets_in_usd=true
Example output:

https://api.blockchair.com/ethereum/dashboards/transaction/0xc132a422513e39038269e091847319a14029feb42c66bd1424c57dfc0e4f8d08?erc_20=true:

{
  "data": {
    "0xc132a422513e39038269e091847319a14029feb42c66bd1424c57dfc0e4f8d08": {
      "transaction": {
        "block_id": 5678901,
        "id": 5678901000028,
        "index": 28,
        "hash": "0xc132a422513e39038269e091847319a14029feb42c66bd1424c57dfc0e4f8d08",
        "date": "2018-05-26",
        "time": "2018-05-26 08:06:16",
        "failed": false,
        "type": "call_tree",
        "sender": "0xcd36cfb41b81cfbc97772e43fda1fab39e718869",
        "recipient": "0x0ebe7487f60d3a4eb084a23152890a1a65b2ad65",
        "call_count": 101,
        "value": "0",
        "value_usd": 0,
        "internal_value": "0",
        "internal_value_usd": 0,
        "fee": "16821205000000000",
        "fee_usd": 9.84774982859924,
        "gas_used": 3364241,
        "gas_limit": 4000000,
        "gas_price": 5000000000,
        "input_hex": "bb0a64b600000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000d00000000000000000000000000a68920f6d3c996ac3c232e4e93914e9d7615073500000000000000000000000000000000000000000000000000000000000000640000000000000000000000004cb04ab4dfc1963814cb2b1da8475e5ada6065f3000000000000000000000000459ed852d2f296942d82e0b88f678c01d3dda946000000000000000000000000c00dbc71bce389816763773fc4e5b757fce9b184...",
        "nonce": "9092",
        "v": "1c",
        "r": "9b9a4da4aa5f0dfe141b6dad2ae6e41bcd63cab7f0ae9aef4f1752037b698526",
        "s": "20acc42c4941a1077fa4bb8ccd707e6865a61c60f4a77d1b19f86d2e0525fcde"
      },
      "calls": [
        {
          "block_id": 5678901,
          "transaction_id": 5678901000028,
          "transaction_hash": "0xc132a422513e39038269e091847319a14029feb42c66bd1424c57dfc0e4f8d08",
          "index": "0",
          "depth": 0,
          "date": "2018-05-26",
          "time": "2018-05-26 08:06:16",
          "failed": false,
          "fail_reason": null,
          "type": "call",
          "sender": "0xcd36cfb41b81cfbc97772e43fda1fab39e718869",
          "recipient": "0x0ebe7487f60d3a4eb084a23152890a1a65b2ad65",
          "child_call_count": 100,
          "value": "0",
          "value_usd": 0,
          "transferred": true,
          "input_hex": "bb0a64b600000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000d00000000000000000000000000a68920f6d3c996ac3c232e4e93914e9d7615073500000000000000000000000000000000000000000000000000000000000000640000000000000000000000004cb04ab4dfc1963814cb2b1da8475e5ada6065f300...",
          "output_hex": "0000000000000000000000000000000000000000000000000000000000000001"
        },
        {
          "block_id": 5678901,
          "transaction_id": 5678901000028,
          "transaction_hash": "0xc132a422513e39038269e091847319a14029feb42c66bd1424c57dfc0e4f8d08",
          "index": "0.0",
          "depth": 1,
          "date": "2018-05-26",
          "time": "2018-05-26 08:06:16",
          "failed": false,
          "fail_reason": null,
          "type": "call",
          "sender": "0x0ebe7487f60d3a4eb084a23152890a1a65b2ad65",
          "recipient": "0xa68920f6d3c996ac3c232e4e93914e9d76150735",
          "child_call_count": 0,
          "value": "0",
          "value_usd": 0,
          "transferred": true,
          "input_hex": "a9059cbb0000000000000000000000004cb04ab4dfc1963814cb2b1da8475e5ada6065f30000000000000000000000000000000000000000000000056bc75e2d63100000",
          "output_hex": ""
        },
        ...
      ],
      "layer_2": {
        "erc_20": [
          {
            "token_address": "0xa68920f6d3c996ac3c232e4e93914e9d76150735",
            "token_name": "",
            "token_symbol": "MST",
            "token_decimals": 18,
            "sender": "0x0ebe7487f60d3a4eb084a23152890a1a65b2ad65",
            "recipient": "0xa488cf9adcac170f28a046ba34a9885eb9f67033",
            "value": "100000000000000000000",
        		"value_approximate": 100
          },
          {
            "token_address": "0xa68920f6d3c996ac3c232e4e93914e9d76150735",
            "token_name": "",
            "token_symbol": "MST",
            "token_decimals": 18,
            "sender": "0x0ebe7487f60d3a4eb084a23152890a1a65b2ad65",
            "recipient": "0x8cc1e8ffc3bf19c67c244e2bd8126fd29ec50e58",
            "value": "100000000000000000000",
    				"value_approximate": 100
          },
          ...
        ]
      }
    }
  },
  "context": {
    "code": 200
    "results": 1,
    "state": 8791761,
    "state_layer_2": 8791746,
    ...
  }
}


Bonus endpoint:

https://api.blockchair.com/{:eth_chain}/dashboards/transaction/{:hash}₀/priority
For mempool transactions shows priority (position) by gas_price over other transactions (out_of mempool transactions). position is null if the transaction is not in the mempool. eta_seconds returns an approximate time for the transaction to confirm (in seconds, exprimental). Cost: 1.

Request cost formula:

1 for https://api.blockchair.com/{:eth_chain}/dashboards/transaction/{:hash}₀ endpoint
1 + (0.1 * (entity count - 1)) for https://api.blockchair.com/{:eth_chain}/dashboards/transactions/{:hash}₀,...,{:hash}ᵩ endpoint (e.g. it's 1 + (0.1 * (10 - 1)) = 1.9 for requesting 10 transactions)
Using ?erc_20=true adds 1 for each requested transaction
Using ?effects=true adds 1 for each requested transaction
Using ?events=true adds 1 for each requested transaction
Using ?trace_mempool=true adds 1 for each requested transaction
Explore visualization on our front-end:

https://blockchair.com/ethereum/transaction/0xd628780ba231cefe6a4f6c3da3b683b16f6151dc9753afd8773d3c2d74ac10c8
Address infoEndpoint:

https://api.blockchair.com/{:eth_chain}/dashboards/address/{:address}₀
Where:

{:eth_chain} can only be: ethereum or ethereum/testnet
{:address}ᵢ is an Ethereum address (either an account or a contract, the address should start with 0x)
Possible options:

?limit={:call_limit} — limits the number of returned latest calls associated with the address. Default is 100. Maximum is 10000.
?offset={:call_offset} — allows to paginate calls. Default is 0, and the maximum is 1000000.
?erc_20={...} — returns information about ERC-20 token balances of the address (tokens are sorted by market capitalization descending):?erc_20=approximate (or ?erc_20=true, default) — yields all token balances from our database. These values may miss some non-standard transfers in tokens that don't follow the ERC-20 standard in full. Please double-check if this option returns correct values for the tokens you'd want to get information about. Using this option costs 1.
?erc_20=precise — yields all token balances from our node. The process is the following: we gather information from our database about potential ERC-20 tokens the address may hold, and then for each token we call getBalance function using our node to get precise balances. Please note that if for some reason some contract doesn't follow the ERC-20 standard, our database may still miss records about the address holding this token, and there will be no request to the node about this token. So while balances yielded with this option are precise, some non-standard tokens may still be missed. Using this option costs 2.
?erc_20={:token_address}₀,...,{:token_address}ᵩ (recommended) — yields balances for the enlisted ERC-20 tokens from our node. That's the recommended way if you have an exact list of tokens you'd like to check. Even if some token doesn't follow the ERC-20 standard, but still has getBalance function implemented, the correct balance will be returned. Using this option costs 0.75 + 0.01 for each contract checked (the cheapest option!)
?nonce=true — returns current account nonce (mempool transactions are taken in account)
?output=type — this option scrubs all the output data except for the address type (account or contract). This may be a very fast handy way to retrieve address type instead of requesting full address data
?assets_in_usd=true — adds asset_balance_usd to the output yielding the total USD value of all (excluding ETH) account assets (currently it's most popular ERC-20 tokens only), as well as balance_usd to all layer_2.erc_20 items. If the exchange rate for a particular token is unknown, returns null for this token.
?state=latest — if this option is enabled, balance will yield the confirmed balance, and the calls array won't include unconfirmed data
?contract_details=true — if applied, it adds additional data on the address if it's a contract. At the moment, it works with ERC-20 contracts only yielding token_name, token_symbol, and token_decimals. It also yields some additional fields for all contracts: creating_transaction_hash, creating_address, and creating_transaction_time. The additional cost of using this option is 0.5
Output:

In case the address has been found, data.{:address}₀ returns an array consisting of the following elements:

addressaddress.type — address type (account — for a simple address, contract — for a contract)
address.contract_code_hex — hex code of the contract at the moment of creation (for a contract), or null for an address
address.contract_created — for contracts only — if the contact was indeed created then true, if not (i.e. with a failed create call) — false, for a simple address yields null
address.contract_destroyed — for contracts only — if the contact was successfully destroyed (SELFDESCTRUCT) then true, if not — false; for a simple address yields null
address.balance — exact address balance in wei (here and below values in wei returned as strings as they don't fit into integers)
address.balance_usd — address balance in USD (float)
address.received_approximate — total received in wei (approximately) †
address.received_usd — total received in USD (approximately) †
address.spent_approximate — total spent in wei (approximately) †
address.spent_usd — total spent in USD (approximately) †
address.fees_approximate — total spent in transaction fees in wei (approximately) †
address.fees_usd — total spent in transaction fees in USD (approximately) †
address.receiving_call_count — number of calls the address has received, where value transfer occured ‡
address.spending_call_count — number of calls that has been made by this address where value transfer occured ‡
address.call_count — total number of calls the address participated in (may be greater than receiving_call_count + spending_call_count, because it also takes failed calls into account)
address.transaction_count — number of transactions the address participated in
address.first_seen_receiving — timestamp (UTC) when the address received a successful incoming call for the first time
address.last_seen_receiving — timestamp (UTC) when the address received a successful incoming call for the last time
address.first_seen_spending — timestamp (UTC) when the address sent a successful call for the first time
address.last_seen_spending — timestamp (UTC) when the address sent a successful call for the last time
address.nonce — current account nonce (only if ?nonce=true is set, null otherwise)
calls — an array of the latest address call, each element of an array containing the following elements: block_id, transaction_hash, index, time, sender, recipient, value, value_usd, transferred (see the description here)
layer_2.erc_20 (only if ?erc_20=true is set) — the array of ERC-20 token balances of the address, each element contains the following fields: token_address, token_name, token_symbol, token_decimals, balance_approximate (number of tokens), balance (exact number of tokens in the smallest denomination). Note that balance ≈ balance_approximate * 10 ^ token_decimals.
Additional data:

data.{:hash}ᵢ.layer_2.erc_20 (or an empty array if there are none), Each array element contains the following keys: token_address, token_name, token_symbol, token_decimals, sender, recipient, value — field descriptions are available here.
context.results contains the number of found addresses (0 or 1).

Notes:

† — for these fields the wei value can be rounded. For a million of calls, the rounding error can be more than 1 ether.
‡ — only those calls are counted that fit the following condition: transferred = true, i.e. calls that do not change state (including staticcall, failed calls, etc.) are not taken into account
Context keys:

context.results — number of found addresses
context.limit — applied limit
context.offset — applied offset
context.state — best block height on the {:eth_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = block_id - context.state + 1)
context.state_layer_2 — the latest block number for which our engine has processed second layer (e.g. ERC-20) transactions. If it's less than the block id in your current environment (e.g. block id of a transaction you requested), it makes sense to repeat the request after some time to retrieve second layer data
Example requests:

https://api.blockchair.com/ethereum/dashboards/address/0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d
https://api.blockchair.com/ethereum/dashboards/address/0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d?limit=1&offset=0
https://api.blockchair.com/ethereum/dashboards/address/0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d?erc_20=true&nonce=true
Example output:

https://api.blockchair.com/ethereum/dashboards/address/0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d?erc_20=true:

{
  "data": {
    "0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d": {
      "address": {
        "type": "account",
        "contract_code_hex": null,
        "contract_created": null,
        "contract_destroyed": null,
        "balance": "1337000000000000001337",
        "balance_usd": 217088.92828369106,
        "received_approximate": "1337000000000000000000",
        "received_usd": 1337,
        "spent_approximate": "0",
        "spent_usd": 0,
        "fees_approximate": "0",
        "fees_usd": 0,
        "receiving_call_count": 2,
        "spending_call_count": 0,
        "call_count": 2,
        "transaction_count": 2,
        "first_seen_receiving": "2015-07-30 00:00:00",
        "last_seen_receiving": "2018-11-16 00:52:45",
        "first_seen_spending": null,
        "last_seen_spending": null
      },
      "calls": [
        {
          "block_id": 6712155,
          "transaction_hash": "0x0357352473d64df14fb987f33bbc9c3cd317fafe7c9498139c6a0529b551a017",
          "index": "0",
          "time": "2018-11-16 00:52:45",
          "sender": "0x0f4b92e13cc618bb9ff2120aec2ccd19f0d97b68",
          "recipient": "0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d",
          "value": 1337,
          "value_usd": 0,
          "transferred": true
        },
        {
          "block_id": 0,
          "transaction_hash": null,
          "index": "0",
          "time": "2015-07-30 00:00:00",
          "sender": null,
          "recipient": "0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d",
          "value": 1.337e+21,
          "value_usd": 1337,
          "transferred": true
        }
      ],
      "layer_2": {
        "erc_20": [
          {
            "token_address": "0x68e14bb5a45b9681327e16e528084b9d962c1a39",
            "token_name": "en",
            "token_symbol": "CAT",
            "token_decimals": 18,
            "balance_approximate": 5,
            "balance": "5000000000000000000"
          },
          {
            "token_address": "0xd49ff13661451313ca1553fd6954bd1d9b6e02b9",
            "token_name": "ElectrifyAsia",
            "token_symbol": "ELEC",
            "token_decimals": 18,
            "balance_approximate": 13.6553835383397,
            "balance": "13655383538340000000"
          },
          ...
        ]
      }
    }
  },
  "context": {
    "code": 200,
    "limit": 100,
    "offset": 0,
    "results": 1,
    "state": 8805160,
    "state_layer_2": 8805148,
    ...
  }
}


Request cost formula:

1 + 1 for each of the options used: ?erc_20=true, ?nonce=true + 0.5 if the ?contract_details=true option is used
Explore visualizations on our front-end:

https://blockchair.com/ethereum/address/0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d
Dashboard endpoints for second layersOmni Layer property infoAllows to retrieve the some basic information on an Omni Layer (Bitcoin) property (token).

Endpoints:

https://api.blockchair.com/bitcoin/omni/dashboards/property/{:prorerty_id}
Where:

{:prorerty_id} is the property identifier (integer)
Output:

data contains information about the property, fields accord with Omni Layer specification (https://github.com/OmniLayer/spec)

Example request:

https://api.blockchair.com/bitcoin/omni/dashboards/property/31
Example output:

https://api.blockchair.com/bitcoin/omni/dashboards/property/31:

{
  "data": {
    "id": 31,
    "name": "TetherUS",
    "category": "Financial and insurance activities",
    "subcategory": "Activities auxiliary to financial service and insurance activities",
    "description": "The next paradigm of money.",
    "url": "https://tether.to",
    "is_divisible": false,
    "issuer": "32TLn1WLcu8LtfvweLzYUYU6ubc2YV9eZs",
    "creation_transaction_hash": "5ed3694e8a4fa8d3ec5c75eb6789492c69e65511522b220e94ab51da2b6dd53f",
    "creation_time": "2014-10-06 16:39:15",
    "creation_block_id": 324140,
    "is_issuance_fixed": false,
    "is_issuance_managed": false,
    "circulation": 2145000000,
    "ecosystem": 1
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 599974,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/bitcoin/omni/property/31
ERC-20 token infoAllows to retrieve the some basic information on an ERC-20 token. Note that this endpoint is in the Beta stage.

Endpoints:

https://api.blockchair.com/ethereum/erc-20/{:token_address}/stats
https://api.blockchair.com/ethereum/testnet/erc-20/{:token_address}/stats (Goerli Testnet)
Where:

{:token_address} is the token contract address (starting with 0x)
Output:

data contains information about the token:

name — token name
symbol — token symbol (short name)
decimals — the number of decimal the token uses
time — timestamp (UTC) when the contract was created
creating_block_id — block id in which the token was created
creating_transaction_hash — transaction hash in which the token was created
transactions — total number of transfers associated with the token
transactions_24h — the same over the last 24 hours
volume_24h_approximate — transacted monetary volume in the number of tokens
volume_24h — the same in the token's smallest denomination (volume_24h ≈ volume_24h_approximate * (10 ^ decimals ))
circulation_approximate — circulating supply in the number of tokens
circulation — the same in the token's smallest denomination (circulation ≈ circulation_approximate * (10 ^ decimals ))
market_price_usd, market_price_btc, and market_cap_usd for market data. nulls are returned if there's no market data for the specified token
Example requests:

https://api.blockchair.com/ethereum/erc-20/0xdac17f958d2ee523a2206206994597c13d831ec7/stats
Example output:

https://api.blockchair.com/ethereum/erc-20/0xdac17f958d2ee523a2206206994597c13d831ec7/stats:

{
  "data": {
    "name": "Tether USD",
    "symbol": "USDT",
    "decimals": 6,
    "time": "2017-11-28 00:41:21",
    "creating_block_id": 4634748,
    "creating_transaction_hash": "0x2f1c5c2b44f771e942a8506148e256f94f1a464babc938ae0690c6e34cd79190",
    "transactions": 120789146,
    "transactions_24h": 153043,
    "volume_24h_approximate": 6941771405.5918045,
    "volume_24h": "6941771405591800",
    "circulation": "30910401959975130",
    "circulation_approximate": 30910401959.97513,
    "market_price_usd": 0.99923,
    "market_price_btc": 0.000029490600005902663,
    "market_cap_usd": 30886600950.465946
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 10163626,
    "state_layer_2": 10163616,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/ethereum/erc-20/token/0xdac17f958d2ee523a2206206994597c13d831ec7
ERC-20 token holder infoEndpoints:

https://api.blockchair.com/ethereum/erc-20/{:token_address}/dashboards/address/{:address}
https://api.blockchair.com/ethereum/testnet/erc-20/{:token_address}/dashboards/address/{:address} (Goerli Testnet)
Where:

{:token_address} is the token contract address (should start with 0x)
{:address} is an Ethereum address (either an account or a contract, the address should start with 0x)
Possible options:

?limit={:transaction_limit} — limits the number of returned latest transactions associated with the address. Default is 100. Maximum is 10000.
?offset={:transaction_offset} — allows to paginate transactions. Default is 0, and the maximum is 1000000.
Output:

The structure is similar to the Ethereum address endpoint with the following differences:

It shows balances in tokens instead of ethers
Fields like first_seen_receiving mean "first seen receiving tokens" instead of "ethers"
Instead of the calls array, there's the transactions array with the latest token transactions (see this for field descriptions). It's iterable using the ?offset= section.
Context keys:

context.results — number of found addresses
context.limit — applied limit
context.offset — applied offset
context.state — best block height on the {:eth_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = block_id - context.state + 1)
context.state_layer_2 — the latest block number for which our engine has processed second layer (e.g. ERC-20) transactions. If it's less than the block id in your current environment (e.g. block id of a transaction you requested), it makes sense to repeat the request after some time to retrieve second layer data
Example request:

https://api.blockchair.com/ethereum/erc-20/0x68e14bb5a45b9681327e16e528084b9d962c1a39/dashboards/address/0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d
Example output:

https://api.blockchair.com/ethereum/erc-20/0x68e14bb5a45b9681327e16e528084b9d962c1a39/dashboards/address/0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d:

{
  "data": {
    "0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d": {
      "address": {
        "balance": "5000000000000000000",
        "balance_approximate": 5,
        "received": "5000000000000000000",
        "received_approximate": 5,
        "spent": "0",
        "spent_approximate": 0,
        "receiving_transaction_count": 1,
        "spending_transaction_count": 0,
        "transaction_count": 1,
        "first_seen_receiving": "2017-11-26 23:17:02",
        "last_seen_receiving": "2017-11-26 23:17:02",
        "first_seen_spending": null,
        "last_seen_spending": null
      },
      "transactions": [
        {
          "block_id": 4628318,
          "id": 17166097,
          "transaction_hash": "0xd3aeac286c429f581f056388e523726e7b42caeba1d6a8df591ea2ec30daad48",
          "time": "2017-11-26 23:17:02",
          "token_address": "0x68e14bb5a45b9681327e16e528084b9d962c1a39",
          "token_name": "en",
          "token_symbol": "CAT",
          "token_decimals": 18,
          "sender": "0x9f89388141c632c4c6f36d1060d5f50604ee3abc",
          "recipient": "0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d",
          "value": "5000000000000000000",
          "value_approximate": 5
        }
      ]
    }
  },
  "context": {
    "code": 200,
    "limit": 100,
    "offset": 0,
    "results": 1,
    "state": 8805315,
    "state_layer_2": 8805304,
    ...
  }
}


Request cost formula:

Always 1
Cross-chain checksMultichain address checkThis endpoint allows to check multiple addresses from diffrerent blockchain via just one request. This can be useful if you're monitoring your own wallet or portfolio.

Endpoint:

`https://api.blockchair.com/multi/dashboards/addresses/{:address}₀,...,{:address}ᵩ
Where:

{:address}₀,...,{:address}ᵩ is a comma separated list of addresses in the blockchain:address format. Supported blockchains: bitcoin, bitcoin-cash, ethereum, litecoin, bitcoin-sv, dash, groestlcoin, zcash. More blockchains are coming in the future. bitcoin-cash and bitcoin-sv may be used as bitcoincash and bitcoinsv respectively. Only CashAddr format is supported for Bictoin Cash. The maximum number of addresses is 100. There can only be one Ethereum address in the list.
Output:

data.set — information on the entire set (total USD balance, etc.)
data.addresses — an array of info on addresses found
data.transactions — list of the latest transactions for this set (similar to ?transaction_details=true option for {:btc_chain}/dashboards/address endpoint)
Example output:

https://api.blockchair.com/multi/dashboards/addresses/bitcoin:1JADsmDFX9d2TXis63S9F9L8eDAXwJmnWE,ethereum:0x19DdD94B94D3c68385c897846AB44Ac99DBFAe0f,litecoin:LNAifc8nfjtDJ8azRPiancbZSBftPzhfzb,bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa:

{
  "data": {
    "set": {
      "address_count": 4,
      "balance_usd": 634530.2131392508,
      "received_usd": 195118.95799999998,
      "first_seen_receiving": "2009-01-03 18:15:05",
      "last_seen_receiving": "2020-06-26 18:10:58",
      "first_seen_spending": "2019-03-19 18:48:57",
      "last_seen_spending": "2020-06-08 17:48:18",
      "transaction_count": 3524
    },
    "addresses": {
      "bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa": {
        "chain": "bitcoin",
        "address": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        "type": "pubkeyhash",
        "script_hex": "76a91462e907b15cbf27d5425399ebf6f0fb50ebb88f1888ac",
        "balance": 6833161946,
        "balance_usd": 623983.1661066874,
        "received": 6833161946,
        "received_usd": 17068.6063,
        "spent": 0,
        "spent_usd": 0,
        "output_count": 2399,
        "unspent_output_count": 2399,
        "first_seen_receiving": "2009-01-03 18:15:05",
        "last_seen_receiving": "2020-07-18 12:16:28",
        "first_seen_spending": null,
        "last_seen_spending": null
      },
      "bitcoin:1JADsmDFX9d2TXis63S9F9L8eDAXwJmnWE": {
        "chain": "bitcoin",
        "address": "1JADsmDFX9d2TXis63S9F9L8eDAXwJmnWE",
        "type": "pubkeyhash",
        "script_hex": "76a914bc38a131c33427e977a9c08bcce726dd180eece888ac",
        "balance": 115220355,
        "balance_usd": 10521.5656354995,
        "received": 2117013594,
        "received_usd": 164984.9339,
        "spent": 2001793239,
        "spent_usd": 154273.1036,
        "output_count": 672,
        "unspent_output_count": 17,
        "first_seen_receiving": "2019-03-19 01:19:51",
        "last_seen_receiving": "2020-07-18 03:40:41",
        "first_seen_spending": "2019-03-19 18:48:57",
        "last_seen_spending": "2020-07-07 19:05:16"
      },
      "ethereum:0x19ddd94b94d3c68385c897846ab44ac99dbfae0f": {
        "chain": "ethereum",
        "address": "0x19ddd94b94d3c68385c897846ab44ac99dbfae0f",
        "type": "account",
        "contract_code_hex": null,
        "contract_created": null,
        "contract_destroyed": null,
        "balance": "108693390000000000",
        "balance_usd": 25.30068026881297,
        "received_approximate": "56446395000000000000",
        "received_usd": 12974.6457,
        "spent_approximate": "56327761000000000000",
        "spent_usd": 12937.1422,
        "fees_approximate": "9941000000000000",
        "fees_usd": 2.0446,
        "receiving_call_count": 83,
        "spending_call_count": 56,
        "call_count": 140,
        "transaction_count": 140,
        "first_seen_receiving": "2019-03-20 05:34:30",
        "last_seen_receiving": "2020-07-18 17:56:29",
        "first_seen_spending": "2019-03-20 14:26:51",
        "last_seen_spending": "2020-07-13 18:09:23",
        "nonce": null
      },
      "litecoin:LNAifc8nfjtDJ8azRPiancbZSBftPzhfzb": {
        "chain": "litecoin",
        "address": "LNAifc8nfjtDJ8azRPiancbZSBftPzhfzb",
        "type": "pubkeyhash",
        "script_hex": "76a914204bc7902ad5bfc5174b2c3d5162156695fb647888ac",
        "balance": 431305,
        "balance_usd": 0.18071679499999999,
        "received": 20914686144,
        "received_usd": 90.7721,
        "spent": 20914254839,
        "spent_usd": 92.6259,
        "output_count": 59,
        "unspent_output_count": 2,
        "first_seen_receiving": "2019-03-20 00:01:21",
        "last_seen_receiving": "2020-06-26 18:10:58",
        "first_seen_spending": "2019-03-20 00:41:49",
        "last_seen_spending": "2020-06-08 17:48:18"
      }
    },
    "transactions": [
      {
        "chain": "ethereum",
        "address": "0x19ddd94b94d3c68385c897846ab44ac99dbfae0f",
        "block_id": 10484912,
        "hash": "0x35198f37aa02245789fe8c377b2328fa665498981e0ff93909494602b7d3c592",
        "time": "2020-07-18 17:56:29",
        "balance_change": 1000000000000000
      },
      {
        "chain": "ethereum",
        "address": "0x19ddd94b94d3c68385c897846ab44ac99dbfae0f",
        "block_id": 10484558,
        "hash": "0x9e368758434651efdbf1be4a19ec3a90fc74c51a9bd3822957a7bf5e1c5734c2",
        "time": "2020-07-18 16:35:19",
        "balance_change": 413370000000000
      },
      {
        "chain": "bitcoin",
        "address": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        "block_id": -1,
        "hash": "43401f6f7da64a5bff65fba8b80bb98c9fa252bfc763a634cae5c616e5d89394",
        "time": "2020-07-18 12:16:28",
        "balance_change": 558
      },
      ...
    ]
  },
  "context": {
    "code": 200,
    "cache": {
      "live": true,
      "duration": 60,
      "since": "2020-07-18 18:07:03",
      "until": "2020-07-18 18:08:03",
      "time": null
    },
    "api": {
      "version": "2.0.63",
      "last_major_update": "2019-07-19 18:07:19",
      "next_major_update": "2020-07-19 00:00:00",
      "documentation": "https://blockchair.com/api/docs",
      "notice": "Beginning July 19th, 2020 we'll start enforcing request cost formulas, see the changelog for details"
    },
    "time": 0.330610990524292,
    "render_time": 0.010856151580810547,
    "full_time": 0.34146714210510254,
    "request_cost": 5.1
  }
}


Request cost formula:

The total cost is the same as if you'd use dashboards/addresses endpoints for the requested blockchains separately with the ?transaction_details=true option enabled. In the example, the cost is 5.1, and it's calculated as the sum of using the following endpoints:

https://api.blockchair.com/bitcoin/dashboards/addresses/1JADsmDFX9d2TXis63S9F9L8eDAXwJmnWE,1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?transaction_details=true (cost: 2.1)
https://api.blockchair.com/ethereum/dashboards/address/0x19DdD94B94D3c68385c897846AB44Ac99DBFAe0f (cost: 1)
https://api.blockchair.com/litecoin/dashboards/addresses/LNAifc8nfjtDJ8azRPiancbZSBftPzhfzb?transaction_details=true (cost: 2)
Raw data endpointsRetrieve raw information about various entities directly from our full nodes

Raw data endpoints for Bitcoin-like blockchains (Bitcoin, Bitcoin Cash, Litecoin, Bitcoin SV, Dogecoin, Dash, Groestlcoin, Zcash, eCash, Bitcoin Testnet)Raw block dataReturns raw block data directly from our full node. If the block is larger than 10 megabytes in size, returns a 402 error.

Endpoints:

https://api.blockchair.com/{:btc_chain}/raw/block/{:height}₀
https://api.blockchair.com/{:btc_chain}/raw/block/{:hash}₀
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:height}ᵢ is the block height (integer value), also known as block id
{:hash}ᵢ is the block hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:id}ᵢ.raw_block — raw block represented as a hex string
data.{:id}ᵢ.decoded_raw_block — raw block encoded in JSON by our node. Please note that the structure of this JSON array may change as we upgrade our nodes, and this won't be reflected in our change logs. We don't provide field descriptions for raw endpoints, that information can be found on the Bitcoin Core website (all Bitcoin-like blockchains the same output structure).
Where {:id}ᵢ is either {:height}ᵢ or {:hash}ᵢ from the query string. If there's no {:id}ᵢ has been found on the blockchain, returns an empty array.

Context keys:

context.state: best block height on the {:btc_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = context.state - data.{:id}ᵢ.block.id + 1)
Example requests:

https://api.blockchair.com/bitcoin/raw/block/0
https://api.blockchair.com/bitcoin/raw/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f
Example output:

https://api.blockchair.com/bitcoin/raw/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f:


{
  "data": {
    "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f": {
      "raw_block": "0100000000000000000000000000000000000000000000000000000000000000000000003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a29ab5f49ffff001d1dac2b7c0101000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
      "decoded_raw_block": {
        "hash": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
        "confirmations": 599952,
        "strippedsize": 285,
        "size": 285,
        "weight": 1140,
        "height": 0,
        "version": 1,
        "versionHex": "00000001",
        "merkleroot": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
        "tx": [
          "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b"
        ],
        "time": 1231006505,
        "mediantime": 1231006505,
        "nonce": 2083236893,
        "bits": "1d00ffff",
        "difficulty": 1,
        "chainwork": "0000000000000000000000000000000000000000000000000000000100010001",
        "nTx": 1,
        "nextblockhash": "00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048"
      }
    }
  },
  "context": {
    "code": 200,
    ...
  }
}


Request cost formula:

Always 1.

Raw transaction dataReturns raw transaction data directly from our full node.

Endpoint:

https://api.blockchair.com/{:btc_chain}/raw/transaction/{:hash}₀
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:hash}ᵢ is the transaction hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:hash}ᵢ.raw_transaction — raw transaction represented as a hex string
data.{:hash}ᵢ.decoded_raw_transaction — raw transaction encoded in JSON by our node. Please note that the structure of this JSON array may change as we upgrade our nodes, and this won't be reflected in our change logs. We don't provide field descriptions for raw endpoints, that information can be found on the Bitcoin Core website (all Bitcoin-like blockchains the same output structure).
If there's no {:hash}ᵢ has been found on the blockchain, returns an empty array.

Context keys:

context.state: best block height on the {:btc_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = context.state - data.{:id}ᵢ.block.id + 1)
Example requests:

https://api.blockchair.com/bitcoin/raw/transaction/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16
Example output:

https://api.blockchair.com/bitcoin/raw/transaction/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16:

{
  "data": {
    "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16": {
      "raw_transaction": "0100000001c997a5e56e104102fa209c6a852dd90660a20b2d9c352423edce25857fcd3704000000004847304402204e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd410220181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d0901ffffffff0200ca9a3b00000000434104ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302fa28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e6cd84cac00286bee0000000043410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac00000000",
      "decoded_raw_transaction": {
        "txid": "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
        "hash": "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
        "version": 1,
        "size": 275,
        "vsize": 275,
        "weight": 1100,
        "locktime": 0,
        "vin": [
          {
            "txid": "0437cd7f8525ceed2324359c2d0ba26006d92d856a9c20fa0241106ee5a597c9",
            "vout": 0,
            "scriptSig": {
              "asm": "304402204e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd410220181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d09[ALL]",
              "hex": "47304402204e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd410220181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d0901"
            },
            "sequence": 4294967295
          }
        ],
        "vout": [
          {
            "value": 10,
            "n": 0,
            "scriptPubKey": {
              "asm": "04ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302fa28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e6cd84c OP_CHECKSIG",
              "hex": "4104ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302fa28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e6cd84cac",
              "reqSigs": 1,
              "type": "pubkey",
              "addresses": [
                "1Q2TWHE3GMdB6BZKafqwxXtWAWgFt5Jvm3"
              ]
            }
          },
          {
            "value": 40,
            "n": 1,
            "scriptPubKey": {
              "asm": "0411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3 OP_CHECKSIG",
              "hex": "410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac",
              "reqSigs": 1,
              "type": "pubkey",
              "addresses": [
                "12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S"
              ]
            }
          }
        ]
      }
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 599962,
    ...
  }
}


Request cost formula:

Always 1.

Raw data endpoints for Ethereum and Ethereum Goerli TestnetRaw block dataReturns raw block data directly from our full node.

Endpoints:

https://api.blockchair.com/{:eth_chain}/raw/block/{:height}₀
https://api.blockchair.com/{:eth_chain}/raw/block/{:hash}₀
Where:

{:eth_chain} can only be ethereum or ethereum/testnet
{:height}ᵢ is the block height (integer value), also known as block id
{:hash}ᵢ is the block hash (regex: /^0x[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:id}ᵢ.decoded_raw_block — raw block encoded in JSON by our node. Please note that the structure of this JSON array may change as we upgrade our nodes, and this won't be reflected in our change logs. We don't provide field descriptions for raw endpoints, that information can be found on the geth implementation website.
Where {:id}ᵢ is either {:height}ᵢ or {:hash}ᵢ from the query string. If there's no {:id}ᵢ has been found on the blockchain, returns an empty array.

Context keys:

context.state: best block height on the {:eth_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = context.state - data.{:id}ᵢ.block.id + 1)
Example requests:

https://api.blockchair.com/ethereum/raw/block/2345678
https://api.blockchair.com/ethereum/raw/block/0xda214d1b1d458e7ae0e626b69a52a59d19762c51a53ff64813c4d31256282fdf
Example output:

https://api.blockchair.com/ethereum/raw/block/2345678:

{
  "data": {
    "2345678": {
      "decoded_raw_block": {
        "difficulty": "0x4a823a45d075",
        "extraData": "0x657468706f6f6c2e6f7267202845553129",
        "gasLimit": "0x16e360",
        "gasUsed": "0x19a28",
        "hash": "0xda214d1b1d458e7ae0e626b69a52a59d19762c51a53ff64813c4d31256282fdf",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "miner": "0x4bb96091ee9d802ed039c4d1a5f6216f90f81b01",
        "mixHash": "0xf5b95f5b79cd8425db7f04d200d78d16c104c28d078d0b653ae1c24f31759662",
        "nonce": "0x0975348010868c22",
        "number": "0x23cace",
        "parentHash": "0x4578cd622e7e738bfd8f2675aa58337b60cf337a59347c76f61f4ed74a9811f8",
        "receiptsRoot": "0x51a6952987f2c7ebf74fc1a4f644265aebb660b1d86a12c0f6e3001a2866331f",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0x455",
        "stateRoot": "0x4f6b1af13d99c75e0d644b226d57767a0d2f22921c529dfe3455bc63154b01e5",
        "timestamp": "0x57ec70dd",
        "totalDifficulty": "0x3a0f803ebc49e50af",
        "transactions": [
          "0x4052841e7ff856e08e73245ed1fab5f41021d4bfe83202b6581870cb559b44c4",
          "0xa1ed63865958a1b3abc8e259dc980bd76dd3f989f14577cce18b7e265cf9528e",
          "0x1d6713c7e6be2a45e6b3d2a7dfc1af96443cfb65d4b51cd41ac21b7b840e77e0",
          "0xffbcdcbef6c5341dd60a9b7f182b61cf0c468d63defcc2fa8c56e292d4bfc8d6",
          "0x0c79e3ae36150eb36d6a631cc8d6250db4b9b832a82ac58ea356357f5987debe"
        ],
        "transactionsRoot": "0xdde4d2ce7556effca10c868f500f0e47fb09b5cb4a003d781080f1a06e582352",
        "uncles": []
      }
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 8766206,
    "state_layer_2": 8766195,
    ...
  }
}


Request cost formula:

Always 1.

Raw transaction dataReturns raw transaction data directly from our full node.

Endpoint:

https://api.blockchair.com/{:eth_chain}/raw/transaction/{:hash}₀
Where:

{:eth_chain} can only be ethereum or ethereum/testnet
{:hash}ᵢ is the transaction hash (regex: /^0x[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:hash}ᵢ.raw_transaction — raw transaction represented as a hex string starting with 0x
If there's no {:hash}ᵢ has been found on the blockchain, returns an empty array.

Context keys:

context.state: best block height on the {:btc_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = context.state - data.{:id}ᵢ.block.id + 1)
Example requests:

https://api.blockchair.com/ethereum/raw/transaction/0x93fa9a3ac6190022adc75d1d83e3d86e0a99ac1eb88f80fec59599f55931766e
Example output:

https://api.blockchair.com/ethereum/raw/transaction/0x93fa9a3ac6190022adc75d1d83e3d86e0a99ac1eb88f80fec59599f55931766e:

{
  "data": {
    "0x93fa9a3ac6190022adc75d1d83e3d86e0a99ac1eb88f80fec59599f55931766e": {
      "raw_transaction": "0xf8697b843b9aca0082520894536a0a5293a4575dd351563c63774a623bf2b46b866eaddc096200801ca01bd6971ae88c70ab930b3405b6f14da553f8515dced42e080ddca5f968c5bd6ca06e3a623453d5e4d91b8785ef8066f2cf82ef299e987a595ec66b5917deeb7d38"
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 8767087,
    "state_layer_2": 8767077,
    ...
  }
}


Request cost formula:

Always 1.

Raw data endpoints for RippleRaw ledger dataReturns raw ledger data directly from our full node.

Endpoints:

https://api.blockchair.com/{:xrp_chain}/raw/ledger/{:height}₀
https://api.blockchair.com/{:xrp_chain}/raw/ledger/{:hash}₀
Where:

{:xrp_chain} can only be ripple
{:height}ᵢ is the ledger number (integer value)
{:hash}ᵢ is the ledger hash (regex: /^[0-9a-f]{64}$/i)
Possible options:

?transactions=true displays transaction data
Output:

data contains an associative array:

data.{:id}ᵢ.ledger — raw ledger encoded in JSON by our node. Please note that the structure of this JSON array may change as we upgrade our nodes, and this won't be reflected in our change logs. We don't provide field descriptions for raw endpoints, that information can be found on the Ripple website.
Where {:id}ᵢ is either {:height}ᵢ or {:hash}ᵢ from the query string. If there's no {:id}ᵢ has been found on the blockchain, returns an empty array.

Context keys:

context.state: best ledget height on the {:xrp_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = data.{:id}ᵢ.ledger.id - context.state + 1)
Example requests:

https://api.blockchair.com/ripple/raw/ledger/50000000
https://api.blockchair.com/ripple/raw/ledger/0C073A753670E99C210264F7783FE5F7C3DEAEE3B1237C10B1584E6FBD2A6505
https://api.blockchair.com/ripple/raw/ledger/50000000?transactions=true
Example output:

https://api.blockchair.com/ripple/raw/ledger/50000000:

{
  "data": {
    "50000000": {
      "ledger": {
        "accepted": true,
        "account_hash": "191EA9DD67A3FDAA40293D762EB4F96AB852ACA499AA37F3851616EF449A63E1",
        "close_flags": 0,
        "close_time": 621665931,
        "close_time_human": "2019-Sep-13 04:58:51.000000000",
        "close_time_resolution": 10,
        "closed": true,
        "hash": "0C073A753670E99C210264F7783FE5F7C3DEAEE3B1237C10B1584E6FBD2A6505",
        "ledger_hash": "0C073A753670E99C210264F7783FE5F7C3DEAEE3B1237C10B1584E6FBD2A6505",
        "ledger_index": "50000000",
        "parent_close_time": 621665930,
        "parent_hash": "3B4431099292FC6DBF3875FB2FA1022B2FF06B765ABA163B09DF4F1383A3E30B",
        "seqNum": "50000000",
        "totalCoins": "99991346321080101",
        "total_coins": "99991346321080101",
        "transaction_hash": "8FD966C7D8DEAE695655B65E968FFE36521869D5278C4115BBDEB697D084A8AC"
      },
      "ledger_hash": "0C073A753670E99C210264F7783FE5F7C3DEAEE3B1237C10B1584E6FBD2A6505",
      "ledger_index": 50000000,
      "marker": "000003E6AFED1AADCC39AAE0727B354C2286F1503274F345FE661748F24366CE",
      "state": null,
      "status": "success",
      "validated": true
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 50797264,
    ...
  }
}


Request cost formula:

1. If ?transactions=true option is used then 2.

Explore visualization on our front-end:

https://blockchair.com/ripple/ledger/50000000
Raw transaction dataReturns raw transaction data directly from our full node.

Endpoint:

https://api.blockchair.com/{:xrp_chain}/raw/transaction/{:hash}₀
Where:

{:xrp_chain} can only be ripple
{:hash}ᵢ is the transaction hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:hash}ᵢ.decoded_raw_transaction — raw transaction encoded in JSON by our node. Please note that the structure of this JSON array may change as we upgrade our nodes, and this won't be reflected in our change logs. We don't provide field descriptions for raw endpoints, that information can be found on the Ripple website`
If there's no {:hash}ᵢ has been found on the blockchain, returns an empty array.

Context keys:

context.state: best ledger height on the {:xrp_chain} chain
Example requests:

https://api.blockchair.com/ripple/raw/transaction/0847A0062757E3490389069DBB3FBA8626EEEE07C126123660248CE1B32D34E3
Example output:

https://api.blockchair.com/ripple/raw/transaction/0847A0062757E3490389069DBB3FBA8626EEEE07C126123660248CE1B32D34E3:

{
  "data": {
    "0847A0062757E3490389069DBB3FBA8626EEEE07C126123660248CE1B32D34E3": {
      "Account": "rKLpjpCoXgLQQYQyj13zgay73rsgmzNH13",
      "Amount": {
        "currency": "XCN",
        "issuer": "rPFLkxQk6xUGdGYEykqe7PR25Gr7mLHDc8",
        "value": "10000"
      },
      "Destination": "rKLpjpCoXgLQQYQyj13zgay73rsgmzNH13",
      "Fee": "11",
      "Flags": 2147942400,
      "LastLedgerSequence": 50000001,
      "Paths": [
        [
          {
            "currency": "CNY",
            "issuer": "rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y",
            "type": 48,
            "type_hex": "0000000000000030"
          },
          {
            "currency": "USD",
            "issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
            "type": 48,
            "type_hex": "0000000000000030"
          },
          {
            "currency": "XRP",
            "type": 16,
            "type_hex": "0000000000000010"
          },
          {
            "currency": "XCN",
            "issuer": "rPFLkxQk6xUGdGYEykqe7PR25Gr7mLHDc8",
            "type": 48,
            "type_hex": "0000000000000030"
          }
        ],
        ...
      ],
      "SendMax": "10000000000",
      "Sequence": 5435383,
      "SigningPubKey": "030AC4F2BA6E1FF86BEB234B639918DAFDF0675032AE264D2B39641503822373FE",
      "TransactionType": "Payment",
      "TxnSignature": "30450221009533287ED1277DD0E8EDC49A75A6E1B2ADE5F4282915EF91C4466B7D21175E380220424535BDFB12F040516FC3E947BAEA5F40C5F03CA3B63C0375F1773C9FFC793E",
      "date": 621665931,
      "hash": "0847A0062757E3490389069DBB3FBA8626EEEE07C126123660248CE1B32D34E3",
      "inLedger": 50000000,
      "ledger_index": 50000000,
      "status": "success"
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 50799948,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/ripple/transaction/18BC01124BC4FBA1D4CF8EAA934EBCDC9136FE987D0F7E1505A94C767465500C
Raw account dataReturns raw account data directly from our full node.

Endpoint:

https://api.blockchair.com/{:xrp_chain}/raw/account/{:account}
Where:

{:xrp_chain} can only be ripple
{:account}ᵢ is the account address
Possible options:

?assets=true returns information about account's assets
?transactions=true returns information about latest 10 transactions
Output:

data contains an associative array:

data.{:account}ᵢ — raw account data encoded in JSON by our node. Please note that the structure of this JSON array may change as we upgrade our nodes, and this won't be reflected in our change logs. We don't provide field descriptions for raw endpoints, that information can be found on the Ripple website
If there's no {:account}ᵢ has been found on the blockchain, returns an empty array.

Context keys:

context.state: best ledger height on the {:xrp_chain} chain
Example requests:

https://api.blockchair.com/ripple/raw/account/rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR?assets=true&transactions=true
https://api.blockchair.com/ripple/raw/account/rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR?assets=true&transactions=true
Example output:

https://api.blockchair.com/ripple/raw/account/rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR?assets=true&transactions=true:

{
  "data": {
    "rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR": {
      "account": {
        "account_data": {
          "Account": "rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR",
          "Balance": "97894917",
          "Flags": 0,
          "LedgerEntryType": "AccountRoot",
          "OwnerCount": 5,
          "PreviousTxnID": "7F358F814D4E9FD7FB9E3E00CD00D1616458E7DBEC7F764C0E5F63949398B414",
          "PreviousTxnLgrSeq": 50803417,
          "Sequence": 14884800,
          "index": "E0311EB450B6177F969B94DBDDA83E99B7A0576ACD9079573876F16C0C004F06"
        },
        "ledger_current_index": 50803418,
        "status": "success",
        "validated": false
      },
      "assets": {
        "account": "rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR",
        "ledger_current_index": 50803418,
        "lines": [
          {
            "account": "rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK",
            "balance": "573982.6565030623",
            "currency": "CNY",
            "limit": "1000000000",
            "limit_peer": "0",
            "no_ripple": true,
            "no_ripple_peer": true,
            "quality_in": 0,
            "quality_out": 0
          }
        ],
        "status": "success",
        "validated": false
      },
      "transactions": {
        "account": "rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR",
        "ledger_index_max": 50803417,
        "ledger_index_min": 50226369,
        "limit": 10,
        "marker": {
          "ledger": 50803415,
          "seq": 25
        },
        "status": "success",
        "transactions": [
          {
            "meta": {
              "AffectedNodes": [
                {
                  "CreatedNode": {
                    "LedgerEntryType": "DirectoryNode",
                    "LedgerIndex": "1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A128D7E42783345",
                    "NewFields": {
                      "ExchangeRate": "5A128D7E42783345",
                      "RootIndex": "1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A128D7E42783345",
                      "TakerGetsCurrency": "000000000000000000000000434E590000000000",
                      "TakerGetsIssuer": "0360E3E0751BD9A566CD03FA6CAFC78118B82BA0"
                    }
                  }
                },
                {
                  "DeletedNode": {
                    "FinalFields": {
                      "ExchangeRate": "5A128D7E427D2AA7",
                      "Flags": 0,
                      "RootIndex": "1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A128D7E427D2AA7",
                      "TakerGetsCurrency": "000000000000000000000000434E590000000000",
                      "TakerGetsIssuer": "0360E3E0751BD9A566CD03FA6CAFC78118B82BA0",
                      "TakerPaysCurrency": "0000000000000000000000000000000000000000",
                      "TakerPaysIssuer": "0000000000000000000000000000000000000000"
                    },
                    "LedgerEntryType": "DirectoryNode",
                    "LedgerIndex": "1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A128D7E427D2AA7"
                  }
                },
                {
                  "CreatedNode": {
                    "LedgerEntryType": "Offer",
                    "LedgerIndex": "2E113BC264A73193A08038293E32D7D6474D0035EC21B5F9B559360046106385",
                    "NewFields": {
                      "Account": "rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR",
                      "BookDirectory": "1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A128D7E42783345",
                      "Sequence": 14884795,
                      "TakerGets": {
                        "currency": "CNY",
                        "issuer": "rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK",
                        "value": "13873.74225408225"
                      },
                      "TakerPays": "7245038854"
                    }
                  }
                },
                {
                  "DeletedNode": {
                    "FinalFields": {
                      "Account": "rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR",
                      "BookDirectory": "1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A128D7E427D2AA7",
                      "BookNode": "0000000000000000",
                      "Flags": 0,
                      "OwnerNode": "0000000000000000",
                      "PreviousTxnID": "9CD2DE1FDC90C8CC23687B7125CD9142B0404BD08E7D346A350C7DCB6DAECC0E",
                      "PreviousTxnLgrSeq": 50803416,
                      "Sequence": 14884791,
                      "TakerGets": {
                        "currency": "CNY",
                        "issuer": "rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK",
                        "value": "29217.47535833971"
                      },
                      "TakerPays": "15257725012"
                    },
                    "LedgerEntryType": "Offer",
                    "LedgerIndex": "82729E243E07C4A691D01DEFC94BD86B3C5A4634A58054B479226E11C427ABCC"
                  }
                },
                {
                  "ModifiedNode": {
                    "FinalFields": {
                      "Flags": 0,
                      "IndexNext": "0000000000000000",
                      "IndexPrevious": "0000000000000000",
                      "Owner": "rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR",
                      "RootIndex": "AEA3074F10FE15DAC592F8A0405C61FB7D4C98F588C2D55C84718FAFBBD2604A"
                    },
                    "LedgerEntryType": "DirectoryNode",
                    "LedgerIndex": "AEA3074F10FE15DAC592F8A0405C61FB7D4C98F588C2D55C84718FAFBBD2604A"
                  }
                },
                {
                  "ModifiedNode": {
                    "FinalFields": {
                      "Account": "rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR",
                      "Balance": "97894965",
                      "Flags": 0,
                      "OwnerCount": 5,
                      "Sequence": 14884796
                    },
                    "LedgerEntryType": "AccountRoot",
                    "LedgerIndex": "E0311EB450B6177F969B94DBDDA83E99B7A0576ACD9079573876F16C0C004F06",
                    "PreviousFields": {
                      "Balance": "97894977",
                      "Sequence": 14884795
                    },
                    "PreviousTxnID": "C8EE48118ACB84DF41168BEB7D991CD07C7D21EDB52F798AA0ED1C296EE7C4C0",
                    "PreviousTxnLgrSeq": 50803417
                  }
                }
              ],
              "TransactionIndex": 8,
              "TransactionResult": "tesSUCCESS"
            },
            "tx": {
              "Account": "rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR",
              "Fee": "12",
              "Flags": 0,
              "LastLedgerSequence": 50803419,
              "OfferSequence": 14884791,
              "Sequence": 14884795,
              "SigningPubKey": "022D40673B44C82DEE1DDB8B9BB53DCCE4F97B27404DB850F068DD91D685E337EA",
              "TakerGets": {
                "currency": "CNY",
                "issuer": "rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK",
                "value": "13873.74225408225"
              },
              "TakerPays": "7245038854",
              "TransactionType": "OfferCreate",
              "TxnSignature": "3044022032CDB56EB073D2BABAB4646F494478A6CAEE4B94BACB6D15124261FA04BFF80C022077D11F8EB991954F71F7712F92240F8D1DD393369E7DC37E855E00778ADAD64D",
              "date": 624761581,
              "hash": "7F358F814D4E9FD7FB9E3E00CD00D1616458E7DBEC7F764C0E5F63949398B414",
              "inLedger": 50803417,
              "ledger_index": 50803417
            },
            "validated": true
          },
          ...
        ]
      }
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 50803416,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/ripple/account/rKLpjpCoXgLQQYQyj13zgay73rsgmzNH13
Raw data endpoints for StellarRaw ledger dataReturns raw ledger data directly from our full node.

Endpoint:

https://api.blockchair.com/{:xlm_chain}/raw/ledger/{:height}₀
Where:

{:xlm_chain} can only be stellar
{:height}ᵢ is the ledger number (integer value)
Possible options:

?transactions=true displays transaction data
Output:

data contains an associative array:

data.{:height}ᵢ.ledger — raw ledger encoded in JSON by our node. Please note that the structure of this JSON array may change as we upgrade our nodes, and this won't be reflected in our change logs. We don't provide field descriptions for raw endpoints, that information can be found on the Stellar website.
Context keys:

context.state: best ledger height on the {:btc_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = context.state - data.{:id}ᵢ.block.id + 1)
Example requests:

https://api.blockchair.com/stellar/raw/ledger/26550000
https://api.blockchair.com/stellar/raw/ledger/26550000?transactions=true
Example output:

https://api.blockchair.com/stellar/raw/ledger/26550000:

{
  "data": {
    "26550000": {
      "ledger": {
        "id": "fed785dba44cfe2fd295780e7c25f7f07ed45262269a70c4e6bde9e84e3793f8",
        "paging_token": "114031381708800000",
        "hash": "fed785dba44cfe2fd295780e7c25f7f07ed45262269a70c4e6bde9e84e3793f8",
        "prev_hash": "3ea68ed2ee8cdfce550382856ca49ef4144e0cf9c2805b1a020ab4093caa53c6",
        "sequence": 26550000,
        "successful_transaction_count": 13,
        "failed_transaction_count": 2,
        "operation_count": 32,
        "closed_at": "2019-10-30T07:45:58Z",
        "total_coins": "105443902087.3472865",
        "fee_pool": "1806770.7383261",
        "base_fee_in_stroops": 100,
        "base_reserve_in_stroops": 5000000,
        "max_tx_set_size": 1000,
        "protocol_version": 12,
        "header_xdr": "AAAADD6mjtLujN/OVQOChWyknvQUTgz5woBbGgIKtAk8qlPG5z6KZRbEna3gObMFtKI86FhJuQxj5LtF0RdBe2sgpsQAAAAAXbk/tgAAAAAAAAAAKMzxu3Hs9m1o4nZnq+QAjSOZBarLt8M9Feijiot1z8r7LlCHEDaLHsvky0SpheuEPgdvHIHDWN9FqxxLqSeDdAGVHvAOoh6z7HlbYQAAEG63R83dAAABFgAAAAAHjozrAAAAZABMS0AAAAPo+y5QhxA2ix7L5MtEqYXrhD4HbxyBw1jfRascS6kng3SFsbCPVWlIYy5CD3xrfmHW5QVBaCXNxhM66HUv3N/E7yNrXPzOlSLpkylGu0oLplg8ltK+RXCU27vxVw0P+guGyG3+zc/A1cWvfpnr0rXnL/jFwF6AQdjikSSt8tSYeiMAAAAA"
      },
      "transactions": null
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 26559101,
    ...
  }
}


Request cost formula:

1. If ?transactions=true option is used then 2.

Explore visualization on our front-end:

https://blockchair.com/stellar/ledger/26550000
Raw transaction dataReturns raw transaction data directly from our full node.

Endpoint:

https://api.blockchair.com/{:xlm_chain}/raw/transaction/{:hash}₀
Where:

{:xlm_chain} can only be stellar
{:hash}ᵢ is the transaction hash (regex: /^[0-9a-f]{64}$/i)
Possible options:

?operations=true displays operations data
?effects=true displays effects data
Output:

data contains an associative array:

data.{:hash}ᵢ.transaction — raw transaction encoded in JSON by our node. Please note that the structure of this JSON array may change as we upgrade our nodes, and this won't be reflected in our change logs. We don't provide field descriptions for raw endpoints, that information can be found on the Stellar website`
data.{:hash}ᵢ.operations (optional: if the parameter is not set yields null)
data.{:hash}ᵢ.effects (optional: if the parameter is not set yields null)
If there's no {:hash}ᵢ has been found on the blockchain, returns an empty array.

Context keys:

context.state: best ledger height on the {:xlm_chain} chain
Example requests:

https://api.blockchair.com/stellar/raw/transaction/0a6bf9370255d1309c93f93b5d35cd5e6f504700dda7d144eece9a127a20afe8
https://api.blockchair.com/stellar/raw/transaction/0a6bf9370255d1309c93f93b5d35cd5e6f504700dda7d144eece9a127a20afe8?operations=true&effects=true
Example output:

https://api.blockchair.com/stellar/raw/transaction/0a6bf9370255d1309c93f93b5d35cd5e6f504700dda7d144eece9a127a20afe8?operations=true&effects=true:

{
  "data": {
    "0a6bf9370255d1309c93f93b5d35cd5e6f504700dda7d144eece9a127a20afe8": {
      "transaction": {
        "id": "0a6bf9370255d1309c93f93b5d35cd5e6f504700dda7d144eece9a127a20afe8",
        "paging_token": "114031381708804096",
        "successful": true,
        "hash": "0a6bf9370255d1309c93f93b5d35cd5e6f504700dda7d144eece9a127a20afe8",
        "ledger": 26550000,
        "created_at": "2019-10-30T07:45:58Z",
        "source_account": "GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7",
        "source_account_sequence": "113240003919741179",
        "fee_paid": 100,
        "fee_charged": 100,
        "max_fee": 10000,
        "operation_count": 1,
        "envelope_xdr": "AAAAAFyxiwoZaiNqhtuW/HjMzQEAX5ztGbiK5g1tv8WQJi+eAAAnEAGSTy...",
        "result_xdr": "AAAAAAAAAGQAAAAAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAFyxiwoZ...",
        "result_meta_xdr": "AAAAAQAAAAIAAAADAZUe8AAAAAAAAAAAXAAAAAAAAAAAAAAAAAAAAAA...",
        "fee_meta_xdr": "AAAAAgAAAAMBlR4aAAAAAAAAAABcsYsKGWojaobblvx4zM0BAF+c7Rm4iu...",
        "memo_type": "none",
        "signatures": [
          "/tbZWxQaFew0kkO7HNG2jpfCJ9+Bhu/IieCa8CK/pBUx6IX5NyBCbY5cQtC2mnWDCloOsQw6BpDGcPjFJKElCw=="
        ]
      },
      "operations": [
        {
          "id": "114031381708804097",
          "paging_token": "114031381708804097",
          "transaction_successful": true,
          "source_account": "GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7",
          "type": "manage_offer",
          "type_i": 3,
          "created_at": "2019-10-30T07:45:58Z",
          "transaction_hash": "0a6bf9370255d1309c93f93b5d35cd5e6f504700dda7d144eece9a127a20afe8",
          "amount": "20.9531697",
          "price": "41.0000000",
          "price_r": {
            "n": 41,
            "d": 1
          },
          "buying_asset_type": "native",
          "selling_asset_type": "credit_alphanum4",
          "selling_asset_code": "NRV",
          "selling_asset_issuer": "GANRAE2FXMIU4V7CPLXFHWZNGCCSW7WEVBN2P3ZWA7FWWVED6OJSKKX2",
          "offer_id": 0
        }
      ],
      "effects": []
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 26559101,
    ...
  }
}


Request cost formula:

1. Plus 1 for every of these options used: ?operations=true, ?effects=true)

Explore visualization on our front-end:

https://blockchair.com/stellar/transaction/0a6bf9370255d1309c93f93b5d35cd5e6f504700dda7d144eece9a127a20afe8
Raw account dataReturns raw account data directly from our full node.

Endpoint:

https://api.blockchair.com/{:xlm_chain}/raw/account/{:account}
Where:

{:xlm_chain} can only be stellar
{:account}ᵢ is the account address
Possible options:

?transactions=true returns information about latest account transactions
?operations=true returns information about latest account operations
?payments=true returns information about latest account payments
?effects=true returns information about latest account effects
?offers=true returns information about latest account offers
?trades=true returns information about latest account trades
?account=false doesn't query account data (true by default if this option is not applied)
Output:

data contains an associative array:

data.{:account}ᵢ.account — raw account data encoded in JSON by our node. Please note that the structure of this JSON array may change as we upgrade our nodes, and this won't be reflected in our change logs. We don't provide field descriptions for raw endpoints, that information can be found on the Ripple website
Optional arrays (transactions, operations, payments, effects, offers, trades), yield null if the corresponding options aren't used
If there's no {:account}ᵢ has been found on the blockchain, returns an empty array.

Context keys:

context.state: best ledger height on the {:xlm_chain} chain
Example requests:

https://api.blockchair.com/stellar/raw/account/GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7
https://api.blockchair.com/stellar/raw/account/GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7?transactions=true&trades=true
https://api.blockchair.com/stellar/raw/account/GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7?transactions=true&account=false
Example output:

https://api.blockchair.com/stellar/raw/account/GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7:

{
  "data": {
    "GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7": {
      "account": {
        "id": "GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7",
        "account_id": "GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7",
        "sequence": "113240003919741217",
        "subentry_count": 16,
        "inflation_destination": "GDCHDRSDOBRMSUDKRE2C4U4KDLNEATJPIHHR2ORFL5BSD56G4DQXL4VW",
        "home_domain": "lobstr.co",
        "last_modified_ledger": 26574812,
        "thresholds": {
          "low_threshold": 0,
          "med_threshold": 0,
          "high_threshold": 0
        },
        "flags": {
          "auth_required": false,
          "auth_revocable": false,
          "auth_immutable": false
        },
        "balances": [
          {
            "balance": "99.9999989",
            "limit": "922337203685.4775807",
            "buying_liabilities": "0.0000000",
            "selling_liabilities": "0.0000000",
            "last_modified_ledger": 26369752,
            "is_authorized": true,
            "asset_type": "credit_alphanum4",
            "asset_code": "MOBI",
            "asset_issuer": "GA6HCMBLTZS5VYYBCATRBRZ3BZJMAFUDKYYF6AH6MVCMGWMRDNSWJPIH"
          },
          ...
          {
            "balance": "350.2871051",
            "buying_liabilities": "105.0000000",
            "selling_liabilities": "341.1000000",
            "asset_type": "native"
          }
        ],
        "signers": [
          {
            "weight": 1,
            "key": "GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7",
            "type": "ed25519_public_key"
          }
        ],
        "data": []
      },
      "transactions": null,
      "operations": null,
      "payments": null,
      "effects": null,
      "offers": null,
      "trades": null
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 26559101,
    ...
  }
}


Request cost formula:

1. Plus 1 for every of these options used: ?transactions=true, ?operations=true, ?payments=true, ?effects=true, ?offers=true, ?trades=true). Minus 1 if ?account=false is used.

Explore visualizations on our front-end:

https://blockchair.com/stellar/account/GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7
Raw data endpoints for MoneroRaw block dataReturns raw block data from our onion-monero-blockchain-explorer instance. See https://github.com/moneroexamples/onion-monero-blockchain-explorer/blob/master/README.md for field descriptions (api/block/<block_number|block_hash> section), but mostly they are self-describing.

Endpoints:

https://api.blockchair.com/{:xmr_chain}/raw/block/{:height}₀
https://api.blockchair.com/{:xmr_chain}/raw/block/{:hash}₀
Where:

{:xmr_chain} can be only monero
{:height}ᵢ is the block height (integer value), also known as block id
{:hash}ᵢ is the block hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:id}ᵢ.block — block data. We don't provide field descriptions at the moment as they can change at any time. Most of the key names are self-explanatory.
Example requests:

https://api.blockchair.com/monero/raw/block/1234567
https://api.blockchair.com/monero/raw/block/f093439d0dd48010a22fdb615a659e22738a10991871b5dc2335efa69008a8cd
Example output:

https://api.blockchair.com/monero/raw/block/1234567:

{
  "data": {
    "1234567": {
      "block": {
        "block_height": 1234567,
        "current_height": 2014051,
        "hash": "f093439d0dd48010a22fdb615a659e22738a10991871b5dc2335efa69008a8cd",
        "size": 51507,
        "timestamp": 1485715365,
        "timestamp_utc": "2017-01-29 18:42:45",
        "txs": [
          {
            "coinbase": true,
            "extra": "0125abf5f7f41eeae08c49b48ec8dffcd7aff78d87e808508e3b073105582fd1b6020800000001e75bdb47",
            "mixin": 0,
            "payment_id": "",
            "payment_id8": "",
            "rct_type": 0,
            "tx_fee": 0,
            "tx_hash": "09d132f2c90d0f6726cf7dbbce83114a1e650a098c1e9cf3fc6773bba02c5e13",
            "tx_size": 95,
            "tx_version": 2,
            "xmr_inputs": 0,
            "xmr_outputs": 8864856845578
          },
          {
            "coinbase": false,
            "extra": "018a462e859627da64801ab1a4122717451a4e4f7ab917fcd746c62dd0eeceeba2",
            "mixin": 3,
            "payment_id": "",
            "payment_id8": "",
            "rct_type": 2,
            "tx_fee": 66692772936,
            "tx_hash": "467f1914b3f5f4eb52dda02bfd0b70b89722b88063f40889bfba46d3ec78de80",
            "tx_size": 38479,
            "tx_version": 2,
            "xmr_inputs": 0,
            "xmr_outputs": 0
          },
          {
            "coinbase": false,
            "extra": "01445566c1696160cd602ad2fe7805b12d0efbd2866be04ee8d1c1c00cce399cfe020901cd644f0fe978dc0c",
            "mixin": 3,
            "payment_id": "",
            "payment_id8": "cd644f0fe978dc0c",
            "rct_type": 1,
            "tx_fee": 22815948636,
            "tx_hash": "5eb59639478898cf227cd89aa95303cfb8d392e1151047728a57ec16dc4c1a7e",
            "tx_size": 12933,
            "tx_version": 2,
            "xmr_inputs": 0,
            "xmr_outputs": 0
          }
        ]
      }
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 2014050,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/monero/block/1234567
Raw transaction dataReturns raw block data from our onion-monero-blockchain-explorer instance. See https://github.com/moneroexamples/onion-monero-blockchain-explorer/blob/master/README.md for field descriptions (api/transaction/<tx_hash> section), but mostly they are self-describing.

Endpoint:

https://api.blockchair.com/{:xmr_chain}/raw/transaction/{:hash}₀
Where:

{:xmr_chain} can only be monero
{:hash}ᵢ is the transaction hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:hash}ᵢ.transaction — transaction data
Example requests:

https://api.blockchair.com/monero/raw/transaction/467f1914b3f5f4eb52dda02bfd0b70b89722b88063f40889bfba46d3ec78de80
Example output:

https://api.blockchair.com/monero/raw/transaction/467f1914b3f5f4eb52dda02bfd0b70b89722b88063f40889bfba46d3ec78de80:

{
  "data": {
    "467f1914b3f5f4eb52dda02bfd0b70b89722b88063f40889bfba46d3ec78de80": {
      "transaction": {
        "block_height": 1234567,
        "coinbase": false,
        "confirmations": 779488,
        "current_height": 2014055,
        "extra": "018a462e859627da64801ab1a4122717451a4e4f7ab917fcd746c62dd0eeceeba2",
        "inputs": [
          {
            "amount": 0,
            "key_image": "03f3a29dd840d08654755771d36c8d39268d215d78214a8f29ac19a98116efe8",
            "mixins": [
              {
                "block_no": 1230415,
                "public_key": "10f4d46bf0bb09fa9ad4208ddbb8fd5fcfa2fb2d964731a5e04071a93288ae5c"
              },
              {
                "block_no": 1231535,
                "public_key": "d7b6f7c37564f647ad33cac3447727b62231d41cd80fd09c6f596a99f97b25e1"
              },
              {
                "block_no": 1234337,
                "public_key": "c4766978af804c3581818a5b8aae54bfb5b7fde8a9482dccf2c75786d7aa0ed6"
              }
            ]
          },
          {
            "amount": 0,
            "key_image": "661d4484ebc15f7d5d9122c29f282e9b2b3b119ffe71a49440fc3cf0bbc0c642",
            "mixins": [
              {
                "block_no": 1226106,
                "public_key": "5a532e0677a862660fdd9af0f177b83e67d99bf38535f778b107f02c101dabb7"
              },
              {
                "block_no": 1226709,
                "public_key": "6497da459ce91f78461e81c20ca3148e273576bc9008908cb369c9440db251de"
              },
              {
                "block_no": 1231101,
                "public_key": "e907bd174dc7b20ab811c1b99e4fa58990146e242d7d4702c5443e1dc421255f"
              }
            ]
          }
        ],
        "mixin": 3,
        "outputs": [
          {
            "amount": 0,
            "public_key": "dfce36cfd52cd63ba2c950bd71e0523fee57cb4ddf9e54bc2ceebd8e37597f4a"
          },
          {
            "amount": 0,
            "public_key": "613f4849f2bd27f28b6d85a01cef421dfadd491b9f1b4956e625ddeadefacc1a"
          },
          {
            "amount": 0,
            "public_key": "c0ba1f794159dbd9a35a7118f35f1c3ba8c1d09c2fe51655a32071a966560e62"
          },
          {
            "amount": 0,
            "public_key": "967e2ae67aa85fbd1dc6f2937bf87f70328cf8fb3df8b7d3041768adbf782595"
          },
          {
            "amount": 0,
            "public_key": "977c64e40fd8bc436f4962ad89ed2374a88d766408e18d36f984955212c4344f"
          },
          {
            "amount": 0,
            "public_key": "e796f069bbf7d25b422d384ca08dd9a9d83c7592aa827914c9cba9724111afe3"
          }
        ],
        "payment_id": "",
        "payment_id8": "",
        "rct_type": 2,
        "timestamp": 1485715365,
        "timestamp_utc": "2017-01-29 18:42:45",
        "tx_fee": 66692772936,
        "tx_hash": "467f1914b3f5f4eb52dda02bfd0b70b89722b88063f40889bfba46d3ec78de80",
        "tx_size": 38479,
        "tx_version": 2,
        "xmr_inputs": 0,
        "xmr_outputs": 0
      }
    }
  },
  "context": {
    "code": 200
    "results": 1,
    "state": 2014050,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/monero/transaction/467f1914b3f5f4eb52dda02bfd0b70b89722b88063f40889bfba46d3ec78de80
Raw outputsReturns raw block data from our onion-monero-blockchain-explorer instance. See https://github.com/moneroexamples/onion-monero-blockchain-explorer/blob/master/README.md for field descriptions (api/outputs?txhash=<tx_hash>&address=&viewkey=&txprove=<0|1> section), but mostly they are self-describing.

Endpoint:

https://api.blockchair.com/{:xmr_chain}/raw/outputs?{:query}
Where:

{:xmr_chain} can only be monero
{:query} is the query string:txprove=0 checks which outputs belong to given address and corresponding viewkey
txprove=1 proves the sender sent funds
txhash is the transaction hash
address is the address
viewkey is the viewkey
Output:

data contains an associative array:

data.outputs — the list of outputs
Example requests:

https://api.blockchair.com/monero/raw/outputs?txhash=8e6a144dee7537a38e87f30e7c1f2bc1a35e5ef8b5032dfa7cf89a2df3073c41&address=44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A&viewkey=f359631075708155cc3d92a32b75a7d02a5dcf27756707b47a2b31b21c389501&txprove=0
https://api.blockchair.com/monero/raw/outputs?txhash=8e6a144dee7537a38e87f30e7c1f2bc1a35e5ef8b5032dfa7cf89a2df3073c41&address=44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A&viewkey=f359631075708155cc3d92a32b75a7d02a5dcf27756707b47a2b31b21c389501&txprove=1
Example responses:

https://api.blockchair.com/monero/raw/outputs?txhash=8e6a144dee7537a38e87f30e7c1f2bc1a35e5ef8b5032dfa7cf89a2df3073c41&address=44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A&viewkey=f359631075708155cc3d92a32b75a7d02a5dcf27756707b47a2b31b21c389501&txprove=0:

{
  "data": {
    "address": "42f18fc61586554095b0799b5c4b6f00cdeb26a93b20540d366932c6001617b75db35109fbba7d5f275fef4b9c49e0cc1c84b219ec6ff652fda54f89f7f63c88",
    "outputs": [
      {
        "amount": 800000000000,
        "match": false,
        "output_idx": 0,
        "output_pubkey": "2b0d6d7573895be2fccb06bf83099a4dddf3f73656f18e2b96eab997571a640d"
      },
      {
        "amount": 1000000000000,
        "match": false,
        "output_idx": 1,
        "output_pubkey": "543c158062f43c11ac16ff90dea61728a41410ffeccea4cea65a6ba6fb83ccab"
      },
      {
        "amount": 10000000000000,
        "match": true,
        "output_idx": 2,
        "output_pubkey": "122b7ba237e82ca95d620f286761b8f8102fa346df8d982c6fe48003d3939c60"
      },
      {
        "amount": 10000000000000,
        "match": false,
        "output_idx": 3,
        "output_pubkey": "7ba5f4dc9acf62c6bca171ac8e81f7757050a480bbe20f2d1836086aa23f004f"
      },
      {
        "amount": 300000000000000,
        "match": true,
        "output_idx": 4,
        "output_pubkey": "597a3bd3e7a7007fb2bb11cd734731e388ee95f436f6aa07d0d7afe927b7faad"
      }
    ],
    "tx_hash": "8e6a144dee7537a38e87f30e7c1f2bc1a35e5ef8b5032dfa7cf89a2df3073c41",
    "tx_prove": false,
    "viewkey": "f359631075708155cc3d92a32b75a7d02a5dcf27756707b47a2b31b21c389501"
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 2014050,
    ...
  }
}


https://api.blockchair.com/monero/raw/outputs?txhash=8e6a144dee7537a38e87f30e7c1f2bc1a35e5ef8b5032dfa7cf89a2df3073c41&address=44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A&viewkey=f359631075708155cc3d92a32b75a7d02a5dcf27756707b47a2b31b21c389501&txprove=1:

{
  "data": {
    "address": "42f18fc61586554095b0799b5c4b6f00cdeb26a93b20540d366932c6001617b75db35109fbba7d5f275fef4b9c49e0cc1c84b219ec6ff652fda54f89f7f63c88",
    "outputs": [
      {
        "amount": 800000000000,
        "match": false,
        "output_idx": 0,
        "output_pubkey": "2b0d6d7573895be2fccb06bf83099a4dddf3f73656f18e2b96eab997571a640d"
      },
      {
        "amount": 1000000000000,
        "match": false,
        "output_idx": 1,
        "output_pubkey": "543c158062f43c11ac16ff90dea61728a41410ffeccea4cea65a6ba6fb83ccab"
      },
      {
        "amount": 10000000000000,
        "match": false,
        "output_idx": 2,
        "output_pubkey": "122b7ba237e82ca95d620f286761b8f8102fa346df8d982c6fe48003d3939c60"
      },
      {
        "amount": 10000000000000,
        "match": false,
        "output_idx": 3,
        "output_pubkey": "7ba5f4dc9acf62c6bca171ac8e81f7757050a480bbe20f2d1836086aa23f004f"
      },
      {
        "amount": 300000000000000,
        "match": false,
        "output_idx": 4,
        "output_pubkey": "597a3bd3e7a7007fb2bb11cd734731e388ee95f436f6aa07d0d7afe927b7faad"
      }
    ],
    "tx_hash": "8e6a144dee7537a38e87f30e7c1f2bc1a35e5ef8b5032dfa7cf89a2df3073c41",
    "tx_prove": true,
    "viewkey": "f359631075708155cc3d92a32b75a7d02a5dcf27756707b47a2b31b21c389501"
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 2014050,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/monero/transaction/8e6a144dee7537a38e87f30e7c1f2bc1a35e5ef8b5032dfa7cf89a2df3073c41 (enter the address and the viewkey)
Raw data endpoints for CardanoRaw block dataReturns raw block data from our cardano-explorer-webapi instance. See https://cardanodocs.com/technical/explorer/api for field descriptions (/api/blocks/summary/{hash} section), but mostly they are self-describing. Our API also allows to query by block id.

Endpoints:

https://api.blockchair.com/{:ada_chain}/raw/block/{:height}₀
https://api.blockchair.com/{:ada_chain}/raw/block/{:hash}₀
Where:

{:ada_chain} can be only cardano
{:height}ᵢ is the block height (integer value), also known as block id
{:hash}ᵢ is the block hash (regex: /^[0-9a-f]{64}$/i)
Possible options:

?transactions=true displays transaction data
Output:

data contains an associative array:

data.{:id}ᵢ.block — block data
data.{:id}ᵢ.block — block transactions (null if ?transactions=true isn't set, an empty array [] if there are no transactions in the block )
Example requests:

https://api.blockchair.com/cardano/raw/block/1234567
https://api.blockchair.com/monero/raw/block/f093439d0dd48010a22fdb615a659e22738a10991871b5dc2335efa69008a8cd?transactions=true
Example output:

https://api.blockchair.com/cardano/raw/block/321123?transactions=true:

{
  "data": {
    "321123": {
      "block": {
        "cbsEntry": {
          "cbeEpoch": 14,
          "cbeSlot": 18766,
          "cbeBlkHeight": 321123,
          "cbeBlkHash": "f2568f498ad9d376cb1620ec00555171439fd241b5a66ecb700aeca5310422b1",
          "cbeTimeIssued": 1512626411,
          "cbeTxNum": 2,
          "cbeTotalSent": {
            "getCoin": "6428170796567000000"
          },
          "cbeSize": 1390,
          "cbeBlockLead": "5411c7bf87c252609831a337a713e4859668cba7bba70a9c3ef7c398",
          "cbeFees": {
            "getCoin": "342492000000"
          }
        },
        "cbsPrevHash": "7394430cf20bb55270f596106db75abd8dc56a4450f5f18ebc672fc9454389ad",
        "cbsNextHash": "eb3dce1bb6ec8a3fcbffca7cd43ca37d27d4f6bcde106b01d6e7ad6ca9c622f1",
        "cbsMerkleRoot": "83efc565aa681e5987c1721c1ac918fd246116157a66ca313be00315d10d9829"
      },
      "transactions": [
        {
          "ctbId": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
          "ctbTimeIssued": 1512626411,
          "ctbInputs": [
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrhsjyGfac6fkMYYCw9Ny5kHpyz48muHKMba4wAvAHT61FBF5JN7KPRuauJZtk41nh8WmDZhQpPVwNejsdk8kW1FZKwbTqgzr"
              },
              "ctaAmount": {
                "getCoin": "3214070827317"
              },
              "ctaTxHash": "c571fa570cc4250bbdead41509fb1d906133c9d206225c77b23759f117ac88a6",
              "ctaTxIndex": 0
            }
          ],
          "ctbOutputs": [
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrhseaXNVDcCXmbtY7rFbpdMp5dv2Znx7njXkGgAzq8NyAA4T9wfWvBR3wK5H7Q6ARVSnBysnfdY844iMZ4wSyDLkbCoB7W1k"
              },
              "ctaAmount": {
                "getCoin": "6097360975"
              },
              "ctaTxHash": "abb8159acc49c89ed3ce1066884e93d94f4469db1cc5ea76031c8062c37c4348",
              "ctaTxIndex": 1
            },
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrhsgFPX9T4QefXVuRxuAtiXouLbrwa9zGn2PKyCqv7aKqDGHLMBdSTGyCihB17MjTwN7iZq4XeEpAbwqkUKHzyXY6xtLqQyF"
              },
              "ctaAmount": {
                "getCoin": "3208002779521"
              },
              "ctaTxHash": "abb8159acc49c89ed3ce1066884e93d94f4469db1cc5ea76031c8062c37c4348",
              "ctaTxIndex": 0
            },
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrht368NFCQotpKy2mKzJQXPyZUvTZ2Vjx6pMP7jc82T13et6wc6cZJtQTqWxVhY5kwmirWZkQLLszGgcrr2LV9FyPZtq5E3P"
              },
              "ctaAmount": {
                "getCoin": "165464412631"
              },
              "ctaTxHash": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
              "ctaTxIndex": 1
            },
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrhszNt18zTvCzom5qbtiDaJLPHNYbXfYnD4ScT3ZLXKQe4YC3jLraWeFuzXQ7gqN5cnYDUS3VrqxKGx3E5cz6mdtFuEoXUDs"
              },
              "ctaAmount": {
                "getCoin": "3048606243440"
              },
              "ctaTxHash": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
              "ctaTxIndex": 0
            }
          ],
          "ctbInputSum": {
            "getCoin": "3214070827317"
          },
          "ctbOutputSum": {
            "getCoin": "6428170796567"
          },
          "ctbFees": {
            "getCoin": "-3214099969250"
          }
        },
        {
          "ctbId": "abb8159acc49c89ed3ce1066884e93d94f4469db1cc5ea76031c8062c37c4348",
          "ctbTimeIssued": 1512626411,
          "ctbInputs": [
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrhsniCkr7dmbXovTkGWbqYLFefc6sLqbJPi6HguiS8J5yCqGdYCPUuPf5HtctdLAiP9AFPQZPW3fprxWNuP1y45UVuRMvpie"
              },
              "ctaAmount": {
                "getCoin": "3214100311742"
              },
              "ctaTxHash": "6b5d6cdfcb0da57430ad80ec18fb9e2ccaf9ae1e4b0d9f1361c267aaf57dfa7d",
              "ctaTxIndex": 0
            }
          ],
          "ctbOutputs": [
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrhseaXNVDcCXmbtY7rFbpdMp5dv2Znx7njXkGgAzq8NyAA4T9wfWvBR3wK5H7Q6ARVSnBysnfdY844iMZ4wSyDLkbCoB7W1k"
              },
              "ctaAmount": {
                "getCoin": "6097360975"
              },
              "ctaTxHash": "abb8159acc49c89ed3ce1066884e93d94f4469db1cc5ea76031c8062c37c4348",
              "ctaTxIndex": 1
            },
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrhsgFPX9T4QefXVuRxuAtiXouLbrwa9zGn2PKyCqv7aKqDGHLMBdSTGyCihB17MjTwN7iZq4XeEpAbwqkUKHzyXY6xtLqQyF"
              },
              "ctaAmount": {
                "getCoin": "3208002779521"
              },
              "ctaTxHash": "abb8159acc49c89ed3ce1066884e93d94f4469db1cc5ea76031c8062c37c4348",
              "ctaTxIndex": 0
            },
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrht368NFCQotpKy2mKzJQXPyZUvTZ2Vjx6pMP7jc82T13et6wc6cZJtQTqWxVhY5kwmirWZkQLLszGgcrr2LV9FyPZtq5E3P"
              },
              "ctaAmount": {
                "getCoin": "165464412631"
              },
              "ctaTxHash": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
              "ctaTxIndex": 1
            },
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrhszNt18zTvCzom5qbtiDaJLPHNYbXfYnD4ScT3ZLXKQe4YC3jLraWeFuzXQ7gqN5cnYDUS3VrqxKGx3E5cz6mdtFuEoXUDs"
              },
              "ctaAmount": {
                "getCoin": "3048606243440"
              },
              "ctaTxHash": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
              "ctaTxIndex": 0
            }
          ],
          "ctbInputSum": {
            "getCoin": "3214100311742"
          },
          "ctbOutputSum": {
            "getCoin": "6428170796567"
          },
          "ctbFees": {
            "getCoin": "-3214070484825"
          }
        }
      ]
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 3677155,
    ...
  }
}


Request cost formula:

1. If ?transactions=true option is used then 2.

Explore visualization on our front-end:

https://blockchair.com/cardano/block/321123
Raw transaction dataReturns raw block data from our cardano-explorer-webapi instance. See https://cardanodocs.com/technical/explorer/api for field descriptions (/api/txs/summary/{txid} section), but mostly they are self-describing.

Endpoint:

https://api.blockchair.com/{:ada_chain}/raw/transaction/{:hash}₀
Where:

{:ada_chain} can only be cardano
{:hash}ᵢ is the transaction hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:hash}ᵢ.transaction — transaction data
Example requests:

https://api.blockchair.com/cardano/raw/transaction/5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107
Example output:

https://api.blockchair.com/cardano/raw/transaction/5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107:

{
  "data": {
    "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107": {
      "transaction": {
        "ctsId": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
        "ctsTxTimeIssued": 1512626411,
        "ctsBlockTimeIssued": 1512626411,
        "ctsBlockHeight": 321123,
        "ctsBlockEpoch": 14,
        "ctsBlockSlot": 18766,
        "ctsBlockHash": "f2568f498ad9d376cb1620ec00555171439fd241b5a66ecb700aeca5310422b1",
        "ctsRelayedBy": null,
        "ctsTotalInput": {
          "getCoin": "3214070827317"
        },
        "ctsTotalOutput": {
          "getCoin": "3214070656071"
        },
        "ctsFees": {
          "getCoin": "171246"
        },
        "ctsInputs": [
          {
            "ctaAddress": {
              "unCAddress": "DdzFFzCqrhsjyGfac6fkMYYCw9Ny5kHpyz48muHKMba4wAvAHT61FBF5JN7KPRuauJZtk41nh8WmDZhQpPVwNejsdk8kW1FZKwbTqgzr"
            },
            "ctaAmount": {
              "getCoin": "3214070827317"
            },
            "ctaTxHash": "c571fa570cc4250bbdead41509fb1d906133c9d206225c77b23759f117ac88a6",
            "ctaTxIndex": 0
          }
        ],
        "ctsOutputs": [
          {
            "ctaAddress": {
              "unCAddress": "DdzFFzCqrht368NFCQotpKy2mKzJQXPyZUvTZ2Vjx6pMP7jc82T13et6wc6cZJtQTqWxVhY5kwmirWZkQLLszGgcrr2LV9FyPZtq5E3P"
            },
            "ctaAmount": {
              "getCoin": "165464412631"
            },
            "ctaTxHash": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
            "ctaTxIndex": 1
          },
          {
            "ctaAddress": {
              "unCAddress": "DdzFFzCqrhszNt18zTvCzom5qbtiDaJLPHNYbXfYnD4ScT3ZLXKQe4YC3jLraWeFuzXQ7gqN5cnYDUS3VrqxKGx3E5cz6mdtFuEoXUDs"
            },
            "ctaAmount": {
              "getCoin": "3048606243440"
            },
            "ctaTxHash": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
            "ctaTxIndex": 0
          }
        ]
      }
    }
  },
  "context": {
    "code": 200,
    "source": "D",
    "results": 1,
    "state": 3677165,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/cardano/transaction/5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107
Raw address dataReturns raw block data from our cardano-explorer-webapi instance. See https://cardanodocs.com/technical/explorer/api for field descriptions (/api/addresses/summary/{address} section), but mostly they are self-describing.

Endpoint:

https://api.blockchair.com/{:ada_chain}/raw/address/{:address}₀
Where:

{:ada_chain} can only be cardano
{:address}ᵢ is the address
Output:

data contains an associative array:

data.{:address}ᵢ.address — address data
Example request:

https://api.blockchair.com/cardano/raw/address/DdzFFzCqrhsjyGfac6fkMYYCw9Ny5kHpyz48muHKMba4wAvAHT61FBF5JN7KPRuauJZtk41nh8WmDZhQpPVwNejsdk8kW1FZKwbTqgzr
Example output:

https://api.blockchair.com/cardano/raw/address/DdzFFzCqrhsjyGfac6fkMYYCw9Ny5kHpyz48muHKMba4wAvAHT61FBF5JN7KPRuauJZtk41nh8WmDZhQpPVwNejsdk8kW1FZKwbTqgzr:

{
  "data": {
    "DdzFFzCqrhsjyGfac6fkMYYCw9Ny5kHpyz48muHKMba4wAvAHT61FBF5JN7KPRuauJZtk41nh8WmDZhQpPVwNejsdk8kW1FZKwbTqgzr": {
      "address": {
        "caAddress": {
          "unCAddress": "DdzFFzCqrhsjyGfac6fkMYYCw9Ny5kHpyz48muHKMba4wAvAHT61FBF5JN7KPRuauJZtk41nh8WmDZhQpPVwNejsdk8kW1FZKwbTqgzr"
        },
        "caType": "CPubKeyAddress",
        "caChainTip": {
          "ctBlockNo": 3677186,
          "ctSlotNo": 3679243,
          "ctBlockHash": "972695ba985f68001bfef72d6c7454e3cc92fd8ac02ff7c00d848cded1e190db"
        },
        "caTxNum": 2,
        "caBalance": {
          "getCoin": "0"
        },
        "caTotalInput": {
          "getCoin": "3214070827317"
        },
        "caTotalOutput": {
          "getCoin": "3214070827317"
        },
        "caTotalFee": {
          "getCoin": "342492"
        },
        "caTxList": [
          {
            "ctbId": "c571fa570cc4250bbdead41509fb1d906133c9d206225c77b23759f117ac88a6",
            "ctbTimeIssued": 1512609191,
            "ctbInputs": [
              {
                "ctaAddress": {
                  "unCAddress": "DdzFFzCqrhsvsU8xNsq7eanKQAJVpzFyUzjZqTqsYCQ1wj8STUgvCBGUH5DGjrsuuuNi4as6MQfY3jmqRxPKxmuyPH8T1LMyghxr82Xb"
                },
                "ctaAmount": {
                  "getCoin": "3234070798563"
                },
                "ctaTxHash": "fcf9be849290d0228fb339f125fe7c47c71909633e9f93c65f4e4222fb362ded",
                "ctaTxIndex": 0
              }
            ],
            "ctbOutputs": [
              {
                "ctaAddress": {
                  "unCAddress": "DdzFFzCqrhsegE9H92jxSgEHv3W4mSLWq5ELTJiK4DTnZ8frf4squEQmFbvzjTeUsMiLe287qUZSsb8USXhf5i7WR5DTbJuSUfLEFu1q"
                },
                "ctaAmount": {
                  "getCoin": "19999800000"
                },
                "ctaTxHash": "c571fa570cc4250bbdead41509fb1d906133c9d206225c77b23759f117ac88a6",
                "ctaTxIndex": 1
              },
              {
                "ctaAddress": {
                  "unCAddress": "DdzFFzCqrhsjyGfac6fkMYYCw9Ny5kHpyz48muHKMba4wAvAHT61FBF5JN7KPRuauJZtk41nh8WmDZhQpPVwNejsdk8kW1FZKwbTqgzr"
                },
                "ctaAmount": {
                  "getCoin": "3214070827317"
                },
                "ctaTxHash": "c571fa570cc4250bbdead41509fb1d906133c9d206225c77b23759f117ac88a6",
                "ctaTxIndex": 0
              }
            ],
            "ctbInputSum": {
              "getCoin": "3234070798563"
            },
            "ctbOutputSum": {
              "getCoin": "3234070627317"
            },
            "ctbFees": {
              "getCoin": "171246"
            }
          },
          {
            "ctbId": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
            "ctbTimeIssued": 1512626411,
            "ctbInputs": [
              {
                "ctaAddress": {
                  "unCAddress": "DdzFFzCqrhsjyGfac6fkMYYCw9Ny5kHpyz48muHKMba4wAvAHT61FBF5JN7KPRuauJZtk41nh8WmDZhQpPVwNejsdk8kW1FZKwbTqgzr"
                },
                "ctaAmount": {
                  "getCoin": "3214070827317"
                },
                "ctaTxHash": "c571fa570cc4250bbdead41509fb1d906133c9d206225c77b23759f117ac88a6",
                "ctaTxIndex": 0
              }
            ],
            "ctbOutputs": [
              {
                "ctaAddress": {
                  "unCAddress": "DdzFFzCqrht368NFCQotpKy2mKzJQXPyZUvTZ2Vjx6pMP7jc82T13et6wc6cZJtQTqWxVhY5kwmirWZkQLLszGgcrr2LV9FyPZtq5E3P"
                },
                "ctaAmount": {
                  "getCoin": "165464412631"
                },
                "ctaTxHash": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
                "ctaTxIndex": 1
              },
              {
                "ctaAddress": {
                  "unCAddress": "DdzFFzCqrhszNt18zTvCzom5qbtiDaJLPHNYbXfYnD4ScT3ZLXKQe4YC3jLraWeFuzXQ7gqN5cnYDUS3VrqxKGx3E5cz6mdtFuEoXUDs"
                },
                "ctaAmount": {
                  "getCoin": "3048606243440"
                },
                "ctaTxHash": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
                "ctaTxIndex": 0
              }
            ],
            "ctbInputSum": {
              "getCoin": "3214070827317"
            },
            "ctbOutputSum": {
              "getCoin": "3214070656071"
            },
            "ctbFees": {
              "getCoin": "171246"
            }
          }
        ]
      }
    }
  },
  "context": {
    "code": 200,
    "source": "D",
    "results": 1,
    "state": 3677186,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/cardano/address/DdzFFzCqrhsjyGfac6fkMYYCw9Ny5kHpyz48muHKMba4wAvAHT61FBF5JN7KPRuauJZtk41nh8WmDZhQpPVwNejsdk8kW1FZKwbTqgzr
Raw data endpoints for MixinRaw snapshot dataEndpoints:

https://api.blockchair.com/{:xin_chain}/raw/snapshot/{:height}₀
https://api.blockchair.com/{:xin_chain}/raw/snapshot/{:hash}₀
Where:

{:xin_chain} can be only mixin
{:height}ᵢ is the snapshot id (topology)
{:hash}ᵢ is the snapshot hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:id}ᵢ.snapshot — snapshot data
data.{:id}ᵢ.snapshot.transaction — transaction data
Example requests:

https://api.blockchair.com/mixin/raw/snapshot/0
https://api.blockchair.com/mixin/raw/snapshot/75eabab3b5e3fe0a811bc2969f32716cc58bac7260b112380be45a23fc839939
Example output:

https://api.blockchair.com/mixin/raw/snapshot/0:

{
  "data": [
    {
      "snapshot": {
        "hash": "75eabab3b5e3fe0a811bc2969f32716cc58bac7260b112380be45a23fc839939",
        "node": "a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50",
        "references": null,
        "round": 0,
        "signatures": null,
        "timestamp": 1551312000000000000,
        "topology": 0,
        "transaction": {
          "asset": "a99c2e0e2b1da4d648755ef19bd95139acbbe6564cfb06dec7cd34931ca72cdc",
          "extra": "065866c10424d5cfa7ca95eddad69d261ddc7c31a107f28773880bd9cb5bf611c70a3825ca359993324db9e169acb832e9ca75ec17b2b2e1f5b10ebd40eb9dca",
          "hash": "f3a94f83f0a579d1a1b87f713d934df44e9b888216938667e7b2817aba71ef93",
          "inputs": [
            {
              "genesis": "6430225c42bb015b4da03102fa962e4f4ef3969e03e04345db229f8377ef7997"
            }
          ],
          "outputs": [
            {
              "amount": "10000.00000000",
              "keys": [
                "1d2dced65983ef59ea096d75a27a276308f1ae717c66f1884125adedfda3ae3d",
                "ec7d399503241bf26975719df8152feb599afb85c8cf3cc4175761421fb4c2ca",
                "a5ada6adecdc3bbb8aeb128ba8ddc3f6cb3022406de5576f3d15a38e926f0b96",
                "d1913a811ea696961a0d253359f9590efd77519d6005a6326a47435589e3c909",
                "3796347874919f62625a8db893d254b4292248f84504e7a5c766994c6251aea9",
                "e566095e3fb7949ec2fef418c2a097bc1609ac5adde2401974d7d449ae31190b",
                "2486621dc6c86300a60f2a46a910771f267dba698609aa686aa76d630e58e727",
                "71b3238bb152e5c63386af6bfd27bcfdd677436bb8e70520535fac2087bc5452",
                "9cd1704f830d035f7917e0a7eaf79b873abb715b00f0a2713205d2660f4b533b",
                "967407727188086d3ac67811603e073743945c372103323898a15004da0503d8",
                "4011b7a390e3c514c9da9341fbe461e3398e1538b9647ecafe1a95a74cebdefd",
                "52dae8ec6e0abaab28902f7427163de375e618aaf012d5a5c4ef4629d0b32d1d",
                "7a51cc274ea7dbc39bd81737b952aeea2f3bfaba55313b9a239bdd7e1f8f792e",
                "682ecb376c5af616b20c653fadc59e5c3992ee4ad6ef10b1f4cbe429b2f8e9fb",
                "0359fd509abff274bf7f8eca839ea17ec33c455478c4d1088936f8ff58a71705"
              ],
              "mask": "1502ba20afb0fa88b64ff9fbd8f12615da0fcd57f2132a3af712fee103d5ddeb",
              "script": "fffe0b",
              "type": 164
            }
          ],
          "version": 0
        },
        "version": 0
      }
    }
  ],
  "context": {
    "code": 200,
    "results": 1,
    "state": 18627212,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/mixin/snapshot/0
Raw round dataEndpoints:

https://api.blockchair.com/{:xin_chain}/raw/round/{:hash}
https://api.blockchair.com/{:xin_chain}/raw/round/({:id},{:node_hash})
Where:

{:xin_chain} can be only mixin
{:hash} is the round hash (regex: /^[0-9a-f]{64}$/i)
{:id} is the round id
{:node_hash} is the node hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:id}ᵢ.round — round data
Example requests:`

https://api.blockchair.com/mixin/raw/round/(0,a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50)
https://api.blockchair.com/mixin/raw/round/3a3edfac471bdcfd0ad6f0162c1c81b2771c606dc4c4ec08f7c0174366906712
Example output:

https://api.blockchair.com/mixin/raw/round/(0,a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50):

{
  "data": {
    "(0,a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50)": {
      "round": {
        "end": 1551312000000000000,
        "hash": "3a3edfac471bdcfd0ad6f0162c1c81b2771c606dc4c4ec08f7c0174366906712",
        "node": "a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50",
        "number": 0,
        "references": null,
        "snapshots": [
          {
            "hash": "75eabab3b5e3fe0a811bc2969f32716cc58bac7260b112380be45a23fc839939",
            "node": "a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50",
            "references": null,
            "round": 0,
            "timestamp": 1551312000000000000,
            "topology": 0,
            "transaction": "f3a94f83f0a579d1a1b87f713d934df44e9b888216938667e7b2817aba71ef93",
            "version": 0
          },
          {
            "hash": "35882901dbeae376b01cf61d7ef0d58d3f9545878c0f9649c086628f1eaf9ab7",
            "node": "a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50",
            "references": null,
            "round": 0,
            "timestamp": 1551312000000000000,
            "topology": 15,
            "transaction": "4e24675df8a9d1592c82d6fa9ef86881fb2dfafe2a06b2a51134daf5a98f8411",
            "version": 0
          }
        ],
        "start": 1551312000000000000
      }
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 18628189,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/mixin/round/3a3edfac471bdcfd0ad6f0162c1c81b2771c606dc4c4ec08f7c0174366906712
Raw transaction dataEndpoint:

https://api.blockchair.com/{:xin_chain}/raw/transaction/{:hash}₀
Where:

{:xin_chain} can be only mixin
{:hash}ᵢ is the transaction hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:hash}ᵢ.transaction — transaction data
Example request:`

https://api.blockchair.com/mixin/raw/transaction/704f7d52b864a70cc7219d04f534fb5105f341ff8fcbc6b80f90237ea7694ed2
Example output:

https://api.blockchair.com/mixin/raw/transaction/704f7d52b864a70cc7219d04f534fb5105f341ff8fcbc6b80f90237ea7694ed2:

{
  "data": {
    "704f7d52b864a70cc7219d04f534fb5105f341ff8fcbc6b80f90237ea7694ed2": {
      "transaction": {
        "asset": "8dd50817c082cdcdd6f167514928767a4b52426997bd6d4930eca101c5ff8a27",
        "extra": "1fb1bb3ab8d8423f9c7421205c694810",
        "hash": "704f7d52b864a70cc7219d04f534fb5105f341ff8fcbc6b80f90237ea7694ed2",
        "hex": "86a756657273696f6e01a54173736574c4208dd50817c082cdcdd6f167514928767a4b52426997bd6d4930eca101c5ff8a27a6496e707574739385a448617368c420d53c766688b082db87c762fd517af5afc31b3b00e468193cb8c10b46cd0f375ba5496e64657800a747656e65736973c0a74465706f736974c0a44d696e74c085a448617368c420313f6552d57a89f47a43ca29019d2b15b250976c1652af30795022daf4a0ae4ba5496e64657801a747656e65736973c0a74465706f736974c0a44d696e74c085a448617368c4203bc42d2d3dfd3b95c0abd97750c1f2f1c2ee89156e3c1e5b89205852ce2f8895a5496e64657800a747656e65736973c0a74465706f736974c0a44d696e74c0a74f7574707574739285a45479706500a6416d6f756e74c703005265c0a44b65797391c42049c29716841df40eb88dc21974e3b2867ffed2b37b852015746aa3c151bffdf9a6536372697074c403fffe01a44d61736bc420efe475f7f66eb1946638e1ef0dbdaa7fa6ca83cce9fa856a20dd90fbad807a5985a45479706500a6416d6f756e74c70300b476f2a44b65797391c4202445800f02fff64f07f8062f66b8d35b0bab5e95c138de00f446e47b8bd1347ca6536372697074c403fffe01a44d61736bc420b7b135023dd232265c350173a0e84a14451b67de180636cc8829472d0bfff259a54578747261c4101fb1bb3ab8d8423f9c7421205c694810aa5369676e6174757265739391c44084560dd45f63aec94e07124bcb79a62fc8bd0d38e1d1254796d1b46400c0a75b9ce8b56b4c6be4c7db7e8d0613331d44b9bc1d8873d266e80c211f8008f50d0e91c44076fac18ee299eb471448fded8569c375547d097701eb02bb82edfba34a87df8767b5b1293f6a58d483841e961ad686577d101136a86be5d485e095f87dbafc0291c440ecf4d639b46d0c4ff310598446f37ac5e82817a44f1be86227dbfe9ced4511f1aa9b401c939396cb4605d1522a071320ef8b490ca5cfc4bf3c5bd6386a561502",
        "inputs": [
          {
            "hash": "d53c766688b082db87c762fd517af5afc31b3b00e468193cb8c10b46cd0f375b",
            "index": 0
          },
          {
            "hash": "313f6552d57a89f47a43ca29019d2b15b250976c1652af30795022daf4a0ae4b",
            "index": 1
          },
          {
            "hash": "3bc42d2d3dfd3b95c0abd97750c1f2f1c2ee89156e3c1e5b89205852ce2f8895",
            "index": 0
          }
        ],
        "outputs": [
          {
            "amount": "0.05400000",
            "keys": [
              "49c29716841df40eb88dc21974e3b2867ffed2b37b852015746aa3c151bffdf9"
            ],
            "mask": "efe475f7f66eb1946638e1ef0dbdaa7fa6ca83cce9fa856a20dd90fbad807a59",
            "script": "fffe01",
            "type": 0
          },
          {
            "amount": "0.11826930",
            "keys": [
              "2445800f02fff64f07f8062f66b8d35b0bab5e95c138de00f446e47b8bd1347c"
            ],
            "mask": "b7b135023dd232265c350173a0e84a14451b67de180636cc8829472d0bfff259",
            "script": "fffe01",
            "type": 0
          }
        ],
        "snapshot": "83c4636a560fb15e25e69f0ea63e15900633db03ba2663d453b0825750f910d2",
        "version": 1
      }
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 18627910,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/mixin/transaction/704f7d52b864a70cc7219d04f534fb5105f341ff8fcbc6b80f90237ea7694ed2
Raw node dataEndpoint:

https://api.blockchair.com/{:xin_chain}/raw/node/{:node_hash}
Where:

{:xin_chain} can be only mixin
{:node_hash} is the node hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:id}ᵢ.node — node data
data.{:id}ᵢ.graph — node graph data
data.{:id}ᵢ.transaction — node transaction data
data.{:id}ᵢ.round — node round data
Example request:`

https://api.blockchair.com/mixin/raw/node/a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50
Example output:

https://api.blockchair.com/mixin/raw/node/a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50:

{
  "data": {
    "node": {
      "id": "a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50",
      "payee": "XINT3KrjgaC3EkrWJQkJBvY5ZJ4YFVTtrjxTuAkYoKTM8sZKLjrGnzDBAJkNZ3gUQuSWQdk98rr3xAF5C21Zb5YwaFHQ3WF9",
      "signer": "XINq9ctH1qYjxE8AsxJoH53qgNpS6hpL5mv5sFGML4Bf7tdpBD5LorhGBGpSF4tEKh9LD81XrXcaLA3CmTnCZU2NoKExsDh",
      "state": "REMOVED",
      "timestamp": 1584709251628742100,
      "transaction": "b26b3accf232512924087fc810a3ace700d8ccfd75a392e7403471465bc1a886"
    },
    "graph": {
      "hash": "a14ab7cb37931acd4a35cb46a0e1533a5557d24bf588767b2c5e36b888d44ac3",
      "node": "a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50",
      "round": 539409
    },
    "transaction": {
      "asset": "a99c2e0e2b1da4d648755ef19bd95139acbbe6564cfb06dec7cd34931ca72cdc",
      "extra": "065866c10424d5cfa7ca95eddad69d261ddc7c31a107f28773880bd9cb5bf611c70a3825ca359993324db9e169acb832e9ca75ec17b2b2e1f5b10ebd40eb9dca",
      "hash": "b26b3accf232512924087fc810a3ace700d8ccfd75a392e7403471465bc1a886",
      "hex": "86a756657273696f6e01a54173736574c420a99c2e0e2b1da4d648755ef19bd95139acbbe6564cfb06dec7cd34931ca72cdca6496e707574739185a448617368c420f3a94f83f0a579d1a1b87f713d934df44e9b888216938667e7b2817aba71ef93a5496e64657800a747656e65736973c0a74465706f736974c0a44d696e74c0a74f7574707574739185a454797065cca6a6416d6f756e74c70500e8d4a51000a44b65797391c42064bc93e6e22a4e5f2ca3340e898393478f1aec5354c5444e927b66efea4c8491a6536372697074c403fffe01a44d61736bc420e54a5084f751b0966bb28cf532ce070efd68121c7ccb258bce1ad877ef0fe0eea54578747261c440065866c10424d5cfa7ca95eddad69d261ddc7c31a107f28773880bd9cb5bf611c70a3825ca359993324db9e169acb832e9ca75ec17b2b2e1f5b10ebd40eb9dcaaa5369676e617475726573c0",
      "inputs": [
        {
          "hash": "f3a94f83f0a579d1a1b87f713d934df44e9b888216938667e7b2817aba71ef93",
          "index": 0
        }
      ],
      "outputs": [
        {
          "amount": "10000.00000000",
          "keys": [
            "64bc93e6e22a4e5f2ca3340e898393478f1aec5354c5444e927b66efea4c8491"
          ],
          "mask": "e54a5084f751b0966bb28cf532ce070efd68121c7ccb258bce1ad877ef0fe0ee",
          "script": "fffe01",
          "type": 166
        }
      ],
      "snapshot": "abe3e91c47618e45047bf19d7258fe7af9e599ea18e1814dffc661391863d38f",
      "version": 1
    },
    "round": {
      "end": 1584709084891248400,
      "hash": "a14ab7cb37931acd4a35cb46a0e1533a5557d24bf588767b2c5e36b888d44ac3",
      "node": "a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50",
      "number": 539409,
      "references": {
        "self": "80a01607cd8a3c9444c502f1008c3f1880b95471f25376fbc3e18d14d556a718",
        "external": "73bec29807b077af6f061482cbee0ea8ec7b70021c03f82989bfc0edac27bea4"
      },
      "snapshots": [
        {
          "hash": "3b1039a352a5bcb8914239e4ef8e90c9f8e86e53186216ea7363a080d91e6472",
          "node": "a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50",
          "references": {
            "self": "80a01607cd8a3c9444c502f1008c3f1880b95471f25376fbc3e18d14d556a718",
            "external": "73bec29807b077af6f061482cbee0ea8ec7b70021c03f82989bfc0edac27bea4"
          },
          "round": 539409,
          "timestamp": 1584709084891248400,
          "topology": 15283799,
          "transaction": "9e4c9bb6bbb8f92a9811b75a147844453038dfeb835ed790f4fe5a344de10186",
          "version": 1
        }
      ],
      "start": 1584709084891248400
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 18628433,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/mixin/node/a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50
Raw graph dataEndpoint:

https://api.blockchair.com/{:xin_chain}/raw/graph
Where:

{:xin_chain} can be only mixin
Output:

data contains an array of graph elements

Example request:`

https://api.blockchair.com/mixin/raw/graph
Example output:

https://api.blockchair.com/mixin/raw/graph:

{
  "data": [
    {
      "hash": "304d2b18a1d30db251702c0ea7c9aec1128c554afcbb2ebf4ce28a47ca722e65",
      "node": "017ebfb57ed9aace3d2ed9d559b7a6bf16a8745113872f80cf74ed618a40d3d3",
      "round": 133635
    },
    {
      "hash": "ecf9ae5e469ce68907178f2e3dc8681438a779ad30a66f42c48b2db223731bcd",
      "node": "028d97996a0b78f48e43f90e82137dbca60199519453a8fbf6e04b1e4d11efc9",
      "round": 545028
    },
    {
      "hash": "52837654b5b2530a4a171656f48479c809a3718ed98b877a4cf5d19901e97276",
      "node": "1334081011398877b225a11a680440f8edbc2b3dd8b4a33cf90e571069d4c471",
      "round": 525300
    },
    ...
  ],
  "context": {
    "code": 200,
    "results": 53,
    "state": 18628655,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/mixin/graph
Raw data endpoints for TezosRaw block dataReturns raw block data from our tzindex instance. See https://github.com/blockwatch-cc/tzindex/blob/master/README.md for field descriptions, but mostly they are self-describing.

Endpoints:

https://api.blockchair.com/{:xtz_chain}/raw/block/{:height}₀
https://api.blockchair.com/{:xtz_chain}/raw/block/{:hash}₀
Where:

{:xtz_chain} can only be tezos
{:height}ᵢ is the block height (integer value), also known as block id
{:hash}ᵢ is the block hash
Output:

data contains an associative array:

data.{:id}ᵢ.block — block data.
Example requests:

https://api.blockchair.com/tezos/raw/block/888888
https://api.blockchair.com/tezos/raw/block/BMSY7Rvss3to1HGuCVLJsbAyCgghXzML8M3XD8kzoaCc2LLVEoM
Example output:

https://api.blockchair.com/tezos/raw/block/888888:

{
  "data": {
    "888888": {
      "block": {
        "hash": "BMSY7Rvss3to1HGuCVLJsbAyCgghXzML8M3XD8kzoaCc2LLVEoM",
        "predecessor": "BLv7JH7gMfVqbnMQ6GsqSfXvRu5bKeVZTCCRKqzrz9WyjLYfKtG",
        "successor": "BL8688QdRQgoEmoSr9QdLRdpyTk31kmojDwoQ1kYWsX3SNH5ch3",
        "baker": "tz3VEZ4k6a4Wx42iyev6i2aVAptTRLEAivNN",
        "height": 888888,
        "cycle": 217,
        "is_cycle_snapshot": false,
        "time": "2020-03-31T10:33:31Z",
        "solvetime": 60,
        "version": 6,
        "validation_pass": 4,
        "fitness": 233528,
        "priority": 0,
        "nonce": 8461818875301725000,
        "voting_period_kind": "proposal",
        "endorsed_slots": 4293918719,
        "n_endorsed_slots": 31,
        "n_ops": 67,
        "n_ops_failed": 0,
        "n_ops_contract": 0,
        "n_tx": 46,
        "n_activation": 0,
        "n_seed_nonce_revelations": 0,
        "n_double_baking_evidences": 0,
        "n_double_endorsement_evidences": 0,
        "n_endorsement": 21,
        "n_delegation": 0,
        "n_reveal": 0,
        "n_origination": 0,
        "n_proposal": 0,
        "n_ballot": 0,
        "volume": 0.967347,
        "fees": 0.081556,
        "rewards": 80,
        "deposits": 2560,
        "unfrozen_fees": 0,
        "unfrozen_rewards": 0,
        "unfrozen_deposits": 0,
        "activated_supply": 0,
        "burned_supply": 0,
        "n_accounts": 73,
        "n_new_accounts": 0,
        "n_new_implicit": 0,
        "n_new_managed": 0,
        "n_new_contracts": 0,
        "n_cleared_accounts": 0,
        "n_funded_accounts": 0,
        "gas_limit": 697462,
        "gas_used": 484756,
        "gas_price": 0.16824,
        "storage_size": 696,
        "days_destroyed": 0.036068,
        "pct_account_reuse": 100,
        "endorsers": [
          "tz3RDC3Jdn4j15J7bBHZd29EUee9gVB1CxD9",
          "tz1LcuQHNVQEWP2fZjk1QYZGNrfLDwrT3SyZ",
          ...
        ]
      },
      "operations": [
        {
          "hash": "op2UfeUHiVdu91c6G9GFC646FKW1tQmNXgs7BcbxUFuTrj3gUMg",
          "type": "endorsement",
          "status": "applied",
          "is_success": 1,
          "volume": 0,
          "data": "1073742880",
          "sender": "tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo",
          "receiver": null,
          "manager": null,
          "delegate": null
        },
        ...
      ]
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 974152,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/tezos/block/888888
Raw operation dataReturns raw operation data from our tzindex instance. See https://github.com/blockwatch-cc/tzindex/blob/master/README.md for field descriptions, but mostly they are self-describing.

Endpoint:

https://api.blockchair.com/{:xtz_chain}/raw/operation/{:hash}₀
Where:

{:xtz_chain} can only be tezos
{:hash}ᵢ is the operation hash
Output:

data contains an associative array:

data.{:id}ᵢ.operations — an array of internal operations.
Example output:

https://api.blockchair.com/tezos/raw/operation/ooe4aYfzRkGUS4UdXeRThNCsv5NkqeMLdKtfL7bzL3y7TGZzgGE:

{
  "data": {
    "ooe4aYfzRkGUS4UdXeRThNCsv5NkqeMLdKtfL7bzL3y7TGZzgGE": {
      "operations": [
        {
          "hash": "ooe4aYfzRkGUS4UdXeRThNCsv5NkqeMLdKtfL7bzL3y7TGZzgGE",
          "type": "transaction",
          "block": "BMSY7Rvss3to1HGuCVLJsbAyCgghXzML8M3XD8kzoaCc2LLVEoM",
          "time": "2020-03-31T10:33:31Z",
          "height": 888888,
          "cycle": 217,
          "counter": 2493708,
          "op_n": 24,
          "op_c": 0,
          "op_i": 0,
          "status": "applied",
          "is_success": true,
          "is_contract": false,
          "gas_limit": 15385,
          "gas_used": 10207,
          "gas_price": 0.17557,
          "storage_limit": 257,
          "storage_size": 0,
          "storage_paid": 0,
          "volume": 0.014931,
          "fee": 0.001792,
          "reward": 0,
          "deposit": 0,
          "burned": 0,
          "is_internal": false,
          "has_data": false,
          "days_destroyed": 0.000083,
          "sender": "tz1bd5Pn5DxPinvCtkeJmoneyYiLeUebvUa5",
          "receiver": "tz1ZnXzwGtyjGVEqRJgEgJK9z2vrrq1AooaA",
          "branch_id": 888888,
          "branch_height": 888887,
          "branch_depth": 1,
          "branch": "BLv7JH7gMfVqbnMQ6GsqSfXvRu5bKeVZTCCRKqzrz9WyjLYfKtG"
        },
        {
          "hash": "ooe4aYfzRkGUS4UdXeRThNCsv5NkqeMLdKtfL7bzL3y7TGZzgGE",
          "type": "transaction",
          "block": "BMSY7Rvss3to1HGuCVLJsbAyCgghXzML8M3XD8kzoaCc2LLVEoM",
          "time": "2020-03-31T10:33:31Z",
          "height": 888888,
          "cycle": 217,
          "counter": 2493709,
          "op_n": 24,
          "op_c": 1,
          "op_i": 0,
          "status": "applied",
          "is_success": true,
          "is_contract": false,
          "gas_limit": 15385,
          "gas_used": 10207,
          "gas_price": 0.17557,
          "storage_limit": 257,
          "storage_size": 0,
          "storage_paid": 0,
          "volume": 0.014924,
          "fee": 0.001792,
          "reward": 0,
          "deposit": 0,
          "burned": 0,
          "is_internal": false,
          "has_data": false,
          "days_destroyed": 0.000083,
          "sender": "tz1bd5Pn5DxPinvCtkeJmoneyYiLeUebvUa5",
          "receiver": "tz1ekJGKM5wvKPMfWfCqXdeydinq3Mv85qHd",
          "branch_id": 888888,
          "branch_height": 888887,
          "branch_depth": 1,
          "branch": "BLv7JH7gMfVqbnMQ6GsqSfXvRu5bKeVZTCCRKqzrz9WyjLYfKtG"
        },
        ...
      ]
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 974156,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/tezos/operation/ooe4aYfzRkGUS4UdXeRThNCsv5NkqeMLdKtfL7bzL3y7TGZzgGE
Raw account dataReturns raw account data from our tzindex instance. See https://github.com/blockwatch-cc/tzindex/blob/master/README.md for field descriptions, but mostly they are self-describing.

Endpoint:

https://api.blockchair.com/{:xtz_chain}/raw/account/{:address}₀
Where:

{:xtz_chain} can only be tezos
{:address}ᵢ is the address
Output:

data contains an associative array:

data.{:address}ᵢ.account — account information.
Example output:

https://api.blockchair.com/tezos/raw/account/tz1ekJGKM5wvKPMfWfCqXdeydinq3Mv85qHd:

{
  "data": {
    "tz1ekJGKM5wvKPMfWfCqXdeydinq3Mv85qHd": {
      "account": {
        "address": "tz1ekJGKM5wvKPMfWfCqXdeydinq3Mv85qHd",
        "address_type": "ed25519",
        "delegate": "tz1NEKxGEHsFufk87CVZcrqWu8o22qh46GK6",
        "manager": "",
        "pubkey": "edpktp1ih5KKrct18BgCS5inC3sJf3EKrSAAEa4poQiH6G7CeuaGaY",
        "first_in": 836128,
        "first_out": 836134,
        "last_in": 965984,
        "last_out": 965988,
        "first_seen": 836128,
        "last_seen": 965988,
        "delegated_since": 965988,
        "delegate_since": 0,
        "first_in_time": "2020-02-22T23:33:26Z",
        "first_out_time": "2020-02-22T23:39:26Z",
        "last_in_time": "2020-05-24T05:39:34Z",
        "last_out_time": "2020-05-24T05:43:34Z",
        "first_seen_time": "2020-02-22T23:33:26Z",
        "last_seen_time": "2020-05-24T05:43:34Z",
        "delegated_since_time": "2020-05-24T05:43:34Z",
        "delegate_since_time": "0001-01-01T00:00:00Z",
        "total_received": 126.580209,
        "total_sent": 27.58424,
        "total_burned": 0.257,
        "total_fees_paid": 0.0275,
        "total_rewards_earned": 0,
        "total_fees_earned": 0,
        "total_lost": 0,
        "frozen_deposits": 0,
        "frozen_rewards": 0,
        "frozen_fees": 0,
        "unclaimed_balance": 0,
        "spendable_balance": 98.711469,
        "total_balance": 98.711469,
        "delegated_balance": 0,
        "total_delegations": 0,
        "active_delegations": 0,
        "is_funded": true,
        "is_activated": false,
        "is_vesting": false,
        "is_spendable": true,
        "is_delegatable": false,
        "is_delegated": true,
        "is_revealed": true,
        "is_delegate": false,
        "is_active_delegate": false,
        "is_contract": false,
        "blocks_baked": 0,
        "blocks_missed": 0,
        "blocks_stolen": 0,
        "blocks_endorsed": 0,
        "slots_endorsed": 0,
        "slots_missed": 0,
        "n_ops": 14,
        "n_ops_failed": 0,
        "n_tx": 10,
        "n_delegation": 3,
        "n_origination": 0,
        "n_proposal": 0,
        "n_ballot": 0,
        "token_gen_min": 3,
        "token_gen_max": 26171,
        "grace_period": 0,
        "staking_balance": 0,
        "rolls": 0,
        "rich_rank": 33881,
        "traffic_rank": 0,
        "flow_rank": 0,
        "last_bake_height": 0,
        "last_bake_block": "",
        "last_bake_time": "0001-01-01T00:00:00Z",
        "last_endorse_height": 0,
        "last_endorse_block": "",
        "last_endorse_time": "0001-01-01T00:00:00Z",
        "next_bake_height": 0,
        "next_bake_priority": 0,
        "next_bake_time": "0001-01-01T00:00:00Z",
        "next_endorse_height": 0,
        "next_endorse_time": "0001-01-01T00:00:00Z",
        "delegate_account": {
          "address": "tz1NEKxGEHsFufk87CVZcrqWu8o22qh46GK6",
          "address_type": "ed25519",
          "delegate": "tz1NEKxGEHsFufk87CVZcrqWu8o22qh46GK6",
          "manager": "",
          "pubkey": "edpkthjojh2oARHALyYMfb7CtCjcr1FxknAyRVPCSJQXXmB3mEpTaq",
          "first_in": 787242,
          "first_out": 787244,
          "last_in": 974156,
          "last_out": 974156,
          "first_seen": 787242,
          "last_seen": 974156,
          "delegated_since": 0,
          "delegate_since": 787244,
          "first_in_time": "2020-01-19T17:54:08Z",
          "first_out_time": "2020-01-19T17:56:08Z",
          "last_in_time": "2020-05-29T22:40:38Z",
          "last_out_time": "2020-05-29T22:40:38Z",
          "first_seen_time": "2020-01-19T17:54:08Z",
          "last_seen_time": "2020-05-29T22:40:38Z",
          "delegated_since_time": "0001-01-01T00:00:00Z",
          "delegate_since_time": "2020-01-19T17:56:08Z",
          "total_received": 187327.25126,
          "total_sent": 8026.499705,
          "total_burned": 0.269,
          "total_fees_paid": 0.012091,
          "total_rewards_earned": 9020.066654,
          "total_fees_earned": 6.466546,
          "total_lost": 0,
          "frozen_deposits": 100544,
          "frozen_rewards": 3301.666664,
          "frozen_fees": 2.432551,
          "unclaimed_balance": 0,
          "spendable_balance": 84478.904449,
          "total_balance": 185025.337,
          "delegated_balance": 1360415.547819,
          "total_delegations": 4665,
          "active_delegations": 2909,
          "is_funded": true,
          "is_activated": false,
          "is_vesting": false,
          "is_spendable": true,
          "is_delegatable": false,
          "is_delegated": false,
          "is_revealed": true,
          "is_delegate": true,
          "is_active_delegate": true,
          "is_contract": false,
          "blocks_baked": 117,
          "blocks_missed": 1,
          "blocks_stolen": 0,
          "blocks_endorsed": 3433,
          "slots_endorsed": 3486,
          "slots_missed": 64,
          "n_ops": 3459,
          "n_ops_failed": 0,
          "n_tx": 21,
          "n_delegation": 1,
          "n_origination": 0,
          "n_proposal": 0,
          "n_ballot": 1,
          "token_gen_min": 3,
          "token_gen_max": 25443,
          "grace_period": 243,
          "staking_balance": 1545440.884819,
          "rolls": 193,
          "rich_rank": 397,
          "traffic_rank": 0,
          "flow_rank": 0,
          "last_bake_height": 0,
          "last_bake_block": "",
          "last_bake_time": "0001-01-01T00:00:00Z",
          "last_endorse_height": 0,
          "last_endorse_block": "",
          "last_endorse_time": "0001-01-01T00:00:00Z",
          "next_bake_height": 0,
          "next_bake_priority": 0,
          "next_bake_time": "0001-01-01T00:00:00Z",
          "next_endorse_height": 0,
          "next_endorse_time": "0001-01-01T00:00:00Z"
        }
      }
    }
  },
  "context": {
    "code": 200,
    "source": "D",
    "time": 0.49178099632263184,
    "results": 1,
    "state": 974165,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/tezos/account/tz1ekJGKM5wvKPMfWfCqXdeydinq3Mv85qHd
Raw data endpoints for EOSRaw block dataReturns raw block data directly from our node. Please note that we're not running a full history node for EOS, thus we store only the most recent blocks.

Endpoint:

https://api.blockchair.com/{:eos_chain}/raw/block/{:height}₀
Where:

{:eos_chain} can only be eos
{:height}ᵢ is the block height (integer value), also known as block id
Output:

data contains an associative array:

data.{:id}ᵢ.block — raw block data with its transactions.
Example output:

https://api.blockchair.com/eos/raw/block/125637913:

{
  "data": {
    "125637913": {
      "block": {
        "timestamp": "2020-06-12T11:20:08.000",
        "producer": "blockpooleos",
        "confirmed": 0,
        "previous": "077d15183aebac5f1319426b44746fdb1340ae8bc922a630392f226ecd83f910",
        "transaction_mroot": "7345d598bc85d6a15984f0d79129dcd5b8597b080c93799d24719765213e83a3",
        "action_mroot": "c21a6d34f8130b1c8562dc028564d33d254969197e22b8acbfac5d67506a5ff0",
        "schedule_version": 1717,
        "new_producers": null,
        "producer_signature": "SIG_K1_KaUZPdiu9f1vWhsJqUzAvF8aWRxqrJdmrXK8TxBhvZq6UbuC85VDNuR3ec9aLwaDscVYPpmZJ5PiaWtMNeEvk22mbea41W",
        "transactions": [
          {
            "status": "expired",
            "cpu_usage_us": 0,
            "net_usage_words": 0,
            "trx": "a8396ac4623d4d420196289d2b3b079c561bdc2eaf514a77c84fb5d54f5fd443"
          },
          {
            "status": "expired",
            "cpu_usage_us": 0,
            "net_usage_words": 0,
            "trx": "4e4c8b99af74ba79b165f3d3a2c2861adcf43c2fe4f4fd9cfb066a635bf2f4ff"
          },
          {
            "status": "executed",
            "cpu_usage_us": 7561,
            "net_usage_words": 12,
            "trx": {
              "id": "47a31d96705c50062b5a5cc98bb6371154accd1b56fb51b0dc70747b183107f5",
              "signatures": [
                "SIG_K1_KW2xHSjt34Nh1zBkNhwqgHKH3CciZNmGoAJ7YNifAPKCGkbgEQdfhV82Q4goVdFmrHt9ntbkQqCfBBWmCMfZFXhKsgFzNA"
              ],
              "compression": "none",
              "packed_context_free_data": "",
              "context_free_data": [],
              "packed_trx": "1d65e35e0a15601c8fe10000000001c0a88fca546773ad0000000000000090015048187a55f63de50000000000a0a693010000",
              "transaction": {
                "expiration": "2020-06-12T11:21:01",
                "ref_block_num": 5386,
                "ref_block_prefix": 3784252512,
                "max_net_usage_words": 0,
                "max_cpu_usage_ms": 0,
                "delay_sec": 0,
                "context_free_actions": [],
                "actions": [
                  {
                    "account": "pptqipaelyog",
                    "name": "m",
                    "authorization": [
                      {
                        "actor": "woyzgpfu3145",
                        "permission": "mine"
                      }
                    ],
                    "data": {
                      "actor": ""
                    },
                    "hex_data": "00"
                  }
                ]
              }
            }
          },
          ...
        ],
        "id": "077d1519d82a4a20278019953fb1788fd1c81074f4b754d29f062a93ca0cd468",
        "block_num": 125637913,
        "ref_block_prefix": 2501476391
      }
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 125860293,
    "request_cost": 1,
    ...
  }
}


https://api.blockchair.com/eos/raw/block/1 (pruned block):

{
  "data": null,
  "context": {
    "code": 400,
    "error": "Unknown Block"
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/eos/block/125637913 (may not be available due to pruning)
Raw transaction dataReturns raw transaction data directly from our node. Please note that we're not running a full history node for EOS, thus we store only the most recent transactions.

Endpoints:

https://api.blockchair.com/{:eos_chain}/raw/transaction/{:hash}
https://api.blockchair.com/{:eos_chain}/raw/transaction/({:block_height},{:hash})
Where:

{:eos_chain} can only be eos
{:hash} is the transaction hash
{:block_height} is the block height (specifying it returns transaction faster)
Output:

data contains an associative array:

data.{:id}ᵢ.transaction — transaction data
Example output:

https://api.blockchair.com/eos/raw/transaction/(125637913,a8396ac4623d4d420196289d2b3b079c561bdc2eaf514a77c84fb5d54f5fd443):

{
  "data": {
    "a8396ac4623d4d420196289d2b3b079c561bdc2eaf514a77c84fb5d54f5fd443": {
      "id": "a8396ac4623d4d420196289d2b3b079c561bdc2eaf514a77c84fb5d54f5fd443",
      "trx": {
        "receipt": {
          "status": "expired",
          "cpu_usage_us": 0,
          "net_usage_words": 0,
          "trx": [
            0,
            "a8396ac4623d4d420196289d2b3b079c561bdc2eaf514a77c84fb5d54f5fd443"
          ]
        }
      },
      "block_time": "2020-06-12T11:20:08.000",
      "block_num": 125637913,
      "last_irreversible_block": 125862330,
      "traces": []
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 125862660,
    "request_cost": 1,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/eos — navigate to the latest block and its transactions
Raw account dataReturns raw account data directly from our node.

Endpoint:

https://api.blockchair.com/{:eos_chain}/raw/account/{:address}
Where:

{:eos_chain} can only be eos
{:address} is the account name
Possible options:

?actions=true displays 10 most recent actions for this account
Output:

data contains an associative array:

data.{:address}.account — account information
data.{:address}.actions — the list of recent actions if ?actions=true is set, otherwise null
Example output:

https://api.blockchair.com/eos/raw/account/blockpooleos?actions=true:

{
  "data": {
    "blockpooleos": {
      "account": {
        "account_name": "blockpooleos",
        "head_block_num": 127937449,
        "head_block_time": "2020-06-25T18:47:45.500",
        "privileged": false,
        "last_code_update": "1970-01-01T00:00:00.000",
        "created": "2019-07-13T03:45:22.500",
        "core_liquid_balance": "2771.4153 EOS",
        "ram_quota": 17559,
        "net_weight": 150100,
        "cpu_weight": 1050703,
        "net_limit": {
          "used": 105,
          "available": 15609531,
          "max": 15609636
        },
        "cpu_limit": {
          "used": 464,
          "available": 9039,
          "max": 9503
        },
        "ram_usage": 4795,
        "permissions": [
          {
            "perm_name": "active",
            "parent": "owner",
            "required_auth": {
              "threshold": 1,
              "keys": [
                {
                  "key": "EOS6nRvuhb9gJju7tehyFdotEDVn2xwWKfhJWwyPMjG9deaCQxpxT",
                  "weight": 1
                }
              ],
              "accounts": [],
              "waits": []
            }
          },
          {
            "perm_name": "claimer",
            "parent": "active",
            "required_auth": {
              "threshold": 1,
              "keys": [
                {
                  "key": "EOS6gZzNjmzWTJX2LTBrtaXB2sczuna3bQWX4YPaokVG8zBBaYP8p",
                  "weight": 1
                }
              ],
              "accounts": [],
              "waits": []
            }
          },
          {
            "perm_name": "owner",
            "parent": "",
            "required_auth": {
              "threshold": 1,
              "keys": [
                {
                  "key": "EOS71Q9ZUPh6hJ8GamZ1T9vERR4dQt5aMG5jHMESGUBPNWZwQBMq5",
                  "weight": 1
                }
              ],
              "accounts": [],
              "waits": []
            }
          }
        ],
        "total_resources": {
          "owner": "blockpooleos",
          "net_weight": "15.0100 EOS",
          "cpu_weight": "105.0703 EOS",
          "ram_bytes": 16159
        },
        "self_delegated_bandwidth": {
          "from": "blockpooleos",
          "to": "blockpooleos",
          "net_weight": "5.0100 EOS",
          "cpu_weight": "5.0703 EOS"
        },
        "refund_request": null,
        "voter_info": {
          "owner": "blockpooleos",
          "proxy": "genpoolproxy",
          "producers": [],
          "staked": 101013,
          "last_vote_weight": "153840349310.80059814453125000",
          "proxied_vote_weight": "0.00000000000000000",
          "is_proxy": 0,
          "flags1": 0,
          "reserved2": 0,
          "reserved3": "0 "
        },
        "rex_info": null
      },
      "actions": [
        {
          "global_action_seq": "162018041028",
          "account_action_seq": 33,
          "block_num": 127926696,
          "block_time": "2020-06-25T17:18:08.000",
          "action_trace": {
            "action_ordinal": 6,
            "creator_action_ordinal": 1,
            "closest_unnotified_ancestor_action_ordinal": 1,
            "receipt": {
              "receiver": "eosio.token",
              "act_digest": "3e8e32ac2f3e9a4e9fe05c497016e8a2aad839f6f0dc700e1aa4be7fe1737436",
              "global_sequence": "162018041028",
              "recv_sequence": "39120141509",
              "auth_sequence": [
                [
                  "blockpooleos",
                  2436
                ],
                [
                  "eosio.vpay",
                  163338
                ]
              ],
              "code_sequence": 4,
              "abi_sequence": 4
            },
            "receiver": "eosio.token",
            "act": {
              "account": "eosio.token",
              "name": "transfer",
              "authorization": [
                {
                  "actor": "eosio.vpay",
                  "permission": "active"
                },
                {
                  "actor": "blockpooleos",
                  "permission": "active"
                }
              ],
              "data": {
                "from": "eosio.vpay",
                "to": "blockpooleos",
                "quantity": "588.1989 EOS",
                "memo": "producer vote pay"
              },
              "hex_data": "0080377503ea305580a98a945688683c85c059000000000004454f53000000001170726f647563657220766f746520706179"
            },
            "context_free": false,
            "elapsed": 82,
            "console": "",
            "trx_id": "999420909e47b8d3afe57b80c93c3317ea6f9103b8dbbec9572ebb8ecf073a45",
            "block_num": 127926696,
            "block_time": "2020-06-25T17:18:08.000",
            "producer_block_id": "07a001a82d080f2ca57f6b4f2b0c33a32953d234156349b4434c5c56a2870967",
            "account_ram_deltas": [],
            "except": null,
            "error_code": null
          }
        },
        ...
      ]
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 127937448,
    "price_usd": 2.49,
    "request_cost": 2,
    ...
  }
}


Request cost formula:

1 + 1 if the ?actions=true option is used

Explore visualization on our front-end:

https://blockchair.com/eos/account/blockpooleos
Infinitable endpoints (SQL-like queries)These endpoints allow you to filter, sort, and aggregate blockchain data. The output is database rows. Unlike dashboard and raw endpoints, all infinitable endpoints listed in this section can be considered as just one endpoint as it has the same options and the same output structure across different blockchains and entities. Here it is: https://api.blockchair.com/{:table}{:query}.

Just don't ask why do we call that infinitables… Infinite tables? Maybe.

List of tables ({:table}) our engine supports:

{:btc_chain}/blocks
{:btc_chain}/transactions
{:btc_chain}/mempool/transactions
{:btc_chain}/outputs
{:btc_chain}/mempool/outputs
{:btc_chain}/addresses
{:eth_chain}/blocks
{:eth_chain}/uncles
{:eth_chain}/transactions
{:eth_chain}/mempool/transactions
{:eth_chain}/calls
{:xin_chain}/raw/snapshots
{:xin_chain}/raw/mintings
{:xin_chain}/raw/nodes
{:xtz_chain}/raw/blocks
bitcoin/omni/properties
ethereum/erc-20/tokens
ethereum/erc-20/transactions
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, or bitcoin/testnet
{:eth_chain} can be only ethereum
{:xin_chain} can be only mixin
{:xtz_chain} can be only tezos
Note on mempool tables: to speed up some requests, our architecture have separate tables ({:chain}/mempool/{:entity}) for unconfirmed transactions. Unlike with dashboard endpoints which search entities like transactions in both the blockchain and the mempool, infinitable endpoints don't do that.

The {:query} is optional; in case it's not included in the request, the default sorting applied to the table (for most of the tables it's descending by some id) and the 10 top results are returned.

Here are some example queries without using {:query}:

https://api.blockchair.com/bitcoin/blocks
https://api.blockchair.com/bitcoin-cash/mempool/transactions
The output skeleton is the following:

{
  "data": [
    {
      ... // row 1 data
    },
    ...
    {
      ... // row 10 data
    },    
  ],
  "context": {
    "limit": 10, // the default limit of 10 is applied
    "offset": 0, // no offset has been set
    "rows": 10, // the response contains 10 rows
    "total_rows": N, // but there are N rows in the table matching {:query} (total number of rows if it's not set)
    "state": S, // the latest block number on the blockchain
    ...
  }
}


Further documentation sections describe fields returned for different tables. Some of the dashboard endpoints are using the same fields as well.

How to build a query

The process is somewhat similar to constructing an SQL query, but there are less possibilities of course.

Here are the possible options:

Setting filters — the ?q= section — allows you to set a number of filters (SQL "WHERE")
Setting sortings — the ?s= section — allows you to sort the table (SQL "ORDER BY ")
Setting the limit — the ?limit= section — limits the number of output results (SQL "LIMIT")
Setting the offset — the ?offset= section — offsets the result set (SQL "OFFSET")
Aggregating data — the ?a= sections — allows to group by some columns and calculate using function (SQL "GROUP BY" and functions such as count, max, etc.)
The table (SQL "FROM") is set in the {:table} section of the API request
The order of applying various sections is irrelevant.

A quick example: https://api.blockchair.com/bitcoin/blocks?q=time(2019-01),guessed_miner(AntPool)&s=size(desc)&limit=1. This request:

Makes a query to the bitcoin/blocks table
Filters the table by time (finds all blocks mined in January 2019) and miner (AntPool)
Sorts the table by block size descending
Limits the number of results to 1
What this example does is finding the largest block mined by AntPool in January 2019.

Another example using aggregation: https://api.blockchair.com/bitcoin/blocks?q=time(2019-01-01..2019-01-31)&a=guessed_miner,count()&s=count()(desc). This request:

As the previous one, makes a query to the bitcoin/blocks table
Filters the table by time (in a bit different way, but it's an invariant of time(2019-01))
Groups the table by miner, and calculating the number of rows for each miner using the count() function
Sorts the result set by the number of blocks each miner has found
The ?q= section (filters)

You can use filters as follows: ?q=field(expression)[,field(expression)]..., where field is the column which is going to be filtered, and expression is a filtering expression. These are possilble filtering expressions:

equals — equality — example: https://api.blockchair.com/bitcoin/blocks?q=id(0) finds information about block 0
left.. — non-strict inequality — example: https://api.blockchair.com/bitcoin/blocks?q=id(1..) finds information about block 1 and above
left... — strict inequality — example: https://api.blockchair.com/bitcoin/blocks?q=id(1...) finds information about block 2 and above
..right — non-strict inequality — example: https://api.blockchair.com/bitcoin/blocks?q=id(..1) finds information about blocks 0 and 1
...right — strict inequality — example: https://api.blockchair.com/ bitcoin/blocks?q=id(...1) finds information only about block 0
left..right — non-strict inequality — example: https://api.blockchair.com/bitcoin/blocks?q=id(1..3) finds information about blocks 1, 2 and 3
left...right — strict inequality — example: https://api.blockchair.com/bitcoin/blocks?q=id(1...3) finds information about block 2 only
~like — occurrence in a string (SQL LIKE '%str%' operator) — example: https://api.blockchair.com/bitcoin/blocks?q=coinbase_data_bin(~hello) finds all blocks which contain hello in coinbase_data_bin
^like — occurrence at the beginning of a string (SQL LIKE 'str%' operator, also further mentioned as the STARTS WITH operator) — example: https://api.blockchair.com/bitcoin/blocks?q=coinbase_data_hex(^00) finds all blocks for which coinbase_data_hex begins with 00
For timestamp type fields, values can be specified in the following formats:

YYYY-MM-DD HH:ii:ss
YYYY-MM-DD (converted to the YYYY-MM-DD 00:00:00..YYYY-MM-DD 23:59:59 range)
YYYY-MM (converted to the YYYY-MM-01 00:00:00..YYYY-MM-31 23:59:59 range)
Inequalities are also supported for timestamps, the left and right values must be in the same format, e.g.: https://api.blockchair.com/bitcoin/blocks?q=time(2009-01-03..2009-01-31).

Ordinarilly if there's time column in the table, there should also be date, but there won't be possible to search over the date column directly, but you can search by date using the time column as follows: ?q=time(YYYY-MM-DD)

If the left value in an inequality is larger than the right, they switch places.

If you want to list several filters, you need to separate them using commas like this: https://api.blockchair.com/bitcoin/blocks?q=id(500000..),coinbase_data_bin(~hello)

We're currently testing support for NOT and OR operators (this is an alpha test feature, so we don't guarantee there won't be sudden changes):

The NOT operator is added before the expression for it to be inverted, e.g., https://api.blockchair.com/bitcoin/blocks?q=not,id(1..) returns the block 0
The OR operator can be put between two expressions and takes precedence (like it's when two expressions around OR are wrapped in parentheses), e.g., https://api.blockchair.com/bitcoin/blocks?q=id(1),or,id(2) returns information about blocks 1 and 2.
Maximum guaranteed supported number of filters in one query: 5.

The ?s= section (sortings)

Sorting can be used as follows: ?s=field(direction)[,field(direction)]..., where direction can be either asc for sorting in ascending order, or desc for sorting in descending order.

Here's a basic example: https://api.blockchair.com/bitcoin/blocks?s=id(asc) — sorts blocks by id ascending

If you need to apply several sortings, you can list them separating with commas. The maximum guaranteed number of sortings is 2.

The ?limit= section (limit)

Limit is used like this: ?limit=N, where N is a natural number from 1 to 100. The default is 10. context.limit takes the value of the set limit. In some cases (when using some specific "increased efficiency" filters described below) LIMIT may be ignored, and in such cases the API returns the entire result set, and context.limit will be set to NULL.

A basic example: https://api.blockchair.com/bitcoin/blocks?limit=1 — returns the latest block data (as the default sorting for this table is by block height descending)

Note that increasing the limit leads to an increase in the request cost (see the formula below).

The ?offset= section (offset)

Offset can be used as a paginator, e.g., ?offset=10 returns the next 10 rows. context.offset takes the value of the set offset. The maximum value is 10000. If you need just the last page, it's easier and quicker to change the direction of the sorting to the opposite.

Important: while iterating through the results, it is quite likely that the number of rows in the database will increase because new blocks had found while you were paginating. To avoid that, you may, for example, add an additional condition that limits the block id to the value obtained in context.state in the first query.

Here's an example. Suppose we would like to receive all the latest transactions from the Bitcoin blockchain with amount more than $1M USD. The following request should be perfomed for this:

https://api.blockchair.com/bitcoin/transactions?q=output_total_usd(10000000..)&s=id(desc)
Now, the script with this request to the API for some reason did not work for a while, or a huge amount of transactions worth more than $1 million appeared. With the standard limit of 10 results, the script skipped some transactions. Then firstly we should make the same request once again:

https://api.blockchair.com/bitcoin/transactions?q=output_total_usd(10000000..)&s=id(desc)
From the response we put context.state in a variable {:state}, and further to obtain next results we apply offset and set a filter to "fix" the blockchain state:

https://api.blockchair.com/bitcoin/transactions?q=output_total_usd(10000000..),block_id(..{:state})&s=id(desc)&offset=10
Next we increase the offset value until getting a data set with the transaction that we already knew about.

The ?a= section (data aggregation)

Warning: data aggregation is currently in beta stage on our platform.

To use aggregation, put the fields by which you'd like to group by (zero, one, or several), and fields (at least one) which you'd like to calculate using some aggregate function under the ?a= section. You can also sort the results by one of the fields included in the ?a= section (asc or desc) using the ?s= section, and apply additional filters using the ?q= section.

Let's start with some examples:

https://api.blockchair.com/bitcoin/blocks?a=year,count() — get the total number of Bitcoin blocks by year
https://api.blockchair.com/bitcoin/transactions?a=month,median(fee_usd) — get the median Bitcoin transaction fees by month
https://api.blockchair.com/ethereum/blocks?a=miner,sum(generation)&s=sum(generation)(desc) — get the list of Ethereum miners (except uncle miners) and sort it by the total amount of coins minted
https://api.blockchair.com/bitcoin-cash/blocks?a=sum(fee_total_usd)&q=id(478559..) — calculate how much miners have collected in fees since the fork
In case the table you're aggregating over has a time column, it's always possible to group by the following virtual columns:

date
week (yields YYYY-MM-DD corresponding to Mondays)
month (yields YYYY-MM )
year (yields YYYY )
Supported functions:

avg({:field})
median({:field})
min({:field})
max({:field})
sum({:field})
count()
There are also two special functions:

price({:ticker1}_{:ticker2})— yields the price; works only if you group by date (or one of: week, month, year). For example, it makes it possible to build a chart showing correlation between price and transaction count: https://api.blockchair.com/bitcoin/blocks?a=month,sum(transaction_count),price(btc_usd). Supported tickers: usd, btc, bch, eth, ltc, bsv, doge, dash, grs
f({:expression}) where {:expression} is {:function_1}{:operator}{:function_2}, where {:function_1} and {:function_2} are the supported functions from the above list, and {:operator} is one of the following: +, -, /, * (basic math operators). It's useful to calculate percentages. Example: https://api.blockchair.com/bitcoin/blocks?a=date,f(sum(witness_count)/sum(transaction_count))&q=time(2017-08-24..) — calculates SegWit adoption (by dividing the SegWit transaction count by the total transaction count)
There's also a special ?aq= section which have the following format: ?aq={:i}:{:j} — it applies ith filter to jth function (special functions don't count); after that ith filter has no effect on filtering the table. It's possible to have multiple conditions by separating them with a ;. Here's an example: https://api.blockchair.com/bitcoin/outputs?a=date,f(count()/count())&q=type(nulldata),time(2019-01)&aq=0:0 — calculates the percentage of nulldata outputs in January 2019 by day. The 0th condition (type(nulldata)) is applied to the 0th function (count()) and removed afterwards.

If you use the ?a= section, the default limit is 10000 instead of 10.

It's possible to export aggregated data to TSV or CSV format using &export=tsv or &export=csv accordingly. Example: https://api.blockchair.com/bitcoin/transactions?a=date,avg(fee_usd)&q=time(2019-01-01..2019-04-01)&export=tsv. Please note that data export is only available for aggregated data. If you need to export the whole table or its part, please use Database dumps.

Warning: the f({:expression}) special function, the ?aq= section, and TSV/CSV export are currently in alpha stage on our platform. Special function price({:ticker1}_{:ticker2}) can't be used within special function f({:expression}). There are some known issues when sorting if f({:expression}) is present. There are some known issues when applying the ?aq= section to inequality filters.

Fun example

The following requests return the same result:

https://api.blockchair.com/bitcoin/blocks?a=sum(reward)
https://api.blockchair.com/bitcoin/transactions?a=sum(output_total)&q=is_coinbase(true)
https://api.blockchair.com/bitcoin/outputs?a=sum(value)&q=is_from_coinbase(true)
Export data to TSV or CSV

Please use our Database dumps feature instead of the API (see https://blockchair.com/dumps for documentation)

Front-end visualizations

Filters and sortings: https://blockchair.com/bitcoin/blocks
Data aggregation: https://blockchair.com/charts
Request cost formula for infinitables

Cost is calculated by summing up the following values:

The base cost for the table (see the table below): 2, 5, or 10
Applying a filter costs 1
Applying a sorting costs 0
Applying an offset costs 0
Applying an aggregation costs 10
Applying a limit over the default multiplies the summed cost by 1 + 0.01 * number_of_rows_over_the_default_limit. If the defaut limit is 10 and the base cost is 2, requesting 100 rows will cost 2 * (1 + 0.01 * 90) = 3.8.

TableBase cost{:btc_chain}/blocks2{:btc_chain}/transactions5{:btc_chain}/mempool/transactions2{:btc_chain}/outputs10{:btc_chain}/mempool/outputs2{:btc_chain}/addresses2{:eth_chain}/blocks2{:eth_chain}/uncles2{:eth_chain}/transactions5{:eth_chain}/mempool/transactions2{:eth_chain}/calls10{:eth_chain}/addresses2{:xin_chain}/raw/snapshots1{:xin_chain}/raw/mintings1{:xin_chain}/raw/nodes1bitcoin/omni/properties10ethereum/erc-20/tokens2ethereum/erc-20/transactions5
Table descriptions

Further the documentation describes each of the supported tables. Each documentation section contains a general description, and a table listing the table columns (fields) in the following format:

ColumnTypeDescriptionQ?S?A?C?Column nameColumn typeColumn descriptionIs it possible to filter by this column?Is it possible to sort by this column?Is it possible to group by this column?Is it possible to apply aggregation functions (like sum) to this column?
The following marks are possible for the Q? column:

= — possible to use equalities only
* — possible to use both equalities and inequalities
⌘ — possible to use special format (applies to timestamp fields)
~ — possible to use the LIKE operator
^ — possible to use the STARTS WITH operator
*≈ — possible to use both equalities and inequalities, may return some results which are a bit out of the set range (this is used to swiftly search over the Ethereum blockchain that uses too long wei numbers for transfer amounts)
For the S?, A?, and C? columns it's either + (which means "yes") or nothing. ⌘ means some additional options may be available (in case of aggregation it may either mean additional fields like year are available, or in case of functions — only min and max are available).

There can also be synthetic columns which aren't shown in the response, but you can still filter or sort by them. If there are any, they will be listed in a separate table.

Inifinitable endpoints for Bitcoin-like blockchains (Bitcoin, Bitcoin Cash, Litecoin, Bitcoin SV, Dogecoin, Dash, Groestlcoin, Zcash, eCash, Bitcoin Testnet)blocks tableEndpoint:

https://api.blockchair.com/{:btc_chain}/blocks?{:query}
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:query} is the query against the table (how to build a query)
Output:

data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?idintBlock height*+⌘hashstring [0-9a-f]{64}Block hash=+datestring YYYY-MM-DDBlock date (UTC)⌘timestring YYYY-MM-DD HH:ii:ssBlock time (UTC)⌘+median_timestring YYYY-MM-DD HH:ii:ssBlock median time (UTC)+sizeintBlock size in bytes*++stripped_size †intBlock size in bytes without taking witness information into account*++weight †intBlock weight in weight units*++versionintVersion field*++version_hexstring [0-9a-f]*Version field in hexversion_bitsstring [01]{30}Version field in binary formatmerkle_root[0-9a-f]{64}Merkle root hashfinal_sapling_root §[0-9a-f]{64}Sapling root hashnonceintNonce value*+solution §[0-9a-f]*Solution valueanchor §[0-9a-f]*Anchor valuebitsintBits field*+difficultyfloatDifficulty*++chainworkstring [0-9a-f]{64}Chainwork fieldcoinbase_data_hexstring [0-9a-f]*Hex information contained in the input of the coinbase transaction^transaction_countintNumber of transactions in the block*++witness_count †intNumber of transactions in the block containing witness information*++input_countintNumber of inputs in all block transactions*++output_countintNumber of outputs in all block transactions*++input_totalintSum of inputs in satoshi*++input_total_usdfloatSum of outputs in USD*++output_totalintSum of outputs in satoshi*++output_total_usdfloatSum of outputs in USD*++fee_totalintTotal fee in Satoshi*++fee_total_usdfloatTotal fee in USD*++fee_per_kbfloatFee per kilobyte (1000 bytes of data) in satoshi*++fee_per_kb_usdfloatFee for kilobyte of data in USD*++fee_per_kwu †floatFee for 1000 weight units of data in satoshi*++fee_per_kwu_usd †floatFee for 1000 weight units of data in USD*++cdd_totalfloatNumber of coindays destroyed by all transactions of the block*++generationintMiner reward for the block in satoshi*++generation_usdfloatMiner reward for the block in USD*++rewardintMiner total reward (reward + total fee) in satoshi*++reward_usdfloatMiner total reward (reward + total fee) in USD*++guessed_minerstring .*The supposed name of the miner who found the block (the heuristic is based on coinbase_data_bin and the addresses to which the reward goes)=++is_aux ‡booleanWhether a block was mined using AuxPoW=+cbtx ※string .*Coinbase transaction data (encoded JSON)shielded_value_delta_total §intAmount transferred into the shielded pool*++
Additional synthetic columns

ColumnTypeDescriptionQ?S?A?C?coinbase_data_binstring .*Text (UTF-8) representation of coinbase data. Allows you to use the LIKE operator: ?q=coinbase_data_bin(~hello)~
Notes:

increased efficiency method applies if querying id and hash columns using the equals operator
† — only for Bitcoin, Litecoin, Groestlcoin, and Bitcoin Testnet (SegWit data)
‡ — only for Dogecoin
※ — only for Dash
§ — only for Zcash
The default sorting — id DESC
Example output:

https://api.blockchair.com/bitcoin/blocks?limit=1:

{
  "data": [
    {
      "id": 599954,
      "hash": "0000000000000000000a405e0eb599136580eed78682bfe6648c5f7b6f81a9cb",
      "date": "2019-10-18",
      "time": "2019-10-18 17:16:18",
      "median_time": "2019-10-18 16:41:08",
      "size": 1291891,
      "stripped_size": 900520,
      "weight": 3993451,
      "version": 536870912,
      "version_hex": "20000000",
      "version_bits": "100000000000000000000000000000",
      "merkle_root": "800c37c217eb0b53f8e5144602b8605876e12939f85d350e3d677fe89b8da476",
      "nonce": 318379413,
      "bits": 387294044,
      "difficulty": 13008091666972,
      "chainwork": "0000000000000000000000000000000000000000096007e2e467d315afd86f91",
      "coinbase_data_hex": "039227090452f3a95d2f706f6f6c696e2e636f6d2ffabe6d6d95254907ac051f810232ebdb4865ce204353bc59bbd533e40fb1cd3d29b8e06701000000000000007570ce1586aa43da2aabdab74791c8cd10d4473db1006158555400000000",
      "transaction_count": 2157,
      "witness_count": 1320,
      "input_count": 6564,
      "output_count": 4969,
      "input_total": 255590274198,
      "input_total_usd": 20610300,
      "output_total": 256840274198,
      "output_total_usd": 20711100,
      "fee_total": 14959404,
      "fee_total_usd": 1206.3,
      "fee_per_kb": 11583,
      "fee_per_kb_usd": 0.93403,
      "fee_per_kwu": 3744.56,
      "fee_per_kwu_usd": 0.301955,
      "cdd_total": 7884.6687017888,
      "generation": 1250000000,
      "generation_usd": 100798,
      "reward": 1264959404,
      "reward_usd": 102004,
      "guessed_miner": "Poolin"
    }
  ],
  "context": {
    "code": 200,
    "limit": 1,
    "offset": 0,
    "rows": 1,
    "total_rows": 599955,
    "state": 599954,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualizations on our front-end:

https://blockchair.com/bitcoin/blocks
https://blockchair.com/bitcoin-cash/blocks
https://blockchair.com/litecoin/blocks
https://blockchair.com/bitcoin-sv/blocks
https://blockchair.com/dogecoin/blocks
https://blockchair.com/dash/blocks
https://blockchair.com/groestlcoin/blocks
https://blockchair.com/zcash/blocks
https://blockchair.com/ecash/blocks
https://blockchair.com/bitcoin/testnet/blocks
transactions tableEndpoints:

https://api.blockchair.com/{:btc_chain}/transactions?{:query} (for blockchain transactions)
https://api.blockchair.com/{:btc_chain}/mempool/transactions?{:query} (for mempool transactions)
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:query} is the query against the table (how to build a query)
Output:

data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?block_idintThe height (id) of the block containing the transaction*++idintInternal Blockchair transaction id (not related to the blockchain, used for internal purposes)*+hashstring [0-9a-f]{64}Transaction hash=datestring YYYY-MM-DDThe date of the block containing the transaction (UTC)⌘timestring YYYY-MM-DD HH:ii:ssTimestamp of the block containing the transaction (UTC)⌘+sizeintTransaction size in bytes*++weight †intWeight of transaction in weight units*++versionintTransaction version field*++lock_timeintLock time — can be either a block height, or a unix timestamp*+is_coinbasebooleanIs it a coinbase (generating new coins) transaction? (For such a transaction input_count is equal to 1 and means there's a synthetic coinbase input)=+has_witness †booleanIs there a witness part in the transaction (using SegWit)?=+input_countintNumber of inputs*+++output_countintNumber of outputs*+++input_totalintInput value in satoshi*++input_total_usdfloatInput value in USD*++output_totalintOutput value in satoshi*++output_total_usdfloatTotal output value in USD*++feeintFee in satoshi*++fee_usdfloatFee in USD*++fee_per_kbfloatFee per kilobyte (1000 bytes) of data in satoshi*++fee_per_kb_usdfloatFee for kilobyte of data in USD*++fee_per_kwu †floatFee for 1000 weight units of data in satoshi*++fee_per_kwu_usd †floatFee for 1000 weight units of data in USD*++cdd_totalfloatThe number of destroyed coindays*++
Additional Dash-specific columns:

ColumnTypeDescriptionQ?S?A?C?type ※string (enum)Transaction type, one of the following: simple, proregtx, proupservtx, proupregtx, prouprevtx, cbtx, qctx, subtxregister, subtxtopup, subtxresetkey, subtxcloseaccount=+is_instant_lock ※booleanIs instant lock?=is_special ※booleantrue for all transaction types except simple=special_json ※string .*Special transaction data (encoded JSON string)
Additional Zcash-specific columns:

ColumnTypeDescriptionQ?S?A?C?shielded_value_delta §intAmount transferred into the shielded pool*++version_group_id §string [0-9a-f]*Special version field=+is_overwintered §booleanIs overwintered?=+expiry_height §intExpiry height*+join_split_raw §jsonRaw 'v_join_split' valueshielded_input_raw §jsonRaw 'v_shielded_spend' valueshielded_output_raw §jsonRaw 'v_shielded_output' valuebinding_signature §string [0-9a-f]*Binding signature
Notes:

increased efficiency method applies if querying id and hash columns using the equals operator
† — only for Bitcoin, Litecoin, Groestlcoin, and Bitcoin Testnet (SegWit data)
※ — only for Dash
§ — only for Zcash
The default sorting — id DESC
block_id for mempool transactions is -1
Example output:

https://api.blockchair.com/bitcoin/transactions?limit=1:

{
  "data": [
    {
      "block_id": 600573,
      "id": 467508697,
      "hash": "ee13104d4331cad2fff5ab6cd249a9fec940d64df442a6de5f51ea63c34ef8ff",
      "date": "2019-10-22",
      "time": "2019-10-22 19:09:34",
      "size": 250,
      "weight": 672,
      "version": 1,
      "lock_time": 0,
      "is_coinbase": false,
      "has_witness": true,
      "input_count": 1,
      "output_count": 2,
      "input_total": 29340442,
      "input_total_usd": 2408.9,
      "output_total": 29340274,
      "output_total_usd": 2408.89,
      "fee": 168,
      "fee_usd": 0.0137931,
      "fee_per_kb": 672,
      "fee_per_kb_usd": 0.0551723,
      "fee_per_kwu": 250,
      "fee_per_kwu_usd": 0.0205254,
      "cdd_total": 29.154456198211
    }
  ],
  "context": {
    "code": 200,
    "limit": 1,
    "offset": 0,
    "rows": 1,
    "total_rows": 467508698,
    "state": 600573,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualizations on our front-end:

https://blockchair.com/bitcoin/transactions
https://blockchair.com/bitcoin-cash/transactions
https://blockchair.com/litecoin/transactions
https://blockchair.com/bitcoin-sv/transactions
https://blockchair.com/dogecoin/transactions
https://blockchair.com/dash/transactions
https://blockchair.com/groestlcoin/transactions
https://blockchair.com/zcash/transactions
https://blockchair.com/ecash/transactions
https://blockchair.com/bitcoin/testnet/transactions
https://blockchair.com/bitcoin/mempool/transactions
https://blockchair.com/bitcoin-cash/mempool/transactions
https://blockchair.com/litecoin/mempool/transactions
https://blockchair.com/bitcoin-sv/mempool/transactions
https://blockchair.com/dogecoin/mempool/transactions
https://blockchair.com/dash/mempool/transactions
https://blockchair.com/groestlcoin/mempool/transactions
https://blockchair.com/zcash/mempool/transactions
https://blockchair.com/ecash/mempool/transactions
https://blockchair.com/bitcoin/testnet/mempool/transactions
outputs tableEndpoints:

https://api.blockchair.com/{:btc_chain}/outputs?{:query} (input and output data for blockchain transactions)
https://api.blockchair.com/{:btc_chain}/mempool/outputs?{:query} (input and output data for mempool transactions)
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:query} is the query against the table (how to build a query)
Output:

data contains an array of database rows. Rows represent transaction outputs (that also become transaction inputs when they are spent). Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?block_idintId of the block containing the transaction cointaining the output*++transaction_idintInternal Blockchair transaction id (not related to the blockchain, used for internal purposes)*+indexintOutput index in the transaction (from 0)*+transaction_hashstring [0-9a-f]{64}Transaction hashdatestring YYYY-MM-DDDate of the block containing the output (UTC)timestring YYYY-MM-DD HH:ii:ssTimestamp of the block containing the output (UTC)⌘+valueintMonetary value of the output*++value_usdfloatMonetary value of the output in USD*++recipientstring [0-9a-zA-Z\-]*Address or synthetic address of the output recipient (see address types description)=++typestring (enum)Output type, one of the following: pubkey, pubkeyhash, scripthash, multisig, nulldata, nonstandard, witness_v0_scripthash, witness_v0_keyhash, witness_unknown=++script_hexstring [0-9a-f]*Hex value of the output script. Filtering using the STARTS WITH operator is performed for nulldata outputs only.^is_from_coinbasebooleanIs it a coinbase transaction output?=+is_spendablenull or booleanIs it theoretically possible to spend this output? For pubkey and multisig outputs, the existence of the corresponding private key is tested, in that case true and false are the possible values depending on the result of the check. For nulldata outputs it is always false. For other types it is impossible to check trivially, in that case null is yielded.=+isspent | boolean | Has this output been spent? **(`spending* fields below yield null if it is not)** | = | | +`spending_block_idnull or intId of the block containing the spending transaction*++spending_transaction_idnull or intInternal Blockchair transaction id where the output was spent*+spending_indexnull or intInput index in the spending transaction (from 0)*+spending_transaction_hashnull or string [0-9a-f]{64}Spending transaction hashspending_datenull or string YYYY-MM-DDDate of the block, in which the output was spent⌘spending_timenull or string YYYY-MM-DD HH:ii:ssTimestamp of the block in which the output was spent⌘+spending_value_usdnull or floatMonetary value of the output in USD at the time of spending_date*++spending_sequencenull or intSequence field*+spending_signature_hexnull or string [0-9a-f]*Hex value of the spending script (signature)spending_witness †null or stringWitness information (comma-separated, may start with a comma if the first witness element is empty)lifespannull or intThe number of seconds from the time of the output creation (time) to its spending (spending_time), null if the output hasn't been spent*++cddnull or floatThe number of coindays destroyed spending the output, null if the output hasn't been spent*++
Additional synthetic columns

ColumnTypeDescriptionQ?S?A?C?script_binstring .*Text (UTF-8) representation of script_hex. Allows you to use the LIKE operator: ?q=script_bin(~hello). Filtering using the LIKE operator is performed for nulldata outputs only.~
Notes:

increased efficiency method applies if querying transaction_id and spending_transaction_id columns using the equals operator
† — only for Bitcoin, Litecoin, Groestlcoin, and Bitcoin Testnet (SegWit data)
The default sorting — transaction_id DESC
spending_* columns yield null for outputs that haven't been spent yet
block_id for mempool transactions is -1
spending_block_id is -1 for outputs being spent by an unconfirmed transaction
This particular table is in beta test mode on our platform. It's possible to receive duplicate rows for outputs which have just been spent. Sometimes duplicates are removed automatically, but in that case the number of rows may be less than the set limit on the number of rows. There's an additional context key context.pre_rows which contains the number of rows that should've been returned before the duplicate removal process.
Example outputs:

https://api.blockchair.com/bitcoin/outputs?q=is_spent(true)&limit=1 (example of a spent output created in transaction_hash transaction and spent in spending_transaction_hash transaction :

{
  "data": [
    {
      "block_id": 600573,
      "transaction_id": 467508619,
      "index": 1,
      "transaction_hash": "a3c43b4bdc245e0675812e2779703ef5cf2c0e15df8b46d99e6e085a6bbedbe7",
      "date": "2019-10-22",
      "time": "2019-10-22 19:09:34",
      "value": 14638337,
      "value_usd": 1201.83,
      "recipient": "3FdhDDr42mMXX4tpG6dPkHuoCrPTJk3yjH",
      "type": "scripthash",
      "script_hex": "a91498f0e489f60c3971fa304290257374d7ea92292b87",
      "is_from_coinbase": false,
      "is_spendable": null,
      "is_spent": true,
      "spending_block_id": 600573,
      "spending_transaction_id": 467508620,
      "spending_index": 0,
      "spending_transaction_hash": "6350ac986bd8974fafbf3fc8c498a923dc1b8c6fa40f6569227f343aa6a50ce1",
      "spending_date": "2019-10-22",
      "spending_time": "2019-10-22 19:09:34",
      "spending_value_usd": 1201.83,
      "spending_sequence": 4294967294,
      "spending_signature_hex": "16001433f44aa318c7cac6703f0d09f2dc4314dd68d769",
      "spending_witness": "304402204fe6a8c36d400f64975f7a08119f7e311b75d32b358a48bfe65fb355a40fd1230220122ed99fc4024290a82efd0d94707f23eeac513978a211f6f4893e11af3b9c3301,027f502e7a018afa8d50dd17c459d987e7754486b46f131bfe1b0e2841f3afbb64",
      "lifespan": 0,
      "cdd": 0
    }
  ],
  "context": {
    "code": 200,
    "limit": 1,
    "offset": 0,
    "rows": 1,
    "pre_rows": 1,
    "total_rows": 1150457958,
    "state": 600573,
    ...
  }
}


https://api.blockchair.com/bitcoin/outputs?q=is_spent(false)&limit=1 (example of an uspent output):

{
  "data": [
    {
      "block_id": 600573,
      "transaction_id": 467508697,
      "index": 1,
      "transaction_hash": "ee13104d4331cad2fff5ab6cd249a9fec940d64df442a6de5f51ea63c34ef8ff",
      "date": "2019-10-22",
      "time": "2019-10-22 19:09:34",
      "value": 23725010,
      "value_usd": 1947.86,
      "recipient": "3P8771VCWU2tyFj7gPS1ZuV4JzJrJWjn3K",
      "type": "scripthash",
      "script_hex": "a914eb195d6b2b50fc134078f65b72741d4c37e821de87",
      "is_from_coinbase": false,
      "is_spendable": null,
      "is_spent": false,
      "spending_block_id": null,
      "spending_transaction_id": null,
      "spending_index": null,
      "spending_transaction_hash": null,
      "spending_date": null,
      "spending_time": null,
      "spending_value_usd": null,
      "spending_sequence": null,
      "spending_signature_hex": null,
      "spending_witness": null,
      "lifespan": null,
      "cdd": null
    }
  ],
  "context": {
    "code": 200,
    "limit": 1,
    "offset": 0,
    "rows": 1,
    "pre_rows": 1,
    "total_rows": 99482704,
    "state": 600573,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualizations on our front-end:

https://blockchair.com/bitcoin/outputs
https://blockchair.com/bitcoin-cash/outputs
https://blockchair.com/litecoin/outputs
https://blockchair.com/bitcoin-sv/outputs
https://blockchair.com/dogecoin/outputs
https://blockchair.com/dash/outputs
https://blockchair.com/groestlcoin/outputs
https://blockchair.com/zcash/outputs
https://blockchair.com/bitcoin/testnet/outputs
https://blockchair.com/bitcoin/mempool/outputs
https://blockchair.com/bitcoin-cash/mempool/outputs
https://blockchair.com/litecoin/mempool/outputs
https://blockchair.com/bitcoin-sv/mempool/outputs
https://blockchair.com/dogecoin/mempool/outputs
https://blockchair.com/dash/mempool/outputs
https://blockchair.com/groestlcoin/mempool/outputs
https://blockchair.com/zcash/mempool/outputs
https://blockchair.com/bitcoin/testnet/mempool/outputs
addresses viewEndpoints:

https://api.blockchair.com/{:btc_chain}/addresses?{:query}
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:query} is the query against the table (how to build a query)
Output:

The addresses view contains the list of all addresses and their confirmed balances. Unlike other infinitables (blocks, transactions, outputs) this table isn't live, it's automatically updated every 5 minutes with new data, thus we classify it as a "view". data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?addressstring [0-9a-zA-Z\-]*Bitcoin address or synthetic addressbalanceintIts confirmed balance*++
Notes:

the default sorting — balance DESC
Example outputs:

https://api.blockchair.com/bitcoin/addresses:

{
  "data": [
    {
      "address": "34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo",
      "balance": 16625913046297
    },
    {
      "address": "35hK24tcLEWcgNA4JxpvbkNkoAcDGqQPsP",
      "balance": 15100013129630
    },
    {
      "address": "385cR5DM96n1HvBDMzLHPYcw89fZAXULJP",
      "balance": 11730490887099
    },
    {
      "address": "3CgKHXR17eh2xCj2RGnHJHTDjPpqaNDgyT",
      "balance": 11185824580401
    },
    {
      "address": "37XuVSEpWW4trkfmvWzegTHQt7BdktSKUs",
      "balance": 9450576862072
    },
    {
      "address": "183hmJGRuTEi2YDCWy5iozY8rZtFwVgahM",
      "balance": 8594734898577
    },
    {
      "address": "1FeexV6bAHb8ybZjqQMjJrcCrHGW9sb6uF",
      "balance": 7995720088144
    },
    {
      "address": "3D2oetdNuZUqQHPJmcMDDHYoqkyNVsFk9r",
      "balance": 7689310178244
    },
    {
      "address": "1HQ3Go3ggs8pFnXuHVHRytPCq5fGG8Hbhx",
      "balance": 6937013094817
    },
    {
      "address": "3E35SFZkfLMGo4qX5aVs1bBDSnAuGgBH33",
      "balance": 6507708194519
    }
  ],
  "context": {
    "code": 200,
    "limit": 10,
    "offset": 0,
    "rows": 10,
    "total_rows": 27908261,
    "state": 600568,
    ...
  }
}


https://api.blockchair.com/bitcoin/addresses?a=sum(balance) (total balance of all addresses should be the same as the total number of coins minted):

{
  "data": [
    {
      "sum(balance)": 1800708303344571
    }
  ],
  "context": {
    "code": 200,
    "limit": 10000,
    "offset": null,
    "rows": 1,
    "total_rows": 1,
    "state": 600568,
    ...
  }
}


https://api.blockchair.com/bitcoin/addresses?a=count()&q=balance(1..10) (shows the number of addresses holding [1..10] satoshi):

{
  "data": [
    {
      "count()": 574591
    }
  ],
  "context": {
    "code": 200,
    "limit": 10000,
    "offset": null,
    "rows": 1,
    "total_rows": 1,
    "state": 600568,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualizations on our front-end:

https://blockchair.com/bitcoin/addresses
https://blockchair.com/bitcoin-cash/addresses
https://blockchair.com/litecoin/addresses
https://blockchair.com/bitcoin-sv/addresses
https://blockchair.com/dogecoin/addresses
https://blockchair.com/dash/addresses
https://blockchair.com/groestlcoin/addresses
https://blockchair.com/zcash/addresses
https://blockchair.com/bitcoin/testnet/addresses
Inifinitable endpoints for Ethereum and Ethereum Goerli Testnetblocks tableEndpoint:

https://api.blockchair.com/{:eth_chain}/blocks?{:query}
Where:

{:eth_chain} can only be ethereum or ethereum/testnet
{:query} is the query against the table (how to build a query)
Output:

data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?idintBlock id*+⌘hashstring 0x[0-9a-f]{64}Block hash=datestring YYYY-MM-DDBlock date (UTC)⌘timestring YYYY-MM-DD HH:ii:ssBlock time (UTC)⌘+sizeintBlock size in bytes*++minerstring 0x[0-9a-f]{40}Address the miner who found the block=+extra_data_hexstring [0-9a-f]*Additional data included by the miner^difficultyintDifficulty*++gas_usedintGas amount used by block transactions*++gas_limitintGas limit for the block set by the miner*++logs_bloomstring [0-9a-f]*Logs bloom fieldmix_hashstring [0-9a-f] {64}Mix hashnoncestring [0-9a-f]*Nonce valuereceipts_rootstring [0-9a-f] {64}Receipts rootsha3_unclesstring [0-9a-f] {64}SHA3 Unclesstate_rootstring [0-9a-f] {64}State roottotal_difficultynumeric stringTotal difficulty at the id pointtransactions_rootstring [0-9a-f] {64}Transactions rootuncle_countintNumber of block uncles*++transaction_countintNumber of transactions in the block*++synthetic_transaction_countintNumber of synthetic transactions (they do not exist as separate transactions on the blockchain, but they change the state, e.g., genesis block transactions, miner rewards, DAO-fork transactions, etc.)*++call_countintTotal number of calls spawned by transactions*++synthetic_call_countintNumber of synthetic calls (same as synthetic transactions)*++value_totalnumeric stringMonetary value of all block transactions in wei, hereinafter numeric string - numeric (integer or float in some cases) value passed as a string, as values in wei do not fit into integer*≈++value_total_usdfloatMonetary value of all block transactions in USD*++internal_value_totalnumeric stringMonetary value of all internal calls in the block in wei*≈++internal_value_total_usdfloatMonetary value of all internal calls in a block in USD*++generationnumeric stringThe reward of a miner for the block generation in wei*≈++generation_usdfloatThe reward of a miner for the block generation in USD*++uncle_generationnumeric stringTotal reward of uncle miners in wei*≈++uncle_generation_usdfloatTotal reward of uncle miners in USD*++fee_totalnumeric stringTotal fee in wei*≈++fee_total_usdfloatTotal fee in USD*++rewardnumeric stringTotal reward of the miner in the wei (reward for finding the block + fees)*≈++reward_usdfloatTotal reward of the miner in USD*++
Additional synthetic columns

ColumnTypeDescriptionQ?S?A?C?extra_data_binstring .*Text representation (UTF-8) of extra data. Allows you to use the LIKE operator: ?q=extra_data_bin(~hello)~
Notes:

increased efficiency method applies if querying id and hash columns using the equals operator
Search by fields that contain values in wei (value_total, internal_value_total, generation, uncle_generation, fee_total, reward) may be with some inaccuracies
The difference between value_total and internal_value_total: e.g., a transaction itself sends 0 eth, but this transaction is a call of a contract that sends someone, let's say, 10 eth. Then value will be 0 eth, and internal_value - 10 eth
The default sorting is id DESC
Example output:

https://api.blockchair.com/ethereum/blocks?limit=1:

{
  "data": [
    {
      "id": 8766253,
      "hash": "0xf36522b1f6ee2350c322a309ebdffe9afadc7d68713ad5b3a064657c81607ab7",
      "date": "2019-10-18",
      "time": "2019-10-18 17:39:40",
      "size": 32170,
      "miner": "0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5",
      "extra_data_hex": "50505945206e616e6f706f6f6c2e6f7267",
      "difficulty": 2408192424049377,
      "gas_used": 9895313,
      "gas_limit": 9920736,
      "logs_bloom": "2e8e09c1046d3063207c00c2440098ac0824d0ca0818d201500a1987588a284b001315981c227c86010880300083629c802895bb1608860a02a818a2202d405002a6140281390b00d880610822005011440244527f24b80e3200a405848034043c3028c99218304b8040180210401c005008924d1925c11a004100b14e1270980d21146d4c1a1029130024a0801400350858088c03000061421007b866a8d60c0a0cb142100028e0c39002b010c0320082a49000040fe870022c0080024e1120a0d21ac23289060221c390080800ab442c244130cea8102c2c20404e188468430c52aa20143110200706e642c52f4008080ac71910932415a02108020d910780",
      "mix_hash": "65f9fe3204d652ce2f82adface45e8c32cfacb0b80a3d1acaff8969457911342",
      "nonce": "13915815879145322367",
      "receipts_root": "cfba6974cf3257f2c2cf674a4e2f422b9623646120364ce7be84040d7d2b9578",
      "sha3_uncles": "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
      "state_root": "270dca9a521aa1b900cd0749a1a1c1413328cdaff1ccc7f9bcfe6e06751f0781",
      "total_difficulty": "12439420564755992111056",
      "transactions_root": "62523508847380a506452289abe504fdef7b5e9e96cbfd166f0fd359a4837f92",
      "uncle_count": 0,
      "transaction_count": 172,
      "synthetic_transaction_count": 1,
      "call_count": 333,
      "synthetic_call_count": 1,
      "value_total": "14324135521180578322",
      "value_total_usd": 2536.74001038483,
      "internal_value_total": "15524135521180578322",
      "internal_value_total_usd": 2749.25461609772,
      "generation": "2000000000000000000",
      "generation_usd": 354.191009521484,
      "uncle_generation": "0",
      "uncle_generation_usd": 0,
      "fee_total": "29252299880000000",
      "fee_total_usd": 5.1804508126612,
      "reward": "2029252299880000000",
      "reward_usd": 359.371460334146
    }
  ],
  "context": {
    "code": 200,
    "limit": 1,
    "offset": 0,
    "rows": 1,
    "total_rows": 8766254,
    "state": 8766260,
    "state_layer_2": 8766249,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualizations on our front-end:

https://blockchair.com/ethereum/blocks
uncles tableEndpoint:

https://api.blockchair.com/{:eth_chain}/uncles?{:query}
Where:

{:eth_chain} can only be ethereum or ethereum/testnet
{:query} is the query against the table (how to build a query)
Output:

Returns information about uncles. data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?parent_block_idintParent block id*++indexintUncle index in the block*+idintUncle id*+hashstring 0x[0-9a-f]{64}Uncle hash (with 0x)=datestring YYYY-MM-DDDate of generation (UTC)⌘timestring YYYY-MM-DD HH:ii:ssTimestamp of generation (UTC)⌘+sizeintUncle size in bytes*++minerstring 0x[0-9a-f]{40}Address of the rewarded miner (with 0x)=+extra_data_hexstring [0-9a-f]*Additional data included by the miner^difficultyintDifficulty*++gas_usedintAmount of gas used by transactions*++gas_limitintGas limit for the block set up by the miner*++logs_bloomstring [0-9a-f]*Logs bloom fieldmix_hashstring [0-9a-f]{64}Hash mixnoncestring [0-9a-f]*Nonce valuereceipts_rootstring [0-9a-f]{64}Receipts rootsha3_unclesstring [0-9a-f]{64}Uncles hashstate_rootstring [0-9a-f]{64}State roottransactions_rootstring [0-9a-f]{64}Transactions rootgenerationnumeric stringThe reward of the miner who generated the uncle, in wei*≈++generation_usdfloatThe award of the miner who generated uncle, in USD*++
Additional synthetic columns

ColumnTypeDescriptionQ?S?A?C?extra_data_binstring .*Text (UTF-8) representation of extra data. Allows you to use the LIKE operator:?Q=extra_data_bin(~hello)~
Notes:

increased efficiency method applies if querying parent_block_id and hash columns using the equals operator
Search by fields that contain values in wei (generation) may be with some inaccuracies
The difference between value_total and internal_value_total: a transaction itself may send, say, 0 eth, but this transaction may call a contract which sends someone 10 eth. In that case value will be 0 eth, and internal_value will be 10 eth
The default sorting is parent_block_id DESC
Example output:

https://api.blockchair.com/ethereum/uncles?limit=1:

{
  "data": [
    {
      "parent_block_id": 8792054,
      "index": 0,
      "id": 8792051,
      "hash": "0x41a4d3a79644ada10207cd41f8027a3d4e506d4cbde58750a98d3ec2afce402d",
      "date": "2019-10-22",
      "time": "2019-10-22 19:10:41",
      "size": 526,
      "miner": "0xb2930b35844a230f00e51431acae96fe543a0347",
      "extra_data_hex": "73696e6733",
      "difficulty": 2374634862657186,
      "gas_used": 9979194,
      "gas_limit": 9989371,
      "logs_bloom": "945c08608049b629008740f22070128c0602c50010d012952a08280b22022b608cc4507918e00962a4a049440320251192429006194812fb587ad87421e4a8002a0401c405658b208898920f828646517f206444b10ec162024807418380a10ac510840006258023002c008c66c52d220e683a2400c643600101a2720a0108446102112d41a0900105000005a212240e1012e1c17502492000c00a84823d1404030894051690f2304e484190028201b280840044a50c0830205403801835151110e354e2288184002073d908070a44e03cb809019308738c211b4100118064a080f1a60003881a880d1144c02100c00c1200488230d91841c02e5884d4b00401",
      "mix_hash": "3e26a6c8520bdb3afc6ff13d46f8906a508787fc3c8021656f0fe74834728538",
      "nonce": "2551618406869966062",
      "receipts_root": "fdcb14f98b77953add5ad2115b74291c1aeeab91e5027e30a888db72ac55d2c1",
      "sha3_uncles": "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
      "state_root": "8aab503534b41e0fa32d242829fb5ac1cae3e034db1c22a61cf15be2e2b8ca3f",
      "transactions_root": "f47354e86bd38e6d7cbd54cd2556fce97221a0f760c518ee226f3f5472432950",
      "generation": "1250000000000000000",
      "generation_usd": 217.484378814697
    }
  ],
  "context": {
    "code": 200,
    "limit": 1,
    "offset": 0,
    "rows": 1,
    "total_rows": 944557,
    "state": 8792093,
    "state_layer_2": 8792080,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualizations on our front-end:

https://blockchair.com/ethereum/uncles
transactions tableEndpoint:

https://api.blockchair.com/{:eth_chain}/transactions?{:query} (for blockchain transactions)
https://api.blockchair.com/{:eth_chain}/mempool/transactions?{:query} (for mempool transactions)
Where:

{:eth_chain} can only be ethereum or ethereum/testnet
{:query} is the query against the table (how to build a query)
Output:

data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?block_idintId of the block containing the transaction*++idintInternal Blockchair transaction id (not related to the blockchain, used for internal purposes)*+index †‡intThe transaction index number in the block*+hash ‡string 0x[0-9a-f]{64}Transaction hash=datestring YYYY-MM-DDDate of the block containing the transaction (UTC)⌘timestring YYYY-MM-DD HH:ii:ssTime of the block containing the transaction (UTC)⌘+failed †boolFailed transaction or not?=+type †string (enum)Transaction type with one of the following values: call, create, call_tree, create_tree, synthetic_coinbase. Description in the note below.=++sender ‡string 0x[0-9a-f]{40}Address of the transaction sender=+recipientstring 0x[0-9a-f]{40}Address of the transaction recipient=+call_count †intNumber of calls in the transaction*++valuenumeric stringMonetary value of transaction in wei*≈++value_usdfloatValue of transaction in USD*++internal_value †numeric stringValue of all internal calls in the transaction in wei*≈++internal_value_usd †floatValue of all internal calls in the transaction in USD*++fee †‡numeric stringFee in wei*≈++fee_usd †‡floatFee in USD*++gas_used †‡intAmount of gas used by a transaction*++gas_limit ‡intGas limit for transaction set by the sender*++gas_price ‡intPrice for gas set by the sender*++input_hex ‡string [0-9a-f]*Transaction input data (hex)^nonce ‡intNonce valuev ‡string [0-9a-f]*V valuer ‡string [0-9a-f]*R values ‡string [0-9a-f]*S value
Additional synthetic columns

ColumnTypeDescriptionQ?S?A?C?input_binstring .*Text (UTF-8) representation of input data. Allows you to use the LIKE operator: ?q=input_bin(~hello)~
Possible types (type) of transactions:

call — the transaction transfers the value, but there are no more calls (a simple ether sending, not in favor of a contract, or the call to a contract that does nothing)
create — create a new contract
call_tree — the transaction calls a contract that makes some other calls
create_tree — create a new contract that create contracts or starts making calls
synthetic_coinbase — a synthetic transaction for awarding a reward to the miner (block or uncle)
Notes:

increased efficiency method applies if querying id and hash columns using the equals operator
† — value is null for transactions in the mempool
‡ — value is null if type is synthetic_coinbase
Search by fields that contain values in wei (value_total, internal_value_total, generation, uncle_generation, fee_total, reward) may be with some inaccuracies
The difference between value_total and internal_value_total: e.g., a transaction itself sends 0 eth, but this transaction is a call of a contract that sends someone, let's say, 10 eth. Then value will be 0 eth, and internal_value - 10 eth
The default sorting — id DESC
block_id for mempool transactions is -1
Example output:

https://api.blockchair.com/ethereum/transactions?q=block_id(46147):

{
  "data": [
    {
      "block_id": 46147,
      "id": 46147000001,
      "index": null,
      "hash": null,
      "date": "2015-08-07",
      "time": "2015-08-07 03:30:33",
      "failed": false,
      "type": "synthetic_coinbase",
      "sender": null,
      "recipient": "0xe6a7a1d47ff21b6321162aea7c6cb457d5476bca",
      "call_count": 1,
      "value": "6050000000000000000",
      "value_usd": 6.05,
      "internal_value": "6050000000000000000",
      "internal_value_usd": 6.05,
      "fee": null,
      "fee_usd": null,
      "gas_used": null,
      "gas_limit": null,
      "gas_price": null,
      "input_hex": null,
      "nonce": null,
      "v": null,
      "r": null,
      "s": null
    },
    {
      "block_id": 46147,
      "id": 46147000000,
      "index": 0,
      "hash": "0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060",
      "date": "2015-08-07",
      "time": "2015-08-07 03:30:33",
      "failed": false,
      "type": "call",
      "sender": "0xa1e4380a3b1f749673e270229993ee55f35663b4",
      "recipient": "0x5df9b87991262f6ba471f09758cde1c0fc1de734",
      "call_count": 1,
      "value": "31337",
      "value_usd": 3.1337e-14,
      "internal_value": "31337",
      "internal_value_usd": 3.1337e-14,
      "fee": "1050000000000000000",
      "fee_usd": 1.05,
      "gas_used": 21000,
      "gas_limit": 21000,
      "gas_price": 50000000000000,
      "input_hex": "",
      "nonce": "0",
      "v": "1c",
      "r": "88ff6cf0fefd94db46111149ae4bfc179e9b94721fffd821d38d16464b3f71d0",
      "s": "45e0aff800961cfce805daef7016b9b675c137a6a41a548f7b60a3484c06a33a"
    }
  ],
  "context": {
    "code": 200,
    "limit": 10,
    "offset": 0,
    "rows": 2,
    "total_rows": 2,
    "state": 8791945,
    "state_layer_2": 8791935,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualizations on our front-end:

https://blockchair.com/ethereum/transactions
https://blockchair.com/ethereum/mempool/transactions
calls tableEndpoint:

https://api.blockchair.com/{:eth_chain}/calls?{:query}
Where:

{:eth_chain} can only be ethereum or ethereum/testnet
{:query} is the query against the table (how to build a query)
Output:

Returns information about internal transaction calls. data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?block_idintBlock id containing a call*++transaction_idintTransaction id containing the call*+transaction_hash †string 0x[0-9a-f]{64}Transaction hash (with 0x) containing the call=indexstringCall index within the transaction (tree-like, e.g., "0.8.1")=+depthintCall depth within the call tree (starting at 0)*+datestring YYYY-MM-DDDate of the block that contains the call (UTC)⌘timestring YYYY-MM-DD HH:ii:ssTime of the block that contains the call (UTC)⌘+failedboolFailed call or not=+fail_reasonstring .* or nullIf failed, then the failure description, if not, then null~+typestring (enum)The call type, one of the following values: call, delegatecall, staticcall, callcode, selfdestruct, create, synthetic_coinbase, create2=++sender †string 0x[0-9a-f]{40}Sender's address (with 0x)=+recipientstring 0x[0-9a-f]{40}Recipient's address (with 0x)=+child_call_countintNumber of child calls*++valuenumeric stringCall value in wei, hereinafter numeric string - is a numeric string passed as a string, because wei-values do not fit into uint64*≈++value_usdfloatCall value in USD*++transferredboolHas ether been transferred? (false if failed, or if the type of transaction does not change the state, e.g., staticcall=+input_hex †string [0-9a-f]*Input call dataoutput_hex †string [0-9a-f]*Output call data
Notes:

increased efficiency method applies if querying transction_id column using the equals operator
† — value is null if type is synthetic_coinbase
Search by fields that contain values in wei (value) may be with some inaccuracies
The default sorting is transaction_id DESC
sorting by index respects the tree structure (i.e. "0.2" comes before "0.11") instead of being alphabetical
Example output:

https://api.blockchair.com/ethereum/calls?q=not,type(synthetic_coinbase)&limit=1:

{
  "data": [
    {
      "block_id": 8792132,
      "transaction_id": 8792132000050,
      "transaction_hash": "0x9e3a13bfc5313245de7142b7ec13b80123188d9ae4cce797a44b9b426864d1ca",
      "index": "0",
      "depth": 0,
      "date": "2019-10-22",
      "time": "2019-10-22 19:30:03",
      "failed": false,
      "fail_reason": null,
      "type": "call",
      "sender": "0xe475e906b74806c333fbb1b087e523496d8c4cb7",
      "recipient": "0x3143ec5a285adfb248c9e4de934ee735d4b7d734",
      "child_call_count": 0,
      "value": "0",
      "value_usd": 0,
      "transferred": true,
      "input_hex": "a9059cbb00000000000000000000000023ea8008420c4355570f9915b5fe39dc278540d3000000000000000000000000000000000000000000000000000000003b9aca00",
      "output_hex": "0000000000000000000000000000000000000000000000000000000000000001"
    }
  ],
  "context": {
    "code": 200,
    "limit": 1,
    "offset": 0,
    "rows": 1,
    "total_rows": 1422927649,
    "state": 8792138,
    "state_layer_2": 8792127,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualizations on our front-end:

https://blockchair.com/ethereum/calls
addresses viewEndpoints:

https://api.blockchair.com/{:eth_chain}/addresses?{:query}
Where:

{:eth_chain} can only be: ethereum or ethereum/testnet
{:query} is the query against the table (how to build a query)
Output:

The addresses view contains the list of all addresses and their confirmed balances. Unlike other infinitables (blocks, transactions, outputs) this table isn't live, it's automatically updated every day with new data, thus we classify it as a "view". data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?addressstring 0x[0-9a-zA-Z\-]*Ethereum account or contract addressbalancenumeric stringIts balance*++nonceintIts nonce value*++is_contractbooleanIs it a contract (true) or an account (false)?=+
Notes:

the default sorting — balance DESC
Example outputs:

https://api.blockchair.com/ethereum/addresses:

{
  "data": [
    {
      "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "balance": "6693912559400585982377984",
      "nonce": 1,
      "is_contract": true
    },
    {
      "address": "0x00000000219ab540356cbb839cbe05303d7705fa",
      "balance": "6232610000069000205172736",
      "nonce": 1,
      "is_contract": true
    },
    {
      "address": "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8",
      "balance": "2296896558056344842665984",
      "nonce": 865,
      "is_contract": false
    },
    {
      "address": "0x53d284357ec70ce289d6d64134dfac8e511c8a3d",
      "balance": "1378734066321521433903104",
      "nonce": 4,
      "is_contract": false
    },
    {
      "address": "0x61edcdf5bb737adffe5043706e7c5bb1f1a56eea",
      "balance": "1189498953581339986624512",
      "nonce": 0,
      "is_contract": true
    },
    {
      "address": "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5",
      "balance": "1146177206209739021615104",
      "nonce": 1,
      "is_contract": true
    },
    {
      "address": "0xdf9eb223bafbe5c5271415c75aecd68c21fe3d7f",
      "balance": "988648154664867412836352",
      "nonce": 1,
      "is_contract": true
    },
    {
      "address": "0xc61b9bb3a7a0767e3179713f3a5c7a9aedce193c",
      "balance": "800010760463680857440256",
      "nonce": 1,
      "is_contract": true
    },
    {
      "address": "0x8484ef722627bf18ca5ae6bcf031c23e6e922b30",
      "balance": "755009999245592554897408",
      "nonce": 1,
      "is_contract": true
    },
    {
      "address": "0x07ee55aa48bb72dcc6e9d78256648910de513eca",
      "balance": "681241111484627083591680",
      "nonce": 0,
      "is_contract": true
    }
  ],
  "context": {
    "code": 200,
    "source": "A",
    "limit": 10,
    "offset": 0,
    "rows": 10,
    "total_rows": 121050742,
    "state": 12787924,
    "state_layer_2": 12787924,
    ...
  }
}


https://api.blockchair.com/ethereum/addresses?q=balance(1000000..)&a=count() (counts the number of addresses hodling more than 1M ether):

{
  "data": [
    {
      "count()": 6
    }
  ],
  "context": {
    "code": 200,
    ...
  }
}


https://api.blockchair.com/ethereum/addresses?a=is_contract,count() (counts accounts and contracts):

{
  "data": [
    {
      "is_contract": false,
      "count()": 103337709
    },
    {
      "is_contract": true,
      "count()": 17713033
    }
  ],
  "context": {
    "code": 200,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualizations on our front-end:

https://blockchair.com/ethereum/addresses
https://blockchair.com/ethereum/testnet/addresses
Inifinitable endpoints for MixinPlease note that our Mixin API outputs raw node data for these endpoints.

snapshots tableNote: this particular table doesn't support advanced querying. The only query section it supports are ?offset= and sorting/filtering by topology.

Endpoint:

https://api.blockchair.com/{:xin_chain}/raw/snapshots?{:query}
Where:

{:xin_chain} can be only mixin
Where:

{:query} is the query against the table (how to build a query)
Output:

data contains an array of database rows.

Example requests:`

https://api.blockchair.com/mixin/raw/snapshots
https://api.blockchair.com/mixin/raw/snapshots?q=topology(..18629737)&offset=10
https://api.blockchair.com/mixin/raw/snapshots?s=topology(asc)
Example output:

https://api.blockchair.com/mixin/raw/snapshots:

{
  "data": [
    {
      "hash": "a6188df5dfecef1a2650fc7efd51ad0147539182cf0459fee6986b48f83502a6",
      "node": "f7d194a68478987bc472c9f99478260dc12f4860204e0e91bee98a8b89363bc3",
      "references": {
        "self": "c77df83dcc00afba5e8cbc34b075df975c42efe520b4e00b501289b23f9affc1",
        "external": "4d5f06d7b8512780396c212ecf55a7bfd7c42b4d82d0bd8e7911a03cab28c8cc"
      },
      "round": 8729,
      "signature": "652e1d783743c45aebb127a3c9a8d823d743b3dd2304f12a4dc490e104448e61de8fe14abae911528ab9f7b845b73fc86582e53333e35ee1b78fdcb17b272e0000000000003eade5",
      "timestamp": 1587575473417249500,
      "topology": 18629830,
      "transaction": {
        "asset": "da5f6dbd3102cd89b1b040c6b61e5f2b696bcb989dff7d8ecee8872aacf65592",
        "extra": "44876fa784bc11eabda9b827eb81dfb7",
        "hash": "ce122ec544fc41c9cde2d350c544659ee5d4887201becf0a01eed6d238030303",
        "inputs": [
          {
            "hash": "d3ac83d0cc8ef79bb215e6fc3326d58c6b16d2eb43fd6d6f16c18de4ddb0907a",
            "index": 0
          }
        ],
        "outputs": [
          {
            "amount": "0.01033063",
            "keys": [
              "322c48fa5b19aae518147de7223f62bcb7b444b054226d50fcfd064d0ed555c5"
            ],
            "mask": "bc561649c4f9a36c252159717cc0deb797f1af1af1704cefd96cb467616e060e",
            "script": "fffe01",
            "type": 0
          }
        ],
        "version": 1
      },
      "version": 1
    },
    {
      "hash": "80f6199ccc5bcb2cfb484a334107a67f89dc6e4cbcbcaae341fe28c619960bd5",
      "node": "f7d194a68478987bc472c9f99478260dc12f4860204e0e91bee98a8b89363bc3",
      "references": {
        "self": "c77df83dcc00afba5e8cbc34b075df975c42efe520b4e00b501289b23f9affc1",
        "external": "4d5f06d7b8512780396c212ecf55a7bfd7c42b4d82d0bd8e7911a03cab28c8cc"
      },
      "round": 8729,
      "signature": "8e18689d15e051bb484ae08fa6b9325d61d75f86cbc203e2fcb87f97f93d5906d91d8cb31036b94a43918fc3e007a0e82bb3acb2735d66b5a90566b68bbb130700000000001efdf0",
      "timestamp": 1587575472096503000,
      "topology": 18629829,
      "transaction": {
        "asset": "d4c304ffc3270ee0f3468913bd8027225201f0eccd336d47062d76c6e2b6bb27",
        "extra": "c5029926c5904a4583094a9e0761c9da",
        "hash": "a95f88e19cd5dfbb6f14dd6ea581049b065ce0065798faa3cb889995088db9c0",
        "inputs": [
          {
            "hash": "80dac46fe23abc29d7fe74b6e3580c42e164d37c9bd50be05306ccd2c7e6c653",
            "index": 1
          }
        ],
        "outputs": [
          {
            "amount": "0.01193500",
            "keys": [
              "b8124285ceca9f5e83b2a5f0420c8483067a69719f0741550742f0ac4c38c580"
            ],
            "mask": "0aef3fc155aa561d75490f545bb044f9a8f488060db7a6f4631d33a6d53296fd",
            "script": "fffe01",
            "type": 0
          },
          {
            "amount": "0.00944393",
            "keys": [
              "f75bfa4afe3584b2beda6998be56c93cf6cd79b5635d40f61e0a6cefdf66367b"
            ],
            "mask": "d6bb73f16b57f7a67bb0c8bfce11b2f7ab1a1f108b9f7af242e36d448d2406e5",
            "script": "fffe01",
            "type": 0
          }
        ],
        "version": 1
      },
      "version": 1
    },
    ...
  ],
  "context": {
    "code": 200,
    "results": 10,
    "total_rows": 18629831,
    "offset": 0,
    "state": 18629830,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualization on our front-end:

https://blockchair.com/mixin/snapshots
mintings tableNote: this particular table doesn't support advanced querying. The only query section it supports are ?offset= and sorting/filtering by batch.

Endpoint:

https://api.blockchair.com/{:xin_chain}/raw/mintings?{:query}
Where:

{:xin_chain} can be only mixin
Where:

{:query} is the query against the table (how to build a query)
Output:

data contains an array of database rows.

Example requests:`

https://api.blockchair.com/mixin/raw/mintings
https://api.blockchair.com/mixin/raw/mintings?q=batch(..400)&offset=10
https://api.blockchair.com/mixin/raw/mintings?s=batch(asc)
Example output:

https://api.blockchair.com/mixin/raw/mintings?s=batch(asc):

{
  "data": [
    {
      "amount": "1726.02739638",
      "batch": 14,
      "group": "KERNELNODE",
      "transaction": "20001842d6eff5129c11f7c053bf1209f0267bf223f1681c9cb9d19fc773a692",
      "snapshot": {
        "hash": "1f408b456fe82b3e47801167649a725cb71075a58bb2568c8fe44bc223a0eece",
        "node": "307ecfa84d100ecd6bc32743972083e5178e02db049ce16bfd743f3ae52fefc5",
        "references": {
          "self": "31923e163f5daddcb97ef98bf3b8a76002ec007e309c209ec9a071e16f876d90",
          "external": "0597b1772ba2a0bd814dba7f9f6010512a426eef3154d41f7e63ff1394db6ce2"
        },
        "round": 1,
        "signatures": [ ... ],
        "timestamp": 1552544417124320500,
        "topology": 116,
        "transaction": {
          "asset": "a99c2e0e2b1da4d648755ef19bd95139acbbe6564cfb06dec7cd34931ca72cdc",
          "extra": "",
          "hash": "20001842d6eff5129c11f7c053bf1209f0267bf223f1681c9cb9d19fc773a692",
          "inputs": [
            {
              "mint": {
                "group": "KERNELNODE",
                "batch": 14,
                "amount": "1726.02739638"
              }
            }
          ],
          "outputs": [
            {
              "amount": "115.06849309",
              "keys": [
                "5cd87b6b5a25f67445197261e1ebb5d68be598cd63b0a57eef6897f82cde5c0a"
              ],
              "mask": "f287afceabccc3d48b52de04d0edd43b446275041b024a3b5c9517894c06f9ab",
              "script": "fffe01",
              "type": 0
            },
            ...
          ],
          "version": 1
        },
        "version": 0
      },
      "timestamp": 1552544417124320500
    },
    ...
  ],
  "context": {
    "code": 200,
    "results": 10,
    "total_rows": 404,
    "offset": 0,
    "state": 18630676,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualization on our front-end:

https://blockchair.com/mixin/mintings
nodes tableNote: this particular table doesn't support querying. It outputs all the entries (so there's no standard limit of 10 rows). Nodes are sorted by their state, and then by timestamp.

Endpoint:

https://api.blockchair.com/{:xin_chain}/raw/nodes
Where:

{:xin_chain} can be only mixin
Output:

data contains an array of database rows.

Example requests:`

https://api.blockchair.com/mixin/raw/nodes
Example output:

https://api.blockchair.com/mixin/raw/nodes:

{
  "data": [
    {
      "id": "cbba7a5e7bae3b0cef3d6dcba7948fa03facda3be401d67aa1a38aecb1f443a0",
      "payee": "XINCcpcWJbJRiqEoUV7pWrmAdN1AZq3wyYTxa62JojvM4UqpuQnoVX7DZ6BgJEb61pSUS4ZyZNuEbAGL5azNyZNCbwdgqcVY",
      "signer": "XIN3ntCzd1FqjSxrYM1f9abN3wY5DcydkDviEVgZL3paV7oYEeKnwzbMLwoRVANwyiu7w9mRrPf2eTpPaLRgQow9rSr3hzWH",
      "state": "ACCEPTED",
      "timestamp": 1579450099118731000,
      "transaction": "ebbbf69e9e74e4070ef0685f8d9b4d7bc443922ac93445bc9bda1567984bdda8"
    },
    {
      "id": "6985deee66ead2021925eae21737fa172d19c6efc3e53f3ca5e28ab42f7f51eb",
      "payee": "XINYDpVHXHxkFRPbP9LZak5p7FZs3mWTeKvrAzo4g9uziTW99t7LrU7me66Xhm6oXGTbYczQLvznk3hxgNSfNBaZveAmEeRM",
      "signer": "XINDfgnkijCTe9ijVd9yDwQP8VY4rXwFqYczfgeKJViJqjGKmWS8MdZhJn7kPd5Hv6M8W8RobhJUAxkxgZ6YNtdWQwefYE51",
      "state": "ACCEPTED",
      "timestamp": 1583004182403037400,
      "transaction": "48f3d7b5ae6b03f251705cfc82c3b3c7413ec8a7e7b100de0cab4d8f3ec33bd5"
    },
    ...
  ],
  "context": {
    "code": 200,
    "results": 55,
    "state": 18630827,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualization on our front-end:

https://blockchair.com/mixin/nodes
Inifinitable endpoints for TezosPlease note that our Tezos API outputs raw node data for this endpoint.

blocks tableNote: this particular table doesn't support advanced querying. The only query section it supports are ?offset= and sorting/filtering by id (height).

Endpoint:

https://api.blockchair.com/{:xtz_chain}/raw/blocks?{:query}
Where:

{:xtz_chain} can be only tezos
Where:

{:query} is the query against the table (how to build a query)
Output:

data contains an array of database rows.

Example requests:`

https://api.blockchair.com/tezos/raw/blocks
https://api.blockchair.com/tezos/raw/blocks?q=id(..100000)&offset=10
https://api.blockchair.com/tezos/raw/blocks?s=id(asc)
Example output:

https://api.blockchair.com/tezos/raw/blocks?s=id(asc):

{
  "data": [
    {
      "id": 0,
      "time": "2018-06-30T16:07:32Z",
      "hash": "BLockGenesisGenesisGenesisGenesisGenesisf79b5d1CoW2",
      "priority": 0,
      "n_ops": 0,
      "volume": 0,
      "cycle": 0,
      "is_cycle_snapshot": 1,
      "version": 0,
      "n_accounts": 0,
      "n_new_accounts": 0,
      "n_new_contracts": 0,
      "gas_limit": 0,
      "gas_used": 0,
      "gas_price": 0,
      "days_destroyed": 0
    },
    {
      "id": 1,
      "time": "2018-06-30T17:39:57Z",
      "hash": "BLSqrcLvFtqVCx8WSqkVJypW2kAVRM3eEj2BHgBsB6kb24NqYev",
      "priority": 0,
      "n_ops": 0,
      "volume": 0,
      "cycle": 0,
      "is_cycle_snapshot": 0,
      "version": 1,
      "n_accounts": 31589,
      "n_new_accounts": 31589,
      "n_new_contracts": 32,
      "gas_limit": 0,
      "gas_used": 0,
      "gas_price": 0,
      "days_destroyed": 0
    },
    ...
  ],
  "context": {
    "code": 200,
    "results": 10,
    "total_rows": 1002667,
    "offset": 0,
    "state": 1002666,
    "price_usd": 2.67,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualization on our front-end:

https://blockchair.com/tezos/blocks
Inifinitable endpoints for second layersproperties table (Omni Layer)Note: this particular table doesn't support querying. The only query section it supports is ?offset=. Note that this endpoint is in the Alpha stage.

Endpoint:

https://api.blockchair.com/bitcoin/omni/properties?{:query}
Where:

{:query} is the query against the table (how to build a query), the only supported query section for this table is ?offset=
Output:

data contains an array of database rows. Each row is in the format which accords with Omni Layer specification (https://github.com/OmniLayer/spec)

Example output:

https://api.blockchair.com/bitcoin/omni/properties:

{
  "data": [
    {
      "id": 412,
      "name": "ENO",
      "category": "",
      "subcategory": "",
      "description": "",
      "url": "",
      "is_divisible": false,
      "issuer": "1JcfUyi9BkXCTXHdeUusmYrsHXvnnLvTxB",
      "creation_transaction_hash": "ea5b914ba4e80931c8d46e551f6010113ab2cba82186d2497f2b2f0c6d53953b",
      "creation_time": "2018-11-25 21:34:08",
      "creation_block_id": 551501,
      "is_issuance_fixed": false,
      "is_issuance_managed": false,
      "circulation": 222222222,
      "ecosystem": 1
    },
    ...
  ],
  "context": {
    "code": 200,
    "limit": 10,
    "offset": 0,
    "rows": 10,
    "total_rows": 412,
    "state": 599976,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualization on our front-end:

https://blockchair.com/bitcoin/omni/properties
tokens table (ERC-20)Endpoint:

https://api.blockchair.com/ethereum/erc-20/tokens?{:query}
https://api.blockchair.com/ethereum/testnet/erc-20/tokens?{:query} (Goerli Testnet)
Where:

{:query} is the query against the table (how to build a query)
Output:

Returns information about ERC-20 tokens indexed by our engine. data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?addressstring 0x[0-9a-f]{40}Address of the token contract=idintInternal Blockchair id of the token*+datestring YYYY-MM-DDCreation date⌘timestring YYYY-MM-DD HH:ii:ssCreation timestamp⌘+namestring .* (or an empty string)Token name (e.g. My New Token)=+symbolstring .* (or an empty string)Token symbol (e.g. MNT)=+decimalsintNumber of decimals=+creating_block_idintCreating block height*+creating_transaction_hashstring 0x[0-9a-f]{64}Creating transaction hash
Notes:

for the columns address, id increased efficiency when uploading one record is applied
there is no possibility to search over date column, use searching ?q=time(YYYY-MM-DD) instead
the default sort is id DESC
when using offset, it is reasonable to add to the filters the maximum block number (?q=block_id(..N)), since it is very likely that during the iteration new rows will be added to the table. For convenience, you can take the value of context.state from the first result of any query containing the number of the latest block at the query time and use this result later on.
Example output:

https://api.blockchair.com/ethereum/erc-20/tokens?limit=1:

{
  "data": [
    {
      "address": "0x9b460d404be254d7b2ba89336a8a41807bb1562b",
      "id": 121500,
      "date": "2019-10-22",
      "time": "2019-10-22 19:21:11",
      "name": "UGB Token",
      "symbol": "UGB",
      "decimals": 18,
      "creating_block_id": 8792093,
      "creating_transaction_hash": "0x58e132a937c3bd60f1d113ecb14db59fd5229ae312a2afdf8f1b365bf8620e5e"
    }
  ],
  "context": {
    "code": 200,
    "limit": 1,
    "offset": 0,
    "rows": 1,
    "total_rows": 121500,
    "state": 8792147,
    "state_layer_2": 8792137,
    ...
  }
}


https://api.blockchair.com/ethereum/erc-20/tokens?q=symbol(USDT)&a=count():

{
  "data": [
    {
      "count()": 72
    }
  ],
  "context": {
    "code": 200,
    "limit": 10000,
    "offset": null,
    "rows": 1,
    "total_rows": 1,
    "state": 8792205,
    "state_layer_2": 8792192,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualization on our front-end:

https://blockchair.com/ethereum/erc-20/tokens
transactions table (ERC-20)Endpoint:

https://api.blockchair.com/ethereum/erc-20/transactions?{:query}
https://api.blockchair.com/ethereum/testnet/erc-20/transactions?{:query} (Goerli Testnet)
Where:

{:query} is the query against the table (how to build a query)
Output:

Returns information about ERC-20 transfers indexed by our engine. data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?block_idintBlock id including the token transfer*+idintInternal Blockchair id of the token transfer*+transaction_hashstring 0x[0-9a-f]{64}Transaction hash including the token transferdatestring YYYY-MM-DDDate of the transfer⌘timestring YYYY-MM-DD HH:ii:ssTimestamp of the transfer⌘+token_addressstring 0x[0-9a-f]{40}Address of the token contract=+token_namestring .* (or an empty string)Token name (e.g. My New Token)=++token_symbolstring .* (or an empty string)Token symbol (e.g. MNT)=++token_decimalsintNumber of decimals=+senderstring 0x[0-9a-f]{40}The sender's address=recipientstring 0x[0-9a-f]{40}The recipient's address=valuenumeric stringTransferred amount (in the smallest denomination)*≈=
Notes:

for the columns id increased efficiency when uploading one record is applied
there is no possibility to search over date column, use searching ?q=time(YYYY-MM-DD) instead
the default sort is id DESC
when using offset, it is reasonable to add to the filters the maximum block number (?q=block_id(..N)), since it is very likely that during the iteration new rows will be added to the table. For convenience, you can take the value of context.state from the first result of any query containing the number of the latest block at the query time and use this result later on.
value is approximated when queried
Example output:

https://api.blockchair.com/ethereum/erc-20/transactions?limit=1:

{
  "data": [
    {
      "block_id": 8792197,
      "id": 275501753,
      "transaction_hash": "0xec32c9b67d3e7088f14bfc17e8ccb0eb06a98eebe81224dc8703f470c62c5a2e",
      "date": "2019-10-22",
      "time": "2019-10-22 19:45:41",
      "token_address": "0xbe59434473c50021b30686b6d34cdd0b1b4f6198",
      "token_name": "Mobilio",
      "token_symbol": "MOB",
      "token_decimals": 18,
      "sender": "0x2a68bdc41e98ab0fb60c9610e62d83ab29312d06",
      "recipient": "0xfa96009f004428b85a05cfa1233c24f7afe0536a",
      "value": "12021696603378832398951"
    }
  ],
  "context": {
    "code": 200,
    "limit": 1,
    "offset": 0,
    "rows": 1,
    "total_rows": 275501753,
    "state": 8792207,
    "state_layer_2": 8792197,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualization on our front-end:

https://blockchair.com/ethereum/erc-20/transactions
Misc endpointsBroadcasting transactionsBroadcast a transaction to the network

Endpoints:

https://api.blockchair.com/{:chain}/push/transaction (POST request)
Where:

{:chain} can be one of these: bitcoin, bitcoin-cash, ethereum, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, bitcoin/testnet, mixin
POST data should contain data parameter with raw transaction represented in hex (for Ethereum it should start with 0x)
Output:

If the transaction has been successfully broadcast to the network, API will return a JSON response (code 200) containing data array with transaction_hash key holding the hash of the received transaction. In case of any error (wrong transaction format, spending already spent outputs, etc.) API returns status code 400 and an error desription if available (descriptions aren't shown for ethereum and mixin).

Example of a successful response:

{
  "data": {
    "transaction_hash": "0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098"
  },
  "context": {
  	"code": 200,
  	...
  }
}


Example of a response to an invalid transaction:

{
  "data": null,
  "context": {
    "code": 400,
    "error": "Invalid transaction. Error: 16: mandatory-script-verify-flag-failed (Signature must use SIGHASH_FORKID)"
    ...
  }
}


Example request:

> curl -v --data "data=01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000" https://api.blockchair.com/bitcoin/push/transaction


Tip: for testing purpose it's possible to use GET request instead of POST like this: https://api.blockchair.com/bitcoin/push/transaction?data=0100000001000000000000000000000000...

Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/broadcast
NodesList of full network nodes

Endpoints:

https://api.blockchair.com/{:btc_chain}/nodes (agregated data on nodes + node list)
https://api.blockchair.com/nodes (agregated data on nodes for 8 networks at once)
Please note that the number of nodes is also available in the https://api.blockchair.com/stats and https://api.blockchair.com/{:btc_chain}/stats endpoints output.

Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash
Output:

data contains an array of arrays:

data.nodes — the node list; the key is {:ip}:{:port}, each element contains version (node version), country (2 letter country code derived from the IP address based on geolocation), height (node reports this number as the best block number it has, flags (special field with node options)
data.count — total number of nodes
data.countries — number of nodes grouped by country codes
data.versions — number of nodes grouped by node version
data.heights — number of nodes grouped by their best block height
https://api.blockchair.com/nodes endpoint shows this data for 8 coins at once (bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash), but it doesn't have the data.nodes array, i.e. there's only aggregated data.

Example output:

https://api.blockchair.com/bitcoin/nodes:

{
  "data": {
    "nodes": {
      "1.171.38.197:8333": {
        "version": "/Satoshi:0.18.1/",
        "country": "TW",
        "height": 599960,
        "flags": 1036
      },
      "1.172.110.250:8333": {
        "version": "/Satoshi:0.18.0/",
        "country": "TW",
        "height": 599895,
        "flags": 1037
      },
      ...
    },
    "count": 8923,
    "countries": {
      "US": 2745,
      "DE": 1589,
      ...
    },
    "versions": {
      "/Satoshi:0.18.0/": 2974,
      "/Satoshi:0.18.1/": 1753,
      ...
    },
    "heights": {
      ...
      "599960": 414,
      "599961": 4684,
      "599962": 982,
      "599963": 1738,
      ...
    }
  },
  "context": {
    "code": 200,
    "state": 599963,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/nodes
https://blockchair.com/bitcoin/nodes
https://blockchair.com/bitcoin-cash/nodes
https://blockchair.com/litecoin/nodes
https://blockchair.com/bitcoin-sv/nodes
https://blockchair.com/dogecoin/nodes
https://blockchair.com/dash/nodes
https://blockchair.com/groestlcoin/nodes
https://blockchair.com/zcash/nodes
State changesAllows to query state changes caused by a block and potential state changes caused by mempool transactions in case they get confirmed.

Endpoints:

https://api.blockchair.com/{:chain}/state/changes/block/{:height} (state changes caused by a block)
https://api.blockchair.com/{:chain}/state/changes/mempool (potential state changes caused by mempool transactions)
Where:

{:chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, bitcoin/testnet. The first endpoint also supports ethereum
{:height} is the block height (integer value), also known as block id
Output:

The response contains an array where the keys are addresses which were affected by the block (or the mempool), and the values are balance changes.

Note: values are returned as strings for Ethereum.

No iteration required, this endpoint outputs all state changes at once.

Example requests:

https://api.blockchair.com/bitcoin/state/changes/block/170
https://api.blockchair.com/bitcoin/state/changes/mempool
https://api.blockchair.com/ethereum/state/changes/block/46147
Example output:

https://api.blockchair.com/bitcoin/state/changes/block/170:

{
  "data": {
    "1PSSGeFHDnKNxiEyFrD1wcEaHr9hrQDDWc": 5000000000,
    "1Q2TWHE3GMdB6BZKafqwxXtWAWgFt5Jvm3": 1000000000,
    "12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S": -1000000000
  },
  "context": {
    ...
    "results": 3,
    ...
  }
}


The block in this example was the first Bitcoin block which contained a non-coinbase transaction. We can see the coinbase reward here (50 BTC) sent to the miner, and two state changes caused by a 10 BTC transaction.

Example usage:

This endpoint may be useful if you need to track balance changes for a lot of addresses — you can simply track state changes and find the needed addresses there instead of constantly retrieving information about the balances. Here's an example logic for an application watching for Bitcoin transactions incoming/outgoing to/from 1 million addresses:

latest_known_block_height = 0
addresses = [1Abc, 1Efg, 1Hij, ...]
while (true)
    api_response = api_request('https://api.blockchair.com/bitcoin/state/changes/mempool')
    if any of api_response.data keys are in the addresses array
        print 'Found new transaction in the mempool'
    if latest_known_block_height < api_response.context.state // A new block has been mined (context.state always yields the latest block number)
        latest_known_block_height = api_response.context.state
        api_response_block = api_request('https://api.blockchair.com/bitcoin/state/changes/block/{:api_response.context.state}')
        if any of api_response_block.data keys are in the addresses array
            print 'Found new transaction in the latest block'
    sleep(10) // The mempool data is cached for 10 seconds on our servers by default


Note that this example doesn't account for cases like new multiple blocks have been found while you were requesting the latest one, etc. See this example as a possible workaround: https://github.com/Blockchair/Blockchair.Support/pull/207/files

Request cost formula:

5 for changes caused by a block, 10 for changes caused by mempool transactions.

Available block rangesAs Blockchair doesn't store historical data for some blockchains (at this moment this applies to Ripple and Stellar only) it may be useful to know which blocks can be queried.

Endpoint:

https://api.blockchair.com/range
Output:

The response contains an array where the keys are blockchains, and the values are arrays containing:

blockchain_first_entry — first block (or ledger) id on the blockchain
blockchain_first_entry_date — its date
blockchair_first_entry — first block id Blockchair processes
blockchair_first_entry_date — its date
is_full — whether we have the full history for this blockchain
Example output:

https://api.blockchair.com/range:

{
  "data": {
    "bitcoin": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2009-01-03",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2009-01-03",
      "is_full": true
    },
    "bitcoin-cash": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2009-01-03",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2009-01-03",
      "is_full": true
    },
    "ethereum": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2015-07-30",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2015-07-30",
      "is_full": true
    },
    "litecoin": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2011-10-07",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2011-10-07",
      "is_full": true
    },
    "bitcoin-sv": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2009-01-03",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2009-01-03",
      "is_full": true
    },
    "dogecoin": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2013-12-06",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2013-12-06",
      "is_full": true
    },
    "dash": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2014-01-19",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2014-01-19",
      "is_full": true
    },
    "ripple": {
      "blockchain_first_entry": 32570,
      "blockchain_first_entry_date": "2013-01-01",
      "blockchair_first_entry": 52688390,
      "blockchair_first_entry_date": "2020-01-12",
      "is_full": false
    },
    "groestlcoin": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2014-03-20",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2014-03-20",
      "is_full": true
    },
    "stellar": {
      "blockchain_first_entry": 1,
      "blockchain_first_entry_date": "2015-09-30",
      "blockchair_first_entry": 27225363,
      "blockchair_first_entry_date": "2019-12-11",
      "is_full": false
    },
    "monero": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2014-04-18",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2014-04-18",
      "is_full": true
    },
    "bitcoin/testnet": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2011-02-02",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2011-02-02",
      "is_full": true
    },
    "cardano": {
      "blockchain_first_entry": 1,
      "blockchain_first_entry_date": "2017-09-23",
      "blockchair_first_entry": 1,
      "blockchair_first_entry_date": "2017-09-23",
      "is_full": true
    },
    "zcash": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2016-10-28",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2016-10-28",
      "is_full": true
    },
    "mixin": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2019-02-28",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2019-02-28",
      "is_full": true
    },
    "tezos": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2018-06-30",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2018-06-30",
      "is_full": true
    },
    "eos": {
      "blockchain_first_entry": 1,
      "blockchain_first_entry_date": "2018-06-08",
      "blockchair_first_entry": null,
      "blockchair_first_entry_date": null,
      "is_full": false
    }
  },
  "context": {
    "code": 200,
    ...
  }
}


Request cost formula:

Always 1.

Release monitorThis endpoint returns the list of latest software (core clients) releases for blockchains we support. This may be useful for those who want to track blockchain development, new features, and hard forks (especially this is useful for multi-currency blockchain software — wallets or exchanges — developers). Never miss a BSV hard fork anymore!

Endpoint:

https://api.blockchair.com/tools/releases
Possible options:

?chain={:chain} displays latest releases for {:chain} only
Output:

data contains an array of latest releases sorted by time for all chains we support (or for a specific chain if ?chain is set). Each element is an array with the following elements:

chain — chain id
version — tag name
time — release publish time (UTC)
link — link to this release on GitHub
context has two special fields:

latest_update — latest update time (UTC)
supported_chains — array of chains monitored with their chain ids and software names
Example requests:

https://api.blockchair.com/tools/releases
https://api.blockchair.com/tools/releases?chain=bitcoin
Example output:

https://api.blockchair.com/tools/releases:

{
  "data": [
    {
      "chain": "bitcoin-sv",
      "version": "Bitcoin SV v1.0.1",
      "time": "2020-01-28 11:35:26",
      "link": "https://github.com/bitcoin-sv/bitcoin-sv/releases/tag/v1.0.1"
    },
    {
      "chain": "dash",
      "version": "Dash Core v0.15.0.0-rc2",
      "time": "2020-01-27 20:12:45",
      "link": "https://github.com/dashpay/dash/releases/tag/v0.15.0.0-rc2"
    },
    {
      "chain": "groestlcoin",
      "version": "Groestlcoin Core v2.18.2",
      "time": "2020-01-25 12:53:41",
      "link": "https://github.com/Groestlcoin/groestlcoin/releases/tag/v2.18.2"
    },
    {
      "chain": "stellar",
      "version": "Stellar Core v12.3.0rc2",
      "time": "2020-01-24 04:57:51",
      "link": "https://github.com/stellar/stellar-core/releases/tag/v12.3.0rc2"
    },
    {
      "chain": "stellar",
      "version": "Stellar Core v12.3.0rc1",
      "time": "2020-01-22 23:54:01",
      "link": "https://github.com/stellar/stellar-core/releases/tag/v12.3.0rc1"
    },
    {
      "chain": "bitcoin-cash",
      "version": "Bitcoin ABC v0.20.11",
      "time": "2020-01-21 21:46:10",
      "link": "https://github.com/Bitcoin-ABC/bitcoin-abc/releases/tag/v0.20.11"
    },
    {
      "chain": "ethereum",
      "version": "Geth v1.9.10",
      "time": "2020-01-20 10:36:41",
      "link": "https://github.com/ethereum/go-ethereum/releases/tag/v1.9.10"
    },
    ...
  ],
  "context": {
    "code": 200,
    "latest_update": "2021-03-12 10:36:16",
    "supported_chains": {
      "bitcoin": "Bitcoin Core",
      "bitcoin-abc": "Bitcoin ABC",
      "bitcoin-cash": "Bitcoin Cash Node",
      "ethereum": "Geth",
      "litecoin": "Litecoin Core",
      "bitcoin-sv": "Bitcoin SV",
      "dogecoin": "Dogecoin Core",
      "dash": "Dash Core",
      "ripple": "rippled",
      "groestlcoin": "Groestlcoin Core",
      "stellar": "Stellar Core",
      "monero": "Monero",
      "cardano": "Cardano Node",
      "zcash": "Zcash",
      "mixin": "Mixin",
      "eos": "EOSIO"
    },
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/tools/release-monitor
Halvening countdownWhile {:chain}/stats endpoints already include info on various countdowns (i.e. to some hard forks), this is a separate endpoint to track halving events in UTXO coins.

Endpoint:

https://api.blockchair.com/tools/halvening
Output:

data contains an array of next halvening event data for all chains we support. Each element is an array with the following elements which are self-describing.

context has a special array:

supported_chains — array of chains monitored
Example requests:

https://api.blockchair.com/tools/halvening
Example output:

https://api.blockchair.com/tools/halvening:

{
  "data": {
    "bitcoin": {
      "current_block": 616264,
      "current_reward": 1250000000,
      "halvening_block": 630000,
      "halvening_reward": 625000000,
      "halvening_time_approximate": "2020-05-12 01:29:34",
      "seconds_left_approximate": 8241000,
      "blocks_left": 13735
    },
    "bitcoin-cash": {
      "current_block": 621124,
      "current_reward": 1250000000,
      "halvening_block": 630000,
      "halvening_reward": 625000000,
      "halvening_time_approximate": "2020-04-08 07:29:34",
      "seconds_left_approximate": 5325000,
      "blocks_left": 8875
    },
    "bitcoin-sv": {
      "current_block": 620900,
      "current_reward": 1250000000,
      "halvening_block": 630000,
      "halvening_reward": 625000000,
      "halvening_time_approximate": "2020-04-09 20:49:34",
      "seconds_left_approximate": 5459400,
      "blocks_left": 9099
    }
  },
  "context": {
    "code": 200,
    "supported_chains": [
      "bitcoin",
      "bitcoin-cash",
      "bitcoin-sv"
    ],
    ...
    }
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/tools/halving-countdown
Premium API endpointsPremium API usage statsThis is a special endpoint for Premium API users showing some stats on your API key usage.

Endpoint:

https://api.blockchair.com/premium/stats?key={:api_key}
Where:

{:api_key} is your secret API key
Output:

An array with stats:

valid_until — timestamp when the key expires; after that point the key will be invalid
max_requests_per_day or max_requests_in_parallel (depending on the API plan) — your limit on the number of requests
requests_today — number of requests you made today
Please be advised that

requests_today shows not the number of HTTPS requests you made to the API, but the total number of used "request points" (as some requests "cost" more than 1)
The request counter is reset daily at 00:00 UTC
Example request:

https://api.blockchair.com/premium/stats?key=myfirstpasswordwas4321andifeltsmartaboutit
Example output:

https://api.blockchair.com/premium/stats?key=myfirstpasswordwas4321andifeltsmartaboutit:

{
  "data": {
    "valid_until": "2020-01-01 00:00:00",
    "max_requests_per_day": 100000,
    "requests_today": 50000
  },
  "context": {
   ...
  }
}


Request cost formula:

Always 0. This request is free to use.

Privacy-o-meterIntroductionWhile Bitcoin is considered to be a privacy-oriented system, the blockchain is open to analyze by anyone, and there are numerous transaction tracing tools like Chainalysis, Coinfirm, Elliptic, CipherTrace, and Crystal. They're all not free, and Bitcoin users rarely have a chance to see how deep the rabbit hole goes. We start with a simple transaction scoring tool, and will soon expand this even further. We'll provide this service for free as we hope it'd help Bitcoin users to take some of their privacy back.

Transaction tracing is quite an easy task on the Bitcoin blockchain due to the following reasons:

Most users aren't concerned enough about their privacy and make rookie mistakes like sending round BTC amounts
Wallet software developers mostly don't care about user privacy. Taking the previous example in context, there are no warnings if user tries to send a round amount.
There are multiple wallets with different transaction processing rules making it possible to figure out what software type given user uses
Bitcoin blockchain is congested due to refusal to properly scale — that makes using mixers very expensive and cumbersome
While there are multiple protocols allowing more secure ways to transact (like shielded transactions on Zcash), these are not implemented in Bitcoin out of fears of changing the protocol
Bitcoin has multiple standard script types, their number has been recently increased with the activation of SegWit, and will increase further with new constructs built on top of SegWit
Here's a good overview of some basic heuristics: https://en.bitcoin.it/wiki/Privacy — we use most of them and introduce many new ones. The full list of heuristics we're using is available below.

At the moment, Privacy-o-meter is available for Bitcoin only, but we'll soon expand it to other UTXO-based coins, and then to all the others we support.

A couple of examples of transactions with bad and good privacy scores

Take this transaction as an example: https://blockchair.com/bitcoin/transaction/116bd19a3ec5f210ce72043115a4d5d3ef08f7556829c4feac8d89de3195ea4e

It has 2 inputs and 2 outputs:

Input addressesInput valuesOutput valuesOutput addressesbc1qj9p0huddhg5pzccur…0.96350000 BTC⟾1.00000000 BTC3EgAFC6FKojYUu53…bc1qrpfxyvdc3fqmyux54…281.65022105 BTC⟾281.61332105 BTCbc1qva7utdxd6easlj…
And also the following characteristics:

Uses SegWit: yes
Lock time: 0
Version: 1
An analyst will be able to gather lots of metadata looking at this transaction:

First output has a round amount of 1 bitcoin
First output has a P2SH address type while both inputs and the second output are P2WSH
Given (1) and (2) it can be assumed that 3EgAFC6FKojYUu53… is the recipient, and bc1qva7utdxd6easlj… is the change address. Thus we can say that bc1qj9p0huddhg5pzccur…, bc1qrpfxyvdc3fqmyux54…, and bc1qva7utdxd6easlj… can be clusterized as belonging to one entity
There's a discrepancy: if the sender wanted to send just 1 bitcoin, there's no need for the first output to be in the transaction, the second would be more than sufficient. That shows that the sender is probably using a non-standard wallet software
The transaction's lock time value is 0 and the sender uses SegWit-copmatible software that generates version 1 transactions. That and (4) can be used to single out the sender's wallet software
Our system gives this transaction the score of 0 as it's too clear which output is the recipient and which is the change.

One important point: it's not probable, but still possible that this partiular transaction's sender tries to confuse forensics software and all the conclusions are incorrect. So, basically, if you're trying to increase your privacy level knowing how to do that, and getting the 0 score, you're probably doing that right.

Let's take another transaction to show some contrast: https://blockchair.com/bitcoin/transaction/24a517dd2ffbb3a290eeee75d6dea2c62df7ebcd6f898b703b70dc031baa8a18

It has 1 input and 2 outputs:

Input addressesInput valuesOutput valuesOutput addresses12CBjcNtRU7c795neLC…0.01006987 BTC⟾0.00344481 BTC199eZE5j4shSU7D9…0.00640487 BTC1CGL5micNcJbMaV…
This is a relatively rare example of a transaction getting a 100 score. It's not possible to distinguish the recipient from the change address just by analyzing this transaction.

Heuristics we use:

Heuristic keyHeuristic nameDescription and notesAffects clusterization?Example transactionAPI exampleMost common heuristics♠♠♠♠♠inputsCo-spendingUnless it's a CoinJoin transaction it's safe to assume that all input addresses belong to one person+👉👉script_typesScript typesIf all inputs has the same type, and exactly one of the outputs is not of the same type — this output can be considered as the recipient+👉👉p2sh_typesP2SH multisig typesIf all inputs are m of n multisig P2SH, and all outputs are multisig P2SH, but exactly one of the outputs has another m of n structure — this output can be considered as the recipient+👉👉p2wsh_typesP2WSH multisig typesIf all inputs are m of n multisig P2WSH, and all outputs are multisig P2WSH, but exactly one of the outputs has another m of n structure — this output can be considered as the recipient+👉👉round_valueRound valueIf one of the outputs has a round value (like exactly 1 BTC) — this output can be considered as the recipient+👉👉recipient_by_valueRecipient by bigger valueIf the recipient is the smaller output, there's no point in having some of the inputs+👉👉t1-2_bigger_value_25Output value x25One of the two outputs is 25 times bigger than the other meaning that it's potentially the change output+👉👉t1-2_bigger_value_100Output value x100- 〃 - 〃 - 100 times bigger+👉👉t1-2_bigger_value_250Output value x250- 〃 - 〃 - 250 times bigger+👉👉t1-2_bigger_value_1000Output value x1000- 〃 - 〃 - 1000 times bigger+👉👉coinbase_knownKnown minerThe recipient is the known miner👉👉coinbase_unknownUnknown minerThe recipient is an unknown miner👉👉coinjoinCoinjoinThis is a CoinJoin transaction. This cancels all other heuristics.+👉👉round_feeRound feeThe transaction has a round fee amount, the sender is probably using some specific software👉👉rare_fingerprintRare fingerprintThis transaction has quite unique technical characteristics👉👉Specific order of inputs and outputs♠♠♠♠♠asc_output_valuesAscending output valuesFor transaction with more than 5 outputs — they are ordered by value ascending — that may due to some specific software usage👉👉desc_output_valuesDescending output valuesSame, but in descending order. Generally, all descending patterns are more rare than ascending.👉👉asc_output_addressesAscending output addressesSame, but this time it's addresses sorted in alphabetical order👉👉desc_output_addressesDescending output addresses- 〃 - 〃 - (Very rare)👉👉asc_input_valuesAscending input values- 〃 - 〃 - Same, but for inputs👉👉desc_input_valuesDescending input values- 〃 - 〃 -👉👉asc_input_addressesAscending input addresses- 〃 - 〃 - (Very rare)👉👉desc_input_addressesDescending input addresses- 〃 - 〃 - (Very rare)👉👉asc_input_timestampsAscending input timestamps- 〃 - 〃 - Same, inputs are sorted by age👉👉desc_input_timestampsDescending input timestamps- 〃 - 〃 -👉👉asc_output_values_except_firstAscending output values except firstAll outputs are sorted by value ascending except for the first one, that may mean that the first output is the change address. But this is a quite vague heuristic, thus we don't use it in clusterization.👉👉asc_output_values_except_lastAscending output values except last- 〃 - 〃 -👉👉asc_output_addresses_except_firstAscending output addresses except first- 〃 - 〃 -👉👉asc_output_addresses_except_lastAscending output addresses except last- 〃 - 〃 -👉👉desc_output_values_except_firstDescending output values except first- 〃 - 〃 -👉👉desc_output_values_except_lastDescending output values except last- 〃 - 〃 -👉👉desc_output_addresses_except_lastDescending output addresses except last- 〃 - 〃 -👉👉desc_output_addresses_except_firstDescending output addresses except first- 〃 - 〃 -👉👉Reuse of the same address♠♠♠♠♠simple_reuse_1-2Address reuseThe sender uses the same address for receiving and for change👉👉simple_reuse_N-2Address reuseThe sender uses the same address for receiving and for change👉👉simple_reuse_1-NAddress reuseThe sender (probably an exchange) uses the same address for receiving and for change👉👉simple_reuse_same_address_in_inputsSame address in inputsThere's multiple occurences of the same address in inputs👉👉Sweeps♠♠♠♠♠sweep_1-1Sweep (1-1)The sender uses the "send everything" option to either pay someone (e.g. an exchange) or just moving the funds to another wallet (1 input)👉👉sweep_1-1_to_another_typeSweep to another type (1-1)- 〃 - 〃 - Same, but the outputs is of another type. The sender is either paying someone or moving the funds to a new wallet type (1 input)👉👉sweep_N-1Sweep- 〃 - 〃 - Same, but with multiple inputs👉👉sweep_N-1_to_another_typeSweep to another type- 〃 - 〃 - Same, but to another address type👉👉Discrepancies♠♠♠♠♠discrepancy_unnecessary_inputsDiscrepancy: unnecessary inputThe smaller input is unnecessary, as whichever of the outputs is the recipient, there's no need to include that input👉👉discrepancy_input_typesDiscrepancy: various input typesThe inputs are of different types. That means the sender is probably using the software allowing to create the same address type for the change as the recipient has, trying to circumvent the script_types heuristic👉👉discrepancy_script_types_and_round_valueDiscrepancy between Script types and Round valuescript_types and round_value heuristics yield different results+👉👉discrepancy_script_types_and_recipient_by_valueDiscrepancy between Script types and Recipient by valuescript_types and recipient by value heuristics yield different results+👉👉discrepancy_round_value_and_recipient_by_valueDiscrepancy between Round value and Recipient by valueround_value and recipient by value heuristics yield different results+👉👉discrepancy_p2sh_various_input_typesDiscrepancy: various P2SH input typesThe P2SH input types are different (e.g. one is 2-of-2 multisig, and the other is 2-of-3). Very rare.👉👉discrepancy_p2wsh_various_input_typesDiscrepancy: various P2WSH input types- 〃 - 〃 - Same, but for P2WSHN/AN/Adiscrepancy_same_address_in_outputsDiscrepancy: output address duplicatesThere are outputs with the same address — that makes no economical sense👉👉discrepancy_no_output_of_the_same_type_as_inputsDiscrepancy: no output of the same type as inputsProbably the sender uses software generating the same change address type as the recipient address has👉👉
Possible transaction types are:

Type codeDescriptionCBCoinbase transactionN1Transaction with just 1 output (either a sweep to another address by the same owner, or a transfer using a "send everything I have" option)N2Transaction with 2 outputs — most common in wallets — where one of the outputs is the recipient, and the other one is the change addressNNTransaction with more than 2 outputs — most common in exchanges and services that use payout batching
Transaction fingerprint:

PropertyPossible valuesDescriptionlock_time0, rare, block_id, big_value, timestampDepending on wallet software, lock_time property can either be 0, or a block height, or some timestamp. In rare cases it's some other value (rare or big_value)version1, 2, unknownVersions 1 and 2 are distributed almost equally these dayshas_witnesstrue, falseSegWit usage is a distinctive property — there are wallets and exchanges who are known to be using or not using SegWit
News listEndpoint:

https://api.blockchair.com/news?{:query}
Where:

{:query} is the query against the table (how to build a query)
This endpoint acts like an Infinitable meaning you can perform SQL-like queries: filter sort, and aggregate news articles.

data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?titlestringHeadline~sourcestring (domain name)Source (domain name)=languagestring [a-z]{2}Supported languages: ar, de, en, es, fa, fr, it, jp, ko, nl, pt, ru, tr, zh=linkstring (URL)URL to the article on the source websitelink_ampstring (URL)URL to the AMP (Accelerated Mobile Pages) article on the source website or false if AMP is not available. null if it hasn't been processed yet (usually it takes under a few seconds)link_iframablebooleantrue if the page could be put into an iframe (false otherwise). Note that there's no guarantee this value is valid as the source can change its policy after the page was crawled! null if it hasn't been processed yet (usually it takes under a few seconds)timeYYYY-MM-DD HH:ii:ssTimestamp⌘+tagsstring (comma-separated list)Comma-separated list of tags by the publisherdescriptionstringShort description~hash[0-9a-f]{10}Internal Blockchair hash (unique id)=filestringInternal Blockchair article namepermalinkstring (URL)URL to the article on Blockchair.com
Default sorting is by time descending.

Some examples:

The latest crypto news in English: https://api.blockchair.com/news?q=language(en)
Find news about Blockchair: https://api.blockchair.com/news?q=title(~blockchair),or,description(~blockchair)
Find news about Blockchair in English: https://api.blockchair.com/news?q=language(en),title(~blockchair),or,description(~blockchair)
Example output:

https://api.blockchair.com/news?q=language(en):

{
  "data": [
    {
      "title": "Ten Days Remain Where Buying Bitcoin Was Unprofitable",
      "source": "bitcoinist.com",
      "language": "en",
      "link": "https://bitcoinist.com/ten-days-remain-where-buying-bitcoin-was-unprofitable/",
      "link_amp": false,
      "link_iframable": true,
      "time": "2020-11-17 15:00:31",
      "tags": "Bitcoin, bitcoin, btc, btcusd, btcusdc, BTCUSDT, crypto, XBT, xbtusd",
      "description": "Believe it or not, Bitcoin price is now trading at over $17,000, even though earlier this year it crashed to under $4,000. From low to high, the leading cryptocurrency by market cap rallied over 350%. With prices now trading around highs from late 2017 and early 2018 when Bitcoin had set its peak, it has left only ten days remaining where buying BTC was unprofitable. Bitcoin Faces $17,200 Where Bear Market Began, Final Resistance Before [&#8230;]",
      "hash": "cbe09bd89c",
      "file": "ten-days-remain-where-buying-bitcoin-was-unprofitable",
      "permalink": "https://blockchair.com/en/news/ten-days-remain-where-buying-bitcoin-was-unprofitable--cbe09bd89c"
    },
    ...
  ],
  "context": {
    "code": 200,
    "limit": 10,
    "offset": 0,
    "rows": 10,
    "request_cost": 1,
    ...
  }
}


Request cost formula:

1 + infinitable costs may apply.

Explore how this functionality works on Blockchair: https://blockchair.com/news (try to switch languages as well!)

Want your media outlet to be included? Please contact us at info@blockchair.com

News aggregatorNot only Blockchair API provides you with blockchain data, but also with some crypto news to integrate into your app. We're aggregating data from more than 60 news outlets in 14 languages, populating over 35,000 headlines into our database a month.

SupportE-mail: info@blockchair.com
Github issue tracker: https://github.com/Blockchair/Blockchair.Support/issues
Explorers
BitcoinEthereumCardanoDogecoinRipplePolkadotBitcoin CashLitecoinSolana newZcashMoneroDashStellarBitcoin SVEOSKusamaeCashMixinGroestlcoinTether USDUSD CoinBinance USD
Data
APIDatabase dumpsFull node dumpsCharts
Services
Blockchair NewsBlockchair DonutBlockchair Awesome
Products
Transaction receiptsWallet statementsPortfolio trackerBroadcast transactionPrivacy-o-meterNode explorersRelease monitorHalving countdownCompare blockchainsGet Blockchair extension
Useful links
About Blockchair
FAQ
Changelog
Careers
Terms of service
Privacy policy
Blockchair Onion v3 URL 
Blockchair Onion v2 URL 
For partners
PartnershipsAdvertise with usBrand kit
For developers
Submit a bug or requestBug bounty programAPI documentationStatus
Social
TwitterTelegramGitHubLinkedIn
Languages
EnglishEspañolFrançaisItalianoNederlandsPortuguêsРусский中文فارسیВahasa IndonesiaTürkçe日本語한국어
© 2021 Blockchair1.010-2957-g49c94973 Tue 28 Dec 2021 09:31:25 AM UTC
   / __ )/ /___  _____/ /_______/ /_  ____ _(_)____
  / __  / / __ \/ ___/ //_/ ___/ __ \/ __ `/ / ___/
 / /_/ / / /_/ / /__/ ,< / /__/ / / / /_/ / / /    
/_____/_/\____/\___/_/|_|\___/_/ /_/\__,_/_/_/     
                                                   


IntroductionBlockchair API provides developers with access to data contained in 18 different blockchains. Unlike other APIs, Blockchair also supports numerous analytical queries like filtering, sorting, and aggregating blockchain data.

Here are some examples of what you can build using our API:

A wallet supporting multiple blockchains (request transaction, address, xpub data, and also broadcast transactions)
An analytical service showing some blockchain stats and visualizations
A service tracking the integrity of your or your customers' cold wallets
A solid academic research
Some fun stuff like finding the first Bitcoin block over 1 megabyte in size
For some tasks like extracting lots of blockchain data (e.g. all transactions over a 2 month period) it's better to use our Database dumps feature instead (see https://blockchair.com/dumps for documentation) — it's possible to download the entire database dumps in TSV format and insert the data onto your own database server (like Postgresql or whatever) to further analyze it.

Almost every API endpoint description is accompanied with an example visualization of the data on our website (https://blockchair.com), and it's also worth it to note that the website is working completely using our API (yes, even the data for charts is pulled from one of our endpoints, and it's fully customizable).

Blockchair cares about user privacy, we neither collect nor share with anyone your personal data rather than for statistical purposes. That includes using the API as well. Please refer to our Privacy policy: https://blockchair.com/privacy. Please also check out our Terms of service available here: https://blockchair.com/terms — by using our API, you are agreeing to these terms.

We have a public tracker for bugs, issues, and questions available on GitHub: https://github.com/Blockchair/Blockchair.Support/issues — please use it or contact us by any other means available.

Our API is free to try under some limitations, and we have a variety of premium plans. Please check out the information about the limits and plans.

Supported blockchains and second layersAs of today, our API supports 19 blockchains (17 mainnets and 2 testnets) divided into 9 groups:

Bitcoin-like blockchains (Bitcoin, Bitcoin Cash, Litecoin, Bitcoin SV, Dogecoin, Dash, Groestlcoin, Zcash, eCash, Bitcoin Testnet), also known as UTXO-based blockchains
Ethereum-like blockchains (Ethereum, Ethereum Goerli Testnet)
Ripple-like blockchains (Ripple)
Stellar-like blockchains (Stellar)
Monero-like blockchains (Monero)
Cardano-like blockchains (Cardano)
Mixin-like DAGs (Mixin) — technically, it's a DAG rather than a blockchain, but for the sake of unification it may be mentioned as a blockchain further in this documentation
Tezos-like blockchains (Tezos)
EOS-like blockchains (EOS)
Within a group, there's no or little difference between the set of available endpoints and their output.

Here's the list of available mainnets:

BlokchainGroupAPI path prefixSupport statusBitcoinBitcoin-likehttps://api.blockchair.com/bitcoinFull supportBitcoin CashBitcoin-likehttps://api.blockchair.com/bitcoin-cashFull supportEthereumEthereum-likehttps://api.blockchair.com/ethereumFull supportLitecoinBitcoin-likehttps://api.blockchair.com/litecoinFull supportBitcoin SVBitcoin-likehttps://api.blockchair.com/bitcoin-svFull supportDogecoinBitcoin-likehttps://api.blockchair.com/dogecoinFull supportDashBitcoin-likehttps://api.blockchair.com/dashFull supportRippleRipple-likehttps://api.blockchair.com/rippleAlpha mode, possible compatibility-breaking changesGroestlcoinBitcoin-likehttps://api.blockchair.com/groestlcoinFull support at least till January 1st, 2021StellarStellar-likehttps://api.blockchair.com/stellarAlpha mode, possible compatibility-breaking changesMoneroMonero-likehttps://api.blockchair.com/moneroAlpha mode, possible compatibility-breaking changesCardanoCardano-likehttps://api.blockchair.com/cardanoAlpha mode, possible compatibility-breaking changesZcashBitcoin-likehttps://api.blockchair.com/zcashFull supportMixinMixin-likehttps://api.blockchair.com/mixinFull support at least till April 24th, 2021TezosTezos-likehttps://api.blockchair.com/tezosAlpha mode, possible compatibility-breaking changesEOSEOS-likehttps://api.blockchair.com/eosAlpha mode, possible compatibility-breaking changeseCashBitcoin-likehttps://api.blockchair.com/ecashBeta mode, possible instability. Also known as Bitcoin Cash ABC and Bitcoin ABC.
Please read our statement on the November 15th, 2020 Bitcoin Cash split: https://twitter.com/Blockchair/status/1324424632179576832. It is expected that Bitcoin ABC's hashrate will be very low so 51% attacks are possible. We'll be running Bitcoin ABC in beta mode and we don't guarantee neither its stability, nor that we'll run it if the chain won't be used by businesses. Once the situation becomes more stable we'll update the documentation. At the moment, other parts of the documentation don't reflect Bitcoin ABC support, so please assume that for every bitcoin-cash endpoint there's a bitcoin-abc equivalent except for https://api.blockchair.com/bitcoin-cash/nodes.

There are also following testnets supported which are technically considered as separate blockchains:

BlokchainGroupAPI path prefixSupport statusBitcoin TestnetBitcoin-likehttps://api.blockchair.com/bitcoin/testnetFull supportEthereum Goerli TestnetEthereum-likehttps://api.blockchair.com/ethereum/testnetDevelopment mode, no guaranteed stability
We aim to support more blockchains (and their testnets) in future to cover as many users as possible. We don't disclose which blockchains we'll add next and how we choose them, but our main markers are daily number of real transactions and market capitalization. If you're representing a coin community which would like to add its blockchain to our platform, we'd be happy to talk.

As a general rule, if we add a blockchain to our platform, it means we'll support it and related functions indefinitely. However, there are some exceptions:

Since a blockchain system can be an unstable product, we may cease support in case the blockchain itself (or the node software we're using) stops to function or starts to function improperly;
If a blockchain hard-forks and that results in a new ruleset we can't support for technical or other reasons, we may either drop support for this blockchain, or don't accept the new ruleset;
If a blockchain is community-backed, we guarantee support till some specified date (this is reflected in the tables above). If its community decides not to prolong the agreement with Blockchair after that date, we may either continue to support that blockchain for free, or drop support for it;
If we see that a particular blockchain became unpopular on our platform, we may terminate its support with a 3 month notice.
For some of the blockchains we support we don't store full historical data. These blockchains are: Ripple, Stellar, EOS. That means you won't be able to query some old blocks, and the transaction list for an address may not show some old transactions. See Available block ranges API endpoint to get data on which blocks are available in these blockchains. All other blockchains have full historical data. It's our intent to have full historical data for all blockchains.

Blockchair API also supports 2 layer 2 solutions (tokens) divided into 2 groups:

Omni-like tokens (Omni Layer on top of Bitcoin)
ERC-20-like tokens (ERC-20's on top of Ethereum)
Like with blockchains, within a group, there's no or little difference between the available endpoints.

Layer 2GroupParent blockchainAPI path prefixSupport statusOmni LayerOmni-likeBitcoinhttps://api.blockchair.com/bitcoin/omniAlpha supportERC-20ERC-20-likeEthereumhttps://api.blockchair.com/ethereum/erc-20Beta support
We also plan to bring ERC-721 support in the future.

Ethereum Goerli Testnet also supports ERC-20's.

Wormhole support was dropped on January 1st, 2020 with a 3-month notice as it's not used by anyone anymore.

Quick endpoint referenceThis is the full list of available API endpoints.

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, or bitcoin/testnet
{:eth_chain} can be ethereum or ethereum/testnet
{:xrp_chain} can be only ripple
{:xlm_chain} can be only stellar
{:xmr_chain} can be only monero
{:ada_chain} can be only cardano
{:xin_chain} can be only mixin
{:xtz_chain} can be only tezos
{:eos_chain} can be only eos
{:xchain_token} can be tether, usd-coin, or binance-usd
Endpoint pathDocsBase request costStatusGeneral stats———https://api.blockchair.com/stats👉1Stablehttps://api.blockchair.com/{:btc_chain}/stats👉1Stablehttps://api.blockchair.com/{:eth_chain}/stats👉1Stablehttps://api.blockchair.com/{:xrp_chain}/stats👉1Stablehttps://api.blockchair.com/{:xlm_chain}/stats👉1Stablehttps://api.blockchair.com/{:xmr_chain}/stats👉1Stablehttps://api.blockchair.com/{:ada_chain}/stats👉1Stablehttps://api.blockchair.com/{:xin_chain}/stats👉1Stablehttps://api.blockchair.com/{:xtz_chain}/stats👉1Stablehttps://api.blockchair.com/{:eos_chain}/stats👉1Stablehttps://api.blockchair.com/cross-chain/{:xchain_token}/stats👉1AlphaBlock-related information———https://api.blockchair.com/{:btc_chain}/dashboards/block/{:height}₀👉1Stablehttps://api.blockchair.com/{:btc_chain}/dashboards/block/{:hash}₀👉1Stablehttps://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:height}₀,...,{:height}ᵩ👉1 + 0.1*cStablehttps://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:hash}₀,...,{:hash}ᵩ👉1 + 0.1*cStablehttps://api.blockchair.com/{:btc_chain}/raw/block/{:height}₀👉1Unstablehttps://api.blockchair.com/{:btc_chain}/raw/block/{:hash}₀👉1Unstablehttps://api.blockchair.com/{:btc_chain}/blocks?{:query}👉2Stablehttps://api.blockchair.com/{:eth_chain}/dashboards/block/{:height}₀👉1Stablehttps://api.blockchair.com/{:eth_chain}/dashboards/block/{:hash}₀👉1Stablehttps://api.blockchair.com/{:eth_chain}/dashboards/blocks/{:height}₀,...,{:height}ᵩ👉1 + 0.1*cStablehttps://api.blockchair.com/{:eth_chain}/dashboards/blocks/{:hash}₀,...,{:hash}ᵩ👉1 + 0.1*cStablehttps://api.blockchair.com/{:eth_chain}/raw/block/{:height}₀👉1Unstablehttps://api.blockchair.com/{:eth_chain}/raw/block/{:hash}₀👉1Unstablehttps://api.blockchair.com/{:eth_chain}/blocks?{:query}👉2Stablehttps://api.blockchair.com/{:xrp_chain}/raw/ledger/{:height}₀👉1Alphahttps://api.blockchair.com/{:xrp_chain}/raw/ledger/{:hash}₀👉1Alphahttps://api.blockchair.com/{:xlm_chain}/raw/ledger/{:height}₀👉1Alphahttps://api.blockchair.com/{:xmr_chain}/raw/block/{:height}₀👉1Alphahttps://api.blockchair.com/{:xmr_chain}/raw/block/{:hash}₀👉1Alphahttps://api.blockchair.com/{:ada_chain}/raw/block/{:height}₀👉1Alphahttps://api.blockchair.com/{:ada_chain}/raw/block/{:hash}₀👉1Alphahttps://api.blockchair.com/{:xin_chain}/raw/snapshot/{:height}₀👉1Alphahttps://api.blockchair.com/{:xin_chain}/raw/snapshot/{:hash}₀👉1Alphahttps://api.blockchair.com/{:xin_chain}/raw/snapshots?{:query}👉1Alphahttps://api.blockchair.com/{:xtz_chain}/raw/block/{:height}₀👉1Alphahttps://api.blockchair.com/{:xtz_chain}/raw/block/{:hash}₀👉1Alphahttps://api.blockchair.com/{:xtz_chain}/raw/blocks?{:query}👉1Alphahttps://api.blockchair.com/{:eos_chain}/raw/block/{:height}₀👉1AlphaTransaction-related information and actions———https://api.blockchair.com/{:btc_chain}/dashboards/transaction/{:hash}₀👉1Stablehttps://api.blockchair.com/{:btc_chain}/dashboards/transactions/{:hash}₀,...,{:hash}ᵩ👉1 + 0.1*cStablehttps://api.blockchair.com/{:btc_chain}/raw/transaction/{:hash}₀👉1Unstablehttps://api.blockchair.com/{:btc_chain}/push/transaction (POST)👉1Stablehttps://api.blockchair.com/{:btc_chain}/transactions?{:query}👉5Stablehttps://api.blockchair.com/{:btc_chain}/mempool/transactions?{:query}👉2Stablehttps://api.blockchair.com/{:eth_chain}/dashboards/transaction/{:hash}₀👉1Stablehttps://api.blockchair.com/{:eth_chain}/dashboards/transactions/{:hash}₀,...,{:hash}ᵩ👉1 + 0.1*cStablehttps://api.blockchair.com/{:eth_chain}/raw/transaction/{:hash}₀👉1Unstablehttps://api.blockchair.com/{:eth_chain}/push/transaction (POST)👉1Stablehttps://api.blockchair.com/{:eth_chain}/transactions?{:query}👉5Stablehttps://api.blockchair.com/{:eth_chain}/mempool/transactions?{:query}👉2Stablehttps://api.blockchair.com/{:xrp_chain}/raw/transaction/{:hash}₀👉1Alphahttps://api.blockchair.com/{:xlm_chain}/raw/transaction/{:hash}₀👉1Alphahttps://api.blockchair.com/{:xmr_chain}/raw/transaction/{:hash}₀👉1Alphahttps://api.blockchair.com/{:ada_chain}/raw/transaction/{:hash}₀👉1Alphahttps://api.blockchair.com/{:xin_chain}/raw/transaction/{:hash}₀👉1Alphahttps://api.blockchair.com/{:xin_chain}/push/transaction (POST)👉1Stablehttps://api.blockchair.com/{:xtz_chain}/raw/operation/{:hash}₀👉1Alphahttps://api.blockchair.com/{:eos_chain}/raw/transaction/{:hash}₀👉1Alphahttps://api.blockchair.com/{:eos_chain}/raw/transaction/({:block_height},{:hash})👉1AlphaAddress-related information———https://api.blockchair.com/{:btc_chain}/dashboards/address/{:address}₀👉1Stablehttps://api.blockchair.com/{:btc_chain}/dashboards/addresses/{:address}₀,...,{:address}ᵩ👉1 + 0.1*cStablehttps://api.blockchair.com/{:btc_chain}/addresses/balances (POST, mass balance check)👉1 + 0.001*cStablehttps://api.blockchair.com/{:btc_chain}/dashboards/xpub/{:extended_key}👉1 + 0.1*dBetahttps://api.blockchair.com/{:btc_chain}/addresses?{:query}👉2Stablehttps://api.blockchair.com/{:eth_chain}/dashboards/address/{:address}₀👉1Stablehttps://api.blockchair.com/{:eth_chain}/addresses?{:query}👉2Stablehttps://api.blockchair.com/{:xrp_chain}/raw/account/{:address}₀👉1Alphahttps://api.blockchair.com/{:xlm_chain}/raw/account/{:address}₀👉1Alphahttps://api.blockchair.com/{:ada_chain}/raw/address/{:address}₀👉1Alphahttps://api.blockchair.com/{:xtz_chain}/raw/account/{:address}₀👉1Alphahttps://api.blockchair.com/{:eos_chain}/raw/account/{:address}₀👉1Alphahttps://api.blockchair.com/multi/dashboards/addresses/{:address}₀,...,{:address}ᵩ👉ComplexAlphaSpecial entities———https://api.blockchair.com/{:btc_chain}/outputs?{:query}👉10Betahttps://api.blockchair.com/{:btc_chain}/mempool/outputs?{:query}👉2Betahttps://api.blockchair.com/{:eth_chain}/dashboards/uncle/{:hash}₀👉1Stablehttps://api.blockchair.com/{:eth_chain}/dashboards/uncles/{:hash}₀,...,{:hash}ᵩ👉1 + 0.1*cStablehttps://api.blockchair.com/{:eth_chain}/uncles?{:query}👉2Stablehttps://api.blockchair.com/{:eth_chain}/calls?{:query}👉10Stablehttps://api.blockchair.com/{:xmr_chain}/outputs?{:query}👉1Alphahttps://api.blockchair.com/zcash/raw/validate?paymentdisclosure=zpd:...N/A1Alphahttps://api.blockchair.com/{:xin_chain}/raw/round/{:hash}👉1Alphahttps://api.blockchair.com/{:xin_chain}/raw/round/({:node_hash},{:id})👉1Alphahttps://api.blockchair.com/{:xin_chain}/raw/node/{:hash}👉1Alphahttps://api.blockchair.com/{:xin_chain}/raw/graph👉1Alphahttps://api.blockchair.com/{:xin_chain}/raw/mintings?{:query}👉1Alphahttps://api.blockchair.com/{:xin_chain}/raw/nodes?{:query}👉1AlphaSpecial second layer protocol endpoints (Omni Layer and ERC-20 tokens)———https://api.blockchair.com/bitcoin/omni/stats👉1Alphahttps://api.blockchair.com/bitcoin/omni/dashboards/property/{:prorerty_id}👉1Alphahttps://api.blockchair.com/bitcoin/omni/properties👉10Alphahttps://api.blockchair.com/ethereum/erc-20/{:token_address}/stats👉1Betahttps://api.blockchair.com/ethereum/erc-20/{:token_address}/dashboards/address/{:address}👉1Betahttps://api.blockchair.com/ethereum/erc-20/tokens?{:query}👉2Betahttps://api.blockchair.com/ethereum/erc-20/transactions?{:query}👉5Betahttps://api.blockchair.com/ethereum/erc-20/{:token_address}/utils/allowance?owner={:owner_address}&spender={:spender_address}N/A1AlphaState changes———https://api.blockchair.com/{:btc_chain}/state/changes/block/{:block_id}👉5Stablehttps://api.blockchair.com/{:btc_chain}/state/changes/mempool👉10Stablehttps://api.blockchair.com/{:eth_chain}/state/changes/block/{:block_id}👉5StableMisc———https://api.blockchair.com/range👉1Stablehttps://api.blockchair.com/tools/releases👉1Stablehttps://api.blockchair.com/tools/halvening👉1Stablehttps://api.blockchair.com/news (News API)👉1StableNetwork nodes———https://api.blockchair.com/nodes👉1Stablehttps://api.blockchair.com/{:btc_chain}/nodes👉1StableSpecial Premium API endpoints———https://api.blockchair.com/premium/stats?key={:api_key}👉0Stable
Please note there are some endpoints which aren't listed here (most of the times they have the https://api.blockchair.com/internal prefix), but used by our web interface — these endpoints aren't meant to be used by 3rd parties.

The base request cost is used only if there are no additional parameters included in the request, and the default limits on the number of results are used. For example, if you're requesting info on ERC-20 tokens while getting data on an Ethereum address using a special parameter or increasing the number of latest transactions for this address, you may be charged additional request points. c in formulas means "number of requested entities". d means "depth" (applied to xpub lookups). Detailed cost formulas are available in the corresponding documentation sections.

Basic API requestRequests to the API should be made through the HTTPS protocol by GET requests to the domain api.blockchair.com. Here's an example request URL: https://api.blockchair.com/bitcoin/blocks?a=sum(generation)

> curl 'https://api.blockchair.com/bitcoin/blocks?a=sum(generation)'
{"data":[{"sum(generation)":1800957104497237}],"context":{"code":200,"source":"A","time":0.007825851440429688,"limit":10000,"offset":null,"rows":1,"pre_rows":1,"total_rows":1,"state":600767,"cache":{"live":true,"duration":60,"since":"2019-10-23 21:33:00","until":"2019-10-23 21:34:00","time":null},"api":{"version":"2.0.38","last_major_update":"2019-07-19 18:07:19","next_major_update":null,"documentation":"https:\/\/github.com\/Blockchair\/Blockchair.Support\/blob\/master\/API.md","notice":"Beginning July 19th, 2019 all applications using Blockchair API on a constant basis should apply for an API key (mailto:info@blockchair.com)"}}}


Here are some considerations:

If you're building a web app, your users shouldn't make direct API requests from there. While we don't have any limitations in our CORS policy (API currently responds with a Access-Control-Allow-Origin: * header), that policy may be changed in the future without any warnings
Please don't use some random keys in your requests (e.g. ?random_key=random_value) as this can result in a 400 error (though we don't force this rule at the moment for most of our endpoints)
If you're using the API with an API key, you should keep it in secret. In order to build an app for public use using our API, you should build a proxy, so the requrst flow will look like the following: user → https://your-proxy/{:request_string} → https://api.blockchair.com/{:request_string}?key={:api_key} — that way you won't disclose the key to your users
The only exception to the "requests should be made using GET" rule is the Broadcasting transactions endpoint accepting POST requests
Basic API responseAPI returns JSON-encoded data. Typically, the response is an array consisting of two subarrays:

data — contains the data you requested

context — contains some metadata, e.g. a status code, query execution time, used options, etc. Here are some of it (note that not all endpoints return all of the keys listed here):

context.code — server response code (also included in HTTP headers), can return:200 if the request succeeded
400 if there is a user error in the request
404 for some endpoints in case there's no results (this behavior is deprecated), also if you're requesting non-existing endpoint
402, 429, 435, 436, or 437 if any limit on the number or complexity of requests is exceeded (see the list of limits, and please contact us if you'd like to increase them) — your IP address will be unblocked automatically after some time
430, 434, or 503 if your IP address is temporarily blocked
500 or 503 in case of a server error (it makes sense to wait and repeat the same request or open a ticket at https://github.com/Blockchair/Blockchair.Support/issues/new or write to info@blockchair.com)
context.error — error description in the case there's an error
context.state — number of the latest known block (e.g., for all requests to endpoints connected to the Bitcoin blockchain this will yield the latest block number for Bitcoin). For example, it may be useful to calculate the number of network сonfirmations, or correctly iterate trough the results using ?offset=. Not returned if the request has failed.
context.state_layer_2 — the latest block number for which our engine has processed second layer (e.g. ERC-20) transactions. If it's less than the block id in your current environment (e.g. block id of a transaction you requested), it makes sense to repeat the request after some time to retrieve second layer data. With our current architecture it always equals to context.state, but that may change in future.
context.results — contains the number of found results (dashboard and raw endpoints)
context.limit — applied limit to the number of results (the default one or user set in the ?limit= query section)
context.offset — applied offset (the default one or user set in the ?offset= query section)
context.rows — contains the number of shown rows returned from the database (infinitable endpoints)
context.total_rows — total number of rows meeting the request (infinitable endpoints)
context.api — array of data on the status of the API:context.api.version — version of API
context.api.last_major_update — timestamp of the last update, that somehow has broken backward compatibility for "stable" endpoints
context.api.next_major_update — timestamp of the next scheduled update, that can break compatibility, or null, if there are no updates scheduled
context.api.documentation — an URL to the latest version of documentation
context.api.notice — just a text notice which, for example, may describe upcoming changes (this is an optional field)
context.cache — array of info on whether the response comes from the cache or notcontext.cache.live — false if the response comes from the cache, true otherwise
context.cache.until — cache expiry timestamp
context.request_cost — API request cost (1 for ordinary queries, more than 1 for complex requests, see the next section for details)
There are also some things which are the same across all endpoints:

All timestamps are in the UTC timezone, and have the following format: YYYY-MM-DD hh:ii:ss . If you require an ISO 8601 timestamp with the timezone, just replace the space with a T, and append Z to the timestamp (e.g. 2009-01-03 18:15:05 will then become 2009-01-03T18:15:05Z)
There are some endpoints allowing you to request data in formats other than JSON (e.g. TSV or CSV). In that case, the API returns plain output data in the desired format without metadata
Most of the responses are cached for some amount of time. Bypassing cache is allowed in some of our Premium API plans (see the next documentation section)
API rate limits, API keys, and Premium APIWhile we do allow to perform some amount of requests free of charge, generally our API is not free to use.

Here's our policy:

If you use our API occasionally for personal use or testing up to 1440 requests a day (1 request a minute in average) — a key is not required
Non-commercial and academic projects which require up to 1440 requests a day — a key is not required
Non-commercial and academic projects requiring more than 1440 requests a day should apply for a Premium API key, and are subject to a discount up to 50%
Non-commercial and academic projects requiring more than 1440 requests a day which are also Blockchair partners are subject to a discount up to 100%
Commercial projects should apply for a key to Premium API not depending on the required number of requests
Commercial projects which are also Blockchair partners (e.g. linking to Blockchair from the app's interface) are subject to a discount up to 10%
Up to 1440 requests a dayMore than 1440 requests a dayPersonal or testingKey is not neededKey is requiredNon-commercial or academicKey is not neededKey is required, up to 100% discountCommercialKey is requiredKey is required, up to 10% discount
Our Premium API plans are available here: https://blockchair.com/api/plans, please contact us if you have any questions or would like to have a custom plan.

The daily request counter is reset at 00:00 UTC every day.

There's an additional hard limit of 30 requests per minute on the free plan.

If you exceed the limit, an error 402 or 429 will be returned. On some of our Premium API plans it's possible to "borrow" requests from the next day if you hit the limit (if your daily limit is n and you hit it, n more requests will be added to the limit for 1 day, you will be notified, and your subscription period will shrink by 1 day) — this behavior is turned off by default.

There's an additional soft limit of 5 requests per second on both free and paid plans. This limit is applied only if we experience a very high load on our servers, and it's turned on and off manually by our admins. In case you hit this limit, an error 435 will be returned.

If you have exceeded the limit multiple times without using a key, an error 430, 434, or 503 may be returned meaning that you've been blocked. It's also possible to get automatically blocked without exceeding the limit in case we're seeing botnet usage in order to bypass the limit. If you've been blocked and you believe you haven't abused our API above the limit, please contact us. If you're using a valid API key it's not possible to get blocked; if you've been previously blocked and starting to use a key, you'll get automatically unblocked.

Please note that some of API requests may "cost" more than 1 request. Here's an example:

https://api.blockchair.com/bitcoin/dashboards/block/0 — requesting information about one block via one request "costs" 1 request
https://api.blockchair.com/bitcoin/dashboards/blocks/0,1,2,3,4,5,6,7,8,9 — requesting information about ten blocks via one request "costs" 1.9 requests
Every API endpoint documentation has the "Request cost formula" section describing how the "cost" is calculated. For most API requests it's always 1. It's more than 1 in cases when you're requiring additional data (e.g. when you're requesting data on an Ethereum address, and you're also requesting its ERC-20 token balances).

Every API response yields context.request_cost with the request cost number ("request points").

As a kindly reminder, there are tasks such as extracting lots of blockchain data (e.g. all transactions over a 2 month period) which require lots of requests done — it may be better to use our Database dumps feature instead of the API (see https://blockchair.com/dumps for documentation)

What are the steps to acquire an API key?

Our Premium API dashboard is available here: https://api.blockchair.com/premium

First, you need to choose a suitable plan: https://blockchair.com/api/plans

At the moment, this automated system accepts PayPal payments only (which also allows you to pay with your card). If you'd like to pay via wire transfer or crypto, please contact us at info@blockchair.com

Once you've paid, you will receive a one-time password which can be used to generate and activate your API key. Enter it on this page into the "I want to activate an API key I've just purchased..." form, then fill in a small form about yourself, and you'll get the key.

After you have received a key, you can track your stats and extend your subscription. Enter your API key on this page into the "I already have an API key and would like to see some stats or extend my subscription..." form. If you'd like to extend your subscription, you'd need to buy a one-time extension password and enter it on your key management page.

If you have any questions about how to buy and use your key, you can always contact us.

In order to use an API key, you need to append ?key={:api_key} or &key={:api_key} to the end of request URLs. You should use ? if there are no other parameters in the URL, and & otherwise. Here are three examples of correct URLs with a key:

https://api.blockchair.com/bitcoin/dashboards/block/0?key=myfirstpasswordwas4321andifeltsmartaboutit

https://api.blockchair.com/bitcoin/dashboards/block/0?limit=0&key=myfirstpasswordwas4321andifeltsmartaboutit

https://api.blockchair.com/bitcoin/dashboards/block/0?key=myfirstpasswordwas4321andifeltsmartaboutit&limit=0

There's an extra API endpoint for those who have an API key allowing to track the number of request made.

API versioning and changelogAs a reminder, there's the context.api array in every API response which contains the following data:

context.api.version — version of API
context.api.last_major_update — timestamp of the last update, that somehow has broken backward compatibility for "stable" endpoints
context.api.next_major_update — timestamp of the next scheduled update, that can break compatibility, or null, if there are no updates scheduled
context.api.documentation — an URL to the latest version of documentation
context.api.notice — just a text notice which, for example, may describe upcoming changes (this is an optional field)
When we change something, or add new functions, we bump the API version number. Generally, we try as hard as possible not to bring any compatibility-breaking changes in API updates, but sometimes this is needed as some blockchains change their features themselves, we're fixing various bugs, etc. This doesn't apply, however, to changes to endpoints which are either marked as alpha- or beta-stage functions, or unstable in nature (e.g. all raw endpoints where the API returns data directly from our nodes, and the response may change as we upgrade the nodes). These marks are reflected in the Quick endpoint reference.

The changelog is available here: https://github.com/Blockchair/Blockchair.Support/blob/master/API.md

It makes sense to check if context.api.version has increased and/or just whether context.api.next_major_update is not null or larger than the latest update date known to you. If that's the case — you can send yourself a notification and review the changelog to make your application compatible with the changes starting from context.api.next_major_update.

General stats endpointsStats on multiple blockchains at onceAllows to retrieve the most important stats on all blockchains we support via just one API request.

Endpoint:

https://api.blockchair.com/stats
If you require data on just one blockchain, please use https://api.blockchair.com/{:chain}/stats instead.

Output:

data contains an array with stats on 15 blockchains we support at once:

Bitcoin
Bitcoin Cash
Ethereum
Litecoin
Bitcoin SV
Dogecoin
Dash
Ripple
Groestlcoin
Stellar
Monero
Cardano
Zcash
Mixin
Tezos
eCash
and on 3 cross-chain tokens:

Tether (USDT)
USD Coin (USDC)
Binance USD (BUSD)
Note that Bitcoin Testnet stats are not included in this output.

Description of the fields is available in the next three sections of documentation.

Example output:

https://api.blockchair.com/stats:

{
  "data": {
    "bitcoin": {
      "data": {
        "blocks": 599952,
        ...
      }
    },
    "bitcoin-cash": {
      "data": {
        "blocks": 605134,
        ...
      }
    },
    "bitcoin-sv": {
      "data": {
        "blocks": 604886,
        ...
      }
    },
    "ethereum": {
      "data": {
        "blocks": 8766052,
        ...
      }
    },
    "litecoin": {
      "data": {
        "blocks": 1721519,
        ...
      }
    },
    "dogecoin": {
      "data": {
        "blocks": 2941267,
        ...
      }
    },
    "dash": {
      "data": {
        "blocks": 1156197,
        ...
      }
    },
    "ripple": {
      "data": {
        "ledgers": 50795982,
        ...
      }
    },
    "groestlcoin": {
      "data": {
        "blocks": 2801282,
        ...
      }
    },
    "stellar": {
      "data": {
        "ledgers": 26968006,
        ...
      }
    },
    "monero": {
      "data": {
        "blocks": 2014108,
        ...
      }
    },
    "cardano": {
      "data": {
        "blocks": 3673733,
        ...
      }
    },
    "zcash": {
      "data": {
        "blocks": 756512,
        ...
      }
    },
    "mixin": {
      "data": {
        "snapshots": 18632532,
        ...
      }
    },
    "tezos": {
      "data": {
        "blocks": 974144,
        ...
      }
    },
    "cross-chain": {
      "tether": {
        "data": ...
      },
      "usd-coin": {
        "data": ...
      },
      "binance-usd": {
        "data": ...
      }
    }
  },
  "context": {
    "code": 200,
    ...
    }
  }
}


Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/
https://blockchair.com/compare
Bitcoin-like blockchain statsEndpoints:

https://api.blockchair.com/bitcoin/stats
https://api.blockchair.com/bitcoin-cash/stats
https://api.blockchair.com/litecoin/stats
https://api.blockchair.com/bitcoin-sv/stats
https://api.blockchair.com/dogecoin/stats
https://api.blockchair.com/dash/stats
https://api.blockchair.com/groestlcoin/stats
https://api.blockchair.com/zcash/stats
https://api.blockchair.com/ecash/stats
https://api.blockchair.com/bitcoin/testnet/stats
Output:

data contains an array with blockchain statistics:

blocks — total number of blocks (note that it's 1 more than the latest block number as there is block #0)
transactions — total number of transactions
outputs — total number of outputs (including spent)
circulation — number of coins in circulation (in satoshi)
blockchain_size — total size of all blocks in bytes (note: it's not the size of a full node, it's just bare blocks; nodes are bigger in size as they use database indexing, etc)
nodes— number of full network nodes (it's an approximate number and actually not a blockchain metric)
difficulty — current mining difficulty
hashrate_24h — approximated hashrate over the last 24 hours (returned as a string as it doesn't fit into an integer)
next_retarget_time_estimate — approximate timestamp of the next difficulty retarget (this field is available for Bitcoin and Litecoin only)
next_difficulty_estimate — approximate next difficulty value (this field is available for Bitcoin and Litecoin only)
best_block_height — the latest block height
best_block_hash — the latest block hash
best_block_time — the latest block time
mempool_transactions — number of transactions in the mempool
mempool_outputs — number of outputs in the mempool
mempool_size — mempool size in bytes
mempool_tps — number of transactions per second added to the mempool
mempool_total_fee_usd — sum of transaction fees in the mempool, in USD
blocks_24h — number of blocks mined over the last 24 hours
transactions_24h — number of transactions confirmed over the last 24 hours
volume_24h — total monetary volume of transactions over the last 24 hours
average_transaction_fee_24h — average transaction fee over the last 24 hours
average_transaction_fee_usd_24h — the same in USD
median_transaction_fee_24h— median transaction fee over the last 24 hours
median_transaction_fee_usd_24h — the same in USD
inflation_24h— number of new coins mined over the last 24 hours (in satoshi), this can be considered as the daily inflation
inflation_usd_24h — the same in USD
cdd_24h— total coindays destroyed over the last 24 hours
largest_transaction_24h — array of hash and value_usd — biggest payment over the last 24 hours
market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko)
market_price_btc — average market price of 1 coin in BTC (for Bitcoin it always returns 1)
market_price_usd_change_24h_percentage — market price change in percent for 24 hours
market_cap_usd — market capitalization (coins in circulation * price per coin in USD)
market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin)
countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event
suggested_transaction_fee_per_byte_sat — suggests a proper transaction fee in satoshi per byte based on the latest block
hodling_addresses — the total number of addresses with positive balance
Example output:

https://api.blockchair.com/bitcoin/stats:

{
  "data": {
    "blocks": 690165,
    "transactions": 654248075,
    "outputs": 1776138129,
    "circulation": 1875100229497096,
    "blocks_24h": 130,
    "transactions_24h": 229726,
    "difficulty": 14363025673660,
    "volume_24h": 187713267560047,
    "mempool_transactions": 6591,
    "mempool_outputs": 16532,
    "mempool_size": 5076549,
    "mempool_tps": 5.416666666666667,
    "mempool_total_fee_usd": 14219.1005,
    "best_block_height": 690164,
    "best_block_hash": "000000000000000000023fcb3703bf89ddbfc1ef5109f21c2387a9d630b78c6e",
    "best_block_time": "2021-07-08 14:37:00",
    "blockchain_size": 353767186147,
    "average_transaction_fee_24h": 14421,
    "inflation_24h": 81250000000,
    "median_transaction_fee_24h": 5269,
    "cdd_24h": 3696149.5996842394,
    "mempool_outputs": 44316,
    "largest_transaction_24h": {
      "hash": "7a83c11f42dadad1c6916cceb079835aa09ed70127dba7cdf15aa904277c907d",
      "value_usd": 773548352
    },
    "nodes": 8502,
    "hashrate_24h": "92904707138521187685",
    "inflation_usd_24h": 26587437.5,
    "average_transaction_fee_usd_24h": 4.719001232335435,
    "median_transaction_fee_usd_24h": 1.724338485,
    "market_price_usd": 32723,
    "market_price_btc": 1,
    "market_price_usd_change_24h_percentage": -5.7534,
    "market_cap_usd": 613578128025,
    "market_dominance_percentage": 43.03,
    "next_retarget_time_estimate": "2021-07-18 19:23:20",
    "next_difficulty_estimate": 17958208674260,
    "countdowns": [],
    "suggested_transaction_fee_per_byte_sat": 17,
    "hodling_addresses": 38343147
  },
  "context": {
    "code": 200,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/bitcoin
https://blockchair.com/bitcoin-cash
https://blockchair.com/litecoin
https://blockchair.com/bitcoin-sv
https://blockchair.com/dogecoin
https://blockchair.com/dash
https://blockchair.com/groestlcoin
https://blockchair.com/zcash
https://blockchair.com/ecash
https://blockchair.com/bitcoin/testnet
Ethereum-like blockchain statsEndpoints:

https://api.blockchair.com/ethereum/stats
https://api.blockchair.com/ethereum/testnet/stats
Output:

data contains an array with blockchain statistics:

blocks — total number of blocks (note that it's 1 more than the latest block number as there is block #0)
uncles — total number of uncles
transactions — total number of transactions
calls — total number of internal calls
circulation_approximate — number of coins in circulation (in wei)
blockchain_size — total size of all blocks in bytes (note: it's not the size of a full node, it's just bare blocks; nodes are bigger in size as they use database indexing, etc)
difficulty — current mining difficulty
hashrate_24h — approximated hashrate over the last 24 hours (returned as a string as it doesn't fit into an integer)
best_block_height — the latest block height
best_block_hash — the latest block hash
best_block_time — the latest block time
mempool_transactions — number of transactions in the mempool
mempool_median_gas_price — median gas price of transactions in the mempool
mempool_tps — number of transactions per second added to the mempool
mempool_total_value_approximate — sum of transaction amounts in the mempool, in wei
blocks_24h — number of blocks mined over the last 24 hours
uncles_24h — number of uncles over the last 24 hours
transactions_24h — number of transactions confirmed over the last 24 hours
volume_24h_approximate — total monetary volume of transactions over the last 24 hours
average_transaction_fee_24h — average transaction fee over the last 24 hours
average_transaction_fee_usd_24h — the same in USD
median_transaction_fee_24h— median transaction fee over the last 24 hours
median_transaction_fee_usd_24h — the same in USD
average_simple_transaction_fee_24h — average simple transfer (i.e. just sending ethers for 21.000 gas) fee over the last 24 hours
average_simple_transaction_fee_usd_24h — the same in USD
median_simple_transaction_fee_24h— median simple transfer fee over the last 24 hours
median_simple_transaction_fee_usd_24h — the same in USD
inflation_24h— number of new coins mined over the last 24 hours (in satoshi), this can be considered as the daily inflation
inflation_usd_24h — the same in USD
largest_transaction_24h: array of hash and value_usd — biggest payment over the last 24 hours
market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko)
market_price_btc — average market price of 1 coin in BTC
market_price_usd_change_24h_percentage — market price change in percent for 24 hours
market_cap_usd — market capitalization (coins in circulation * price per coin in USD)
market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin)
countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event
layer_2.erc_20 — an array of stats on the ERC-20 token layer consisting of the following elements:tokens — total number of created ERC-20 tokens (which have at least 1 transaction)
transactions — total number of ERC-20 transfers
tokens_24h — number of tokens created over the last 24 hours
transactions_24h — total number of ERC-20 transfers over the last 24 hours
suggested_transaction_fee_gwei_options — recommended transaction fees in gwei. It has 5 options: sloth for occasions when take the risk and wait; slow, normal, and fast if you want to get the transaction confirmed within 2-10 minutes; cheetah for an almost guaranteed next-block confirmation
Example output:

https://api.blockchair.com/ethereum/stats:

{
  "data": {
    "blocks": 12023239,
    "transactions": 1043567165,
    "blocks_24h": 6433,
    "circulation_approximate": "115018182780730000000000000",
    "transactions_24h": 1302619,
    "difficulty": 5447494005324207,
    "volume_24h_approximate": "6300512633065118000000000",
    "mempool_transactions": 94866,
    "mempool_median_gas_price": 40000000000,
    "mempool_tps": 7.983333333333333,
    "mempool_total_value_approximate": "77011108570302550000000",
    "best_block_height": 12023240,
    "best_block_hash": "4338ee00f57c8d0bfcb5e9bbbdc47ab40d9685e2b41801541acda53da71132f3",
    "best_block_time": "2021-03-12 10:43:40",
    "uncles": 1121915,
    "uncles_24h": 307,
    "blockchain_size": 213678005011,
    "calls": 3032610029,
    "average_transaction_fee_24h": "9339692912924509",
    "median_transaction_fee_24h": "4887620538746249",
    "inflation_24h": 13411.4375,
    "average_simple_transaction_fee_24h": "2947056048574188",
    "median_simple_transaction_fee_24h": "3129000000000000",
    "largest_transaction_24h": {
      "hash": "0xbc4fc78885355694f0a5ffe27af7e2157f323855a4e40beaf37905e3f3617640",
      "value_usd": 872236755.0026
    },
    "hashrate_24h": "453957833777017",
    "inflation_usd_24h": 23792024.239375,
    "average_transaction_fee_usd_24h": 16.56870862445721,
    "median_transaction_fee_usd_24h": 8.670687711941234,
    "average_simple_transaction_fee_usd_24h": 5.228106900731096,
    "median_simple_transaction_fee_usd_24h": 5.55087729,
    "market_price_usd": 1774.01,
    "market_price_btc": 0.031517784173684,
    "market_price_usd_change_24h_percentage": 0.95673,
    "market_cap_usd": 203352392960,
    "market_dominance_percentage": 11.66,
    "layer_2": {
      "erc_20": {
        "tokens": 246816,
        "transactions": 604957673,
        "tokens_24h": 100,
        "transactions_24h": 859287
      }
    },
    "countdowns": [
      {
        "event": "eth2 launch",
        "eth_staked": 3487170.000069,
        "eth_needed": 524288
      }
    ],
    "suggested_transaction_fee_gwei_options": {
      "sloth": 102,
      "slow": 115,
      "normal": 122,
      "fast": 134,
      "cheetah": 173
    }
  },
  "context": {
    "code": 200,
    "state": 12023239,
    "state_layer_2": 12023239,
    "request_cost": 1,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/ethereum
https://blockchair.com/ethereum/testnet
Ripple-like blockchain statsEndpoint:

https://api.blockchair.com/ripple/stats
Output:

data contains an array with blockchain statistics:

ledgers — total number of ledgers
circulation — number of coins in circulation (in XRP)
best_ledger_height — the latest ledger number
best_ledger_hash — the latest ledger hash
best_ledger_time — the latest ledger time
mempool_transactions — number of unconfirmed transactions
mempool_tps — number of transactions per second added to the mempool
mempool_total_fee_usd — sum of transaction fees in the mempool, in USD
ledgers_24h — number of ledgers closed over the last 24 hours
transactions_24h — number of transactions confirmed over the last 24 hours
volume_24h — total monetary volume of transactions over the last 24 hours
average_transaction_fee_24h — average transaction fee over the last 24 hours
average_transaction_fee_usd_24h — the same in USD
median_transaction_fee_24h— median transaction fee over the last 24 hours
median_transaction_fee_usd_24h — the same in USD
inflation_24h— number of new coins issued over the last 24 hours (can be negative in case more coins are destroyed than issued)
inflation_usd_24h — the same in USD
largest_transaction_24h: array of hash and value_usd — biggest payment over the last 24 hours
market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko)
market_price_btc — average market price of 1 coin in BTC
market_price_usd_change_24h_percentage — market price change in percent for 24 hours
market_cap_usd — market capitalization (coins in circulation * price per coin in USD)
market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin)
countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event
Example output:

https://api.blockchair.com/ripple/stats:

{
  "data": {
    "market_price_usd": 0.290587,
    "market_price_btc": 0.0000365637358586,
    "market_price_usd_change_24h_percentage": -3.31938,
    "market_cap_usd": 12543700763,
    "market_dominance_percentage": 5.78,
    "ledgers": 50795576,
    "best_ledger_height": 50795575,
    "best_ledger_hash": "07AFA06C63D6C24C31CBD83938A711C098D6C251EEAFC7AE65733CEA3D5EE32A",
    "best_ledger_time": "2019-10-18 16:28:41",
    "mempool_transactions": 43,
    "mempool_total_fee_usd": 0.00024496484099999997,
    "circulation": 99991318056632960,
    "average_transaction_fee_24h": 874.9259920487995,
    "median_transaction_fee_24h": 12,
    "average_transaction_fee_usd_24h": 0.00025366991765268457,
    "median_transaction_fee_usd_24h": 0.000003479196,
    "ledgers_24h": 22359,
    "transactions_24h": 864272,
    "mempool_tps": 10.003148148148147,
    "inflation_24h": -756174037,
    "inflation_usd_24h": -219.239807069521,
    "volume_24h": 712237245463407,
    "largest_transaction_24h": {
      "hash": "A773E7C3D07D76834280766AF7F90FE7E773E8D5AD77327A603BD6A5B1083611",
      "value_usd": 14496650
    }
  },
  "context": {
    "code": 200,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/ripple
Stellar-like blockchain statsEndpoint:

https://api.blockchair.com/stellar/stats
Output:

data contains an array with blockchain statistics:

ledgers — total number of ledgers
circulation — number of coins in circulation (in stroops)
best_ledger_height — the latest ledger number
best_ledger_hash — the latest ledger hash
best_ledger_time — the latest ledger time
ledgers_24h — number of ledgers closed over the last 24 hours
transactions_24h — number of transactions confirmed over the last 24 hours
successful_transactions_24h— number of successful transactions over the last 24 hours
failed_transactions_24h— number of failed transactions over the last 24 hours
operations_24h — number of operations over the last 24 hours
average_transaction_fee_24h — average transaction fee over the last 24 hours
average_transaction_fee_usd_24h — the same in USD
market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko)
market_price_btc — average market price of 1 coin in BTC
market_price_usd_change_24h_percentage — market price change in percent for 24 hours
market_cap_usd — market capitalization (coins in circulation * price per coin in USD)
market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin)
countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event
Example output:

https://api.blockchair.com/stellar/stats:

{
  "data": {
    "ledgers": 26602978,
    "best_ledger_height": 26602978,
    "best_ledger_hash": "3151f16e9a6ce9ee43f57a068c83a04c7e864ccc7d1027519d42aab79e13b40f",
    "best_ledger_time": "2019-11-02 16:42:01",
    "circulation": 1054439020873472900,
    "ledgers_24h": 15643,
    "transactions_24h": 461072,
    "successful_transactions_24h": 285958,
    "failed_transactions_24h": 175114,
    "operations_24h": 1085466,
    "average_transaction_fee_24h": 283.5731513695005,
    "average_transaction_fee_usd_24h": 0.000001991250668916633,
    "market_price_usd": 0.07022,
    "market_price_btc": 0.0000075229454120425,
    "market_price_usd_change_24h_percentage": 3.41847,
    "market_cap_usd": 1406714595,
    "market_dominance_percentage": 0.56
  },
  "context": {
    "code": 200,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/stellar
Monero-like blockchain statsEndpoint:

https://api.blockchair.com/monero/stats
Output:

data contains an array with blockchain statistics:

blocks — total number of blocks (note that it's 1 more than the latest block number as there is block #0)
transactions — total number of transactions
circulation — number of coins in circulation (in satoshi)
blockchain_size — total size of all blocks in bytes (note: it's not the size of a full node, it's just bare blocks; nodes are bigger in size as they use database indexing, etc)
difficulty — current mining difficulty
best_block_height — the latest block height
best_block_hash — the latest block hash
best_block_time — the latest block time
mempool_transactions — number of transactions in the mempool
mempool_size — mempool size in bytes
market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko)
market_price_btc — average market price of 1 coin in BTC
market_price_usd_change_24h_percentage — market price change in percent for 24 hours
market_cap_usd — market capitalization (coins in circulation * price per coin in USD)
market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin)
countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event
suggested_transaction_fee_per_byte_sat — suggests a proper transaction fee in piconero per byte
Example output:

https://api.blockchair.com/stellar/stats:

{
  "data": {
    "blocks": 2012711,
    "transactions": 6147319,
    "circulation": 17402679371662576000,
    "difficulty": 127374112357,
    "hashrate_24h": 1061450936,
    "mempool_transactions": 140,
    "mempool_size": 681994000,
    "best_block_height": 2012710,
    "best_block_hash": "3cfcac0ccd9e058f56158686fd4d7258351071e113feac9c1b10da65ce62cce5",
    "best_block_time": "2020-01-16 20:42:47",
    "suggested_transaction_fee_per_byte_sat": 13,
    "market_price_usd": 79.36,
    "market_price_btc": 0.0079091090293004,
    "market_price_usd_change_24h_percentage": -0.96449,
    "market_cap_usd": 1362957367,
    "market_dominance_percentage": 0.52
  },
  "context": {
    "code": 200,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/monero
Cardano-like blockchain statsEndpoint:

https://api.blockchair.com/cardano/stats
Output:

data contains an array with blockchain statistics:

blocks — total number of blocks
transactions — total number of transactions
circulation — number of coins in circulation (in satoshi)
blockchain_size — total size of all blocks in bytes (note: it's not the size of a full node, it's just bare blocks; nodes are bigger in size as they use database indexing, etc)
best_block_epoch — the latest epoch number
best_block_slot — the latest slot number
best_block_height — the latest block height
best_block_hash — the latest block hash
best_block_time — the latest block time
blocks_24h — number of blocks over the last 24 hours
transactions_24h — number of transactions over the last 24 hours
market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko)
market_price_btc — average market price of 1 coin in BTC
market_price_usd_change_24h_percentage — market price change in percent for 24 hours
market_cap_usd — market capitalization (coins in circulation * price per coin in USD)
market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin)
countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event
Example output:

https://api.blockchair.com/cardano/stats:

{
  "data": {
    "blocks": 3673733,
    "transactions": 1725714,
    "best_block_epoch": 170,
    "best_block_slot": 3790,
    "best_block_height": 3673733,
    "best_block_hash": "d70406d8707105b333f2107d6d786316f8232fd8c7beb9565b02f134fe1c03f2",
    "best_block_time": "2020-01-22 18:48:11",
    "blocks_24h": 4320,
    "transactions_24h": 1987,
    "circulation": 31112169560261348,
    "blockchain_size": 3474703715,
    "market_price_usd": 0.04703496,
    "market_price_btc": 0.000004687558301774,
    "market_price_usd_change_24h_percentage": -3.43458,
    "market_cap_usd": 1465483381,
    "market_dominance_percentage": 0.55
  },
  "context": {
    "code": 200,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/cardano
Mixin-like DAG statsEndpoint:

https://api.blockchair.com/mixin/stats
Output:

data contains an array with DAG statistics:

snapshots — total number of snapshots
snapshots_24h — number of snapshots over the last 24 hours
transactions_24h — number of transactions over the last 24 hours
mempool_transactions — number of unvonfirmed transactions
tps_24h — transactions per second over 24 hours period
best_snapshot_height — the latest snapshot number
best_snapshot_hash — the latest snapshots hash
best_snapshot_time — the latest snapshot time (UTC)
circulation — number of coins in circulation (smallest denomination)
circulation_xin — number of coins in circulation (in XINs)
market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko)
market_price_btc — average market price of 1 coin in BTC
market_price_usd_change_24h_percentage — market price change in percent for 24 hours
market_cap_usd — market capitalization (coins in circulation * price per coin in USD)
market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin)
countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event
accepted_nodes — number of accepted network nodes
mintings — number of coin mintings
Example output:

https://api.blockchair.com/mixin/stats:

{
  "data": {
    "snapshots": 18626733,
    "snapshots_24h": 135000,
    "transactions_24h": 135000,
    "mempool_transactions": 0,
    "tps_24h": 1.5625,
    "best_snapshot_height": 18626732,
    "best_snapshot_hash": "6cc46ccbd753dbaf09c1a72d94225af0aaabc5c0c1f705939c7ea77515d6d18c",
    "best_snapshot_time": "2020-04-22 16:33:08",
    "circulation_xin": 550991.78082032,
    "circulation": 55099178082032,
    "market_price_usd": 168.06,
    "market_price_btc": 0.02323,
    "market_price_usd_change_24h_percentage": 2.901,
    "market_cap_usd": 84247126,
    "market_dominance_percentage": 0.01,
    "accepted_nodes": 22,
    "mintings": 419
  },
  "context": {
    "code": 200,
    "state": 18626733,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/mixin
Tezos-like blockchain statsEndpoint:

https://api.blockchair.com/tezos/stats
Output:

data contains an array with blockchain statistics:

blocks — total number of blocks
operations — total number of operations
operations_24h — number of operations over the last 24 hours
volume_24h — volume transacted over the last 24 hours
inflation_24h — newly minted coin count over the last 24 hours
best_block_height — the latest block number
best_block_hash — its hash…
best_block_time — … and timestamp
circulation and circulation_xtz — total circulating supply
market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko)
market_price_btc — average market price of 1 coin in BTC
market_price_usd_change_24h_percentage — market price change in percent for 24 hours
market_cap_usd — market capitalization (coins in circulation * price per coin in USD)
market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin)
countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event
Example output:

https://api.blockchair.com/tezos/stats:

{
  "data": {
    "blocks": 974146,
    "operations": 25664439,
    "operations_24h": 41556,
    "volume_24h": 19467451942626,
    "inflation_24h": 114867833312,
    "best_block_height": 974145,
    "best_block_hash": "BL5GrLjJVpKfDGBxh3GgVKE25hYcX8FJEN7LmmohyXrS42H2Yx1",
    "best_block_time": "2020-05-29 22:31:38",
    "circulation_xtz": 712341492.340773,
    "circulation": 712341492340773,
    "market_price_usd": 2.86,
    "market_price_btc": 0.00030425564282515,
    "market_price_usd_change_24h_percentage": 2.51544,
    "market_cap_usd": 2033457725,
    "market_dominance_percentage": 0.77
  },
  "context": {
    "code": 200,
    "state": 974145,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/tezos
EOS-like blockchain statsEndpoint:

https://api.blockchair.com/eos/stats
Output:

data contains an array with blockchain statistics:

blocks — total number of blocks
circulation_eos — total circulating supply in EOS
circulation_limit_eos — circulating supply limit
staked_eos — staked amount of EOS
staked_percentage — (staked_eos / circulation_eos) * 100%
best_block_height — latest block number
best_block_time — its timestamp...
best_block_producer — and producer account name
irreversible_block_height — latest irreversible block number
irreversible_block_hash — its hash
ram_max_size — max RAM size in bytes
ram_allocated_size — allocated RAM size in bytes
ram_allocated_percentage — (ram_allocated_size / ram_max_size) * 100%
market_price_usd — average market price of 1 coin in USD (market data source: CoinGecko)
market_price_btc — average market price of 1 coin in BTC
market_price_usd_change_24h_percentage — market price change in percent for 24 hours
market_cap_usd — market capitalization (coins in circulation * price per coin in USD)
market_dominance_percentage — dominance index (how much % of the total cryptocurrency market is the market capitalization of the coin)
countdowns (optional) — an optional array of events ([event, time_left] format), where time_left is the number of seconds till the event
Example output:

https://api.blockchair.com/tezos/stats:

{
  "data": {
    "blocks": 125855542,
    "circulation_eos": 1020158333.6877,
    "circulation_limit_eos": 10000000000,
    "staked_eos": 524985046.5825,
    "staked_percentage": 51.46113394817525,
    "best_block_height": 125855542,
    "best_block_time": "2020-06-13 17:33:53",
    "best_block_producer": "newdex.bp",
    "irreversible_block_height": 125855206,
    "irreversible_block_hash": "078065e6d5a20d200729a117d6747761b52b9531eddb1072a62b5fe839dec3da",
    "ram_max_size": 192171732992,
    "ram_allocated_size": 81993066226,
    "ram_allocated_percentage": 42.66655920171846,
    "market_price_usd": 2.59,
    "market_price_btc": 0.00027429815680111,
    "market_price_usd_change_24h_percentage": 0.6576,
    "market_cap_usd": 2433086848,
    "market_dominance_percentage": 0.9
  },
  "context": {
    "code": 200,
    "state": 125855542,
    "request_cost": 1,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/eos
Stats for cross-chain tokens (USDT, USDC, BUSD)Endpoints:

https://api.blockchair.com/cross-chain/tether/stats
https://api.blockchair.com/cross-chain/usd-coin/stats
https://api.blockchair.com/cross-chain/binance-usd/stats
Output:

circulation shows the total token circulation across all supported blockchains
blockchains is an array of blockchains the token supports:circulation is the token circulation on a particular blockchain
explorer is a link to Blockchair's explorer for the token
Example output:

https://api.blockchair.com/cross-chain/usd-coin/stats:

{
  "data": {
    "circulation": 26017746210.430256,
    "blockchains": {
      "ethereum": {
        "circulation": 25058405745.44955,
        "explorer": "https://blockchair.com/ethereum/erc-20/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
      },
      "algorand": {
        "circulation": 174340444.981248,
        "explorer": null
      },
      "solana": {
        "circulation": 785000019.99946,
        "explorer": null
      }
    }
  },
  "context": {
    "code": 200,
    "request_cost": 1,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

Not yet available

Omni Layer statsAllows to retrieve the some basic stats on Omni Layer (Bitcoin). Note that this endpoint is in the Alpha stage, and Wormhole (Bitcoin Cash Omni-like token system) was phased out on January 1st, 2020.

Endpoint:

https://api.blockchair.com/bitcoin/omni/stats
Output:

data contains an array with second layer statistics:

properties — total number of created properties
properties_mainnet — total number of "mainnet" properties
properties_testnet — total number of "testnet" properties
transactions_approximate — approximate number of transactions
latest_transactions — array of 10 latest transactions
Note that the "mainnet" and "testnet" terms don't imply using Bitcoin Testnet, the idea behind that is "testnet" properties still live on the Bitcoin Mainnet, but they have should have no monetary value, and their purpose is for testing only.

Example request:

https://api.blockchair.com/bitcoin/omni/stats
Example output:

https://api.blockchair.com/bitcoin/omni/stats:

{
  "data": {
    "properties": 1187,
    "properties_mainnet": 751,
    "properties_testnet": 436,
    "transactions_approximate": 14406305,
    "latest_transactions": [
      {
        "property_id": 31,
        "property_name": "TetherUS",
        "type_id": 0,
        "type": "Simple Send",
        "sender": "1B4dCsH6MC9XoZ6ob2nngvJesYEfNNtMQS",
        "recipient": "1FoWyxwPXuj4C6abqwhjDWdz6D4PZgYRjA",
        "valid": false,
        "amount": 960000,
        "transaction_hash": "ee1f0401cae15e5ad35cc760c99aacc8c25f21814f234bd80038b99d0ec83d9c",
        "time": "2019-10-18 19:34:28"
      },
      ...
    ]
  },
  "context": {
    "code": 200,
    "state": 599972,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/bitcoin/omni
ERC-20 statsThere's no separate endpoint to get ERC-20 stats, use https://api.blockchair.com/ethereum/stats instead which includes ERC-20 info. Description is available here

Dashboard endpointsRetrieve information about various entities in a neat format from our databases

The API supports a number of calls that produce some aggregated data, or data in a more convenient form for certain entities.

Dashboard endpoints for Bitcoin-like blockchains (Bitcoin, Bitcoin Cash, Litecoin, Bitcoin SV, Dogecoin, Dash, Groestlcoin, Zcash, eCash, Bitcoin Testnet)Block infoEndpoints:

https://api.blockchair.com/{:btc_chain}/dashboards/block/{:height}₀
https://api.blockchair.com/{:btc_chain}/dashboards/block/{:hash}₀
https://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:height}₀,...,{:height}ᵩ (up to 10 blocks, comma-separated)
https://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:hash}₀,...,{:hash}ᵩ (up to 10 blocks, comma-separated)
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:height}ᵢ is the block height (integer value), also known as block id
{:hash}ᵢ is the block hash (regex: /^[0-9a-f]{64}$/i)
Possible options:

?limit={:limit} limits the number of returned transaction hashes contained in the block. Default is 100. Maximum is 10000. In case of 0 returns an empty transaction hashes array
?offset={:offset} allows to paginate transaction hashes. Default is 0. Maximum is 1000000.
Output:

data contains an associative array where found block heights or block hashes used as keys:

data.{:id}ᵢ.block - information about the block (see Bitcoin-like block object for the field descriptions)
data.{:id}ᵢ.transactions - the array of transaction hashes (sorted by position in the block ascending) included in the block (respecting the set limit and offset)
Where {:id}ᵢ is either {:height}ᵢ or {:hash}ᵢ from the query string. If there's no {:id}ᵢ has been found in the database, there won't be such key.

Note that the total number of transactions in the block is contained in data.{:id}ᵢ.block.transaction_count

Context keys:

context.results — number of found blocks
context.limit — applied limit
context.offset — applied offset
context.state — best block height on the {:btc_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = context.state - data.{:id}ᵢ.block.id + 1)
Example requests:

https://api.blockchair.com/bitcoin/dashboards/block/0
https://api.blockchair.com/bitcoin/dashboards/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f
https://api.blockchair.com/bitcoin/dashboards/blocks/0,1,2,3,4,5,6,7,8,9
https://api.blockchair.com/bitcoin-cash/dashboards/block/556045?limit=10000
https://api.blockchair.com/bitcoin-cash/dashboards/block/556045?limit=10000&offset=10000
https://api.blockchair.com/bitcoin/dashboards/block/9999999
Example output:

https://api.blockchair.com/bitcoin/dashboards/block/0:

{
  "data": {
    "0": {
      "block": {
        "id": 0,
        "hash": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
        "date": "2009-01-03",
        "time": "2009-01-03 18:15:05",
        "median_time": "2009-01-03 18:15:05",
        "size": 285,
        "version": 1,
        "version_hex": "1",
        "version_bits": "000000000000000000000000000001",
        "merkle_root": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
        "nonce": 2083236893,
        "bits": 486604799,
        "difficulty": 1,
        "chainwork": "0000000000000000000000000000000000000000000000000000000100010001",
        "coinbase_data_hex": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
        "transaction_count": 1,
        "input_count": 1,
        "output_count": 1,
        "input_total": 0,
        "input_total_usd": 0,
        "output_total": 5000000000,
        "output_total_usd": 0,
        "fee_total": 0,
        "fee_total_usd": 0,
        "fee_per_kb": 0,
        "fee_per_kb_usd": 0,
        "cdd_total": 0,
        "generation": 5000000000,
        "generation_usd": 0,
        "reward": 5000000000,
        "reward_usd": 0,
        "guessed_miner": "Unknown"
      },
      "transactions": [
        "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b"
      ]
    }
  ],
  "context": {
    "code": 200,
    "limit": 100,
    "offset": 0,
    "results": 1,
    "state": 555555,
    ...
    }
  }
}


Request cost formula:

1 for https://api.blockchair.com/{:btc_chain}/dashboards/block/{:height}₀ and https://api.blockchair.com/{:btc_chain}/dashboards/block/{:hash}₀ endpoints
1 + (0.1 * (entity count - 1)) for https://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:height}₀,...,{:height}ᵩ and https://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:hash}₀,...,{:hash}ᵩ endpoints (e.g. it's 1 + (0.1 * (10 - 1)) = 1.9 for requesting 10 blocks)
Explore visualizations on our front-end:

https://blockchair.com/bitcoin/block/0
https://blockchair.com/bitcoin-cash/block/0
https://blockchair.com/litecoin/block/0
https://blockchair.com/bitcoin-sv/block/0
https://blockchair.com/dogecoin/block/0
https://blockchair.com/dash/block/0
https://blockchair.com/groestlcoin/block/0
https://blockchair.com/zcash/block/0
https://blockchair.com/ecash/block/0
https://blockchair.com/bitcoin/testnet/block/0
Transaction infoEndpoints:

https://api.blockchair.com/{:chain}/dashboards/transaction/{:hash}₀
https://api.blockchair.com/{:chain}/dashboards/transactions/{:hash}₀,...,{:hash}ᵩ (up to 10 transactions, comma-separated)
Where:

{:chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:hashᵢ} is the transaction hash (regex: /^[0-9a-f]{64}$/i), also known as txid
Possible options:

?omni=true (for bitcoin only; in alpha test mode) — shows information about Omni Layer token transfers in this transaction
Output:

data contains an associative array where found transaction hashes are used as keys:

data.{:hash}ᵢ.transaction — information about the transaction (see Bitcoin-like transaction object)
data.{:hash}ᵢ.inputs — the array of transaction inputs (sorted by spending_index ascending), where each element is a Bitcoin-like output object (inputs represented as spent outputs), or an empty array in case of coinbase transaction
data.{:hash}ᵢ.outputs — the array of transaction outputs (sorted by index ascending), where each element is a Bitcoin-like output object
Additional data:

data.{:hash}ᵢ.layer_2.omni (for bitcoin only; in alpha test mode) — Omni layer transaction data in case there's any
scripthash_type field for inputs and outputs (example: https://api.blockchair.com/bitcoin/dashboards/transaction/4d41241148a7cb8f4e2820d4393415ccd3d0793053a3855b44c33e5053c231ff) in the multisig_{:m}_of_{:n} format. Please note that if output is unspent, scripthash_type will always be null, even if the associated address multisig type can be derived from some other spent output.
data.{:hash}ᵢ.transaction.is_rbf (for bitcoin and bitcoin/testnet only) — yields true if the transaction can be replaced with a transaction with a higher fee (replace-by-fee), and false otherwise; for blockchain transactions it shows whether the transaction could've been replaced before it has been included into the block.
In case transaction is confirmed on the blockchain, data.{:hash}ᵢ.transaction.block_id contains the block number it's included in. If the transaction is in the mempool, data.{:hash}ᵢ.transaction.block_id yields -1. If the transaction is neither present in the blockchain, nor in the mempool, there won't be data.{:hash}ᵢ key with data.

Context keys:

context.results — number of found transactions
context.state — best block height on the {:chain} chain (tip: it's possible to calculate the number of confirmation transaction received using this formula: confirmations = data.{:id}ᵢ.transaction.block_id - context.state + 1, or if data.{:id}ᵢ.transaction.block_id is -1 it's an unconfirmed transaction)
Example requests:

https://api.blockchair.com/bitcoin/dashboards/block/0
https://api.blockchair.com/bitcoin/dashboards/blocks/0,1,2,3,4,5,6,7,8,9
https://api.blockchair.com/bitcoin-cash/dashboards/block/556045?limit=10000
https://api.blockchair.com/bitcoin-cash/dashboards/block/556045?limit=10000&offset=10000
https://api.blockchair.com/bitcoin/dashboards/block/9999999
Example output:

https://api.blockchair.com/bitcoin/dashboards/transaction/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16:

{
  "data": {
    "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16": {
      "transaction": {
        "block_id": 170,
        "id": 171,
        "hash": "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
        "date": "2009-01-12",
        "time": "2009-01-12 03:30:25",
        "size": 275,
        "weight": 1100,
        "version": 1,
        "lock_time": 0,
        "is_coinbase": false,
        "has_witness": false,
        "input_count": 1,
        "output_count": 2,
        "input_total": 5000000000,
        "input_total_usd": 0.5,
        "output_total": 5000000000,
        "output_total_usd": 0.5,
        "fee": 0,
        "fee_usd": 0,
        "fee_per_kb": 0,
        "fee_per_kb_usd": 0,
        "fee_per_kwu": 0,
        "fee_per_kwu_usd": 0,
        "cdd_total": 149.15856481481,
        "is_rbf": false
      },
      "inputs": [
        {
          "block_id": 9,
          "transaction_id": 9,
          "index": 0,
          "transaction_hash": "0437cd7f8525ceed2324359c2d0ba26006d92d856a9c20fa0241106ee5a597c9",
          "date": "2009-01-09",
          "time": "2009-01-09 03:54:39",
          "value": 5000000000,
          "value_usd": 0.5,
          "recipient": "12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S",
          "type": "pubkey",
          "script_hex": "410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac",
          "is_from_coinbase": true,
          "is_spendable": true,
          "is_spent": true,
          "spending_block_id": 170,
          "spending_transaction_id": 171,
          "spending_index": 0,
          "spending_transaction_hash": "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
          "spending_date": "2009-01-12",
          "spending_time": "2009-01-12 03:30:25",
          "spending_value_usd": 0.5,
          "spending_sequence": 4294967295,
          "spending_signature_hex": "47304402204e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd410220181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d0901",
          "spending_witness": "",
          "lifespan": 257746,
          "cdd": 149.158564814815,
          "scripthash_type": null
        }
      ],
      "outputs": [
        {
          "block_id": 170,
          "transaction_id": 171,
          "index": 0,
          "transaction_hash": "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
          "date": "2009-01-12",
          "time": "2009-01-12 03:30:25",
          "value": 1000000000,
          "value_usd": 0.1,
          "recipient": "1Q2TWHE3GMdB6BZKafqwxXtWAWgFt5Jvm3",
          "type": "pubkey",
          "script_hex": "4104ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302fa28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e6cd84cac",
          "is_from_coinbase": false,
          "is_spendable": true,
          "is_spent": true,
          "spending_block_id": 92240,
          "spending_transaction_id": 156741,
          "spending_index": 0,
          "spending_transaction_hash": "ea44e97271691990157559d0bdd9959e02790c34db6c006d779e82fa5aee708e",
          "spending_date": "2010-11-16",
          "spending_time": "2010-11-16 20:39:27",
          "spending_value_usd": 2.7,
          "spending_sequence": 4294967295,
          "spending_signature_hex": "4730440220576497b7e6f9b553c0aba0d8929432550e092db9c130aae37b84b545e7f4a36c022066cb982ed80608372c139d7bb9af335423d5280350fe3e06bd510e695480914f01",
          "spending_witness": "",
          "lifespan": 58208942,
          "cdd": 6737.14606481481,
          "scripthash_type": null
        },
        {
          "block_id": 170,
          "transaction_id": 171,
          "index": 1,
          "transaction_hash": "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
          "date": "2009-01-12",
          "time": "2009-01-12 03:30:25",
          "value": 4000000000,
          "value_usd": 0.4,
          "recipient": "12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S",
          "type": "pubkey",
          "script_hex": "410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac",
          "is_from_coinbase": false,
          "is_spendable": true,
          "is_spent": true,
          "spending_block_id": 181,
          "spending_transaction_id": 183,
          "spending_index": 0,
          "spending_transaction_hash": "a16f3ce4dd5deb92d98ef5cf8afeaf0775ebca408f708b2146c4fb42b41e14be",
          "spending_date": "2009-01-12",
          "spending_time": "2009-01-12 06:02:13",
          "spending_value_usd": 0.4,
          "spending_sequence": 4294967295,
          "spending_signature_hex": "473044022027542a94d6646c51240f23a76d33088d3dd8815b25e9ea18cac67d1171a3212e02203baf203c6e7b80ebd3e588628466ea28be572fe1aaa3f30947da4763dd3b3d2b01",
          "spending_witness": "",
          "lifespan": 9108,
          "cdd": 4.21666666666667,
          "scripthash_type": null
        }
      ]
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 555555,
    ...
  }
}


Bonus endpoint:

https://api.blockchair.com/{:btc_chain}/dashboards/transaction/{:hash}₀/priority
For mempool transactions shows priority (position) — for chains supporting SegWit by fee_per_kwu, for others by fee_per_kb— over other transactions (out_of mempool transactions). position is null if the transaction is neither in the mempool nor in the blockchain, confirmed if it's in the blockchain. eta_seconds returns an approximate time for the transaction to confirm (in seconds, exprimental). Cost: 1.

Request cost formula:

1 for https://api.blockchair.com/{:btc_chain}/dashboards/transaction/{:hash}₀ endpoint
1 + (0.1 * (entity count - 1)) for https://api.blockchair.com/{:btc_chain}/dashboards/transactions/{:hash}₀,...,{:hash}ᵩ endpoint (e.g. it's 1 + (0.1 * (10 - 1)) = 1.9 for requesting 10 transactions)
Using ?omni=true adds 1 for each requested transaction
Explore visualization on our front-end:

https://blockchair.com/bitcoin/transaction/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b
Address and extended public key (xpub) infoEndpoints:

https://api.blockchair.com/{:btc_chain}/dashboards/address/{:address}₀ (for a single address; further referred to as the address dashboard)
https://api.blockchair.com/{:btc_chain}/dashboards/addresses/{:address}₀,...,{:address}ᵩ (for a set of up to 100 addresses, comma-separated, further referred to as the addresses dashboard)
https://api.blockchair.com/{:btc_chain}/dashboards/xpub/{:extended_key} (info on xpub, ypub, or zpub extended key; further referred to as the xpub dashboard)
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:address}ᵢ is the address, possible formats are:

p2pk/p2pkh format (supported for all blockchains, example for Bitcoin: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa)
p2sh format (supported for all blockchains, example for Bitcoin: 342ftSRCvFHfCeFFBuz4xwbeqnDw6BGUey)
Only for the dashboards/address endpoint Bitcoin Cash also supports Legacy address variant, and Bitcoin SV supports CashAddr variant for p2pkh and p2sh formats. It's also possible to use bitcoincash: prefix (examples: qzyl04w3m99ddpqahzwghn3erallm3e7z5le4aqqmh or bitcoincash:qzyl04w3m99ddpqahzwghn3erallm3e7z5le4aqqmh for both Bitcoin Cash and Bitcoin SV.
bech32 format (witness_v0_keyhash, witness_v0_scripthash, or witness_unknown — supported for Bitcoin, Litecoin, Groestlcoin, and Bitcoin Testnet only; example for Bitcoin: bc1q34aq5drpuwy3wgl9lhup9892qp6svr8ldzyy7c)
Internal Blockchair format (for multisig. nulldata, and nonstandard output types)
For eCash the ecash: prefix and format are used
{:extended_key} is the extended public key, possible formats are:

xpub (supported for all blockchains, example for Bitcoin: xpub6CUGRUonZSQ4TWtTMmzXdrXDtypWKiKrhko4egpiMZbpiaQL2jkwSB1icqYh2cfDfVxdx4df189oLKnC5fSwqPfgyP3hooxujYzAu3fDVmz, yields p2pkh addresses)
ypub (supported for Bitcoin, Litecoin, Groestlcoin, and Bitcoin Testnet only, example for Bitcoin: ypub6XiW9nhToS1gjVsFKzgmtWZuqo6V1YY7xaCns37aR3oYhFyAsTehAqV1iW2UCNtgWFQFkz3aNSZZbkfe5d1tD8MzjZuFJQn2XnczsxtjoXr, yields p2sh addresses)
zpub (supported for Bitcoin, Litecoin, Groestlcoin, and Bitcoin Testnet only, example for Bitcoin: ypub6XiW9nhToS1gjVsFKzgmtWZuqo6V1YY7xaCns37aR3oYhFyAsTehAqV1iW2UCNtgWFQFkz3aNSZZbkfe5d1tD8MzjZuFJQn2XnczsxtjoXr, yields witness_v0_keyhash addresses)
Note that custom xpub formats (e.g. ltub for Litecoin) are not supported.

Possible options:

?limit={:transaction_limit},{:utxo_limit} or a shorthand ?limit={:limit}. {:transaction_limit} limits the number of returned latest transaction hashes (in the transactions array) for an address or an address set. Default is 100. Maximum is 10000. In case of 0 returns an empty transaction hashes array. {:utxo_limit} limits the number of returned latest UTXOs (in the utxo array) for an address or an address set. Default is 100. Maximum is 10000. In case of 0 returns an empty UTXO array. If only one limit is set, it applies to both {:transaction_limit} and {:utxo_limit} (e.g. ?limit=100 is an equivalent of ?limit=100,100).
?offset={:transaction_offset},{:utxo_offest} or a shorthand ?offset={:offset} allows to paginate transaction hashes and the UTXO array. The behaviour is similar to the ?limit= section. Default for both offset is 0, and the maximum is 1000000.
?transaction_details=true — returns detailed info on transactions instead of just hashes in the transactions array. Each element contains block_id, transaction_hash, time, and balance_change (shows how the transactions affected the balance of {:address}, i.e. it can be a negative value). This option is available for all three endpoints: dashboards/address, dashboards/addresses, and dashboards/xpub.
?omni=true (for bitcoin only; in alpha test mode) — shows information about Omni Layer tokens belonging to the address. At the moment, this option is available for the address endpoint only. The data is returned in the layer_2.omni array.
?state=latest — discards unconfirmed transactions from the output — balance will show only confirmed balance, and transactions and utxo arrays won't include unconfirmed data.
Output:

Please note that while the only difference between for example transaction and transactions dashboards is the number of elements in the data array, address and addresses differ semantically. address returns info on a single address with its recent transaction hashes and its UTXO set, while addresses and xpub return info on an address set (as well as some stats on separate addresses) where transaction hashes and the UTXO set are returned for the entire set (that's more useful for wallets as in most cases the task is, for example, to retrieve latest 10 transaction hashes for a set of addresses sorted by time descending, but not 10 transactions for each address as it's not clear how to sort them).

Here's how these three dashboard calls structured (see more detailed examples below):

address endpoint (single address):

data{:address}₀address — an associative array with address info (balance, script_hex, transaction_count, etc.)
transactions — an array of latest transaction hashes where the address is a participant (either sender or recipient)
utxo — the UTXO set for the address
context — some context info
addresses endpoint (2 addresses for example):

dataset — an associative array with info on the address set (balance yields the total balance of 2 addresses, transaction_count is for both, etc.)
addresses{:address}₀ — an associative array with the first address info (balance, script_hex, output_count, etc.)
{:address}₁ — an associative array with the second address info (balance, script_hex, output_count, etc.)
transactions — an array of latest transaction hashes for the entire set
utxo — the UTXO set for the address set
context — some context info
xpub endpoint:

data{:extended_key}xpub — an associative array with xpub info (balance yields the total balance of all addresses derived from the xpub, transaction_count, etc.)
addresses{:address}₀ — an associative array with the first address info (balance, script_hex, output_count, etc.)
{:address}₁ — an associative array with the second address info (balance, script_hex, output_count, etc.)
transactions — an array of latest transaction hashes for the entire set
utxo — the UTXO set for the address set
context — some context info
Note that currently the maximum depth for xpub address discovery is 250 main addresses and 250 change addresses (larger limits up to 10.000 main / 10.000 change are available on Premium plans). According to BIP 32, our engine looks for 20 addresses at once, and if there's no transactions associated with this set, it stops looking.

data.addresses for both the addresses and the xpub endpoints don't include addresses which don't participate in transactions.

Address object specification:

type — address type (the same as type here, can be one of these: pubkey (P2PK), pubkeyhash (P2PKH), scripthash (P2SH), multisig, nulldata (OP_RETURN), nonstandard, witness_v0_keyhash (P2WPKH), witness_v0_scripthash (P2WSH), witness_unknown)
script_hex — output script (in hex) corresponding to the address
balance — address balance in satoshi (hereinafter — including unconfirmed outputs unless ?state=latest option is used)
balance_usd — address balance in USD
received — total received in satoshi
received_usd — total received in USD
spent — total spent in satoshi
spent_usd — total spent in USD
output_count — the number of outputs this address received
unspent_output_count — number of unspent outputs for this address (i.e. the number of inputs for an address can be calculated as output_count-unspent_output_count)
first_seen_receiving — timestamp (UTC) when the first time this address received coins
last_seen_receiving — timestamp (UTC) when the last time this address received coins
first_seen_spending — timestamp (UTC) when the first time this address sent coins
last_seen_spending — timestamp (UTC) when the last time this address sent coins
transaction_count — number of unique transactions this address participating in (available only in the address endpoint)
path — derived address path (available only in the xpub endpoint)
scripthash_type — in case the type is either scripthash (P2SH) or witness_v0_scripthash (P2WSH) — yields multisig type in the following format: multisig_{:m}_of_{:n}. If it's not multisig, or it's not possible to derive the type because there has been no spendings from this address — yields null. Available only in the address endpoint.
Context keys:

context.results — number of found addresses
context.limit — applied limit
context.offset — applied offset
context.state — best block height on the {:btc_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = context.state - data.{:id}ᵢ.block.id + 1)
context.checked (for the xpub endpoint only) — lists the addresses checked by our engine with their paths
Example requests:

https://api.blockchair.com/bitcoin/dashboards/address/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
https://api.blockchair.com/bitcoin/dashboards/addresses/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa,12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX
https://api.blockchair.com/bitcoin/dashboards/xpub/xpub6CUGRUonZSQ4TWtTMmzXdrXDtypWKiKrhko4egpiMZbpiaQL2jkwSB1icqYh2cfDfVxdx4df189oLKnC5fSwqPfgyP3hooxujYzAu3fDVmz
https://api.blockchair.com/bitcoin/dashboards/xpub/xpub6CUGRUonZSQ4TWtTMmzXdrXDtypWKiKrhko4egpiMZbpiaQL2jkwSB1icqYh2cfDfVxdx4df189oLKnC5fSwqPfgyP3hooxujYzAu3fDVmz?transaction_details=true&limit=10,0
https://api.blockchair.com/bitcoin/dashboards/address/12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S?transaction_details=true
https://api.blockchair.com/bitcoin/dashboards/address/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?limit=1&offset=1&transaction_details=true
Example outputs:

https://api.blockchair.com/bitcoin/dashboards/address/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?limit=1&offset=1&transaction_details=true:

{
  "data": {
    "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa": {
      "address": {
        "type": "pubkey",
        "script_hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
        "balance": 6812392291,
        "balance_usd": 508913.63494609314,
        "received": 6812392291,
        "received_usd": 15293.3019,
        "spent": 0,
        "spent_usd": 0,
        "output_count": 1820,
        "unspent_output_count": 1820,
        "first_seen_receiving": "2009-01-03 18:15:05",
        "last_seen_receiving": "2019-10-24 18:47:23",
        "first_seen_spending": null,
        "last_seen_spending": null,
        "transaction_count": 1820,
        "scripthash_type": null
,      },
      "transactions": [
        {
          "block_id": 600890,
          "hash": "4db4d68b13bf667ad9a44f4222bad2239de318fa75555ef966e84315056374b5",
          "time": "2019-10-24 18:47:23",
          "balance_change": 267582
        }
      ],
      "utxo": [
        {
          "block_id": 600890,
          "transaction_hash": "4db4d68b13bf667ad9a44f4222bad2239de318fa75555ef966e84315056374b5",
          "index": 1,
          "value": 267582
        }
      ]
    }
  },
  "context": {
    "code": 200,
    "limit": "1,1",
    "offset": "1,1",
    "results": 1,
    "state": 600897,
    ...
  }
}


https://api.blockchair.com/bitcoin/dashboards/addresses/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa,12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX?limit=1:

{
  "data": {
    "set": {
      "address_count": 2,
      "balance": 11846862777,
      "balance_usd": 885009.2215792858,
      "received": 11846862777,
      "spent": 0,
      "output_count": 1915,
      "unspent_output_count": 1915,
      "first_seen_receiving": "2009-01-03 18:15:05",
      "last_seen_receiving": "2019-10-24 18:47:23",
      "first_seen_spending": null,
      "last_seen_spending": null,
      "transaction_count": 1912
    },
    "addresses": {
      "12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX": {
        "type": "pubkeyhash",
        "script_hex": "76a914119b098e2e980a229e139a9ed01a469e518e6f2688ac",
        "balance": 5034470486,
        "balance_usd": 376095.5866331926,
        "received": 5034470486,
        "received_usd": 1216.4402,
        "spent": 0,
        "spent_usd": 0,
        "output_count": 95,
        "unspent_output_count": 95,
        "first_seen_receiving": "2009-01-09 02:54:25",
        "last_seen_receiving": "2019-09-18 18:29:01",
        "first_seen_spending": null,
        "last_seen_spending": null
      },
      "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa": {
        "type": "pubkeyhash",
        "script_hex": "76a91462e907b15cbf27d5425399ebf6f0fb50ebb88f1888ac",
        "balance": 6812392291,
        "balance_usd": 508913.63494609314,
        "received": 6812392291,
        "received_usd": 15293.3019,
        "spent": 0,
        "spent_usd": 0,
        "output_count": 1820,
        "unspent_output_count": 1820,
        "first_seen_receiving": "2009-01-03 18:15:05",
        "last_seen_receiving": "2019-10-24 18:47:23",
        "first_seen_spending": null,
        "last_seen_spending": null
      }
    },
    "transactions": [
      "f16bcc481a8939bc1c2f1b7df061f89958e265894dc71df248dabaad8e0815ed"
    ],
    "utxo": [
      {
        "block_id": -1,
        "transaction_hash": "f16bcc481a8939bc1c2f1b7df061f89958e265894dc71df248dabaad8e0815ed",
        "index": 0,
        "value": 558,
        "address": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
      }
    ]
  },
  "context": {
    "code": 200,
    "limit": "1,1",
    "offset": "0,0",
    "results": 2,
    "state": 600898,
    ...
  }
}


https://api.blockchair.com/bitcoin/dashboards/xpub/xpub6CUGRUonZSQ4TWtTMmzXdrXDtypWKiKrhko4egpiMZbpiaQL2jkwSB1icqYh2cfDfVxdx4df189oLKnC5fSwqPfgyP3hooxujYzAu3fDVmz?limit=1,2:

{
  "data": {
    "xpub6CUGRUonZSQ4TWtTMmzXdrXDtypWKiKrhko4egpiMZbpiaQL2jkwSB1icqYh2cfDfVxdx4df189oLKnC5fSwqPfgyP3hooxujYzAu3fDVmz": {
      "xpub": {
        "address_count": 11,
        "balance": 491868,
        "balance_usd": 36.744556258799996,
        "received": 711868,
        "spent": 220000,
        "output_count": 11,
        "unspent_output_count": 9,
        "first_seen_receiving": "2014-12-22 17:42:10",
        "last_seen_receiving": "2019-09-25 16:12:10",
        "first_seen_spending": "2014-12-22 21:32:22",
        "last_seen_spending": "2014-12-23 17:26:21",
        "transaction_count": 13
      },
      "addresses": {
        "1EfgV2Hr5CDjXPavHDpDMjmU33BA2veHy6": {
          "path": "0/0",
          "type": "pubkeyhash",
          "script_hex": "76a91495ea668e0322bd99dac54ffdc9089d68e56c3aa188ac",
          "balance": 0,
          "balance_usd": 0,
          "received": 100000,
          "received_usd": 0.3255,
          "spent": 100000,
          "spent_usd": 0.3292,
          "output_count": 1,
          "unspent_output_count": 0,
          "first_seen_receiving": "2014-12-22 17:42:10",
          "last_seen_receiving": "2014-12-22 17:42:10",
          "first_seen_spending": "2014-12-23 17:26:21",
          "last_seen_spending": "2014-12-23 17:26:21"
        },
        "12iNxzdF6KFZ14UyRTYCRuptxkKSSVHzqF": {
          "path": "0/1",
          "type": "pubkeyhash",
          "script_hex": "76a91412cb841986033f5ec9a4a1babe3a47339beac81c88ac",
          "balance": 0,
          "balance_usd": 0,
          "received": 120000,
          "received_usd": 0.3906,
          "spent": 120000,
          "spent_usd": 0.3906,
          "output_count": 1,
          "unspent_output_count": 0,
          "first_seen_receiving": "2014-12-22 17:42:10",
          "last_seen_receiving": "2014-12-22 17:42:10",
          "first_seen_spending": "2014-12-22 21:32:22",
          "last_seen_spending": "2014-12-22 21:32:22"
        },
        "1CcEugXu9Yf9Qw5cpB8gHUK4X9683WyghM": {
          "path": "0/2",
          "type": "pubkeyhash",
          "script_hex": "76a9147f538d66e3745866949f1b98c72c00638f16c7a088ac",
          "balance": 8747,
          "balance_usd": 0.6534367627,
          "received": 8747,
          "received_usd": 0.0506,
          "spent": 0,
          "spent_usd": 0,
          "output_count": 1,
          "unspent_output_count": 1,
          "first_seen_receiving": "2016-08-18 04:07:11",
          "last_seen_receiving": "2016-08-18 04:07:11",
          "first_seen_spending": null,
          "last_seen_spending": null
        },
        "15xANZb5vJv5RGL263NFuh8UGgHT7noXeZ": {
          "path": "0/3",
          "type": "pubkeyhash",
          "script_hex": "76a914364f34453e722af26f5f861aafbb7105176edcee88ac",
          "balance": 100000,
          "balance_usd": 7.47041,
          "received": 100000,
          "received_usd": 2.6486,
          "spent": 0,
          "spent_usd": 0,
          "output_count": 1,
          "unspent_output_count": 1,
          "first_seen_receiving": "2017-06-21 03:01:22",
          "last_seen_receiving": "2017-06-21 03:01:22",
          "first_seen_spending": null,
          "last_seen_spending": null
        },
        "1PJMBXKBYEBMRDmpAoBRbDff26gHJrawSp": {
          "path": "0/4",
          "type": "pubkeyhash",
          "script_hex": "76a914f49aaf692e1aca7d9de273d5b5538ad69677c74d88ac",
          "balance": 100000,
          "balance_usd": 7.47041,
          "received": 100000,
          "received_usd": 2.4581,
          "spent": 0,
          "spent_usd": 0,
          "output_count": 1,
          "unspent_output_count": 1,
          "first_seen_receiving": "2017-07-02 17:12:03",
          "last_seen_receiving": "2017-07-02 17:12:03",
          "first_seen_spending": null,
          "last_seen_spending": null
        },
        "16ZBYSHkLkRFHAuZvyzosXYgU1UDJxRV1R": {
          "path": "0/5",
          "type": "pubkeyhash",
          "script_hex": "76a9143ceebd5df25f739b5025d61fa4be2346fada97fd88ac",
          "balance": 100000,
          "balance_usd": 7.47041,
          "received": 100000,
          "received_usd": 2.4581,
          "spent": 0,
          "spent_usd": 0,
          "output_count": 1,
          "unspent_output_count": 1,
          "first_seen_receiving": "2017-07-02 17:26:49",
          "last_seen_receiving": "2017-07-02 17:26:49",
          "first_seen_spending": null,
          "last_seen_spending": null
        },
        "1EHeVKfjjq6FJpix86G2yzFeRbZ6RNg2Zm": {
          "path": "0/6",
          "type": "pubkeyhash",
          "script_hex": "76a91491bf9590d5cf0412d5b3fec1284d7164b161c65088ac",
          "balance": 100000,
          "balance_usd": 7.47041,
          "received": 100000,
          "received_usd": 2.4581,
          "spent": 0,
          "spent_usd": 0,
          "output_count": 1,
          "unspent_output_count": 1,
          "first_seen_receiving": "2017-07-02 18:11:17",
          "last_seen_receiving": "2017-07-02 18:11:17",
          "first_seen_spending": null,
          "last_seen_spending": null
        },
        "1HqsYkwczwvkMXCobk5WPZmhj2S2TK613Z": {
          "path": "0/8",
          "type": "pubkeyhash",
          "script_hex": "76a914b8c02c75c59f6320b729af2b0a5e0bff7efab95388ac",
          "balance": 40161,
          "balance_usd": 3.0001913601,
          "received": 40161,
          "received_usd": 2.6369,
          "spent": 0,
          "spent_usd": 0,
          "output_count": 1,
          "unspent_output_count": 1,
          "first_seen_receiving": "2018-10-08 00:43:16",
          "last_seen_receiving": "2018-10-08 00:43:16",
          "first_seen_spending": null,
          "last_seen_spending": null
        },
        "1687EJf5YEmeEtcscnuJPiV5b8HkM1o98q": {
          "path": "0/9",
          "type": "pubkeyhash",
          "script_hex": "76a9143830bd9d4d16ecbfc7456c2668a5dfa2954ab64088ac",
          "balance": 40160,
          "balance_usd": 3.000116656,
          "received": 40160,
          "received_usd": 2.6369,
          "spent": 0,
          "spent_usd": 0,
          "output_count": 1,
          "unspent_output_count": 1,
          "first_seen_receiving": "2018-10-08 00:43:16",
          "last_seen_receiving": "2018-10-08 00:43:16",
          "first_seen_spending": null,
          "last_seen_spending": null
        },
        "1MS6eGqD4iUGyJPbEsjqmoNaRhApgtmF8J": {
          "path": "0/10",
          "type": "pubkeyhash",
          "script_hex": "76a914e0219ffd268cf0a459d69c85557c68261b21026488ac",
          "balance": 1800,
          "balance_usd": 0.13446738,
          "received": 1800,
          "received_usd": 0.1157,
          "spent": 0,
          "spent_usd": 0,
          "output_count": 1,
          "unspent_output_count": 1,
          "first_seen_receiving": "2018-11-07 17:26:45",
          "last_seen_receiving": "2018-11-07 17:26:45",
          "first_seen_spending": null,
          "last_seen_spending": null
        },
        "1LDPJCMZhYZjTvTGYahdhMXLuMfjfi6Kua": {
          "path": "0/29",
          "type": "pubkeyhash",
          "script_hex": "76a914d2c1fe5c55a1e9d818149750f2662ba57748247088ac",
          "balance": 1000,
          "balance_usd": 0.07470410000000001,
          "received": 1000,
          "received_usd": 0.0868,
          "spent": 0,
          "spent_usd": 0,
          "output_count": 1,
          "unspent_output_count": 1,
          "first_seen_receiving": "2019-09-25 16:12:10",
          "last_seen_receiving": "2019-09-25 16:12:10",
          "first_seen_spending": null,
          "last_seen_spending": null
        }
      },
      "transactions": [
        "a24445474a9a7c0698e8db221ad2cae06792a899e9bc7f5a590687c3c810c480"
      ],
      "utxo": [
        {
          "block_id": 596536,
          "transaction_hash": "a24445474a9a7c0698e8db221ad2cae06792a899e9bc7f5a590687c3c810c480",
          "index": 0,
          "value": 1000,
          "address": "1LDPJCMZhYZjTvTGYahdhMXLuMfjfi6Kua"
        },
        {
          "block_id": 549163,
          "transaction_hash": "0c9a0219a8f3ef4a7d00483a755a9a18a674340c547bdf573481c1c613898746",
          "index": 0,
          "value": 1800,
          "address": "1MS6eGqD4iUGyJPbEsjqmoNaRhApgtmF8J"
        }
      ]
    }
  },
  "context": {
    "code": 200,
    "limit": "1,2",
    "offset": "0,0",
    "results": 1,
    "checked": [
      "0/0: 1EfgV2Hr5CDjXPavHDpDMjmU33BA2veHy6",
      "0/1: 12iNxzdF6KFZ14UyRTYCRuptxkKSSVHzqF",
      "0/2: 1CcEugXu9Yf9Qw5cpB8gHUK4X9683WyghM",
      "0/3: 15xANZb5vJv5RGL263NFuh8UGgHT7noXeZ",
      "0/4: 1PJMBXKBYEBMRDmpAoBRbDff26gHJrawSp",
      "0/5: 16ZBYSHkLkRFHAuZvyzosXYgU1UDJxRV1R",
      "0/6: 1EHeVKfjjq6FJpix86G2yzFeRbZ6RNg2Zm",
      "0/7: 17BvBPGypT4nt1xc5QpdSDkQb54xoUuQkD",
      "0/8: 1HqsYkwczwvkMXCobk5WPZmhj2S2TK613Z",
      "0/9: 1687EJf5YEmeEtcscnuJPiV5b8HkM1o98q",
      "0/10: 1MS6eGqD4iUGyJPbEsjqmoNaRhApgtmF8J",
      "0/11: 1JSAD9Z8cpcMkwv98eFNWRciAMDqrPYJTE",
      "0/12: 18zBZa3GWoqxuJK9qgJnoVoYEJSpFGDn6x",
      "0/13: 17DcBkPv4VwdzC4837535XyyoUPZDkKArf",
      "0/14: 1DMZDJV5XgnTswpuP85Gnfk7p1473QmxuF",
      "0/15: 1AWhq6hMWzwxEG1wGeR7Y9aTyoxEjw7Rjj",
      "0/16: 1HxhnLyFE3b7CWxtcxRKjKQ9fcjHeweq8R",
      "0/17: 1H4J9nwbyUTvZ527K9fqaTeT3vd7Q4fVNC",
      "0/18: 1KWLBZNwdGVxWyVhSSYjScLNevvxrSm1ww",
      "0/19: 1J3BmEZTgHSgPcZptEP9grBVg8crvYYPSk",
      "0/20: 1deZJSgLcwqUm9gBoo7TMzC6CEBpeweJS",
      "0/21: 14hLE4kcxsL2E9VHwiztVokubR2rFkDnVr",
      "0/22: 17THvVGQF1kFyjQHWcW5AiwBxDvx7GRcLm",
      "0/23: 15RE6yBUX351VyAAht4SESXdgqEFAgwLdS",
      "0/24: 1DzbL4hx1BTKpuDKjeA2JxD598kDe1BVGz",
      "0/25: 1JwMtErm8siMrGM2LXBUrWTy1aBRkku79t",
      "0/26: 189tJnNzz9RP8ZRdrB8UTAoVkeNt7yJrGb",
      "0/27: 14S1fPp686HvwcuG4oBPHvn1HXeDZSAwjD",
      "0/28: 17JspALUGU9Kw5Ui3xX8VFnCx8JVjUj4zr",
      "0/29: 1LDPJCMZhYZjTvTGYahdhMXLuMfjfi6Kua",
      "0/30: 1AKP5BtANmebif9vNwYGNx5qcSxASJWSP9",
      "0/31: 1PqivQQbGwMmmDypaqoNLbE8vpKppihavk",
      "0/32: 1M1mGGEgtFZtcEjnmWzkWEJmTpr8dCLpaX",
      "0/33: 13srT2gVpj4G8kDNJJicsw28Ecxt3gvz6E",
      "0/34: 1NyEZ7zU8C2nEysVgHTYBjBgeCdmz4XSMX",
      "0/35: 1PtAfTFFtJUvQJRsY6v8gyjNyH3cu4ueyJ",
      "0/36: 1PLYcCvCkZCwgK9kq5T53fG5SRGkjieZve",
      "0/37: 1DFaATuBZXs9nYwEsihBpadnN1oYXPCwsn",
      "0/38: 1FnHfiGBb2ND6q8Q1Be5Sc9jwwFGsZzYcE",
      "0/39: 1GFjXEtmkV9XpC2D4Lbjvrk2NYFjHQRfnr",
      "0/40: 1MGAnDNvkDQvTGdJ9oZdSBtiTc9vuwRN2A",
      "0/41: 1Hrf1TUUSNnhgCFsywvA9BX9YaTABo4zsP",
      "0/42: 1CK4cQ85AAyB8s7FtENx3q7cCKTHqsCpD8",
      "0/43: 1Md5gRHwHUkUUbaeGB2EoWgfPBg1ERUc9C",
      "0/44: 16ubuUFzMQWzRpDFU39p9jBnJUqQBmq9hC",
      "0/45: 1CrBcrqv4p9mC6Am9Zc5WmzDW9h4B7yifL",
      "0/46: 14C3hQ3pHbg3mZw9cUsKVfVXkS5tYbx82i",
      "0/47: 1EM5gi9sURngbxXszMhXweqDm7vW8fFHvY",
      "0/48: 15NvG6YpVh2aUc3DroVttEcWa1Z99qhACP",
      "0/49: 18UXoW2caqHyTpDueSDtFrJyekg7VBzRzt",
      "0/50: 1P5chLKDSFVUJaf4ahwpZ1sJxUFoY2Ph1E",
      "0/51: 1CnsHtMDDPpwwjDX1idaVmXoAkn5w5DUFo",
      "0/52: 1DCP8fg3pCcTY3Voi5zf1em9ZFpjC8TZdE",
      "0/53: 1CiDp9n9G5Jw4mrqEYeZf2hGou3Qxbubfd",
      "0/54: 1DYMSL8EusREgBaSjuZ5BXyLgwsGFjQK4z",
      "0/55: 18Zwy9C8qwzr1WNqETs7ghQbbP1GaY2o4F",
      "0/56: 1GVFgnLwgEbxLi2gZXoScnGvnzefZNtvHw",
      "0/57: 1JeTm8ps2mnZMnzhrxMz3N26jk9pnxWjWk",
      "0/58: 14VecjHW9Mz7dwofxox1hRhBgitoXGvdtb",
      "0/59: 13n3no297bTMqnYPmtHgMaE7dtmsEXDPAT",
      "1/0: 1muF2Eq9iR4ttJKpc4zZkoTmu3E41Ab9v",
      "1/1: 18RtYUqcNDRjvbB8gg2hwxCYkWwuFcURJp",
      "1/2: 15LE2wxPfw54p3RYWtd7TiduPVqNWiRdFv",
      "1/3: 1CjYeTqk2M4qfnJWyYmLiGmm9BrX9Vdn7f",
      "1/4: 1NWaSHQZsedx3X5ySwkesL7SfDrfQ38TwZ",
      "1/5: 1HwVbcCNyoej8oyRn5ayTaMJbUbh1XH17D",
      "1/6: 1M2R4jSZHiJebjMZ6FEkE9kAFAF55SsNuf",
      "1/7: 1N2PNkgCAfkshYL1R533Q7nsEdUBiu69ou",
      "1/8: 1KaYtjPYwUaXKswMT6dVkjU1i3AaGRbwgc",
      "1/9: 16C6Dns9gfUAJ9PXPQj9hxcLmJaUgvCztg",
      "1/10: 14fXx1jkGk85izCGnhFUL1PfwNSEP5hrLj",
      "1/11: 1LGf9DzHTQd1BwakvcrQnQbKom7mZRmTnX",
      "1/12: 1Npzk7S3FdBqZUmCUFnpVAkbPZKcHEakd9",
      "1/13: 154Xhii1fs4qqPJWFSgV7NoQqheKj24zB6",
      "1/14: 16K7tqjnVEKqn9bS4mqmAv2ra4JnwoWFU3",
      "1/15: 1CN1oU8YF9udAKratV33EHGxmgR54d4CwY",
      "1/16: 1Ry5PG7hKm7H1Kvf7FTfoRt8n4kPtY6hL",
      "1/17: 1PNKjpz35PaWyeJrinQab2E1a1vtWcfRdy",
      "1/18: 16VwyBxQyJT5DUswUoyq7Ga6t6sY7Ua8aA",
      "1/19: 1GMdnCiw1dgGjaMAWyWssToYvtcGA5ERaH"
    ],
    "state": 600898,
    ...
  }
}


Request cost formula:

1 for the address endpoint (add 1 if ?omni=true is used)
1 + (0.1 * (entity count - 1)) for the addresses endpoint (e.g. it's 1 + (0.1 * (100 - 1)) = 10.9 for requesting 100 addresses)
1 + 2 * depth - 0.1 for the xpub endpoint, where depth is the number of 20-addresses iterations (BIP 32 standard). The minimum number of iterations is 1 (the cost would be 2.9 in that case), if there are 5 iterations required, 100 addresses will be checked in total (the cost would be 10.9)
Additional 1 point if ?transaction_details=true is used
Explore visualizations on our front-end:

https://blockchair.com/bitcoin/address/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
https://blockchair.com/bitcoin/xpub/xpub6CUGRUonZSQ4TWtTMmzXdrXDtypWKiKrhko4egpiMZbpiaQL2jkwSB1icqYh2cfDfVxdx4df189oLKnC5fSwqPfgyP3hooxujYzAu3fDVmz
Address balance mass checkThis endpoint returns confirmed balances only. If address hasn't been seen on the blockchain or has a zero balance, it's not shown among the results. It's extremely fast (under 1 second for 25.000 addresses) and cheap (it costs only 26 request points to fetch 25.000 addresses).

Endpoints:

https://api.blockchair.com/{:btc_chain}/addresses/balances (POST)
https://api.blockchair.com/{:btc_chain}/addresses/balances?addresses={:comma_separated_list} (GET)
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:comma_separated_list} is the comma-separated list of addresses (up to 25.000)
Example output:

https://api.blockchair.com/bitcoin/addresses/balances?addresses=34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo,35hK24tcLEWcgNA4JxpvbkNkoAcDGqQPsP,1DoesntExist:

{
  "data": {
    "35hK24tcLEWcgNA4JxpvbkNkoAcDGqQPsP": 25550215769897,
    "34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo": 4053399981517
  },
  "context": {
    "code": 200,
    "results": 2,
    "state": 635329,
    "request_cost": 1.003,
    ...
  }
}


Example POST request:

> curl -v --data "addresses=34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo,35hK24tcLEWcgNA4JxpvbkNkoAcDGqQPsP,1DoesntExist" https://api.blockchair.com/bitcoin/addresses/balances


(it's better to use POST for long requests)

Request cost formula:

1 + 0.001 per each requested address (i.e. for 25.000 addresses it's just 25, so it's the best and the fastest way to fetch balances)

Dashboard endpoints for EthereumBlock infoEndpoints:

https://api.blockchair.com/{:eth_chain}/dashboards/block/{:height}₀
https://api.blockchair.com/{:eth_chain}/dashboards/block/{:hash}₀
https://api.blockchair.com/{:eth_chain}/dashboards/blocks/{:height}₀,...,{:height}ᵩ (up to 10 blocks, comma-separated)
https://api.blockchair.com/{:eth_chain}/dashboards/blocks/{:hash}₀,...,{:hash}ᵩ (up to 10 blocks, comma-separated)
Where:

{:eth_chain} can only be: ethereum or ethereum/testnet
{:height}ᵢ is the block height (integer value), also known as block id
{:hash}ᵢ is the block hash (regex: /^0x[0-9a-f]{64}$/i)
Possible options:

?limit={:limit} limits the number of returned transaction hashes contained in the block. Default is 100. Maximum is 10000. In case of 0 returns an empty transaction hashes array
?offset={:offset} allows to paginate transaction hashes. Default is 0. Maximum is 1000000.
Output:

data contains an associative array where found block heights or block hashes used as keys:

data.{:id}ᵢ.block — information about the block (see Ethereum-like block object for the field descriptions)
data.{:id}ᵢ.transactions — the array of transaction hashes (sorted by position in the block ascending) included in the block (respecting the set limit and offset)
data.{:id}ᵢ.synthetic_transactions — array of internal Blockchair ids of synthetic transactions. By synthetic transactions we understand state changes in the blockchain which don't have parental transaction entities, i.e. transferring miner reward (for blocks and uncles), coin generation in the genesis block, etc. This array is not iterable, and always yields the entire result set.
data.{:id}ᵢ.uncles — the array of hashes of the block's uncles (in case there are no uncles — an empty array). This array is not iterable as well, and always yields the entire result set.
Where {:id}ᵢ is either {:height}ᵢ or {:hash}ᵢ from the query string.

If there's no {:id}ᵢ has been found in the database, there won't be such key.

Note that the total number of transactions in the block is contained in data.{:id}ᵢ.block.transaction_count, but that doesn't take synthetic transactions into account (use data.{:id}ᵢ.block.synthetic_transaction_count instead)

Context keys:

context.results — number of found blocks
context.limit — applied limit
context.offset — applied offset
context.state — best block height on the {:eth_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = context.state - data.{:id}ᵢ.block.id + 1)
Example requests:

https://api.blockchair.com/ethereum/dashboards/block/2345678
https://api.blockchair.com/ethereum/dashboards/block/0xda214d1b1d458e7ae0e626b69a52a59d19762c51a53ff64813c4d31256282fdf
context.state: best block height on the {:eth_chain} chain (tip: it's possible to calculate the number of confirmation transaction received using this formula: confirmations = data.{:id}ᵢ.transaction.block_id - context.state + 1, or if data.{:id}ᵢ.transaction.block_id is -1 it's an unconfirmed transaction)
https://api.blockchair.com/ethereum/dashboards/block/2345678?limit=2
https://api.blockchair.com/ethereum/dashboards/block/2345678?limit=2&offset=2
Example output:

https://api.blockchair.com/ethereum/dashboards/block/2345678:

{
  "data": {
    "2345678": {
      "block": {
        "id": 2345678,
        "hash": "0xda214d1b1d458e7ae0e626b69a52a59d19762c51a53ff64813c4d31256282fdf",
        "date": "2016-09-29",
        "time": "2016-09-29 01:39:41",
        "size": 1109,
        "miner": "0x4bb96091ee9d802ed039c4d1a5f6216f90f81b01",
        "extra_data_hex": "657468706f6f6c2e6f7267202845553129",
        "difficulty": 81923183857781,
        "gas_used": 105000,
        "gas_limit": 1500000,
        "logs_bloom": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "mix_hash": "f5b95f5b79cd8425db7f04d200d78d16c104c28d078d0b653ae1c24f31759662",
        "nonce": "681508643254209570",
        "receipts_root": "51a6952987f2c7ebf74fc1a4f644265aebb660b1d86a12c0f6e3001a2866331f",
        "sha3_uncles": "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "state_root": "4f6b1af13d99c75e0d644b226d57767a0d2f22921c529dfe3455bc63154b01e5",
        "total_difficulty": "66939257372572274863",
        "transactions_root": "dde4d2ce7556effca10c868f500f0e47fb09b5cb4a003d781080f1a06e582352",
        "uncle_count": 0,
        "transaction_count": 5,
        "synthetic_transaction_count": 1,
        "call_count": 5,
        "synthetic_call_count": 1,
        "value_total": "17966223975031638280",
        "value_total_usd": 238.950782294711,
        "internal_value_total": "17963073975031638280",
        "internal_value_total_usd": 238.90888729411,
        "generation": "5000000000000000000",
        "generation_usd": 66.5000009536743,
        "uncle_generation": "0",
        "uncle_generation_usd": 0,
        "fee_total": "3150000000000000",
        "fee_total_usd": 0.0418950006008148,
        "reward": "5003150000000000000",
        "reward_usd": 66.5418959542751
      },
      "uncles": [],
      "transactions": [
        "0x4052841e7ff856e08e73245ed1fab5f41021d4bfe83202b6581870cb559b44c4",
        "0xa1ed63865958a1b3abc8e259dc980bd76dd3f989f14577cce18b7e265cf9528e",
        "0x1d6713c7e6be2a45e6b3d2a7dfc1af96443cfb65d4b51cd41ac21b7b840e77e0",
        "0xffbcdcbef6c5341dd60a9b7f182b61cf0c468d63defcc2fa8c56e292d4bfc8d6",
        "0x0c79e3ae36150eb36d6a631cc8d6250db4b9b832a82ac58ea356357f5987debe"
      ],
      "synthetic_transactions": [
        2345678000005
      ]
    }
  },
  "context": {
    "code": 200,
    "limit": 100,
    "offset": 0,
    "results": 1,
    "state": 8766187,
    "state_layer_2": 8766186,
    ...
  }
}


Request cost formula:

1 for https://api.blockchair.com/{:eth_chain}/dashboards/block/{:height}₀ and https://api.blockchair.com/{:eth_chain}/dashboards/block/{:hash}₀ endpoints
1 + (0.1 * (entity count - 1)) for https://api.blockchair.com/{:eth_chain}/dashboards/blocks/{:height}₀,...,{:height}ᵩ and https://api.blockchair.com/{:eth_chain}/dashboards/blocks/{:hash}₀,...,{:hash}ᵩ endpoints (e.g. it's 1 + (0.1 * (10 - 1)) = 1.9 for requesting 10 blocks)
Explore visualizations on our front-end:

https://blockchair.com/ethereum/block/2345678
Uncle infoEndpoints:

https://api.blockchair.com/{:eth_chain}/dashboards/uncle/{:hash}₀
https://api.blockchair.com/{:eth_chain}/dashboards/uncle/{:hash}₀,...,{:hash}ᵩ (up to 10 uncles, comma-separated)
Where:

{:eth_chain} can only be: ethereum or ethereum/testnet
{:hash}ᵢ is the uncle hash (regex: /^0x[0-9a-f]{64}$/i)
Output:

data contains an associative array where uncle hashes used as keys:

data.{:hash}ᵢ.uncle — information about the block (see Ethereum-like uncle object for the field descriptions)
If there's no {:hash}ᵢ has been found in the database, there won't be such key.

Context keys:

context.results: number of found uncles
context.limit: applied limit
context.offset: applied offset
context.state: best block height on the {:eth_chain} chain
Example requests:

https://api.blockchair.com/ethereum/dashboards/uncle/0x5cd50096dbb856a6d1befa6de8f9c20decb299f375154427d90761dc0b101109
https://api.blockchair.com/ethereum/dashboards/uncles/0x5cd50096dbb856a6d1befa6de8f9c20decb299f375154427d90761dc0b101109,0xedc7a92c2a8aa140b0afa26db4ce8e05994a67d6fc3d736ddd77210b0ba565bb
Example output:

https://api.blockchair.com/ethereum/dashboards/uncle/0x5cd50096dbb856a6d1befa6de8f9c20decb299f375154427d90761dc0b101109:

{
  "data": {
    "0x5cd50096dbb856a6d1befa6de8f9c20decb299f375154427d90761dc0b101109": {
      "uncle": {
        "parent_block_id": 3,
        "index": 0,
        "id": 1,
        "hash": "0x5cd50096dbb856a6d1befa6de8f9c20decb299f375154427d90761dc0b101109",
        "date": "2015-07-30",
        "time": "2015-07-30 15:26:58",
        "size": 538,
        "miner": "0xc8ebccc5f5689fa8659d83713341e5ad19349448",
        "extra_data_hex": "59617465732052616e64616c6c202d2045746865724e696e6a61",
        "difficulty": 17171480576,
        "gas_used": 0,
        "gas_limit": 5000,
        "logs_bloom": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "mix_hash": "f8c94dfe61cf26dcdf8cffeda337cf6a903d65c449d7691a022837f6e2d99459",
        "nonce": "7545615996671392490",
        "receipts_root": "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "sha3_uncles": "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "state_root": "1e6e030581fd1873b4784280859cd3b3c04aa85520f08c304cf5ee63d3935add",
        "transactions_root": "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "generation": "3750000000000000000",
        "generation_usd": 3.75
      }
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 8792290,
    "state_layer_2": 8792279,
    ...
  }
}


Request cost formula:

1 for https://api.blockchair.com/{:eth_chain}/dashboards/uncle/{:hash}₀ endpoint
1 + (0.1 * (entity count - 1)) for https://api.blockchair.com/{:eth_chain}/dashboards/uncles/{:hash}₀,...,{:hash}ᵩ endpoint (e.g. it's 1 + (0.1 * (10 - 1)) = 1.9 for requesting 10 uncles)
Explore visualizations on our front-end:

https://blockchair.com/ethereum/uncle/0x5cd50096dbb856a6d1befa6de8f9c20decb299f375154427d90761dc0b101109
Transaction infoEndpoints:

https://api.blockchair.com/{:eth_chain}/dashboards/transaction/{:hash}₀
https://api.blockchair.com/{:eth_chain}/dashboards/transactions/{:hash}₀,...,{:hash}ᵩ (up to 10 transactions, comma-separated)
Where:

{:eth_chain} can only be: ethereum or ethereum/testnet
{:hashᵢ} is the transaction hash (regex: /^0x[0-9a-f]{64}$/i), also known as txid
Possible options:

?erc_20=true shows information about ERC-20 token transfers in this transaction
?effects=true shows state changes for the transaction
?trace_mempool=true — this option tries to retrieve a list of internall calls for mempool transactions. In conjunction with &erc_20=true it also shows the list of ERC-20 transfers. This is an experimental feature. Please note that internal transfers may get invalidated when transaction gets confirmed.
?assets_in_usd=true — adds value_usd_now to all layer_2.erc_20 items yielding the current (not at the moment of the transaction!) USD value of tokens (null if the price is unknown)
?events=true — this option costs 1 additional request point to use. When enabled, it adds an array of event logs to the output. Every log contains topics, data, contract, log_index, and decoded_event. Depending on how much our API knows about the event signature, there are 3 detalization levels for decoded_event (example transaction with all 3: https://api.blockchair.com/ethereum/dashboards/transaction/0x7d52cf58fe78403e8816dae6e900baff92b35760b4ed81cecd2590eafcde3dad?events=true):Full data: decoded_event contains both the full event name with its argument names (name_full, example: Approval(address owner, address spender, uint256 value)), and the argument values in the arguments array;
Partial data: only name_with_types is known (example: Withdrawal(address, uint256)), arguments yields null;
No data: decoded_event yields null.
Output:

data contains an associative array where found transaction hashes are used as keys:

data.{:hash}ᵢ.transaction — information about the transaction (see Ethereum-like transaction object)
data.{:hash}ᵢ.calls — the array of all calls made during the execution of the transaction (always null for mempool transactions and the last 6 blocks)
Additional data:

data.{:hash}ᵢ.layer_2.erc_20 (only if ?erc_20=true is set) — an array of ERC-20 transfers (or an empty array if there are none), Each array element contains the following keys: token_address, token_name, token_symbol, token_decimals, sender, recipient, value — field descriptions are available here.
data.{:hash}ᵢ.effects (only if ?effects=true is set) — yields all ETH ad ERC-20 balance changes for the transaction in a neat format. Keys are 0x0000000000000000000000000000000000000000 for ETH or token address for ERC-20's. Each array element contains the following keys: asset_type, asset_name, asset_symbol, asset_decimals, changes. changes is an array containing all the changes for the asset (keys are Ethereum addresses, and values are balance changes). Please note this option is experimental. Example request: https://api.blockchair.com/ethereum/dashboards/transaction/0xd9a24f57c713207c39c58e8ef3cb44e115fcc8bd0f85eb4ea82c78bc065a723f?effects=true&erc_20=true. If ?erc_20=true option is not used, ?effects=true won't yield ERC-20 data.
In case transaction is confirmed on the blockchain, data.{:hash}ᵢ.transaction.block_id contains the block number it's included in. If the transaction is in the mempool, data.{:hash}ᵢ.transaction.block_id yields -1. If the transaction is neither present in the blockchain, nor in the mempool, there won't be data.{:hash}ᵢ key with data.

Context keys:

context.results — number of found transactions
context.state — best block height on the {:eth_chain} chain (tip: it's possible to calculate the number of confirmation transaction received using this formula: confirmations = data.{:id}ᵢ.transaction.block_id - context.state + 1, or if data.{:id}ᵢ.transaction.block_id is -1 it's an unconfirmed transaction)
context.state_layer_2 — the latest block number for which our engine has processed second layer (e.g. ERC-20) transactions. If it's less than the block id in your current environment (e.g. block id of a transaction you requested), it makes sense to repeat the request after some time to retrieve second layer data
Example requests:

https://api.blockchair.com/ethereum/dashboards/transaction/0xc132a422513e39038269e091847319a14029feb42c66bd1424c57dfc0e4f8d08
https://api.blockchair.com/ethereum/dashboards/transactions/0xc132a422513e39038269e091847319a14029feb42c66bd1424c57dfc0e4f8d08,0x502bc6fe1f39738f0fd3223a2f125433b8ec7e80acd11ef514f6909536cc9e66
https://api.blockchair.com/ethereum/dashboards/transaction/0xc132a422513e39038269e091847319a14029feb42c66bd1424c57dfc0e4f8d08?erc_20=true
https://api.blockchair.com/ethereum/dashboards/transaction/0x77025c5c7ff5eeb4bb164a4be84dd49192e12086cc321199f73888830c3ecd9e?erc_20=true&assets_in_usd=true
Example output:

https://api.blockchair.com/ethereum/dashboards/transaction/0xc132a422513e39038269e091847319a14029feb42c66bd1424c57dfc0e4f8d08?erc_20=true:

{
  "data": {
    "0xc132a422513e39038269e091847319a14029feb42c66bd1424c57dfc0e4f8d08": {
      "transaction": {
        "block_id": 5678901,
        "id": 5678901000028,
        "index": 28,
        "hash": "0xc132a422513e39038269e091847319a14029feb42c66bd1424c57dfc0e4f8d08",
        "date": "2018-05-26",
        "time": "2018-05-26 08:06:16",
        "failed": false,
        "type": "call_tree",
        "sender": "0xcd36cfb41b81cfbc97772e43fda1fab39e718869",
        "recipient": "0x0ebe7487f60d3a4eb084a23152890a1a65b2ad65",
        "call_count": 101,
        "value": "0",
        "value_usd": 0,
        "internal_value": "0",
        "internal_value_usd": 0,
        "fee": "16821205000000000",
        "fee_usd": 9.84774982859924,
        "gas_used": 3364241,
        "gas_limit": 4000000,
        "gas_price": 5000000000,
        "input_hex": "bb0a64b600000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000d00000000000000000000000000a68920f6d3c996ac3c232e4e93914e9d7615073500000000000000000000000000000000000000000000000000000000000000640000000000000000000000004cb04ab4dfc1963814cb2b1da8475e5ada6065f3000000000000000000000000459ed852d2f296942d82e0b88f678c01d3dda946000000000000000000000000c00dbc71bce389816763773fc4e5b757fce9b184...",
        "nonce": "9092",
        "v": "1c",
        "r": "9b9a4da4aa5f0dfe141b6dad2ae6e41bcd63cab7f0ae9aef4f1752037b698526",
        "s": "20acc42c4941a1077fa4bb8ccd707e6865a61c60f4a77d1b19f86d2e0525fcde"
      },
      "calls": [
        {
          "block_id": 5678901,
          "transaction_id": 5678901000028,
          "transaction_hash": "0xc132a422513e39038269e091847319a14029feb42c66bd1424c57dfc0e4f8d08",
          "index": "0",
          "depth": 0,
          "date": "2018-05-26",
          "time": "2018-05-26 08:06:16",
          "failed": false,
          "fail_reason": null,
          "type": "call",
          "sender": "0xcd36cfb41b81cfbc97772e43fda1fab39e718869",
          "recipient": "0x0ebe7487f60d3a4eb084a23152890a1a65b2ad65",
          "child_call_count": 100,
          "value": "0",
          "value_usd": 0,
          "transferred": true,
          "input_hex": "bb0a64b600000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000d00000000000000000000000000a68920f6d3c996ac3c232e4e93914e9d7615073500000000000000000000000000000000000000000000000000000000000000640000000000000000000000004cb04ab4dfc1963814cb2b1da8475e5ada6065f300...",
          "output_hex": "0000000000000000000000000000000000000000000000000000000000000001"
        },
        {
          "block_id": 5678901,
          "transaction_id": 5678901000028,
          "transaction_hash": "0xc132a422513e39038269e091847319a14029feb42c66bd1424c57dfc0e4f8d08",
          "index": "0.0",
          "depth": 1,
          "date": "2018-05-26",
          "time": "2018-05-26 08:06:16",
          "failed": false,
          "fail_reason": null,
          "type": "call",
          "sender": "0x0ebe7487f60d3a4eb084a23152890a1a65b2ad65",
          "recipient": "0xa68920f6d3c996ac3c232e4e93914e9d76150735",
          "child_call_count": 0,
          "value": "0",
          "value_usd": 0,
          "transferred": true,
          "input_hex": "a9059cbb0000000000000000000000004cb04ab4dfc1963814cb2b1da8475e5ada6065f30000000000000000000000000000000000000000000000056bc75e2d63100000",
          "output_hex": ""
        },
        ...
      ],
      "layer_2": {
        "erc_20": [
          {
            "token_address": "0xa68920f6d3c996ac3c232e4e93914e9d76150735",
            "token_name": "",
            "token_symbol": "MST",
            "token_decimals": 18,
            "sender": "0x0ebe7487f60d3a4eb084a23152890a1a65b2ad65",
            "recipient": "0xa488cf9adcac170f28a046ba34a9885eb9f67033",
            "value": "100000000000000000000",
        		"value_approximate": 100
          },
          {
            "token_address": "0xa68920f6d3c996ac3c232e4e93914e9d76150735",
            "token_name": "",
            "token_symbol": "MST",
            "token_decimals": 18,
            "sender": "0x0ebe7487f60d3a4eb084a23152890a1a65b2ad65",
            "recipient": "0x8cc1e8ffc3bf19c67c244e2bd8126fd29ec50e58",
            "value": "100000000000000000000",
    				"value_approximate": 100
          },
          ...
        ]
      }
    }
  },
  "context": {
    "code": 200
    "results": 1,
    "state": 8791761,
    "state_layer_2": 8791746,
    ...
  }
}


Bonus endpoint:

https://api.blockchair.com/{:eth_chain}/dashboards/transaction/{:hash}₀/priority
For mempool transactions shows priority (position) by gas_price over other transactions (out_of mempool transactions). position is null if the transaction is not in the mempool. eta_seconds returns an approximate time for the transaction to confirm (in seconds, exprimental). Cost: 1.

Request cost formula:

1 for https://api.blockchair.com/{:eth_chain}/dashboards/transaction/{:hash}₀ endpoint
1 + (0.1 * (entity count - 1)) for https://api.blockchair.com/{:eth_chain}/dashboards/transactions/{:hash}₀,...,{:hash}ᵩ endpoint (e.g. it's 1 + (0.1 * (10 - 1)) = 1.9 for requesting 10 transactions)
Using ?erc_20=true adds 1 for each requested transaction
Using ?effects=true adds 1 for each requested transaction
Using ?events=true adds 1 for each requested transaction
Using ?trace_mempool=true adds 1 for each requested transaction
Explore visualization on our front-end:

https://blockchair.com/ethereum/transaction/0xd628780ba231cefe6a4f6c3da3b683b16f6151dc9753afd8773d3c2d74ac10c8
Address infoEndpoint:

https://api.blockchair.com/{:eth_chain}/dashboards/address/{:address}₀
Where:

{:eth_chain} can only be: ethereum or ethereum/testnet
{:address}ᵢ is an Ethereum address (either an account or a contract, the address should start with 0x)
Possible options:

?limit={:call_limit} — limits the number of returned latest calls associated with the address. Default is 100. Maximum is 10000.
?offset={:call_offset} — allows to paginate calls. Default is 0, and the maximum is 1000000.
?erc_20={...} — returns information about ERC-20 token balances of the address (tokens are sorted by market capitalization descending):?erc_20=approximate (or ?erc_20=true, default) — yields all token balances from our database. These values may miss some non-standard transfers in tokens that don't follow the ERC-20 standard in full. Please double-check if this option returns correct values for the tokens you'd want to get information about. Using this option costs 1.
?erc_20=precise — yields all token balances from our node. The process is the following: we gather information from our database about potential ERC-20 tokens the address may hold, and then for each token we call getBalance function using our node to get precise balances. Please note that if for some reason some contract doesn't follow the ERC-20 standard, our database may still miss records about the address holding this token, and there will be no request to the node about this token. So while balances yielded with this option are precise, some non-standard tokens may still be missed. Using this option costs 2.
?erc_20={:token_address}₀,...,{:token_address}ᵩ (recommended) — yields balances for the enlisted ERC-20 tokens from our node. That's the recommended way if you have an exact list of tokens you'd like to check. Even if some token doesn't follow the ERC-20 standard, but still has getBalance function implemented, the correct balance will be returned. Using this option costs 0.75 + 0.01 for each contract checked (the cheapest option!)
?nonce=true — returns current account nonce (mempool transactions are taken in account)
?output=type — this option scrubs all the output data except for the address type (account or contract). This may be a very fast handy way to retrieve address type instead of requesting full address data
?assets_in_usd=true — adds asset_balance_usd to the output yielding the total USD value of all (excluding ETH) account assets (currently it's most popular ERC-20 tokens only), as well as balance_usd to all layer_2.erc_20 items. If the exchange rate for a particular token is unknown, returns null for this token.
?state=latest — if this option is enabled, balance will yield the confirmed balance, and the calls array won't include unconfirmed data
?contract_details=true — if applied, it adds additional data on the address if it's a contract. At the moment, it works with ERC-20 contracts only yielding token_name, token_symbol, and token_decimals. It also yields some additional fields for all contracts: creating_transaction_hash, creating_address, and creating_transaction_time. The additional cost of using this option is 0.5
Output:

In case the address has been found, data.{:address}₀ returns an array consisting of the following elements:

addressaddress.type — address type (account — for a simple address, contract — for a contract)
address.contract_code_hex — hex code of the contract at the moment of creation (for a contract), or null for an address
address.contract_created — for contracts only — if the contact was indeed created then true, if not (i.e. with a failed create call) — false, for a simple address yields null
address.contract_destroyed — for contracts only — if the contact was successfully destroyed (SELFDESCTRUCT) then true, if not — false; for a simple address yields null
address.balance — exact address balance in wei (here and below values in wei returned as strings as they don't fit into integers)
address.balance_usd — address balance in USD (float)
address.received_approximate — total received in wei (approximately) †
address.received_usd — total received in USD (approximately) †
address.spent_approximate — total spent in wei (approximately) †
address.spent_usd — total spent in USD (approximately) †
address.fees_approximate — total spent in transaction fees in wei (approximately) †
address.fees_usd — total spent in transaction fees in USD (approximately) †
address.receiving_call_count — number of calls the address has received, where value transfer occured ‡
address.spending_call_count — number of calls that has been made by this address where value transfer occured ‡
address.call_count — total number of calls the address participated in (may be greater than receiving_call_count + spending_call_count, because it also takes failed calls into account)
address.transaction_count — number of transactions the address participated in
address.first_seen_receiving — timestamp (UTC) when the address received a successful incoming call for the first time
address.last_seen_receiving — timestamp (UTC) when the address received a successful incoming call for the last time
address.first_seen_spending — timestamp (UTC) when the address sent a successful call for the first time
address.last_seen_spending — timestamp (UTC) when the address sent a successful call for the last time
address.nonce — current account nonce (only if ?nonce=true is set, null otherwise)
calls — an array of the latest address call, each element of an array containing the following elements: block_id, transaction_hash, index, time, sender, recipient, value, value_usd, transferred (see the description here)
layer_2.erc_20 (only if ?erc_20=true is set) — the array of ERC-20 token balances of the address, each element contains the following fields: token_address, token_name, token_symbol, token_decimals, balance_approximate (number of tokens), balance (exact number of tokens in the smallest denomination). Note that balance ≈ balance_approximate * 10 ^ token_decimals.
Additional data:

data.{:hash}ᵢ.layer_2.erc_20 (or an empty array if there are none), Each array element contains the following keys: token_address, token_name, token_symbol, token_decimals, sender, recipient, value — field descriptions are available here.
context.results contains the number of found addresses (0 or 1).

Notes:

† — for these fields the wei value can be rounded. For a million of calls, the rounding error can be more than 1 ether.
‡ — only those calls are counted that fit the following condition: transferred = true, i.e. calls that do not change state (including staticcall, failed calls, etc.) are not taken into account
Context keys:

context.results — number of found addresses
context.limit — applied limit
context.offset — applied offset
context.state — best block height on the {:eth_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = block_id - context.state + 1)
context.state_layer_2 — the latest block number for which our engine has processed second layer (e.g. ERC-20) transactions. If it's less than the block id in your current environment (e.g. block id of a transaction you requested), it makes sense to repeat the request after some time to retrieve second layer data
Example requests:

https://api.blockchair.com/ethereum/dashboards/address/0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d
https://api.blockchair.com/ethereum/dashboards/address/0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d?limit=1&offset=0
https://api.blockchair.com/ethereum/dashboards/address/0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d?erc_20=true&nonce=true
Example output:

https://api.blockchair.com/ethereum/dashboards/address/0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d?erc_20=true:

{
  "data": {
    "0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d": {
      "address": {
        "type": "account",
        "contract_code_hex": null,
        "contract_created": null,
        "contract_destroyed": null,
        "balance": "1337000000000000001337",
        "balance_usd": 217088.92828369106,
        "received_approximate": "1337000000000000000000",
        "received_usd": 1337,
        "spent_approximate": "0",
        "spent_usd": 0,
        "fees_approximate": "0",
        "fees_usd": 0,
        "receiving_call_count": 2,
        "spending_call_count": 0,
        "call_count": 2,
        "transaction_count": 2,
        "first_seen_receiving": "2015-07-30 00:00:00",
        "last_seen_receiving": "2018-11-16 00:52:45",
        "first_seen_spending": null,
        "last_seen_spending": null
      },
      "calls": [
        {
          "block_id": 6712155,
          "transaction_hash": "0x0357352473d64df14fb987f33bbc9c3cd317fafe7c9498139c6a0529b551a017",
          "index": "0",
          "time": "2018-11-16 00:52:45",
          "sender": "0x0f4b92e13cc618bb9ff2120aec2ccd19f0d97b68",
          "recipient": "0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d",
          "value": 1337,
          "value_usd": 0,
          "transferred": true
        },
        {
          "block_id": 0,
          "transaction_hash": null,
          "index": "0",
          "time": "2015-07-30 00:00:00",
          "sender": null,
          "recipient": "0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d",
          "value": 1.337e+21,
          "value_usd": 1337,
          "transferred": true
        }
      ],
      "layer_2": {
        "erc_20": [
          {
            "token_address": "0x68e14bb5a45b9681327e16e528084b9d962c1a39",
            "token_name": "en",
            "token_symbol": "CAT",
            "token_decimals": 18,
            "balance_approximate": 5,
            "balance": "5000000000000000000"
          },
          {
            "token_address": "0xd49ff13661451313ca1553fd6954bd1d9b6e02b9",
            "token_name": "ElectrifyAsia",
            "token_symbol": "ELEC",
            "token_decimals": 18,
            "balance_approximate": 13.6553835383397,
            "balance": "13655383538340000000"
          },
          ...
        ]
      }
    }
  },
  "context": {
    "code": 200,
    "limit": 100,
    "offset": 0,
    "results": 1,
    "state": 8805160,
    "state_layer_2": 8805148,
    ...
  }
}


Request cost formula:

1 + 1 for each of the options used: ?erc_20=true, ?nonce=true + 0.5 if the ?contract_details=true option is used
Explore visualizations on our front-end:

https://blockchair.com/ethereum/address/0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d
Dashboard endpoints for second layersOmni Layer property infoAllows to retrieve the some basic information on an Omni Layer (Bitcoin) property (token).

Endpoints:

https://api.blockchair.com/bitcoin/omni/dashboards/property/{:prorerty_id}
Where:

{:prorerty_id} is the property identifier (integer)
Output:

data contains information about the property, fields accord with Omni Layer specification (https://github.com/OmniLayer/spec)

Example request:

https://api.blockchair.com/bitcoin/omni/dashboards/property/31
Example output:

https://api.blockchair.com/bitcoin/omni/dashboards/property/31:

{
  "data": {
    "id": 31,
    "name": "TetherUS",
    "category": "Financial and insurance activities",
    "subcategory": "Activities auxiliary to financial service and insurance activities",
    "description": "The next paradigm of money.",
    "url": "https://tether.to",
    "is_divisible": false,
    "issuer": "32TLn1WLcu8LtfvweLzYUYU6ubc2YV9eZs",
    "creation_transaction_hash": "5ed3694e8a4fa8d3ec5c75eb6789492c69e65511522b220e94ab51da2b6dd53f",
    "creation_time": "2014-10-06 16:39:15",
    "creation_block_id": 324140,
    "is_issuance_fixed": false,
    "is_issuance_managed": false,
    "circulation": 2145000000,
    "ecosystem": 1
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 599974,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/bitcoin/omni/property/31
ERC-20 token infoAllows to retrieve the some basic information on an ERC-20 token. Note that this endpoint is in the Beta stage.

Endpoints:

https://api.blockchair.com/ethereum/erc-20/{:token_address}/stats
https://api.blockchair.com/ethereum/testnet/erc-20/{:token_address}/stats (Goerli Testnet)
Where:

{:token_address} is the token contract address (starting with 0x)
Output:

data contains information about the token:

name — token name
symbol — token symbol (short name)
decimals — the number of decimal the token uses
time — timestamp (UTC) when the contract was created
creating_block_id — block id in which the token was created
creating_transaction_hash — transaction hash in which the token was created
transactions — total number of transfers associated with the token
transactions_24h — the same over the last 24 hours
volume_24h_approximate — transacted monetary volume in the number of tokens
volume_24h — the same in the token's smallest denomination (volume_24h ≈ volume_24h_approximate * (10 ^ decimals ))
circulation_approximate — circulating supply in the number of tokens
circulation — the same in the token's smallest denomination (circulation ≈ circulation_approximate * (10 ^ decimals ))
market_price_usd, market_price_btc, and market_cap_usd for market data. nulls are returned if there's no market data for the specified token
Example requests:

https://api.blockchair.com/ethereum/erc-20/0xdac17f958d2ee523a2206206994597c13d831ec7/stats
Example output:

https://api.blockchair.com/ethereum/erc-20/0xdac17f958d2ee523a2206206994597c13d831ec7/stats:

{
  "data": {
    "name": "Tether USD",
    "symbol": "USDT",
    "decimals": 6,
    "time": "2017-11-28 00:41:21",
    "creating_block_id": 4634748,
    "creating_transaction_hash": "0x2f1c5c2b44f771e942a8506148e256f94f1a464babc938ae0690c6e34cd79190",
    "transactions": 120789146,
    "transactions_24h": 153043,
    "volume_24h_approximate": 6941771405.5918045,
    "volume_24h": "6941771405591800",
    "circulation": "30910401959975130",
    "circulation_approximate": 30910401959.97513,
    "market_price_usd": 0.99923,
    "market_price_btc": 0.000029490600005902663,
    "market_cap_usd": 30886600950.465946
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 10163626,
    "state_layer_2": 10163616,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/ethereum/erc-20/token/0xdac17f958d2ee523a2206206994597c13d831ec7
ERC-20 token holder infoEndpoints:

https://api.blockchair.com/ethereum/erc-20/{:token_address}/dashboards/address/{:address}
https://api.blockchair.com/ethereum/testnet/erc-20/{:token_address}/dashboards/address/{:address} (Goerli Testnet)
Where:

{:token_address} is the token contract address (should start with 0x)
{:address} is an Ethereum address (either an account or a contract, the address should start with 0x)
Possible options:

?limit={:transaction_limit} — limits the number of returned latest transactions associated with the address. Default is 100. Maximum is 10000.
?offset={:transaction_offset} — allows to paginate transactions. Default is 0, and the maximum is 1000000.
Output:

The structure is similar to the Ethereum address endpoint with the following differences:

It shows balances in tokens instead of ethers
Fields like first_seen_receiving mean "first seen receiving tokens" instead of "ethers"
Instead of the calls array, there's the transactions array with the latest token transactions (see this for field descriptions). It's iterable using the ?offset= section.
Context keys:

context.results — number of found addresses
context.limit — applied limit
context.offset — applied offset
context.state — best block height on the {:eth_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = block_id - context.state + 1)
context.state_layer_2 — the latest block number for which our engine has processed second layer (e.g. ERC-20) transactions. If it's less than the block id in your current environment (e.g. block id of a transaction you requested), it makes sense to repeat the request after some time to retrieve second layer data
Example request:

https://api.blockchair.com/ethereum/erc-20/0x68e14bb5a45b9681327e16e528084b9d962c1a39/dashboards/address/0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d
Example output:

https://api.blockchair.com/ethereum/erc-20/0x68e14bb5a45b9681327e16e528084b9d962c1a39/dashboards/address/0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d:

{
  "data": {
    "0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d": {
      "address": {
        "balance": "5000000000000000000",
        "balance_approximate": 5,
        "received": "5000000000000000000",
        "received_approximate": 5,
        "spent": "0",
        "spent_approximate": 0,
        "receiving_transaction_count": 1,
        "spending_transaction_count": 0,
        "transaction_count": 1,
        "first_seen_receiving": "2017-11-26 23:17:02",
        "last_seen_receiving": "2017-11-26 23:17:02",
        "first_seen_spending": null,
        "last_seen_spending": null
      },
      "transactions": [
        {
          "block_id": 4628318,
          "id": 17166097,
          "transaction_hash": "0xd3aeac286c429f581f056388e523726e7b42caeba1d6a8df591ea2ec30daad48",
          "time": "2017-11-26 23:17:02",
          "token_address": "0x68e14bb5a45b9681327e16e528084b9d962c1a39",
          "token_name": "en",
          "token_symbol": "CAT",
          "token_decimals": 18,
          "sender": "0x9f89388141c632c4c6f36d1060d5f50604ee3abc",
          "recipient": "0x3282791d6fd713f1e94f4bfd565eaa78b3a0599d",
          "value": "5000000000000000000",
          "value_approximate": 5
        }
      ]
    }
  },
  "context": {
    "code": 200,
    "limit": 100,
    "offset": 0,
    "results": 1,
    "state": 8805315,
    "state_layer_2": 8805304,
    ...
  }
}


Request cost formula:

Always 1
Cross-chain checksMultichain address checkThis endpoint allows to check multiple addresses from diffrerent blockchain via just one request. This can be useful if you're monitoring your own wallet or portfolio.

Endpoint:

`https://api.blockchair.com/multi/dashboards/addresses/{:address}₀,...,{:address}ᵩ
Where:

{:address}₀,...,{:address}ᵩ is a comma separated list of addresses in the blockchain:address format. Supported blockchains: bitcoin, bitcoin-cash, ethereum, litecoin, bitcoin-sv, dash, groestlcoin, zcash. More blockchains are coming in the future. bitcoin-cash and bitcoin-sv may be used as bitcoincash and bitcoinsv respectively. Only CashAddr format is supported for Bictoin Cash. The maximum number of addresses is 100. There can only be one Ethereum address in the list.
Output:

data.set — information on the entire set (total USD balance, etc.)
data.addresses — an array of info on addresses found
data.transactions — list of the latest transactions for this set (similar to ?transaction_details=true option for {:btc_chain}/dashboards/address endpoint)
Example output:

https://api.blockchair.com/multi/dashboards/addresses/bitcoin:1JADsmDFX9d2TXis63S9F9L8eDAXwJmnWE,ethereum:0x19DdD94B94D3c68385c897846AB44Ac99DBFAe0f,litecoin:LNAifc8nfjtDJ8azRPiancbZSBftPzhfzb,bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa:

{
  "data": {
    "set": {
      "address_count": 4,
      "balance_usd": 634530.2131392508,
      "received_usd": 195118.95799999998,
      "first_seen_receiving": "2009-01-03 18:15:05",
      "last_seen_receiving": "2020-06-26 18:10:58",
      "first_seen_spending": "2019-03-19 18:48:57",
      "last_seen_spending": "2020-06-08 17:48:18",
      "transaction_count": 3524
    },
    "addresses": {
      "bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa": {
        "chain": "bitcoin",
        "address": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        "type": "pubkeyhash",
        "script_hex": "76a91462e907b15cbf27d5425399ebf6f0fb50ebb88f1888ac",
        "balance": 6833161946,
        "balance_usd": 623983.1661066874,
        "received": 6833161946,
        "received_usd": 17068.6063,
        "spent": 0,
        "spent_usd": 0,
        "output_count": 2399,
        "unspent_output_count": 2399,
        "first_seen_receiving": "2009-01-03 18:15:05",
        "last_seen_receiving": "2020-07-18 12:16:28",
        "first_seen_spending": null,
        "last_seen_spending": null
      },
      "bitcoin:1JADsmDFX9d2TXis63S9F9L8eDAXwJmnWE": {
        "chain": "bitcoin",
        "address": "1JADsmDFX9d2TXis63S9F9L8eDAXwJmnWE",
        "type": "pubkeyhash",
        "script_hex": "76a914bc38a131c33427e977a9c08bcce726dd180eece888ac",
        "balance": 115220355,
        "balance_usd": 10521.5656354995,
        "received": 2117013594,
        "received_usd": 164984.9339,
        "spent": 2001793239,
        "spent_usd": 154273.1036,
        "output_count": 672,
        "unspent_output_count": 17,
        "first_seen_receiving": "2019-03-19 01:19:51",
        "last_seen_receiving": "2020-07-18 03:40:41",
        "first_seen_spending": "2019-03-19 18:48:57",
        "last_seen_spending": "2020-07-07 19:05:16"
      },
      "ethereum:0x19ddd94b94d3c68385c897846ab44ac99dbfae0f": {
        "chain": "ethereum",
        "address": "0x19ddd94b94d3c68385c897846ab44ac99dbfae0f",
        "type": "account",
        "contract_code_hex": null,
        "contract_created": null,
        "contract_destroyed": null,
        "balance": "108693390000000000",
        "balance_usd": 25.30068026881297,
        "received_approximate": "56446395000000000000",
        "received_usd": 12974.6457,
        "spent_approximate": "56327761000000000000",
        "spent_usd": 12937.1422,
        "fees_approximate": "9941000000000000",
        "fees_usd": 2.0446,
        "receiving_call_count": 83,
        "spending_call_count": 56,
        "call_count": 140,
        "transaction_count": 140,
        "first_seen_receiving": "2019-03-20 05:34:30",
        "last_seen_receiving": "2020-07-18 17:56:29",
        "first_seen_spending": "2019-03-20 14:26:51",
        "last_seen_spending": "2020-07-13 18:09:23",
        "nonce": null
      },
      "litecoin:LNAifc8nfjtDJ8azRPiancbZSBftPzhfzb": {
        "chain": "litecoin",
        "address": "LNAifc8nfjtDJ8azRPiancbZSBftPzhfzb",
        "type": "pubkeyhash",
        "script_hex": "76a914204bc7902ad5bfc5174b2c3d5162156695fb647888ac",
        "balance": 431305,
        "balance_usd": 0.18071679499999999,
        "received": 20914686144,
        "received_usd": 90.7721,
        "spent": 20914254839,
        "spent_usd": 92.6259,
        "output_count": 59,
        "unspent_output_count": 2,
        "first_seen_receiving": "2019-03-20 00:01:21",
        "last_seen_receiving": "2020-06-26 18:10:58",
        "first_seen_spending": "2019-03-20 00:41:49",
        "last_seen_spending": "2020-06-08 17:48:18"
      }
    },
    "transactions": [
      {
        "chain": "ethereum",
        "address": "0x19ddd94b94d3c68385c897846ab44ac99dbfae0f",
        "block_id": 10484912,
        "hash": "0x35198f37aa02245789fe8c377b2328fa665498981e0ff93909494602b7d3c592",
        "time": "2020-07-18 17:56:29",
        "balance_change": 1000000000000000
      },
      {
        "chain": "ethereum",
        "address": "0x19ddd94b94d3c68385c897846ab44ac99dbfae0f",
        "block_id": 10484558,
        "hash": "0x9e368758434651efdbf1be4a19ec3a90fc74c51a9bd3822957a7bf5e1c5734c2",
        "time": "2020-07-18 16:35:19",
        "balance_change": 413370000000000
      },
      {
        "chain": "bitcoin",
        "address": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
        "block_id": -1,
        "hash": "43401f6f7da64a5bff65fba8b80bb98c9fa252bfc763a634cae5c616e5d89394",
        "time": "2020-07-18 12:16:28",
        "balance_change": 558
      },
      ...
    ]
  },
  "context": {
    "code": 200,
    "cache": {
      "live": true,
      "duration": 60,
      "since": "2020-07-18 18:07:03",
      "until": "2020-07-18 18:08:03",
      "time": null
    },
    "api": {
      "version": "2.0.63",
      "last_major_update": "2019-07-19 18:07:19",
      "next_major_update": "2020-07-19 00:00:00",
      "documentation": "https://blockchair.com/api/docs",
      "notice": "Beginning July 19th, 2020 we'll start enforcing request cost formulas, see the changelog for details"
    },
    "time": 0.330610990524292,
    "render_time": 0.010856151580810547,
    "full_time": 0.34146714210510254,
    "request_cost": 5.1
  }
}


Request cost formula:

The total cost is the same as if you'd use dashboards/addresses endpoints for the requested blockchains separately with the ?transaction_details=true option enabled. In the example, the cost is 5.1, and it's calculated as the sum of using the following endpoints:

https://api.blockchair.com/bitcoin/dashboards/addresses/1JADsmDFX9d2TXis63S9F9L8eDAXwJmnWE,1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?transaction_details=true (cost: 2.1)
https://api.blockchair.com/ethereum/dashboards/address/0x19DdD94B94D3c68385c897846AB44Ac99DBFAe0f (cost: 1)
https://api.blockchair.com/litecoin/dashboards/addresses/LNAifc8nfjtDJ8azRPiancbZSBftPzhfzb?transaction_details=true (cost: 2)
Raw data endpointsRetrieve raw information about various entities directly from our full nodes

Raw data endpoints for Bitcoin-like blockchains (Bitcoin, Bitcoin Cash, Litecoin, Bitcoin SV, Dogecoin, Dash, Groestlcoin, Zcash, eCash, Bitcoin Testnet)Raw block dataReturns raw block data directly from our full node. If the block is larger than 10 megabytes in size, returns a 402 error.

Endpoints:

https://api.blockchair.com/{:btc_chain}/raw/block/{:height}₀
https://api.blockchair.com/{:btc_chain}/raw/block/{:hash}₀
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:height}ᵢ is the block height (integer value), also known as block id
{:hash}ᵢ is the block hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:id}ᵢ.raw_block — raw block represented as a hex string
data.{:id}ᵢ.decoded_raw_block — raw block encoded in JSON by our node. Please note that the structure of this JSON array may change as we upgrade our nodes, and this won't be reflected in our change logs. We don't provide field descriptions for raw endpoints, that information can be found on the Bitcoin Core website (all Bitcoin-like blockchains the same output structure).
Where {:id}ᵢ is either {:height}ᵢ or {:hash}ᵢ from the query string. If there's no {:id}ᵢ has been found on the blockchain, returns an empty array.

Context keys:

context.state: best block height on the {:btc_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = context.state - data.{:id}ᵢ.block.id + 1)
Example requests:

https://api.blockchair.com/bitcoin/raw/block/0
https://api.blockchair.com/bitcoin/raw/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f
Example output:

https://api.blockchair.com/bitcoin/raw/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f:


{
  "data": {
    "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f": {
      "raw_block": "0100000000000000000000000000000000000000000000000000000000000000000000003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a29ab5f49ffff001d1dac2b7c0101000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
      "decoded_raw_block": {
        "hash": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
        "confirmations": 599952,
        "strippedsize": 285,
        "size": 285,
        "weight": 1140,
        "height": 0,
        "version": 1,
        "versionHex": "00000001",
        "merkleroot": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
        "tx": [
          "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b"
        ],
        "time": 1231006505,
        "mediantime": 1231006505,
        "nonce": 2083236893,
        "bits": "1d00ffff",
        "difficulty": 1,
        "chainwork": "0000000000000000000000000000000000000000000000000000000100010001",
        "nTx": 1,
        "nextblockhash": "00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048"
      }
    }
  },
  "context": {
    "code": 200,
    ...
  }
}


Request cost formula:

Always 1.

Raw transaction dataReturns raw transaction data directly from our full node.

Endpoint:

https://api.blockchair.com/{:btc_chain}/raw/transaction/{:hash}₀
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:hash}ᵢ is the transaction hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:hash}ᵢ.raw_transaction — raw transaction represented as a hex string
data.{:hash}ᵢ.decoded_raw_transaction — raw transaction encoded in JSON by our node. Please note that the structure of this JSON array may change as we upgrade our nodes, and this won't be reflected in our change logs. We don't provide field descriptions for raw endpoints, that information can be found on the Bitcoin Core website (all Bitcoin-like blockchains the same output structure).
If there's no {:hash}ᵢ has been found on the blockchain, returns an empty array.

Context keys:

context.state: best block height on the {:btc_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = context.state - data.{:id}ᵢ.block.id + 1)
Example requests:

https://api.blockchair.com/bitcoin/raw/transaction/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16
Example output:

https://api.blockchair.com/bitcoin/raw/transaction/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16:

{
  "data": {
    "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16": {
      "raw_transaction": "0100000001c997a5e56e104102fa209c6a852dd90660a20b2d9c352423edce25857fcd3704000000004847304402204e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd410220181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d0901ffffffff0200ca9a3b00000000434104ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302fa28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e6cd84cac00286bee0000000043410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac00000000",
      "decoded_raw_transaction": {
        "txid": "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
        "hash": "f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16",
        "version": 1,
        "size": 275,
        "vsize": 275,
        "weight": 1100,
        "locktime": 0,
        "vin": [
          {
            "txid": "0437cd7f8525ceed2324359c2d0ba26006d92d856a9c20fa0241106ee5a597c9",
            "vout": 0,
            "scriptSig": {
              "asm": "304402204e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd410220181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d09[ALL]",
              "hex": "47304402204e45e16932b8af514961a1d3a1a25fdf3f4f7732e9d624c6c61548ab5fb8cd410220181522ec8eca07de4860a4acdd12909d831cc56cbbac4622082221a8768d1d0901"
            },
            "sequence": 4294967295
          }
        ],
        "vout": [
          {
            "value": 10,
            "n": 0,
            "scriptPubKey": {
              "asm": "04ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302fa28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e6cd84c OP_CHECKSIG",
              "hex": "4104ae1a62fe09c5f51b13905f07f06b99a2f7159b2225f374cd378d71302fa28414e7aab37397f554a7df5f142c21c1b7303b8a0626f1baded5c72a704f7e6cd84cac",
              "reqSigs": 1,
              "type": "pubkey",
              "addresses": [
                "1Q2TWHE3GMdB6BZKafqwxXtWAWgFt5Jvm3"
              ]
            }
          },
          {
            "value": 40,
            "n": 1,
            "scriptPubKey": {
              "asm": "0411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3 OP_CHECKSIG",
              "hex": "410411db93e1dcdb8a016b49840f8c53bc1eb68a382e97b1482ecad7b148a6909a5cb2e0eaddfb84ccf9744464f82e160bfa9b8b64f9d4c03f999b8643f656b412a3ac",
              "reqSigs": 1,
              "type": "pubkey",
              "addresses": [
                "12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S"
              ]
            }
          }
        ]
      }
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 599962,
    ...
  }
}


Request cost formula:

Always 1.

Raw data endpoints for Ethereum and Ethereum Goerli TestnetRaw block dataReturns raw block data directly from our full node.

Endpoints:

https://api.blockchair.com/{:eth_chain}/raw/block/{:height}₀
https://api.blockchair.com/{:eth_chain}/raw/block/{:hash}₀
Where:

{:eth_chain} can only be ethereum or ethereum/testnet
{:height}ᵢ is the block height (integer value), also known as block id
{:hash}ᵢ is the block hash (regex: /^0x[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:id}ᵢ.decoded_raw_block — raw block encoded in JSON by our node. Please note that the structure of this JSON array may change as we upgrade our nodes, and this won't be reflected in our change logs. We don't provide field descriptions for raw endpoints, that information can be found on the geth implementation website.
Where {:id}ᵢ is either {:height}ᵢ or {:hash}ᵢ from the query string. If there's no {:id}ᵢ has been found on the blockchain, returns an empty array.

Context keys:

context.state: best block height on the {:eth_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = context.state - data.{:id}ᵢ.block.id + 1)
Example requests:

https://api.blockchair.com/ethereum/raw/block/2345678
https://api.blockchair.com/ethereum/raw/block/0xda214d1b1d458e7ae0e626b69a52a59d19762c51a53ff64813c4d31256282fdf
Example output:

https://api.blockchair.com/ethereum/raw/block/2345678:

{
  "data": {
    "2345678": {
      "decoded_raw_block": {
        "difficulty": "0x4a823a45d075",
        "extraData": "0x657468706f6f6c2e6f7267202845553129",
        "gasLimit": "0x16e360",
        "gasUsed": "0x19a28",
        "hash": "0xda214d1b1d458e7ae0e626b69a52a59d19762c51a53ff64813c4d31256282fdf",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "miner": "0x4bb96091ee9d802ed039c4d1a5f6216f90f81b01",
        "mixHash": "0xf5b95f5b79cd8425db7f04d200d78d16c104c28d078d0b653ae1c24f31759662",
        "nonce": "0x0975348010868c22",
        "number": "0x23cace",
        "parentHash": "0x4578cd622e7e738bfd8f2675aa58337b60cf337a59347c76f61f4ed74a9811f8",
        "receiptsRoot": "0x51a6952987f2c7ebf74fc1a4f644265aebb660b1d86a12c0f6e3001a2866331f",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0x455",
        "stateRoot": "0x4f6b1af13d99c75e0d644b226d57767a0d2f22921c529dfe3455bc63154b01e5",
        "timestamp": "0x57ec70dd",
        "totalDifficulty": "0x3a0f803ebc49e50af",
        "transactions": [
          "0x4052841e7ff856e08e73245ed1fab5f41021d4bfe83202b6581870cb559b44c4",
          "0xa1ed63865958a1b3abc8e259dc980bd76dd3f989f14577cce18b7e265cf9528e",
          "0x1d6713c7e6be2a45e6b3d2a7dfc1af96443cfb65d4b51cd41ac21b7b840e77e0",
          "0xffbcdcbef6c5341dd60a9b7f182b61cf0c468d63defcc2fa8c56e292d4bfc8d6",
          "0x0c79e3ae36150eb36d6a631cc8d6250db4b9b832a82ac58ea356357f5987debe"
        ],
        "transactionsRoot": "0xdde4d2ce7556effca10c868f500f0e47fb09b5cb4a003d781080f1a06e582352",
        "uncles": []
      }
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 8766206,
    "state_layer_2": 8766195,
    ...
  }
}


Request cost formula:

Always 1.

Raw transaction dataReturns raw transaction data directly from our full node.

Endpoint:

https://api.blockchair.com/{:eth_chain}/raw/transaction/{:hash}₀
Where:

{:eth_chain} can only be ethereum or ethereum/testnet
{:hash}ᵢ is the transaction hash (regex: /^0x[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:hash}ᵢ.raw_transaction — raw transaction represented as a hex string starting with 0x
If there's no {:hash}ᵢ has been found on the blockchain, returns an empty array.

Context keys:

context.state: best block height on the {:btc_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = context.state - data.{:id}ᵢ.block.id + 1)
Example requests:

https://api.blockchair.com/ethereum/raw/transaction/0x93fa9a3ac6190022adc75d1d83e3d86e0a99ac1eb88f80fec59599f55931766e
Example output:

https://api.blockchair.com/ethereum/raw/transaction/0x93fa9a3ac6190022adc75d1d83e3d86e0a99ac1eb88f80fec59599f55931766e:

{
  "data": {
    "0x93fa9a3ac6190022adc75d1d83e3d86e0a99ac1eb88f80fec59599f55931766e": {
      "raw_transaction": "0xf8697b843b9aca0082520894536a0a5293a4575dd351563c63774a623bf2b46b866eaddc096200801ca01bd6971ae88c70ab930b3405b6f14da553f8515dced42e080ddca5f968c5bd6ca06e3a623453d5e4d91b8785ef8066f2cf82ef299e987a595ec66b5917deeb7d38"
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 8767087,
    "state_layer_2": 8767077,
    ...
  }
}


Request cost formula:

Always 1.

Raw data endpoints for RippleRaw ledger dataReturns raw ledger data directly from our full node.

Endpoints:

https://api.blockchair.com/{:xrp_chain}/raw/ledger/{:height}₀
https://api.blockchair.com/{:xrp_chain}/raw/ledger/{:hash}₀
Where:

{:xrp_chain} can only be ripple
{:height}ᵢ is the ledger number (integer value)
{:hash}ᵢ is the ledger hash (regex: /^[0-9a-f]{64}$/i)
Possible options:

?transactions=true displays transaction data
Output:

data contains an associative array:

data.{:id}ᵢ.ledger — raw ledger encoded in JSON by our node. Please note that the structure of this JSON array may change as we upgrade our nodes, and this won't be reflected in our change logs. We don't provide field descriptions for raw endpoints, that information can be found on the Ripple website.
Where {:id}ᵢ is either {:height}ᵢ or {:hash}ᵢ from the query string. If there's no {:id}ᵢ has been found on the blockchain, returns an empty array.

Context keys:

context.state: best ledget height on the {:xrp_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = data.{:id}ᵢ.ledger.id - context.state + 1)
Example requests:

https://api.blockchair.com/ripple/raw/ledger/50000000
https://api.blockchair.com/ripple/raw/ledger/0C073A753670E99C210264F7783FE5F7C3DEAEE3B1237C10B1584E6FBD2A6505
https://api.blockchair.com/ripple/raw/ledger/50000000?transactions=true
Example output:

https://api.blockchair.com/ripple/raw/ledger/50000000:

{
  "data": {
    "50000000": {
      "ledger": {
        "accepted": true,
        "account_hash": "191EA9DD67A3FDAA40293D762EB4F96AB852ACA499AA37F3851616EF449A63E1",
        "close_flags": 0,
        "close_time": 621665931,
        "close_time_human": "2019-Sep-13 04:58:51.000000000",
        "close_time_resolution": 10,
        "closed": true,
        "hash": "0C073A753670E99C210264F7783FE5F7C3DEAEE3B1237C10B1584E6FBD2A6505",
        "ledger_hash": "0C073A753670E99C210264F7783FE5F7C3DEAEE3B1237C10B1584E6FBD2A6505",
        "ledger_index": "50000000",
        "parent_close_time": 621665930,
        "parent_hash": "3B4431099292FC6DBF3875FB2FA1022B2FF06B765ABA163B09DF4F1383A3E30B",
        "seqNum": "50000000",
        "totalCoins": "99991346321080101",
        "total_coins": "99991346321080101",
        "transaction_hash": "8FD966C7D8DEAE695655B65E968FFE36521869D5278C4115BBDEB697D084A8AC"
      },
      "ledger_hash": "0C073A753670E99C210264F7783FE5F7C3DEAEE3B1237C10B1584E6FBD2A6505",
      "ledger_index": 50000000,
      "marker": "000003E6AFED1AADCC39AAE0727B354C2286F1503274F345FE661748F24366CE",
      "state": null,
      "status": "success",
      "validated": true
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 50797264,
    ...
  }
}


Request cost formula:

1. If ?transactions=true option is used then 2.

Explore visualization on our front-end:

https://blockchair.com/ripple/ledger/50000000
Raw transaction dataReturns raw transaction data directly from our full node.

Endpoint:

https://api.blockchair.com/{:xrp_chain}/raw/transaction/{:hash}₀
Where:

{:xrp_chain} can only be ripple
{:hash}ᵢ is the transaction hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:hash}ᵢ.decoded_raw_transaction — raw transaction encoded in JSON by our node. Please note that the structure of this JSON array may change as we upgrade our nodes, and this won't be reflected in our change logs. We don't provide field descriptions for raw endpoints, that information can be found on the Ripple website`
If there's no {:hash}ᵢ has been found on the blockchain, returns an empty array.

Context keys:

context.state: best ledger height on the {:xrp_chain} chain
Example requests:

https://api.blockchair.com/ripple/raw/transaction/0847A0062757E3490389069DBB3FBA8626EEEE07C126123660248CE1B32D34E3
Example output:

https://api.blockchair.com/ripple/raw/transaction/0847A0062757E3490389069DBB3FBA8626EEEE07C126123660248CE1B32D34E3:

{
  "data": {
    "0847A0062757E3490389069DBB3FBA8626EEEE07C126123660248CE1B32D34E3": {
      "Account": "rKLpjpCoXgLQQYQyj13zgay73rsgmzNH13",
      "Amount": {
        "currency": "XCN",
        "issuer": "rPFLkxQk6xUGdGYEykqe7PR25Gr7mLHDc8",
        "value": "10000"
      },
      "Destination": "rKLpjpCoXgLQQYQyj13zgay73rsgmzNH13",
      "Fee": "11",
      "Flags": 2147942400,
      "LastLedgerSequence": 50000001,
      "Paths": [
        [
          {
            "currency": "CNY",
            "issuer": "rKiCet8SdvWxPXnAgYarFUXMh1zCPz432Y",
            "type": 48,
            "type_hex": "0000000000000030"
          },
          {
            "currency": "USD",
            "issuer": "rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq",
            "type": 48,
            "type_hex": "0000000000000030"
          },
          {
            "currency": "XRP",
            "type": 16,
            "type_hex": "0000000000000010"
          },
          {
            "currency": "XCN",
            "issuer": "rPFLkxQk6xUGdGYEykqe7PR25Gr7mLHDc8",
            "type": 48,
            "type_hex": "0000000000000030"
          }
        ],
        ...
      ],
      "SendMax": "10000000000",
      "Sequence": 5435383,
      "SigningPubKey": "030AC4F2BA6E1FF86BEB234B639918DAFDF0675032AE264D2B39641503822373FE",
      "TransactionType": "Payment",
      "TxnSignature": "30450221009533287ED1277DD0E8EDC49A75A6E1B2ADE5F4282915EF91C4466B7D21175E380220424535BDFB12F040516FC3E947BAEA5F40C5F03CA3B63C0375F1773C9FFC793E",
      "date": 621665931,
      "hash": "0847A0062757E3490389069DBB3FBA8626EEEE07C126123660248CE1B32D34E3",
      "inLedger": 50000000,
      "ledger_index": 50000000,
      "status": "success"
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 50799948,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/ripple/transaction/18BC01124BC4FBA1D4CF8EAA934EBCDC9136FE987D0F7E1505A94C767465500C
Raw account dataReturns raw account data directly from our full node.

Endpoint:

https://api.blockchair.com/{:xrp_chain}/raw/account/{:account}
Where:

{:xrp_chain} can only be ripple
{:account}ᵢ is the account address
Possible options:

?assets=true returns information about account's assets
?transactions=true returns information about latest 10 transactions
Output:

data contains an associative array:

data.{:account}ᵢ — raw account data encoded in JSON by our node. Please note that the structure of this JSON array may change as we upgrade our nodes, and this won't be reflected in our change logs. We don't provide field descriptions for raw endpoints, that information can be found on the Ripple website
If there's no {:account}ᵢ has been found on the blockchain, returns an empty array.

Context keys:

context.state: best ledger height on the {:xrp_chain} chain
Example requests:

https://api.blockchair.com/ripple/raw/account/rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR?assets=true&transactions=true
https://api.blockchair.com/ripple/raw/account/rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR?assets=true&transactions=true
Example output:

https://api.blockchair.com/ripple/raw/account/rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR?assets=true&transactions=true:

{
  "data": {
    "rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR": {
      "account": {
        "account_data": {
          "Account": "rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR",
          "Balance": "97894917",
          "Flags": 0,
          "LedgerEntryType": "AccountRoot",
          "OwnerCount": 5,
          "PreviousTxnID": "7F358F814D4E9FD7FB9E3E00CD00D1616458E7DBEC7F764C0E5F63949398B414",
          "PreviousTxnLgrSeq": 50803417,
          "Sequence": 14884800,
          "index": "E0311EB450B6177F969B94DBDDA83E99B7A0576ACD9079573876F16C0C004F06"
        },
        "ledger_current_index": 50803418,
        "status": "success",
        "validated": false
      },
      "assets": {
        "account": "rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR",
        "ledger_current_index": 50803418,
        "lines": [
          {
            "account": "rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK",
            "balance": "573982.6565030623",
            "currency": "CNY",
            "limit": "1000000000",
            "limit_peer": "0",
            "no_ripple": true,
            "no_ripple_peer": true,
            "quality_in": 0,
            "quality_out": 0
          }
        ],
        "status": "success",
        "validated": false
      },
      "transactions": {
        "account": "rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR",
        "ledger_index_max": 50803417,
        "ledger_index_min": 50226369,
        "limit": 10,
        "marker": {
          "ledger": 50803415,
          "seq": 25
        },
        "status": "success",
        "transactions": [
          {
            "meta": {
              "AffectedNodes": [
                {
                  "CreatedNode": {
                    "LedgerEntryType": "DirectoryNode",
                    "LedgerIndex": "1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A128D7E42783345",
                    "NewFields": {
                      "ExchangeRate": "5A128D7E42783345",
                      "RootIndex": "1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A128D7E42783345",
                      "TakerGetsCurrency": "000000000000000000000000434E590000000000",
                      "TakerGetsIssuer": "0360E3E0751BD9A566CD03FA6CAFC78118B82BA0"
                    }
                  }
                },
                {
                  "DeletedNode": {
                    "FinalFields": {
                      "ExchangeRate": "5A128D7E427D2AA7",
                      "Flags": 0,
                      "RootIndex": "1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A128D7E427D2AA7",
                      "TakerGetsCurrency": "000000000000000000000000434E590000000000",
                      "TakerGetsIssuer": "0360E3E0751BD9A566CD03FA6CAFC78118B82BA0",
                      "TakerPaysCurrency": "0000000000000000000000000000000000000000",
                      "TakerPaysIssuer": "0000000000000000000000000000000000000000"
                    },
                    "LedgerEntryType": "DirectoryNode",
                    "LedgerIndex": "1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A128D7E427D2AA7"
                  }
                },
                {
                  "CreatedNode": {
                    "LedgerEntryType": "Offer",
                    "LedgerIndex": "2E113BC264A73193A08038293E32D7D6474D0035EC21B5F9B559360046106385",
                    "NewFields": {
                      "Account": "rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR",
                      "BookDirectory": "1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A128D7E42783345",
                      "Sequence": 14884795,
                      "TakerGets": {
                        "currency": "CNY",
                        "issuer": "rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK",
                        "value": "13873.74225408225"
                      },
                      "TakerPays": "7245038854"
                    }
                  }
                },
                {
                  "DeletedNode": {
                    "FinalFields": {
                      "Account": "rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR",
                      "BookDirectory": "1AC09600F4B502C8F7F830F80B616DCB6F3970CB79AB70975A128D7E427D2AA7",
                      "BookNode": "0000000000000000",
                      "Flags": 0,
                      "OwnerNode": "0000000000000000",
                      "PreviousTxnID": "9CD2DE1FDC90C8CC23687B7125CD9142B0404BD08E7D346A350C7DCB6DAECC0E",
                      "PreviousTxnLgrSeq": 50803416,
                      "Sequence": 14884791,
                      "TakerGets": {
                        "currency": "CNY",
                        "issuer": "rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK",
                        "value": "29217.47535833971"
                      },
                      "TakerPays": "15257725012"
                    },
                    "LedgerEntryType": "Offer",
                    "LedgerIndex": "82729E243E07C4A691D01DEFC94BD86B3C5A4634A58054B479226E11C427ABCC"
                  }
                },
                {
                  "ModifiedNode": {
                    "FinalFields": {
                      "Flags": 0,
                      "IndexNext": "0000000000000000",
                      "IndexPrevious": "0000000000000000",
                      "Owner": "rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR",
                      "RootIndex": "AEA3074F10FE15DAC592F8A0405C61FB7D4C98F588C2D55C84718FAFBBD2604A"
                    },
                    "LedgerEntryType": "DirectoryNode",
                    "LedgerIndex": "AEA3074F10FE15DAC592F8A0405C61FB7D4C98F588C2D55C84718FAFBBD2604A"
                  }
                },
                {
                  "ModifiedNode": {
                    "FinalFields": {
                      "Account": "rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR",
                      "Balance": "97894965",
                      "Flags": 0,
                      "OwnerCount": 5,
                      "Sequence": 14884796
                    },
                    "LedgerEntryType": "AccountRoot",
                    "LedgerIndex": "E0311EB450B6177F969B94DBDDA83E99B7A0576ACD9079573876F16C0C004F06",
                    "PreviousFields": {
                      "Balance": "97894977",
                      "Sequence": 14884795
                    },
                    "PreviousTxnID": "C8EE48118ACB84DF41168BEB7D991CD07C7D21EDB52F798AA0ED1C296EE7C4C0",
                    "PreviousTxnLgrSeq": 50803417
                  }
                }
              ],
              "TransactionIndex": 8,
              "TransactionResult": "tesSUCCESS"
            },
            "tx": {
              "Account": "rh3VLyj1GbQjX7eA15BwUagEhSrPHmLkSR",
              "Fee": "12",
              "Flags": 0,
              "LastLedgerSequence": 50803419,
              "OfferSequence": 14884791,
              "Sequence": 14884795,
              "SigningPubKey": "022D40673B44C82DEE1DDB8B9BB53DCCE4F97B27404DB850F068DD91D685E337EA",
              "TakerGets": {
                "currency": "CNY",
                "issuer": "rJ1adrpGS3xsnQMb9Cw54tWJVFPuSdZHK",
                "value": "13873.74225408225"
              },
              "TakerPays": "7245038854",
              "TransactionType": "OfferCreate",
              "TxnSignature": "3044022032CDB56EB073D2BABAB4646F494478A6CAEE4B94BACB6D15124261FA04BFF80C022077D11F8EB991954F71F7712F92240F8D1DD393369E7DC37E855E00778ADAD64D",
              "date": 624761581,
              "hash": "7F358F814D4E9FD7FB9E3E00CD00D1616458E7DBEC7F764C0E5F63949398B414",
              "inLedger": 50803417,
              "ledger_index": 50803417
            },
            "validated": true
          },
          ...
        ]
      }
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 50803416,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/ripple/account/rKLpjpCoXgLQQYQyj13zgay73rsgmzNH13
Raw data endpoints for StellarRaw ledger dataReturns raw ledger data directly from our full node.

Endpoint:

https://api.blockchair.com/{:xlm_chain}/raw/ledger/{:height}₀
Where:

{:xlm_chain} can only be stellar
{:height}ᵢ is the ledger number (integer value)
Possible options:

?transactions=true displays transaction data
Output:

data contains an associative array:

data.{:height}ᵢ.ledger — raw ledger encoded in JSON by our node. Please note that the structure of this JSON array may change as we upgrade our nodes, and this won't be reflected in our change logs. We don't provide field descriptions for raw endpoints, that information can be found on the Stellar website.
Context keys:

context.state: best ledger height on the {:btc_chain} chain (tip: it's possible to calculate the number of confirmation block received using this formula: confirmations = context.state - data.{:id}ᵢ.block.id + 1)
Example requests:

https://api.blockchair.com/stellar/raw/ledger/26550000
https://api.blockchair.com/stellar/raw/ledger/26550000?transactions=true
Example output:

https://api.blockchair.com/stellar/raw/ledger/26550000:

{
  "data": {
    "26550000": {
      "ledger": {
        "id": "fed785dba44cfe2fd295780e7c25f7f07ed45262269a70c4e6bde9e84e3793f8",
        "paging_token": "114031381708800000",
        "hash": "fed785dba44cfe2fd295780e7c25f7f07ed45262269a70c4e6bde9e84e3793f8",
        "prev_hash": "3ea68ed2ee8cdfce550382856ca49ef4144e0cf9c2805b1a020ab4093caa53c6",
        "sequence": 26550000,
        "successful_transaction_count": 13,
        "failed_transaction_count": 2,
        "operation_count": 32,
        "closed_at": "2019-10-30T07:45:58Z",
        "total_coins": "105443902087.3472865",
        "fee_pool": "1806770.7383261",
        "base_fee_in_stroops": 100,
        "base_reserve_in_stroops": 5000000,
        "max_tx_set_size": 1000,
        "protocol_version": 12,
        "header_xdr": "AAAADD6mjtLujN/OVQOChWyknvQUTgz5woBbGgIKtAk8qlPG5z6KZRbEna3gObMFtKI86FhJuQxj5LtF0RdBe2sgpsQAAAAAXbk/tgAAAAAAAAAAKMzxu3Hs9m1o4nZnq+QAjSOZBarLt8M9Feijiot1z8r7LlCHEDaLHsvky0SpheuEPgdvHIHDWN9FqxxLqSeDdAGVHvAOoh6z7HlbYQAAEG63R83dAAABFgAAAAAHjozrAAAAZABMS0AAAAPo+y5QhxA2ix7L5MtEqYXrhD4HbxyBw1jfRascS6kng3SFsbCPVWlIYy5CD3xrfmHW5QVBaCXNxhM66HUv3N/E7yNrXPzOlSLpkylGu0oLplg8ltK+RXCU27vxVw0P+guGyG3+zc/A1cWvfpnr0rXnL/jFwF6AQdjikSSt8tSYeiMAAAAA"
      },
      "transactions": null
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 26559101,
    ...
  }
}


Request cost formula:

1. If ?transactions=true option is used then 2.

Explore visualization on our front-end:

https://blockchair.com/stellar/ledger/26550000
Raw transaction dataReturns raw transaction data directly from our full node.

Endpoint:

https://api.blockchair.com/{:xlm_chain}/raw/transaction/{:hash}₀
Where:

{:xlm_chain} can only be stellar
{:hash}ᵢ is the transaction hash (regex: /^[0-9a-f]{64}$/i)
Possible options:

?operations=true displays operations data
?effects=true displays effects data
Output:

data contains an associative array:

data.{:hash}ᵢ.transaction — raw transaction encoded in JSON by our node. Please note that the structure of this JSON array may change as we upgrade our nodes, and this won't be reflected in our change logs. We don't provide field descriptions for raw endpoints, that information can be found on the Stellar website`
data.{:hash}ᵢ.operations (optional: if the parameter is not set yields null)
data.{:hash}ᵢ.effects (optional: if the parameter is not set yields null)
If there's no {:hash}ᵢ has been found on the blockchain, returns an empty array.

Context keys:

context.state: best ledger height on the {:xlm_chain} chain
Example requests:

https://api.blockchair.com/stellar/raw/transaction/0a6bf9370255d1309c93f93b5d35cd5e6f504700dda7d144eece9a127a20afe8
https://api.blockchair.com/stellar/raw/transaction/0a6bf9370255d1309c93f93b5d35cd5e6f504700dda7d144eece9a127a20afe8?operations=true&effects=true
Example output:

https://api.blockchair.com/stellar/raw/transaction/0a6bf9370255d1309c93f93b5d35cd5e6f504700dda7d144eece9a127a20afe8?operations=true&effects=true:

{
  "data": {
    "0a6bf9370255d1309c93f93b5d35cd5e6f504700dda7d144eece9a127a20afe8": {
      "transaction": {
        "id": "0a6bf9370255d1309c93f93b5d35cd5e6f504700dda7d144eece9a127a20afe8",
        "paging_token": "114031381708804096",
        "successful": true,
        "hash": "0a6bf9370255d1309c93f93b5d35cd5e6f504700dda7d144eece9a127a20afe8",
        "ledger": 26550000,
        "created_at": "2019-10-30T07:45:58Z",
        "source_account": "GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7",
        "source_account_sequence": "113240003919741179",
        "fee_paid": 100,
        "fee_charged": 100,
        "max_fee": 10000,
        "operation_count": 1,
        "envelope_xdr": "AAAAAFyxiwoZaiNqhtuW/HjMzQEAX5ztGbiK5g1tv8WQJi+eAAAnEAGSTy...",
        "result_xdr": "AAAAAAAAAGQAAAAAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAFyxiwoZ...",
        "result_meta_xdr": "AAAAAQAAAAIAAAADAZUe8AAAAAAAAAAAXAAAAAAAAAAAAAAAAAAAAAA...",
        "fee_meta_xdr": "AAAAAgAAAAMBlR4aAAAAAAAAAABcsYsKGWojaobblvx4zM0BAF+c7Rm4iu...",
        "memo_type": "none",
        "signatures": [
          "/tbZWxQaFew0kkO7HNG2jpfCJ9+Bhu/IieCa8CK/pBUx6IX5NyBCbY5cQtC2mnWDCloOsQw6BpDGcPjFJKElCw=="
        ]
      },
      "operations": [
        {
          "id": "114031381708804097",
          "paging_token": "114031381708804097",
          "transaction_successful": true,
          "source_account": "GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7",
          "type": "manage_offer",
          "type_i": 3,
          "created_at": "2019-10-30T07:45:58Z",
          "transaction_hash": "0a6bf9370255d1309c93f93b5d35cd5e6f504700dda7d144eece9a127a20afe8",
          "amount": "20.9531697",
          "price": "41.0000000",
          "price_r": {
            "n": 41,
            "d": 1
          },
          "buying_asset_type": "native",
          "selling_asset_type": "credit_alphanum4",
          "selling_asset_code": "NRV",
          "selling_asset_issuer": "GANRAE2FXMIU4V7CPLXFHWZNGCCSW7WEVBN2P3ZWA7FWWVED6OJSKKX2",
          "offer_id": 0
        }
      ],
      "effects": []
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 26559101,
    ...
  }
}


Request cost formula:

1. Plus 1 for every of these options used: ?operations=true, ?effects=true)

Explore visualization on our front-end:

https://blockchair.com/stellar/transaction/0a6bf9370255d1309c93f93b5d35cd5e6f504700dda7d144eece9a127a20afe8
Raw account dataReturns raw account data directly from our full node.

Endpoint:

https://api.blockchair.com/{:xlm_chain}/raw/account/{:account}
Where:

{:xlm_chain} can only be stellar
{:account}ᵢ is the account address
Possible options:

?transactions=true returns information about latest account transactions
?operations=true returns information about latest account operations
?payments=true returns information about latest account payments
?effects=true returns information about latest account effects
?offers=true returns information about latest account offers
?trades=true returns information about latest account trades
?account=false doesn't query account data (true by default if this option is not applied)
Output:

data contains an associative array:

data.{:account}ᵢ.account — raw account data encoded in JSON by our node. Please note that the structure of this JSON array may change as we upgrade our nodes, and this won't be reflected in our change logs. We don't provide field descriptions for raw endpoints, that information can be found on the Ripple website
Optional arrays (transactions, operations, payments, effects, offers, trades), yield null if the corresponding options aren't used
If there's no {:account}ᵢ has been found on the blockchain, returns an empty array.

Context keys:

context.state: best ledger height on the {:xlm_chain} chain
Example requests:

https://api.blockchair.com/stellar/raw/account/GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7
https://api.blockchair.com/stellar/raw/account/GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7?transactions=true&trades=true
https://api.blockchair.com/stellar/raw/account/GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7?transactions=true&account=false
Example output:

https://api.blockchair.com/stellar/raw/account/GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7:

{
  "data": {
    "GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7": {
      "account": {
        "id": "GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7",
        "account_id": "GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7",
        "sequence": "113240003919741217",
        "subentry_count": 16,
        "inflation_destination": "GDCHDRSDOBRMSUDKRE2C4U4KDLNEATJPIHHR2ORFL5BSD56G4DQXL4VW",
        "home_domain": "lobstr.co",
        "last_modified_ledger": 26574812,
        "thresholds": {
          "low_threshold": 0,
          "med_threshold": 0,
          "high_threshold": 0
        },
        "flags": {
          "auth_required": false,
          "auth_revocable": false,
          "auth_immutable": false
        },
        "balances": [
          {
            "balance": "99.9999989",
            "limit": "922337203685.4775807",
            "buying_liabilities": "0.0000000",
            "selling_liabilities": "0.0000000",
            "last_modified_ledger": 26369752,
            "is_authorized": true,
            "asset_type": "credit_alphanum4",
            "asset_code": "MOBI",
            "asset_issuer": "GA6HCMBLTZS5VYYBCATRBRZ3BZJMAFUDKYYF6AH6MVCMGWMRDNSWJPIH"
          },
          ...
          {
            "balance": "350.2871051",
            "buying_liabilities": "105.0000000",
            "selling_liabilities": "341.1000000",
            "asset_type": "native"
          }
        ],
        "signers": [
          {
            "weight": 1,
            "key": "GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7",
            "type": "ed25519_public_key"
          }
        ],
        "data": []
      },
      "transactions": null,
      "operations": null,
      "payments": null,
      "effects": null,
      "offers": null,
      "trades": null
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 26559101,
    ...
  }
}


Request cost formula:

1. Plus 1 for every of these options used: ?transactions=true, ?operations=true, ?payments=true, ?effects=true, ?offers=true, ?trades=true). Minus 1 if ?account=false is used.

Explore visualizations on our front-end:

https://blockchair.com/stellar/account/GBOLDCYKDFVCG2UG3OLPY6GMZUAQAX445UM3RCXGBVW37RMQEYXZ4HD7
Raw data endpoints for MoneroRaw block dataReturns raw block data from our onion-monero-blockchain-explorer instance. See https://github.com/moneroexamples/onion-monero-blockchain-explorer/blob/master/README.md for field descriptions (api/block/<block_number|block_hash> section), but mostly they are self-describing.

Endpoints:

https://api.blockchair.com/{:xmr_chain}/raw/block/{:height}₀
https://api.blockchair.com/{:xmr_chain}/raw/block/{:hash}₀
Where:

{:xmr_chain} can be only monero
{:height}ᵢ is the block height (integer value), also known as block id
{:hash}ᵢ is the block hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:id}ᵢ.block — block data. We don't provide field descriptions at the moment as they can change at any time. Most of the key names are self-explanatory.
Example requests:

https://api.blockchair.com/monero/raw/block/1234567
https://api.blockchair.com/monero/raw/block/f093439d0dd48010a22fdb615a659e22738a10991871b5dc2335efa69008a8cd
Example output:

https://api.blockchair.com/monero/raw/block/1234567:

{
  "data": {
    "1234567": {
      "block": {
        "block_height": 1234567,
        "current_height": 2014051,
        "hash": "f093439d0dd48010a22fdb615a659e22738a10991871b5dc2335efa69008a8cd",
        "size": 51507,
        "timestamp": 1485715365,
        "timestamp_utc": "2017-01-29 18:42:45",
        "txs": [
          {
            "coinbase": true,
            "extra": "0125abf5f7f41eeae08c49b48ec8dffcd7aff78d87e808508e3b073105582fd1b6020800000001e75bdb47",
            "mixin": 0,
            "payment_id": "",
            "payment_id8": "",
            "rct_type": 0,
            "tx_fee": 0,
            "tx_hash": "09d132f2c90d0f6726cf7dbbce83114a1e650a098c1e9cf3fc6773bba02c5e13",
            "tx_size": 95,
            "tx_version": 2,
            "xmr_inputs": 0,
            "xmr_outputs": 8864856845578
          },
          {
            "coinbase": false,
            "extra": "018a462e859627da64801ab1a4122717451a4e4f7ab917fcd746c62dd0eeceeba2",
            "mixin": 3,
            "payment_id": "",
            "payment_id8": "",
            "rct_type": 2,
            "tx_fee": 66692772936,
            "tx_hash": "467f1914b3f5f4eb52dda02bfd0b70b89722b88063f40889bfba46d3ec78de80",
            "tx_size": 38479,
            "tx_version": 2,
            "xmr_inputs": 0,
            "xmr_outputs": 0
          },
          {
            "coinbase": false,
            "extra": "01445566c1696160cd602ad2fe7805b12d0efbd2866be04ee8d1c1c00cce399cfe020901cd644f0fe978dc0c",
            "mixin": 3,
            "payment_id": "",
            "payment_id8": "cd644f0fe978dc0c",
            "rct_type": 1,
            "tx_fee": 22815948636,
            "tx_hash": "5eb59639478898cf227cd89aa95303cfb8d392e1151047728a57ec16dc4c1a7e",
            "tx_size": 12933,
            "tx_version": 2,
            "xmr_inputs": 0,
            "xmr_outputs": 0
          }
        ]
      }
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 2014050,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/monero/block/1234567
Raw transaction dataReturns raw block data from our onion-monero-blockchain-explorer instance. See https://github.com/moneroexamples/onion-monero-blockchain-explorer/blob/master/README.md for field descriptions (api/transaction/<tx_hash> section), but mostly they are self-describing.

Endpoint:

https://api.blockchair.com/{:xmr_chain}/raw/transaction/{:hash}₀
Where:

{:xmr_chain} can only be monero
{:hash}ᵢ is the transaction hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:hash}ᵢ.transaction — transaction data
Example requests:

https://api.blockchair.com/monero/raw/transaction/467f1914b3f5f4eb52dda02bfd0b70b89722b88063f40889bfba46d3ec78de80
Example output:

https://api.blockchair.com/monero/raw/transaction/467f1914b3f5f4eb52dda02bfd0b70b89722b88063f40889bfba46d3ec78de80:

{
  "data": {
    "467f1914b3f5f4eb52dda02bfd0b70b89722b88063f40889bfba46d3ec78de80": {
      "transaction": {
        "block_height": 1234567,
        "coinbase": false,
        "confirmations": 779488,
        "current_height": 2014055,
        "extra": "018a462e859627da64801ab1a4122717451a4e4f7ab917fcd746c62dd0eeceeba2",
        "inputs": [
          {
            "amount": 0,
            "key_image": "03f3a29dd840d08654755771d36c8d39268d215d78214a8f29ac19a98116efe8",
            "mixins": [
              {
                "block_no": 1230415,
                "public_key": "10f4d46bf0bb09fa9ad4208ddbb8fd5fcfa2fb2d964731a5e04071a93288ae5c"
              },
              {
                "block_no": 1231535,
                "public_key": "d7b6f7c37564f647ad33cac3447727b62231d41cd80fd09c6f596a99f97b25e1"
              },
              {
                "block_no": 1234337,
                "public_key": "c4766978af804c3581818a5b8aae54bfb5b7fde8a9482dccf2c75786d7aa0ed6"
              }
            ]
          },
          {
            "amount": 0,
            "key_image": "661d4484ebc15f7d5d9122c29f282e9b2b3b119ffe71a49440fc3cf0bbc0c642",
            "mixins": [
              {
                "block_no": 1226106,
                "public_key": "5a532e0677a862660fdd9af0f177b83e67d99bf38535f778b107f02c101dabb7"
              },
              {
                "block_no": 1226709,
                "public_key": "6497da459ce91f78461e81c20ca3148e273576bc9008908cb369c9440db251de"
              },
              {
                "block_no": 1231101,
                "public_key": "e907bd174dc7b20ab811c1b99e4fa58990146e242d7d4702c5443e1dc421255f"
              }
            ]
          }
        ],
        "mixin": 3,
        "outputs": [
          {
            "amount": 0,
            "public_key": "dfce36cfd52cd63ba2c950bd71e0523fee57cb4ddf9e54bc2ceebd8e37597f4a"
          },
          {
            "amount": 0,
            "public_key": "613f4849f2bd27f28b6d85a01cef421dfadd491b9f1b4956e625ddeadefacc1a"
          },
          {
            "amount": 0,
            "public_key": "c0ba1f794159dbd9a35a7118f35f1c3ba8c1d09c2fe51655a32071a966560e62"
          },
          {
            "amount": 0,
            "public_key": "967e2ae67aa85fbd1dc6f2937bf87f70328cf8fb3df8b7d3041768adbf782595"
          },
          {
            "amount": 0,
            "public_key": "977c64e40fd8bc436f4962ad89ed2374a88d766408e18d36f984955212c4344f"
          },
          {
            "amount": 0,
            "public_key": "e796f069bbf7d25b422d384ca08dd9a9d83c7592aa827914c9cba9724111afe3"
          }
        ],
        "payment_id": "",
        "payment_id8": "",
        "rct_type": 2,
        "timestamp": 1485715365,
        "timestamp_utc": "2017-01-29 18:42:45",
        "tx_fee": 66692772936,
        "tx_hash": "467f1914b3f5f4eb52dda02bfd0b70b89722b88063f40889bfba46d3ec78de80",
        "tx_size": 38479,
        "tx_version": 2,
        "xmr_inputs": 0,
        "xmr_outputs": 0
      }
    }
  },
  "context": {
    "code": 200
    "results": 1,
    "state": 2014050,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/monero/transaction/467f1914b3f5f4eb52dda02bfd0b70b89722b88063f40889bfba46d3ec78de80
Raw outputsReturns raw block data from our onion-monero-blockchain-explorer instance. See https://github.com/moneroexamples/onion-monero-blockchain-explorer/blob/master/README.md for field descriptions (api/outputs?txhash=<tx_hash>&address=&viewkey=&txprove=<0|1> section), but mostly they are self-describing.

Endpoint:

https://api.blockchair.com/{:xmr_chain}/raw/outputs?{:query}
Where:

{:xmr_chain} can only be monero
{:query} is the query string:txprove=0 checks which outputs belong to given address and corresponding viewkey
txprove=1 proves the sender sent funds
txhash is the transaction hash
address is the address
viewkey is the viewkey
Output:

data contains an associative array:

data.outputs — the list of outputs
Example requests:

https://api.blockchair.com/monero/raw/outputs?txhash=8e6a144dee7537a38e87f30e7c1f2bc1a35e5ef8b5032dfa7cf89a2df3073c41&address=44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A&viewkey=f359631075708155cc3d92a32b75a7d02a5dcf27756707b47a2b31b21c389501&txprove=0
https://api.blockchair.com/monero/raw/outputs?txhash=8e6a144dee7537a38e87f30e7c1f2bc1a35e5ef8b5032dfa7cf89a2df3073c41&address=44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A&viewkey=f359631075708155cc3d92a32b75a7d02a5dcf27756707b47a2b31b21c389501&txprove=1
Example responses:

https://api.blockchair.com/monero/raw/outputs?txhash=8e6a144dee7537a38e87f30e7c1f2bc1a35e5ef8b5032dfa7cf89a2df3073c41&address=44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A&viewkey=f359631075708155cc3d92a32b75a7d02a5dcf27756707b47a2b31b21c389501&txprove=0:

{
  "data": {
    "address": "42f18fc61586554095b0799b5c4b6f00cdeb26a93b20540d366932c6001617b75db35109fbba7d5f275fef4b9c49e0cc1c84b219ec6ff652fda54f89f7f63c88",
    "outputs": [
      {
        "amount": 800000000000,
        "match": false,
        "output_idx": 0,
        "output_pubkey": "2b0d6d7573895be2fccb06bf83099a4dddf3f73656f18e2b96eab997571a640d"
      },
      {
        "amount": 1000000000000,
        "match": false,
        "output_idx": 1,
        "output_pubkey": "543c158062f43c11ac16ff90dea61728a41410ffeccea4cea65a6ba6fb83ccab"
      },
      {
        "amount": 10000000000000,
        "match": true,
        "output_idx": 2,
        "output_pubkey": "122b7ba237e82ca95d620f286761b8f8102fa346df8d982c6fe48003d3939c60"
      },
      {
        "amount": 10000000000000,
        "match": false,
        "output_idx": 3,
        "output_pubkey": "7ba5f4dc9acf62c6bca171ac8e81f7757050a480bbe20f2d1836086aa23f004f"
      },
      {
        "amount": 300000000000000,
        "match": true,
        "output_idx": 4,
        "output_pubkey": "597a3bd3e7a7007fb2bb11cd734731e388ee95f436f6aa07d0d7afe927b7faad"
      }
    ],
    "tx_hash": "8e6a144dee7537a38e87f30e7c1f2bc1a35e5ef8b5032dfa7cf89a2df3073c41",
    "tx_prove": false,
    "viewkey": "f359631075708155cc3d92a32b75a7d02a5dcf27756707b47a2b31b21c389501"
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 2014050,
    ...
  }
}


https://api.blockchair.com/monero/raw/outputs?txhash=8e6a144dee7537a38e87f30e7c1f2bc1a35e5ef8b5032dfa7cf89a2df3073c41&address=44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A&viewkey=f359631075708155cc3d92a32b75a7d02a5dcf27756707b47a2b31b21c389501&txprove=1:

{
  "data": {
    "address": "42f18fc61586554095b0799b5c4b6f00cdeb26a93b20540d366932c6001617b75db35109fbba7d5f275fef4b9c49e0cc1c84b219ec6ff652fda54f89f7f63c88",
    "outputs": [
      {
        "amount": 800000000000,
        "match": false,
        "output_idx": 0,
        "output_pubkey": "2b0d6d7573895be2fccb06bf83099a4dddf3f73656f18e2b96eab997571a640d"
      },
      {
        "amount": 1000000000000,
        "match": false,
        "output_idx": 1,
        "output_pubkey": "543c158062f43c11ac16ff90dea61728a41410ffeccea4cea65a6ba6fb83ccab"
      },
      {
        "amount": 10000000000000,
        "match": false,
        "output_idx": 2,
        "output_pubkey": "122b7ba237e82ca95d620f286761b8f8102fa346df8d982c6fe48003d3939c60"
      },
      {
        "amount": 10000000000000,
        "match": false,
        "output_idx": 3,
        "output_pubkey": "7ba5f4dc9acf62c6bca171ac8e81f7757050a480bbe20f2d1836086aa23f004f"
      },
      {
        "amount": 300000000000000,
        "match": false,
        "output_idx": 4,
        "output_pubkey": "597a3bd3e7a7007fb2bb11cd734731e388ee95f436f6aa07d0d7afe927b7faad"
      }
    ],
    "tx_hash": "8e6a144dee7537a38e87f30e7c1f2bc1a35e5ef8b5032dfa7cf89a2df3073c41",
    "tx_prove": true,
    "viewkey": "f359631075708155cc3d92a32b75a7d02a5dcf27756707b47a2b31b21c389501"
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 2014050,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/monero/transaction/8e6a144dee7537a38e87f30e7c1f2bc1a35e5ef8b5032dfa7cf89a2df3073c41 (enter the address and the viewkey)
Raw data endpoints for CardanoRaw block dataReturns raw block data from our cardano-explorer-webapi instance. See https://cardanodocs.com/technical/explorer/api for field descriptions (/api/blocks/summary/{hash} section), but mostly they are self-describing. Our API also allows to query by block id.

Endpoints:

https://api.blockchair.com/{:ada_chain}/raw/block/{:height}₀
https://api.blockchair.com/{:ada_chain}/raw/block/{:hash}₀
Where:

{:ada_chain} can be only cardano
{:height}ᵢ is the block height (integer value), also known as block id
{:hash}ᵢ is the block hash (regex: /^[0-9a-f]{64}$/i)
Possible options:

?transactions=true displays transaction data
Output:

data contains an associative array:

data.{:id}ᵢ.block — block data
data.{:id}ᵢ.block — block transactions (null if ?transactions=true isn't set, an empty array [] if there are no transactions in the block )
Example requests:

https://api.blockchair.com/cardano/raw/block/1234567
https://api.blockchair.com/monero/raw/block/f093439d0dd48010a22fdb615a659e22738a10991871b5dc2335efa69008a8cd?transactions=true
Example output:

https://api.blockchair.com/cardano/raw/block/321123?transactions=true:

{
  "data": {
    "321123": {
      "block": {
        "cbsEntry": {
          "cbeEpoch": 14,
          "cbeSlot": 18766,
          "cbeBlkHeight": 321123,
          "cbeBlkHash": "f2568f498ad9d376cb1620ec00555171439fd241b5a66ecb700aeca5310422b1",
          "cbeTimeIssued": 1512626411,
          "cbeTxNum": 2,
          "cbeTotalSent": {
            "getCoin": "6428170796567000000"
          },
          "cbeSize": 1390,
          "cbeBlockLead": "5411c7bf87c252609831a337a713e4859668cba7bba70a9c3ef7c398",
          "cbeFees": {
            "getCoin": "342492000000"
          }
        },
        "cbsPrevHash": "7394430cf20bb55270f596106db75abd8dc56a4450f5f18ebc672fc9454389ad",
        "cbsNextHash": "eb3dce1bb6ec8a3fcbffca7cd43ca37d27d4f6bcde106b01d6e7ad6ca9c622f1",
        "cbsMerkleRoot": "83efc565aa681e5987c1721c1ac918fd246116157a66ca313be00315d10d9829"
      },
      "transactions": [
        {
          "ctbId": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
          "ctbTimeIssued": 1512626411,
          "ctbInputs": [
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrhsjyGfac6fkMYYCw9Ny5kHpyz48muHKMba4wAvAHT61FBF5JN7KPRuauJZtk41nh8WmDZhQpPVwNejsdk8kW1FZKwbTqgzr"
              },
              "ctaAmount": {
                "getCoin": "3214070827317"
              },
              "ctaTxHash": "c571fa570cc4250bbdead41509fb1d906133c9d206225c77b23759f117ac88a6",
              "ctaTxIndex": 0
            }
          ],
          "ctbOutputs": [
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrhseaXNVDcCXmbtY7rFbpdMp5dv2Znx7njXkGgAzq8NyAA4T9wfWvBR3wK5H7Q6ARVSnBysnfdY844iMZ4wSyDLkbCoB7W1k"
              },
              "ctaAmount": {
                "getCoin": "6097360975"
              },
              "ctaTxHash": "abb8159acc49c89ed3ce1066884e93d94f4469db1cc5ea76031c8062c37c4348",
              "ctaTxIndex": 1
            },
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrhsgFPX9T4QefXVuRxuAtiXouLbrwa9zGn2PKyCqv7aKqDGHLMBdSTGyCihB17MjTwN7iZq4XeEpAbwqkUKHzyXY6xtLqQyF"
              },
              "ctaAmount": {
                "getCoin": "3208002779521"
              },
              "ctaTxHash": "abb8159acc49c89ed3ce1066884e93d94f4469db1cc5ea76031c8062c37c4348",
              "ctaTxIndex": 0
            },
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrht368NFCQotpKy2mKzJQXPyZUvTZ2Vjx6pMP7jc82T13et6wc6cZJtQTqWxVhY5kwmirWZkQLLszGgcrr2LV9FyPZtq5E3P"
              },
              "ctaAmount": {
                "getCoin": "165464412631"
              },
              "ctaTxHash": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
              "ctaTxIndex": 1
            },
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrhszNt18zTvCzom5qbtiDaJLPHNYbXfYnD4ScT3ZLXKQe4YC3jLraWeFuzXQ7gqN5cnYDUS3VrqxKGx3E5cz6mdtFuEoXUDs"
              },
              "ctaAmount": {
                "getCoin": "3048606243440"
              },
              "ctaTxHash": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
              "ctaTxIndex": 0
            }
          ],
          "ctbInputSum": {
            "getCoin": "3214070827317"
          },
          "ctbOutputSum": {
            "getCoin": "6428170796567"
          },
          "ctbFees": {
            "getCoin": "-3214099969250"
          }
        },
        {
          "ctbId": "abb8159acc49c89ed3ce1066884e93d94f4469db1cc5ea76031c8062c37c4348",
          "ctbTimeIssued": 1512626411,
          "ctbInputs": [
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrhsniCkr7dmbXovTkGWbqYLFefc6sLqbJPi6HguiS8J5yCqGdYCPUuPf5HtctdLAiP9AFPQZPW3fprxWNuP1y45UVuRMvpie"
              },
              "ctaAmount": {
                "getCoin": "3214100311742"
              },
              "ctaTxHash": "6b5d6cdfcb0da57430ad80ec18fb9e2ccaf9ae1e4b0d9f1361c267aaf57dfa7d",
              "ctaTxIndex": 0
            }
          ],
          "ctbOutputs": [
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrhseaXNVDcCXmbtY7rFbpdMp5dv2Znx7njXkGgAzq8NyAA4T9wfWvBR3wK5H7Q6ARVSnBysnfdY844iMZ4wSyDLkbCoB7W1k"
              },
              "ctaAmount": {
                "getCoin": "6097360975"
              },
              "ctaTxHash": "abb8159acc49c89ed3ce1066884e93d94f4469db1cc5ea76031c8062c37c4348",
              "ctaTxIndex": 1
            },
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrhsgFPX9T4QefXVuRxuAtiXouLbrwa9zGn2PKyCqv7aKqDGHLMBdSTGyCihB17MjTwN7iZq4XeEpAbwqkUKHzyXY6xtLqQyF"
              },
              "ctaAmount": {
                "getCoin": "3208002779521"
              },
              "ctaTxHash": "abb8159acc49c89ed3ce1066884e93d94f4469db1cc5ea76031c8062c37c4348",
              "ctaTxIndex": 0
            },
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrht368NFCQotpKy2mKzJQXPyZUvTZ2Vjx6pMP7jc82T13et6wc6cZJtQTqWxVhY5kwmirWZkQLLszGgcrr2LV9FyPZtq5E3P"
              },
              "ctaAmount": {
                "getCoin": "165464412631"
              },
              "ctaTxHash": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
              "ctaTxIndex": 1
            },
            {
              "ctaAddress": {
                "unCAddress": "DdzFFzCqrhszNt18zTvCzom5qbtiDaJLPHNYbXfYnD4ScT3ZLXKQe4YC3jLraWeFuzXQ7gqN5cnYDUS3VrqxKGx3E5cz6mdtFuEoXUDs"
              },
              "ctaAmount": {
                "getCoin": "3048606243440"
              },
              "ctaTxHash": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
              "ctaTxIndex": 0
            }
          ],
          "ctbInputSum": {
            "getCoin": "3214100311742"
          },
          "ctbOutputSum": {
            "getCoin": "6428170796567"
          },
          "ctbFees": {
            "getCoin": "-3214070484825"
          }
        }
      ]
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 3677155,
    ...
  }
}


Request cost formula:

1. If ?transactions=true option is used then 2.

Explore visualization on our front-end:

https://blockchair.com/cardano/block/321123
Raw transaction dataReturns raw block data from our cardano-explorer-webapi instance. See https://cardanodocs.com/technical/explorer/api for field descriptions (/api/txs/summary/{txid} section), but mostly they are self-describing.

Endpoint:

https://api.blockchair.com/{:ada_chain}/raw/transaction/{:hash}₀
Where:

{:ada_chain} can only be cardano
{:hash}ᵢ is the transaction hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:hash}ᵢ.transaction — transaction data
Example requests:

https://api.blockchair.com/cardano/raw/transaction/5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107
Example output:

https://api.blockchair.com/cardano/raw/transaction/5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107:

{
  "data": {
    "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107": {
      "transaction": {
        "ctsId": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
        "ctsTxTimeIssued": 1512626411,
        "ctsBlockTimeIssued": 1512626411,
        "ctsBlockHeight": 321123,
        "ctsBlockEpoch": 14,
        "ctsBlockSlot": 18766,
        "ctsBlockHash": "f2568f498ad9d376cb1620ec00555171439fd241b5a66ecb700aeca5310422b1",
        "ctsRelayedBy": null,
        "ctsTotalInput": {
          "getCoin": "3214070827317"
        },
        "ctsTotalOutput": {
          "getCoin": "3214070656071"
        },
        "ctsFees": {
          "getCoin": "171246"
        },
        "ctsInputs": [
          {
            "ctaAddress": {
              "unCAddress": "DdzFFzCqrhsjyGfac6fkMYYCw9Ny5kHpyz48muHKMba4wAvAHT61FBF5JN7KPRuauJZtk41nh8WmDZhQpPVwNejsdk8kW1FZKwbTqgzr"
            },
            "ctaAmount": {
              "getCoin": "3214070827317"
            },
            "ctaTxHash": "c571fa570cc4250bbdead41509fb1d906133c9d206225c77b23759f117ac88a6",
            "ctaTxIndex": 0
          }
        ],
        "ctsOutputs": [
          {
            "ctaAddress": {
              "unCAddress": "DdzFFzCqrht368NFCQotpKy2mKzJQXPyZUvTZ2Vjx6pMP7jc82T13et6wc6cZJtQTqWxVhY5kwmirWZkQLLszGgcrr2LV9FyPZtq5E3P"
            },
            "ctaAmount": {
              "getCoin": "165464412631"
            },
            "ctaTxHash": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
            "ctaTxIndex": 1
          },
          {
            "ctaAddress": {
              "unCAddress": "DdzFFzCqrhszNt18zTvCzom5qbtiDaJLPHNYbXfYnD4ScT3ZLXKQe4YC3jLraWeFuzXQ7gqN5cnYDUS3VrqxKGx3E5cz6mdtFuEoXUDs"
            },
            "ctaAmount": {
              "getCoin": "3048606243440"
            },
            "ctaTxHash": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
            "ctaTxIndex": 0
          }
        ]
      }
    }
  },
  "context": {
    "code": 200,
    "source": "D",
    "results": 1,
    "state": 3677165,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/cardano/transaction/5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107
Raw address dataReturns raw block data from our cardano-explorer-webapi instance. See https://cardanodocs.com/technical/explorer/api for field descriptions (/api/addresses/summary/{address} section), but mostly they are self-describing.

Endpoint:

https://api.blockchair.com/{:ada_chain}/raw/address/{:address}₀
Where:

{:ada_chain} can only be cardano
{:address}ᵢ is the address
Output:

data contains an associative array:

data.{:address}ᵢ.address — address data
Example request:

https://api.blockchair.com/cardano/raw/address/DdzFFzCqrhsjyGfac6fkMYYCw9Ny5kHpyz48muHKMba4wAvAHT61FBF5JN7KPRuauJZtk41nh8WmDZhQpPVwNejsdk8kW1FZKwbTqgzr
Example output:

https://api.blockchair.com/cardano/raw/address/DdzFFzCqrhsjyGfac6fkMYYCw9Ny5kHpyz48muHKMba4wAvAHT61FBF5JN7KPRuauJZtk41nh8WmDZhQpPVwNejsdk8kW1FZKwbTqgzr:

{
  "data": {
    "DdzFFzCqrhsjyGfac6fkMYYCw9Ny5kHpyz48muHKMba4wAvAHT61FBF5JN7KPRuauJZtk41nh8WmDZhQpPVwNejsdk8kW1FZKwbTqgzr": {
      "address": {
        "caAddress": {
          "unCAddress": "DdzFFzCqrhsjyGfac6fkMYYCw9Ny5kHpyz48muHKMba4wAvAHT61FBF5JN7KPRuauJZtk41nh8WmDZhQpPVwNejsdk8kW1FZKwbTqgzr"
        },
        "caType": "CPubKeyAddress",
        "caChainTip": {
          "ctBlockNo": 3677186,
          "ctSlotNo": 3679243,
          "ctBlockHash": "972695ba985f68001bfef72d6c7454e3cc92fd8ac02ff7c00d848cded1e190db"
        },
        "caTxNum": 2,
        "caBalance": {
          "getCoin": "0"
        },
        "caTotalInput": {
          "getCoin": "3214070827317"
        },
        "caTotalOutput": {
          "getCoin": "3214070827317"
        },
        "caTotalFee": {
          "getCoin": "342492"
        },
        "caTxList": [
          {
            "ctbId": "c571fa570cc4250bbdead41509fb1d906133c9d206225c77b23759f117ac88a6",
            "ctbTimeIssued": 1512609191,
            "ctbInputs": [
              {
                "ctaAddress": {
                  "unCAddress": "DdzFFzCqrhsvsU8xNsq7eanKQAJVpzFyUzjZqTqsYCQ1wj8STUgvCBGUH5DGjrsuuuNi4as6MQfY3jmqRxPKxmuyPH8T1LMyghxr82Xb"
                },
                "ctaAmount": {
                  "getCoin": "3234070798563"
                },
                "ctaTxHash": "fcf9be849290d0228fb339f125fe7c47c71909633e9f93c65f4e4222fb362ded",
                "ctaTxIndex": 0
              }
            ],
            "ctbOutputs": [
              {
                "ctaAddress": {
                  "unCAddress": "DdzFFzCqrhsegE9H92jxSgEHv3W4mSLWq5ELTJiK4DTnZ8frf4squEQmFbvzjTeUsMiLe287qUZSsb8USXhf5i7WR5DTbJuSUfLEFu1q"
                },
                "ctaAmount": {
                  "getCoin": "19999800000"
                },
                "ctaTxHash": "c571fa570cc4250bbdead41509fb1d906133c9d206225c77b23759f117ac88a6",
                "ctaTxIndex": 1
              },
              {
                "ctaAddress": {
                  "unCAddress": "DdzFFzCqrhsjyGfac6fkMYYCw9Ny5kHpyz48muHKMba4wAvAHT61FBF5JN7KPRuauJZtk41nh8WmDZhQpPVwNejsdk8kW1FZKwbTqgzr"
                },
                "ctaAmount": {
                  "getCoin": "3214070827317"
                },
                "ctaTxHash": "c571fa570cc4250bbdead41509fb1d906133c9d206225c77b23759f117ac88a6",
                "ctaTxIndex": 0
              }
            ],
            "ctbInputSum": {
              "getCoin": "3234070798563"
            },
            "ctbOutputSum": {
              "getCoin": "3234070627317"
            },
            "ctbFees": {
              "getCoin": "171246"
            }
          },
          {
            "ctbId": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
            "ctbTimeIssued": 1512626411,
            "ctbInputs": [
              {
                "ctaAddress": {
                  "unCAddress": "DdzFFzCqrhsjyGfac6fkMYYCw9Ny5kHpyz48muHKMba4wAvAHT61FBF5JN7KPRuauJZtk41nh8WmDZhQpPVwNejsdk8kW1FZKwbTqgzr"
                },
                "ctaAmount": {
                  "getCoin": "3214070827317"
                },
                "ctaTxHash": "c571fa570cc4250bbdead41509fb1d906133c9d206225c77b23759f117ac88a6",
                "ctaTxIndex": 0
              }
            ],
            "ctbOutputs": [
              {
                "ctaAddress": {
                  "unCAddress": "DdzFFzCqrht368NFCQotpKy2mKzJQXPyZUvTZ2Vjx6pMP7jc82T13et6wc6cZJtQTqWxVhY5kwmirWZkQLLszGgcrr2LV9FyPZtq5E3P"
                },
                "ctaAmount": {
                  "getCoin": "165464412631"
                },
                "ctaTxHash": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
                "ctaTxIndex": 1
              },
              {
                "ctaAddress": {
                  "unCAddress": "DdzFFzCqrhszNt18zTvCzom5qbtiDaJLPHNYbXfYnD4ScT3ZLXKQe4YC3jLraWeFuzXQ7gqN5cnYDUS3VrqxKGx3E5cz6mdtFuEoXUDs"
                },
                "ctaAmount": {
                  "getCoin": "3048606243440"
                },
                "ctaTxHash": "5641a3c38fd200aa49df75690e9ea48526da874b336913868cd4b7aebfeb4107",
                "ctaTxIndex": 0
              }
            ],
            "ctbInputSum": {
              "getCoin": "3214070827317"
            },
            "ctbOutputSum": {
              "getCoin": "3214070656071"
            },
            "ctbFees": {
              "getCoin": "171246"
            }
          }
        ]
      }
    }
  },
  "context": {
    "code": 200,
    "source": "D",
    "results": 1,
    "state": 3677186,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/cardano/address/DdzFFzCqrhsjyGfac6fkMYYCw9Ny5kHpyz48muHKMba4wAvAHT61FBF5JN7KPRuauJZtk41nh8WmDZhQpPVwNejsdk8kW1FZKwbTqgzr
Raw data endpoints for MixinRaw snapshot dataEndpoints:

https://api.blockchair.com/{:xin_chain}/raw/snapshot/{:height}₀
https://api.blockchair.com/{:xin_chain}/raw/snapshot/{:hash}₀
Where:

{:xin_chain} can be only mixin
{:height}ᵢ is the snapshot id (topology)
{:hash}ᵢ is the snapshot hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:id}ᵢ.snapshot — snapshot data
data.{:id}ᵢ.snapshot.transaction — transaction data
Example requests:

https://api.blockchair.com/mixin/raw/snapshot/0
https://api.blockchair.com/mixin/raw/snapshot/75eabab3b5e3fe0a811bc2969f32716cc58bac7260b112380be45a23fc839939
Example output:

https://api.blockchair.com/mixin/raw/snapshot/0:

{
  "data": [
    {
      "snapshot": {
        "hash": "75eabab3b5e3fe0a811bc2969f32716cc58bac7260b112380be45a23fc839939",
        "node": "a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50",
        "references": null,
        "round": 0,
        "signatures": null,
        "timestamp": 1551312000000000000,
        "topology": 0,
        "transaction": {
          "asset": "a99c2e0e2b1da4d648755ef19bd95139acbbe6564cfb06dec7cd34931ca72cdc",
          "extra": "065866c10424d5cfa7ca95eddad69d261ddc7c31a107f28773880bd9cb5bf611c70a3825ca359993324db9e169acb832e9ca75ec17b2b2e1f5b10ebd40eb9dca",
          "hash": "f3a94f83f0a579d1a1b87f713d934df44e9b888216938667e7b2817aba71ef93",
          "inputs": [
            {
              "genesis": "6430225c42bb015b4da03102fa962e4f4ef3969e03e04345db229f8377ef7997"
            }
          ],
          "outputs": [
            {
              "amount": "10000.00000000",
              "keys": [
                "1d2dced65983ef59ea096d75a27a276308f1ae717c66f1884125adedfda3ae3d",
                "ec7d399503241bf26975719df8152feb599afb85c8cf3cc4175761421fb4c2ca",
                "a5ada6adecdc3bbb8aeb128ba8ddc3f6cb3022406de5576f3d15a38e926f0b96",
                "d1913a811ea696961a0d253359f9590efd77519d6005a6326a47435589e3c909",
                "3796347874919f62625a8db893d254b4292248f84504e7a5c766994c6251aea9",
                "e566095e3fb7949ec2fef418c2a097bc1609ac5adde2401974d7d449ae31190b",
                "2486621dc6c86300a60f2a46a910771f267dba698609aa686aa76d630e58e727",
                "71b3238bb152e5c63386af6bfd27bcfdd677436bb8e70520535fac2087bc5452",
                "9cd1704f830d035f7917e0a7eaf79b873abb715b00f0a2713205d2660f4b533b",
                "967407727188086d3ac67811603e073743945c372103323898a15004da0503d8",
                "4011b7a390e3c514c9da9341fbe461e3398e1538b9647ecafe1a95a74cebdefd",
                "52dae8ec6e0abaab28902f7427163de375e618aaf012d5a5c4ef4629d0b32d1d",
                "7a51cc274ea7dbc39bd81737b952aeea2f3bfaba55313b9a239bdd7e1f8f792e",
                "682ecb376c5af616b20c653fadc59e5c3992ee4ad6ef10b1f4cbe429b2f8e9fb",
                "0359fd509abff274bf7f8eca839ea17ec33c455478c4d1088936f8ff58a71705"
              ],
              "mask": "1502ba20afb0fa88b64ff9fbd8f12615da0fcd57f2132a3af712fee103d5ddeb",
              "script": "fffe0b",
              "type": 164
            }
          ],
          "version": 0
        },
        "version": 0
      }
    }
  ],
  "context": {
    "code": 200,
    "results": 1,
    "state": 18627212,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/mixin/snapshot/0
Raw round dataEndpoints:

https://api.blockchair.com/{:xin_chain}/raw/round/{:hash}
https://api.blockchair.com/{:xin_chain}/raw/round/({:id},{:node_hash})
Where:

{:xin_chain} can be only mixin
{:hash} is the round hash (regex: /^[0-9a-f]{64}$/i)
{:id} is the round id
{:node_hash} is the node hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:id}ᵢ.round — round data
Example requests:`

https://api.blockchair.com/mixin/raw/round/(0,a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50)
https://api.blockchair.com/mixin/raw/round/3a3edfac471bdcfd0ad6f0162c1c81b2771c606dc4c4ec08f7c0174366906712
Example output:

https://api.blockchair.com/mixin/raw/round/(0,a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50):

{
  "data": {
    "(0,a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50)": {
      "round": {
        "end": 1551312000000000000,
        "hash": "3a3edfac471bdcfd0ad6f0162c1c81b2771c606dc4c4ec08f7c0174366906712",
        "node": "a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50",
        "number": 0,
        "references": null,
        "snapshots": [
          {
            "hash": "75eabab3b5e3fe0a811bc2969f32716cc58bac7260b112380be45a23fc839939",
            "node": "a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50",
            "references": null,
            "round": 0,
            "timestamp": 1551312000000000000,
            "topology": 0,
            "transaction": "f3a94f83f0a579d1a1b87f713d934df44e9b888216938667e7b2817aba71ef93",
            "version": 0
          },
          {
            "hash": "35882901dbeae376b01cf61d7ef0d58d3f9545878c0f9649c086628f1eaf9ab7",
            "node": "a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50",
            "references": null,
            "round": 0,
            "timestamp": 1551312000000000000,
            "topology": 15,
            "transaction": "4e24675df8a9d1592c82d6fa9ef86881fb2dfafe2a06b2a51134daf5a98f8411",
            "version": 0
          }
        ],
        "start": 1551312000000000000
      }
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 18628189,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/mixin/round/3a3edfac471bdcfd0ad6f0162c1c81b2771c606dc4c4ec08f7c0174366906712
Raw transaction dataEndpoint:

https://api.blockchair.com/{:xin_chain}/raw/transaction/{:hash}₀
Where:

{:xin_chain} can be only mixin
{:hash}ᵢ is the transaction hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:hash}ᵢ.transaction — transaction data
Example request:`

https://api.blockchair.com/mixin/raw/transaction/704f7d52b864a70cc7219d04f534fb5105f341ff8fcbc6b80f90237ea7694ed2
Example output:

https://api.blockchair.com/mixin/raw/transaction/704f7d52b864a70cc7219d04f534fb5105f341ff8fcbc6b80f90237ea7694ed2:

{
  "data": {
    "704f7d52b864a70cc7219d04f534fb5105f341ff8fcbc6b80f90237ea7694ed2": {
      "transaction": {
        "asset": "8dd50817c082cdcdd6f167514928767a4b52426997bd6d4930eca101c5ff8a27",
        "extra": "1fb1bb3ab8d8423f9c7421205c694810",
        "hash": "704f7d52b864a70cc7219d04f534fb5105f341ff8fcbc6b80f90237ea7694ed2",
        "hex": "86a756657273696f6e01a54173736574c4208dd50817c082cdcdd6f167514928767a4b52426997bd6d4930eca101c5ff8a27a6496e707574739385a448617368c420d53c766688b082db87c762fd517af5afc31b3b00e468193cb8c10b46cd0f375ba5496e64657800a747656e65736973c0a74465706f736974c0a44d696e74c085a448617368c420313f6552d57a89f47a43ca29019d2b15b250976c1652af30795022daf4a0ae4ba5496e64657801a747656e65736973c0a74465706f736974c0a44d696e74c085a448617368c4203bc42d2d3dfd3b95c0abd97750c1f2f1c2ee89156e3c1e5b89205852ce2f8895a5496e64657800a747656e65736973c0a74465706f736974c0a44d696e74c0a74f7574707574739285a45479706500a6416d6f756e74c703005265c0a44b65797391c42049c29716841df40eb88dc21974e3b2867ffed2b37b852015746aa3c151bffdf9a6536372697074c403fffe01a44d61736bc420efe475f7f66eb1946638e1ef0dbdaa7fa6ca83cce9fa856a20dd90fbad807a5985a45479706500a6416d6f756e74c70300b476f2a44b65797391c4202445800f02fff64f07f8062f66b8d35b0bab5e95c138de00f446e47b8bd1347ca6536372697074c403fffe01a44d61736bc420b7b135023dd232265c350173a0e84a14451b67de180636cc8829472d0bfff259a54578747261c4101fb1bb3ab8d8423f9c7421205c694810aa5369676e6174757265739391c44084560dd45f63aec94e07124bcb79a62fc8bd0d38e1d1254796d1b46400c0a75b9ce8b56b4c6be4c7db7e8d0613331d44b9bc1d8873d266e80c211f8008f50d0e91c44076fac18ee299eb471448fded8569c375547d097701eb02bb82edfba34a87df8767b5b1293f6a58d483841e961ad686577d101136a86be5d485e095f87dbafc0291c440ecf4d639b46d0c4ff310598446f37ac5e82817a44f1be86227dbfe9ced4511f1aa9b401c939396cb4605d1522a071320ef8b490ca5cfc4bf3c5bd6386a561502",
        "inputs": [
          {
            "hash": "d53c766688b082db87c762fd517af5afc31b3b00e468193cb8c10b46cd0f375b",
            "index": 0
          },
          {
            "hash": "313f6552d57a89f47a43ca29019d2b15b250976c1652af30795022daf4a0ae4b",
            "index": 1
          },
          {
            "hash": "3bc42d2d3dfd3b95c0abd97750c1f2f1c2ee89156e3c1e5b89205852ce2f8895",
            "index": 0
          }
        ],
        "outputs": [
          {
            "amount": "0.05400000",
            "keys": [
              "49c29716841df40eb88dc21974e3b2867ffed2b37b852015746aa3c151bffdf9"
            ],
            "mask": "efe475f7f66eb1946638e1ef0dbdaa7fa6ca83cce9fa856a20dd90fbad807a59",
            "script": "fffe01",
            "type": 0
          },
          {
            "amount": "0.11826930",
            "keys": [
              "2445800f02fff64f07f8062f66b8d35b0bab5e95c138de00f446e47b8bd1347c"
            ],
            "mask": "b7b135023dd232265c350173a0e84a14451b67de180636cc8829472d0bfff259",
            "script": "fffe01",
            "type": 0
          }
        ],
        "snapshot": "83c4636a560fb15e25e69f0ea63e15900633db03ba2663d453b0825750f910d2",
        "version": 1
      }
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 18627910,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/mixin/transaction/704f7d52b864a70cc7219d04f534fb5105f341ff8fcbc6b80f90237ea7694ed2
Raw node dataEndpoint:

https://api.blockchair.com/{:xin_chain}/raw/node/{:node_hash}
Where:

{:xin_chain} can be only mixin
{:node_hash} is the node hash (regex: /^[0-9a-f]{64}$/i)
Output:

data contains an associative array:

data.{:id}ᵢ.node — node data
data.{:id}ᵢ.graph — node graph data
data.{:id}ᵢ.transaction — node transaction data
data.{:id}ᵢ.round — node round data
Example request:`

https://api.blockchair.com/mixin/raw/node/a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50
Example output:

https://api.blockchair.com/mixin/raw/node/a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50:

{
  "data": {
    "node": {
      "id": "a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50",
      "payee": "XINT3KrjgaC3EkrWJQkJBvY5ZJ4YFVTtrjxTuAkYoKTM8sZKLjrGnzDBAJkNZ3gUQuSWQdk98rr3xAF5C21Zb5YwaFHQ3WF9",
      "signer": "XINq9ctH1qYjxE8AsxJoH53qgNpS6hpL5mv5sFGML4Bf7tdpBD5LorhGBGpSF4tEKh9LD81XrXcaLA3CmTnCZU2NoKExsDh",
      "state": "REMOVED",
      "timestamp": 1584709251628742100,
      "transaction": "b26b3accf232512924087fc810a3ace700d8ccfd75a392e7403471465bc1a886"
    },
    "graph": {
      "hash": "a14ab7cb37931acd4a35cb46a0e1533a5557d24bf588767b2c5e36b888d44ac3",
      "node": "a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50",
      "round": 539409
    },
    "transaction": {
      "asset": "a99c2e0e2b1da4d648755ef19bd95139acbbe6564cfb06dec7cd34931ca72cdc",
      "extra": "065866c10424d5cfa7ca95eddad69d261ddc7c31a107f28773880bd9cb5bf611c70a3825ca359993324db9e169acb832e9ca75ec17b2b2e1f5b10ebd40eb9dca",
      "hash": "b26b3accf232512924087fc810a3ace700d8ccfd75a392e7403471465bc1a886",
      "hex": "86a756657273696f6e01a54173736574c420a99c2e0e2b1da4d648755ef19bd95139acbbe6564cfb06dec7cd34931ca72cdca6496e707574739185a448617368c420f3a94f83f0a579d1a1b87f713d934df44e9b888216938667e7b2817aba71ef93a5496e64657800a747656e65736973c0a74465706f736974c0a44d696e74c0a74f7574707574739185a454797065cca6a6416d6f756e74c70500e8d4a51000a44b65797391c42064bc93e6e22a4e5f2ca3340e898393478f1aec5354c5444e927b66efea4c8491a6536372697074c403fffe01a44d61736bc420e54a5084f751b0966bb28cf532ce070efd68121c7ccb258bce1ad877ef0fe0eea54578747261c440065866c10424d5cfa7ca95eddad69d261ddc7c31a107f28773880bd9cb5bf611c70a3825ca359993324db9e169acb832e9ca75ec17b2b2e1f5b10ebd40eb9dcaaa5369676e617475726573c0",
      "inputs": [
        {
          "hash": "f3a94f83f0a579d1a1b87f713d934df44e9b888216938667e7b2817aba71ef93",
          "index": 0
        }
      ],
      "outputs": [
        {
          "amount": "10000.00000000",
          "keys": [
            "64bc93e6e22a4e5f2ca3340e898393478f1aec5354c5444e927b66efea4c8491"
          ],
          "mask": "e54a5084f751b0966bb28cf532ce070efd68121c7ccb258bce1ad877ef0fe0ee",
          "script": "fffe01",
          "type": 166
        }
      ],
      "snapshot": "abe3e91c47618e45047bf19d7258fe7af9e599ea18e1814dffc661391863d38f",
      "version": 1
    },
    "round": {
      "end": 1584709084891248400,
      "hash": "a14ab7cb37931acd4a35cb46a0e1533a5557d24bf588767b2c5e36b888d44ac3",
      "node": "a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50",
      "number": 539409,
      "references": {
        "self": "80a01607cd8a3c9444c502f1008c3f1880b95471f25376fbc3e18d14d556a718",
        "external": "73bec29807b077af6f061482cbee0ea8ec7b70021c03f82989bfc0edac27bea4"
      },
      "snapshots": [
        {
          "hash": "3b1039a352a5bcb8914239e4ef8e90c9f8e86e53186216ea7363a080d91e6472",
          "node": "a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50",
          "references": {
            "self": "80a01607cd8a3c9444c502f1008c3f1880b95471f25376fbc3e18d14d556a718",
            "external": "73bec29807b077af6f061482cbee0ea8ec7b70021c03f82989bfc0edac27bea4"
          },
          "round": 539409,
          "timestamp": 1584709084891248400,
          "topology": 15283799,
          "transaction": "9e4c9bb6bbb8f92a9811b75a147844453038dfeb835ed790f4fe5a344de10186",
          "version": 1
        }
      ],
      "start": 1584709084891248400
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 18628433,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/mixin/node/a721a4fc0c667c4a1222c8d80350cbe07dab55c49942c8100a8c5e2f5bb4ec50
Raw graph dataEndpoint:

https://api.blockchair.com/{:xin_chain}/raw/graph
Where:

{:xin_chain} can be only mixin
Output:

data contains an array of graph elements

Example request:`

https://api.blockchair.com/mixin/raw/graph
Example output:

https://api.blockchair.com/mixin/raw/graph:

{
  "data": [
    {
      "hash": "304d2b18a1d30db251702c0ea7c9aec1128c554afcbb2ebf4ce28a47ca722e65",
      "node": "017ebfb57ed9aace3d2ed9d559b7a6bf16a8745113872f80cf74ed618a40d3d3",
      "round": 133635
    },
    {
      "hash": "ecf9ae5e469ce68907178f2e3dc8681438a779ad30a66f42c48b2db223731bcd",
      "node": "028d97996a0b78f48e43f90e82137dbca60199519453a8fbf6e04b1e4d11efc9",
      "round": 545028
    },
    {
      "hash": "52837654b5b2530a4a171656f48479c809a3718ed98b877a4cf5d19901e97276",
      "node": "1334081011398877b225a11a680440f8edbc2b3dd8b4a33cf90e571069d4c471",
      "round": 525300
    },
    ...
  ],
  "context": {
    "code": 200,
    "results": 53,
    "state": 18628655,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/mixin/graph
Raw data endpoints for TezosRaw block dataReturns raw block data from our tzindex instance. See https://github.com/blockwatch-cc/tzindex/blob/master/README.md for field descriptions, but mostly they are self-describing.

Endpoints:

https://api.blockchair.com/{:xtz_chain}/raw/block/{:height}₀
https://api.blockchair.com/{:xtz_chain}/raw/block/{:hash}₀
Where:

{:xtz_chain} can only be tezos
{:height}ᵢ is the block height (integer value), also known as block id
{:hash}ᵢ is the block hash
Output:

data contains an associative array:

data.{:id}ᵢ.block — block data.
Example requests:

https://api.blockchair.com/tezos/raw/block/888888
https://api.blockchair.com/tezos/raw/block/BMSY7Rvss3to1HGuCVLJsbAyCgghXzML8M3XD8kzoaCc2LLVEoM
Example output:

https://api.blockchair.com/tezos/raw/block/888888:

{
  "data": {
    "888888": {
      "block": {
        "hash": "BMSY7Rvss3to1HGuCVLJsbAyCgghXzML8M3XD8kzoaCc2LLVEoM",
        "predecessor": "BLv7JH7gMfVqbnMQ6GsqSfXvRu5bKeVZTCCRKqzrz9WyjLYfKtG",
        "successor": "BL8688QdRQgoEmoSr9QdLRdpyTk31kmojDwoQ1kYWsX3SNH5ch3",
        "baker": "tz3VEZ4k6a4Wx42iyev6i2aVAptTRLEAivNN",
        "height": 888888,
        "cycle": 217,
        "is_cycle_snapshot": false,
        "time": "2020-03-31T10:33:31Z",
        "solvetime": 60,
        "version": 6,
        "validation_pass": 4,
        "fitness": 233528,
        "priority": 0,
        "nonce": 8461818875301725000,
        "voting_period_kind": "proposal",
        "endorsed_slots": 4293918719,
        "n_endorsed_slots": 31,
        "n_ops": 67,
        "n_ops_failed": 0,
        "n_ops_contract": 0,
        "n_tx": 46,
        "n_activation": 0,
        "n_seed_nonce_revelations": 0,
        "n_double_baking_evidences": 0,
        "n_double_endorsement_evidences": 0,
        "n_endorsement": 21,
        "n_delegation": 0,
        "n_reveal": 0,
        "n_origination": 0,
        "n_proposal": 0,
        "n_ballot": 0,
        "volume": 0.967347,
        "fees": 0.081556,
        "rewards": 80,
        "deposits": 2560,
        "unfrozen_fees": 0,
        "unfrozen_rewards": 0,
        "unfrozen_deposits": 0,
        "activated_supply": 0,
        "burned_supply": 0,
        "n_accounts": 73,
        "n_new_accounts": 0,
        "n_new_implicit": 0,
        "n_new_managed": 0,
        "n_new_contracts": 0,
        "n_cleared_accounts": 0,
        "n_funded_accounts": 0,
        "gas_limit": 697462,
        "gas_used": 484756,
        "gas_price": 0.16824,
        "storage_size": 696,
        "days_destroyed": 0.036068,
        "pct_account_reuse": 100,
        "endorsers": [
          "tz3RDC3Jdn4j15J7bBHZd29EUee9gVB1CxD9",
          "tz1LcuQHNVQEWP2fZjk1QYZGNrfLDwrT3SyZ",
          ...
        ]
      },
      "operations": [
        {
          "hash": "op2UfeUHiVdu91c6G9GFC646FKW1tQmNXgs7BcbxUFuTrj3gUMg",
          "type": "endorsement",
          "status": "applied",
          "is_success": 1,
          "volume": 0,
          "data": "1073742880",
          "sender": "tz1gfArv665EUkSg2ojMBzcbfwuPxAvqPvjo",
          "receiver": null,
          "manager": null,
          "delegate": null
        },
        ...
      ]
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 974152,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/tezos/block/888888
Raw operation dataReturns raw operation data from our tzindex instance. See https://github.com/blockwatch-cc/tzindex/blob/master/README.md for field descriptions, but mostly they are self-describing.

Endpoint:

https://api.blockchair.com/{:xtz_chain}/raw/operation/{:hash}₀
Where:

{:xtz_chain} can only be tezos
{:hash}ᵢ is the operation hash
Output:

data contains an associative array:

data.{:id}ᵢ.operations — an array of internal operations.
Example output:

https://api.blockchair.com/tezos/raw/operation/ooe4aYfzRkGUS4UdXeRThNCsv5NkqeMLdKtfL7bzL3y7TGZzgGE:

{
  "data": {
    "ooe4aYfzRkGUS4UdXeRThNCsv5NkqeMLdKtfL7bzL3y7TGZzgGE": {
      "operations": [
        {
          "hash": "ooe4aYfzRkGUS4UdXeRThNCsv5NkqeMLdKtfL7bzL3y7TGZzgGE",
          "type": "transaction",
          "block": "BMSY7Rvss3to1HGuCVLJsbAyCgghXzML8M3XD8kzoaCc2LLVEoM",
          "time": "2020-03-31T10:33:31Z",
          "height": 888888,
          "cycle": 217,
          "counter": 2493708,
          "op_n": 24,
          "op_c": 0,
          "op_i": 0,
          "status": "applied",
          "is_success": true,
          "is_contract": false,
          "gas_limit": 15385,
          "gas_used": 10207,
          "gas_price": 0.17557,
          "storage_limit": 257,
          "storage_size": 0,
          "storage_paid": 0,
          "volume": 0.014931,
          "fee": 0.001792,
          "reward": 0,
          "deposit": 0,
          "burned": 0,
          "is_internal": false,
          "has_data": false,
          "days_destroyed": 0.000083,
          "sender": "tz1bd5Pn5DxPinvCtkeJmoneyYiLeUebvUa5",
          "receiver": "tz1ZnXzwGtyjGVEqRJgEgJK9z2vrrq1AooaA",
          "branch_id": 888888,
          "branch_height": 888887,
          "branch_depth": 1,
          "branch": "BLv7JH7gMfVqbnMQ6GsqSfXvRu5bKeVZTCCRKqzrz9WyjLYfKtG"
        },
        {
          "hash": "ooe4aYfzRkGUS4UdXeRThNCsv5NkqeMLdKtfL7bzL3y7TGZzgGE",
          "type": "transaction",
          "block": "BMSY7Rvss3to1HGuCVLJsbAyCgghXzML8M3XD8kzoaCc2LLVEoM",
          "time": "2020-03-31T10:33:31Z",
          "height": 888888,
          "cycle": 217,
          "counter": 2493709,
          "op_n": 24,
          "op_c": 1,
          "op_i": 0,
          "status": "applied",
          "is_success": true,
          "is_contract": false,
          "gas_limit": 15385,
          "gas_used": 10207,
          "gas_price": 0.17557,
          "storage_limit": 257,
          "storage_size": 0,
          "storage_paid": 0,
          "volume": 0.014924,
          "fee": 0.001792,
          "reward": 0,
          "deposit": 0,
          "burned": 0,
          "is_internal": false,
          "has_data": false,
          "days_destroyed": 0.000083,
          "sender": "tz1bd5Pn5DxPinvCtkeJmoneyYiLeUebvUa5",
          "receiver": "tz1ekJGKM5wvKPMfWfCqXdeydinq3Mv85qHd",
          "branch_id": 888888,
          "branch_height": 888887,
          "branch_depth": 1,
          "branch": "BLv7JH7gMfVqbnMQ6GsqSfXvRu5bKeVZTCCRKqzrz9WyjLYfKtG"
        },
        ...
      ]
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 974156,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/tezos/operation/ooe4aYfzRkGUS4UdXeRThNCsv5NkqeMLdKtfL7bzL3y7TGZzgGE
Raw account dataReturns raw account data from our tzindex instance. See https://github.com/blockwatch-cc/tzindex/blob/master/README.md for field descriptions, but mostly they are self-describing.

Endpoint:

https://api.blockchair.com/{:xtz_chain}/raw/account/{:address}₀
Where:

{:xtz_chain} can only be tezos
{:address}ᵢ is the address
Output:

data contains an associative array:

data.{:address}ᵢ.account — account information.
Example output:

https://api.blockchair.com/tezos/raw/account/tz1ekJGKM5wvKPMfWfCqXdeydinq3Mv85qHd:

{
  "data": {
    "tz1ekJGKM5wvKPMfWfCqXdeydinq3Mv85qHd": {
      "account": {
        "address": "tz1ekJGKM5wvKPMfWfCqXdeydinq3Mv85qHd",
        "address_type": "ed25519",
        "delegate": "tz1NEKxGEHsFufk87CVZcrqWu8o22qh46GK6",
        "manager": "",
        "pubkey": "edpktp1ih5KKrct18BgCS5inC3sJf3EKrSAAEa4poQiH6G7CeuaGaY",
        "first_in": 836128,
        "first_out": 836134,
        "last_in": 965984,
        "last_out": 965988,
        "first_seen": 836128,
        "last_seen": 965988,
        "delegated_since": 965988,
        "delegate_since": 0,
        "first_in_time": "2020-02-22T23:33:26Z",
        "first_out_time": "2020-02-22T23:39:26Z",
        "last_in_time": "2020-05-24T05:39:34Z",
        "last_out_time": "2020-05-24T05:43:34Z",
        "first_seen_time": "2020-02-22T23:33:26Z",
        "last_seen_time": "2020-05-24T05:43:34Z",
        "delegated_since_time": "2020-05-24T05:43:34Z",
        "delegate_since_time": "0001-01-01T00:00:00Z",
        "total_received": 126.580209,
        "total_sent": 27.58424,
        "total_burned": 0.257,
        "total_fees_paid": 0.0275,
        "total_rewards_earned": 0,
        "total_fees_earned": 0,
        "total_lost": 0,
        "frozen_deposits": 0,
        "frozen_rewards": 0,
        "frozen_fees": 0,
        "unclaimed_balance": 0,
        "spendable_balance": 98.711469,
        "total_balance": 98.711469,
        "delegated_balance": 0,
        "total_delegations": 0,
        "active_delegations": 0,
        "is_funded": true,
        "is_activated": false,
        "is_vesting": false,
        "is_spendable": true,
        "is_delegatable": false,
        "is_delegated": true,
        "is_revealed": true,
        "is_delegate": false,
        "is_active_delegate": false,
        "is_contract": false,
        "blocks_baked": 0,
        "blocks_missed": 0,
        "blocks_stolen": 0,
        "blocks_endorsed": 0,
        "slots_endorsed": 0,
        "slots_missed": 0,
        "n_ops": 14,
        "n_ops_failed": 0,
        "n_tx": 10,
        "n_delegation": 3,
        "n_origination": 0,
        "n_proposal": 0,
        "n_ballot": 0,
        "token_gen_min": 3,
        "token_gen_max": 26171,
        "grace_period": 0,
        "staking_balance": 0,
        "rolls": 0,
        "rich_rank": 33881,
        "traffic_rank": 0,
        "flow_rank": 0,
        "last_bake_height": 0,
        "last_bake_block": "",
        "last_bake_time": "0001-01-01T00:00:00Z",
        "last_endorse_height": 0,
        "last_endorse_block": "",
        "last_endorse_time": "0001-01-01T00:00:00Z",
        "next_bake_height": 0,
        "next_bake_priority": 0,
        "next_bake_time": "0001-01-01T00:00:00Z",
        "next_endorse_height": 0,
        "next_endorse_time": "0001-01-01T00:00:00Z",
        "delegate_account": {
          "address": "tz1NEKxGEHsFufk87CVZcrqWu8o22qh46GK6",
          "address_type": "ed25519",
          "delegate": "tz1NEKxGEHsFufk87CVZcrqWu8o22qh46GK6",
          "manager": "",
          "pubkey": "edpkthjojh2oARHALyYMfb7CtCjcr1FxknAyRVPCSJQXXmB3mEpTaq",
          "first_in": 787242,
          "first_out": 787244,
          "last_in": 974156,
          "last_out": 974156,
          "first_seen": 787242,
          "last_seen": 974156,
          "delegated_since": 0,
          "delegate_since": 787244,
          "first_in_time": "2020-01-19T17:54:08Z",
          "first_out_time": "2020-01-19T17:56:08Z",
          "last_in_time": "2020-05-29T22:40:38Z",
          "last_out_time": "2020-05-29T22:40:38Z",
          "first_seen_time": "2020-01-19T17:54:08Z",
          "last_seen_time": "2020-05-29T22:40:38Z",
          "delegated_since_time": "0001-01-01T00:00:00Z",
          "delegate_since_time": "2020-01-19T17:56:08Z",
          "total_received": 187327.25126,
          "total_sent": 8026.499705,
          "total_burned": 0.269,
          "total_fees_paid": 0.012091,
          "total_rewards_earned": 9020.066654,
          "total_fees_earned": 6.466546,
          "total_lost": 0,
          "frozen_deposits": 100544,
          "frozen_rewards": 3301.666664,
          "frozen_fees": 2.432551,
          "unclaimed_balance": 0,
          "spendable_balance": 84478.904449,
          "total_balance": 185025.337,
          "delegated_balance": 1360415.547819,
          "total_delegations": 4665,
          "active_delegations": 2909,
          "is_funded": true,
          "is_activated": false,
          "is_vesting": false,
          "is_spendable": true,
          "is_delegatable": false,
          "is_delegated": false,
          "is_revealed": true,
          "is_delegate": true,
          "is_active_delegate": true,
          "is_contract": false,
          "blocks_baked": 117,
          "blocks_missed": 1,
          "blocks_stolen": 0,
          "blocks_endorsed": 3433,
          "slots_endorsed": 3486,
          "slots_missed": 64,
          "n_ops": 3459,
          "n_ops_failed": 0,
          "n_tx": 21,
          "n_delegation": 1,
          "n_origination": 0,
          "n_proposal": 0,
          "n_ballot": 1,
          "token_gen_min": 3,
          "token_gen_max": 25443,
          "grace_period": 243,
          "staking_balance": 1545440.884819,
          "rolls": 193,
          "rich_rank": 397,
          "traffic_rank": 0,
          "flow_rank": 0,
          "last_bake_height": 0,
          "last_bake_block": "",
          "last_bake_time": "0001-01-01T00:00:00Z",
          "last_endorse_height": 0,
          "last_endorse_block": "",
          "last_endorse_time": "0001-01-01T00:00:00Z",
          "next_bake_height": 0,
          "next_bake_priority": 0,
          "next_bake_time": "0001-01-01T00:00:00Z",
          "next_endorse_height": 0,
          "next_endorse_time": "0001-01-01T00:00:00Z"
        }
      }
    }
  },
  "context": {
    "code": 200,
    "source": "D",
    "time": 0.49178099632263184,
    "results": 1,
    "state": 974165,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/tezos/account/tz1ekJGKM5wvKPMfWfCqXdeydinq3Mv85qHd
Raw data endpoints for EOSRaw block dataReturns raw block data directly from our node. Please note that we're not running a full history node for EOS, thus we store only the most recent blocks.

Endpoint:

https://api.blockchair.com/{:eos_chain}/raw/block/{:height}₀
Where:

{:eos_chain} can only be eos
{:height}ᵢ is the block height (integer value), also known as block id
Output:

data contains an associative array:

data.{:id}ᵢ.block — raw block data with its transactions.
Example output:

https://api.blockchair.com/eos/raw/block/125637913:

{
  "data": {
    "125637913": {
      "block": {
        "timestamp": "2020-06-12T11:20:08.000",
        "producer": "blockpooleos",
        "confirmed": 0,
        "previous": "077d15183aebac5f1319426b44746fdb1340ae8bc922a630392f226ecd83f910",
        "transaction_mroot": "7345d598bc85d6a15984f0d79129dcd5b8597b080c93799d24719765213e83a3",
        "action_mroot": "c21a6d34f8130b1c8562dc028564d33d254969197e22b8acbfac5d67506a5ff0",
        "schedule_version": 1717,
        "new_producers": null,
        "producer_signature": "SIG_K1_KaUZPdiu9f1vWhsJqUzAvF8aWRxqrJdmrXK8TxBhvZq6UbuC85VDNuR3ec9aLwaDscVYPpmZJ5PiaWtMNeEvk22mbea41W",
        "transactions": [
          {
            "status": "expired",
            "cpu_usage_us": 0,
            "net_usage_words": 0,
            "trx": "a8396ac4623d4d420196289d2b3b079c561bdc2eaf514a77c84fb5d54f5fd443"
          },
          {
            "status": "expired",
            "cpu_usage_us": 0,
            "net_usage_words": 0,
            "trx": "4e4c8b99af74ba79b165f3d3a2c2861adcf43c2fe4f4fd9cfb066a635bf2f4ff"
          },
          {
            "status": "executed",
            "cpu_usage_us": 7561,
            "net_usage_words": 12,
            "trx": {
              "id": "47a31d96705c50062b5a5cc98bb6371154accd1b56fb51b0dc70747b183107f5",
              "signatures": [
                "SIG_K1_KW2xHSjt34Nh1zBkNhwqgHKH3CciZNmGoAJ7YNifAPKCGkbgEQdfhV82Q4goVdFmrHt9ntbkQqCfBBWmCMfZFXhKsgFzNA"
              ],
              "compression": "none",
              "packed_context_free_data": "",
              "context_free_data": [],
              "packed_trx": "1d65e35e0a15601c8fe10000000001c0a88fca546773ad0000000000000090015048187a55f63de50000000000a0a693010000",
              "transaction": {
                "expiration": "2020-06-12T11:21:01",
                "ref_block_num": 5386,
                "ref_block_prefix": 3784252512,
                "max_net_usage_words": 0,
                "max_cpu_usage_ms": 0,
                "delay_sec": 0,
                "context_free_actions": [],
                "actions": [
                  {
                    "account": "pptqipaelyog",
                    "name": "m",
                    "authorization": [
                      {
                        "actor": "woyzgpfu3145",
                        "permission": "mine"
                      }
                    ],
                    "data": {
                      "actor": ""
                    },
                    "hex_data": "00"
                  }
                ]
              }
            }
          },
          ...
        ],
        "id": "077d1519d82a4a20278019953fb1788fd1c81074f4b754d29f062a93ca0cd468",
        "block_num": 125637913,
        "ref_block_prefix": 2501476391
      }
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 125860293,
    "request_cost": 1,
    ...
  }
}


https://api.blockchair.com/eos/raw/block/1 (pruned block):

{
  "data": null,
  "context": {
    "code": 400,
    "error": "Unknown Block"
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/eos/block/125637913 (may not be available due to pruning)
Raw transaction dataReturns raw transaction data directly from our node. Please note that we're not running a full history node for EOS, thus we store only the most recent transactions.

Endpoints:

https://api.blockchair.com/{:eos_chain}/raw/transaction/{:hash}
https://api.blockchair.com/{:eos_chain}/raw/transaction/({:block_height},{:hash})
Where:

{:eos_chain} can only be eos
{:hash} is the transaction hash
{:block_height} is the block height (specifying it returns transaction faster)
Output:

data contains an associative array:

data.{:id}ᵢ.transaction — transaction data
Example output:

https://api.blockchair.com/eos/raw/transaction/(125637913,a8396ac4623d4d420196289d2b3b079c561bdc2eaf514a77c84fb5d54f5fd443):

{
  "data": {
    "a8396ac4623d4d420196289d2b3b079c561bdc2eaf514a77c84fb5d54f5fd443": {
      "id": "a8396ac4623d4d420196289d2b3b079c561bdc2eaf514a77c84fb5d54f5fd443",
      "trx": {
        "receipt": {
          "status": "expired",
          "cpu_usage_us": 0,
          "net_usage_words": 0,
          "trx": [
            0,
            "a8396ac4623d4d420196289d2b3b079c561bdc2eaf514a77c84fb5d54f5fd443"
          ]
        }
      },
      "block_time": "2020-06-12T11:20:08.000",
      "block_num": 125637913,
      "last_irreversible_block": 125862330,
      "traces": []
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 125862660,
    "request_cost": 1,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/eos — navigate to the latest block and its transactions
Raw account dataReturns raw account data directly from our node.

Endpoint:

https://api.blockchair.com/{:eos_chain}/raw/account/{:address}
Where:

{:eos_chain} can only be eos
{:address} is the account name
Possible options:

?actions=true displays 10 most recent actions for this account
Output:

data contains an associative array:

data.{:address}.account — account information
data.{:address}.actions — the list of recent actions if ?actions=true is set, otherwise null
Example output:

https://api.blockchair.com/eos/raw/account/blockpooleos?actions=true:

{
  "data": {
    "blockpooleos": {
      "account": {
        "account_name": "blockpooleos",
        "head_block_num": 127937449,
        "head_block_time": "2020-06-25T18:47:45.500",
        "privileged": false,
        "last_code_update": "1970-01-01T00:00:00.000",
        "created": "2019-07-13T03:45:22.500",
        "core_liquid_balance": "2771.4153 EOS",
        "ram_quota": 17559,
        "net_weight": 150100,
        "cpu_weight": 1050703,
        "net_limit": {
          "used": 105,
          "available": 15609531,
          "max": 15609636
        },
        "cpu_limit": {
          "used": 464,
          "available": 9039,
          "max": 9503
        },
        "ram_usage": 4795,
        "permissions": [
          {
            "perm_name": "active",
            "parent": "owner",
            "required_auth": {
              "threshold": 1,
              "keys": [
                {
                  "key": "EOS6nRvuhb9gJju7tehyFdotEDVn2xwWKfhJWwyPMjG9deaCQxpxT",
                  "weight": 1
                }
              ],
              "accounts": [],
              "waits": []
            }
          },
          {
            "perm_name": "claimer",
            "parent": "active",
            "required_auth": {
              "threshold": 1,
              "keys": [
                {
                  "key": "EOS6gZzNjmzWTJX2LTBrtaXB2sczuna3bQWX4YPaokVG8zBBaYP8p",
                  "weight": 1
                }
              ],
              "accounts": [],
              "waits": []
            }
          },
          {
            "perm_name": "owner",
            "parent": "",
            "required_auth": {
              "threshold": 1,
              "keys": [
                {
                  "key": "EOS71Q9ZUPh6hJ8GamZ1T9vERR4dQt5aMG5jHMESGUBPNWZwQBMq5",
                  "weight": 1
                }
              ],
              "accounts": [],
              "waits": []
            }
          }
        ],
        "total_resources": {
          "owner": "blockpooleos",
          "net_weight": "15.0100 EOS",
          "cpu_weight": "105.0703 EOS",
          "ram_bytes": 16159
        },
        "self_delegated_bandwidth": {
          "from": "blockpooleos",
          "to": "blockpooleos",
          "net_weight": "5.0100 EOS",
          "cpu_weight": "5.0703 EOS"
        },
        "refund_request": null,
        "voter_info": {
          "owner": "blockpooleos",
          "proxy": "genpoolproxy",
          "producers": [],
          "staked": 101013,
          "last_vote_weight": "153840349310.80059814453125000",
          "proxied_vote_weight": "0.00000000000000000",
          "is_proxy": 0,
          "flags1": 0,
          "reserved2": 0,
          "reserved3": "0 "
        },
        "rex_info": null
      },
      "actions": [
        {
          "global_action_seq": "162018041028",
          "account_action_seq": 33,
          "block_num": 127926696,
          "block_time": "2020-06-25T17:18:08.000",
          "action_trace": {
            "action_ordinal": 6,
            "creator_action_ordinal": 1,
            "closest_unnotified_ancestor_action_ordinal": 1,
            "receipt": {
              "receiver": "eosio.token",
              "act_digest": "3e8e32ac2f3e9a4e9fe05c497016e8a2aad839f6f0dc700e1aa4be7fe1737436",
              "global_sequence": "162018041028",
              "recv_sequence": "39120141509",
              "auth_sequence": [
                [
                  "blockpooleos",
                  2436
                ],
                [
                  "eosio.vpay",
                  163338
                ]
              ],
              "code_sequence": 4,
              "abi_sequence": 4
            },
            "receiver": "eosio.token",
            "act": {
              "account": "eosio.token",
              "name": "transfer",
              "authorization": [
                {
                  "actor": "eosio.vpay",
                  "permission": "active"
                },
                {
                  "actor": "blockpooleos",
                  "permission": "active"
                }
              ],
              "data": {
                "from": "eosio.vpay",
                "to": "blockpooleos",
                "quantity": "588.1989 EOS",
                "memo": "producer vote pay"
              },
              "hex_data": "0080377503ea305580a98a945688683c85c059000000000004454f53000000001170726f647563657220766f746520706179"
            },
            "context_free": false,
            "elapsed": 82,
            "console": "",
            "trx_id": "999420909e47b8d3afe57b80c93c3317ea6f9103b8dbbec9572ebb8ecf073a45",
            "block_num": 127926696,
            "block_time": "2020-06-25T17:18:08.000",
            "producer_block_id": "07a001a82d080f2ca57f6b4f2b0c33a32953d234156349b4434c5c56a2870967",
            "account_ram_deltas": [],
            "except": null,
            "error_code": null
          }
        },
        ...
      ]
    }
  },
  "context": {
    "code": 200,
    "results": 1,
    "state": 127937448,
    "price_usd": 2.49,
    "request_cost": 2,
    ...
  }
}


Request cost formula:

1 + 1 if the ?actions=true option is used

Explore visualization on our front-end:

https://blockchair.com/eos/account/blockpooleos
Infinitable endpoints (SQL-like queries)These endpoints allow you to filter, sort, and aggregate blockchain data. The output is database rows. Unlike dashboard and raw endpoints, all infinitable endpoints listed in this section can be considered as just one endpoint as it has the same options and the same output structure across different blockchains and entities. Here it is: https://api.blockchair.com/{:table}{:query}.

Just don't ask why do we call that infinitables… Infinite tables? Maybe.

List of tables ({:table}) our engine supports:

{:btc_chain}/blocks
{:btc_chain}/transactions
{:btc_chain}/mempool/transactions
{:btc_chain}/outputs
{:btc_chain}/mempool/outputs
{:btc_chain}/addresses
{:eth_chain}/blocks
{:eth_chain}/uncles
{:eth_chain}/transactions
{:eth_chain}/mempool/transactions
{:eth_chain}/calls
{:xin_chain}/raw/snapshots
{:xin_chain}/raw/mintings
{:xin_chain}/raw/nodes
{:xtz_chain}/raw/blocks
bitcoin/omni/properties
ethereum/erc-20/tokens
ethereum/erc-20/transactions
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, or bitcoin/testnet
{:eth_chain} can be only ethereum
{:xin_chain} can be only mixin
{:xtz_chain} can be only tezos
Note on mempool tables: to speed up some requests, our architecture have separate tables ({:chain}/mempool/{:entity}) for unconfirmed transactions. Unlike with dashboard endpoints which search entities like transactions in both the blockchain and the mempool, infinitable endpoints don't do that.

The {:query} is optional; in case it's not included in the request, the default sorting applied to the table (for most of the tables it's descending by some id) and the 10 top results are returned.

Here are some example queries without using {:query}:

https://api.blockchair.com/bitcoin/blocks
https://api.blockchair.com/bitcoin-cash/mempool/transactions
The output skeleton is the following:

{
  "data": [
    {
      ... // row 1 data
    },
    ...
    {
      ... // row 10 data
    },    
  ],
  "context": {
    "limit": 10, // the default limit of 10 is applied
    "offset": 0, // no offset has been set
    "rows": 10, // the response contains 10 rows
    "total_rows": N, // but there are N rows in the table matching {:query} (total number of rows if it's not set)
    "state": S, // the latest block number on the blockchain
    ...
  }
}


Further documentation sections describe fields returned for different tables. Some of the dashboard endpoints are using the same fields as well.

How to build a query

The process is somewhat similar to constructing an SQL query, but there are less possibilities of course.

Here are the possible options:

Setting filters — the ?q= section — allows you to set a number of filters (SQL "WHERE")
Setting sortings — the ?s= section — allows you to sort the table (SQL "ORDER BY ")
Setting the limit — the ?limit= section — limits the number of output results (SQL "LIMIT")
Setting the offset — the ?offset= section — offsets the result set (SQL "OFFSET")
Aggregating data — the ?a= sections — allows to group by some columns and calculate using function (SQL "GROUP BY" and functions such as count, max, etc.)
The table (SQL "FROM") is set in the {:table} section of the API request
The order of applying various sections is irrelevant.

A quick example: https://api.blockchair.com/bitcoin/blocks?q=time(2019-01),guessed_miner(AntPool)&s=size(desc)&limit=1. This request:

Makes a query to the bitcoin/blocks table
Filters the table by time (finds all blocks mined in January 2019) and miner (AntPool)
Sorts the table by block size descending
Limits the number of results to 1
What this example does is finding the largest block mined by AntPool in January 2019.

Another example using aggregation: https://api.blockchair.com/bitcoin/blocks?q=time(2019-01-01..2019-01-31)&a=guessed_miner,count()&s=count()(desc). This request:

As the previous one, makes a query to the bitcoin/blocks table
Filters the table by time (in a bit different way, but it's an invariant of time(2019-01))
Groups the table by miner, and calculating the number of rows for each miner using the count() function
Sorts the result set by the number of blocks each miner has found
The ?q= section (filters)

You can use filters as follows: ?q=field(expression)[,field(expression)]..., where field is the column which is going to be filtered, and expression is a filtering expression. These are possilble filtering expressions:

equals — equality — example: https://api.blockchair.com/bitcoin/blocks?q=id(0) finds information about block 0
left.. — non-strict inequality — example: https://api.blockchair.com/bitcoin/blocks?q=id(1..) finds information about block 1 and above
left... — strict inequality — example: https://api.blockchair.com/bitcoin/blocks?q=id(1...) finds information about block 2 and above
..right — non-strict inequality — example: https://api.blockchair.com/bitcoin/blocks?q=id(..1) finds information about blocks 0 and 1
...right — strict inequality — example: https://api.blockchair.com/ bitcoin/blocks?q=id(...1) finds information only about block 0
left..right — non-strict inequality — example: https://api.blockchair.com/bitcoin/blocks?q=id(1..3) finds information about blocks 1, 2 and 3
left...right — strict inequality — example: https://api.blockchair.com/bitcoin/blocks?q=id(1...3) finds information about block 2 only
~like — occurrence in a string (SQL LIKE '%str%' operator) — example: https://api.blockchair.com/bitcoin/blocks?q=coinbase_data_bin(~hello) finds all blocks which contain hello in coinbase_data_bin
^like — occurrence at the beginning of a string (SQL LIKE 'str%' operator, also further mentioned as the STARTS WITH operator) — example: https://api.blockchair.com/bitcoin/blocks?q=coinbase_data_hex(^00) finds all blocks for which coinbase_data_hex begins with 00
For timestamp type fields, values can be specified in the following formats:

YYYY-MM-DD HH:ii:ss
YYYY-MM-DD (converted to the YYYY-MM-DD 00:00:00..YYYY-MM-DD 23:59:59 range)
YYYY-MM (converted to the YYYY-MM-01 00:00:00..YYYY-MM-31 23:59:59 range)
Inequalities are also supported for timestamps, the left and right values must be in the same format, e.g.: https://api.blockchair.com/bitcoin/blocks?q=time(2009-01-03..2009-01-31).

Ordinarilly if there's time column in the table, there should also be date, but there won't be possible to search over the date column directly, but you can search by date using the time column as follows: ?q=time(YYYY-MM-DD)

If the left value in an inequality is larger than the right, they switch places.

If you want to list several filters, you need to separate them using commas like this: https://api.blockchair.com/bitcoin/blocks?q=id(500000..),coinbase_data_bin(~hello)

We're currently testing support for NOT and OR operators (this is an alpha test feature, so we don't guarantee there won't be sudden changes):

The NOT operator is added before the expression for it to be inverted, e.g., https://api.blockchair.com/bitcoin/blocks?q=not,id(1..) returns the block 0
The OR operator can be put between two expressions and takes precedence (like it's when two expressions around OR are wrapped in parentheses), e.g., https://api.blockchair.com/bitcoin/blocks?q=id(1),or,id(2) returns information about blocks 1 and 2.
Maximum guaranteed supported number of filters in one query: 5.

The ?s= section (sortings)

Sorting can be used as follows: ?s=field(direction)[,field(direction)]..., where direction can be either asc for sorting in ascending order, or desc for sorting in descending order.

Here's a basic example: https://api.blockchair.com/bitcoin/blocks?s=id(asc) — sorts blocks by id ascending

If you need to apply several sortings, you can list them separating with commas. The maximum guaranteed number of sortings is 2.

The ?limit= section (limit)

Limit is used like this: ?limit=N, where N is a natural number from 1 to 100. The default is 10. context.limit takes the value of the set limit. In some cases (when using some specific "increased efficiency" filters described below) LIMIT may be ignored, and in such cases the API returns the entire result set, and context.limit will be set to NULL.

A basic example: https://api.blockchair.com/bitcoin/blocks?limit=1 — returns the latest block data (as the default sorting for this table is by block height descending)

Note that increasing the limit leads to an increase in the request cost (see the formula below).

The ?offset= section (offset)

Offset can be used as a paginator, e.g., ?offset=10 returns the next 10 rows. context.offset takes the value of the set offset. The maximum value is 10000. If you need just the last page, it's easier and quicker to change the direction of the sorting to the opposite.

Important: while iterating through the results, it is quite likely that the number of rows in the database will increase because new blocks had found while you were paginating. To avoid that, you may, for example, add an additional condition that limits the block id to the value obtained in context.state in the first query.

Here's an example. Suppose we would like to receive all the latest transactions from the Bitcoin blockchain with amount more than $1M USD. The following request should be perfomed for this:

https://api.blockchair.com/bitcoin/transactions?q=output_total_usd(10000000..)&s=id(desc)
Now, the script with this request to the API for some reason did not work for a while, or a huge amount of transactions worth more than $1 million appeared. With the standard limit of 10 results, the script skipped some transactions. Then firstly we should make the same request once again:

https://api.blockchair.com/bitcoin/transactions?q=output_total_usd(10000000..)&s=id(desc)
From the response we put context.state in a variable {:state}, and further to obtain next results we apply offset and set a filter to "fix" the blockchain state:

https://api.blockchair.com/bitcoin/transactions?q=output_total_usd(10000000..),block_id(..{:state})&s=id(desc)&offset=10
Next we increase the offset value until getting a data set with the transaction that we already knew about.

The ?a= section (data aggregation)

Warning: data aggregation is currently in beta stage on our platform.

To use aggregation, put the fields by which you'd like to group by (zero, one, or several), and fields (at least one) which you'd like to calculate using some aggregate function under the ?a= section. You can also sort the results by one of the fields included in the ?a= section (asc or desc) using the ?s= section, and apply additional filters using the ?q= section.

Let's start with some examples:

https://api.blockchair.com/bitcoin/blocks?a=year,count() — get the total number of Bitcoin blocks by year
https://api.blockchair.com/bitcoin/transactions?a=month,median(fee_usd) — get the median Bitcoin transaction fees by month
https://api.blockchair.com/ethereum/blocks?a=miner,sum(generation)&s=sum(generation)(desc) — get the list of Ethereum miners (except uncle miners) and sort it by the total amount of coins minted
https://api.blockchair.com/bitcoin-cash/blocks?a=sum(fee_total_usd)&q=id(478559..) — calculate how much miners have collected in fees since the fork
In case the table you're aggregating over has a time column, it's always possible to group by the following virtual columns:

date
week (yields YYYY-MM-DD corresponding to Mondays)
month (yields YYYY-MM )
year (yields YYYY )
Supported functions:

avg({:field})
median({:field})
min({:field})
max({:field})
sum({:field})
count()
There are also two special functions:

price({:ticker1}_{:ticker2})— yields the price; works only if you group by date (or one of: week, month, year). For example, it makes it possible to build a chart showing correlation between price and transaction count: https://api.blockchair.com/bitcoin/blocks?a=month,sum(transaction_count),price(btc_usd). Supported tickers: usd, btc, bch, eth, ltc, bsv, doge, dash, grs
f({:expression}) where {:expression} is {:function_1}{:operator}{:function_2}, where {:function_1} and {:function_2} are the supported functions from the above list, and {:operator} is one of the following: +, -, /, * (basic math operators). It's useful to calculate percentages. Example: https://api.blockchair.com/bitcoin/blocks?a=date,f(sum(witness_count)/sum(transaction_count))&q=time(2017-08-24..) — calculates SegWit adoption (by dividing the SegWit transaction count by the total transaction count)
There's also a special ?aq= section which have the following format: ?aq={:i}:{:j} — it applies ith filter to jth function (special functions don't count); after that ith filter has no effect on filtering the table. It's possible to have multiple conditions by separating them with a ;. Here's an example: https://api.blockchair.com/bitcoin/outputs?a=date,f(count()/count())&q=type(nulldata),time(2019-01)&aq=0:0 — calculates the percentage of nulldata outputs in January 2019 by day. The 0th condition (type(nulldata)) is applied to the 0th function (count()) and removed afterwards.

If you use the ?a= section, the default limit is 10000 instead of 10.

It's possible to export aggregated data to TSV or CSV format using &export=tsv or &export=csv accordingly. Example: https://api.blockchair.com/bitcoin/transactions?a=date,avg(fee_usd)&q=time(2019-01-01..2019-04-01)&export=tsv. Please note that data export is only available for aggregated data. If you need to export the whole table or its part, please use Database dumps.

Warning: the f({:expression}) special function, the ?aq= section, and TSV/CSV export are currently in alpha stage on our platform. Special function price({:ticker1}_{:ticker2}) can't be used within special function f({:expression}). There are some known issues when sorting if f({:expression}) is present. There are some known issues when applying the ?aq= section to inequality filters.

Fun example

The following requests return the same result:

https://api.blockchair.com/bitcoin/blocks?a=sum(reward)
https://api.blockchair.com/bitcoin/transactions?a=sum(output_total)&q=is_coinbase(true)
https://api.blockchair.com/bitcoin/outputs?a=sum(value)&q=is_from_coinbase(true)
Export data to TSV or CSV

Please use our Database dumps feature instead of the API (see https://blockchair.com/dumps for documentation)

Front-end visualizations

Filters and sortings: https://blockchair.com/bitcoin/blocks
Data aggregation: https://blockchair.com/charts
Request cost formula for infinitables

Cost is calculated by summing up the following values:

The base cost for the table (see the table below): 2, 5, or 10
Applying a filter costs 1
Applying a sorting costs 0
Applying an offset costs 0
Applying an aggregation costs 10
Applying a limit over the default multiplies the summed cost by 1 + 0.01 * number_of_rows_over_the_default_limit. If the defaut limit is 10 and the base cost is 2, requesting 100 rows will cost 2 * (1 + 0.01 * 90) = 3.8.

TableBase cost{:btc_chain}/blocks2{:btc_chain}/transactions5{:btc_chain}/mempool/transactions2{:btc_chain}/outputs10{:btc_chain}/mempool/outputs2{:btc_chain}/addresses2{:eth_chain}/blocks2{:eth_chain}/uncles2{:eth_chain}/transactions5{:eth_chain}/mempool/transactions2{:eth_chain}/calls10{:eth_chain}/addresses2{:xin_chain}/raw/snapshots1{:xin_chain}/raw/mintings1{:xin_chain}/raw/nodes1bitcoin/omni/properties10ethereum/erc-20/tokens2ethereum/erc-20/transactions5
Table descriptions

Further the documentation describes each of the supported tables. Each documentation section contains a general description, and a table listing the table columns (fields) in the following format:

ColumnTypeDescriptionQ?S?A?C?Column nameColumn typeColumn descriptionIs it possible to filter by this column?Is it possible to sort by this column?Is it possible to group by this column?Is it possible to apply aggregation functions (like sum) to this column?
The following marks are possible for the Q? column:

= — possible to use equalities only
* — possible to use both equalities and inequalities
⌘ — possible to use special format (applies to timestamp fields)
~ — possible to use the LIKE operator
^ — possible to use the STARTS WITH operator
*≈ — possible to use both equalities and inequalities, may return some results which are a bit out of the set range (this is used to swiftly search over the Ethereum blockchain that uses too long wei numbers for transfer amounts)
For the S?, A?, and C? columns it's either + (which means "yes") or nothing. ⌘ means some additional options may be available (in case of aggregation it may either mean additional fields like year are available, or in case of functions — only min and max are available).

There can also be synthetic columns which aren't shown in the response, but you can still filter or sort by them. If there are any, they will be listed in a separate table.

Inifinitable endpoints for Bitcoin-like blockchains (Bitcoin, Bitcoin Cash, Litecoin, Bitcoin SV, Dogecoin, Dash, Groestlcoin, Zcash, eCash, Bitcoin Testnet)blocks tableEndpoint:

https://api.blockchair.com/{:btc_chain}/blocks?{:query}
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:query} is the query against the table (how to build a query)
Output:

data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?idintBlock height*+⌘hashstring [0-9a-f]{64}Block hash=+datestring YYYY-MM-DDBlock date (UTC)⌘timestring YYYY-MM-DD HH:ii:ssBlock time (UTC)⌘+median_timestring YYYY-MM-DD HH:ii:ssBlock median time (UTC)+sizeintBlock size in bytes*++stripped_size †intBlock size in bytes without taking witness information into account*++weight †intBlock weight in weight units*++versionintVersion field*++version_hexstring [0-9a-f]*Version field in hexversion_bitsstring [01]{30}Version field in binary formatmerkle_root[0-9a-f]{64}Merkle root hashfinal_sapling_root §[0-9a-f]{64}Sapling root hashnonceintNonce value*+solution §[0-9a-f]*Solution valueanchor §[0-9a-f]*Anchor valuebitsintBits field*+difficultyfloatDifficulty*++chainworkstring [0-9a-f]{64}Chainwork fieldcoinbase_data_hexstring [0-9a-f]*Hex information contained in the input of the coinbase transaction^transaction_countintNumber of transactions in the block*++witness_count †intNumber of transactions in the block containing witness information*++input_countintNumber of inputs in all block transactions*++output_countintNumber of outputs in all block transactions*++input_totalintSum of inputs in satoshi*++input_total_usdfloatSum of outputs in USD*++output_totalintSum of outputs in satoshi*++output_total_usdfloatSum of outputs in USD*++fee_totalintTotal fee in Satoshi*++fee_total_usdfloatTotal fee in USD*++fee_per_kbfloatFee per kilobyte (1000 bytes of data) in satoshi*++fee_per_kb_usdfloatFee for kilobyte of data in USD*++fee_per_kwu †floatFee for 1000 weight units of data in satoshi*++fee_per_kwu_usd †floatFee for 1000 weight units of data in USD*++cdd_totalfloatNumber of coindays destroyed by all transactions of the block*++generationintMiner reward for the block in satoshi*++generation_usdfloatMiner reward for the block in USD*++rewardintMiner total reward (reward + total fee) in satoshi*++reward_usdfloatMiner total reward (reward + total fee) in USD*++guessed_minerstring .*The supposed name of the miner who found the block (the heuristic is based on coinbase_data_bin and the addresses to which the reward goes)=++is_aux ‡booleanWhether a block was mined using AuxPoW=+cbtx ※string .*Coinbase transaction data (encoded JSON)shielded_value_delta_total §intAmount transferred into the shielded pool*++
Additional synthetic columns

ColumnTypeDescriptionQ?S?A?C?coinbase_data_binstring .*Text (UTF-8) representation of coinbase data. Allows you to use the LIKE operator: ?q=coinbase_data_bin(~hello)~
Notes:

increased efficiency method applies if querying id and hash columns using the equals operator
† — only for Bitcoin, Litecoin, Groestlcoin, and Bitcoin Testnet (SegWit data)
‡ — only for Dogecoin
※ — only for Dash
§ — only for Zcash
The default sorting — id DESC
Example output:

https://api.blockchair.com/bitcoin/blocks?limit=1:

{
  "data": [
    {
      "id": 599954,
      "hash": "0000000000000000000a405e0eb599136580eed78682bfe6648c5f7b6f81a9cb",
      "date": "2019-10-18",
      "time": "2019-10-18 17:16:18",
      "median_time": "2019-10-18 16:41:08",
      "size": 1291891,
      "stripped_size": 900520,
      "weight": 3993451,
      "version": 536870912,
      "version_hex": "20000000",
      "version_bits": "100000000000000000000000000000",
      "merkle_root": "800c37c217eb0b53f8e5144602b8605876e12939f85d350e3d677fe89b8da476",
      "nonce": 318379413,
      "bits": 387294044,
      "difficulty": 13008091666972,
      "chainwork": "0000000000000000000000000000000000000000096007e2e467d315afd86f91",
      "coinbase_data_hex": "039227090452f3a95d2f706f6f6c696e2e636f6d2ffabe6d6d95254907ac051f810232ebdb4865ce204353bc59bbd533e40fb1cd3d29b8e06701000000000000007570ce1586aa43da2aabdab74791c8cd10d4473db1006158555400000000",
      "transaction_count": 2157,
      "witness_count": 1320,
      "input_count": 6564,
      "output_count": 4969,
      "input_total": 255590274198,
      "input_total_usd": 20610300,
      "output_total": 256840274198,
      "output_total_usd": 20711100,
      "fee_total": 14959404,
      "fee_total_usd": 1206.3,
      "fee_per_kb": 11583,
      "fee_per_kb_usd": 0.93403,
      "fee_per_kwu": 3744.56,
      "fee_per_kwu_usd": 0.301955,
      "cdd_total": 7884.6687017888,
      "generation": 1250000000,
      "generation_usd": 100798,
      "reward": 1264959404,
      "reward_usd": 102004,
      "guessed_miner": "Poolin"
    }
  ],
  "context": {
    "code": 200,
    "limit": 1,
    "offset": 0,
    "rows": 1,
    "total_rows": 599955,
    "state": 599954,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualizations on our front-end:

https://blockchair.com/bitcoin/blocks
https://blockchair.com/bitcoin-cash/blocks
https://blockchair.com/litecoin/blocks
https://blockchair.com/bitcoin-sv/blocks
https://blockchair.com/dogecoin/blocks
https://blockchair.com/dash/blocks
https://blockchair.com/groestlcoin/blocks
https://blockchair.com/zcash/blocks
https://blockchair.com/ecash/blocks
https://blockchair.com/bitcoin/testnet/blocks
transactions tableEndpoints:

https://api.blockchair.com/{:btc_chain}/transactions?{:query} (for blockchain transactions)
https://api.blockchair.com/{:btc_chain}/mempool/transactions?{:query} (for mempool transactions)
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:query} is the query against the table (how to build a query)
Output:

data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?block_idintThe height (id) of the block containing the transaction*++idintInternal Blockchair transaction id (not related to the blockchain, used for internal purposes)*+hashstring [0-9a-f]{64}Transaction hash=datestring YYYY-MM-DDThe date of the block containing the transaction (UTC)⌘timestring YYYY-MM-DD HH:ii:ssTimestamp of the block containing the transaction (UTC)⌘+sizeintTransaction size in bytes*++weight †intWeight of transaction in weight units*++versionintTransaction version field*++lock_timeintLock time — can be either a block height, or a unix timestamp*+is_coinbasebooleanIs it a coinbase (generating new coins) transaction? (For such a transaction input_count is equal to 1 and means there's a synthetic coinbase input)=+has_witness †booleanIs there a witness part in the transaction (using SegWit)?=+input_countintNumber of inputs*+++output_countintNumber of outputs*+++input_totalintInput value in satoshi*++input_total_usdfloatInput value in USD*++output_totalintOutput value in satoshi*++output_total_usdfloatTotal output value in USD*++feeintFee in satoshi*++fee_usdfloatFee in USD*++fee_per_kbfloatFee per kilobyte (1000 bytes) of data in satoshi*++fee_per_kb_usdfloatFee for kilobyte of data in USD*++fee_per_kwu †floatFee for 1000 weight units of data in satoshi*++fee_per_kwu_usd †floatFee for 1000 weight units of data in USD*++cdd_totalfloatThe number of destroyed coindays*++
Additional Dash-specific columns:

ColumnTypeDescriptionQ?S?A?C?type ※string (enum)Transaction type, one of the following: simple, proregtx, proupservtx, proupregtx, prouprevtx, cbtx, qctx, subtxregister, subtxtopup, subtxresetkey, subtxcloseaccount=+is_instant_lock ※booleanIs instant lock?=is_special ※booleantrue for all transaction types except simple=special_json ※string .*Special transaction data (encoded JSON string)
Additional Zcash-specific columns:

ColumnTypeDescriptionQ?S?A?C?shielded_value_delta §intAmount transferred into the shielded pool*++version_group_id §string [0-9a-f]*Special version field=+is_overwintered §booleanIs overwintered?=+expiry_height §intExpiry height*+join_split_raw §jsonRaw 'v_join_split' valueshielded_input_raw §jsonRaw 'v_shielded_spend' valueshielded_output_raw §jsonRaw 'v_shielded_output' valuebinding_signature §string [0-9a-f]*Binding signature
Notes:

increased efficiency method applies if querying id and hash columns using the equals operator
† — only for Bitcoin, Litecoin, Groestlcoin, and Bitcoin Testnet (SegWit data)
※ — only for Dash
§ — only for Zcash
The default sorting — id DESC
block_id for mempool transactions is -1
Example output:

https://api.blockchair.com/bitcoin/transactions?limit=1:

{
  "data": [
    {
      "block_id": 600573,
      "id": 467508697,
      "hash": "ee13104d4331cad2fff5ab6cd249a9fec940d64df442a6de5f51ea63c34ef8ff",
      "date": "2019-10-22",
      "time": "2019-10-22 19:09:34",
      "size": 250,
      "weight": 672,
      "version": 1,
      "lock_time": 0,
      "is_coinbase": false,
      "has_witness": true,
      "input_count": 1,
      "output_count": 2,
      "input_total": 29340442,
      "input_total_usd": 2408.9,
      "output_total": 29340274,
      "output_total_usd": 2408.89,
      "fee": 168,
      "fee_usd": 0.0137931,
      "fee_per_kb": 672,
      "fee_per_kb_usd": 0.0551723,
      "fee_per_kwu": 250,
      "fee_per_kwu_usd": 0.0205254,
      "cdd_total": 29.154456198211
    }
  ],
  "context": {
    "code": 200,
    "limit": 1,
    "offset": 0,
    "rows": 1,
    "total_rows": 467508698,
    "state": 600573,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualizations on our front-end:

https://blockchair.com/bitcoin/transactions
https://blockchair.com/bitcoin-cash/transactions
https://blockchair.com/litecoin/transactions
https://blockchair.com/bitcoin-sv/transactions
https://blockchair.com/dogecoin/transactions
https://blockchair.com/dash/transactions
https://blockchair.com/groestlcoin/transactions
https://blockchair.com/zcash/transactions
https://blockchair.com/ecash/transactions
https://blockchair.com/bitcoin/testnet/transactions
https://blockchair.com/bitcoin/mempool/transactions
https://blockchair.com/bitcoin-cash/mempool/transactions
https://blockchair.com/litecoin/mempool/transactions
https://blockchair.com/bitcoin-sv/mempool/transactions
https://blockchair.com/dogecoin/mempool/transactions
https://blockchair.com/dash/mempool/transactions
https://blockchair.com/groestlcoin/mempool/transactions
https://blockchair.com/zcash/mempool/transactions
https://blockchair.com/ecash/mempool/transactions
https://blockchair.com/bitcoin/testnet/mempool/transactions
outputs tableEndpoints:

https://api.blockchair.com/{:btc_chain}/outputs?{:query} (input and output data for blockchain transactions)
https://api.blockchair.com/{:btc_chain}/mempool/outputs?{:query} (input and output data for mempool transactions)
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:query} is the query against the table (how to build a query)
Output:

data contains an array of database rows. Rows represent transaction outputs (that also become transaction inputs when they are spent). Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?block_idintId of the block containing the transaction cointaining the output*++transaction_idintInternal Blockchair transaction id (not related to the blockchain, used for internal purposes)*+indexintOutput index in the transaction (from 0)*+transaction_hashstring [0-9a-f]{64}Transaction hashdatestring YYYY-MM-DDDate of the block containing the output (UTC)timestring YYYY-MM-DD HH:ii:ssTimestamp of the block containing the output (UTC)⌘+valueintMonetary value of the output*++value_usdfloatMonetary value of the output in USD*++recipientstring [0-9a-zA-Z\-]*Address or synthetic address of the output recipient (see address types description)=++typestring (enum)Output type, one of the following: pubkey, pubkeyhash, scripthash, multisig, nulldata, nonstandard, witness_v0_scripthash, witness_v0_keyhash, witness_unknown=++script_hexstring [0-9a-f]*Hex value of the output script. Filtering using the STARTS WITH operator is performed for nulldata outputs only.^is_from_coinbasebooleanIs it a coinbase transaction output?=+is_spendablenull or booleanIs it theoretically possible to spend this output? For pubkey and multisig outputs, the existence of the corresponding private key is tested, in that case true and false are the possible values depending on the result of the check. For nulldata outputs it is always false. For other types it is impossible to check trivially, in that case null is yielded.=+isspent | boolean | Has this output been spent? **(`spending* fields below yield null if it is not)** | = | | +`spending_block_idnull or intId of the block containing the spending transaction*++spending_transaction_idnull or intInternal Blockchair transaction id where the output was spent*+spending_indexnull or intInput index in the spending transaction (from 0)*+spending_transaction_hashnull or string [0-9a-f]{64}Spending transaction hashspending_datenull or string YYYY-MM-DDDate of the block, in which the output was spent⌘spending_timenull or string YYYY-MM-DD HH:ii:ssTimestamp of the block in which the output was spent⌘+spending_value_usdnull or floatMonetary value of the output in USD at the time of spending_date*++spending_sequencenull or intSequence field*+spending_signature_hexnull or string [0-9a-f]*Hex value of the spending script (signature)spending_witness †null or stringWitness information (comma-separated, may start with a comma if the first witness element is empty)lifespannull or intThe number of seconds from the time of the output creation (time) to its spending (spending_time), null if the output hasn't been spent*++cddnull or floatThe number of coindays destroyed spending the output, null if the output hasn't been spent*++
Additional synthetic columns

ColumnTypeDescriptionQ?S?A?C?script_binstring .*Text (UTF-8) representation of script_hex. Allows you to use the LIKE operator: ?q=script_bin(~hello). Filtering using the LIKE operator is performed for nulldata outputs only.~
Notes:

increased efficiency method applies if querying transaction_id and spending_transaction_id columns using the equals operator
† — only for Bitcoin, Litecoin, Groestlcoin, and Bitcoin Testnet (SegWit data)
The default sorting — transaction_id DESC
spending_* columns yield null for outputs that haven't been spent yet
block_id for mempool transactions is -1
spending_block_id is -1 for outputs being spent by an unconfirmed transaction
This particular table is in beta test mode on our platform. It's possible to receive duplicate rows for outputs which have just been spent. Sometimes duplicates are removed automatically, but in that case the number of rows may be less than the set limit on the number of rows. There's an additional context key context.pre_rows which contains the number of rows that should've been returned before the duplicate removal process.
Example outputs:

https://api.blockchair.com/bitcoin/outputs?q=is_spent(true)&limit=1 (example of a spent output created in transaction_hash transaction and spent in spending_transaction_hash transaction :

{
  "data": [
    {
      "block_id": 600573,
      "transaction_id": 467508619,
      "index": 1,
      "transaction_hash": "a3c43b4bdc245e0675812e2779703ef5cf2c0e15df8b46d99e6e085a6bbedbe7",
      "date": "2019-10-22",
      "time": "2019-10-22 19:09:34",
      "value": 14638337,
      "value_usd": 1201.83,
      "recipient": "3FdhDDr42mMXX4tpG6dPkHuoCrPTJk3yjH",
      "type": "scripthash",
      "script_hex": "a91498f0e489f60c3971fa304290257374d7ea92292b87",
      "is_from_coinbase": false,
      "is_spendable": null,
      "is_spent": true,
      "spending_block_id": 600573,
      "spending_transaction_id": 467508620,
      "spending_index": 0,
      "spending_transaction_hash": "6350ac986bd8974fafbf3fc8c498a923dc1b8c6fa40f6569227f343aa6a50ce1",
      "spending_date": "2019-10-22",
      "spending_time": "2019-10-22 19:09:34",
      "spending_value_usd": 1201.83,
      "spending_sequence": 4294967294,
      "spending_signature_hex": "16001433f44aa318c7cac6703f0d09f2dc4314dd68d769",
      "spending_witness": "304402204fe6a8c36d400f64975f7a08119f7e311b75d32b358a48bfe65fb355a40fd1230220122ed99fc4024290a82efd0d94707f23eeac513978a211f6f4893e11af3b9c3301,027f502e7a018afa8d50dd17c459d987e7754486b46f131bfe1b0e2841f3afbb64",
      "lifespan": 0,
      "cdd": 0
    }
  ],
  "context": {
    "code": 200,
    "limit": 1,
    "offset": 0,
    "rows": 1,
    "pre_rows": 1,
    "total_rows": 1150457958,
    "state": 600573,
    ...
  }
}


https://api.blockchair.com/bitcoin/outputs?q=is_spent(false)&limit=1 (example of an uspent output):

{
  "data": [
    {
      "block_id": 600573,
      "transaction_id": 467508697,
      "index": 1,
      "transaction_hash": "ee13104d4331cad2fff5ab6cd249a9fec940d64df442a6de5f51ea63c34ef8ff",
      "date": "2019-10-22",
      "time": "2019-10-22 19:09:34",
      "value": 23725010,
      "value_usd": 1947.86,
      "recipient": "3P8771VCWU2tyFj7gPS1ZuV4JzJrJWjn3K",
      "type": "scripthash",
      "script_hex": "a914eb195d6b2b50fc134078f65b72741d4c37e821de87",
      "is_from_coinbase": false,
      "is_spendable": null,
      "is_spent": false,
      "spending_block_id": null,
      "spending_transaction_id": null,
      "spending_index": null,
      "spending_transaction_hash": null,
      "spending_date": null,
      "spending_time": null,
      "spending_value_usd": null,
      "spending_sequence": null,
      "spending_signature_hex": null,
      "spending_witness": null,
      "lifespan": null,
      "cdd": null
    }
  ],
  "context": {
    "code": 200,
    "limit": 1,
    "offset": 0,
    "rows": 1,
    "pre_rows": 1,
    "total_rows": 99482704,
    "state": 600573,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualizations on our front-end:

https://blockchair.com/bitcoin/outputs
https://blockchair.com/bitcoin-cash/outputs
https://blockchair.com/litecoin/outputs
https://blockchair.com/bitcoin-sv/outputs
https://blockchair.com/dogecoin/outputs
https://blockchair.com/dash/outputs
https://blockchair.com/groestlcoin/outputs
https://blockchair.com/zcash/outputs
https://blockchair.com/bitcoin/testnet/outputs
https://blockchair.com/bitcoin/mempool/outputs
https://blockchair.com/bitcoin-cash/mempool/outputs
https://blockchair.com/litecoin/mempool/outputs
https://blockchair.com/bitcoin-sv/mempool/outputs
https://blockchair.com/dogecoin/mempool/outputs
https://blockchair.com/dash/mempool/outputs
https://blockchair.com/groestlcoin/mempool/outputs
https://blockchair.com/zcash/mempool/outputs
https://blockchair.com/bitcoin/testnet/mempool/outputs
addresses viewEndpoints:

https://api.blockchair.com/{:btc_chain}/addresses?{:query}
Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, ecash, bitcoin/testnet
{:query} is the query against the table (how to build a query)
Output:

The addresses view contains the list of all addresses and their confirmed balances. Unlike other infinitables (blocks, transactions, outputs) this table isn't live, it's automatically updated every 5 minutes with new data, thus we classify it as a "view". data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?addressstring [0-9a-zA-Z\-]*Bitcoin address or synthetic addressbalanceintIts confirmed balance*++
Notes:

the default sorting — balance DESC
Example outputs:

https://api.blockchair.com/bitcoin/addresses:

{
  "data": [
    {
      "address": "34xp4vRoCGJym3xR7yCVPFHoCNxv4Twseo",
      "balance": 16625913046297
    },
    {
      "address": "35hK24tcLEWcgNA4JxpvbkNkoAcDGqQPsP",
      "balance": 15100013129630
    },
    {
      "address": "385cR5DM96n1HvBDMzLHPYcw89fZAXULJP",
      "balance": 11730490887099
    },
    {
      "address": "3CgKHXR17eh2xCj2RGnHJHTDjPpqaNDgyT",
      "balance": 11185824580401
    },
    {
      "address": "37XuVSEpWW4trkfmvWzegTHQt7BdktSKUs",
      "balance": 9450576862072
    },
    {
      "address": "183hmJGRuTEi2YDCWy5iozY8rZtFwVgahM",
      "balance": 8594734898577
    },
    {
      "address": "1FeexV6bAHb8ybZjqQMjJrcCrHGW9sb6uF",
      "balance": 7995720088144
    },
    {
      "address": "3D2oetdNuZUqQHPJmcMDDHYoqkyNVsFk9r",
      "balance": 7689310178244
    },
    {
      "address": "1HQ3Go3ggs8pFnXuHVHRytPCq5fGG8Hbhx",
      "balance": 6937013094817
    },
    {
      "address": "3E35SFZkfLMGo4qX5aVs1bBDSnAuGgBH33",
      "balance": 6507708194519
    }
  ],
  "context": {
    "code": 200,
    "limit": 10,
    "offset": 0,
    "rows": 10,
    "total_rows": 27908261,
    "state": 600568,
    ...
  }
}


https://api.blockchair.com/bitcoin/addresses?a=sum(balance) (total balance of all addresses should be the same as the total number of coins minted):

{
  "data": [
    {
      "sum(balance)": 1800708303344571
    }
  ],
  "context": {
    "code": 200,
    "limit": 10000,
    "offset": null,
    "rows": 1,
    "total_rows": 1,
    "state": 600568,
    ...
  }
}


https://api.blockchair.com/bitcoin/addresses?a=count()&q=balance(1..10) (shows the number of addresses holding [1..10] satoshi):

{
  "data": [
    {
      "count()": 574591
    }
  ],
  "context": {
    "code": 200,
    "limit": 10000,
    "offset": null,
    "rows": 1,
    "total_rows": 1,
    "state": 600568,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualizations on our front-end:

https://blockchair.com/bitcoin/addresses
https://blockchair.com/bitcoin-cash/addresses
https://blockchair.com/litecoin/addresses
https://blockchair.com/bitcoin-sv/addresses
https://blockchair.com/dogecoin/addresses
https://blockchair.com/dash/addresses
https://blockchair.com/groestlcoin/addresses
https://blockchair.com/zcash/addresses
https://blockchair.com/bitcoin/testnet/addresses
Inifinitable endpoints for Ethereum and Ethereum Goerli Testnetblocks tableEndpoint:

https://api.blockchair.com/{:eth_chain}/blocks?{:query}
Where:

{:eth_chain} can only be ethereum or ethereum/testnet
{:query} is the query against the table (how to build a query)
Output:

data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?idintBlock id*+⌘hashstring 0x[0-9a-f]{64}Block hash=datestring YYYY-MM-DDBlock date (UTC)⌘timestring YYYY-MM-DD HH:ii:ssBlock time (UTC)⌘+sizeintBlock size in bytes*++minerstring 0x[0-9a-f]{40}Address the miner who found the block=+extra_data_hexstring [0-9a-f]*Additional data included by the miner^difficultyintDifficulty*++gas_usedintGas amount used by block transactions*++gas_limitintGas limit for the block set by the miner*++logs_bloomstring [0-9a-f]*Logs bloom fieldmix_hashstring [0-9a-f] {64}Mix hashnoncestring [0-9a-f]*Nonce valuereceipts_rootstring [0-9a-f] {64}Receipts rootsha3_unclesstring [0-9a-f] {64}SHA3 Unclesstate_rootstring [0-9a-f] {64}State roottotal_difficultynumeric stringTotal difficulty at the id pointtransactions_rootstring [0-9a-f] {64}Transactions rootuncle_countintNumber of block uncles*++transaction_countintNumber of transactions in the block*++synthetic_transaction_countintNumber of synthetic transactions (they do not exist as separate transactions on the blockchain, but they change the state, e.g., genesis block transactions, miner rewards, DAO-fork transactions, etc.)*++call_countintTotal number of calls spawned by transactions*++synthetic_call_countintNumber of synthetic calls (same as synthetic transactions)*++value_totalnumeric stringMonetary value of all block transactions in wei, hereinafter numeric string - numeric (integer or float in some cases) value passed as a string, as values in wei do not fit into integer*≈++value_total_usdfloatMonetary value of all block transactions in USD*++internal_value_totalnumeric stringMonetary value of all internal calls in the block in wei*≈++internal_value_total_usdfloatMonetary value of all internal calls in a block in USD*++generationnumeric stringThe reward of a miner for the block generation in wei*≈++generation_usdfloatThe reward of a miner for the block generation in USD*++uncle_generationnumeric stringTotal reward of uncle miners in wei*≈++uncle_generation_usdfloatTotal reward of uncle miners in USD*++fee_totalnumeric stringTotal fee in wei*≈++fee_total_usdfloatTotal fee in USD*++rewardnumeric stringTotal reward of the miner in the wei (reward for finding the block + fees)*≈++reward_usdfloatTotal reward of the miner in USD*++
Additional synthetic columns

ColumnTypeDescriptionQ?S?A?C?extra_data_binstring .*Text representation (UTF-8) of extra data. Allows you to use the LIKE operator: ?q=extra_data_bin(~hello)~
Notes:

increased efficiency method applies if querying id and hash columns using the equals operator
Search by fields that contain values in wei (value_total, internal_value_total, generation, uncle_generation, fee_total, reward) may be with some inaccuracies
The difference between value_total and internal_value_total: e.g., a transaction itself sends 0 eth, but this transaction is a call of a contract that sends someone, let's say, 10 eth. Then value will be 0 eth, and internal_value - 10 eth
The default sorting is id DESC
Example output:

https://api.blockchair.com/ethereum/blocks?limit=1:

{
  "data": [
    {
      "id": 8766253,
      "hash": "0xf36522b1f6ee2350c322a309ebdffe9afadc7d68713ad5b3a064657c81607ab7",
      "date": "2019-10-18",
      "time": "2019-10-18 17:39:40",
      "size": 32170,
      "miner": "0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5",
      "extra_data_hex": "50505945206e616e6f706f6f6c2e6f7267",
      "difficulty": 2408192424049377,
      "gas_used": 9895313,
      "gas_limit": 9920736,
      "logs_bloom": "2e8e09c1046d3063207c00c2440098ac0824d0ca0818d201500a1987588a284b001315981c227c86010880300083629c802895bb1608860a02a818a2202d405002a6140281390b00d880610822005011440244527f24b80e3200a405848034043c3028c99218304b8040180210401c005008924d1925c11a004100b14e1270980d21146d4c1a1029130024a0801400350858088c03000061421007b866a8d60c0a0cb142100028e0c39002b010c0320082a49000040fe870022c0080024e1120a0d21ac23289060221c390080800ab442c244130cea8102c2c20404e188468430c52aa20143110200706e642c52f4008080ac71910932415a02108020d910780",
      "mix_hash": "65f9fe3204d652ce2f82adface45e8c32cfacb0b80a3d1acaff8969457911342",
      "nonce": "13915815879145322367",
      "receipts_root": "cfba6974cf3257f2c2cf674a4e2f422b9623646120364ce7be84040d7d2b9578",
      "sha3_uncles": "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
      "state_root": "270dca9a521aa1b900cd0749a1a1c1413328cdaff1ccc7f9bcfe6e06751f0781",
      "total_difficulty": "12439420564755992111056",
      "transactions_root": "62523508847380a506452289abe504fdef7b5e9e96cbfd166f0fd359a4837f92",
      "uncle_count": 0,
      "transaction_count": 172,
      "synthetic_transaction_count": 1,
      "call_count": 333,
      "synthetic_call_count": 1,
      "value_total": "14324135521180578322",
      "value_total_usd": 2536.74001038483,
      "internal_value_total": "15524135521180578322",
      "internal_value_total_usd": 2749.25461609772,
      "generation": "2000000000000000000",
      "generation_usd": 354.191009521484,
      "uncle_generation": "0",
      "uncle_generation_usd": 0,
      "fee_total": "29252299880000000",
      "fee_total_usd": 5.1804508126612,
      "reward": "2029252299880000000",
      "reward_usd": 359.371460334146
    }
  ],
  "context": {
    "code": 200,
    "limit": 1,
    "offset": 0,
    "rows": 1,
    "total_rows": 8766254,
    "state": 8766260,
    "state_layer_2": 8766249,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualizations on our front-end:

https://blockchair.com/ethereum/blocks
uncles tableEndpoint:

https://api.blockchair.com/{:eth_chain}/uncles?{:query}
Where:

{:eth_chain} can only be ethereum or ethereum/testnet
{:query} is the query against the table (how to build a query)
Output:

Returns information about uncles. data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?parent_block_idintParent block id*++indexintUncle index in the block*+idintUncle id*+hashstring 0x[0-9a-f]{64}Uncle hash (with 0x)=datestring YYYY-MM-DDDate of generation (UTC)⌘timestring YYYY-MM-DD HH:ii:ssTimestamp of generation (UTC)⌘+sizeintUncle size in bytes*++minerstring 0x[0-9a-f]{40}Address of the rewarded miner (with 0x)=+extra_data_hexstring [0-9a-f]*Additional data included by the miner^difficultyintDifficulty*++gas_usedintAmount of gas used by transactions*++gas_limitintGas limit for the block set up by the miner*++logs_bloomstring [0-9a-f]*Logs bloom fieldmix_hashstring [0-9a-f]{64}Hash mixnoncestring [0-9a-f]*Nonce valuereceipts_rootstring [0-9a-f]{64}Receipts rootsha3_unclesstring [0-9a-f]{64}Uncles hashstate_rootstring [0-9a-f]{64}State roottransactions_rootstring [0-9a-f]{64}Transactions rootgenerationnumeric stringThe reward of the miner who generated the uncle, in wei*≈++generation_usdfloatThe award of the miner who generated uncle, in USD*++
Additional synthetic columns

ColumnTypeDescriptionQ?S?A?C?extra_data_binstring .*Text (UTF-8) representation of extra data. Allows you to use the LIKE operator:?Q=extra_data_bin(~hello)~
Notes:

increased efficiency method applies if querying parent_block_id and hash columns using the equals operator
Search by fields that contain values in wei (generation) may be with some inaccuracies
The difference between value_total and internal_value_total: a transaction itself may send, say, 0 eth, but this transaction may call a contract which sends someone 10 eth. In that case value will be 0 eth, and internal_value will be 10 eth
The default sorting is parent_block_id DESC
Example output:

https://api.blockchair.com/ethereum/uncles?limit=1:

{
  "data": [
    {
      "parent_block_id": 8792054,
      "index": 0,
      "id": 8792051,
      "hash": "0x41a4d3a79644ada10207cd41f8027a3d4e506d4cbde58750a98d3ec2afce402d",
      "date": "2019-10-22",
      "time": "2019-10-22 19:10:41",
      "size": 526,
      "miner": "0xb2930b35844a230f00e51431acae96fe543a0347",
      "extra_data_hex": "73696e6733",
      "difficulty": 2374634862657186,
      "gas_used": 9979194,
      "gas_limit": 9989371,
      "logs_bloom": "945c08608049b629008740f22070128c0602c50010d012952a08280b22022b608cc4507918e00962a4a049440320251192429006194812fb587ad87421e4a8002a0401c405658b208898920f828646517f206444b10ec162024807418380a10ac510840006258023002c008c66c52d220e683a2400c643600101a2720a0108446102112d41a0900105000005a212240e1012e1c17502492000c00a84823d1404030894051690f2304e484190028201b280840044a50c0830205403801835151110e354e2288184002073d908070a44e03cb809019308738c211b4100118064a080f1a60003881a880d1144c02100c00c1200488230d91841c02e5884d4b00401",
      "mix_hash": "3e26a6c8520bdb3afc6ff13d46f8906a508787fc3c8021656f0fe74834728538",
      "nonce": "2551618406869966062",
      "receipts_root": "fdcb14f98b77953add5ad2115b74291c1aeeab91e5027e30a888db72ac55d2c1",
      "sha3_uncles": "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
      "state_root": "8aab503534b41e0fa32d242829fb5ac1cae3e034db1c22a61cf15be2e2b8ca3f",
      "transactions_root": "f47354e86bd38e6d7cbd54cd2556fce97221a0f760c518ee226f3f5472432950",
      "generation": "1250000000000000000",
      "generation_usd": 217.484378814697
    }
  ],
  "context": {
    "code": 200,
    "limit": 1,
    "offset": 0,
    "rows": 1,
    "total_rows": 944557,
    "state": 8792093,
    "state_layer_2": 8792080,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualizations on our front-end:

https://blockchair.com/ethereum/uncles
transactions tableEndpoint:

https://api.blockchair.com/{:eth_chain}/transactions?{:query} (for blockchain transactions)
https://api.blockchair.com/{:eth_chain}/mempool/transactions?{:query} (for mempool transactions)
Where:

{:eth_chain} can only be ethereum or ethereum/testnet
{:query} is the query against the table (how to build a query)
Output:

data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?block_idintId of the block containing the transaction*++idintInternal Blockchair transaction id (not related to the blockchain, used for internal purposes)*+index †‡intThe transaction index number in the block*+hash ‡string 0x[0-9a-f]{64}Transaction hash=datestring YYYY-MM-DDDate of the block containing the transaction (UTC)⌘timestring YYYY-MM-DD HH:ii:ssTime of the block containing the transaction (UTC)⌘+failed †boolFailed transaction or not?=+type †string (enum)Transaction type with one of the following values: call, create, call_tree, create_tree, synthetic_coinbase. Description in the note below.=++sender ‡string 0x[0-9a-f]{40}Address of the transaction sender=+recipientstring 0x[0-9a-f]{40}Address of the transaction recipient=+call_count †intNumber of calls in the transaction*++valuenumeric stringMonetary value of transaction in wei*≈++value_usdfloatValue of transaction in USD*++internal_value †numeric stringValue of all internal calls in the transaction in wei*≈++internal_value_usd †floatValue of all internal calls in the transaction in USD*++fee †‡numeric stringFee in wei*≈++fee_usd †‡floatFee in USD*++gas_used †‡intAmount of gas used by a transaction*++gas_limit ‡intGas limit for transaction set by the sender*++gas_price ‡intPrice for gas set by the sender*++input_hex ‡string [0-9a-f]*Transaction input data (hex)^nonce ‡intNonce valuev ‡string [0-9a-f]*V valuer ‡string [0-9a-f]*R values ‡string [0-9a-f]*S value
Additional synthetic columns

ColumnTypeDescriptionQ?S?A?C?input_binstring .*Text (UTF-8) representation of input data. Allows you to use the LIKE operator: ?q=input_bin(~hello)~
Possible types (type) of transactions:

call — the transaction transfers the value, but there are no more calls (a simple ether sending, not in favor of a contract, or the call to a contract that does nothing)
create — create a new contract
call_tree — the transaction calls a contract that makes some other calls
create_tree — create a new contract that create contracts or starts making calls
synthetic_coinbase — a synthetic transaction for awarding a reward to the miner (block or uncle)
Notes:

increased efficiency method applies if querying id and hash columns using the equals operator
† — value is null for transactions in the mempool
‡ — value is null if type is synthetic_coinbase
Search by fields that contain values in wei (value_total, internal_value_total, generation, uncle_generation, fee_total, reward) may be with some inaccuracies
The difference between value_total and internal_value_total: e.g., a transaction itself sends 0 eth, but this transaction is a call of a contract that sends someone, let's say, 10 eth. Then value will be 0 eth, and internal_value - 10 eth
The default sorting — id DESC
block_id for mempool transactions is -1
Example output:

https://api.blockchair.com/ethereum/transactions?q=block_id(46147):

{
  "data": [
    {
      "block_id": 46147,
      "id": 46147000001,
      "index": null,
      "hash": null,
      "date": "2015-08-07",
      "time": "2015-08-07 03:30:33",
      "failed": false,
      "type": "synthetic_coinbase",
      "sender": null,
      "recipient": "0xe6a7a1d47ff21b6321162aea7c6cb457d5476bca",
      "call_count": 1,
      "value": "6050000000000000000",
      "value_usd": 6.05,
      "internal_value": "6050000000000000000",
      "internal_value_usd": 6.05,
      "fee": null,
      "fee_usd": null,
      "gas_used": null,
      "gas_limit": null,
      "gas_price": null,
      "input_hex": null,
      "nonce": null,
      "v": null,
      "r": null,
      "s": null
    },
    {
      "block_id": 46147,
      "id": 46147000000,
      "index": 0,
      "hash": "0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060",
      "date": "2015-08-07",
      "time": "2015-08-07 03:30:33",
      "failed": false,
      "type": "call",
      "sender": "0xa1e4380a3b1f749673e270229993ee55f35663b4",
      "recipient": "0x5df9b87991262f6ba471f09758cde1c0fc1de734",
      "call_count": 1,
      "value": "31337",
      "value_usd": 3.1337e-14,
      "internal_value": "31337",
      "internal_value_usd": 3.1337e-14,
      "fee": "1050000000000000000",
      "fee_usd": 1.05,
      "gas_used": 21000,
      "gas_limit": 21000,
      "gas_price": 50000000000000,
      "input_hex": "",
      "nonce": "0",
      "v": "1c",
      "r": "88ff6cf0fefd94db46111149ae4bfc179e9b94721fffd821d38d16464b3f71d0",
      "s": "45e0aff800961cfce805daef7016b9b675c137a6a41a548f7b60a3484c06a33a"
    }
  ],
  "context": {
    "code": 200,
    "limit": 10,
    "offset": 0,
    "rows": 2,
    "total_rows": 2,
    "state": 8791945,
    "state_layer_2": 8791935,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualizations on our front-end:

https://blockchair.com/ethereum/transactions
https://blockchair.com/ethereum/mempool/transactions
calls tableEndpoint:

https://api.blockchair.com/{:eth_chain}/calls?{:query}
Where:

{:eth_chain} can only be ethereum or ethereum/testnet
{:query} is the query against the table (how to build a query)
Output:

Returns information about internal transaction calls. data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?block_idintBlock id containing a call*++transaction_idintTransaction id containing the call*+transaction_hash †string 0x[0-9a-f]{64}Transaction hash (with 0x) containing the call=indexstringCall index within the transaction (tree-like, e.g., "0.8.1")=+depthintCall depth within the call tree (starting at 0)*+datestring YYYY-MM-DDDate of the block that contains the call (UTC)⌘timestring YYYY-MM-DD HH:ii:ssTime of the block that contains the call (UTC)⌘+failedboolFailed call or not=+fail_reasonstring .* or nullIf failed, then the failure description, if not, then null~+typestring (enum)The call type, one of the following values: call, delegatecall, staticcall, callcode, selfdestruct, create, synthetic_coinbase, create2=++sender †string 0x[0-9a-f]{40}Sender's address (with 0x)=+recipientstring 0x[0-9a-f]{40}Recipient's address (with 0x)=+child_call_countintNumber of child calls*++valuenumeric stringCall value in wei, hereinafter numeric string - is a numeric string passed as a string, because wei-values do not fit into uint64*≈++value_usdfloatCall value in USD*++transferredboolHas ether been transferred? (false if failed, or if the type of transaction does not change the state, e.g., staticcall=+input_hex †string [0-9a-f]*Input call dataoutput_hex †string [0-9a-f]*Output call data
Notes:

increased efficiency method applies if querying transction_id column using the equals operator
† — value is null if type is synthetic_coinbase
Search by fields that contain values in wei (value) may be with some inaccuracies
The default sorting is transaction_id DESC
sorting by index respects the tree structure (i.e. "0.2" comes before "0.11") instead of being alphabetical
Example output:

https://api.blockchair.com/ethereum/calls?q=not,type(synthetic_coinbase)&limit=1:

{
  "data": [
    {
      "block_id": 8792132,
      "transaction_id": 8792132000050,
      "transaction_hash": "0x9e3a13bfc5313245de7142b7ec13b80123188d9ae4cce797a44b9b426864d1ca",
      "index": "0",
      "depth": 0,
      "date": "2019-10-22",
      "time": "2019-10-22 19:30:03",
      "failed": false,
      "fail_reason": null,
      "type": "call",
      "sender": "0xe475e906b74806c333fbb1b087e523496d8c4cb7",
      "recipient": "0x3143ec5a285adfb248c9e4de934ee735d4b7d734",
      "child_call_count": 0,
      "value": "0",
      "value_usd": 0,
      "transferred": true,
      "input_hex": "a9059cbb00000000000000000000000023ea8008420c4355570f9915b5fe39dc278540d3000000000000000000000000000000000000000000000000000000003b9aca00",
      "output_hex": "0000000000000000000000000000000000000000000000000000000000000001"
    }
  ],
  "context": {
    "code": 200,
    "limit": 1,
    "offset": 0,
    "rows": 1,
    "total_rows": 1422927649,
    "state": 8792138,
    "state_layer_2": 8792127,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualizations on our front-end:

https://blockchair.com/ethereum/calls
addresses viewEndpoints:

https://api.blockchair.com/{:eth_chain}/addresses?{:query}
Where:

{:eth_chain} can only be: ethereum or ethereum/testnet
{:query} is the query against the table (how to build a query)
Output:

The addresses view contains the list of all addresses and their confirmed balances. Unlike other infinitables (blocks, transactions, outputs) this table isn't live, it's automatically updated every day with new data, thus we classify it as a "view". data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?addressstring 0x[0-9a-zA-Z\-]*Ethereum account or contract addressbalancenumeric stringIts balance*++nonceintIts nonce value*++is_contractbooleanIs it a contract (true) or an account (false)?=+
Notes:

the default sorting — balance DESC
Example outputs:

https://api.blockchair.com/ethereum/addresses:

{
  "data": [
    {
      "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "balance": "6693912559400585982377984",
      "nonce": 1,
      "is_contract": true
    },
    {
      "address": "0x00000000219ab540356cbb839cbe05303d7705fa",
      "balance": "6232610000069000205172736",
      "nonce": 1,
      "is_contract": true
    },
    {
      "address": "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8",
      "balance": "2296896558056344842665984",
      "nonce": 865,
      "is_contract": false
    },
    {
      "address": "0x53d284357ec70ce289d6d64134dfac8e511c8a3d",
      "balance": "1378734066321521433903104",
      "nonce": 4,
      "is_contract": false
    },
    {
      "address": "0x61edcdf5bb737adffe5043706e7c5bb1f1a56eea",
      "balance": "1189498953581339986624512",
      "nonce": 0,
      "is_contract": true
    },
    {
      "address": "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5",
      "balance": "1146177206209739021615104",
      "nonce": 1,
      "is_contract": true
    },
    {
      "address": "0xdf9eb223bafbe5c5271415c75aecd68c21fe3d7f",
      "balance": "988648154664867412836352",
      "nonce": 1,
      "is_contract": true
    },
    {
      "address": "0xc61b9bb3a7a0767e3179713f3a5c7a9aedce193c",
      "balance": "800010760463680857440256",
      "nonce": 1,
      "is_contract": true
    },
    {
      "address": "0x8484ef722627bf18ca5ae6bcf031c23e6e922b30",
      "balance": "755009999245592554897408",
      "nonce": 1,
      "is_contract": true
    },
    {
      "address": "0x07ee55aa48bb72dcc6e9d78256648910de513eca",
      "balance": "681241111484627083591680",
      "nonce": 0,
      "is_contract": true
    }
  ],
  "context": {
    "code": 200,
    "source": "A",
    "limit": 10,
    "offset": 0,
    "rows": 10,
    "total_rows": 121050742,
    "state": 12787924,
    "state_layer_2": 12787924,
    ...
  }
}


https://api.blockchair.com/ethereum/addresses?q=balance(1000000..)&a=count() (counts the number of addresses hodling more than 1M ether):

{
  "data": [
    {
      "count()": 6
    }
  ],
  "context": {
    "code": 200,
    ...
  }
}


https://api.blockchair.com/ethereum/addresses?a=is_contract,count() (counts accounts and contracts):

{
  "data": [
    {
      "is_contract": false,
      "count()": 103337709
    },
    {
      "is_contract": true,
      "count()": 17713033
    }
  ],
  "context": {
    "code": 200,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualizations on our front-end:

https://blockchair.com/ethereum/addresses
https://blockchair.com/ethereum/testnet/addresses
Inifinitable endpoints for MixinPlease note that our Mixin API outputs raw node data for these endpoints.

snapshots tableNote: this particular table doesn't support advanced querying. The only query section it supports are ?offset= and sorting/filtering by topology.

Endpoint:

https://api.blockchair.com/{:xin_chain}/raw/snapshots?{:query}
Where:

{:xin_chain} can be only mixin
Where:

{:query} is the query against the table (how to build a query)
Output:

data contains an array of database rows.

Example requests:`

https://api.blockchair.com/mixin/raw/snapshots
https://api.blockchair.com/mixin/raw/snapshots?q=topology(..18629737)&offset=10
https://api.blockchair.com/mixin/raw/snapshots?s=topology(asc)
Example output:

https://api.blockchair.com/mixin/raw/snapshots:

{
  "data": [
    {
      "hash": "a6188df5dfecef1a2650fc7efd51ad0147539182cf0459fee6986b48f83502a6",
      "node": "f7d194a68478987bc472c9f99478260dc12f4860204e0e91bee98a8b89363bc3",
      "references": {
        "self": "c77df83dcc00afba5e8cbc34b075df975c42efe520b4e00b501289b23f9affc1",
        "external": "4d5f06d7b8512780396c212ecf55a7bfd7c42b4d82d0bd8e7911a03cab28c8cc"
      },
      "round": 8729,
      "signature": "652e1d783743c45aebb127a3c9a8d823d743b3dd2304f12a4dc490e104448e61de8fe14abae911528ab9f7b845b73fc86582e53333e35ee1b78fdcb17b272e0000000000003eade5",
      "timestamp": 1587575473417249500,
      "topology": 18629830,
      "transaction": {
        "asset": "da5f6dbd3102cd89b1b040c6b61e5f2b696bcb989dff7d8ecee8872aacf65592",
        "extra": "44876fa784bc11eabda9b827eb81dfb7",
        "hash": "ce122ec544fc41c9cde2d350c544659ee5d4887201becf0a01eed6d238030303",
        "inputs": [
          {
            "hash": "d3ac83d0cc8ef79bb215e6fc3326d58c6b16d2eb43fd6d6f16c18de4ddb0907a",
            "index": 0
          }
        ],
        "outputs": [
          {
            "amount": "0.01033063",
            "keys": [
              "322c48fa5b19aae518147de7223f62bcb7b444b054226d50fcfd064d0ed555c5"
            ],
            "mask": "bc561649c4f9a36c252159717cc0deb797f1af1af1704cefd96cb467616e060e",
            "script": "fffe01",
            "type": 0
          }
        ],
        "version": 1
      },
      "version": 1
    },
    {
      "hash": "80f6199ccc5bcb2cfb484a334107a67f89dc6e4cbcbcaae341fe28c619960bd5",
      "node": "f7d194a68478987bc472c9f99478260dc12f4860204e0e91bee98a8b89363bc3",
      "references": {
        "self": "c77df83dcc00afba5e8cbc34b075df975c42efe520b4e00b501289b23f9affc1",
        "external": "4d5f06d7b8512780396c212ecf55a7bfd7c42b4d82d0bd8e7911a03cab28c8cc"
      },
      "round": 8729,
      "signature": "8e18689d15e051bb484ae08fa6b9325d61d75f86cbc203e2fcb87f97f93d5906d91d8cb31036b94a43918fc3e007a0e82bb3acb2735d66b5a90566b68bbb130700000000001efdf0",
      "timestamp": 1587575472096503000,
      "topology": 18629829,
      "transaction": {
        "asset": "d4c304ffc3270ee0f3468913bd8027225201f0eccd336d47062d76c6e2b6bb27",
        "extra": "c5029926c5904a4583094a9e0761c9da",
        "hash": "a95f88e19cd5dfbb6f14dd6ea581049b065ce0065798faa3cb889995088db9c0",
        "inputs": [
          {
            "hash": "80dac46fe23abc29d7fe74b6e3580c42e164d37c9bd50be05306ccd2c7e6c653",
            "index": 1
          }
        ],
        "outputs": [
          {
            "amount": "0.01193500",
            "keys": [
              "b8124285ceca9f5e83b2a5f0420c8483067a69719f0741550742f0ac4c38c580"
            ],
            "mask": "0aef3fc155aa561d75490f545bb044f9a8f488060db7a6f4631d33a6d53296fd",
            "script": "fffe01",
            "type": 0
          },
          {
            "amount": "0.00944393",
            "keys": [
              "f75bfa4afe3584b2beda6998be56c93cf6cd79b5635d40f61e0a6cefdf66367b"
            ],
            "mask": "d6bb73f16b57f7a67bb0c8bfce11b2f7ab1a1f108b9f7af242e36d448d2406e5",
            "script": "fffe01",
            "type": 0
          }
        ],
        "version": 1
      },
      "version": 1
    },
    ...
  ],
  "context": {
    "code": 200,
    "results": 10,
    "total_rows": 18629831,
    "offset": 0,
    "state": 18629830,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualization on our front-end:

https://blockchair.com/mixin/snapshots
mintings tableNote: this particular table doesn't support advanced querying. The only query section it supports are ?offset= and sorting/filtering by batch.

Endpoint:

https://api.blockchair.com/{:xin_chain}/raw/mintings?{:query}
Where:

{:xin_chain} can be only mixin
Where:

{:query} is the query against the table (how to build a query)
Output:

data contains an array of database rows.

Example requests:`

https://api.blockchair.com/mixin/raw/mintings
https://api.blockchair.com/mixin/raw/mintings?q=batch(..400)&offset=10
https://api.blockchair.com/mixin/raw/mintings?s=batch(asc)
Example output:

https://api.blockchair.com/mixin/raw/mintings?s=batch(asc):

{
  "data": [
    {
      "amount": "1726.02739638",
      "batch": 14,
      "group": "KERNELNODE",
      "transaction": "20001842d6eff5129c11f7c053bf1209f0267bf223f1681c9cb9d19fc773a692",
      "snapshot": {
        "hash": "1f408b456fe82b3e47801167649a725cb71075a58bb2568c8fe44bc223a0eece",
        "node": "307ecfa84d100ecd6bc32743972083e5178e02db049ce16bfd743f3ae52fefc5",
        "references": {
          "self": "31923e163f5daddcb97ef98bf3b8a76002ec007e309c209ec9a071e16f876d90",
          "external": "0597b1772ba2a0bd814dba7f9f6010512a426eef3154d41f7e63ff1394db6ce2"
        },
        "round": 1,
        "signatures": [ ... ],
        "timestamp": 1552544417124320500,
        "topology": 116,
        "transaction": {
          "asset": "a99c2e0e2b1da4d648755ef19bd95139acbbe6564cfb06dec7cd34931ca72cdc",
          "extra": "",
          "hash": "20001842d6eff5129c11f7c053bf1209f0267bf223f1681c9cb9d19fc773a692",
          "inputs": [
            {
              "mint": {
                "group": "KERNELNODE",
                "batch": 14,
                "amount": "1726.02739638"
              }
            }
          ],
          "outputs": [
            {
              "amount": "115.06849309",
              "keys": [
                "5cd87b6b5a25f67445197261e1ebb5d68be598cd63b0a57eef6897f82cde5c0a"
              ],
              "mask": "f287afceabccc3d48b52de04d0edd43b446275041b024a3b5c9517894c06f9ab",
              "script": "fffe01",
              "type": 0
            },
            ...
          ],
          "version": 1
        },
        "version": 0
      },
      "timestamp": 1552544417124320500
    },
    ...
  ],
  "context": {
    "code": 200,
    "results": 10,
    "total_rows": 404,
    "offset": 0,
    "state": 18630676,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualization on our front-end:

https://blockchair.com/mixin/mintings
nodes tableNote: this particular table doesn't support querying. It outputs all the entries (so there's no standard limit of 10 rows). Nodes are sorted by their state, and then by timestamp.

Endpoint:

https://api.blockchair.com/{:xin_chain}/raw/nodes
Where:

{:xin_chain} can be only mixin
Output:

data contains an array of database rows.

Example requests:`

https://api.blockchair.com/mixin/raw/nodes
Example output:

https://api.blockchair.com/mixin/raw/nodes:

{
  "data": [
    {
      "id": "cbba7a5e7bae3b0cef3d6dcba7948fa03facda3be401d67aa1a38aecb1f443a0",
      "payee": "XINCcpcWJbJRiqEoUV7pWrmAdN1AZq3wyYTxa62JojvM4UqpuQnoVX7DZ6BgJEb61pSUS4ZyZNuEbAGL5azNyZNCbwdgqcVY",
      "signer": "XIN3ntCzd1FqjSxrYM1f9abN3wY5DcydkDviEVgZL3paV7oYEeKnwzbMLwoRVANwyiu7w9mRrPf2eTpPaLRgQow9rSr3hzWH",
      "state": "ACCEPTED",
      "timestamp": 1579450099118731000,
      "transaction": "ebbbf69e9e74e4070ef0685f8d9b4d7bc443922ac93445bc9bda1567984bdda8"
    },
    {
      "id": "6985deee66ead2021925eae21737fa172d19c6efc3e53f3ca5e28ab42f7f51eb",
      "payee": "XINYDpVHXHxkFRPbP9LZak5p7FZs3mWTeKvrAzo4g9uziTW99t7LrU7me66Xhm6oXGTbYczQLvznk3hxgNSfNBaZveAmEeRM",
      "signer": "XINDfgnkijCTe9ijVd9yDwQP8VY4rXwFqYczfgeKJViJqjGKmWS8MdZhJn7kPd5Hv6M8W8RobhJUAxkxgZ6YNtdWQwefYE51",
      "state": "ACCEPTED",
      "timestamp": 1583004182403037400,
      "transaction": "48f3d7b5ae6b03f251705cfc82c3b3c7413ec8a7e7b100de0cab4d8f3ec33bd5"
    },
    ...
  ],
  "context": {
    "code": 200,
    "results": 55,
    "state": 18630827,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualization on our front-end:

https://blockchair.com/mixin/nodes
Inifinitable endpoints for TezosPlease note that our Tezos API outputs raw node data for this endpoint.

blocks tableNote: this particular table doesn't support advanced querying. The only query section it supports are ?offset= and sorting/filtering by id (height).

Endpoint:

https://api.blockchair.com/{:xtz_chain}/raw/blocks?{:query}
Where:

{:xtz_chain} can be only tezos
Where:

{:query} is the query against the table (how to build a query)
Output:

data contains an array of database rows.

Example requests:`

https://api.blockchair.com/tezos/raw/blocks
https://api.blockchair.com/tezos/raw/blocks?q=id(..100000)&offset=10
https://api.blockchair.com/tezos/raw/blocks?s=id(asc)
Example output:

https://api.blockchair.com/tezos/raw/blocks?s=id(asc):

{
  "data": [
    {
      "id": 0,
      "time": "2018-06-30T16:07:32Z",
      "hash": "BLockGenesisGenesisGenesisGenesisGenesisf79b5d1CoW2",
      "priority": 0,
      "n_ops": 0,
      "volume": 0,
      "cycle": 0,
      "is_cycle_snapshot": 1,
      "version": 0,
      "n_accounts": 0,
      "n_new_accounts": 0,
      "n_new_contracts": 0,
      "gas_limit": 0,
      "gas_used": 0,
      "gas_price": 0,
      "days_destroyed": 0
    },
    {
      "id": 1,
      "time": "2018-06-30T17:39:57Z",
      "hash": "BLSqrcLvFtqVCx8WSqkVJypW2kAVRM3eEj2BHgBsB6kb24NqYev",
      "priority": 0,
      "n_ops": 0,
      "volume": 0,
      "cycle": 0,
      "is_cycle_snapshot": 0,
      "version": 1,
      "n_accounts": 31589,
      "n_new_accounts": 31589,
      "n_new_contracts": 32,
      "gas_limit": 0,
      "gas_used": 0,
      "gas_price": 0,
      "days_destroyed": 0
    },
    ...
  ],
  "context": {
    "code": 200,
    "results": 10,
    "total_rows": 1002667,
    "offset": 0,
    "state": 1002666,
    "price_usd": 2.67,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualization on our front-end:

https://blockchair.com/tezos/blocks
Inifinitable endpoints for second layersproperties table (Omni Layer)Note: this particular table doesn't support querying. The only query section it supports is ?offset=. Note that this endpoint is in the Alpha stage.

Endpoint:

https://api.blockchair.com/bitcoin/omni/properties?{:query}
Where:

{:query} is the query against the table (how to build a query), the only supported query section for this table is ?offset=
Output:

data contains an array of database rows. Each row is in the format which accords with Omni Layer specification (https://github.com/OmniLayer/spec)

Example output:

https://api.blockchair.com/bitcoin/omni/properties:

{
  "data": [
    {
      "id": 412,
      "name": "ENO",
      "category": "",
      "subcategory": "",
      "description": "",
      "url": "",
      "is_divisible": false,
      "issuer": "1JcfUyi9BkXCTXHdeUusmYrsHXvnnLvTxB",
      "creation_transaction_hash": "ea5b914ba4e80931c8d46e551f6010113ab2cba82186d2497f2b2f0c6d53953b",
      "creation_time": "2018-11-25 21:34:08",
      "creation_block_id": 551501,
      "is_issuance_fixed": false,
      "is_issuance_managed": false,
      "circulation": 222222222,
      "ecosystem": 1
    },
    ...
  ],
  "context": {
    "code": 200,
    "limit": 10,
    "offset": 0,
    "rows": 10,
    "total_rows": 412,
    "state": 599976,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualization on our front-end:

https://blockchair.com/bitcoin/omni/properties
tokens table (ERC-20)Endpoint:

https://api.blockchair.com/ethereum/erc-20/tokens?{:query}
https://api.blockchair.com/ethereum/testnet/erc-20/tokens?{:query} (Goerli Testnet)
Where:

{:query} is the query against the table (how to build a query)
Output:

Returns information about ERC-20 tokens indexed by our engine. data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?addressstring 0x[0-9a-f]{40}Address of the token contract=idintInternal Blockchair id of the token*+datestring YYYY-MM-DDCreation date⌘timestring YYYY-MM-DD HH:ii:ssCreation timestamp⌘+namestring .* (or an empty string)Token name (e.g. My New Token)=+symbolstring .* (or an empty string)Token symbol (e.g. MNT)=+decimalsintNumber of decimals=+creating_block_idintCreating block height*+creating_transaction_hashstring 0x[0-9a-f]{64}Creating transaction hash
Notes:

for the columns address, id increased efficiency when uploading one record is applied
there is no possibility to search over date column, use searching ?q=time(YYYY-MM-DD) instead
the default sort is id DESC
when using offset, it is reasonable to add to the filters the maximum block number (?q=block_id(..N)), since it is very likely that during the iteration new rows will be added to the table. For convenience, you can take the value of context.state from the first result of any query containing the number of the latest block at the query time and use this result later on.
Example output:

https://api.blockchair.com/ethereum/erc-20/tokens?limit=1:

{
  "data": [
    {
      "address": "0x9b460d404be254d7b2ba89336a8a41807bb1562b",
      "id": 121500,
      "date": "2019-10-22",
      "time": "2019-10-22 19:21:11",
      "name": "UGB Token",
      "symbol": "UGB",
      "decimals": 18,
      "creating_block_id": 8792093,
      "creating_transaction_hash": "0x58e132a937c3bd60f1d113ecb14db59fd5229ae312a2afdf8f1b365bf8620e5e"
    }
  ],
  "context": {
    "code": 200,
    "limit": 1,
    "offset": 0,
    "rows": 1,
    "total_rows": 121500,
    "state": 8792147,
    "state_layer_2": 8792137,
    ...
  }
}


https://api.blockchair.com/ethereum/erc-20/tokens?q=symbol(USDT)&a=count():

{
  "data": [
    {
      "count()": 72
    }
  ],
  "context": {
    "code": 200,
    "limit": 10000,
    "offset": null,
    "rows": 1,
    "total_rows": 1,
    "state": 8792205,
    "state_layer_2": 8792192,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualization on our front-end:

https://blockchair.com/ethereum/erc-20/tokens
transactions table (ERC-20)Endpoint:

https://api.blockchair.com/ethereum/erc-20/transactions?{:query}
https://api.blockchair.com/ethereum/testnet/erc-20/transactions?{:query} (Goerli Testnet)
Where:

{:query} is the query against the table (how to build a query)
Output:

Returns information about ERC-20 transfers indexed by our engine. data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?block_idintBlock id including the token transfer*+idintInternal Blockchair id of the token transfer*+transaction_hashstring 0x[0-9a-f]{64}Transaction hash including the token transferdatestring YYYY-MM-DDDate of the transfer⌘timestring YYYY-MM-DD HH:ii:ssTimestamp of the transfer⌘+token_addressstring 0x[0-9a-f]{40}Address of the token contract=+token_namestring .* (or an empty string)Token name (e.g. My New Token)=++token_symbolstring .* (or an empty string)Token symbol (e.g. MNT)=++token_decimalsintNumber of decimals=+senderstring 0x[0-9a-f]{40}The sender's address=recipientstring 0x[0-9a-f]{40}The recipient's address=valuenumeric stringTransferred amount (in the smallest denomination)*≈=
Notes:

for the columns id increased efficiency when uploading one record is applied
there is no possibility to search over date column, use searching ?q=time(YYYY-MM-DD) instead
the default sort is id DESC
when using offset, it is reasonable to add to the filters the maximum block number (?q=block_id(..N)), since it is very likely that during the iteration new rows will be added to the table. For convenience, you can take the value of context.state from the first result of any query containing the number of the latest block at the query time and use this result later on.
value is approximated when queried
Example output:

https://api.blockchair.com/ethereum/erc-20/transactions?limit=1:

{
  "data": [
    {
      "block_id": 8792197,
      "id": 275501753,
      "transaction_hash": "0xec32c9b67d3e7088f14bfc17e8ccb0eb06a98eebe81224dc8703f470c62c5a2e",
      "date": "2019-10-22",
      "time": "2019-10-22 19:45:41",
      "token_address": "0xbe59434473c50021b30686b6d34cdd0b1b4f6198",
      "token_name": "Mobilio",
      "token_symbol": "MOB",
      "token_decimals": 18,
      "sender": "0x2a68bdc41e98ab0fb60c9610e62d83ab29312d06",
      "recipient": "0xfa96009f004428b85a05cfa1233c24f7afe0536a",
      "value": "12021696603378832398951"
    }
  ],
  "context": {
    "code": 200,
    "limit": 1,
    "offset": 0,
    "rows": 1,
    "total_rows": 275501753,
    "state": 8792207,
    "state_layer_2": 8792197,
    ...
  }
}


Request cost formula:

See request costs for infinitables

Explore visualization on our front-end:

https://blockchair.com/ethereum/erc-20/transactions
Misc endpointsBroadcasting transactionsBroadcast a transaction to the network

Endpoints:

https://api.blockchair.com/{:chain}/push/transaction (POST request)
Where:

{:chain} can be one of these: bitcoin, bitcoin-cash, ethereum, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, bitcoin/testnet, mixin
POST data should contain data parameter with raw transaction represented in hex (for Ethereum it should start with 0x)
Output:

If the transaction has been successfully broadcast to the network, API will return a JSON response (code 200) containing data array with transaction_hash key holding the hash of the received transaction. In case of any error (wrong transaction format, spending already spent outputs, etc.) API returns status code 400 and an error desription if available (descriptions aren't shown for ethereum and mixin).

Example of a successful response:

{
  "data": {
    "transaction_hash": "0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098"
  },
  "context": {
  	"code": 200,
  	...
  }
}


Example of a response to an invalid transaction:

{
  "data": null,
  "context": {
    "code": 400,
    "error": "Invalid transaction. Error: 16: mandatory-script-verify-flag-failed (Signature must use SIGHASH_FORKID)"
    ...
  }
}


Example request:

> curl -v --data "data=01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000" https://api.blockchair.com/bitcoin/push/transaction


Tip: for testing purpose it's possible to use GET request instead of POST like this: https://api.blockchair.com/bitcoin/push/transaction?data=0100000001000000000000000000000000...

Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/broadcast
NodesList of full network nodes

Endpoints:

https://api.blockchair.com/{:btc_chain}/nodes (agregated data on nodes + node list)
https://api.blockchair.com/nodes (agregated data on nodes for 8 networks at once)
Please note that the number of nodes is also available in the https://api.blockchair.com/stats and https://api.blockchair.com/{:btc_chain}/stats endpoints output.

Where:

{:btc_chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash
Output:

data contains an array of arrays:

data.nodes — the node list; the key is {:ip}:{:port}, each element contains version (node version), country (2 letter country code derived from the IP address based on geolocation), height (node reports this number as the best block number it has, flags (special field with node options)
data.count — total number of nodes
data.countries — number of nodes grouped by country codes
data.versions — number of nodes grouped by node version
data.heights — number of nodes grouped by their best block height
https://api.blockchair.com/nodes endpoint shows this data for 8 coins at once (bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash), but it doesn't have the data.nodes array, i.e. there's only aggregated data.

Example output:

https://api.blockchair.com/bitcoin/nodes:

{
  "data": {
    "nodes": {
      "1.171.38.197:8333": {
        "version": "/Satoshi:0.18.1/",
        "country": "TW",
        "height": 599960,
        "flags": 1036
      },
      "1.172.110.250:8333": {
        "version": "/Satoshi:0.18.0/",
        "country": "TW",
        "height": 599895,
        "flags": 1037
      },
      ...
    },
    "count": 8923,
    "countries": {
      "US": 2745,
      "DE": 1589,
      ...
    },
    "versions": {
      "/Satoshi:0.18.0/": 2974,
      "/Satoshi:0.18.1/": 1753,
      ...
    },
    "heights": {
      ...
      "599960": 414,
      "599961": 4684,
      "599962": 982,
      "599963": 1738,
      ...
    }
  },
  "context": {
    "code": 200,
    "state": 599963,
    ...
  }
}


Request cost formula:

Always 1.

Explore visualizations on our front-end:

https://blockchair.com/nodes
https://blockchair.com/bitcoin/nodes
https://blockchair.com/bitcoin-cash/nodes
https://blockchair.com/litecoin/nodes
https://blockchair.com/bitcoin-sv/nodes
https://blockchair.com/dogecoin/nodes
https://blockchair.com/dash/nodes
https://blockchair.com/groestlcoin/nodes
https://blockchair.com/zcash/nodes
State changesAllows to query state changes caused by a block and potential state changes caused by mempool transactions in case they get confirmed.

Endpoints:

https://api.blockchair.com/{:chain}/state/changes/block/{:height} (state changes caused by a block)
https://api.blockchair.com/{:chain}/state/changes/mempool (potential state changes caused by mempool transactions)
Where:

{:chain} can be one of these: bitcoin, bitcoin-cash, litecoin, bitcoin-sv, dogecoin, dash, groestlcoin, zcash, bitcoin/testnet. The first endpoint also supports ethereum
{:height} is the block height (integer value), also known as block id
Output:

The response contains an array where the keys are addresses which were affected by the block (or the mempool), and the values are balance changes.

Note: values are returned as strings for Ethereum.

No iteration required, this endpoint outputs all state changes at once.

Example requests:

https://api.blockchair.com/bitcoin/state/changes/block/170
https://api.blockchair.com/bitcoin/state/changes/mempool
https://api.blockchair.com/ethereum/state/changes/block/46147
Example output:

https://api.blockchair.com/bitcoin/state/changes/block/170:

{
  "data": {
    "1PSSGeFHDnKNxiEyFrD1wcEaHr9hrQDDWc": 5000000000,
    "1Q2TWHE3GMdB6BZKafqwxXtWAWgFt5Jvm3": 1000000000,
    "12cbQLTFMXRnSzktFkuoG3eHoMeFtpTu3S": -1000000000
  },
  "context": {
    ...
    "results": 3,
    ...
  }
}


The block in this example was the first Bitcoin block which contained a non-coinbase transaction. We can see the coinbase reward here (50 BTC) sent to the miner, and two state changes caused by a 10 BTC transaction.

Example usage:

This endpoint may be useful if you need to track balance changes for a lot of addresses — you can simply track state changes and find the needed addresses there instead of constantly retrieving information about the balances. Here's an example logic for an application watching for Bitcoin transactions incoming/outgoing to/from 1 million addresses:

latest_known_block_height = 0
addresses = [1Abc, 1Efg, 1Hij, ...]
while (true)
    api_response = api_request('https://api.blockchair.com/bitcoin/state/changes/mempool')
    if any of api_response.data keys are in the addresses array
        print 'Found new transaction in the mempool'
    if latest_known_block_height < api_response.context.state // A new block has been mined (context.state always yields the latest block number)
        latest_known_block_height = api_response.context.state
        api_response_block = api_request('https://api.blockchair.com/bitcoin/state/changes/block/{:api_response.context.state}')
        if any of api_response_block.data keys are in the addresses array
            print 'Found new transaction in the latest block'
    sleep(10) // The mempool data is cached for 10 seconds on our servers by default


Note that this example doesn't account for cases like new multiple blocks have been found while you were requesting the latest one, etc. See this example as a possible workaround: https://github.com/Blockchair/Blockchair.Support/pull/207/files

Request cost formula:

5 for changes caused by a block, 10 for changes caused by mempool transactions.

Available block rangesAs Blockchair doesn't store historical data for some blockchains (at this moment this applies to Ripple and Stellar only) it may be useful to know which blocks can be queried.

Endpoint:

https://api.blockchair.com/range
Output:

The response contains an array where the keys are blockchains, and the values are arrays containing:

blockchain_first_entry — first block (or ledger) id on the blockchain
blockchain_first_entry_date — its date
blockchair_first_entry — first block id Blockchair processes
blockchair_first_entry_date — its date
is_full — whether we have the full history for this blockchain
Example output:

https://api.blockchair.com/range:

{
  "data": {
    "bitcoin": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2009-01-03",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2009-01-03",
      "is_full": true
    },
    "bitcoin-cash": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2009-01-03",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2009-01-03",
      "is_full": true
    },
    "ethereum": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2015-07-30",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2015-07-30",
      "is_full": true
    },
    "litecoin": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2011-10-07",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2011-10-07",
      "is_full": true
    },
    "bitcoin-sv": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2009-01-03",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2009-01-03",
      "is_full": true
    },
    "dogecoin": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2013-12-06",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2013-12-06",
      "is_full": true
    },
    "dash": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2014-01-19",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2014-01-19",
      "is_full": true
    },
    "ripple": {
      "blockchain_first_entry": 32570,
      "blockchain_first_entry_date": "2013-01-01",
      "blockchair_first_entry": 52688390,
      "blockchair_first_entry_date": "2020-01-12",
      "is_full": false
    },
    "groestlcoin": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2014-03-20",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2014-03-20",
      "is_full": true
    },
    "stellar": {
      "blockchain_first_entry": 1,
      "blockchain_first_entry_date": "2015-09-30",
      "blockchair_first_entry": 27225363,
      "blockchair_first_entry_date": "2019-12-11",
      "is_full": false
    },
    "monero": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2014-04-18",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2014-04-18",
      "is_full": true
    },
    "bitcoin/testnet": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2011-02-02",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2011-02-02",
      "is_full": true
    },
    "cardano": {
      "blockchain_first_entry": 1,
      "blockchain_first_entry_date": "2017-09-23",
      "blockchair_first_entry": 1,
      "blockchair_first_entry_date": "2017-09-23",
      "is_full": true
    },
    "zcash": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2016-10-28",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2016-10-28",
      "is_full": true
    },
    "mixin": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2019-02-28",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2019-02-28",
      "is_full": true
    },
    "tezos": {
      "blockchain_first_entry": 0,
      "blockchain_first_entry_date": "2018-06-30",
      "blockchair_first_entry": 0,
      "blockchair_first_entry_date": "2018-06-30",
      "is_full": true
    },
    "eos": {
      "blockchain_first_entry": 1,
      "blockchain_first_entry_date": "2018-06-08",
      "blockchair_first_entry": null,
      "blockchair_first_entry_date": null,
      "is_full": false
    }
  },
  "context": {
    "code": 200,
    ...
  }
}


Request cost formula:

Always 1.

Release monitorThis endpoint returns the list of latest software (core clients) releases for blockchains we support. This may be useful for those who want to track blockchain development, new features, and hard forks (especially this is useful for multi-currency blockchain software — wallets or exchanges — developers). Never miss a BSV hard fork anymore!

Endpoint:

https://api.blockchair.com/tools/releases
Possible options:

?chain={:chain} displays latest releases for {:chain} only
Output:

data contains an array of latest releases sorted by time for all chains we support (or for a specific chain if ?chain is set). Each element is an array with the following elements:

chain — chain id
version — tag name
time — release publish time (UTC)
link — link to this release on GitHub
context has two special fields:

latest_update — latest update time (UTC)
supported_chains — array of chains monitored with their chain ids and software names
Example requests:

https://api.blockchair.com/tools/releases
https://api.blockchair.com/tools/releases?chain=bitcoin
Example output:

https://api.blockchair.com/tools/releases:

{
  "data": [
    {
      "chain": "bitcoin-sv",
      "version": "Bitcoin SV v1.0.1",
      "time": "2020-01-28 11:35:26",
      "link": "https://github.com/bitcoin-sv/bitcoin-sv/releases/tag/v1.0.1"
    },
    {
      "chain": "dash",
      "version": "Dash Core v0.15.0.0-rc2",
      "time": "2020-01-27 20:12:45",
      "link": "https://github.com/dashpay/dash/releases/tag/v0.15.0.0-rc2"
    },
    {
      "chain": "groestlcoin",
      "version": "Groestlcoin Core v2.18.2",
      "time": "2020-01-25 12:53:41",
      "link": "https://github.com/Groestlcoin/groestlcoin/releases/tag/v2.18.2"
    },
    {
      "chain": "stellar",
      "version": "Stellar Core v12.3.0rc2",
      "time": "2020-01-24 04:57:51",
      "link": "https://github.com/stellar/stellar-core/releases/tag/v12.3.0rc2"
    },
    {
      "chain": "stellar",
      "version": "Stellar Core v12.3.0rc1",
      "time": "2020-01-22 23:54:01",
      "link": "https://github.com/stellar/stellar-core/releases/tag/v12.3.0rc1"
    },
    {
      "chain": "bitcoin-cash",
      "version": "Bitcoin ABC v0.20.11",
      "time": "2020-01-21 21:46:10",
      "link": "https://github.com/Bitcoin-ABC/bitcoin-abc/releases/tag/v0.20.11"
    },
    {
      "chain": "ethereum",
      "version": "Geth v1.9.10",
      "time": "2020-01-20 10:36:41",
      "link": "https://github.com/ethereum/go-ethereum/releases/tag/v1.9.10"
    },
    ...
  ],
  "context": {
    "code": 200,
    "latest_update": "2021-03-12 10:36:16",
    "supported_chains": {
      "bitcoin": "Bitcoin Core",
      "bitcoin-abc": "Bitcoin ABC",
      "bitcoin-cash": "Bitcoin Cash Node",
      "ethereum": "Geth",
      "litecoin": "Litecoin Core",
      "bitcoin-sv": "Bitcoin SV",
      "dogecoin": "Dogecoin Core",
      "dash": "Dash Core",
      "ripple": "rippled",
      "groestlcoin": "Groestlcoin Core",
      "stellar": "Stellar Core",
      "monero": "Monero",
      "cardano": "Cardano Node",
      "zcash": "Zcash",
      "mixin": "Mixin",
      "eos": "EOSIO"
    },
    ...
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/tools/release-monitor
Halvening countdownWhile {:chain}/stats endpoints already include info on various countdowns (i.e. to some hard forks), this is a separate endpoint to track halving events in UTXO coins.

Endpoint:

https://api.blockchair.com/tools/halvening
Output:

data contains an array of next halvening event data for all chains we support. Each element is an array with the following elements which are self-describing.

context has a special array:

supported_chains — array of chains monitored
Example requests:

https://api.blockchair.com/tools/halvening
Example output:

https://api.blockchair.com/tools/halvening:

{
  "data": {
    "bitcoin": {
      "current_block": 616264,
      "current_reward": 1250000000,
      "halvening_block": 630000,
      "halvening_reward": 625000000,
      "halvening_time_approximate": "2020-05-12 01:29:34",
      "seconds_left_approximate": 8241000,
      "blocks_left": 13735
    },
    "bitcoin-cash": {
      "current_block": 621124,
      "current_reward": 1250000000,
      "halvening_block": 630000,
      "halvening_reward": 625000000,
      "halvening_time_approximate": "2020-04-08 07:29:34",
      "seconds_left_approximate": 5325000,
      "blocks_left": 8875
    },
    "bitcoin-sv": {
      "current_block": 620900,
      "current_reward": 1250000000,
      "halvening_block": 630000,
      "halvening_reward": 625000000,
      "halvening_time_approximate": "2020-04-09 20:49:34",
      "seconds_left_approximate": 5459400,
      "blocks_left": 9099
    }
  },
  "context": {
    "code": 200,
    "supported_chains": [
      "bitcoin",
      "bitcoin-cash",
      "bitcoin-sv"
    ],
    ...
    }
  }
}


Request cost formula:

Always 1.

Explore visualization on our front-end:

https://blockchair.com/tools/halving-countdown
Premium API endpointsPremium API usage statsThis is a special endpoint for Premium API users showing some stats on your API key usage.

Endpoint:

https://api.blockchair.com/premium/stats?key={:api_key}
Where:

{:api_key} is your secret API key
Output:

An array with stats:

valid_until — timestamp when the key expires; after that point the key will be invalid
max_requests_per_day or max_requests_in_parallel (depending on the API plan) — your limit on the number of requests
requests_today — number of requests you made today
Please be advised that

requests_today shows not the number of HTTPS requests you made to the API, but the total number of used "request points" (as some requests "cost" more than 1)
The request counter is reset daily at 00:00 UTC
Example request:

https://api.blockchair.com/premium/stats?key=myfirstpasswordwas4321andifeltsmartaboutit
Example output:

https://api.blockchair.com/premium/stats?key=myfirstpasswordwas4321andifeltsmartaboutit:

{
  "data": {
    "valid_until": "2020-01-01 00:00:00",
    "max_requests_per_day": 100000,
    "requests_today": 50000
  },
  "context": {
   ...
  }
}


Request cost formula:

Always 0. This request is free to use.

Privacy-o-meterIntroductionWhile Bitcoin is considered to be a privacy-oriented system, the blockchain is open to analyze by anyone, and there are numerous transaction tracing tools like Chainalysis, Coinfirm, Elliptic, CipherTrace, and Crystal. They're all not free, and Bitcoin users rarely have a chance to see how deep the rabbit hole goes. We start with a simple transaction scoring tool, and will soon expand this even further. We'll provide this service for free as we hope it'd help Bitcoin users to take some of their privacy back.

Transaction tracing is quite an easy task on the Bitcoin blockchain due to the following reasons:

Most users aren't concerned enough about their privacy and make rookie mistakes like sending round BTC amounts
Wallet software developers mostly don't care about user privacy. Taking the previous example in context, there are no warnings if user tries to send a round amount.
There are multiple wallets with different transaction processing rules making it possible to figure out what software type given user uses
Bitcoin blockchain is congested due to refusal to properly scale — that makes using mixers very expensive and cumbersome
While there are multiple protocols allowing more secure ways to transact (like shielded transactions on Zcash), these are not implemented in Bitcoin out of fears of changing the protocol
Bitcoin has multiple standard script types, their number has been recently increased with the activation of SegWit, and will increase further with new constructs built on top of SegWit
Here's a good overview of some basic heuristics: https://en.bitcoin.it/wiki/Privacy — we use most of them and introduce many new ones. The full list of heuristics we're using is available below.

At the moment, Privacy-o-meter is available for Bitcoin only, but we'll soon expand it to other UTXO-based coins, and then to all the others we support.

A couple of examples of transactions with bad and good privacy scores

Take this transaction as an example: https://blockchair.com/bitcoin/transaction/116bd19a3ec5f210ce72043115a4d5d3ef08f7556829c4feac8d89de3195ea4e

It has 2 inputs and 2 outputs:

Input addressesInput valuesOutput valuesOutput addressesbc1qj9p0huddhg5pzccur…0.96350000 BTC⟾1.00000000 BTC3EgAFC6FKojYUu53…bc1qrpfxyvdc3fqmyux54…281.65022105 BTC⟾281.61332105 BTCbc1qva7utdxd6easlj…
And also the following characteristics:

Uses SegWit: yes
Lock time: 0
Version: 1
An analyst will be able to gather lots of metadata looking at this transaction:

First output has a round amount of 1 bitcoin
First output has a P2SH address type while both inputs and the second output are P2WSH
Given (1) and (2) it can be assumed that 3EgAFC6FKojYUu53… is the recipient, and bc1qva7utdxd6easlj… is the change address. Thus we can say that bc1qj9p0huddhg5pzccur…, bc1qrpfxyvdc3fqmyux54…, and bc1qva7utdxd6easlj… can be clusterized as belonging to one entity
There's a discrepancy: if the sender wanted to send just 1 bitcoin, there's no need for the first output to be in the transaction, the second would be more than sufficient. That shows that the sender is probably using a non-standard wallet software
The transaction's lock time value is 0 and the sender uses SegWit-copmatible software that generates version 1 transactions. That and (4) can be used to single out the sender's wallet software
Our system gives this transaction the score of 0 as it's too clear which output is the recipient and which is the change.

One important point: it's not probable, but still possible that this partiular transaction's sender tries to confuse forensics software and all the conclusions are incorrect. So, basically, if you're trying to increase your privacy level knowing how to do that, and getting the 0 score, you're probably doing that right.

Let's take another transaction to show some contrast: https://blockchair.com/bitcoin/transaction/24a517dd2ffbb3a290eeee75d6dea2c62df7ebcd6f898b703b70dc031baa8a18

It has 1 input and 2 outputs:

Input addressesInput valuesOutput valuesOutput addresses12CBjcNtRU7c795neLC…0.01006987 BTC⟾0.00344481 BTC199eZE5j4shSU7D9…0.00640487 BTC1CGL5micNcJbMaV…
This is a relatively rare example of a transaction getting a 100 score. It's not possible to distinguish the recipient from the change address just by analyzing this transaction.

Heuristics we use:

Heuristic keyHeuristic nameDescription and notesAffects clusterization?Example transactionAPI exampleMost common heuristics♠♠♠♠♠inputsCo-spendingUnless it's a CoinJoin transaction it's safe to assume that all input addresses belong to one person+👉👉script_typesScript typesIf all inputs has the same type, and exactly one of the outputs is not of the same type — this output can be considered as the recipient+👉👉p2sh_typesP2SH multisig typesIf all inputs are m of n multisig P2SH, and all outputs are multisig P2SH, but exactly one of the outputs has another m of n structure — this output can be considered as the recipient+👉👉p2wsh_typesP2WSH multisig typesIf all inputs are m of n multisig P2WSH, and all outputs are multisig P2WSH, but exactly one of the outputs has another m of n structure — this output can be considered as the recipient+👉👉round_valueRound valueIf one of the outputs has a round value (like exactly 1 BTC) — this output can be considered as the recipient+👉👉recipient_by_valueRecipient by bigger valueIf the recipient is the smaller output, there's no point in having some of the inputs+👉👉t1-2_bigger_value_25Output value x25One of the two outputs is 25 times bigger than the other meaning that it's potentially the change output+👉👉t1-2_bigger_value_100Output value x100- 〃 - 〃 - 100 times bigger+👉👉t1-2_bigger_value_250Output value x250- 〃 - 〃 - 250 times bigger+👉👉t1-2_bigger_value_1000Output value x1000- 〃 - 〃 - 1000 times bigger+👉👉coinbase_knownKnown minerThe recipient is the known miner👉👉coinbase_unknownUnknown minerThe recipient is an unknown miner👉👉coinjoinCoinjoinThis is a CoinJoin transaction. This cancels all other heuristics.+👉👉round_feeRound feeThe transaction has a round fee amount, the sender is probably using some specific software👉👉rare_fingerprintRare fingerprintThis transaction has quite unique technical characteristics👉👉Specific order of inputs and outputs♠♠♠♠♠asc_output_valuesAscending output valuesFor transaction with more than 5 outputs — they are ordered by value ascending — that may due to some specific software usage👉👉desc_output_valuesDescending output valuesSame, but in descending order. Generally, all descending patterns are more rare than ascending.👉👉asc_output_addressesAscending output addressesSame, but this time it's addresses sorted in alphabetical order👉👉desc_output_addressesDescending output addresses- 〃 - 〃 - (Very rare)👉👉asc_input_valuesAscending input values- 〃 - 〃 - Same, but for inputs👉👉desc_input_valuesDescending input values- 〃 - 〃 -👉👉asc_input_addressesAscending input addresses- 〃 - 〃 - (Very rare)👉👉desc_input_addressesDescending input addresses- 〃 - 〃 - (Very rare)👉👉asc_input_timestampsAscending input timestamps- 〃 - 〃 - Same, inputs are sorted by age👉👉desc_input_timestampsDescending input timestamps- 〃 - 〃 -👉👉asc_output_values_except_firstAscending output values except firstAll outputs are sorted by value ascending except for the first one, that may mean that the first output is the change address. But this is a quite vague heuristic, thus we don't use it in clusterization.👉👉asc_output_values_except_lastAscending output values except last- 〃 - 〃 -👉👉asc_output_addresses_except_firstAscending output addresses except first- 〃 - 〃 -👉👉asc_output_addresses_except_lastAscending output addresses except last- 〃 - 〃 -👉👉desc_output_values_except_firstDescending output values except first- 〃 - 〃 -👉👉desc_output_values_except_lastDescending output values except last- 〃 - 〃 -👉👉desc_output_addresses_except_lastDescending output addresses except last- 〃 - 〃 -👉👉desc_output_addresses_except_firstDescending output addresses except first- 〃 - 〃 -👉👉Reuse of the same address♠♠♠♠♠simple_reuse_1-2Address reuseThe sender uses the same address for receiving and for change👉👉simple_reuse_N-2Address reuseThe sender uses the same address for receiving and for change👉👉simple_reuse_1-NAddress reuseThe sender (probably an exchange) uses the same address for receiving and for change👉👉simple_reuse_same_address_in_inputsSame address in inputsThere's multiple occurences of the same address in inputs👉👉Sweeps♠♠♠♠♠sweep_1-1Sweep (1-1)The sender uses the "send everything" option to either pay someone (e.g. an exchange) or just moving the funds to another wallet (1 input)👉👉sweep_1-1_to_another_typeSweep to another type (1-1)- 〃 - 〃 - Same, but the outputs is of another type. The sender is either paying someone or moving the funds to a new wallet type (1 input)👉👉sweep_N-1Sweep- 〃 - 〃 - Same, but with multiple inputs👉👉sweep_N-1_to_another_typeSweep to another type- 〃 - 〃 - Same, but to another address type👉👉Discrepancies♠♠♠♠♠discrepancy_unnecessary_inputsDiscrepancy: unnecessary inputThe smaller input is unnecessary, as whichever of the outputs is the recipient, there's no need to include that input👉👉discrepancy_input_typesDiscrepancy: various input typesThe inputs are of different types. That means the sender is probably using the software allowing to create the same address type for the change as the recipient has, trying to circumvent the script_types heuristic👉👉discrepancy_script_types_and_round_valueDiscrepancy between Script types and Round valuescript_types and round_value heuristics yield different results+👉👉discrepancy_script_types_and_recipient_by_valueDiscrepancy between Script types and Recipient by valuescript_types and recipient by value heuristics yield different results+👉👉discrepancy_round_value_and_recipient_by_valueDiscrepancy between Round value and Recipient by valueround_value and recipient by value heuristics yield different results+👉👉discrepancy_p2sh_various_input_typesDiscrepancy: various P2SH input typesThe P2SH input types are different (e.g. one is 2-of-2 multisig, and the other is 2-of-3). Very rare.👉👉discrepancy_p2wsh_various_input_typesDiscrepancy: various P2WSH input types- 〃 - 〃 - Same, but for P2WSHN/AN/Adiscrepancy_same_address_in_outputsDiscrepancy: output address duplicatesThere are outputs with the same address — that makes no economical sense👉👉discrepancy_no_output_of_the_same_type_as_inputsDiscrepancy: no output of the same type as inputsProbably the sender uses software generating the same change address type as the recipient address has👉👉
Possible transaction types are:

Type codeDescriptionCBCoinbase transactionN1Transaction with just 1 output (either a sweep to another address by the same owner, or a transfer using a "send everything I have" option)N2Transaction with 2 outputs — most common in wallets — where one of the outputs is the recipient, and the other one is the change addressNNTransaction with more than 2 outputs — most common in exchanges and services that use payout batching
Transaction fingerprint:

PropertyPossible valuesDescriptionlock_time0, rare, block_id, big_value, timestampDepending on wallet software, lock_time property can either be 0, or a block height, or some timestamp. In rare cases it's some other value (rare or big_value)version1, 2, unknownVersions 1 and 2 are distributed almost equally these dayshas_witnesstrue, falseSegWit usage is a distinctive property — there are wallets and exchanges who are known to be using or not using SegWit
News listEndpoint:

https://api.blockchair.com/news?{:query}
Where:

{:query} is the query against the table (how to build a query)
This endpoint acts like an Infinitable meaning you can perform SQL-like queries: filter sort, and aggregate news articles.

data contains an array of database rows. Each row is in the following format:

ColumnTypeDescriptionQ?S?A?C?titlestringHeadline~sourcestring (domain name)Source (domain name)=languagestring [a-z]{2}Supported languages: ar, de, en, es, fa, fr, it, jp, ko, nl, pt, ru, tr, zh=linkstring (URL)URL to the article on the source websitelink_ampstring (URL)URL to the AMP (Accelerated Mobile Pages) article on the source website or false if AMP is not available. null if it hasn't been processed yet (usually it takes under a few seconds)link_iframablebooleantrue if the page could be put into an iframe (false otherwise). Note that there's no guarantee this value is valid as the source can change its policy after the page was crawled! null if it hasn't been processed yet (usually it takes under a few seconds)timeYYYY-MM-DD HH:ii:ssTimestamp⌘+tagsstring (comma-separated list)Comma-separated list of tags by the publisherdescriptionstringShort description~hash[0-9a-f]{10}Internal Blockchair hash (unique id)=filestringInternal Blockchair article namepermalinkstring (URL)URL to the article on Blockchair.com
Default sorting is by time descending.

Some examples:

The latest crypto news in English: https://api.blockchair.com/news?q=language(en)
Find news about Blockchair: https://api.blockchair.com/news?q=title(~blockchair),or,description(~blockchair)
Find news about Blockchair in English: https://api.blockchair.com/news?q=language(en),title(~blockchair),or,description(~blockchair)
Example output:

https://api.blockchair.com/news?q=language(en):

{
  "data": [
    {
      "title": "Ten Days Remain Where Buying Bitcoin Was Unprofitable",
      "source": "bitcoinist.com",
      "language": "en",
      "link": "https://bitcoinist.com/ten-days-remain-where-buying-bitcoin-was-unprofitable/",
      "link_amp": false,
      "link_iframable": true,
      "time": "2020-11-17 15:00:31",
      "tags": "Bitcoin, bitcoin, btc, btcusd, btcusdc, BTCUSDT, crypto, XBT, xbtusd",
      "description": "Believe it or not, Bitcoin price is now trading at over $17,000, even though earlier this year it crashed to under $4,000. From low to high, the leading cryptocurrency by market cap rallied over 350%. With prices now trading around highs from late 2017 and early 2018 when Bitcoin had set its peak, it has left only ten days remaining where buying BTC was unprofitable. Bitcoin Faces $17,200 Where Bear Market Began, Final Resistance Before [&#8230;]",
      "hash": "cbe09bd89c",
      "file": "ten-days-remain-where-buying-bitcoin-was-unprofitable",
      "permalink": "https://blockchair.com/en/news/ten-days-remain-where-buying-bitcoin-was-unprofitable--cbe09bd89c"
    },
    ...
  ],
  "context": {
    "code": 200,
    "limit": 10,
    "offset": 0,
    "rows": 10,
    "request_cost": 1,
    ...
  }
}


Request cost formula:

1 + infinitable costs may apply.

Explore how this functionality works on Blockchair: https://blockchair.com/news (try to switch languages as well!)

Want your media outlet to be included? Please contact us at info@blockchair.com

News aggregatorNot only Blockchair API provides you with blockchain data, but also with some crypto news to integrate into your app. We're aggregating data from more than 60 news outlets in 14 languages, populating over 35,000 headlines into our database a month.

SupportE-mail: info@blockchair.com
Github issue tracker: https://github.com/Blockchair/Blockchair.Support/issues
Explorers
BitcoinEthereumCardanoDogecoinRipplePolkadotBitcoin CashLitecoinSolana newZcashMoneroDashStellarBitcoin SVEOSKusamaeCashMixinGroestlcoinTether USDUSD CoinBinance USD
Data
APIDatabase dumpsFull node dumpsCharts
Services
Blockchair NewsBlockchair DonutBlockchair Awesome
Products
Transaction receiptsWallet statementsPortfolio trackerBroadcast transactionPrivacy-o-meterNode explorersRelease monitorHalving countdownCompare blockchainsGet Blockchair extension
Useful links
About Blockchair
FAQ
Changelog
Careers
Terms of service
Privacy policy
Blockchair Onion v3 URL 
Blockchair Onion v2 URL 
For partners
PartnershipsAdvertise with usBrand kit
For developers
Submit a bug or requestBug bounty programAPI documentationStatus
Social
TwitterTelegramGitHubLinkedIn
Languages
EnglishEspañolFrançaisItalianoNederlandsPortuguêsРусский中文فارسیВahasa IndonesiaTürkçe日本語한국어
© 2021 Blockchair1.010-2957-g49c94973 Tue 28 Dec 2021 09:31:25 AM UTC
