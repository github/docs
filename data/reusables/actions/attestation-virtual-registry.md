The [attest](https://github.com/actions/attest) and [attest-build-provenance](https://github.com/actions/attest-build-provenance) actions automatically create storage records on the {% data variables.product.virtual_registry %} if both:

* The `push-to-registry` option is set to `true`
* The workflow that includes the action has the `artifact-metadata: write` permission
