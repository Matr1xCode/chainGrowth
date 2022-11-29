import { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./Details.module.sass";
import Form from "../Form";
import Socials from "@/components/Socials";

import { socials } from "@/constants/socials";

type DetailsProps = {
    scrollToRef: any;
};

const Details = ({ scrollToRef }: DetailsProps) => {
    return (
        <div className={cn("section", styles.section)}>
            <div
                className={cn("anchor", styles.anchor)}
                ref={scrollToRef}
            ></div>
            <div className={cn("container", styles.container)}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <Form />
                    </div>
                    <div className={styles.col}>
                        <div className={styles.item}>
                            <div className={styles.category}>Support</div>
                            <Link href="mailto:team@chaingrowth.io">
                                <a className={cn("h5", styles.content)}>
                                    team@chaingrowth.io
                                </a>
                            </Link>
                        </div>
                        <div className={styles.line}>
                            <div className={styles.item}>
                                <div className={styles.category}>Address 1</div>
                                <div className={cn("h5", styles.content)}>
                                    <p>Praça Marquês de Pombal 14,</p>
                                    <p>Lisbon</p>
                                    <p>Portugal</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.category}>Address 2</div>
                                <div className={cn("h5", styles.content)}>
                                    <p>TRYP by Wyndham - Barsha Heights</p>
                                    <p>Dubai</p>
                                    <p>Émirats arabes unis</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.category}></div>
                            <Link href="">
                                <a className={cn("h5", styles.content)}>
                                 
                                </a>
                            </Link>
                        </div>
                        <Socials
                            socialClassName={styles.social}
                            socials={socials}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
