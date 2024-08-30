import React from "react";
import "./index.css";
import Logo from "./assets/logo.jpg";

function App() {
  const sites = [
    {
      title: "Site 1",
      link: "https://site1.com",
      borderColor: "border-red-600",
    },
    {
      title: "Site 2",
      link: "https://site2.com",
      borderColor: "border-gray-700",
    },
    {
      title: "Site 3",
      link: "https://site3.com",
      borderColor: "border-red-600",
    },
    {
      title: "Site 4",
      link: "https://site4.com",
      borderColor: "border-gray-700",
    },
    {
      title: "Site 5",
      link: "https://site5.com",
      borderColor: "border-red-600",
    },
    {
      title: "Site 6",
      link: "https://site6.com",
      borderColor: "border-gray-700",
    },
    {
      title: "Site 7",
      link: "https://site7.com",
      borderColor: "border-red-600",
    },
    {
      title: "Site 8",
      link: "https://site8.com",
      borderColor: "border-gray-700",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <header className="max-w-7xl mx-auto text-center py-6">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className=" h-24" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800">INTERCLASSE</h1>
        <p>Escolha o melhor site.</p>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sites.map((site, index) => (
          <div
            key={index}
            onClick={() => window.open(site.link, "_blank")}
            className={`p-6 border-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer text-gray-800 bg-white ${site.borderColor}`}
          >
            <h2 className="text-2xl font-semibold mb-4">{site.title}</h2>
          </div>
        ))}
      </main>

      <footer className="max-w-7xl mx-auto text-center mt-12">
        <a
          href="https://forms.google.com/your-form-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300"
        >
          Clique aqui para votar
        </a>
      </footer>
    </div>
  );
}

export default App;
