// import React from "react";

// const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
//   const items = [];

//   for (let i = 1; i <= totalPages; i++) {
//     items.push(i);
//   }

//   return (
//     <div className="flex items-center justify-center gap-4 py-3 px-6">
//       {items.length > 0 &&
//         items.map((item) => (
//           <span
//             onClick={() => setCurrentPage(item)}
//             key={item}
//             className={`h-10 w-10 rounded-lg  bg-[#FBFAFC]  hover:border flex items-center justify-center hover:border-primary-dark hover:text-primary-dark text-sm font-semibold cursor-pointer ${
//               item === currentPage
//                 ? "border-primary-dark text-primary-dark border"
//                 : ""
//             }  `}
//           >
//             {item}
//           </span>
//         ))}
//       {items.length > 0 && (
//         <span
//           onClick={() => {
//             if (currentPage < items.length) {
//               setCurrentPage((prev) => prev + 1);
//             }
//           }}
//           className="bg-primary-dark text-white text-sm font-semibold px-5 py-2 rounded-lg cursor-pointer"
//         >
//           Next
//         </span>
//       )}
//     </div>
//   );
// };

// export default Pagination;

// TODO
import React from "react";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const maxPagesToShow = 4;
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const items = [];
  for (let i = startPage; i <= endPage; i++) {
    items.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-4 py-3 px-6">
      <span
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
          }
        }}
        className={`bg-primary-dark text-white text-sm font-semibold px-5 py-2 rounded cursor-pointer select-none ${
          currentPage > 1 ? "block" : "hidden"
        }`}
      >
        Prev
      </span>

      {items.length > 0 &&
        items.map((item) => (
          <span
            onClick={() => setCurrentPage(item)}
            key={item}
            className={`h-10 w-10 rounded bg-[#FBFAFC] hover:border select-none flex items-center justify-center hover:border-primary-dark hover:text-primary-dark text-sm font-semibold cursor-pointer ${
              item === currentPage
                ? "border-primary-dark text-primary-dark border"
                : ""
            }`}
          >
            {item}
          </span>
        ))}

      <span
        onClick={() => {
          if (currentPage < totalPages) {
            setCurrentPage((prev) => prev + 1);
          }
        }}
        className="bg-primary-dark text-white text-sm font-semibold px-5 py-2 rounded cursor-pointer select-none"
      >
        Next
      </span>
    </div>
  );
};

export default Pagination;
