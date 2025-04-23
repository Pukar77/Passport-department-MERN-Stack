import React from "react";
import { NavLink } from "react-router";

function Applycarts1() {
  return (
    <div>
      <article className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition-all hover:shadow-md sm:p-4 max-w-xs ]">
        <span className="inline-block rounded-sm bg-blue-600 p-1.5 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5" // Adjusted icon size
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </span>

        <a href="#">
          <h3 className=" text-2xl mt-1 font-semibold text-gray-900">
            Renewal
          </h3>
        </a>

        <p className="mt-2 text-sm text-gray-600">Passport Renewal</p>

        <NavLink
          to="/pay"
          className="group mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          Find out more
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-1 rtl:rotate-180"
          >
            &rarr;
          </span>
        </NavLink>
      </article>
    </div>
  );
}

export default Applycarts1;
