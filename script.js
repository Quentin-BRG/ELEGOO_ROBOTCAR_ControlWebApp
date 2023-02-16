function createTable(columnCount, rowCount) {
    // Supprimer le tableau s'il existe déjà
    const table = document.getElementById("field");
    if (table) {
        table.remove();
    }

    // Créer un nouveau tableau
    const newTable = document.createElement("table");
    newTable.id = "field";

    // Créer la première ligne pour les ordonnées
    const ordinateRow = document.createElement("tr");
    const emptyCell = document.createElement("td");
    ordinateRow.appendChild(emptyCell);

    for (let i = 1; i <= columnCount; i++) {
        const ordinateCell = document.createElement("td");
        ordinateCell.textContent = i;
        ordinateCell.style.fontWeight = "bold";
        ordinateCell.style.textAlign = "center";
        ordinateCell.style.verticalAlign = "middle";
        ordinateRow.appendChild(ordinateCell);
    }

    newTable.appendChild(ordinateRow);

    // Créer les lignes et les colonnes du tableau
    for (let i = 0; i < rowCount; i++) {
        const newRow = document.createElement("tr");

        // Ajouter la première colonne pour les abscisses
        const abscissaCell = document.createElement("td");
        abscissaCell.textContent = String.fromCharCode(65 + i);
        abscissaCell.style.fontWeight = "bold";
        abscissaCell.style.textAlign = "center";
        abscissaCell.style.verticalAlign = "middle";
        newRow.appendChild(abscissaCell);

        for (let j = 0; j < columnCount; j++) {
            const newCell = document.createElement("td");
            newCell.style.textAlign = "center";
            newCell.style.verticalAlign = "middle";
            newRow.appendChild(newCell);
        }

        newTable.appendChild(newRow);
    }

    // Ajouter le nouveau tableau à la page
    const container = document.body;
    container.appendChild(newTable);
}

function getFieldValues() {
    const columnInput = document.getElementById("column-input");
    const rowInput = document.getElementById("row-input");
    const columnValue = columnInput.value;
    const rowValue = rowInput.value;

    if (columnValue <= 0 || rowValue <= 0 || columnValue == '' || rowValue == '') {
        alert("Les valeurs doivent être supérieures à zéro !");
        return false;
    }
    else if (columnValue > 20 || rowValue > 20) {
        alert("Toujours plus !!");
        return false;
    }
    return { columnValue, rowValue };
}


function moveImageToCoordinate(moveImage, x, y) {
    const field = document.getElementById("field");
    const cells = field.querySelectorAll("td");

    x = parseInt(x)
    y = parseInt(y)
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        // Vérifier que l'on ne se trouve pas dans la première colonne ou la première ligne
        if (cell.cellIndex > 0 && cell.parentElement.rowIndex > 0 && cell.cellIndex === (x) && cell.parentElement.rowIndex === (y)) {
            const image = moveImage;
            cell.innerHTML = "";
            cell.appendChild(image);
            return;
        }
    }
}

function countTableRowsAndColumns(table) {
    // récupérer toutes les lignes du tableau
    const rows = table.querySelectorAll('tr');

    // déterminer le nombre de colonnes en utilisant la première ligne
    const headerRow = rows[0];
    const columnValue = headerRow.querySelectorAll('td').length - 1;

    // déterminer le nombre de lignes en excluant la première
    const rowValue = rows.length - 1;

    return { columnValue, rowValue };
}

function getTargetValues() {
    const xInput = document.getElementById("x");
    const yInput = document.getElementById("y");
    const xValue = xInput.value;
    const yValue = yInput.value;

    console.log(xValue)
    console.log(yValue)

    if (xValue <= 0 || yValue <= 0 || xValue == '' || yValue == '') {
        alert("Les valeurs doivent être supérieures à zéro !");
        return false;
    }

    const values = countTableRowsAndColumns(document.getElementById("field"))
    const columnValue = values.columnValue;
    const rowValue = values.rowValue;

    if (xValue > columnValue || yValue > rowValue) {
        alert("Les valeurs sont trop grandes !");
        return false;
    }

    return { xValue, yValue };
}

function updateLatence(timeInMs) {
    const label = document.getElementById("bluetooth-status");
  
    if (timeInMs <= 30) {
      label.style.color = "green";
    } else if (timeInMs <= 100) {
      label.style.color = "orange";
    } else {
      label.style.color = "red";
    }
  
    label.textContent = `${timeInMs} ms`;
  }

// Récupérer le bouton refresh
const refreshFieldBtn = document.getElementById("refresh-btn");

// Ajouter un écouteur d'événement "click" sur le bouton refresh
refreshFieldBtn.addEventListener("click", () => {
    const values = getFieldValues();
    const columnValue = values.columnValue;
    const rowValue = values.rowValue;
    if (values != false) {
        createTable(columnValue, rowValue);
        document.documentElement.style.setProperty('--maxScale', Math.max(columnValue, rowValue));
    }
});

const refreshTargetBtn = document.getElementById("target");
// Ajouter un écouteur d'événement "click" sur le bouton refresh
refreshTargetBtn.addEventListener("click", () => {
    const values = getTargetValues();
    const xValue = values.xValue;
    const yValue = values.yValue;
    if (values != false) {
        moveImageToCoordinate(document.getElementById("flag"), xValue, yValue)
    }
});