"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTRPC } from "./api/trpc/client";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const trpc = useTRPC();
  const { data: users } = useQuery(trpc.getUsers.queryOptions());

  const something = false;
  return (
    <div className={cn(something ? "text-red-500" : "text-blue-500")}>
      hello
      <Button className="cursor-pointer">Click me</Button>
      {users?.map((user) => (
        <div key={user.id}>{user.email}</div>
      ))}
    </div>
  );
}
