// A collection of simple SVG icons for technologies.
// In a real app, you might use a library like `react-icons` or SVGR.

export const Icons = {
    React: () => (
      <svg viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-500">
        <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="10" ry="4.5"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
        </g>
      </svg>
    ),
    NextJS: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        className="w-full h-full"
      >
        <circle cx="64" cy="64" r="64" fill="black"></circle>
        <path
          fill="white"
          d="M82.16 37.32h11.9v53.36h-11.9zM62.66 37.32L37.22 74.88v15.8h25.44V74.88l13.5-18.96z"
        ></path>
      </svg>
    ),
    NodeJS: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-full h-full"
      >
        <path fill="#8CC84B" d="M89.7,46.3L53.4,27.7c-2.3-1.2-5-1.2-7.3,0L9.8,46.3c-2.3,1.2-3.8,3.7-3.8,6.3v36.7c0,2.6,1.5,5.1,3.8,6.3l36.3,18.6c2.3,1.2,5,1.2,7.3,0l36.3-18.6c2.3-1.2,3.8-3.7,3.8-6.3V52.7C93.5,50,92,47.5,89.7,46.3z M50.4,10.3L50.4,10.3c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1L12.5,29.8c-0.2,0.1-0.3,0.2-0.3,0.4v40.1c0,0.2,0.1,0.3,0.3,0.4l37.2,19.5c0.2,0.1,0.4,0.1,0.6,0l37.2-19.5c0.2-0.1,0.3-0.2,0.3-0.4V30.2c0-0.2-0.1-0.3-0.3-0.4L51,10.3C50.8,10.2,50.6,10.2,50.4,10.3z" />
        <path fill="#FFFFFF" d="M49.8,1.4L11.5,21.5C9,22.8,7.5,25.4,7.5,28.2v43.6c0,2.8,1.6,5.3,4,6.7l38.2,20.1c2.4,1.3,5.2,1.3,7.6,0l38.2-20.1c2.4-1.3,4-3.8,4-6.7V28.2c0-2.8-1.6-5.3-4-6.7L57.4,1.4C55,0,52.2,0,49.8,1.4z M50,10.4l37.5,19.6v39.9L50,89.5V10.4z" />
      </svg>
    ),
    MongoDB: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-full h-full"
      >
        <path fill="#4DB33D" d="M50,10C27.9,10,10,27.9,10,50s17.9,40,40,40s40-17.9,40-40S72.1,10,50,10z M55.4,75.9c-5.4,2.3-11.4,1.9-16.5-0.8C35,73,32.3,69.5,32,65.6c-1.1-13.6,7.9-25.9,20.2-29.4c0.5-0.1,1,0,1.5,0.1c-1.1,2.8-1.5,5.8-1,8.8c0.7,4.3,2.9,8.1,6.2,10.9c0.9,0.8,1.9,1.5,2.9,2c-3.1,1.5-6.5,2.3-10,2.2c-5.1-0.2-9.7-2.6-13.1-6.1c-0.8-0.9-1.5-1.9-2.1-2.9c-0.3,2,0,4,0.8,5.9c1.6,3.6,4.6,6.3,8.3,7.5c4.7,1.5,9.8,0.9,14.1-1.3C61.4,63.1,59.3,69.7,55.4,75.9z" />
      </svg>
    ),
    Express: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-full h-full"
      >
        <rect width="100" height="100" rx="15" fill="#303030"></rect>
        <path fill="white" d="M12 40h76v10H12zm0 15h76v10H12z"></path>
        <text
          x="50"
          y="32"
          fontFamily="Arial, sans-serif"
          fontSize="24"
          fill="white"
          textAnchor="middle"
        >
          Express
        </text>
      </svg>
    ),
    TailwindCSS: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className="w-full h-full"
      >
        <path
          fill="#38bdf8"
          d="M10 15c-3.3 0-5.5-1.9-5.5-4.5c0-2.6 2.2-4.5 5.5-4.5c1.7 0 3.2.8 4.2 2.1l-1.5 1.1c-.7-.8-1.6-1.4-2.7-1.4c-1.9 0-3.1 1.2-3.1 2.7c0 1.5 1.2 2.7 3.1 2.7c1.1 0 2-.6 2.7-1.4l1.5 1.1c-1 1.3-2.5 2.1-4.2 2.1z"
        ></path>
      </svg>
    ),
    TypeScript: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="w-full h-full"
      >
        <path fill="#3178c6" d="M0 0h48v48H0z" />
        <path fill="#fff" d="M22.5 20.3h-4.8V35h-3.4V20.3h-4.8v-2.8h13zM37.5 26.5c0-2-1.2-3.3-3.3-3.3s-3.3 1.3-3.3 3.3v6h-3.4V20.3h3.4v1.8c.8-1.4 2.1-2.2 3.8-2.2 3.3 0 5.2 2.3 5.2 5.5v7.1h-3.4v-6zm-3.3-1c0-.4-.3-.7-.9-.7s-.9.3-.9.7v1.9h1.8v-1.9z" />
      </svg>
    ),
    Firebase: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-full h-full"
      >
        <path fill="#FFCA28" d="M13.8,79.6l3.4-22.3L40.7,79l-26.9,0.6z" />
        <path fill="#FFA000" d="M50,11.8L13.8,79.6h26.9L50,52.3L50,11.8z" />
        <path fill="#F57C00" d="M50,11.8l20.5,14.6l-9.1,25.9L50,52.3V11.8z" />
        <path fill="#FFC107" d="M50,52.3l-9.3,26.7h26.9L86.2,21.5L50,52.3z" />
      </svg>
    ),
  };