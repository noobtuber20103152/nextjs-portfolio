// import SingleProject from "@/components/projects/singleProject";
import SingleProject from "../components/projects/singleProject";
// import { data } from "@/data/data";
import { data } from "../components/projects/data";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import PageNotFound from "../components/404";

function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  const filterData = data.filter((e) => {
    if (e.route === slug) return e;
  })[0];
  console.log(filterData);
  return (
    <>
      <Head>
        <title>{slug?.split("-")?.join(" ")}</title>
      </Head>
      {filterData ? <SingleProject data={filterData} /> : <PageNotFound />}
    </>
  );
}

export default Slug;
