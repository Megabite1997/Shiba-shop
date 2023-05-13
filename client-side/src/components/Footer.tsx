import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="mt-auto p-8 md:p-16 grid gap-10 grid-cols-2 lg:grid-cols-3 min-[320px]:text-ss md:text-sm bg-antiquewhite capitalize">
      <div>
        <h4 className="text-lg font-semibold pb-4">main manu</h4>
        <div className="grid gap-4">
          <p>products</p>
          <p>about us</p>
          <p>contact us</p>
          <p>login / register</p>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold pb-4">more info</h4>
        <div className="grid gap-4">
          <p>return & exchange policy</p>
          <p>privacy policy</p>
          <p>terms of service</p>
        </div>
      </div>
      <div className="col-span-2 xl:col-span-1">
        <h4 className="text-lg font-semibold pb-4">newsletter</h4>
        <div className="grid gap-4">
          <p>follow us to get special offers.</p>
          <div className="relative flex items-center justify-start md:w-9/12 xl:w-full">
            <input
              className="border border-slate-400 rounded-2xl p-2 pl-5 w-full"
              type="email"
              placeholder="your-email@example.com"
            />
            <button className="absolute mr-2 bg-shiba-yellow px-6 py-1 rounded-xl right-0">
              join
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
