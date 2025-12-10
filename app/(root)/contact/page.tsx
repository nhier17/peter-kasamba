import { ContactForm } from "@/components/forms/ContactForm";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
    return (
        <div className="section-padding">
            <section className="relative w-full h-[300px] md:h-[420px] bg-muted overflow-hidden">
                <Image
                    src="/images/mission.jpg" 
                    alt="Missionary work in Africa"
                    fill
                    className="object-cover brightness-[0.55]"
                    priority
                />

                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                            Contact the Mission
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-white/90">
                            We'd love to hear from you. Reach out with questions, partnership inquiries, or to learn more about our work.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
                    <div className="space-y-6">
                        <h2 className="mb-6 text-3xl font-bold tracking-tight">Get in Touch</h2>
                        <Card className="shadow-lg border-0 rounded-2xl">
                            <CardContent className="p-6">
                                <h2 className="text-xl font-semibold mb-2">Mission Headquarters</h2>
                                <p className="text-muted-foreground">
                                    Bunju & Bagamoyo Baptist Church  
                                    <br /> Dar es Salaam, Tanzania
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg border-0 rounded-2xl">
                            <CardContent className="p-6">
                                <h2 className="text-xl font-semibold mb-2">Email</h2>
                                <p className="text-muted-foreground">peterkasamba.mission@gmail.com</p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg border-0 rounded-2xl">
                            <CardContent className="p-6">
                                <h2 className="text-xl font-semibold mb-2">Phone</h2>
                                <p className="text-muted-foreground">+255 713 456 789</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <Card className="shadow-xl border-0 rounded-2xl">
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
                                <ContactForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="text-center mb-12">
                    <h2 className="heading-2">Our Location</h2>
                </div>
                <Card className="shadow-xl border-0 rounded-2xl p-0">
                <CardContent className="p-0">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10166.421855229142!2d39.152216637633856!3d-6.630568286287656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185cf65ccca54e87%3A0x3562403990206299!2sBunju%2C%20Tanzania!5e0!3m2!1sen!2ske!4v1764647566197!5m2!1sen!2ske" 
                    width="100%" 
                    height="450" 
                    style={{ border: "0" }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </CardContent>
                </Card>
            </section>
        </div>
    );
}
