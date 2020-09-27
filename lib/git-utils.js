const github = require('../lib/github')()

// https://developer.github.com/v3/git/refs/#get-a-reference
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

// https://developer.github.com/v3/git/commits/#get-a-commit
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

// https://developer.github.com/v3/git/trees/#get-a-tree-recursively
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

// https://developer.github.com/v3/git/blobs/#get-a-blob
async function getContentsForBlob (owner, repo, blob) {
  const { data } = await github.git.getBlob({
    owner,
    repo,
    file_sha: blob.sha
  })
  // decode blob contents
  return Buffer.from(data.content, 'base64')
}

// https://developer.github.com/v3/repos/contents/#get-contents
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
    console.log(`error getting ${path} from ${owner}/${repo}`)
    throw (err)
  }
}

module.exports = {
  getTree,
  getTreeSha,
  getCommitSha,
  getContentsForBlob,
  getContents
}
