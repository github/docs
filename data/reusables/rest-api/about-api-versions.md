The {% data variables.product.github %} REST API is versioned. The API version name is based on the date when the API version was released. For example, the API version `{{ initialRestVersioningReleaseDate }}` was released on {{ initialRestVersioningReleaseDateLong }}.

Any breaking changes will be released in a new API version. Breaking changes are changes that can potentially break an integration. Breaking changes include:

* Removing an entire operation
* Removing or renaming a parameter
* Removing or renaming a response field
* Adding a new required parameter
* Making a previously optional parameter required
* Changing the type of a parameter or response field
* Removing enum values
* Adding a new validation rule to an existing parameter
* Changing authentication or authorization requirements

Any additive (non-breaking) changes will be available in all supported API versions. Additive changes are changes that should not break an integration. Additive changes include:

* Adding an operation
* Adding an optional parameter
* Adding an optional request header
* Adding a response field
* Adding a response header
* Adding enum values

When a new REST API version is released, the previous API version will be supported for at least 24 more months following the release of the new API version.
