import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Development from "./Development";
import AboutUs from "./AboutUs";
import Statistics from "./Statistics";
import Solutions from "./Solutions";
import Posts from "@/components/Posts";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { posts } from "@/mocks/posts";
import { reviews } from "@/mocks/reviews";

const HomePage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} />
            <Development scrollToRef={scrollToRef} />
            <AboutUs />
            <Statistics />
            <Solutions />
            <Posts
                className="section"
                title="ChainGrowth Last Works"
                info="We offer a wide range of custom blockchain development services, 
                but we are first of all proud of our long-lasting relations with customers 
                and repeat business which is the best recognition for us."
                posts={posts}
            />
            <JoinCommunity title="Don't just trust us, Verify." />
        </Layout>
    );
};

export default HomePage;
