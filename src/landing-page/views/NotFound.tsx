import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Halaman Tidak Ditemukan | X-LABS.my.id</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 text-center p-4">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Halaman tidak ditemukan</h2>
        <p className="text-lg text-base-content/70 mb-8 max-w-md">
          Maaf, halaman yang Anda cari tidak tersedia atau mungkin telah
          dipindahkan.
        </p>
        <button
          onClick={() => navigate("/")}
          className="btn btn-primary btn-lg rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Kembali ke Beranda
        </button>
      </div>
    </>
  );
};

export default NotFound;
