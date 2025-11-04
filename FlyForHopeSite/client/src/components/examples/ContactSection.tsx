import ContactSection from '../ContactSection';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function ContactSectionExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContactSection />
    </QueryClientProvider>
  );
}
