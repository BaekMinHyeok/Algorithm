function solution(s) {
  const words = s.split(" ");
  return words
    .map((word) =>
      word
        .split("")
        .map((char, i) => (i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
        .join("")
    )
    .join(" ");
}