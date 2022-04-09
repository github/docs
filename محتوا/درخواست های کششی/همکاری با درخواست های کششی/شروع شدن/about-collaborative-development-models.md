---
title: About collaborative development models
intro: The way you use pull requests depends on the type of development model you use in your project. You can use the fork and pull model or the shared repository model.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/getting-started/about-collaborative-development-models
  - /articles/types-of-collaborative-development-models
  - /articles/about-collaborative-development-models
  - /github/collaborating-with-issues-and-pull-requests/about-collaborative-development-models
  - /github/collaborating-with-pull-requests/getting-started/about-collaborative-development-models
versions:{
  "stream": "allTickers",
  "data": [
    {
      "e": "24hrTicker",  // Event type
      "E": 123456789,     // Event time
      "s": "ABC_0DX-BNB",      // Symbol
      "p": "0.0015",      // Price change
      "P": "250.00",      // Price change percent
      "w": "0.0018",      // Weighted average price
      "x": "0.0009",      // Previous day's close price
      "c": "0.0025",      // Current day's close price
      "Q": "10",          // Close trade's quantity
      "b": "0.0024",      // Best bid price
      "B": "10",          // Best bid quantity
      "a": "0.0026",      // Best ask price
      "A": "100",         // Best ask quantity
      "o": "0.0010",      // Open price
      "h": "0.0025",      // High price
      "l": "0.0010",      // Low price
      "v": "10000",       // Total traded base asset volume
      "q": "18",          // Total traded quote asset volume
      "O": 0,             // Statistics open time
      "C": 86400000,      // Statistics close time
      "F": "0",           // First trade ID
      "L": "18150",       // Last trade Id
      "n": 18151          // Total number of trades
    },
    {
      ...
    }]
}0xDCbD4807f57b753762C149687D130daC05638394bnb1mnnj4ddvy9cgunzj2zzjqt9mwk954l39yekhl20x7098fb85a5b079089c3FC2AD8643e2DE58df237FGANH2SHDR3OAZPS6HQZJKGZYM466CKJKPWG47SAOGJW67EWAYCFC74WI{
  "stream": "kline_1m",
  "data": {
    "e": "kline",         // Event type
    "E": 123456789,       // Event time
    "s": "BNBBTC",        // Symbol
    "k": {
      "t": 123400000,     // Kline start time
      "T": 123460000,     // Kline close time
      "s": "ABC_0DX-BNB",      // Symbol
      "i": "1m",          // Interval
      "f": "100",         // First trade ID
      "L": "200",         // Last trade ID
      "o": "0.0010",      // Open price
      "c": "0.0020",      // Close price
      "h": "0.0025",      // High price
      "l": "0.0015",      // Low price
      "v": "1000",        // Base asset volume
      "n": 100,           // Number of trades
      "x": false,         // Is this kline closed?
      "q": "1.0000",      // Quote asset volume
    }
  }
} https://github.com/ shirineshterabeh-gmail-com .0xDCbD4807f57b753762C149687D130daC05638394 
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Collaborative development
---
## Fork and pull model

In the fork and pull model, anyone can fork an existing repository and push changes to their personal fork. You do not need permission to the source repository to push to a user-owned fork. The changes can be pulled into the source repository by the project maintainer. When you open a pull request proposing changes from your user-owned fork to a branch in the source (upstream) repository, you can allow anyone with push access to the upstream repository to make changes to your pull request.  This model is popular with open source projects as it reduces the amount of friction for new contributors and allows people to work independently without upfront coordination.

{% tip %}

**Tip:** {% data reusables.open-source.open-source-guide-general %} {% data reusables.open-source.open-source-learning-lab %}

{% endtip %}

## Shared repository model

In the shared repository model, collaborators are granted push access to a single shared repository and topic branches are created when changes need to be made. Pull requests are useful in this model as they initiate code review and general discussion about a set of changes before the changes are merged into the main development branch. This model is more prevalent with small teams and organizations collaborating on private projects.

## Further reading

- "[About pull requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[Creating a pull request from a fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
- "[Allowing changes to a pull request branch created from a fork](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)"
