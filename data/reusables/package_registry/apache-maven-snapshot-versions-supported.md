{% data variables.product.prodname_registry %} supports `SNAPSHOT` versions of Apache Maven. To use the GitHub Package repository for downloading `SNAPSHOT` artifacts, enable SNAPSHOTS in the POM of the consuming project or your  *~/.m2/settings.xml* file.

EACH package should be in a separate repository due to a limitation on group/organization level package resolution. This may lead to numerous `repository` definitions that are different in `REPOSITORY` only.
