---
title: Stack code changes in pull requests
shortTitle: Stack pull requests
intro: 'Create a stack of small, dependent pull requests that can be quickly reviewed.'
versions:
  feature: pr-stacks
contentType: tutorials
category:
  - Accelerate PR velocity
  - Team collaboration
---

{% data reusables.public-preview.public-preview %}

Large pull requests are difficult to review and create bottlenecks, especially when you generate a high volume of code in a short time. Review quality also degrades as pull request size increases. Reviewers may skim the result, miss issues, or procrastinate and leave the pull request until it grows stale and develops merge conflicts.

Stacked pull requests keep large code changes reviewable. 

{% data reusables.pull_requests.pr-stack-definition %}

This tutorial walks you through how to use stacked pull requests to build a feature in individually reviewable layers. For our example, we'll consider how to add user authentication to an app. We'll use the `gh stack` extension in {% data variables.product.prodname_cli %}.

## Prerequisites

To follow this tutorial, you'll need to install {% data variables.product.prodname_cli %} and the `gh stack` extension. You'll need the following:

* {% data variables.product.prodname_cli %} (`gh`) 2.90.0 or later, and Git 2.20 or later.
  * Authenticate {% data variables.product.prodname_cli %} with `gh auth login`.
* A {% data variables.product.github %} repository you can push to.

In {% data variables.product.prodname_cli %}, install the `gh stack` extension.

```bash
gh extension install github/gh-stack
```

## 1. Design a stack before you generate code

A good stack is like building a house: start with a strong foundation, frame the walls, install wiring, then finish the drywall. Each layer is built dependent on the one below. In the end, a reviewer should be able to read the pull requests from bottom to top and follow the feature's development.

* Split the feature into layers. Each layer should be a single, coherent change that can be reviewed on its own.
  * Keep each layer small enough that its pull request is a quick read. If a layer feels like it needs a long description to review, it is probably too big.
  * Decide the boundaries yourself. You own the shape of the stack.
* Order the layers by dependency. Foundational changes go at the bottom. Anything that depends on them goes higher. For authentication, that might be: 
  * Layer 1: data model and migration
  * Layer 2: CRUD endpoints
  * Layer 3: JWT middleware and guards
  * Layer 4: integration and unit tests 

## 2. Build the bottom layer first

Start the stack with the foundation. Everything above depends on getting this layer right.

* Create the stack and build the first layer based on your plan. Create it with `gh stack init BRANCH-NAME-1`, consider using a prefix to keep branch names tidy.
* Review the change yourself before moving on. A mistake in the bottom layer propagates to every branch above it, so give it a review before moving on.

## 3. Stack each new code layer on top

With the foundation in place, build the rest of the feature one layer at a time.

* Add the next layer and implement it in the context of the layers below. Add a branch to the top of the stack with `gh stack add BRANCH-NAME-NEXT` and commit the work there.
* If a layer starts growing too large, consider whether it has drifted outside its plan or if you actually need two layers instead of one.
* Create new branches for each layer as you go, so every branch stays a clean, self-contained diff.
* When you're ready to create pull requests, submit your stack with `gh stack submit`.
* Let each pull request stand on its own. A focused title and a concise, meaningful description of the layer is usually enough.

## 4. Review the pull requests yourself before asking for a review

Each layer is small, making self-review easier too. Do a pass on every branch before you involve teammates. Reviewers should receive changes you already trust.

* Run your tests, linters, and code scanning on each branch to check each layer against your standards before you request reviews.

## 5. Request reviews for the stack, starting at the bottom

With the layers built, reviewers get small diffs instead of a large wall of code. 

* If the dependencies are strongly integrated, ask for reviews starting at the bottom of the stack, so you can integrate changes up the stack before subsequent reviews.
* If you need reviews from separate folks for different layers, reviewers can work in parallel. One person can review the data model while another reviews the endpoints, and neither labors through reviewing the whole feature.

## 6. Iterate on feedback 

Review feedback lands on layers individually, not the whole feature. Stacks let you fix the right layer in place and carry the change upward.

* Revise the layer a reviewer flagged. Move to the right branch, make the change, and commit it there.
* Keep each fix in the layer it belongs to. A change made on the wrong branch can confuse and create errors upstack.
* Navigate branches with `gh stack down`, `gh stack up`, or `gh stack checkout BRANCH-NAME`. Then, commit your changes, run `gh stack rebase --upstack` to rebase the branches above, and then `gh stack push` to carry changes up the stack.

## 7. Merge from the bottom layer 

A stack merges in order, starting from the layer pointing to your main branch. Merge layers all at once, or one-by-one, and GitHub automatically re-targets the next layer to point at main.

* Merge the stack one at a time working from the bottom up, or from anywhere in the stack and all the branches below the pull request you merge will be merged from the bottom up.
* Each layer's diff stays exactly the same relative to its parent, only the base changes, making it easy to merge a layer at a time without affecting in-progress work or reviews.
* Use a merge queue so each layer merges in order once it is approved and its checks pass. You do not need to wait on the whole stack at once.

Once the top layer merges, the whole feature has landed. Every piece was reviewed more effectively as a small, deliberate change rather than one large pull request.

## Further reading

* [AUTOTITLE](/pull-requests/get-started/about-stacked-prs)
* [AUTOTITLE](/pull-requests/how-tos/create-pull-requests/managing-stacked-pull-requests)
* [AUTOTITLE](/pull-requests/reference/stacked-prs-cli-commands)
