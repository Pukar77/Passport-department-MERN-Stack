import React from "react";
import pass from "../assets/passcard.jpg";
import { NavLink } from "react-router-dom";

export default function Eservices() {
  return (
    <div className="px-4 py-8">
      <p className="font-bold text-3xl md:text-4xl mb-10 text-center">
        Let's Explore E-Services
      </p>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-10">
        {/* Card Component */}
        {[
          {
            title: "Apply for Passport",
            description:
              "Find, download, fill out and print passport forms. Apply for e-passport with the comfort of your own home.",
            button: "Apply For E-Passport",
            link: "/apply",
          },
          {
            title: "Search Lost Passport",
            description:
              "Search for the passport here. Relax, we have your digital information of passport. We will help you to find your passport.",
            button: "Search Lost Passport",
            link: "/search",
          },
          {
            title: "Payment Methods",
            description:
              "Pay via e-sewa, Khalti or mobile banking. Now you can pay for your service from home, avoiding the crowds.",
            button: "Renew Passport",
            link: "/pay",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="w-full max-w-xs overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200"
          >
            <figure>
              <img
                src={pass}
                alt="card image"
                className="aspect-video w-full h-60 object-cover"
              />
            </figure>
            <div className="p-4">
              <header className="mb-2">
                <h3 className="text-lg font-medium text-slate-700">
                  {card.title}
                </h3>
              </header>
              <p className="text-sm">{card.description}</p>
            </div>
            <div className="flex justify-end p-4 pt-0">
              <NavLink
                to={card.link}
                className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-4 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none cursor-pointer"
              >
                <span>{card.button}</span>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
