import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { Rating, IconButton} from "@mui/material";
import { Button } from '@mui/material';
import {Link} from 'react-router-dom'
// import { Edit, Visibility } from "@mui/icons-material";

const columns = [
  { id: "checkbox", label: "", minWidth: 50 },
  { id: "product", label: "PRODUCT", minWidth: 300 },
  { id: "category", label: "CATEGORY", minWidth: 120 },
  { id: "subcategory", label: "SUB CATEGORY", minWidth: 150 },
  { id: "price", label: "PRICE", minWidth: 100 },
  { id: "sales", label: "SALES", minWidth: 100 },
  { id: "stock", label: "STOCK", minWidth: 100 },
  { id: "rating", label: "RATING", minWidth: 100 },
  { id: "action", label: "ACTION", minWidth: 100 },
];

function createData(id, image, product, brand, category, subcategory, oldPrice, newPrice, sales, stock, rating) {
  return { id, image, product, brand, category, subcategory, oldPrice, newPrice, sales, stock, rating };
}

const rows = [
  createData(1, "/test.webp", "JEWAR trendy jewellery set for girls lightweight jewellery", "JEWAR", "Jewellery", "Necklace", 7999, 8999, 2, 198, 5),
  createData(2, "/test.webp", "VINDAA Classic Gold Plated Bangle Set for Women", "Vindaa", "Jewellery", "Bangle", 699, 799, 13, 237, 5),
  createData(3, "/test.webp", "ZENEME Silver Plated White Round AD Studded Maang Tikka", "Zeneme", "Jewellery", "Maang Tikka", 2419, 3000, 4, 196, 5),
  createData(4, "/test.webp", "VIBRANCE Jewellery set , Necklace Set, Har Set, Party", "VIBRANCE", "Jewellery", "Set", 5999, 6999, 4, 1497, 5),
  createData(5, "/test.webp", "Reliance Jewels 22 Kt Yellow Gold Ring", "Reliance Jewels", "Jewellery", "Ring", 3999, 4599, 10, 1493, 5),
  createData(5, "/test.webp", "Reliance Jewels 22 Kt Yellow Gold Ring", "Reliance Jewels", "Jewellery", "Ring", 3999, 4599, 10, 1493, 5),
  createData(5, "/test.webp", "Reliance Jewels 22 Kt Yellow Gold Ring", "Reliance Jewels", "Jewellery", "Ring", 3999, 4599, 10, 1493, 5),
  createData(5, "/test.webp", "Reliance Jewels 22 Kt Yellow Gold Ring", "Reliance Jewels", "Jewellery", "Ring", 3999, 4599, 10, 1493, 5),
  createData(5, "/test.webp", "Reliance Jewels 22 Kt Yellow Gold Ring", "Reliance Jewels", "Jewellery", "Ring", 3999, 4599, 10, 1493, 5),
  createData(5, "/test.webp", "Reliance Jewels 22 Kt Yellow Gold Ring", "Reliance Jewels", "Jewellery", "Ring", 3999, 4599, 10, 1493, 5),
  createData(5, "/test.webp", "Reliance Jewels 22 Kt Yellow Gold Ring", "Reliance Jewels", "Jewellery", "Ring", 3999, 4599, 10, 1493, 5),
];

const TableProduct = () => {
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
                    {/* PRODUCT column: image + text */}
                    <TableCell>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img src={row.image} alt={row.product} className="rounded-md w-[65px] h-[65px] cursor-pointer"/>
                        <div>
                          <Link to='/product' className="font-bold hover:text-[#3872fa]">{row.product}</Link>
                          <div style={{ color: "gray", fontSize: "13px" }}>{row.brand}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.subcategory}</TableCell>
                    <TableCell>
                      <div>
                        <span style={{ textDecoration: "line-through", color: "gray", marginRight: 6 }}>
                          ₹{row.oldPrice.toLocaleString()}
                        </span>
                        <br />
                        <span className="text-primary font-bold">
                          ₹{row.newPrice.toLocaleString()}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell><div className="flex gap-1 items-center"><div className="font-bold">{row.sales}</div> sale</div></TableCell>
                    <TableCell className="!text-[#3872fa] !font-bold">{row.stock}</TableCell>
                    <TableCell>
                      <Rating value={row.rating} readOnly size="small" />
                    </TableCell>
                    <TableCell>
                      <div className='flex '>
                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] hover:!bg-[#f1f1f1] !rounded-full'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-[rgba(0,0,0,0.7)] text-[20px] " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path></svg></Button>
                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] hover:!bg-[#f1f1f1] !rounded-full'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="text-[rgba(0,0,0,0.7)] text-[18px] " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"></path></svg></Button>
                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] hover:!bg-[#f1f1f1] !rounded-full'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-[rgba(0,0,0,0.7)] text-[18px] " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75Zm-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25ZM4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226L4.997 6.178Z"></path><path d="M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z"></path></svg></Button>
                      </div>
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

export default TableProduct;
