function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-100 mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
        <div>© Mehmaan Hub Platform. All rights reserved.</div>

        <div className="flex items-center gap-6 font-medium">
          <span className="hover:text-neutral-600 cursor-pointer">
            Privacy Terms
          </span>

          <span className="hover:text-neutral-600 cursor-pointer">
            Local Regulations
          </span>

          <span className="hover:text-neutral-600 cursor-pointer">
            Support Hub
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;