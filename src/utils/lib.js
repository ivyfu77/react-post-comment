
// Gernerate the UUID for the ID column when create a new post/comment
// Length: 13
export function generateUuid() {
  return Math.floor((1 + Math.random()) * 0x10000000000000).toString(16).substring(1)
}

export function timeToFormatDate(timestamp) {
  const date = new Date(timestamp);
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yy = date.getFullYear();
  return yy + "/" + mm + "/" + dd;
}