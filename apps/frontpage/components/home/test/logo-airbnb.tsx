import React from "react";

interface Props {
  className?: string;
}

export function LogoAirbnb(props: Props) {
  return (
    <svg
      fill="none"
      height="32"
      viewBox="0 0 120 40"
      width="96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)">
        <path
          d="M63.243 10.684a2.432 2.432 0 0 1-2.437 2.437 2.432 2.432 0 0 1-2.436-2.437c0-1.35 1.05-2.436 2.436-2.436 1.387.037 2.437 1.124 2.437 2.437Zm-10.047 4.911v.6s-1.162-1.5-3.636-1.5c-4.087 0-7.273 3.112-7.273 7.423 0 4.274 3.149 7.423 7.273 7.423 2.511 0 3.636-1.537 3.636-1.537v.637c0 .3.225.525.525.525h3.037V15.071H53.72c-.3 0-.525.262-.525.524Zm0 9.035c-.562.825-1.687 1.537-3.036 1.537-2.4 0-4.237-1.5-4.237-4.049 0-2.549 1.837-4.048 4.236-4.048 1.313 0 2.512.75 3.037 1.537v5.023Zm5.81-9.56h3.6v14.096h-3.6V15.071Zm53.759-.374c-2.474 0-3.636 1.5-3.636 1.5v-7.91h-3.599v20.88h3.036c.3 0 .525-.262.525-.525v-.637s1.162 1.537 3.636 1.537c4.087 0 7.273-3.149 7.273-7.423 0-4.273-3.186-7.422-7.235-7.422Zm-.6 11.434c-1.387 0-2.474-.713-3.036-1.537v-5.024c.562-.75 1.762-1.537 3.036-1.537 2.399 0 4.236 1.5 4.236 4.049 0 2.55-1.837 4.049-4.236 4.049Zm-8.51-5.324v8.398h-3.599v-7.985c0-2.325-.75-3.262-2.774-3.262-1.087 0-2.212.563-2.924 1.387v9.822H90.76V15.071h2.85c.3 0 .524.262.524.524v.6c1.05-1.087 2.437-1.5 3.824-1.5 1.575 0 2.887.45 3.936 1.35 1.275 1.05 1.762 2.4 1.762 4.761Zm-21.63-6.11c-2.475 0-3.637 1.5-3.637 1.5v-7.91H74.79v20.88h3.037c.3 0 .525-.262.525-.525v-.637s1.162 1.537 3.636 1.537c4.086 0 7.273-3.149 7.273-7.423.037-4.273-3.15-7.422-7.235-7.422Zm-.6 11.434c-1.387 0-2.474-.713-3.037-1.537v-5.024c.563-.75 1.762-1.537 3.037-1.537 2.399 0 4.236 1.5 4.236 4.049 0 2.55-1.837 4.049-4.236 4.049Zm-9.747-11.434c1.087 0 1.65.187 1.65.187v3.337s-3-1.013-4.874 1.124v9.86h-3.6V15.07h3.037c.3 0 .525.262.525.524v.6c.675-.787 2.137-1.5 3.262-1.5ZM34.302 27.892c-.188-.45-.375-.938-.562-1.35-.3-.675-.6-1.312-.863-1.912l-.037-.037a391.33 391.33 0 0 0-8.285-16.945l-.112-.225c-.3-.562-.6-1.162-.9-1.762-.375-.675-.75-1.387-1.35-2.062-1.2-1.5-2.924-2.324-4.76-2.324-1.875 0-3.562.825-4.8 2.25-.562.674-.974 1.386-1.349 2.061-.3.6-.6 1.2-.9 1.762l-.112.225c-2.887 5.623-5.698 11.321-8.285 16.945l-.037.075c-.263.6-.563 1.237-.863 1.912a24.68 24.68 0 0 0-.562 1.35c-.487 1.386-.637 2.698-.45 4.048a7.967 7.967 0 0 0 4.874 6.223c.974.412 1.987.6 3.036.6.3 0 .675-.038.975-.075a9.903 9.903 0 0 0 3.749-1.275c1.537-.862 2.999-2.1 4.648-3.899 1.65 1.8 3.15 3.037 4.649 3.9a9.903 9.903 0 0 0 3.749 1.274c.3.037.674.075.974.075 1.05 0 2.1-.188 3.037-.6 2.624-1.05 4.461-3.449 4.873-6.223.3-1.312.15-2.624-.337-4.011ZM17.395 29.84c-2.025-2.55-3.337-4.949-3.787-6.973-.187-.862-.225-1.612-.112-2.287.075-.6.3-1.124.6-1.574.712-1.012 1.912-1.65 3.299-1.65s2.624.6 3.299 1.65c.3.45.525.975.6 1.574.112.675.075 1.462-.113 2.287-.45 1.987-1.762 4.386-3.786 6.973Zm14.958 1.762a5.57 5.57 0 0 1-3.412 4.386c-.9.375-1.874.487-2.849.375-.937-.112-1.874-.412-2.85-.975-1.349-.75-2.698-1.912-4.273-3.636 2.474-3.037 3.974-5.81 4.536-8.285.263-1.162.3-2.212.188-3.186a6.084 6.084 0 0 0-1.012-2.55c-1.163-1.687-3.112-2.661-5.286-2.661-2.175 0-4.124 1.012-5.286 2.661a6.084 6.084 0 0 0-1.012 2.55 7.785 7.785 0 0 0 .187 3.186c.563 2.474 2.1 5.286 4.536 8.322-1.537 1.725-2.924 2.887-4.273 3.637-.975.562-1.912.862-2.85.974a5.996 5.996 0 0 1-2.849-.375 5.57 5.57 0 0 1-3.411-4.386 6.206 6.206 0 0 1 .337-2.924c.113-.375.3-.75.488-1.2.262-.6.562-1.236.862-1.874l.037-.075A409.856 409.856 0 0 1 12.41 8.735l.112-.225c.3-.562.6-1.162.9-1.724.3-.6.637-1.162 1.05-1.65.787-.9 1.837-1.387 2.999-1.387 1.162 0 2.212.487 2.999 1.387.412.488.75 1.05 1.05 1.65.3.562.6 1.162.9 1.724l.112.225a497.251 497.251 0 0 1 8.21 16.87v.037c.3.6.562 1.275.862 1.875.187.45.375.824.487 1.2.3.974.412 1.911.263 2.886Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 .2h120v40H0z" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}
