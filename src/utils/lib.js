
// Gernerate the UUID for the ID column when create a new post/comment
// Length: 13
export function generateUuid() {
  return Math.floor((1 + Math.random()) * 0x10000000000000).toString(16).substring(1)
}