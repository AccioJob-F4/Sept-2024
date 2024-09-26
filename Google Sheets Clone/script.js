document.addEventListener("DOMContentLoaded", () => {
  const spreadSheet = document.getElementById("spreadsheet");
  let colCount = 3;
  let rowCount = 1;
  let currentCell = null;

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

  const deleteSpecificRow = () => {
    const rowNumber = parseInt(document.getElementById("row-number").value);

    if (rowNumber && rowNumber > 0 && rowNumber <= rowCount) {
      const rowToDelete = spreadSheet.querySelector(
        `.row[data-row="${rowNumber}"]`
      );

      if (rowToDelete) {
        spreadSheet.removeChild(rowToDelete);

        // Update row numbers for subsequent rows
        rowCount--;
      }
    }
  };

  const deleteSpecificColumn = () => {
    const colLetter = document.getElementById("column-letter").value;
    const colIndex = colLetter.charCodeAt(0) - 64;

    if (colIndex && colIndex > 0 && colIndex <= colCount) {
      const headerRow = document.querySelector(".header-row");
      const headerCell = document.querySelector(
        `.cell[data-col="${colLetter}"]`
      );

      if (headerCell) {
        headerRow.removeChild(headerCell);
      }

      document.querySelectorAll(".row:not(.header-row)").forEach((row) => {
        const cell = row.querySelector(`.cell[data-col="${colLetter}"]`);
        if (cell) {
          row.removeChild(cell);
        }
      });

      // Update column letters for subsequent columns

      colCount--;
    }
  };

  document.addEventListener("focusin", (e) => {
    if (
      e.target.classList.contains("cell") &&
      e.target.getAttribute("contenteditable") === "true"
    ) {
      currentCell = e.target;
    }
  });

  document.getElementById("bold").addEventListener("click", () => {
    if (currentCell) {
      currentCell.style.fontWeight =
        currentCell.style.fontWeight === "bold" ? "normal" : "bold";
    }
  });

  document.getElementById("italic").addEventListener("click", () => {
    if (currentCell) {
      currentCell.style.fontStyle =
        currentCell.style.fontStyle === "italic" ? "normal" : "italic";
    }
  });

  document.getElementById("underline").addEventListener("click", () => {
    if (currentCell) {
      currentCell.style.textDecoration =
        currentCell.style.textDecoration === "underline" ? "none" : "underline";
    }
  });

  document.getElementById("add-row").addEventListener("click", addRow);
  document.getElementById("delete-row").addEventListener("click", deleteRow);
  document.getElementById("add-column").addEventListener("click", addColumn);
  document
    .getElementById("delete-column")
    .addEventListener("click", deleteColumn);
  document
    .getElementById("delete-specific-row")
    .addEventListener("click", deleteSpecificRow);
  document
    .getElementById("delete-specific-column")
    .addEventListener("click", deleteSpecificColumn);
});
