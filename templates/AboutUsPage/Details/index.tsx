import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import cn from "classnames";
import styles from "./Details.module.sass";
import Image from "@/components/Image";

type DetailsProps = {
    scrollToRef: any;
};

const Details = ({ scrollToRef }: DetailsProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("anchor", styles.anchor)} ref={scrollToRef}></div>
        <div className={cn("container", styles.container)}>
            <div className={styles.details}>
                <div className={styles.counter}>22</div>
                <div className={cn("h4", styles.info)}>experts in their fields</div>
            </div>
            <div className={styles.wrap}>
                <div className={cn("content", styles.content)}>
                    <h2>Scaling solutions, amplified</h2>
                    <h3>At your service, every step of the way.</h3>
                    <p>
                    Our experienced team uncovers new trends and gems in the web3 ecosystem to help brands take advantage of this digital revolution.
                    </p>
                    <p>
                    We value a great working relationship with our clients above all else.
                    </p>
                </div>
                <Link href="/contact">
                    <a className={cn("button", styles.button)}>
                        <span>contact us</span>
                    </a>
                </Link>
            </div>
            <Parallax
                className={styles.image}
                speed={1}
                easing="easeInQuad"
                rotate={[2, -15]}
            >
                <Image
                    src="/images/figures/figure-7.png"
                    layout="fill"
                    alt="Figure"
                />
            </Parallax>
        </div>
    </div>
);

export default Details;
