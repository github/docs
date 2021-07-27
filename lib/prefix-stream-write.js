export default function prefixStreamWrite(writableStream, prefix) {
  const oldWrite = writableStream.write

  function newWrite(...args) {
    const [chunk, encoding] = args

    // Prepend the prefix if the chunk is either a string or a Buffer.
    // Otherwise, just leave it alone to be safe.
    if (typeof chunk === 'string') {
      // Only prepend the prefix is the `encoding` is safe or not provided.
      // If it's a function, it is third arg `callback` provided as optional second
      if (!encoding || encoding === 'utf8' || typeof encoding === 'function') {
        args[0] = prefix + chunk
      }
    } else if (Buffer.isBuffer(chunk)) {
      args[0] = Buffer.concat([Buffer.from(prefix), chunk])
    }

    return oldWrite.apply(this, args)
  }

  writableStream.write = newWrite

  return writableStream
}
