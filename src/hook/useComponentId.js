let lastId = parseFloat(window.localStorage.getItem("id") ?? "0");

export default function useComponentId() {
  lastId += 1;
  window.localStorage.setItem("id", JSON.stringify(lastId));
  return lastId;
}
