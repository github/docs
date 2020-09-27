1. Review the comma-separated (CSV) file in `/PATH/REPO-NAME.git/git-import/raw-authors.csv`. It should contain these columns:
    - `ID`: The author as stored in the original repository, followed by a unique identifier
    - `NAME`: The author as stored in the original repository

  To map authors from the original repository to an email address and name, create a new CSV file with the columns `ID,(ignored),GIT_EMAIL,GIT_NAME`, which replaces the author information for anything by "ID" with "GIT_EMAIL" and "GIT_NAME".


  #### 예시:

   - Original author ID: `octocat@111111-2222-3333-4444-55555555555`
   - New email address: `octocat@github.com`
   - New name: `The Octocat`

   To map the original author to the new Git user, the CSV file should include the line:

   `octocat@111111-2222-3333-4444-55555555555, ,octocat@github.com,The Octocat`
