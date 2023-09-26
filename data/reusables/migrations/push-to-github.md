1. To push the repository to {% data variables.product.prodname_dotcom %}, run `git push --mirror origin`.

   If your repository contains any files that are larger than {% data variables.product.product_name %}'s file size limit, your push may fail. Move the large files to {% data variables.large_files.product_name_short %} by running `git lfs import`, then try again.
