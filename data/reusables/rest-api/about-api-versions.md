The {% data variables.product.product_name %} REST API is versioned. The API version name is based on the date when the API version was released. For example, the API version `{{ initialRestVersioningReleaseDate }}` was released on {{ initialRestVersioningReleaseDateLong }}.

Any breaking changes will be released in a new API version. Breaking changes are changes that can potentially break an integration. Breaking changes include:

- removing an entire operation
- removing or renaming a parameter
- removing or renaming a response field
- adding a new required parameter
- making a previously optional parameter required
- changing the type of a parameter or response field
- removing enum values
- adding a new validation rule to an existing parameter
- changing authentication or authorization requirements

Any additive (non-breaking) changes will be available in all supported API versions. Additive changes are changes that should not break an integration. Additive changes include:

- adding an operation
- adding an optional parameter
- adding an optional request header
- adding a response field
- adding a response header
- adding enum values

When a new REST API version is released, the previous API version will be supported for at least 24 more months following the release of the new API version.
