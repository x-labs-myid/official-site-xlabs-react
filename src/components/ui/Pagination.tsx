import { useMemo } from "react";

const Pagination = (
    {
        totalPages,
        totalData,
        currentPage,
        changePage
    }: {
        totalPages: number,
        totalData: number,
        currentPage: number,
        changePage: (page: number) => void
    }) => {

    const totalPagesCount = useMemo(() => {
        return Array.isArray(totalPages) ? totalPages.length : totalPages;
    }, [totalPages]);

    const pageNumbers = useMemo(() => {
        return Array.isArray(totalPages)
            ? totalPages
            : Array.from({ length: totalPagesCount }, (_, i) => i + 1);
    }, [totalPages, totalPagesCount]);

    const visiblePages = useMemo(() => {
        const total = pageNumbers.length;
        const current = currentPage;
        if (total <= 5) return pageNumbers;

        if (current <= 3) {
            return [1, 2, 3, 4, '...', total];
        } else if (current >= total - 2) {
            return [1, '...', total - 3, total - 2, total - 1, total];
        } else {
            return [1, '...', current - 1, current, current + 1, '...', total];
        }
    }, [pageNumbers, currentPage]);

    return (
        <>
            <div className="w-full flex flex-row justify-between items-center gap-2 px-1">
                <p>Total Data: {totalData}</p>
                <div className="join">
                    <button className="join-item btn" onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                    {visiblePages.map((page, index) => (
                        <button
                            key={index}
                            className={`join-item btn ${page === currentPage ? 'btn-active' : ''}`}
                            onClick={() => changePage(page)}
                        >
                            {page}
                        </button>
                    ))}
                    <button className="join-item btn" onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPagesCount}>Next</button>
                </div>
            </div>
        </>
    )
}

export default Pagination