If a cutover fails after the source repository has been archived, the {% data variables.product.prodname_elm_short %} service will attempt to unarchive the repository. If this fails, a repository administrator can unarchive the repository. See [AUTOTITLE](/repositories/archiving-a-github-repository/archiving-repositories#unarchiving-a-repository).

Be aware that unarchiving a repository will cause additional load on the instance, as all issues and pull requests in the repository will be reindexed in Elasticsearch. 

After the source repository is unarchived, you can either retry cutover using `elm migration cutover-to-destination --migration-id MIGRATION-ID`, or abort the migration with `elm migration cancel --migration-id MIGRATION-ID` and start a new migration when you're ready.
