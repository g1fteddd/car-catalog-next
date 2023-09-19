import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "./Home.module.scss";
import { Titillium_Web } from "next/font/google";
import Layout from "@/components/layout/Layout";

const Home = () => {
    return (
        <Layout>
            <h1>Hello World</h1>
        </Layout>
    );
};

export default Home;
