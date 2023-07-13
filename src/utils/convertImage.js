export function convertImage(src) {
  if (src.includes("http")) {
    return `/${src.split("http://3.34.161.169/")[1]}`;
  }
  return `/${src.split("https://3.34.161.169/")[1]}`;
}
