import { Footer, Navbar } from "@/components";

export default function CarsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative">{children}</div>;
}
