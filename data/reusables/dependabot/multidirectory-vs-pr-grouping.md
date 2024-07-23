Multidirectory support is different than update grouping in pull requests.
* The `directories` option in the `dependabot.yml` file allows you to apply {% data variables.product.prodname_dependabot_updates %} to multiple directories at the same time.
* The `groups` option in the `dependabot.yml` file creates sets of dependencies (per package manager) for {% data variables.product.prodname_dependabot %} to put in the same single pull request.

If you want to use both features on your repositories, you need to enable these features independently and explicitly by using the two keys described above.
