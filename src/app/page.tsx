import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Home() {
  const something = false;
  return (
    <div className={cn(something ? "text-red-500" : "text-blue-500")}>
      hello
      <Button className="cursor-pointer">Click me</Button>
    </div>
  );
}
