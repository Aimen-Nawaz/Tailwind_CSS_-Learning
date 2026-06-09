import React from "react";
import { usePage } from "../context/PageContext";
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const PaginationComp = () => {
  const { page, setPage, skip, setSkip, limit, setLimit, total } = usePage();

  const handlePrev = () => {
    setPage((prev) => prev - 1);
    setSkip((prev) => prev - limit);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
    setSkip((prev) => prev + limit);
  };

  const isPrevDisabled = page === 1;
  const isNextDisabled = skip + limit >= total;

  return (



    <div className="flex items-center justify-between gap-4 text-white">
      <Field orientation="horizontal" className="w-fit">
        <FieldLabel htmlFor="select-rows-per-page">Rows per page</FieldLabel>
        <Select value={`${limit}`} onValueChange={(value) => setLimit(Number(value))}>
          <SelectTrigger className="w-20" id="select-rows-per-page">
            <SelectValue />
          </SelectTrigger>
          <SelectContent
            align="start"
            className="bg-slate-100 border border-slate-700 rounded-xl shadow-lg p-1"
          >
            <SelectGroup className="p-1 space-y-1">
              <SelectItem className="rounded-lg px-2 hover:bg-blue-500 transition" value="10">10</SelectItem>
              <SelectItem className="rounded-lg px-2 hover:bg-blue-500 transition" value="25">25</SelectItem>
              <SelectItem className="rounded-lg px-2 hover:bg-blue-500 transition" value="50">50</SelectItem>
              <SelectItem className="rounded-lg px-2 hover:bg-blue-500 transition" value="100">100</SelectItem>
            </SelectGroup>
          </SelectContent>
           </Select>
      </Field>
      <Pagination className="mx-0 w-auto">
        <PaginationContent className="flex items-center gap-3">

          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrev}
              disabled={isPrevDisabled}
              className="
          rounded-xl
          bg-slate-800
          text-white
          border border-slate-700
          hover:bg-slate-700
          hover:scale-105
          transition-all
          duration-300
          shadow-md
        "
            />
          </PaginationItem>

          <PaginationItem>
            <div
              className="
          h-11 w-11
          flex items-center justify-center
          rounded-full
          bg-linear-to-r
          from-violet-600
          to-indigo-600
          text-white
          font-bold
          shadow-lg
          shadow-violet-500/30
        "
            >
              {page}
            </div>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              onClick={handleNext}
              disabled={isNextDisabled}
              className="
          rounded-xl
          bg-slate-800
          text-white
          border border-slate-700
          hover:bg-slate-700
          hover:scale-105
          transition-all
          duration-300
          shadow-md
        "
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComp;