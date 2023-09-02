"use client";

import Link from "next/link";

const StatsPage = () => {
  return (
    <>
      <h1>Stats Page</h1>

      <Link href="/dashboard/overview">overview</Link>
      <Link href="/">root</Link>
    </>
  );
};

export default StatsPage;
