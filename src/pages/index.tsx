import Head from "next/head";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
    return (
        <Layout>
            <Head>
                <title>Necro Cult Zine | Home</title>
            </Head>

            <BasicMeta url={"/"} />
            <OpenGraphMeta url={"/"} />
            <TwitterCardMeta url={"/"} />

            <section className="heroSection">
                <div className="heroInner container">

                    <div className="heroContent">
                        <h1>Necro Cult Zine Blog Template</h1>
                        <p>
                            Blog/Main Site Template for Necro Cult Zine.  Uses Next.js and Netlify.  
                            <br/><br/>
                            Original Next.js template: <span className="handle">@nextjs-netlify-blog</span>
                        </p>

                        <SocialList />
                    </div>

                </div>
            </section>

            

            <section>
                <div className="container">

                </div>
            </section>

        </Layout>
    );
}
