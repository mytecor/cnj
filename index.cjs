const cnj = (...cns) => cns.filter(Boolean).join(' ')
module.exports = cnj
module.exports.cnj = cnj