const data = [
  ["CSK", ["Dhoni", "Gaikwad", "Dube"], ["Khaleel", "Chahar", "Noor"], ["5"]],
  ["MI", ["Rohit", "Surya", "Hardik"], ["Bumrah", "Boult", "Markande"], ["5"]],
  [
    "KKR",
    ["Rahane", "Rinku", "Tripati"],
    ["Pathirana", "Tyagi", "Varun"],
    ["2"],
  ],
  [
    "RCB",
    ["Virat", "Paditar", "Salt"],
    ["Bhuvaneswar", "Krunal", "Shepard"],
    ["1"],
  ],
  [
    "SRH",
    ["Head", "Abishek", "Ishan"],
    ["Cummins", "Malinga", "Ansari"],
    ["1"],
  ],
];
function displayTable(Data) {
  let output = "<table>";
  for (let i = 0; i < Data.length; i++) {
    const row = Data[i];
    const teams = row[0];
    output += "<tr>";
    output += `<td>${teams}</td>`;
    const batters = row[1];
    output += "<td>";
    for (let j = 0; j < batters.length; j++) {
      output += batters[j];
      if (j < batters.length - 1) {
        output += ", ";
      }
    }
    output += "</td>";
    const bowlers = row[2];
    output += "<td>";
    for (let k = 0; k < bowlers.length; k++) {
      output += bowlers[k];
      if (k < bowlers.length - 1) {
        output += ", ";
      }
    }
    output += "</td>";
    const cups = row[3];
    output += "<td>";
    for (let m = 0; m < cups.length; m++) {
      output += cups[m];
    }
    output += "</td></tr>";
  }
  output += "</table>";
  document.getElementById("result").innerHTML = output;
}
displayTable(data);
document.getElementById("search").addEventListener("keyup", function () {
  const value = this.value;
  const filterData = data.filter(function (row) {
    const lRow = row.join("").toLowerCase();
    const key = value.toLowerCase();
    return lRow.includes(key);
  });
  displayTable(filterData);
});
