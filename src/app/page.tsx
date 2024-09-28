import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Image
        src="https://www.cevinius.com/wp-content/uploads/2015/10/Breadboard-JumperToSensors.jpg"
        alt="background"
        fill
      />
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl bg-black bg-opacity-50">
        Welcome to Arduino data broadcaster
      </div>
    </div>
  );
}
