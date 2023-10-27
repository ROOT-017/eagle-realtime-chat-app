
const formatChannelNam = (name1, name2) => {
  //Sort two words in aphabetical order
  const n1 = name1.split(" ").join("-").toLowerCase();
  const n2 = name2.split(" ").join("-").toLowerCase();
  const names = [n1, n2];

  return names.sort((n1, n2) => n1.localeCompare(n2));
};

console.log(formatChannelNam("aZROOT-017", "TERENCE1010"));