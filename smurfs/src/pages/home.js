import React from "react";

import SmurfsList from "../components/smurfs-list";

export default function HomePage() {
  return (
    <main className="flex flex-col w-3/4 mx-auto items-center">
      <h1 className="text-4xl font-extrabold text-blue-500 text-center my-12">
        Welcome to the Smurf Village
      </h1>

      <SmurfsList />
    </main>
  );
}
