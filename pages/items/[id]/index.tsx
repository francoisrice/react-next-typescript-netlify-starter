import * as React from "react";
import { useRouter } from 'next/router';

export default function() {
  const router = useRouter();

  return (
    <div>
      <h1>Item Show</h1>
      <h1>{router.query.id}</h1>
    </div>
  );
};