import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <>
      {/* <div className={styles.container}>
        <div>Home</div>
        Local Images adding
        <Image src={hero} alt="Asad Saeed" className={styles.hero} />   
        Third Party Images Adding add sites domains in next.config.js file
        <Image
          src="https://images.pexels.com/photos/17260662/pexels-photo-17260662/free-photo-of-tattoos-on-man-back.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Asad Saeed"
          height={200}
          width={300}
        />
      </div> */}{" "}
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Better design for your digital products.
          </h1>
          <p className={styles.desc}>
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <Button url="/portfolio" text="See Our Works" />
        </div>
        <div className={styles.item}>
          <Image src={Hero} alt="" className={styles.img} />
        </div>
      </div>
    </>
  );
}
