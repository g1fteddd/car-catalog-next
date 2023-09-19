import Layout from "@/components/layout/Layout";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NotFound: NextPage = () => {
    const router = useRouter();
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            router.push("/");
        }, 2000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    // TODO: 1:03:30
    return (
        <Layout>
            <Head>
                <title>Not found</title>
            </Head>
            <div style={{ textAlign: "center" }}>
                <Image
                    src="/404.png"
                    alt="404 image"
                    width="500"
                    height="220"
                />
            </div>
        </Layout>
    );
};

export default NotFound;
