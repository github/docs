const github = require('./github')()

// https://docs.github.com/rest/reference/git#get-a-reference
async function getCommitSha (owner, repo, ref) {
  try {
    const { data } = await github.git.getRef({
      owner,
      repo,
      ref
    })
    return data.object.sha
  } catch (err) {
    console.log('error getting tree')
    throw (err)
  }
}

// https://docs.github.com/rest/reference/git#list-matching-references
async function listMatchingRefs (owner, repo, ref) {
  try {
    // if the ref is found, this returns an array of objects;
    // if the ref is not found, this returns an empty array
    const { data } = await github.git.listMatchingRefs({
      owner,
      repo,
      ref
    })
    return data
  } catch (err) {
    console.log('error getting tree')
    throw (err)
  }
}

// https://docs.github.com/rest/reference/git#get-a-commit
async function getTreeSha (owner, repo, commitSha) {
  try {
    const { data } = await github.git.getCommit({
      owner,
      repo,
      commit_sha: commitSha
    })
    return data.tree.sha
  } catch (err) {
    console.log('error getting tree')
    throw (err)
  }
}

// https://docs.github.com/rest/reference/git#get-a-tree
async function getTree (owner, repo, ref, allowedPaths = []) {
  const commitSha = await getCommitSha(owner, repo, ref)
  const treeSha = await getTreeSha(owner, repo, commitSha)
  try {
    const { data } = await github.git.getTree({
      owner,
      repo,
      tree_sha: treeSha,
      recursive: 1
    })
    // only return files that match the patterns in allowedPaths
    // skip actions/changes files
    return data.tree
  } catch (err) {
    console.log('error getting tree')
    throw (err)
  }
}

// https://docs.github.com/rest/reference/git#get-a-blob
async function getContentsForBlob (owner, repo, blob) {
  const { data } = await github.git.getBlob({
    owner,
    repo,
    file_sha: blob.sha
  })
  // decode blob contents
  return Buffer.from(data.content, 'base64')
}

// https://docs.github.com/rest/reference/repos#get-repository-content
async function getContents (owner, repo, ref, path) {
  try {
    const { data } = await github.repos.getContents({
      owner,
      repo,
      ref,
      path
    })
    // decode contents
    return Buffer.from(data.content, 'base64').toString()
  } catch (err) {
    console.log(`error getting ${path} from ${owner}/${repo} at ref ${ref}`)
    throw (err)
  }
}

module.exports = {
  getTree,
  getTreeSha,
  getCommitSha,
  getContentsForBlob,
  getContents,
  listMatchingRefs
}
