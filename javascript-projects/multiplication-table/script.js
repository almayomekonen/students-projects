document.addEventListener("DOMContentLoaded", () => {
  const tableContainer = document.getElementById("multiplication-table");

  const table = document.createElement("table");

  // יצירת טבלה
  for (let i = 0; i <= 10; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j <= 10; j++) {
      const cell = document.createElement(i === 0 || j === 0 ? "th" : "td");

      if (i === 0 && j === 0) {
        cell.textContent = "X";
      } else if (i === 0) {
        cell.textContent = j;
        cell.dataset.column = j;
        cell.classList.add("header-col");
      } else if (j === 0) {
        cell.textContent = i;
        cell.dataset.row = i;
        cell.classList.add("header-row");
      } else {
        cell.textContent = i * j;
        cell.dataset.row = i;
        cell.dataset.column = j;

        cell.addEventListener("mouseenter", (event) => {
          const tooltip = document.createElement("div");
          tooltip.className = "tooltip";
          tooltip.textContent = `שורה: ${i}, עמודה: ${j}, מכפלה: ${i * j}`;
          document.body.appendChild(tooltip);

          const rect = event.target.getBoundingClientRect();
          tooltip.style.left = `${rect.left + window.pageXOffset}px`;
          tooltip.style.top = `${
            rect.top + window.pageYOffset - tooltip.offsetHeight - 5
          }px`;
        });

        cell.addEventListener("mouseleave", () => {
          const tooltip = document.querySelector(".tooltip");
          if (tooltip) tooltip.remove();
        });
      }

      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  tableContainer.appendChild(table);

  const headerCols = table.querySelectorAll(".header-col");
  const headerRows = table.querySelectorAll(".header-row");
  const cells = table.querySelectorAll("td");

  let selectedCol = null;
  let selectedRow = null;

  // הוספת אירועים לכותרות עמודות ושורות
  headerCols.forEach((column) => {
    column.addEventListener("click", () => {
      selectedCol = parseInt(column.dataset.column, 10);
      highlightCell(selectedRow, selectedCol);
    });
  });

  headerRows.forEach((row) => {
    row.addEventListener("click", () => {
      selectedRow = parseInt(row.dataset.row, 10);
      highlightCell(selectedRow, selectedCol);
    });
  });

  // לחצן לאיפוס הדגשות
  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", () => {
    cells.forEach((cell) => cell.classList.remove("highlight"));
    selectedCol = null;
    selectedRow = null;
  });

  // לחצן לבחירה אקראית
  const randomButton = document.getElementById("random-button");
  randomButton.addEventListener("click", () => {
    const randomRow = Math.floor(Math.random() * 10) + 1;
    const randomCol = Math.floor(Math.random() * 10) + 1;

    selectedRow = randomRow;
    selectedCol = randomCol;
    highlightCell(selectedRow, selectedCol);
  });

  // פונקציה להדגשה
  function highlightCell(row, col) {
    cells.forEach((cell) => cell.classList.remove("highlight"));

    if (row && col) {
      cells.forEach((cell) => {
        if (
          parseInt(cell.dataset.row) === row &&
          parseInt(cell.dataset.column) === col
        ) {
          cell.classList.add("highlight");
        }
      });
    }
  }
});
