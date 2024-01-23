import React from "react";
import Listing from "./listing";
import SideNav from "../../components/SideNav";

export default function Page() {
  return (
    <div>
      <div className="flex">
        <SideNav />
        <main className=" flex-1">
          <Listing />
        </main>
      </div>
    </div>
  );
}
