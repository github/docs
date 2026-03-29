The [attest](https://github.com/actions/attest) action automatically creates storage records on the {% data variables.product.virtual_registry %} if both:

* The `push-to-registry` option is set to `true`
* The workflow that includes the action has the `artifact-metadata: write` permission
