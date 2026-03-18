import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSignupNewsletter, useSubmitContactForm } from "../hooks/useQueries";

export default function Contact() {
  const submitContact = useSubmitContactForm();
  const signupNewsletter = useSignupNewsletter();

  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    message: "",
    budgetRange: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [nlEmail, setNlEmail] = useState("");
  const [nlCompany, setNlCompany] = useState("");
  const [nlDone, setNlDone] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.budgetRange) {
      toast.error("Please select a budget range.");
      return;
    }
    try {
      await submitContact.mutateAsync(form);
      setSubmitted(true);
      toast.success("Message sent! We'll be in touch within 24 hours.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signupNewsletter.mutateAsync({
        email: nlEmail,
        companyName: nlCompany,
      });
      setNlDone(true);
      toast.success("Subscribed! Welcome to the Impacto community.");
    } catch {
      toast.error("Could not subscribe. Please try again.");
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-teal-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-teal-300 text-sm font-semibold uppercase tracking-widest">
            Get in Touch
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Partner With Us
          </h1>
          <p className="text-teal-200 max-w-xl mx-auto">
            Tell us about your company and your CSR vision. We'll put together a
            custom programme proposal within 5 working days.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-4">
                Contact Details
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-muted-foreground text-sm">
                      hello@impacto.in
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-muted-foreground text-sm">
                      +91 98765 43210
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Office</p>
                    <p className="text-muted-foreground text-sm">
                      Level 4, Statesman House
                      <br />
                      Barakhamba Road
                      <br />
                      New Delhi 110001
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <Card className="shadow-card border-earth-100 bg-teal-50">
              <CardContent className="p-5">
                <h3 className="font-display text-base font-semibold mb-1 text-teal-800">
                  Stay Informed
                </h3>
                <p className="text-xs text-teal-700 mb-4">
                  Monthly impact insights and CSR trends in your inbox.
                </p>
                {nlDone ? (
                  <div
                    data-ocid="newsletter.success_state"
                    className="flex items-center gap-2 text-moss-700 text-sm"
                  >
                    <CheckCircle className="w-4 h-4" />
                    You're subscribed!
                  </div>
                ) : (
                  <form onSubmit={handleNewsletter} className="space-y-3">
                    <Input
                      placeholder="Your company"
                      value={nlCompany}
                      onChange={(e) => setNlCompany(e.target.value)}
                      data-ocid="newsletter.input"
                      className="bg-white text-sm"
                    />
                    <Input
                      type="email"
                      placeholder="Work email"
                      value={nlEmail}
                      onChange={(e) => setNlEmail(e.target.value)}
                      required
                      data-ocid="newsletter.input"
                      className="bg-white text-sm"
                    />
                    <Button
                      type="submit"
                      data-ocid="newsletter.submit_button"
                      disabled={signupNewsletter.isPending}
                      className="w-full bg-teal-700 hover:bg-teal-800 text-white text-sm"
                    >
                      {signupNewsletter.isPending ? (
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      ) : null}
                      Subscribe
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <CheckCircle className="w-16 h-16 text-moss-600 mb-5" />
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                  Thank You!
                </h2>
                <p className="text-muted-foreground max-w-md">
                  We've received your inquiry and a member of our partnerships
                  team will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Tell Us About Your Company
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={form.companyName}
                      onChange={handleChange}
                      required
                      data-ocid="contact.input"
                      placeholder="Tata Motors Ltd."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Your Name *</Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      value={form.contactName}
                      onChange={handleChange}
                      required
                      data-ocid="contact.input"
                      placeholder="Rohit Verma"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      data-ocid="contact.input"
                      placeholder="rohit@tatamotors.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      data-ocid="contact.input"
                      placeholder="+91 98XXX XXXXX"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budgetRange">Annual CSR Budget Range *</Label>
                  <Select
                    onValueChange={(val) =>
                      setForm((prev) => ({ ...prev, budgetRange: val }))
                    }
                  >
                    <SelectTrigger data-ocid="contact.select" id="budgetRange">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<10L">Below ₹10 Lakhs</SelectItem>
                      <SelectItem value="10-50L">₹10 – 50 Lakhs</SelectItem>
                      <SelectItem value="50L-1Cr">
                        ₹50 Lakhs – 1 Crore
                      </SelectItem>
                      <SelectItem value="1Cr+">Above ₹1 Crore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Tell Us Your CSR Goals</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    data-ocid="contact.textarea"
                    placeholder="What sectors are you interested in? Do you have existing NGO relationships? Any geographic preferences?"
                    rows={5}
                  />
                </div>
                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={submitContact.isPending}
                  size="lg"
                  className="w-full bg-teal-700 hover:bg-teal-800 text-white"
                >
                  {submitContact.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />{" "}
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
