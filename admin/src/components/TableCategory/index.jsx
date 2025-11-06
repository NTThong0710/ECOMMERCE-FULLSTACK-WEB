import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button, Dialog } from "@mui/material";
import Chip from '@mui/material/Chip';

const columns = [
  { id: "image", label: "IMAGE", minWidth: 300 },
  { id: "image", label: "CATEGORY NAME", minWidth: 300 },
  { id: "action", label: "ACTION", minWidth: 100 },
];

function createData(id,name, image) {
  return { id,name, image };
}

const rows = [
  createData(1,"Electronics","https://serviceapi.spicezgold.com/download/1755503364377_1721277298204_banner.jpg"),
  createData(2,"Fashion","/logo.jpg"),
  createData(3,"Home anh Living","/banner3.jpg"),
  createData(4,"Book","/banner4.jpg"),
];

const TableCategory = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setCurrentIndex(null);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : rows.length - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < rows.length - 1 ? prev + 1 : 0
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} style={{ minWidth: 300 }}>
                  <div className="font-bold">{column.label}</div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={row.id} hover>
                  {/* IMAGE */}
                  <TableCell>
                    <img
                      src={row.image}
                      alt={`banner-${row.id}`}
                      className="rounded-md w-[45%] h-auto cursor-pointer"
                      onClick={() => handleOpen(index)}
                    />
                  </TableCell>

                  <TableCell>
                    <Chip label={row.name} color="primary" />
                  </TableCell>

                  {/* ACTION */}
                  <TableCell>
                    <div className="flex gap-2">
                      <Button className='!w-[35px] !h-[35px] !min-w-[35px] hover:!bg-[#f1f1f1] !rounded-full'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-[rgba(0,0,0,0.7)] text-[20px] " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path></svg></Button>
                        <Button className='!w-[35px] !h-[35px] !min-w-[35px] hover:!bg-[#f1f1f1] !rounded-full'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="text-[rgba(0,0,0,0.7)] text-[18px] " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"></path></svg></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
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

      {/* Dialog preview */}
      <Dialog fullScreen open={open} onClose={handleClose}>
        <div className="relative w-full h-full bg-black flex items-center justify-center">
          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-4 text-white p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Image */}
          {currentIndex !== null && (
            <img
              src={rows[currentIndex].image}
              alt="preview"
              className="max-h-[90%] max-w-[90%] object-contain"
            />
          )}

          {/* Next */}
          <button
            onClick={handleNext}
            className="absolute right-4 text-white p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default TableCategory;
