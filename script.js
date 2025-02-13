//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  const loadingRow = document.createElement("tr");
  loadingRow.innerHTML = '<td colspan="2">Loading...</td>';
  output.appendChild(loadingRow);
  function createPromise(index) {
    const delay = Math.random() * 2000 + 1000; 
    return new Promise((resolve) => {
      setTimeout(() => resolve({ name: `Promise ${index}`, time: (delay / 1000).toFixed(3) }), delay);
    });
  }
  const promises = [createPromise(1), createPromise(2), createPromise(3)];
  Promise.all(promises).then(results => {
    output.innerHTML = "";
    results.forEach(result => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
      output.appendChild(row);
    });
    const totalTime = Math.max(...results.map(p => parseFloat(p.time))).toFixed(3);
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
    output.appendChild(totalRow);
  });
});