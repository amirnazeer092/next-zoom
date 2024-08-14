import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div><figure className="md:flex bg-green-500 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/amir.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Hi, I'm Amir Nazeer, a Class 12th student at RYK IBA College.I work as a freelancer, taking on various projects and tasks to gain new skills and experiences.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Amir Nazeer
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff AI'RYK 
      </div>
    </figcaption>
  </div>
</figure></div>
    </main>
  );
}
