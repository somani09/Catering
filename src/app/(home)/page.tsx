import Image from "next/image";
import styles from "./home.module.scss";
import background from "../../../public/svg/background_food.svg";
import ServiceBar from "./serviceBar";
import Dishes from "./dishes";
import Reviews from "./reviews";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center relative w-full ${styles.home}`}
    >
      <div className={`${styles.image} w-full relative`}>
        <Image
          src={background}
          alt="Your SVG"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <ServiceBar />
      <Dishes />
      <Reviews />
    </main>
  );
}
