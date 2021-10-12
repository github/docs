---
Main logo
Search for transactions, addresses, blocks and embedded text data...


Explorers
API
API documentation
API documentation
Introduction
Supported blockchains and second layers
Quick endpoint reference
Basic API request
Basic API response
API rate limits, API keys, and Premium API
API versioning and changelog
General stats endpoints
Retrieve overall information about blockchains and tokens
Dashboard endpoints
Retrieve information about various entities in a neat format from our databases
Raw data endpoints
Retrieve raw information about various entities directly from our full nodes
Infinitable endpoints
SQL-like queries: filter, sort, and aggregate blockchain data
Misc endpoints
Privacy-o-meter
News aggregator
Support
Show all
Blockchair API
Blockchair API
Blockchair API provides developers, researchers, and businesses with access to data contained in 16 blockchains
Explore pricing plans
Introduction
Blockchair API provides developers with access to data contained in 18 different blockchains. Unlike other APIs, Blockchair also supports numerous analytical queries like filtering, sorting, and aggregating blockchain data.

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

Supported blockchains and second layers
As of today, our API supports 19 blockchains (17 mainnets and 2 testnets) divided into 9 groups:

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

Blokchain	Group	API path prefix	Support status
Bitcoin	Bitcoin-like	https://api.blockchair.com/bitcoin	Full support
Bitcoin Cash	Bitcoin-like	https://api.blockchair.com/bitcoin-cash	Full support
Ethereum	Ethereum-like	https://api.blockchair.com/ethereum	Full support
Litecoin	Bitcoin-like	https://api.blockchair.com/litecoin	Full support
Bitcoin SV	Bitcoin-like	https://api.blockchair.com/bitcoin-sv	Full support
Dogecoin	Bitcoin-like	https://api.blockchair.com/dogecoin	Full support
Dash	Bitcoin-like	https://api.blockchair.com/dash	Full support
Ripple	Ripple-like	https://api.blockchair.com/ripple	Alpha mode, possible compatibility-breaking changes
Groestlcoin	Bitcoin-like	https://api.blockchair.com/groestlcoin	Full support at least till January 1st, 2021
Stellar	Stellar-like	https://api.blockchair.com/stellar	Alpha mode, possible compatibility-breaking changes
Monero	Monero-like	https://api.blockchair.com/monero	Alpha mode, possible compatibility-breaking changes
Cardano	Cardano-like	https://api.blockchair.com/cardano	Alpha mode, possible compatibility-breaking changes
Zcash	Bitcoin-like	https://api.blockchair.com/zcash	Full support
Mixin	Mixin-like	https://api.blockchair.com/mixin	Full support at least till April 24th, 2021
Tezos	Tezos-like	https://api.blockchair.com/tezos	Alpha mode, possible compatibility-breaking changes
EOS	EOS-like	https://api.blockchair.com/eos	Alpha mode, possible compatibility-breaking changes
eCash	Bitcoin-like	https://api.blockchair.com/ecash	Beta mode, possible instability. Also known as Bitcoin Cash ABC and Bitcoin ABC.
Please read our statement on the November 15th, 2020 Bitcoin Cash split: https://twitter.com/Blockchair/status/1324424632179576832. It is expected that Bitcoin ABC's hashrate will be very low so 51% attacks are possible. We'll be running Bitcoin ABC in beta mode and we don't guarantee neither its stability, nor that we'll run it if the chain won't be used by businesses. Once the situation becomes more stable we'll update the documentation. At the moment, other parts of the documentation don't reflect Bitcoin ABC support, so please assume that for every bitcoin-cash endpoint there's a bitcoin-abc equivalent except for https://api.blockchair.com/bitcoin-cash/nodes.

There are also following testnets supported which are technically considered as separate blockchains:

Blokchain	Group	API path prefix	Support status
Bitcoin Testnet	Bitcoin-like	https://api.blockchair.com/bitcoin/testnet	Full support
Ethereum Goerli Testnet	Ethereum-like	https://api.blockchair.com/ethereum/testnet	Development mode, no guaranteed stability
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

Layer 2	Group	Parent blockchain	API path prefix	Support status
Omni Layer	Omni-like	Bitcoin	https://api.blockchair.com/bitcoin/omni	Alpha support
ERC-20	ERC-20-like	Ethereum	https://api.blockchair.com/ethereum/erc-20	Beta support
We also plan to bring ERC-721 support in the future.

Ethereum Goerli Testnet also supports ERC-20's.

Wormhole support was dropped on January 1st, 2020 with a 3-month notice as it's not used by anyone anymore.

Quick endpoint reference
This is the full list of available API endpoints.

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
Endpoint path	Docs	Base request cost	Status
General stats	—	—	—
https://api.blockchair.com/stats	👉	1	Stable
https://api.blockchair.com/{:btc_chain}/stats	👉	1	Stable
https://api.blockchair.com/{:eth_chain}/stats	👉	1	Stable
https://api.blockchair.com/{:xrp_chain}/stats	👉	1	Stable
https://api.blockchair.com/{:xlm_chain}/stats	👉	1	Stable
https://api.blockchair.com/{:xmr_chain}/stats	👉	1	Stable
https://api.blockchair.com/{:ada_chain}/stats	👉	1	Stable
https://api.blockchair.com/{:xin_chain}/stats	👉	1	Stable
https://api.blockchair.com/{:xtz_chain}/stats	👉	1	Stable
https://api.blockchair.com/{:eos_chain}/stats	👉	1	Stable
https://api.blockchair.com/cross-chain/{:xchain_token}/stats	👉	1	Alpha
Block-related information	—	—	—
https://api.blockchair.com/{:btc_chain}/dashboards/block/{:height}₀	👉	1	Stable
https://api.blockchair.com/{:btc_chain}/dashboards/block/{:hash}₀	👉	1	Stable
https://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:height}₀,...,{:height}ᵩ	👉	1 + 0.1*c	Stable
https://api.blockchair.com/{:btc_chain}/dashboards/blocks/{:hash}₀,...,{:hash}ᵩ	👉	1 + 0.1*c	Stable
https://api.blockchair.com/{:btc_chain}/raw/block/{:height}₀	👉	1	Unstable
https://api.blockchair.com/{:btc_chain}/raw/block/{:hash}₀	👉	1	Unstable
https://api.blockchair.com/{:btc_chain}/blocks?{:query}	👉	2	Stable
https://api.blockchair.com/{:eth_chain}/dashboards/block/{:height}₀	👉	1	Stable
https://api.blockchair.com/{:eth_chain}/dashboards/block/{:hash}₀	👉	1	Stable
https://api.blockchair.com/{:eth_chain}/dashboards/blocks/{:height}₀,...,{:height}ᵩ	👉	1 + 0.1*c	Stable
https://api.blockchair.com/{:eth_chain}/dashboards/blocks/{:hash}₀,...,{:hash}ᵩ	👉	1 + 0.1*c	Stable
https://api.blockchair.com/{:eth_chain}/raw/block/{:height}₀	👉	1	Unstable
https://api.blockchair.com/{:eth_chain}/raw/block/{:hash}₀	👉	1	Unstable
https://api.blockchair.com/{:eth_chain}/blocks?{:query}	👉	2	Stable
https://api.blockchair.com/{:xrp_chain}/raw/ledger/{:height}₀	👉	1	Alpha
https://api.blockchair.com/{:xrp_chain}/raw/ledger/{:hash}₀	👉	1	Alpha
https://api.blockchair.com/{:xlm_chain}/raw/ledger/{:height}₀	👉	1	Alpha
https://api.blockchair.com/{:xmr_chain}/raw/block/{:height}₀	👉	1	Alpha
https://api.blockchair.com/{:xmr_chain}/raw/block/{:hash}₀	👉	1	Alpha
https://api.blockchair.com/{:ada_chain}/raw/block/{:height}₀	👉	1	Alpha
https://api.blockchair.com/{:ada_chain}/raw/block/{:hash}₀	👉	1	Alpha
https://api.blockchair.com/{:xin_chain}/raw/snapshot/{:height}₀	👉	1	Alpha
https://api.blockchair.com/{:xin_chain}/raw/snapshot/{:hash}₀	👉	1	Alpha
https://api.blockchair.com/{:xin_chain}/raw/snapshots?{:query}	👉	1	Alpha
https://api.blockchair.com/{:xtz_chain}/raw/block/{:height}₀	👉	1	Alpha
https://api.blockchair.com/{:xtz_chain}/raw/block/{:hash}₀	👉	1	Alpha
https://api.blockchair.com/{:xtz_chain}/raw/blocks?{:query}	👉	1	Alpha
https://api.blockchair.com/{:eos_chain}/raw/block/{:height}₀	👉	1	Alpha
Transaction-related information and actions	—	—	—
https://api.blockchair.com/{:btc_chain}/dashboards/transaction/{:hash}₀	👉	1	Stable
https://api.blockchair.com/{:btc_chain}/dashboards/transactions/{:hash}₀,...,{:hash}ᵩ	👉	1 + 0.1*c	Stable
https://api.blockchair.com/{:btc_chain}/raw/transaction/{:hash}₀	👉	1	Unstable
https://api.blockchair.com/{:btc_chain}/push/transaction (POST)	👉	1	Stable
https://api.blockchair.com/{:btc_chain}/transactions?{:query}	👉	5	Stable
https://api.blockchair.com/{:btc_chain}/mempool/transactions?{:query}	👉	2	Stable
https://api.blockchair.com/{:eth_chain}/dashboards/transaction/{:hash}₀	👉	1	Stable
https://api.blockchair.com/{:eth_chain}/dashboards/transactions/{:hash}₀,...,{:hash}ᵩ	👉	1 + 0.1*c	Stable
https://api.blockchair.com/{:eth_chain}/raw/transaction/{:hash}₀	👉	1	Unstable
https://api.blockchair.com/{:eth_chain}/push/transaction (POST)	👉	1	Stable
https://api.blockchair.com/{:eth_chain}/transactions?{:query}	👉	5	Stable
https://api.blockchair.com/{:eth_chain}/mempool/transactions?{:query}	👉	2	Stable
https://api.blockchair.com/{:xrp_chain}/raw/transaction/{:hash}₀	👉	1	Alpha
https://api.blockchair.com/{:xlm_chain}/raw/transaction/{:hash}₀	👉	1	Alpha
https://api.blockchair.com/{:xmr_chain}/raw/transaction/{:hash}₀	👉	1	Alpha
https://api.blockchair.com/{:ada_chain}/raw/transaction/{:hash}₀	👉	1	Alpha
https://api.blockchair.com/{:xin_chain}/raw/transaction/{:hash}₀	👉	1	Alpha
https://api.blockchair.com/{:xin_chain}/push/transaction (POST)	👉	1	Stable
https://api.blockchair.com/{:xtz_chain}/raw/operation/{:hash}₀	👉	1	Alpha
https://api.blockchair.com/{:eos_chain}/raw/transaction/{:hash}₀	👉	1	Alpha
https://api.blockchair.com/{:eos_chain}/raw/transaction/({:block_height},{:hash})	👉	1	Alpha
Address-related information	—	—	—
https://api.blockchair.com/{:btc_chain}/dashboards/address/{:address}₀	👉	1	Stable
https://api.blockchair.com/{:btc_chain}/dashboards/addresses/{:address}₀,...,{:address}ᵩ	👉	1 + 0.1*c	Stable
https://api.blockchair.com/{:btc_chain}/addresses/balances (POST, mass balance check)	👉	1 + 0.001*c	Stable
https://api.blockchair.com/{:btc_chain}/dashboards/xpub/{:extended_key}	👉	1 + 0.1*d	Beta
https://api.blockchair.com/{:btc_chain}/addresses?{:query}	👉	2	Stable
https://api.blockchair.com/{:eth_chain}/dashboards/address/{:address}₀	👉	1	Stable
https://api.blockchair.com/{:eth_chain}/addresses?{:query}	👉	2	Stable
https://api.blockchair.com/{:xrp_chain}/raw/account/{:address}₀	👉	1	Alpha
https://api.blockchair.com/{:xlm_chain}/raw/account/{:address}₀	👉	1	Alpha
https://api.blockchair.com/{:ada_chain}/raw/address/{:address}₀	👉	1	Alpha
https://api.blockchair.com/{:xtz_chain}/raw/account/{:address}₀	👉	1	Alpha
https://api.blockchair.com/{:eos_chain}/raw/account/{:address}₀	👉	1	Alpha
https://api.blockchair.com/multi/dashboards/addresses/{:address}₀,...,{:address}ᵩ	👉	Complex	Alpha
Special entities	—	—	—
https://api.blockchair.com/{:btc_chain}/outputs?{:query}	👉	10	Beta
https://api.blockchair.com/{:btc_chain}/mempool/outputs?{:query}	👉	2	Beta
https://api.blockchair.com/{:eth_chain}/dashboards/uncle/{:hash}₀	👉	1	Stable
https://api.blockchair.com/{:eth_chain}/dashboards/uncles/{:hash}₀,...,{:hash}ᵩ	👉	1 + 0.1*c	Stable
https://api.blockchair.com/{:eth_chain}/uncles?{:query}	👉	2	Stable
https://api.blockchair.com/{:eth_chain}/calls?{:query}	👉	10	Stable
https://api.blockchair.com/{:xmr_chain}/outputs?{:query}	👉	1	Alpha
https://api.blockchair.com/zcash/raw/validate?paymentdisclosure=zpd:...	N/A	1	Alpha
https://api.blockchair.com/{:xin_chain}/raw/round/{:hash}	👉	1	Alpha
https://api.blockchair.com/{:xin_chain}/raw/round/({:node_hash},{:id})	👉	1	Alpha
https://api.blockchair.com/{:xin_chain}/raw/node/{:hash}	👉	1	Alpha
https://api.blockchair.com/{:xin_chain}/raw/graph	👉	1	Alpha
https://api.blockchair.com/{:xin_chain}/raw/mintings?{:query}	👉	1	Alpha
https://api.blockchair.com/{:xin_chain}/raw/nodes?{:query}	👉	1	Alpha
Special second layer protocol endpoints (Omni Layer and ERC-20 tokens)	—	—	—
https://api.blockchair.com/bitcoin/omni/stats	👉	1	Alpha
https://api.blockchair.com/bitcoin/omni/dashboards/property/{:prorerty_id}	👉	1	Alpha
https://api.blockchair.com/bitcoin/omni/properties	👉	10	Alpha
https://api.blockchair.com/ethereum/erc-20/{:token_address}/stats	👉	1	Beta
https://api.blockchair.com/ethereum/erc-20/{:token_address}/dashboards/address/{:address}	👉	1	Beta
https://api.blockchair.com/ethereum/erc-20/tokens?{:query}	👉	2	Beta
https://api.blockchair.com/ethereum/erc-20/transactions?{:query}	👉	5	Beta
https://api.blockchair.com/ethereum/erc-20/{:token_address}/utils/allowance?owner={:owner_address}&spender={:spender_address}	N/A	1	Alpha
State changes	—	—	—
https://api.blockchair.com/{:btc_chain}/state/changes/block/{:block_id}	👉	5	Stable
https://api.blockchair.com/{:btc_chain}/state/changes/mempool	👉	10	Stable
https://api.blockchair.com/{:eth_chain}/state/changes/block/{:block_id}	👉	5	Stable
Misc	—	—	—
https://api.blockchair.com/range	👉	1	Stable
https://api.blockchair.com/tools/releases	👉	1	Stable
https://api.blockchair.com/tools/halvening	👉	1	Stable
https://api.blockchair.com/news (News API)	👉	1	Stable
Network nodes	—	—	—
https://api.blockchair.com/nodes	👉	1	Stable
https://api.blockchair.com/{:btc_chain}/nodes	👉	1	Stable
Special Premium API endpoints	—	—	—
https://api.blockchair.com/premium/stats?key={:api_key}	👉	0	Stable
Please note there are some endpoints which aren't listed here (most of the times they have the https://api.blockchair.com/internal prefix), but used by our web interface — these endpoints aren't meant to be used by 3rd parties.

The base request cost is used only if there are no additional parameters included in the request, and the default limits on the number of results are used. For example, if you're requesting info on ERC-20 tokens while getting data on an Ethereum address using a special parameter or increasing the number of latest transactions for this address, you may be charged additional request points. c in formulas means "number of requested entities". d means "depth" (applied to xpub lookups). Detailed cost formulas are available in the corresponding documentation sections.

Basic API request
Requests to the API should be made through the HTTPS protocol by GET requests to the domain api.blockchair.com. Here's an example request URL: https://api.blockchair.com/bitcoin/blocks?a=sum(generation)

> curl 'https://api.blockchair.com/bitcoin/blocks?a=sum(generation)'
{"data":[{"sum(generation)":1800957104497237}],"context":{"code":200,"source":"A","time":0.007825851440429688,"limit":10000,"offset":null,"rows":1,"pre_rows":1,"total_rows":1,"state":600767,"cache":{"live":true,"duration":60,"since":"2019-10-23 21:33:00","until":"2019-10-23 21:34:00","time":null},"api":{"version":"2.0.38","last_major_update":"2019-07-19 18:07:19","next_major_update":null,"documentation":"https:\/\/github.com\/Blockchair\/Blockchair.Support\/blob\/master\/API.md","notice":"Beginning July 19th, 2019 all applications using Blockchair API on a constant basis should apply for an API key (mailto:info@blockchair.com)"}}}
Here are some considerations:

If you're building a web app, your users shouldn't make direct API requests from there. While we don't have any limitations in our CORS policy (API currently responds with a Access-Control-Allow-Origin: * header), that policy may be changed in the future without any warnings
Please don't use some random keys in your requests (e.g. ?random_key=random_value) as this can result in a 400 error (though we don't force this rule at the moment for most of our endpoints)
If you're using the API with an API key, you should keep it in secret. In order to build an app for public use using our API, you should build a proxy, so the requrst flow will look like the following: user → https://your-proxy/{:request_string} → https://api.blockchair.com/{:request_string}?key={:api_key} — that way you won't disclose the key to your users
The only exception to the "requests should be made using GET" rule is the Broadcasting transactions endpoint accepting POST requests
Basic API response
API returns JSON-encoded data. Typically, the response is an array consisting of two subarrays:

data — contains the data you requested

context — contains some metadata, e.g. a status code, query execution time, used options, etc. Here are some of it (note that not all endpoints return all of the keys listed here):

context.code — server response code (also included in HTTP headers), can return:
200 if the request succeeded
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
context.api — array of data on the status of the API:
context.api.version — version of API
context.api.last_major_update — timestamp of the last update, that somehow has broken backward compatibility for "stable" endpoints
context.api.next_major_update — timestamp of the next scheduled update, that can break compatibility, or null, if there are no updates scheduled
context.api.documentation — an URL to the latest version of documentation
context.api.notice — just a text notice which, for example, may describe upcoming changes (this is an optional field)
context.cache — array of info on whether the response comes from the cache or not
context.cache.live — false if the response comes from the cache, true otherwise
context.cache.until — cache expiry timestamp
context.request_cost — API request cost (1 for ordinary queries, more than 1 for complex requests, see the next section for details)
There are also some things which are the same across all endpoints:

All timestamps are in the UTC timezone, and have the following format: YYYY-MM-DD hh:ii:ss . If you require an ISO 8601 timestamp with the timezone, just replace the space with a T, and append Z to the timestamp (e.g. 2009-01-03 18:15:05 will then become 2009-01-03T18:15:05Z)
There are some endpoints allowing you to request data in formats other than JSON (e.g. TSV or CSV). In that case, the API returns plain output data in the desired format without metadata
Most of the responses are cached for some amount of time. Bypassing cache is allowed in some of our Premium API plans (see the next documentation section)
API rate limits, API keys, and Premium API
While we do allow to perform some amount of requests free of charge, generally our API is not free to use.

Here's our policy:

If you use our API occasionally for personal use or testing up to 1440 requests a day (1 request a minute in average) — a key is not required
Non-commercial and academic projects which require up to 1440 requests a day — a key is not required
Non-commercial and academic projects requiring more than 1440 requests a day should apply for a Premium API key, and are subject to a discount up to 50%
Non-commercial and academic projects requiring more than 1440 requests a day which are also Blockchair partners are subject to a discount up to 100%
Commercial projects should apply for a key to Premium API not depending on the required number of requests
Commercial projects which are also Blockchair partners (e.g. linking to Blockchair from the app's interface) are subject to a discount up to 10%
Up to 1440 requests a day	More than 1440 requests a day
Personal or testing	Key is not needed	Key is required
Non-commercial or academic	Key is not needed	Key is required, up to 100% discount
Commercial	Key is required	Key is required, up to 10% discount
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

API versioning and changelog
As a reminder, there's the context.api array in every API response which contains the following data:

context.api.version — version of API
context.api.last_major_update — timestamp of the last update, that somehow has broken backward compatibility for "stable" endpoints
context.api.next_major_update — timestamp of the next scheduled update, that can break compatibility, or null, if there are no updates scheduled
context.api.documentation — an URL to the latest version of documentation
context.api.notice — just a text notice which, for example, may describe upcoming changes (this is an optional field)
When we change something, or add new functions, we bump the API version number. Generally, we try as hard as possible not to bring any compatibility-breaking changes in API updates, but sometimes this is needed as some blockchains change their features themselves, we're fixing various bugs, etc. This doesn't apply, however, to changes to endpoints which are either marked as alpha- or beta-stage functions, or unstable in nature (e.g. all raw endpoints where the API returns data directly from our nodes, and the response may change as we upgrade the nodes). These marks are reflected in the Quick endpoint reference.

The changelog is available here: https://github.com/Blockchair/Blockchair.Support/blob/master/API.md

It makes sense to check if context.api.version has increased and/or just whether context.api.next_major_update is not null or larger than the latest update date known to you. If that's the case — you can send yourself a notification and review the changelog to make your application compatible with the changes starting from context.api.next_major_update.

Blockchair logo
About Blockchair
FAQ
Careers
Terms of service
Privacy policy
TwitterTelegramGitHubLinkedIn
© 2021 Blockchair
No 3d party trackers
Works without javascript
1.010-1743-ga7de702c Mon 11 Oct 2021 11:40:06 AM UTC: GitHub Community Guidelines
redirect_from:
  - /community-guidelines/
  - /articles/github-community-guidelines
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
---

Millions of developers host millions of projects on GitHub — both open and closed source — and we're honored to play a part in enabling collaboration across the community every day. Together, we all have an exciting opportunity and responsibility to make this a community we can be proud of.

GitHub users worldwide bring wildly different perspectives, ideas, and experiences, and range from people who created their first "Hello World" project last week to the most well-known software developers in the world. We are committed to making GitHub a welcoming environment for all the different voices and perspectives in our community, while maintaining a space where people are free to express themselves.

We rely on our community members to communicate expectations, [moderate](#what-if-something-or-someone-offends-you) their projects, and {% data variables.contact.report_abuse %} or {% data variables.contact.report_content %}. By outlining what we expect to see within our community, we hope to help you understand how best to collaborate on GitHub, and what type of actions or content may violate our [Terms of Service](#legal-notices), which include our [Acceptable Use Policies](/github/site-policy/github-acceptable-use-policies). We will investigate any abuse reports and may moderate public content on our site that we determine to be in violation of our Terms of Service.

## Building a strong community

The primary purpose of the GitHub community is to collaborate on software projects.
We want people to work better together. Although we maintain the site, this is a community we build *together*, and we need your help to make it the best it can be.

* **Be welcoming and open-minded** - Other collaborators may not have the same experience level or background as you, but that doesn't mean they don't have good ideas to contribute. We encourage you to be welcoming to new collaborators and those just getting started.

* **Respect each other.**  Nothing sabotages healthy conversation like rudeness. Be civil and professional, and don’t post anything that a reasonable person would consider offensive, abusive, or hate speech. Don’t harass or grief anyone. Treat each other with dignity and consideration in all interactions.

  You may wish to respond to something by disagreeing with it. That’s fine. But remember to criticize ideas, not people. Avoid name-calling, ad hominem attacks, responding to a post’s tone instead of its actual content, and knee-jerk contradiction. Instead, provide reasoned counter-arguments that improve the conversation.

* **Communicate with empathy** - Disagreements or differences of opinion are a fact of life. Being part of a community means interacting with people from a variety of backgrounds and perspectives, many of which may not be your own. If you disagree with someone, try to understand and share their feelings before you address them. This will promote a respectful and friendly atmosphere where people feel comfortable asking questions, participating in discussions, and making contributions.

* **Be clear and stay on topic** - People use GitHub to get work done and to be more productive. Off-topic comments are a distraction (sometimes welcome, but usually not) from getting work done and being productive. Staying on topic helps produce positive and productive discussions.

   Additionally, communicating with strangers on the Internet can be awkward. It's hard to convey or read tone, and sarcasm is frequently misunderstood. Try to use clear language, and think about how it will be received by the other person.

## What if something or someone offends you?

We rely on the community to let us know when an issue needs to be addressed. We do not actively monitor the site for offensive content. If you run into something or someone on the site that you find objectionable, here are some tools GitHub provides to help you take action immediately:

* **Communicate expectations** - If you participate in a community that has not set their own, community-specific guidelines, encourage them to do so either in the README or [CONTRIBUTING file](/articles/setting-guidelines-for-repository-contributors/), or in [a dedicated code of conduct](/articles/adding-a-code-of-conduct-to-your-project/), by submitting a pull request.

* **Moderate Comments** - If you have [write-access privileges](/articles/repository-permission-levels-for-an-organization/) for a repository, you can edit, delete, or hide anyone's comments on commits, pull requests, and issues. Anyone with read access to a repository can view a comment's edit history. Comment authors and people with write access to a repository can delete sensitive information from a comment's edit history. For more information, see "[Tracking changes in a comment](/articles/tracking-changes-in-a-comment)" and "[Managing disruptive comments](/articles/managing-disruptive-comments)."

* **Lock Conversations**  - If a discussion in an issue or pull request gets out of control, you can [lock the conversation](/articles/locking-conversations/).

* **Block Users**  - If you encounter a user who continues to demonstrate poor behavior, you can [block the user from your personal account](/articles/blocking-a-user-from-your-personal-account/) or [block the user from your organization](/articles/blocking-a-user-from-your-organization/).

Of course, you can always contact us to {% data variables.contact.report_abuse %} if you need more help dealing with a situation.

## What is not allowed?

We are committed to maintaining a community where users are free to express themselves and challenge one another's ideas, both technical and otherwise. Such discussions, however, are unlikely to foster fruitful dialog when ideas are silenced because community members are being shouted down or are afraid to speak up. That means you should be respectful and civil at all times, and refrain from attacking others on the basis of who they are. We do not tolerate behavior that crosses the line into the following:

- #### Threats of violence 
   You may not threaten violence towards others or use the site to organize, promote, or incite acts of real-world violence or terrorism. Think carefully about the words you use, the images you post, and even the software you write, and how they may be interpreted by others. Even if you mean something as a joke, it might not be received that way. If you think that someone else *might* interpret the content you post as a threat, or as promoting violence or terrorism, stop. Don't post it on GitHub. In extraordinary cases, we may report threats of violence to law enforcement if we think there may be a genuine risk of physical harm or a threat to public safety.

- #### Hate speech and discrimination 
   While it is not forbidden to broach topics such as age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation, we do not tolerate speech that attacks a person or group of people on the basis of who they are. Just realize that when approached in an aggressive or insulting manner, these (and other) sensitive topics can make others feel unwelcome, or perhaps even unsafe. While there's always the potential for misunderstandings, we expect our community members to remain respectful and civil when discussing sensitive topics.

- #### Bullying and harassment 
   We do not tolerate bullying or harassment. This means any habitual badgering or intimidation targeted at a specific person or group of people. In general, if your actions are unwanted and you continue to engage in them, there's a good chance you are headed into bullying or harassment territory.

- #### Disrupting the experience of other users 
   Being part of a community includes recognizing how your behavior affects others and engaging in meaningful and productive interactions with people and the platform they rely on. Behaviors such as repeatedly posting off-topic comments, opening empty or meaningless issues or pull requests, or using any other platform feature in a way that continually disrupts the experience of other users are not allowed. While we encourage maintainers to moderate their own projects on an individual basis, GitHub staff may take further restrictive action against accounts that are engaging in these types of behaviors.

- #### Impersonation
   You may not impersonate another person by copying their avatar, posting content under their email address, using a similar username or otherwise posing as someone else. Impersonation is a form of harassment.

- #### Doxxing and invasion of privacy 
   Don't post other people's personal information, such as personal, private email addresses, phone numbers, physical addresses, credit card numbers, Social Security/National Identity numbers, or passwords. Depending on the context, such as in the case of intimidation or harassment, we may consider other information, such as photos or videos that were taken or distributed without the subject's consent, to be an invasion of privacy, especially when such material presents a safety risk to the subject.

- #### Sexually obscene content
   Don’t post content that is pornographic. This does not mean that all nudity, or all code and content related to sexuality, is prohibited. We recognize that sexuality is a part of life and non-pornographic sexual content may be a part of your project, or may be presented for educational or artistic purposes. We do not allow obscene sexual content or content that may involve the exploitation or sexualization of minors.

- #### Gratuitously violent content
   Don’t post violent images, text, or other content without reasonable context or warnings. While it's often okay to include violent content in video games, news reports, and descriptions of historical events, we do not allow violent content that is posted indiscriminately, or that is posted in a way that makes it difficult for other users to avoid (such as a profile avatar or an issue comment). A clear warning or disclaimer in other contexts helps users make an educated decision as to whether or not they want to engage with such content.

- #### Misinformation and disinformation
   You may not post content that presents a distorted view of reality, whether it is inaccurate or false (misinformation) or is intentionally deceptive (disinformation) where such content is likely to result in harm to the public or to interfere with fair and equal opportunities for all to participate in public life. For example, we do not allow content that may put the well-being of groups of people at risk or limit their ability to take part in a free and open society. We encourage active participation in the expression of ideas, perspectives, and experiences and may not be in a position to dispute personal accounts or observations. We generally allow parody and satire that is in line with our Acceptable Use Polices, and we consider context to be important in how information is received and understood; therefore, it may be appropriate to clarify your intentions via disclaimers or other means, as well as the source(s) of your information.

- #### Active malware or exploits
  Being part of a community includes not taking advantage of other members of the community. We do not allow anyone to use our platform in direct support of unlawful attacks that cause technical harms, such as using GitHub as a means to deliver malicious executables or as attack infrastructure, for example by organizing denial of service attacks or managing command and control servers. Technical harms means overconsumption of resources, physical damage, downtime, denial of service, or data loss, with no implicit or explicit dual-use purpose prior to the abuse occurring.

  Note that GitHub allows dual-use content and supports the posting of content that is used for research into vulnerabilities, malware, or exploits, as the publication and distribution of such content has educational value and provides a net benefit to the security community. We assume positive intention and use of these projects to promote and drive improvements across the ecosystem. 

  In rare cases of very widespread abuse of dual-use content, we may restrict access to that specific instance of the content to disrupt an ongoing unlawful attack or malware campaign that is leveraging the GitHub platform as an exploit or malware CDN. In most of these instances, restriction takes the form of putting the content behind authentication, but may, as an option of last resort, involve disabling access or full removal where this is not possible (e.g. when posted as a gist). We will also contact the project owners about restrictions put in place where possible. 

  Restrictions are temporary where feasible, and do not serve the purpose of purging or restricting any specific dual-use content, or copies of that content, from the platform in perpetuity. While we aim to make these rare cases of restriction a collaborative process with project owners, if you do feel your content was unduly restricted, we have an [appeals process](#appeal-and-reinstatement) in place.

  To facilitate a path to abuse resolution with project maintainers themselves, prior to escalation to GitHub abuse reports, we recommend, but do not require, that repository owners take the following steps when posting potentially harmful security research content:

    * Clearly identify and describe any potentially harmful content in a disclaimer in the project’s README.md file or source code comments.
    * Provide a preferred contact method for any 3rd party abuse inquiries through a SECURITY.md file in the repository (e.g. "Please create an issue on this repository for any questions or concerns"). Such a contact method allows 3rd parties to reach out to project maintainers directly and potentially resolve concerns without the need to file abuse reports.

  *GitHub considers the npm registry to be a platform used primarily for installation and run-time use of code, and not for research.*


## What happens if someone breaks the rules?

There are a variety of actions that we may take when a user reports inappropriate behavior or content. It usually depends on the exact circumstances of a particular case. We recognize that sometimes people may say or do inappropriate things for any number of reasons. Perhaps they did not realize how their words would be perceived. Or maybe they just let their emotions get the best of them. Of course, sometimes, there are folks who just want to spam or cause trouble.

Each case requires a different approach, and we try to tailor our response to meet the needs of the situation that has been reported. We'll review each abuse report on a case-by-case basis. In each case, we will have a diverse team investigate the content and surrounding facts and respond as appropriate, using these guidelines to guide our decision.

Actions we may take in response to an abuse report include but are not limited to:

* Content Removal
* Content Blocking
* Account Suspension
* Account Termination

## Appeal and Reinstatement

In some cases there may be a basis to reverse an action, for example, based on additional information a user provided, or where a user has addressed the violation and agreed to abide by our Acceptable Use Policies moving forward. If you wish to appeal an enforcement action, please contact [support](https://support.github.com/contact?tags=docs-policy).

## Legal Notices

We dedicate these Community Guidelines to the public domain for anyone to use, reuse, adapt, or whatever, under the terms of [CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/).

These are only guidelines; they do not modify our [Terms of Service](/articles/github-terms-of-service/) and are not intended to be a complete list. GitHub retains full discretion under the [Terms of Service](/articles/github-terms-of-service/#c-acceptable-use) to remove any content or terminate any accounts for activity that violates our Terms on Acceptable Use. These guidelines describe when we will exercise that discretion.
