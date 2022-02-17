import { AppBasedProvider } from "@components/providers";
import { Navbar } from "@components/ui/common";

export default function BaseLayout({ children, currentUser }) {
  return (
    <AppBasedProvider>
      <div className="h-screen">
        <Navbar currentUser={currentUser} />

        <div>{children}</div>
      </div>
      {/* <Footer /> */}
    </AppBasedProvider>
  );
}
