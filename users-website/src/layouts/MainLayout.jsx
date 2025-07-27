import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function MainLayout() {

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white">
      <Header />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
