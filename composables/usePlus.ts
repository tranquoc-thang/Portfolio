export default function (...strings) {
  return [...strings].reduce((prev, cur) => prev + cur, "");
}
