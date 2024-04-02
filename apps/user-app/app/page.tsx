import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";


export default function Page(): JSX.Element {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
    <div className="bg-black  text-9xl rounded-full p-20 text-white">
        paytm karo <br />
        India's best payment app!!
    </div>
</div>
  );
}
