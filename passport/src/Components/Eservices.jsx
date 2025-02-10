import React from "react";
import pass from "../assets/passcard.jpg";
import { NavLink } from "react-router-dom";

export default function Eservices() {
  return (
    <div>
      <p className="font-bold text-4xl m-7 text-center">
        Lets Explore E-Services
      </p>
      <div className="flex justify-center gap-10">
        {/* E-commerce Card */}
        <div className="w-80 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
          {/* Image */}
          <figure>
            <img
              src={pass}
              alt="card image"
              className="aspect-video w-full h-60"
            />
          </figure>
          {/* Body */}
          <div className="p-4">
            <header className="mb-2">
              <h3 className="text-lg font-medium text-slate-700">
                Apply for Passport
              </h3>
            </header>
            <p className="text-sm">
              Find, download, fill out and print passport forms. Apply for
              e-passport with the comfort of your own home.
            </p>
          </div>
          {/* Action button */}
          <div className="flex justify-end p-4 pt-0">
            <NavLink
              to="/apply"
              className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-4 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none cursor-pointer"
            >
              <span>Apply For E-Passport</span>
            </NavLink>
          </div>
        </div>
        {/* End E-commerce Card */}
        {/* Repeat the above block twice more for the other cards */}
        <div className="w-80 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
          <figure>
            <img
              src={pass}
              alt="card image"
              className="aspect-video w-full h-60"
            />
          </figure>
          <div className="p-4">
            <header className="mb-2">
              <h3 className="text-lg font-medium text-slate-700">
                Search Lost Password
              </h3>
            </header>
            <p className="text-sm">
              Search for the passport here. Relax, we have your digital
              information of passport. We will help you to find your passport
            </p>
          </div>
          <div className="flex justify-end p-4 pt-0">
            <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-4 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none cursor-pointer">
              <span>Search Lost Passport</span>
            </button>
          </div>
        </div>
        <div className="w-80 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
          <figure>
            <img
              src={pass}
              alt="card image"
              className="aspect-video w-full h-60"
            />
          </figure>
          <div className="p-4">
            <header className="mb-2">
              <h3 className="text-lg font-medium text-slate-700">
                Payment Methods
              </h3>
            </header>
            <p className="text-sm">
              Pay via e-sewa, khalti or mobile banking. Now you can pay for your
              service by sitting in home not worrying about the crowds.
            </p>
          </div>
          <div className="flex justify-end p-4 pt-0">
            <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-4 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none cursor-pointer">
              <span>Pay Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
