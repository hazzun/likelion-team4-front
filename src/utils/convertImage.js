export function convertImage(src) {
  console.log("image = ", src);
  if (src.includes("https")) {
    return `/media/${src.split("https://3.34.161.169/")[1]}`;
  }
  return `/${src.split("http://3.34.161.169/")[1]}`;
}
