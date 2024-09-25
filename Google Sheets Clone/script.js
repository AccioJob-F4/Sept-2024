document.addEventListener("DOMContentLoaded", () => {
  const spreadSheet = document.getElementById("spreadsheet");
  let colCount = 3;
  let rowCount = 1;

  const addRow = () => {
    rowCount++;
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    newRow.setAttribute("data-row", rowCount);

    const rowHeader = document.createElement("div");
    rowHeader.classList.add("cell", "header-cell");
    rowHeader.textContent = rowCount;
    newRow.appendChild(rowHeader);

    for (let col = 0; col < colCount; col++) {
      const colLetter = String.fromCharCode(65 + col);
      const newCell = document.createElement("div");
      newCell.classList.add("cell");
      newCell.setAttribute("contenteditable", "true");
      newCell.setAttribute("data-row", rowCount);
      newCell.setAttribute("data-col", colLetter);

      newRow.appendChild(newCell);
    }

    spreadSheet.appendChild(newRow);
  };

  const deleteRow = () => {
    if (rowCount > 1) {
      const lastRow = spreadSheet.querySelector(`.row[data-row="${rowCount}"]`);
      spreadSheet.removeChild(lastRow);
      rowCount--;
    }
  };

  const addColumn = () => {
    colCount++;
    const headerRow = document.querySelector(".header-row");

    const newHeader = document.createElement("div");
    newHeader.classList.add("cell", "header-cell");
    newHeader.textContent = String.fromCharCode(64 + colCount);
    headerRow.appendChild(newHeader);

    document.querySelectorAll(".row:not(.header-row").forEach((row) => {
      const rowNum = row.getAttribute("data-row");
      const newCell = document.createElement("div");
      newCell.classList.add("cell");
      newCell.setAttribute("contenteditable", "true");
      newCell.setAttribute("data-row", rowNum);
      newCell.setAttribute("data-col", String.fromCharCode(64 + colCount));
      row.appendChild(newCell);
    });
  };

  const deleteColumn = () => {
    if (colCount > 1) {
      const headerRow = document.querySelector(".header-row");
      headerRow.removeChild(headerRow.lastChild);

      document.querySelectorAll(".row:not(.header-row)").forEach((row) => {
        row.removeChild(row.lastChild);
      });
    }
    colCount--;
  };

  document.getElementById("add-row").addEventListener("click", addRow);
  document.getElementById("delete-row").addEventListener("click", deleteRow);
  document.getElementById("add-column").addEventListener("click", addColumn);
  document
    .getElementById("delete-column")
    .addEventListener("click", deleteColumn);
});
