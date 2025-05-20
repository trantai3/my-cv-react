import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

interface PaginationState {
  currentPage: number;
  pageSize: number;
  total: number;
  handlePageChange: (page: number) => void;
  handlePageSizeChange: (size: number) => void;
  updateTotal: (totalRecords: number) => void;
}

const usePagination = (initialPageSize: number = 10): PaginationState => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(initialPageSize);
  const [total, setTotal] = useState<number>(0);

  // Initialize from URL params
  useEffect(() => {
    const page = searchParams.get('page');
    const size = searchParams.get('pageSize');
    
    if (page) setCurrentPage(Number(page));
    if (size) setPageSize(Number(size));
  }, [searchParams]);

  // Update URL when pagination changes
  useEffect(() => {
    setSearchParams(prev => {
      prev.set('page', currentPage.toString());
      prev.set('pageSize', pageSize.toString());
      return prev;
    });
  }, [currentPage, pageSize, setSearchParams]);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size: number): void => {
    setPageSize(size);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  const updateTotal = (totalRecords: number): void => {
    setTotal(totalRecords);
  };

  return {
    currentPage,
    pageSize,
    total,
    handlePageChange,
    handlePageSizeChange,
    updateTotal,
  };
};

export default usePagination; 