export default function Footer() {
  return (
    <footer className="bg-primary text-white py-xl">
      <div className="max-w-[1440px] mx-auto px-margin flex flex-col md:flex-row justify-between items-start gap-md">
        <div className="flex flex-col gap-sm">
          <span className="font-headline text-2xl font-semibold">TRANSIT OPS</span>
          <p className="font-utility text-[13px] opacity-70">
            NGUYEN THI THAO NHI · HO CHI MINH CITY · 2024
          </p>
        </div>
        <div className="flex gap-lg font-utility text-[13px] uppercase opacity-70">
          <a className="hover:opacity-100 transition-opacity" href="#">
            TERMINALS
          </a>
          <a className="hover:opacity-100 transition-opacity" href="#">
            DATA POLICY
          </a>
          <a className="hover:opacity-100 transition-opacity" href="#">
            EN ROUTE
          </a>
        </div>
        <p className="font-utility text-[13px] uppercase opacity-50 max-w-xs text-right">
          © 2024 TRANSIT OPS. ALL RIGHTS RESERVED. TIMEZONE: GMT+7.
        </p>
      </div>
    </footer>
  )
}
