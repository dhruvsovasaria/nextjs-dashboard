// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
// export default inter;
import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";

const lustiana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });
export { inter, lustiana };
