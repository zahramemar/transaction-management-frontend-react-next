import "tailwindcss/tailwind.css";
import "tailwindcss/screens.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="transition-all">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
