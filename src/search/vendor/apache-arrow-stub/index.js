// Stub for apache-arrow. The @elastic/elasticsearch helpers.js top-level
// requires "apache-arrow/Arrow.node", but we never call toArrowTable() or
// toArrowReader(). Loading the real package causes ~40 V8 "dependent
// prototype chain changed" deoptimizations. This stub satisfies the
// require without side effects.
'use strict'

module.exports.tableFromIPC = function tableFromIPC() {
  throw new Error('apache-arrow is stubbed out — toArrowTable() is not supported')
}

module.exports.AsyncRecordBatchStreamReader = {
  from() {
    throw new Error('apache-arrow is stubbed out — toArrowReader() is not supported')
  },
}
