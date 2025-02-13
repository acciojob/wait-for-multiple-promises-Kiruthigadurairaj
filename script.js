//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");
 
  output.innerHTML = '<tr><td colspan="2">Loading...</td></tr>';

  // Function to create a promise 
  function createPromise(index) {
    const delay = Math.random() * 2000 + 1000;
    return new Promise((resolve) => {
      setTimeout(() => resolve({ name: `Promise ${index}`, time: (delay / 1000).toFixed(3) }), delay);
    });
  }

  const promises = [createPromise(1), createPromise(2), createPromise(3)];

  // Wait for all promises
  Promise.all(promises).then(results => {
    // Remove loading row
    output.innerHTML = "";

    // Add resolved promises to table
    results.forEach((result, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>Promise ${index + 1}</td><td>${result.time}</td>`;
      output.appendChild(row);
    });

    // Calculate total time 
    const totalTime = Math.max(...results.map(p => parseFloat(p.time))).toFixed(3);
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
    output.appendChild(totalRow);
  });
});