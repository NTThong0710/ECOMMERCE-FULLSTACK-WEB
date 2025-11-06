import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const columns = [
  { id: "checkbox", label: "", minWidth: 50 },
  { id: "user", label: "USER", minWidth: 320 },
  { id: "phone", label: "USER PHONE NO", minWidth: 180 },
  { id: "created", label: "CREATED", minWidth: 150 },
  { id: "action", label: "ACTION", minWidth: 120 },
];

function createData(id, avatar, name, emailMasked, phoneMasked, created) {
  return { id, avatar, name, emailMasked, phoneMasked, created };
}

const rows = [
  createData(1, "/avatar1.png", "Kiran", "**********", "**********", "2025-09-23"),
  createData(2, "/avatar2.png", "niharika r | AP23110011226", "**********", "**********", "2025-09-23"),
  createData(3, "/avatar3.png", "Yogesh Jagadev Ingole", "**********", "**********", "2025-09-23"),
  createData(4, "/avatar4.png", "Salman Shaid", "**********", "**********", "2025-09-23"),
  createData(5, "/avatar5.png", "zeel", "**********", "**********", "2025-09-23"),
  createData(6, "/avatar6.png", "Yug", "**********", "**********", "2025-09-23"),
];

const TableUsers = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((row) => row.id);
      setSelected(newSelected);
    } else {
      setSelected([]);
    }
  };

  const handleClick = (id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, id];
    } else {
      newSelected = selected.filter((s) => s !== id);
    }
    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length < rows.length
                  }
                  checked={rows.length > 0 && selected.length === rows.length}
                  onChange={handleSelectAllClick}
                />
              </TableCell>
              {columns
                .filter((c) => c.id !== "checkbox")
                .map((column) => (
                  <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                    <div className="font-bold">{column.label}</div>
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const isItemSelected = isSelected(row.id);
                return (
                  <TableRow key={row.id} hover selected={isItemSelected}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        onChange={() => handleClick(row.id)}
                      />
                    </TableCell>

                    {/* USER column */}
                    <TableCell>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <img
                          src={row.avatar}
                          alt={row.name}
                          className="rounded-md w-[65px] h-[65px] cursor-pointer"
                          style={{ objectFit: "cover" }}
                        />
                        <div>
                          <Link to="/user" className="font-bold hover:text-[#3872fa]">
                            {row.name}
                          </Link>
                          <div style={{ color: "gray", fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
                            {/* mail icon */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="16"
                              height="16"
                              style={{ display: "block" }}
                              fill="currentColor"
                            >
                              <path d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            <span>{row.emailMasked}</span>
                          </div>
                        </div>
                      </div>
                    </TableCell>

                    {/* PHONE column */}
                    <TableCell>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="18"
                          height="18"
                          fill="currentColor"
                          style={{ display: "block" }}
                        >
                          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4.5A1 1 0 014 3.5H7.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
                        </svg>
                        <span className="font-bold">{row.phoneMasked}</span>
                      </div>
                    </TableCell>

                    {/* CREATED column */}
                    <TableCell>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          fill="currentColor"
                          style={{ display: "block" }}
                        >
                          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 14H5V9h14v9z" />
                        </svg>
                        <span>{row.created}</span>
                      </div>
                    </TableCell>

                    {/* ACTION column */}
                    <TableCell>
                      <Button variant="outlined" color="error" size="small" className="!rounded-md">
                        DELETE
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default TableUsers;
