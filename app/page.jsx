import Link from "next/link";

export default function Home() {
  return (
    <div className="container m-auto border-2">
      <h1>Home</h1>
      <Link href="/addFriend">ADD FRIEND</Link>
    </div>
  );
}
